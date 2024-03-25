import{h5 as t,hg as l,hF as e,hh as i,hb as s,hH as h,hI as r,hJ as n}from"../chunks/chunk-xdbuWCSg.js";import"../chunks/chunk-t4TbIqUg.js";const k={class:"vp-doc VPDoc doc-content"},p=e('<h1 style="display:flex;justify-content:center;"><span>Vuesri</span></h1><p align="center"><a href="https://www.npmjs.org/package/@vuesri/core"><img src="https://img.shields.io/npm/v/@vuesri/core.svg"></a><a href="https://github.com/EralChen/vuesri"><img src="https://img.shields.io/badge/node-%20%3E%3D%2016-47c219"></a><a href="https://npmcharts.com/compare/@vuesri/core?minimal=true"><img src="https://img.shields.io/npm/dm/@vuesri/core.svg"></a><a target="_black" href="https://github.com/EralChen/vuesri"><img alt="GitHub stars" src="https://img.shields.io/github/stars/EralChen/vuesri-core-docs?style=flat&amp;logo=github"></a><br></p><p align="center">Vuesri - 基于 Arcgis 的 Vue3 地图组件库</p><p align="center">Vuesri - A Vue.js 3 Map library for Arcgis</p><ul><li>💪 全面拥抱 Vue 3 生态</li><li>🔥 完整的 TypeScript 类型定义文件</li><li>🌏 组件化方式快速构建地图</li><li>📄 <a href="https://eralchen.github.io/vuesri" target="_blank" rel="noreferrer">在线文档</a> 示例丰富</li></ul><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2>',6),o=i("div",{class:"language-shell"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang is-hidden"},"shell"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# pnpm or npm or yarn")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"$"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," pnpm"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," install"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," @vunk/core@alpha"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," @vuesri/core"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," @arcgis/core")])])])],-1),d=i("h2",{id:"使用",tabindex:"-1"},[s("使用 "),i("a",{class:"header-anchor",href:"#使用","aria-label":'Permalink to "使用"'},"​")],-1),c=i("div",{class:"language-typescript"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang is-hidden"},"typescript"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// main.ts")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," '@arcgis/core/assets/esri/themes/light/main.css'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," '@vunk/core/index.css'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," '@vuesri/core/index.css'")])])])],-1),g=i("div",{class:"language-vue"},[i("button",{title:"Copy Code",class:"copy"}),i("span",{class:"lang is-hidden"},"vue"),i("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[i("code",{"v-pre":""},[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," lang"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"ts"'),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," setup"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"import"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { VaMapView, VaTdtBasemap } "),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," '@vuesri/core'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," defaultOptions"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," __esri"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"MapViewProperties"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  center: ["),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"120"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"30"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"],")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  zoom: "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"9"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),i("span",{style:{"--shiki-light":"#B31D28","--shiki-dark":"#FDAEB7","--shiki-light-font-style":"italic","--shiki-dark-font-style":"italic"}},"VaMapView"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," :"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"defaultOptions"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"defaultOptions"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    <"),i("span",{style:{"--shiki-light":"#B31D28","--shiki-dark":"#FDAEB7","--shiki-light-font-style":"italic","--shiki-dark-font-style":"italic"}},"VaTdtBasemap"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," />")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  </"),i("span",{style:{"--shiki-light":"#B31D28","--shiki-dark":"#FDAEB7","--shiki-light-font-style":"italic","--shiki-dark-font-style":"italic"}},"VaMapView"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1),E=e('<h2 id="template" tabindex="-1">Template <a class="header-anchor" href="#template" aria-label="Permalink to &quot;Template&quot;">​</a></h2><p>如果在集成中遇到了问题，这里有一个最简单的示例 <a href="https://github.com/EralChen/simple-vuesri" target="_blank" rel="noreferrer">simple-vuesri</a> 供您参考</p><h2 id="在线文档" tabindex="-1">在线文档 <a class="header-anchor" href="#在线文档" aria-label="Permalink to &quot;在线文档&quot;">​</a></h2><p>您可以从现在起启动您的项目。 对于每个组件的用法，请参考单个组件对应的文档。</p><p><a href="https://eralchen.github.io/vuesri" target="_blank" rel="noreferrer">@vuesri/core</a> 在线文档</p><p><a href="https://developers.arcgis.com/javascript/latest/" target="_blank" rel="noreferrer">@arcgis/core</a> 在线文档</p><h2 id="license" tabindex="-1">License <a class="header-anchor" href="#license" aria-label="Permalink to &quot;License&quot;">​</a></h2><p><code>@vuesri/core</code> is licensed as <a href="https://github.com/EralChen/vuesri/LICENSE" target="_blank" rel="noreferrer">Apache License Version 2.0</a></p>',8),u=[p,o,d,c,g,E],y={__name:"+Page",setup(F,{expose:a}){return a({frontmatter:{}}),(C,v)=>(t(),l("div",k,u))}},m=Object.freeze(Object.defineProperty({__proto__:null,default:y},Symbol.toStringTag,{value:"Module"})),B=[{configName:"onRenderClient",importPath:"/renderer/onRenderClient.ts",isValueFile:!1,exportValue:h,exportName:"onRenderClient"},{configName:"Page",importPath:"/pages/md/+Page.md",isValueFile:!0,exportValues:m},{configName:"Layout",importPath:"#s/layouts/default/index.vue",isValueFile:!1,exportValue:r,exportName:"default"},{configName:"onCreateApp",importPath:"/pages/+onCreateApp.ts",isValueFile:!0,exportValues:n}],A={onBeforeRenderEnv:{definedAt:{isComputed:!0},valueSerialized:"null"},dataEnv:{definedAt:{isComputed:!0},valueSerialized:"null"},hydrationCanBeAborted:{definedAt:{filePathToShowToUser:"/renderer/+config.h.ts",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:"true"}};export{B as configValuesImported,A as configValuesSerialized};