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

:::demo
_demo-components/basemap/index.vue
:::


## Props

|属性|类型|默认值|描述|
|-|-|-|-|
|defaultOptions|__esri.BasemapProperties|{}|[构造函数参数](https://developers.arcgis.com/javascript/latest/api-reference/esri-Basemap.html#constructors-summary)|
|:baseLayers|\_\_esri.CollectionProperties<\_\_esri.LayerProperties><br />__esri.LayerProperties[] | - |图层配置|
|orphan|Boolean|false|若为true, 则实例为待挂载的状态|
|:spatialReference|__esri.SpatialReferenceProperties|-|底图坐标系|
|:thumbnailUrl|String|''|设置[thumbnailUrl](https://developers.arcgis.com/javascript/latest/api-reference/esri-Basemap.html#thumbnailUrl)|

## Emits

|事件|类型|参数|描述|
|-|-|-|-|
|load|__VaBasemap.OnLoad|view: \__esri.View <br> basemap: __esri.Basemap |实例加载后|
