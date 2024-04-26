import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { BubbleModel } from './BubbleModel';
import { SharedContentModel } from './SharedContentModel';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * UMLP element - Text/Bubbles block
 * Id: 9e8c2eb9-bd88-4377-b806-02224b35bd86
 * Codename: umlp_element___text_bubbles_block
 */
export type UmlpElementTextBubblesBlockModel = IContentItem<{
  /**
   * Heading (rich_text)
   * Required: false
   * Id: 8f259c58-0009-430d-ac8c-12b5fbe43b8f
   * Codename: heading__rich
   */
  headingRich: Elements.RichTextElement;

  /**
   * Text (rich_text)
   * Required: false
   * Id: db9959da-f8f8-4175-9c09-d3a4dc58b5eb
   * Codename: text
   */
  text: Elements.RichTextElement;

  /**
   * Bubbles (modular_content)
   * Required: true
   * Id: a7e0a596-0c37-437e-b312-cc4db0d06cb6
   * Codename: bubbles
   */
  bubbles: Elements.LinkedItemsElement<BubbleModel>;

  /**
   * CTA (modular_content)
   * Required: false
   * Id: a67eef6e-6a81-4868-9a26-d2bc17e41272
   * Codename: cta
   *
   * Optional CTA button
   */
  cta: Elements.LinkedItemsElement<SharedContentModel>;

  /**
   * Format (multiple_choice)
   * Required: false
   * Id: ede88f68-7ff3-4eb8-a445-c4ffe3684f5e
   * Codename: format
   */
  format: Elements.MultipleChoiceElement;

  /**
   * Background (multiple_choice)
   * Required: false
   * Id: 60efd189-45f0-44e3-9e26-000485df9472
   * Codename: background
   */
  background: Elements.MultipleChoiceElement;
}>;
