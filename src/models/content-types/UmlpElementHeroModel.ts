import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { ColorPattern } from '../content-type-snippets/color_pattern';
import { XLHeading } from '../content-type-snippets/xl_heading';
import { SharedContentModel } from './SharedContentModel';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * UMLP element - Hero
 * Id: 0608ee48-1f75-431a-b518-b9ed87986b15
 * Codename: umlp_element___hero
 */
export type UmlpElementHeroModel = IContentItem<{
  /**
   * Headline (rich_text)
   * Required: false
   * Id: b5d6d946-2334-4555-b81d-88c94592cf73
   * Codename: headline
   */
  headline: Elements.RichTextElement;

  /**
   * Lead Paragraph (rich_text)
   * Required: false
   * Id: ff0b0106-c3f1-4952-aaf6-2fb920ea07e0
   * Codename: lead_paragraph
   */
  leadParagraph: Elements.RichTextElement;

  /**
   * CTA (modular_content)
   * Required: false
   * Id: 30ea65f0-ca95-455e-97ec-6356b66dce3c
   * Codename: cta
   */
  cta: Elements.LinkedItemsElement<SharedContentModel>;

  /**
   * Button divider text (text)
   * Required: false
   * Id: b150fe25-95c7-451d-ba60-219c0dd63f87
   * Codename: button_divider_text
   *
   * If there is more than 1 CTA button used, this field will be used as a divider between the two btns e.g. "or", "and" etc. Defaults to "or".
   */
  buttonDividerText: Elements.TextElement;

  /**
   * Image (asset)
   * Required: false
   * Id: 17b27beb-468e-4da7-a103-47ade635bde9
   * Codename: image
   *
   * Use 928x626 image resolution. If the image is bigger, it will get cropped.
   */
  image: Elements.AssetsElement;

  /**
   * Video URL (text)
   * Required: false
   * Id: 0813c810-938c-4e04-9a71-23340d8d41d1
   * Codename: video_url
   */
  videoUrl: Elements.TextElement;

  /**
   * Video Poster (asset)
   * Required: false
   * Id: 50aa58ef-d8ea-4e47-b816-bf0dbeb79a20
   * Codename: video_poster
   */
  videoPoster: Elements.AssetsElement;

  /**
   * Image type (multiple_choice)
   * Required: false
   * Id: 88841543-93c0-4ded-9214-563f65dd3896
   * Codename: image_type
   */
  imageType: Elements.MultipleChoiceElement;

  /**
   * Text width (multiple_choice)
   * Required: false
   * Id: b6cb95c3-233e-427f-b948-a12ebf1c69bc
   * Codename: text_width
   *
   * Affects size of the hero text on desktop
   */
  textWidth: Elements.MultipleChoiceElement;

  /**
   * Trial Form Title (text)
   * Required: false
   * Id: 2d027178-6fdc-416d-93f3-abc4f095ffa6
   * Codename: trial_form_title
   *
   * Trial form will be displayed on page only if "Trial Form Title" is specified.
   */
  trialFormTitle: Elements.TextElement;

  /**
   * Trial Form CTA Label (text)
   * Required: false
   * Id: 311289ed-cf59-47a1-8770-a5414aa3fcdb
   * Codename: trial_form_cta_label
   */
  trialFormCtaLabel: Elements.TextElement;

  /**
   * CSS Class (text)
   * Required: false
   * Id: 4542f1d7-1cc0-45bd-b6a3-cd07ea77e479
   * Codename: css_class
   */
  cssClass: Elements.TextElement;

  /**
   * Hide breadcrumbs (multiple_choice)
   * Required: false
   * Id: 0b3e8702-229e-42b3-ad70-225484b12109
   * Codename: hide_breadcrumbs
   *
   * Breadcrumbs are being displayed by default
   */
  hideBreadcrumbs: Elements.MultipleChoiceElement;
}> &
  ColorPattern &
  XLHeading;
