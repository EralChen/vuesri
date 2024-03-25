import { defineComponent, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VaSceneView } from "./chunk-8WuUWlIZ.js";
import { V as VaVectorTileLayer } from "./chunk-vZEzdEr9.js";
import { V as VaTdtBasemap } from "./chunk-XxvgZNck.js";
import "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
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
import "./chunk-8CFIjXxc.js";
import "./chunk-bIq5xhw6.js";
import "./chunk-VS0cZDQt.js";
import "./chunk-_8aSZzrH.js";
import "./chunk-uYLXIHjo.js";
import "./chunk-AN2pNKfL.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "pg",
  __ssrInlineRender: true,
  setup(__props) {
    const style = {
      version: 8,
      sources: {
        "esri": {
          type: "vector",
          tiles: [
            "http://192.168.110.241:8050/zgis/vector/tile/{z}/{x}/{y}"
          ],
          format: "pbf"
        }
      },
      layers: [
        {
          "id": "custom-go-vector-tile-layer",
          "source": "esri",
          "source-layer": "polygon",
          "type": "line",
          "paint": {
            "line-color": "#ff0000",
            "line-width": 2
          }
        }
      ]
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VaSceneView), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VaTdtBasemap), {
              "spatial-reference": {
                wkid: 3857
              },
              type: "vec_w"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VaVectorTileLayer), { style }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VaTdtBasemap), {
                "spatial-reference": {
                  wkid: 3857
                },
                type: "vec_w"
              }),
              createVNode(unref(VaVectorTileLayer), { style })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/vector-tile-layer/pg.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
