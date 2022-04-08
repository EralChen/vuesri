<route>
{
  meta: {
    title: "SkyBasemap"
  }
}
</route>

# SkyBasemap

<router-link to="/docs/components/basemap/basemap">Basemap</router-link> - SkyBasemap

添加天地图作为底图

## Demo

### 基础示例
:::demo
_demo-components/sky-basemap/index.vue
:::

### 添加Toggle
:::demo
_demo-components/sky-basemap/toggle.vue
:::

### 扩展图层
:::demo
_demo-components/sky-basemap/extends/index.vue
:::
:::source ./ZjBaseLayer.vue
_demo-components/sky-basemap/extends/ZjBaseLayer.vue
:::
:::source ./NbBaseLayer.vue
_demo-components/sky-basemap/extends/NbBaseLayer.vue
:::


## Props

|属性|类型|默认值|描述|
|-|-|-|-|
|:type|'img_c' \| 'vec_c' \| 'ter_c' \| 'img_w' \| 'vec_w' \| 'ter_w'| 'img_c'|天地图图层类型|
|:anno|Boolean|true|是否添加标注层|
|orphan|Boolean|false|若为true, 则实例为待挂载的状态|
|[spatialReference](https://developers.arcgis.com/javascript/latest/api-reference/esri-Basemap.html#spatialReference)|__esri.SpatialReferenceProperties|{wkid:4326}|坐标系|
|:[thumbnailUrl](https://developers.arcgis.com/javascript/latest/api-reference/esri-Basemap.html#thumbnailUrl)|String|''|图标|
|:[maxScale](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-TileLayer.html#maxScale)|Number|18|图层最大比例尺|
|:[minScale](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-TileLayer.html#minScale)|Number|1|图层最小比例尺|


## Emits
|事件|类型|参数|描述|
|-|-|-|-|
|load|__VaBasemap.OnLoad|view: \__esri.View <br> basemap: __esri.Basemap |实例加载后|

