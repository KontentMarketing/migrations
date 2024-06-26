import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { IntegrationModel } from './IntegrationModel';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * UMLP element - Integrations Listing
 * Id: b450d1c9-a766-4b1a-841a-e21eae232f4b
 * Codename: umlp_element___integrations_listing
 */
export type UmlpElementIntegrationsListingModel = IContentItem<{
  /**
   * Integrations (modular_content)
   * Required: true
   * Id: 27ad3f49-ec6d-4165-b713-d9a643e8a510
   * Codename: integrations
   */
  integrations: Elements.LinkedItemsElement<IntegrationModel>;
}>;
