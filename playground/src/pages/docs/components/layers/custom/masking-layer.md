<route>
{
  meta: {
    title: "MaskingLayer"
  }
}
</route>

# MaskingLayer

遮罩

## Demo
:::demo
_demo-components/masking-layer/index.vue
:::


## Props
|属性|类型|默认值|描述|
|-|-|-|-|
|:geometry*|__esri.Geometry|-|遮罩形状|
|:distance*|number (> 0)|24|边缘距离|
|:color|number[]|[0, 0, 0, 0.7]|遮罩颜色|
|[tileInfo](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-TileInfo.html)|__esri.TileInfo|-|遮罩需要根据tileInfo绘制<br>当取不到底图的tileInfo时需要自定义|
<? layerProps ?>