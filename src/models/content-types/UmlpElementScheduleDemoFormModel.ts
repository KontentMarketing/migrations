import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { ModularItemCardElementModel } from './ModularItemCardElementModel';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * UMLP element - Schedule Demo Form
 * Id: 280fc26d-c43f-4102-a16f-bab959228942
 * Codename: umlp_element___schedule_demo_form
 */
export type UmlpElementScheduleDemoFormModel = IContentItem<{
  /**
   * Heading (rich_text)
   * Required: true
   * Id: a1a06ca8-363c-4330-8c8f-20bcd2c3d4dd
   * Codename: heading
   */
  heading: Elements.RichTextElement;

  /**
   * Cards (modular_content)
   * Required: true
   * Id: cc73cc9f-da5e-4496-a359-8e8b3b7bbe14
   * Codename: cards
   */
  cards: Elements.LinkedItemsElement<ModularItemCardElementModel>;

  /**
   * Thank you (rich_text)
   * Required: true
   * Id: 10b7fdd6-26e9-4f1e-a2a6-efcfafdd78f6
   * Codename: thank_you
   */
  thankYou: Elements.RichTextElement;
}>;