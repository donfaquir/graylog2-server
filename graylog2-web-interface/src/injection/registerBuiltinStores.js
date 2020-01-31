import CombinedProvider from './CombinedProvider';

/* eslint-disable import/no-require, global-require */
const actions = {
  AlarmCallbackHistory: () => require('actions/alarmcallbacks/AlarmCallbackHistoryActions'),
  AlarmCallbacks: () => require('actions/alarmcallbacks/AlarmCallbacksActions'),
  AlertConditions: () => require('actions/alertconditions/AlertConditionsActions'),
  AlertNotifications: () => require('actions/alertnotifications/AlertNotificationsActions'),
  Alerts: () => require('actions/alerts/AlertsActions'),
  Authentication: () => require('actions/authentication/AuthenticationActions'),
  AvailableEventDefinitionTypes: () => require('actions/event-definitions/AvailableEventDefinitionTypesActions'),
  Catalog: () => require('actions/content-packs/CatalogActions'),
  ClusterTraffic: () => require('actions/cluster/ClusterTrafficActions'),
  CodecTypes: () => require('actions/codecs/CodecTypesActions'),
  CollectorConfigurations: () => require('actions/sidecars/CollectorConfigurationsActions'),
  Collectors: () => require('actions/sidecars/CollectorsActions'),
  Configuration: () => require('actions/configurations/ConfigurationActions'),
  Configurations: () => require('actions/configurations/ConfigurationActions'),
  ConfigurationVariable: () => require('actions/sidecars/ConfigurationVariableActions'),
  ContentPacks: () => require('actions/content-packs/ContentPacksActions'),
  Decorators: () => require('actions/decorators/DecoratorsActions'),
  Deflector: () => require('actions/indices/DeflectorActions'),
  EventDefinitions: () => require('actions/event-definitions/EventDefinitionsActions'),
  EventNotifications: () => require('actions/event-notifications/EventNotificationsActions'),
  Events: () => require('actions/events/EventsActions'),
  Extractors: () => require('actions/extractors/ExtractorsActions'),
  GettingStarted: () => require('actions/gettingstarted/GettingStartedActions'),
  IndexerCluster: () => require('actions/indexers/IndexerClusterActions'),
  IndexerOverview: () => require('actions/indexers/IndexerOverviewActions'),
  IndexRanges: () => require('actions/indices/IndexRangesActions'),
  IndexSets: () => require('actions/indices/IndexSetsActions'),
  Indices: () => require('actions/indices/IndicesActions'),
  IndicesConfiguration: () => require('actions/indices/IndicesConfigurationActions'),
  Inputs: () => require('actions/inputs/InputsActions'),
  InputTypes: () => require('actions/inputs/InputTypesActions'),
  Ldap: () => require('actions/ldap/LdapActions'),
  LdapGroups: () => require('actions/ldap/LdapGroupsActions'),
  Loggers: () => require('actions/system/LoggersActions'),
  LookupTableCaches: () => require('actions/lookup-tables/LookupTableCachesActions'),
  LookupTableDataAdapters: () => require('actions/lookup-tables/LookupTableDataAdaptersActions'),
  LookupTables: () => require('actions/lookup-tables/LookupTablesActions'),
  MessageCounts: () => require('actions/messages/MessageCountsActions'),
  Messages: () => require('actions/messages/MessagesActions'),
  Metrics: () => require('actions/metrics/MetricsActions'),
  Nodes: () => require('actions/nodes/NodesActions'),
  Notifications: () => require('actions/notifications/NotificationsActions'),
  PipelineConnections: () => require('actions/pipelines/PipelineConnectionsActions'),
  Pipelines: () => require('actions/pipelines/PipelinesActions'),
  FilterPreview: () => require('actions/event-definitions/FilterPreviewActions'),
  Refresh: () => require('actions/tools/RefreshActions'),
  Rules: () => require('actions/rules/RulesActions'),
  ServerAvailability: () => require('actions/sessions/ServerAvailabilityActions'),
  Session: () => require('actions/sessions/SessionActions'),
  Sidecars: () => require('actions/sidecars/SidecarsActions'),
  SidecarsAdministration: () => require('actions/sidecars/SidecarsAdministrationActions'),
  Simulator: () => require('actions/simulator/SimulatorActions'),
  SingleNode: () => require('actions/nodes/SingleNodeActions'),
  Streams: () => require('actions/streams/StreamsActions'),
  SystemJobs: () => require('actions/systemjobs/SystemJobsActions'),
};

