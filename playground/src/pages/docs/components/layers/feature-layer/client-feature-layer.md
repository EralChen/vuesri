<route>
{
  meta: {
    title: "ClientFeatureLayer"
  }
}
</route>

# ClientFeatureLayer
客户端渲染`FeatureLayer`

[Creating a FeatureLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#creating-a-featurelayer) -> Read more -> Add an array of client-side features

## demo

:::demo
_demo-components/client-feature-layer/index.vue
:::


## Props
|属性|类型|默认值|描述|
|-|-|-|-|
<? featureLayerProps ?>
<? layerProps ?>

## Emits
|事件|类型|参数|描述|
|-|-|-|-|
|load|__ServerFeatureLayer.OnLoad|view: \__esri.View <br> layer: __esri.FeatureLayer |实例加载后|
|click| __ServerFeatureLayer.OnClick| view: \__esri.View<br> layer: __esri.FeatureLayer <br> [event](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#event-click): __esri.ViewClickEvent <br> [hitTestResult](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#hitTest): __esri.HitTestResult  <br> result: __esri.HitTestResultResults // 最上层的要素 |点击事件|
|pointerMove| __ServerFeatureLayer.OnPointerMove| view: \__esri.View<br> layer: __esri.FeatureLayer <br> [event](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#pointer-move): __esri.ViewPointerMoveEvent <br> [hitTestResult](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#hitTest): __esri.HitTestResult <br> result: __esri.HitTestResultResults // 最上层的要素  |鼠标移动事件|

