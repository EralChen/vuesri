import { defineComponent, ref, onMounted, provide, onUnmounted, mergeProps, useSSRContext } from "vue";
import { u as useView } from "./chunk-oD5XiDYU.js";
import { op as F } from "./chunk-ejFG4zJ0.js";
import { u as useAddUi } from "./chunk-vvav8UfW.js";
import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./chunk-x8u7LPTa.js";
const props = {
  /**
   * @link
   * https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Print.html#constructors-summary
   * 
   */
  defaultOptions: {
    type: Object,
    default: () => ({})
  },
  position: {
    type: String,
    default: "top-right"
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
  name: "VaPrint",
  emits,
  props,
  setup(props2, { emit }) {
    const view = useView();
    const uiNode = ref();
    const ready = ref(false);
    onMounted(() => {
      const print = new F({
        container: uiNode.value,
        view,
        ...props2.defaultOptions
      });
      useAddUi(view.ui, print, props2);
      provide("vaSketch", print);
      ready.value = true;
      emit("load", { print, view });
      onUnmounted(() => {
        print.destroy();
      });
    });
    return {
      uiNode,
      ready
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    ref: "uiNode",
    class: "va-print-x"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/print/src/index.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
const VaPrint = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
VaPrint.install = (app) => {
  app.component(VaPrint.name, VaPrint);
};
export {
  VaPrint as V
};
