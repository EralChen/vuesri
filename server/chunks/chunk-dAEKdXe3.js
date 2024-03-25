import { defineComponent, shallowReactive, shallowRef, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VaSceneView } from "./chunk-8WuUWlIZ.js";
import { V as VaGeoserverVectorTileLayer } from "./chunk-au8MXu3s.js";
import { V as VaWmtsLayer } from "./chunk-TKb6VnDe.js";
import { _ as _sfc_main$1 } from "./chunk-bIq5xhw6.js";
import { _ as _sfc_main$2 } from "./chunk-uYLXIHjo.js";
import { V as VaTdtWmtsLayer } from "./chunk-oGLSSAFH.js";
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
import "./chunk-0A6HSBpB.js";
import "qs";
import "ol/format/WMTSCapabilities.js";
import "ol/source/WMTS.js";
import "./chunk-vZEzdEr9.js";
import "./chunk-AN2pNKfL.js";
import "@vunk/core/shared/utils-object";
const tileMatrixSetId = "lzz385702";
const vectorUrl = "http://192.168.110.252:9000/geoserver/gwc/service/wmts";
const layerId = "cite:lzz3857";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "epsg3857",
  __ssrInlineRender: true,
  setup(__props) {
    const tileMatrixSetReflect = shallowReactive(
      {}
    );
    const fullExtent = shallowRef();
    const wmtsLayerLoad = async (e) => {
      console.log("e: ", e);
      await e.layer.when();
      const view = e.view;
      await view.when();
      view.goTo(e.layer.activeLayer.fullExtent);
      fullExtent.value = e.layer.activeLayer.fullExtent;
      console.log("fullExtent", e.layer.activeLayer.fullExtent);
      e.layer.activeLayer.tileMatrixSets.forEach((item) => {
        tileMatrixSetReflect[item.id] = item;
      });
      console.log("tileMatrixSetReflect: ", tileMatrixSetReflect);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VaSceneView), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$1), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(VaTdtWmtsLayer), {
                    orphan: true,
                    type: "img_w"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$2))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(VaWmtsLayer), {
                    orphan: true,
                    url: vectorUrl,
                    "service-mode": "KVP",
                    "active-layer": {
                      id: layerId,
                      imageFormat: "image/png",
                      tileMatrixSetId
                    },
                    "custom-parameters": {
                      format: "image/png",
                      layerId
                    },
                    opacity: 0.6,
                    onLoad: wmtsLayerLoad
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$2))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(VaTdtWmtsLayer), {
                      orphan: true,
                      type: "img_w"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$2))
                      ]),
                      _: 1
                    }),
                    createVNode(unref(VaWmtsLayer), {
                      orphan: true,
                      url: vectorUrl,
                      "service-mode": "KVP",
                      "active-layer": {
                        id: layerId,
                        imageFormat: "image/png",
                        tileMatrixSetId
                      },
                      "custom-parameters": {
                        format: "image/png",
                        layerId
                      },
                      opacity: 0.6,
                      onLoad: wmtsLayerLoad
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$2))
                      ]),
                      _: 1
                    }, 8, ["active-layer", "custom-parameters"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VaGeoserverVectorTileLayer), {
              url: vectorUrl,
              "layer-id": layerId,
              "tile-matrix-set-id": tileMatrixSetId
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$1), null, {
                default: withCtx(() => [
                  createVNode(unref(VaTdtWmtsLayer), {
                    orphan: true,
                    type: "img_w"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$2))
                    ]),
                    _: 1
                  }),
                  createVNode(unref(VaWmtsLayer), {
                    orphan: true,
                    url: vectorUrl,
                    "service-mode": "KVP",
                    "active-layer": {
                      id: layerId,
                      imageFormat: "image/png",
                      tileMatrixSetId
                    },
                    "custom-parameters": {
                      format: "image/png",
                      layerId
                    },
                    opacity: 0.6,
                    onLoad: wmtsLayerLoad
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$2))
                    ]),
                    _: 1
                  }, 8, ["active-layer", "custom-parameters"])
                ]),
                _: 1
              }),
              createVNode(unref(VaGeoserverVectorTileLayer), {
                url: vectorUrl,
                "layer-id": layerId,
                "tile-matrix-set-id": tileMatrixSetId
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/geoserver-vector-tile-layer/epsg3857.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
