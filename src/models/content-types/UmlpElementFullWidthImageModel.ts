import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * UMLP element - Full Width Image
 * Id: 1a5b2970-8a10-43c3-99af-770d7236218d
 * Codename: umlp_element___full_width_image
 */
export type UmlpElementFullWidthImageModel = IContentItem<{
  /**
   * Image (asset)
   * Required: true
   * Id: 3d730b6c-fe29-4e0d-916e-cc4cadd04570
   * Codename: image
   */
  image: Elements.AssetsElement;

  /**
   * Theme (multiple_choice)
   * Required: true
   * Id: 5b90f316-a9c2-43f6-80fd-356060a7c860
   * Codename: theme
   *
   * Background of the section containing the image
   */
  theme: Elements.MultipleChoiceElement;

  /**
   * Image size (multiple_choice)
   * Required: true
   * Id: 233f97c8-64d9-4fb5-a09d-3861b6d49175
   * Codename: image_size
   */
  imageSize: Elements.MultipleChoiceElement;
}>;
