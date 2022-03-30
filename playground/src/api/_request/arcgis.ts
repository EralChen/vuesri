import { ArcgisRestFetch } from 'vunk/element-plus/shared/utils-fetch'
const restFetch = new ArcgisRestFetch({
  baseURL: import.meta.env.VITE_ARCGIS_URL,
})
export default restFetch.request.bind(restFetch)