import fs from 'fs'
import { MigrationModule } from '@kontent-ai/cli'
import { ManagementClient } from '@kontent-ai/management-sdk'
import KontentService from './services/KontentService'
import {
  contentTypes,
  taxonomies,
  UmlpElementHeroSimpleModel,
  UmlpModel,
} from './models'
import { getElementsParamCodename } from './utils/kontentUtils'

function removeHtmlTagsAndReplaceNewlineChars(str) {
  let noTags = str.replace(/<\/?[^>]+(>|$)/g, '')
  let replacedNewlines = noTags.replace(/\n/g, ' ')
  return replacedNewlines
}

const migration: MigrationModule = {
  order: 26,
  run: async (client: ManagementClient) => {
    const items = (
      await KontentService.Instance()
        .deliveryClient.items<UmlpModel>()
        .type(contentTypes.umlp.codename)
        .containsFilter(
          getElementsParamCodename(
            contentTypes.umlp.elements.page_type_659cc82.codename
          ),
          [taxonomies.page_type.terms.industry.codename]
        )
        .toPromise()
    ).data.items
      .filter((page) =>
        page.elements.content.linkedItems.some(
          (el) =>
            el.system.type === contentTypes.umlp_element___hero_simple.codename
        )
      )
      .map((page) => ({
        title: removeHtmlTagsAndReplaceNewlineChars(
          (
            page.elements.content.linkedItems.find(
              (el) =>
                el.system.type ===
                contentTypes.umlp_element___hero_simple.codename
            ) as UmlpElementHeroSimpleModel
          ).elements.headingRich.value
        ),
        meta_title: page.elements.metadataMetadataTitle.value,
        slug: page.elements.urlSlug.value,
        codename: page.system.codename,
        workflow_step: page.system.workflowStep,
      }))

    console.log(items.length, 'number of items (drafts included)')

    fs.writeFileSync(
      './src/data/case/exports/industry.json',
      JSON.stringify(items, null, 2)
    )
  },
}

export default migration
