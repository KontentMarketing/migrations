import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Careers - Job Opportunities
 * Id: 36d1874c-af32-4149-bb69-2cbe8ac0e498
 * Codename: careers___job_opportunities
 */
export type CareersJobOpportunitiesModel = IContentItem<{
  /**
   * Heading (rich_text)
   * Required: true
   * Id: 23e702e9-199c-4c07-a30d-3c32138e621d
   * Codename: heading__rich
   */
  headingRich: Elements.RichTextElement;

  /**
   * Appendix (rich_text)
   * Required: false
   * Id: 73bc5884-7d96-419c-b91b-83ad6c8657fb
   * Codename: appendix
   *
   * Optional appendix that is displayed below the job list
   */
  appendix: Elements.RichTextElement;
}>;
