import { nm as sMitter, lh as sIndex, bf as c$1 } from "./chunk-KFNcxJaF.js";
import { u as useView } from "./chunk-oD5XiDYU.js";
import { inject, defineComponent, onUnmounted, useSSRContext, watch, watchEffect, provide, resolveComponent } from "vue";
import { onEmitsFactory } from "@vunk/core/shared/utils-vue";
import { c as createMitterToggleHandler } from "./chunk-qHSzybEP.js";
import { a as useSetVisible } from "./chunk-MaQWsU9J.js";
import { ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./chunk-rLRIqhK0.js";
function useGraphic() {
  const graphic = inject("vaGraphic");
  if (!graphic) {
    throw new Error("The component which use useGraphic() must be in a Graphic component");
  }
  return graphic;
}
const emits$1 = {
  click: (e) => e
};
const createOnEmits = onEmitsFactory(emits$1);
const _sfc_main$1 = defineComponent({
  emits: emits$1,
  setup(props2, { emit }) {
    const view = useView();
    const graphic = useGraphic();
    const mitter = view[sMitter];
    const MitterToggleHandler = createMitterToggleHandler(mitter);
    const clickMitter = new MitterToggleHandler("click", (e) => {
      const { hitTestResult } = e;
      const results = hitTestResult.results;
      let result;
      if (results[0]?.graphic === graphic) {
        result = results[0];
      }
      emit("click", { ...e, result, graphic });
    });
    clickMitter.add();
    onUnmounted(() => {
      clickMitter.remove();
    });
    return () => null;
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/graphic-hit-events/src/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props2, ctx) : void 0;
};
_sfc_main$1.install = (app) => {
  app.component(_sfc_main$1.name, _sfc_main$1);
};
const props = {
  defaultOptions: {
    type: Object,
    default: () => ({})
  },
  geometry: {
    type: Object,
    default: null
  },
  symbol: {
    type: Object,
    default: () => ({
      type: "simple-marker",
      // autocasts as new SimpleMarkerSymbol()
      color: [226, 119, 40]
    })
  },
  attributes: {
    type: Object,
    default: () => ({})
  },
  visible: {
    type: Boolean,
    default: true
  },
  spatialReference: {
    type: Object,
    default: void 0
  },
  index: {
    type: Number,
    default: void 0
  },
  orphan: {
    type: Boolean,
    default: false
  }
};
const emits = {
  ...emits$1,
  load: (e) => e
};
function useAddGraphic(graphics, g, props2) {
  if (props2.orphan)
    return;
  g[sIndex] = props2.index;
  graphics.add(g, props2.index);
  const reorder = (ni) => {
    graphics.forEach((item) => {
      if (item[sIndex] > ni) {
        setTimeout(() => {
          graphics.reorder(item, item[sIndex]);
        });
      }
    });
  };
  if (typeof props2.index === "number")
    reorder(props2.index);
  watch(() => props2.index, (v) => {
    if (typeof v === "number") {
      g[sIndex] = props2.index;
      graphics.reorder(g, v);
      reorder(v);
    }
  });
  onUnmounted(() => {
    graphics.remove(g);
  });
}
const _sfc_main = defineComponent({
  name: "VaGraphic",
  components: {
    VaGraphicHitEvents: _sfc_main$1
  },
  emits,
  props,
  setup(props2, { emit }) {
    const view = useView();
    const layer = inject("vaGraphicsLayer", null);
    const graphics = layer?.graphics || view.graphics;
    const eventsOnEmits = createOnEmits(emit);
    const graphic = new c$1({
      ...props2.defaultOptions
    });
    useSetVisible(graphic, props2);
    watchEffect(() => {
      const hasSpatial = props2.geometry?.spatialReference;
      graphic.geometry = props2.geometry;
      !hasSpatial && graphic.geometry && view.when(() => {
        graphic.geometry.spatialReference = props2.spatialReference || view.spatialReference;
      });
    });
    watchEffect(() => {
      graphic.attributes = props2.attributes;
    });
    watchEffect(() => {
      if (!props2.symbol)
        return;
      graphic.symbol = props2.symbol;
    });
    useAddGraphic(graphics, graphic, props2);
    provide("vaGraphic", graphic);
    emit("load", { view, graphic });
    return {
      eventsOnEmits,
      graphic
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_VaGraphicHitEvents = resolveComponent("VaGraphicHitEvents");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_VaGraphicHitEvents, _ctx.eventsOnEmits, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {
    graphic: _ctx.graphic,
    geometry: _ctx.graphic.geometry,
    attributes: _ctx.graphic.attributes
  }, null, _push, _parent);
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/graphic/src/index.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
const VaGraphic = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
VaGraphic.install = (app) => {
  app.component(VaGraphic.name, VaGraphic);
};
export {
  VaGraphic as V
};
