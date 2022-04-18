<route>
{
  meta: {
    title: "DerivedFeatureLayer"
  }
}
</route>

# DerivedFeatureLayer
<router-link to="/docs/components/layers/feature-layer/client-feature-layer"> ClientFeatureLayer </router-link> - DerivedFeatureLayer
<br>

从已有`FeatureLayer`实例中，通过[featureLayer.queryFeatures()](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#queryFeatures) 派生一个新的`FeatureLayer`实例, 该实例由客户端渲染

> 在服务端渲染时`featureLayer.queryFeatures()`实际上是调用`query`接口，最多返回1000个要素



## Demo

:::demo
_demo-components/derived-feature-layer/index.vue
:::


## Props
|属性|类型|默认值|描述|
|-|-|-|-|
|:[query](https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-support-Query.html)*|__esri.QueryProperties|-|查询条件|
<? featureLayerProps ?>
<? layerProps ?>

## Emits
|事件|类型|参数|描述|
|-|-|-|-|
|load|__DerivedLayer.OnLoad|view: \__esri.View <br> layer: __esri.FeatureLayer |实例加载后|
|click| __DerivedLayer.OnClick| view: \__esri.View<br> layer: __esri.FeatureLayer <br> [event](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#event-click): __esri.ViewClickEvent <br> [hitTestResult](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#hitTest): __esri.HitTestResult  <br> result: __esri.HitTestResultResults // 最上层的要素 |点击事件|
|pointerMove| __DerivedLayer.OnPointerMove| view: \__esri.View<br> layer: __esri.FeatureLayer <br> [event](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#pointer-move): __esri.ViewPointerMoveEvent <br> [hitTestResult](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#hitTest): __esri.HitTestResult <br> result: __esri.HitTestResultResults // 最上层的要素  |鼠标移动事件|

