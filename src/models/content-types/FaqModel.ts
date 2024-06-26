import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * FAQ
 * Id: 8b8764d1-5740-4c85-be84-f260742e0af8
 * Codename: faq
 */
export type FaqModel = IContentItem<{
  /**
   * Question (text)
   * Required: false
   * Id: 8d8f34dd-1426-4776-9edc-a85f9fa0f2c6
   * Codename: question
   */
  question: Elements.TextElement;

  /**
   * Answer (rich_text)
   * Required: false
   * Id: 432f8898-83fa-44e0-986e-2d77131ebe55
   * Codename: answer
   */
  answer: Elements.RichTextElement;

  /**
   * Anchor (text)
   * Required: false
   * Id: dff26354-d432-4aa3-b25b-c2fa686e6625
   * Codename: anchor
   */
  anchor: Elements.TextElement;
}>;
