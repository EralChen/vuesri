<route>
{
  meta: {
    title: "PopupTemplate"
  }
}
</route>

# PopupTemplate
添加 [popupTemplate](https://developers.arcgis.com/javascript/latest/api-reference/esri-PopupTemplate.html)属性到图层实例

## Demo

### base
:::demo
_demo-components/popup-template/index.vue
:::
### add to graphic
:::demo
_demo-components/popup-template/graphic/index.vue
:::
:::source ./AddToGraphic.vue
_demo-components/popup-template/graphic/AddToGraphic.vue
:::

### 弹窗内容懒加载
:::demo
_demo-components/popup-template/popup-lazy/index.vue
:::


## Props
|属性|类型|默认值|描述|
|-|-|-|-|
|[defaultOptions](https://developers.arcgis.com/javascript/latest/api-reference/esri-PopupTemplate.html#constructors-summary)|__esri.PopupTemplateProperties|{}|构造函数参数|
|[title](https://developers.arcgis.com/javascript/latest/api-reference/esri-PopupTemplate.html#title)|[String, Function, Promise]|''|标题|
|orphan|Boolean|false|若为true, 则实例为待挂载的状态|

## v-slot
[popupTemplate.content](https://developers.arcgis.com/javascript/latest/api-reference/esri-PopupTemplate.html#content) 的渲染模板
|属性|类型|描述|
|-|-|-|
|attributes|Record<string, any>|graphic.attributes|
|geometry|__esri.Geometry|graphic.geometry|
|graphic|__esri.Graphic|当前内容的graphic|

## v-slot:extends
用于扩展
