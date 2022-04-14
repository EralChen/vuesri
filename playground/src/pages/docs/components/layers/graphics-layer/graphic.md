<route>
{
  meta: {
    title: "Graphic"
  }
}
</route>

# Graphic
初始化 [Graphic](https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html) 实例

## Demo

### in view.graphics
:::demo
_demo-components/graphic/index.vue
:::

### in graphicsLayer.graphics
:::demo
_demo-components/graphic/index.vue
:::

## Props
|属性|类型|默认值|描述|
|-|-|-|-|
|[defaultOptions](https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html)|__esri.GraphicsLayerProperties|{}|构造函数参数|
|:[geometry](https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html#geometry)*|__esri.Geometry|-|图形空间信息|
|:[symbol](https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html#symbol)*|__esri.Symbol|-|图形样式|
|:[attributes](https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html#attributes)|Record<string, any>|{}|关联信息|
|:index|Number|-|图形叠加顺序|
|:[visible](https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html#visible)|Boolean|true|show|
|orphan|Boolean|false|若为true, 则实例为待挂载的状态|
|spatialReference|__esri.SpatialReferenceProperties|-|坐标系|