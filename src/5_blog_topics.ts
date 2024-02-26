import fs from 'fs'
import { MigrationModule } from '@kontent-ai/cli'
import { blogsToBeDeleted, firstSixBlogs } from './lib/blog_slugs'
import KontentService from './services/KontentService'
import { BlogPostModel, contentTypes } from './models'
import { ManagementClient } from '@kontent-ai/management-sdk'

const migration: MigrationModule = {
  order: 5,
  run: async (apiClient: ManagementClient) => {
    // Dividing the array into chunks as it is too big for a single query
    const part1 = blogsToBeDeleted.slice(0, 150)
    const part2 = blogsToBeDeleted.slice(150)

    const blogItemsPartOne = (
      await KontentService.Instance()
        .deliveryClient.items<BlogPostModel>()
        .type(contentTypes.blog_post.codename)
        .inFilter(
          `elements.${contentTypes.blog_post.elements.url_slug.codename}`,
          [...part1]
        )
        .toPromise()
    ).data.items

    const blogItemsPartTwo = (
      await KontentService.Instance()
        .deliveryClient.items<BlogPostModel>()
        .type(contentTypes.blog_post.codename)
        .inFilter(
          `elements.${contentTypes.blog_post.elements.url_slug.codename}`,
          [...part2]
        )
        .toPromise()
    ).data.items

    const blogItemsPartThree = (
      await KontentService.Instance()
        .deliveryClient.items<BlogPostModel>()
        .type(contentTypes.blog_post.codename)
        .inFilter(
          `elements.${contentTypes.blog_post.elements.url_slug.codename}`,
          [...firstSixBlogs]
        )
        .toPromise()
    ).data.items

    const allPosts = [
      ...blogItemsPartThree,
      ...blogItemsPartOne,
      ...blogItemsPartTwo,
    ]

    for await (const post of allPosts) {
      try {
        await apiClient
          .unpublishLanguageVariant()
          .byItemCodename(post.system.codename)
          .byLanguageCodename('default')
          .withoutData()
          .toPromise()

        console.log(`Successfully unpublished - ${post.system.name}`)
      } catch (error) {
        console.error(`Error in a post ${post.system}: ${error.message}`)
      }
    }

    // INFO: creates the JSON file with all the blog post topics
    const mappedPosts = allPosts.map((post) => {
      return {
        urlSlug: post.elements.urlSlug.value,
        topic: post.elements.topicC2ebd37.linkedItems.map(
          (topic) => topic.elements.title.value
        ),
      }
    })

    const filePath = './src/data/blog_topics.json'
    fs.writeFileSync(filePath, JSON.stringify(mappedPosts, null, 2))

    console.log('Data written to', filePath)
  },
}

export default migration
