import { defineComponent, unref, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VaSceneView } from "./chunk-8WuUWlIZ.js";
import { V as VaTdtBasemap } from "./chunk-XxvgZNck.js";
import { V as VaServerFeatureLayer } from "./chunk-LrwsxPyy.js";
import { V as VaFeaturePopupLayer } from "./chunk-ThA0hHfL.js";
import { V as VaViewWhen } from "./chunk-iZwZ9EU9.js";
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
import "./chunk-bIq5xhw6.js";
import "./chunk-VS0cZDQt.js";
import "./chunk-_8aSZzrH.js";
import "./chunk-ZSpamg93.js";
import "./chunk-RQshD5bR.js";
import "./chunk-uYLXIHjo.js";
import "./chunk-AN2pNKfL.js";
import "./chunk-wa_PWVge.js";
import "./chunk-yCPoYwni.js";
import "./chunk-jT36EoyW.js";
import "./chunk-ANxjAjSR.js";
import "./chunk-vvav8UfW.js";
const url = "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/US_National_Parks_Annual_Visitation/FeatureServer/0";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "out-spatial-reference",
  __ssrInlineRender: true,
  setup(__props) {
    const layerLoad = async (e) => {
      const view = e.view;
      await e.layer.when();
      view.goTo(e.layer.fullExtent);
    };
    const layerClick = async (e) => {
      const { result } = e;
      if (result) {
        console.log(result);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VaSceneView), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VaTdtBasemap), {
              type: "vec_c",
              "spatial-reference": { wkid: 4490 }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VaServerFeatureLayer), {
              cursor: "pointer",
              url,
              onLoad: layerLoad,
              onClick: layerClick
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(VaViewWhen), null, {
                    default: withCtx(({ view }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(VaFeaturePopupLayer), {
                          class: "fpl-demo",
                          query: {
                            outSpatialReference: view.spatialReference
                          }
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` aaaabbb `);
                            } else {
                              return [
                                createTextVNode(" aaaabbb ")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(VaFeaturePopupLayer), {
                            class: "fpl-demo",
                            query: {
                              outSpatialReference: view.spatialReference
                            }
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" aaaabbb ")
                            ]),
                            _: 2
                          }, 1032, ["query"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(VaViewWhen), null, {
                      default: withCtx(({ view }) => [
                        createVNode(unref(VaFeaturePopupLayer), {
                          class: "fpl-demo",
                          query: {
                            outSpatialReference: view.spatialReference
                          }
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" aaaabbb ")
                          ]),
                          _: 2
                        }, 1032, ["query"])
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
              createVNode(unref(VaTdtBasemap), {
                type: "vec_c",
                "spatial-reference": { wkid: 4490 }
              }),
              createVNode(unref(VaServerFeatureLayer), {
                cursor: "pointer",
                url,
                onLoad: layerLoad,
                onClick: layerClick
              }, {
                default: withCtx(() => [
                  createVNode(unref(VaViewWhen), null, {
                    default: withCtx(({ view }) => [
                      createVNode(unref(VaFeaturePopupLayer), {
                        class: "fpl-demo",
                        query: {
                          outSpatialReference: view.spatialReference
                        }
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" aaaabbb ")
                        ]),
                        _: 2
                      }, 1032, ["query"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/feature-popup-layer/out-spatial-reference.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};