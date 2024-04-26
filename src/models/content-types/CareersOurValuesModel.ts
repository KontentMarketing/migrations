import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { CompanyValueModel } from './CompanyValueModel';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * UMLP element - Our Values
 * Id: 2f60b189-1234-4edc-b461-8e205da66d82
 * Codename: careers___our_values
 */
export type CareersOurValuesModel = IContentItem<{
  /**
   * Heading (rich_text)
   * Required: false
   * Id: 06206d26-0c1c-45ba-aa2a-db19a634a63b
   * Codename: heading__rich
   */
  headingRich: Elements.RichTextElement;

  /**
   * Values (modular_content)
   * Required: true
   * Id: 3505274d-89d7-4976-b5a1-f46090eee5c2
   * Codename: values
   */
  values: Elements.LinkedItemsElement<CompanyValueModel>;
}>;
