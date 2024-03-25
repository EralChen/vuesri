import { defineComponent, ref, computed, unref, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VaMapView } from "./chunk-6fAe7ZtF.js";
import { V as VaTdtBasemap } from "./chunk-XxvgZNck.js";
import { V as VaImageryTileLayer } from "./chunk-4GNTLucG.js";
import { VkfForm } from "@vunk/form";
import { setData } from "@vunk/core";
import { iu as u, iv as p } from "./chunk-ejFG4zJ0.js";
import "./chunk-4l9VVe6n.js";
import "./chunk-oD5XiDYU.js";
import "@vunk/core/shared/utils-class";
import "./chunk-3BageVRQ.js";
import "lodash-es";
import "mitt";
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
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const url = "https://192.168.110.119/server/rest/services/nb2000/MapServer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "basic",
  __ssrInlineRender: true,
  setup(__props) {
    const formData = ref({
      // color: 'rgba(255, 0, 0, 0.5)',
      trailWidth: 2,
      density: 0.5
    });
    const renderer = computed(() => {
      const renderer2 = new u({
        ...formData.value,
        // color: new Color(formData.value.color),
        visualVariables: [
          new p({
            field: "Magnitude",
            stops: [
              { color: [40, 146, 199, 1], value: 0 },
              { color: [160, 194, 155, 1], value: 5 },
              { color: [218, 230, 119, 1], value: 10 }
            ]
          })
        ]
      });
      return renderer2;
    });
    const formItems = [
      // {
      //   templateType: 'VkfColorPicker',
      //   prop: 'color',
      //   label: '颜色',
      //   showAlpha: true,
      //   colorFormat: 'rgba',
      // },
      {
        templateType: "VkfInputNumber",
        prop: "trailWidth",
        label: "轨迹宽度"
      },
      {
        templateType: "VkfInputNumber",
        prop: "trailLength",
        label: "轨迹长度"
      },
      {
        templateType: "VkfInputNumber",
        prop: "flowSpeed",
        label: "流速"
      },
      {
        templateType: "VkfInputNumber",
        prop: "maxPathLength",
        label: "最大路径长度"
      },
      {
        templateType: "VkfInputNumber",
        prop: "density",
        label: "密度",
        max: 1,
        min: 0,
        step: 0.1
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VaMapView), mergeProps({ "default-options": {
        zoom: 2,
        center: [-103.81709716068798, 40.54343533248475]
      } }, _attrs), {
        before: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VkfForm), {
              "form-items": formItems,
              data: formData.value,
              onSetData: ($event) => unref(setData)(formData.value, $event)
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VkfForm), {
                "form-items": formItems,
                data: formData.value,
                onSetData: ($event) => unref(setData)(formData.value, $event)
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
            _push2(ssrRenderComponent(unref(VaImageryTileLayer), {
              effect: [],
              url,
              renderer: renderer.value
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
              createVNode(unref(VaImageryTileLayer), {
                effect: [],
                url,
                renderer: renderer.value
              }, null, 8, ["renderer"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/imagery-tile-layer/basic.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
