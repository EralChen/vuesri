import { defineComponent, provide, useSSRContext } from "vue";
import { u as useLayer } from "./chunk-AN2pNKfL.js";
import "./chunk-ejFG4zJ0.js";
import "@vunk/core/shared/utils-class";
import { ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./chunk-x8u7LPTa.js";
const _sfc_main = defineComponent({
  name: "VaSublayersProvider",
  setup() {
    const layer = useLayer();
    provide("vaSublayers", layer.sublayers);
    return {};
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/sublayers-provider/src/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const VaSublayersProvider = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
VaSublayersProvider.install = (app) => {
  app.component(VaSublayersProvider.name, VaSublayersProvider);
};
export {
  VaSublayersProvider as V
};
