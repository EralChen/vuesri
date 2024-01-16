import { defineComponent, watchEffect, provide, resolveComponent, useSSRContext } from "vue";
import { b as useAddLayer } from "./chunk-MaQWsU9J.js";
import { d5 as Ze, nm as sMitter } from "./chunk-KFNcxJaF.js";
import { p as props$1, e as emits$1, u as useSetLayerOptions, a as useSetLayerSpatialReference } from "./chunk-cQlS_KkA.js";
import { _ as _sfc_main$1, c as createOnEmits } from "./chunk-B7M5Xqd5.js";
import { u as useView } from "./chunk-oD5XiDYU.js";
import mitt from "mitt";
import { ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./chunk-rLRIqhK0.js";
const props = {
  ...props$1,
  url: {
    type: String,
    default: "",
    require: true
  },
  layerId: {
    type: Number,
    default: void 0
  }
};
const emits = {
  ...emits$1,
  load: (e) => e
};
const _sfc_main = defineComponent({
  name: "VaServerFeatureLayer",
  components: {
    VaLayerHitEvents: _sfc_main$1
  },
  emits,
  props,
  setup(props2, { emit }) {
    const view = useView();
    const map = view.map;
    const hitEmits = createOnEmits(emit);
    const layer = new Ze({
      ...props2.defaultOptions
    });
    layer[sMitter] = mitt();
    watchEffect(() => {
      layer.url = props2.url;
    });
    watchEffect(() => {
      props2.layerId && (layer.layerId = props2.layerId);
    });
    useSetLayerOptions(layer, props2);
    useSetLayerSpatialReference(view, layer, props2);
    useAddLayer(map, layer, props2);
    provide("vaLayer", layer);
    provide("vaFeatureLayer", layer);
    emit("load", { view, layer });
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/server-feature-layer/src/index.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
const VaServerFeatureLayer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
VaServerFeatureLayer.install = (app) => {
  app.component(VaServerFeatureLayer.name, VaServerFeatureLayer);
};
export {
  VaServerFeatureLayer as V
};