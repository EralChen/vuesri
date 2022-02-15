import { RestFetch } from '@vunk/shared'
const restFetch = new RestFetch({
  baseURL: import.meta.env.VITE_BASE_URL + '/data',
})
export default restFetch.request.bind(restFetch)
