import { MigrationModule } from '@kontent-ai/cli'
import { ManagementClient } from '@kontent-ai/management-sdk'
import items from './data/blog_sentence_case_slugs_final.json'
import { contentTypes } from './models'

const migration: MigrationModule = {
  order: 13,
  run: async (apiClient: ManagementClient) => {
    for await (const item of items) {
      try {
        await apiClient
          .createNewVersionOfLanguageVariant()
          .byItemCodename(item.post_codename)
          .byLanguageCodename('default')
          .toPromise()

        await apiClient
          .upsertLanguageVariant()
          .byItemCodename(item.post_codename)
          .byLanguageCodename('default')
          .withData((builder) => {
            return {
              elements: [
                builder.textElement({
                  element: {
                    codename:
                      contentTypes.blog_post.elements.metadata__metadata_title
                        .codename,
                  },
                  value: item.meta_title,
                }),
              ],
            }
          })
          .toPromise()

        await apiClient
          .publishLanguageVariant()
          .byItemCodename(item.post_codename)
          .byLanguageCodename('default')
          .withoutData()
          .toPromise()
      } catch (error) {
        console.log(
          `Item with slug ${item.slug} is in draft state. Only updating...`
        )
        await apiClient
          .upsertLanguageVariant()
          .byItemCodename(item.post_codename)
          .byLanguageCodename('default')
          .withData((builder) => {
            return {
              elements: [
                builder.textElement({
                  element: {
                    codename:
                      contentTypes.blog_post.elements.metadata__metadata_title
                        .codename,
                  },
                  value: item.meta_title,
                }),
              ],
            }
          })
          .toPromise()
      }
    }
  },
}

export default migration
