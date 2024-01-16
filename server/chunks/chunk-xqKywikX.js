import { defineComponent, ref, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VaSceneView } from "./chunk-MFY2zKAf.js";
import "./chunk-v2Cj5Nes.js";
import { V as VaServerFeatureLayer } from "./chunk-rABMI5wi.js";
import { V as VaTdtBasemap } from "./chunk-2_8Nl9Hn.js";
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
import "./chunk-MaQWsU9J.js";
import "./chunk-cQlS_KkA.js";
import "./chunk-B7M5Xqd5.js";
import "./chunk-AN2pNKfL.js";
import "./chunk-qHSzybEP.js";
import "./chunk-BSxDNfxQ.js";
import "./chunk-Y9HZwdAu.js";
import "./chunk-jzCtEhR4.js";
import "./chunk-LGmaep6O.js";
import "./chunk-OjvQdFJg.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "polygon",
  __ssrInlineRender: true,
  setup(__props) {
    const layerLoad = async (e) => {
      const view = e.view;
      await view.when();
      await e.layer.when();
      view.goTo([
        121.63143398052135,
        30.00697132738692
      ], {
        animate: false
      }).then(() => {
        view.zoom = 12;
      });
    };
    const layerClick = async (e) => {
      const { result } = e;
      if (result) {
        console.log(result);
      }
    };
    const definitionExpression = ref("1=1");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VaSceneView), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VaTdtBasemap), {
              type: "vec_w",
              "spatial-reference": { wkid: 3857 }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VaServerFeatureLayer), {
              "default-options": {
                elevationInfo: {
                  mode: "on-the-ground"
                }
              },
              definitionExpression: definitionExpression.value,
              cursor: "pointer",
              url: "http://t1.zjsophon.com:14000/arcgis/rest/services/ZHNLW/ZHNLWLC_20231011/MapServer/0",
              onLoad: layerLoad,
              onClick: layerClick
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VaTdtBasemap), {
                type: "vec_w",
                "spatial-reference": { wkid: 3857 }
              }),
              createVNode(unref(VaServerFeatureLayer), {
                "default-options": {
                  elevationInfo: {
                    mode: "on-the-ground"
                  }
                },
                definitionExpression: definitionExpression.value,
                cursor: "pointer",
                url: "http://t1.zjsophon.com:14000/arcgis/rest/services/ZHNLW/ZHNLWLC_20231011/MapServer/0",
                onLoad: layerLoad,
                onClick: layerClick
              }, null, 8, ["definitionExpression", "url"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/server-feature-layer/polygon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
