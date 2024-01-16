import { defineComponent, unref, mergeProps, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VaGraphicsLayer } from "./chunk-2T2aQ3cG.js";
import { bf as c$1, cy as x$1, bv as w$1 } from "./chunk-KFNcxJaF.js";
import "./chunk-MaQWsU9J.js";
import "@vunk/core/shared/utils-vue";
import "./chunk-oD5XiDYU.js";
import "./chunk-B7M5Xqd5.js";
import "./chunk-AN2pNKfL.js";
import "./chunk-qHSzybEP.js";
import "@vunk/core/shared/utils-class";
import "./chunk-rLRIqhK0.js";
import "vike/server";
import "vike-vue/usePageContext";
import "./chunk-8AIdLOXL.js";
import "path";
import "@vunk/core";
import "element-plus";
import "@vueuse/core";
import "deepdash-es/standalone";
import "gsap";
import "@vunk/core/composables";
import "lodash-es";
import "@vunk/core/shared/utils-promise";
import "@vunk/core/components/client-only";
import "@element-plus/icons-vue";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "point",
  __ssrInlineRender: true,
  setup(__props) {
    const graphics = [
      new c$1({
        geometry: new x$1({
          latitude: 30.066146833965956,
          longitude: 121.11044546717469,
          hasZ: true
        }),
        symbol: new w$1({
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
        })
      })
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VaGraphicsLayer), mergeProps({ graphics }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/graphics-layer/graphics/point.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
