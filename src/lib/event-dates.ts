import { ManagementClient } from '@kontent-ai/management-sdk'
import { EventModel, WebinarModel, contentTypes } from '../models'
import KontentService from '../services/KontentService'
import { PUBLISHED } from '../constants'

export const eventDateToEventContentTypeFields = async (
  apiClient: ManagementClient
) => {
  try {
    await apiClient
      .modifyContentType()
      .byTypeCodename(contentTypes.event.codename)
      .withData([
        {
          op: 'addInto',
          path: '/content_groups',
          after: {
            codename: 'general',
          },
          value: {
            name: 'Date & registration',
            codename: 'date_and_registration',
          },
        },
        {
          op: 'addInto',
          path: '/elements',
          value: {
            name: 'Location',
            codename: 'location',
            type: 'text',
            is_required: true,
            content_group: {
              codename: 'date_and_registration',
            },
          },
        },
        {
          op: 'addInto',
          path: '/elements',
          value: {
            name: 'Start Date and Time',
            codename: 'start_date_and_time',
            type: 'date_time',
            content_group: {
              codename: 'date_and_registration',
            },
          },
        },
        {
          op: 'addInto',
          path: '/elements',
          value: {
            name: 'End Date and Time',
            codename: 'end_date_and_time',
            type: 'date_time',
            content_group: {
              codename: 'date_and_registration',
            },
          },
        },
        {
          op: 'addInto',
          path: '/elements',
          value: {
            name: 'Venue',
            codename: 'venue',
            type: 'modular_content',
            item_count_limit: {
              condition: 'exactly',
              value: 1,
            },
            allowed_content_types: [
              {
                codename: contentTypes.address.codename,
              },
            ],
            content_group: {
              codename: 'date_and_registration',
            },
          },
        },
        {
          op: 'addInto',
          path: '/elements',
          value: {
            name: 'Time zone',
            codename: 'time_zone',
            type: 'modular_content',
            is_required: true,
            item_count_limit: {
              condition: 'exactly',
              value: 1,
            },
            allowed_content_types: [
              {
                codename: contentTypes.time_zone.codename,
              },
            ],
            content_group: {
              codename: 'date_and_registration',
            },
          },
        },
        {
          op: 'addInto',
          path: '/elements',
          value: {
            name: 'Type',
            codename: 'type',
            type: 'multiple_choice',
            is_required: true,
            mode: 'single',
            options: [
              {
                name: 'Hosted',
                codename: 'hosted',
              },
              {
                name: 'Attending',
                codename: 'attending',
              },
            ],
            content_group: {
              codename: 'date_and_registration',
            },
          },
        },
        {
          op: 'addInto',
          path: '/elements',
          value: {
            name: 'Registration open',
            codename: 'registration_open',
            type: 'multiple_choice',
            is_required: true,
            mode: 'single',
            options: [
              {
                name: 'Yes',
                codename: 'yes',
              },
              {
                name: 'No',
                codename: 'no',
              },
            ],
            default: {
              global: {
                value: [
                  {
                    codename: 'yes',
                  },
                ],
              },
            },
            content_group: {
              codename: 'date_and_registration',
            },
          },
        },
        {
          op: 'addInto',
          path: '/elements',
          value: {
            name: 'Agenda',
            codename: 'agenda',
            type: 'modular_content',
            allowed_content_types: [
              {
                codename: contentTypes.event_talk.codename,
              },
            ],
            content_group: {
              codename: 'date_and_registration',
            },
          },
        },
        {
          op: 'addInto',
          path: '/elements',
          value: {
            name: 'Pardot URL',
            codename: 'pardot_url',
            type: 'text',
            validation_regex: {
              regex:
                '^(https://(?:www.|(?!www)))?[a-z0-9]+([-.]{1}[a-z0-9]+)*.[a-z]{2,63}(:[0-9]{1,5})?(/.*)?$',
              validation_message:
                'This must be a valid URL and it must start with https://',
            },
            guidelines:
              'Pardot iframe URL, ie. https://tracker.kontent.ai/l/849473/2020-03-04/2kny',
            content_group: {
              codename: 'date_and_registration',
            },
          },
        },
      ])
      .toPromise()
  } catch (error) {
    console.error(error.message)
  }
}

