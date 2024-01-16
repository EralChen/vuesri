import { bm as h$1, bn as P$1, bo as e, bp as y, bq as j, br as c } from "./chunk-KFNcxJaF.js";
import { d } from "./chunk-Iqdi-Y9L.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
let p = class extends d {
  get updating() {
    return this._watchUpdatingTracking?.updating ?? false;
  }
  constructor(t) {
    super(t), this._watchUpdatingTracking = new h$1();
  }
  initialize() {
    const { featureTiles: t } = this.view;
    this.addHandles(t.addClient()), this._watchUpdatingTracking.addOnCollectionChange(() => t?.tiles, () => this.update(), P$1);
  }
  destroy() {
    this._watchUpdatingTracking.destroy();
  }
  getTiles() {
    const t = (t2) => {
      const [e2, r, o] = t2.lij;
      return j.fromExtent(this.view.featureTiles.tilingScheme.getExtentGeometry(e2, r, o));
    };
    return this.view.featureTiles.tiles.toArray().sort((t2, e2) => t2.loadPriority - e2.loadPriority).map((e2) => ({ ...e2, geometry: t(e2) }));
  }
};
e([y()], p.prototype, "_watchUpdatingTracking", void 0), e([y()], p.prototype, "updating", null), e([y()], p.prototype, "view", void 0), p = e([c("esri.views.3d.layers.support.FeatureTileTree3DDebugger")], p);
export {
  p as FeatureTileTree3DDebugger
};