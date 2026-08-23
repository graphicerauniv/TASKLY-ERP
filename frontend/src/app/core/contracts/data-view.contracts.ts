export type DataSourceMode = 'client' | 'server';
export type SortDirection = 'asc' | 'desc';
export type LoadingPhase = 'idle' | 'initial' | 'refresh' | 'append' | 'success' | 'error';
export type DataDensity = 'comfortable' | 'compact' | 'dense';

export interface SortDescriptor {
  readonly field: string;
  readonly direction: SortDirection;
}

export interface FilterDescriptor {
  readonly field: string;
  readonly operator: 'eq' | 'neq' | 'contains' | 'startsWith' | 'in' | 'gte' | 'lte';
  readonly value: unknown;
}

export interface PaginationQuery {
  readonly page: number;
  readonly pageSize: number;
  readonly search?: string;
  readonly sort?: readonly SortDescriptor[];
  readonly filters?: readonly FilterDescriptor[];
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

export interface DataViewState<T> {
  readonly mode: DataSourceMode;
  readonly items: readonly T[];
  readonly pagination: PaginationMeta;
  readonly loading: LoadingPhase;
  readonly selectedIds: ReadonlySet<string>;
  readonly error: string | null;
  readonly isStale: boolean;
}

export interface DataViewConfig {
  readonly mode: DataSourceMode;
  readonly density: DataDensity;
  readonly selectable: boolean;
  readonly multiSelect: boolean;
  readonly virtualScroll: boolean;
  readonly preserveSelectionAcrossPages: boolean;
}
