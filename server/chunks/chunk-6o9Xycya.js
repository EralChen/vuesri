import { defineComponent, shallowRef, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { V as VaSketch } from "./chunk-c7c2gizP.js";
import { V as VaSceneView } from "./chunk-8WuUWlIZ.js";
import { V as VaTdtBasemap } from "./chunk-XxvgZNck.js";
import "@vunk/core/shared/utils-vue";
import "./chunk-oD5XiDYU.js";
import "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-ANxjAjSR.js";
import "./chunk-vvav8UfW.js";
import "./chunk-x8u7LPTa.js";
import "vike/server";
import "vike-vue/usePageContext";
import "./chunk-vndPU1ZH.js";
import "path";
import "@vunk/core";
import "element-plus";
import "@vueuse/core";
import "@vunk/core/shared/utils-class";
import "deepdash-es/standalone";
import "gsap";
import "@vunk/core/composables";
import "lodash-es";
import "@vunk/core/shared/utils-promise";
import "@vunk/core/components/client-only";
import "@element-plus/icons-vue";
import "./chunk-ggs_QHBV.js";
import "./chunk-3BageVRQ.js";
import "mitt";
import "./chunk-4l9VVe6n.js";
import "./chunk-8CFIjXxc.js";
import "./chunk-bIq5xhw6.js";
import "./chunk-VS0cZDQt.js";
import "./chunk-_8aSZzrH.js";
import "./chunk-ZSpamg93.js";
import "./chunk-RQshD5bR.js";
import "./chunk-uYLXIHjo.js";
import "./chunk-AN2pNKfL.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "basic",
  __ssrInlineRender: true,
  setup(__props) {
    const graphics = shallowRef([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VaSceneView), _attrs, {
        after: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` graphics: ${ssrInterpolate(graphics.value.map((item) => item.geometry))}`);
          } else {
            return [
              createTextVNode(" graphics: " + toDisplayString(graphics.value.map((item) => item.geometry)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VaTdtBasemap), {
              spatialReference: { wkid: 3857 },
              type: "vec_w"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VaSketch), {
              "available-creature-tools": ["polygon"],
              "default-options": {
                visibleElements: {
                  selectionTools: {
                    "lasso-selection": false,
                    "rectangle-selection": false
                  }
                }
              },
              modelValue: graphics.value,
              "onUpdate:modelValue": ($event) => graphics.value = $event
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VaTdtBasemap), {
                spatialReference: { wkid: 3857 },
                type: "vec_w"
              }),
              createVNode(unref(VaSketch), {
                "available-creature-tools": ["polygon"],
                "default-options": {
                  visibleElements: {
                    selectionTools: {
                      "lasso-selection": false,
                      "rectangle-selection": false
                    }
                  }
                },
                modelValue: graphics.value,
                "onUpdate:modelValue": ($event) => graphics.value = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/sketch/basic.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
