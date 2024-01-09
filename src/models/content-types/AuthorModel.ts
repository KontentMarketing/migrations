import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { SitemapMetadata } from '../content-type-snippets/sitemap_metadata';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Author
 * Id: e5c98bce-7262-4b13-8931-b7580338cb1d
 * Codename: author
 */
export type AuthorModel = IContentItem<{
  /**
   * Name (text)
   * Required: true
   * Id: ba62dc21-db31-80c1-efcd-8e9d198bb203
   * Codename: name
   */
  name: Elements.TextElement;

  /**
   * URL slug (url_slug)
   * Required: false
   * Id: c2be8699-9fe5-49de-9675-16c1a3ef4fa6
   * Codename: url_slug
   */
  urlSlug: Elements.UrlSlugElement;

  /**
   * Photo (asset)
   * Required: false
   * Id: eb8640e8-edf3-48db-92a6-dab5248b7a85
   * Codename: photo
   */
  photo: Elements.AssetsElement;

  /**
   * Description (rich_text)
   * Required: false
   * Id: 0febc84f-3218-480d-a8ed-daa760a9428b
   * Codename: description
   */
  description: Elements.RichTextElement;

  /**
   * Position (text)
   * Required: false
   * Id: 505fe9d9-df0a-4862-8b27-83bc5f154d8f
   * Codename: position
   */
  position: Elements.TextElement;

  /**
   * Company (text)
   * Required: false
   * Id: 06403903-1a73-4fdb-8768-77df2516a1cf
   * Codename: company
   */
  company: Elements.TextElement;

  /**
   * Twitter URL (text)
   * Required: false
   * Id: 3fd4bf9e-1306-4f36-a44d-2cbbba732955
   * Codename: twitter_url
   */
  twitterUrl: Elements.TextElement;

  /**
   * LinkedIn URL (text)
   * Required: false
   * Id: a8d56444-2362-4f6a-a6cf-f7ee0bb40238
   * Codename: linkedin_url
   */
  linkedinUrl: Elements.TextElement;

  /**
   * Email (text)
   * Required: false
   * Id: b886f385-80b0-4abd-9dcd-f47d43709274
   * Codename: email
   */
  email: Elements.TextElement;
}> &
  SitemapMetadata;
