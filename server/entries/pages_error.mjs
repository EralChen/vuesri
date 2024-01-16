import { o as onRenderHtml, a as _sfc_main$1, i as import_3 } from "../chunks/chunk-rLRIqhK0.js";
import { defineComponent, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { usePageContext } from "vike-vue/usePageContext";
import "vike/server";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "+Page",
  __ssrInlineRender: true,
  setup(__props) {
    const ctx = usePageContext();
    let { is404, abortReason } = ctx;
    if (!abortReason) {
      abortReason = is404 ? "Page not found." : "Something went wrong.";
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "center" }, _attrs))}><p>${ssrInterpolate(unref(abortReason))}</p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/_error/+Page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const import_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
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
    importPath: "/pages/_error/+Page.vue",
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
