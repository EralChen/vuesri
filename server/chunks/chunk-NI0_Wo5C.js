import { defineComponent, ref, unref, withCtx, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VaSceneView } from "./chunk-MFY2zKAf.js";
import { V as VaTileLayer } from "./chunk-IymnPBZM.js";
import { _ as _sfc_main$1 } from "./chunk-Y9HZwdAu.js";
import { _ as _sfc_main$2 } from "./chunk-OjvQdFJg.js";
import { V as VaTdtBasemap } from "./chunk-2_8Nl9Hn.js";
import { VkfRadio } from "@vunk/form/components/radio/index.js";
import { V as VaServerFeatureLayer } from "./chunk-rABMI5wi.js";
import "./chunk-KFNcxJaF.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "mitt";
import "./chunk-chuKOP2I.js";
import "./chunk-oD5XiDYU.js";
import "@vunk/core/shared/utils-class";
import "lodash-es";
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
import "@vunk/core/shared/utils-promise";
import "@vunk/core/components/client-only";
import "@element-plus/icons-vue";
import "./chunk-MaQWsU9J.js";
import "./chunk-5WMxrbI6.js";
import "./chunk-AN2pNKfL.js";
import "./chunk-gcnOZdJc.js";
import "./chunk-BSxDNfxQ.js";
import "./chunk-jzCtEhR4.js";
import "./chunk-LGmaep6O.js";
import "./chunk-cQlS_KkA.js";
import "./chunk-B7M5Xqd5.js";
import "./chunk-qHSzybEP.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const basemapType = ref("tdt");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VaSceneView), _attrs, {
        before: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VkfRadio), {
              modelValue: basemapType.value,
              "onUpdate:modelValue": ($event) => basemapType.value = $event,
              options: [
                { label: "天地图", value: "tdt" },
                { label: "自定义", value: "xTile" }
              ]
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VkfRadio), {
                modelValue: basemapType.value,
                "onUpdate:modelValue": ($event) => basemapType.value = $event,
                options: [
                  { label: "天地图", value: "tdt" },
                  { label: "自定义", value: "xTile" }
                ]
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (basemapType.value === "tdt") {
              _push2(ssrRenderComponent(unref(VaTdtBasemap), {
                type: "img_w",
                spatialReference: {
                  wkid: 3857
                }
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (basemapType.value === "xTile") {
              _push2(ssrRenderComponent(unref(_sfc_main$1), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(VaTileLayer), {
                      orphan: true,
                      url: "http://116.63.63.191:6080/arcgis/rest/services/SBWB/NB_DT3857/MapServer"
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
                      createVNode(unref(VaTileLayer), {
                        orphan: true,
                        url: "http://116.63.63.191:6080/arcgis/rest/services/SBWB/NB_DT3857/MapServer"
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
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(VaServerFeatureLayer), { url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/US_National_Parks_Annual_Visitation/FeatureServer/0" }, null, _parent2, _scopeId));
          } else {
            return [
              basemapType.value === "tdt" ? (openBlock(), createBlock(unref(VaTdtBasemap), {
                key: 0,
                type: "img_w",
                spatialReference: {
                  wkid: 3857
                }
              })) : createCommentVNode("", true),
              basemapType.value === "xTile" ? (openBlock(), createBlock(unref(_sfc_main$1), { key: 1 }, {
                default: withCtx(() => [
                  createVNode(unref(VaTileLayer), {
                    orphan: true,
                    url: "http://116.63.63.191:6080/arcgis/rest/services/SBWB/NB_DT3857/MapServer"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$2))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(unref(VaServerFeatureLayer), { url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/US_National_Parks_Annual_Visitation/FeatureServer/0" }, null, 8, ["url"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/basemap/change-basemap/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};