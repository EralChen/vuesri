import { ArcgisRestFetch } from '@vunk/element-plus/shared'
const arcgisRestFetch = new ArcgisRestFetch({
  baseURL: 'http://116.63.63.191:6080/arcgis/rest/services/test_server',
})
export default arcgisRestFetch.request.bind(arcgisRestFetch)
