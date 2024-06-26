import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { LinkModel } from './LinkModel';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Link Group
 * Id: 228b5d38-9745-478c-ad1e-98400630801a
 * Codename: link_group
 */
export type LinkGroupModel = IContentItem<{
  /**
   * Heading (text)
   * Required: true
   * Id: 9777d282-21c3-4498-9a65-c872a34abc42
   * Codename: heading
   */
  heading: Elements.TextElement;

  /**
   * Text (rich_text)
   * Required: false
   * Id: f8c549cf-a5e1-45dc-905a-8b43203c2db3
   * Codename: text
   */
  text: Elements.RichTextElement;

  /**
   * Links (modular_content)
   * Required: true
   * Id: 622b58e7-971a-43e2-923c-3b64fb447bd8
   * Codename: links
   */
  links: Elements.LinkedItemsElement<LinkModel>;
}>;
