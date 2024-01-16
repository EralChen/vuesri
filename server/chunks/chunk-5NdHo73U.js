import { p as props$1, e as emits$1, V as VaWmtsLayer, c as createBindProps, a as createOnEmits } from "./chunk-xbOcex_F.js";
import { pickObject } from "@vunk/core/shared/utils-object";
import { defineComponent, computed, ref, watch, nextTick, resolveComponent, mergeProps, toHandlers, withCtx, renderSlot, useSSRContext } from "vue";
import { cF as s$1 } from "./chunk-KFNcxJaF.js";
import { ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./chunk-rLRIqhK0.js";
const props = {
  ...pickObject(props$1, {
    excludes: ["url"]
  }),
  type: {
    type: String,
    default: "img_c"
  },
  token: {
    type: String,
    default: "f0175927031c1e12cb804b0c3b8cce4d"
  }
};
const emits = {
  ...emits$1
};
const tdtBase = "https://{subDomain}.tianditu.gov.cn";
const subDomains = ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"];
s$1.request.interceptors?.push({
  urls: [
    tdtBase
  ],
  before(request) {
    request.url = request.url.replace(
      "{subDomain}",
      subDomains[Math.floor(Math.random() * subDomains.length)]
    );
  }
});
const _sfc_main = defineComponent({
  name: "VaTdtWmtsLayer",
  components: {
    VaWmtsLayer
  },
  props,
  emits,
  setup(props2, { emit }) {
    const bindProps = createBindProps(props2);
    const onEmits = createOnEmits(emit);
    const tdtUrl = computed(() => {
      return `${tdtBase}/${props2.type}/wmts`;
    });
    const ready = ref(true);
    watch(() => props2.type, async () => {
      ready.value = false;
      await nextTick();
      ready.value = true;
    });
    return {
      ready,
      bindProps,
      onEmits,
      tdtUrl
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_VaWmtsLayer = resolveComponent("VaWmtsLayer");
  if (_ctx.ready) {
    _push(ssrRenderComponent(_component_VaWmtsLayer, mergeProps(_ctx.bindProps, {
      url: _ctx.tdtUrl,
      "service-mode": "KVP",
      "custom-parameters": {
        tk: _ctx.token
      }
    }, toHandlers(_ctx.onEmits), _attrs), {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/tdt-wmts-layer/src/index.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
const VaTdtWmtsLayer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
VaTdtWmtsLayer.install = (app) => {
  app.component(VaTdtWmtsLayer.name, VaTdtWmtsLayer);
};
export {
  VaTdtWmtsLayer as V
};
