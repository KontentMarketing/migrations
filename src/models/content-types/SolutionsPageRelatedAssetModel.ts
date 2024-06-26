import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Solutions Page - Related Asset
 * Id: 0a70b5e2-5fbf-4383-b8f3-6c5561e8218f
 * Codename: solutions_page___related_asset
 */
export type SolutionsPageRelatedAssetModel = IContentItem<{
  /**
   * Title (text)
   * Required: false
   * Id: c0315f93-5bfb-4307-b2ee-b3efb3272684
   * Codename: title
   */
  title: Elements.TextElement;

  /**
   * Author (text)
   * Required: false
   * Id: 8d42cf07-f038-4078-9d78-e4682fe40230
   * Codename: author
   */
  author: Elements.TextElement;

  /**
   * URL (text)
   * Required: false
   * Id: ce1d175e-a2b9-49d2-8758-f07bb546aebc
   * Codename: url
   */
  url: Elements.TextElement;

  /**
   * Publishing date (date_time)
   * Required: false
   * Id: 03724766-3e2f-4abd-b84f-d574bb8711cd
   * Codename: publishing_date
   */
  publishingDate: Elements.DateTimeElement;

  /**
   * Type (multiple_choice)
   * Required: false
   * Id: 21bdb06c-ae24-4c1c-98eb-e845eb6f2814
   * Codename: type
   */
  type: Elements.MultipleChoiceElement;

  /**
   * Header Image (asset)
   * Required: false
   * Id: e5e998e6-8c1c-449c-979d-139f7eb719d6
   * Codename: header_image
   */
  headerImage: Elements.AssetsElement;
}>;
