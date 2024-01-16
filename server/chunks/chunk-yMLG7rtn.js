import { defineComponent, unref, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VaSceneView } from "./chunk-MFY2zKAf.js";
import { V as VaTdtBasemap } from "./chunk-2_8Nl9Hn.js";
import { V as VaGraphic } from "./chunk-Z6BuYssA.js";
import { V as VaGraphicsLayer } from "./chunk-2T2aQ3cG.js";
import { cy as x$1, bv as w$1 } from "./chunk-KFNcxJaF.js";
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
import "./chunk-BSxDNfxQ.js";
import "./chunk-Y9HZwdAu.js";
import "./chunk-jzCtEhR4.js";
import "./chunk-LGmaep6O.js";
import "./chunk-MaQWsU9J.js";
import "./chunk-OjvQdFJg.js";
import "./chunk-AN2pNKfL.js";
import "./chunk-qHSzybEP.js";
import "./chunk-B7M5Xqd5.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "in-layer",
  __ssrInlineRender: true,
  setup(__props) {
    const geometry = new x$1({
      latitude: 30.066146833965956,
      longitude: 121.11044546717469
    });
    const symbol = new w$1({
      symbolLayers: [
        {
          type: "icon",
          resource: {
            href: "/images/demo/projectPoint.png"
          },
          size: 64,
          anchor: "bottom"
        },
        {
          type: "text",
          material: {
            color: "white"
          },
          halo: {
            color: "black",
            size: 2
          },
          size: 12,
          font: {
            family: "sans-serif",
            weight: "bold"
          },
          text: "测试",
          verticalAlignment: "bottom",
          horizontalAlignment: "center",
          anchor: "bottom"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VaSceneView), mergeProps({ "default-options": {
        zoom: 2,
        center: [121.11044546717469, 30.066146833965956]
      } }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VaTdtBasemap), {
              type: "vec_w",
              anno: false,
              "spatial-reference": {
                wkid: 3857
              }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VaGraphicsLayer), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(VaGraphic), {
                    geometry: unref(geometry),
                    symbol: unref(symbol)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(VaGraphic), {
                      geometry: unref(geometry),
                      symbol: unref(symbol)
                    }, null, 8, ["geometry", "symbol"])
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
              createVNode(unref(VaGraphicsLayer), null, {
                default: withCtx(() => [
                  createVNode(unref(VaGraphic), {
                    geometry: unref(geometry),
                    symbol: unref(symbol)
                  }, null, 8, ["geometry", "symbol"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/graphic/in-layer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
