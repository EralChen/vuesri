import { defineComponent, ref, provide, onMounted, mergeProps, useSSRContext } from "vue";
import { u as useView } from "./chunk-oD5XiDYU.js";
import { nl as b } from "./chunk-KFNcxJaF.js";
import { a as useSetVisible } from "./chunk-MaQWsU9J.js";
import "./chunk-4y4AoNcC.js";
import { u as useAddUi } from "./chunk-vvav8UfW.js";
import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./chunk-rLRIqhK0.js";
const props = {
  defaultOptions: {
    type: Object,
    default: () => ({})
  },
  position: {
    type: [String, Object],
    default: "bottom-right"
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
  name: "VaBasemapToggle",
  emits,
  props,
  setup(props2, { emit }) {
    const view = useView();
    const toggleNode = ref();
    const basemapToggle = new b({
      view,
      ...props2.defaultOptions
    });
    useSetVisible(basemapToggle, props2);
    provide("vaBasemapToggle", basemapToggle);
    onMounted(() => {
      basemapToggle.container = toggleNode.value;
      useAddUi(view.ui, basemapToggle, props2);
      emit("load", { view, basemapToggle });
    });
    return {
      toggleNode
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ ref: "toggleNode" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/basemap-toggle/src/index.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
const VaBasemapToggle = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
VaBasemapToggle.install = (app) => {
  app.component(VaBasemapToggle.name, VaBasemapToggle);
};
export {
  VaBasemapToggle as V
};
