import { MigrationModule } from '@kontent-ai/cli'
import { ManagementClient } from '@kontent-ai/management-sdk'
import KontentService from './services/KontentService'

const migration: MigrationModule = {
  order: 2,
  run: async (apiClient: ManagementClient) => {
    const items = (
      await KontentService.Instance(true)
        .deliveryClient.items()
        .equalsFilter('system.workflow_step', 'published')
        .notEmptyFilter('elements.url_slug')
        .containsFilter('elements.sitemap_metadata__visibility', ['excluded'])
        .toPromise()
    ).data.items.map((item) => ({
      name: item.system.name,
      slug: item.elements.urlSlug.value,
    }))

    console.log(items, 'items')
  },
}

export default migration
