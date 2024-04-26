import fs from 'fs'
import { MigrationModule } from '@kontent-ai/cli'
import { ManagementClient } from '@kontent-ai/management-sdk'

const migration: MigrationModule = {
  order: 30,
  run: async (client: ManagementClient) => {
    const FOLDER_CODENAME = '536dcf4d-a249-40f0-8443-f80d6c99bb88'

    const response = await client.listAssets().toAllPromise()
    const assetsFromOgFolder = response.data.items
      .filter((asset) => asset.folder?.id === FOLDER_CODENAME)
      .map((asset) => ({
        fileName: asset.fileName,
        url: asset.url,
        id: asset.id,
      }))

    fs.writeFileSync(
      './src/data/og/img_data.json',
      JSON.stringify(assetsFromOgFolder, null, 2)
    )
  },
}

export default migration
