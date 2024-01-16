import { defineComponent, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VaTdtWebTileLayer } from "./chunk-jzCtEhR4.js";
import { _ as _sfc_main$1 } from "./chunk-Y9HZwdAu.js";
import { V as VaMapView } from "./chunk-r6MU8tCx.js";
import { _ as _sfc_main$2 } from "./chunk-OjvQdFJg.js";
import "./chunk-LGmaep6O.js";
import "./chunk-MaQWsU9J.js";
import "@vunk/core/shared/utils-vue";
import "./chunk-KFNcxJaF.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-oD5XiDYU.js";
import "./chunk-BSxDNfxQ.js";
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
import "./chunk-chuKOP2I.js";
import "mitt";
import "./chunk-AN2pNKfL.js";
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
                  _push3(ssrRenderComponent(unref(VaTdtWebTileLayer), {
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
                  _push3(ssrRenderComponent(unref(VaTdtWebTileLayer), {
                    type: "cia_c",
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
                    createVNode(unref(VaTdtWebTileLayer), {
                      type: "img_c",
                      orphan: true
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$2))
                      ]),
                      _: 1
                    }),
                    createVNode(unref(VaTdtWebTileLayer), {
                      type: "cia_c",
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
                  createVNode(unref(VaTdtWebTileLayer), {
                    type: "img_c",
                    orphan: true
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$2))
                    ]),
                    _: 1
                  }),
                  createVNode(unref(VaTdtWebTileLayer), {
                    type: "cia_c",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/tdt-web-tile-layer/basic.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
