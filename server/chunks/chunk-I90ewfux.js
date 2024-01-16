import { bo as e, bp as y, br as c, bb as s$1, kh as ee } from "./chunk-KFNcxJaF.js";
import { x as x$1 } from "./chunk-ewxQmXoN.js";
const n = "updating";
function t$1(n2) {
  return "updating" === n2 ? null : n2;
}
function u(n2) {
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
        const i = [], s = r.fieldNames;
        return ee(s, this.i3slayer.fields, { missingFields: i }), i.length > 0 ? (s$1.getLogger(this).error(`definitionExpression references unknown fields: ${i.join(", ")}`), null) : (this._definitionExpressionErrors = 0, r);
      } catch (r) {
        return s$1.getLogger(this).error("Failed to parse definitionExpression: " + r), null;
      }
    }
    get definitionExpressionFields() {
      return this.parsedDefinitionExpression ? this.parsedDefinitionExpression.fieldNames : [];
    }
    _evaluateClause(r, e2) {
      try {
        return r.testFeature(e2);
      } catch (i) {
        return this.logError(i), false;
      }
    }
    _addDefinitionExpressionToQuery(r) {
      if (!this.parsedDefinitionExpression)
        return r;
      const e2 = this.i3slayer.definitionExpression, i = r.clone();
      return i.where ? i.where = `(${e2}) AND (${i.where})` : i.where = e2, i;
    }
  };
  return e([y()], p.prototype, "i3slayer", void 0), e([y({ readOnly: true })], p.prototype, "parsedDefinitionExpression", null), e([y({ readOnly: true })], p.prototype, "definitionExpressionFields", null), p = e([c("esri.views.3d.layers.support.DefinitionExpressionSceneLayerView")], p), p;
};
export {
  t$1 as a,
  n,
  t,
  u
};
