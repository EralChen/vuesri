import { defineComponent, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VaSceneView } from "./chunk-8WuUWlIZ.js";
import { V as VaVectorTileLayer } from "./chunk-vZEzdEr9.js";
import { V as VaTdtBasemap } from "./chunk-XxvgZNck.js";
import { u as useRequestInterceptor } from "./chunk-0A6HSBpB.js";
import { f as fullExtent } from "./chunk-8CFIjXxc.js";
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
import "./chunk-bIq5xhw6.js";
import "./chunk-VS0cZDQt.js";
import "./chunk-_8aSZzrH.js";
import "./chunk-uYLXIHjo.js";
import "./chunk-AN2pNKfL.js";
const url = "https://skzz.cn/server/rest/services/Hosted/lzz3857ssss/VectorTileServer";
const url3 = "https://basemaps.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "skzz",
  __ssrInlineRender: true,
  setup(__props) {
    const { interceptorToggle } = useRequestInterceptor({
      urls: [url],
      after(e) {
        if (e.url === url) {
          e.data.capabilities = "TilesOnly";
          console.log("e.data: ", e.data);
          e.data.fullExtent = fullExtent;
          console.log("e.data: ", e.data);
          console.log("lods: ", e.data.tileInfo.lods);
          Reflect.deleteProperty(e.data, "initialExtent");
          Reflect.deleteProperty(e.data, "resourceInfo");
        }
      }
    });
    interceptorToggle.add();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VaSceneView), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VaTdtBasemap), {
              "spatial-reference": {
                wkid: 3857
              },
              type: "img_w"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VaVectorTileLayer), {
              "default-options": {
                url: url3
              }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VaTdtBasemap), {
                "spatial-reference": {
                  wkid: 3857
                },
                type: "img_w"
              }),
              createVNode(unref(VaVectorTileLayer), {
                "default-options": {
                  url: url3
                }
              }, null, 8, ["default-options"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/vector-tile-layer/skzz.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