export const webinarDateToWebinarContentTypeFields = async (
  apiClient: ManagementClient
) => {
  try {
    await apiClient
      .modifyContentType()
      .byTypeCodename(contentTypes.webinar.codename)
      .withData([
        {
          op: 'addInto',
          path: '/content_groups',
          after: {
            codename: 'general',
          },
          value: {
            name: 'Date & registration',
            codename: 'date_and_registration',
          },
        },
        {
          op: 'addInto',
          path: '/elements',
          value: {
            name: 'Pardot URL',
            codename: 'pardot_url',
            type: 'text',
            validation_regex: {
              regex:
                '^(https://(?:www.|(?!www)))?[a-z0-9]+([-.]{1}[a-z0-9]+)*.[a-z]{2,63}(:[0-9]{1,5})?(/.*)?$',
              validation_message:
                'This must be a valid URL and it must start with https://',
            },
            guidelines:
              'Pardot iframe URL, ie. https://tracker.kontent.ai/l/849473/2020-03-04/2kny',
            content_group: {
              codename: 'date_and_registration',
            },
          },
        },
        {
          op: 'addInto',
          path: '/elements',
          value: {
            name: 'Demio event ID',
            codename: 'demio_event_id',
            type: 'text',
            guidelines:
              'ID of the Demio event (last part of the registration URL) e.g. https://my.demio.com/ref/DLUQZzRux56aX4Jq => ID => DLUQZzRux56aX4Jq',
            content_group: {
              codename: 'date_and_registration',
            },
          },
        },
        {
          op: 'addInto',
          path: '/elements',
          value: {
            name: 'Start Date and Time',
            codename: 'start_date_and_time',
            type: 'date_time',
            content_group: {
              codename: 'date_and_registration',
            },
          },
        },
        {
          op: 'addInto',
          path: '/elements',
          value: {
            name: 'End Date and Time',
            codename: 'end_date_and_time',
            type: 'date_time',
            content_group: {
              codename: 'date_and_registration',
            },
          },
        },
        {
          op: 'addInto',
          path: '/elements',
          value: {
            name: 'Time zone',
            codename: 'time_zone',
            type: 'modular_content',
            is_required: true,
            item_count_limit: {
              condition: 'exactly',
              value: 1,
            },
            allowed_content_types: [
              {
                codename: contentTypes.time_zone.codename,
              },
            ],
            content_group: {
              codename: 'date_and_registration',
            },
          },
        },
        {
          op: 'addInto',
          path: '/elements',
          value: {
            name: 'Registration open',
            codename: 'registration_open',
            type: 'multiple_choice',
            is_required: true,
            mode: 'single',
            options: [
              {
                name: 'Yes',
                codename: 'yes',
              },
              {
                name: 'No',
                codename: 'no',
              },
            ],
            default: {
              global: {
                value: [
                  {
                    codename: 'yes',
                  },
                ],
              },
            },
            content_group: {
              codename: 'date_and_registration',
            },
          },
        },
      ])
      .toPromise()
  } catch (error) {
    console.log(error.message)
  }
}

