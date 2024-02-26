import fs from 'fs'
import { MigrationModule } from '@kontent-ai/cli'
import { ManagementClient } from '@kontent-ai/management-sdk'
import KontentService from './services/KontentService'
import { BlogPostModel, contentTypes } from './models'

const migration: MigrationModule = {
  order: 10,
  run: async (apiClient: ManagementClient) => {
    const posts = (
      await KontentService.Instance()
        .deliveryClient.items<BlogPostModel>()
        .type(contentTypes.blog_post.codename)
        .toPromise()
    ).data.items.map((post, index) => {
      return {
        id: index + 1,
        title: post.elements.title.value,
        url: `https://kontent.ai/blog/${post.elements.urlSlug.value}`,
        meta_title: post.elements.metadataMetadataTitle.value,
      }
    })

    const filePath = './src/data/published_blog_posts.json'
    fs.writeFileSync(filePath, JSON.stringify(posts, null, 2))

    console.log('Data written to', filePath)
  },
}

export default migration
