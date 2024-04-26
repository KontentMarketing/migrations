import { MigrationModule } from '@kontent-ai/cli'
import { ManagementClient } from '@kontent-ai/management-sdk'
import KontentService from './services/KontentService'
import { IntegrationModel, contentTypes } from './models'

type HeadingSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

const createNewHeading = (size: HeadingSize, oldHeading: string): string => {
  if (!oldHeading) {
    return ''
  }

  const wordArray = oldHeading.split(' ')

  // If the heading is a single word, return it as an h3 with NO HIGHLIGHTING
  if (wordArray.length === 1) {
    return `<${size}>${oldHeading}</${size}>`
  }

  // If the heading is 2 words, highlight the second word
  if (wordArray.length === 2) {
    return `<${size}>${wordArray[0]} <strong>${wordArray[1]}</strong></${size}>`
  }

  // If the heading is 3 or more words, highlight the last 2 words
  return `<${size}>${wordArray.slice(0, -2).join(' ')} <strong>${wordArray
    .slice(-2)
    .join(' ')}</strong></${size}>`
}

const content_type_codenames = {
  cta_strip: 'umlp_element___cta_strip_with_image',
  testimonial_slider: 'umlp_element___testimonial_slider',
  content_bubbles: 'umlp_element___content_bubbles_grid',
  video_section: 'umlp_element___video_section',
  text_bubbles: 'umlp_element___text_bubbles_block',
  technology: 'umlp_element___technology',
  achievements: contentTypes.umlp_element___achievements_v2.codename,
  logos_custom: contentTypes.umlp_element___logos_custom.codename,
  resource_cards: contentTypes.umlp_element___resource_cards_section.codename,
  newsletter_section: contentTypes.newsletter_section.codename,
  text_pieces: contentTypes.umlp_element___three_text_pieces.codename,
  content_block_grid: contentTypes.umlp_element___content_block_grid.codename,
  umlp_cards: contentTypes.umlp_element___cards.codename,
  related_resources: contentTypes.umlp_element___related_resources.codename,
  feature_showcase:
    contentTypes.umlp_element___kontent_ai_feature_showcase.codename,
  form_section: contentTypes.umlp_element___form_section.codename,
  featured_stories:
    contentTypes.umlp_element___featured_customer_success_stories.codename,
  large_card_grid: contentTypes.umlp_element___large_card_grid.codename,
  highlighted_feature: contentTypes.highlighted_feature.codename,
  person_list: contentTypes.umlp_element___person_list.codename,
  integration: contentTypes.integration.codename,
} as const

const migration: MigrationModule = {
  order: 22,
  run: async (client: ManagementClient) => {
    const newHeadingCodename = 'video_section_heading__rich'

    await client
      .modifyContentType()
      .byTypeCodename(content_type_codenames.integration)
      .withData([
        {
          op: 'addInto',
          path: '/elements',
          after: {
            // codename: 'heading',
            codename:
              contentTypes.integration.elements.video_section_heading.codename,
          },
          value: {
            name: 'Video Section Heading',
            type: 'rich_text',
            allowed_blocks: ['text'],
            allowed_text_blocks: ['heading-two'],
            is_required: false,
            codename: newHeadingCodename,
          },
        },
      ])
      .toPromise()

    const allItems = (
      await KontentService.Instance(true)
        .deliveryClient.items<IntegrationModel>()
        .type(content_type_codenames.integration)
        .toPromise()
    ).data.items

    for await (const item of allItems) {
      // const oldHeading = item.elements.heading?.value ?? ''
      const oldHeading = item.elements.videoSectionHeading?.value ?? ''
      const currentWorkflow = item.system.workflowStep
      const newHeading = createNewHeading('h2', oldHeading)

      if (currentWorkflow === 'archived') {
        continue
      }

      if (currentWorkflow === 'published') {
        await client
          .createNewVersionOfLanguageVariant()
          .byItemCodename(item.system.codename)
          .byLanguageCodename('default')
          .toPromise()

        await client
          .upsertLanguageVariant()
          .byItemCodename(item.system.codename)
          .byLanguageCodename('default')
          .withData((builder) => {
            return {
              elements: [
                builder.richTextElement({
                  element: {
                    codename: newHeadingCodename,
                  },
                  value: newHeading,
                }),
              ],
            }
          })
          .toPromise()

        try {
          await client
            .publishLanguageVariant()
            .byItemCodename(item.system.codename)
            .byLanguageCodename('default')
            .withoutData()
            .toPromise()
        } catch (error) {
          console.log('Error publishing item:', item.system.codename)
          continue
        }
      } else {
        await client
          .upsertLanguageVariant()
          .byItemCodename(item.system.codename)
          .byLanguageCodename('default')
          .withData((builder) => {
            return {
              elements: [
                builder.richTextElement({
                  element: {
                    codename: newHeadingCodename,
                  },
                  value: newHeading,
                }),
              ],
            }
          })
          .toPromise()
      }
    }

    await client
      .modifyContentType()
      .byTypeCodename(content_type_codenames.integration)
      .withData([
        {
          op: 'remove',
          path: `/elements/codename:${contentTypes.integration.elements.video_section_heading.codename}`,
        },
      ])
      .toPromise()
  },
}

export default migration
