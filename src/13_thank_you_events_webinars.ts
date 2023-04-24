import { MigrationModule } from '@kontent-ai/cli';
import { ManagementClient } from '@kontent-ai/management-sdk';
import { updateContentType } from './lib/thank_you_events_webinars';
import {
  EventModel,
  WebinarModel,
  WebinarsPageModel,
  contentTypes,
} from './models';
import KontentService from './services/KontentService';
import { ARCHIVED, ARCHIVED_2, PUBLISHED } from './constants';

const migration: MigrationModule = {
  order: 13,
  run: async (apiClient: ManagementClient) => {
    const newThankYouPageContentType = await apiClient
      .addContentType()
      .withData((builder) => {
        return {
          name: 'Events & Webinars Thank You Page',
          codename: 'events_and_webinars_thank_you_page',
          elements: [
            builder.assetElement({
              name: 'Thank You - Image',
              codename: 'thank_you___image',
              type: 'asset',
            }),
            builder.textElement({
              name: 'Thank You - Title',
              codename: 'thank_you___title',
              type: 'text',
            }),
            builder.richTextElement({
              name: 'Thank You - Message',
              codename: 'thank_you___message',
              type: 'rich_text',
            }),
            builder.linkedItemsElement({
              name: 'Thank You - Links',
              codename: 'thank_you___links',
              type: 'modular_content',
              allowed_content_types: [
                {
                  codename: 'shared_content',
                },
              ],
            }),
          ],
        };
      })
      .toPromise();

    const standardWebinarEventThankYouPage = await apiClient
      .addContentItem()
      .withData({
        name: 'Standard Webinar/Event Thank You Page',
        codename: 'standard_webinar_event_thank_you_page',
        type: {
          codename: newThankYouPageContentType.data.codename,
        },
        collection: {
          codename: 'default',
        },
      })
      .toPromise();

    const attendingWebinarEventThankYouPage = await apiClient
      .addContentItem()
      .withData({
        name: 'Attending Webinar/Event Thank You Page',
        codename: 'attending_webinar_event_thank_you_page',
        type: {
          codename: newThankYouPageContentType.data.codename,
        },
        collection: {
          codename: 'default',
        },
      })
      .toPromise();

    const webinarsRootPage = (
      await KontentService.Instance()
        .deliveryClient.item<WebinarsPageModel>('webinars_page_kk')
        .toPromise()
    ).data.item;

    // @ts-ignore
    const standardVariant = await apiClient
      .upsertLanguageVariant()
      .byItemCodename(standardWebinarEventThankYouPage.data.codename)
      .byLanguageCodename('default')
      .withData((builder) => [
        builder.textElement({
          element: {
            codename: 'thank_you___title',
          },
          value: webinarsRootPage.elements.thankYouTitle.value,
        }),
        builder.richTextElement({
          element: {
            codename: 'thank_you___message',
          },
          value: webinarsRootPage.elements.thankYouMessage.value,
        }),
        builder.assetElement({
          element: {
            codename: 'thank_you___image',
          },
          value: [{ id: '3ebb5ea1-6692-4a49-bf75-e4f321d68a46' }],
        }),
        builder.linkedItemsElement({
          element: {
            codename: 'thank_you___links',
          },
          value: [
            { codename: 'webinars___other_webinars' },
            { codename: 'webinars___see_docs_and_tutorials' },
            { codename: 'webinars___talk_to_us' },
          ],
        }),
      ])
      .toPromise();

    // @ts-ignore
    const alternativeVariant = await apiClient
      .upsertLanguageVariant()
      .byItemCodename(attendingWebinarEventThankYouPage.data.codename)
      .byLanguageCodename('default')
      .withData((builder) => [
        builder.textElement({
          element: {
            codename: 'thank_you___title',
          },
          value: 'Alternative thank you page',
        }),
        builder.richTextElement({
          element: {
            codename: 'thank_you___message',
          },
          value: webinarsRootPage.elements.thankYouMessage.value,
        }),
        builder.assetElement({
          element: {
            codename: 'thank_you___image',
          },
          value: [{ id: '3ebb5ea1-6692-4a49-bf75-e4f321d68a46' }],
        }),
        builder.linkedItemsElement({
          element: {
            codename: 'thank_you___links',
          },
          value: [
            { codename: 'webinars___other_webinars' },
            { codename: 'webinars___see_docs_and_tutorials' },
            { codename: 'webinars___talk_to_us' },
          ],
        }),
      ])
      .toPromise();

    await apiClient
      .publishLanguageVariant()
      .byItemCodename(standardWebinarEventThankYouPage.data.codename)
      .byLanguageCodename('default')
      .withoutData()
      .toPromise();

    await apiClient
      .publishLanguageVariant()
      .byItemCodename(attendingWebinarEventThankYouPage.data.codename)
      .byLanguageCodename('default')
      .withoutData()
      .toPromise();

    await updateContentType(apiClient, contentTypes.webinar.codename);
    await updateContentType(apiClient, contentTypes.event.codename);

    const allWebinars = (
      await KontentService.Instance()
        .deliveryClient.items<WebinarModel>()
        .type(contentTypes.webinar.codename)
        .toPromise()
    ).data.items;

    const allEvents = (
      await KontentService.Instance()
        .deliveryClient.items<EventModel>()
        .type(contentTypes.event.codename)
        .toPromise()
    ).data.items;

    for (const webinar of allWebinars) {
      const workflowStep = webinar.system.workflowStep;
      switch (workflowStep) {
        case ARCHIVED:
          break;
        case ARCHIVED_2:
          break;
        case PUBLISHED:
          // Create a new version of the topic
          await apiClient
            .createNewVersionOfLanguageVariant()
            .byItemCodename(webinar.system.codename)
            .byLanguageCodename('default')
            .toPromise();
          // Add a slug to it
          await apiClient
            .upsertLanguageVariant()
            .byItemCodename(webinar.system.codename)
            .byLanguageCodename('default')
            .withData((builder) => [
              builder.linkedItemsElement({
                element: {
                  codename: 'thank_you_page',
                },
                value: [{ codename: 'standard_webinar_event_thank_you_page' }],
              }),
            ])
            .toPromise();
          // Re-publish the new version
          await apiClient
            .publishLanguageVariant()
            .byItemCodename(webinar.system.codename)
            .byLanguageCodename('default')
            .withoutData()
            .toPromise();
          break;
        default:
          await apiClient
            .upsertLanguageVariant()
            .byItemCodename(webinar.system.codename)
            .byLanguageCodename('default')
            .withData((builder) => [
              builder.linkedItemsElement({
                element: {
                  codename: 'thank_you_page',
                },
                value: [{ codename: 'standard_webinar_event_thank_you_page' }],
              }),
            ])
            .toPromise();
      }
    }
    for (const event of allEvents) {
      const workflowStep = event.system.workflowStep;
      switch (workflowStep) {
        case ARCHIVED:
          break;
        case ARCHIVED_2:
          break;
        case PUBLISHED:
          // Create a new version of the topic
          await apiClient
            .createNewVersionOfLanguageVariant()
            .byItemCodename(event.system.codename)
            .byLanguageCodename('default')
            .toPromise();
          // Add a slug to it
          await apiClient
            .upsertLanguageVariant()
            .byItemCodename(event.system.codename)
            .byLanguageCodename('default')
            .withData((builder) => [
              builder.linkedItemsElement({
                element: {
                  codename: 'thank_you_page',
                },
                value: [{ codename: 'standard_webinar_event_thank_you_page' }],
              }),
            ])
            .toPromise();
          // Re-publish the new version
          await apiClient
            .publishLanguageVariant()
            .byItemCodename(event.system.codename)
            .byLanguageCodename('default')
            .withoutData()
            .toPromise();
          break;
        default:
          await apiClient
            .upsertLanguageVariant()
            .byItemCodename(event.system.codename)
            .byLanguageCodename('default')
            .withData((builder) => [
              builder.linkedItemsElement({
                element: {
                  codename: 'thank_you_page',
                },
                value: [{ codename: 'standard_webinar_event_thank_you_page' }],
              }),
            ])
            .toPromise();
      }
    }
  },
};
export default migration;
