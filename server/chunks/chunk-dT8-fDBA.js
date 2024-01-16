import { defineComponent, ref, computed, resolveComponent, unref, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VaMapView } from "./chunk-r6MU8tCx.js";
import { V as VaTdtBasemap } from "./chunk-2_8Nl9Hn.js";
import { V as VaGraphic } from "./chunk-Z6BuYssA.js";
import { cy as x$1, cK as n } from "./chunk-KFNcxJaF.js";
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
import "./chunk-BSxDNfxQ.js";
import "./chunk-Y9HZwdAu.js";
import "./chunk-jzCtEhR4.js";
import "./chunk-LGmaep6O.js";
import "./chunk-MaQWsU9J.js";
import "./chunk-OjvQdFJg.js";
import "./chunk-AN2pNKfL.js";
import "./chunk-qHSzybEP.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "change",
  __ssrInlineRender: true,
  setup(__props) {
    const geoValue = ref({
      latitude: 30.066146833965956,
      longitude: 121.11044546717469
    });
    const geometry = computed(() => {
      return new x$1({
        latitude: geoValue.value.latitude,
        longitude: geoValue.value.longitude
      });
    });
    const symbol = new n({
      url: "/images/thanks/zzlogo.png"
    });
    const geometryChange = () => {
      geoValue.value = {
        latitude: 31,
        longitude: 120
      };
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElButton = resolveComponent("ElButton");
      _push(ssrRenderComponent(unref(VaMapView), mergeProps({ "default-options": {
        zoom: 2,
        center: [121.11044546717469, 30.066146833965956]
      } }, _attrs), {
        before: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ElButton, { onClick: geometryChange }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` change `);
                } else {
                  return [
                    createTextVNode(" change ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ElButton, { onClick: geometryChange }, {
                default: withCtx(() => [
                  createTextVNode(" change ")
                ]),
                _: 1
              })
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
            _push2(ssrRenderComponent(unref(VaGraphic), {
              geometry: geometry.value,
              symbol: unref(symbol)
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VaTdtBasemap), {
                type: "vec_w",
                anno: false,
                "spatial-reference": {
                  wkid: 3857
                }
              }),
              createVNode(unref(VaGraphic), {
                geometry: geometry.value,
                symbol: unref(symbol)
              }, null, 8, ["geometry", "symbol"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/graphic/change.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};