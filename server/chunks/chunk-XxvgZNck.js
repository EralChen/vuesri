import { a as levelToScale } from "./chunk-8CFIjXxc.js";
import { defineComponent, computed, resolveComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, createCommentVNode, renderSlot, useSSRContext } from "vue";
import { _ as _sfc_main$1 } from "./chunk-bIq5xhw6.js";
import { V as VaTdtWebTileLayer } from "./chunk-VS0cZDQt.js";
import { _ as _sfc_main$2 } from "./chunk-uYLXIHjo.js";
import { ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./chunk-x8u7LPTa.js";
const props = {
  spatialReference: {
    type: Object,
    default: () => ({ wkid: 4326 })
  },
  type: {
    type: String,
    default: "img_c"
  },
  orphan: {
    type: Boolean,
    default: false
  },
  anno: {
    type: Boolean,
    default: true
  },
  thumbnailUrl: {
    type: String,
    default: ""
  },
  minScale: {
    type: Number,
    default: levelToScale[1]
  },
  maxScale: {
    type: Number,
    default: levelToScale[18]
  },
  token: {
    type: String,
    default: void 0
  },
  webTileLayerOptions: {
    type: Object,
    default: () => ({})
  }
};
const emits = {
  load: (e) => e
};
const _sfc_main = defineComponent({
  name: "VaTdtBasemap",
  components: {
    VaBasemap: _sfc_main$1,
    VaBasemapBaseLayers: _sfc_main$2,
    VaTdtWebTileLayer
  },
  props,
  emits,
  setup(props2) {
    const annoType = computed(() => {
      const baseTypeInfo = props2.type.split("_");
      const baseLayer = baseTypeInfo[0];
      const typeSR = baseTypeInfo[1];
      const annoType2 = `c${baseLayer[0]}a_${typeSR}`;
      return annoType2;
    });
    const thumbnailUrl = computed(() => {
      if (props2.thumbnailUrl) {
        return props2.thumbnailUrl;
      }
      if (props2.type.startsWith("vec")) {
        return "http://lbs.tianditu.gov.cn/images/vec_c.png";
      }
      if (props2.type.startsWith("img")) {
        return "http://lbs.tianditu.gov.cn/images/img_c.png";
      }
      return "";
    });
    return {
      thumbnailUrl,
      annoType
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_VaBasemap = resolveComponent("VaBasemap");
  const _component_VaTdtWebTileLayer = resolveComponent("VaTdtWebTileLayer");
  const _component_VaBasemapBaseLayers = resolveComponent("VaBasemapBaseLayers");
  _push(ssrRenderComponent(_component_VaBasemap, mergeProps({
    orphan: _ctx.orphan,
    "thumbnail-url": _ctx.thumbnailUrl,
    onLoad: ($event) => _ctx.$emit("load", $event)
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_VaTdtWebTileLayer, {
          "default-options": _ctx.webTileLayerOptions,
          type: _ctx.type,
          orphan: true,
          "spatial-reference": _ctx.spatialReference,
          "max-scale": _ctx.maxScale,
          "min-scale": _ctx.minScale,
          token: _ctx.token,
          title: "tdt_web_tile_layer"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_VaBasemapBaseLayers, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_VaBasemapBaseLayers)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        if (_ctx.anno) {
          _push2(ssrRenderComponent(_component_VaTdtWebTileLayer, {
            type: _ctx.annoType,
            orphan: true,
            "spatial-reference": _ctx.spatialReference,
            "max-scale": _ctx.maxScale,
            "min-scale": _ctx.minScale,
            token: _ctx.token,
            "default-options": _ctx.webTileLayerOptions,
            title: "tdt_web_tile_layer_anno"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_VaBasemapBaseLayers, null, null, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_VaBasemapBaseLayers)
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          createVNode(_component_VaTdtWebTileLayer, {
            "default-options": _ctx.webTileLayerOptions,
            type: _ctx.type,
            orphan: true,
            "spatial-reference": _ctx.spatialReference,
            "max-scale": _ctx.maxScale,
            "min-scale": _ctx.minScale,
            token: _ctx.token,
            title: "tdt_web_tile_layer"
          }, {
            default: withCtx(() => [
              createVNode(_component_VaBasemapBaseLayers)
            ]),
            _: 1
          }, 8, ["default-options", "type", "spatial-reference", "max-scale", "min-scale", "token"]),
          _ctx.anno ? (openBlock(), createBlock(_component_VaTdtWebTileLayer, {
            key: 0,
            type: _ctx.annoType,
            orphan: true,
            "spatial-reference": _ctx.spatialReference,
            "max-scale": _ctx.maxScale,
            "min-scale": _ctx.minScale,
            token: _ctx.token,
            "default-options": _ctx.webTileLayerOptions,
            title: "tdt_web_tile_layer_anno"
          }, {
            default: withCtx(() => [
              createVNode(_component_VaBasemapBaseLayers)
            ]),
            _: 1
          }, 8, ["type", "spatial-reference", "max-scale", "min-scale", "token", "default-options"])) : createCommentVNode("", true),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/tdt-basemap/src/index.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
const VaTdtBasemap = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
VaTdtBasemap.install = (app) => {
  app.component(VaTdtBasemap.name, VaTdtBasemap);
};
export {
  VaTdtBasemap as V
};
