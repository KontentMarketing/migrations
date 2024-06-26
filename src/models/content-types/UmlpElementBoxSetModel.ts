import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { ContentBoxModel } from './ContentBoxModel';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * UMLP element - Box Set
 * Id: a6916ac6-b6d2-4091-9b42-75ce018d9c6c
 * Codename: umlp_element___box_set
 */
export type UmlpElementBoxSetModel = IContentItem<{
  /**
   * Boxes (modular_content)
   * Required: true
   * Id: e6a4bd0c-a7a0-4200-bc62-d84e98f9470d
   * Codename: boxes
   */
  boxes: Elements.LinkedItemsElement<ContentBoxModel>;
}>;
