import { defineComponent, unref, mergeProps, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VaMediaLayer } from "./chunk-uciS6fD3.js";
import { ap as M$1 } from "./chunk-KFNcxJaF.js";
import { S, b, x } from "./chunk-p3IoVg3s.js";
import "./chunk-MaQWsU9J.js";
import "@vunk/core/shared/utils-vue";
import "./chunk-oD5XiDYU.js";
import "./chunk-rLRIqhK0.js";
import "vike/server";
import "vike-vue/usePageContext";
import "./chunk-8AIdLOXL.js";
import "path";
import "@vunk/core";
import "element-plus";
import "@vueuse/core";
import "@vunk/core/shared/utils-class";
import "deepdash-es/standalone";
import "gsap";
import "@vunk/core/composables";
import "lodash-es";
import "@vunk/core/shared/utils-promise";
import "@vunk/core/components/client-only";
import "@element-plus/icons-vue";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-_6WFmAiF.js";
import "./chunk-NkuZ7t90.js";
import "./chunk-vP0bHkve.js";
import "./chunk-tNARKRa3.js";
const cloudImg = "/assets/static/img.rFG2qWS6.png";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "jpg-layer",
  __ssrInlineRender: true,
  setup(__props) {
    const source = new S({
      elements: [
        new b({
          image: cloudImg,
          georeference: new x({
            extent: new M$1({
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
