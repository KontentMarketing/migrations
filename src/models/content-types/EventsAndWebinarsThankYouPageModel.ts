import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { SharedContentModel } from './SharedContentModel';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Events & Webinars Thank You Page
 * Id: 09fd3ba6-5fb9-4485-9682-66d58fa1a252
 * Codename: events_and_webinars_thank_you_page
 */
export type EventsAndWebinarsThankYouPageModel = IContentItem<{
  /**
   * Thank You - Image (asset)
   * Required: false
   * Id: 9c0bee62-10a8-426d-92b5-19b614bd801a
   * Codename: thank_you___image
   */
  thankYouImage: Elements.AssetsElement;

  /**
   * Thank You - Title (text)
   * Required: false
   * Id: b578f5c3-a949-46f4-8b58-4062c7491bcf
   * Codename: thank_you___title
   */
  thankYouTitle: Elements.TextElement;

  /**
   * Thank You - Message (rich_text)
   * Required: false
   * Id: 3c5e2c8f-87a8-4f6f-be00-a0be21a2c458
   * Codename: thank_you___message
   */
  thankYouMessage: Elements.RichTextElement;

  /**
   * Thank You - Links (modular_content)
   * Required: false
   * Id: 04d41e87-d0cb-4b13-a0a1-f4ed7004156f
   * Codename: thank_you___links
   */
  thankYouLinks: Elements.LinkedItemsElement<SharedContentModel>;
}>;
