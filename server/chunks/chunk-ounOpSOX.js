import { defineComponent, inject, getCurrentInstance, useSSRContext, shallowReactive, provide } from "vue";
const props$1 = {
  type: {
    type: String,
    default: "",
    required: true
  }
};
const _sfc_main$1 = defineComponent({
  name: "VaTreeLayerItem",
  props: props$1,
  setup(props2) {
    const layerItems = inject("vaTreeLayerGroupLayerItems");
    if (!layerItems)
      throw new TypeError();
    const vm = getCurrentInstance();
    if (vm) {
      layerItems[props2.type] = vm;
    }
    return () => null;
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/tree-layer-item/src/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props2, ctx) : void 0;
};
_sfc_main$1.install = (app) => {
  app.component(_sfc_main$1.name, _sfc_main$1);
};
const props = {
  data: {
    type: Array,
    default: () => []
  }
};
const _sfc_main = defineComponent({
  name: "VaTreeLayerGroup",
  props,
  setup(props2, ctx) {
    const layerItems = shallowReactive({});
    provide("vaTreeLayerGroupLayerItems", layerItems);
    const slots = ctx.slots;
    return () => {
      const tempSlots = slots.default();
      const renderTreeList = (list) => {
        const stack = [...list];
        let i = 0;
        while (stack[i]) {
          const children = stack[i].children;
          if (children) {
            stack.push(...children);
          }
          i++;
        }
        return stack.reduce((a, c) => {
          if (c.layer && layerItems[c.layer.type]) {
            const source = layerItems[c.layer.type].slots.default({
              layer: c.layer,
              node: c
            });
            if (Array.isArray(source)) {
              source.forEach((vnode) => {
                a.push(vnode);
              });
            } else {
              a.push(source);
            }
          }
          return a;
        }, []);
      };
      const vnodes = renderTreeList(props2.data);
      return [
        tempSlots,
        // slots 会添加 vm 到 layerItems中
        vnodes
      ];
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/tree-layer-group/src/index.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
_sfc_main.install = (app) => {
  app.component(_sfc_main.name, _sfc_main);
};
export {
  _sfc_main as _,
  _sfc_main$1 as a
};
