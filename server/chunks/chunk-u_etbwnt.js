import { p as props$1, u as useSetLayerOptions, a as useAddLayer } from "./chunk-ZSpamg93.js";
import { defineComponent, watchEffect, useSSRContext } from "vue";
import { r1 as f, nF as e, dE as B, ce as d$1, bY as j, dF as U, r2 as V, ax as t, as as j$1, a$ as b } from "./chunk-ejFG4zJ0.js";
import "@vunk/core/shared/utils-class";
import { u as useView } from "./chunk-oD5XiDYU.js";
import { ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./chunk-x8u7LPTa.js";
const props = {
  ...props$1,
  color: {
    type: Array,
    default: () => [0, 0, 0, 0.7]
  },
  geometry: {
    type: Object,
    default: void 0
  },
  distance: {
    type: Number,
    default: 24
  },
  tileInfo: {
    type: Object,
    default: void 0
  },
  spatialReference: {
    type: Object,
    default: void 0
  }
};
const emits = {
  load: (e2) => e2
};
const MaskingLayerView2D = f.createSubclass({
  constructor() {
    this.tileContexts = new window.Map();
    this.watchHandles = new e();
    this.needsImageUpdate = false;
  },
  // Called when the layer is added to the map.
  // 当图层挂载时候
  attach() {
    const projectionPromise = B();
    const layerView = this;
    const layer = layerView.layer;
    this.watchHandles.add([
      d$1(
        () => this.layer.tileInfo,
        () => {
          layerView.needsImageUpdate = true;
          layerView.requestRender();
        },
        {
          initial: true
        }
      ),
      d$1(() => this.layer.geometry, () => {
        if (!layer.geometry) {
          layerView.projectedGeometry = null;
          layerView.needsImageUpdate = true;
          layerView.requestRender();
          return;
        }
        projectionPromise.then(() => {
          layerView.projectedGeometry = U(
            layer.geometry,
            layer.tileInfo.spatialReference,
            V(
              layer.geometry.spatialReference,
              layer.tileInfo.spatialReference
            )
          );
          layerView.needsImageUpdate = true;
          layerView.requestRender();
        });
      }, {
        initial: true
      }),
      d$1(() => this.layer.distance, () => {
        layerView.needsImageUpdate = true;
        layerView.requestRender();
      }, {
        initial: true
      }),
      d$1(() => this.layer.color, () => {
        layerView.needsImageUpdate = true;
        layerView.requestRender();
      }, {
        initial: true
      })
    ]);
  },
  // Called to regenerate a tile.
  drawGeometry(ctx, bounds) {
    ctx.globalCompositeOperation = "source-over";
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;
    if (!this.projectedGeometry) {
      ctx.clearRect(0, 0, width, height);
      return;
    }
    if (this.layer.distance === 0) {
      return;
    }
    const c = this.layer.color;
    ctx.fillStyle = "rgba(" + c[0] + ", " + c[1] + ", " + c[2] + ", 1)";
    ctx.fillRect(0, 0, width, height);
    const unmaskTerm = 3 / this.layer.distance;
    ctx.globalCompositeOperation = "destination-out";
    if (this.projectedGeometry.type === "polygon" || this.projectedGeometry.type === "polyline" || this.projectedGeometry.type === "extent") {
      const rings = this.projectedGeometry.type === "extent" ? j.fromExtent(this.projectedGeometry).rings : this.projectedGeometry.rings || this.projectedGeometry.paths;
      const transformed = rings.map((ring) => {
        return ring.map((coords) => {
          return [
            Math.round(
              width * (coords[0] - bounds[0]) / (bounds[2] - bounds[0])
            ),
            Math.round(
              height * (1 - (coords[1] - bounds[1]) / (bounds[3] - bounds[1]))
            )
          ];
        });
      });
      ctx.lineJoin = "round";
      for (let r = 1; r <= this.layer.distance; ++r) {
        ctx.strokeStyle = "rgba(0, 0, 0, " + unmaskTerm + ")";
        ctx.lineWidth = this.layer.distance + 1 - r;
        for (let i = 0; i < transformed.length; ++i) {
          const ring = transformed[i];
          ctx.beginPath();
          ctx.moveTo(ring[0][0], ring[0][1]);
          for (let j2 = 1; j2 < ring.length; ++j2) {
            ctx.lineTo(ring[j2][0], ring[j2][1]);
          }
          this.projectedGeometry.type !== "polyline" && ctx.closePath();
          ctx.stroke();
        }
      }
      if (this.projectedGeometry.type !== "polyline") {
        ctx.fillStyle = "rgba(0, 0, 0, 1)";
        for (let i = 0; i < transformed.length; ++i) {
          const ring = transformed[i];
          ctx.beginPath();
          ctx.moveTo(ring[0][0], ring[0][1]);
          for (let j2 = 1; j2 < ring.length; ++j2) {
            ctx.lineTo(ring[j2][0], ring[j2][1]);
          }
          ctx.closePath();
          ctx.fill();
        }
      }
    } else if (this.projectedGeometry.type === "point" || this.projectedGeometry.type === "multipoint") {
      const points = this.projectedGeometry.type === "multipoint" ? this.projectedGeometry.points : [[this.projectedGeometry.x, this.projectedGeometry.y]];
      const transformed = points.map((coords) => {
        return [
          Math.round(
            width * (coords[0] - bounds[0]) / (bounds[2] - bounds[0])
          ),
          Math.round(
            height * (1 - (coords[1] - bounds[1]) / (bounds[3] - bounds[1]))
          )
        ];
      });
      for (let r = 1; r <= this.layer.distance; ++r) {
        const size = this.layer.distance + 1 - r;
        ctx.fillStyle = "rgba(0, 0, 0, " + unmaskTerm + ")";
        for (let i = 0; i < transformed.length; ++i) {
          const point = transformed[i];
          ctx.beginPath();
          ctx.arc(point[0], point[1], Math.round(size / 2), 0, 360);
          ctx.fill();
        }
      }
    }
  },
  // Creates the images for new tiles that don't have a texture yet, and destroys the images
  // of tiles that are not on screen anymore.
  // 管理TileImage
  manageTileImages() {
    const tileIdSet = /* @__PURE__ */ new Set();
    for (let i = 0; i < this.tiles.length; ++i) {
      const tile = this.tiles[i];
      tileIdSet.add(tile.id);
      let ctx = this.tileContexts.get(tile.id);
      if (ctx) {
        if (this.needsImageUpdate) {
          this.drawGeometry(ctx, tile.bounds);
        }
      } else {
        const canvas = document.createElement("canvas");
        canvas.width = this.layer.tileInfo.size[0];
        canvas.height = this.layer.tileInfo.size[1];
        ctx = canvas.getContext("2d");
        this.tileContexts.set(tile.id, ctx);
        this.drawGeometry(ctx, tile.bounds);
      }
    }
    this.tileContexts.forEach((_, id) => {
      if (!tileIdSet.has(id)) {
        this.tileContexts.delete(id);
      }
    });
    this.needsImageUpdate = false;
  },
  // Example of a render implementation that draws tile boundaries.
  render(renderParameters) {
    this.manageTileImages();
    const tileSize = this.layer.tileInfo.size[0];
    const state = renderParameters.state;
    const pixelRatio = state.pixelRatio;
    const width = state.size[0];
    const height = state.size[1];
    const context = renderParameters.context;
    const coords = [0, 0];
    context.clearRect(0, 0, width * pixelRatio, height * pixelRatio);
    if (state.rotation !== 0) {
      context.translate(
        width * pixelRatio * 0.5,
        height * pixelRatio * 0.5
      );
      context.rotate(state.rotation * Math.PI / 180);
      context.translate(
        -width * pixelRatio * 0.5,
        -height * pixelRatio * 0.5
      );
    }
    context.globalAlpha = this.layer.color[3];
    for (let i = 0; i < this.tiles.length; ++i) {
      const tile = this.tiles[i];
      const ctx = this.tileContexts.get(tile.id);
      const screenScale = tile.resolution / state.resolution * pixelRatio;
      state.toScreenNoRotation(coords, tile.coords);
      context.drawImage(
        ctx.canvas,
        coords[0],
        coords[1],
        tileSize * screenScale,
        tileSize * screenScale
      );
    }
  },
  // Destroy the shader program, the buffers and all the tile images.
  detach() {
    this.watchHandles.removeAll();
  },
  // Required when using tiling; this methods is called every time that `this.tiles`
  // changes, to give the derived class a chance to perform per-tile work as needed;
  // This is where, for instance, tile data could be fetched from a server.
  tilesChanged() {
  }
});
const MaskingLayer = t(b).createSubclass({
  properties: {
    color: {},
    geometry: {},
    distance: {},
    tileInfo: j$1.create({
      size: 512
    })
  },
  constructor() {
  },
  createLayerView(view) {
    if (view.type === "2d") {
      return new MaskingLayerView2D({
        view,
        layer: this
      });
    }
  }
});
const _sfc_main = defineComponent({
  name: "VaMaskingLayer",
  emits,
  props,
  setup(props2, { emit }) {
    const view = useView();
    const map = view.map;
    const baseLayer = view.map.basemap.baseLayers.getItemAt(0);
    const layer = new MaskingLayer({
      color: props2.color,
      distance: props2.distance,
      geometry: props2.geometry
    });
    watchEffect(() => {
      layer.geometry = props2.geometry;
      if (props2.geometry && !props2.geometry.spatialReference) {
        view.when(() => {
          layer.geometry.spatialReference = props2.spatialReference || view.spatialReference;
        });
      }
    });
    watchEffect(() => {
      layer.color = props2.color;
    });
    watchEffect(() => {
      layer.distance = props2.distance;
    });
    watchEffect(() => {
      view.when(() => {
        layer.tileInfo = props2.tileInfo ? props2.tileInfo : baseLayer.tileInfo;
      });
    });
    useSetLayerOptions(layer, props2);
    useAddLayer(map, layer, props2);
    emit("load", { view, layer });
    return {};
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/masking-layer/src/index.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
const VaMaskingLayer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
VaMaskingLayer.install = (app) => {
  app.component(VaMaskingLayer.name, VaMaskingLayer);
};
export {
  VaMaskingLayer as V
};
