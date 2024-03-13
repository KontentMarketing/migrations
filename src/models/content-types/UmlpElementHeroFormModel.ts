import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { ColorPattern } from '../content-type-snippets/color_pattern';
import { XLHeading } from '../content-type-snippets/xl_heading';
import { UmlpElementAchievementsModel } from './UmlpElementAchievementsModel';
import { UmlpElementResourceTileGridModel } from './UmlpElementResourceTileGridModel';
import { UmlpElementCtaBannerModel } from './UmlpElementCtaBannerModel';
import { UmlpElementAchievementsV2Model } from './UmlpElementAchievementsV2Model';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * UMLP element - Hero Form
 * Id: 75ce0013-6574-472d-b3bf-dc1bd7a2a436
 * Codename: umlp_element___hero_form
 */
export type UmlpElementHeroFormModel = IContentItem<{
  /**
   * Headline (rich_text)
   * Required: false
   * Id: 4673d895-41dd-40be-8b62-d70d09f43df6
   * Codename: headline
   */
  headline: Elements.RichTextElement;

  /**
   * Text (rich_text)
   * Required: false
   * Id: 5672f5a6-1e50-45d7-9922-2f559303c78d
   * Codename: text
   */
  text: Elements.RichTextElement;

  /**
   * Hide breadcrumbs (multiple_choice)
   * Required: false
   * Id: 684cdfa4-3d52-416c-8e85-693683a64e2d
   * Codename: hide_breadcrumbs
   *
   * Breadcrumbs are being shown by default
   */
  hideBreadcrumbs: Elements.MultipleChoiceElement;

  /**
   * Hide image strip (multiple_choice)
   * Required: false
   * Id: 87530135-456d-4343-bb7c-2a3e9ed029f4
   * Codename: hide_image_strip
   *
   * Hides the default image strip
   */
  hideImageStrip: Elements.MultipleChoiceElement;

  /**
   * Text Second (rich_text)
   * Required: false
   * Id: 90215a98-1f70-4270-8861-cd533ee7df30
   * Codename: text_second
   */
  textSecond: Elements.RichTextElement;

  /**
   * Quote (text)
   * Required: false
   * Id: 64624b10-4bcb-41b3-8c88-a6bf14849453
   * Codename: quote
   */
  quote: Elements.TextElement;

  /**
   * Logo (asset)
   * Required: false
   * Id: b41bc01e-cd7e-4bd2-ba34-d223ecf16213
   * Codename: logo
   */
  logo: Elements.AssetsElement;

  /**
   * Hero image (asset)
   * Required: false
   * Id: 39226e9d-404e-4f73-9ec2-57b025732ad5
   * Codename: hero_image
   */
  heroImage: Elements.AssetsElement;

  /**
   * Image type (multiple_choice)
   * Required: true
   * Id: 6a77f6f5-ebd9-457a-a3ca-77501fc1d36f
   * Codename: image_type
   */
  imageType: Elements.MultipleChoiceElement;

  /**
   * Hero Video WebM (asset)
   * Required: false
   * Id: cde72e17-7065-4457-a4c7-49d6fb24afae
   * Codename: hero_video_webm
   */
  heroVideoWebm: Elements.AssetsElement;

  /**
   * Hero Video MP4 (asset)
   * Required: false
   * Id: 68f0d0c2-c6d2-4c7f-b3bc-f1a9b72d7e3a
   * Codename: hero_video_mp4
   */
  heroVideoMp4: Elements.AssetsElement;

  /**
   * Form heading (text)
   * Required: false
   * Id: 94cc4100-1360-4c40-8ed5-019826d82c2b
   * Codename: form_heading
   */
  formHeading: Elements.TextElement;

  /**
   * Button text (text)
   * Required: false
   * Id: 3a38ec5e-7704-49da-9aa3-74375b4ded62
   * Codename: button_text
   */
  buttonText: Elements.TextElement;

  /**
   * Thank you headline (rich_text)
   * Required: false
   * Id: 57710adf-93be-48b4-9324-cb79ef869455
   * Codename: thank_you_headline
   */
  thankYouHeadline: Elements.RichTextElement;

  /**
   * General thank you message (rich_text)
   * Required: false
   * Id: 7d5b79c1-c4e2-4be7-bec8-6752316bce27
   * Codename: general_thank_you_message
   *
   * General message for forms that don't have a dedicated thank you page (e.g. demo form)
   */
  generalThankYouMessage: Elements.RichTextElement;

  /**
   * General thank you message alternative (rich_text)
   * Required: false
   * Id: 782e4ce0-1bae-42a5-a7ea-09c73bfde4ee
   * Codename: general_thank_you_message_alternative
   *
   * Alternative version (e.g. for people who signed up with a free email domain)
   */
  generalThankYouMessageAlternative: Elements.RichTextElement;

  /**
   * Resource type (multiple_choice)
   * Required: false
   * Id: 61a8a390-e42b-43cd-a0e0-b2f871c20973
   * Codename: resource_type
   */
  resourceType: Elements.MultipleChoiceElement;

  /**
   * Download text (rich_text)
   * Required: false
   * Id: 9f902853-f7fa-405d-a38c-0545ba628221
   * Codename: download_text
   */
  downloadText: Elements.RichTextElement;

  /**
   * Read button text (text)
   * Required: false
   * Id: 3067311d-a865-4a98-8fbb-3e315ff60e3a
   * Codename: read_button_text
   */
  readButtonText: Elements.TextElement;

  /**
   * Read button URL (text)
   * Required: false
   * Id: 023e8d74-cbe4-4130-a6cc-c746d1ffc034
   * Codename: read_button_url
   */
  readButtonUrl: Elements.TextElement;

  /**
   * Document to download (asset)
   * Required: false
   * Id: 88eb8b04-79ca-489e-9909-56e792e4544a
   * Codename: document_to_download
   */
  documentToDownload: Elements.AssetsElement;

  /**
   * Sharing text (rich_text)
   * Required: false
   * Id: ade98554-cb57-4aea-b422-d0d30f0c0825
   * Codename: sharing_text
   */
  sharingText: Elements.RichTextElement;

  /**
   * Video ID (text)
   * Required: false
   * Id: d31fbed1-93db-45e5-b192-2998ba9fae79
   * Codename: video_id
   *
   * E.g. for external Youtube video to be shown on thank you page.
   */
  videoId: Elements.TextElement;

  /**
   * Video poster (asset)
   * Required: false
   * Id: c4ee3684-16b7-483c-913a-b55f1f434264
   * Codename: video_poster
   */
  videoPoster: Elements.AssetsElement;

  /**
   * Achievements (modular_content)
   * Required: false
   * Id: 36e96a58-6758-4fcb-998e-1df9d140f65c
   * Codename: achievements
   */
  achievements: Elements.LinkedItemsElement<UmlpElementAchievementsModel>;

  /**
   * Related Resources (modular_content)
   * Required: false
   * Id: e4a030e0-1b22-4071-868b-1461db2a158e
   * Codename: related_resources
   */
  relatedResources: Elements.LinkedItemsElement<UmlpElementResourceTileGridModel>;

  /**
   * CTA Box (modular_content)
   * Required: false
   * Id: 4d38f241-ebec-4a88-b135-4ac6a227289c
   * Codename: cta_box
   */
  ctaBox: Elements.LinkedItemsElement<UmlpElementCtaBannerModel>;

  /**
   * Achievements v2 (modular_content)
   * Required: false
   * Id: bb28dd53-f584-4fdc-a6ad-d48f173a20ad
   * Codename: achievements_v2
   */
  achievementsV2: Elements.LinkedItemsElement<UmlpElementAchievementsV2Model>;

  /**
   * Pardot URL (text)
   * Required: true
   * Id: e5e746f1-357f-4ce5-8d3e-8a8aad13e64b
   * Codename: pardot_url
   *
   * Pardot iframe URL, ie. https://tracker.kontent.ai/l/849473/2020-05-20/6qk5
   */
  pardotUrl: Elements.TextElement;

  /**
   * Form type (multiple_choice)
   * Required: true
   * Id: 61774724-a0f2-46ea-ab77-d87855e010d5
   * Codename: form_type
   */
  formType: Elements.MultipleChoiceElement;

  /**
   * Content source (multiple_choice)
   * Required: true
   * Id: a8e3ff67-aca5-4962-b40a-c9edfee892f3
   * Codename: content_source
   *
   * Kontent vs Pardot dynamic content. Default should always be Kontent.
   */
  contentSource: Elements.MultipleChoiceElement;
}> &
  ColorPattern &
  XLHeading;
