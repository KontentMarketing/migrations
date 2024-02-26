import { MigrationModule } from '@kontent-ai/cli'
import { ManagementClient } from '@kontent-ai/management-sdk'
import KontentService from './services/KontentService'
import { BlogPostModel, contentTypes } from './models'

const migration: MigrationModule = {
  order: 3,
  run: async (apiClient: ManagementClient) => {
    const items = (
      await KontentService.Instance()
        .deliveryClient.items<BlogPostModel>()
        .type(contentTypes.blog_post.codename)
        .elementsParameter([
          contentTypes.blog_post.elements.title.codename,
          contentTypes.blog_post.elements.url_slug.codename,
          contentTypes.blog_post.elements.date.codename,
          contentTypes.blog_post.elements.update_date.codename,
        ])
        .orderByDescending('elements.date')
        .equalsFilter('system.workflow_step', 'published')
        .notEmptyFilter('elements.url_slug')
        .toPromise()
    ).data.items.map((item) => ({
      title: item.elements.title.value,
      urlSlug: item.elements.urlSlug.value,
      date: item.elements.date.value,
      updateDate: item.elements.updateDate.value,
    }))

    items.forEach((item) => console.log(item))
  },
}

export default migration
