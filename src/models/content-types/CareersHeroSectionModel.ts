import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { XLHeading } from '../content-type-snippets/xl_heading';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Careers - Hero Section
 * Id: b00c2161-f5e5-4747-9ba3-5c741e2ec756
 * Codename: careers___hero_section
 */
export type CareersHeroSectionModel = IContentItem<{
  /**
   * Heading (text)
   * Required: true
   * Id: ddd4e36b-f8e6-451f-a48f-67a0c5221141
   * Codename: heading
   */
  heading: Elements.TextElement;

  /**
   * Text (rich_text)
   * Required: true
   * Id: c85e1b98-6e69-4bd3-ad6c-de42a642747e
   * Codename: text
   */
  text: Elements.RichTextElement;

  /**
   * Image (asset)
   * Required: true
   * Id: cbb49ecf-ea21-4d45-a635-dcee7414c66b
   * Codename: image
   */
  image: Elements.AssetsElement;
}> &
  XLHeading;
