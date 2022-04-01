<route>
{
  meta: {
    title: "MapView",
    sorted: 1
  }
}
</route>

# MapView

初始化 [MapView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html) 实例

向叶子节点 `provide` 该实例

插入 <router-link :to="'/docs/components/basemap/basemap'"> `Basemap`</router-link> 组件，可创建可视化地图

## Demo
:::demo
_demo-components/map-view/index.vue
:::

## Props

|属性|类型|默认值|描述|
|-|-|-|-|
|defaultOptions|__esri.MapViewProperties|{}|[构造函数参数](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#constructors-summary)|
|:cursor|string|''|鼠标移动到地图容器上的css样式|


