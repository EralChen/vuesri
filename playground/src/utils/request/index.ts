import RestFetch from './RestFetch'
import type { RequestOptions } from './RestFetch'

const restFetch = new RestFetch({
  baseURL: import.meta.env.VITE_BASE_API,
  // setRequestInit: (config) => {
  //   const headers = config.headers as Headers
  //   const token = getToken()
  //   if (token) {
  //     headers.set('Authorization', token)
  //   }
  //   return config
  // },
})
interface InitOptions{
  msg?: boolean;
  loading?: boolean;
}
interface BaseResponse<T = unknown> {
  code: number;
  status: number;
  msg: string;
  data: T;
}


async function request<T extends BaseResponse> (options: RequestOptions, init?: InitOptions):Promise<T> {
  const loading = !!init?.loading
  // [TODO] 需要一个loading控制器
  if (loading) {
    // [TODO] 开启loading
  }
  const res = await restFetch.request<T>(options)
  if (!(res.code === 200 || res.status === 10001)) {
    // [TODO] 显示请求失败 的消息
  }

  // token异常
  if (res.status === 10405 || res.status === 10406 || res.status === 10407 || res.status === 10408) {
    // [TODO] 重新去获取token
  }

  if (res.status === 10001 || res.code === 200) { // 请求成功
    if (init?.msg) { 
      // [TODO] 显示请求成功 的消息
    }
  }

  // [TODO] 关闭loading
  return res
}

export {
  RequestOptions,
  BaseResponse,
  InitOptions,
}
export default request
