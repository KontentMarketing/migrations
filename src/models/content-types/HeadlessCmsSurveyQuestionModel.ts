import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Headless CMS Survey question
 * Id: 5f8225a2-3e2b-4913-a021-66bebdbcb95f
 * Codename: headless_cms_survey_question
 */
export type HeadlessCmsSurveyQuestionModel = IContentItem<{
  /**
   * Title (text)
   * Required: true
   * Id: 8165800a-eb42-46a2-83f6-1538b4432135
   * Codename: title
   */
  title: Elements.TextElement;

  /**
   * Anchor (text)
   * Required: false
   * Id: 25f52a45-26b9-44b3-8d3f-7d832f515ea6
   * Codename: anchor
   */
  anchor: Elements.TextElement;

  /**
   * Illustration Codename (text)
   * Required: false
   * Id: 9b4dc379-9478-4501-a166-d0a3fe042c6c
   * Codename: illustration_codename
   */
  illustrationCodename: Elements.TextElement;

  /**
   * Question (text)
   * Required: false
   * Id: e77ec6e6-ab22-44da-baa7-8190a4c11c55
   * Codename: question
   */
  question: Elements.TextElement;

  /**
   * Answer (rich_text)
   * Required: false
   * Id: 86a62d58-e2d5-479c-a8ec-61da74727df9
   * Codename: answer
   */
  answer: Elements.RichTextElement;
}>;
