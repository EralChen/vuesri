import { defineComponent, unref, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VaSceneView } from "./chunk-8WuUWlIZ.js";
import { _ as _sfc_main$1 } from "./chunk-bIq5xhw6.js";
import { _ as _sfc_main$2 } from "./chunk-uYLXIHjo.js";
import { V as VaWmtsLayer } from "./chunk-TKb6VnDe.js";
import { V as VaTdtWebTileLayer } from "./chunk-VS0cZDQt.js";
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
import "./chunk-AN2pNKfL.js";
import "./chunk-ZSpamg93.js";
import "./chunk-RQshD5bR.js";
import "./chunk-0A6HSBpB.js";
import "./chunk-_8aSZzrH.js";
import "./chunk-8CFIjXxc.js";
const baseUrl = "http://192.168.110.252:9000/geoserver/gwc/service/wmts";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "basemap",
  __ssrInlineRender: true,
  setup(__props) {
    const wmtsLayerLoad = async (e) => {
      console.log(e);
      await e.layer.when();
      const view = e.view;
      view.goTo(e.layer.activeLayer.fullExtent);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VaSceneView), mergeProps({ "default-options": {} }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$1), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(VaTdtWebTileLayer), {
                    orphan: false,
                    type: "img_w",
                    "spatial-reference": {
                      wkid: 3857
                    }
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
                    url: baseUrl,
                    "service-mode": "KVP",
                    "active-layer": {
                      id: "cite:lzz3857",
                      imageFormat: "image/png",
                      tileMatrixSetId: "lzz385702"
                    },
                    "custom-parameters": {
                      layerId: "cite:lzz3857"
                    },
                    orphan: true,
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
                    createVNode(unref(VaTdtWebTileLayer), {
                      orphan: false,
                      type: "img_w",
                      "spatial-reference": {
                        wkid: 3857
                      }
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$2))
                      ]),
                      _: 1
                    }),
                    createVNode(unref(VaWmtsLayer), {
                      url: baseUrl,
                      "service-mode": "KVP",
                      "active-layer": {
                        id: "cite:lzz3857",
                        imageFormat: "image/png",
                        tileMatrixSetId: "lzz385702"
                      },
                      "custom-parameters": {
                        layerId: "cite:lzz3857"
                      },
                      orphan: true,
                      onLoad: wmtsLayerLoad
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$2))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$1), null, {
                default: withCtx(() => [
                  createVNode(unref(VaTdtWebTileLayer), {
                    orphan: false,
                    type: "img_w",
                    "spatial-reference": {
                      wkid: 3857
                    }
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$2))
                    ]),
                    _: 1
                  }),
                  createVNode(unref(VaWmtsLayer), {
                    url: baseUrl,
                    "service-mode": "KVP",
                    "active-layer": {
                      id: "cite:lzz3857",
                      imageFormat: "image/png",
                      tileMatrixSetId: "lzz385702"
                    },
                    "custom-parameters": {
                      layerId: "cite:lzz3857"
                    },
                    orphan: true,
                    onLoad: wmtsLayerLoad
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$2))
                    ]),
                    _: 1
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/wmts-layer/basemap.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
