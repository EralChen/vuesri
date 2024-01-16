import { defineComponent, ref, onMounted, provide, mergeProps, useSSRContext } from "vue";
import { u as useView } from "./chunk-oD5XiDYU.js";
import { u as useAddUi } from "./chunk-vvav8UfW.js";
import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./chunk-rLRIqhK0.js";
const props = {
  position: {
    type: [String, Object],
    default: "manual"
  },
  orphan: {
    type: Boolean,
    default: false
  }
};
const emits = {
  load: (e) => e
};
const _sfc_main = defineComponent({
  name: "VaViewUi",
  emits,
  props,
  setup(props2, { emit }) {
    const view = useView();
    const viewUiNode = ref();
    const ready = ref(false);
    onMounted(() => {
      if (!viewUiNode.value)
        return;
      useAddUi(view.ui, viewUiNode.value, props2);
      ready.value = true;
      provide("vaViewUi", viewUiNode.value);
      emit("load", { view, el: viewUiNode.value });
    });
    return {
      viewUiNode,
      ready
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    ref: "viewUiNode",
    class: "va-view-ui"
  }, _attrs))}>`);
  if (_ctx.ready) {
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/view-ui/src/index.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
const VaViewUi = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
VaViewUi.install = (app) => {
  app.component(VaViewUi.name, VaViewUi);
};
export {
  VaViewUi as V,
  props as p
};
