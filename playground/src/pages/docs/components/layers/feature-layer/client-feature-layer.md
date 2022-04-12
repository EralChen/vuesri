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
|:[source](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#source)*|__esri.Graphic[]|-|数据源|
|[fields](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#fields)*|__esri.FieldProperties[]|-|定义字段|
|[geometryType](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#geometryType)*|"point"\|"multipoint"\|"polyline"\|"polygon"\|"multipatch"\|"mesh"|-|图层类型|
|[objectIdField](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#objectIdField)*|String|-|`oid`的字段名称<br>对应值的类型需要是number|
<? featureLayerProps ?>
<? layerProps ?>

## Emits
|事件|类型|参数|描述|
|-|-|-|-|
|load|__ClientFeatureLayer.OnLoad|view: \__esri.View <br> layer: __esri.FeatureLayer |实例加载后|
|click| __ClientFeatureLayer.OnClick| view: \__esri.View<br> layer: __esri.FeatureLayer <br> [event](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#event-click): __esri.ViewClickEvent <br> [hitTestResult](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#hitTest): __esri.HitTestResult  <br> result: __esri.HitTestResultResults // 最上层的要素 |点击事件|
|pointerMove| __ClientFeatureLayer.OnPointerMove| view: \__esri.View<br> layer: __esri.FeatureLayer <br> [event](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#pointer-move): __esri.ViewPointerMoveEvent <br> [hitTestResult](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#hitTest): __esri.HitTestResult <br> result: __esri.HitTestResultResults // 最上层的要素  |鼠标移动事件|

