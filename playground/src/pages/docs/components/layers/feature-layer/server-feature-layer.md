<route>
{
  meta: {
    title: "ServerFeatureLayer"
  }
}
</route>

# ServerFeatureLayer

通过URL

初始化 [FeatureLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html) 实例

## Demo

### 基础示例
:::demo
_demo-components/server-feature-layer/index.vue
:::

### 在SceneView中
:::demo
_demo-components/server-feature-layer/scene-view.vue
:::



## Props
|属性|类型|默认值|描述|
|-|-|-|-|
|:[url](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#url)*|String|-|服务地址|
|:[layerId](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#layerId)|Number|-|FeatureServer图层下标|
<? featureLayerProps ?>
<? layerProps ?>

## Emits
|事件|类型|参数|描述|
|-|-|-|-|
|load|__ServerFeatureLayer.OnLoad|view: \__esri.View <br> layer: __esri.FeatureLayer |实例加载后|
|click| __ServerFeatureLayer.OnClick| view: \__esri.View<br> layer: __esri.FeatureLayer <br> [event](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#event-click): __esri.ViewClickEvent <br> [hitTestResult](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#hitTest): __esri.HitTestResult  <br> result: __esri.GraphicHit // 最上层的要素 |点击事件|
|pointerMove| __ServerFeatureLayer.OnPointerMove| view: \__esri.View<br> layer: __esri.FeatureLayer <br> [event](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#pointer-move): __esri.ViewPointerMoveEvent <br> [hitTestResult](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#hitTest): __esri.HitTestResult <br> result: __esri.GraphicHit // 最上层的要素  |鼠标移动事件|

