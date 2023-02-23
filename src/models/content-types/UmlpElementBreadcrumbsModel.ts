import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { ResourceModel } from './ResourceModel';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * UMLP element - Breadcrumbs
 * Id: 21b2931c-96c9-4b42-8022-9c8f6d208979
 * Codename: umlp_element___breadcrumbs
 */
export type UmlpElementBreadcrumbsModel = IContentItem<{
  /**
   * Resource (modular_content)
   * Required: false
   * Id: 67e5918c-43e7-4d30-9ff3-b39a8c05236d
   * Codename: resource
   */
  resource: Elements.LinkedItemsElement<ResourceModel>;
}>;
