import { defineComponent, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VaTileLayer } from "./chunk-IymnPBZM.js";
import { V as VaSceneView } from "./chunk-MFY2zKAf.js";
import _sfc_main$1 from "./chunk-vobHWKSe.js";
import "./chunk-MaQWsU9J.js";
import "@vunk/core/shared/utils-vue";
import "./chunk-KFNcxJaF.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-oD5XiDYU.js";
import "./chunk-5WMxrbI6.js";
import "./chunk-AN2pNKfL.js";
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
import "./chunk-gcnOZdJc.js";
import "mitt";
import "./chunk-chuKOP2I.js";
import "./chunk-RYbJjpM2.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const layerLoad = async (e) => {
      const view = e.view;
      const layer = e.layer;
      await layer.when();
      view.goTo(layer.fullExtent);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VaSceneView), _attrs, {
        after: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VaTileLayer), {
              url: "http://116.63.63.191:6080/arcgis/rest/services/SBWB/NB_DT3857/MapServer",
              onLoad: layerLoad
            }, {
              when: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$1, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VaTileLayer), {
                url: "http://116.63.63.191:6080/arcgis/rest/services/SBWB/NB_DT3857/MapServer",
                onLoad: layerLoad
              }, {
                when: withCtx(() => [
                  createVNode(_sfc_main$1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/tile-layer/sublayers/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
