import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { ReleaseProjects } from '../taxonomies/release_projects';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Enterprise Feature
 * Id: 8946c291-fb00-4701-a0c0-68969ff1a9f4
 * Codename: enterprise_feature
 */
export type EnterpriseFeatureModel = IContentItem<{
  /**
   * Name (text)
   * Required: true
   * Id: cca32264-087c-45e1-b00a-ad7bd6d94598
   * Codename: name
   */
  name: Elements.TextElement;

  /**
   * Description (rich_text)
   * Required: false
   * Id: 68a6c10f-7a0c-4a8a-b0b8-c852b113f639
   * Codename: description
   */
  description: Elements.RichTextElement;

  /**
   * URL (text)
   * Required: false
   * Id: f34170eb-c9c7-4842-b20f-1595aa7116c7
   * Codename: url
   */
  url: Elements.TextElement;

  /**
   * Tracking code (text)
   * Required: false
   * Id: d0999016-f8f5-421d-9916-ef38b6e4fa22
   * Codename: tracking_code
   */
  trackingCode: Elements.TextElement;

  /**
   * Release projects (taxonomy)
   * Required: false
   * Id: f728bd6f-a8f8-4999-a0c2-9b00d768e525
   * Codename: release_projects
   */
  releaseProjects: Elements.TaxonomyElement<ReleaseProjects>;
}>;