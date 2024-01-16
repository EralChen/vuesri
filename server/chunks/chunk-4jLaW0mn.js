import { defineComponent, ref, unref, mergeProps, withCtx, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1, a as _sfc_main$2 } from "./chunk-ounOpSOX.js";
import { V as VaMapView } from "./chunk-r6MU8tCx.js";
import "./chunk-v2Cj5Nes.js";
import { ElTree } from "element-plus";
import { V as VaViewUi } from "./chunk-4y4AoNcC.js";
import { V as VaMapImageLayer } from "./chunk-D7r-bXho.js";
import { V as VaServerFeatureLayer } from "./chunk-rABMI5wi.js";
import { V as VaTileLayer } from "./chunk-IymnPBZM.js";
import { l as lods } from "./chunk-jzCtEhR4.js";
import { V as VaTdtBasemap } from "./chunk-2_8Nl9Hn.js";
import "./chunk-KFNcxJaF.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-chuKOP2I.js";
import "./chunk-oD5XiDYU.js";
import "@vunk/core/shared/utils-class";
import "lodash-es";
import "mitt";
import "./chunk-rLRIqhK0.js";
import "vike/server";
import "vike-vue/usePageContext";
import "./chunk-8AIdLOXL.js";
import "path";
import "@vunk/core";
import "@vueuse/core";
import "@vunk/core/shared/utils-vue";
import "deepdash-es/standalone";
import "gsap";
import "@vunk/core/composables";
import "@vunk/core/shared/utils-promise";
import "@vunk/core/components/client-only";
import "@element-plus/icons-vue";
import "./chunk-vvav8UfW.js";
import "./chunk-MaQWsU9J.js";
import "./chunk-gcnOZdJc.js";
import "./chunk-AN2pNKfL.js";
import "./chunk-5WMxrbI6.js";
import "./chunk-cQlS_KkA.js";
import "./chunk-B7M5Xqd5.js";
import "./chunk-qHSzybEP.js";
import "./chunk-LGmaep6O.js";
import "./chunk-BSxDNfxQ.js";
import "./chunk-Y9HZwdAu.js";
import "./chunk-OjvQdFJg.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "basic",
  __ssrInlineRender: true,
  setup(__props) {
    const mapViewOptions = {
      constraints: {
        lods: lods.slice(2, 19)
      }
    };
    const treeData = ref([
      {
        label: "我的图层",
        children: [
          {
            label: "xx",
            children: [
              {
                label: "河流",
                layer: {
                  type: "MapImageLayer",
                  url: "http://116.63.63.191:6080/arcgis/rest/services/test_server/test_polygon1/MapServer"
                }
              },
              {
                label: "美洲",
                layer: {
                  type: "FeatureLayer",
                  url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/US_National_Parks_Annual_Visitation/FeatureServer/0"
                }
              }
            ]
          },
          {
            label: "点位",
            layer: {
              type: "FeatureLayer",
              url: "http://116.63.63.191:6080/arcgis/rest/services/test_server/test_point2/MapServer"
            }
          }
        ]
      },
      {
        label: "宁波",
        layer: {
          type: "TileLayer",
          url: "http://116.63.63.191:6080/arcgis/rest/services/SBWB/NB_DT3857/MapServer"
        }
      }
    ]);
    const checkChange = (data, checked) => {
      if (data.layer) {
        data.layer.if = true;
        data.layer.visible = checked;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VaMapView), mergeProps({ "default-options": mapViewOptions }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VaTdtBasemap), {
              type: "img_w",
              "spatial-reference": { wkid: 102100 }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VaViewUi), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ElTree), {
                    data: treeData.value,
                    "show-checkbox": "",
                    onCheckChange: checkChange,
                    "render-after-expand": false
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(ElTree), {
                      data: treeData.value,
                      "show-checkbox": "",
                      onCheckChange: checkChange,
                      "render-after-expand": false
                    }, null, 8, ["data"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$1), { data: treeData.value }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$2), { type: "MapImageLayer" }, {
                    default: withCtx(({ layer }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (layer.if) {
                          _push4(ssrRenderComponent(unref(VaMapImageLayer), {
                            url: layer.url,
                            visible: layer.visible
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          layer.if ? (openBlock(), createBlock(unref(VaMapImageLayer), {
                            key: 0,
                            url: layer.url,
                            visible: layer.visible
                          }, null, 8, ["url", "visible"])) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$2), { type: "FeatureLayer" }, {
                    default: withCtx(({ layer }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (layer.if) {
                          _push4(ssrRenderComponent(unref(VaServerFeatureLayer), {
                            url: layer.url,
                            visible: layer.visible
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          layer.if ? (openBlock(), createBlock(unref(VaServerFeatureLayer), {
                            key: 0,
                            url: layer.url,
                            visible: layer.visible
                          }, null, 8, ["url", "visible"])) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$2), { type: "TileLayer" }, {
                    default: withCtx(({ layer }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (layer.if) {
                          _push4(ssrRenderComponent(unref(VaTileLayer), {
                            url: layer.url,
                            visible: layer.visible
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          layer.if ? (openBlock(), createBlock(unref(VaTileLayer), {
                            key: 0,
                            url: layer.url,
                            visible: layer.visible
                          }, null, 8, ["url", "visible"])) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$2), { type: "MapImageLayer" }, {
                      default: withCtx(({ layer }) => [
                        layer.if ? (openBlock(), createBlock(unref(VaMapImageLayer), {
                          key: 0,
                          url: layer.url,
                          visible: layer.visible
                        }, null, 8, ["url", "visible"])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$2), { type: "FeatureLayer" }, {
                      default: withCtx(({ layer }) => [
                        layer.if ? (openBlock(), createBlock(unref(VaServerFeatureLayer), {
                          key: 0,
                          url: layer.url,
                          visible: layer.visible
                        }, null, 8, ["url", "visible"])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$2), { type: "TileLayer" }, {
                      default: withCtx(({ layer }) => [
                        layer.if ? (openBlock(), createBlock(unref(VaTileLayer), {
                          key: 0,
                          url: layer.url,
                          visible: layer.visible
                        }, null, 8, ["url", "visible"])) : createCommentVNode("", true)
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
                type: "img_w",
                "spatial-reference": { wkid: 102100 }
              }),
              createVNode(unref(VaViewUi), null, {
                default: withCtx(() => [
                  createVNode(unref(ElTree), {
                    data: treeData.value,
                    "show-checkbox": "",
                    onCheckChange: checkChange,
                    "render-after-expand": false
                  }, null, 8, ["data"])
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$1), { data: treeData.value }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$2), { type: "MapImageLayer" }, {
                    default: withCtx(({ layer }) => [
                      layer.if ? (openBlock(), createBlock(unref(VaMapImageLayer), {
                        key: 0,
                        url: layer.url,
                        visible: layer.visible
                      }, null, 8, ["url", "visible"])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$2), { type: "FeatureLayer" }, {
                    default: withCtx(({ layer }) => [
                      layer.if ? (openBlock(), createBlock(unref(VaServerFeatureLayer), {
                        key: 0,
                        url: layer.url,
                        visible: layer.visible
                      }, null, 8, ["url", "visible"])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$2), { type: "TileLayer" }, {
                    default: withCtx(({ layer }) => [
                      layer.if ? (openBlock(), createBlock(unref(VaTileLayer), {
                        key: 0,
                        url: layer.url,
                        visible: layer.visible
                      }, null, 8, ["url", "visible"])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["data"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/tree-layer-group/basic.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
