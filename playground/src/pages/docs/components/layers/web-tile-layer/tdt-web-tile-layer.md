<route>
{
  meta: {
    title: "TdtWebTileLayer",
  }
}
</route>

# TdtWebTileLayer

天地图

<router-link to="/docs/components/layers/web-tile-layer/web-tile-layer">WebTileLayer</router-link> - TdtWebTileLayer

## Demo
:::demo
_demo-components/tdt-web-tile-layer/index.vue
:::

## Props
|属性|类型|默认值|描述|
|-|-|-|-|
|:type| 'img_c'\|'vec_c'\|'ter_c'\|'img_w'\|'vec_w'\|'ter_w'\|<br>'cia_c'\|'cva_c'\|'cta_c'\|'cia_w'\|'cva_w'\|'cta_w'|img_c| 图层类型|
|spatialReference|__esri.SpatialReferenceProperties|{wkid: 4326}|`_c`类型可使用 4490,4326 <br> `_w`类型可使用 3857|
|[token](http://lbs.tianditu.gov.cn)|String|-|请求使用的token|
|[defaultOptions](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-TileLayer.html#constructors-summary)|__esri.TileLayerProperties|{}|构造函数参数|
<? layerProps ?>
