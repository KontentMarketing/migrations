import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { HeroKK } from '../content-type-snippets/hero_kk';
import { IntegrationModel } from './IntegrationModel';
import { CtaBannerComponentModel } from './CtaBannerComponentModel';
import { Metadata } from '../content-type-snippets/metadata';
import { Opengraph } from '../content-type-snippets/opengraph';
import { ReleaseProjects } from '../taxonomies/release_projects';
import { SitemapMetadata } from '../content-type-snippets/sitemap_metadata';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Integrations page
 * Id: efa186ac-8d24-4bc3-940c-df9136dbded6
 * Codename: integrations_page
 */
export type IntegrationsPageModel = IContentItem<{
  /**
   * Integrations schema (asset)
   * Required: false
   * Id: fb6241c2-cf06-4bb7-96d9-ad49607aea97
   * Codename: integrations_schema
   */
  integrationsSchema: Elements.AssetsElement;

  /**
   * Available Integrations Headline (rich_text)
   * Required: false
   * Id: d92241e4-f69e-4ad6-9133-bf98e593ab2f
   * Codename: available_integrations_headline
   */
  availableIntegrationsHeadline: Elements.RichTextElement;

  /**
   * Coming Soon Headline (rich_text)
   * Required: false
   * Id: 9f596e17-8b1b-42e2-8329-fd631888c0f4
   * Codename: coming_soon_headline
   */
  comingSoonHeadline: Elements.RichTextElement;

  /**
   * Categories Title (text)
   * Required: false
   * Id: d8db413e-d7c1-4ca3-91a6-75df94a6fd86
   * Codename: categories_title
   */
  categoriesTitle: Elements.TextElement;

  /**
   * Coming Soon Title (text)
   * Required: false
   * Id: 14c00d9e-3e17-4b12-af92-e080d0cb9d83
   * Codename: coming_soon_title
   */
  comingSoonTitle: Elements.TextElement;

  /**
   * Link Title (text)
   * Required: false
   * Id: 952fbf95-c35e-463f-8328-1c89c48f705b
   * Codename: link_title
   */
  linkTitle: Elements.TextElement;

  /**
   * Coming Soon Message (rich_text)
   * Required: false
   * Id: 771ad48f-e9bd-46de-a15e-413f7422b236
   * Codename: coming_soon_message
   */
  comingSoonMessage: Elements.RichTextElement;

  /**
   * No Integration Found Message (rich_text)
   * Required: false
   * Id: 89bae98e-118b-4429-94a4-eff38060568a
   * Codename: no_integration_found_message
   */
  noIntegrationFoundMessage: Elements.RichTextElement;

  /**
   * Integration Items (modular_content)
   * Required: false
   * Id: d26411aa-480a-4e91-b824-906fb5ab3694
   * Codename: integration_items
   */
  integrationItems: Elements.LinkedItemsElement<IntegrationModel>;

  /**
   * CTA Banner (modular_content)
   * Required: false
   * Id: f8962098-e292-414d-9248-3e6017b50fef
   * Codename: cta_banner
   */
  ctaBanner: Elements.LinkedItemsElement<CtaBannerComponentModel>;

  /**
   * Available Integrations Title (text)
   * Required: false
   * Id: 6489988b-0c9e-4e69-84b0-4ae18431145f
   * Codename: available_integrations_title
   *
   * Outdated
   */
  availableIntegrationsTitle: Elements.TextElement;

  /**
   * Type Title (text)
   * Required: false
   * Id: 14e85899-4425-4f88-934c-130763e1d7a7
   * Codename: type_title
   */
  typeTitle: Elements.TextElement;

  /**
   * Hero Title (text)
   * Required: false
   * Id: a3a34fa9-4e95-4931-a5a3-f67b6b44417b
   * Codename: hero_title
   *
   * Outdated
   */
  heroTitle: Elements.TextElement;

  /**
   * Hero Perex (rich_text)
   * Required: false
   * Id: 55cbcdbd-9a4d-42b9-a3a1-b3939fde7ea1
   * Codename: hero_perex
   *
   * Outdated
   */
  heroPerex: Elements.RichTextElement;

  /**
   * Hero Image (asset)
   * Required: false
   * Id: 71b60913-6b47-4b11-830a-605f1a9d9276
   * Codename: hero_image
   *
   * Outdated
   */
  heroImage: Elements.AssetsElement;

  /**
   * Release projects (taxonomy)
   * Required: false
   * Id: 960fb2d3-c72e-41b9-9231-0eda88f3e92d
   * Codename: release_projects
   */
  releaseProjects: Elements.TaxonomyElement<ReleaseProjects>;
}> &
  HeroKK &
  Metadata &
  Opengraph &
  SitemapMetadata;
