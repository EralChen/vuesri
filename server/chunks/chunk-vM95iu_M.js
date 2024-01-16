import { defineComponent, ref, shallowReactive, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VaSceneView } from "./chunk-MFY2zKAf.js";
import { V as VaTdtBasemap } from "./chunk-2_8Nl9Hn.js";
import { V as VaWmsLayer } from "./chunk-uU1h_k6m.js";
import { setData } from "@vunk/core";
import { VkfForm } from "@vunk/form";
import { r as rLayers, g as geoserver } from "./chunk-e-GYT1mu.js";
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
import "@vunk/core/shared/utils-fetch";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "basic",
  __ssrInlineRender: true,
  setup(__props) {
    const layerLoad = async (e) => {
      const view = e.view;
      await e.layer.when();
      view.goTo(e.layer.fullExtent);
    };
    const layerNameOptions = ref([]);
    const formItems = ref([
      {
        templateType: "VkfSelect",
        prop: "name",
        filterable: true,
        options: layerNameOptions
      }
    ]);
    const capabilitiesState = shallowReactive({
      data: void 0,
      name: ""
    });
    rLayers$1();
    function rLayers$1() {
      rLayers().then((res) => {
        layerNameOptions.value = res.map((v) => {
          return {
            label: v.name,
            value: v.name
          };
        });
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VaSceneView), _attrs, {
        before: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VkfForm), {
              formItems: formItems.value,
              data: unref(capabilitiesState),
              onSetData: ($event) => unref(setData)(unref(capabilitiesState), $event)
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VkfForm), {
                formItems: formItems.value,
                data: unref(capabilitiesState),
                onSetData: ($event) => unref(setData)(unref(capabilitiesState), $event)
              }, null, 8, ["formItems", "data", "onSetData"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VaTdtBasemap), {
              type: "vec_c",
              anno: false,
              "spatial-reference": {
                wkid: 4490
              }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VaWmsLayer), {
              url: unref(geoserver) + "/ows",
              onLoad: layerLoad,
              sublayers: [
                {
                  name: unref(capabilitiesState).name
                }
              ]
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VaTdtBasemap), {
                type: "vec_c",
                anno: false,
                "spatial-reference": {
                  wkid: 4490
                }
              }),
              createVNode(unref(VaWmsLayer), {
                url: unref(geoserver) + "/ows",
                onLoad: layerLoad,
                sublayers: [
                  {
                    name: unref(capabilitiesState).name
                  }
                ]
              }, null, 8, ["url", "sublayers"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/wms-layer/skzz/basic.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
