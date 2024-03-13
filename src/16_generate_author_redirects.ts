import fs from 'fs'
import { MigrationModule } from '@kontent-ai/cli'
import authors from './data/unused_authors_2.json'

const migration: MigrationModule = {
  order: 16,
  run: async () => {
    const redirects = authors.map((author) => {
      if (author.slug === '') {
        return
      }

      return {
        source: `/blog/author/${author.slug}`,
        destination: '/blog/author/',
        permanent: false,
      }
    })

    fs.writeFileSync(
      './src/data/authors.json',
      JSON.stringify(redirects, null, 2)
    )
  },
}

export default migration
