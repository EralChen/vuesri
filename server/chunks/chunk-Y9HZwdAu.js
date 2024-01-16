import { defineComponent, watchEffect, onUnmounted, provide, useSSRContext } from "vue";
import { u as useView } from "./chunk-oD5XiDYU.js";
import { hD as R } from "./chunk-KFNcxJaF.js";
const props = {
  baseLayers: {
    type: Array,
    default: () => []
  },
  spatialReference: {
    type: Object,
    default: void 0
  },
  orphan: {
    type: Boolean,
    default: false
  },
  defaultOptions: {
    type: Object,
    default: () => ({})
  },
  thumbnailUrl: {
    type: String,
    default: ""
  }
};
const emits = {
  load: (e) => e
};
const _sfc_main = defineComponent({
  name: "VaBasemap",
  props,
  emits,
  setup(props2, { emit, slots }) {
    const view = useView();
    const map = view.map;
    const originBasemap = map.basemap;
    const basemap = new R({
      ...props2.defaultOptions
    });
    watchEffect(() => {
      basemap.baseLayers = props2.baseLayers;
    });
    watchEffect(() => {
      basemap.spatialReference = props2.spatialReference || view.spatialReference;
    });
    watchEffect(() => {
      basemap.thumbnailUrl = props2.thumbnailUrl;
    });
    !props2.orphan && (map.basemap = basemap);
    onUnmounted(() => {
      map.basemap === basemap && (map.basemap = originBasemap);
    });
    provide("vaBasemap", basemap);
    emit("load", { view, basemap });
    return () => slots.default?.();
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/basemap/src/index.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
_sfc_main.install = (app) => {
  app.component(_sfc_main.name, _sfc_main);
};
export {
  _sfc_main as _
};
