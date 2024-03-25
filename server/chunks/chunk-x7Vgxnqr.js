import { defineComponent, ref, useSSRContext } from "vue";
import { u as useView } from "./chunk-oD5XiDYU.js";
import { u as useLayer } from "./chunk-AN2pNKfL.js";
import { ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./chunk-x8u7LPTa.js";
const props = {
  layer: {
    type: Object,
    default: void 0
  }
};
const emits = {
  load: (e) => e
};
const _sfc_main = defineComponent({
  name: "VaLayerWhen",
  props,
  emits,
  setup(props2, { emit }) {
    const view = useView();
    const layer = props2.layer || useLayer();
    const ready = ref(false);
    layer.when().then(() => {
      ready.value = true;
      emit("load", { view, layer });
    });
    return {
      ready,
      view,
      layer
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if (_ctx.ready) {
    ssrRenderSlot(_ctx.$slots, "default", {
      view: _ctx.view,
      layer: _ctx.layer
    }, null, _push, _parent);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/layer-when/src/index.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
const VaLayerWhen = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
VaLayerWhen.install = (app) => {
  app.component(VaLayerWhen.name, VaLayerWhen);
};
export {
  VaLayerWhen as V
};
