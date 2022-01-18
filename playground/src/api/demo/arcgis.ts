import request from '../_request/arcgis'
import {FeatureCollection, Polygon} from 'geojson'
export function getTestData () {
  return request({
    method: 'GET',
    params: {
      f: 'json',
    },
    url: '/test_point2/MapServer/0/query',
  }).then(res => {
    return res
  })
}

export function getBoundry () {
  return request<FeatureCollection<Polygon, {
    name: string,
    f_name: string,
  }>>({
    method: 'GET',
    baseURL: 'http://116.63.63.191:6080/arcgis/rest/services',
    url: '/FGW/nb_xzqh/MapServer/0/query',
  }).then(res => {
    res.features.forEach(item => {
      item.properties.name = item.properties.f_name
    })
    return res
  })
}
