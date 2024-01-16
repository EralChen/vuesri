import { defineComponent, ref, computed, unref, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VaMapView } from "./chunk-r6MU8tCx.js";
import { V as VaTdtBasemap } from "./chunk-2_8Nl9Hn.js";
import { V as VaImageryLayer } from "./chunk-bVbc8K6r.js";
import { VkfForm } from "@vunk/form";
import { setData } from "@vunk/core";
import { hG as u, bu as u$1 } from "./chunk-KFNcxJaF.js";
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
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const url5 = "https://skzz.cn/server/rest/services/FCFW/2023-12-27-10/ImageServer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "basic",
  __ssrInlineRender: true,
  setup(__props) {
    const formData = ref({
      color: "rgba(255, 0, 0, 0.5)",
      trailWidth: 4
    });
    const renderer = computed(() => {
      const renderer2 = new u({
        ...formData.value,
        color: new u$1(formData.value.color)
      });
      return renderer2;
    });
    const layerLoad = async (e) => {
      const view = e.view;
      await e.layer.when();
      view.goTo(e.layer.fullExtent);
    };
    const formItems = [
      {
        templateType: "VkfColorPicker",
        prop: "color",
        label: "颜色",
        showAlpha: true,
        colorFormat: "rgba"
      },
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
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VaMapView), mergeProps({ "default-options": {
        zoom: 2
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
            _push2(ssrRenderComponent(unref(VaImageryLayer), {
              renderer: renderer.value,
              url: url5,
              onLoad: layerLoad
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
              createVNode(unref(VaImageryLayer), {
                renderer: renderer.value,
                url: url5,
                onLoad: layerLoad
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/imagery-layer/basic.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
