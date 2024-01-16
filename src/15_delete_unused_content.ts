import { MigrationModule } from '@kontent-ai/cli'
import { ManagementClient } from '@kontent-ai/management-sdk'
import KontentService from './services/KontentService'

const migration: MigrationModule = {
  order: 15,
  run: async (apiClient: ManagementClient) => {
    const items = (
      await KontentService.Instance(true)
        .deliveryClient.items()
        .equalsFilter('system.workflow_step', 'ready_to_be_deleted')
        .toPromise()
    ).data.items

    // 12 UMLPs
    console.log(items.length, 'items')

    // Loop through the items and delete each one
    // const promises = items.map((item) => {
    //   return apiClient
    //     .deleteContentItem()
    //     .byItemCodename(item.system.codename)
    //     .toPromise()
    // })

    // await Promise.all(promises)

    // for (const item of items) {
    //   await apiClient
    //     .deleteContentItem()
    //     .byItemCodename(item.system.codename)
    //     .toPromise()
    // }
  },
}

export default migration
