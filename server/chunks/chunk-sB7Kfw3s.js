import { defineComponent, unref, mergeProps, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VaMediaLayer } from "./chunk-Bml-6ipw.js";
import { aC as M } from "./chunk-ejFG4zJ0.js";
import { V, b, u } from "./chunk-Yl7G-6Db.js";
import "./chunk-ZSpamg93.js";
import "@vunk/core/shared/utils-vue";
import "./chunk-3BageVRQ.js";
import "./chunk-RQshD5bR.js";
import "@vunk/core/shared/utils-class";
import "./chunk-oD5XiDYU.js";
import "./chunk-x8u7LPTa.js";
import "vike/server";
import "vike-vue/usePageContext";
import "./chunk-vndPU1ZH.js";
import "path";
import "@vunk/core";
import "element-plus";
import "@vueuse/core";
import "deepdash-es/standalone";
import "gsap";
import "@vunk/core/composables";
import "lodash-es";
import "@vunk/core/shared/utils-promise";
import "@vunk/core/components/client-only";
import "@element-plus/icons-vue";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-HWDf1Z3J.js";
import "./chunk-X6Yd3gQb.js";
import "./chunk-XuSN4Qyd.js";
import "./chunk-E1ai5rf5.js";
const cloudImg = "/vuesri/assets/static/img.rFG2qWS6.png";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "jpg-layer",
  __ssrInlineRender: true,
  setup(__props) {
    const source = new V({
      elements: [
        new b({
          image: cloudImg,
          georeference: new u({
            extent: new M({
              xmin: 120.19741890224812,
              ymin: 29.145493440582083,
              xmax: 122.83118597998016,
              ymax: 30.407506831995352,
              spatialReference: {
                wkid: 4326
              }
            })
          })
        })
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VaMediaLayer), mergeProps({ source: unref(source) }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/media-layer/layers/jpg-layer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
