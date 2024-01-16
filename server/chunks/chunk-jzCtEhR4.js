import { p as props$1, e as emits$1, _ as _sfc_main$1, c as createBindProps, a as createOnEmits } from "./chunk-LGmaep6O.js";
import { a as levelToScale$1, t as tileInfo4490 } from "./chunk-BSxDNfxQ.js";
import { defineComponent, computed, ref, watch, nextTick, resolveComponent, mergeProps, toHandlers, withCtx, renderSlot, useSSRContext } from "vue";
import { ap as M$1 } from "./chunk-KFNcxJaF.js";
import { ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./chunk-rLRIqhK0.js";
const props = {
  ...props$1,
  type: {
    type: String,
    default: "img_c"
  },
  spatialReference: {
    type: Object,
    default: () => ({
      wkid: 4326
    })
  },
  token: {
    type: String,
    default: "f0175927031c1e12cb804b0c3b8cce4d"
  },
  minScale: {
    type: Number,
    default: levelToScale$1[1]
  },
  maxScale: {
    type: Number,
    default: levelToScale$1[18]
  }
};
const emits = {
  ...emits$1
};
const lods = [
  { "level": 0, "resolution": 156543.033928, "scale": 591657527591555e-6 },
  { "level": 1, "resolution": 78271.5169639999, "scale": 295828763795777e-6 },
  { "level": 2, "resolution": 39135.7584820001, "scale": 147914381897889e-6 },
  { "level": 3, "resolution": 19567.8792409999, "scale": 73957190948944e-6 },
  { "level": 4, "resolution": 9783.93962049996, "scale": 36978595474472e-6 },
  { "level": 5, "resolution": 4891.96981024998, "scale": 18489297737236e-6 },
  { "level": 6, "resolution": 2445.98490512499, "scale": 9244648868618e-6 },
  { "level": 7, "resolution": 1222.99245256249, "scale": 4622324434309e-6 },
  { "level": 8, "resolution": 611.49622628138, "scale": 2311162217155e-6 },
  { "level": 9, "resolution": 305.748113140558, "scale": 1155581108577e-6 },
  { "level": 10, "resolution": 152.874056570411, "scale": 577790.554289 },
  { "level": 11, "resolution": 76.4370282850732, "scale": 288895.277144 },
  { "level": 12, "resolution": 38.2185141425366, "scale": 144447.638572 },
  { "level": 13, "resolution": 19.1092570712683, "scale": 72223.819286 },
  { "level": 14, "resolution": 9.55462853563415, "scale": 36111.909643 },
  { "level": 15, "resolution": 4.77731426794937, "scale": 18055.954822 },
  { "level": 16, "resolution": 2.38865713397468, "scale": 9027.977411 },
  { "level": 17, "resolution": 1.19432856685505, "scale": 4513.988705 },
  { "level": 18, "resolution": 0.597164283559817, "scale": 2256.994353 },
  { "level": 19, "resolution": 0.298582141647617, "scale": 1128.497176 },
  { "level": 20, "resolution": 0.14929107082380833, "scale": 564.248588 },
  { "level": 21, "resolution": 0.07464553541190416, "scale": 282.124294 },
  { "level": 22, "resolution": 0.03732276770595208, "scale": 141.062147 },
  { "level": 23, "resolution": 0.01866138385297604, "scale": 70.5310735 }
];
const origin = {
  x: -20037508342787e-6,
  y: 20037508342787e-6
};
const levelToScale = lods.reduce((a, c) => (a[c.level] = c.scale, a), {});
const fullExtent = {
  xmin: -20037508342787e-6,
  ymin: -2003750834278e-5,
  xmax: 2003750834278e-5,
  ymax: 20037508342787e-6
};
const tileInfo3857 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  fullExtent,
  levelToScale,
  lods,
  origin
}, Symbol.toStringTag, { value: "Module" }));
const wkidToInfo = {
  4326: tileInfo4490,
  4490: tileInfo4490,
  3857: tileInfo3857,
  102100: tileInfo3857,
  4549: tileInfo3857
};
const _sfc_main = defineComponent({
  name: "VaTdtWebTileLayer",
  components: {
    VaWebTileLayer: _sfc_main$1
  },
  props,
  emits,
  setup(props2, { emit }) {
    const subDomains = ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"];
    const urlParams = computed(() => {
      const baseTypeInfo = props2.type.split("_");
      const baseLayer = baseTypeInfo[0];
      const typeSR = baseTypeInfo[1];
      return {
        baseLayer,
        typeSR
      };
    });
    const defaultOptions = computed(() => {
      const wkid = props2.spatialReference.wkid;
      const info = wkidToInfo[wkid];
      const tileInfo = {
        origin: info.origin,
        spatialReference: props2.spatialReference
      };
      tileInfo.lods = info.lods.slice(1, 19);
      const data = {
        subDomains,
        urlTemplate: `https://{subDomain}.tianditu.gov.cn/${props2.type}/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=${urlParams.value.baseLayer}&STYLE=default&TILEMATRIXSET=${urlParams.value.typeSR}&FORMAT=tiles&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}&tk=${props2.token}`,
        tileInfo,
        spatialReference: props2.spatialReference,
        ...props2.defaultOptions
      };
      if (info.fullExtent) {
        data.fullExtent = new M$1({
          ...info.fullExtent,
          spatialReference: props2.spatialReference
        });
      }
      return data;
    });
    const coreProps = createBindProps(props2, ["defaultOptions"]);
    const coreEmits = createOnEmits(emit);
    const ready = ref(true);
    watch(() => props2.type, async () => {
      ready.value = false;
      await nextTick();
      ready.value = true;
    });
    return {
      defaultOptions,
      coreProps,
      coreEmits,
      ready
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_VaWebTileLayer = resolveComponent("VaWebTileLayer");
  if (_ctx.ready) {
    _push(ssrRenderComponent(_component_VaWebTileLayer, mergeProps({ "default-options": _ctx.defaultOptions }, _ctx.coreProps, toHandlers(_ctx.coreEmits), _attrs), {
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
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/tdt-web-tile-layer/src/index.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
const VaTdtWebTileLayer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
VaTdtWebTileLayer.install = (app) => {
  app.component(VaTdtWebTileLayer.name, VaTdtWebTileLayer);
};
export {
  VaTdtWebTileLayer as V,
  levelToScale as a,
  lods as l
};
