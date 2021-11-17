import request from '@/utils/request'
import type { InitOptions, BaseResponse, RequestOptions } from '@/utils/request'
export default <T extends BaseResponse>(o:RequestOptions, i?: InitOptions):Promise<T> => request<T>({
  baseURL: import.meta.env.VITE_SYS_API,
  ...o,
}, i)
