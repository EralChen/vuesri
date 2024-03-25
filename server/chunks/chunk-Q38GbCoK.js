import { defineComponent, resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./chunk-x8u7LPTa.js";
import "vike/server";
import "vike-vue/usePageContext";
import "./chunk-vndPU1ZH.js";
import "path";
import "@vunk/core";
import "element-plus";
import "@vueuse/core";
import "@vunk/core/shared/utils-vue";
import "@vunk/core/shared/utils-class";
import "deepdash-es/standalone";
import "gsap";
import "@vunk/core/composables";
import "lodash-es";
import "@vunk/core/shared/utils-promise";
import "@vunk/core/components/client-only";
import "@element-plus/icons-vue";
const _sfc_main = defineComponent({
  prop: {
    source: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {};
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_VkRenderer = resolveComponent("VkRenderer");
  const _component_VkRendererTemplate = resolveComponent("VkRendererTemplate");
  const _component_VaWmsLayer = resolveComponent("VaWmsLayer");
  const _component_VaServerFeatureLayer = resolveComponent("VaServerFeatureLayer");
  _push(ssrRenderComponent(_component_VkRenderer, mergeProps({
    source: _ctx.source,
    "type-field": "layerType"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_VkRendererTemplate, { type: "wms" }, {
          default: withCtx(({ raw }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_VaWmsLayer, {
                url: raw.url,
                sublayers: [
                  {
                    name: raw.layerName
                  }
                ]
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_VaWmsLayer, {
                  url: raw.url,
                  sublayers: [
                    {
                      name: raw.layerName
                    }
                  ]
                }, null, 8, ["url", "sublayers"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_VkRendererTemplate, { type: "feature" }, {
          default: withCtx(({ raw }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_VaServerFeatureLayer, {
                url: raw.url
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_VaServerFeatureLayer, {
                  url: raw.url
                }, null, 8, ["url"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_VkRendererTemplate, { type: "wms" }, {
            default: withCtx(({ raw }) => [
              createVNode(_component_VaWmsLayer, {
                url: raw.url,
                sublayers: [
                  {
                    name: raw.layerName
                  }
                ]
              }, null, 8, ["url", "sublayers"])
            ]),
            _: 1
          }),
          createVNode(_component_VkRendererTemplate, { type: "feature" }, {
            default: withCtx(({ raw }) => [
              createVNode(_component_VaServerFeatureLayer, {
                url: raw.url
              }, null, 8, ["url"])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/layer-renderer/tree/app-layer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const appLayer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  appLayer as default
};
