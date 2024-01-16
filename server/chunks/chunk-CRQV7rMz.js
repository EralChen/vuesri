import { p as props$1 } from "./chunk-4y4AoNcC.js";
import { defineComponent, watch, useSSRContext } from "vue";
import { no as h } from "./chunk-KFNcxJaF.js";
import { u as useSceneView } from "./chunk-tGOnCZwP.js";
import { u as useAddUi } from "./chunk-vvav8UfW.js";
import { ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./chunk-rLRIqhK0.js";
const props = {
  ...props$1,
  defaultOptions: {
    type: Object,
    default: () => ({})
  },
  viewModel: {
    type: Object,
    default: () => ({})
  }
};
const emits = {
  load: (e) => e
};
const _sfc_main = defineComponent({
  name: "VaSlice",
  props,
  emits,
  setup(props2, { emit }) {
    const view = useSceneView();
    const slice = new h({
      view,
      ...props2.defaultOptions
    });
    watch(() => ({ ...props2.viewModel }), () => {
      Reflect.ownKeys(props2.viewModel).forEach((key) => {
        slice.viewModel[key] = props2.viewModel[key];
      });
    }, {
      immediate: true
    });
    useAddUi(view.ui, slice, props2);
    return {};
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/slice/src/index.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
const VaSlice = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
VaSlice.install = (app) => {
  app.component(VaSlice.name, VaSlice);
};
export {
  VaSlice as V
};
