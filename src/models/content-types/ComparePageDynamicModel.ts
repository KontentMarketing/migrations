import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { HeroKK } from '../content-type-snippets/hero_kk';
import { KontentSellingPointModel } from './KontentSellingPointModel';
import { BubbleModel } from './BubbleModel';
import { KontentUniqueFeatureModel } from './KontentUniqueFeatureModel';
import { CompareWithXTableModel } from './CompareWithXTableModel';
import { TableModel } from './TableModel';
import { AchievementModel } from './AchievementModel';
import { TestimonialModel } from './TestimonialModel';
import { CtaBannerComponentModel } from './CtaBannerComponentModel';
import { Metadata } from '../content-type-snippets/metadata';
import { SitemapMetadata } from '../content-type-snippets/sitemap_metadata';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Compare with X Page
 * Id: f05d92c8-fdbd-4a09-9efc-66c0ef5aca7a
 * Codename: compare_page_dynamic
 */
export type ComparePageDynamicModel = IContentItem<{
  /**
   * Heading (text)
   * Required: false
   * Id: 91b2162f-f035-4530-8959-37a4686acfed
   * Codename: selling_points_heading
   */
  sellingPointsHeading: Elements.TextElement;

  /**
   * Selling points (modular_content)
   * Required: false
   * Id: 151c78e0-2d8c-4dee-8df3-60f75c33076b
   * Codename: selling_points
   */
  sellingPoints: Elements.LinkedItemsElement<KontentSellingPointModel>;

  /**
   * Heading (text)
   * Required: false
   * Id: 0bc744c7-f6de-4ef6-b009-429e306de42e
   * Codename: unique_heading
   */
  uniqueHeading: Elements.TextElement;

  /**
   * Bubbles (modular_content)
   * Required: false
   * Id: 9859f082-3277-4003-9e98-47e2f4c2d1fe
   * Codename: unique_bubbles
   */
  uniqueBubbles: Elements.LinkedItemsElement<BubbleModel>;

  /**
   * Features (modular_content)
   * Required: false
   * Id: a932b044-12e8-44e9-a68f-d4d4627946aa
   * Codename: unique_features
   */
  uniqueFeatures: Elements.LinkedItemsElement<KontentUniqueFeatureModel>;

  /**
   * Comparison tables (modular_content)
   * Required: false
   * Id: 40fa5ddd-ab90-4c97-848b-d99affdd0047
   * Codename: comparison_tables
   */
  comparisonTables: Elements.LinkedItemsElement<
    CompareWithXTableModel | TableModel
  >;

  /**
   * Heading (text)
   * Required: false
   * Id: 9b66cd6e-2a9f-4406-8720-3199c96c6073
   * Codename: recognitions_heading
   */
  recognitionsHeading: Elements.TextElement;

  /**
   * Recognitions (modular_content)
   * Required: false
   * Id: a3797306-06ef-4e7e-a908-47d9700cd7e5
   * Codename: recognitions
   */
  recognitions: Elements.LinkedItemsElement<AchievementModel>;

  /**
   * Testimonial (modular_content)
   * Required: false
   * Id: e0ed8613-d21b-4cdd-8825-a621d5d7923f
   * Codename: testimonial
   */
  testimonial: Elements.LinkedItemsElement<TestimonialModel>;

  /**
   * CTA Banner (modular_content)
   * Required: false
   * Id: cf4fa282-b362-4c95-be16-2f91fc84079f
   * Codename: cta_banner
   */
  ctaBanner: Elements.LinkedItemsElement<CtaBannerComponentModel>;

  /**
   * URL Slug (url_slug)
   * Required: true
   * Id: 0de2fc61-305f-4a8c-b21c-eb24d1065fbf
   * Codename: url_slug
   */
  urlSlug: Elements.UrlSlugElement;
}> &
  HeroKK &
  Metadata &
  SitemapMetadata;
