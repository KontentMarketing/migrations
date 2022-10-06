import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { SitemapMetadata } from '../content-type-snippets/sitemap_metadata';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Custom Page
 * Id: 639c809d-316b-43a7-ba23-18c559a496fc
 * Codename: custom_page
 */
export type CustomPageModel = IContentItem<{
  /**
   * Header (text)
   * Required: false
   * Id: d4a60880-eaae-6aa5-5eae-758dbafd3587
   * Codename: header
   */
  header: Elements.TextElement;

  /**
   * Content (rich_text)
   * Required: true
   * Id: e3a7145e-2899-faf4-c8d6-eef73175f10e
   * Codename: content
   */
  content: Elements.RichTextElement;

  /**
   * URL (url_slug)
   * Required: true
   * Id: a2da6d80-18a2-9fa9-f7ea-58d72cd60966
   * Codename: url
   */
  url: Elements.UrlSlugElement;

  /**
   * Metadata Title (text)
   * Required: false
   * Id: ead1838f-2355-5ce2-51b4-81c5c465df2e
   * Codename: metadata_title
   */
  metadataTitle: Elements.TextElement;

  /**
   * Metadata Description (text)
   * Required: false
   * Id: c2632813-40cd-2464-405c-257e0374c609
   * Codename: metadata_description
   */
  metadataDescription: Elements.TextElement;
}> &
  SitemapMetadata;