import { MigrationModule } from '@kontent-ai/cli'
import { ManagementClient } from '@kontent-ai/management-sdk'
import KontentService from './services/KontentService'
import { BlogPostModel, contentTypes } from './models'

const slugs = [
  'image-transformations-master-responsive-design-with-kontent-ai',
  'announcing-the-2023-kontent-ai-mvps',
  'avoid-vendor-lock-in-migrating-content-from-contentful-to-kontent',
  'building-a-cloud-first-headless-cms',
  'clearing-obsolete-cache-entries-with-webhooks',
  'cms-in-the-cloud-headless-cms',
  'how-to-launch-a-beautiful-website-from-headless-web-templates',
  'how-to-quickly-build-a-headless-website-template',
  'hugo-and-headless-cms',
  'image-transformations-master-responsive-design-with-kentico-cloud',
  'join-the-brand-new-kentico-cloud-partner-program',
  'optimize-your-digital-project-timeline-with-headless-cms',
  'sourcebit-how-to-make-friends-with-various-data-sources-in-the-jamstack',
  'using-new-kentico-cloud-content-management-api',
  'headless-cms-site-built-in-one-day',
]

const migration: MigrationModule = {
  order: 21,
  run: async (client: ManagementClient) => {
    let count = 0
    for await (const slug of slugs) {
      const items = (
        await KontentService.Instance()
          .deliveryClient.items<BlogPostModel>()
          .equalsFilter(
            `elements.${contentTypes.blog_post.elements.url_slug.codename}`,
            slug
          )
          .toPromise()
      ).data.items

      if (items.length > 0) {
        count++
        console.log(items[0].system.name, 'NAME')

        await client
          .unpublishLanguageVariant()
          .byItemCodename(items[0].system.codename)
          .byLanguageCodename('default')
          .withoutData()
          .toPromise()
      } else {
				console.log('No items found for slug:', slug)
			}
    }

    console.log(count, 'count')
  },
}

export default migration
