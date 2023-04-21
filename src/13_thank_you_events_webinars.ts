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
    await updateContentType(apiClient, contentTypes.webinar.codename);
    await updateContentType(apiClient, contentTypes.event.codename);

    const webinarsRootPage = (
      await KontentService.Instance()
        .deliveryClient.item<WebinarsPageModel>('webinars_page_kk')
        .toPromise()
    ).data.item;

    console.log(webinarsRootPage.elements.thankYouTitle);

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
              builder.textElement({
                element: {
                  codename: 'thank_you_title',
                },
                value: webinarsRootPage.elements.thankYouTitle.value,
              }),
              builder.richTextElement({
                element: {
                  codename: 'thank_you_message',
                },
                value: webinarsRootPage.elements.thankYouMessage.value,
              }),
              builder.assetElement({
                element: {
                  codename: 'thank_you_image',
                },
                value: [{ id: '3ebb5ea1-6692-4a49-bf75-e4f321d68a46' }],
              }),
              builder.linkedItemsElement({
                element: {
                  codename: 'thank_you_links',
                },
                value: [
                  { codename: 'webinars___other_webinars' },
                  { codename: 'webinars___see_docs_and_tutorials' },
                  { codename: 'webinars___talk_to_us' },
                ],
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
              builder.textElement({
                element: {
                  codename: 'thank_you_title',
                },
                value: webinarsRootPage.elements.thankYouTitle.value,
              }),
              builder.richTextElement({
                element: {
                  codename: 'thank_you_message',
                },
                value: webinarsRootPage.elements.thankYouMessage.value,
              }),
              builder.assetElement({
                element: {
                  codename: 'thank_you_image',
                },
                value: [{ id: '3ebb5ea1-6692-4a49-bf75-e4f321d68a46' }],
              }),
              builder.linkedItemsElement({
                element: {
                  codename: 'thank_you_links',
                },
                value: [
                  { codename: 'webinars___other_webinars' },
                  { codename: 'webinars___see_docs_and_tutorials' },
                  { codename: 'webinars___talk_to_us' },
                ],
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
              builder.textElement({
                element: {
                  codename: 'thank_you_title',
                },
                value: webinarsRootPage.elements.thankYouTitle.value,
              }),
              builder.richTextElement({
                element: {
                  codename: 'thank_you_message',
                },
                value: webinarsRootPage.elements.thankYouMessage.value,
              }),
              builder.assetElement({
                element: {
                  codename: 'thank_you_image',
                },
                value: [{ id: '3ebb5ea1-6692-4a49-bf75-e4f321d68a46' }],
              }),
              builder.linkedItemsElement({
                element: {
                  codename: 'thank_you_links',
                },
                value: [
                  { codename: 'webinars___other_webinars' },
                  { codename: 'webinars___see_docs_and_tutorials' },
                  { codename: 'webinars___talk_to_us' },
                ],
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
              builder.textElement({
                element: {
                  codename: 'thank_you_title',
                },
                value: webinarsRootPage.elements.thankYouTitle.value,
              }),
              builder.richTextElement({
                element: {
                  codename: 'thank_you_message',
                },
                value: webinarsRootPage.elements.thankYouMessage.value,
              }),
              builder.assetElement({
                element: {
                  codename: 'thank_you_image',
                },
                value: [{ id: '3ebb5ea1-6692-4a49-bf75-e4f321d68a46' }],
              }),
              builder.linkedItemsElement({
                element: {
                  codename: 'thank_you_links',
                },
                value: [
                  { codename: 'webinars___other_webinars' },
                  { codename: 'webinars___see_docs_and_tutorials' },
                  { codename: 'webinars___talk_to_us' },
                ],
              }),
            ])
            .toPromise();
      }
    }
  },
};
export default migration;
