import { defineComponent, unref, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VaSceneView } from "./chunk-MFY2zKAf.js";
import { V as VaTdtBasemap } from "./chunk-2_8Nl9Hn.js";
import { V as VaSceneLayer } from "./chunk-KhuIGkbC.js";
import "./chunk-KFNcxJaF.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "mitt";
import "./chunk-chuKOP2I.js";
import "./chunk-oD5XiDYU.js";
import "@vunk/core/shared/utils-class";
import "lodash-es";
import "./chunk-rLRIqhK0.js";
import "vike/server";
import "vike-vue/usePageContext";
import "./chunk-8AIdLOXL.js";
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
import "./chunk-BSxDNfxQ.js";
import "./chunk-Y9HZwdAu.js";
import "./chunk-jzCtEhR4.js";
import "./chunk-LGmaep6O.js";
import "./chunk-MaQWsU9J.js";
import "./chunk-OjvQdFJg.js";
import "./chunk-AN2pNKfL.js";
import "./chunk-tGOnCZwP.js";
import "./chunk-B7M5Xqd5.js";
import "./chunk-qHSzybEP.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "basic",
  __ssrInlineRender: true,
  setup(__props) {
    const layerLoad = async (e) => {
      await e.layer.when();
      const view = e.view;
      view.goTo(
        e.layer.fullExtent,
        {
          duration: 2e3
        }
      );
    };
    const viewLoad = async (e) => {
      const view = e.view;
      await view.when();
      const map = view.map;
      map.ground.opacity = 0.5;
      map.ground.navigationConstraint = {
        type: "none"
      };
    };
    const layerClick = (e) => {
      console.log(e.result, "layerClick");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VaSceneView), mergeProps({ onLoad: viewLoad }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VaTdtBasemap), {
              type: "vec_w",
              anno: false,
              "spatial-reference": {
                wkid: 3857
              }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VaSceneLayer), {
              url: "https://services2.arcgis.com/cFEFS0EWrhfDeVw9/arcgis/rest/services/NYC_Utilities_Water_Main/SceneServer",
              onLoad: layerLoad,
              onClick: layerClick,
              "default-options": {
                popupEnabled: false
              },
              cursor: "pointer"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VaTdtBasemap), {
                type: "vec_w",
                anno: false,
                "spatial-reference": {
                  wkid: 3857
                }
              }),
              createVNode(unref(VaSceneLayer), {
                url: "https://services2.arcgis.com/cFEFS0EWrhfDeVw9/arcgis/rest/services/NYC_Utilities_Water_Main/SceneServer",
                onLoad: layerLoad,
                onClick: layerClick,
                "default-options": {
                  popupEnabled: false
                },
                cursor: "pointer"
              }, null, 8, ["url"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/scene-layer/basic.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
