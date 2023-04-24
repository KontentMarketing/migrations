import { ManagementClient } from '@kontent-ai/management-sdk';

export const updateContentType = async (
  apiClient: ManagementClient,
  contentTypeCodename: string
) => {
  try {
    await apiClient
      .modifyContentType()
      .byTypeCodename(contentTypeCodename)
      .withData([
        {
          op: 'addInto',
          path: '/content_groups',
          after: {
            codename: 'urls',
          },
          value: {
            name: 'Thank you',
            codename: 'thank_you',
          },
        },
        {
          op: 'addInto',
          path: '/elements',
          value: {
            name: 'Thank You Page',
            codename: 'thank_you_page',
            type: 'modular_content',
            is_required: true,
            item_count_limit: {
              value: 1,
              condition: 'exactly',
            },
            allowed_content_types: [
              { codename: 'events_and_webinars_thank_you_page' },
            ],
            content_group: {
              codename: 'thank_you',
            },
          },
        },
      ])
      .toPromise();
  } catch (error) {
    console.log(error);
  }
};
