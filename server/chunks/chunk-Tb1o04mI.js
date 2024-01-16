import { defineComponent, ref, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VaGraphicsLayer } from "./chunk-2T2aQ3cG.js";
import { V as VaMapView } from "./chunk-r6MU8tCx.js";
import { V as VaTdtBasemap } from "./chunk-2_8Nl9Hn.js";
import { bf as c$1, bq as j, bt as S } from "./chunk-KFNcxJaF.js";
import _sfc_main$1 from "./chunk-D-F-eYg0.js";
import { VkfForm } from "@vunk/form";
import { setData } from "@vunk/core";
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
import "./chunk-ggs_QHBV.js";
import "@vunk/core/shared/utils-object";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
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
        }),
        attributes: {
          ObjectID: 1
        }
      }),
      new c$1({
        geometry: new j({
          rings: [
            [
              [120, 31],
              [121, 32],
              [121, 32],
              [120, 30]
            ]
          ]
        }),
        symbol: new S({
          color: "red"
        }),
        attributes: {
          ObjectID: 2
        }
      })
    ];
    const highlightSymbol = new S({
      color: "blue"
    });
    const layerload = async (e) => {
      const view = e.view;
      await e.layer.when();
      view.goTo(e.layer.graphics);
    };
    const formData = ref({});
    const formItems = [
      {
        templateType: "VkfRadio",
        prop: "ObjectID",
        label: "ObjectID",
        options: [
          {
            label: "1",
            value: 1
          },
          {
            label: "2",
            value: 2
          }
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VaMapView), _attrs, {
        before: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VkfForm), {
              formItems,
              data: formData.value,
              onSetData: ($event) => unref(setData)(formData.value, $event)
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VkfForm), {
                formItems,
                data: formData.value,
                onSetData: ($event) => unref(setData)(formData.value, $event)
              }, null, 8, ["data", "onSetData"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VaTdtBasemap), null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VaGraphicsLayer), {
              graphics,
              onLoad: layerload
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$1, {
                    data: formData.value,
                    symbol: unref(highlightSymbol)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$1, {
                      data: formData.value,
                      symbol: unref(highlightSymbol)
                    }, null, 8, ["data", "symbol"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VaTdtBasemap)),
              createVNode(unref(VaGraphicsLayer), {
                graphics,
                onLoad: layerload
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$1, {
                    data: formData.value,
                    symbol: unref(highlightSymbol)
                  }, null, 8, ["data", "symbol"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/graphics-layer/change-symbol/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
