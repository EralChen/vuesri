<route>
{
  meta: {
    title: "GeoViewUi"
  }
}
</route>

# GeoViewUi

根据空间信息，添加DOM到[DefaultUI](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-ui-DefaultUI.html)

## Demo
:::demo
_demo-components/geo-view-ui/index.vue
:::

## Props
|属性|类型|默认值|描述|
|-|-|-|-|
|:[geometry](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry.html)*|__esri.Geometry|-|ui控件被添加的空间位置|
|visible|Boolean|true|v-show|