const stores = {
  AlarmCallbackHistory: () => require('stores/alarmcallbacks/AlarmCallbackHistoryStore'),
  AlarmCallbacks: () => require('stores/alarmcallbacks/AlarmCallbacksStore'),
  AlertConditions: () => require('stores/alertconditions/AlertConditionsStore'),
  AlertNotifications: () => require('stores/alertnotifications/AlertNotificationsStore'),
  Alerts: () => require('stores/alerts/AlertsStore'),
  Authentication: () => require('stores/authentication/AuthenticationStore'),
  AvailableEventDefinitionTypes: () => require('stores/event-definitions/AvailableEventDefinitionTypesStore'),
  Catalog: () => require('stores/content-packs/CatalogStore'),
  ClusterOverview: () => require('stores/cluster/ClusterOverviewStore'),
  ClusterTraffic: () => require('stores/cluster/ClusterTrafficStore'),
  CodecTypes: () => require('stores/codecs/CodecTypesStore'),
  CollectorConfigurations: () => require('stores/sidecars/CollectorConfigurationsStore'),
  Collectors: () => require('stores/sidecars/CollectorsStore'),
  ContentPacks: () => require('stores/content-packs/ContentPacksStore'),
  Configuration: () => require('stores/configurations/ConfigurationsStore'),
  Configurations: () => require('stores/configurations/ConfigurationsStore'),
  CurrentUser: () => require('stores/users/CurrentUserStore'),
  Decorators: () => require('stores/decorators/DecoratorsStore'),
  Deflector: () => require('stores/indices/DeflectorStore'),
  EventDefinitions: () => require('stores/event-definitions/EventDefinitionsStore'),
  EventNotifications: () => require('stores/event-notifications/EventNotificationsStore'),
  Events: () => require('stores/events/EventsStore'),
  Extractors: () => require('stores/extractors/ExtractorsStore'),
  Focus: () => require('stores/tools/FocusStore'),
  GettingStarted: () => require('stores/gettingstarted/GettingStartedStore'),
  GlobalThroughput: () => require('stores/metrics/GlobalThroughputStore'),
  GrokPatterns: () => require('stores/grok-patterns/GrokPatternsStore'),
  IndexerCluster: () => require('stores/indexers/IndexerClusterStore'),
  IndexerFailures: () => require('stores/indexers/IndexerFailuresStore'),
  IndexerOverview: () => require('stores/indexers/IndexerOverviewStore'),
  IndexRanges: () => require('stores/indices/IndexRangesStore'),
  IndexSets: () => require('stores/indices/IndexSetsStore'),
  Indices: () => require('stores/indices/IndicesStore'),
  IndicesConfiguration: () => require('stores/indices/IndicesConfigurationStore'),
  Inputs: () => require('stores/inputs/InputsStore'),
  InputStates: () => require('stores/inputs/InputStatesStore'),
  InputStaticFields: () => require('stores/inputs/InputStaticFieldsStore'),
  InputTypes: () => require('stores/inputs/InputTypesStore'),
  Journal: () => require('stores/journal/JournalStore'),
  LdapGroups: () => require('stores/ldap/LdapGroupsStore'),
  Ldap: () => require('stores/ldap/LdapStore'),
  Loggers: () => require('stores/system/LoggersStore'),
  LookupTables: () => require('stores/lookup-tables/LookupTablesStore'),
  LookupTableCaches: () => require('stores/lookup-tables/LookupTableCachesStore'),
  LookupTableDataAdapters: () => require('stores/lookup-tables/LookupTableDataAdaptersStore'),
  MessageCounts: () => require('stores/messages/MessageCountsStore'),
  MessageFields: () => require('stores/messages/MessageFieldsStore'),
  Messages: () => require('stores/messages/MessagesStore'),
  Metrics: () => require('stores/metrics/MetricsStore'),
  Nodes: () => require('stores/nodes/NodesStore'),
  Notifications: () => require('stores/notifications/NotificationsStore'),
  Outputs: () => require('stores/outputs/OutputsStore'),
  PipelineConnections: () => require('stores/pipelines/PipelineConnectionsStore'),
  Pipelines: () => require('stores/pipelines/PipelinesStore'),
  Plugins: () => require('stores/plugins/PluginsStore'),
  Preferences: () => require('stores/users/PreferencesStore'),
  FilterPreview: () => require('stores/event-definitions/FilterPreviewStore'),
  Refresh: () => require('stores/tools/RefreshStore'),
  Roles: () => require('stores/users/RolesStore'),
  Rules: () => require('stores/rules/RulesStore'),
  Search: () => require('stores/search/SearchStore'),
  ServerAvailability: () => require('stores/sessions/ServerAvailabilityStore'),
  Session: () => require('stores/sessions/SessionStore'),
  Sidecars: () => require('stores/sidecars/SidecarsStore'),
  SidecarsAdministration: () => require('stores/sidecars/SidecarsAdministrationStore'),
  Simulator: () => require('stores/simulator/SimulatorStore'),
  SingleNode: () => require('stores/nodes/SingleNodeStore'),
  Startpage: () => require('stores/users/StartpageStore'),
  StreamRules: () => require('stores/streams/StreamRulesStore'),
  Streams: () => require('stores/streams/StreamsStore'),
  System: () => require('stores/system/SystemStore'),
  SystemJobs: () => require('stores/systemjobs/SystemJobsStore'),
  SystemLoadBalancer: () => require('stores/load-balancer/SystemLoadBalancerStore'),
  SystemMessages: () => require('stores/systemmessages/SystemMessagesStore'),
  SystemProcessing: () => require('stores/system-processing/SystemProcessingStore'),
  SystemShutdown: () => require('stores/system-shutdown/SystemShutdownStore'),
  ConfigurationVariable: () => require('stores/sidecars/ConfigurationVariableStore'),
  Tools: () => require('stores/tools/ToolsStore'),
  UniversalSearch: () => require('stores/search/UniversalSearchStore'),
  Users: () => require('stores/users/UsersStore'),
};
/* eslint-enable import/no-require, global-require */

export default () => {
  Object.keys(actions).forEach(key => CombinedProvider.registerAction(key, actions[key]));
  Object.keys(stores).forEach(key => CombinedProvider.registerStore(key, stores[key]));
};
