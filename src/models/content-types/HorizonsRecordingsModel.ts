import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { EventDateModel } from './EventDateModel';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Horizons - Recordings
 * Id: 7cb74ec6-f78c-4ebf-8b6c-93602d66ba14
 * Codename: horizons___recordings
 */
export type HorizonsRecordingsModel = IContentItem<{
  /**
   * Section alias (text)
   * Required: false
   * Id: c799471e-7c25-4c08-a4d1-723d5af42983
   * Codename: section_alias
   *
   * e.g. "About", "Flashback" or "Sponsors" - will be used to dynamically create navigation. If omitted, this section will be excluded from the navigation menu.
   */
  sectionAlias: Elements.TextElement;

  /**
   * URL anchor (text)
   * Required: true
   * Id: 85038669-fb18-40b5-9196-487f32497e13
   * Codename: url_anchor
   *
   * Section ID which will be visible in the URL upon clicking the nav link. E.g. "sponsors" will resolve to https://kontent.ai/horizons/#sponsors
   */
  urlAnchor: Elements.TextElement;

  /**
   * Heading (text)
   * Required: true
   * Id: 757c7dfc-3bb2-467d-a750-7d4887d02476
   * Codename: heading
   */
  heading: Elements.TextElement;

  /**
   * Event date (modular_content)
   * Required: true
   * Id: 72edbb15-92fd-41a6-8b2d-10a335f32b13
   * Codename: event_date
   */
  eventDate: Elements.LinkedItemsElement<EventDateModel>;

  /**
   * Recordings Pardot URL (text)
   * Required: false
   * Id: 7331bb91-9f9f-42ee-bfbb-3f1782f36f85
   * Codename: recordings_pardot_url
   *
   * Pardot URL, ie. https://tracker.kontent.ai/l/849473/2020-05-20/6qk5
   */
  recordingsPardotUrl: Elements.TextElement;
}>;
