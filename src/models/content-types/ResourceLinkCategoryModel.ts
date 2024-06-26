import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { ResourceLinkModel } from './ResourceLinkModel';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Resource link category
 * Id: bcd174a9-bf1d-435e-b24e-5b91c90dda38
 * Codename: resource_link_category
 */
export type ResourceLinkCategoryModel = IContentItem<{
  /**
   * Category title (text)
   * Required: false
   * Id: c31ede0f-0278-41b1-bf36-247d7e3f4ea8
   * Codename: category_title
   */
  categoryTitle: Elements.TextElement;

  /**
   * Resource links (modular_content)
   * Required: false
   * Id: 8dae5005-3e80-40de-bc2a-7556a1db2e3b
   * Codename: resource_links
   */
  resourceLinks: Elements.LinkedItemsElement<ResourceLinkModel>;
}>;
