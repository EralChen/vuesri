import { defineComponent, ref, resolveComponent, unref, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { V as VaMapView } from "./chunk-r6MU8tCx.js";
import { V as VaTdtBasemap } from "./chunk-2_8Nl9Hn.js";
import { V as VaMapImageLayer } from "./chunk-D7r-bXho.js";
import { fY as p, cL as y$1 } from "./chunk-KFNcxJaF.js";
import { V as VaSublayer } from "./chunk-MJ2lH7Ot.js";
import { V as VaPopupTemplate } from "./chunk-08vL7VDD.js";
import { waiting } from "@vunk/core/shared/utils-promise";
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
import "element-plus";
import "@vueuse/core";
import "@vunk/core/shared/utils-vue";
import "deepdash-es/standalone";
import "gsap";
import "@vunk/core/composables";
import "@vunk/core/components/client-only";
import "@element-plus/icons-vue";
import "./chunk-BSxDNfxQ.js";
import "./chunk-Y9HZwdAu.js";
import "./chunk-jzCtEhR4.js";
import "./chunk-LGmaep6O.js";
import "./chunk-MaQWsU9J.js";
import "./chunk-OjvQdFJg.js";
import "./chunk-AN2pNKfL.js";
import "./chunk-gcnOZdJc.js";
import "./chunk-5WMxrbI6.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-RYbJjpM2.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const sublayers = [];
    const sublayerLoad = async (e) => {
      const view = e.view;
      console.log(e.sublayer, "sublayer");
      await waiting(() => !!e.sublayer?.fullExtent);
      view.goTo(e.sublayer.fullExtent);
    };
    const renderer = new p({
      symbol: new y$1({
        color: "red"
      })
    });
    const definitionExpression = ref("1=1");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElButton = resolveComponent("ElButton");
      _push(ssrRenderComponent(unref(VaMapView), mergeProps({ defaultOptions: {
        zoom: 2
      } }, _attrs), {
        before: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ElButton, {
              onClick: ($event) => definitionExpression.value = `1=1`
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`1 = 1`);
                } else {
                  return [
                    createTextVNode("1 = 1")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElButton, {
              onClick: ($event) => definitionExpression.value = `1=0`
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`1 = 0`);
                } else {
                  return [
                    createTextVNode("1 = 0")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElButton, {
              onClick: ($event) => definitionExpression.value = `st='MO'`
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`st = MO`);
                } else {
                  return [
                    createTextVNode("st = MO")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</p>`);
          } else {
            return [
              createVNode("p", null, [
                createVNode(_component_ElButton, {
                  onClick: ($event) => definitionExpression.value = `1=1`
                }, {
                  default: withCtx(() => [
                    createTextVNode("1 = 1")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(_component_ElButton, {
                  onClick: ($event) => definitionExpression.value = `1=0`
                }, {
                  default: withCtx(() => [
                    createTextVNode("1 = 0")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(_component_ElButton, {
                  onClick: ($event) => definitionExpression.value = `st='MO'`
                }, {
                  default: withCtx(() => [
                    createTextVNode("st = MO")
                  ]),
                  _: 1
                }, 8, ["onClick"])
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
            _push2(ssrRenderComponent(unref(VaMapImageLayer), {
              sublayers,
              url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer"
            }, {
              when: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(VaSublayer), {
                    id: 0,
                    renderer: unref(renderer),
                    visible: true,
                    definitionExpression: definitionExpression.value,
                    onLoad: sublayerLoad
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(VaPopupTemplate), null, {
                          default: withCtx(({ attributes }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(attributes)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(attributes), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(VaPopupTemplate), null, {
                            default: withCtx(({ attributes }) => [
                              createTextVNode(toDisplayString(attributes), 1)
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
                    createVNode(unref(VaSublayer), {
                      id: 0,
                      renderer: unref(renderer),
                      visible: true,
                      definitionExpression: definitionExpression.value,
                      onLoad: sublayerLoad
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(VaPopupTemplate), null, {
                          default: withCtx(({ attributes }) => [
                            createTextVNode(toDisplayString(attributes), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["renderer", "definitionExpression"])
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
              createVNode(unref(VaMapImageLayer), {
                sublayers,
                url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer"
              }, {
                when: withCtx(() => [
                  createVNode(unref(VaSublayer), {
                    id: 0,
                    renderer: unref(renderer),
                    visible: true,
                    definitionExpression: definitionExpression.value,
                    onLoad: sublayerLoad
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(VaPopupTemplate), null, {
                        default: withCtx(({ attributes }) => [
                          createTextVNode(toDisplayString(attributes), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["renderer", "definitionExpression"])
                ]),
                _: 1
              }, 8, ["url"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/map-image-layer/sublayers/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
