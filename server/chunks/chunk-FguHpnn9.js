import { defineComponent, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { V as VaSceneView } from "./chunk-MFY2zKAf.js";
import "./chunk-v2Cj5Nes.js";
import { V as VaServerFeatureLayer } from "./chunk-rABMI5wi.js";
import { V as VaFeaturePopupLayer } from "./chunk-R3Bneq-q.js";
import { a as levelToScale } from "./chunk-jzCtEhR4.js";
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
import "./chunk-dS4C41P5.js";
import "./chunk-4y4AoNcC.js";
import "./chunk-vvav8UfW.js";
import "./chunk-QJsJaxCs.js";
import "./chunk-LGmaep6O.js";
import "./chunk-BSxDNfxQ.js";
import "./chunk-Y9HZwdAu.js";
import "./chunk-OjvQdFJg.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "query-extent",
  __ssrInlineRender: true,
  setup(__props) {
    const layerLoad = async (e) => {
      const view = e.view;
      await e.layer.when();
      view.goTo(e.layer.fullExtent);
    };
    const layerClick = async (e) => {
      const { result } = e;
      if (result) {
        console.log(result);
      }
    };
    const maxScale = levelToScale[18];
    const minScale = levelToScale[15];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VaSceneView), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VaTdtBasemap), {
              type: "vec_w",
              "spatial-reference": { wkid: 3857 }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VaServerFeatureLayer), {
              visible: false,
              cursor: "pointer",
              url: "http://192.168.110.119:6080/arcgis/rest/services/xzqh/nbs_xzqh4490/MapServer/3/query",
              onLoad: layerLoad,
              onClick: layerClick
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(VaFeaturePopupLayer), {
                    class: "fpl-demo",
                    queryExtent: true,
                    maxScale: unref(maxScale),
                    minScale: unref(minScale)
                  }, {
                    default: withCtx(({ attributes }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(attributes.qx_name)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(attributes.qx_name), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(VaFeaturePopupLayer), {
                      class: "fpl-demo",
                      queryExtent: true,
                      maxScale: unref(maxScale),
                      minScale: unref(minScale)
                    }, {
                      default: withCtx(({ attributes }) => [
                        createTextVNode(toDisplayString(attributes.qx_name), 1)
                      ]),
                      _: 1
                    }, 8, ["maxScale", "minScale"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VaTdtBasemap), {
                type: "vec_w",
                "spatial-reference": { wkid: 3857 }
              }),
              createVNode(unref(VaServerFeatureLayer), {
                visible: false,
                cursor: "pointer",
                url: "http://192.168.110.119:6080/arcgis/rest/services/xzqh/nbs_xzqh4490/MapServer/3/query",
                onLoad: layerLoad,
                onClick: layerClick
              }, {
                default: withCtx(() => [
                  createVNode(unref(VaFeaturePopupLayer), {
                    class: "fpl-demo",
                    queryExtent: true,
                    maxScale: unref(maxScale),
                    minScale: unref(minScale)
                  }, {
                    default: withCtx(({ attributes }) => [
                      createTextVNode(toDisplayString(attributes.qx_name), 1)
                    ]),
                    _: 1
                  }, 8, ["maxScale", "minScale"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/feature-popup-layer/query-extent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
