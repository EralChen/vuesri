import type { LoadingOptions } from 'element-plus'
export type { RequestOptions } from '@vunk/shared/utils/request/RestFetch'
export interface InitOptions {
  msg?: boolean;
  loading?: boolean | LoadingOptions;
  err?: boolean
}
export interface BaseResponse<T = unknown> {
  code: number;
  status: number;
  msg: string;
  data: T;
}
