import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { ColorPattern } from '../content-type-snippets/color_pattern';
import { SharedContentModel } from './SharedContentModel';
import { UmlpElementLogoStripModel } from './UmlpElementLogoStripModel';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * UMLP element - Home Hero Section
 * Id: edc20dd2-4d98-4728-92b0-851aa8869b9c
 * Codename: umlp_element___home_hero_section
 */
export type UmlpElementHomeHeroSectionModel = IContentItem<{
  /**
   * Heading (rich_text)
   * Required: true
   * Id: abf1dec2-2c69-4023-aa64-5b53fdbaac81
   * Codename: heading
   *
   * New heading for the rebranded site
   */
  heading: Elements.RichTextElement;

  /**
   * Hero lead paragraph (rich_text)
   * Required: false
   * Id: 6321af46-ac13-4a95-bb17-d1520c39f24b
   * Codename: hero_lead_paragraph
   */
  heroLeadParagraph: Elements.RichTextElement;

  /**
   * Hero primary CTA (modular_content)
   * Required: true
   * Id: 3759423b-84c6-4a71-b8dd-4ced70c6207e
   * Codename: hero_primary_cta
   */
  heroPrimaryCta: Elements.LinkedItemsElement<SharedContentModel>;

  /**
   * Hero secondary CTA (modular_content)
   * Required: false
   * Id: 71a4d6ae-d7ab-4a81-8512-300135130779
   * Codename: hero_secondary_cta
   */
  heroSecondaryCta: Elements.LinkedItemsElement<SharedContentModel>;

  /**
   * Hero CTA separator (text)
   * Required: false
   * Id: a0b7a08a-ef02-41c3-8716-99b9a193d982
   * Codename: hero_cta_separator
   */
  heroCtaSeparator: Elements.TextElement;

  /**
   * Hero image (asset)
   * Required: false
   * Id: 18ce37b1-e250-4852-9e25-89b9cbd82f61
   * Codename: hero_image
   */
  heroImage: Elements.AssetsElement;

  /**
   * Logos (modular_content)
   * Required: true
   * Id: a328cb8d-54d8-41bd-9844-1be3bc938147
   * Codename: logos
   */
  logos: Elements.LinkedItemsElement<UmlpElementLogoStripModel>;
}> &
  ColorPattern;
