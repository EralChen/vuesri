import { defineComponent, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VaGraphicsLayer } from "./chunk-2T2aQ3cG.js";
import { V as VaMapView } from "./chunk-r6MU8tCx.js";
import { V as VaTdtBasemap } from "./chunk-2_8Nl9Hn.js";
import { bf as c$1, bq as j, bt as S } from "./chunk-KFNcxJaF.js";
import "./chunk-MaQWsU9J.js";
import "@vunk/core/shared/utils-vue";
import "./chunk-oD5XiDYU.js";
import "./chunk-B7M5Xqd5.js";
import "./chunk-AN2pNKfL.js";
import "./chunk-qHSzybEP.js";
import "@vunk/core/shared/utils-class";
import "./chunk-rLRIqhK0.js";
import "vike/server";
import "vike-vue/usePageContext";
import "./chunk-8AIdLOXL.js";
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
import "./chunk-chuKOP2I.js";
import "mitt";
import "./chunk-BSxDNfxQ.js";
import "./chunk-Y9HZwdAu.js";
import "./chunk-jzCtEhR4.js";
import "./chunk-LGmaep6O.js";
import "./chunk-OjvQdFJg.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "basic",
  __ssrInlineRender: true,
  setup(__props) {
    const graphics = [
      new c$1({
        geometry: new j({
          rings: [
            [
              [120, 30],
              [121, 30],
              [121, 31],
              [120, 30]
            ]
          ]
        }),
        symbol: new S({
          color: "red"
        })
      })
    ];
    const layerload = async (e) => {
      const view = e.view;
      await view.when();
      await e.layer.when();
      view.goTo(e.layer.graphics);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VaMapView), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VaTdtBasemap), null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VaGraphicsLayer), {
              graphics,
              onLoad: layerload
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VaTdtBasemap)),
              createVNode(unref(VaGraphicsLayer), {
                graphics,
                onLoad: layerload
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/graphics-layer/basic.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
