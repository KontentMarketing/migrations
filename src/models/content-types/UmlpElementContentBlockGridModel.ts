import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { BubbleModel } from './BubbleModel';
import { SharedContentModel } from './SharedContentModel';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * UMLP element - Content block grid
 * Id: 3eeb5468-8045-4bff-b761-27cee36fc33b
 * Codename: umlp_element___content_block_grid
 */
export type UmlpElementContentBlockGridModel = IContentItem<{
  /**
   * Heading (text)
   * Required: false
   * Id: be470218-5fcf-4a26-ad02-15b05cc1126c
   * Codename: heading
   */
  heading: Elements.TextElement;

  /**
   * Blocks (modular_content)
   * Required: true
   * Id: ed22cb2b-4bb6-425a-a871-58a2efba0d4c
   * Codename: blocks
   */
  blocks: Elements.LinkedItemsElement<BubbleModel>;

  /**
   * Button (modular_content)
   * Required: false
   * Id: 11816373-ec92-4baf-8661-8a24937f6370
   * Codename: button
   *
   * Optional button
   */
  button: Elements.LinkedItemsElement<SharedContentModel>;

  /**
   * Theme (multiple_choice)
   * Required: true
   * Id: a1a388a4-0c16-4f9b-b1d9-941a391f4080
   * Codename: theme
   *
   * Theme for the REBRANDed version of the site. If this is blocking you from releases on the current site, pick whichever, it won't have any effect.
   */
  theme: Elements.MultipleChoiceElement;
}>;
