import request from '../_request/arcgis'
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