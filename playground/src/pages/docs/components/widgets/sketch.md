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

### In graphicsLayer
:::demo
_demo-components/sketch/graphics-layer.vue
:::

+ 在已有的GraphicsLayer上创建Sketch<br> `:model-value-init-from="'layerGraphics'"` 可以在初始化时，根据layer上的数据，同步数据到 modelValue。 <br> `:model-value-init-from="'modelValue'"`则会根据modelValue覆盖layer上的值，此时已挂载的graphic将被隐式的移除。

+ 通过sketch工具修改的graphic.geometry, 并不会直接同步到 VaGraphic 绑定的 geometry中<br> 修改VaGraphic中geometry属性，会直接影响到 Vasketch v-model的值（如果这个要素仍在图层中） <br> 所以获取更新后的值要从 VaSketch v-model 中得到


## Props
|属性|类型|默认值|描述|
|-|-|-|-|
|[defaultOptions](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Sketch.html#constructors-summary)|__esri.SketchProperties|{}|构造函数参数|
|:[position](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-ui-UI.html#add)|__VaSketch.UiAddPosition|'top-right'|ui控件被添加的位置|
|:[availableCreatureTools](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Sketch.html#availableCreateTools)|__VaSketch.AvailableCreatureTool[]|-|可用工具|
|v-model|__esri.Graphic[]\|__esri.Collection<__esri.Graphic>| [] | 绘制图层中的layer.graphics|
|v-show|-|-|-|
|modelValueInitFrom|'modelValue'\|'layerGraphics'|'modelValue'|初始化时，modelValue来源|
