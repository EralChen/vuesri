import { defineComponent, shallowRef, watch, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { bf as c$1, cJ as m, dy as m$1, bq as j, hE as h, hF as h$1 } from "./chunk-KFNcxJaF.js";
import { V as VaGraphicsLayer } from "./chunk-2T2aQ3cG.js";
import { V as VaSceneView } from "./chunk-MFY2zKAf.js";
import { V as VaTdtBasemap } from "./chunk-2_8Nl9Hn.js";
import _sfc_main$1 from "./chunk-cZ7Iw6pv.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
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
import "mitt";
import "./chunk-chuKOP2I.js";
import "./chunk-BSxDNfxQ.js";
import "./chunk-Y9HZwdAu.js";
import "./chunk-jzCtEhR4.js";
import "./chunk-LGmaep6O.js";
import "./chunk-OjvQdFJg.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    rings: { default: () => [
      [
        [121.25, 30],
        [121.3, 30.15],
        [121, 30.2],
        [121, 29.95],
        [121.25, 30]
      ]
    ] },
    height: { default: 5e3 }
  },
  setup(__props) {
    const props = __props;
    const getHeightPolylineGeometry = (rings, height) => {
      return new m$1({
        paths: height ? [
          JSON.parse(JSON.stringify(rings)).flat(1).map((item) => {
            item.push(height);
            return item;
          })
        ] : rings
      });
    };
    const graphics3D = shallowRef([]);
    const getNormalGraphic = (rings, height) => {
      const newRings = JSON.parse(JSON.stringify(rings));
      if (height) {
        newRings.forEach((item) => {
          item.forEach((item2) => {
            item2.push(height);
          });
        });
      }
      const g = new c$1({
        geometry: new j({
          rings: newRings
        }),
        symbol: new h({
          // color: '#CEECF5',
          symbolLayers: [
            new h$1({
              material: {
                color: [0, 94, 217, 0.3]
              }
            })
          ]
        })
      });
      return g;
    };
    const init3DGraphics = (rings) => {
      graphics3D.value = [
        // 图形本体
        // getNormalGraphic(rings, props.height),
        new c$1({
          geometry: getHeightPolylineGeometry(rings, props.height),
          symbol: new m({
            color: [0, 94, 217],
            width: 2
          })
        }),
        new c$1({
          geometry: getHeightPolylineGeometry(rings, props.height / 3 * 2),
          symbol: new m({
            color: [0, 94, 217],
            width: 1
          })
        }),
        new c$1({
          geometry: getHeightPolylineGeometry(rings, props.height / 3),
          symbol: new m({
            color: [0, 94, 217],
            width: 1
          })
        }),
        new c$1({
          geometry: getHeightPolylineGeometry(rings),
          symbol: new m({
            color: "yellow",
            width: 1
          })
        })
      ];
    };
    watch(() => props.rings, (rings) => {
      if (rings) {
        init3DGraphics(unref(rings));
      }
    }, { immediate: true });
    const handleLoad = async (e) => {
      const view = e.view;
      await view.when();
      view.goTo({
        target: getNormalGraphic(unref(props.rings)).geometry
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VaSceneView), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VaTdtBasemap), {
              type: "img_w",
              spatialReference: {
                wkid: 3857
              }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VaGraphicsLayer), {
              graphics: graphics3D.value,
              onLoad: handleLoad
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VaTdtBasemap), {
                type: "img_w",
                spatialReference: {
                  wkid: 3857
                }
              }),
              createVNode(unref(VaGraphicsLayer), {
                graphics: graphics3D.value,
                onLoad: handleLoad
              }, null, 8, ["graphics"]),
              createVNode(_sfc_main$1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/graphics-layer/graphics/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
