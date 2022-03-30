import request from '../_request/public'
export const getTestData = () => request({
  method: 'GET',
  url: '/test.json',
})
