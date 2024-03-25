import { defineComponent, ref, unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { V as VaGeojsonLayer } from "./chunk-5WfSdRWZ.js";
import { V as VaMapView } from "./chunk-6fAe7ZtF.js";
import { V as VaTdtBasemap } from "./chunk-XxvgZNck.js";
import { V as VaPopupTemplate } from "./chunk-tCa8aS7W.js";
import { VkfForm } from "@vunk/form";
import { setData } from "@vunk/core";
import "./chunk-ZSpamg93.js";
import "@vunk/core/shared/utils-vue";
import "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-3BageVRQ.js";
import "./chunk-RQshD5bR.js";
import "@vunk/core/shared/utils-class";
import "./chunk-oD5XiDYU.js";
import "./chunk-yCPoYwni.js";
import "./chunk-AN2pNKfL.js";
import "mitt";
import "./chunk-x8u7LPTa.js";
import "vike/server";
import "vike-vue/usePageContext";
import "./chunk-vndPU1ZH.js";
import "path";
import "element-plus";
import "@vueuse/core";
import "deepdash-es/standalone";
import "gsap";
import "@vunk/core/composables";
import "lodash-es";
import "@vunk/core/shared/utils-promise";
import "@vunk/core/components/client-only";
import "@element-plus/icons-vue";
import "./chunk-4l9VVe6n.js";
import "./chunk-8CFIjXxc.js";
import "./chunk-bIq5xhw6.js";
import "./chunk-VS0cZDQt.js";
import "./chunk-_8aSZzrH.js";
import "./chunk-uYLXIHjo.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "goto-offset",
  __ssrInlineRender: true,
  setup(__props) {
    const url = "/vuesri/data/cell.json";
    const formData = ref({
      offset: 0.5,
      expend: 4
    });
    const formItems = [
      {
        templateType: "VkfSlider",
        label: "偏移量",
        prop: "offset",
        max: 1,
        min: 0,
        step: 0.1
      },
      {
        templateType: "VkfSlider",
        prop: "expend",
        label: "扩展量",
        max: 5,
        min: 0,
        step: 0.1
      }
    ];
    const layerLoad = async (e) => {
      const view = e.view;
      await e.layer.when();
      console.log(e.layer);
      view.goTo(e.layer.fullExtent);
    };
    const layerClick = ({ result, view }) => {
      console.log(result);
      if (!result)
        return;
      let extent = result.graphic.geometry.extent.clone();
      if (formData.value.expend) {
        extent.expand(formData.value.expend);
      }
      if (formData.value.offset) {
        const yOffset = extent.height * formData.value.offset;
        extent.set("ymax", extent.ymax + yOffset);
        extent.set("ymin", extent.ymin + yOffset);
      }
      view.goTo(extent);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VaMapView), _attrs, {
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
            _push2(ssrRenderComponent(unref(VaTdtBasemap), null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VaGeojsonLayer), {
              cursor: "pointer",
              "geometry-type": "polygon",
              url,
              onClick: layerClick,
              onLoad: layerLoad
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(VaPopupTemplate), null, {
                    default: withCtx(({ attributes }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="goto-offset-popup"${_scopeId3}>${ssrInterpolate(attributes)}</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "goto-offset-popup" }, toDisplayString(attributes), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(VaPopupTemplate), null, {
                      default: withCtx(({ attributes }) => [
                        createVNode("div", { class: "goto-offset-popup" }, toDisplayString(attributes), 1)
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
              createVNode(unref(VaTdtBasemap)),
              createVNode(unref(VaGeojsonLayer), {
                cursor: "pointer",
                "geometry-type": "polygon",
                url,
                onClick: layerClick,
                onLoad: layerLoad
              }, {
                default: withCtx(() => [
                  createVNode(unref(VaPopupTemplate), null, {
                    default: withCtx(({ attributes }) => [
                      createVNode("div", { class: "goto-offset-popup" }, toDisplayString(attributes), 1)
                    ]),
                    _: 1
                  })
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
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/popup-template/goto-offset.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
