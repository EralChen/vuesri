import { defineComponent, reactive, resolveComponent, unref, mergeProps, withCtx, createTextVNode, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { V as VaMapView } from "./chunk-r6MU8tCx.js";
import { V as VaTdtBasemap } from "./chunk-2_8Nl9Hn.js";
import { Deferred } from "@vunk/core/shared/utils-promise";
import "./chunk-KFNcxJaF.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
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
import "@vunk/core/components/client-only";
import "@element-plus/icons-vue";
import "./chunk-BSxDNfxQ.js";
import "./chunk-Y9HZwdAu.js";
import "./chunk-jzCtEhR4.js";
import "./chunk-LGmaep6O.js";
import "./chunk-MaQWsU9J.js";
import "./chunk-OjvQdFJg.js";
import "./chunk-AN2pNKfL.js";
const tdtPcTk = "f0175927031c1e12cb804b0c3b8cce4d";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "to-img",
  __ssrInlineRender: true,
  setup(__props) {
    const viewDef = new Deferred();
    const imgState = reactive({
      visible: false,
      src: ""
    });
    const getContext = /* @__PURE__ */ function(origFn) {
      return function(type, attributes) {
        if (type === "webgl" || type === "webgl2") {
          attributes = Object.assign({}, attributes, {
            preserveDrawingBuffer: true
          });
        }
        return origFn.call(this, type, attributes);
      };
    }(HTMLCanvasElement.prototype.getContext);
    if (HTMLCanvasElement.prototype.getContext !== getContext) {
      HTMLCanvasElement.prototype.getContext = getContext;
    }
    const toImg = async () => {
      const view = await viewDef.promise;
      await view.when();
      const canvas = view.container.querySelector("canvas");
      if (canvas) {
        imgState.src = canvas.toDataURL("image/png");
      }
      imgState.visible = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElButton = resolveComponent("ElButton");
      const _component_ElDialog = resolveComponent("ElDialog");
      _push(ssrRenderComponent(unref(VaMapView), mergeProps({
        defaultOptions: {
          zoom: 7,
          center: [121.34822492731212, 28.95909791842632]
        },
        onLoad: ($event) => unref(viewDef).resolve($event.view)
      }, _attrs), {
        before: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ElButton, { onClick: toImg }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`导出`);
                } else {
                  return [
                    createTextVNode("导出")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</p>`);
          } else {
            return [
              createVNode("p", null, [
                createVNode(_component_ElButton, { onClick: toImg }, {
                  default: withCtx(() => [
                    createTextVNode("导出")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VaTdtBasemap), {
              type: "vec_w",
              token: tdtPcTk,
              spatialReference: {
                wkid: 3857
              }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElDialog, {
              modelValue: imgState.visible,
              "onUpdate:modelValue": ($event) => imgState.visible = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (imgState.src) {
                    _push3(`<img${ssrRenderAttr("src", imgState.src)}${_scopeId2}>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    imgState.src ? (openBlock(), createBlock("img", {
                      key: 0,
                      src: imgState.src
                    }, null, 8, ["src"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VaTdtBasemap), {
                type: "vec_w",
                token: tdtPcTk,
                spatialReference: {
                  wkid: 3857
                }
              }),
              createVNode(_component_ElDialog, {
                modelValue: imgState.visible,
                "onUpdate:modelValue": ($event) => imgState.visible = $event
              }, {
                default: withCtx(() => [
                  imgState.src ? (openBlock(), createBlock("img", {
                    key: 0,
                    src: imgState.src
                  }, null, 8, ["src"])) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/print/to-img.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
