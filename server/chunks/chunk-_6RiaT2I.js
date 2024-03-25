import { defineComponent, ref, unref, mergeProps, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { setData } from "@vunk/core";
import { VkfForm } from "@vunk/form";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "form",
  __ssrInlineRender: true,
  emits: ["go"],
  setup(__props, {
    emit: __emit
  }) {
    const emit = __emit;
    const data = ref({
      ObjectId: 57
    });
    const formItems = [{
      templateType: "VkfInput",
      label: "ObjectId",
      prop: "ObjectId"
    }, {
      templateType: "VkfButton",
      buttonLabel: "go",
      onClick: () => {
        emit("go", data.value);
      }
    }];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VkfForm), mergeProps({
        inline: true,
        "form-items": formItems,
        data: data.value,
        onSetData: ($event) => unref(setData)(data.value, $event)
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/popup-template/popup-open/form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
