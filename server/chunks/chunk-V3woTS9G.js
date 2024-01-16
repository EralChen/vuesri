import { defineComponent, ref, unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { V as VaSceneView } from "./chunk-MFY2zKAf.js";
import "./chunk-v2Cj5Nes.js";
import { V as VaServerFeatureLayer } from "./chunk-rABMI5wi.js";
import { fY as p, cL as y$1 } from "./chunk-KFNcxJaF.js";
import { V as VaPopupTemplate } from "./chunk-08vL7VDD.js";
import _sfc_main$1 from "./chunk-jKzLWU5x.js";
import CoreVue from "./chunk-m18Soly9.js";
import { V as VaTdtBasemap } from "./chunk-2_8Nl9Hn.js";
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
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "@vunk/form";
import "./chunk-tGOnCZwP.js";
import "./chunk-gvpbtdma.js";
import "@vunk/core/shared/utils-object";
import "./chunk-BSxDNfxQ.js";
import "./chunk-Y9HZwdAu.js";
import "./chunk-jzCtEhR4.js";
import "./chunk-LGmaep6O.js";
import "./chunk-OjvQdFJg.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
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
    const renderer = new p({
      symbol: new y$1({
        size: 10,
        color: "green"
      })
    });
    const formData = ref({});
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VaSceneView), _attrs, {
        before: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, {
              onGo: ($event) => formData.value = { ...$event }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1, {
                onGo: ($event) => formData.value = { ...$event }
              }, null, 8, ["onGo"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VaTdtBasemap), {
              type: "vec_w",
              "spatial-reference": { wkid: 3857 }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VaServerFeatureLayer), {
              renderer: unref(renderer),
              cursor: "pointer",
              url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/US_National_Parks_Annual_Visitation/FeatureServer/0",
              onLoad: layerLoad,
              onClick: layerClick
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(VaPopupTemplate), null, {
                    default: withCtx(({ attributes }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div${_scopeId3}>${ssrInterpolate(attributes.ObjectId)}</div>`);
                      } else {
                        return [
                          createVNode("div", null, toDisplayString(attributes.ObjectId), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(CoreVue, { data: formData.value }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(VaPopupTemplate), null, {
                      default: withCtx(({ attributes }) => [
                        createVNode("div", null, toDisplayString(attributes.ObjectId), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(CoreVue, { data: formData.value }, null, 8, ["data"])
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
                renderer: unref(renderer),
                cursor: "pointer",
                url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/US_National_Parks_Annual_Visitation/FeatureServer/0",
                onLoad: layerLoad,
                onClick: layerClick
              }, {
                default: withCtx(() => [
                  createVNode(unref(VaPopupTemplate), null, {
                    default: withCtx(({ attributes }) => [
                      createVNode("div", null, toDisplayString(attributes.ObjectId), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(CoreVue, { data: formData.value }, null, 8, ["data"])
                ]),
                _: 1
              }, 8, ["renderer", "url"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/popup-template/popup-open/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
