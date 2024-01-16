import { bindPropsFactory, onEmitsFactory } from "@vunk/core/shared/utils-vue";
import { inject, defineComponent, onUnmounted, useSSRContext, watch, ref, onMounted, watchEffect, provide, resolveComponent, mergeProps, toHandlers } from "vue";
import { u as useView } from "./chunk-oD5XiDYU.js";
import { df as h, sp as S } from "./chunk-KFNcxJaF.js";
import "./chunk-4y4AoNcC.js";
import { u as useGraphicsLayer } from "./chunk-ggs_QHBV.js";
import { u as useAddUi } from "./chunk-vvav8UfW.js";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./chunk-rLRIqhK0.js";
function useSketch() {
  const instance = inject("vaSketch");
  if (!instance) {
    throw new Error("The component which use useSketch() must be in a Sketch component");
  }
  return instance;
}
const props$1 = {
  modelValue: {
    type: [Array, Object],
    default: () => []
  },
  multiple: {
    type: Boolean,
    default: true
  }
};
const createBindProps = bindPropsFactory(props$1);
const emits$1 = {
  "update:modelValue": (e) => e,
  "complete": (e) => e,
  "update": (e) => {
    return true;
  },
  "create": (e) => {
    return true;
  }
};
const createOnEmits = onEmitsFactory(emits$1);
const props = {
  ...props$1,
  defaultOptions: {
    type: Object,
    default: () => ({})
  },
  availableCreatureTools: {
    type: Array,
    default: void 0
  },
  position: {
    type: String,
    default: "top-right"
  },
  orphan: {
    type: Boolean,
    default: false
  },
  modelValueInitFrom: {
    type: String,
    default: "modelValue"
  },
  viewModelPointSymbol: {
    type: Object
  },
  viewModelPolygonSymbol: {
    type: Object
  },
  viewModelPolylineSymbol: {
    type: Object
  },
  viewModelActiveFillSymbol: {
    type: Object
  },
  visibleElements: {
    type: Object,
    default: void 0
  }
};
const createEventsBindProps = createBindProps;
const emits = {
  load: (e) => e,
  ...emits$1
};
const createEventsOnEmits = createOnEmits;
const _sfc_main$1 = defineComponent({
  props: props$1,
  emits: emits$1,
  setup(props2, { emit }) {
    const sketch = useSketch();
    const layer = useGraphicsLayer();
    const createHandle = sketch.on("create", (e) => {
      emit("create", e);
      if (e.state === "start") {
        if (!props2.multiple) {
          layer.removeAll();
        }
      } else if (e.state === "complete") {
        if (!props2.multiple && layer.graphics.length > 1 && e.graphic.geometry.type === "point") {
          layer.remove(layer.graphics.getItemAt(0));
        }
        emit("update:modelValue", [...layer.graphics]);
        emit("complete", e);
      }
    });
    onUnmounted(() => {
      createHandle.remove();
    });
    const updateHandle = sketch.on("update", (e) => {
      emit("update", e);
      if (e.state === "complete") {
        emit("update:modelValue", [...layer.graphics]);
        emit("complete", e);
      }
    });
    onUnmounted(() => {
      updateHandle.remove();
    });
    return () => null;
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/sketch/src/events/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props2, ctx) : void 0;
};
const _sfc_main = defineComponent({
  name: "VaSketch",
  components: {
    Events: _sfc_main$1
  },
  emits,
  props,
  setup(props2, { emit }) {
    const view = useView();
    const map = view.map;
    let layer = inject("vaGraphicsLayer", null);
    if (!layer) {
      layer = new h();
      map.add(layer);
    }
    const eventsBindProps = createEventsBindProps(props2);
    const eventsOnEmits = createEventsOnEmits(emit);
    function replaceLayerGraphics(gs) {
      layer.removeAll();
      layer.addMany(gs);
    }
    watch(() => props2.modelValue, (v, ov) => {
      let update = false;
      if (v.length === ov.length) {
        for (let i = 0; i < v.length; i++) {
          if (v[i] !== ov[i]) {
            update = true;
            break;
          }
        }
      } else {
        update = true;
      }
      if (update) {
        replaceLayerGraphics([...v]);
      }
    });
    if (props2.modelValueInitFrom === "layerGraphics") {
      emit("update:modelValue", layer.graphics);
    } else {
      replaceLayerGraphics(props2.modelValue);
    }
    const sketchNode = ref();
    const ready = ref(false);
    onMounted(() => {
      const sketch = new S({
        container: sketchNode.value,
        view,
        layer,
        creationMode: "single",
        ...props2.defaultOptions
      });
      watchEffect(() => {
        if (props2.visibleElements) {
          sketch.visibleElements = props2.visibleElements;
        }
      });
      watchEffect(() => {
        if (props2.viewModelPointSymbol) {
          sketch.viewModel.pointSymbol = props2.viewModelPointSymbol;
        }
      });
      watchEffect(() => {
        if (props2.viewModelPolylineSymbol) {
          sketch.viewModel.polylineSymbol = props2.viewModelPolylineSymbol;
        }
      });
      watchEffect(() => {
        if (props2.viewModelPolygonSymbol) {
          sketch.viewModel.polygonSymbol = props2.viewModelPolygonSymbol;
        }
      });
      watchEffect(() => {
        if (props2.viewModelActiveFillSymbol) {
          sketch.viewModel.activeFillSymbol = props2.viewModelActiveFillSymbol;
        }
      });
      watchEffect(() => {
        if (!props2.availableCreatureTools)
          return;
        sketch.availableCreateTools = props2.availableCreatureTools;
      });
      onUnmounted(() => {
        sketch.destroy();
      });
      useAddUi(view.ui, sketch, props2);
      provide("vaGraphicsLayer", layer);
      provide("vaSketch", sketch);
      ready.value = true;
      emit("load", { sketch, view });
    });
    return {
      eventsBindProps,
      eventsOnEmits,
      sketchNode,
      ready
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Events = resolveComponent("Events");
  _push(`<div${ssrRenderAttrs(mergeProps({ ref: "sketchNode" }, _attrs))}>`);
  if (_ctx.ready) {
    _push(`<!--[-->`);
    _push(ssrRenderComponent(_component_Events, mergeProps(_ctx.eventsBindProps, toHandlers(_ctx.eventsOnEmits)), null, _parent));
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`<!--]-->`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/sketch/src/index.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
const VaSketch = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
VaSketch.install = (app) => {
  app.component(VaSketch.name, VaSketch);
};
export {
  VaSketch as V
};
