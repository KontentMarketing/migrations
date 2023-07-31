import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Horizons - Video Section
 * Id: 5e336fca-fc2f-4365-bdce-c3fb1f865d6d
 * Codename: horizons___video_section
 */
export type HorizonsVideoSectionModel = IContentItem<{
  /**
   * Section alias (text)
   * Required: true
   * Id: eeeb36f9-2b01-48c8-8e31-6be12b76eab0
   * Codename: section_alias
   *
   * e.g. "About", "Flashback" or "Sponsors" - will be used to dynamically create navigation
   */
  sectionAlias: Elements.TextElement;

  /**
   * URL anchor (text)
   * Required: true
   * Id: 2f9a7200-5e1a-4beb-9d93-d0413998b5d5
   * Codename: url_anchor
   *
   * Section ID which will be visible in the URL upon clicking the nav link. E.g. "sponsors" will resolve to https://kontent.ai/horizons/#sponsors
   */
  urlAnchor: Elements.TextElement;

  /**
   * Heading (text)
   * Required: true
   * Id: 14d774f6-63bc-47d5-b6ee-56833bd5061a
   * Codename: heading
   */
  heading: Elements.TextElement;

  /**
   * Text (rich_text)
   * Required: true
   * Id: b0a31351-24a7-473d-8453-c7ae84a356ed
   * Codename: text
   */
  text: Elements.RichTextElement;

  /**
   * YouTube video ID (text)
   * Required: false
   * Id: df7b9fb7-381d-4794-a2e8-599cbb6fdda1
   * Codename: youtube_video_id
   *
   * e.g. Wd3sfdOkx2k and the video will be displayed on the page as an interactive iframeDISCLAIMER:If both YouTube video ID and YouTube link fields are filled out, the one with the ID will take precedence.
   */
  youtubeVideoId: Elements.TextElement;

  /**
   * YouTube link (text)
   * Required: false
   * Id: fa230941-086e-4c29-8c72-9453e00a8e6c
   * Codename: youtube_link
   *
   * e.g. when we want to take the user to our recording playlist page - https://www.youtube.com/playlist?list=PLIxQ61Q5K6QeXdN0htmnbOlb4T6xOzYd5DISCLAIMER:If both YouTube video ID and YouTube link fields are filled out, the one with the ID will take precedence.
   */
  youtubeLink: Elements.TextElement;

  /**
   * Video poster (asset)
   * Required: true
   * Id: 64c096df-e84d-4689-af2d-b5076c76c240
   * Codename: video_poster
   */
  videoPoster: Elements.AssetsElement;
}>;