import { p as props$1 } from "./chunk-ANxjAjSR.js";
import { defineComponent, useSSRContext } from "vue";
import { u as useView } from "./chunk-oD5XiDYU.js";
import { or as u } from "./chunk-ejFG4zJ0.js";
import "@vunk/core/shared/utils-class";
import { u as useSetVisible } from "./chunk-RQshD5bR.js";
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
  name: "VaZoom",
  props,
  emits,
  setup(props2, { emit }) {
    const view = useView();
    const zoomUi = new u({
      view,
      ...props2.defaultOptions
    });
    useAddUi(view.ui, zoomUi, props2);
    useSetVisible(zoomUi, props2);
    emit("load", {
      ui: zoomUi,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/zoom/src/index.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
const VaZoom = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
VaZoom.install = (app) => {
  app.component(VaZoom.name, VaZoom);
};
export {
  VaZoom as V
};
