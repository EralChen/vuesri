import { defineComponent, useSSRContext } from "vue";
import { ssrRenderSlot } from "vue/server-renderer";
import { u as useSceneView } from "./chunk-tGOnCZwP.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "core",
  __ssrInlineRender: true,
  setup(__props) {
    const sceneView = useSceneView();
    sceneView.on("drag", (event) => {
      event.button === 2 && event.stopPropagation();
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/scene-view/disable-rotation/core.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
