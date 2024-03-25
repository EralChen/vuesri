import { p as props$1, u as useSetLayerOptions, a as useAddLayer } from "./chunk-ZSpamg93.js";
import { defineComponent, watchEffect, provide, useSSRContext } from "vue";
import { ot as Y, aC as M } from "./chunk-ejFG4zJ0.js";
import "@vunk/core/shared/utils-class";
import { u as useView } from "./chunk-oD5XiDYU.js";
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
    default: ""
  },
  sublayers: {
    type: Array
  },
  customParameters: {
    type: Object,
    default: () => ({})
  }
};
const emits = {
  load: (e) => e
};
const _sfc_main = defineComponent({
  name: "VaWmsLayer",
  emits,
  props,
  setup(props2, { emit }) {
    const view = useView();
    const map = view.map;
    const layer = new Y({
      ...props2.defaultOptions
    });
    watchEffect(() => {
      layer.url = props2.url;
    });
    watchEffect(() => {
      layer.customParameters = props2.customParameters;
      layer.refresh();
    });
    watchEffect(() => {
      if (props2.sublayers) {
        layer.sublayers = props2.sublayers;
        setInfoToSublayer();
      }
    });
    layer.when(setInfoToSublayer);
    useSetLayerOptions(layer, props2);
    useAddLayer(map, layer, props2);
    provide("vaLayer", layer);
    provide("vaWmsLayer", layer);
    emit("load", {
      layer,
      view
    });
    function setInfoToSublayer() {
      if (props2.sublayers?.length && layer.resourceInfo) {
        const layerReflect = layer.resourceInfo.layers.reduce((acc, layer2) => {
          acc[layer2.name] = layer2;
          return acc;
        }, {});
        layer.sublayers.forEach((sublayer) => {
          let name = sublayer.name;
          if (name.includes(":")) {
            name = name.split(":")[1];
          }
          const layerInfo = layerReflect[name];
          if (layerInfo) {
            sublayer.title || (sublayer.title = layerInfo.title);
            sublayer.maxScale || (sublayer.maxScale = layerInfo.maxScale);
            sublayer.minScale || (sublayer.minScale = layerInfo.minScale);
            sublayer.fullExtent || (sublayer.fullExtent = new M(layerInfo.extent));
          }
        });
      }
    }
    return {
      layer
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/wms-layer/src/index.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
const VaWmsLayer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
VaWmsLayer.install = (app) => {
  app.component(VaWmsLayer.name, VaWmsLayer);
};
export {
  VaWmsLayer as V
};
