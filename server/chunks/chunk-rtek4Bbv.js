import { defineComponent, shallowRef, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { V as VaSceneView } from "./chunk-MFY2zKAf.js";
import { V as VaTdtBasemap } from "./chunk-2_8Nl9Hn.js";
import { V as VaWmsLayer } from "./chunk-uU1h_k6m.js";
import { V as VaWmsLayerOnClick } from "./chunk-GjMlxJO9.js";
import { V as VaSketch } from "./chunk-WRGOaKKa.js";
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
import "./chunk-zebr3EP1.js";
import "./chunk-qHSzybEP.js";
import "./chunk-4y4AoNcC.js";
import "./chunk-vvav8UfW.js";
import "./chunk-ggs_QHBV.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const geometry = shallowRef([]);
    const completeGeometry = shallowRef("");
    const sketchComplete = () => {
      const polygon = geometry.value[0].geometry;
      const ring = [...polygon.rings[0]];
      const ringStrArr = ring.map((v) => {
        return [v[0], v[1]].join(" ");
      });
      const polygonStr = `POLYGON((${ringStrArr.join(", ")}))`;
      completeGeometry.value = polygonStr;
    };
    const layerClick = (e) => {
      console.log("layerClick", e);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VaSceneView), _attrs, {
        after: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(completeGeometry.value)}`);
          } else {
            return [
              createTextVNode(toDisplayString(completeGeometry.value), 1)
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
            _push2(ssrRenderComponent(unref(VaSketch), {
              multiple: false,
              "available-creature-tools": ["rectangle"],
              modelValue: geometry.value,
              "onUpdate:modelValue": ($event) => geometry.value = $event,
              onComplete: sketchComplete
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VaWmsLayer), {
              url: "http://192.168.110.252:8080/geoserver/developReformDatahouse/ows",
              "custom-parameters": {
                "VERSION": "1.3.0",
                "CQL_FILTER": completeGeometry.value ? `INTERSECTS(shape, ${completeGeometry.value})` : "1=1"
              },
              sublayers: [
                {
                  name: "developReformDatahouse:tb_poi_gs",
                  visible: true,
                  queryable: true,
                  popupEnabled: false
                }
              ]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(VaWmsLayerOnClick), { onClick: layerClick }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(VaWmsLayerOnClick), { onClick: layerClick })
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
              createVNode(unref(VaSketch), {
                multiple: false,
                "available-creature-tools": ["rectangle"],
                modelValue: geometry.value,
                "onUpdate:modelValue": ($event) => geometry.value = $event,
                onComplete: sketchComplete
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(unref(VaWmsLayer), {
                url: "http://192.168.110.252:8080/geoserver/developReformDatahouse/ows",
                "custom-parameters": {
                  "VERSION": "1.3.0",
                  "CQL_FILTER": completeGeometry.value ? `INTERSECTS(shape, ${completeGeometry.value})` : "1=1"
                },
                sublayers: [
                  {
                    name: "developReformDatahouse:tb_poi_gs",
                    visible: true,
                    queryable: true,
                    popupEnabled: false
                  }
                ]
              }, {
                default: withCtx(() => [
                  createVNode(unref(VaWmsLayerOnClick), { onClick: layerClick })
                ]),
                _: 1
              }, 8, ["custom-parameters"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/wms-layer/cql_filter/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
