import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { BubbleModel } from './BubbleModel';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * UMLP element - Content Bubbles Grid
 * Id: 1832fc7a-cc5e-40b2-b0a0-7da8790b1960
 * Codename: umlp_element___content_bubbles_grid
 */
export type UmlpElementContentBubblesGridModel = IContentItem<{
  /**
   * Heading (text)
   * Required: true
   * Id: 6f928bd0-5db2-49e9-8518-1f618b3624ee
   * Codename: heading
   */
  heading: Elements.TextElement;

  /**
   * Text (rich_text)
   * Required: true
   * Id: 40f441db-bc58-4ca8-ab47-bc99f278e4dd
   * Codename: text
   */
  text: Elements.RichTextElement;

  /**
   * Bubbles (modular_content)
   * Required: true
   * Id: 110384b6-dad3-47a4-a3a3-f53fb5d4671e
   * Codename: bubbles
   */
  bubbles: Elements.LinkedItemsElement<BubbleModel>;

  /**
   * Theme (multiple_choice)
   * Required: true
   * Id: c63bec2e-7f42-4872-8789-53a753e00218
   * Codename: theme
   */
  theme: Elements.MultipleChoiceElement;

  /**
   * Format (multiple_choice)
   * Required: true
   * Id: 382e0c11-2e75-4b27-89e2-e4e6c9a0349b
   * Codename: format
   */
  format: Elements.MultipleChoiceElement;
}>;
