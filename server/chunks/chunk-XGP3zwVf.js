import { defineComponent, unref, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VaSceneView } from "./chunk-8WuUWlIZ.js";
import { V as VaTdtBasemap } from "./chunk-XxvgZNck.js";
import { V as VaGraphic } from "./chunk-ZGB6GbeH.js";
import { V as VaGraphicsLayer } from "./chunk-v-t_EqND.js";
import { cY as x$1, c0 as w$1 } from "./chunk-ejFG4zJ0.js";
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
import "./chunk-8CFIjXxc.js";
import "./chunk-bIq5xhw6.js";
import "./chunk-VS0cZDQt.js";
import "./chunk-_8aSZzrH.js";
import "./chunk-ZSpamg93.js";
import "./chunk-RQshD5bR.js";
import "./chunk-uYLXIHjo.js";
import "./chunk-AN2pNKfL.js";
import "./chunk-yCPoYwni.js";
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
            href: "/vuesri/images/demo/projectPoint.png"
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