export const eventNewFieldValues = async (apiClient: ManagementClient) => {
  const eventsRes = (
    await KontentService.Instance()
      .deliveryClient.items<EventModel>()
      .type(contentTypes.event.codename)
      .depthParameter(3)
      .toPromise()
  ).data.items

  const eventsWithDates = eventsRes.filter(
    (item) =>
      item.elements.dates.linkedItems.length > 0 &&
      item.system.workflowStep === PUBLISHED
  )

  for await (const event of eventsWithDates) {
    const { codename } = event.system
    const {
      location,
      agenda,
      registrationOpen,
      endDateAndTime,
      startDateAndTime,
      timeZone,
      pardotUrl,
      venue,
    } = event.elements.dates.linkedItems[0].elements

    await apiClient
      .createNewVersionOfLanguageVariant()
      .byItemCodename(codename)
      .byLanguageCodename('default')
      .toPromise()

    await apiClient
      .upsertLanguageVariant()
      .byItemCodename(codename)
      .byLanguageCodename('default')
      .withData((builder) => {
        const finalElements = [
          builder.textElement({
            element: {
              codename: 'location',
            },
            value: location.value,
          }),
          builder.dateTimeElement({
            element: {
              codename: 'start_date_and_time',
            },
            value: startDateAndTime.value,
          }),
          builder.linkedItemsElement({
            element: {
              codename: 'time_zone',
            },
            value: [
              {
                codename: timeZone.linkedItems[0].system.codename,
              },
            ],
          }),
          builder.multipleChoiceElement({
            element: {
              codename: 'type',
            },
            value: [
              {
                codename: event.elements.registrationUrl.value
                  ? 'attending'
                  : 'hosted',
              },
            ],
          }),
          builder.multipleChoiceElement({
            element: {
              codename: 'registration_open',
            },
            value: [
              {
                codename: registrationOpen.value[0].codename ?? 'no',
              },
            ],
          }),
        ]

        if (endDateAndTime.value) {
          finalElements.push(
            builder.dateTimeElement({
              element: {
                codename: 'end_date_and_time',
              },
              value: endDateAndTime.value,
            })
          )
        }

        if (pardotUrl.value) {
          finalElements.push(
            builder.textElement({
              element: {
                codename: 'pardot_url',
              },
              value: pardotUrl.value,
            })
          )
        }

        if (venue.linkedItems.length > 0) {
          finalElements.push(
            builder.linkedItemsElement({
              element: {
                codename: 'venue',
              },
              value: [
                {
                  codename: venue.linkedItems[0].system.codename,
                },
              ],
            })
          )
        }

        if (agenda.linkedItems.length > 0) {
          finalElements.push(
            builder.linkedItemsElement({
              element: {
                codename: 'agenda',
              },
              value: agenda.linkedItems.map((item) => ({
                codename: item.system.codename,
              })),
            })
          )
        }

        return {
          elements: finalElements,
        }
      })
      .toPromise()

    await apiClient
      .changeWorkflowOfLanguageVariant()
      .byItemCodename(codename)
      .byLanguageCodename('default')
      .withData({
        // TODO: Change this to the correct workflow step for PRODUCTION
        step_identifier: {
          codename: 'ready_for_publishing_56f2a77',
        },
        // TODO: Change this to the correct workflow step for PRODUCTION
        workflow_identifier: {
          codename: 'events___webinars',
        },
      })
      .toPromise()

    await apiClient
      .publishLanguageVariant()
      .byItemCodename(codename)
      .byLanguageCodename('default')
      .withoutData()
      .toPromise()
  }
}

export const webinarNewFieldValues = async (apiClient: ManagementClient) => {
  const webinarsRes = await KontentService.Instance()
    .deliveryClient.items<WebinarModel>()
    .type(contentTypes.webinar.codename)
    .toPromise()

  const webinarsWithDates = webinarsRes.data.items.filter(
    (item) =>
      item.elements.webinarDates.linkedItems.length > 0 &&
      item.system.workflowStep === PUBLISHED
  )

  for await (const webinar of webinarsWithDates) {
    const { codename } = webinar.system
    const {
      pardotUrl,
      startDateAndTime,
      endDateAndTime,
      timezone,
      registrationOpen,
    } = webinar.elements.webinarDates.linkedItems[0].elements

    await apiClient
      .createNewVersionOfLanguageVariant()
      .byItemCodename(codename)
      .byLanguageCodename('default')
      .toPromise()

    await apiClient
      .upsertLanguageVariant()
      .byItemCodename(codename)
      .byLanguageCodename('default')
      .withData((builder) => {
        const finalElements = [
          builder.dateTimeElement({
            element: {
              codename: 'start_date_and_time',
            },
            value: startDateAndTime.value,
          }),
          builder.linkedItemsElement({
            element: {
              codename: 'time_zone',
            },
            value: [
              {
                codename: timezone.linkedItems[0].system.codename,
              },
            ],
          }),
          builder.multipleChoiceElement({
            element: {
              codename: 'registration_open',
            },
            value: [
              {
                codename: registrationOpen.value[0].codename ?? 'no',
              },
            ],
          }),
        ]

        if (endDateAndTime.value) {
          finalElements.push(
            builder.dateTimeElement({
              element: {
                codename: 'end_date_and_time',
              },
              value: endDateAndTime.value,
            })
          )
        }

        if (pardotUrl.value) {
          finalElements.push(
            builder.textElement({
              element: {
                codename: 'pardot_url',
              },
              value: pardotUrl.value,
            })
          )
        }

        return {
          elements: finalElements,
        }
      })
      .toPromise()

    await apiClient
      .changeWorkflowOfLanguageVariant()
      .byItemCodename(codename)
      .byLanguageCodename('default')
      .withData({
        // TODO: Change this to the correct workflow step for PRODUCTION
        step_identifier: {
          codename: 'ready_for_publishing_56f2a77',
        },
        // TODO: Change this to the correct workflow step for PRODUCTION
        workflow_identifier: {
          codename: 'events___webinars',
        },
      })
      .toPromise()

    await apiClient
      .publishLanguageVariant()
      .byItemCodename(codename)
      .byLanguageCodename('default')
      .withoutData()
      .toPromise()
  }
}
