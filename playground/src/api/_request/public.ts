import { RestFetch } from 'vunk/shared/utils-fetch'
// RestFetch类是对 fetch的一层封装，你可能暂时不用去理解它
const restFetch = new RestFetch({
  // baseURL是默认的基础请求路径
  baseURL: import.meta.env.VITE_BASE_URL + '/data',
})

const request = async <T>(...args: Parameters<typeof restFetch.request>) => {
  const data = await restFetch.request(...args)
  return data as T
}
export default request
