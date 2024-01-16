import { inject, defineComponent, onUnmounted, useSSRContext } from "vue";
import { u as useBasemap } from "./chunk-OjvQdFJg.js";
function useBasemapToggle() {
  const basemapToggle = inject("vaBasemapToggle");
  if (!basemapToggle) {
    throw new Error("The component which use useBasemapToggle() must be in <VaBasemapToggle>");
  }
  return basemapToggle;
}
const _sfc_main = defineComponent({
  name: "VaBasemapToggleNextBasemap",
  setup() {
    const basemap = useBasemap();
    const toggle = useBasemapToggle();
    const originNext = toggle.nextBasemap;
    toggle.nextBasemap = basemap;
    onUnmounted(() => {
      toggle.nextBasemap === basemap && (toggle.nextBasemap = originNext);
    });
    return () => null;
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/basemap-toggle-next-basemap/src/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
_sfc_main.install = (app) => {
  app.component(_sfc_main.name, _sfc_main);
};
export {
  _sfc_main as _
};
