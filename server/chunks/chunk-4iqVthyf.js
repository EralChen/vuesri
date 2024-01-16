import { defineComponent, resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { _ as _sfc_main$1 } from "./chunk-LGmaep6O.js";
import { _ as _sfc_main$2 } from "./chunk-OjvQdFJg.js";
import { u as useView } from "./chunk-oD5XiDYU.js";
import { l as lods, o as origin } from "./chunk-BSxDNfxQ.js";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./chunk-rLRIqhK0.js";
import "./chunk-MaQWsU9J.js";
import "@vunk/core/shared/utils-vue";
import "./chunk-KFNcxJaF.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-AN2pNKfL.js";
import "vike/server";
import "vike-vue/usePageContext";
import "./chunk-8AIdLOXL.js";
import "path";
import "@vunk/core";
import "element-plus";
import "@vueuse/core";
import "@vunk/core/shared/utils-class";
import "deepdash-es/standalone";
import "gsap";
import "@vunk/core/composables";
import "lodash-es";
import "@vunk/core/shared/utils-promise";
import "@vunk/core/components/client-only";
import "@element-plus/icons-vue";
const _sfc_main = defineComponent({
  inheritAttrs: false,
  components: {
    VaWebTileLayer: _sfc_main$1,
    VaBasemapBaseLayers: _sfc_main$2
  },
  setup() {
    useView();
    const baseLayer = {
      spatialReference: {
        wkid: 4490
      }
    };
    const defaultOptions = {
      title: "zjLayer",
      urlTemplate: `https://ditu.zjzwfw.gov.cn:443/services/wmts/imgmap/gov_img_emerg/oss?token=d502c9fb9c63eb32784f839db2e867a5&service=WMTS&request=GetTile&version=1.0.0&layer=imgmap&style=default&tileMatrixSet=esritilematirx&format=image%2Fjpgpng&height=256&width=256&tilecol={col}&tilerow={row}&tilematrix={level}`,
      tileInfo: {
        lods: lods.slice(1, 18),
        origin,
        spatialReference: baseLayer.spatialReference
      },
      spatialReference: baseLayer.spatialReference
    };
    return {
      defaultOptions
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_VaWebTileLayer = resolveComponent("VaWebTileLayer");
  const _component_VaBasemapBaseLayers = resolveComponent("VaBasemapBaseLayers");
  _push(ssrRenderComponent(_component_VaWebTileLayer, mergeProps({
    defaultOptions: _ctx.defaultOptions,
    orphan: true
  }, _ctx.$attrs, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_VaBasemapBaseLayers, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_VaBasemapBaseLayers)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/print/ZjBaseLayer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ZjBaseLayer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ZjBaseLayer as default
};
