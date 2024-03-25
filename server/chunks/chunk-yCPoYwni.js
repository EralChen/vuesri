import { s as sMitter } from "./chunk-3BageVRQ.js";
import { u as useView } from "./chunk-oD5XiDYU.js";
import { defineComponent, onUnmounted, useSSRContext } from "vue";
import { u as useLayer } from "./chunk-AN2pNKfL.js";
import { c as createMitterToggleHandler } from "./chunk-ZSpamg93.js";
import { onEmitsFactory } from "@vunk/core/shared/utils-vue";
const emits = {
  click: (e) => e,
  pointerMove: (e) => e
};
const createOnEmits = onEmitsFactory(emits);
const _sfc_main = defineComponent({
  emits,
  setup(props, { emit }) {
    const view = useView();
    const layer = useLayer();
    const mitter = view[sMitter];
    const MitterToggleHandler = createMitterToggleHandler(mitter);
    const clickMitter = new MitterToggleHandler("click", (e) => {
      const { hitTestResult } = e;
      const results = hitTestResult.results;
      const result = results.find((item) => {
        if (item.type === "media") {
          return item.layer === layer;
        } else {
          return item.graphic?.layer === layer;
        }
      });
      emit("click", { ...e, result, layer });
    });
    clickMitter.add();
    onUnmounted(() => {
      clickMitter.remove();
    });
    const pinterMoveMitter = new MitterToggleHandler("pointer-move", (e) => {
      const { hitTestResult } = e;
      const results = hitTestResult.results;
      const result = results.find((item) => {
        if (item.type === "media") {
          return item.layer === layer;
        } else {
          return item.graphic?.layer === layer;
        }
      });
      emit("pointerMove", { ...e, result, layer });
    });
    pinterMoveMitter.add();
    onUnmounted(() => {
      pinterMoveMitter.remove();
    });
    return () => null;
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/layer-hit-events/src/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
_sfc_main.install = (app) => {
  app.component(_sfc_main.name, _sfc_main);
};
export {
  _sfc_main as _,
  createOnEmits as c
};
