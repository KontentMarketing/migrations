import fs from 'fs'
import { MigrationModule } from '@kontent-ai/cli'
import { ManagementClient } from '@kontent-ai/management-sdk'
import KontentService from './services/KontentService'
import {
  AuthorModel,
  BlogPostModel,
  ContactComponentModel,
  EventModel,
  InternalPressReleaseModel,
  WebinarModel,
  contentTypes,
} from './models'

const migration: MigrationModule = {
  order: 12,
  run: async (apiClient: ManagementClient) => {
    // TODO: Get all authors that do not have any blog posts published
    const posts = (
      await KontentService.Instance()
        .deliveryClient.items<BlogPostModel>()
        .type(contentTypes.blog_post.codename)
        .toPromise()
    ).data.items
      .map((post) =>
        post.elements.author.linkedItems.map((author) => ({
          author_codename: author.system.codename,
          author_name: author.elements.name.value,
          type: post.system.type,
          slug: post.elements.urlSlug.value,
        }))
      )
      .flat()

    const webinars = (
      await KontentService.Instance()
        .deliveryClient.items<WebinarModel>()
        .type(contentTypes.webinar.codename)
        .toPromise()
    ).data.items
      .map((webinar) =>
        webinar.elements.speakers.linkedItems.map((speaker) => ({
          author_codename: speaker.system.codename,
          author_name: speaker.elements.name.value,
          type: webinar.system.type,
          slug: webinar.elements.urlSlug.value,
        }))
      )
      .flat()

    const events = (
      await KontentService.Instance()
        .deliveryClient.items<EventModel>()
        .type(contentTypes.event.codename)
        .toPromise()
    ).data.items
      .map((event) =>
        event.elements.speakers.linkedItems.map((speaker) => ({
          author_codename: speaker.system.codename,
          author_name: speaker.elements.name.value,
          type: event.system.type,
          slug: event.elements.urlSlug.value,
        }))
      )
      .flat()

    const press = (
      await KontentService.Instance()
        .deliveryClient.items<InternalPressReleaseModel>()
        .type(contentTypes.internal_press_release.codename)
        .toPromise()
    ).data.items
      .map((press) =>
        press.elements.author.linkedItems.map((author) => ({
          author_codename: author.system.codename,
          author_name: author.elements.name.value,
          type: press.system.type,
          slug: press.elements.urlSlug.value,
        }))
      )
      .flat()

    const contact = (
      await KontentService.Instance()
        .deliveryClient.items<ContactComponentModel>()
        .type(contentTypes.contact_component.codename)
        .toPromise()
    ).data.items
      .map((contactCard) =>
        contactCard.elements.contact.linkedItems.map((contact) => ({
          author_codename: contact.system.codename,
          author_name: contact.elements.name.value,
          type: contactCard.system.type,
          slug: 'no_slug',
        }))
      )
      .flat()

    const usedAuthors = Array.from(
      new Set([...posts, ...webinars, ...events, ...press, ...contact])
    )

    const allAuthors = (
      await KontentService.Instance()
        .deliveryClient.items<AuthorModel>()
        .type(contentTypes.author.codename)
        .toPromise()
    ).data.items.map((author) => author.system.codename)

    const unusedAuthors = allAuthors.filter(
      (author) =>
        !usedAuthors.some((usedAuthor) => usedAuthor.author_codename === author)
    )

    const authorsWithoutPostsDataPromises = unusedAuthors.map((author) => {
      return KontentService.Instance()
        .deliveryClient.item<AuthorModel>(author)
        .toPromise()
    })

    const authorsWithoutPostsData = await Promise.all(
      authorsWithoutPostsDataPromises
    )

    // Unpublish the authors
    for await (const author of authorsWithoutPostsData) {
      try {
        await apiClient
          .unpublishLanguageVariant()
          .byItemCodename(author.data.item.system.codename)
          .byLanguageCodename('default')
          .withoutData()
          .toPromise()
      } catch (error) {
        console.log(
          `Archiving author ${author.data.item.elements.name.value} with codename ${author.data.item.system.codename} failed`
        )
      }
    }

    const authorDataFiltered = authorsWithoutPostsData.map((author) => {
      return {
        name: author.data.item.elements.name.value,
        email: author.data.item.elements.email.value,
        codename: author.data.item.system.codename,
        slug: author.data.item.elements.urlSlug.value,
        workflowStep: author.data.item.system.workflowStep,
      }
    })

    const filePath = './src/data/unused_authors_2.json'

    fs.writeFileSync(filePath, JSON.stringify(authorDataFiltered, null, 2))
  },
}

export default migration
