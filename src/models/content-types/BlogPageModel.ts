import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { CtaBannerComponentModel } from './CtaBannerComponentModel';
import { SitemapMetadata } from '../content-type-snippets/sitemap_metadata';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Blog page
 * Id: 9b70398d-545c-4769-acc7-ef8511f0fdfe
 * Codename: blog_page
 */
export type BlogPageModel = IContentItem<{
  /**
   * Headline for Featured blog posts (text)
   * Required: false
   * Id: 45df0c4f-b398-515d-ca62-6a88e762ee60
   * Codename: headline_for_featured_blog_posts
   */
  headlineForFeaturedBlogPosts: Elements.TextElement;

  /**
   * Featured blog post (modular_content)
   * Required: true
   * Id: a17eaa7d-7224-2a86-b723-1e31ad5bb8d4
   * Codename: featured_blog_post
   */
  featuredBlogPost: Elements.LinkedItemsElement<IContentItem>;

  /**
   * Second level featured blog posts (modular_content)
   * Required: true
   * Id: 64e3681e-3109-0947-4823-74c162fba444
   * Codename: second_level_featured_blog_posts
   */
  secondLevelFeaturedBlogPosts: Elements.LinkedItemsElement<IContentItem>;

  /**
   * Headline for category filter (text)
   * Required: false
   * Id: 1065b82b-68ba-4c84-2428-f21b43ada789
   * Codename: headline_for_category_filter
   *
   * It is visible only on mobile.
   */
  headlineForCategoryFilter: Elements.TextElement;

  /**
   * Metadata title (text)
   * Required: false
   * Id: 668b78cd-ebeb-a937-a0f6-713d6a3cf398
   * Codename: metadata_title
   */
  metadataTitle: Elements.TextElement;

  /**
   * Metadata description (text)
   * Required: false
   * Id: 16397b8d-3358-b894-998d-aef3ac363c8f
   * Codename: metadata_description
   */
  metadataDescription: Elements.TextElement;

  /**
   * Metadata image (asset)
   * Required: true
   * Id: 53c48837-0a17-4991-89d9-34bf0b9ef164
   * Codename: metadata_image
   */
  metadataImage: Elements.AssetsElement;

  /**
   * Primary CTA (modular_content)
   * Required: true
   * Id: 2cea0d57-f114-40e2-aebc-d7a22713ef37
   * Codename: primary_cta
   */
  primaryCta: Elements.LinkedItemsElement<CtaBannerComponentModel>;
}> &
  SitemapMetadata;
