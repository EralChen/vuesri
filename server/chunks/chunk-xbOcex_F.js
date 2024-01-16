import { p as props$1, u as useSetLayerOptions, b as useAddLayer } from "./chunk-MaQWsU9J.js";
import { defineComponent, shallowRef, watchEffect, watch, provide, useSSRContext } from "vue";
import { ny as K } from "./chunk-KFNcxJaF.js";
import { bindPropsFactory, onEmitsFactory } from "@vunk/core/shared/utils-vue";
import { u as useView } from "./chunk-oD5XiDYU.js";
import { ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./chunk-rLRIqhK0.js";
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
  serviceMode: {
    type: String,
    default: "RESTful"
  },
  customParameters: {
    type: Object,
    default: () => ({})
  },
  sublayers: {
    type: Array,
    default: void 0
  },
  activeLayer: {
    type: Object,
    default: void 0
  }
};
const createBindProps = bindPropsFactory(props);
const emits = {
  load: (e) => e
};
const createOnEmits = onEmitsFactory(emits);
const _sfc_main = defineComponent({
  name: "VaWmtsLayer",
  emits,
  props,
  setup(props2, { emit }) {
    const view = useView();
    const map = view.map;
    const layer = new K({
      ...props2.defaultOptions
    });
    const sublayerReflect = shallowRef({});
    layer.when(() => {
      sublayerReflect.value = layer.sublayers.reduce((prev, cur) => {
        prev[cur.id] = cur;
        return prev;
      }, {});
    });
    watchEffect(() => {
      layer.url = props2.url;
    });
    watchEffect(() => {
      layer.serviceMode = props2.serviceMode;
    });
    watchEffect(() => {
      layer.customParameters = props2.customParameters;
    });
    watchEffect(() => {
      if (!props2.sublayers)
        return;
      layer.sublayers = props2.sublayers;
    });
    watch(() => props2.activeLayer?.id, (v) => {
      if (!v)
        return;
      layer.when().then(() => {
        layer.activeLayer = sublayerReflect.value[v];
        layer.refresh();
      });
    }, { immediate: true });
    watchEffect(() => {
      layer.title = props2.title;
    });
    useSetLayerOptions(layer, props2);
    useAddLayer(map, layer, props2);
    provide("vaLayer", layer);
    provide("vaWmtsLayer", layer);
    emit("load", { view, layer });
    return {};
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/wmts-layer/src/index.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
const VaWmtsLayer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
VaWmtsLayer.install = (app) => {
  app.component(VaWmtsLayer.name, VaWmtsLayer);
};
export {
  VaWmtsLayer as V,
  createOnEmits as a,
  createBindProps as c,
  emits as e,
  props as p
};
