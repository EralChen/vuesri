import { defineComponent, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VaTdtBasemap } from "./chunk-2_8Nl9Hn.js";
import { V as VaWmsLayer } from "./chunk-uU1h_k6m.js";
import "./chunk-KFNcxJaF.js";
import { V as VaMapView } from "./chunk-r6MU8tCx.js";
import "./chunk-PDrLNMGN.js";
import "./chunk-Y9HZwdAu.js";
import "./chunk-4bvItAH8.js";
import "./chunk-OjvQdFJg.js";
import "./chunk-gH_Mgyr_.js";
import "./chunk-IymnPBZM.js";
import "./chunk-v2Cj5Nes.js";
import "./chunk-LGmaep6O.js";
import "./chunk-jzCtEhR4.js";
import "./chunk-rABMI5wi.js";
import "./chunk-FkyJuuRq.js";
import "./chunk-MFY2zKAf.js";
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
import "./chunk-xbOcex_F.js";
import "./chunk-CRQV7rMz.js";
import "./chunk-BSxDNfxQ.js";
import "./chunk-rLRIqhK0.js";
import "vike/server";
import "vike-vue/usePageContext";
import "./chunk-8AIdLOXL.js";
import "path";
import "@vunk/core";
import "element-plus";
import "@vueuse/core";
import "@vunk/core/shared/utils-vue";
import "@vunk/core/shared/utils-class";
import "deepdash-es/standalone";
import "gsap";
import "@vunk/core/composables";
import "lodash-es";
import "@vunk/core/shared/utils-promise";
import "@vunk/core/components/client-only";
import "@element-plus/icons-vue";
import "./chunk-MaQWsU9J.js";
import "./chunk-oD5XiDYU.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-chuKOP2I.js";
import "mitt";
import "./chunk-B7M5Xqd5.js";
import "./chunk-AN2pNKfL.js";
import "./chunk-qHSzybEP.js";
import "./chunk-vvav8UfW.js";
import "./chunk-5WMxrbI6.js";
import "./chunk-cQlS_KkA.js";
import "./chunk-gvpbtdma.js";
import "./chunk-QJsJaxCs.js";
import "./chunk-ggs_QHBV.js";
import "./chunk-RYbJjpM2.js";
import "./chunk-tGOnCZwP.js";
const layerName = "D20231013-000012-L00004";
const workspace = "dev";
const url = "http://192.168.110.10:36800/zzserver/dev/ows";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sublayers",
  __ssrInlineRender: true,
  setup(__props) {
    const layerLoad = async (e) => {
      const view = e.view;
      await e.layer.when();
      console.log(e.layer);
      console.log(
        "e.layer.sublayers.getItemAt(0).fullExtent",
        e.layer.sublayers.getItemAt(0).fullExtent
      );
      view.goTo(e.layer.sublayers.getItemAt(0).fullExtent);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VaMapView), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VaTdtBasemap), {
              type: "vec_c",
              anno: false
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VaWmsLayer), {
              url,
              sublayers: [
                {
                  name: `${workspace}:${layerName}`
                }
              ],
              onLoad: layerLoad
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VaTdtBasemap), {
                type: "vec_c",
                anno: false
              }),
              createVNode(unref(VaWmsLayer), {
                url,
                sublayers: [
                  {
                    name: `${workspace}:${layerName}`
                  }
                ],
                onLoad: layerLoad
              }, null, 8, ["sublayers"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/wms-layer/sublayers.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
