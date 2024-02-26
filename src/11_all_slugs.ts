import { MigrationModule } from '@kontent-ai/cli'
import { ManagementClient } from '@kontent-ai/management-sdk'
import fs from 'fs'
import data from './data/slugs_before_2.json'
// import data from './data/slugs_before.json'
import KontentService from './services/KontentService'

const migration: MigrationModule = {
  order: 11,
  run: async (apiClient: ManagementClient) => {
    const { slugs } = data

    // All items including archived/draft
    const reqPromises = slugs.map((slug) => {
      return KontentService.Instance(true)
        .deliveryClient.items()
        .equalsFilter('elements.url_slug', slug)
        .toPromise()
    })

    const items = (await Promise.all(reqPromises)).map((res) => {
      if (res.data.items.length === 0) {
        return {
          status: 'NOT_FOUND',
          slug: res.response.rawResponse.config.url.split('[eq]=')[1],
        }
      }

      return {
        status: res.data.items[0].system.workflowStep,
        slug: res.data.items[0].elements.urlSlug.value,
        publish_date: new Date(
          res.data.items[0].system.lastModified
        ).toDateString(),
      }
    })

    // const filePath = './src/data/slugs_finished.json'
    const filePath = './src/data/slugs_finished_2.json'
    fs.writeFileSync(filePath, JSON.stringify(items, null, 2))
  },
}

export default migration
