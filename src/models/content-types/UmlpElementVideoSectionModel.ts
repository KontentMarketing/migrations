import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { ContentItemYoutubeVideoModel } from './ContentItemYoutubeVideoModel';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * UMLP Element - Video Section
 * Id: 3a7a5c8d-0084-49b1-901a-817b64c2db86
 * Codename: umlp_element___video_section
 */
export type UmlpElementVideoSectionModel = IContentItem<{
  /**
   * Heading (rich_text)
   * Required: false
   * Id: 9ab0fe6a-10b0-45f7-9b4d-a81a8afd9b06
   * Codename: heading__rich
   */
  headingRich: Elements.RichTextElement;

  /**
   * Text (rich_text)
   * Required: false
   * Id: d4b38066-e8e0-42bf-8d3d-cc66b993bf0f
   * Codename: text
   */
  text: Elements.RichTextElement;

  /**
   * Video (modular_content)
   * Required: true
   * Id: 67e91af0-5c94-488d-be84-b21b5b3ef6fb
   * Codename: video
   */
  video: Elements.LinkedItemsElement<ContentItemYoutubeVideoModel>;

  /**
   * Component version (multiple_choice)
   * Required: true
   * Id: 6330e62c-5bf6-4416-aa4c-2f1f037d30be
   * Codename: component_version
   *
   * We have 2 visuals available for this component. Have a look at our visual guide under *UMLP element - Video Section* and pick accordingly to your preference.Guide URL: https://kontent-ai.atlassian.net/wiki/spaces/KMT/pages/24871043/Kontent.ai+UMLP+Components+overview
   */
  componentVersion: Elements.MultipleChoiceElement;

  /**
   * Theme (multiple_choice)
   * Required: false
   * Id: 586961f8-0b36-4e03-a941-967d54d7ce17
   * Codename: theme
   */
  theme: Elements.MultipleChoiceElement;
}>;
