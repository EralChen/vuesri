import { defineComponent, unref, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VaSceneView } from "./chunk-MFY2zKAf.js";
import "./chunk-KFNcxJaF.js";
import "./chunk-r6MU8tCx.js";
import "./chunk-PDrLNMGN.js";
import "./chunk-Y9HZwdAu.js";
import "./chunk-4bvItAH8.js";
import "./chunk-OjvQdFJg.js";
import "./chunk-gH_Mgyr_.js";
import "./chunk-IymnPBZM.js";
import "./chunk-v2Cj5Nes.js";
import { V as VaTdtBasemap } from "./chunk-2_8Nl9Hn.js";
import "./chunk-LGmaep6O.js";
import "./chunk-jzCtEhR4.js";
import "./chunk-rABMI5wi.js";
import "./chunk-FkyJuuRq.js";
import "./chunk-y4k8oYvv.js";
import "./chunk-gcnOZdJc.js";
import "./chunk-ZA9tv5iQ.js";
import "./chunk-2T2aQ3cG.js";
import "./chunk-Z6BuYssA.js";
import "./chunk-4y4AoNcC.js";
import "./chunk-dS4C41P5.js";
import "./chunk-08vL7VDD.js";
import "./chunk-R3Bneq-q.js";
import "./chunk-WRGOaKKa.js";
import "./chunk-D7r-bXho.js";
import "./chunk-MJ2lH7Ot.js";
import "./chunk-KhuIGkbC.js";
import "./chunk-ounOpSOX.js";
import "./chunk-MqJg2kR5.js";
import "./chunk-JOaXliPn.js";
import "./chunk-bVbc8K6r.js";
import "./chunk-klYLDG5N.js";
import "./chunk-n-CMOZOO.js";
import "./chunk-iZ30axoT.js";
import "./chunk-uU1h_k6m.js";
import "./chunk-xbOcex_F.js";
import "./chunk-CRQV7rMz.js";
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
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-MaQWsU9J.js";
import "./chunk-B7M5Xqd5.js";
import "./chunk-AN2pNKfL.js";
import "./chunk-qHSzybEP.js";
import "./chunk-vvav8UfW.js";
import "./chunk-5WMxrbI6.js";
import "./chunk-BSxDNfxQ.js";
import "./chunk-cQlS_KkA.js";
import "./chunk-gvpbtdma.js";
import "./chunk-QJsJaxCs.js";
import "./chunk-ggs_QHBV.js";
import "./chunk-RYbJjpM2.js";
import "./chunk-tGOnCZwP.js";
const MIN_HEIGHT = 5e3;
const MAX_HEIGHT = 6003010;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "localConstraints",
  __ssrInlineRender: true,
  setup(__props) {
    const defaultOptions = {
      // map,
      viewingMode: "local"
    };
    const viewLoad = ({ view }) => {
      view.watch("camera", function(camera) {
        let height = camera.position.z;
        if (height < MIN_HEIGHT) {
          camera.position.z = MIN_HEIGHT;
          view.goTo(camera, {
            animate: false
          });
        } else if (height > MAX_HEIGHT) {
          camera.position.z = MAX_HEIGHT;
          view.goTo(camera, {
            animate: false
          });
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VaSceneView), mergeProps({
        defaultOptions,
        onLoad: viewLoad
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VaTdtBasemap), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VaTdtBasemap))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/scene-view/localConstraints.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
