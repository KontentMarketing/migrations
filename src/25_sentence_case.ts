import { MigrationModule } from '@kontent-ai/cli'
import { ManagementClient } from '@kontent-ai/management-sdk'
import inputData from './data/case/blogs_sentence_case.json'
import KontentService from './services/KontentService'
import { BlogPostModel, contentTypes } from './models'

const migration: MigrationModule = {
  order: 25,
  run: async (client: ManagementClient) => {
    for await (const item of inputData) {
      try {
        const itemData = (
          await KontentService.Instance()
            .deliveryClient.item<BlogPostModel>(item.codename)
            .toPromise()
        ).data.item

        try {
          // Try creating a new version, if throws error, item is not published
          await client
            .createNewVersionOfLanguageVariant()
            .byItemCodename(itemData.system.codename)
            .byLanguageCodename('default')
            .toPromise()

          await client
            .upsertLanguageVariant()
            .byItemCodename(itemData.system.codename)
            .byLanguageCodename('default')
            .withData((builder) => {
              return {
                elements: [
                  builder.textElement({
                    element: {
                      codename: contentTypes.blog_post.elements.title.codename,
                    },
                    value: item.title,
                  }),
                ],
              }
            })
            .toPromise()

          await client
            .publishLanguageVariant()
            .byItemCodename(itemData.system.codename)
            .byLanguageCodename('default')
            .withoutData()
            .toPromise()
        } catch (error) {
          // Item probably in draft
          await client
            .upsertLanguageVariant()
            .byItemCodename(itemData.system.codename)
            .byLanguageCodename('default')
            .withData((builder) => {
              return {
                elements: [
                  builder.textElement({
                    element: {
                      codename: contentTypes.blog_post.elements.title.codename,
                    },
                    value: item.title,
                  }),
                ],
              }
            })
            .toPromise()
        }

        console.log(`Item with codename ${item.codename} updated`)
      } catch (error) {
        console.log(`Item with codename ${item.codename} not found`)
      }
    }
  },
}

export default migration
