import { defineComponent, reactive, unref, withCtx, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VaGeojsonLayer } from "./chunk-5WfSdRWZ.js";
import { V as VaTdtBasemap } from "./chunk-XxvgZNck.js";
import { gS as m, ir as h, is as d } from "./chunk-ejFG4zJ0.js";
import "@vunk/core/shared/utils-class";
import "./chunk-6fAe7ZtF.js";
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
import { V as VaSceneView } from "./chunk-8WuUWlIZ.js";
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
import "./chunk-RUgugDuD.js";
import "./chunk-TKb6VnDe.js";
import "./chunk-W5F64WU4.js";
import { VkfForm } from "@vunk/form";
import { setData } from "@vunk/core";
import { useReloaded } from "@vunk/core/composables";
import "./chunk-ZSpamg93.js";
import "@vunk/core/shared/utils-vue";
import "./chunk-3BageVRQ.js";
import "./chunk-RQshD5bR.js";
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
import "lodash-es";
import "@vunk/core/shared/utils-promise";
import "@vunk/core/components/client-only";
import "@element-plus/icons-vue";
import "./chunk-8CFIjXxc.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-4l9VVe6n.js";
import "./chunk-vvav8UfW.js";
import "./chunk-utiawlkN.js";
import "./chunk-wa_PWVge.js";
import "./chunk-gvpbtdma.js";
import "./chunk-ggs_QHBV.js";
import "./chunk-RYbJjpM2.js";
import "./chunk-tGOnCZwP.js";
import "./chunk-0A6HSBpB.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "many",
  __ssrInlineRender: true,
  setup(__props) {
    const base = "/vuesri";
    const formdata = reactive({
      url: base + "/data/geojson/polygon10w.json"
    });
    const reload = useReloaded(() => formdata.url);
    const formItems = [
      {
        templateType: "VkfRadio",
        prop: "url",
        options: [
          {
            label: "10w",
            value: base + "/data/geojson/polygon10w.json"
          },
          {
            label: "5w",
            value: base + "/data/geojson/polygon5w.json"
          },
          {
            label: "1w",
            value: base + "/data/geojson/polygon1w.json"
          }
        ]
      }
    ];
    const renderer = new m({
      symbol: new h({
        symbolLayers: [
          new d({
            size: 100,
            // 100,000 meters in height
            material: { color: "red" }
          })
        ]
      })
    });
    const layerClick = ({ result }) => {
      console.log(result);
    };
    const layerLoad = async (e) => {
      const view = e.view;
      await e.layer.when();
      view.goTo(e.layer.fullExtent);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VaSceneView), _attrs, {
        before: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VkfForm), {
              "form-items": formItems,
              data: formdata,
              onSetData: ($event) => unref(setData)(formdata, $event)
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VkfForm), {
                "form-items": formItems,
                data: formdata,
                onSetData: ($event) => unref(setData)(formdata, $event)
              }, null, 8, ["data", "onSetData"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VaTdtBasemap), {
              type: "vec_w",
              "spatial-reference": {
                wkid: 3857
              }
            }, null, _parent2, _scopeId));
            if (unref(reload)) {
              _push2(ssrRenderComponent(unref(VaGeojsonLayer), {
                cursor: "pointer",
                "geometry-type": "polygon",
                url: formdata.url,
                renderer: unref(renderer),
                onLoad: layerLoad,
                onClick: layerClick
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(unref(VaTdtBasemap), {
                type: "vec_w",
                "spatial-reference": {
                  wkid: 3857
                }
              }),
              unref(reload) ? (openBlock(), createBlock(unref(VaGeojsonLayer), {
                key: 0,
                cursor: "pointer",
                "geometry-type": "polygon",
                url: formdata.url,
                renderer: unref(renderer),
                onLoad: layerLoad,
                onClick: layerClick
              }, null, 8, ["url", "renderer"])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/geojson-layer/many.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
