export type ApiSortDirection = 'asc' | 'desc';

export interface ApiPaginationQuery {
  readonly page: number;
  readonly pageSize: number;
  readonly search?: string;
  readonly sort?: string;
  readonly direction?: ApiSortDirection;
}

export interface ApiPaginationMeta {
  readonly page: number;
  readonly pageSize: number;
  readonly totalItems: number;
  readonly totalPages: number;
  readonly hasPreviousPage: boolean;
  readonly hasNextPage: boolean;
}

export interface ApiPaginatedResponse<T> {
  readonly data: readonly T[];
  readonly meta: ApiPaginationMeta;
}
