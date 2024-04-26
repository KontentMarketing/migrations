import { MigrationModule } from '@kontent-ai/cli'
import { ManagementClient } from '@kontent-ai/management-sdk'
import { contentTypes } from './models'

const migration: MigrationModule = {
  order: 34,
  run: async (client: ManagementClient) => {
    const response = await client
      .viewContentType()
      .byTypeCodename(contentTypes.integration.codename)
      .toPromise()

    console.log(response.data.elements)
  },
}

export default migration
