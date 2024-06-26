import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { HeroKK } from '../content-type-snippets/hero_kk';
import { SharedContentModel } from './SharedContentModel';
import { UmlpElementVideoModel } from './UmlpElementVideoModel';
import { ContentCollaborationFloorModel } from './ContentCollaborationFloorModel';
import { IntegrationModel } from './IntegrationModel';
import { Metadata } from '../content-type-snippets/metadata';
import { Opengraph } from '../content-type-snippets/opengraph';
import { RichTestimonialModel } from './RichTestimonialModel';
import { ReleaseProjects } from '../taxonomies/release_projects';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Content Collaboration Page KK
 * Id: 2c3f9b48-0ca2-477e-b6eb-ba923d554368
 * Codename: content_collaboration_page_kk
 */
export type ContentCollaborationPageKkModel = IContentItem<{
  /**
   * Hero primary CTA (modular_content)
   * Required: false
   * Id: 2f3f9a3e-6768-42a4-b3c9-3b8cf8ffb13c
   * Codename: hero_primary_cta
   */
  heroPrimaryCta: Elements.LinkedItemsElement<SharedContentModel>;

  /**
   * Hero secondary CTA (modular_content)
   * Required: true
   * Id: 7194c194-46a6-4ec1-bdfe-5f1a7efa03ed
   * Codename: hero_secondary_cta
   */
  heroSecondaryCta: Elements.LinkedItemsElement<SharedContentModel>;

  /**
   * Hero CTA separator (text)
   * Required: false
   * Id: ce18a184-aaf3-432f-ae54-afd8f8d9b49a
   * Codename: hero_cta_separator
   */
  heroCtaSeparator: Elements.TextElement;

  /**
   * Video (modular_content)
   * Required: false
   * Id: 72c52abb-85bd-4076-92c0-34d99a971905
   * Codename: video
   */
  video: Elements.LinkedItemsElement<UmlpElementVideoModel>;

  /**
   * Floors (modular_content)
   * Required: false
   * Id: 257ea448-dfc8-4c51-b4f7-76385ff44a47
   * Codename: floors
   */
  floors: Elements.LinkedItemsElement<ContentCollaborationFloorModel>;

  /**
   * Integrations heading (rich_text)
   * Required: false
   * Id: d40b175d-8f21-42e4-9dff-ce5c9291ebf9
   * Codename: integrations_heading
   */
  integrationsHeading: Elements.RichTextElement;

  /**
   * Integrations lead paragraph (rich_text)
   * Required: false
   * Id: 396776f8-948e-44f6-88d6-5b38ef77b1d3
   * Codename: integrations_lead_paragraph
   */
  integrationsLeadParagraph: Elements.RichTextElement;

  /**
   * Integrations list (modular_content)
   * Required: false
   * Id: 524b4f6d-e88a-40e2-a446-54a911306567
   * Codename: integrations_list
   */
  integrationsList: Elements.LinkedItemsElement<IntegrationModel>;

  /**
   * Integrations Cta (modular_content)
   * Required: false
   * Id: 068805d5-f390-4585-866b-4aa25c7a9f31
   * Codename: integrations_cta
   */
  integrationsCta: Elements.LinkedItemsElement<SharedContentModel>;

  /**
   * Testimonial 1 (modular_content)
   * Required: false
   * Id: eb6300c9-e4e5-4231-bf1e-d5ba9f20deb9
   * Codename: testimonial_1
   */
  testimonial1: Elements.LinkedItemsElement<RichTestimonialModel>;

  /**
   * Testimonial 2 (modular_content)
   * Required: false
   * Id: c326a15a-2b74-42c1-88f3-d1ca7b242d17
   * Codename: testimonial_2
   */
  testimonial2: Elements.LinkedItemsElement<RichTestimonialModel>;

  /**
   * Testimonial 3 (modular_content)
   * Required: false
   * Id: 3e272640-f47c-4c7f-b5e4-309ef43c9d58
   * Codename: testimonial_3
   */
  testimonial3: Elements.LinkedItemsElement<RichTestimonialModel>;

  /**
   * Release projects (taxonomy)
   * Required: false
   * Id: b31e6833-7ec7-4d25-b3b7-ea6f51dc9a62
   * Codename: release_projects
   */
  releaseProjects: Elements.TaxonomyElement<ReleaseProjects>;
}> &
  HeroKK &
  Metadata &
  Opengraph;
