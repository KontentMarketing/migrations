import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { SharedContentModel } from './SharedContentModel';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * UMLP element - Horizontal Card Carousel - Card
 * Id: c09f1374-10f0-42a0-87c7-144c5f9e9842
 * Codename: umlp_element___horizontal_card_carousel___card
 */
export type UmlpElementHorizontalCardCarouselCardModel = IContentItem<{
  /**
   * Text (rich_text)
   * Required: true
   * Id: a9a6392f-960d-44fb-9f42-6af116f835ba
   * Codename: text
   */
  text: Elements.RichTextElement;

  /**
   * Image (asset)
   * Required: true
   * Id: e155b1cb-99da-468d-b733-ce7eaf5a1517
   * Codename: image
   */
  image: Elements.AssetsElement;

  /**
   * Logo (asset)
   * Required: false
   * Id: 3f254145-2582-41e7-aff4-2aedcdcb7328
   * Codename: logo
   *
   * Optional logo displayed below the card
   */
  logo: Elements.AssetsElement;

  /**
   * CTA (modular_content)
   * Required: false
   * Id: a42f092b-861b-4fe7-a874-f99ace6921d8
   * Codename: cta
   *
   * Displayed as "Learn more" at the bottom of the card. Entire card will be clickable.
   */
  cta: Elements.LinkedItemsElement<SharedContentModel>;
}>;
