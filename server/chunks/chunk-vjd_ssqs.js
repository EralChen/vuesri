import { defineComponent, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VaTdtWmtsLayer } from "./chunk-5NdHo73U.js";
import { _ as _sfc_main$1 } from "./chunk-Y9HZwdAu.js";
import { V as VaMapView } from "./chunk-r6MU8tCx.js";
import { _ as _sfc_main$2 } from "./chunk-OjvQdFJg.js";
import { V as VaServerFeatureLayer } from "./chunk-rABMI5wi.js";
import "./chunk-xbOcex_F.js";
import "./chunk-MaQWsU9J.js";
import "@vunk/core/shared/utils-vue";
import "./chunk-KFNcxJaF.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-oD5XiDYU.js";
import "./chunk-rLRIqhK0.js";
import "vike/server";
import "vike-vue/usePageContext";
import "./chunk-8AIdLOXL.js";
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
import "@vunk/core/shared/utils-object";
import "./chunk-chuKOP2I.js";
import "mitt";
import "./chunk-AN2pNKfL.js";
import "./chunk-cQlS_KkA.js";
import "./chunk-B7M5Xqd5.js";
import "./chunk-qHSzybEP.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "basic",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VaMapView), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$1), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(VaTdtWmtsLayer), {
                    token: "ea84c6c360a5c297f06e8c8c568ea337",
                    type: "img_c",
                    orphan: true
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$2))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(VaTdtWmtsLayer), {
                    type: "cia_c",
                    orphan: true,
                    token: "ea84c6c360a5c297f06e8c8c568ea337"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$2))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(VaTdtWmtsLayer), {
                      token: "ea84c6c360a5c297f06e8c8c568ea337",
                      type: "img_c",
                      orphan: true
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$2))
                      ]),
                      _: 1
                    }),
                    createVNode(unref(VaTdtWmtsLayer), {
                      type: "cia_c",
                      orphan: true,
                      token: "ea84c6c360a5c297f06e8c8c568ea337"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$2))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VaServerFeatureLayer), { url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/US_National_Parks_Annual_Visitation/FeatureServer/0" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$1), null, {
                default: withCtx(() => [
                  createVNode(unref(VaTdtWmtsLayer), {
                    token: "ea84c6c360a5c297f06e8c8c568ea337",
                    type: "img_c",
                    orphan: true
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$2))
                    ]),
                    _: 1
                  }),
                  createVNode(unref(VaTdtWmtsLayer), {
                    type: "cia_c",
                    orphan: true,
                    token: "ea84c6c360a5c297f06e8c8c568ea337"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$2))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(VaServerFeatureLayer), { url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/US_National_Parks_Annual_Visitation/FeatureServer/0" }, null, 8, ["url"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/tdt-wmts-layer/basic.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
