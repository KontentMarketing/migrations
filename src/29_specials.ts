import { MigrationModule } from '@kontent-ai/cli'
import { ManagementClient } from '@kontent-ai/management-sdk'
import specialSlugs from './data/specials.json'
import KontentService from './services/KontentService'
import { contentTypes, UmlpElementHeroModel, UmlpModel } from './models'

function sanitizeRichTextContent(richTextValue) {
  return richTextValue
    .replace(/<figure.*?figure>/g, '')
    .replace(/<object.*?object>/g, '')
}

const migration: MigrationModule = {
  order: 29,
  run: async (client: ManagementClient) => {
    console.log('Number of slugs pages: ', specialSlugs.length)

    const pages: UmlpModel[] = []

    for await (const specialSlug of specialSlugs) {
      const page = (
        await KontentService.Instance()
          .deliveryClient.items<UmlpModel>()
          .type(contentTypes.umlp.codename)
          .equalsFilter(`elements.url_slug`, specialSlug)
          .toPromise()
      ).data.items[0]

      if (page) {
        pages.push(page)
      } else {
        console.log(`Page with slug ${specialSlug} not found`)
      }
    }

    console.log('Number of pages found: ', pages.length)

    const pagesWithHeroComponent = pages
      .filter((page) =>
        page.elements.content.linkedItems.some(
          (el) => el.system.type === contentTypes.umlp_element___hero.codename
        )
      )
      .map((umlp) => ({
        codename: umlp.system.codename,
        hero_section: umlp.elements.content.linkedItems.find(
          (el) => el.system.type === contentTypes.umlp_element___hero.codename
        ).system.codename,
        elements: umlp.elements.content.linkedItems,
      }))

    console.log(
      'Number of pages with hero component: ',
      pagesWithHeroComponent.length
    )

    for await (const umlp of pagesWithHeroComponent) {
      // Fetch the hero section
      const heroSection = await KontentService.Instance()
        .deliveryClient.item<UmlpElementHeroModel>(umlp.hero_section)
        .toPromise()

      const NEW_HERO_SIMPLE_CODENAME = `${heroSection.data.item.system.codename.slice(
        0,
        40
      )}_${(Math.floor(Math.random() * 10000) + 1).toString()}`

      // Create new Hero Simple component based on the hero component
      await client
        .addContentItem()
        .withData({
          name: `${heroSection.data.item.system.name} - simple`,
          codename: NEW_HERO_SIMPLE_CODENAME,
          type: {
            codename: contentTypes.umlp_element___hero_simple.codename,
          },
          collection: {
            codename: 'default',
          },
        })
        .toPromise()

      // Populate the new hero simple component with data from the hero component
      await client
        .upsertLanguageVariant()
        .byItemCodename(NEW_HERO_SIMPLE_CODENAME)
        .byLanguageCodename('default')
        .withData((builder) => {
          return {
            elements: [
              builder.richTextElement({
                element: {
                  codename:
                    contentTypes.umlp_element___hero_simple.elements
                      .heading_rich.codename,
                },
                value: sanitizeRichTextContent(
                  heroSection.data.item.elements.headline.value
                ),
              }),
              builder.richTextElement({
                element: {
                  codename:
                    contentTypes.umlp_element___hero_simple.elements.text
                      .codename,
                },
                value: sanitizeRichTextContent(
                  heroSection.data.item.elements.leadParagraph.value
                ),
              }),
              builder.linkedItemsElement({
                element: {
                  codename:
                    contentTypes.umlp_element___hero_simple.elements.buttons
                      .codename,
                },
                value: heroSection.data.item.elements.cta.linkedItems.map(
                  (btn) => ({ codename: btn.system.codename })
                ),
              }),
              builder.multipleChoiceElement({
                element: {
                  codename:
                    contentTypes.umlp_element___hero_simple.elements.alignment
                      .codename,
                },
                value: [{ codename: 'center' }],
              }),
            ],
          }
        })
        .toPromise()

      // Publish language variant of the new Hero Simple component
      await client
        .publishLanguageVariant()
        .byItemCodename(NEW_HERO_SIMPLE_CODENAME)
        .byLanguageCodename('default')
        .withoutData()
        .toPromise()

      // Create a new version of the UMLP
      try {
        await client
          .createNewVersionOfLanguageVariant()
          .byItemCodename(umlp.codename)
          .byLanguageCodename('default')
          .toPromise()
      } catch (error) {
        console.log(
          `Error creating a new version of the (prolly already in draft) UMLP: ${umlp.hero_section}`
        )
      }

      // Update the UMLP with the new Hero Simple component
      await client
        .upsertLanguageVariant()
        .byItemCodename(umlp.codename)
        .byLanguageCodename('default')
        .withData((builder) => {
          return {
            elements: [
              builder.linkedItemsElement({
                element: {
                  codename: contentTypes.umlp.elements.content.codename,
                },
                value: [
                  {
                    codename: NEW_HERO_SIMPLE_CODENAME,
                  },
                  ...umlp.elements
                    .filter(
                      (el) =>
                        el.system.type !==
                        contentTypes.umlp_element___hero.codename
                    )
                    .map((el) => ({ codename: el.system.codename })),
                ],
              }),
            ],
          }
        })
        .toPromise()

      // Publish new version of the UMLP
      try {
        await client
          .publishLanguageVariant()
          .byItemCodename(umlp.codename)
          .byLanguageCodename('default')
          .withoutData()
          .toPromise()
      } catch (error) {
        console.log(
          `Error publishing the new version of the UMLP (prolly in draft): ${umlp.hero_section}`
        )
      }

      // Unpublish the old hero section
      try {
        await client
          .unpublishLanguageVariant()
          .byItemCodename(umlp.hero_section)
          .byLanguageCodename('default')
          .withoutData()
          .toPromise()
      } catch (error) {
        console.log(`Error archiving the old hero section: ${error.message}`)
      }
    }
  },
}

export default migration
