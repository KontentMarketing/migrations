import fs from 'fs'
import { MigrationModule } from '@kontent-ai/cli'
import KontentService from './services/KontentService'
import { AuthorModel, ResourceModel, contentTypes } from './models'

const migration: MigrationModule = {
  order: 18,
  run: async () => {
    const authors = (
      await KontentService.Instance()
        .deliveryClient.items<AuthorModel>()
        .type(contentTypes.author.codename)
        .toPromise()
    ).data.items

    const mappedAuthorData = authors.map((author) => {
      return {
        name: author.elements.name.value,
        photo: author.elements.photo.value[0]?.url ?? 'no photo',
      }
    })

    fs.writeFileSync(
      './src/data/authors-data.json',
      JSON.stringify(mappedAuthorData, null, 2)
    )

    const resourcePages = (
      await KontentService.Instance()
        .deliveryClient.items<ResourceModel>()
        .type(contentTypes.resource.codename)
        .toPromise()
    ).data.items

    const mappedResourceData = resourcePages.map((resource) => {
      return {
        resource_name: resource.elements.title.value,
        resource_author: resource.elements.author.value,
        resource_type: resource.elements.type.value[0].name,
      }
    })

    fs.writeFileSync(
      './src/data/resource-data.json',
      JSON.stringify(mappedResourceData, null, 2)
    )
  },
}

export default migration
