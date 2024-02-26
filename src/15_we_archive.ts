import { MigrationModule } from '@kontent-ai/cli'
import { ManagementClient } from '@kontent-ai/management-sdk'
import KontentService from './services/KontentService'
import { contentTypes } from './models'

const forFutureUse = [
  'better-content-modeling',
  'core-elements-of-a-sustainable-and-effective-content-hub',
  'foundation-for-success-content-governance',
  'getting-started-with-taxonomy',
  'how-content-models-bring-value-to-customer-engagement',
  'modular-content-for-content-creators',
  'seo-for-the-modern-marketer',
]

const migration: MigrationModule = {
  order: 15,
  run: async (apiClient: ManagementClient) => {
    // *57* slugs in total
    const items = (
      await KontentService.Instance()
        .deliveryClient.items()
        .types([contentTypes.event.codename, contentTypes.webinar.codename])
        .inFilter(`elements.url_slug`, forFutureUse)
        .toPromise()
    ).data.items

    console.log(`Found ${items.length} items to archive`)

    for await (const item of items) {
      try {
        await apiClient
          .updateContentItem()
          .byItemCodename(item.system.codename)
          .withData({
            name: `[FOR FUTURE USE] - ${item.system.name}`,
          })
          .toPromise()

        console.log(`Successfully updated - ${item.system.name}`)
      } catch (error) {
        console.error(`Error in a post ${item.system}: ${error.message}`)
      }
    }
  },
}

export default migration
