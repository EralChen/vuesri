import { bindPropsFactory } from "@vunk/core/shared/utils-vue";
import { watchEffect, onDeactivated, onActivated, watch, onUnmounted } from "vue";
import { lh as sIndex, li as sIndexTopping, lj as sCursor, hB as g } from "./chunk-KFNcxJaF.js";
const props = {
  maxScale: {
    type: Number,
    default: 0
  },
  minScale: {
    type: Number,
    default: 0
  },
  cursor: {
    type: String,
    default: ""
  },
  title: {
    type: String,
    default: ""
  },
  visible: {
    type: Boolean,
    default: true
  },
  opacity: {
    type: Number,
    default: 1
  },
  index: {
    type: Number,
    default: void 0
  },
  orphan: {
    type: Boolean,
    default: false
  }
};
bindPropsFactory(props);
function useSetVisible(instance, props2) {
  watchEffect(() => {
    instance.visible = props2.visible;
  });
  onDeactivated(() => {
    instance.visible = false;
  });
  onActivated(() => {
    instance.visible = props2.visible;
  });
}
function useAddLayer(map, layer, props2) {
  const getLayers = () => {
    return map instanceof g ? map.layers : map;
  };
  if (props2.orphan)
    return;
  layer[sIndex] = props2.index;
  layer[sIndexTopping] = props2.indexTopping;
  map.add(layer);
  const reorder = () => {
    const layers = getLayers();
    const oderedLayers = genOderLayers(layers);
    oderedLayers.forEach((item, i) => {
      setTimeout(() => {
        map.reorder(item, i);
      });
    });
  };
  layer.when(() => {
    reorder();
  });
  if (typeof props2.index === "number")
    reorder();
  watch(() => [props2.index, props2.indexTopping], ([v, isTop]) => {
    if (typeof v === "number") {
      layer[sIndex] = v;
      layer[sIndexTopping] = isTop;
      reorder();
    }
  });
  onUnmounted(() => {
    map.remove(layer);
  });
}
function useSetLayerOptions(layer, props2) {
  useSetVisible(layer, props2);
  watchEffect(() => {
    layer[sCursor] = props2.cursor;
  });
  watchEffect(() => {
    layer.title = props2.title;
  });
  watchEffect(() => {
    layer.maxScale = props2.maxScale;
  });
  watchEffect(() => {
    layer.minScale = props2.minScale;
  });
  watchEffect(() => {
    layer.opacity = props2.opacity;
  });
}
function genOderLayers(layers) {
  const oderedLayers = new OderRecord();
  const toppingLayers = new OderRecord();
  layers.forEach((item) => {
    const hopeIndex = item[sIndex];
    const indexTopping = item[sIndexTopping];
    if (indexTopping) {
      toppingLayers.add(item, hopeIndex);
    } else {
      oderedLayers.add(item, hopeIndex);
    }
  });
  return [...oderedLayers.toArray(), ...toppingLayers.toArray()];
}
class OderRecord {
  record = {};
  add(layer, instert) {
    if (typeof instert === "number") {
      let current = this.record[instert];
      while (current) {
        instert++;
        current = this.record[instert];
      }
      this.record[instert] = layer;
    } else {
      this.record[this.getMaxIndex() + 1] = layer;
    }
  }
  getMaxIndex() {
    const keys = Object.keys(this.record);
    if (!keys.length)
      return 0;
    return Math.max(...keys.map(Number));
  }
  toArray() {
    return Object.values(this.record);
  }
}
export {
  useSetVisible as a,
  useAddLayer as b,
  props as p,
  useSetLayerOptions as u
};
