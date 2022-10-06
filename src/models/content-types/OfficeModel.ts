import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { AddressModel } from './AddressModel';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Office
 * Id: 49815a87-f0c2-4997-86ba-7df08b3306cb
 * Codename: office
 */
export type OfficeModel = IContentItem<{
  /**
   * Name (text)
   * Required: true
   * Id: 5542891c-0941-0760-3c35-c30e80c4d695
   * Codename: name
   */
  name: Elements.TextElement;

  /**
   * Flag (asset)
   * Required: true
   * Id: 17d4991e-0be6-6e67-8bf3-6ef2682a5249
   * Codename: flag
   */
  flag: Elements.AssetsElement;

  /**
   * Photo (asset)
   * Required: true
   * Id: 83dc1472-9ad6-497c-8a3b-9866063355f6
   * Codename: photo
   */
  photo: Elements.AssetsElement;

  /**
   * Address (modular_content)
   * Required: true
   * Id: 3fd48a17-525c-49d7-8cec-1384cac084f5
   * Codename: address_3fd48a1
   */
  address3fd48a1: Elements.LinkedItemsElement<AddressModel>;

  /**
   * Address (rich_text)
   * Required: true
   * Id: 75ebad8a-f362-cc40-9012-a9e2a9b24c18
   * Codename: address
   */
  address: Elements.RichTextElement;

  /**
   * Phone (sales) (text)
   * Required: true
   * Id: 38258c77-dd84-4e56-8dbe-1064fb5c4e0f
   * Codename: phone__sales_
   *
   * E.g. +31-682144594
   */
  phoneSales: Elements.TextElement;

  /**
   * Phone (sales - alt) (text)
   * Required: false
   * Id: 16d8a3d6-4687-466b-96a4-bfc34edbd39d
   * Codename: phone__sales___alt_
   *
   * E.g. +31-682144594
   */
  phoneSalesAlt: Elements.TextElement;
}>;