import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { TestimonialModel } from './TestimonialModel';
import { SharedContentModel } from './SharedContentModel';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * UMLP Element - Testimonial Slider
 * Id: 75fedae4-76a0-4e78-a510-bb6c19ab796f
 * Codename: umlp_element___testimonial_slider
 */
export type UmlpElementTestimonialSliderModel = IContentItem<{
  /**
   * Type (multiple_choice)
   * Required: true
   * Id: c9da29cf-6d1a-4cda-9b10-97a244ce770c
   * Codename: type
   */
  type: Elements.MultipleChoiceElement;

  /**
   * Heading (rich_text)
   * Required: false
   * Id: bd610944-f712-456e-aa2c-22418c09001f
   * Codename: heading__rich
   */
  headingRich: Elements.RichTextElement;

  /**
   * Text (rich_text)
   * Required: false
   * Id: 597b8930-6ec1-4d6f-a627-192ba1e61889
   * Codename: text
   */
  text: Elements.RichTextElement;

  /**
   * Testimonials (modular_content)
   * Required: true
   * Id: a9138057-8b48-442b-969c-0d5d107b0675
   * Codename: testimonials
   */
  testimonials: Elements.LinkedItemsElement<TestimonialModel>;

  /**
   * CTA (modular_content)
   * Required: false
   * Id: 5d4328f6-1993-4dd3-bd57-81be21759d86
   * Codename: cta
   *
   * Optional CTA displayed below the testimonials
   */
  cta: Elements.LinkedItemsElement<SharedContentModel>;
}>;
