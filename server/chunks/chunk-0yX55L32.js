import { aV as e, aX as y, a_ as c, aT as s$1, ni as L, eU as j, eT as d, nj as D, nk as Q } from "./chunk-ejFG4zJ0.js";
import { x as x$1 } from "./chunk-KyVc0M84.js";
import { t as t$2 } from "./chunk-pZO3UCge.js";
const n = "updating";
function t$1(n2) {
  return "updating" === n2 ? null : n2;
}
function u$1(n2) {
  return "updating" === n2;
}
const t = (t2) => {
  let p = class extends t2 {
    constructor() {
      super(...arguments), this._definitionExpressionErrors = 0, this._maxDefinitionExpressionErrors = 20, this.logError = (r) => {
        this._definitionExpressionErrors < this._maxDefinitionExpressionErrors && s$1.getLogger(this).error("Error while evaluating definitionExpression: " + r), this._definitionExpressionErrors++, this._definitionExpressionErrors === this._maxDefinitionExpressionErrors && s$1.getLogger(this).error("Further errors are ignored");
      };
    }
    get parsedDefinitionExpression() {
      if (!this.i3slayer?.definitionExpression)
        return null;
      try {
        const r = x$1.create(this.i3slayer.definitionExpression, this.i3slayer.fieldsIndex);
        if (!r.isStandardized)
          return s$1.getLogger(this).error("definitionExpression is using non standard function"), null;
        const e2 = [], s = r.fieldNames;
        return L(s, this.i3slayer.fields, { missingFields: e2 }), e2.length > 0 ? (s$1.getLogger(this).error(`definitionExpression references unknown fields: ${e2.join(", ")}`), null) : (this._definitionExpressionErrors = 0, r);
      } catch (r) {
        return s$1.getLogger(this).error("Failed to parse definitionExpression: " + r), null;
      }
    }
    get definitionExpressionFields() {
      return this.parsedDefinitionExpression ? this.parsedDefinitionExpression.fieldNames : [];
    }
    _evaluateClause(r, i) {
      try {
        return r.testFeature(i);
      } catch (e2) {
        return this.logError(e2), false;
      }
    }
    _addDefinitionExpressionToQuery(r) {
      if (!this.parsedDefinitionExpression)
        return r;
      const i = this.i3slayer.definitionExpression, e2 = r.clone();
      return e2.where ? e2.where = `(${i}) AND (${e2.where})` : e2.where = i, e2;
    }
  };
  return e([y({ readOnly: true })], p.prototype, "parsedDefinitionExpression", null), e([y({ readOnly: true })], p.prototype, "definitionExpressionFields", null), p = e([c("esri.views.3d.layers.support.DefinitionExpressionSceneLayerView")], p), p;
};
const u = (l) => {
  let u2 = class extends l {
    constructor() {
      super(...arguments), this.timeExtent = null;
    }
    get mergedFilter() {
      const { filter: t2, timeExtent: e2 } = this;
      if (null == e2)
        return t2;
      const r = t2?.clone() ?? new d();
      return null != e2 && (r.timeExtent = r.timeExtent?.intersection(e2) ?? e2), r;
    }
    getTimeFilterDependencies() {
      const { timeInfo: t2 } = this.i3slayer;
      if (null == t2)
        return [];
      const { startField: e2, endField: r } = t2;
      return [e2, r];
    }
    addTimeFilter(t2, e2) {
      if (null == e2)
        return;
      const { timeInfo: r } = this.i3slayer;
      if (null == r)
        return;
      const { startField: i, endField: s, useTime: o } = r;
      if (!o || null == i && null == s)
        return;
      const n2 = r.toJSON(), l2 = e2.toJSON();
      t2.push((t3, e3) => this._timeFilter(t3, e3, n2, l2));
    }
    _timeFilter(t2, e2, r, s) {
      const o = e2.attributeInfo?.attributeData;
      if (null == o)
        return;
      const { startTimeField: l2, endTimeField: u3 } = r;
      if (!!(null != l2 && null == o[l2] || null != u3 && null == o[u3]))
        return;
      const a = t$2(r, s, new m(o));
      if (null == a)
        return;
      const { featureIds: c2 } = e2;
      D(t2, c2, a);
    }
  };
  return e([y(j)], u2.prototype, "timeExtent", void 0), e([y()], u2.prototype, "mergedFilter", null), u2 = e([c("esri.views.3d.layers.support.TemporalSceneLayerView")], u2), u2;
};
class m {
  constructor(t2) {
    this.attributeData = t2;
  }
  getAttribute(t2, e2) {
    return Q(this.attributeData[e2], t2);
  }
  getAttributeAsTimestamp(t2, e2) {
    const r = this.getAttribute(t2, e2);
    return "string" == typeof r ? new Date(r).getTime() : "number" == typeof r || null == r ? r : null;
  }
}
export {
  t$1 as a,
  u$1 as b,
  n,
  t,
  u
};
