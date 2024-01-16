import { defineComponent, ref, resolveComponent, unref, mergeProps, withCtx, createTextVNode, createVNode, openBlock, createBlock, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1, a as _sfc_main$2 } from "./chunk-ounOpSOX.js";
import { V as VaMapView } from "./chunk-r6MU8tCx.js";
import "./chunk-v2Cj5Nes.js";
import { ElTree } from "element-plus";
import { V as VaViewUi } from "./chunk-4y4AoNcC.js";
import { V as VaServerFeatureLayer } from "./chunk-rABMI5wi.js";
import { V as VaMapImageLayer } from "./chunk-D7r-bXho.js";
import { V as VaSublayer } from "./chunk-MJ2lH7Ot.js";
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
import "./chunk-cQlS_KkA.js";
import "./chunk-B7M5Xqd5.js";
import "./chunk-AN2pNKfL.js";
import "./chunk-qHSzybEP.js";
import "./chunk-gcnOZdJc.js";
import "./chunk-5WMxrbI6.js";
import "./chunk-RYbJjpM2.js";
import "./chunk-LGmaep6O.js";
import "./chunk-BSxDNfxQ.js";
import "./chunk-Y9HZwdAu.js";
import "./chunk-OjvQdFJg.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "del",
  __ssrInlineRender: true,
  setup(__props) {
    const fullExtent = {
      xmin: 121.73886453000011,
      ymin: 29.76753505000005,
      xmax: 122.04663644800003,
      ymax: 29.960934498000025,
      spatialReference: {
        wkid: 4326
      }
    };
    const mapViewOptions = {
      constraints: {
        lods: lods.slice(2, 19)
      },
      extent: fullExtent
    };
    const data = [
      // {
      //   label: '河道',
      //   layer: {
      //     type: 'FeatureLayer',
      //     url: 'http://192.168.110.119:6080/arcgis/rest/services/BLYSBZ/BLYPZS/MapServer/4',
      //     if: true,
      //     visible: true,
      //   },
      // },
      // {
      //   label: '水域',
      //   layer: {
      //     type: 'FeatureLayer',
      //     url: 'http://192.168.110.119:6080/arcgis/rest/services/BLYSBZ/BLYPZS/MapServer/3',
      //     if: true,
      //     visible: true,
      //     index: 1,
      //   },
      // },
      {
        label: "林地一张图更新",
        layer: {
          url: "http://192.168.110.119:6080/arcgis/rest/services/BLYSBZ/BLYPZS/MapServer",
          type: "MapImageLayer",
          if: true,
          id: 6,
          visible: true,
          index: 2
        }
      },
      {
        label: "村庄",
        layer: {
          url: "http://192.168.110.119:6080/arcgis/rest/services/BLYSBZ/BLYPZS/MapServer/18",
          type: "FeatureLayer",
          if: true,
          visible: true,
          index: 1
        }
      }
    ];
    const treeData = ref([]);
    const delFirst = () => {
      treeData.value = treeData.value.slice(1);
    };
    const delLast = () => {
      treeData.value = treeData.value.slice(0, -1);
    };
    const sublayers = [];
    const changeIndex = () => {
      const i = treeData.value.findIndex((item, index) => {
        return item.label === "村庄";
      });
      if (i + 1) {
        const layer = treeData.value[i]?.layer;
        layer.index = 99;
        console.log(layer);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElButton = resolveComponent("ElButton");
      _push(ssrRenderComponent(unref(VaMapView), mergeProps({ "default-options": mapViewOptions }, _attrs), {
        before: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElButton, {
              onClick: ($event) => treeData.value.unshift(data[0])
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`add1`);
                } else {
                  return [
                    createTextVNode("add1")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElButton, { onClick: delFirst }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`delF `);
                } else {
                  return [
                    createTextVNode("delF ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElButton, { onClick: delLast }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`delL `);
                } else {
                  return [
                    createTextVNode("delL ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElButton, {
              onClick: ($event) => treeData.value = [...data]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`xxx`);
                } else {
                  return [
                    createTextVNode("xxx")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElButton, { onClick: changeIndex }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`changeIndex`);
                } else {
                  return [
                    createTextVNode("changeIndex")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElButton, {
                onClick: ($event) => treeData.value.unshift(data[0])
              }, {
                default: withCtx(() => [
                  createTextVNode("add1")
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_component_ElButton, { onClick: delFirst }, {
                default: withCtx(() => [
                  createTextVNode("delF ")
                ]),
                _: 1
              }),
              createVNode(_component_ElButton, { onClick: delLast }, {
                default: withCtx(() => [
                  createTextVNode("delL ")
                ]),
                _: 1
              }),
              createVNode(_component_ElButton, {
                onClick: ($event) => treeData.value = [...data]
              }, {
                default: withCtx(() => [
                  createTextVNode("xxx")
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_component_ElButton, { onClick: changeIndex }, {
                default: withCtx(() => [
                  createTextVNode("changeIndex")
                ]),
                _: 1
              })
            ];
          }
        }),
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
                    "render-after-expand": false
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(ElTree), {
                      data: treeData.value,
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
                  _push3(ssrRenderComponent(unref(_sfc_main$2), { type: "FeatureLayer" }, {
                    default: withCtx(({ layer }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(VaServerFeatureLayer), {
                          key: layer.url,
                          url: layer.url,
                          visible: layer.visible,
                          index: layer.index
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          (openBlock(), createBlock(unref(VaServerFeatureLayer), {
                            key: layer.url,
                            url: layer.url,
                            visible: layer.visible,
                            index: layer.index
                          }, null, 8, ["url", "visible", "index"]))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$2), { type: "MapImageLayer" }, {
                    default: withCtx(({ layer }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(VaMapImageLayer), {
                          key: layer.url,
                          url: layer.url,
                          visible: layer.visible,
                          sublayers,
                          index: layer.index
                        }, {
                          when: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(VaSublayer), {
                                id: layer.id,
                                visible: true
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(VaSublayer), {
                                  id: layer.id,
                                  visible: true
                                }, null, 8, ["id"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          (openBlock(), createBlock(unref(VaMapImageLayer), {
                            key: layer.url,
                            url: layer.url,
                            visible: layer.visible,
                            sublayers,
                            index: layer.index
                          }, {
                            when: withCtx(() => [
                              createVNode(unref(VaSublayer), {
                                id: layer.id,
                                visible: true
                              }, null, 8, ["id"])
                            ]),
                            _: 2
                          }, 1032, ["url", "visible", "index"]))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$2), { type: "FeatureLayer" }, {
                      default: withCtx(({ layer }) => [
                        (openBlock(), createBlock(unref(VaServerFeatureLayer), {
                          key: layer.url,
                          url: layer.url,
                          visible: layer.visible,
                          index: layer.index
                        }, null, 8, ["url", "visible", "index"]))
                      ]),
                      _: 1
                    }),
                    createVNode(unref(_sfc_main$2), { type: "MapImageLayer" }, {
                      default: withCtx(({ layer }) => [
                        (openBlock(), createBlock(unref(VaMapImageLayer), {
                          key: layer.url,
                          url: layer.url,
                          visible: layer.visible,
                          sublayers,
                          index: layer.index
                        }, {
                          when: withCtx(() => [
                            createVNode(unref(VaSublayer), {
                              id: layer.id,
                              visible: true
                            }, null, 8, ["id"])
                          ]),
                          _: 2
                        }, 1032, ["url", "visible", "index"]))
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
                    "render-after-expand": false
                  }, null, 8, ["data"])
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$1), { data: treeData.value }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$2), { type: "FeatureLayer" }, {
                    default: withCtx(({ layer }) => [
                      (openBlock(), createBlock(unref(VaServerFeatureLayer), {
                        key: layer.url,
                        url: layer.url,
                        visible: layer.visible,
                        index: layer.index
                      }, null, 8, ["url", "visible", "index"]))
                    ]),
                    _: 1
                  }),
                  createVNode(unref(_sfc_main$2), { type: "MapImageLayer" }, {
                    default: withCtx(({ layer }) => [
                      (openBlock(), createBlock(unref(VaMapImageLayer), {
                        key: layer.url,
                        url: layer.url,
                        visible: layer.visible,
                        sublayers,
                        index: layer.index
                      }, {
                        when: withCtx(() => [
                          createVNode(unref(VaSublayer), {
                            id: layer.id,
                            visible: true
                          }, null, 8, ["id"])
                        ]),
                        _: 2
                      }, 1032, ["url", "visible", "index"]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/tree-layer-group/del.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
