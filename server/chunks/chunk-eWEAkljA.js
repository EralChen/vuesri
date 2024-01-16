import { bJ as d$1, bn as P$1, bq as j, da as c$1, bo as e, br as c } from "./chunk-KFNcxJaF.js";
import { d } from "./chunk-Iqdi-Y9L.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
let p = class extends d {
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
p = e([c("esri.views.3d.layers.support.TerrainTileTree3DDebugger")], p);
export {
  p as TerrainTileTree3DDebugger
};
