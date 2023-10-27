import { MigrationModule } from '@kontent-ai/cli'
import { ManagementClient } from '@kontent-ai/management-sdk'
import {
  addEventFieldToHorizonsSections,
  addEventsToHorizonSections,
  deleteDateFieldsInHorzionSections,
  eventDateToEventContentTypeFields,
  eventNewFieldValues,
  purgeContentTypes,
  webinarDateToWebinarContentTypeFields,
  webinarNewFieldValues,
} from './lib/event-dates'

const migration: MigrationModule = {
  order: 15,
  run: async (apiClient: ManagementClient) => {
    // await addEventFieldToHorizonsSections(apiClient)
    // await addEventsToHorizonSections(apiClient)
    // await deleteDateFieldsInHorzionSections(apiClient)
    await eventDateToEventContentTypeFields(apiClient)
    await webinarDateToWebinarContentTypeFields(apiClient)
    await eventNewFieldValues(apiClient)
    await webinarNewFieldValues(apiClient)
    await purgeContentTypes(apiClient)
  },
}

export default migration
