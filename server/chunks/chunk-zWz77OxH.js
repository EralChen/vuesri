import { bZ as S$1, hQ as E, ce as d$1, bX as P$1, eV as v, hR as t, hS as j, hT as y, cU as s$1, aV as e, aX as y$1, a_ as c, hU as h$1 } from "./chunk-ejFG4zJ0.js";
import { o, a } from "./chunk-SrbIdaY6.js";
import { i, r, n } from "./chunk-vJhIHpbR.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-s09znI9e.js";
let S = class extends S$1 {
  get availability() {
    return 1;
  }
  get updating() {
    return this.layerSource.updating;
  }
  get _snappingElevationAligner() {
    const { view: e2 } = this, { layer: t2 } = this.layerSource, i$1 = null != e2 && "3d" === e2.type;
    if (!i$1 || "subtype-group" === t2.type)
      return i();
    const o2 = async (i2, o3) => (await h$1(e2.whenLayerView(t2), o3)).elevationAlignPointsInFeatures(i2, o3);
    return i(i$1, { elevationInfo: t2.elevationInfo, alignPointsInFeatures: o2 });
  }
  get _snappingElevationFilter() {
    const { view: e2 } = this, t2 = null != e2 && "3d" === e2.type && "subtype-group" !== this.layerSource.layer.type;
    return r(t2);
  }
  get _symbologySnappingFetcher() {
    const { view: e2 } = this, { layer: t2 } = this.layerSource;
    return null != e2 && "3d" === e2.type && "subtype-group" !== t2.type ? n(this._symbologySnappingSupported, async (i2, n2) => {
      const r2 = await e2.whenLayerView(t2);
      return s$1(n2), r2.queryForSymbologySnapping({ candidates: i2, spatialReference: e2.spatialReference }, n2);
    }) : n();
  }
  get _symbologySnappingSupported() {
    return null != this._layerView3D && this._layerView3D.symbologySnappingSupported;
  }
  initialize() {
    const { view: e2 } = this, { layer: t2 } = this.layerSource;
    null != e2 && "3d" === e2.type && "subtype-group" !== t2.type && (e2.whenLayerView(t2).then((e3) => this._layerView3D = e3), this.addHandles([e2.elevationProvider.on("elevation-change", ({ context: e3 }) => {
      const { elevationInfo: i2 } = t2;
      E(e3, i2) && this._snappingElevationAligner.notifyElevationSourceChange();
    }), d$1(() => t2.elevationInfo, () => this._snappingElevationAligner.notifyElevationSourceChange(), P$1), d$1(() => null != this._layerView3D ? this._layerView3D.processor?.renderer : null, () => this._symbologySnappingFetcher.notifySymbologyChange(), P$1), v(() => this._layerView3D?.layer, ["edits", "apply-edits", "graphic-update"], () => this._symbologySnappingFetcher.notifySymbologyChange())]));
  }
  constructor(e2) {
    super(e2), this.view = null, this._layerView3D = null, this._memoizedMakeGetGroundElevation = t(o);
  }
  refresh() {
  }
  async fetchCandidates(e2, t2) {
    const { layer: i2 } = this.layerSource, n2 = i2.source;
    if (!n2?.querySnapping)
      return [];
    const r2 = j(i2), a$1 = y(e2, this.view?.type ?? "2d", r2), s = await n2.querySnapping(a$1, { signal: t2 });
    s$1(t2);
    const p = e2.coordinateHelper.spatialReference, l = await this._snappingElevationAligner.alignCandidates(s.candidates, p, t2);
    s$1(t2);
    const y$12 = await this._symbologySnappingFetcher.fetch(l, t2);
    s$1(t2);
    const h = 0 === y$12.length ? l : [...l, ...y$12], m = this._snappingElevationFilter.filter(a$1, h), d = this._memoizedMakeGetGroundElevation(this.view, p);
    return m.map((e3) => a(e3, d));
  }
};
e([y$1({ constructOnly: true })], S.prototype, "layerSource", void 0), e([y$1({ constructOnly: true })], S.prototype, "view", void 0), e([y$1()], S.prototype, "_snappingElevationAligner", null), e([y$1()], S.prototype, "_snappingElevationFilter", null), e([y$1()], S.prototype, "_symbologySnappingFetcher", null), e([y$1()], S.prototype, "_layerView3D", void 0), e([y$1()], S.prototype, "_symbologySnappingSupported", null), S = e([c("esri.views.interactive.snapping.featureSources.FeatureCollectionSnappingSource")], S);
export {
  S as FeatureCollectionSnappingSource
};
