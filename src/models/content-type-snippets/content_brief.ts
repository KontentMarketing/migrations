import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { Persona } from '../taxonomies/persona';
import { FunnelStage } from '../taxonomies/funnel_stage';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Content brief
 * Id: a1a6f4a2-fa99-4453-a7f7-a394b39ef663
 * Codename: content_brief
 */
export type ContentBrief = IContentItem<{
  /**
   * Persona (taxonomy)
   * Required: false
   * Id: 1047e025-1cf1-43ec-bb44-0ca354013f0c
   * Codename: content_brief__persona
   */
  contentBriefPersona: Elements.TaxonomyElement<Persona>;

  /**
   * Theme / Topic (rich_text)
   * Required: false
   * Id: f3c6b71e-3101-4039-a9f4-cf1eaab8b8a3
   * Codename: content_brief__theme___topic
   *
   * What we want to share with the audience? What is their takeaway, when they consume the content?
   */
  contentBriefThemeTopic: Elements.RichTextElement;

  /**
   * Motivation (rich_text)
   * Required: false
   * Id: f09f77d8-0113-4d06-8212-55090ca2d629
   * Codename: content_brief__motivation
   *
   * Why the given role cares about this content? why they want to consume it? What they want to achieve?
   */
  contentBriefMotivation: Elements.RichTextElement;

  /**
   * Funnel stage (taxonomy)
   * Required: false
   * Id: 2fd3f27a-98b0-4d2a-8374-6b6a9af42ea7
   * Codename: content_brief__funnel_stage
   */
  contentBriefFunnelStage: Elements.TaxonomyElement<FunnelStage>;

  /**
   * Transformation (rich_text)
   * Required: false
   * Id: aaa2c3d6-92f4-4da4-91c4-2dcbdd4b2ef5
   * Codename: content_brief__transformation
   *
   * What do you expect the given role to change in their behavior when they consume the content? What are they supposed to differently from that moment on?
   */
  contentBriefTransformation: Elements.RichTextElement;

  /**
   * Business goal (rich_text)
   * Required: false
   * Id: d10b8d9f-ff06-48ae-904c-ce52c57d5aa6
   * Codename: content_brief__business_goal
   *
   * Why we creating this content? What are the expected measurable results?
   */
  contentBriefBusinessGoal: Elements.RichTextElement;

  /**
   * Content outline (rich_text)
   * Required: false
   * Id: 77aeb141-9f86-4233-8940-463de2f85f49
   * Codename: content_brief__content_outline
   *
   * Provide brief steps on how your content will evolve
   */
  contentBriefContentOutline: Elements.RichTextElement;
}>;
