import { inject, defineComponent, onBeforeUnmount, useSSRContext, ref, shallowReactive, unref, withCtx, createVNode, createTextVNode, toDisplayString } from "vue";
import { ssrRenderSlot, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { setData } from "@vunk/core";
import { VkfForm } from "@vunk/form";
import { RestFetch } from "@vunk/core/shared/utils-fetch";
import { aQ as U$1, bJ as c$1 } from "./chunk-ejFG4zJ0.js";
import "@vunk/core/shared/utils-class";
import "./chunk-6fAe7ZtF.js";
import "./chunk-5WfSdRWZ.js";
import "./chunk-bIq5xhw6.js";
import "./chunk-X_rfk1VD.js";
import "./chunk-uYLXIHjo.js";
import "./chunk-U1ea7-4d.js";
import "./chunk-Tuvo6ubl.js";
import "./chunk-CTgLT-4V.js";
import { V as VaTdtBasemap } from "./chunk-XxvgZNck.js";
import "./chunk-_8aSZzrH.js";
import "./chunk-VS0cZDQt.js";
import "./chunk-LrwsxPyy.js";
import "./chunk-iZwZ9EU9.js";
import { V as VaSceneView } from "./chunk-8WuUWlIZ.js";
import "./chunk-9IwRySYm.js";
import "./chunk-x7Vgxnqr.js";
import "./chunk-_oluUB0p.js";
import "./chunk-v-t_EqND.js";
import "./chunk-ZGB6GbeH.js";
import "./chunk-ANxjAjSR.js";
import "./chunk-jT36EoyW.js";
import { V as VaPopupTemplate } from "./chunk-tCa8aS7W.js";
import "./chunk-ThA0hHfL.js";
import "./chunk-c7c2gizP.js";
import "./chunk-NZ-e60VG.js";
import "./chunk-NDX-KDEx.js";
import "./chunk-za8lbvAb.js";
import "./chunk-ounOpSOX.js";
import "./chunk-vHf8RaFE.js";
import "./chunk-u_etbwnt.js";
import "./chunk-iGCIByDy.js";
import "./chunk-4GNTLucG.js";
import "./chunk-9KNzZOBs.js";
import "./chunk-pvYyIdE3.js";
import { V as VaWmsLayer } from "./chunk-RUgugDuD.js";
import "./chunk-TKb6VnDe.js";
import "./chunk-W5F64WU4.js";
import { u as useWmsLayer } from "./chunk-zebr3EP1.js";
import { _ as _export_sfc } from "./chunk-x8u7LPTa.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-4l9VVe6n.js";
import "./chunk-oD5XiDYU.js";
import "./chunk-3BageVRQ.js";
import "lodash-es";
import "mitt";
import "./chunk-ZSpamg93.js";
import "@vunk/core/shared/utils-vue";
import "./chunk-RQshD5bR.js";
import "./chunk-yCPoYwni.js";
import "./chunk-AN2pNKfL.js";
import "./chunk-vvav8UfW.js";
import "./chunk-utiawlkN.js";
import "./chunk-8CFIjXxc.js";
import "./chunk-wa_PWVge.js";
import "./chunk-gvpbtdma.js";
import "@vueuse/core";
import "@vunk/core/composables";
import "./chunk-ggs_QHBV.js";
import "./chunk-RYbJjpM2.js";
import "./chunk-tGOnCZwP.js";
import "./chunk-0A6HSBpB.js";
import "vike/server";
import "vike-vue/usePageContext";
import "./chunk-vndPU1ZH.js";
import "path";
import "element-plus";
import "deepdash-es/standalone";
import "gsap";
import "@vunk/core/shared/utils-promise";
import "@vunk/core/components/client-only";
import "@element-plus/icons-vue";
function usePopupTemplate() {
  const instance = inject("vaPopupTemplate");
  if (!instance) {
    throw new Error("The component which use usePopupTemplate() must be in a PopupTemplate component");
  }
  return instance;
}
const geoserver = "http://t1.zjsophon.com:10000/geoserver";
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
const props = {
  defaultOptions: {
    type: Object,
    default: () => ({})
  }
};
const emits = {
  load: (e) => e
};
const _sfc_main$1 = defineComponent({
  name: "VaWmsLayerPopupTemplate",
  emits,
  props,
  setup(props2, { emit }) {
    const layer = useWmsLayer();
    const origin = layer.fetchFeatureInfoFunction;
    const popupTemplate = usePopupTemplate();
    layer.fetchFeatureInfoFunction = async (query) => {
      query.info_format = "application/json";
      query.feature_count = 5;
      const { data } = await U$1(layer.featureInfoUrl, {
        query
      });
      return data.features.map(
        (feature) => new c$1({
          attributes: feature.properties,
          // Define a popup template to format field names and values in a table.
          popupTemplate
        })
      );
    };
    onBeforeUnmount(() => {
      layer.fetchFeatureInfoFunction = origin;
    });
    return {
      popupTemplate
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/wms-layer-popup-template/src/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props2, ctx) : void 0;
};
const VaWmsLayerPopupTemplate = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
VaWmsLayerPopupTemplate.install = (app) => {
  app.component(VaWmsLayerPopupTemplate.name, VaWmsLayerPopupTemplate);
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
                  _push3(ssrRenderComponent(unref(VaPopupTemplate), { orphan: true }, {
                    plugins: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(VaWmsLayerPopupTemplate), null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(VaWmsLayerPopupTemplate))
                        ];
                      }
                    }),
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
                    createVNode(unref(VaPopupTemplate), { orphan: true }, {
                      plugins: withCtx(() => [
                        createVNode(unref(VaWmsLayerPopupTemplate))
                      ]),
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
                  createVNode(unref(VaPopupTemplate), { orphan: true }, {
                    plugins: withCtx(() => [
                      createVNode(unref(VaWmsLayerPopupTemplate))
                    ]),
                    default: withCtx(({ attributes }) => [
                      createTextVNode(toDisplayString(attributes), 1)
                    ]),
                    _: 1
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
_sfc_main.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/wms-layer-popup-template/basic/index.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
export {
  _sfc_main as default
};
