export const ERP_PAGINATION = {
  defaultPage: 1,
  defaultPageSize: 25,
  pageSizeOptions: [10, 25, 50, 100],
  maxPageSize: 100,
  maxVisiblePages: 7,
  clientModeThreshold: 500,
  debounceMs: 250,
  prefetchNextPage: true,
} as const;

export const ERP_DATA_LOADING = {
  skeletonDelayMs: 120,
  spinnerDelayMs: 300,
  minimumVisibleMs: 240,
  staleAfterMs: 30_000,
  requestTimeoutMs: 15_000,
  retryCount: 2,
  retryDelayMs: 600,
} as const;

export const ERP_SELECTION = {
  keyField: 'id',
  preserveAcrossPages: false,
  showBulkToolbar: true,
  clearOnFilterChange: true,
  maximumSelectedRows: 1_000,
} as const;

export const ERP_RENDERING = {
  trackRowsByStableId: true,
  virtualScrollThreshold: 200,
  virtualScrollItemSize: 52,
  virtualScrollBufferPx: 320,
  deferBelowFoldContent: true,
  lazyLoadImages: true,
  cacheLastSuccessfulResult: true,
  cancelSupersededRequests: true,
} as const;

export const ERP_QUERY = {
  searchDebounceMs: 300,
  filterDebounceMs: 180,
  minimumSearchCharacters: 2,
  defaultSortDirection: 'asc',
} as const;
