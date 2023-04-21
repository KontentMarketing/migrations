import { ManagementClient } from '@kontent-ai/management-sdk';
import { contentTypes } from '../models';

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
            name: 'Thank You - Image',
            codename: 'thank_you_image',
            type: 'asset',
            is_required: true,
            content_group: {
              codename: 'thank_you',
            },
          },
        },
        {
          op: 'addInto',
          path: '/elements',
          value: {
            name: 'Thank You - Title',
            codename: 'thank_you_title',
            type: 'text',
            is_required: true,
            content_group: {
              codename: 'thank_you',
            },
          },
        },
        {
          op: 'addInto',
          path: '/elements',
          value: {
            name: 'Thank You - Message',
            codename: 'thank_you_message',
            type: 'rich_text',
            is_required: true,
            content_group: {
              codename: 'thank_you',
            },
          },
        },
        {
          op: 'addInto',
          path: '/elements',
          value: {
            name: 'Thank You - Links',
            codename: 'thank_you_links',
            type: 'modular_content',
            is_required: true,
            allowed_content_types: [
              {
                codename: contentTypes.shared_content.codename,
              },
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
