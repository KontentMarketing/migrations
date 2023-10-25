import { MigrationModule } from '@kontent-ai/cli'
import { ManagementClient } from '@kontent-ai/management-sdk'
import {
  eventDateToEventContentTypeFields,
  eventNewFieldValues,
  webinarDateToWebinarContentTypeFields,
} from './lib/event-dates'

const migration: MigrationModule = {
  order: 15,
  run: async (apiClient: ManagementClient) => {
    // await eventDateToEventContentTypeFields(apiClient)
    // await webinarDateToWebinarContentTypeFields(apiClient)
    // await eventNewFieldValues(apiClient)
  },
}

export default migration
