import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * UMLP element - Static Website Generator Feature
 * Id: def8feb3-bce2-4f85-acf7-eb9dffd124f8
 * Codename: umlp_element___static_website_generator_feature
 */
export type UmlpElementStaticWebsiteGeneratorFeatureModel = IContentItem<{
  /**
   * Headline (rich_text)
   * Required: false
   * Id: 67e039f3-5a93-447e-bec2-06ecb3a686a2
   * Codename: headline
   */
  headline: Elements.RichTextElement;

  /**
   * Lead Paragraph (rich_text)
   * Required: false
   * Id: 53344a20-df10-47b3-8c08-dc73f28710e3
   * Codename: lead_paragraph
   */
  leadParagraph: Elements.RichTextElement;
}>;
