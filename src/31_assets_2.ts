// import fs from 'fs'
import { MigrationModule } from '@kontent-ai/cli'
import { ManagementClient } from '@kontent-ai/management-sdk'
import KontentService from './services/KontentService'
import { BlogPostModel, contentTypes } from './models'
import fixedOgs from './data/og/img_data.json'

const migration: MigrationModule = {
  order: 31,
  run: async (client: ManagementClient) => {
    console.log(fixedOgs.length, 'of OG images')

    const posts = (
      await KontentService.Instance()
        .deliveryClient.items<BlogPostModel>()
        .type(contentTypes.blog_post.codename)
        .toPromise()
    ).data.items

    let notFoundPosts = []

    for await (const og of fixedOgs) {
      const post = posts.find(
        (p) => p.elements.metadataMetadataImage.value[0].name === og.fileName
      )

      if (post) {
        try {
          await client
            .createNewVersionOfLanguageVariant()
            .byItemCodename(post.system.codename)
            .byLanguageCodename('default')
            .toPromise()

          await client
            .upsertLanguageVariant()
            .byItemCodename(post.system.codename)
            .byLanguageCodename('default')
            .withData((builder) => {
              return {
                elements: [
                  builder.assetElement({
                    element: {
                      codename:
                        contentTypes.blog_post.elements.metadata__metadata_image
                          .codename,
                    },
                    value: [
                      {
                        id: og.id,
                      },
                    ],
                  }),
                ],
              }
            })
            .toPromise()

          await client
            .publishLanguageVariant()
            .byItemCodename(post.system.codename)
            .byLanguageCodename('default')
            .withoutData()
            .toPromise()
        } catch (error) {
          console.log(`Item ${og.fileName} is not published`)
        }
      } else {
        notFoundPosts.push(og.fileName)
      }
    }

    // fs.writeFileSync(
    //   './src/data/og/not_found.json',
    //   JSON.stringify(notFoundPosts, null, 2)
    // )
  },
}

export default migration
