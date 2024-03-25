import { p as props$1, u as useSetLayerOptions, a as useAddLayer } from "./chunk-ZSpamg93.js";
import { defineComponent, watchEffect, provide, resolveComponent, withCtx, renderSlot, createVNode, useSSRContext } from "vue";
import { ip as N } from "./chunk-ejFG4zJ0.js";
import "@vunk/core/shared/utils-class";
import { u as useView } from "./chunk-oD5XiDYU.js";
import { V as VaSublayersProvider } from "./chunk-utiawlkN.js";
import { V as VaLayerWhen } from "./chunk-x7Vgxnqr.js";
import { ssrRenderSlot, ssrRenderComponent } from "vue/server-renderer";
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
  name: "VaTileLayer",
  components: {
    VaLayerWhen,
    VaSublayersProvider
  },
  emits,
  props,
  setup(props2, { emit }) {
    const view = useView();
    const map = view.map;
    const layer = new N({
      ...props2.defaultOptions
    });
    watchEffect(() => {
      layer.url = props2.url;
    });
    useSetLayerOptions(layer, props2);
    useAddLayer(map, layer, props2);
    provide("vaLayer", layer);
    provide("vaTileLayer", layer);
    emit("load", { view, layer });
    return {};
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_VaLayerWhen = resolveComponent("VaLayerWhen");
  const _component_VaSublayersProvider = resolveComponent("VaSublayersProvider");
  _push(`<!--[-->`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_VaLayerWhen, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_VaSublayersProvider, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              ssrRenderSlot(_ctx.$slots, "when", {}, null, _push3, _parent3, _scopeId2);
            } else {
              return [
                renderSlot(_ctx.$slots, "when")
              ];
            }
          }),
          _: 3
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_VaSublayersProvider, null, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "when")
            ]),
            _: 3
          })
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/tile-layer/src/index.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
const VaTileLayer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
VaTileLayer.install = (app) => {
  app.component(VaTileLayer.name, VaTileLayer);
};
export {
  VaTileLayer as V
};
