
import { stringify } from 'qs'

type ContentType = 'application/json' | 'application/x-www-form-urlencoded'| 'multipart/form-data'
interface ConstructorOptions {
  baseURL: string;
  setRequestInit?: (config: RequestInit) => RequestInit;
}
interface RequestOptions {
  url: string;
  baseURL?: string;
  method: 'POST' | 'GET' | 'PUT' | 'DELETE';
  data?: Record<string, unknown>; 
  params?: Record<string, unknown>;
  contentType?: ContentType;
  cache?: {
    id: string
  }
}

class RestFetch {
  baseURL: string
  setRequestInit: ConstructorOptions['setRequestInit']
  #caches: Record<string, Promise<Response>>
  constructor (options: ConstructorOptions) {
    this.baseURL = options.baseURL
    this.setRequestInit = options.setRequestInit
    this.#caches = {}
  }

  request<T> (options: RequestOptions, init?: RequestInit): Promise<T> {
    let readyPromise: Promise<Response>
    if (options.cache?.id) { // 如果提供缓存id 则从缓存获取promise
      if (!this.#caches[options.cache.id]) { // 如果没有缓存先赋值
        this.#caches[options.cache.id] = this.#initFetch(options, init) 
      }
      readyPromise = this.#caches[options.cache.id]
      // https://github.com/whatwg/fetch/issues/196
      // res.json() 会消耗流数据 需要clone以便重用
        .then(res => res.clone())
    } else {
      readyPromise = this.#initFetch(options, init)
    }
    return readyPromise.then(res =>{
      return res.json() as Promise<T>
    })
  }

  #initFetch (options: RequestOptions, init?: RequestInit): Promise<Response> {
    const headers = new Headers()
    // 初始化init参数
    let config: RequestInit = {
      method: options.method,
      headers,
    }
    const postContentType = options.contentType || 'application/json'
    if (options.method !== 'GET') {
      headers.set('Content-Type', postContentType)
      switch (postContentType) {
      case 'application/json':
        config.body = JSON.stringify(options.data)
        break
      case 'application/x-www-form-urlencoded':
        config.body = stringify(options.data)
        break
      case 'multipart/form-data':
        // 默认会生成带hash的 ContentType
        headers.delete('Content-Type')
        const formData = new FormData()
        if (options.data) {
          const keys = Reflect.ownKeys(options.data) as string[]
          keys.forEach(key => {
            formData.append(key, options.data?.[key] as string | Blob)
          })
        }
        config.body = formData
        break
      }
    }

    // 将params 参数拼接到url
    let params = ''
    if (options.params) {
      params = '?' + stringify(options.params)
    }
    const input = (options.baseURL || this.baseURL) + options.url + params

    // 请求拦截
    const overConfig = this.setRequestInit?.(config)
    overConfig && (config = overConfig)

    return fetch(input, {
      ...config,
      ...init,
    })
  }
}

export {
  RequestOptions,
}
export default RestFetch
