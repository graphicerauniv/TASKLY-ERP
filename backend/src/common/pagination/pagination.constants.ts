export const API_PAGINATION = {
  defaultPage: 1,
  defaultPageSize: 25,
  minimumPageSize: 1,
  maximumPageSize: 100,
  maximumSearchLength: 160,
  maximumSortFields: 3,
  maximumFilters: 12,
} as const;

export const API_QUERY_PERFORMANCE = {
  defaultTimeoutMs: 10_000,
  slowQueryThresholdMs: 750,
  cacheTtlSeconds: 30,
  maximumExportRows: 50_000,
} as const;
