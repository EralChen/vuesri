import { o as onRenderHtml, a as _sfc_main$1, i as import_3 } from "../chunks/chunk-rLRIqhK0.js";
import { defineAsyncComponent, resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
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
const title = "MapView";
const lang = "zh-CN";
const _sfc_main = {
  __name: "+Page",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const frontmatter = { "title": "MapView", "lang": "zh-CN" };
    __expose({ frontmatter });
    const demos = {
      "map-view/basic.vue": defineAsyncComponent(() => import("../chunks/chunk-AqQJ4McB.js"))
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Demo = resolveComponent("Demo");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "vp-doc VPDoc doc-content" }, _attrs))}><h1 id="mapview" tabindex="-1">MapView <a class="header-anchor" href="#mapview" aria-label="Permalink to &quot;MapView&quot;">​</a></h1><p>MapView</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2>`);
      _push(ssrRenderComponent(_component_Demo, {
        "raw-tabs-source": "%7B%7D",
        demos,
        source: "%3Cdiv%20class%3D%22language-vue%22%3E%3Cbutton%20title%3D%22Copy%20Code%22%20class%3D%22copy%22%3E%3C%2Fbutton%3E%3Cspan%20class%3D%22lang%20is-hidden%22%3Evue%3C%2Fspan%3E%3Cpre%20class%3D%22shiki%20shiki-themes%20github-light%20github-dark%20vp-code%22%20v-pre%3D%22%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20lang%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22ts%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20setup%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%7B%20VaMapView%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%20'%40vuesri%2Fcore%2Fcomponents%2Fmap-view'%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%7B%20Map%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%20'%40vuesri%2Fcore%2Farcgis'%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23005CC5%3B--shiki-dark%3A%2379B8FF%22%3E%20map%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E__esri%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3EMap%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3E%20%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3E%20new%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20Map%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E(%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20basemap%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E'arcgis-imagery'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%7D)%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23005CC5%3B--shiki-dark%3A%2379B8FF%22%3E%20defaultOptions%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20__esri%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3EMapViewProperties%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3E%20%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20map%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20center%3A%20%5B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3E-%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23005CC5%3B--shiki-dark%3A%2379B8FF%22%3E109.254161%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%2C%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23005CC5%3B--shiki-dark%3A%2379B8FF%22%3E44.920980%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%5D%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20zoom%3A%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23005CC5%3B--shiki-dark%3A%2379B8FF%22%3E18%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B31D28%3B--shiki-dark%3A%23FDAEB7%3B--shiki-light-font-style%3Aitalic%3B--shiki-dark-font-style%3Aitalic%22%3EVaMapView%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20%20%20%20class%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22demo-map-view%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%3A%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3Edefault-options%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3EdefaultOptions%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B31D28%3B--shiki-dark%3A%23FDAEB7%3B--shiki-light-font-style%3Aitalic%3B--shiki-dark-font-style%3Aitalic%22%3EVaMapView%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E%0A%3C%2Fdiv%3E",
        path: "map-view/basic",
        "raw-source": "%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20VaMapView%20%7D%20from%20'%40vuesri%2Fcore%2Fcomponents%2Fmap-view'%0Aimport%20%7B%20Map%20%7D%20from%20'%40vuesri%2Fcore%2Farcgis'%0A%0A%0Aconst%20map%3A__esri.Map%20%3D%20new%20Map(%7B%0A%20%20basemap%3A%20'arcgis-imagery'%2C%0A%7D)%0Aconst%20defaultOptions%3A%20__esri.MapViewProperties%20%3D%20%7B%0A%20%20map%2C%0A%20%20center%3A%20%5B-109.254161%2C%2044.920980%5D%2C%0A%20%20zoom%3A%2018%2C%0A%7D%0A%3C%2Fscript%3E%0A%3Ctemplate%3E%0A%20%20%3CVaMapView%0A%20%20%20%20class%3D%22demo-map-view%22%0A%20%20%20%20%3Adefault-options%3D%22defaultOptions%22%0A%20%20%3E%3C%2FVaMapView%3E%0A%3C%2Ftemplate%3E%0A",
        description: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>map-view/basic</p>`);
          } else {
            return [
              createVNode("p", null, "map-view/basic")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h2 id="mapview-props" tabindex="-1">MapView Props <a class="header-anchor" href="#mapview-props" aria-label="Permalink to &quot;MapView Props&quot;">​</a></h2><table><thead><tr><th>prop</th><th>type</th><th>default</th><th>descriptions</th></tr></thead><tbody><tr><td><a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#constructors-summary" target="_blank" rel="noreferrer">defaultOptions</a></td><td>__esri.MapViewProperties</td><td>{}</td><td>构造函数参数</td></tr><tr><td>:cursor</td><td>string</td><td>‘’</td><td>鼠标移动到地图容器上的css样式</td></tr></tbody></table><h2 id="mapview-slots" tabindex="-1">MapView Slots <a class="header-anchor" href="#mapview-slots" aria-label="Permalink to &quot;MapView Slots&quot;">​</a></h2><table><thead><tr><th>name</th><th>arguments</th><th>descriptions</th></tr></thead><tbody><tr><td>default</td><td>-</td><td>in <code>.esri-view-user-storage</code></td></tr><tr><td>before</td><td>-</td><td>view dom 前</td></tr><tr><td>after</td><td>-</td><td>view dom 后</td></tr></tbody></table><h2 id="mapview-mitter" tabindex="-1">MapView Mitter <a class="header-anchor" href="#mapview-mitter" aria-label="Permalink to &quot;MapView Mitter&quot;">​</a></h2><table><thead><tr><th>name</th><th>arguments</th><th>descriptions</th></tr></thead><tbody><tr><td><a href="./view#view-mitter">View Mitter</a></td><td>-</td><td>-</td></tr></tbody></table></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/zh-CN/component/map-view/+Page.md");
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
    importPath: "/pages/zh-CN/component/map-view/+Page.md",
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
