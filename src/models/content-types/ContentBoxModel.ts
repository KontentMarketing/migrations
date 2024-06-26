import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Content Box
 * Id: be10cd75-3881-4cea-961b-d7fb0264d64f
 * Codename: content_box
 */
export type ContentBoxModel = IContentItem<{
  /**
   * Line 1 (text)
   * Required: false
   * Id: c99f0482-b581-1d39-e6c1-c472979a0bd5
   * Codename: line_1
   */
  line1: Elements.TextElement;

  /**
   * Line 2 (text)
   * Required: false
   * Id: 3a67b2a7-2243-9504-4853-d64868b4e08c
   * Codename: line_2
   */
  line2: Elements.TextElement;

  /**
   * Image (asset)
   * Required: false
   * Id: 9de9287d-fc6b-bd92-8634-f3aa24214cad
   * Codename: image
   */
  image: Elements.AssetsElement;

  /**
   * Image ALT (text)
   * Required: false
   * Id: 6475e711-5396-1c34-c1ee-929f3abb146b
   * Codename: image_alt
   */
  imageAlt: Elements.TextElement;

  /**
   * Description (text)
   * Required: false
   * Id: d93d37a3-0ee2-e958-76a8-55b6fd6680f3
   * Codename: description
   */
  description: Elements.TextElement;
}>;
