
export type LayerOptions<T = string> = {
  type: T,
  url?: string
}
export type TreeNode<T = string> = {
  layer?: LayerOptions<T>,
  children?: TreeNode[],
  [k: string]: any
}