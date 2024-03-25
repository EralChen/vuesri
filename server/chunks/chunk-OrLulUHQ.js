import { ce as d$1, bX as P$1, bY as j, dB as c$1, aV as e, a_ as c } from "./chunk-ejFG4zJ0.js";
import { d } from "./chunk-d3fZIXRm.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
let m = class extends d {
  constructor(e2) {
    super(e2), this.enablePolygons = false;
  }
  initialize() {
    d$1(() => this.enabled, (e2) => this.view.basemapTerrain.renderPatchBorders = e2, P$1);
  }
  getTiles() {
    const e2 = null != this.view.basemapTerrain.spatialReference ? this.view.basemapTerrain.spatialReference : null;
    return this.view.basemapTerrain.test.getRenderedTiles().map((r) => ({ ...r, geometry: j.fromExtent(c$1(r.extent, e2)) }));
  }
};
m = e([c("esri.views.3d.layers.support.TerrainTileTree3DDebugger")], m);
export {
  m as TerrainTileTree3DDebugger
};
