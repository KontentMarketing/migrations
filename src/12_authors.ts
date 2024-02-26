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
        post.elements.author.linkedItems.map((author) => author.system.codename)
      )
      .flat()

    const webinars = (
      await KontentService.Instance()
        .deliveryClient.items<WebinarModel>()
        .type(contentTypes.webinar.codename)
        .toPromise()
    ).data.items
      .map((webinar) =>
        webinar.elements.speakers.linkedItems.map(
          (speaker) => speaker.system.codename
        )
      )
      .flat()

    const events = (
      await KontentService.Instance()
        .deliveryClient.items<EventModel>()
        .type(contentTypes.event.codename)
        .toPromise()
    ).data.items
      .map((event) =>
        event.elements.speakers.linkedItems.map(
          (speaker) => speaker.system.codename
        )
      )
      .flat()

    const press = (
      await KontentService.Instance()
        .deliveryClient.items<InternalPressReleaseModel>()
        .type(contentTypes.internal_press_release.codename)
        .toPromise()
    ).data.items
      .map((event) =>
        event.elements.author.linkedItems.map(
          (author) => author.system.codename
        )
      )
      .flat()

    const contact = (
      await KontentService.Instance()
        .deliveryClient.items<ContactComponentModel>()
        .type(contentTypes.contact_component.codename)
        .toPromise()
    ).data.items
      .map((event) =>
        event.elements.contact.linkedItems.map(
          (contact) => contact.system.codename
        )
      )
      .flat()

    const authorsWithPosts = Array.from(
      new Set([...posts, ...webinars, ...events, ...press, ...contact])
    )

    const allAuthors = (
      await KontentService.Instance()
        .deliveryClient.items<AuthorModel>()
        .type(contentTypes.author.codename)
        .toPromise()
    ).data.items.map((author) => author.system.codename)

    const authorsWithoutPosts = allAuthors.filter(
      (author) => !authorsWithPosts.includes(author)
    )

    const authorsWithoutPostsDataPromises = authorsWithoutPosts.map(
      (author) => {
        return KontentService.Instance()
          .deliveryClient.item<AuthorModel>(author)
          .toPromise()
      }
    )

    const authorsWithoutPostsData = await Promise.all(
      authorsWithoutPostsDataPromises
    )

    const authorDataFiltered = authorsWithoutPostsData.map((author) => {
      return {
        name: author.data.item.elements.name.value,
        email: author.data.item.elements.email.value,
        codename: author.data.item.system.codename,
        workflowStep: author.data.item.system.workflowStep,
      }
    })

    const filePath = './src/data/unused_authors.json'

    fs.writeFileSync(filePath, JSON.stringify(authorDataFiltered, null, 2))
  },
}

export default migration
