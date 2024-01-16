import { defineComponent, watch, useSSRContext } from "vue";
import { u as useSceneView } from "./chunk-tGOnCZwP.js";
import { u as useFeatureLayer } from "./chunk-gvpbtdma.js";
import { isNotEmptyObject } from "@vunk/core/shared/utils-object";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "./chunk-rLRIqhK0.js";
import "vike/server";
import "vike-vue/usePageContext";
import "./chunk-8AIdLOXL.js";
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
  props: {
    data: {
      type: Object,
      // required: true,
      default: () => ({})
    }
  },
  setup(props) {
    const layer = useFeatureLayer();
    const view = useSceneView();
    watch(() => props.data, () => {
      if (isNotEmptyObject(props.data)) {
        const where = Object.entries(props.data).map(([key, value]) => {
          if (typeof value === "string") {
            return `${key}='${value}'`;
          }
          if (typeof value === "number") {
            return `${key}=${value}`;
          }
        }).join(" AND ");
        layer.queryFeatures({
          where,
          outFields: ["*"],
          returnGeometry: true
        }).then((res) => {
          const { features } = res;
          if (features.length) {
            view.goTo(features);
            view.popup.open({
              features
            });
          }
        });
      }
    }, { immediate: true });
    return {};
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/popup-template/popup-open/core.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CoreVue = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  CoreVue as default
};
