import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { UmlpElementContentBlocksWithAssetItemModel } from './UmlpElementContentBlocksWithAssetItemModel';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * UMLP element - Content Blocks with Asset
 * Id: 4c30b0fa-a9f8-4114-8f9b-0779502bd3e4
 * Codename: umlp_element___content_blocks_with_asset
 */
export type UmlpElementContentBlocksWithAssetModel = IContentItem<{
  /**
   * Heading (rich_text)
   * Required: false
   * Id: 3980720f-305e-4f97-bdc0-416989a4100b
   * Codename: heading
   *
   * Optional heading
   */
  heading: Elements.RichTextElement;

  /**
   * Tabs (modular_content)
   * Required: true
   * Id: 40a2767a-a14b-4122-b8d7-a1fb1a469687
   * Codename: tabs
   */
  tabs: Elements.LinkedItemsElement<UmlpElementContentBlocksWithAssetItemModel>;
}>;