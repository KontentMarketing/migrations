import { MigrationModule } from '@kontent-ai/cli'
import { ManagementClient } from '@kontent-ai/management-sdk'
import KontentService from './services/KontentService'

const migration: MigrationModule = {
  order: 1,
  run: async (apiClient: ManagementClient) => {
    const items = (
      await KontentService.Instance(true)
        .deliveryClient.items()
        .equalsFilter('system.workflow_step', 'ready_to_be_deleted')
        .toPromise()
    ).data.items

    for (const item of items) {
      await apiClient
        .deleteContentItem()
        .byItemCodename(item.system.codename)
        .toPromise()
    }
  },
}

export default migration
