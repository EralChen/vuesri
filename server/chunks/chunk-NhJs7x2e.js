import { defineComponent, resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { _ as _sfc_main$1 } from "./chunk-_8aSZzrH.js";
import { _ as _sfc_main$2 } from "./chunk-uYLXIHjo.js";
import { u as useView } from "./chunk-oD5XiDYU.js";
import "./chunk-ejFG4zJ0.js";
import "@vunk/core/shared/utils-class";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./chunk-x8u7LPTa.js";
import "./chunk-ZSpamg93.js";
import "@vunk/core/shared/utils-vue";
import "./chunk-3BageVRQ.js";
import "./chunk-RQshD5bR.js";
import "./chunk-AN2pNKfL.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "vike/server";
import "vike-vue/usePageContext";
import "./chunk-vndPU1ZH.js";
import "path";
import "@vunk/core";
import "element-plus";
import "@vueuse/core";
import "deepdash-es/standalone";
import "gsap";
import "@vunk/core/composables";
import "lodash-es";
import "@vunk/core/shared/utils-promise";
import "@vunk/core/components/client-only";
import "@element-plus/icons-vue";
const _sfc_main = defineComponent({
  components: {
    VaWebTileLayer: _sfc_main$1,
    VaBasemapBaseLayers: _sfc_main$2
  },
  inheritAttrs: false,
  setup() {
    const view = useView();
    const baseLayer = view.map.basemap.baseLayers.getItemAt(0);
    const defaultOptions = {
      title: "zjLayer",
      urlTemplate: `https://ditu.zjzwfw.gov.cn/services/wmts/imgmap/default/oss?service=WMTS&request=GetTile&version=1.0.0&layer=0&style=default&tileMatrixSet=default&format=tiles&height=256&width=256&token=3006a6d9-1aee-46b0-93f4-d3334b7ec6d9&tilecol={col}&tilerow={row}&tilematrix={level}`,
      tileInfo: baseLayer.tileInfo,
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
    "default-options": _ctx.defaultOptions,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/tdt-basemap/extends/ZjBaseLayer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ZjBaseLayer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ZjBaseLayer as default
};
