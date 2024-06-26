import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { SharedContentModel } from './SharedContentModel';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * UMLP element - Expandable Slider - Slide
 * Id: 2c15a4c7-3db3-49ac-9ab8-aa37b5a94c72
 * Codename: umlp_element___expandable_slider___slide
 */
export type UmlpElementExpandableSliderSlideModel = IContentItem<{
  /**
   * Heading (rich_text)
   * Required: true
   * Id: 159f546c-1569-401b-bea1-9c1e33d1e12f
   * Codename: heading
   */
  heading: Elements.RichTextElement;

  /**
   * Text (rich_text)
   * Required: true
   * Id: b3e2638c-51ba-4444-9705-5816c29abc3b
   * Codename: text
   */
  text: Elements.RichTextElement;

  /**
   * Button (modular_content)
   * Required: false
   * Id: a08679cb-45b1-43f5-903e-8e89d6b661c5
   * Codename: button
   */
  button: Elements.LinkedItemsElement<SharedContentModel>;

  /**
   * Asset (asset)
   * Required: true
   * Id: 68c36322-b6d9-47ff-bd25-0cf373706f1d
   * Codename: asset
   */
  asset: Elements.AssetsElement;
}>;
