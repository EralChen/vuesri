<route>
{
  meta: {
    title: "LayerWhen"
  }
}
</route>

# LayerWhen
`LayerWhen`中的叶子节点，将在[layer.when()](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#when)之后加载

## Demo

:::demo
_demo-components/layer-when/index.vue
:::


## Emits
|事件|类型|参数|描述|
|-|-|-|-|
|load|__VaViewWhen.OnLoad|view: \__esri.View <br> layer: __esri.Layer |layer.when()后|

## v-slot
|属性|类型|描述|
|-|-|-|
|view|__esri.View|view|
|layer|__esri.Layer|最近父级的layer实例|
