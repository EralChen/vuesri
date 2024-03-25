import { defineComponent, unref, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VaSceneView } from "./chunk-8WuUWlIZ.js";
import { V as VaTdtBasemap } from "./chunk-XxvgZNck.js";
import { _ as _sfc_main$1 } from "./chunk-bIq5xhw6.js";
import { V as VaBasemapToggle } from "./chunk-X_rfk1VD.js";
import { _ as _sfc_main$2 } from "./chunk-U1ea7-4d.js";
import { V as VaTileLayer } from "./chunk-Tuvo6ubl.js";
import { _ as _sfc_main$3 } from "./chunk-uYLXIHjo.js";
import "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-3BageVRQ.js";
import "mitt";
import "./chunk-4l9VVe6n.js";
import "./chunk-oD5XiDYU.js";
import "@vunk/core/shared/utils-class";
import "lodash-es";
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
import "./chunk-8CFIjXxc.js";
import "./chunk-VS0cZDQt.js";
import "./chunk-_8aSZzrH.js";
import "./chunk-ZSpamg93.js";
import "./chunk-RQshD5bR.js";
import "./chunk-ANxjAjSR.js";
import "./chunk-vvav8UfW.js";
import "./chunk-utiawlkN.js";
import "./chunk-AN2pNKfL.js";
import "./chunk-x7Vgxnqr.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "basemap",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VaSceneView), mergeProps({ defaultOptions: {
        center: [121, 29],
        zoom: 7
      } }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VaTdtBasemap), {
              type: "img_w",
              spatialReference: {
                wkid: 3857
              }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VaBasemapToggle), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$1), {
                    orphan: true,
                    thumbnailUrl: "https://neimenggu.tianditu.gov.cn/static/map/vec.jpg"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(VaTileLayer), {
                          orphan: true,
                          url: "http://116.63.63.191:6080/arcgis/rest/services/SBWB/NB_DT3857/MapServer"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$3))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$2)),
                          createVNode(unref(VaTileLayer), {
                            orphan: true,
                            url: "http://116.63.63.191:6080/arcgis/rest/services/SBWB/NB_DT3857/MapServer"
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$1), {
                      orphan: true,
                      thumbnailUrl: "https://neimenggu.tianditu.gov.cn/static/map/vec.jpg"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$2)),
                        createVNode(unref(VaTileLayer), {
                          orphan: true,
                          url: "http://116.63.63.191:6080/arcgis/rest/services/SBWB/NB_DT3857/MapServer"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$3))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["thumbnailUrl"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VaTdtBasemap), {
                type: "img_w",
                spatialReference: {
                  wkid: 3857
                }
              }),
              createVNode(unref(VaBasemapToggle), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$1), {
                    orphan: true,
                    thumbnailUrl: "https://neimenggu.tianditu.gov.cn/static/map/vec.jpg"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$2)),
                      createVNode(unref(VaTileLayer), {
                        orphan: true,
                        url: "http://116.63.63.191:6080/arcgis/rest/services/SBWB/NB_DT3857/MapServer"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$3))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["thumbnailUrl"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/basemap-toggle/basemap.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
