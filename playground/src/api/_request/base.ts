import { SkzzRestFetch } from '@vunk/element-plus/shared'
const skzzRestFetch = new SkzzRestFetch({
  baseURL: 'http://112.16.181.129:180/api/vpoint',
})
export default skzzRestFetch.skzzRequest.bind(skzzRestFetch)