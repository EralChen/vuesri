import { defineComponent, watch, useSSRContext } from "vue";
import { u as useGraphicsLayer } from "./chunk-ggs_QHBV.js";
import { ToggleHandler } from "@vunk/core/shared/utils-class";
import { isNotEmptyObject } from "@vunk/core/shared/utils-object";
const _sfc_main = defineComponent({
  props: {
    data: {
      type: Object,
      required: true
    },
    symbol: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const layer = useGraphicsLayer();
    class ToggleSymbol extends ToggleHandler {
      map = /* @__PURE__ */ new Map();
      add(gs) {
        gs.forEach((g) => {
          this.map.set(g, g.symbol);
          g.symbol = props.symbol;
        });
        this.removeHandler = () => {
          gs.forEach((g) => {
            const symbol = this.map.get(g);
            symbol && (g.symbol = symbol);
          });
          this.map = /* @__PURE__ */ new Map();
        };
      }
      reset(gs) {
        this.remove();
        this.add(gs);
      }
    }
    const toggleSymbol = new ToggleSymbol();
    watch(() => props.data, (v) => {
      if (v && isNotEmptyObject(v)) {
        const graphics = layer.graphics.filter((g) => {
          let flag = true;
          Object.keys(v).forEach((key) => {
            if (g.attributes[key] !== v[key]) {
              flag = false;
            }
          });
          return flag;
        });
        toggleSymbol.reset(graphics);
      } else {
        toggleSymbol.remove();
      }
    }, { immediate: true, deep: true });
    return () => null;
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/graphics-layer/change-symbol/highlight-graphic.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
