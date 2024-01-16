import { o as onRenderHtml, a as _sfc_main$1, i as import_3 } from "../chunks/chunk-rLRIqhK0.js";
import { defineAsyncComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import "vike/server";
import "vike-vue/usePageContext";
import "../chunks/chunk-8AIdLOXL.js";
import "path";
import "@vunk/core";
import "element-plus";
import "@vueuse/core";
import "@vunk/core/shared/utils-vue";
import "@vunk/core/shared/utils-class";
import "deepdash-es/standalone";
import "gsap";
import "@vunk/core/composables";
import "lodash-es";
import "@vunk/core/shared/utils-promise";
import "@vunk/core/components/client-only";
import "@element-plus/icons-vue";
const title = "FeatureLayer";
const lang = "zh-CN";
const _sfc_main = {
  __name: "+Page",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const frontmatter = { "title": "FeatureLayer", "lang": "zh-CN" };
    __expose({ frontmatter });
    ({
      "feature-layer/basic.vue": defineAsyncComponent(() => import("../chunks/chunk-hs36oZw4.js"))
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "vp-doc VPDoc doc-content" }, _attrs))}><h1 id="featurelayer" tabindex="-1">FeatureLayer <a class="header-anchor" href="#featurelayer" aria-label="Permalink to &quot;FeatureLayer&quot;">​</a></h1><p>FeatureLayer</p><h2 id="featurelayer-props" tabindex="-1">FeatureLayer Props <a class="header-anchor" href="#featurelayer-props" aria-label="Permalink to &quot;FeatureLayer Props&quot;">​</a></h2><table><thead><tr><th>prop</th><th>type</th><th>default</th><th>descriptions</th></tr></thead><tbody><tr><td><a href="./layer#layer-props">Layer Props</a></td><td>-</td><td>-</td><td>-</td></tr><tr><td><a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#constructors-summary" target="_blank" rel="noreferrer">defaultOptions</a></td><td>__esri.FeatureLayerProperties</td><td>{}</td><td>构造函数参数</td></tr><tr><td>:<a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#renderer" target="_blank" rel="noreferrer">renderer</a></td><td>__esri.Renderer</td><td>-</td><td>渲染器，改变要素样式</td></tr><tr><td>:<a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#definitionExpression" target="_blank" rel="noreferrer">definitionExpression</a></td><td>String</td><td>‘1=1’</td><td>SQL过滤要素</td></tr><tr><td>:<a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#popupEnabled" target="_blank" rel="noreferrer">popupEnabled</a></td><td>Boolean</td><td>true</td><td>是否启用默认弹窗</td></tr><tr><td>:cursor</td><td>String</td><td>-</td><td>hover要素时鼠标样式</td></tr></tbody></table><h2 id="featurelayer-emits" tabindex="-1">FeatureLayer Emits <a class="header-anchor" href="#featurelayer-emits" aria-label="Permalink to &quot;FeatureLayer Emits&quot;">​</a></h2><table><thead><tr><th>name</th><th>arguments</th><th>descriptions</th></tr></thead><tbody><tr><td>load</td><td>view: __esri.View<br>layer: __esri.FeatureLayer</td><td>实例加载后</td></tr><tr><td>click</td><td>view: __esri.View<br>layer: __esri.FeatureLayer<br><a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#event-click" target="_blank" rel="noreferrer">event</a>: __esri.ViewClickEvent<br><a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#hitTest" target="_blank" rel="noreferrer">hitTestResult</a>: __esri.HitTestResult <br>result: __esri.GraphicHit // 最上层的要素</td><td>点击事件</td></tr><tr><td>pointerMove</td><td>view: __esri.View<br>layer: __esri.FeatureLayer<br> <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#pointer-move" target="_blank" rel="noreferrer">event</a>: __esri.ViewPointerMoveEvent<br> <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#hitTest" target="_blank" rel="noreferrer">hitTestResult</a>: __esri.HitTestResult <br>result: __esri.GraphicHit // 最上层的要素</td><td>鼠标移动事件</td></tr></tbody></table></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/zh-CN/component/feature-layer/+Page.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const import_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main,
  lang,
  title
}, Symbol.toStringTag, { value: "Module" }));
const configValuesImported = [
  {
    configName: "onRenderHtml",
    importPath: "/renderer/onRenderHtml.ts",
    isValueFile: false,
    exportValue: onRenderHtml,
    exportName: "onRenderHtml"
  },
  {
    configName: "Page",
    importPath: "/pages/zh-CN/component/feature-layer/+Page.md",
    isValueFile: true,
    exportValues: import_1
  },
  {
    configName: "Layout",
    importPath: "#s/layouts/default/index.vue",
    isValueFile: false,
    exportValue: _sfc_main$1,
    exportName: "default"
  },
  {
    configName: "vuePlugins",
    importPath: "/pages/+vuePlugins.ts",
    isValueFile: true,
    exportValues: import_3
  }
];
const configValuesSerialized = {
  ["passToClient"]: {
    definedAt: { "files": [{ "filePathToShowToUser": "/renderer/+config.h.ts", "fileExportPathToShowToUser": ["default", "passToClient"] }] },
    valueSerialized: '["pageProps","title","crowdin","lang"]'
  }
};
export {
  configValuesImported,
  configValuesSerialized
};
