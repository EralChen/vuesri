import { defineComponent, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { V as VaGeojsonLayer } from "./chunk-PDrLNMGN.js";
import { V as VaMapView } from "./chunk-r6MU8tCx.js";
import { V as VaTdtBasemap } from "./chunk-2_8Nl9Hn.js";
import { V as VaPopupTemplate } from "./chunk-08vL7VDD.js";
import { V as VaFeaturePopupLayer } from "./chunk-R3Bneq-q.js";
import _sfc_main$1 from "./chunk-bhSVy9oA.js";
import "./chunk-MaQWsU9J.js";
import "@vunk/core/shared/utils-vue";
import "./chunk-KFNcxJaF.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-oD5XiDYU.js";
import "./chunk-B7M5Xqd5.js";
import "./chunk-AN2pNKfL.js";
import "./chunk-qHSzybEP.js";
import "@vunk/core/shared/utils-class";
import "mitt";
import "./chunk-rLRIqhK0.js";
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
import "lodash-es";
import "@vunk/core/shared/utils-promise";
import "@vunk/core/components/client-only";
import "@element-plus/icons-vue";
import "./chunk-chuKOP2I.js";
import "./chunk-BSxDNfxQ.js";
import "./chunk-Y9HZwdAu.js";
import "./chunk-jzCtEhR4.js";
import "./chunk-LGmaep6O.js";
import "./chunk-OjvQdFJg.js";
import "./chunk-dS4C41P5.js";
import "./chunk-4y4AoNcC.js";
import "./chunk-vvav8UfW.js";
import "./chunk-QJsJaxCs.js";
import "./chunk-uciS6fD3.js";
import "./chunk-p3IoVg3s.js";
import "./chunk-_6WFmAiF.js";
import "./chunk-NkuZ7t90.js";
import "./chunk-vP0bHkve.js";
import "./chunk-tNARKRa3.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const url = "/data/cell.json";
    const layerLoad = async (e) => {
      const view = e.view;
      await e.layer.when();
      console.log(e.layer);
      view.goTo(e.layer.fullExtent);
    };
    const layerClick = ({ result }) => {
      console.log(result);
    };
    const layerPointerMove = (e) => {
      console.log(e);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VaMapView), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VaTdtBasemap), null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VaGeojsonLayer), {
              cursor: "pointer",
              "geometry-type": "polygon",
              url,
              onClick: layerClick,
              onLoad: layerLoad,
              onPointerMove: layerPointerMove
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(VaPopupTemplate), null, {
                    default: withCtx(({ attributes }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(attributes)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(attributes), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(VaFeaturePopupLayer), null, {
                    default: withCtx(({ attributes }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(attributes)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(attributes), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(VaPopupTemplate), null, {
                      default: withCtx(({ attributes }) => [
                        createTextVNode(toDisplayString(attributes), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(unref(VaFeaturePopupLayer), null, {
                      default: withCtx(({ attributes }) => [
                        createTextVNode(toDisplayString(attributes), 1)
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
              createVNode(unref(VaTdtBasemap)),
              createVNode(_sfc_main$1),
              createVNode(unref(VaGeojsonLayer), {
                cursor: "pointer",
                "geometry-type": "polygon",
                url,
                onClick: layerClick,
                onLoad: layerLoad,
                onPointerMove: layerPointerMove
              }, {
                default: withCtx(() => [
                  createVNode(unref(VaPopupTemplate), null, {
                    default: withCtx(({ attributes }) => [
                      createTextVNode(toDisplayString(attributes), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(unref(VaFeaturePopupLayer), null, {
                    default: withCtx(({ attributes }) => [
                      createTextVNode(toDisplayString(attributes), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/media-layer/layers/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
