import { defineComponent, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VaTdtWmtsLayer } from "./chunk-oGLSSAFH.js";
import { _ as _sfc_main$1 } from "./chunk-bIq5xhw6.js";
import { V as VaMapView } from "./chunk-6fAe7ZtF.js";
import { _ as _sfc_main$2 } from "./chunk-uYLXIHjo.js";
import { u as useRequestInterceptor } from "./chunk-0A6HSBpB.js";
import "./chunk-TKb6VnDe.js";
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
import "lodash-es";
import "@vunk/core/shared/utils-promise";
import "@vunk/core/components/client-only";
import "@element-plus/icons-vue";
import "@vunk/core/shared/utils-object";
import "./chunk-4l9VVe6n.js";
import "mitt";
import "./chunk-AN2pNKfL.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "scene-view",
  __ssrInlineRender: true,
  setup(__props) {
    const base = "/vuesri/";
    const url = window.origin + base + "data/cellwrap.json";
    const { interceptorToggle } = useRequestInterceptor({
      urls: [url],
      before(e) {
        e.requestOptions.headers = {
          "vuersi": "v1.0.3"
        };
      },
      after(res) {
        res.data = res.data.data;
      }
    });
    interceptorToggle.add();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VaMapView), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$1), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(VaTdtWmtsLayer), {
                    token: "ea84c6c360a5c297f06e8c8c568ea337",
                    type: "img_w",
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
                } else {
                  return [
                    createVNode(unref(VaTdtWmtsLayer), {
                      token: "ea84c6c360a5c297f06e8c8c568ea337",
                      type: "img_w",
                      orphan: true
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
          } else {
            return [
              createVNode(unref(_sfc_main$1), null, {
                default: withCtx(() => [
                  createVNode(unref(VaTdtWmtsLayer), {
                    token: "ea84c6c360a5c297f06e8c8c568ea337",
                    type: "img_w",
                    orphan: true
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$2))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/tdt-wmts-layer/scene-view.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
