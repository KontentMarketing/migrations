import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { SitemapMetadata } from '../content-type-snippets/sitemap_metadata';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Glossary Term
 * Id: 179ce727-a20c-4c37-b247-b2a0d5047b38
 * Codename: glossary_term
 */
export type GlossaryTermModel = IContentItem<{
  /**
   * Title (text)
   * Required: true
   * Id: 1a133000-cc6f-42fe-a483-b1640a9f887f
   * Codename: title
   */
  title: Elements.TextElement;

  /**
   * Short description (rich_text)
   * Required: false
   * Id: 98c26026-5c2c-4967-8451-f27f6b53f937
   * Codename: short_description
   */
  shortDescription: Elements.RichTextElement;

  /**
   * Description (rich_text)
   * Required: true
   * Id: f9dd8eaf-942b-470f-acc9-27132c65eb7b
   * Codename: description
   */
  description: Elements.RichTextElement;

  /**
   * Related items (modular_content)
   * Required: false
   * Id: 43fd662e-1183-473a-8ea4-a71e12d4556e
   * Codename: related_items
   */
  relatedItems: Elements.LinkedItemsElement<GlossaryTermModel>;

  /**
   * Url slug (url_slug)
   * Required: false
   * Id: 2b604b7e-9107-4f0f-8d6a-fd0da66598fc
   * Codename: url_slug
   */
  urlSlug: Elements.UrlSlugElement;

  /**
   * OG Image (asset)
   * Required: false
   * Id: 627f5e03-acbd-4389-9610-754ef8a704b4
   * Codename: og_image
   */
  ogImage: Elements.AssetsElement;
}> &
  SitemapMetadata;
