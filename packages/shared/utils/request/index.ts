import RestFetch from './RestFetch'
import type { RequestOptions } from './RestFetch'

export const restFetch = new RestFetch({
  baseURL: '',
})

interface InitOptions{
  msg?: boolean;
}
interface BaseResponse<T = unknown> {
  code: number;
  status: number;
  msg: string;
  data: T;
}

async function request<T extends BaseResponse> (options: RequestOptions, init?: InitOptions):Promise<T> {
  const res = await restFetch.request<T>(options)
  if (!(res.code === 200 || res.status === 10001)) {

  }
  // token异常
  if (res.status === 10405 || res.status === 10406 || res.status === 10407 || res.status === 10408) {
    // [TODO] 重新去获取token
  }
  if (res.status === 10001 || res.code === 200) { // 请求成功
    if (init?.msg) { 

    }
  }
  return res
}

export {
  RequestOptions,
  BaseResponse,
  InitOptions,
}
export default request
