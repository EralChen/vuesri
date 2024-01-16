import { defineComponent, ref, shallowReactive, unref, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { V as VaMapView } from "./chunk-r6MU8tCx.js";
import { V as VaTdtBasemap } from "./chunk-2_8Nl9Hn.js";
import _sfc_main$1 from "./chunk-pNrjcQvE.js";
import { V as VaPopupTemplate } from "./chunk-08vL7VDD.js";
import { hQ as v } from "./chunk-KFNcxJaF.js";
import { VkfForm } from "@vunk/form";
import { setData } from "@vunk/core";
import "./chunk-chuKOP2I.js";
import "./chunk-oD5XiDYU.js";
import "@vunk/core/shared/utils-class";
import "lodash-es";
import "mitt";
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
import "./chunk-iZ30axoT.js";
import "./chunk-cQlS_KkA.js";
import "./chunk-B7M5Xqd5.js";
import "./chunk-qHSzybEP.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const owsUrl = "http://192.168.110.250:8080/geoserver/pub/ows";
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
      data: void 0,
      name: ""
    });
    rCapabilities();
    function rCapabilities() {
      v(owsUrl).then((res) => {
        capabilitiesState.data = res;
        layerNameOptions.value = res.featureTypes.map((item) => {
          return {
            label: item.name,
            value: item.name
          };
        });
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VaMapView), mergeProps({ defaultOptions: {
        zoom: 2
      } }, _attrs), {
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
              type: "vec_w",
              anno: false,
              "spatial-reference": {
                wkid: 3857
              }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, {
              capabilities: unref(capabilitiesState).data,
              name: unref(capabilitiesState).name,
              onLoad: layerLoad
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(VaPopupTemplate), null, {
                    default: withCtx(({
                      attributes
                    }, _push4, _parent4, _scopeId3) => {
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
                      default: withCtx(({
                        attributes
                      }) => [
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
                type: "vec_w",
                anno: false,
                "spatial-reference": {
                  wkid: 3857
                }
              }),
              createVNode(_sfc_main$1, {
                capabilities: unref(capabilitiesState).data,
                name: unref(capabilitiesState).name,
                onLoad: layerLoad
              }, {
                default: withCtx(() => [
                  createVNode(unref(VaPopupTemplate), null, {
                    default: withCtx(({
                      attributes
                    }) => [
                      createTextVNode(toDisplayString(attributes), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["capabilities", "name"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/wfs-layer/capabilities/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
