import { u as useView } from "./chunk-oD5XiDYU.js";
import { defineComponent, onUnmounted, onDeactivated, onActivated, useSSRContext } from "vue";
import { u as useWmsLayer } from "./chunk-zebr3EP1.js";
import { aQ as U$1 } from "./chunk-ejFG4zJ0.js";
import "@vunk/core/shared/utils-class";
import { s as sMitter } from "./chunk-3BageVRQ.js";
import { c as createMitterToggleHandler } from "./chunk-ZSpamg93.js";
import { ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./chunk-x8u7LPTa.js";
const props = {
  extras: {
    type: Array,
    default: () => []
  }
};
const emits = {
  click: (e) => e
};
const _sfc_main = defineComponent({
  name: "VaWmsLayerOnClick",
  emits,
  props,
  setup(props2, { emit }) {
    const view = useView();
    const layer = useWmsLayer();
    const mitter = view[sMitter];
    const MitterToggleHandler = createMitterToggleHandler(mitter);
    const clickHandler = new MitterToggleHandler("click", async (e) => {
      const { event } = e;
      const sublayers = layer.sublayers;
      const usedLayers = sublayers.filter((item) => {
        return item.visible && item.queryable && item.name;
      }).map(({ name }) => name);
      usedLayers.push(...props2.extras);
      const usedLayersName = usedLayers.join();
      const { xmin, ymin, xmax, ymax, spatialReference: { wkid } } = view.extent;
      const bbox = `${xmin},${ymin},${xmax},${ymax}`;
      const crs = `EPSG:${wkid}`;
      let requestResponse;
      if (usedLayersName) {
        requestResponse = await U$1(layer.featureInfoUrl, {
          query: {
            SERVICE: "WMS",
            LAYERS: usedLayersName,
            QUERY_LAYERS: usedLayersName,
            REQUEST: "GetFeatureInfo",
            INFO_FORMAT: "application/json",
            FEATURE_COUNT: 5,
            BBOX: bbox,
            CRS: crs,
            WIDTH: view.width,
            HEIGHT: view.height,
            I: Math.round(event.x),
            J: Math.round(event.y)
          }
        });
      }
      emit("click", {
        ...e,
        requestResponse
      });
    });
    clickHandler.add();
    onUnmounted(() => {
      clickHandler.remove();
    });
    onDeactivated(() => {
      clickHandler.remove();
    });
    onActivated(() => {
      clickHandler.add();
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/wms-layer-on-click/src/index.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
const VaWmsLayerOnClick = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
VaWmsLayerOnClick.install = (app) => {
  app.component(VaWmsLayerOnClick.name, VaWmsLayerOnClick);
};
export {
  VaWmsLayerOnClick as V
};
