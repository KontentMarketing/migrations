import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Footer item
 * Id: 0f9a746d-c333-4ff7-b440-09cf61b16297
 * Codename: footer_item
 */
export type FooterItemModel = IContentItem<{
  /**
   * Title (text)
   * Required: false
   * Id: cc8caa47-fff2-f184-ea18-008d016e4df4
   * Codename: title
   */
  title: Elements.TextElement;

  /**
   * URL (text)
   * Required: false
   * Id: 6d5f1216-9527-32fd-b7ae-7426f1713d21
   * Codename: url
   */
  url: Elements.TextElement;

  /**
   * Type of link (multiple_choice)
   * Required: true
   * Id: 22d9ca8b-3eab-ca16-d430-5192b4ab6245
   * Codename: type_of_link
   *
   * The Internal link means that the visitor stays on our web (we typically use only relative URLs like /contact), the Outgoing link means that he/she leaves our main domain. E.g. http://help.kenticocloud.com is also the Outgoing link.
   */
  typeOfLink: Elements.MultipleChoiceElement;

  /**
   * Tracking code (text)
   * Required: false
   * Id: 0ff90151-a149-593f-5f43-7c6901d15c76
   * Codename: tracking_code
   *
   * Tracking code for Google Analytics
   */
  trackingCode: Elements.TextElement;
}>;
