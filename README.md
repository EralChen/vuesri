<h1 style="display:flex; justify-content: center;">
  <!-- <img width="300px" src=""> -->
  <span>Vuesri</span>
</h1>

<p align="center">
  <a href="https://www.npmjs.org/package/@vuesri/core">
    <img src="https://img.shields.io/npm/v/@vuesri/core.svg" />
  </a>
  <a href="https://github.com/EralChen/vuesri">
    <img src="https://img.shields.io/badge/node-%20%3E%3D%2016-47c219" />
  </a>

  

  <a href="https://npmcharts.com/compare/@vuesri/core?minimal=true">
    <img src="https://img.shields.io/npm/dm/@vuesri/core.svg" />
  </a>

  <a target="_black" href="https://github.com/EralChen/vuesri">
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/EralChen/vuesri-core-docs?style=flat&logo=github" />
  </a>
  
  <br>

</p>

<p align="center">Vuesri - 基于 Arcgis 的 Vue3 地图组件库</p>
<p align="center">Vuesri - A Vue.js 3 Map library for Arcgis</p>


- 💪 全面拥抱 Vue 3 生态
- 🔥 完整的 TypeScript 类型定义文件
- 🌏 组件化方式快速构建地图


## 安装

```shell
# pnpm or npm or yarn
$ pnpm install @vunk/core@alpha @vuesri/core @arcgis/core
```

## 使用

```typescript
// main.ts
import '@arcgis/core/assets/esri/themes/light/main.css'
import '@vunk/core/index.css'
import '@vuesri/core/index.css'
```

```vue
<script lang="ts" setup>
import { VaMapView, VaTdtBasemap } from '@vuesri/core'
const defaultOptions: __esri.MapViewProperties = {
  center: [120, 30],
  zoom: 9,
}
</script>
<template>
  <VaMapView :defaultOptions="defaultOptions">
    <VaTdtBasemap />
  </VaMapView>
</template>
```


## Template

如果在集成中遇到了问题，这里有一个最简单的示例 [simple-vuesri](https://github.com/EralChen/simple-vuesri) 供您参考




## 在线文档

您可以从现在起启动您的项目。 对于每个组件的用法，请参考单个组件对应的文档。

[@vuesri/core](https://eralchen.github.io/vuesri)
在线文档

[@arcgis/core](https://developers.arcgis.com/javascript/latest/) 在线文档



## License

`@vuesri/core` is licensed as
[Apache License Version 2.0](https://github.com/EralChen/vuesri/LICENSE)
