<route>
{
  meta: {
    title: "ViewUi"
  }
}
</route>

# ViewUi
添加DOM到[DefaultUI](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-ui-DefaultUI.html)

## Demo
:::demo
_demo-components/view-ui/index.vue
:::

## Props
|属性|类型|默认值|描述|
|-|-|-|-|
|:[position](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-ui-UI.html#add)|__VaViewUi.UiAddPosition|'manual'|ui控件被添加的位置|


## Emits
|事件|类型|参数|描述|
|-|-|-|-|
|load|__VaViewUi.OnLoad|view: \__esri.View <br> el: HtmlDivElement |ui添加后|
