import { p as props$1, a as useAddLayer, u as useSetLayerOptions } from "./chunk-ZSpamg93.js";
import { defineComponent, watchEffect, provide, resolveComponent, useSSRContext } from "vue";
import { oo as Se } from "./chunk-ejFG4zJ0.js";
import "@vunk/core/shared/utils-class";
import { u as useSceneView } from "./chunk-tGOnCZwP.js";
import { _ as _sfc_main$1, c as createOnEmits } from "./chunk-yCPoYwni.js";
import { ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./chunk-x8u7LPTa.js";
const props = {
  ...props$1,
  defaultOptions: {
    type: Object,
    default: () => ({})
  },
  url: {
    type: String,
    required: true,
    default: ""
  }
};
const emits = {
  click: (e) => e,
  pointerMove: (e) => e,
  load: (e) => e
};
const _sfc_main = defineComponent({
  name: "VaSceneLayer",
  components: {
    VaLayerHitEvents: _sfc_main$1
  },
  emits,
  props,
  setup(props2, { emit }) {
    const hitEmits = createOnEmits(emit);
    const view = useSceneView();
    const map = view.map;
    const layer = new Se({
      url: props2.url,
      ...props2.defaultOptions
    });
    watchEffect(() => {
      layer.url = props2.url;
    });
    useAddLayer(map, layer, props2);
    useSetLayerOptions(layer, props2);
    provide("vaSceneLayer", layer);
    provide("vaLayer", layer);
    emit("load", {
      layer,
      view
    });
    return {
      hitEmits
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_VaLayerHitEvents = resolveComponent("VaLayerHitEvents");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_VaLayerHitEvents, _ctx.hitEmits, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/scene-layer/src/index.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
const VaSceneLayer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
VaSceneLayer.install = (app) => {
  app.component(VaSceneLayer.name, VaSceneLayer);
};
export {
  VaSceneLayer as V
};
