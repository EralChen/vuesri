import { defineComponent, ref, computed, provide, onMounted, resolveComponent, mergeProps, useSSRContext } from "vue";
import { hB as g, oU as X, nm as sMitter } from "./chunk-KFNcxJaF.js";
import { p as props$1, e as emits$1, _ as _sfc_main$1, a as _sfc_main$2 } from "./chunk-chuKOP2I.js";
import mitt from "mitt";
import { ssrRenderSlot, ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./chunk-rLRIqhK0.js";
const props = {
  ...props$1,
  /**
   * @link
   * https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#constructors-summary
   * @description
   * MapView Constructor
   */
  defaultOptions: {
    type: Object,
    default: () => ({})
  },
  cursor: {
    type: String,
    default: ""
  }
};
const emits = {
  ...emits$1,
  load: (e) => e
};
const _sfc_main = defineComponent({
  name: "VaMapView",
  inheritAttrs: false,
  components: {
    ViewEvents: _sfc_main$1,
    ViewWatchs: _sfc_main$2
  },
  emits,
  props,
  setup(props2, { emit }) {
    const viewNode = ref();
    const map = new g();
    const view = new X({
      map,
      ...props2.defaultOptions
    });
    view[sMitter] = mitt();
    view.ui.components = [];
    window.__VA_MAP_VIEW__ = view;
    const eventCursor = ref("");
    const cursorStyle = computed(() => ({
      "--va-map-view-cursor": props2.cursor || eventCursor.value
    }));
    provide("vaView", view);
    provide("vaMapView", view);
    onMounted(() => {
      view.container = viewNode.value;
      emit("load", { view });
    });
    return {
      viewNode,
      eventCursor,
      cursorStyle
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ViewEvents = resolveComponent("ViewEvents");
  const _component_ViewWatchs = resolveComponent("ViewWatchs");
  _push(`<!--[-->`);
  ssrRenderSlot(_ctx.$slots, "before", {}, null, _push, _parent);
  _push(`<div${ssrRenderAttrs(mergeProps({
    ref: "viewNode",
    style: _ctx.cursorStyle,
    class: "va-map-view va-view-x"
  }, _ctx.$attrs))}>`);
  _push(ssrRenderComponent(_component_ViewEvents, {
    cursor: _ctx.eventCursor,
    "onUpdate:cursor": ($event) => _ctx.eventCursor = $event
  }, null, _parent));
  _push(ssrRenderComponent(_component_ViewWatchs, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
  ssrRenderSlot(_ctx.$slots, "after", {}, null, _push, _parent);
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/map-view/src/index.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
const VaMapView = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
VaMapView.install = (app) => {
  app.component(VaMapView.name, VaMapView);
};
export {
  VaMapView as V
};
