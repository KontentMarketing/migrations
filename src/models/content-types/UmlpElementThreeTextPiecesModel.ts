import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * UMLP element - Three Text Pieces
 * Id: 3e2fb173-82e2-49a6-ab32-df37d7a1f4c8
 * Codename: umlp_element___three_text_pieces
 */
export type UmlpElementThreeTextPiecesModel = IContentItem<{
  /**
   * Heading 1 (text)
   * Required: true
   * Id: b10ce1bb-7008-457a-b58a-9f1608ba2e16
   * Codename: heading_1
   */
  heading1: Elements.TextElement;

  /**
   * Text 1 (text)
   * Required: true
   * Id: a01b46d2-bd95-4542-9d49-d411dfe8748c
   * Codename: text_1
   */
  text1: Elements.TextElement;

  /**
   * Icon 1 (custom)
   * Required: true
   * Id: 653b2612-1ef8-475a-991f-fc00d2fbc1e2
   * Codename: icon_1
   */
  icon1: Elements.CustomElement;

  /**
   * Heading 2 (text)
   * Required: true
   * Id: 179e9e80-9cc7-4e5c-a295-517be52e942a
   * Codename: heading_2
   */
  heading2: Elements.TextElement;

  /**
   * Text 2 (text)
   * Required: true
   * Id: 7ab2a21b-e0cb-461b-9f42-722dee902eed
   * Codename: text_2
   */
  text2: Elements.TextElement;

  /**
   * Icon 2 (custom)
   * Required: true
   * Id: 0b891e30-cbe1-42ed-ba55-1d3c35e4d32d
   * Codename: icon_2
   */
  icon2: Elements.CustomElement;

  /**
   * Heading 3 (text)
   * Required: true
   * Id: 655da94b-389a-4aff-92e1-74e5bd5054b0
   * Codename: heading_3
   */
  heading3: Elements.TextElement;

  /**
   * Text 3 (text)
   * Required: true
   * Id: 7c1087cc-53d6-4c39-a4ba-1ca6246b4c3b
   * Codename: text_3
   */
  text3: Elements.TextElement;

  /**
   * Icon 3 (custom)
   * Required: true
   * Id: 6375280b-9181-4dd4-887c-d356fa01df94
   * Codename: icon_3
   */
  icon3: Elements.CustomElement;

  /**
   * Theme (multiple_choice)
   * Required: true
   * Id: 3f9b3692-deff-4944-b17f-bbf56324f0de
   * Codename: theme
   */
  theme: Elements.MultipleChoiceElement;
}>;
