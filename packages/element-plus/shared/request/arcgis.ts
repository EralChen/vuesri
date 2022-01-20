import RestFetch from '@vunk/shared/utils/request/RestFetch'
import { ElLoadingService } from 'element-plus'
import type { RequestOptions, InitOptions } from './types'

export class ArcgisRestFetch extends RestFetch {
  async request<T> (options: RequestOptions, init?: Pick<InitOptions, 'loading'>, requestInit?: RequestInit):Promise<T> {
    const loading = !!init?.loading
    let loadingService:ReturnType<typeof ElLoadingService>|null = null
    if (loading) {
      loadingService = ElLoadingService(
        typeof init.loading === 'boolean' ?  {} : init.loading, 
      )
    }
    const defaultOptions = {
      where: '1=1',
      f: 'geojson',
      outFields: '*',
      returnGeometry: true,
    }
  
    if (options.method === 'GET') {
      options.params = {
        ...defaultOptions,
        ...options.params,
      }
    } else {
      options.data = {
        ...defaultOptions,
        ...options.data,
      }
    }
    const res = await super.request(options, undefined, requestInit)
  
    loadingService?.close()
    return res
  }
}
