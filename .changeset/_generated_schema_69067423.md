---
"@linear/sdk": major
---


feat(schema): [breaking] Type 'FetchDataPayload' was removed (FetchDataPayload)

feat(schema): [breaking] Field 'fetchData' was removed from object type 'Query' (Query.fetchData)

feat(schema): [dangerous] Enum value 'workflowDefinition' was added to enum 'NotificationSubscriptionType' (NotificationSubscriptionType.workflowDefinition)

feat(schema): [dangerous] Input field 'enableLoops' was added to input object type 'SlackSettingsInput' (SlackSettingsInput.enableLoops)

feat(schema): [non_breaking] Type 'Meeting' was added (Meeting)

feat(schema): [non_breaking] Type 'MeetingAnalysisStatus' was added (MeetingAnalysisStatus)

feat(schema): [non_breaking] Type 'UsageAlertConnection' was added (UsageAlertConnection)

feat(schema): [non_breaking] Type 'UsageAlertEdge' was added (UsageAlertEdge)

feat(schema): [non_breaking] Type 'UsageAlertFilter' was added (UsageAlertFilter)

feat(schema): [non_breaking] Type 'UsageAlertType' was added (UsageAlertType)

feat(schema): [non_breaking] Type 'UsageAlertTypeComparator' was added (UsageAlertTypeComparator)

feat(schema): [non_breaking] Field 'summary' was added to object type 'AiConversationAckPart' (AiConversationAckPart.summary)

feat(schema): [non_breaking] Field 'meeting' was added to object type 'DocumentContent' (DocumentContent.meeting)

feat(schema): [non_breaking] Field 'Project.identifier' description changed from '[Internal] The human-readable identifier of the project. Returns the custom identifier override when set, otherwise the workspace default `<prefix>-<number>`. Null for legacy projects that have not been backfilled.' to '[Internal] The human-readable identifier of the project. Returns the custom identifier override when set, otherwise the default `P-<leadTeamKey>-<number>`. Null for projects without a lead team and for legacy projects that have not been backfilled.' (Project.identifier)

feat(schema): [non_breaking] Field 'ProjectSearchResult.identifier' description changed from '[Internal] The human-readable identifier of the project. Returns the custom identifier override when set, otherwise the workspace default `<prefix>-<number>`. Null for legacy projects that have not been backfilled.' to '[Internal] The human-readable identifier of the project. Returns the custom identifier override when set, otherwise the default `P-<leadTeamKey>-<number>`. Null for projects without a lead team and for legacy projects that have not been backfilled.' (ProjectSearchResult.identifier)

feat(schema): [non_breaking] Field 'usageAlert' was added to object type 'Query' (Query.usageAlert)

feat(schema): [non_breaking] Field 'usageAlerts' was added to object type 'Query' (Query.usageAlerts)

feat(schema): [non_breaking] Field 'UsageAlert.metadata' description changed from 'Type-specific metadata captured when the alert was triggered.' to 'Type-specific snapshot captured when the alert was triggered, keyed by the alert type — for example the credit balance and threshold for a lowBalance alert. A resolution entry is added once new usage credits have landed and cleared the alert's condition.' (UsageAlert.metadata)