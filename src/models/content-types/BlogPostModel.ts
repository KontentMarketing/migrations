import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
import { UmlpElementFaqModel } from './UmlpElementFaqModel';
import { CtaBannerComponentModel } from './CtaBannerComponentModel';
import { ContentBrief } from '../content-type-snippets/content_brief';
import { ReleaseProjects } from '../taxonomies/release_projects';
import { AuthorModel } from './AuthorModel';
import { BlogTopicModel } from './BlogTopicModel';
import { SitemapMetadata } from '../content-type-snippets/sitemap_metadata';

/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Blog post
 * Id: 6debb3df-b622-4733-8c21-9effddf555c9
 * Codename: blog_post
 */
export type BlogPostModel = IContentItem<{
  /**
   * Title (text)
   * Required: true
   * Id: d01e2657-2b17-ede8-1908-bd83d61a19a8
   * Codename: title
   *
   * Maximum 60 characters. Address a pain point of the reader. Make it SEO-optimized and include the focus keyword.
   */
  title: Elements.TextElement;

  /**
   * Lead paragraph (rich_text)
   * Required: true
   * Id: 9b4e9519-784c-de2c-0bc6-339c4070ae6f
   * Codename: perex
   *
   * Maximum 200 characters. Set out the problem you're about to solve. Explain why this problem is a problem, but don't provide solutions yet.
   */
  perex: Elements.RichTextElement;

  /**
   * Body (rich_text)
   * Required: true
   * Id: 1efc30c4-c99b-a0e2-ac72-0dfddb3cd807
   * Codename: body
   *
   * Maximum 6600 characters. Define the solutions to the problem set up in perex. Use short paragraphs and H2 and H3 headings.
   */
  body: Elements.RichTextElement;

  /**
   * FAQs (modular_content)
   * Required: false
   * Id: a6f1af9c-35e8-456e-bd0d-28c48b20cbd7
   * Codename: faqs
   *
   * Optional FAQ element
   */
  faqs: Elements.LinkedItemsElement<UmlpElementFaqModel>;

  /**
   * CTA Banner (modular_content)
   * Required: false
   * Id: 903d9d20-08be-4d52-85b9-a6b6225803d3
   * Codename: cta_banner
   *
   * Optional banner to be added at the end of blogpost. By default (if this field is not filled) there is newsletter subscription banner used
   */
  ctaBanner: Elements.LinkedItemsElement<CtaBannerComponentModel>;

  /**
   * Release projects (taxonomy)
   * Required: false
   * Id: 50d44977-b03c-4d9e-98c3-0d61391b4bfa
   * Codename: release_projects
   */
  releaseProjects: Elements.TaxonomyElement<ReleaseProjects>;

  /**
   * Date (date_time)
   * Required: true
   * Id: ff459052-028b-712c-4a83-0d7322bdcc33
   * Codename: date
   */
  date: Elements.DateTimeElement;

  /**
   * Update date (date_time)
   * Required: false
   * Id: beb2ee66-d267-4930-b241-5bddb9963986
   * Codename: update_date
   *
   * Fill out this field when there has been a content update of the blog post (SEO purposes)
   */
  updateDate: Elements.DateTimeElement;

  /**
   * Author (modular_content)
   * Required: true
   * Id: 5aa95db3-a69c-6e97-306d-0007a548d7c1
   * Codename: author
   */
  author: Elements.LinkedItemsElement<AuthorModel>;

  /**
   * Header image (asset)
   * Required: true
   * Id: e2ab0445-3c73-0af1-0486-d9a2c47a7202
   * Codename: header_image
   *
   * Image used in detail page. Header image source file must not contain special characters, such as &, ', ", ; etc. Otherwise it is not showing properly.
   */
  headerImage: Elements.AssetsElement;

  /**
   * Header image 2x (asset)
   * Required: true
   * Id: e2142790-a5ca-1d96-68ee-4b4e17e4c4b2
   * Codename: header_image_2x
   *
   * Image used in detail page. Header image source file must not contain special characters, such as &, ', ", ; etc. Otherwise it is not showing properly.
   */
  headerImage2x: Elements.AssetsElement;

  /**
   * Card image (asset)
   * Required: false
   * Id: d4994fd3-bedd-4303-96cd-54a04118cccf
   * Codename: card_image
   *
   * Image used in card in listing page.
   */
  cardImage: Elements.AssetsElement;

  /**
   * Header image text (text)
   * Required: true
   * Id: a913ac0c-9cc3-dd6f-ba81-d97ca0de9507
   * Codename: header_image_text
   *
   * Used both for "Header image" and "Card image"
   */
  headerImageText: Elements.TextElement;

  /**
   * Topic (multiple_choice)
   * Required: true
   * Id: c29cdc57-9400-6d1a-5ae7-330de153595a
   * Codename: topic
   *
   * Links to the "Topic" selector in the "Blog topic" content type.
   */
  topic: Elements.MultipleChoiceElement;

  /**
   * Topic (modular_content)
   * Required: true
   * Id: c2ebd375-e1c5-4cd5-a636-339cf3074125
   * Codename: topic_c2ebd37
   */
  topicC2ebd37: Elements.LinkedItemsElement<BlogTopicModel>;

  /**
   * Attachments (asset)
   * Required: false
   * Id: 16e396de-b2f0-b4c4-c4c4-3eb1dacd1e58
   * Codename: attachments
   */
  attachments: Elements.AssetsElement;

  /**
   * Metadata - title (text)
   * Required: true
   * Id: acda2257-e74a-92e1-95cf-4bacd91f895a
   * Codename: metadata___title
   *
   * Maxium 50 characters.
   */
  metadataTitle: Elements.TextElement;

  /**
   * Metadata - description (text)
   * Required: true
   * Id: 5a5c358c-ef43-2748-ab90-8820a75b920e
   * Codename: metadata___description
   *
   * Maximum 155 characters. Summarize the post's content. Write in active voice and include the focus keyword.
   */
  metadataDescription: Elements.TextElement;

  /**
   * Metadata - image (asset)
   * Required: false
   * Id: 8da3ed01-85f8-4ec3-b1f7-0c503684c0a3
   * Codename: metadata___image
   *
   * Ideally 1200px wide
   */
  metadataImage: Elements.AssetsElement;

  /**
   * URL slug (url_slug)
   * Required: false
   * Id: 720e862b-ab5a-e09d-4125-b6107f7ccc29
   * Codename: url_slug
   *
   * Use keywords. Avoid words like "and, to, of, an, a, the".
   */
  urlSlug: Elements.UrlSlugElement;

  /**
   * Previously used URL slugs (custom)
   * Required: false
   * Id: 681651b1-537f-4f5f-b18e-3932e861c5b8
   * Codename: url_slug_history
   */
  urlSlugHistory: Elements.CustomElement;

  /**
   * Canonical links (text)
   * Required: false
   * Id: baa82b01-04eb-ec7c-c2f5-db0bff078c7c
   * Codename: canonical_links
   */
  canonicalLinks: Elements.TextElement;

  /**
   * Image behavior (multiple_choice)
   * Required: false
   * Id: dd769750-99db-d961-75c0-e1712e862f6b
   * Codename: image_behavior
   *
   * Choose how the images in the blog post body should behave. If nothing is chosen, images will automatically use lightbox. The behavior can be only set for all images in the blog post body.
   */
  imageBehavior: Elements.MultipleChoiceElement;

  /**
   * Project name (text)
   * Required: false
   * Id: 00013b66-5c07-3573-5d4d-cc0a3a38138c
   * Codename: project_name
   *
   * Specify if blog post is used as project in partner's profile
   */
  projectName: Elements.TextElement;

  /**
   * Project date (date_time)
   * Required: false
   * Id: e71ac41c-afb8-e5fd-13a0-07682e8c10a5
   * Codename: project_date
   *
   * Specify if blog post is used as project in partner's profile. If you don't know exact day enter first day of appropriate month.
   */
  projectDate: Elements.DateTimeElement;

  /**
   * Display on sites (multiple_choice)
   * Required: false
   * Id: 1f46bf68-95f8-4f8e-8ab0-fac2866e49d3
   * Codename: display_on_sites
   *
   * For now this field coul be ignored. This is for a future implementation of sourcing blog posts to the kentico.com site.
   */
  displayOnSites: Elements.MultipleChoiceElement;

  /**
   * Exclude from blog listing (multiple_choice)
   * Required: false
   * Id: 4d3b3dfb-8e72-4113-a69d-45a4fecdf7f8
   * Codename: exclude_from_blog_listing
   *
   * If ticked, the blog post card won't be available in the blog post listing on /blog and will be excluded from the blog search on /blog as well
   */
  excludeFromBlogListing: Elements.MultipleChoiceElement;

  /**
   * Include in press releases (multiple_choice)
   * Required: false
   * Id: 699e6758-5832-4ad8-a498-66e54394ff21
   * Codename: include_in_press_releases
   */
  includeInPressReleases: Elements.MultipleChoiceElement;

  /**
   * AI Voiceover (asset)
   * Required: false
   * Id: 718372e7-57a1-4887-a891-a50f8f6144d2
   * Codename: ai_voiceover
   */
  aiVoiceover: Elements.AssetsElement;
}> &
  ContentBrief &
  SitemapMetadata;
