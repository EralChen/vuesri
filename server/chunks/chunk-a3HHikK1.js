import { defineComponent, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VaMapView } from "./chunk-r6MU8tCx.js";
import { V as VaTdtBasemap } from "./chunk-2_8Nl9Hn.js";
import { V as VaBasemapToggle } from "./chunk-4bvItAH8.js";
import { hC as N, hD as R } from "./chunk-KFNcxJaF.js";
import "./chunk-chuKOP2I.js";
import "./chunk-oD5XiDYU.js";
import "@vunk/core/shared/utils-class";
import "lodash-es";
import "mitt";
import "./chunk-rLRIqhK0.js";
import "vike/server";
import "vike-vue/usePageContext";
import "./chunk-8AIdLOXL.js";
import "path";
import "@vunk/core";
import "element-plus";
import "@vueuse/core";
import "@vunk/core/shared/utils-vue";
import "deepdash-es/standalone";
import "gsap";
import "@vunk/core/composables";
import "@vunk/core/shared/utils-promise";
import "@vunk/core/components/client-only";
import "@element-plus/icons-vue";
import "./chunk-BSxDNfxQ.js";
import "./chunk-Y9HZwdAu.js";
import "./chunk-jzCtEhR4.js";
import "./chunk-LGmaep6O.js";
import "./chunk-MaQWsU9J.js";
import "./chunk-OjvQdFJg.js";
import "./chunk-AN2pNKfL.js";
import "./chunk-4y4AoNcC.js";
import "./chunk-vvav8UfW.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "basic",
  __ssrInlineRender: true,
  setup(__props) {
    const baseLayers = [
      new N({
        url: "http://116.63.63.191:6080/arcgis/rest/services/SBWB/NB_DT3857/MapServer"
      })
    ];
    const defaultOptions = {
      nextBasemap: new R({
        baseLayers,
        thumbnailUrl: "https://www.tianditu.gov.cn/static/map/vec.jpg"
      })
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VaMapView), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VaTdtBasemap), null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VaBasemapToggle), { defaultOptions }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VaTdtBasemap)),
              createVNode(unref(VaBasemapToggle), { defaultOptions })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/basemap-toggle/basic.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};