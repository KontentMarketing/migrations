import fs from 'fs'
import { MigrationModule } from '@kontent-ai/cli'
import KontentService from './services/KontentService'
import { BlogPostModel, contentTypes } from './models'

const migration: MigrationModule = {
  order: 17,
  run: async () => {
    const posts = (
      await KontentService.Instance()
        .deliveryClient.items<BlogPostModel>()
        .type(contentTypes.blog_post.codename)
        .toPromise()
    ).data.items

    const postInfo = posts.map((post) => {
      return {
        title: post.elements.title.value,
        slug: post.elements.urlSlug.value,
        meta_image_url: post.elements.metadataMetadataImage.value[0].url,
        meta_title: post.elements.metadataMetadataTitle.value,
        authors: post.elements.author.linkedItems.map(
          (author) => author.elements.name.value
        ),
        hero_image: post.elements.headerImage.value[0].url,
      }
    })

    fs.writeFileSync(
      './src/data/posts_info.json',
      JSON.stringify(postInfo, null, 2)
    )
  },
}

export default migration
