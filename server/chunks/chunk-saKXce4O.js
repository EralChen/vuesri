import { defineComponent, reactive, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VaSceneView } from "./chunk-8WuUWlIZ.js";
import { V as VaTdtBasemap } from "./chunk-XxvgZNck.js";
import { VkfForm } from "@vunk/form";
import { setData } from "@vunk/core";
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
const formItems = [
  {
    templateType: "VkfRadio",
    label: "地图类型",
    prop: "type",
    options: [
      {
        value: "vec_c"
      },
      {
        value: "img_c"
      },
      {
        value: "ter_c"
      },
      {
        value: "vec_w"
      },
      {
        value: "img_w"
      },
      {
        value: "ter_w"
      }
    ]
  },
  {
    templateType: "VkfSwitch",
    label: "地图注记",
    prop: "anno"
  }
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const formData = reactive({
      type: "img_w",
      anno: false
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VaSceneView), _attrs, {
        before: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VkfForm), {
              "form-items": unref(formItems),
              data: formData,
              onSetData: ($event) => unref(setData)(formData, $event)
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VkfForm), {
                "form-items": unref(formItems),
                data: formData,
                onSetData: ($event) => unref(setData)(formData, $event)
              }, null, 8, ["form-items", "data", "onSetData"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VaTdtBasemap), {
              type: formData.type,
              anno: formData.anno,
              "spatial-reference": {
                wkid: 3857
              }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VaTdtBasemap), {
                type: formData.type,
                anno: formData.anno,
                "spatial-reference": {
                  wkid: 3857
                }
              }, null, 8, ["type", "anno"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/tdt-basemap/basic/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
