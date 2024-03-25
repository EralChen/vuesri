import { defineComponent, useSSRContext } from "vue";
import { u as useLayer } from "./chunk-AN2pNKfL.js";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./chunk-x8u7LPTa.js";
import "vike/server";
import "vike-vue/usePageContext";
import "./chunk-vndPU1ZH.js";
import "path";
import "@vunk/core";
import "element-plus";
import "@vueuse/core";
import "@vunk/core/shared/utils-vue";
import "@vunk/core/shared/utils-class";
import "deepdash-es/standalone";
import "gsap";
import "@vunk/core/composables";
import "lodash-es";
import "@vunk/core/shared/utils-promise";
import "@vunk/core/components/client-only";
import "@element-plus/icons-vue";
const _sfc_main = defineComponent({
  setup() {
    const layer = useLayer();
    const spatialReference = layer.spatialReference;
    console.log(spatialReference);
    return {
      spatialReference
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<p${ssrRenderAttrs(_attrs)}>${ssrInterpolate(_ctx.spatialReference)}</p>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/layer-when/basic/sub-node.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SubNode = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  SubNode as default
};
