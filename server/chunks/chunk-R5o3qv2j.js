import { defineComponent, shallowRef, watchEffect, unref, mergeProps, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VaWfsLayer } from "./chunk-pvYyIdE3.js";
import { iF as Y } from "./chunk-ejFG4zJ0.js";
import "./chunk-ZSpamg93.js";
import "@vunk/core/shared/utils-vue";
import "./chunk-3BageVRQ.js";
import "./chunk-RQshD5bR.js";
import "@vunk/core/shared/utils-class";
import "./chunk-wa_PWVge.js";
import "./chunk-yCPoYwni.js";
import "./chunk-oD5XiDYU.js";
import "./chunk-AN2pNKfL.js";
import "./chunk-x8u7LPTa.js";
import "vike/server";
import "vike-vue/usePageContext";
import "./chunk-vndPU1ZH.js";
import "path";
import "@vunk/core";
import "element-plus";
import "@vueuse/core";
import "deepdash-es/standalone";
import "gsap";
import "@vunk/core/composables";
import "lodash-es";
import "@vunk/core/shared/utils-promise";
import "@vunk/core/components/client-only";
import "@element-plus/icons-vue";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "rest-wfs-layer",
  __ssrInlineRender: true,
  props: {
    capabilities: {
      type: Object
    },
    name: {
      type: String
    },
    namespaceUri: {
      type: String
    },
    options: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    const wfsLayerInfo = shallowRef(null);
    watchEffect(r);
    function r() {
      wfsLayerInfo.value = null;
      if (!props.capabilities) {
        return;
      }
      Y(
        props.capabilities,
        props.name,
        props.namespaceUri,
        props.options
      ).then((res) => {
        wfsLayerInfo.value = res;
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      if (wfsLayerInfo.value) {
        _push(ssrRenderComponent(unref(VaWfsLayer), mergeProps({ wfsLayerInfo: wfsLayerInfo.value }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/wfs-layer/capabilities/rest-wfs-layer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
