import { bindPropsFactory } from "@vunk/core/shared/utils-vue";
import { watch, onUnmounted, watchEffect } from "vue";
import { aC as M, io as L } from "./chunk-ejFG4zJ0.js";
import { a as sIndex, b as sIndexTopping, c as sCursor, s as sMitter } from "./chunk-3BageVRQ.js";
import { u as useSetVisible } from "./chunk-RQshD5bR.js";
import { ToggleHandler } from "@vunk/core/shared/utils-class";
const isWithinScale = (value, scale) => {
  if (scale.maxScale && value < scale.maxScale) {
    return false;
  }
  if (scale.minScale && value >= scale.minScale) {
    return false;
  }
  return true;
};
function extentFromScreenPoint(view, screenPoint, tolerance = 10) {
  const screenExtent = {
    xmin: screenPoint.x - tolerance,
    ymin: screenPoint.y - tolerance,
    xmax: screenPoint.x + tolerance,
    ymax: screenPoint.y + tolerance
  };
  const topLeft = {
    x: screenExtent.xmin,
    y: screenExtent.ymin
  };
  const bottomRight = {
    x: screenExtent.xmax,
    y: screenExtent.ymax
  };
  const mapTopLeft = view.toMap(topLeft);
  const mapBottomRight = view.toMap(bottomRight);
  const mapExtent = new M({
    xmin: mapTopLeft.x,
    ymin: mapBottomRight.y,
    xmax: mapBottomRight.x,
    ymax: mapTopLeft.y,
    spatialReference: view.spatialReference
  });
  return mapExtent;
}
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
const createMitterToggleHandler = (mitter) => {
  return class MitterToggleHandler extends ToggleHandler {
    name;
    handler;
    cacheData;
    constructor(name, handler) {
      super();
      this.name = name;
      this.handler = handler;
    }
    add() {
      mitter.on(this.name, this.handler);
      this.removeHandler = () => mitter.off(this.name, this.handler);
    }
  };
};
function useAddLayer(map, layer, props2) {
  const getLayers = () => {
    return map instanceof L ? map.layers : map;
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
function useSetLayerBasicOptions(layer, props2) {
  useSetVisible(layer, props2);
  watchEffect(() => {
    layer.title = props2.title;
  });
  watchEffect(() => {
    layer[sCursor] = props2.cursor;
  });
  watchEffect(() => {
    layer.opacity = props2.opacity;
  });
}
function useSetLayerOptions(layer, props2) {
  useSetLayerBasicOptions(layer, props2);
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
function useScaleVisibleHandler(view, props2, cb) {
  const mitter = view[sMitter];
  if (!mitter)
    throw new Error("mitter is not defined");
  const MitterToggleHandler = createMitterToggleHandler(mitter);
  const watchScale = new MitterToggleHandler("watch:scale", ([v]) => {
    const visible = isWithinScale(v, {
      maxScale: props2.maxScale,
      minScale: props2.minScale
    });
    cb(visible);
  });
  watchScale.add();
  onUnmounted(() => {
    watchScale.remove();
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
  useAddLayer as a,
  useSetLayerBasicOptions as b,
  createMitterToggleHandler as c,
  useScaleVisibleHandler as d,
  extentFromScreenPoint as e,
  isWithinScale as i,
  props as p,
  useSetLayerOptions as u
};
