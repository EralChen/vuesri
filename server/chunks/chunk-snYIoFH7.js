import { defineComponent, unref, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VaMapView } from "./chunk-6fAe7ZtF.js";
import { V as VaTdtBasemap } from "./chunk-XxvgZNck.js";
import { a as levelToScale, l as lods } from "./chunk-8CFIjXxc.js";
import ZjBaseLayer from "./chunk-NhJs7x2e.js";
import NbBaseLayer from "./chunk-DfkC_Mrk.js";
import "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-4l9VVe6n.js";
import "./chunk-oD5XiDYU.js";
import "@vunk/core/shared/utils-class";
import "./chunk-3BageVRQ.js";
import "lodash-es";
import "mitt";
import "./chunk-x8u7LPTa.js";
import "vike/server";
import "vike-vue/usePageContext";
import "./chunk-vndPU1ZH.js";
import "path";
import "@vunk/core";
import "element-plus";
import "@vueuse/core";
import "@vunk/core/shared/utils-vue";
import "deepdash-es/standalone";
import "gsap";
import "@vunk/core/composables";
import "@vunk/core/shared/utils-promise";
import "@vunk/core/components/client-only";
import "@element-plus/icons-vue";
import "./chunk-bIq5xhw6.js";
import "./chunk-VS0cZDQt.js";
import "./chunk-_8aSZzrH.js";
import "./chunk-ZSpamg93.js";
import "./chunk-RQshD5bR.js";
import "./chunk-uYLXIHjo.js";
import "./chunk-AN2pNKfL.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const defaultOptions = {
      center: [121.5, 29.9],
      scale: levelToScale[10],
      constraints: {
        // 设置切片层级 2 => 20
        lods: lods.slice(2)
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VaMapView), mergeProps({ "default-options": defaultOptions }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VaTdtBasemap), {
              type: "vec_c",
              "min-scale": unref(levelToScale)[2],
              "max-scale": unref(levelToScale)[10],
              "spatial-reference": { wkid: 4326 }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(ZjBaseLayer, {
                    "min-scale": unref(levelToScale)[11],
                    "max-scale": unref(levelToScale)[18]
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(NbBaseLayer, {
                    "min-scale": unref(levelToScale)[11],
                    "max-scale": unref(levelToScale)[20]
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(ZjBaseLayer, {
                      "min-scale": unref(levelToScale)[11],
                      "max-scale": unref(levelToScale)[18]
                    }, null, 8, ["min-scale", "max-scale"]),
                    createVNode(NbBaseLayer, {
                      "min-scale": unref(levelToScale)[11],
                      "max-scale": unref(levelToScale)[20]
                    }, null, 8, ["min-scale", "max-scale"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VaTdtBasemap), {
                type: "vec_c",
                "min-scale": unref(levelToScale)[2],
                "max-scale": unref(levelToScale)[10],
                "spatial-reference": { wkid: 4326 }
              }, {
                default: withCtx(() => [
                  createVNode(ZjBaseLayer, {
                    "min-scale": unref(levelToScale)[11],
                    "max-scale": unref(levelToScale)[18]
                  }, null, 8, ["min-scale", "max-scale"]),
                  createVNode(NbBaseLayer, {
                    "min-scale": unref(levelToScale)[11],
                    "max-scale": unref(levelToScale)[20]
                  }, null, 8, ["min-scale", "max-scale"])
                ]),
                _: 1
              }, 8, ["min-scale", "max-scale"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/tdt-basemap/extends/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
