import { p as props$1, u as useSetLayerOptions, b as useAddLayer } from "./chunk-MaQWsU9J.js";
import { defineComponent, provide, useSSRContext } from "vue";
import { dv as I } from "./chunk-KFNcxJaF.js";
import { bindPropsFactory, onEmitsFactory } from "@vunk/core/shared/utils-vue";
import { u as useView } from "./chunk-oD5XiDYU.js";
const props = {
  ...props$1,
  defaultOptions: {
    type: Object,
    default: () => ({})
  }
};
const createBindProps = bindPropsFactory(props);
const emits = {
  load: (e) => e
};
const createOnEmits = onEmitsFactory(emits);
const _sfc_main = defineComponent({
  name: "VaWebTileLayer",
  emits,
  props,
  setup(props2, { emit, slots }) {
    const view = useView();
    const map = view.map;
    const layer = new I({
      ...props2.defaultOptions
    });
    useSetLayerOptions(layer, props2);
    useAddLayer(map, layer, props2);
    provide("vaWebTileLayer", layer);
    provide("vaLayer", layer);
    emit("load", { view, layer });
    return () => slots.default?.();
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/web-tile-layer/src/index.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
_sfc_main.install = (app) => {
  app.component(_sfc_main.name, _sfc_main);
};
export {
  _sfc_main as _,
  createOnEmits as a,
  createBindProps as c,
  emits as e,
  props as p
};
