import { MigrationModule } from '@kontent-ai/cli'
import { contentTypes } from './models'
import { ManagementClient } from '@kontent-ai/management-sdk'
import fixedPages from './data/case/fixed/resources-fixed.json'

const migration: MigrationModule = {
  order: 28,
  run: async (client: ManagementClient) => {
    for await (const resource of fixedPages) {
      try {
        await client
          .createNewVersionOfLanguageVariant()
          .byItemCodename(resource.codename)
          .byLanguageCodename('default')
          .toPromise()

        await client
          .upsertLanguageVariant()
          .byItemCodename(resource.codename)
          .byLanguageCodename('default')
          .withData((builder) => {
            return {
              elements: [
                builder.textElement({
                  element: {
                    codename: contentTypes.resource.elements.title.codename,
                  },
                  value: resource.title,
                }),
              ],
            }
          })
          .toPromise()

        await client
          .publishLanguageVariant()
          .byItemCodename(resource.codename)
          .byLanguageCodename('default')
          .withoutData()
          .toPromise()
      } catch (error) {
        console.log(`Item ${resource.codename} is not published`)
      }
    }
  },
}

export default migration
