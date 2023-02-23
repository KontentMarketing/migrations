import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { EnterpriseFeatureKkModel } from './EnterpriseFeatureKkModel';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * UMLP element - Feature Links List
 * Id: 6a12f8ef-aa1f-4fb9-8265-cc5f40533e20
 * Codename: umlp_element___feature_links_list
 */
export type UmlpElementFeatureLinksListModel = IContentItem<{
  /**
   * Heading (text)
   * Required: false
   * Id: 01a08e86-1c4c-4efc-9c90-68452b54c16b
   * Codename: heading
   */
  heading: Elements.TextElement;

  /**
   * Features (modular_content)
   * Required: true
   * Id: 30707119-a39b-4da6-ad14-74a52dee553f
   * Codename: features
   */
  features: Elements.LinkedItemsElement<EnterpriseFeatureKkModel>;
}>;
