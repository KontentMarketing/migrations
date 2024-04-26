import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * UMLP element - Text
 * Id: 459e3673-71f3-42dc-9564-f2b4c5e953f1
 * Codename: umlp_element___text
 */
export type UmlpElementTextModel = IContentItem<{
  /**
   * Heading (rich_text)
   * Required: false
   * Id: 4810c412-bcd5-4184-8bbc-386a9eb5261d
   * Codename: heading
   */
  heading: Elements.RichTextElement;

  /**
   * Text (rich_text)
   * Required: false
   * Id: caa164be-ebfc-4e42-8c50-38b3015992fc
   * Codename: text
   */
  text: Elements.RichTextElement;

  /**
   * Grid class names (text)
   * Required: false
   * Id: 7d5d4788-c982-4b7c-bef0-b6e6a38eaf74
   * Codename: grid_class_names
   */
  gridClassNames: Elements.TextElement;
}>;
