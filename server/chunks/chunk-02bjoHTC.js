import { defineComponent, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./chunk-_8aSZzrH.js";
import { V as VaSceneView } from "./chunk-8WuUWlIZ.js";
import { _ as _sfc_main$1 } from "./chunk-bIq5xhw6.js";
import { _ as _sfc_main$3 } from "./chunk-uYLXIHjo.js";
import "./chunk-ZSpamg93.js";
import "@vunk/core/shared/utils-vue";
import "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-3BageVRQ.js";
import "./chunk-RQshD5bR.js";
import "@vunk/core/shared/utils-class";
import "./chunk-oD5XiDYU.js";
import "mitt";
import "./chunk-4l9VVe6n.js";
import "lodash-es";
import "./chunk-x8u7LPTa.js";
import "vike/server";
import "vike-vue/usePageContext";
import "./chunk-vndPU1ZH.js";
import "path";
import "@vunk/core";
import "element-plus";
import "@vueuse/core";
import "deepdash-es/standalone";
import "gsap";
import "@vunk/core/composables";
import "@vunk/core/shared/utils-promise";
import "@vunk/core/components/client-only";
import "@element-plus/icons-vue";
import "./chunk-AN2pNKfL.js";
const type = "img_w";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "basic",
  __ssrInlineRender: true,
  setup(__props) {
    const baseTypeInfo = type.split("_");
    const baseLayer = baseTypeInfo[0];
    const typeSR = baseTypeInfo[1];
    const subDomains = ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"];
    const defaultOptions = {
      subDomains,
      urlTemplate: `https://{subDomain}.tianditu.gov.cn/${type}/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=${baseLayer}&STYLE=default&TILEMATRIXSET=${typeSR}&FORMAT=tiles&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}&tk=f0175927031c1e12cb804b0c3b8cce4d`
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VaSceneView), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$1), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$2), {
                    "default-options": defaultOptions,
                    orphan: true
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$3))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$2), {
                      "default-options": defaultOptions,
                      orphan: true
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$3))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$1), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$2), {
                    "default-options": defaultOptions,
                    orphan: true
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$3))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/web-tile-layer/basic.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};