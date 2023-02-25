import { MigrationModule } from '@kontent-ai/cli';
import { ManagementClient } from '@kontent-ai/management-sdk';
import {
  createAndAssignBasicBreadcrumbs,
  createAndAssignResourceBreadcrumbs,
} from './lib/breadcrumbs';
import { taxonomies } from './models';

const migration: MigrationModule = {
  order: 14,
  run: async (apiClient: ManagementClient) => {
    await createAndAssignBasicBreadcrumbs(
      apiClient,
      taxonomies.page_type.terms.feature.codename,
      'Breadcrumbs - Features',
      'breadcrumbs___features'
    );

    await createAndAssignBasicBreadcrumbs(
      apiClient,
      taxonomies.page_type.terms.industry.codename,
      'Breadcrumbs - Industry',
      'breadcrumbs___industry'
    );

    await createAndAssignBasicBreadcrumbs(
      apiClient,
      taxonomies.page_type.terms.use_case.codename,
      'Breadcrumbs - Solutions',
      'breadcrumbs___solutions'
    );

    await createAndAssignResourceBreadcrumbs(apiClient);
  },
};
export default migration;
