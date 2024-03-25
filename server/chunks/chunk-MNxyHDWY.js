import { defineComponent, ref, resolveComponent, unref, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VaMapView } from "./chunk-6fAe7ZtF.js";
import { V as VaTdtBasemap } from "./chunk-XxvgZNck.js";
import { V as VaWmsLayer } from "./chunk-RUgugDuD.js";
import { VkRenderer } from "@vunk/core/components/renderer";
import { VkRendererTemplate } from "@vunk/core/components/renderer-template";
import _sfc_main$1 from "./chunk-7c1hFKQl.js";
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
import "./chunk-8CFIjXxc.js";
import "./chunk-bIq5xhw6.js";
import "./chunk-VS0cZDQt.js";
import "./chunk-_8aSZzrH.js";
import "./chunk-ZSpamg93.js";
import "./chunk-RQshD5bR.js";
import "./chunk-uYLXIHjo.js";
import "./chunk-AN2pNKfL.js";
import "./chunk-5WfSdRWZ.js";
import "./chunk-yCPoYwni.js";
import "./chunk-X_rfk1VD.js";
import "./chunk-ANxjAjSR.js";
import "./chunk-vvav8UfW.js";
import "./chunk-U1ea7-4d.js";
import "./chunk-Tuvo6ubl.js";
import "./chunk-utiawlkN.js";
import "./chunk-x7Vgxnqr.js";
import "./chunk-CTgLT-4V.js";
import "./chunk-LrwsxPyy.js";
import "./chunk-wa_PWVge.js";
import "./chunk-iZwZ9EU9.js";
import "./chunk-8WuUWlIZ.js";
import "./chunk-9IwRySYm.js";
import "./chunk-_oluUB0p.js";
import "./chunk-gvpbtdma.js";
import "./chunk-v-t_EqND.js";
import "./chunk-ZGB6GbeH.js";
import "./chunk-jT36EoyW.js";
import "./chunk-tCa8aS7W.js";
import "./chunk-ThA0hHfL.js";
import "./chunk-c7c2gizP.js";
import "./chunk-ggs_QHBV.js";
import "./chunk-NZ-e60VG.js";
import "./chunk-NDX-KDEx.js";
import "./chunk-RYbJjpM2.js";
import "./chunk-za8lbvAb.js";
import "./chunk-tGOnCZwP.js";
import "./chunk-ounOpSOX.js";
import "./chunk-vHf8RaFE.js";
import "./chunk-u_etbwnt.js";
import "./chunk-iGCIByDy.js";
import "./chunk-4GNTLucG.js";
import "./chunk-9KNzZOBs.js";
import "./chunk-pvYyIdE3.js";
import "./chunk-TKb6VnDe.js";
import "./chunk-0A6HSBpB.js";
import "./chunk-W5F64WU4.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const layerSouce = ref({
      layerType: "wms",
      url: "https://ows.terrestris.de/osm/service",
      layerName: "OSM-WMS"
    });
    const featureLayerSource = {
      layerType: "feature",
      url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/US_National_Parks_Annual_Visitation/FeatureServer/0"
    };
    const layerChange = () => {
      layerSouce.value = featureLayerSource;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElButton = resolveComponent("ElButton");
      _push(ssrRenderComponent(unref(VaMapView), mergeProps({ defaultOptions: {
        zoom: 2
      } }, _attrs), {
        before: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ElButton, { onClick: layerChange }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`change`);
                } else {
                  return [
                    createTextVNode("change")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</p>`);
          } else {
            return [
              createVNode("p", null, [
                createVNode(_component_ElButton, { onClick: layerChange }, {
                  default: withCtx(() => [
                    createTextVNode("change")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VaTdtBasemap), {
              type: "vec_w",
              anno: false,
              "spatial-reference": {
                wkid: 3857
              }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VkRenderer), {
              source: layerSouce.value,
              "type-field": "layerType"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(VkRendererTemplate), { type: "wms" }, {
                    default: withCtx(({ raw }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(VaWmsLayer), {
                          url: raw.url,
                          sublayers: [
                            {
                              name: raw.layerName
                            }
                          ]
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(VaWmsLayer), {
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(VkRendererTemplate), { type: "feature" }, {
                    default: withCtx(({ raw }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$1, {
                          url: raw.url
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$1, {
                            url: raw.url
                          }, null, 8, ["url"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(VkRendererTemplate), { type: "wms" }, {
                      default: withCtx(({ raw }) => [
                        createVNode(unref(VaWmsLayer), {
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
                    createVNode(unref(VkRendererTemplate), { type: "feature" }, {
                      default: withCtx(({ raw }) => [
                        createVNode(_sfc_main$1, {
                          url: raw.url
                        }, null, 8, ["url"])
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
                type: "vec_w",
                anno: false,
                "spatial-reference": {
                  wkid: 3857
                }
              }),
              createVNode(unref(VkRenderer), {
                source: layerSouce.value,
                "type-field": "layerType"
              }, {
                default: withCtx(() => [
                  createVNode(unref(VkRendererTemplate), { type: "wms" }, {
                    default: withCtx(({ raw }) => [
                      createVNode(unref(VaWmsLayer), {
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
                  createVNode(unref(VkRendererTemplate), { type: "feature" }, {
                    default: withCtx(({ raw }) => [
                      createVNode(_sfc_main$1, {
                        url: raw.url
                      }, null, 8, ["url"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["source"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/layer-renderer/custom/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
