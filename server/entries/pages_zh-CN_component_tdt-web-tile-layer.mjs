import { o as onRenderHtml, a as _sfc_main$1, i as import_3 } from "../chunks/chunk-x8u7LPTa.js";
import { defineAsyncComponent, resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "vike/server";
import "vike-vue/usePageContext";
import "../chunks/chunk-vndPU1ZH.js";
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
const title = "TdtWebTileLayer";
const lang = "zh-CN";
const _sfc_main = {
  __name: "+Page",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const frontmatter = { "title": "TdtWebTileLayer", "lang": "zh-CN" };
    __expose({ frontmatter });
    const demos = {
      "tdt-web-tile-layer/basic.vue": defineAsyncComponent(() => import("../chunks/chunk-U__5WqUP.js"))
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Demo = resolveComponent("Demo");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "vp-doc VPDoc doc-content" }, _attrs))}><h1 id="tdtwebtilelayer" tabindex="-1">TdtWebTileLayer <a class="header-anchor" href="#tdtwebtilelayer" aria-label="Permalink to &quot;TdtWebTileLayer&quot;">​</a></h1><p>TdtWebTileLayer</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2>`);
      _push(ssrRenderComponent(_component_Demo, {
        "raw-tabs-source": "%7B%7D",
        demos,
        source: "%3Cdiv%20class%3D%22language-vue%22%3E%3Cbutton%20title%3D%22Copy%20Code%22%20class%3D%22copy%22%3E%3C%2Fbutton%3E%3Cspan%20class%3D%22lang%20is-hidden%22%3Evue%3C%2Fspan%3E%3Cpre%20class%3D%22shiki%20shiki-themes%20github-light%20github-dark%20vp-code%22%20v-pre%3D%22%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20lang%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22ts%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20setup%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%7B%20VaTdtWebTileLayer%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%20'%40vuesri%2Fcore%2Fcomponents%2Ftdt-web-tile-layer'%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%7B%20VaBasemap%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%20'%40vuesri%2Fcore%2Fcomponents%2Fbasemap'%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%7B%20VaMapView%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%20'%40vuesri%2Fcore%2Fcomponents%2Fmap-view'%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%7B%20VaBasemapBaseLayers%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%20'%40vuesri%2Fcore%2Fcomponents%2Fbasemap-base-layers'%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B31D28%3B--shiki-dark%3A%23FDAEB7%3B--shiki-light-font-style%3Aitalic%3B--shiki-dark-font-style%3Aitalic%22%3EVaMapView%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B31D28%3B--shiki-dark%3A%23FDAEB7%3B--shiki-light-font-style%3Aitalic%3B--shiki-dark-font-style%3Aitalic%22%3EVaBasemap%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B31D28%3B--shiki-dark%3A%23FDAEB7%3B--shiki-light-font-style%3Aitalic%3B--shiki-dark-font-style%3Aitalic%22%3EVaTdtWebTileLayer%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%3A%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3Etype%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22'img_c'%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%3A%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3Eorphan%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23005CC5%3B--shiki-dark%3A%2379B8FF%22%3Etrue%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B31D28%3B--shiki-dark%3A%23FDAEB7%3B--shiki-light-font-style%3Aitalic%3B--shiki-dark-font-style%3Aitalic%22%3EVaBasemapBaseLayers%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B31D28%3B--shiki-dark%3A%23FDAEB7%3B--shiki-light-font-style%3Aitalic%3B--shiki-dark-font-style%3Aitalic%22%3EVaTdtWebTileLayer%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B31D28%3B--shiki-dark%3A%23FDAEB7%3B--shiki-light-font-style%3Aitalic%3B--shiki-dark-font-style%3Aitalic%22%3EVaTdtWebTileLayer%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%3A%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3Etype%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22'cia_c'%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%3A%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3Eorphan%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23005CC5%3B--shiki-dark%3A%2379B8FF%22%3Etrue%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B31D28%3B--shiki-dark%3A%23FDAEB7%3B--shiki-light-font-style%3Aitalic%3B--shiki-dark-font-style%3Aitalic%22%3EVaBasemapBaseLayers%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B31D28%3B--shiki-dark%3A%23FDAEB7%3B--shiki-light-font-style%3Aitalic%3B--shiki-dark-font-style%3Aitalic%22%3EVaTdtWebTileLayer%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B31D28%3B--shiki-dark%3A%23FDAEB7%3B--shiki-light-font-style%3Aitalic%3B--shiki-dark-font-style%3Aitalic%22%3EVaBasemap%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B31D28%3B--shiki-dark%3A%23FDAEB7%3B--shiki-light-font-style%3Aitalic%3B--shiki-dark-font-style%3Aitalic%22%3EVaMapView%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E%0A%3C%2Fdiv%3E",
        path: "tdt-web-tile-layer/basic",
        "raw-source": "%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20VaTdtWebTileLayer%20%7D%20from%20'%40vuesri%2Fcore%2Fcomponents%2Ftdt-web-tile-layer'%0Aimport%20%7B%20VaBasemap%20%7D%20from%20'%40vuesri%2Fcore%2Fcomponents%2Fbasemap'%0Aimport%20%7B%20VaMapView%20%7D%20from%20'%40vuesri%2Fcore%2Fcomponents%2Fmap-view'%0Aimport%20%7B%20VaBasemapBaseLayers%20%7D%20from%20'%40vuesri%2Fcore%2Fcomponents%2Fbasemap-base-layers'%0A%3C%2Fscript%3E%0A%3Ctemplate%3E%0A%3CVaMapView%3E%0A%20%20%3CVaBasemap%3E%0A%20%20%20%20%3CVaTdtWebTileLayer%20%3Atype%3D%22'img_c'%22%20%3Aorphan%3D%22true%22%3E%0A%20%20%20%20%20%20%3CVaBasemapBaseLayers%20%2F%3E%0A%20%20%20%20%3C%2FVaTdtWebTileLayer%3E%0A%0A%20%20%20%20%3CVaTdtWebTileLayer%20%3Atype%3D%22'cia_c'%22%20%3Aorphan%3D%22true%22%3E%0A%20%20%20%20%20%20%3CVaBasemapBaseLayers%20%2F%3E%0A%20%20%20%20%3C%2FVaTdtWebTileLayer%3E%0A%20%20%3C%2FVaBasemap%3E%0A%3C%2FVaMapView%3E%0A%3C%2Ftemplate%3E%0A",
        description: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>tdt-web-tile-layer/basic</p>`);
          } else {
            return [
              createVNode("p", null, "tdt-web-tile-layer/basic")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h2 id="tdtwebtilelayer-props" tabindex="-1">TdtWebTileLayer Props <a class="header-anchor" href="#tdtwebtilelayer-props" aria-label="Permalink to &quot;TdtWebTileLayer Props&quot;">​</a></h2><table><thead><tr><th>prop</th><th>type</th><th>default</th><th>descriptions</th></tr></thead><tbody><tr><td><a href="./web-tile-layer#webtilelayer-props">WebTilelayer Props</a></td><td>-</td><td>-</td><td>-</td></tr><tr><td>type</td><td>‘img_c’|‘vec_c’|‘ter_c’|‘img_w’|‘vec_w’|‘ter_w’<br>|‘cia_c’|‘cva_c’|‘cta_c’|‘cia_w’|‘cva_w’|‘cta_w’</td><td>-</td><td>天地图类型</td></tr><tr><td>spatialReference</td><td>__esri.SpatialReferenceProperties</td><td>wkid: 4326</td><td>坐标系</td></tr><tr><td>token</td><td>string</td><td>-</td><td>请求天地图所需token</td></tr></tbody></table><h2 id="webtilelayer-emits" tabindex="-1">WebTileLayer Emits <a class="header-anchor" href="#webtilelayer-emits" aria-label="Permalink to &quot;WebTileLayer Emits&quot;">​</a></h2><table><thead><tr><th>name</th><th>arguments</th><th>descriptions</th></tr></thead><tbody><tr><td><a href="./web-tile-layer#webtilelayer-emits">WebTilelayer Emits</a></td><td>-</td><td>-</td></tr></tbody></table></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/zh-CN/component/tdt-web-tile-layer/+Page.md");
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
    importPath: "/pages/zh-CN/component/tdt-web-tile-layer/+Page.md",
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
    configName: "onCreateApp",
    importPath: "/pages/+onCreateApp.ts",
    isValueFile: true,
    exportValues: import_3
  }
];
const configValuesSerialized = {
  ["passToClient"]: {
    definedAt: { "files": [{ "filePathToShowToUser": "/renderer/+config.h.ts", "fileExportPathToShowToUser": ["default", "passToClient"] }] },
    valueSerialized: '["pageProps","title","crowdin","lang","fromHtmlRenderer"]'
  }
};
export {
  configValuesImported,
  configValuesSerialized
};
