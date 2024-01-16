import { p as props$1, u as useSetLayerOptions, b as useAddLayer } from "./chunk-MaQWsU9J.js";
import { defineComponent, watchEffect, provide, resolveComponent, useSSRContext } from "vue";
import { df as h } from "./chunk-KFNcxJaF.js";
import { u as useView } from "./chunk-oD5XiDYU.js";
import { _ as _sfc_main$1, c as createOnEmits } from "./chunk-B7M5Xqd5.js";
import { ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./chunk-rLRIqhK0.js";
const props = {
  ...props$1,
  /**
   * @link
   * https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GraphicsLayer.html#constructors-summary
   */
  defaultOptions: {
    type: Object,
    default: () => ({})
  },
  /**
   * @link
   * https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GraphicsLayer.html#graphics
   */
  graphics: {
    /* Maybe ArrayLike */
    type: [Array, Object],
    default: () => []
  }
};
const emits = {
  click: (e) => e,
  pointerMove: (e) => e,
  load: (e) => e
};
const _sfc_main = defineComponent({
  name: "VaGraphicsLayer",
  components: {
    VaLayerHitEvents: _sfc_main$1
  },
  emits,
  props,
  setup(props2, { emit }) {
    const view = useView();
    const map = view.map;
    const eventsOnEmits = createOnEmits(emit);
    const layer = new h({
      ...props2.defaultOptions
    });
    watchEffect(() => {
      layer.graphics = props2.graphics;
    });
    useSetLayerOptions(layer, props2);
    useAddLayer(map, layer, props2);
    provide("vaLayer", layer);
    provide("vaGraphicsLayer", layer);
    emit("load", { view, layer });
    return {
      eventsOnEmits
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_VaLayerHitEvents = resolveComponent("VaLayerHitEvents");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_VaLayerHitEvents, _ctx.eventsOnEmits, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/graphics-layer/src/index.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
const VaGraphicsLayer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
VaGraphicsLayer.install = (app) => {
  app.component(VaGraphicsLayer.name, VaGraphicsLayer);
};
export {
  VaGraphicsLayer as V
};
