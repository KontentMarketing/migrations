import fs from 'fs'
import { MigrationModule } from '@kontent-ai/cli'
import KontentService from './services/KontentService'
import { otherSlugs } from './lib/other_slugs'

const migration: MigrationModule = {
  order: 7,
  run: async () => {
    const items = (
      await KontentService.Instance()
        .deliveryClient.items()
        .inFilter(`elements.url_slug`, [...otherSlugs])
        .toPromise()
    ).data.items.map((item) => {
      if (item.system.type === 'umlp') {
        return {
          name: item.system.name,
          type: item.system.type,
          slug: item.elements.urlSlug.value,
          umlp_page_type:
            item.system.type === 'umlp'
              ? item.elements.pageType659cc82.value[0].codename
              : '',
          last_modified: new Date(item.system.lastModified).toDateString(),
        }
      } else {
        return {
          name: item.system.name,
          type: item.system.type,
          slug: item.elements.urlSlug.value,
          last_modified: new Date(item.system.lastModified).toDateString(),
        }
      }
    })

    const filePath = './src/data/latest_modification_dates.json'
    fs.writeFileSync(filePath, JSON.stringify(items, null, 2))

    console.log('Data written to', filePath)
  },
}

export default migration
