import { defineComponent, useSSRContext } from "vue";
import { ssrRenderSlot } from "vue/server-renderer";
import { u as useSceneView } from "./chunk-tGOnCZwP.js";
import "./chunk-ejFG4zJ0.js";
import "@vunk/core/shared/utils-class";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "underground",
  __ssrInlineRender: true,
  setup(__props) {
    const view = useSceneView();
    const map = view.map;
    map.ground.navigationConstraint = {
      type: "none"
    };
    map.ground.opacity = 0.1;
    map.ground.surfaceColor = "#CFC7BC";
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/slice/scene-layer/underground.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
