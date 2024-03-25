import "./chunk-ZSpamg93.js";
import { defineComponent, shallowRef, watch, resolveComponent, withCtx, mergeProps, toHandlers, renderSlot, createVNode, useSSRContext } from "vue";
import "./chunk-ejFG4zJ0.js";
import "@vunk/core/shared/utils-class";
import { p as props$1, c as createBindProps } from "./chunk-wa_PWVge.js";
import { e as emits$1, V as VaClientFeatureLayer, c as createOnEmits } from "./chunk-9IwRySYm.js";
import { V as VaLayerWhen } from "./chunk-x7Vgxnqr.js";
import { u as useFeatureLayer } from "./chunk-gvpbtdma.js";
import { ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./chunk-x8u7LPTa.js";
const props = {
  ...props$1,
  query: {
    type: Object,
    default: void 0
  }
};
const emits = {
  ...emits$1
};
const _sfc_main = defineComponent({
  name: "VaDerivedFeatureLayer",
  components: {
    VaClientFeatureLayer,
    VaLayerWhen
  },
  emits,
  props,
  setup(props2, { emit }) {
    const layer = useFeatureLayer();
    const featureLayerProps = createBindProps(props2, ["renderer"]);
    const clientFeatureLayerOnEmit = createOnEmits(emit);
    const source = shallowRef([]);
    watch(() => {
      return props2.query && { ...props2.query };
    }, (v) => {
      if (v) {
        layer.queryFeatures({
          where: "1=1",
          returnGeometry: true,
          outFields: ["*"],
          outSpatialReference: layer.spatialReference,
          ...v
        }).then((res) => {
          source.value = res.features;
        });
      } else {
        source.value = [];
      }
    }, { immediate: true });
    return {
      source,
      featureLayerProps,
      clientFeatureLayerOnEmit
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_VaLayerWhen = resolveComponent("VaLayerWhen");
  const _component_VaClientFeatureLayer = resolveComponent("VaClientFeatureLayer");
  _push(ssrRenderComponent(_component_VaLayerWhen, _attrs, {
    default: withCtx(({ layer: featureLayer }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_VaClientFeatureLayer, mergeProps({
          "object-id-field": featureLayer.objectIdField,
          "geometry-type": featureLayer.geometryType,
          fields: featureLayer.fields,
          source: _ctx.source,
          renderer: _ctx.renderer || featureLayer.renderer
        }, _ctx.featureLayerProps, toHandlers(_ctx.clientFeatureLayerOnEmit)), {
          default: withCtx((_, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
            } else {
              return [
                renderSlot(_ctx.$slots, "default")
              ];
            }
          }),
          _: 2
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_VaClientFeatureLayer, mergeProps({
            "object-id-field": featureLayer.objectIdField,
            "geometry-type": featureLayer.geometryType,
            fields: featureLayer.fields,
            source: _ctx.source,
            renderer: _ctx.renderer || featureLayer.renderer
          }, _ctx.featureLayerProps, toHandlers(_ctx.clientFeatureLayerOnEmit)), {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default")
            ]),
            _: 2
          }, 1040, ["object-id-field", "geometry-type", "fields", "source", "renderer"])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/derived-feature-layer/src/index.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
const VaDerivedFeatureLayer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
VaDerivedFeatureLayer.install = (app) => {
  app.component(VaDerivedFeatureLayer.name, VaDerivedFeatureLayer);
};
export {
  VaDerivedFeatureLayer as V
};
