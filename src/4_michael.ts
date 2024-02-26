import { MigrationModule } from '@kontent-ai/cli'
import { ManagementClient } from '@kontent-ai/management-sdk'
import KontentService from './services/KontentService'
import { BlogPostModel, contentTypes } from './models'

const AUTHOR_CODENAME = 'michael_andrews'

const migration: MigrationModule = {
  order: 4,
  run: async (apiClient: ManagementClient) => {
    const elements = (
      await KontentService.Instance()
        .deliveryClient.items<BlogPostModel>()
        .type(contentTypes.blog_post.codename)
        .containsFilter('elements.author', [AUTHOR_CODENAME])
        .toPromise()
    ).data.items.map((item) => ({
      url: `https://kontent.ai/blog/${item.elements.urlSlug.value}/`,
      authors: item.elements.author.linkedItems.map(
        (author) => author.elements.name.value
      ),
    }))

    elements.forEach((element) => console.log(element))
  },
}

export default migration
