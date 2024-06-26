import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { BubbleModel } from './BubbleModel';
import { SharedContentModel } from './SharedContentModel';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Bubble Card
 * Id: 5c7799b7-4d23-4059-a4b9-1ad01facd69d
 * Codename: bubble_card
 */
export type BubbleCardModel = IContentItem<{
  /**
   * Heading (text)
   * Required: true
   * Id: 132591c4-9750-4a7a-9096-fdb42ffc21b7
   * Codename: heading
   */
  heading: Elements.TextElement;

  /**
   * Text (rich_text)
   * Required: true
   * Id: 0cf4c695-00d6-43e1-8bd0-57f317350bd3
   * Codename: text
   */
  text: Elements.RichTextElement;

  /**
   * Image (asset)
   * Required: false
   * Id: 2c4cf0b6-e5b5-4270-ab6d-744ea80ad219
   * Codename: image
   *
   * Background image
   */
  image: Elements.AssetsElement;

  /**
   * Bubbles (modular_content)
   * Required: true
   * Id: 41f77234-a3dd-48c4-a5e4-c5a52c0f09c8
   * Codename: bubbles
   *
   * These bubbles need to have a blank "header" field in order to be displayed correctly - only select an *icon* and fill out the *content* field
   */
  bubbles: Elements.LinkedItemsElement<BubbleModel>;

  /**
   * Button (modular_content)
   * Required: false
   * Id: 3375c4a7-0562-45c1-a71a-129996c8b4ac
   * Codename: button
   *
   * Optional button
   */
  button: Elements.LinkedItemsElement<SharedContentModel>;
}>;
