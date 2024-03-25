import { defineComponent, ref, unref, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import "./chunk-ejFG4zJ0.js";
import "@vunk/core/shared/utils-class";
import "./chunk-6fAe7ZtF.js";
import "./chunk-5WfSdRWZ.js";
import "./chunk-bIq5xhw6.js";
import "./chunk-X_rfk1VD.js";
import "./chunk-uYLXIHjo.js";
import "./chunk-U1ea7-4d.js";
import "./chunk-Tuvo6ubl.js";
import "./chunk-CTgLT-4V.js";
import "./chunk-XxvgZNck.js";
import "./chunk-_8aSZzrH.js";
import "./chunk-VS0cZDQt.js";
import { V as VaServerFeatureLayer } from "./chunk-LrwsxPyy.js";
import { V as VaViewWhen } from "./chunk-iZwZ9EU9.js";
import "./chunk-8WuUWlIZ.js";
import "./chunk-9IwRySYm.js";
import "./chunk-x7Vgxnqr.js";
import "./chunk-_oluUB0p.js";
import "./chunk-v-t_EqND.js";
import "./chunk-ZGB6GbeH.js";
import "./chunk-ANxjAjSR.js";
import "./chunk-jT36EoyW.js";
import "./chunk-tCa8aS7W.js";
import { V as VaFeaturePopupLayer } from "./chunk-ThA0hHfL.js";
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
import "./chunk-RUgugDuD.js";
import "./chunk-TKb6VnDe.js";
import "./chunk-W5F64WU4.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-4l9VVe6n.js";
import "./chunk-oD5XiDYU.js";
import "./chunk-3BageVRQ.js";
import "lodash-es";
import "mitt";
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
import "@vunk/core/shared/utils-promise";
import "@vunk/core/components/client-only";
import "@element-plus/icons-vue";
import "./chunk-ZSpamg93.js";
import "./chunk-RQshD5bR.js";
import "./chunk-yCPoYwni.js";
import "./chunk-AN2pNKfL.js";
import "./chunk-vvav8UfW.js";
import "./chunk-utiawlkN.js";
import "./chunk-8CFIjXxc.js";
import "./chunk-wa_PWVge.js";
import "./chunk-gvpbtdma.js";
import "./chunk-ggs_QHBV.js";
import "./chunk-RYbJjpM2.js";
import "./chunk-tGOnCZwP.js";
import "./chunk-0A6HSBpB.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "feature-plus",
  __ssrInlineRender: true,
  setup(__props) {
    ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VaServerFeatureLayer), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VaViewWhen), null, {
              default: withCtx(({ view }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(VaFeaturePopupLayer), {
                    class: "fpl-demo",
                    query: {
                      outSpatialReference: view.spatialReference
                    }
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` aaaabbb `);
                      } else {
                        return [
                          createTextVNode(" aaaabbb ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(VaFeaturePopupLayer), {
                      class: "fpl-demo",
                      query: {
                        outSpatialReference: view.spatialReference
                      }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" aaaabbb ")
                      ]),
                      _: 2
                    }, 1032, ["query"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VaViewWhen), null, {
                default: withCtx(({ view }) => [
                  createVNode(unref(VaFeaturePopupLayer), {
                    class: "fpl-demo",
                    query: {
                      outSpatialReference: view.spatialReference
                    }
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" aaaabbb ")
                    ]),
                    _: 2
                  }, 1032, ["query"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/layer-renderer/custom/feature-plus.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
