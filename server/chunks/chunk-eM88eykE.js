import { bb as s$1, bo as e, bp as y, e0 as w, e1 as d, e2 as j$1, br as c, bJ as d$1, bR as A, e3 as v, e4 as I, e5 as x, bQ as b, e6 as o, dK as i, e7 as J, e8 as v$1, e9 as M, ea as L, eb as O, ec as b$1, ed as w$1, aM as s$2, ee as p, dF as je, ef as n } from "./chunk-KFNcxJaF.js";
const j = "esri.views.layers.FeatureLayerView", q = s$1.getLogger(j), P = (r) => {
  let P2 = class extends r {
    constructor(...e2) {
      super(...e2), this._updatingRequiredFieldsPromise = null, this.dataUpdating = false, this.filter = null, this.timeExtent = null, this.layer = null, this.requiredFields = [], this.view = null;
    }
    initialize() {
      this.addHandles([d$1(() => {
        const e2 = this.layer;
        return [e2?.elevationInfo?.featureExpressionInfo, e2 && "displayField" in e2 ? e2.displayField : null, e2 && "timeInfo" in e2 && e2.timeInfo, e2 && "renderer" in e2 && e2.renderer, e2 && "labelingInfo" in e2 && e2.labelingInfo, e2 && "floorInfo" in e2 && e2.floorInfo, this.filter, this.featureEffect, this.timeExtent];
      }, () => this._handleRequiredFieldsChange(), A), v(() => this.view?.floors, "change", () => this._handleRequiredFieldsChange()), v(() => {
        const e2 = this.layer;
        return e2 && "sublayers" in e2 ? e2.sublayers : null;
      }, "change", () => this._handleRequiredFieldsChange())]);
    }
    get availableFields() {
      const { layer: e2, layer: { fieldsIndex: t }, requiredFields: r2 } = this;
      return "outFields" in e2 && e2.outFields ? I(t, [...x(t, e2.outFields), ...r2]) : I(t, r2);
    }
    get featureEffect() {
      return this.layer && "featureEffect" in this.layer ? this.layer.featureEffect : null;
    }
    set featureEffect(e2) {
      this._override("featureEffect", e2);
    }
    get maximumNumberOfFeatures() {
      return 0;
    }
    set maximumNumberOfFeatures(e2) {
      q.error("#maximumNumberOfFeatures=", "Setting maximum number of features is not supported");
    }
    get maximumNumberOfFeaturesExceeded() {
      return false;
    }
    highlight(e2) {
      throw new Error("missing implementation");
    }
    createQuery() {
      const e2 = { outFields: ["*"], returnGeometry: true, outSpatialReference: this.view.spatialReference }, t = null != this.filter ? this.filter.createQuery(e2) : new b(e2);
      if ("feature" === this.layer.type) {
        const e3 = o(this);
        null != e3 && (t.where = t.where ? `(${t.where}) AND (${e3})` : e3);
      }
      return null != this.timeExtent && (t.timeExtent = null != t.timeExtent ? t.timeExtent.intersection(this.timeExtent) : this.timeExtent.clone()), t;
    }
    createAggregateQuery() {
      const e2 = { outFields: ["*"], returnGeometry: true, outSpatialReference: this.view.spatialReference };
      return new b(e2);
    }
    queryFeatures(e2, t) {
      throw new Error("missing implementation");
    }
    queryObjectIds(e2, t) {
      throw new Error("missing implementation");
    }
    queryFeatureCount(e2, t) {
      throw new Error("missing implementation");
    }
    queryExtent(e2, t) {
      throw new Error("missing implementation");
    }
    async fetchPopupFeatures(e2, t) {
      const r2 = this.validateFetchPopupFeatures(t);
      if (r2)
        throw r2;
      return this.fetchClientPopupFeatures(t);
    }
    _loadArcadeModules(e2) {
      return e2.expressionInfos?.length || Array.isArray(e2.content) && e2.content.some((e3) => "expression" === e3.type) ? i() : Promise.resolve();
    }
    _handleRequiredFieldsChange() {
      const e2 = this._updateRequiredFields();
      this._set("_updatingRequiredFieldsPromise", e2), e2.then(() => {
        this._updatingRequiredFieldsPromise === e2 && this._set("_updatingRequiredFieldsPromise", null);
      });
    }
    async _updateRequiredFields() {
      if (!this.layer || !this.view)
        return;
      const e2 = "3d" === this.view.type, { layer: t, layer: { fieldsIndex: r2, objectIdField: i2 } } = this, s = "renderer" in t && t.renderer, o2 = "orderBy" in t && t.orderBy, n2 = "featureReduction" in t ? t.featureReduction : null, l = /* @__PURE__ */ new Set(), a = await Promise.allSettled([s ? s.collectRequiredFields(l, r2) : null, J(l, t), e2 ? v$1(l, t) : null, null != this.filter ? M(l, t, this.filter) : null, null != this.featureEffect ? M(l, t, this.featureEffect.filter) : null, n2 ? L(l, t, n2) : null, o2 ? O(l, t, o2) : null]);
      if ("timeInfo" in t && t.timeInfo && this.timeExtent && b$1(l, t.fieldsIndex, [t.timeInfo.startField, t.timeInfo.endField]), "feature" === t.type && (t.floorInfo && b$1(l, t.fieldsIndex, [t.floorInfo.floorField]), e2 && null != t.infoFor3D && (null == t.globalIdField && q.error("globalIdField missing on 3DObjectFeatureLayer"), b$1(l, t.fieldsIndex, [t.globalIdField]))), "subtype-group" === t.type) {
        w$1(l, r2, t.subtypeField);
        const e3 = t.sublayers.map((e4) => Promise.all([e4.renderer?.collectRequiredFields(l, r2), J(l, e4)]));
        await Promise.allSettled(e3);
      }
      for (const p2 of a)
        "rejected" === p2.status && q.error(p2.reason);
      w$1(l, r2, i2), e2 && "displayField" in t && t.displayField && w$1(l, r2, t.displayField);
      const u = Array.from(l).sort();
      this._set("requiredFields", u);
    }
    validateFetchPopupFeatures(e2) {
      if (null == e2)
        return null;
      for (const r2 of e2.clientGraphics ?? []) {
        const i2 = r2.layer;
        if ("popupEnabled" in i2 && !i2.popupEnabled)
          return new s$2("featurelayerview:fetchPopupFeatures", "Popups are disabled", { layer: i2 });
        if (r2.isAggregate) {
          const e3 = "featureReduction" in i2 ? i2.featureReduction : null;
          if (!(e3 && "popupTemplate" in e3 && e3.popupEnabled && e3.popupTemplate))
            return new s$2("featurelayerview:fetchPopupFeatures", "Popups are disabled", { layer: i2 });
        } else if ("popupTemplate" in i2) {
          if (!p(i2, e2))
            return new s$2("featurelayerview:fetchPopupFeatures", "Layer does not define a popup template", { layer: i2 });
        }
      }
    }
    async fetchClientPopupFeatures(e2) {
      const t = null != e2 ? e2.clientGraphics : null;
      if (!t || 0 === t.length)
        return [];
      const r2 = new Array(t.length), i2 = /* @__PURE__ */ new Map(), s = await this.createPopupQuery(e2);
      for (let o2 = 0; o2 < t.length; o2++) {
        const n2 = t[o2];
        if (n2.isAggregate) {
          r2[o2] = n2;
          continue;
        }
        const l = n2.layer;
        if (!("popupEnabled" in l))
          continue;
        const a = x(this.layer.fieldsIndex, s.outFields), u = p(l, e2);
        if (null == u)
          continue;
        const p$1 = await this._loadArcadeModules(u);
        p$1 && p$1.arcadeUtils.hasGeometryOperations(u) || !je(a, n2) ? i2.set(n2.getObjectId(), { graphic: n2, index: o2 }) : r2[o2] = n2;
      }
      if ("stream" === this.layer.type || 0 === i2.size)
        return r2.filter(Boolean);
      s.objectIds = Array.from(i2.keys());
      try {
        const e3 = await this.layer.queryFeatures(s);
        for (const t2 of e3.features) {
          const { graphic: { geometry: e4 }, index: s2 } = i2.get(t2.getObjectId());
          t2.geometry ||= e4, r2[s2] = t2;
        }
      } catch {
      }
      return r2.filter(Boolean);
    }
    async createPopupQuery(e2) {
      const t = this.layer.createQuery(), r2 = /* @__PURE__ */ new Set();
      let i2 = false;
      const s = e2?.clientGraphics ? e2.clientGraphics.map((e3) => e3.layer) : [this.layer];
      for (const o2 of s) {
        if (!("popupEnabled" in o2))
          continue;
        const t2 = p(o2, e2);
        if (null == t2)
          continue;
        const s2 = await this._loadArcadeModules(t2), n$1 = s2 && s2.arcadeUtils.hasGeometryOperations(t2);
        i2 = !("point" !== this.layer.geometryType && !n$1);
        const l = await n(this.layer, t2);
        for (const e3 of l)
          r2.add(e3);
      }
      if (t.returnGeometry = i2, t.returnZ = i2, t.returnM = i2, t.outFields = Array.from(r2), t.outSpatialReference = this.view.spatialReference, "feature" === this.layer.type) {
        const e3 = o(this);
        null != e3 && (t.where = t.where ? `(${t.where}) AND (${e3})` : e3);
      }
      return t;
    }
    canResume() {
      return !!super.canResume() && (null == this.timeExtent || !this.timeExtent.isEmpty);
    }
  };
  return e([y()], P2.prototype, "_updatingRequiredFieldsPromise", void 0), e([y({ readOnly: true })], P2.prototype, "availableFields", null), e([y({ readOnly: true })], P2.prototype, "dataUpdating", void 0), e([y({ type: w })], P2.prototype, "featureEffect", null), e([y({ type: d })], P2.prototype, "filter", void 0), e([y(j$1)], P2.prototype, "timeExtent", void 0), e([y()], P2.prototype, "layer", void 0), e([y({ type: Number })], P2.prototype, "maximumNumberOfFeatures", null), e([y({ readOnly: true, type: Boolean })], P2.prototype, "maximumNumberOfFeaturesExceeded", null), e([y({ readOnly: true })], P2.prototype, "requiredFields", void 0), e([y()], P2.prototype, "suspended", void 0), e([y()], P2.prototype, "view", void 0), P2 = e([c(j)], P2), P2;
};
export {
  P
};
