import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * UMLP element - G2 review
 * Id: 0195b082-f49c-48ee-bc03-cd372585c758
 * Codename: umlp_element___g2_review
 */
export type UmlpElementG2ReviewModel = IContentItem<{
  /**
   * Text (rich_text)
   * Required: false
   * Id: 89f0a63f-3ce7-49ed-bfe8-fd610b383cee
   * Codename: text
   */
  text: Elements.RichTextElement;

  /**
   * Widget ID (text)
   * Required: true
   * Id: 8e7d3876-eb06-4b1c-b117-fc7d02dbe42f
   * Codename: widget_id
   *
   * Number taken from embed code of the G2 review widget (e.g.: widget.embed?id=14123). https://my.g2.com/kentico-kontent/widgets/review_snapshots
   */
  widgetId: Elements.TextElement;
}>;
