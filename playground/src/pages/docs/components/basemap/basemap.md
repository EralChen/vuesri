<route>
{
  meta: {
    title: "Basemap",
  }
}
</route>

# Basemap

初始化 [Basemap](https://developers.arcgis.com/javascript/latest/api-reference/esri-Basemap.html) 实例

将底图添加到视图

## Demo

### 使用属性生成底图

:::demo
_demo-components/basemap/index.vue
:::

### 使用图层组件生成底图

关联组件：<router-link to="/docs/components/basemap/basemap-base-layers">BasemapBaseLayers</router-link>

:::demo
_demo-components/basemap-base-layers/index.vue
:::



## Props

|属性|类型|默认值|描述|
|-|-|-|-|
|[defaultOptions](https://developers.arcgis.com/javascript/latest/api-reference/esri-Basemap.html#constructors-summary)|__esri.BasemapProperties|{}|构造函数参数|
|:[baseLayers](https://developers.arcgis.com/javascript/latest/api-reference/esri-Basemap.html#baseLayers)|\_\_esri.CollectionProperties<\_\_esri.LayerProperties><br />__esri.LayerProperties[] | - |图层配置|
|orphan|Boolean|false|若为true, 则实例为待挂载的状态|
|:[spatialReference](https://developers.arcgis.com/javascript/latest/api-reference/esri-Basemap.html#spatialReference)|__esri.SpatialReferenceProperties|-|底图坐标系|
|:[thumbnailUrl](https://developers.arcgis.com/javascript/latest/api-reference/esri-Basemap.html#thumbnailUrl)|String|''|图标|

## Emits

|事件|类型|参数|描述|
|-|-|-|-|
|load|__VaBasemap.OnLoad|view: \__esri.View <br> basemap: __esri.Basemap |实例加载后|
