import { defineComponent, unref, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VaMapView } from "./chunk-6fAe7ZtF.js";
import { V as VaTdtBasemap } from "./chunk-XxvgZNck.js";
import { V as VaWmtsLayer } from "./chunk-TKb6VnDe.js";
import { VkDuplex } from "@vunk/core";
import "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-4l9VVe6n.js";
import "./chunk-oD5XiDYU.js";
import "@vunk/core/shared/utils-class";
import "./chunk-3BageVRQ.js";
import "lodash-es";
import "mitt";
import "./chunk-x8u7LPTa.js";
import "vike/server";
import "vike-vue/usePageContext";
import "./chunk-vndPU1ZH.js";
import "path";
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
import "./chunk-0A6HSBpB.js";
const baseUrl = "http://192.168.110.252:9000/geoserver/gwc/service/wmts";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "tile-matrix-set",
  __ssrInlineRender: true,
  setup(__props) {
    const wmtsLayerLoad = async (e) => {
      await e.layer.when();
      const view = e.view;
      view.goTo(e.layer.activeLayer.fullExtent);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VkDuplex), mergeProps({
        "with-flex": "both",
        direction: "row"
      }, _attrs), {
        one: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2)
            ;
          else {
            return [];
          }
        }),
        two: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VaMapView), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(VaTdtBasemap), {
                    "spatial-reference": {
                      wkid: 4326
                    },
                    type: "vec_c"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(VaWmtsLayer), {
                    url: baseUrl,
                    "service-mode": "KVP",
                    "active-layer": {
                      id: "cite:V20240207-000005-P0",
                      imageFormat: "image/png",
                      tileMatrixSetId: "EPSG:4326"
                    },
                    "custom-parameters": {
                      layerId: "cite:V20240207-000005-P0"
                    },
                    onLoad: wmtsLayerLoad
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(VaTdtBasemap), {
                      "spatial-reference": {
                        wkid: 4326
                      },
                      type: "vec_c"
                    }),
                    createVNode(unref(VaWmtsLayer), {
                      url: baseUrl,
                      "service-mode": "KVP",
                      "active-layer": {
                        id: "cite:V20240207-000005-P0",
                        imageFormat: "image/png",
                        tileMatrixSetId: "EPSG:4326"
                      },
                      "custom-parameters": {
                        layerId: "cite:V20240207-000005-P0"
                      },
                      onLoad: wmtsLayerLoad
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VaMapView), null, {
                default: withCtx(() => [
                  createVNode(unref(VaTdtBasemap), {
                    "spatial-reference": {
                      wkid: 4326
                    },
                    type: "vec_c"
                  }),
                  createVNode(unref(VaWmtsLayer), {
                    url: baseUrl,
                    "service-mode": "KVP",
                    "active-layer": {
                      id: "cite:V20240207-000005-P0",
                      imageFormat: "image/png",
                      tileMatrixSetId: "EPSG:4326"
                    },
                    "custom-parameters": {
                      layerId: "cite:V20240207-000005-P0"
                    },
                    onLoad: wmtsLayerLoad
                  })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/wmts-layer/tile-matrix-set.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
