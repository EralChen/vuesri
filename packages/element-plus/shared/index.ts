import RestFetch from '@vunk/shared/utils/request/RestFetch'
import { ElMessage, ElLoadingService } from 'element-plus'
import type { LoadingOptions } from 'element-plus'
import type { RequestOptions } from '@vunk/shared/utils/request/RestFetch'

export const restFetch = new RestFetch({
  baseURL: '',
})


interface InitOptions{
  msg?: boolean;
  loading?: boolean | LoadingOptions;
}
interface BaseResponse<T = unknown> {
  code: number;
  status: number;
  msg: string;
  data: T;
}

async function request<T extends BaseResponse> (options: RequestOptions, init?: InitOptions):Promise<T> {
  const loading = !!init?.loading
  let loadingService:ReturnType<typeof ElLoadingService>|null = null
  if (loading) {
    loadingService = ElLoadingService(
      typeof init.loading === 'boolean' ?  {} : init.loading, 
    )
  }
  const res = await restFetch.request<T>(options)
  if (!(res.code === 200 || res.status === 10001)) {
    ElMessage({
      type: 'error',
      message: res.msg,
    })
  }
  if (res.status === 10001 || res.code === 200) { // 请求成功
    if (init?.msg) { 
      ElMessage({
        type: 'success',
        message: res.msg,
      })
    }
  }
  loadingService?.close()
  return res
}

export {
  RequestOptions,
  BaseResponse,
  InitOptions,
}
export default request
