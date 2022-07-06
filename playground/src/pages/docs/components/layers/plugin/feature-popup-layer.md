<route>
{
  meta: {
    title: "FeaturePopupLayer"
  }
}
</route>

# FeaturePopupLayer

从已有layer实例中，通过[layer.queryFeatures()](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#queryFeatures) 创建 <router-link to="/docs/components/widgets/geo-view-ui">GeoViewUi</router-link>

可支持的图层: `FeatureLayer`, `GeojsonLayer`

> 在服务端渲染时`layer.queryFeatures()`实际上是调用`query`接口，最多返回1000个要素

## Demo

### Base

:::demo
_demo-components/feature-popup-layer/index.vue
:::


### 动态查询

:::demo
_demo-components/feature-popup-layer/query.vue
:::


## v-slot

|属性|类型|描述|
|-|-|-|
|attributes|Record<string, any>|graphic.attributes|
|geometry|__esri.Geometry|graphic.geometry|
|graphic|__esri.Graphic|当前内容的graphic|
