import { p as props$1, a as useAddLayer, u as useSetLayerOptions } from "./chunk-ZSpamg93.js";
import { defineComponent, provide, useSSRContext } from "vue";
import { ox as A } from "./chunk-ejFG4zJ0.js";
import "@vunk/core/shared/utils-class";
import { u as useView } from "./chunk-oD5XiDYU.js";
import { ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./chunk-x8u7LPTa.js";
const props = {
  ...props$1,
  /**
   * @link https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-VectorTileLayer.html#url
   */
  defaultOptions: {
    type: Object,
    default: () => ({})
  },
  /**
   * @description  Style from mapbox-gl
   * @link https://docs.mapbox.com/help/glossary/style/
   */
  style: {
    type: Object,
    default: void 0
  }
};
const emits = {
  load: (e) => e
};
const _sfc_main = defineComponent({
  name: "VaVectorTileLayer",
  props,
  emits,
  setup(props2, { emit }) {
    const view = useView();
    const map = view.map;
    const layer = new A({
      style: props2.style,
      ...props2.defaultOptions
    });
    provide("vaLayer", layer);
    provide("vaVectorTileLayer", layer);
    emit("load", {
      layer,
      view
    });
    useAddLayer(map, layer, props2);
    useSetLayerOptions(layer, props2);
    return {};
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/vector-tile-layer/src/index.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
const VaVectorTileLayer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
VaVectorTileLayer.install = (app) => {
  app.component(VaVectorTileLayer.name, VaVectorTileLayer);
};
export {
  VaVectorTileLayer as V
};
