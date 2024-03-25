import { defineComponent, onUnmounted, useSSRContext } from "vue";
import { u as useView } from "./chunk-oD5XiDYU.js";
import "./chunk-ejFG4zJ0.js";
import { ToggleHandler } from "@vunk/core/shared/utils-class";
import { s as sMitter, c as sCursor } from "./chunk-3BageVRQ.js";
import { throttle } from "lodash-es";
const props = {
  cursor: {
    type: String,
    default: ""
  }
};
const emits = {
  "update:cursor": (e) => e || true
};
const _sfc_main$1 = defineComponent({
  emits,
  props,
  setup(props2, { emit }) {
    const view = useView();
    class ViewOnToggleHandler extends ToggleHandler {
      eventName;
      handler;
      cacheData;
      constructor(eventName, handler) {
        super();
        this.eventName = eventName;
        this.handler = handler;
      }
      add() {
        const hr = view.on(this.eventName, this.handler);
        this.removeHandler = hr.remove;
      }
    }
    const mitter = view[sMitter];
    const clickHandler = new ViewOnToggleHandler("click", async (event) => {
      const hitTestResult = await view.hitTest(event);
      console.log("va_view_click_event", { view, event, hitTestResult });
      mitter.emit("click", { view, event, hitTestResult });
    });
    clickHandler.add();
    onUnmounted(() => {
      clickHandler.remove();
    });
    const pointerMoveHandler = new ViewOnToggleHandler(
      "pointer-move",
      throttle(
        async (event) => {
          const hitTestResult = await view.hitTest(event);
          const feature = hitTestResult.results[0];
          let ownLayer;
          if (feature) {
            if (feature.type === "media") {
              ownLayer = feature.layer;
            } else if (feature.type === "graphic") {
              ownLayer = feature.graphic?.layer;
            }
          }
          if (ownLayer) {
            const cursor = ownLayer[sCursor];
            emit("update:cursor", cursor);
          } else {
            emit("update:cursor", "initial");
          }
          mitter.emit("pointer-move", { view, event, hitTestResult });
        },
        600,
        {
          leading: false,
          trailing: true
        }
      )
    );
    pointerMoveHandler.add();
    onUnmounted(() => {
      pointerMoveHandler.remove();
    });
    return () => null;
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/view/src/events/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props2, ctx) : void 0;
};
const _sfc_main = defineComponent({
  setup() {
    const view = useView();
    class ViewWatchToggleHandler extends ToggleHandler {
      propertyName;
      handler;
      cacheData;
      constructor(propertyName, handler) {
        super();
        this.propertyName = propertyName;
        this.handler = handler;
      }
      add() {
        const hr = view.watch(this.propertyName, this.handler);
        this.removeHandler = hr.remove;
      }
    }
    const mitter = view[sMitter];
    const extentWatch = new ViewWatchToggleHandler("extent", throttle((v, ov) => {
      mitter.emit("watch:extent", [v, ov]);
    }, 50));
    extentWatch.add();
    onUnmounted(() => {
      extentWatch.remove();
    });
    const scaleWatch = new ViewWatchToggleHandler("scale", throttle((v, ov) => {
      mitter.emit("watch:scale", [v, ov]);
    }, 50));
    scaleWatch.add();
    onUnmounted(() => {
      scaleWatch.remove();
    });
    return () => null;
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/view/src/watchs/index.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
export {
  _sfc_main$1 as _,
  _sfc_main as a,
  emits as e,
  props as p
};
