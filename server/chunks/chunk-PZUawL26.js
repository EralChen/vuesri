import { defineComponent, ref, shallowReactive, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VaSceneView } from "./chunk-8WuUWlIZ.js";
import { V as VaTdtBasemap } from "./chunk-XxvgZNck.js";
import { V as VaWmsLayer } from "./chunk-RUgugDuD.js";
import { setData } from "@vunk/core";
import { VkfForm } from "@vunk/form";
import { RestFetch } from "@vunk/core/shared/utils-fetch";
import { V as VaWmsLayerOnClick } from "./chunk-tfpShZLI.js";
import "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
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
import "element-plus";
import "@vueuse/core";
import "@vunk/core/shared/utils-vue";
import "deepdash-es/standalone";
import "gsap";
import "@vunk/core/composables";
import "@vunk/core/shared/utils-promise";
import "@vunk/core/components/client-only";
import "@element-plus/icons-vue";
import "./chunk-8CFIjXxc.js";
import "./chunk-bIq5xhw6.js";
import "./chunk-VS0cZDQt.js";
import "./chunk-_8aSZzrH.js";
import "./chunk-ZSpamg93.js";
import "./chunk-RQshD5bR.js";
import "./chunk-uYLXIHjo.js";
import "./chunk-AN2pNKfL.js";
import "./chunk-zebr3EP1.js";
const geoserver = "http://192.168.110.250:8080/geoserver";
const restFetch = new RestFetch({
  baseURL: geoserver,
  setRequestInit(config) {
    config.headers;
    return config;
  }
});
const request = (options) => {
  return restFetch.request(options);
};
const rLayers = () => {
  return request({
    method: "GET",
    url: "/rest/layers.json"
  }).then((res) => {
    return res.layers.layer;
  });
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
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
      name: "pub:O3_predict_20220301"
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
    const layerClick = (e) => {
      console.log("layerClick", e.requestResponse?.data);
    };
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
                  name: unref(capabilitiesState).name,
                  queryable: true,
                  popupEnabled: true
                }
              ]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(VaWmsLayerOnClick), {
                    extras: ["pub:world_background"],
                    onClick: layerClick
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(VaWmsLayerOnClick), {
                      extras: ["pub:world_background"],
                      onClick: layerClick
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
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
                    name: unref(capabilitiesState).name,
                    queryable: true,
                    popupEnabled: true
                  }
                ]
              }, {
                default: withCtx(() => [
                  createVNode(unref(VaWmsLayerOnClick), {
                    extras: ["pub:world_background"],
                    onClick: layerClick
                  })
                ]),
                _: 1
              }, 8, ["url", "sublayers"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/wms-layer-on-click/basic/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
