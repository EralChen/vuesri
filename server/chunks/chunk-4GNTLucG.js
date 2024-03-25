import { p as props$2, a as useAddLayer } from "./chunk-ZSpamg93.js";
import { watchEffect, defineComponent, useSSRContext } from "vue";
import { r3 as M } from "./chunk-ejFG4zJ0.js";
import "@vunk/core/shared/utils-class";
import { bindPropsFactory } from "@vunk/core/shared/utils-vue";
import { u as useView } from "./chunk-oD5XiDYU.js";
import { ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./chunk-x8u7LPTa.js";
const props$1 = {
  effect: {
    type: Object,
    default: void 0
  },
  blendMode: {
    type: String,
    default: void 0
  }
};
bindPropsFactory(props$1);
function useSetBlendLayerOptions(layer, props2) {
  watchEffect(() => {
    if (props2.effect === void 0)
      return;
    layer.effect = props2.effect;
  });
  watchEffect(() => {
    if (props2.blendMode === void 0)
      return;
    layer.blendMode = props2.blendMode;
  });
}
const props = {
  ...props$2,
  ...props$1,
  defaultOptions: {
    type: Object,
    default: () => ({})
  },
  url: {
    type: String,
    required: true
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
  name: "VaImageryTileLayer",
  emits,
  props,
  setup(props2, { emit }) {
    const view = useView();
    const map = view.map;
    const layer = new M({
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
    useSetBlendLayerOptions(layer, props2);
    useAddLayer(map, layer, props2);
    emit("load", {
      view,
      layer
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/imagery-tile-layer/src/index.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
const VaImageryTileLayer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
VaImageryTileLayer.install = (app) => {
  app.component(VaImageryTileLayer.name, VaImageryTileLayer);
};
export {
  VaImageryTileLayer as V
};
