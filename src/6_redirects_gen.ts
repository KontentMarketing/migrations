import fs from 'fs'
import { MigrationModule } from '@kontent-ai/cli'

const migration: MigrationModule = {
  order: 6,
  run: async () => {
    const filePath = './src/data/blog_topics.json'
    const redirectsPath = './src/data/redirects.json'

    try {
      const jsonData = fs.readFileSync(filePath, 'utf8')
      const parsedData = JSON.parse(jsonData)

      const transformed = parsedData.map((entry) => {
        return {
          source: `/blog/${entry.urlSlug}`,
          destination: `/blog/?topic=${entry.topic[0]
            .toLowerCase()
            .split(' ')
            .join('-')}/`,
          permanent: false,
        }
      })

      fs.writeFileSync(redirectsPath, JSON.stringify(transformed, null, 2))
      console.log('Data written to', redirectsPath)
    } catch (error) {
      console.error('Error reading or parsing JSON:', error)
    }
  },
}

export default migration
