import { defineComponent, ref, shallowRef, watch, resolveComponent, withCtx, createTextVNode, unref, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { V as VaSketch } from "./chunk-WRGOaKKa.js";
import { V as VaMapView } from "./chunk-r6MU8tCx.js";
import { V as VaTdtBasemap } from "./chunk-2_8Nl9Hn.js";
import { u as useView } from "./chunk-oD5XiDYU.js";
import { Deferred } from "@vunk/core/shared/utils-promise";
import { VkAsyncTeleport } from "@vunk/core";
import { DocumentChecked } from "@element-plus/icons-vue";
import { V as VaGraphicsLayer } from "./chunk-2T2aQ3cG.js";
import "@vunk/core/shared/utils-vue";
import "./chunk-KFNcxJaF.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-4y4AoNcC.js";
import "./chunk-vvav8UfW.js";
import "./chunk-rLRIqhK0.js";
import "vike/server";
import "vike-vue/usePageContext";
import "./chunk-8AIdLOXL.js";
import "path";
import "element-plus";
import "@vueuse/core";
import "@vunk/core/shared/utils-class";
import "deepdash-es/standalone";
import "gsap";
import "@vunk/core/composables";
import "lodash-es";
import "@vunk/core/components/client-only";
import "./chunk-ggs_QHBV.js";
import "./chunk-chuKOP2I.js";
import "mitt";
import "./chunk-BSxDNfxQ.js";
import "./chunk-Y9HZwdAu.js";
import "./chunk-jzCtEhR4.js";
import "./chunk-LGmaep6O.js";
import "./chunk-MaQWsU9J.js";
import "./chunk-OjvQdFJg.js";
import "./chunk-AN2pNKfL.js";
import "./chunk-B7M5Xqd5.js";
import "./chunk-qHSzybEP.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "dialog-sketch",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: Array,
      default: () => []
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const dialogShow = ref(false);
    const pView = useView();
    const viewDef = new Deferred();
    pView.watch("extent", async (e) => {
      if (dialogShow.value)
        return;
      const view = await viewDef.promise;
      view.extent = e;
    });
    viewDef.promise.then((view) => {
      view.watch("extent", (e) => {
        if (dialogShow.value) {
          pView.extent = e.extent;
        }
      });
    });
    const layerGraphics = shallowRef(props.modelValue.map((item) => item.clone()));
    watch(() => props.modelValue, (gs) => {
      layerGraphics.value = gs.map((item) => item.clone());
    });
    const doSave = () => {
      emit(
        "update:modelValue",
        layerGraphics.value
      );
      dialogShow.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElButton = resolveComponent("ElButton");
      const _component_ElDialog = resolveComponent("ElDialog");
      const _component_ElIcon = resolveComponent("ElIcon");
      _push(`<!--[--><p>`);
      _push(ssrRenderComponent(_component_ElButton, {
        onClick: ($event) => dialogShow.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`open`);
          } else {
            return [
              createTextVNode("open")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p>`);
      _push(ssrRenderComponent(_component_ElDialog, {
        title: "绘制图斑",
        modelValue: dialogShow.value,
        "onUpdate:modelValue": ($event) => dialogShow.value = $event,
        draggable: true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VaMapView), {
              onLoad: (e) => unref(viewDef).resolve(e.view)
            }, {
              after: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(layerGraphics.value.map((item) => item.geometry))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(layerGraphics.value.map((item) => item.geometry)), 1)
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(VaTdtBasemap), {
                    type: "img_w",
                    anno: false,
                    "spatial-reference": {
                      wkid: 3857
                    }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(VaGraphicsLayer), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(VaSketch), {
                          class: "esri-sketch-dialog-with-save",
                          modelValue: layerGraphics.value,
                          "onUpdate:modelValue": ($event) => layerGraphics.value = $event
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(VkAsyncTeleport), {
                                to: ".esri-sketch-dialog-with-save .esri-sketch__panel",
                                sleep: 800
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="esri-sketch__section"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_ElIcon, {
                                      class: "esri-sketch-ui-save esri-widget--button",
                                      onClick: doSave
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(DocumentChecked), null, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(unref(DocumentChecked))
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "esri-sketch__section" }, [
                                        createVNode(_component_ElIcon, {
                                          class: "esri-sketch-ui-save esri-widget--button",
                                          onClick: doSave
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(DocumentChecked))
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(VkAsyncTeleport), {
                                  to: ".esri-sketch-dialog-with-save .esri-sketch__panel",
                                  sleep: 800
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "esri-sketch__section" }, [
                                      createVNode(_component_ElIcon, {
                                        class: "esri-sketch-ui-save esri-widget--button",
                                        onClick: doSave
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(DocumentChecked))
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ]),
                                  _: 1
                                }, 8, ["to"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(VaSketch), {
                            class: "esri-sketch-dialog-with-save",
                            modelValue: layerGraphics.value,
                            "onUpdate:modelValue": ($event) => layerGraphics.value = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(VkAsyncTeleport), {
                                to: ".esri-sketch-dialog-with-save .esri-sketch__panel",
                                sleep: 800
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "esri-sketch__section" }, [
                                    createVNode(_component_ElIcon, {
                                      class: "esri-sketch-ui-save esri-widget--button",
                                      onClick: doSave
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(DocumentChecked))
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ]),
                                _: 1
                              }, 8, ["to"])
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(VaTdtBasemap), {
                      type: "img_w",
                      anno: false,
                      "spatial-reference": {
                        wkid: 3857
                      }
                    }),
                    createVNode(unref(VaGraphicsLayer), null, {
                      default: withCtx(() => [
                        createVNode(unref(VaSketch), {
                          class: "esri-sketch-dialog-with-save",
                          modelValue: layerGraphics.value,
                          "onUpdate:modelValue": ($event) => layerGraphics.value = $event
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(VkAsyncTeleport), {
                              to: ".esri-sketch-dialog-with-save .esri-sketch__panel",
                              sleep: 800
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "esri-sketch__section" }, [
                                  createVNode(_component_ElIcon, {
                                    class: "esri-sketch-ui-save esri-widget--button",
                                    onClick: doSave
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(DocumentChecked))
                                    ]),
                                    _: 1
                                  })
                                ])
                              ]),
                              _: 1
                            }, 8, ["to"])
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
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
              createVNode(unref(VaMapView), {
                onLoad: (e) => unref(viewDef).resolve(e.view)
              }, {
                after: withCtx(() => [
                  createTextVNode(toDisplayString(layerGraphics.value.map((item) => item.geometry)), 1)
                ]),
                default: withCtx(() => [
                  createVNode(unref(VaTdtBasemap), {
                    type: "img_w",
                    anno: false,
                    "spatial-reference": {
                      wkid: 3857
                    }
                  }),
                  createVNode(unref(VaGraphicsLayer), null, {
                    default: withCtx(() => [
                      createVNode(unref(VaSketch), {
                        class: "esri-sketch-dialog-with-save",
                        modelValue: layerGraphics.value,
                        "onUpdate:modelValue": ($event) => layerGraphics.value = $event
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(VkAsyncTeleport), {
                            to: ".esri-sketch-dialog-with-save .esri-sketch__panel",
                            sleep: 800
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "esri-sketch__section" }, [
                                createVNode(_component_ElIcon, {
                                  class: "esri-sketch-ui-save esri-widget--button",
                                  onClick: doSave
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(DocumentChecked))
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            _: 1
                          }, 8, ["to"])
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["onLoad"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/sketch/dialog/dialog-sketch.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
