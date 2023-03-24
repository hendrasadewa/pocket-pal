export interface CursorPagination {
  perPage: number;
  lastId: number;
  total: number;
}

export interface OffsetPagination {
  page: number;
  perPage: number;
  total: number;
}

export interface BaseResponse<T> {
  error?: unknown;
  result?: T | T[];
  message: string;
  pagination: CursorPagination | OffsetPagination;
}
