import { p as props$1, u as useSetLayerOptions, b as useAddLayer } from "./chunk-MaQWsU9J.js";
import { defineComponent, watchEffect, provide, resolveComponent, useSSRContext } from "vue";
import { np as k, nm as sMitter } from "./chunk-KFNcxJaF.js";
import { u as useView } from "./chunk-oD5XiDYU.js";
import { _ as _sfc_main$1, c as createOnEmits } from "./chunk-B7M5Xqd5.js";
import mitt from "mitt";
import { ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./chunk-rLRIqhK0.js";
const props = {
  ...props$1,
  defaultOptions: {
    type: Object,
    default: () => ({})
  },
  url: {
    type: String,
    default: "",
    required: true
  },
  geometryType: {
    type: String,
    required: true,
    default: ""
  },
  definitionExpression: {
    type: String,
    default: "1=1"
  },
  renderer: {
    type: Object,
    default: void 0
  }
};
const emits = {
  // ..._VaLayerHitEventsCtx.emits,
  load: (e) => e,
  click: (e) => e,
  pointerMove: (e) => e
};
const _sfc_main = defineComponent({
  name: "VaGeojsonLayer",
  components: {
    VaLayerHitEvents: _sfc_main$1
  },
  emits,
  props,
  setup(props2, { emit }) {
    const view = useView();
    const map = view.map;
    const layerEventsOnEmits = createOnEmits(emit);
    const layer = new k({
      ...props2.defaultOptions
    });
    layer[sMitter] = mitt();
    useSetLayerOptions(layer, props2);
    watchEffect(() => {
      layer.geometryType = props2.geometryType;
    });
    watchEffect(() => {
      layer.url = props2.url;
      layer.refresh();
    });
    watchEffect(() => {
      if (props2.renderer === void 0)
        return;
      layer.renderer = props2.renderer;
    });
    watchEffect(() => {
      layer.definitionExpression = props2.definitionExpression;
    });
    useAddLayer(map, layer, props2);
    emit("load", { view, layer });
    provide("vaLayer", layer);
    provide("vaGeojsonLayer", layer);
    return {
      layerEventsOnEmits
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_VaLayerHitEvents = resolveComponent("VaLayerHitEvents");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_VaLayerHitEvents, _ctx.layerEventsOnEmits, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/geojson-layer/src/index.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
const VaGeojsonLayer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
VaGeojsonLayer.install = (app) => {
  app.component(VaGeojsonLayer.name, VaGeojsonLayer);
};
export {
  VaGeojsonLayer as V
};
