import { defineComponent, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VaSceneView } from "./chunk-8WuUWlIZ.js";
import { V as VaTdtWebTileLayer } from "./chunk-VS0cZDQt.js";
import { V as VaIntegratedMesh3dTilesLayer } from "./chunk-J1w2CJfP.js";
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
import "./chunk-_8aSZzrH.js";
import "./chunk-ZSpamg93.js";
import "./chunk-RQshD5bR.js";
import "./chunk-8CFIjXxc.js";
import "./chunk-F5dgb7hU.js";
import "./chunk-tGOnCZwP.js";
import "./chunk-0A6HSBpB.js";
const url1 = "https://tiles.arcgis.com/tiles/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Utrecht_3D_Tiles_Integrated_Mesh/3DTilesServer/tileset.json";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "basic",
  __ssrInlineRender: true,
  setup(__props) {
    const layerLoad = async ({ view, layer }) => {
      await view.when();
      await layer.when();
      view.goTo({
        target: layer.fullExtent,
        zoom: 19
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VaSceneView), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VaTdtWebTileLayer), {
              type: "vec_w",
              "spatial-reference": {
                wkid: 3857
              }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VaIntegratedMesh3dTilesLayer), {
              url: url1,
              onLoad: layerLoad
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VaTdtWebTileLayer), {
                type: "vec_w",
                "spatial-reference": {
                  wkid: 3857
                }
              }),
              createVNode(unref(VaIntegratedMesh3dTilesLayer), {
                url: url1,
                onLoad: layerLoad
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/integrated-mesh-3d-tiles-layer/basic.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
