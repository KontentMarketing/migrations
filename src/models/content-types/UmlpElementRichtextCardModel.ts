import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { SharedContentModel } from './SharedContentModel';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * UMLP element - RichText Card
 * Id: 5322d6c3-e32d-41a5-be37-c930f777687e
 * Codename: umlp_element___richtext_card
 */
export type UmlpElementRichtextCardModel = IContentItem<{
  /**
   * Heading (rich_text)
   * Required: false
   * Id: 87b38970-8dc0-48e1-9fee-2b01fa55d6e8
   * Codename: heading
   *
   * Optional heading of the card
   */
  heading: Elements.RichTextElement;

  /**
   * Text (rich_text)
   * Required: true
   * Id: 361f31f4-7e65-4c90-b173-0be5117f3e3f
   * Codename: text
   */
  text: Elements.RichTextElement;

  /**
   * CTA (modular_content)
   * Required: false
   * Id: 86486cdc-cb59-4486-b673-93eb5ad5c89a
   * Codename: cta
   *
   * Optional CTA on the card
   */
  cta: Elements.LinkedItemsElement<SharedContentModel>;
}>;
