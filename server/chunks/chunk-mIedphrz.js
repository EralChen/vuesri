import { defineComponent, shallowRef, unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { V as VaSketch } from "./chunk-WRGOaKKa.js";
import { V as VaMapView } from "./chunk-r6MU8tCx.js";
import "./chunk-v2Cj5Nes.js";
import { V as VaGraphicsLayer } from "./chunk-2T2aQ3cG.js";
import { bt as S, bf as c$1, bq as j } from "./chunk-KFNcxJaF.js";
import { V as VaTdtBasemap } from "./chunk-2_8Nl9Hn.js";
import "@vunk/core/shared/utils-vue";
import "./chunk-oD5XiDYU.js";
import "./chunk-4y4AoNcC.js";
import "./chunk-vvav8UfW.js";
import "./chunk-rLRIqhK0.js";
import "vike/server";
import "vike-vue/usePageContext";
import "./chunk-8AIdLOXL.js";
import "path";
import "@vunk/core";
import "element-plus";
import "@vueuse/core";
import "@vunk/core/shared/utils-class";
import "deepdash-es/standalone";
import "gsap";
import "@vunk/core/composables";
import "lodash-es";
import "@vunk/core/shared/utils-promise";
import "@vunk/core/components/client-only";
import "@element-plus/icons-vue";
import "./chunk-ggs_QHBV.js";
import "./chunk-chuKOP2I.js";
import "mitt";
import "./chunk-MaQWsU9J.js";
import "./chunk-B7M5Xqd5.js";
import "./chunk-AN2pNKfL.js";
import "./chunk-qHSzybEP.js";
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const symbol = new S({
      color: "red"
    });
    const defaultGraphics = shallowRef([
      new c$1({
        geometry: new j({
          rings: [
            [
              [125, 18],
              [88, 18],
              [88, 50],
              [125, 18]
            ]
          ]
        }),
        symbol
      })
    ]);
    const graphics = shallowRef(defaultGraphics.value);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VaMapView), _attrs, {
        after: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>${ssrInterpolate(graphics.value.map((item) => item.geometry))}</p>`);
          } else {
            return [
              createVNode("p", null, toDisplayString(graphics.value.map((item) => item.geometry)), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VaTdtBasemap), null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VaGraphicsLayer), {
              graphics: defaultGraphics.value,
              opacity: 0.5
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(VaSketch), {
                    viewModelPolygonSymbol: unref(symbol),
                    "available-creature-tools": ["polygon"],
                    modelValue: graphics.value,
                    "onUpdate:modelValue": ($event) => graphics.value = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(VaSketch), {
                      viewModelPolygonSymbol: unref(symbol),
                      "available-creature-tools": ["polygon"],
                      modelValue: graphics.value,
                      "onUpdate:modelValue": ($event) => graphics.value = $event
                    }, null, 8, ["viewModelPolygonSymbol", "modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VaTdtBasemap)),
              createVNode(unref(VaGraphicsLayer), {
                graphics: defaultGraphics.value,
                opacity: 0.5
              }, {
                default: withCtx(() => [
                  createVNode(unref(VaSketch), {
                    viewModelPolygonSymbol: unref(symbol),
                    "available-creature-tools": ["polygon"],
                    modelValue: graphics.value,
                    "onUpdate:modelValue": ($event) => graphics.value = $event
                  }, null, 8, ["viewModelPolygonSymbol", "modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }, 8, ["graphics"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/sketch/in-layer/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
