import { MigrationModule } from '@kontent-ai/cli'
import { ManagementClient } from '@kontent-ai/management-sdk'
import KontentService from './services/KontentService'
import { contentTypes, taxonomies, UmlpModel } from './models'
import { getElementsParamCodename } from './utils/kontentUtils'

const migration: MigrationModule = {
  order: 24,
  run: async (client: ManagementClient) => {
    const pages = (
      await KontentService.Instance()
        .deliveryClient.items<UmlpModel>()
        .type(contentTypes.umlp.codename)
        .equalsFilter(
          `elements.${contentTypes.umlp.elements.url_slug.codename}`,
          'home'
        )
        .containsFilter(
          getElementsParamCodename(
            contentTypes.umlp.elements.page_type_659cc82.codename
          ),
          [taxonomies.page_type.terms.special.codename]
        )
        .toPromise()
    ).data.items.map((post) => ({
      slug: post.elements.urlSlug.value,
      codename: post.system.codename,
    }))

    console.log(pages, 'PAGES')
  },
}

export default migration
