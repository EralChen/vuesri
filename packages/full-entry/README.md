# Vuesri
<p align="center">Vuesri - 基于@arcgis/core的vue3.x组件库</p>

- 简单易用
- 类型友好

## 链接
+ [在线文档](http://112.16.181.129:13000/vuesri/docs/components/view/map-view/map-view)
+ [ArcGIS for JavaScript](https://developers.arcgis.com/javascript/latest/)
## 快速开始

### 安装

> 请先安装 [@arcgis/core](https://www.npmjs.com/package/@arcgis/core) 到项目

```shell
npm i vuesri -S
```
### 用例

引入css

```ts
import 'vuesri/index.css';
```

使用

```vue
<script lang="ts" setup>
import { ref } from 'vue'
import { VaMapView, VaSkyBasemap } from 'vuesri'
</script>
<template>
<VaMapView style="height:50vh">
  <VaSkyBasemap></VaSkyBasemap>
</VaMapView>
</template>
```

