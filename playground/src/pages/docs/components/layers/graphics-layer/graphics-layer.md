<route>
{
  meta: {
    title: "GraphicsLayer"
  }
}
</route>

# GraphicsLayer
初始化 [GraphicsLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GraphicsLayer.html) 实例

## Demo
:::demo
_demo-components/graphics-layer/index.vue
:::


## Props
|属性|类型|默认值|描述|
|-|-|-|-|
|[defaultOptions](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GraphicsLayer.html#constructors-summary)|__esri.GraphicsLayerProperties|{}|构造函数参数|
|:[graphics](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GraphicsLayer.html#graphics)|__esri.Graphic[]|-|图层中的图形集合|
<? layerProps ?>

## Emits
|事件|类型|参数|描述|
|-|-|-|-|
|load|__GraphicsLayer.OnLoad|view: \__esri.View <br> layer: __esri.GraphicsLayer |实例加载后|
|click| __GraphicsLayer.OnClick| view: \__esri.View<br> layer: __esri.GraphicsLayer <br> [event](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#event-click): __esri.ViewClickEvent <br> [hitTestResult](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#hitTest): __esri.HitTestResult  <br> result: __esri.GraphicHit // 最上层的要素 |点击事件|
|pointerMove| __GraphicsLayer.OnPointerMove| view: \__esri.View<br> layer: __esri.GraphicsLayer <br> [event](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#pointer-move): __esri.ViewPointerMoveEvent <br> [hitTestResult](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#hitTest): __esri.HitTestResult <br> result: __esri.GraphicHit // 最上层的要素  |鼠标移动事件|

