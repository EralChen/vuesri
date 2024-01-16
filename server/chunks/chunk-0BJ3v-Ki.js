import { defineComponent, unref, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VaMapView } from "./chunk-r6MU8tCx.js";
import { V as VaPrint } from "./chunk-MqJg2kR5.js";
import { V as VaViewWhen } from "./chunk-FkyJuuRq.js";
import { V as VaTdtBasemap } from "./chunk-2_8Nl9Hn.js";
import { cF as s$1 } from "./chunk-KFNcxJaF.js";
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
import "@vunk/core/shared/utils-promise";
import "@vunk/core/components/client-only";
import "@element-plus/icons-vue";
import "./chunk-vvav8UfW.js";
import "./chunk-BSxDNfxQ.js";
import "./chunk-Y9HZwdAu.js";
import "./chunk-jzCtEhR4.js";
import "./chunk-LGmaep6O.js";
import "./chunk-MaQWsU9J.js";
import "./chunk-OjvQdFJg.js";
import "./chunk-AN2pNKfL.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const tdtServerTk = "236a6aa367cdbd728c6597e0c179f728";
const tdtPcTk = "f0175927031c1e12cb804b0c3b8cce4d";
const printServiceUrl = "https://utility.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "basic",
  __ssrInlineRender: true,
  setup(__props) {
    s$1.request.interceptors?.push({
      urls: [
        printServiceUrl
      ],
      before(e) {
        const query = e.requestOptions.query;
        const webmapJson = query["Web_Map_as_JSON"];
        if (webmapJson) {
          query["Web_Map_as_JSON"] = webmapJson.replaceAll(tdtPcTk, tdtServerTk);
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VaMapView), mergeProps({ defaultOptions: {
        zoom: 7,
        center: [121.34822492731212, 28.95909791842632]
      } }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VaTdtBasemap), {
              type: "vec_w",
              token: tdtPcTk,
              spatialReference: {
                wkid: 3857
              }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VaViewWhen), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(VaPrint), {
                    defaultOptions: {
                      printServiceUrl
                    }
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(VaPrint), {
                      defaultOptions: {
                        printServiceUrl
                      }
                    }, null, 8, ["defaultOptions"])
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
              createVNode(unref(VaViewWhen), null, {
                default: withCtx(() => [
                  createVNode(unref(VaPrint), {
                    defaultOptions: {
                      printServiceUrl
                    }
                  }, null, 8, ["defaultOptions"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/print/basic.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
