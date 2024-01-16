import { defineComponent, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { VkAsyncTeleport } from "@vunk/core";
import { V as VaSketch } from "./chunk-WRGOaKKa.js";
import { V as VaMapView } from "./chunk-r6MU8tCx.js";
import { V as VaTdtBasemap } from "./chunk-2_8Nl9Hn.js";
import { DocumentChecked } from "@element-plus/icons-vue";
import { ElIcon, ElMessage } from "element-plus";
import "@vunk/core/shared/utils-vue";
import "./chunk-oD5XiDYU.js";
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
import "@vueuse/core";
import "@vunk/core/shared/utils-class";
import "deepdash-es/standalone";
import "gsap";
import "@vunk/core/composables";
import "lodash-es";
import "@vunk/core/shared/utils-promise";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const doSave = () => {
      ElMessage({
        type: "success",
        message: "Saved!"
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VaMapView), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VaTdtBasemap), null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VaSketch), { class: "esri-sketch-with-save" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(VkAsyncTeleport), {
                    to: ".esri-sketch-with-save .esri-sketch__panel",
                    sleep: 2400
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="esri-sketch__section"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(ElIcon), {
                          class: "esri-sketch-ui-save esri-widget--button",
                          onClick: doSave
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(DocumentChecked), null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(DocumentChecked))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "esri-sketch__section" }, [
                            createVNode(unref(ElIcon), {
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(VkAsyncTeleport), {
                      to: ".esri-sketch-with-save .esri-sketch__panel",
                      sleep: 2400
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "esri-sketch__section" }, [
                          createVNode(unref(ElIcon), {
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VaTdtBasemap)),
              createVNode(unref(VaSketch), { class: "esri-sketch-with-save" }, {
                default: withCtx(() => [
                  createVNode(unref(VkAsyncTeleport), {
                    to: ".esri-sketch-with-save .esri-sketch__panel",
                    sleep: 2400
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "esri-sketch__section" }, [
                        createVNode(unref(ElIcon), {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/sketch/add-ui/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
