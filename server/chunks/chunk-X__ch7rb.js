import { defineComponent, ref, resolveComponent, unref, withCtx, createTextVNode, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VaMapView } from "./chunk-r6MU8tCx.js";
import { V as VaTdtBasemap } from "./chunk-2_8Nl9Hn.js";
import { V as VaWmtsLayer } from "./chunk-xbOcex_F.js";
import "./chunk-KFNcxJaF.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
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
import "./chunk-BSxDNfxQ.js";
import "./chunk-Y9HZwdAu.js";
import "./chunk-jzCtEhR4.js";
import "./chunk-LGmaep6O.js";
import "./chunk-MaQWsU9J.js";
import "./chunk-OjvQdFJg.js";
import "./chunk-AN2pNKfL.js";
const baseWmtsUrl = "http://192.168.110.10:36800/zzserver/gwc/service/wmts";
const layerName = "D20231018-000009";
const workspace = "dev";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const mapIf = ref(false);
    const wmtsLayerLoad = (e) => {
      console.log("wmtsLayerLoad", e.layer);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElButton = resolveComponent("ElButton");
      _push(ssrRenderComponent(unref(VaMapView), _attrs, {
        before: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ElButton, {
              onClick: ($event) => mapIf.value = !mapIf.value
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`v-if`);
                } else {
                  return [
                    createTextVNode("v-if")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</p>`);
          } else {
            return [
              createVNode("p", null, [
                createVNode(_component_ElButton, {
                  onClick: ($event) => mapIf.value = !mapIf.value
                }, {
                  default: withCtx(() => [
                    createTextVNode("v-if")
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VaTdtBasemap), null, null, _parent2, _scopeId));
            if (mapIf.value) {
              _push2(ssrRenderComponent(unref(VaWmtsLayer), {
                url: baseWmtsUrl,
                title: "testLayer",
                "service-mode": "KVP",
                "active-layer": {
                  id: `${workspace}:${layerName}`
                },
                onLoad: wmtsLayerLoad
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(unref(VaTdtBasemap)),
              mapIf.value ? (openBlock(), createBlock(unref(VaWmtsLayer), {
                key: 0,
                url: baseWmtsUrl,
                title: "testLayer",
                "service-mode": "KVP",
                "active-layer": {
                  id: `${workspace}:${layerName}`
                },
                onLoad: wmtsLayerLoad
              }, null, 8, ["active-layer"])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/wmts-layer/active-layer/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
