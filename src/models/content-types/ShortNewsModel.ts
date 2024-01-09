import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Short news
 * Id: c7964266-b3c4-4df2-854f-b0b95590867f
 * Codename: short_news
 */
export type ShortNewsModel = IContentItem<{
  /**
   * Title (text)
   * Required: true
   * Id: 611f7e8c-867a-44e7-bf8a-f116cbb01894
   * Codename: title
   */
  title: Elements.TextElement;

  /**
   * Link (text)
   * Required: true
   * Id: 54b543e7-64fa-4a8a-93af-c659ecefc5e6
   * Codename: link
   */
  link: Elements.TextElement;
}>;
