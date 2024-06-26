import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { ModularItemCardElementModel } from './ModularItemCardElementModel';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * UMLP element - Large card grid
 * Id: de3c3671-c552-4c31-9873-a5b97cfc82eb
 * Codename: umlp_element___large_card_grid
 */
export type UmlpElementLargeCardGridModel = IContentItem<{
  /**
   * Heading (rich_text)
   * Required: false
   * Id: ba182a25-ea3a-431e-a37a-ea4ca80ecfcc
   * Codename: heading__rich
   */
  headingRich: Elements.RichTextElement;

  /**
   * Cards (modular_content)
   * Required: true
   * Id: 61174ec0-635f-4495-ab4d-0633ccfaf210
   * Codename: cards
   */
  cards: Elements.LinkedItemsElement<ModularItemCardElementModel>;
}>;
