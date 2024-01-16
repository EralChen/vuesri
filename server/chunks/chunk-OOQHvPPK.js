import { defineComponent, reactive, unref, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VaSceneView } from "./chunk-MFY2zKAf.js";
import { V as VaTdtBasemap } from "./chunk-2_8Nl9Hn.js";
import { V as VaSceneLayer } from "./chunk-KhuIGkbC.js";
import { V as VaSlice } from "./chunk-CRQV7rMz.js";
import { VkfForm } from "@vunk/form";
import { setData } from "@vunk/core";
import _sfc_main$1 from "./chunk-HpqHtGYm.js";
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
import "./chunk-4y4AoNcC.js";
import "./chunk-vvav8UfW.js";
const url = "http://116.63.63.191/geoscene/rest/services/XZ/dk_sw3857/SceneServer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const viewModel = reactive({
      tiltEnabled: false
    });
    const formItems = [
      {
        templateType: "VkfSwitch",
        prop: "tiltEnabled",
        label: "倾斜启用"
      }
    ];
    const layerLoad = async ({
      view,
      layer
    }) => {
      await layer.when();
      view.goTo(layer.fullExtent);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VaSceneView), mergeProps({ defaultOptions: {
        zoom: 2
      } }, _attrs), {
        before: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VkfForm), {
              formItems,
              data: viewModel,
              onSetData: ($event) => unref(setData)(viewModel, $event)
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VkfForm), {
                formItems,
                data: viewModel,
                onSetData: ($event) => unref(setData)(viewModel, $event)
              }, null, 8, ["data", "onSetData"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VaTdtBasemap), {
              type: "vec_w",
              anno: false,
              "spatial-reference": {
                wkid: 3857
              }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$1, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VaSceneLayer), {
              url,
              onLoad: layerLoad
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VaSlice), {
              position: "top-right",
              viewModel
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VaTdtBasemap), {
                type: "vec_w",
                anno: false,
                "spatial-reference": {
                  wkid: 3857
                }
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$1)
                ]),
                _: 1
              }),
              createVNode(unref(VaSceneLayer), {
                url,
                onLoad: layerLoad
              }),
              createVNode(unref(VaSlice), {
                position: "top-right",
                viewModel
              }, null, 8, ["viewModel"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/slice/scene-layer/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
