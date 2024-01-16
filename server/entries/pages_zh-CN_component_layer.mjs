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
const title = "Layer";
const lang = "zh-CN";
const _sfc_main = {
  __name: "+Page",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const frontmatter = { "title": "Layer", "lang": "zh-CN" };
    __expose({ frontmatter });
    ({
      "layer/basic.vue": defineAsyncComponent(() => import("../chunks/chunk-km2_2mF3.js"))
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "vp-doc VPDoc doc-content" }, _attrs))}><h1 id="layer" tabindex="-1">Layer <a class="header-anchor" href="#layer" aria-label="Permalink to &quot;Layer&quot;">​</a></h1><p>Layer</p><h2 id="layer-props" tabindex="-1">Layer Props <a class="header-anchor" href="#layer-props" aria-label="Permalink to &quot;Layer Props&quot;">​</a></h2><table><thead><tr><th>prop</th><th>type</th><th>default</th><th>descriptions</th></tr></thead><tbody><tr><td>:<a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-TileLayer.html#maxScale" target="_blank" rel="noreferrer">maxScale</a></td><td>Number</td><td>0</td><td>图层最大比例尺</td></tr><tr><td>:<a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-TileLayer.html#minScale" target="_blank" rel="noreferrer">minScale</a></td><td>Number</td><td>0</td><td>图层最小比例尺</td></tr><tr><td>:index</td><td>Number</td><td>-</td><td>图层叠加顺序</td></tr><tr><td>:indexTopping</td><td>Boolean</td><td>false</td><td>图层叠加是否优先置顶</td></tr><tr><td>:<a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#opacity" target="_blank" rel="noreferrer">opacity</a></td><td>Number</td><td>1</td><td>透明度</td></tr><tr><td>:<a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#title" target="_blank" rel="noreferrer">title</a></td><td>String</td><td>-</td><td>图层标题</td></tr><tr><td>:<a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#visible" target="_blank" rel="noreferrer">visible</a></td><td>Boolean</td><td>true</td><td>show</td></tr><tr><td>orphan</td><td>Boolean</td><td>false</td><td>若为true, 则实例为待挂载的状态</td></tr></tbody></table></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/zh-CN/component/layer/+Page.md");
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
    importPath: "/pages/zh-CN/component/layer/+Page.md",
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
