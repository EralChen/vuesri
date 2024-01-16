import { defineComponent, inject, ref, markRaw, nextTick, watchEffect, onUnmounted, provide, useSSRContext } from "vue";
import { d0 as k, eg as p } from "./chunk-KFNcxJaF.js";
import { u as useView } from "./chunk-oD5XiDYU.js";
import { ssrRenderStyle, ssrRenderList, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./chunk-rLRIqhK0.js";
const props = {
  defaultOptions: {
    type: Object,
    default: () => ({})
  },
  title: {
    type: [String, Function, Promise],
    default: ""
  },
  orphan: {
    type: Boolean,
    default: false
  }
};
const emits = {
  load: (e) => e
};
const _sfc_main = defineComponent({
  name: "VaPopupTemplate",
  emits,
  props,
  setup(props2, { emit }) {
    const view = useView();
    const instance = inject("vaSublayer", null) || inject("vaLayer", null);
    const o = instance?.popupTemplate;
    const graphicToNode = ref(/* @__PURE__ */ new Map());
    const popupTemplate = new k({
      outFields: ["*"],
      async content(e) {
        const attributes = e.graphic.attributes;
        markRaw(e.graphic);
        graphicToNode.value.set(e.graphic, { el: null, attributes });
        await nextTick();
        return graphicToNode.value.get(e.graphic)?.el;
      },
      ...props2.defaultOptions
    });
    watchEffect(() => {
      popupTemplate.title = props2.title;
    });
    if (instance && !props2.orphan) {
      instance.popupTemplate = popupTemplate;
    }
    onUnmounted(() => {
      instance && (instance.popupTemplate = o);
    });
    const handler = p(() => view.popup.visible, (v) => {
      if (!v)
        graphicToNode.value.clear();
    });
    onUnmounted(() => {
      handler.remove();
    });
    emit("load", { view, popupTemplate });
    provide("vaPopupTemplate", popupTemplate);
    return {
      graphicToNode,
      setRef: (option, el) => option.el = el
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><div style="${ssrRenderStyle({ display: "none" })}"><!--[-->`);
  ssrRenderList(_ctx.graphicToNode.entries(), ([g, option]) => {
    _push(`<div>`);
    ssrRenderSlot(_ctx.$slots, "default", {
      attributes: option.attributes,
      geometry: g.geometry,
      graphic: g
    }, null, _push, _parent);
    _push(`</div>`);
  });
  _push(`<!--]--></div>`);
  ssrRenderSlot(_ctx.$slots, "plugins", {}, null, _push, _parent);
  ssrRenderSlot(_ctx.$slots, "extends", {}, null, _push, _parent);
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/popup-template/src/index.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
const VaPopupTemplate = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
VaPopupTemplate.install = (app) => {
  app.component(VaPopupTemplate.name, VaPopupTemplate);
};
export {
  VaPopupTemplate as V
};
