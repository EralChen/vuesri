<route>
{
  meta: {
    title: "ViewWhen"
  }
}
</route>

# ViewWhen
`ViewWhen`中的叶子节点，将在[view.when()](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#when)之后加载

## Demo
:::demo
_demo-components/view-when/index.vue
:::
:::source ./sub-node.vue
_demo-components/view-when/sub-node.vue
:::


## Emits
|事件|类型|参数|描述|
|-|-|-|-|
|load|__VaViewWhen.OnLoad|view: \__esri.View |view.when()后|

## v-slot
|属性|类型|描述|
|-|-|-|
|view|__esri.View|view|
|spatialReference|__esri.SpatialReference|view.spatialReference|