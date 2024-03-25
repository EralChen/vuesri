import { p as props$1, u as useSetLayerOptions, a as useAddLayer } from "./chunk-ZSpamg93.js";
import { defineComponent, watchEffect, useSSRContext } from "vue";
import { ow as H } from "./chunk-ejFG4zJ0.js";
import "@vunk/core/shared/utils-class";
import { u as useSceneView } from "./chunk-tGOnCZwP.js";
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
  }
};
const emits = {
  load: (e) => e
};
const _sfc_main = defineComponent({
  name: "VaBuildingSceneLayer",
  emits,
  props,
  setup(props2, { emit }) {
    const view = useSceneView();
    const map = view.map;
    const layer = new H({
      ...props2.defaultOptions
    });
    watchEffect(() => {
      layer.url = props2.url;
    });
    useSetLayerOptions(layer, props2);
    useAddLayer(map, layer, props2);
    emit("load", {
      view,
      layer
    });
    return {
      layer
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/building-scene-layer/src/index.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
const VaBuildingSceneLayer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
VaBuildingSceneLayer.install = (app) => {
  app.component(VaBuildingSceneLayer.name, VaBuildingSceneLayer);
};
export {
  VaBuildingSceneLayer as V
};
