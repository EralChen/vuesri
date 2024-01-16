import { defineComponent, shallowRef, ref, unref, withCtx, createVNode, withDirectives, openBlock, createBlock, vShow, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VaSketch } from "./chunk-WRGOaKKa.js";
import { V as VaMapView } from "./chunk-r6MU8tCx.js";
import { V as VaTdtBasemap } from "./chunk-2_8Nl9Hn.js";
import { V as VaGraphicsLayer } from "./chunk-2T2aQ3cG.js";
import { bt as S, bf as c$1, bq as j } from "./chunk-KFNcxJaF.js";
import { VkfRadio } from "@vunk/form/components/radio/index.js";
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
import "./chunk-BSxDNfxQ.js";
import "./chunk-Y9HZwdAu.js";
import "./chunk-jzCtEhR4.js";
import "./chunk-LGmaep6O.js";
import "./chunk-MaQWsU9J.js";
import "./chunk-OjvQdFJg.js";
import "./chunk-AN2pNKfL.js";
import "./chunk-B7M5Xqd5.js";
import "./chunk-qHSzybEP.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const symbol = new S({
      color: "red"
    });
    const layerGraphics = shallowRef([
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
    const graphics = shallowRef(layerGraphics.value);
    const skethInit = ref("complete");
    const reshow = ref(true);
    const sketchLoad = async ({ sketch }, type) => {
      const layer = sketch.layer;
      if (type === "update") {
        sketch.update(layer.graphics.at(-1));
      }
      if (type === "create") {
        sketch.create("polygon");
      }
    };
    const sketchComplete = async () => {
      layerGraphics.value = graphics.value;
      if (skethInit.value === "create") {
        skethInit.value = "complete";
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VaMapView), _attrs, {
        before: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VkfRadio), {
              modelValue: skethInit.value,
              "onUpdate:modelValue": ($event) => skethInit.value = $event,
              options: [
                { label: "create", value: "create" },
                { label: "update", value: "update" },
                { label: "complete", value: "complete" }
              ],
              onChange: ($event) => {
                reshow.value = false;
                _ctx.$nextTick(() => reshow.value = true);
              }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VkfRadio), {
                modelValue: skethInit.value,
                "onUpdate:modelValue": ($event) => skethInit.value = $event,
                options: [
                  { label: "create", value: "create" },
                  { label: "update", value: "update" },
                  { label: "complete", value: "complete" }
                ],
                onChange: ($event) => {
                  reshow.value = false;
                  _ctx.$nextTick(() => reshow.value = true);
                }
              }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VaTdtBasemap), null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VaGraphicsLayer), { graphics: layerGraphics.value }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (reshow.value && skethInit.value !== "complete") {
                    _push3(ssrRenderComponent(unref(VaSketch), {
                      style: { display: "none" },
                      orphan: true,
                      modelValue: graphics.value,
                      "onUpdate:modelValue": ($event) => graphics.value = $event,
                      viewModelPolygonSymbol: unref(symbol),
                      onLoad: (e) => sketchLoad(e, skethInit.value),
                      onComplete: sketchComplete
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    reshow.value && skethInit.value !== "complete" ? withDirectives((openBlock(), createBlock(unref(VaSketch), {
                      key: 0,
                      orphan: true,
                      modelValue: graphics.value,
                      "onUpdate:modelValue": ($event) => graphics.value = $event,
                      viewModelPolygonSymbol: unref(symbol),
                      onLoad: (e) => sketchLoad(e, skethInit.value),
                      onComplete: sketchComplete
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "viewModelPolygonSymbol", "onLoad"])), [
                      [vShow, false]
                    ]) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VaTdtBasemap)),
              createVNode(unref(VaGraphicsLayer), { graphics: layerGraphics.value }, {
                default: withCtx(() => [
                  reshow.value && skethInit.value !== "complete" ? withDirectives((openBlock(), createBlock(unref(VaSketch), {
                    key: 0,
                    orphan: true,
                    modelValue: graphics.value,
                    "onUpdate:modelValue": ($event) => graphics.value = $event,
                    viewModelPolygonSymbol: unref(symbol),
                    onLoad: (e) => sketchLoad(e, skethInit.value),
                    onComplete: sketchComplete
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "viewModelPolygonSymbol", "onLoad"])), [
                    [vShow, false]
                  ]) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/sketch/without-ui/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
