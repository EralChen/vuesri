import { defineComponent, ref, useSSRContext } from "vue";
import { u as useView } from "./chunk-oD5XiDYU.js";
import { ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./chunk-rLRIqhK0.js";
const emits = {
  load: (e) => e
};
const _sfc_main = defineComponent({
  name: "VaViewWhen",
  emits,
  setup(props, { emit }) {
    const view = useView();
    const ready = ref(false);
    view.when().then(() => {
      ready.value = true;
      emit("load", { view });
    });
    function getLayerByTitle(title) {
      return view.map.layers.find((item) => {
        return item.title === title;
      });
    }
    return {
      ready,
      view,
      getLayerByTitle
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if (_ctx.ready) {
    ssrRenderSlot(_ctx.$slots, "default", {
      view: _ctx.view,
      spatialReference: _ctx.view.spatialReference,
      map: _ctx.view.map,
      layers: _ctx.view.map.layers,
      getLayerByTitle: _ctx.getLayerByTitle
    }, null, _push, _parent);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/view-when/src/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const VaViewWhen = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
VaViewWhen.install = (app) => {
  app.component(VaViewWhen.name, VaViewWhen);
};
export {
  VaViewWhen as V
};
