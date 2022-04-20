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

+ 通过sketch工具修改的graphic.geometry, 并不会直接同步到 VaGraphic 绑定的 geometry中, 所以获取值要从 v-model 中得到。<br> 修改VaGraphic中geometry属性，会直接影响到 Vasketch v-model的值（如果这个要素仍在图层中） 

