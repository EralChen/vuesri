import { defineComponent, shallowRef, resolveComponent, unref, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VaMaskingLayer } from "./chunk-JOaXliPn.js";
import { V as VaMapView } from "./chunk-r6MU8tCx.js";
import "./chunk-v2Cj5Nes.js";
import { bq as j } from "./chunk-KFNcxJaF.js";
import { V as VaGraphicsLayer } from "./chunk-2T2aQ3cG.js";
import { V as VaGraphic } from "./chunk-Z6BuYssA.js";
import { V as VaTdtBasemap } from "./chunk-2_8Nl9Hn.js";
import "./chunk-MaQWsU9J.js";
import "@vunk/core/shared/utils-vue";
import "./chunk-oD5XiDYU.js";
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
import "./chunk-chuKOP2I.js";
import "mitt";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-B7M5Xqd5.js";
import "./chunk-AN2pNKfL.js";
import "./chunk-qHSzybEP.js";
import "./chunk-BSxDNfxQ.js";
import "./chunk-Y9HZwdAu.js";
import "./chunk-jzCtEhR4.js";
import "./chunk-LGmaep6O.js";
import "./chunk-OjvQdFJg.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "basic",
  __ssrInlineRender: true,
  setup(__props) {
    const geometry2 = new j({
      rings: [
        [
          [125, 18],
          [20, 18],
          [20, 50],
          [125, 18]
        ]
      ]
    });
    const geometry1 = new j({
      rings: [
        [
          [125, 18],
          [88, 18],
          [88, 50],
          [125, 18]
        ]
      ]
    });
    const geometry = shallowRef();
    setTimeout(() => {
      geometry.value = geometry1;
    }, 3e3);
    const change = () => {
      geometry.value = geometry2;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_button = resolveComponent("el-button");
      _push(ssrRenderComponent(unref(VaMapView), _attrs, {
        before: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_button, { onClick: change }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`change `);
                } else {
                  return [
                    createTextVNode("change ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</p>`);
          } else {
            return [
              createVNode("p", null, [
                createVNode(_component_el_button, { onClick: change }, {
                  default: withCtx(() => [
                    createTextVNode("change ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VaTdtBasemap), {
              "spatial-reference": { wkid: 4326 },
              type: "vec_c"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VaMaskingLayer), {
              color: [0, 0, 0, 0.7],
              distance: 24,
              geometry: geometry.value,
              index: 99
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VaGraphicsLayer), { index: 98 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(VaGraphic), { geometry: unref(geometry2) }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(VaGraphic), { geometry: unref(geometry2) }, null, 8, ["geometry"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VaTdtBasemap), {
                "spatial-reference": { wkid: 4326 },
                type: "vec_c"
              }),
              createVNode(unref(VaMaskingLayer), {
                color: [0, 0, 0, 0.7],
                distance: 24,
                geometry: geometry.value,
                index: 99
              }, null, 8, ["geometry"]),
              createVNode(unref(VaGraphicsLayer), { index: 98 }, {
                default: withCtx(() => [
                  createVNode(unref(VaGraphic), { geometry: unref(geometry2) }, null, 8, ["geometry"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/masking-layer/basic.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
