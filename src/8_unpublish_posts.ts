import { MigrationModule } from '@kontent-ai/cli'
import { redirectsVol6 } from './lib/blog_slugs'
import { ManagementClient } from '@kontent-ai/management-sdk'
import KontentService from './services/KontentService'
import { UmlpModel } from './models'

const migration: MigrationModule = {
  order: 8,
  run: async (apiClient: ManagementClient) => {
    const items = (
      await KontentService.Instance()
        .deliveryClient.items<UmlpModel>()
        .inFilter(`elements.url_slug`, [...redirectsVol6])
        .toPromise()
    ).data.items

    for await (const post of items) {
      try {
        await apiClient
          .unpublishLanguageVariant()
          .byItemCodename(post.system.codename)
          .byLanguageCodename('default')
          .withoutData()
          .toPromise()

        console.log(`Successfully unpublished - ${post.system.name}`)
      } catch (error) {
        console.error(`Error in a post ${post.system}: ${error.message}`)
      }
    }
  },
}

export default migration
