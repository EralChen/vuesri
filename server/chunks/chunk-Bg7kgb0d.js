import { p as props$1 } from "./chunk-ANxjAjSR.js";
import { defineComponent, useSSRContext } from "vue";
import { ov as g } from "./chunk-ejFG4zJ0.js";
import { u as useSetVisible } from "./chunk-RQshD5bR.js";
import { u as useSceneView } from "./chunk-tGOnCZwP.js";
import "@vunk/core/shared/utils-class";
import { u as useAddUi } from "./chunk-vvav8UfW.js";
import { ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./chunk-x8u7LPTa.js";
const props = {
  ...props$1,
  defaultOptions: {
    type: Object,
    default: () => ({})
  },
  visible: {
    type: Boolean,
    default: true
  }
};
const emits = {
  load: (e) => e
};
const _sfc_main = defineComponent({
  name: "VaAreaMeasurement3d",
  props,
  emits,
  setup(props2, { emit }) {
    const view = useSceneView();
    const areaMeasurement3dUi = new g({
      view,
      ...props2.defaultOptions
    });
    useAddUi(view.ui, areaMeasurement3dUi, props2);
    useSetVisible(areaMeasurement3dUi, props2);
    emit("load", {
      ui: areaMeasurement3dUi,
      view
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/area-measurement-3d/src/index.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
const VaAreaMeasurement3d = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
VaAreaMeasurement3d.install = (app) => {
  app.component(
    VaAreaMeasurement3d.name || "VaAreaMeasurement3d",
    VaAreaMeasurement3d
  );
};
export {
  VaAreaMeasurement3d as V
};
