import { defineComponent, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { V as VaGeojsonLayer } from "./chunk-5WfSdRWZ.js";
import { V as VaMapView } from "./chunk-6fAe7ZtF.js";
import { V as VaTdtBasemap } from "./chunk-XxvgZNck.js";
import { V as VaPopupTemplate } from "./chunk-tCa8aS7W.js";
import { V as VaFeaturePopupLayer } from "./chunk-ThA0hHfL.js";
import "./chunk-ZSpamg93.js";
import "@vunk/core/shared/utils-vue";
import "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-3BageVRQ.js";
import "./chunk-RQshD5bR.js";
import "@vunk/core/shared/utils-class";
import "./chunk-oD5XiDYU.js";
import "./chunk-yCPoYwni.js";
import "./chunk-AN2pNKfL.js";
import "mitt";
import "./chunk-x8u7LPTa.js";
import "vike/server";
import "vike-vue/usePageContext";
import "./chunk-vndPU1ZH.js";
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
import "./chunk-4l9VVe6n.js";
import "./chunk-8CFIjXxc.js";
import "./chunk-bIq5xhw6.js";
import "./chunk-VS0cZDQt.js";
import "./chunk-_8aSZzrH.js";
import "./chunk-uYLXIHjo.js";
import "./chunk-jT36EoyW.js";
import "./chunk-ANxjAjSR.js";
import "./chunk-vvav8UfW.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "popup",
  __ssrInlineRender: true,
  setup(__props) {
    const url = "/vuesri/data/cell.json";
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/geojson-layer/popup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
