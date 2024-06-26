import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { EnhancedContentBlockModel } from './EnhancedContentBlockModel';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * UMLP element - RoC - Pillars
 * Id: 07299668-01e7-4787-81ac-f0f14aac9402
 * Codename: umlp_element___roc___pillars
 */
export type UmlpElementRocPillarsModel = IContentItem<{
  /**
   * Pillar overviews (modular_content)
   * Required: true
   * Id: a6de70ec-b87e-4a53-ba0e-cd0d5ddf589b
   * Codename: pillar_overviews
   */
  pillarOverviews: Elements.LinkedItemsElement<EnhancedContentBlockModel>;
}>;
