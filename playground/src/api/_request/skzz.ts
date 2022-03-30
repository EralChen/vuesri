import { SkzzRestFetch } from 'vunk/element-plus/shared/utils-fetch'
const skzzRestFetch = new SkzzRestFetch({
  baseURL: import.meta.env.VITE_BASE_API,
})

export default skzzRestFetch.request.bind(skzzRestFetch)