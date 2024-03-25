import { defineComponent, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VaTdtBasemap } from "./chunk-XxvgZNck.js";
import { V as VaWmsLayer } from "./chunk-RUgugDuD.js";
import "./chunk-ejFG4zJ0.js";
import "@vunk/core/shared/utils-class";
import { V as VaMapView } from "./chunk-6fAe7ZtF.js";
import "./chunk-5WfSdRWZ.js";
import "./chunk-bIq5xhw6.js";
import "./chunk-X_rfk1VD.js";
import "./chunk-uYLXIHjo.js";
import "./chunk-U1ea7-4d.js";
import "./chunk-Tuvo6ubl.js";
import "./chunk-CTgLT-4V.js";
import "./chunk-_8aSZzrH.js";
import "./chunk-VS0cZDQt.js";
import "./chunk-LrwsxPyy.js";
import "./chunk-iZwZ9EU9.js";
import "./chunk-8WuUWlIZ.js";
import "./chunk-9IwRySYm.js";
import "./chunk-x7Vgxnqr.js";
import "./chunk-_oluUB0p.js";
import "./chunk-v-t_EqND.js";
import "./chunk-ZGB6GbeH.js";
import "./chunk-ANxjAjSR.js";
import "./chunk-jT36EoyW.js";
import "./chunk-tCa8aS7W.js";
import "./chunk-ThA0hHfL.js";
import "./chunk-c7c2gizP.js";
import "./chunk-NZ-e60VG.js";
import "./chunk-NDX-KDEx.js";
import "./chunk-za8lbvAb.js";
import "./chunk-ounOpSOX.js";
import "./chunk-vHf8RaFE.js";
import "./chunk-u_etbwnt.js";
import "./chunk-iGCIByDy.js";
import "./chunk-4GNTLucG.js";
import "./chunk-9KNzZOBs.js";
import "./chunk-pvYyIdE3.js";
import "./chunk-TKb6VnDe.js";
import "./chunk-W5F64WU4.js";
import "./chunk-8CFIjXxc.js";
import "./chunk-x8u7LPTa.js";
import "vike/server";
import "vike-vue/usePageContext";
import "./chunk-vndPU1ZH.js";
import "path";
import "@vunk/core";
import "element-plus";
import "@vueuse/core";
import "@vunk/core/shared/utils-vue";
import "deepdash-es/standalone";
import "gsap";
import "@vunk/core/composables";
import "lodash-es";
import "@vunk/core/shared/utils-promise";
import "@vunk/core/components/client-only";
import "@element-plus/icons-vue";
import "./chunk-ZSpamg93.js";
import "./chunk-3BageVRQ.js";
import "./chunk-RQshD5bR.js";
import "./chunk-oD5XiDYU.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-4l9VVe6n.js";
import "mitt";
import "./chunk-yCPoYwni.js";
import "./chunk-AN2pNKfL.js";
import "./chunk-vvav8UfW.js";
import "./chunk-utiawlkN.js";
import "./chunk-wa_PWVge.js";
import "./chunk-gvpbtdma.js";
import "./chunk-ggs_QHBV.js";
import "./chunk-RYbJjpM2.js";
import "./chunk-tGOnCZwP.js";
import "./chunk-0A6HSBpB.js";
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
