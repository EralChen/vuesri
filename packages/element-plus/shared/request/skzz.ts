import RestFetch from '@vunk/shared/utils/request/RestFetch'
import { ElMessage, ElLoadingService } from 'element-plus'
import type { BaseResponse, RequestOptions, InitOptions } from './types'

export class SkzzRestFetch extends RestFetch {
  async request<T extends BaseResponse> (options: RequestOptions, init?: InitOptions, requestInit?: RequestInit):Promise<T> {
    const loading = !!init?.loading
    let loadingService:ReturnType<typeof ElLoadingService>|null = null
    if (loading) {
      loadingService = ElLoadingService(
        typeof init.loading === 'boolean' ?  {} : init.loading, 
      )
    }
    const res = await super.request(options, undefined, requestInit)
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
}
