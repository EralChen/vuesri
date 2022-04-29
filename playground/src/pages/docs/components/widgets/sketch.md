<route>
{
  meta: {
    title: "Sketch"
  }
}
</route>

# Sketch
初始化[Sketch](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Sketch.html)实例

## Demo

### Base
:::demo
_demo-components/sketch/index.vue
:::

### Save graphics In graphicsLayer

+ 在已有 graphicsLayer 上 添加绘制
+ 可在 graphicsLayer 添加默认值
+ 绘制组件可开启/关闭

:::demo
_demo-components/sketch/save-graphics.vue
:::

### Extends DOM
:::demo
_demo-components/sketch/extends-dom.vue
:::

### Without UI
:::demo
_demo-components/sketch/without-ui.vue
:::

## Props
|属性|类型|默认值|描述|
|-|-|-|-|
|v-model*|__esri.Graphic[]\|__esri.Collection<__esri.Graphic>| [] | 绘制图层中的layer.graphics|
|[defaultOptions](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Sketch.html#constructors-summary)|__esri.SketchProperties|{}|构造函数参数|
|:[position](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-ui-UI.html#add)|__VaSketch.UiAddPosition|'top-right'|ui控件被添加的位置|
|:[availableCreatureTools](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Sketch.html#availableCreateTools)|__VaSketch.AvailableCreatureTool[]|-|可用工具|
|v-show|-|-|-|
|modelValueInitFrom|'modelValue'\|'layerGraphics'|'modelValue'|初始化时，modelValue来源|
|orphan	| Boolean	| false |	若为true, 则实例将未挂载到 view.ui |

## Emits
|事件|类型|参数|描述|
|-|-|-|-|
|load|__VaSketch.OnLoad|view: \__esri.View <br> sketch: __esri.Sketch |Sketch实例加载后|
|complete|  __esri.SketchCreateEvent \| __esri.SketchUpdateEvent |-|在更新或者创建完成后|
|[create](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Sketch.html#event-create)|__esri.SketchCreateEvent|-|sketch.on('create')|
|[update](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Sketch.html#event-update)|__esri.SketchUpdateEvent|-|sketch.on('update')|
