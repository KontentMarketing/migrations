import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { LinkModel } from './LinkModel';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * UMLP element - G2 badges
 * Id: 84ff4739-6eff-4fb2-9505-1ea1a44b68a3
 * Codename: umlp_element___g2_badges
 */
export type UmlpElementG2BadgesModel = IContentItem<{
  /**
   * Badges (modular_content)
   * Required: true
   * Id: e29ef721-9afe-4f7f-b9a8-cbaea43ece64
   * Codename: badges
   */
  badges: Elements.LinkedItemsElement<LinkModel>;
}>;