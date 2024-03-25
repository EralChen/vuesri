import { p as props$1, u as useSetLayerOptions, a as useAddLayer } from "./chunk-ZSpamg93.js";
import { defineComponent, watchEffect, provide, useSSRContext } from "vue";
import { on as Y, aQ as U$1 } from "./chunk-ejFG4zJ0.js";
import "@vunk/core/shared/utils-class";
import { u as useView } from "./chunk-oD5XiDYU.js";
import { u as useLayer } from "./chunk-AN2pNKfL.js";
import { u as useSublayers } from "./chunk-RYbJjpM2.js";
import { ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./chunk-x8u7LPTa.js";
const props = {
  ...props$1,
  defaultOptions: {
    type: Object,
    default: () => ({})
  },
  id: {
    type: Number,
    default: 0
  },
  renderer: {
    type: Object,
    default: void 0
  },
  definitionExpression: {
    type: String,
    default: "1=1"
  }
};
const emits = {
  load: (e) => e
};
const _sfc_main = defineComponent({
  name: "VaSublayer",
  emits,
  props,
  setup(props2, { emit }) {
    const view = useView();
    const sublayers = useSublayers();
    const layer = useLayer();
    const sublayer = new Y({
      ...props2.defaultOptions
    });
    const whenPromise = sublayer.when();
    const layerInfoPromise = rLayerInfo().then((res) => {
      sublayer.set("fullExtent", res.extent);
    });
    sublayer.when = async function(...args) {
      const [reslove, reject] = args;
      return layerInfoPromise.then(() => {
        return whenPromise;
      }).then((e) => {
        reslove?.(e);
        return e;
      }).catch((err) => {
        reject?.(err);
      });
    };
    watchEffect(() => {
      sublayer.id = props2.id;
    });
    watchEffect(() => {
      if (props2.renderer === void 0)
        return;
      sublayer.renderer = props2.renderer;
    });
    watchEffect(() => {
      sublayer.definitionExpression = props2.definitionExpression;
    });
    useSetLayerOptions(sublayer, props2);
    useAddLayer(sublayers, sublayer, props2);
    provide("vaSublayer", sublayer);
    provide("vaLayer", sublayer);
    emit("load", { view, sublayers, sublayer });
    async function rLayerInfo() {
      await layer.when();
      const sublayerUrl = sublayer.url;
      const res = await U$1(
        sublayerUrl,
        {
          query: {
            f: "json"
          }
        }
      );
      return res.data;
    }
    return {};
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/sublayer/src/index.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
const VaSublayer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
VaSublayer.install = (app) => {
  app.component(VaSublayer.name, VaSublayer);
};
export {
  VaSublayer as V
};
