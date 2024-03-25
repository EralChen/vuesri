import { defineComponent, watchEffect, useSSRContext, reactive, unref, mergeProps, withCtx, createVNode } from "vue";
import { ssrRenderSlot, ssrRenderComponent } from "vue/server-renderer";
import { V as VaSceneView } from "./chunk-8WuUWlIZ.js";
import { V as VaTdtBasemap } from "./chunk-XxvgZNck.js";
import { V as VaBuildingSceneLayer } from "./chunk-fJd8xF51.js";
import { V as VaSlice } from "./chunk-W5F64WU4.js";
import { VkfForm } from "@vunk/form";
import { setData } from "@vunk/core";
import { V as VaViewWhen } from "./chunk-iZwZ9EU9.js";
import { p as props$1 } from "./chunk-ANxjAjSR.js";
import { r4 as w } from "./chunk-ejFG4zJ0.js";
import { u as useSceneView } from "./chunk-tGOnCZwP.js";
import "@vunk/core/shared/utils-class";
import { u as useAddUi } from "./chunk-vvav8UfW.js";
import { _ as _export_sfc } from "./chunk-x8u7LPTa.js";
import { Deferred } from "@vunk/core/shared/utils-promise";
import "./chunk-3BageVRQ.js";
import "mitt";
import "./chunk-4l9VVe6n.js";
import "./chunk-oD5XiDYU.js";
import "lodash-es";
import "./chunk-8CFIjXxc.js";
import "./chunk-bIq5xhw6.js";
import "./chunk-VS0cZDQt.js";
import "./chunk-_8aSZzrH.js";
import "./chunk-ZSpamg93.js";
import "@vunk/core/shared/utils-vue";
import "./chunk-RQshD5bR.js";
import "./chunk-uYLXIHjo.js";
import "./chunk-AN2pNKfL.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "vike/server";
import "vike-vue/usePageContext";
import "./chunk-vndPU1ZH.js";
import "path";
import "element-plus";
import "@vueuse/core";
import "deepdash-es/standalone";
import "gsap";
import "@vunk/core/composables";
import "@vunk/core/components/client-only";
import "@element-plus/icons-vue";
const props = {
  ...props$1,
  defaultOptions: {
    type: Object,
    default: () => ({})
  },
  layers: {
    type: Array,
    default: () => []
  }
};
const emits = {
  load: (e) => e
};
const _sfc_main$1 = defineComponent({
  name: "VaBuildingExplorer",
  emits,
  props,
  setup(props2, { emit }) {
    const view = useSceneView();
    const buildingExplorer = new w({
      view,
      ...props2.defaultOptions
    });
    watchEffect(() => {
      buildingExplorer.layers = props2.layers;
    });
    useAddUi(view.ui, buildingExplorer, props2);
    emit("load", {
      buildingExplorer,
      view
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/building-explorer/src/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props2, ctx) : void 0;
};
const VaBuildingExplorer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
VaBuildingExplorer.install = (app) => {
  app.component(VaBuildingExplorer.name, VaBuildingExplorer);
};
const url = "https://tiles.arcgis.com/tiles/V6ZHFr6zdgNZuVG0/arcgis/rest/services/BSL__4326__US_Redlands__EsriAdminBldg_PublicDemo/SceneServer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "basic",
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
    const layerDef = new Deferred();
    const layerLoad = async ({
      view,
      layer
    }) => {
      await layer.when();
      view.goTo(layer.fullExtent);
      layerDef.resolve(layer);
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
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VaBuildingSceneLayer), {
              url,
              onLoad: layerLoad,
              title: "building-scene-layer"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VaSlice), {
              position: "top-left",
              viewModel
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VaViewWhen), null, {
              default: withCtx(({ getLayerByTitle }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(VaBuildingExplorer), {
                    position: "top-right",
                    defaultOptions: {
                      visibleElements: {
                        disciplines: true,
                        phases: true,
                        levels: true
                      }
                    },
                    layers: [getLayerByTitle("building-scene-layer")]
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(VaBuildingExplorer), {
                      position: "top-right",
                      defaultOptions: {
                        visibleElements: {
                          disciplines: true,
                          phases: true,
                          levels: true
                        }
                      },
                      layers: [getLayerByTitle("building-scene-layer")]
                    }, null, 8, ["layers"])
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
              createVNode(unref(VaBuildingSceneLayer), {
                url,
                onLoad: layerLoad,
                title: "building-scene-layer"
              }),
              createVNode(unref(VaSlice), {
                position: "top-left",
                viewModel
              }, null, 8, ["viewModel"]),
              createVNode(unref(VaViewWhen), null, {
                default: withCtx(({ getLayerByTitle }) => [
                  createVNode(unref(VaBuildingExplorer), {
                    position: "top-right",
                    defaultOptions: {
                      visibleElements: {
                        disciplines: true,
                        phases: true,
                        levels: true
                      }
                    },
                    layers: [getLayerByTitle("building-scene-layer")]
                  }, null, 8, ["layers"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/building-explorer/basic.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
export {
  _sfc_main as default
};
