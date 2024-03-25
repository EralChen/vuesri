import { p as props$1, a as useAddLayer, u as useSetLayerOptions } from "./chunk-ZSpamg93.js";
import { defineComponent, watchEffect, provide, useSSRContext } from "vue";
import "./chunk-ejFG4zJ0.js";
import "@vunk/core/shared/utils-class";
import { c as b } from "./chunk-Yl7G-6Db.js";
import { u as useView } from "./chunk-oD5XiDYU.js";
import { ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./chunk-x8u7LPTa.js";
const props = {
  ...props$1,
  defaultOptions: {
    type: Object,
    default: () => ({})
  },
  source: {
    type: Object,
    required: true,
    default: () => ({})
  }
};
const emits = {
  load: (e) => e
};
const _sfc_main = defineComponent({
  name: "VaMediaLayer",
  emits,
  props,
  setup(props2, { emit }) {
    const view = useView();
    const map = view.map;
    const layer = new b({
      ...props2.defaultOptions
    });
    watchEffect(() => {
      layer.source = props2.source;
    });
    useAddLayer(map, layer, props2);
    useSetLayerOptions(layer, props2);
    provide("vaMediaLayer", layer);
    provide("vaLayer", layer);
    emit("load", {
      layer,
      view
    });
    return {};
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/media-layer/src/index.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
const VaMediaLayer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
VaMediaLayer.install = (app) => {
  app.component(VaMediaLayer.name, VaMediaLayer);
};
export {
  VaMediaLayer as V
};
