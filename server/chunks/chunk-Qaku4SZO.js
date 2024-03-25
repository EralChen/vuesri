import { defineComponent, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { u as useSublayers } from "./chunk-RYbJjpM2.js";
import "./chunk-ejFG4zJ0.js";
import "@vunk/core/shared/utils-class";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sublayer-log",
  __ssrInlineRender: true,
  setup(__props) {
    const sublayers = useSublayers();
    const layerTitles = sublayers.map((item) => item.title).join(" | ");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<p${ssrRenderAttrs(_attrs)}>${ssrInterpolate(unref(layerTitles))}</p>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/tile-layer/sublayers/sublayer-log.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
