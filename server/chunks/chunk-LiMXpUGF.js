import { defineComponent, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VaSceneView } from "./chunk-8WuUWlIZ.js";
import { V as VaVectorTileLayer } from "./chunk-vZEzdEr9.js";
import { _ as _sfc_main$1 } from "./chunk-bIq5xhw6.js";
import { _ as _sfc_main$2 } from "./chunk-uYLXIHjo.js";
import { V as VaSceneLayer } from "./chunk-za8lbvAb.js";
import { V as VaAreaMeasurement3d } from "./chunk-Bg7kgb0d.js";
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
import "./chunk-AN2pNKfL.js";
import "./chunk-tGOnCZwP.js";
import "./chunk-yCPoYwni.js";
import "./chunk-ANxjAjSR.js";
import "./chunk-vvav8UfW.js";
const url = "https://api.maptiler.com/maps/basic/style.json?key=pSHUA9sSkNny3iqoWG4P";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "click",
  __ssrInlineRender: true,
  setup(__props) {
    const layerLoad = async (e) => {
      const view = e.view;
      await e.layer.when();
      view.goTo(
        e.layer.fullExtent,
        {
          duration: 2e3
        }
      );
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VaSceneView), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$1), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(VaVectorTileLayer), {
                    orphan: true,
                    "default-options": {
                      url,
                      customParameters: {
                        key: "pSHUA9sSkNny3iqoWG4P"
                      }
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
                } else {
                  return [
                    createVNode(unref(VaVectorTileLayer), {
                      orphan: true,
                      "default-options": {
                        url,
                        customParameters: {
                          key: "pSHUA9sSkNny3iqoWG4P"
                        }
                      }
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$2))
                      ]),
                      _: 1
                    }, 8, ["default-options"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VaSceneLayer), {
              url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/SF_BLDG_WSL1/SceneServer",
              onLoad: layerLoad
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VaAreaMeasurement3d), { position: "top-right" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$1), null, {
                default: withCtx(() => [
                  createVNode(unref(VaVectorTileLayer), {
                    orphan: true,
                    "default-options": {
                      url,
                      customParameters: {
                        key: "pSHUA9sSkNny3iqoWG4P"
                      }
                    }
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$2))
                    ]),
                    _: 1
                  }, 8, ["default-options"])
                ]),
                _: 1
              }),
              createVNode(unref(VaSceneLayer), {
                url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/SF_BLDG_WSL1/SceneServer",
                onLoad: layerLoad
              }, null, 8, ["url"]),
              createVNode(unref(VaAreaMeasurement3d), { position: "top-right" })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/scene-layer/click.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
