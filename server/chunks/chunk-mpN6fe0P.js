import { defineComponent, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VaSceneView } from "./chunk-8WuUWlIZ.js";
import { V as VaVectorTileLayer } from "./chunk-vZEzdEr9.js";
import { V as VaTdtBasemap } from "./chunk-XxvgZNck.js";
import { u as useRequestInterceptor } from "./chunk-0A6HSBpB.js";
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
const url = "https://basemaps.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "basic",
  __ssrInlineRender: true,
  setup(__props) {
    const { interceptorToggle } = useRequestInterceptor({
      urls: [url],
      after(e) {
        if (e.url === url) {
          e.data.capabilities = "TilesOnly";
          console.log("e.data: ", e.data);
        }
      }
    });
    interceptorToggle.add();
    const style = {
      layers: [
        {
          layout: {},
          paint: {
            "fill-color": "#F0ECDB"
          },
          source: "esri",
          minzoom: 0,
          "source-layer": "Land",
          type: "fill",
          id: "Land/0"
        },
        {
          layout: {},
          paint: {
            "fill-pattern": "Landpattern",
            "fill-opacity": 0.25
          },
          source: "esri",
          minzoom: 0,
          "source-layer": "Land",
          type: "fill",
          id: "Land/1"
        },
        {
          layout: {},
          paint: {
            "fill-color": "#93CFC7"
          },
          source: "esri",
          minzoom: 0,
          "source-layer": "Marine area",
          type: "fill",
          id: "Marine area/1"
        },
        {
          layout: {},
          paint: {
            "fill-pattern": "Marine area",
            "fill-opacity": 0.08
          },
          source: "esri",
          "source-layer": "Marine area",
          type: "fill",
          id: "Marine area/2"
        },
        {
          layout: {
            "line-cap": "round",
            "line-join": "round"
          },
          paint: {
            "line-color": "#cccccc",
            "line-dasharray": [7, 5.33333],
            "line-width": 1
          },
          source: "esri",
          minzoom: 1,
          "source-layer": "Boundary line",
          type: "line",
          id: "Boundary line/Admin0/0"
        },
        {
          layout: {
            "text-font": ["Risque Regular"],
            "text-anchor": "center",
            "text-field": "{_name_global}"
          },
          paint: {
            "text-halo-blur": 1,
            "text-color": "#AF420A",
            "text-halo-width": 1,
            "text-halo-color": "#f0efec"
          },
          source: "esri",
          "source-layer": "Continent",
          type: "symbol",
          id: "Continent"
        },
        {
          layout: {
            "text-font": ["Atomic Age Regular"],
            "text-field": "{_name}",
            "text-transform": "none"
          },
          paint: {
            "text-halo-blur": 1,
            "text-color": "#AF420A",
            "text-halo-width": 1,
            "text-halo-color": "#f0efec"
          },
          source: "esri",
          minzoom: 2,
          "source-layer": "Admin0 point",
          maxzoom: 10,
          type: "symbol",
          id: "Admin0 point/large"
        }
      ],
      glyphs: "https://basemaps.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer/resources/fonts/{fontstack}/{range}.pbf",
      version: 8,
      sprite: "https://www.arcgis.com/sharing/rest/content/items/7675d44bb1e4428aa2c30a9b68f97822/resources/sprites/sprite",
      sources: {
        esri: {
          url,
          type: "vector"
        }
      }
    };
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
            _push2(ssrRenderComponent(unref(VaVectorTileLayer), { style }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VaTdtBasemap), {
                "spatial-reference": {
                  wkid: 3857
                },
                type: "img_w"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/vector-tile-layer/basic.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
