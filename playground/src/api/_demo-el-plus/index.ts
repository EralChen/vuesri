
import request from '@/api/_request/skzz'
import type { BaseResponse } from 'vunk/element-plus/shared/utils-fetch'

export type OrgTreeNode = {
  name: string
  column: number
  child: OrgTreeNode[]
}
export function getOrgTree ():Promise<OrgTreeNode[]> {
  return request<BaseResponse<OrgTreeNode[]>>({
    baseURL: 'http://112.16.181.129:180/api/vpoint', // 默认值 VITE_BASE_API
    url: '/video/getOrgTree',
    method: 'GET',
  }, {
    loading: true,
  }).then(res => res.data)
}
