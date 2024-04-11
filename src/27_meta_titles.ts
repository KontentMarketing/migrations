import { MigrationModule } from '@kontent-ai/cli'
import { ManagementClient } from '@kontent-ai/management-sdk'
import fixedPages from './data/case/fixed/solutions-fixed.json'
import { contentTypes } from './models'

const migration: MigrationModule = {
  order: 27,
  run: async (client: ManagementClient) => {
    for await (const page of fixedPages) {
      try {
        await client
          .createNewVersionOfLanguageVariant()
          .byItemCodename(page.codename)
          .byLanguageCodename('default')
          .toPromise()

        await client
          .upsertLanguageVariant()
          .byItemCodename(page.codename)
          .byLanguageCodename('default')
          .withData((builder) => {
            return {
              elements: [
                builder.textElement({
                  element: {
                    codename:
                      contentTypes.umlp.elements.metadata__metadata_title
                        .codename,
                  },
                  value: page.meta_title,
                }),
              ],
            }
          })
          .toPromise()

        await client
          .publishLanguageVariant()
          .byItemCodename(page.codename)
          .byLanguageCodename('default')
          .withoutData()
          .toPromise()
      } catch (error) {
        console.log(`Item ${page.codename} is not published`)
      }
    }
  },
}

export default migration
