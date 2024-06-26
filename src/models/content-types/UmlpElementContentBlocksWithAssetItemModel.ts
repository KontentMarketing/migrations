import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * UMLP element - Content Blocks with Asset - Item
 * Id: 5d0fe80f-c288-4a86-b4d6-e2324bc07590
 * Codename: umlp_element___content_blocks_with_asset___item
 */
export type UmlpElementContentBlocksWithAssetItemModel = IContentItem<{
  /**
   * Icon (custom)
   * Required: true
   * Id: 3b7b8a7d-b76d-47b1-97fe-3c1e7b396869
   * Codename: icon
   */
  icon: Elements.CustomElement;

  /**
   * Content (rich_text)
   * Required: true
   * Id: dd5a60ff-1e5f-4686-93a7-7ed2e7b7cae8
   * Codename: content
   */
  content: Elements.RichTextElement;

  /**
   * Image (asset)
   * Required: false
   * Id: 76b8ec6c-4f34-4f7f-bed5-83ca46baee3a
   * Codename: image
   */
  image: Elements.AssetsElement;

  /**
   * Video URL (text)
   * Required: false
   * Id: 53739874-0ca5-45a4-a8ff-102987fa4154
   * Codename: video_url
   *
   * YouTube video URL
   */
  videoUrl: Elements.TextElement;
}>;
