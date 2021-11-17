
import request from '@/api/_request/base'
import type { BaseResponse } from '@/api/_request/base'

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
  }).then(res => res.data)
}
