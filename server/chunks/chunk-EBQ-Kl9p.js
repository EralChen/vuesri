import { defineComponent, unref, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VaSceneView } from "./chunk-8WuUWlIZ.js";
import { io as L } from "./chunk-ejFG4zJ0.js";
import { V as VaIntegratedMesh3dTilesLayer } from "./chunk-J1w2CJfP.js";
import { V as VaAreaMeasurement3d } from "./chunk-Bg7kgb0d.js";
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
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-ZSpamg93.js";
import "./chunk-RQshD5bR.js";
import "./chunk-F5dgb7hU.js";
import "./chunk-tGOnCZwP.js";
import "./chunk-0A6HSBpB.js";
import "./chunk-ANxjAjSR.js";
import "./chunk-vvav8UfW.js";
const url4 = "https://assets.ion.cesium.com/us-east-1/asset_depot/75343/NYCDoITT/v1/tileset.json";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "basic2",
  __ssrInlineRender: true,
  setup(__props) {
    const map = new L({
      basemap: "arcgis-imagery"
    });
    const defaultOptions = {
      map
    };
    const layerLoad = async ({ view, layer }) => {
      await view.when();
      await layer.when();
      view.goTo({
        target: layer.fullExtent
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VaSceneView), mergeProps({ "default-options": defaultOptions }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VaIntegratedMesh3dTilesLayer), {
              "default-options": {
                customParameters: {
                  v: "2"
                }
              },
              token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1YzA3ZWEzZS0yYmMzLTQ3MzAtYmQ3MS05OWNiZTBiNzQxMGQiLCJpZCI6MjU5LCJhc3NldElkIjo3NTM0MywiYXNzZXRzIjp7Ijc1MzQzIjp7InR5cGUiOiIzRFRJTEVTIiwicHJlZml4IjoiTllDRG9JVFQvdjEifX0sInNyYyI6Ijc4NmQwNDM5LTdkYmMtNDNlZS1iOWZjLThmYzljZTA3M2EyZiIsImlhdCI6MTcxMTA5MjkzNCwiZXhwIjoxNzExMDk2NTM0fQ.TPrhwltQi-DtSL1RpD3BbNuwjzmC35XIjHh2Ks5Eb2U",
              url: url4,
              onLoad: layerLoad
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VaAreaMeasurement3d), { position: "top-right" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VaIntegratedMesh3dTilesLayer), {
                "default-options": {
                  customParameters: {
                    v: "2"
                  }
                },
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1YzA3ZWEzZS0yYmMzLTQ3MzAtYmQ3MS05OWNiZTBiNzQxMGQiLCJpZCI6MjU5LCJhc3NldElkIjo3NTM0MywiYXNzZXRzIjp7Ijc1MzQzIjp7InR5cGUiOiIzRFRJTEVTIiwicHJlZml4IjoiTllDRG9JVFQvdjEifX0sInNyYyI6Ijc4NmQwNDM5LTdkYmMtNDNlZS1iOWZjLThmYzljZTA3M2EyZiIsImlhdCI6MTcxMTA5MjkzNCwiZXhwIjoxNzExMDk2NTM0fQ.TPrhwltQi-DtSL1RpD3BbNuwjzmC35XIjHh2Ks5Eb2U",
                url: url4,
                onLoad: layerLoad
              }, null, 8, ["token"]),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/integrated-mesh-3d-tiles-layer/basic2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
