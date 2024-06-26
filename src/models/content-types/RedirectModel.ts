import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Redirect
 * Id: e97b3518-ebca-4257-9343-4b99a194c371
 * Codename: redirect
 */
export type RedirectModel = IContentItem<{
  /**
   * Redirect Url (text)
   * Required: false
   * Id: 3c637ebb-8cd4-4d29-bacb-8f791c5777cd
   * Codename: redirect_url
   *
   * Relative if ketnicocloud.com url, absolute if the url is external
   */
  redirectUrl: Elements.TextElement;
}>;
