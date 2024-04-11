import fs from 'fs'
import { MigrationModule } from '@kontent-ai/cli'
import { ManagementClient } from '@kontent-ai/management-sdk'
import KontentService from './services/KontentService'
import { BlogPostModel, contentTypes } from './models'

const migration: MigrationModule = {
  order: 23,
  run: async (client: ManagementClient) => {
    const posts = (
      await KontentService.Instance()
        .deliveryClient.items<BlogPostModel>()
        .type(contentTypes.blog_post.codename)
        .toPromise()
    ).data.items.map((post) => ({
      title: post.elements.title.value,
      slug: post.elements.urlSlug.value,
      codename: post.system.codename,
    }))

    fs.writeFileSync(
      './src/data/posts_titles.json',
      JSON.stringify(posts, null, 2)
    )
  },
}

export default migration
