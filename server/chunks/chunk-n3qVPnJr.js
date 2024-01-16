import { defineComponent, shallowRef, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { V as VaSceneView } from "./chunk-MFY2zKAf.js";
import "./chunk-v2Cj5Nes.js";
import { V as VaServerFeatureLayer } from "./chunk-rABMI5wi.js";
import { V as VaDerivedFeatureLayer } from "./chunk-ZA9tv5iQ.js";
import { V as VaSketch } from "./chunk-WRGOaKKa.js";
import { fY as p, cL as y$1 } from "./chunk-KFNcxJaF.js";
import { V as VaTdtBasemap } from "./chunk-2_8Nl9Hn.js";
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
import "./chunk-cQlS_KkA.js";
import "./chunk-B7M5Xqd5.js";
import "./chunk-AN2pNKfL.js";
import "./chunk-qHSzybEP.js";
import "./chunk-y4k8oYvv.js";
import "./chunk-gcnOZdJc.js";
import "./chunk-gvpbtdma.js";
import "./chunk-4y4AoNcC.js";
import "./chunk-vvav8UfW.js";
import "./chunk-ggs_QHBV.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-BSxDNfxQ.js";
import "./chunk-Y9HZwdAu.js";
import "./chunk-jzCtEhR4.js";
import "./chunk-LGmaep6O.js";
import "./chunk-OjvQdFJg.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "query-geometry",
  __ssrInlineRender: true,
  setup(__props) {
    const graphics = shallowRef([]);
    const layerLoad = async (e) => {
      const view = e.view;
      await e.layer.when();
      view.goTo(e.layer.fullExtent);
    };
    const renderer = new p({
      symbol: new y$1({
        size: 10,
        color: "green"
      })
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VaSceneView), _attrs, {
        after: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` graphics.geometry: ${ssrInterpolate(graphics.value.map((item) => item.geometry))}`);
          } else {
            return [
              createTextVNode(" graphics.geometry: " + toDisplayString(graphics.value.map((item) => item.geometry)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VaTdtBasemap), {
              type: "vec_w",
              "spatial-reference": { wkid: 3857 }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VaSketch), {
              modelValue: graphics.value,
              "onUpdate:modelValue": ($event) => graphics.value = $event,
              multiple: false,
              availableCreatureTools: ["rectangle"]
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VaServerFeatureLayer), {
              orphan: true,
              renderer: unref(renderer),
              url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/US_National_Parks_Annual_Visitation/FeatureServer/0",
              onLoad: layerLoad
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(VaDerivedFeatureLayer), {
                    query: {
                      outFields: ["*"],
                      geometry: graphics.value[0]?.geometry
                    },
                    cursor: "pointer"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(VaDerivedFeatureLayer), {
                      query: {
                        outFields: ["*"],
                        geometry: graphics.value[0]?.geometry
                      },
                      cursor: "pointer"
                    }, null, 8, ["query"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VaTdtBasemap), {
                type: "vec_w",
                "spatial-reference": { wkid: 3857 }
              }),
              createVNode(unref(VaSketch), {
                modelValue: graphics.value,
                "onUpdate:modelValue": ($event) => graphics.value = $event,
                multiple: false,
                availableCreatureTools: ["rectangle"]
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(unref(VaServerFeatureLayer), {
                orphan: true,
                renderer: unref(renderer),
                url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/US_National_Parks_Annual_Visitation/FeatureServer/0",
                onLoad: layerLoad
              }, {
                default: withCtx(() => [
                  createVNode(unref(VaDerivedFeatureLayer), {
                    query: {
                      outFields: ["*"],
                      geometry: graphics.value[0]?.geometry
                    },
                    cursor: "pointer"
                  }, null, 8, ["query"])
                ]),
                _: 1
              }, 8, ["renderer", "url"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/derived-feature-layer/query-geometry.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
