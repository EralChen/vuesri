import { aV as e, aX as y, eS as m, eT as d, eU as j$1, a_ as c, ce as d$1, cl as A$1, eV as v, eW as I, eX as x, aT as s$1, ck as b, eY as o, ee as i, eZ as J, e_ as v$1, e$ as M, f0 as L, f1 as O, f2 as b$1, f3 as w, aO as s, f4 as p, e9 as je, cU as s$2, f5 as n } from "./chunk-ejFG4zJ0.js";
const j = (j2) => {
  let q = class extends j2 {
    constructor(...e2) {
      super(...e2), this._updatingRequiredFieldsPromise = null, this.dataUpdating = false, this.filter = null, this.timeExtent = null, this.layer = null, this.requiredFields = [], this.view = null;
    }
    initialize() {
      this.addHandles([d$1(() => {
        const e2 = this.layer;
        return [e2 && "elevationInfo" in e2 ? e2.elevationInfo?.featureExpressionInfo : null, e2 && "displayField" in e2 ? e2.displayField : null, e2 && "timeInfo" in e2 && e2.timeInfo, e2 && "renderer" in e2 && e2.renderer, e2 && "labelingInfo" in e2 && e2.labelingInfo, e2 && "floorInfo" in e2 && e2.floorInfo, this.filter, this.featureEffect, this.timeExtent];
      }, () => this._handleRequiredFieldsChange(), A$1), v(() => this.view?.floors, "change", () => this._handleRequiredFieldsChange()), v(() => {
        const e2 = this.layer;
        return e2 && "sublayers" in e2 ? e2.sublayers : null;
      }, "change", () => this._handleRequiredFieldsChange())]);
    }
    get availableFields() {
      if (!this.layer)
        return [];
      const { layer: e2, layer: { fieldsIndex: t }, requiredFields: r } = this;
      return "outFields" in e2 && e2.outFields ? I(t, [...x(t, e2.outFields), ...r]) : I(t, r);
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
      s$1.getLogger(this).error("#maximumNumberOfFeatures=", "Setting maximum number of features is not supported");
    }
    get maximumNumberOfFeaturesExceeded() {
      return false;
    }
    highlight(e2) {
      throw new Error("missing implementation");
    }
    createQuery() {
      const e2 = { outFields: ["*"], returnGeometry: true, outSpatialReference: this.view.spatialReference }, t = null != this.filter ? this.filter.createQuery(e2) : new b(e2);
      if ("floorInfo" in this.layer && this.layer.floorInfo) {
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
    async fetchPopupFeaturesFromGraphics(e2, t) {
      return this._validateFetchPopupFeatures(e2, t), this._fetchPopupFeatures(e2, t);
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
      const e2 = "3d" === this.view.type, { layer: t, layer: { fieldsIndex: i2, objectIdField: o2 } } = this, s2 = "renderer" in t && t.renderer, n2 = "orderBy" in t && t.orderBy, l = "featureReduction" in t ? t.featureReduction : null, a = /* @__PURE__ */ new Set(), u = await Promise.allSettled([s2 ? s2.collectRequiredFields(a, i2) : null, J(a, t), e2 && "elevationInfo" in t ? v$1(a, t) : null, null != this.filter ? M(a, t, this.filter) : null, e2 || null == this.featureEffect ? null : M(a, t, this.featureEffect.filter), !e2 && l ? L(a, t, l) : null, !e2 && n2 ? O(a, t, n2) : null]);
      if ("timeInfo" in t && t.timeInfo && this.timeExtent && b$1(a, t.fieldsIndex, [t.timeInfo.startField, t.timeInfo.endField]), "floorInfo" in t && t.floorInfo && b$1(a, t.fieldsIndex, [t.floorInfo.floorField]), "feature" === t.type && e2 && null != t.infoFor3D && (null == t.globalIdField && s$1.getLogger(this).error("globalIdField missing on 3DObjectFeatureLayer"), b$1(a, t.fieldsIndex, [t.globalIdField])), "subtype-group" === t.type) {
        w(a, i2, t.subtypeField);
        const e3 = t.sublayers.map((e4) => Promise.all([e4.renderer?.collectRequiredFields(a, i2), J(a, e4)]));
        await Promise.allSettled(e3);
      }
      "catalog-footprint" === t.type && b$1(a, i2, [t.parent.itemSourceField, t.parent.itemTypeField]);
      for (const d2 of u)
        "rejected" === d2.status && s$1.getLogger(this).error(d2.reason);
      w(a, i2, o2), e2 && "displayField" in t && t.displayField && w(a, i2, t.displayField);
      const p2 = Array.from(a).sort();
      this._set("requiredFields", p2);
    }
    _validateFetchPopupFeatures(e2, r) {
      if (null != r)
        for (const i2 of e2) {
          const e3 = i2.origin && "layer" in i2.origin ? i2.origin.layer : i2.layer;
          if ("popupEnabled" in e3 && !e3.popupEnabled)
            throw new s("featurelayerview:fetchPopupFeatures", "Popups are disabled", { layer: e3 });
          if (i2.isAggregate) {
            const r2 = "featureReduction" in e3 ? e3.featureReduction : null;
            if (!(r2 && "popupTemplate" in r2 && r2.popupEnabled && r2.popupTemplate))
              throw new s("featurelayerview:fetchPopupFeatures", "Popups are disabled", { layer: e3 });
          } else if ("popupTemplate" in e3) {
            if (!p(e3, r))
              throw new s("featurelayerview:fetchPopupFeatures", "Layer does not define a popup template", { layer: e3 });
          }
        }
    }
    _popupFeatureHasRequiredFields(e2, t) {
      return je(t, e2);
    }
    async _fetchPopupFeatures(e2, t) {
      const r = new Array(e2.length), o2 = /* @__PURE__ */ new Map(), s2 = await this._createPopupQuery(e2.map((e3) => e3.origin?.layer ?? e3.layer), t);
      for (let n2 = 0; n2 < e2.length; n2++) {
        const l = e2[n2];
        if (l.isAggregate) {
          r[n2] = l;
          continue;
        }
        const a = l.origin?.layer ?? l.layer;
        if (!a || !("popupEnabled" in a))
          continue;
        const u = x(this.layer.fieldsIndex, s2.outFields), p$1 = p(a, t);
        if (null == p$1)
          continue;
        const d2 = await this._loadArcadeModules(p$1);
        s$2(t);
        d2 && d2.arcadeUtils.hasGeometryOperations(p$1) || !this._popupFeatureHasRequiredFields(l, u) ? o2.set(l.getObjectId(), { graphic: l, index: n2 }) : r[n2] = l;
      }
      if ("stream" === this.layer.type || 0 === o2.size)
        return r.filter(Boolean);
      s2.objectIds = Array.from(o2.keys());
      try {
        const e3 = await this.layer.queryFeatures(s2, t);
        for (const t2 of e3.features) {
          const { graphic: { geometry: e4, origin: i2 }, index: s3 } = o2.get(t2.getObjectId());
          t2.geometry ||= e4, t2.origin = i2, r[s3] = t2;
        }
      } catch {
      }
      return r.filter(Boolean);
    }
    async _createPopupQuery(e2, t) {
      const r = this.layer.createQuery(), o$1 = /* @__PURE__ */ new Set();
      let s2 = false;
      const n$1 = e2 ?? [this.layer];
      for (const l of n$1) {
        if (!("popupEnabled" in l))
          continue;
        const e3 = p(l, t);
        if (null == e3)
          continue;
        const r2 = await this._loadArcadeModules(e3);
        s$2(t);
        const n$12 = r2 && r2.arcadeUtils.hasGeometryOperations(e3);
        s2 = !("point" !== this.layer.geometryType && !n$12);
        const a = await n(this.layer, e3);
        s$2(t);
        for (const t2 of a)
          o$1.add(t2);
      }
      if (r.returnGeometry = s2, r.returnZ = s2, r.returnM = s2, r.outFields = Array.from(o$1), r.outSpatialReference = this.view.spatialReference, "floorInfo" in this.layer && this.layer.floorInfo) {
        const e3 = o(this);
        null != e3 && (r.where = r.where ? `(${r.where}) AND (${e3})` : e3);
      }
      return r;
    }
    canResume() {
      return !!super.canResume() && (null == this.timeExtent || !this.timeExtent.isEmpty);
    }
    getTest() {
      return { createPopupQuery: (e2) => this._createPopupQuery(void 0, e2) };
    }
    get test() {
      return this.getTest();
    }
  };
  return e([y()], q.prototype, "_updatingRequiredFieldsPromise", void 0), e([y({ readOnly: true })], q.prototype, "availableFields", null), e([y({ readOnly: true })], q.prototype, "dataUpdating", void 0), e([y({ type: m })], q.prototype, "featureEffect", null), e([y({ type: d })], q.prototype, "filter", void 0), e([y(j$1)], q.prototype, "timeExtent", void 0), e([y()], q.prototype, "layer", void 0), e([y({ type: Number })], q.prototype, "maximumNumberOfFeatures", null), e([y({ readOnly: true, type: Boolean })], q.prototype, "maximumNumberOfFeaturesExceeded", null), e([y({ readOnly: true })], q.prototype, "requiredFields", void 0), e([y()], q.prototype, "suspended", void 0), e([y()], q.prototype, "view", void 0), q = e([c("esri.views.layers.FeatureLayerView")], q), q;
};
export {
  j
};
