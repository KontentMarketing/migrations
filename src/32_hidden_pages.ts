import fs from 'fs'
import { MigrationModule } from '@kontent-ai/cli'
import { ManagementClient } from '@kontent-ai/management-sdk'
import KontentService from './services/KontentService'
import { contentTypes, UmlpModel } from './models'
import { getElementsParamCodename } from './utils/kontentUtils'

const migration: MigrationModule = {
  order: 32,
  run: async (client: ManagementClient) => {
    const hiddenUmlpPages = (
      await KontentService.Instance()
        .deliveryClient.items<UmlpModel>()
        .type(contentTypes.umlp.codename)
        .containsFilter(
          getElementsParamCodename(
            contentTypes.umlp.elements.metadata__exclude_from_global_search
              .codename
          ),
          ['yes']
        )
        .toPromise()
    ).data.items.map((page) => ({
      codename: page.system.codename,
      slug: page.elements.urlSlug.value,
      page_type: page.elements.pageType659cc82.value[0].codename,
    }))

    fs.writeFileSync(
      './src/data/hidden/rebrand.json',
      JSON.stringify(hiddenUmlpPages, null, 2)
    )
  },
}

export default migration
