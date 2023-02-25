import { ManagementClient } from '@kontent-ai/management-sdk';
import { ResourceModel, UmlpModel, contentTypes, taxonomies } from '../models';
import KontentService from '../services/KontentService';
import { getElementsParamCodename } from '../utils/kontentUtils';
import { shortenCodename } from '../utils/stringUtils';

export const createBreadcrumbsContentType = async (
  apiClient: ManagementClient
) => {
  await apiClient
    .addContentType()
    .withData((builder) => {
      return {
        name: 'UMLP element - Breadcrumbs',
        elements: [
          builder.linkedItemsElement({
            name: 'Resource',
            type: 'modular_content',
            item_count_limit: {
              value: 1,
              condition: 'exactly',
            },
            allowed_content_types: [
              {
                codename: contentTypes.resource.codename,
              },
            ],
          }),
        ],
      };
    })
    .toPromise();
};

export const fetchUmlpSlugAndCodenameByPageTypeCodename = async (
  pageTypeCodename: string
) => {
  const pages = (
    await KontentService.Instance()
      .deliveryClient.items<UmlpModel>()
      .type(contentTypes.umlp.codename)
      .containsFilter(
        getElementsParamCodename(
          contentTypes.umlp.elements.page_type_659cc82.codename
        ),
        [pageTypeCodename]
      )
      .toPromise()
  ).data.items;

  return pages.map((page) => ({
    codename: page.system.codename,
    slug: page.elements.urlSlug.value,
  }));
};

export const fetchAllResources = async () => {
  const query = await KontentService.Instance()
    .deliveryClient.items<ResourceModel>()
    .type(contentTypes.resource.codename)
    .toPromise();

  return query.data.items;
};

export const createAndAssignResourceBreadcrumbs = async (
  apiClient: ManagementClient
) => {
  const umlpData = await fetchUmlpSlugAndCodenameByPageTypeCodename(
    taxonomies.page_type.terms.resource.codename
  );
  const resources = await fetchAllResources();

  for await (const resource of resources) {
    const umlpPage = umlpData.find((umlp) =>
      resource.elements.url.value.includes(umlp.slug)
    );

    if (umlpPage) {
      // Create the breadcrumbs item
      const breadcrumbsItemCodename = `bc___${shortenCodename(
        umlpPage.codename
      )}`;
      await apiClient
        .addContentItem()
        .withData({
          name: `Breadcrumbs - ${resource.system.name}`,
          codename: breadcrumbsItemCodename,
          type: {
            codename: contentTypes.umlp_element___breadcrumbs.codename,
          },
        })
        .toPromise();

      // Add a resource linked item to it
      await apiClient
        .upsertLanguageVariant()
        .byItemCodename(breadcrumbsItemCodename)
        .byLanguageCodename('default')
        .withData((builder) => [
          builder.linkedItemsElement({
            element: {
              codename:
                contentTypes.umlp_element___breadcrumbs.elements.resource
                  .codename,
            },
            value: [
              {
                codename: resource.system.codename,
              },
            ],
          }),
        ])
        .toPromise();

      // Publish the breadcrumbs item
      await apiClient
        .publishLanguageVariant()
        .byItemCodename(breadcrumbsItemCodename)
        .byLanguageCodename('default')
        .withoutData()
        .toPromise();

      const umlpComponentsCodenames = (
        await KontentService.Instance()
          .deliveryClient.item(umlpPage.codename)
          .toPromise()
      ).data.item.elements.content.value;

      await apiClient
        .createNewVersionOfLanguageVariant()
        .byItemCodename(umlpPage.codename)
        .byLanguageCodename('default')
        .toPromise();

      await apiClient
        .upsertLanguageVariant()
        .byItemCodename(umlpPage.codename)
        .byLanguageCodename('default')
        .withData((builder) => [
          builder.linkedItemsElement({
            element: {
              codename: contentTypes.umlp.elements.content.codename,
            },
            value: [
              {
                codename: breadcrumbsItemCodename,
              },
              ...umlpComponentsCodenames.map((codename) => ({
                codename,
              })),
            ],
          }),
        ])
        .toPromise();

      await apiClient
        .publishLanguageVariant()
        .byItemCodename(umlpPage.codename)
        .byLanguageCodename('default')
        .withoutData()
        .toPromise();
    } else {
      console.log(
        `Resource - ${resource.elements.url.value} has no corresponding UMLP page`
      );
    }
  }
};

export const createAndAssignBasicBreadcrumbs = async (
  apiClient: ManagementClient,
  pageType: string,
  breadcrumbItemName: string,
  breadcrumbItemCodename: string
) => {
  const umlps = await fetchUmlpSlugAndCodenameByPageTypeCodename(pageType);

  await apiClient
    .addContentItem()
    .withData({
      name: breadcrumbItemName,
      codename: breadcrumbItemCodename,
      type: {
        codename: contentTypes.umlp_element___breadcrumbs.codename,
      },
    })
    .toPromise();

  await apiClient
    .upsertLanguageVariant()
    .byItemCodename(breadcrumbItemCodename)
    .byLanguageCodename('default')
    .withData((builder) => [])
    .toPromise();

  await apiClient
    .publishLanguageVariant()
    .byItemCodename(breadcrumbItemCodename)
    .byLanguageCodename('default')
    .withoutData()
    .toPromise();

  for await (const umlpPage of umlps) {
    const umlpComponentsCodenames = (
      await KontentService.Instance()
        .deliveryClient.item(umlpPage.codename)
        .toPromise()
    ).data.item.elements.content.value;

    await apiClient
      .createNewVersionOfLanguageVariant()
      .byItemCodename(umlpPage.codename)
      .byLanguageCodename('default')
      .toPromise();

    await apiClient
      .upsertLanguageVariant()
      .byItemCodename(umlpPage.codename)
      .byLanguageCodename('default')
      .withData((builder) => [
        builder.linkedItemsElement({
          element: {
            codename: contentTypes.umlp.elements.content.codename,
          },
          value: [
            {
              codename: breadcrumbItemCodename,
            },
            ...umlpComponentsCodenames.map((codename) => ({
              codename,
            })),
          ],
        }),
      ])
      .toPromise();

    await apiClient
      .publishLanguageVariant()
      .byItemCodename(umlpPage.codename)
      .byLanguageCodename('default')
      .withoutData()
      .toPromise();
  }
};
