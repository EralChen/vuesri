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
const title = "View";
const lang = "zh-CN";
const _sfc_main = {
  __name: "+Page",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const frontmatter = { "title": "View", "lang": "zh-CN" };
    __expose({ frontmatter });
    ({
      "view/basic.vue": defineAsyncComponent(() => import("../chunks/chunk-Gca_yigj.js"))
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "vp-doc VPDoc doc-content" }, _attrs))}><h1 id="view" tabindex="-1">View <a class="header-anchor" href="#view" aria-label="Permalink to &quot;View&quot;">​</a></h1><p>View</p><h2 id="view-mitter" tabindex="-1">View Mitter <a class="header-anchor" href="#view-mitter" aria-label="Permalink to &quot;View Mitter&quot;">​</a></h2><table><thead><tr><th>name</th><th>arguments</th><th>descriptions</th></tr></thead><tbody><tr><td>click</td><td>__VaView.MitterEvents[‘click’]</td><td>点击到客户端矢量信息</td></tr><tr><td>pointer-move</td><td>__VaView.MitterEvents[‘pointer-move’]</td><td>鼠标移动到客户端矢量信息</td></tr><tr><td>watch:extent</td><td>__VaView.MitterEvents[‘watch:extent’]</td><td>视图 <code>extent</code> 发生改变</td></tr><tr><td>watch:scale</td><td>__VaView.MitterEvents[‘watch:scale’]</td><td>视图 <code>scale</code> 发生改变</td></tr></tbody></table></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/zh-CN/component/view/+Page.md");
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
    importPath: "/pages/zh-CN/component/view/+Page.md",
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
