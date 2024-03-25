import { p as props$1, a as useAddLayer, u as useSetLayerOptions } from "./chunk-ZSpamg93.js";
import { defineComponent, watchEffect, provide, useSSRContext } from "vue";
import { oq as x } from "./chunk-ejFG4zJ0.js";
import "@vunk/core/shared/utils-class";
import { u as useView } from "./chunk-oD5XiDYU.js";
import { ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./chunk-x8u7LPTa.js";
const props = {
  ...props$1,
  defaultOptions: {
    type: Object,
    default: () => ({})
  },
  url: {
    type: String,
    default: ""
  },
  renderer: {
    type: Object,
    default: void 0
  }
};
const emits = {
  load: (e) => e
};
const _sfc_main = defineComponent({
  name: "VaImageryLayer",
  emits,
  props,
  setup(props2, { emit }) {
    const view = useView();
    const map = view.map;
    const layer = new x({
      ...props2.defaultOptions
    });
    watchEffect(() => {
      layer.url = props2.url;
    });
    watchEffect(() => {
      if (props2.renderer === void 0)
        return;
      layer.renderer = props2.renderer;
    });
    useAddLayer(map, layer, props2);
    useSetLayerOptions(layer, props2);
    emit("load", {
      layer,
      view
    });
    provide("vaLayer", layer);
    provide("vaImageryLayer", layer);
    return {};
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/imagery-layer/src/index.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
const VaImageryLayer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
VaImageryLayer.install = (app) => {
  app.component(VaImageryLayer.name, VaImageryLayer);
};
export {
  VaImageryLayer as V
};
