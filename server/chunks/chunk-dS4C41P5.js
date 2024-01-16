import { defineComponent, computed, ref, shallowRef, onUnmounted, watch, resolveComponent, mergeProps, withCtx, renderSlot, useSSRContext } from "vue";
import { V as VaViewUi } from "./chunk-4y4AoNcC.js";
import { u as useView } from "./chunk-oD5XiDYU.js";
import { nm as sMitter } from "./chunk-KFNcxJaF.js";
import { c as createMitterToggleHandler } from "./chunk-qHSzybEP.js";
import { ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./chunk-rLRIqhK0.js";
const props = {
  geometry: {
    type: Object,
    default: void 0
  },
  visible: {
    type: Boolean,
    default: true
  },
  outContainsShow: {
    type: Boolean,
    default: false
  },
  position: {
    type: [String, Object],
    default: "manual"
  },
  orphan: {
    type: Boolean,
    default: false
  }
};
const emits = {};
const _sfc_main = defineComponent({
  name: "VaGeoViewUi",
  components: {
    VaViewUi
  },
  emits,
  props,
  setup(props2) {
    const view = useView();
    const mitter = view[sMitter];
    const MitterToggleHandler = createMitterToggleHandler(mitter);
    const centerActions = {
      point(geo) {
        return geo;
      },
      extent(geo) {
        return geo.center;
      },
      mesh(geo) {
        return geo.extent.center;
      },
      multipoint(geo) {
        return geo.extent.center;
      },
      polygon(geo) {
        return geo.extent.center;
      },
      polyline(geo) {
        return geo.extent.center;
      }
    };
    const center = computed(() => {
      return props2.geometry?.type && centerActions[props2.geometry.type](props2.geometry);
    });
    const _visiable = ref(true);
    const screenPoint = shallowRef();
    const setScreenPoint = () => {
      let p = center.value ? view.toScreen(center.value) : {
        x: 0,
        y: 0
      };
      screenPoint.value = p;
    };
    setScreenPoint();
    const wathExtent = new MitterToggleHandler("watch:extent", ([v]) => {
      if (!props2.visible)
        return;
      if (!center.value)
        return;
      if (!props2.outContainsShow) {
        if (!v.contains(center.value)) {
          return _visiable.value = false;
        }
      }
      setScreenPoint();
      _visiable.value = true;
    });
    wathExtent.add();
    onUnmounted(() => {
      wathExtent.remove();
    });
    watch(() => center.value, () => {
      setScreenPoint();
    });
    const visible = computed(() => props2.visible ? _visiable.value : false);
    return {
      screenPoint,
      visible,
      // out
      setScreenPoint
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_VaViewUi = resolveComponent("VaViewUi");
  _push(ssrRenderComponent(_component_VaViewUi, mergeProps({
    style: [
      _ctx.visible ? null : { display: "none" },
      {
        left: _ctx.screenPoint?.x + "px",
        top: _ctx.screenPoint?.y + "px"
      }
    ],
    class: "va-geo-view-ui",
    position: _ctx.position,
    orphan: _ctx.orphan
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/geo-view-ui/src/index.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
const VaGeoViewUi = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
VaGeoViewUi.install = (app) => {
  app.component(VaGeoViewUi.name, VaGeoViewUi);
};
export {
  VaGeoViewUi as V
};
