import { b as useAddLayer } from "./chunk-MaQWsU9J.js";
import { defineComponent, watchEffect, watch, nextTick, provide, resolveComponent, useSSRContext } from "vue";
import { d5 as Ze, nm as sMitter } from "./chunk-KFNcxJaF.js";
import { p as props$1, e as emits$1, u as useSetLayerOptions, a as useSetLayerSpatialReference } from "./chunk-cQlS_KkA.js";
import { onEmitsFactory } from "@vunk/core/shared/utils-vue";
import { u as useView } from "./chunk-oD5XiDYU.js";
import { _ as _sfc_main$1, c as createOnEmits$1 } from "./chunk-B7M5Xqd5.js";
import mitt from "mitt";
import { ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./chunk-rLRIqhK0.js";
const props = {
  ...props$1,
  source: {
    type: [Object, Array],
    required: true,
    default: () => []
  },
  fields: {
    type: Array,
    required: true,
    default: () => []
  },
  geometryType: {
    type: String,
    default: "point",
    required: true
  },
  objectIdField: {
    type: String,
    default: "ObjectID"
  },
  forceUpdate: {
    type: Boolean,
    default: false
  }
};
const emits = {
  ...emits$1,
  change: (e) => e,
  load: (e) => e
};
const createOnEmits = onEmitsFactory(emits);
const _sfc_main = defineComponent({
  name: "VaClientFeatureLayer",
  components: {
    VaLayerHitEvents: _sfc_main$1
  },
  emits,
  props,
  setup(props2, { emit }) {
    const view = useView();
    const map = view.map;
    const hitEmits = createOnEmits$1(emit);
    const layer = new Ze({
      source: props2.source,
      ...props2.defaultOptions
    });
    layer[sMitter] = mitt();
    const mitter = layer[sMitter];
    useSetLayerOptions(layer, props2);
    useSetLayerSpatialReference(view, layer, props2);
    watchEffect(() => {
      layer.geometryType = props2.geometryType;
    });
    watchEffect(() => {
      layer.objectIdField = props2.objectIdField;
    });
    watchEffect(() => {
      layer.fields = props2.fields;
    });
    useAddLayer(map, layer, props2);
    watch(() => props2.source, (v, ov) => {
      nextTick().then(() => {
        const updateFeatures = [];
        const addMap = v.reduce((a, c) => {
          const id = c.attributes[props2.objectIdField];
          a[id] = c;
          return a;
        }, {});
        const delMap = ov.reduce((a, c) => {
          const id = c.attributes[props2.objectIdField];
          if (Reflect.has(addMap, id)) {
            updateFeatures.push(c);
            Reflect.deleteProperty(addMap, id);
          } else {
            a[id] = c;
          }
          return a;
        }, {});
        const addFeatures = [];
        const deleteFeatures = [];
        for (const key in addMap) {
          addFeatures.push(addMap[key]);
        }
        for (const key in delMap) {
          deleteFeatures.push(delMap[key]);
        }
        return {
          addFeatures,
          deleteFeatures,
          updateFeatures
        };
      }).then((editObj) => {
        return layer.applyEdits(editObj);
      }).then(() => {
        if (props2.forceUpdate) {
          layer.visible = false;
          layer.visible = true;
        }
        return { view, layer };
      }).then((changeEvent) => {
        mitter.emit("change", changeEvent);
        emit("change", changeEvent);
      });
    });
    provide("vaLayer", layer);
    provide("vaFeatureLayer", layer);
    emit("load", { view, layer });
    return {
      hitEmits
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_VaLayerHitEvents = resolveComponent("VaLayerHitEvents");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_VaLayerHitEvents, _ctx.hitEmits, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/client-feature-layer/src/index.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
const VaClientFeatureLayer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
VaClientFeatureLayer.install = (app) => {
  app.component(VaClientFeatureLayer.name, VaClientFeatureLayer);
};
export {
  VaClientFeatureLayer as V,
  createOnEmits as c,
  emits as e
};
