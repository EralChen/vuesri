import { defineComponent, shallowRef, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { V as VaSceneView } from "./chunk-8WuUWlIZ.js";
import "./chunk-CTgLT-4V.js";
import { V as VaServerFeatureLayer } from "./chunk-LrwsxPyy.js";
import { V as VaDerivedFeatureLayer } from "./chunk-_oluUB0p.js";
import { V as VaSketch } from "./chunk-c7c2gizP.js";
import { gS as m, d8 as y } from "./chunk-ejFG4zJ0.js";
import { V as VaTdtBasemap } from "./chunk-XxvgZNck.js";
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
import "./chunk-ZSpamg93.js";
import "./chunk-RQshD5bR.js";
import "./chunk-wa_PWVge.js";
import "./chunk-yCPoYwni.js";
import "./chunk-AN2pNKfL.js";
import "./chunk-9IwRySYm.js";
import "./chunk-x7Vgxnqr.js";
import "./chunk-gvpbtdma.js";
import "./chunk-ANxjAjSR.js";
import "./chunk-vvav8UfW.js";
import "./chunk-ggs_QHBV.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-8CFIjXxc.js";
import "./chunk-bIq5xhw6.js";
import "./chunk-VS0cZDQt.js";
import "./chunk-_8aSZzrH.js";
import "./chunk-uYLXIHjo.js";
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
    const renderer = new m({
      symbol: new y({
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
