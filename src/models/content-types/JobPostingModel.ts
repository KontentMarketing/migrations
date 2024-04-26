import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { PositionCategory } from '../taxonomies/position_category';
import { OfficeModel } from './OfficeModel';
import { Metadata } from '../content-type-snippets/metadata';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Job Posting
 * Id: b4027f48-3bdb-45e7-ae98-65b68fea4268
 * Codename: job_posting
 */
export type JobPostingModel = IContentItem<{
  /**
   * Title (text)
   * Required: true
   * Id: b20b16c4-9db2-438a-99ef-7b264741a26b
   * Codename: title
   *
   * For example, “React Developer”. Typically, each word in a position starts with a capital letter. The title should match the content item name.
   */
  title: Elements.TextElement;

  /**
   * Page heading (rich_text)
   * Required: true
   * Id: 6120b8eb-4e35-48a3-9e2f-7143a856095c
   * Codename: page_heading
   *
   * Main heading on the job posting page. Should be the name of the position, identical to title. You can use highlighting and line breaks here.
   */
  pageHeading: Elements.RichTextElement;

  /**
   * Position category (taxonomy)
   * Required: true
   * Id: c4972cae-e31a-4961-92d3-d93a0812f78b
   * Codename: category
   */
  category: Elements.TaxonomyElement<PositionCategory>;

  /**
   * Description (rich_text)
   * Required: true
   * Id: 2f4e70e5-617b-4796-9c08-5dbe56646347
   * Codename: description
   *
   * The body of your job ad. Use preview to display what it will look like. The structure is up to you. Always include a short intro paragraph, responsibilities, requirements, and how we differentiate from other employers. See the page linked above for an example.
   */
  description: Elements.RichTextElement;

  /**
   * Summary (rich_text)
   * Required: false
   * Id: 68923742-a789-470d-8fcb-740cb252c036
   * Codename: summary
   *
   * Optional piece of text displayed next to the application form
   */
  summary: Elements.RichTextElement;

  /**
   * Experience requirements (text)
   * Required: false
   * Id: 4d37c6fb-20d0-4e58-8e8d-9a775e0a3720
   * Codename: experience_requirements
   *
   * This element is used for integrations and isn't displayed on the web. Copy the requirements from the description here as well. One requirement per line.
   */
  experienceRequirements: Elements.TextElement;

  /**
   * Language requirements (text)
   * Required: true
   * Id: 8c7d846c-de6c-46da-83ee-3cf9667ff4f8
   * Codename: language_requirements
   *
   * For example, “English C2”. Always use the Cambridge English scale (A1–C2).
   */
  languageRequirements: Elements.TextElement;

  /**
   * Employment type (multiple_choice)
   * Required: true
   * Id: 2dc9381b-0cff-4b69-8694-a5e62ed57276
   * Codename: employment_type
   */
  employmentType: Elements.MultipleChoiceElement;

  /**
   * Location (modular_content)
   * Required: true
   * Id: 3bcc2932-bad9-42d4-b886-68d10653277e
   * Codename: location
   *
   * Link existing locations only; do not create your own. Click Add existing items and remove the Careers collection from the filter to see all available locations.If you hire a position and working from home is possible, still select an office in the country where you're hiring. If your position can be hired in multiple countries, either create a job posting for each location separately to personalize the ad or use the Remote office.
   */
  location: Elements.LinkedItemsElement<OfficeModel>;

  /**
   * Remote (multiple_choice)
   * Required: true
   * Id: 35aa1197-6d60-4959-8169-ec8cd672cc82
   * Codename: remote
   *
   * Select yes even for hybrid positions or positions when it's up to the hiree to decide.
   */
  remote: Elements.MultipleChoiceElement;

  /**
   * Start date (date_time)
   * Required: false
   * Id: 502f47c4-636e-473e-b948-a831226ce79a
   * Codename: start_date
   *
   * Fill in when the candidate can start. If empty, "Immediately" will be used.
   */
  startDate: Elements.DateTimeElement;

  /**
   * Salary currency (multiple_choice)
   * Required: false
   * Id: 8e0251ff-6ba4-4999-bd18-c07c269bad79
   * Codename: salary_currency
   *
   * Select the currency in which the salary will be paid.
   */
  salaryCurrency: Elements.MultipleChoiceElement;

  /**
   * Min salary (number)
   * Required: false
   * Id: 396a5ee3-b420-4980-810e-4ea9e6413004
   * Codename: salary_min
   *
   * Type the minimum salary we expect for the position in the chosen currency and frequency.
   */
  salaryMin: Elements.NumberElement;

  /**
   * Max salary (number)
   * Required: false
   * Id: a854e3a6-114c-4219-85a9-fdb882251621
   * Codename: salary_max
   *
   * Type the maximum salary we expect for the position in the chosen currency and frequency.
   */
  salaryMax: Elements.NumberElement;

  /**
   * Salary frequency (multiple_choice)
   * Required: false
   * Id: b5af6ea1-83c1-4709-9fef-1079b84ecbe7
   * Codename: salary_frequency
   *
   * Select whether the amounts mentioned in the minimum and maximum salaries are meant yearly or monthly.
   */
  salaryFrequency: Elements.MultipleChoiceElement;

  /**
   * Hero Image (asset)
   * Required: true
   * Id: 2864e393-84e4-4b1e-9884-6d48a29a799c
   * Codename: hero_image
   */
  heroImage: Elements.AssetsElement;

  /**
   * Card Image (asset)
   * Required: true
   * Id: cf3f041e-598a-4924-8336-6be387ffff3c
   * Codename: card_image
   *
   * Image used in cards across kontent.ai
   */
  cardImage: Elements.AssetsElement;

  /**
   * Schema.org description (text)
   * Required: true
   * Id: e84644d2-aab1-4e53-a200-5b286dc35b94
   * Codename: schema_org_description
   */
  schemaOrgDescription: Elements.TextElement;

  /**
   * URL slug (url_slug)
   * Required: true
   * Id: a6aa1133-a9a6-472b-80b4-466f398e0026
   * Codename: url_slug
   */
  urlSlug: Elements.UrlSlugElement;
}> &
  Metadata;
