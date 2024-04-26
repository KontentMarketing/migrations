import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { PersonModel } from './PersonModel';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * UMLP element - Person list
 * Id: 5de19c31-34dc-4a12-af4c-28229f3d1515
 * Codename: umlp_element___person_list
 */
export type UmlpElementPersonListModel = IContentItem<{
  /**
   * Heading (rich_text)
   * Required: false
   * Id: 66258310-d5bb-4194-947c-368c48de9361
   * Codename: heading__rich
   */
  headingRich: Elements.RichTextElement;

  /**
   * People (modular_content)
   * Required: true
   * Id: d3546efc-28ad-4344-9af4-099904faaca6
   * Codename: people
   */
  people: Elements.LinkedItemsElement<PersonModel>;
}>;
