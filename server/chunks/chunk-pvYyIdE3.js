import { a as useAddLayer } from "./chunk-ZSpamg93.js";
import { defineComponent, watchEffect, watch, provide, resolveComponent, useSSRContext } from "vue";
import { os as M } from "./chunk-ejFG4zJ0.js";
import "@vunk/core/shared/utils-class";
import { p as props$1, u as useSetLayerOptions, a as useSetLayerSpatialReference } from "./chunk-wa_PWVge.js";
import { _ as _sfc_main$1, c as createOnEmits } from "./chunk-yCPoYwni.js";
import { u as useView } from "./chunk-oD5XiDYU.js";
import { ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./chunk-x8u7LPTa.js";
const props = {
  ...props$1,
  defaultOptions: {
    type: Object,
    default: () => ({})
  },
  url: {
    type: String
  },
  namespaceUri: {
    type: String,
    default: void 0
  },
  name: {
    type: String
  },
  geometryType: {
    type: String
  },
  wfsLayerInfo: {
    type: Object,
    default: void 0
  },
  customParameters: {
    type: Object,
    default: () => ({})
  }
};
const emits = {
  // ..._VaLayerHitEventsCtx.emits,
  load: (e) => e,
  click: (e) => e,
  pointerMove: (e) => e
};
const _sfc_main = defineComponent({
  name: "VaWfsLayer",
  components: {
    VaLayerHitEvents: _sfc_main$1
  },
  emits,
  props,
  setup(props2, { emit }) {
    const view = useView();
    const map = view.map;
    const hitEmits = createOnEmits(emit);
    const layer = props2.wfsLayerInfo ? M.fromWFSLayerInfo(
      props2.wfsLayerInfo
    ) : new M({
      ...props2.defaultOptions
    });
    useSetLayerOptions(layer, props2);
    watchEffect(() => {
      props2.url && (layer.url = props2.url);
    });
    watchEffect(() => {
      props2.name && (layer.name = props2.name);
    });
    watchEffect(() => {
      props2.namespaceUri && (layer.namespaceUri = props2.namespaceUri);
    });
    watchEffect(() => {
      props2.geometryType && (layer.geometryType = props2.geometryType);
    });
    watch(() => ({ ...props2.customParameters }), () => {
      layer.customParameters = props2.customParameters;
      layer.refresh();
    });
    useSetLayerSpatialReference(view, layer, props2);
    useAddLayer(map, layer, props2);
    provide("vaLayer", layer);
    provide("vaWfsLayer", layer);
    emit("load", {
      view,
      layer
    });
    return {
      hitEmits
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_VaLayerHitEvents = resolveComponent("VaLayerHitEvents");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_VaLayerHitEvents, _ctx.hitEmits, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/wfs-layer/src/index.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
const VaWfsLayer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
VaWfsLayer.install = (app) => {
  app.component(VaWfsLayer.name, VaWfsLayer);
};
export {
  VaWfsLayer as V
};
