import { u as useSetLayerOptions$1, p as props$1 } from "./chunk-ZSpamg93.js";
import { watchEffect } from "vue";
import "./chunk-ejFG4zJ0.js";
import "@vunk/core/shared/utils-class";
import { bindPropsFactory, onEmitsFactory } from "@vunk/core/shared/utils-vue";
function useSetLayerOptions(layer, props2) {
  useSetLayerOptions$1(layer, props2);
  watchEffect(() => {
    if (props2.renderer === void 0)
      return;
    layer.renderer = props2.renderer;
  });
  watchEffect(() => {
    layer.definitionExpression = props2.definitionExpression;
  });
  watchEffect(() => {
    layer.popupEnabled = props2.popupEnabled;
  });
}
function useSetLayerSpatialReference(view, layer, props2) {
  watchEffect(() => {
    view.when(() => {
      layer.spatialReference = props2.spatialReference || view.spatialReference;
    });
  });
}
const props = {
  ...props$1,
  renderer: {
    type: Object,
    default: void 0
  },
  definitionExpression: {
    type: String,
    default: "1=1"
  },
  popupEnabled: {
    type: Boolean,
    default: true
  },
  defaultOptions: {
    type: Object,
    default: () => ({})
  },
  spatialReference: {
    type: Object,
    default: void 0
  }
};
const createBindProps = bindPropsFactory(props);
const emits = {
  click: (e) => e,
  pointerMove: (e) => e
};
onEmitsFactory(emits);
export {
  useSetLayerSpatialReference as a,
  createBindProps as c,
  emits as e,
  props as p,
  useSetLayerOptions as u
};
