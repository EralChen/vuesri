import { defineComponent, shallowRef, shallowReactive, watch, onUnmounted, nextTick, resolveComponent, mergeProps, withCtx, renderSlot, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { u as useView } from "./chunk-oD5XiDYU.js";
import { u as useLayer } from "./chunk-AN2pNKfL.js";
import { V as VaGeoViewUi } from "./chunk-jT36EoyW.js";
import { s as sMitter } from "./chunk-3BageVRQ.js";
import { c as createMitterToggleHandler, i as isWithinScale } from "./chunk-ZSpamg93.js";
import { V as VaViewUi } from "./chunk-ANxjAjSR.js";
import { throttledWatch } from "@vueuse/core";
import { useModelComputed } from "@vunk/core/composables";
import { ssrRenderComponent, ssrRenderList, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./chunk-x8u7LPTa.js";
const props = {
  query: {
    type: Object,
    default: {}
  },
  visible: {
    type: Boolean,
    default: void 0
  },
  maxScale: {
    type: Number,
    default: 0
  },
  minScale: {
    type: Number,
    default: 0
  },
  queryExtent: {
    type: Boolean,
    default: false
  }
};
const emits = {
  "update:visible": (e) => typeof e === "boolean",
  load: (e) => e,
  change: (e) => e
};
const sKey = Symbol("key");
const _sfc_main = defineComponent({
  name: "VaFeaturePopupLayer",
  components: {
    VaGeoViewUi,
    VaViewUi
  },
  inheritAttrs: false,
  props,
  emits,
  setup(props2, { emit }) {
    const view = useView();
    const layer = useLayer();
    const MitterToggleHandler = createMitterToggleHandler(view[sMitter]);
    const visible = useModelComputed({
      default: isWithinScale(view.scale, {
        maxScale: props2.maxScale,
        minScale: props2.minScale
      }),
      key: "visible"
    }, props2, emit);
    const features = shallowRef([]);
    const queryGeometry = shallowReactive({});
    const setFeatures = async () => {
      if (!visible.value)
        return;
      await view.when();
      return layer.queryFeatures({
        returnGeometry: true,
        outFields: ["*"],
        where: "1=1",
        geometry: queryGeometry.current,
        outSpatialReference: view.spatialReference,
        ...props2.query
      }).then((featureSet) => {
        features.value = featureSet.features.map((item) => {
          item[sKey] = item.attributes[layer.objectIdField];
          return item;
        });
        queryGeometry.queried = queryGeometry.current;
        return featureSet;
      });
    };
    setFeatures().then((featureSet) => {
      emit("load", {
        featureSet,
        view,
        layer
      });
    });
    watch(() => visible.value, (v) => {
      if (v) {
        queryGeometry.current = queryGeometry.view;
        setFeatures();
      }
    });
    watch(() => ({
      geometry: queryGeometry.current,
      ...props2.query
    }), async () => {
      await setFeatures().then((featureSet) => {
        emit("change", {
          featureSet,
          view,
          layer
        });
      });
    });
    throttledWatch(() => queryGeometry.view, async (v) => {
      if (!v)
        return;
      if (!visible.value)
        return;
      if (!queryGeometry.queried) {
        queryGeometry.current = v;
        return;
      }
      if (queryGeometry.queried.contains(v)) {
        return;
      } else {
        queryGeometry.current = queryGeometry.queried.union(v).clone();
      }
    }, {
      throttle: 1e3
    });
    const watchScale = new MitterToggleHandler("watch:scale", ([v]) => {
      visible.value = isWithinScale(v, {
        maxScale: props2.maxScale,
        minScale: props2.minScale
      });
    });
    watchScale.add();
    onUnmounted(() => {
      watchScale.remove();
    });
    const watchExtends = new MitterToggleHandler("watch:extent", ([v]) => {
      queryGeometry.view = v;
    });
    watch(() => props2.queryExtent, () => {
      if (props2.queryExtent) {
        watchExtends.add();
      } else {
        watchExtends.remove();
      }
    }, {
      immediate: true
    });
    onUnmounted(() => {
      watchExtends.remove();
    });
    if (layer[sMitter]) {
      const LayerMitterToggleHandler = createMitterToggleHandler(layer[sMitter]);
      const sourceChage = new LayerMitterToggleHandler("change", async () => {
        features.value = [];
        await nextTick();
        await setFeatures();
      });
      sourceChage.add();
      onUnmounted(() => {
        sourceChage.remove();
      });
    }
    return {
      visible,
      features,
      layer,
      sKey
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_VaViewUi = resolveComponent("VaViewUi");
  const _component_VaGeoViewUi = resolveComponent("VaGeoViewUi");
  _push(ssrRenderComponent(_component_VaViewUi, mergeProps({ class: "feature-popup-layer" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList(_ctx.features, (item) => {
          _push2(ssrRenderComponent(_component_VaGeoViewUi, mergeProps(_ctx.$attrs, {
            key: item[_ctx.sKey],
            class: "feature-popup-layer__item",
            visible: _ctx.visible,
            geometry: item.geometry,
            orphan: true
          }), {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                ssrRenderSlot(_ctx.$slots, "default", {
                  attributes: item?.attributes ?? {},
                  geometry: item.geometry
                }, null, _push3, _parent3, _scopeId2);
              } else {
                return [
                  renderSlot(_ctx.$slots, "default", {
                    attributes: item?.attributes ?? {},
                    geometry: item.geometry
                  })
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.features, (item) => {
            return openBlock(), createBlock(_component_VaGeoViewUi, mergeProps(_ctx.$attrs, {
              key: item[_ctx.sKey],
              class: "feature-popup-layer__item",
              visible: _ctx.visible,
              geometry: item.geometry,
              orphan: true
            }), {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "default", {
                  attributes: item?.attributes ?? {},
                  geometry: item.geometry
                })
              ]),
              _: 2
            }, 1040, ["visible", "geometry"]);
          }), 128))
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/feature-popup-layer/src/index.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
const VaFeaturePopupLayer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
VaFeaturePopupLayer.install = (app) => {
  app.component(VaFeaturePopupLayer.name, VaFeaturePopupLayer);
};
export {
  VaFeaturePopupLayer as V
};
