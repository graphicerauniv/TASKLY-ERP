export type DataSourceMode = 'client' | 'server';
export type SortDirection = 'asc' | 'desc';
export type LoadingPhase = 'idle' | 'initial' | 'refresh' | 'append' | 'success' | 'error';

export interface PaginationQuery {
  readonly page: number;
  readonly pageSize: number;
  readonly search?: string;
}

export interface PaginationMeta {
  readonly page: number;
  readonly pageSize: number;
  readonly totalItems: number;
  readonly totalPages: number;
  readonly hasPreviousPage: boolean;
  readonly hasNextPage: boolean;
}

export interface PaginatedResponse<T> {
  readonly data: readonly T[];
  readonly meta: PaginationMeta;
}
