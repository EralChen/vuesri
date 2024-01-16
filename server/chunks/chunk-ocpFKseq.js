import { inject, defineComponent, onUnmounted, onDeactivated, onActivated, useSSRContext, unref, mergeProps, withCtx, createVNode } from "vue";
import { ssrRenderSlot, ssrRenderComponent } from "vue/server-renderer";
import { V as VaMapView } from "./chunk-r6MU8tCx.js";
import { V as VaTdtBasemap } from "./chunk-2_8Nl9Hn.js";
import { u as useView } from "./chunk-oD5XiDYU.js";
import { nm as sMitter, a$ as j } from "./chunk-KFNcxJaF.js";
import { c as createMitterToggleHandler } from "./chunk-qHSzybEP.js";
import { _ as _export_sfc } from "./chunk-rLRIqhK0.js";
import { V as VaWmtsLayer } from "./chunk-xbOcex_F.js";
import "./chunk-chuKOP2I.js";
import "@vunk/core/shared/utils-class";
import "lodash-es";
import "mitt";
import "./chunk-BSxDNfxQ.js";
import "./chunk-Y9HZwdAu.js";
import "./chunk-jzCtEhR4.js";
import "./chunk-LGmaep6O.js";
import "./chunk-MaQWsU9J.js";
import "@vunk/core/shared/utils-vue";
import "./chunk-OjvQdFJg.js";
import "./chunk-AN2pNKfL.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
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
import "@vunk/core/shared/utils-promise";
import "@vunk/core/components/client-only";
import "@element-plus/icons-vue";
function useWmtsLayer() {
  const layer = inject("vaWmtsLayer");
  if (!layer) {
    throw new Error("The component which use useWmtsLayer() must be in a WmtsLayer component");
  }
  return layer;
}
const props = {
  modelValue: {
    type: Object,
    default: () => ({})
  }
};
const emits = {
  click: (e) => e
};
const _sfc_main$1 = defineComponent({
  name: "VaWmtsLayerOnClick",
  emits,
  props,
  setup(props2, { emit }) {
    const view = useView();
    const layer = useWmtsLayer();
    const mitter = view[sMitter];
    const MitterToggleHandler = createMitterToggleHandler(mitter);
    const clickHandler = new MitterToggleHandler("click", async (e) => {
      const { event } = e;
      const activeLayer = layer.activeLayer;
      await layer.when();
      const mapPoint = event.mapPoint;
      const layerId = activeLayer.id;
      const tileInfo = activeLayer.tileMatrixSet.tileInfo;
      const origin = tileInfo.origin;
      const currentZoom = view.zoom;
      const currentLOD = tileInfo.lods.find((item) => {
        return item.level === currentZoom + 1;
      });
      if (!currentLOD)
        return;
      const [tileWidth, tileHeight] = tileInfo.size;
      const fx = (mapPoint.x - origin.x) / (currentLOD.resolution * tileWidth);
      const fy = (origin.y - mapPoint.y) / (currentLOD.resolution * tileHeight);
      var tileCol = Math.floor(fx);
      var tileRow = Math.floor(fy);
      const i = Math.round((fx - tileCol) * tileWidth);
      const j$1 = Math.round((fy - tileRow) * tileHeight);
      let requestResponse;
      if (layerId) {
        requestResponse = await j(layer.url, {
          query: {
            SERVICE: "WMTS",
            LAYER: layerId,
            REQUEST: "GetFeatureInfo",
            VERSION: "1.0.0",
            // FORMAT: 'application/json',
            INFOFORMAT: "application/json",
            TILECOL: tileCol,
            TILEROW: tileRow,
            TILEMATRIX: currentLOD.levelValue,
            // TILEMATRIX: activeLayer.tileMatrixSet.id,
            TILEMATRIXSET: activeLayer.tileMatrixSet.id,
            I: i,
            J: j$1
          }
        }).catch(() => {
          return void 0;
        });
      }
      emit("click", {
        ...e,
        requestResponse
      });
    });
    clickHandler.add();
    onUnmounted(() => {
      clickHandler.remove();
    });
    onDeactivated(() => {
      clickHandler.remove();
    });
    onActivated(() => {
      clickHandler.add();
    });
    return {};
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/wmts-layer-on-click/src/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props2, ctx) : void 0;
};
const VaWmtsLayerOnClick = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
VaWmtsLayerOnClick.install = (app) => {
  app.component(VaWmtsLayerOnClick.name, VaWmtsLayerOnClick);
};
const baseWmtsUrl = "http://192.168.110.10:36800/zzserver/gwc/service/wmts";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "basic",
  __ssrInlineRender: true,
  setup(__props) {
    const wmtsLayerLoad = (e) => {
      const view = e.view;
      console.log("wmtsLayerLoad", e.layer);
      e.layer.when().then(() => {
        if (e.layer.activeLayer?.fullExtent) {
          view.goTo(e.layer.activeLayer.fullExtent);
        }
      });
    };
    const layerClick = (e) => {
      console.log("layerClick", e);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VaMapView), mergeProps({ defaultOptions: {
        zoom: 2
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
            _push2(ssrRenderComponent(unref(VaWmtsLayer), {
              url: baseWmtsUrl,
              title: "testLayer",
              "service-mode": "KVP",
              onLoad: wmtsLayerLoad
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(VaWmtsLayerOnClick), { onClick: layerClick }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(VaWmtsLayerOnClick), { onClick: layerClick })
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
              createVNode(unref(VaWmtsLayer), {
                url: baseWmtsUrl,
                title: "testLayer",
                "service-mode": "KVP",
                onLoad: wmtsLayerLoad
              }, {
                default: withCtx(() => [
                  createVNode(unref(VaWmtsLayerOnClick), { onClick: layerClick })
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
_sfc_main.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/wmts-layer-on-click/basic.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
export {
  _sfc_main as default
};
