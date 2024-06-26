import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Content Item - Code
 * Id: 27396de8-2ac3-4a48-bdb4-50dde4400696
 * Codename: content_item___code
 */
export type ContentItemCodeModel = IContentItem<{
  /**
   * Code (text)
   * Required: true
   * Id: e377c71a-f076-a4ac-ebba-17b27e6d60c7
   * Codename: code
   */
  code: Elements.TextElement;

  /**
   * Language (multiple_choice)
   * Required: true
   * Id: 8240c841-6322-f397-7f2d-7f36e24f207c
   * Codename: language
   *
   * Select language in which the code is written.
   */
  language: Elements.MultipleChoiceElement;
}>;
