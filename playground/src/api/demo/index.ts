
import request from '@/api/_request/base'
import type { BaseResponse } from '@vunk/element-plus/shared'

export type OrgTreeNode = {
  name: string
  column: number
  child: OrgTreeNode[]
}
export function getOrgTree ():Promise<OrgTreeNode[]> {
  return request<BaseResponse<OrgTreeNode[]>>({
    url: '/video/getOrgTree',
    method: 'GET',
  }).then(res => res.data)
}
