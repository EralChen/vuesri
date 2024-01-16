import { inject, defineComponent, useSSRContext } from "vue";
import { u as useLayer } from "./chunk-AN2pNKfL.js";
import { b as useAddLayer } from "./chunk-MaQWsU9J.js";
function useBasemap() {
  const basemap = inject("vaBasemap");
  if (!basemap) {
    throw new Error("The component which use useBasemap() must be in <VaBasemap>");
  }
  return basemap;
}
const _sfc_main = defineComponent({
  name: "VaBasemapBaseLayers",
  setup() {
    const basemap = useBasemap();
    const layer = useLayer();
    useAddLayer(basemap.baseLayers, layer, {});
    return () => null;
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/basemap-base-layers/src/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
_sfc_main.install = (app) => {
  app.component(_sfc_main.name, _sfc_main);
};
export {
  _sfc_main as _,
  useBasemap as u
};
