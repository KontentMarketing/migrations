import { IContentItem, Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@5.7.0'
 *
 * Pricing Plan
 * Id: aefa0394-4d39-4ba8-ad36-77d6629a577a
 * Codename: pricing_plan
 */
export type PricingPlanModel = IContentItem<{
  /**
   * Name (text)
   * Required: true
   * Id: 707bca0c-5161-4c57-a7ce-0bd68929010e
   * Codename: name
   */
  name: Elements.TextElement;

  /**
   * Price (text)
   * Required: true
   * Id: cd992d14-eb6c-481c-a47d-049b627504cd
   * Codename: price
   */
  price: Elements.TextElement;

  /**
   * Projects (number)
   * Required: true
   * Id: f4d7b4b1-38c2-45c8-a827-741d8d625663
   * Codename: projects
   */
  projects: Elements.NumberElement;

  /**
   * Environments (number)
   * Required: true
   * Id: 5d6a83cf-19ac-493f-81b2-41315f1df59a
   * Codename: environments
   */
  environments: Elements.NumberElement;

  /**
   * Spaces (number)
   * Required: true
   * Id: 051ba34d-23e0-45e2-bab0-bdb955a5dbbc
   * Codename: spaces
   */
  spaces: Elements.NumberElement;

  /**
   * Collections (number)
   * Required: true
   * Id: 2434f53b-64de-4da3-bce5-3d43d4c31711
   * Codename: collections
   */
  collections: Elements.NumberElement;

  /**
   * Active Users (number)
   * Required: true
   * Id: 312149d5-3066-43a0-a169-ecf898392564
   * Codename: active_users
   */
  activeUsers: Elements.NumberElement;

  /**
   * Custom Roles (number)
   * Required: true
   * Id: caa22aa9-faa0-43fd-9b2d-674c49e23b7a
   * Codename: custom_roles
   */
  customRoles: Elements.NumberElement;

  /**
   * Content Items (number)
   * Required: true
   * Id: 62e8bc35-dc9f-4538-8d61-888d50590e81
   * Codename: content_items
   */
  contentItems: Elements.NumberElement;

  /**
   * Content Types (number)
   * Required: true
   * Id: 087d89c6-2918-4009-a853-a644e52d466f
   * Codename: content_types
   */
  contentTypes: Elements.NumberElement;

  /**
   * Asset Storage (number)
   * Required: true
   * Id: 87775998-cbe0-425a-92dd-c534188bb879
   * Codename: asset_storage
   *
   * Amount of asset store in GB
   */
  assetStorage: Elements.NumberElement;

  /**
   * Languages (number)
   * Required: true
   * Id: c197b6a3-8819-4459-ad80-b56180859b0d
   * Codename: languages
   */
  languages: Elements.NumberElement;

  /**
   * Content Collections (multiple_choice)
   * Required: true
   * Id: f5bb7974-ba21-4add-8ee7-c63fbd1ad5d9
   * Codename: content_collections
   */
  contentCollections: Elements.MultipleChoiceElement;

  /**
   * Content Collections Text (text)
   * Required: false
   * Id: a32e681e-4695-4eed-bc11-9967d2f6d43d
   * Codename: content_collections_text
   *
   * This element will be used if "Content Collections" is set to "text"
   */
  contentCollectionsText: Elements.TextElement;

  /**
   * Localization (multiple_choice)
   * Required: true
   * Id: e4a98b1b-f1c7-46ea-9a98-fa6e107b0bf3
   * Codename: localization
   */
  localization: Elements.MultipleChoiceElement;

  /**
   * Custom Elements (multiple_choice)
   * Required: true
   * Id: 2aec80a1-47f1-4b01-bae5-8f7ed3dc39f1
   * Codename: custom_elements
   */
  customElements: Elements.MultipleChoiceElement;

  /**
   * Content Taxonomy (multiple_choice)
   * Required: true
   * Id: 54714030-79de-407e-a03f-a0df52bede70
   * Codename: content_taxonomy
   */
  contentTaxonomy: Elements.MultipleChoiceElement;

  /**
   * Asset Library (multiple_choice)
   * Required: true
   * Id: 1da3841d-8d67-4b7d-acb6-b75fc54ff898
   * Codename: asset_library
   */
  assetLibrary: Elements.MultipleChoiceElement;

  /**
   * Real-time Collaboration (multiple_choice)
   * Required: true
   * Id: 7742b1bf-20fd-4ea0-95f8-cc994eb0f34c
   * Codename: real_time_collaboration
   */
  realTimeCollaboration: Elements.MultipleChoiceElement;

  /**
   * Task Management (multiple_choice)
   * Required: true
   * Id: 9d331d84-2630-4cf6-9b69-2ed539b1e63a
   * Codename: task_management
   */
  taskManagement: Elements.MultipleChoiceElement;

  /**
   * Approval Workflow (multiple_choice)
   * Required: true
   * Id: b175fe71-366b-45ed-9fc1-d5766aa7e6b9
   * Codename: approval_workflow
   */
  approvalWorkflow: Elements.MultipleChoiceElement;

  /**
   * Multiple Workflows (multiple_choice)
   * Required: true
   * Id: f4ef3bee-2c21-4cb5-9eff-15b0c0617022
   * Codename: multiple_workflows
   */
  multipleWorkflows: Elements.MultipleChoiceElement;

  /**
   * Multiple Workflows Text (text)
   * Required: false
   * Id: 91f3c20c-af2b-472a-b3a9-1fb43d70a2c6
   * Codename: multiple_workflows_text
   *
   * This element will be used if "Multiple Workflows" is set to "text"
   */
  multipleWorkflowsText: Elements.TextElement;

  /**
   * Advanced Asset Management (multiple_choice)
   * Required: true
   * Id: 80886634-be0a-4040-a77a-f8c94502eabd
   * Codename: advanced_asset_management
   */
  advancedAssetManagement: Elements.MultipleChoiceElement;

  /**
   * Advanced Asset Management Text (text)
   * Required: false
   * Id: 66fe35f2-bb8f-4393-b12a-521b2365fa24
   * Codename: advanced_asset_management_text
   *
   * This element will be used if "Advanced Asset Management" is set to "text"
   */
  advancedAssetManagementText: Elements.TextElement;

  /**
   * Web Spotlight (multiple_choice)
   * Required: true
   * Id: 8ae345a8-e0d0-4651-a1b7-7c74599fbf58
   * Codename: web_spotlight
   */
  webSpotlight: Elements.MultipleChoiceElement;

  /**
   * Web Spotlight Text (text)
   * Required: false
   * Id: 99ca68c1-d43d-4a8a-a6ad-25bf9612f4ab
   * Codename: web_spotlight_text
   *
   * This element will be used if "Web Spotlight" is set to "text"
   */
  webSpotlightText: Elements.TextElement;

  /**
   * Secure Delivery API (multiple_choice)
   * Required: true
   * Id: fcc66e1b-604d-4b03-aa64-470ec1a13a26
   * Codename: secure_delivery_api
   */
  secureDeliveryApi: Elements.MultipleChoiceElement;

  /**
   * Localization Permissions (multiple_choice)
   * Required: true
   * Id: d91a6106-d6d7-4bb6-8002-0567b77c2a42
   * Codename: localization_permissions
   */
  localizationPermissions: Elements.MultipleChoiceElement;

  /**
   * Single Sign-On (multiple_choice)
   * Required: true
   * Id: 5007ee58-3ee1-4b02-b842-4a09f173c569
   * Codename: single_sign_on
   */
  singleSignOn: Elements.MultipleChoiceElement;

  /**
   * Single Sign-On text (text)
   * Required: false
   * Id: dbf6ad33-7a5d-48ba-8241-9aecb80df135
   * Codename: single_sign_on_text
   *
   * This element will be used if "Single Sign-On" is set to "text"
   */
  singleSignOnText: Elements.TextElement;

  /**
   * Multifactor Authentication (multiple_choice)
   * Required: true
   * Id: 19db44ef-f3c5-4ebe-b24e-ed77dbf39dde
   * Codename: multifactor_authentication
   */
  multifactorAuthentication: Elements.MultipleChoiceElement;

  /**
   * Audit Log (multiple_choice)
   * Required: true
   * Id: c6acf3e0-8410-4285-8851-0a6ad4259c89
   * Codename: audit_log
   */
  auditLog: Elements.MultipleChoiceElement;

  /**
   * Content Delivery API (multiple_choice)
   * Required: true
   * Id: 6738c4f3-943a-4a88-9273-c76463331d14
   * Codename: content_delivery_api
   */
  contentDeliveryApi: Elements.MultipleChoiceElement;

  /**
   * Content Delivery GraphQL API (multiple_choice)
   * Required: true
   * Id: a9505127-d57e-476c-9bb3-88f965b27b6b
   * Codename: content_delivery_graphql_api
   */
  contentDeliveryGraphqlApi: Elements.MultipleChoiceElement;

  /**
   * Management API (multiple_choice)
   * Required: true
   * Id: e19491a1-e517-435c-a9c9-2bb45bb54c25
   * Codename: management_api
   */
  managementApi: Elements.MultipleChoiceElement;

  /**
   * Subscription API (multiple_choice)
   * Required: true
   * Id: 356ef426-c1b2-4e01-a57d-8b8cf2d052ea
   * Codename: subscription_api
   */
  subscriptionApi: Elements.MultipleChoiceElement;

  /**
   * Image Transformation API (multiple_choice)
   * Required: true
   * Id: 786b4684-2ba0-4d51-bcec-070c982ad20e
   * Codename: image_transformation_api
   */
  imageTransformationApi: Elements.MultipleChoiceElement;

  /**
   * Web Hooks (multiple_choice)
   * Required: true
   * Id: e6aad88a-4963-460a-b3f2-02a576e867d4
   * Codename: web_hooks
   */
  webHooks: Elements.MultipleChoiceElement;

  /**
   * Choice of Data Center (multiple_choice)
   * Required: true
   * Id: 26d1a1c1-85c1-444a-abda-4cff8eea7047
   * Codename: choice_of_data_center
   */
  choiceOfDataCenter: Elements.MultipleChoiceElement;

  /**
   * Dedicated Infrastructure (multiple_choice)
   * Required: true
   * Id: 76646379-9149-4ea4-bddf-9718b8f66a1a
   * Codename: dedicated_infrastructure
   */
  dedicatedInfrastructure: Elements.MultipleChoiceElement;

  /**
   * Dediacted Infrastructure Text (text)
   * Required: false
   * Id: 95fde97a-3b9d-4716-bf6c-e81ec5814e66
   * Codename: dediacted_infrastructure_text
   *
   * This element will be used if "Multiple Workflows" is set to "text"
   */
  dediactedInfrastructureText: Elements.TextElement;

  /**
   * Support (text)
   * Required: true
   * Id: ecf960a6-9f93-4993-97fb-6827393f9f70
   * Codename: support
   */
  support: Elements.TextElement;

  /**
   * Service Availability (multiple_choice)
   * Required: true
   * Id: 0ecb7048-71be-487b-8133-c2c1cdc9f0e5
   * Codename: service_availability
   */
  serviceAvailability: Elements.MultipleChoiceElement;

  /**
   * Service Availability Text (text)
   * Required: false
   * Id: 228ef6d1-bb1d-458a-b23e-ece14c9b8866
   * Codename: service_availability_text
   *
   * This element will be used if "Service Availability" is set to "text"
   */
  serviceAvailabilityText: Elements.TextElement;

  /**
   * E-learning (multiple_choice)
   * Required: true
   * Id: c114af46-5f45-4f34-93cb-588b071c87d7
   * Codename: e_learning
   */
  eLearning: Elements.MultipleChoiceElement;

  /**
   * E-learning Text (text)
   * Required: false
   * Id: a5a1c69f-273a-4154-ae8e-b1e51a63e81f
   * Codename: e_learning_text
   *
   * This element will be used if "E-learning" is set to "text"
   */
  eLearningText: Elements.TextElement;

  /**
   * Guaranteed first response time (multiple_choice)
   * Required: true
   * Id: 05924a82-993f-4035-9320-ab7ac8c629d4
   * Codename: guaranteed_first_response_time
   */
  guaranteedFirstResponseTime: Elements.MultipleChoiceElement;

  /**
   * Guaranteed first response time Text (text)
   * Required: false
   * Id: e2803fb4-beee-4424-b6e7-91ddac5a8082
   * Codename: guaranteed_first_response_time_text
   *
   * This element will be used if "Guaranteed first response time" is set to "text"
   */
  guaranteedFirstResponseTimeText: Elements.TextElement;

  /**
   * Customer Success Manager and consultations (multiple_choice)
   * Required: true
   * Id: 5c0be48b-2d75-42a8-9ce4-9039c61220c4
   * Codename: customer_success_manager
   */
  customerSuccessManager: Elements.MultipleChoiceElement;

  /**
   * Customer Success Manager and consultations Text (text)
   * Required: false
   * Id: 37422858-5834-4c40-be42-086121c1a7f3
   * Codename: customer_success_manager_text
   *
   * This element will be used if "Customer Success Manager and consultations" is set to "text"
   */
  customerSuccessManagerText: Elements.TextElement;
}>;
