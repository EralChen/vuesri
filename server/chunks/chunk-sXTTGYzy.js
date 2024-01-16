import { bb as s$1, lf as e, aM as s$2, aw as u$1, bQ as b, aG as a$1 } from "./chunk-KFNcxJaF.js";
import { j, v, t } from "./chunk-I8SN0CZW.js";
import { I } from "./chunk-FEoO8e12.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-XCl2NxdK.js";
import "./chunk-H58sM9yM.js";
import "./chunk-jrhFla2W.js";
import "./chunk-DnHFm0Vi.js";
import "./chunk-Tt9yuqqG.js";
import "./chunk-ubi9cRRg.js";
import "./chunk-yIp_WHt0.js";
const a = s$1.getLogger("esri.views.2d.layers.features.support.whereUtils"), o = { getAttribute: (e2, r) => e2.readAttribute(r) };
async function s(r, s2) {
  try {
    const n = await e(r, s2);
    if (!n.isStandardized) {
      const r2 = new s$2("mapview - bad input", "Unable to apply filter's definition expression, as expression is not standardized.", n);
      a.error(r2);
    }
    return (e2) => {
      const r2 = e2.readArcadeFeature();
      return n.testFeature(r2, o);
    };
  } catch (n) {
    return a.warn("mapview-bad-where-clause", "Encountered an error when evaluating where clause", r), (e2) => true;
  }
}
const d = 1, m = 2;
class p {
  constructor(t2) {
    this._geometryBounds = u$1(), this._idToVisibility = /* @__PURE__ */ new Map(), this._serviceInfo = t2;
  }
  get hash() {
    return this._hash;
  }
  check(t2) {
    return this._applyFilter(t2);
  }
  clear() {
    const t2 = this._resetAllHiddenIds();
    return this.update(), { show: t2, hide: [] };
  }
  invalidate() {
    this._idToVisibility.forEach((t2, e2) => {
      this._idToVisibility.set(e2, 0);
    });
  }
  setKnownIds(t2) {
    for (const e2 of t2)
      this._idToVisibility.set(e2, d);
  }
  setTrue(t2) {
    const e2 = [], i = [], s2 = new Set(t2);
    return this._idToVisibility.forEach((t3, r) => {
      const o2 = !!(this._idToVisibility.get(r) & d), h = s2.has(r);
      !o2 && h ? e2.push(r) : o2 && !h && i.push(r), this._idToVisibility.set(r, h ? d | m : 0);
    }), { show: e2, hide: i };
  }
  createQuery() {
    const { geometry: t2, spatialRel: e2, where: i, timeExtent: s2, objectIds: r } = this;
    return b.fromJSON({ geometry: t2, spatialRel: e2, where: i, timeExtent: s2, objectIds: r });
  }
  async update(t2, e2) {
    this._hash = JSON.stringify(t2);
    const i = await j(t2, null, e2);
    await Promise.all([this._setGeometryFilter(i), this._setIdFilter(i), this._setAttributeFilter(i), this._setTimeFilter(i)]);
  }
  async _setAttributeFilter(t2) {
    if (!t2?.where)
      return this._clause = null, void (this.where = null);
    this._clause = await s(t2.where, this._serviceInfo.fieldsIndex), this.where = t2.where;
  }
  _setIdFilter(t2) {
    this._idsToShow = t2?.objectIds && new Set(t2.objectIds), this._idsToHide = t2?.hiddenIds && new Set(t2.hiddenIds), this.objectIds = t2?.objectIds;
  }
  async _setGeometryFilter(t2) {
    if (!t2?.geometry)
      return this._spatialQueryOperator = null, this.geometry = null, void (this.spatialRel = null);
    const e2 = t2.geometry, i = t2.spatialRel || "esriSpatialRelIntersects", r = await v(i, e2, this._serviceInfo.geometryType, this._serviceInfo.hasZ, this._serviceInfo.hasM);
    a$1(this._geometryBounds, e2), this._spatialQueryOperator = r, this.geometry = e2, this.spatialRel = i;
  }
  _setTimeFilter(i) {
    if (this.timeExtent = this._timeOperator = null, i?.timeExtent)
      if (this._serviceInfo.timeInfo)
        this.timeExtent = i.timeExtent, this._timeOperator = t(this._serviceInfo.timeInfo, i.timeExtent, I);
      else {
        const s2 = new s$2("feature-layer-view:time-filter-not-available", "Unable to apply time filter, as layer doesn't have time metadata.", i.timeExtent);
        s$1.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter").error(s2);
      }
  }
  _applyFilter(t2) {
    return this._filterByGeometry(t2) && this._filterById(t2) && this._filterByTime(t2) && this._filterByExpression(t2);
  }
  _filterByExpression(t2) {
    return !this.where || this._clause(t2);
  }
  _filterById(t2) {
    return (!this._idsToHide?.size || !this._idsToHide.has(t2.getObjectId())) && (!this._idsToShow?.size || this._idsToShow.has(t2.getObjectId()));
  }
  _filterByGeometry(t2) {
    if (!this.geometry)
      return true;
    const e2 = t2.readHydratedGeometry();
    return !!e2 && this._spatialQueryOperator(e2);
  }
  _filterByTime(t2) {
    return null == this._timeOperator || this._timeOperator(t2);
  }
  _resetAllHiddenIds() {
    const t2 = [];
    return this._idToVisibility.forEach((e2, i) => {
      e2 & d || (this._idToVisibility.set(i, d), t2.push(i));
    }), t2;
  }
}
export {
  p as default
};
