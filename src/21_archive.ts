import { MigrationModule } from '@kontent-ai/cli'
import { ManagementClient } from '@kontent-ai/management-sdk'
import KontentService from './services/KontentService'
import { UmlpModel, contentTypes, taxonomies } from './models'
import { getElementsParamCodename } from './utils/kontentUtils'

const slugs = [
  'developers',
  'the-first-cms-with-native-ai-capabilities',
  'content-governance-guide',
  'compare-cms-options',
  'how-to-compare-cms-options',
  'donate-to-charity-in-our-ux-research',
  'seo-cms-ebook',
  'the-ultimate-guide-to-headless-cms',
  'contented-conference-2023',
  'demo-form',
  'dev-intersection-2022',
  'digital-transforamtion-week',
  'guide-to-headless-cms',
  'live-360-2022',
  'delivering-supercharging-transformation-benefits',
]

const migration: MigrationModule = {
  order: 21,
  run: async (client: ManagementClient) => {
    let count = 0
    for await (const slug of slugs) {
      const items = (
        await KontentService.Instance()
          .deliveryClient.items<UmlpModel>()
          .equalsFilter(
            `elements.${contentTypes.umlp.elements.url_slug.codename}`,
            slug
          )
          .containsFilter(
            getElementsParamCodename(
              contentTypes.umlp.elements.page_type_659cc82.codename
            ),
            [taxonomies.page_type.terms.special.codename]
          )
          .toPromise()
      ).data.items

      if (items.length > 0) {
        count++
        console.log(items[0].system.name, "NAME")
      }
    }

    console.log(count, 'count')
  },
}

export default migration
