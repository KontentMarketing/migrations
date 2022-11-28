import { MigrationModule } from "@kontent-ai/cli";
import { ManagementClient } from "@kontent-ai/management-sdk";
import { updateEventContentType, updateEventDateContentType, updateWebinarDateContentType, updateWebinarsPageContentType, updateWebinarTopicContentType } from "./lib/webinars";

const migration: MigrationModule = {
	order: 10,
	run: async (apiClient: ManagementClient) => {
		// This is a sample method that updates the WebinarsPage content type, more methods can be found in the lib folder
		await updateWebinarsPageContentType(apiClient);
		await updateWebinarTopicContentType(apiClient);
		await updateEventContentType(apiClient);
		await updateEventDateContentType(apiClient);
		await updateWebinarDateContentType(apiClient);
	},
};
export default migration;
