import { MigrationModule } from '@kontent-ai/cli'
import KontentService from './services/KontentService'
import { UmlpModel } from './models'
import { ManagementClient } from '@kontent-ai/management-sdk'
import { IContentItem } from '@kontent-ai/delivery-sdk'

const migration: MigrationModule = {
  order: 9,
  run: async (apiClient: ManagementClient) => {
    console.log('⚡️ Fetching all codenames...')
    const umlpAllowedItemsIds = (
      await apiClient.viewContentType().byTypeCodename('umlp').toPromise()
    ).data.elements
      .find((element) => element.codename === 'content')
      ['allowed_content_types'].map((entry) => entry.id)

    const umlpAllowedItemsCodenames = []

    for await (const id of umlpAllowedItemsIds) {
      const itemCodename = (
        await apiClient.viewContentType().byTypeId(id).toPromise()
      ).data.codename

      umlpAllowedItemsCodenames.push(itemCodename)
    }

    const usedItemsCodenames = (
      await KontentService.Instance()
        .deliveryClient.item<UmlpModel>('visual_guide_for_umlps')
        .toPromise()
    ).data.item.elements.content.linkedItems.map((item) => item.system.type)

    // INFO: Codenames of all items that are available for UMLP, but not used on the VISUAL GUIDE page
    const UNUSED_ITEMS = umlpAllowedItemsCodenames
      .filter((codename) => !usedItemsCodenames.includes(codename))
      .sort()

    console.log('⚡️ Fetching all unused content items for UMLP...')
    const items: IContentItem[] = []
    for await (const codename of UNUSED_ITEMS) {
      try {
        const item = (
          await KontentService.Instance()
            .deliveryClient.items<IContentItem>()
            .type(codename)
            .limitParameter(1)
            .toPromise()
        ).data.items[0]

        items.push(item)
      } catch (error) {
        console.log(`⚡️ ${codename} - No published item of this type found!`)
      }
    }

    console.log('⚡️ Upserting items to UMLP...')

    const transformedItems = items
      .filter((item) => item !== undefined)
      .map((item) => {
        return {
          codename: item.system.codename,
        }
      })

    console.log(`⚡️ Found ${transformedItems.length} items!`)

    console.log('⚡️ Upserting items to UMLP...')
    await apiClient
      .upsertLanguageVariant()
      .byItemCodename('_test____component_guide_2')
      .byLanguageCodename('default')
      .withData((builder) => {
        return {
          elements: [
            builder.linkedItemsElement({
              element: {
                codename: 'content',
              },
              value: [...transformedItems],
            }),
          ],
        }
      })
      .toPromise()
  },
}

export default migration
