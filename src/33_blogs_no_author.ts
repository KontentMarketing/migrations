import fs from 'fs'
import { MigrationModule } from '@kontent-ai/cli'
import { ManagementClient } from '@kontent-ai/management-sdk'
import KontentService from './services/KontentService'
import { BlogPostModel, contentTypes } from './models'

const migration: MigrationModule = {
  order: 33,
  run: async (client: ManagementClient) => {
    const posts = (
      await KontentService.Instance()
        .deliveryClient.items<BlogPostModel>()
        .type(contentTypes.blog_post.codename)
        .depthParameter(3)
        .toPromise()
    ).data.items.filter(
      (post) =>
        post.elements.author.linkedItems.length === 0 ||
        post.elements.author.linkedItems.some(
          (author) => author.elements.urlSlug.value.length === 0
        )
    )

    const parsedPosts = posts.map((post) => ({
      codename: post.system.codename,
      slug: post.elements.urlSlug.value,
    }))

    fs.writeFileSync(
      './src/data/exports/posts_without_author.json',
      JSON.stringify(parsedPosts, null, 2)
    )
  },
}

export default migration
