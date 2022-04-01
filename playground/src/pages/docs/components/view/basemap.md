<route>
{
  meta: {
    title: "Basemap",
    sorted: 2
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
|:baseLayers*|\_\_esri.CollectionProperties<\_\_esri.LayerProperties><br />__esri.LayerProperties[] | - |图层配置|
|custom|Boolean|false|若为true,实例将不会挂载到`map.basemap`|


