import { p as props$1, b as useSetLayerBasicOptions, d as useScaleVisibleHandler, a as useAddLayer } from "./chunk-ZSpamg93.js";
import { defineComponent, watchEffect, useSSRContext } from "vue";
import "./chunk-ejFG4zJ0.js";
import "@vunk/core/shared/utils-class";
import z from "./chunk-F5dgb7hU.js";
import { u as useSceneView } from "./chunk-tGOnCZwP.js";
import { u as useRequestInterceptor } from "./chunk-0A6HSBpB.js";
import { ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./chunk-x8u7LPTa.js";
const props = {
  ...props$1,
  defaultOptions: {
    type: Object,
    default: () => ({})
  },
  url: {
    type: String,
    required: true
  },
  token: {
    type: String,
    default: void 0
  }
};
const emits = {
  load: (e) => e
};
const _sfc_main = defineComponent({
  name: "VaIntegratedMesh3dTilesLayer",
  props,
  emits,
  setup(props2, { emit }) {
    const view = useSceneView();
    const map = view.map;
    const layer = new z({
      ...props2.defaultOptions
    });
    const { interceptorToggle } = useRequestInterceptor({
      urls: [
        new RegExp(`${props2.url.split("/tileset.json")[0]}`)
      ],
      before: (e) => {
        if (props2.token) {
          const headers = e.requestOptions.headers;
          e.requestOptions.headers = {
            ...headers,
            Authorization: `Bearer ${props2.token}`
          };
        }
      }
    });
    interceptorToggle.add();
    watchEffect(() => {
      layer.url = props2.url;
    });
    useSetLayerBasicOptions(layer, props2);
    useScaleVisibleHandler(view, props2, (v) => {
      layer.visible = v;
    });
    useAddLayer(map, layer, props2);
    emit("load", {
      view,
      layer
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/integrated-mesh-3d-tiles-layer/src/index.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
const VaIntegratedMesh3dTilesLayer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
VaIntegratedMesh3dTilesLayer.install = (app) => {
  app.component(
    VaIntegratedMesh3dTilesLayer.name || "VaIntegratedMesh3dTilesLayer",
    VaIntegratedMesh3dTilesLayer
  );
};
export {
  VaIntegratedMesh3dTilesLayer as V
};
