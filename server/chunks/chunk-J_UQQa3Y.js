import { cZ as f$1, es as E$1, b$ as n$1, bf as c$1, dj as Z, d4 as y$2, wc as x$2, wd as n$4, bQ as b$2, we as f$4, wf as m$1, d5 as Ze, fP as T$4, a$ as j$1, cw as p$1, ly as s$3, cS as t$4, wg as n$5, wh as s$4, ji as n$6, hd as p$2, kI as d$3, aX as S$1 } from "./chunk-KFNcxJaF.js";
import { ap as N$1, aq as s$1, V as y, ag as l, ah as f$3, ai as d$1, aj as g$2, ak as T$2, al as F$1, aw as Re, ax as P, ay as M, az as J, N as N$2, aA as t$3, aB as Pe, aC as Ye } from "./chunk-dapYIJB-.js";
import { x as x$1, s as s$2, a as r, n, t as t$2, r as r$1 } from "./chunk-ewxQmXoN.js";
import { x, t as t$1, g as g$1, m, a as f$2, y as y$1, L as L$2, w, E as E$2, T as T$3, S, F as F$2, v, p, D as D$2, I as I$2, d as d$2, b as w$1, f as f$5, c as a$3 } from "./chunk-juu6KbdW.js";
import { c as c$2, b as n$2, n as n$3 } from "./chunk-Tt9yuqqG.js";
import ae from "./chunk-6rQskHzl.js";
let e$1 = class e {
  constructor() {
    this.declaredRootClass = "esri.arcade.featureSetCollection", this._layerById = {}, this._layerByName = {};
  }
  add(e3, t2, a4) {
    this._layerById[t2] = a4, this._layerByName[e3] = a4;
  }
  async featureSetByName(e3, t2 = true, a4 = ["*"]) {
    return void 0 === this._layerByName[e3] ? null : this._layerByName[e3];
  }
  async featureSetById(e3, t2 = true, a4 = ["*"]) {
    return void 0 === this._layerById[e3] ? null : this._layerById[e3];
  }
  castToText(e3 = false) {
    return "object, FeatureSetCollection";
  }
};
class c extends x {
  constructor(e3) {
    super(e3), this.declaredClass = "esri.arcade.featureset.actions.AttributeFilter", this._maxProcessing = 1e3, this._parent = e3.parentfeatureset, e3.whereclause instanceof x$1 ? (this._whereclause = e3.whereclause, this._whereClauseFunction = null) : (this._whereClauseFunction = e3.whereclause, this._whereclause = null);
  }
  _initialiseFeatureSet() {
    null !== this._parent ? (this.fields = this._parent.fields.slice(0), this.geometryType = this._parent.geometryType, this.objectIdField = this._parent.objectIdField, this.globalIdField = this._parent.globalIdField, this.spatialReference = this._parent.spatialReference, this.hasM = this._parent.hasM, this.hasZ = this._parent.hasZ, this.typeIdField = this._parent.typeIdField, this.types = this._parent.types) : (this.fields = [], this.typeIdField = "", this.objectIdField = "", this.globalIdField = "", this.spatialReference = new f$1({ wkid: 4326 }), this.geometryType = N$1.point);
  }
  async _getSet(e3) {
    if (null === this._wset) {
      await this._ensureLoaded();
      const t2 = await this._parent._getFilteredSet("", null, this._whereclause, null, e3);
      return this._checkCancelled(e3), null !== this._whereClauseFunction ? this._wset = new t$1(t2._candidates.slice(0).concat(t2._known.slice(0)), [], t2._ordered, this._clonePageDefinition(t2.pagesDefinition)) : this._wset = new t$1(t2._candidates.slice(0), t2._known.slice(0), t2._ordered, this._clonePageDefinition(t2.pagesDefinition)), this._wset;
    }
    return this._wset;
  }
  _isInFeatureSet(e3) {
    let t2 = this._parent?._isInFeatureSet(e3);
    return t2 === s$1.NotInFeatureSet ? t2 : (t2 = this._idstates[e3], void 0 === t2 ? s$1.Unknown : t2);
  }
  _getFeature(e3, t2, s2) {
    return this._parent._getFeature(e3, t2, s2);
  }
  _getFeatures(e3, t2, s2, i) {
    return this._parent._getFeatures(e3, t2, s2, i);
  }
  _featureFromCache(e3) {
    return this._parent._featureFromCache(e3);
  }
  executeWhereClause(e3) {
    return this._whereclause?.testFeature(e3) ?? false;
  }
  async executeWhereClauseDeferred(e3) {
    if (null !== this._whereClauseFunction) {
      const t2 = this._whereClauseFunction(e3);
      return E$1(t2), t2;
    }
    return this.executeWhereClause(e3);
  }
  async _fetchAndRefineFeatures(e3, t2, s2) {
    const r2 = new t$1([], e3, false, null), a4 = Math.min(t2, e3.length);
    if (await this._parent?._getFeatures(r2, -1, a4, s2), this._checkCancelled(s2), null == this._whereClauseFunction) {
      for (let t3 = 0; t3 < a4; t3++) {
        const s3 = this._parent?._featureFromCache(e3[t3]);
        true === this.executeWhereClause(s3) ? this._idstates[e3[t3]] = s$1.InFeatureSet : this._idstates[e3[t3]] = s$1.NotInFeatureSet;
      }
      return "success";
    }
    const l2 = [];
    for (let i = 0; i < a4; i++) {
      const t3 = this._parent?._featureFromCache(e3[i]);
      l2.push(await this.executeWhereClauseDeferred(t3));
    }
    for (let i = 0; i < t2; i++)
      true === l2[i] ? this._idstates[e3[i]] = s$1.InFeatureSet : this._idstates[e3[i]] = s$1.NotInFeatureSet;
    return "success";
  }
  async _getFilteredSet(e3, t2, s2, r2, n2) {
    null !== this._whereClauseFunction || (null !== s2 ? null !== this._whereclause && (s2 = g$1(this._whereclause, s2)) : s2 = this._whereclause), await this._ensureLoaded();
    const l2 = await this._parent._getFilteredSet(e3, t2, s2, r2, n2);
    let h;
    return this._checkCancelled(n2), h = null !== this._whereClauseFunction ? new t$1(l2._candidates.slice(0).concat(l2._known.slice(0)), [], l2._ordered, this._clonePageDefinition(l2.pagesDefinition)) : new t$1(l2._candidates.slice(0), l2._known.slice(0), l2._ordered, this._clonePageDefinition(l2.pagesDefinition)), h;
  }
  async _stat(e3, t2, s2, i, r2, n2, l2) {
    if (null !== this._whereClauseFunction)
      return null === r2 && "" === s2 && null === i ? this._manualStat(e3, t2, n2, l2) : { calculated: false };
    let h = this._whereclause;
    null !== r2 && null !== this._whereclause && (h = g$1(this._whereclause, r2));
    const u = await this._parent._stat(e3, t2, s2, i, h, n2, l2);
    return false === u.calculated ? null === r2 && "" === s2 && null === i ? this._manualStat(e3, t2, n2, l2) : { calculated: false } : u;
  }
  async _canDoAggregates(e3, t2, s2, i, r2) {
    return null === this._whereClauseFunction && (null !== r2 ? null !== this._whereclause && (r2 = g$1(this._whereclause, r2)) : r2 = this._whereclause, null !== this._parent && this._parent._canDoAggregates(e3, t2, s2, i, r2));
  }
  async _getAggregatePagesDataSourceDefinition(s2, i, r$12, n2, l2, h, u) {
    if (null === this._parent)
      throw new s$2(r.NeverReach);
    return null !== l2 ? null !== this._whereclause && (l2 = g$1(this._whereclause, l2)) : l2 = this._whereclause, this._parent._getAggregatePagesDataSourceDefinition(s2, i, r$12, n2, l2, h, u);
  }
  static registerAction() {
    x._featuresetFunctions.filter = function(e3) {
      if ("function" == typeof e3)
        return new c({ parentfeatureset: this, whereclause: e3 });
      let t2 = null;
      return e3 instanceof x$1 && (t2 = e3), new c({ parentfeatureset: this, whereclause: t2 });
    };
  }
  getFieldsIndex() {
    return this._parent.getFieldsIndex();
  }
}
let D$1 = class D {
  constructor(e3) {
    this.field = e3, this.sqlRewritable = false;
  }
  postInitialization(e3, t2) {
  }
};
let I$1 = class I extends D$1 {
  constructor(e3) {
    super(e3), this.sqlRewritable = true;
  }
  extractValue(e3) {
    return e3.attributes[this.field.name];
  }
  rewriteSql(e3) {
    return { rewritten: this.sqlRewritable, where: e3 };
  }
};
let k$1 = class k extends D$1 {
  constructor(e3, t2, r2) {
    super(y(e3)), this.originalField = e3, this.sqlRewritable = true, this.field.name = t2, this.field.alias = r2;
  }
  rewriteSql(e3, t2) {
    return { rewritten: this.sqlRewritable, where: m(e3, this.field.name, this.originalField.name, t2.getFieldsIndex()) };
  }
  extractValue(e3) {
    return e3.attributes[this.originalField.name];
  }
};
let b$1 = class b extends D$1 {
  constructor(e3, t2, r2) {
    super(e3), this.codefield = t2, this.lkp = r2, this.reverseLkp = {};
    for (const s2 in r2)
      this.reverseLkp[r2[s2]] = s2;
    this.sqlRewritable = true;
  }
  rewriteSql(e3, t2) {
    const r2 = this.evaluateNodeToWhereClause(e3.parseTree, l.Standardised, this.field.name, this.codefield instanceof x$1 ? f$2(this.codefield, l.Standardised) : this.codefield, e3.parameters);
    return r2.includes(b.BADNESS) ? { rewritten: false, where: e3 } : { rewritten: this.sqlRewritable, where: x$1.create(r2, t2._parent.getFieldsIndex(), t2.dateFieldsTimeZoneDefaultUTC) };
  }
  evaluateNodeToWhereClause(e3, t2, a4 = null, i = null, l2) {
    let n$12, o, h, g2;
    switch (e3.type) {
      case "interval":
        return F$2(this.evaluateNodeToWhereClause(e3.value, t2, a4, i, l2), e3.qualifier, e3.op);
      case "case-expression": {
        let r2 = " CASE ";
        "simple" === e3.format && (r2 += this.evaluateNodeToWhereClause(e3.operand, t2, a4, b.BADNESS, l2));
        for (let s2 = 0; s2 < e3.clauses.length; s2++)
          r2 += " WHEN " + this.evaluateNodeToWhereClause(e3.clauses[s2].operand, t2, a4, b.BADNESS, l2) + " THEN " + this.evaluateNodeToWhereClause(e3.clauses[s2].value, t2, a4, b.BADNESS, l2);
        return null !== e3.else && (r2 += " ELSE " + this.evaluateNodeToWhereClause(e3.else, t2, a4, b.BADNESS, l2)), r2 += " END ", r2;
      }
      case "parameter": {
        const r2 = l2[e3.value.toLowerCase()];
        if ("string" == typeof r2)
          return "'" + r2.toString().replaceAll("'", "''") + "'";
        if (f$3(r2))
          return w(r2, t2);
        if (d$1(r2))
          return w(r2, t2);
        if (g$2(r2))
          return E$2(r2, t2);
        if (T$2(r2))
          return T$3(r2, t2);
        if (F$1(r2))
          return S(r2, t2);
        if (r2 instanceof Array) {
          const e4 = [];
          for (let s2 = 0; s2 < r2.length; s2++)
            "string" == typeof r2[s2] ? e4.push("'" + r2[s2].toString().replaceAll("'", "''") + "'") : f$3(r2[s2]) || d$1(r2[s2]) ? e4.push(w(r2[s2], t2)) : g$2(r2[s2]) ? e4.push(E$2(r2[s2], t2)) : T$2(r2[s2]) ? e4.push(T$3(r2[s2], t2)) : F$1(r2[s2]) ? e4.push(S(r2[s2], t2)) : e4.push(r2[s2].toString());
          return e4;
        }
        return r2.toString();
      }
      case "expression-list":
        o = [];
        for (const r2 of e3.value)
          o.push(this.evaluateNodeToWhereClause(r2, t2, a4, i, l2));
        return o;
      case "unary-expression":
        return " ( NOT " + this.evaluateNodeToWhereClause(e3.expr, t2, a4, b.BADNESS, l2) + " ) ";
      case "binary-expression":
        switch (e3.operator) {
          case "AND":
            return " (" + this.evaluateNodeToWhereClause(e3.left, t2, a4, i, l2) + " AND " + this.evaluateNodeToWhereClause(e3.right, t2, a4, i, l2) + ") ";
          case "OR":
            return " (" + this.evaluateNodeToWhereClause(e3.left, t2, a4, i, l2) + " OR " + this.evaluateNodeToWhereClause(e3.right, t2, a4, i, l2) + ") ";
          case "IS":
            if ("null" !== e3.right.type)
              throw new n(t$2.UnsupportedIsRhs);
            return " (" + this.evaluateNodeToWhereClause(e3.left, t2, a4, i, l2) + " IS NULL )";
          case "ISNOT":
            if ("null" !== e3.right.type)
              throw new n(t$2.UnsupportedIsRhs);
            return " (" + this.evaluateNodeToWhereClause(e3.left, t2, a4, i, l2) + " IS NOT NULL )";
          case "IN":
            if (n$12 = [], "expression-list" === e3.right.type) {
              if ("column-reference" === e3.left.type && e3.left.column.toUpperCase() === this.field.name.toUpperCase()) {
                const r2 = [];
                let s2 = true;
                for (const t3 of e3.right.value) {
                  if ("string" !== t3.type) {
                    s2 = false;
                    break;
                  }
                  if (void 0 === this.lkp[t3.value]) {
                    s2 = false;
                    break;
                  }
                  r2.push(this.lkp[t3.value].toString());
                }
                if (s2)
                  return " (" + this.evaluateNodeToWhereClause(e3.left, t2, a4, i, l2) + " IN (" + r2.join(",") + ")) ";
              }
              return n$12 = this.evaluateNodeToWhereClause(e3.right, t2, a4, i, l2), " (" + this.evaluateNodeToWhereClause(e3.left, t2, a4, i, l2) + " IN (" + n$12.join(",") + ")) ";
            }
            return g2 = this.evaluateNodeToWhereClause(e3.right, t2, a4, i, l2), g2 instanceof Array ? " (" + this.evaluateNodeToWhereClause(e3.left, t2, a4, i, l2) + " IN (" + g2.join(",") + ")) " : " (" + this.evaluateNodeToWhereClause(e3.left, t2, a4, i, l2) + " IN (" + g2 + ")) ";
          case "NOT IN":
            if (n$12 = [], "expression-list" === e3.right.type) {
              if ("column-reference" === e3.left.type && e3.left.column.toUpperCase() === this.field.name.toUpperCase()) {
                const r2 = [];
                let s2 = true;
                for (const t3 of e3.right.value) {
                  if ("string" !== t3.type) {
                    s2 = false;
                    break;
                  }
                  if (void 0 === this.lkp[t3.value]) {
                    s2 = false;
                    break;
                  }
                  r2.push(this.lkp[t3.value].toString());
                }
                if (s2)
                  return " (" + this.evaluateNodeToWhereClause(e3.left, t2, a4, i, l2) + " NOT IN (" + r2.join(",") + ")) ";
              }
              return n$12 = this.evaluateNodeToWhereClause(e3.right, t2, a4, i, l2), " (" + this.evaluateNodeToWhereClause(e3.left, t2, a4, i, l2) + " NOT IN (" + n$12.join(",") + ")) ";
            }
            return g2 = this.evaluateNodeToWhereClause(e3.right, t2, a4, i, l2), g2 instanceof Array ? " (" + this.evaluateNodeToWhereClause(e3.left, t2, a4, i, l2) + " NOT IN (" + g2.join(",") + ")) " : " (" + this.evaluateNodeToWhereClause(e3.left, t2, a4, i, l2) + " NOT IN (" + g2 + ")) ";
          case "BETWEEN":
            return h = this.evaluateNodeToWhereClause(e3.right, t2, a4, b.BADNESS, l2), " (" + this.evaluateNodeToWhereClause(e3.left, t2, a4, b.BADNESS, l2) + " BETWEEN " + h[0] + " AND " + h[1] + " ) ";
          case "NOTBETWEEN":
            return h = this.evaluateNodeToWhereClause(e3.right, t2, a4, b.BADNESS, l2), " (" + this.evaluateNodeToWhereClause(e3.left, t2, a4, b.BADNESS, l2) + " NOT BETWEEN " + h[0] + " AND " + h[1] + " ) ";
          case "LIKE":
            return "" !== e3.escape ? " (" + this.evaluateNodeToWhereClause(e3.left, t2, a4, b.BADNESS, l2) + " LIKE " + this.evaluateNodeToWhereClause(e3.right, t2, a4, b.BADNESS, l2) + " ESCAPE '" + e3.escape + "') " : " (" + this.evaluateNodeToWhereClause(e3.left, t2, a4, b.BADNESS, l2) + " LIKE " + this.evaluateNodeToWhereClause(e3.right, t2, a4, b.BADNESS, l2) + ") ";
          case "NOT LIKE":
            return "" !== e3.escape ? " (" + this.evaluateNodeToWhereClause(e3.left, t2, a4, b.BADNESS, l2) + " NOT LIKE " + this.evaluateNodeToWhereClause(e3.right, t2, a4, b.BADNESS, l2) + " ESCAPE '" + e3.escape + "') " : " (" + this.evaluateNodeToWhereClause(e3.left, t2, a4, b.BADNESS, l2) + " NOT LIKE " + this.evaluateNodeToWhereClause(e3.right, t2, a4, b.BADNESS, l2) + ") ";
          case "<>":
          case "=":
            if ("column-reference" === e3.left.type && "string" === e3.right.type) {
              if (e3.left.column.toUpperCase() === this.field.name.toUpperCase() && void 0 !== this.lkp[e3.right.value.toString()])
                return " (" + i + " " + e3.operator + " " + this.lkp[e3.right.value.toString()].toString() + ") ";
            } else if ("column-reference" === e3.right.type && "string" === e3.left.type && e3.right.column.toUpperCase() === this.field.name.toUpperCase())
              return " (" + this.lkp[e3.right.value.toString()].toString() + " " + e3.operator + " " + i + ") ";
            return " (" + this.evaluateNodeToWhereClause(e3.left, t2, a4, b.BADNESS, l2) + " " + e3.operator + " " + this.evaluateNodeToWhereClause(e3.right, t2, a4, b.BADNESS, l2) + ") ";
          case "<":
          case ">":
          case ">=":
          case "<=":
          case "*":
          case "-":
          case "+":
          case "/":
          case "||":
            return " (" + this.evaluateNodeToWhereClause(e3.left, t2, a4, b.BADNESS, l2) + " " + e3.operator + " " + this.evaluateNodeToWhereClause(e3.right, t2, a4, b.BADNESS, l2) + ") ";
        }
      case "null":
        return "null";
      case "boolean":
        return true === e3.value ? "1" : "0";
      case "string":
        return "'" + e3.value.toString().replaceAll("'", "''") + "'";
      case "timestamp":
        return `timestamp '${e3.value}'`;
      case "date":
        return `date '${e3.value}'`;
      case "time":
        return `time '${e3.value}'`;
      case "number":
        return e3.value.toString();
      case "current-time":
        return L$2("date" === e3.mode, t2);
      case "column-reference":
        return a4 && a4.toLowerCase() === e3.column.toLowerCase() ? "(" + i + ")" : e3.column;
      case "data-type":
        return e3.value;
      case "function": {
        const r2 = this.evaluateNodeToWhereClause(e3.args, t2, a4, b.BADNESS, l2);
        return y$1(e3.name, r2, t2);
      }
    }
    throw new n(t$2.UnsupportedSyntax, { node: e3.type });
  }
  extractValue(e3) {
    return this.codefield instanceof x$1 ? this.reverseLkp[x$1.convertValueToStorageFormat(this.codefield.calculateValueCompiled(e3))] : this.reverseLkp[e3.attributes[this.codefield]];
  }
};
b$1.BADNESS = "_!!!_BAD_LKP_!!!!";
class B extends D$1 {
  constructor(e3, t2) {
    super(e3), this._sql = t2;
  }
  rewriteSql(e3, t2) {
    return { rewritten: true, where: m(e3, this.field.name, f$2(this._sql, l.Standardised), t2.getFieldsIndex()) };
  }
  extractValue(e3) {
    return x$1.convertValueToStorageFormat(this._sql.calculateValueCompiled(e3), this.field.type);
  }
}
let L$1 = class L extends x {
  static findField(e3, t2) {
    for (const r2 of e3)
      if (r2.name.toLowerCase() === t2.toString().toLowerCase())
        return r2;
    return null;
  }
  constructor(e3) {
    super(e3), this._calcFunc = null, this.declaredClass = "esri.arcade.featureset.actions.Adapted", this.adaptedFields = [], this._extraFilter = null, this._extraFilter = e3.extraFilter, this._parent = e3.parentfeatureset, this._maxProcessing = 30, this.adaptedFields = e3.adaptedFields;
  }
  _initialiseFeatureSet() {
    null !== this._parent ? (this.geometryType = this._parent.geometryType, this.objectIdField = this._parent.objectIdField, this.globalIdField = this._parent.globalIdField, this.spatialReference = this._parent.spatialReference, this.hasM = this._parent.hasM, this.hasZ = this._parent.hasZ, this.typeIdField = this._parent.typeIdField, this.types = this._parent.types) : (this.spatialReference = new f$1({ wkid: 4326 }), this.objectIdField = "", this.globalIdField = "", this.geometryType = N$1.point, this.typeIdField = "", this.types = null), this.fields = [];
    for (const e3 of this.adaptedFields)
      e3.postInitialization(this, this._parent), this.fields.push(e3.field);
  }
  async _getSet(e3) {
    if (null === this._wset) {
      await this._ensureLoaded();
      let t2 = null;
      return t2 = this._extraFilter ? await this._getFilteredSet("", null, null, null, e3) : await this._parent?._getSet(e3), this._checkCancelled(e3), n$1(t2), this._wset = new t$1(t2._candidates.slice(0), t2._known.slice(0), t2._ordered, this._clonePageDefinition(t2.pagesDefinition)), this._wset;
    }
    return this._wset;
  }
  _isInFeatureSet(e3) {
    return this._parent._isInFeatureSet(e3);
  }
  async _getFeatures(r2, s2, a4, i) {
    const l2 = [];
    -1 !== s2 && void 0 === this._featureCache[s2] && l2.push(s2);
    const o = this._maxQueryRate();
    if (true === this._checkIfNeedToExpandKnownPage(r2, o))
      return await this._expandPagedSet(r2, o, 0, 0, i), this._getFeatures(r2, s2, a4, i);
    let h = 0;
    for (let e3 = r2._lastFetchedIndex; e3 < r2._known.length && (h++, h <= a4 && (r2._lastFetchedIndex += 1), !(void 0 === this._featureCache[r2._known[e3]] && (r2._known[e3] !== s2 && l2.push(r2._known[e3]), l2.length >= o))); e3++)
      ;
    if (0 === l2.length)
      return "success";
    r2 = new t$1([], l2, r2._ordered, null);
    const u = Math.min(l2.length, a4);
    await this._parent?._getFeatures(r2, -1, u, i), this._checkCancelled(i);
    const c2 = [];
    for (let e3 = 0; e3 < u; e3++) {
      const t2 = this._parent?._featureFromCache(l2[e3]);
      void 0 !== t2 && c2.push({ geometry: t2.geometry, attributes: t2.attributes, id: l2[e3] });
    }
    for (const n2 of c2) {
      const r3 = [];
      for (const e3 of this.adaptedFields)
        r3[e3.field.name] = e3.extractValue(n2);
      this._featureCache[n2.id] = new c$1({ attributes: r3, geometry: c$2(n2.geometry) });
    }
    return "success";
  }
  async _fetchAndRefineFeatures() {
    throw new s$2(r.NeverReach);
  }
  async _getFilteredSet(e3, t2, r2, s2, a4) {
    let i = false;
    const l2 = this._reformulateWithoutAdaptions(r2);
    i = l2.cannot, r2 = l2.where;
    let o = false;
    if (null !== s2) {
      o = true;
      const e4 = [];
      for (const t3 of this.adaptedFields)
        if (!(t3 instanceof I$1) && true === s2.scanForField(t3.field.name)) {
          if (!(t3 instanceof k$1)) {
            s2 = null, o = false;
            break;
          }
          e4.push({ field: t3.field.name, newfield: t3.originalField.name });
        }
      s2 && e4.length > 0 && (s2 = s2.replaceFields(e4));
    }
    null !== r2 ? null !== this._extraFilter && (r2 = g$1(this._extraFilter, r2)) : r2 = this._extraFilter, await this._ensureLoaded();
    const h = await this._parent._getFilteredSet(e3, t2, r2, s2, a4);
    let u;
    return this._checkCancelled(a4), u = true === i ? new t$1(h._candidates.slice(0).concat(h._known.slice(0)), [], true === o && h._ordered, this._clonePageDefinition(h.pagesDefinition)) : new t$1(h._candidates.slice(0), h._known.slice(0), true === o && h._ordered, this._clonePageDefinition(h.pagesDefinition)), u;
  }
  _reformulateWithoutAdaptions(e3) {
    const t2 = { cannot: false, where: e3 };
    if (null !== e3) {
      for (const r2 of this.adaptedFields)
        if (true === v(e3, r2.field.name)) {
          const s2 = r2.rewriteSql(e3, this);
          if (true !== s2.rewritten) {
            t2.cannot = true, t2.where = null;
            break;
          }
          t2.where = s2.where;
        }
    }
    return t2;
  }
  async _stat(e3, t2, r2, s2, a4, i, l2) {
    let n2 = false, o = this._reformulateWithoutAdaptions(t2);
    if (n2 = o.cannot, t2 = o.where, o = this._reformulateWithoutAdaptions(a4), n2 = n2 || o.cannot, null !== (a4 = o.where) ? null !== this._extraFilter && (a4 = g$1(this._extraFilter, a4)) : a4 = this._extraFilter, true === n2)
      return null === a4 && "" === r2 && null === s2 ? this._manualStat(e3, t2, i, l2) : { calculated: false };
    const h = await this._parent._stat(e3, t2, r2, s2, a4, i, l2);
    return false === h.calculated ? null === a4 && "" === r2 && null === s2 ? this._manualStat(e3, t2, i, l2) : { calculated: false } : h;
  }
  async _canDoAggregates(e3, t2, r2, s2, a4) {
    if (null === this._parent)
      return false;
    for (let n2 = 0; n2 < e3.length; n2++)
      for (const t3 of this.adaptedFields)
        if (e3[n2].toLowerCase() === t3.field.name.toLowerCase() && !(t3 instanceof I$1))
          return false;
    const i = [];
    for (let n2 = 0; n2 < t2.length; n2++) {
      const e4 = t2[n2];
      if (null !== e4.workingexpr) {
        const t3 = this._reformulateWithoutAdaptions(e4.workingexpr);
        if (t3.cannot)
          return false;
        const r3 = e4.clone();
        r3.workingexpr = t3.where, i.push(r3);
      } else
        i.push(e4);
    }
    const l2 = this._reformulateWithoutAdaptions(a4);
    return !l2.cannot && (null !== (a4 = l2.where) ? null !== this._extraFilter && (a4 = g$1(this._extraFilter, a4)) : a4 = this._extraFilter, this._parent._canDoAggregates(e3, i, r2, s2, a4));
  }
  async _getAggregatePagesDataSourceDefinition(e3, t2, r$12, s2, l2, n2, o) {
    if (null === this._parent)
      throw new s$2(r.NeverReach);
    const h = [];
    for (let c2 = 0; c2 < t2.length; c2++) {
      const e4 = t2[c2];
      if (null !== e4.workingexpr) {
        const t3 = this._reformulateWithoutAdaptions(e4.workingexpr);
        if (t3.cannot)
          throw new s$2(r.NeverReach);
        const r$13 = e4.clone();
        r$13.workingexpr = t3.where, h.push(r$13);
      } else
        h.push(e4);
    }
    const u = this._reformulateWithoutAdaptions(l2);
    if (u.cannot)
      throw new s$2(r.NeverReach);
    return null !== (l2 = u.where) ? null !== this._extraFilter && (l2 = g$1(this._extraFilter, l2)) : l2 = this._extraFilter, this._parent._getAggregatePagesDataSourceDefinition(e3, h, r$12, s2, l2, n2, o);
  }
};
function t(t2, e3) {
  return t2 === e3 ? 0 : null === t2 ? -1 : null === e3 ? 1 : t2 < e3 ? -1 : 1;
}
class e2 {
  constructor(t2) {
    const e3 = t2.split(",");
    this._fields = [], this._directions = [];
    for (let s2 = 0; s2 < e3.length; s2++) {
      const t3 = e3[s2].match(/\S+/g);
      this._fields.push(t3[0]), 2 === t3.length ? "asc" === t3[1].toLowerCase() ? this._directions.push(1) : this._directions.push(0) : this._directions.push(1);
    }
  }
  constructClause() {
    let t2 = "";
    for (let e3 = 0; e3 < this._fields.length; e3++)
      0 !== e3 && (t2 += ","), t2 += this._fields[e3], 1 === this._directions[e3] ? t2 += " ASC" : t2 += " DESC";
    return t2;
  }
  order(e3) {
    e3.sort((e4, s2) => {
      for (let i = 0; i < this._fields.length; i++) {
        const r2 = this.featureValue(e4.feature, this._fields[i], i), l2 = this.featureValue(s2.feature, this._fields[i], i);
        let o = 0;
        if (o = 1 === this._directions[i] ? t(r2, l2) : -1 * t(r2, l2), 0 !== o)
          return o;
      }
      return 0;
    });
  }
  scanForField(t2) {
    for (let e3 = 0; e3 < this._fields.length; e3++)
      if (this._fields[e3].toLowerCase().trim() === t2.toLowerCase().trim())
        return true;
    return false;
  }
  replaceFields(t2) {
    let s2 = "";
    for (let e3 = 0; e3 < this._fields.length; e3++) {
      0 !== e3 && (s2 += ",");
      let i = this._fields[e3];
      for (const e4 of t2)
        if (i.toLowerCase() === e4.field.toLowerCase()) {
          i = e4.newfield;
          break;
        }
      s2 += i, 1 === this._directions[e3] ? s2 += " ASC" : s2 += " DESC";
    }
    return new e2(s2);
  }
  featureValue(t2, e3, s2) {
    const i = t2.attributes[e3];
    if (void 0 !== i)
      return i;
    for (const r2 in t2.attributes)
      if (e3.toLowerCase() === r2.toLowerCase())
        return this._fields[s2] = r2, t2.attributes[r2];
    return null;
  }
}
let a$2 = class a extends x {
  constructor(e3) {
    super(e3), this._orderbyclause = null, this.declaredClass = "esri.arcade.featureset.actions.OrderBy", this._maxProcessing = 100, this._orderbyclause = e3.orderbyclause, this._parent = e3.parentfeatureset;
  }
  async _getSet(e3) {
    if (null === this._wset) {
      await this._ensureLoaded();
      const t2 = await this._getFilteredSet("", null, null, this._orderbyclause, e3);
      return this._checkCancelled(e3), this._wset = t2, this._wset;
    }
    return this._wset;
  }
  async manualOrderSet(e3, t2) {
    const r2 = await this.getIdColumnDictionary(e3, [], -1, t2);
    this._orderbyclause?.order(r2);
    const n2 = new t$1([], [], true, null);
    for (let s2 = 0; s2 < r2.length; s2++)
      n2._known.push(r2[s2].id);
    return n2;
  }
  async getIdColumnDictionary(t2, r2, n2, s2) {
    if (n2 < t2._known.length - 1) {
      const i = this._maxQueryRate();
      if ("GETPAGES" === t2._known[n2 + 1])
        return await Re(this._parent._expandPagedSet(t2, i, 0, 0, s2)), this.getIdColumnDictionary(t2, r2, n2, s2);
      let a4 = n2 + 1;
      const o = [];
      for (; a4 < t2._known.length && "GETPAGES" !== t2._known[a4]; )
        o.push(t2._known[a4]), a4++;
      n2 += o.length;
      const u = await Re(this._parent._getFeatureBatch(o, s2));
      this._checkCancelled(s2);
      for (const e3 of u)
        r2.push({ id: e3.attributes[this.objectIdField], feature: e3 });
      return this.getIdColumnDictionary(t2, r2, n2, s2);
    }
    return t2._candidates.length > 0 ? (await Re(this._refineSetBlock(t2, this._maxProcessingRate(), s2)), this._checkCancelled(s2), this.getIdColumnDictionary(t2, r2, n2, s2)) : r2;
  }
  _isInFeatureSet(e3) {
    return this._parent._isInFeatureSet(e3);
  }
  _getFeatures(e3, t2, r2, n2) {
    return this._parent._getFeatures(e3, t2, r2, n2);
  }
  _featureFromCache(e3) {
    if (void 0 === this._featureCache[e3]) {
      const t2 = this._parent._featureFromCache(e3);
      if (void 0 === t2)
        return;
      return null === t2 ? null : (this._featureCache[e3] = t2, t2);
    }
    return this._featureCache[e3];
  }
  async _fetchAndRefineFeatures() {
    throw new s$2(r.NeverReach);
  }
  async _getFilteredSet(e3, t2, r2, n2, i) {
    await this._ensureLoaded();
    const a4 = await this._parent._getFilteredSet(e3, t2, r2, null === n2 ? this._orderbyclause : n2, i);
    this._checkCancelled(i);
    const o = new t$1(a4._candidates.slice(0), a4._known.slice(0), a4._ordered, this._clonePageDefinition(a4.pagesDefinition));
    let u = true;
    if (a4._candidates.length > 0 && (u = false), false === o._ordered) {
      let e4 = await this.manualOrderSet(o, i);
      return false === u && (null === t2 && null === r2 || (e4 = new t$1(e4._candidates.slice(0).concat(e4._known.slice(0)), [], e4._ordered, this._clonePageDefinition(e4.pagesDefinition)))), e4;
    }
    return o;
  }
  static registerAction() {
    x._featuresetFunctions.orderBy = function(e$12) {
      return "" === e$12 ? this : new a({ parentfeatureset: this, orderbyclause: new e2(e$12) });
    };
  }
  getFieldsIndex() {
    return this._parent.getFieldsIndex();
  }
};
function s(s2) {
  if ("function" === s2.parseTree.type) {
    if (0 === s2.parseTree.args.value.length)
      return { name: s2.parseTree.name, expr: null };
    if (s2.parseTree.args.value.length > 1)
      throw new n(t$2.MissingStatisticParameters);
    const a4 = x$1.create(p(s2.parseTree.args.value[0], l.Standardised, s2.parameters), s2.fieldsIndex, s2.timeZone);
    return { name: s2.parseTree.name, expr: a4 };
  }
  return null;
}
let a$1 = class a2 {
  constructor() {
    this.field = "", this.tofieldname = "", this.typeofstat = "MIN", this.workingexpr = null;
  }
  clone() {
    const e3 = new a2();
    return e3.field = this.field, e3.tofieldname = this.tofieldname, e3.typeofstat = this.typeofstat, e3.workingexpr = this.workingexpr, e3;
  }
  static parseStatField(r2, n$12, o, l2) {
    const p2 = new a2();
    p2.field = r2;
    const f2 = x$1.create(n$12, o, l2), u = s(f2);
    if (null === u)
      throw new n(t$2.UnsupportedSqlFunction, { function: "" });
    const c2 = u.name.toUpperCase().trim();
    if ("MIN" === c2) {
      if (p2.typeofstat = "MIN", p2.workingexpr = u.expr, null === f2)
        throw new n(t$2.InvalidFunctionParameters, { function: "min" });
    } else if ("MAX" === c2) {
      if (p2.typeofstat = "MAX", p2.workingexpr = u.expr, null === f2)
        throw new n(t$2.InvalidFunctionParameters, { function: "max" });
    } else if ("COUNT" === c2)
      p2.typeofstat = "COUNT", p2.workingexpr = u.expr;
    else if ("STDEV" === c2) {
      if (p2.typeofstat = "STDDEV", p2.workingexpr = u.expr, null === f2)
        throw new n(t$2.InvalidFunctionParameters, { function: "stdev" });
    } else if ("SUM" === c2) {
      if (p2.typeofstat = "SUM", p2.workingexpr = u.expr, null === f2)
        throw new n(t$2.InvalidFunctionParameters, { function: "sum" });
    } else if ("MEAN" === c2) {
      if (p2.typeofstat = "AVG", p2.workingexpr = u.expr, null === f2)
        throw new n(t$2.InvalidFunctionParameters, { function: c2 });
    } else if ("AVG" === c2) {
      if (p2.typeofstat = "AVG", p2.workingexpr = u.expr, null === f2)
        throw new n(t$2.InvalidFunctionParameters, { function: "avg" });
    } else {
      if ("VAR" !== c2)
        throw new n(t$2.UnsupportedSqlFunction, { function: c2 });
      if (p2.typeofstat = "VAR", p2.workingexpr = u.expr, null === f2)
        throw new n(t$2.InvalidFunctionParameters, { function: "var" });
    }
    return p2;
  }
  toStatisticsName() {
    switch (this.typeofstat.toUpperCase()) {
      case "MIN":
        return "min";
      case "MAX":
        return "max";
      case "SUM":
        return "sum";
      case "COUNT":
      default:
        return "count";
      case "VAR":
        return "var";
      case "STDDEV":
        return "stddev";
      case "AVG":
        return "avg";
    }
  }
};
function G(e3) {
  if (!e3)
    return "COUNT";
  switch (e3.toLowerCase()) {
    case "max":
      return "MAX";
    case "var":
    case "variance":
      return "VAR";
    case "avg":
    case "average":
    case "mean":
      return "AVG";
    case "min":
      return "MIN";
    case "sum":
      return "SUM";
    case "stdev":
    case "stddev":
      return "STDDEV";
    case "count":
      return "COUNT";
  }
  return "COUNT";
}
let O$1 = class O extends x {
  constructor(e3) {
    super(e3), this._decodedStatsfield = [], this._decodedGroupbyfield = [], this._candosimplegroupby = true, this.phsyicalgroupbyfields = [], this.objectIdField = "ROW__ID", this._internalObjectIdField = "ROW__ID", this._adaptedFields = [], this.declaredClass = "esri.arcade.featureset.actions.Aggregate", this._uniqueIds = 1, this._maxQuery = 10, this._maxProcessing = 10, this._parent = e3.parentfeatureset, this._config = e3;
  }
  isTable() {
    return true;
  }
  async _getSet(e3) {
    if (null === this._wset) {
      const t2 = await this._getFilteredSet("", null, null, null, e3);
      return this._wset = t2, this._wset;
    }
    return this._wset;
  }
  _isInFeatureSet() {
    return s$1.InFeatureSet;
  }
  _nextUniqueName(e3) {
    for (; 1 === e3["T" + this._uniqueIds.toString()]; )
      this._uniqueIds++;
    const t2 = "T" + this._uniqueIds.toString();
    return e3[t2] = 1, t2;
  }
  _convertToEsriFieldType(e3) {
    return e3;
  }
  _initialiseFeatureSet() {
    const e3 = {};
    let t2 = false, n2 = 1;
    const r$12 = this._parent ? this._parent.getFieldsIndex() : new Z([]);
    for (this.objectIdField = "ROW__ID", this.globalIdField = ""; false === t2; ) {
      let e4 = false;
      for (let t3 = 0; t3 < this._config.groupbyfields.length; t3++)
        if (this._config.groupbyfields[t3].name.toLowerCase() === this.objectIdField.toLowerCase()) {
          e4 = true;
          break;
        }
      if (false === e4) {
        for (let t3 = 0; t3 < this._config.statsfields.length; t3++)
          if (this._config.statsfields[t3].name.toLowerCase() === this.objectIdField.toLowerCase()) {
            e4 = true;
            break;
          }
      }
      false === e4 ? t2 = true : (this.objectIdField = "ROW__ID" + n2.toString(), n2++);
    }
    for (const i of this._config.statsfields) {
      const e4 = new a$1();
      e4.field = i.name, e4.tofieldname = i.name, e4.workingexpr = i.expression instanceof x$1 ? i.expression : x$1.create(i.expression, r$12, this.dateFieldsTimeZoneDefaultUTC), e4.typeofstat = G(i.statistic), this._decodedStatsfield.push(e4);
    }
    this._decodedGroupbyfield = [];
    for (const i of this._config.groupbyfields) {
      const e4 = { name: i.name, singlefield: null, tofieldname: i.name, expression: i.expression instanceof x$1 ? i.expression : x$1.create(i.expression, r$12, this.dateFieldsTimeZoneDefaultUTC), sqlType: null };
      this._decodedGroupbyfield.push(e4);
    }
    if (null !== this._parent) {
      this.geometryType = this._parent.geometryType, this.spatialReference = this._parent.spatialReference, this.hasM = this._parent.hasM, this.hasZ = this._parent.hasZ, this.typeIdField = "";
      for (const t3 of this._parent.fields)
        e3[t3.name.toUpperCase()] = 1;
      this.types = null;
    } else
      this.geometryType = N$1.point, this.typeIdField = "", this.types = null, this.spatialReference = new f$1({ wkid: 4326 });
    this.fields = [];
    const a4 = new a$1();
    a4.field = this._nextUniqueName(e3), a4.tofieldname = this.objectIdField, a4.workingexpr = x$1.create(this._parent.objectIdField, this._parent.getFieldsIndex(), this.dateFieldsTimeZoneDefaultUTC), a4.typeofstat = "MIN", this._decodedStatsfield.push(a4);
    for (const s2 of this._decodedGroupbyfield) {
      const t3 = new y$2();
      if (s2.name = this._nextUniqueName(e3), t3.name = s2.tofieldname, t3.alias = t3.name, D$2(s2.expression)) {
        const e4 = this._parent.getField(f$2(s2.expression, l.Standardised));
        if (!e4)
          throw new s$2(r.AggregationFieldNotFound);
        s2.name = e4.name, s2.singlefield = e4.name, this.phsyicalgroupbyfields.push(e4.name), t3.type = e4.type, s2.sqlType = e4.type;
      } else {
        t3.type = this._convertToEsriFieldType(I$2(s2.expression, this._parent.fields));
        const e4 = new y$2();
        e4.name = s2.name, e4.alias = e4.name, this.phsyicalgroupbyfields.push(s2.name), this._adaptedFields.push(new B(e4, s2.expression)), this._candosimplegroupby = false, s2.sqlType = t3.type;
      }
      this.fields.push(t3);
    }
    if (this._adaptedFields.length > 0)
      for (const i of this._parent.fields)
        this._adaptedFields.push(new I$1(i));
    for (let i = 0; i < this._decodedStatsfield.length; i++) {
      const t3 = new y$2();
      let s2 = null;
      const n3 = this._decodedStatsfield[i];
      n3.field = this._nextUniqueName(e3), n3.tofieldname === this.objectIdField && (this._internalObjectIdField = n3.field), t3.name = n3.tofieldname, t3.alias = t3.name;
      const r$13 = null !== n3.workingexpr && D$2(n3.workingexpr) ? f$2(n3.workingexpr, l.Standardised) : "";
      switch (this._decodedStatsfield[i].typeofstat) {
        case "SUM":
          if ("" !== r$13) {
            if (s2 = this._parent.getField(r$13), !s2)
              throw new s$2(r.AggregationFieldNotFound);
            t3.type = s2.type;
          } else
            t3.type = "double";
          break;
        case "MIN":
        case "MAX":
          if ("" !== r$13) {
            if (s2 = this._parent.getField(r$13), !s2)
              throw new s$2(r.AggregationFieldNotFound);
            t3.type = s2.type;
          } else
            t3.type = "double";
          break;
        case "COUNT":
          t3.type = "integer";
          break;
        case "STDDEV":
        case "VAR":
        case "AVG":
          if ("" !== r$13 && (s2 = this._parent.getField(r$13), !s2))
            throw new s$2(r.AggregationFieldNotFound);
          t3.type = "double";
      }
      this.fields.push(t3);
    }
  }
  async _canDoAggregates() {
    return false;
  }
  async _getFeatures(e3, t2, i, s2) {
    -1 !== t2 && this._featureCache[t2];
    const n2 = this._maxQuery;
    return true === this._checkIfNeedToExpandKnownPage(e3, n2) ? (await this._expandPagedSet(e3, n2, 0, 0, s2), this._getFeatures(e3, t2, i, s2)) : "success";
  }
  async _getFilteredSet(e$12, t2, i, s2, o) {
    if ("" !== e$12)
      return new t$1([], [], true, null);
    let l2 = null;
    const d2 = { ordered: false, nowhereclause: false };
    if (await this._ensureLoaded(), null !== i) {
      for (let n2 = 0; n2 < this._decodedStatsfield.length; n2++)
        if (true === v(i, this._decodedStatsfield[n2].tofieldname)) {
          d2.nowhereclause = true, i = null;
          break;
        }
    }
    if (null !== s2) {
      d2.ordered = true;
      for (let e3 = 0; e3 < this._decodedStatsfield.length; e3++)
        if (true === s2.scanForField(this._decodedStatsfield[e3].tofieldname)) {
          s2 = null, d2.ordered = false;
          break;
        }
      if (null !== s2) {
        for (const e3 of this._decodedGroupbyfield)
          if (null === e3.singlefield && true === s2.scanForField(e3.tofieldname)) {
            s2 = null, d2.ordered = false;
            break;
          }
      }
    }
    if (false !== this._candosimplegroupby && await this._parent._canDoAggregates(this.phsyicalgroupbyfields, this._decodedStatsfield, "", null, null)) {
      let e3 = null;
      i && (e3 = this._reformulateWhereClauseWithoutGroupByFields(i));
      let t3 = null;
      s2 && (t3 = this._reformulateOrderClauseWithoutGroupByFields(s2));
      const n2 = await this._parent._getAggregatePagesDataSourceDefinition(this.phsyicalgroupbyfields, this._decodedStatsfield, "", null, e3, t3, this._internalObjectIdField);
      return this._checkCancelled(o), l2 = true === d2.nowhereclause ? new t$1(n2._candidates.slice(0).concat(n2._known.slice(0)), [], true === d2.ordered && n2._ordered, this._clonePageDefinition(n2.pagesDefinition)) : new t$1(n2._candidates.slice(0), n2._known.slice(0), true === d2.ordered && n2._ordered, this._clonePageDefinition(n2.pagesDefinition)), l2;
    }
    let c$12 = this._parent;
    if (this._adaptedFields.length > 0 && (c$12 = new L$1({ parentfeatureset: this._parent, adaptedFields: this._adaptedFields, extraFilter: null })), true === d2.nowhereclause)
      l2 = new t$1(["GETPAGES"], [], false, { aggregatefeaturesetpagedefinition: true, resultOffset: 0, resultRecordCount: this._maxQuery, internal: { fullyResolved: false, workingItem: null, type: "manual", iterator: null, set: [], subfeatureset: new a$2({ parentfeatureset: c$12, orderbyclause: new e2(this.phsyicalgroupbyfields.join(",") + "," + this._parent.objectIdField + " ASC") }) } });
    else {
      let e$13 = c$12;
      if (null !== i) {
        let t3 = null;
        i && (t3 = this._reformulateWhereClauseWithoutGroupByFields(i)), e$13 = new c({ parentfeatureset: e$13, whereclause: t3 });
      }
      l2 = new t$1(["GETPAGES"], [], false, { aggregatefeaturesetpagedefinition: true, resultOffset: 0, resultRecordCount: this._maxQuery, internal: { fullyResolved: false, workingItem: null, type: "manual", iterator: null, set: [], subfeatureset: new a$2({ parentfeatureset: e$13, orderbyclause: new e2(this.phsyicalgroupbyfields.join(",") + "," + this._parent.objectIdField + " ASC") }) } });
    }
    return l2;
  }
  _reformulateWhereClauseWithoutStatsFields(e3) {
    for (const t2 of this._decodedStatsfield)
      e3 = m(e3, t2.tofieldname, f$2(t2.workingexpr, l.Standardised), this._parent.getFieldsIndex());
    return e3;
  }
  _reformulateWhereClauseWithoutGroupByFields(e3) {
    for (const t2 of this._decodedGroupbyfield)
      t2.tofieldname !== t2.name && (e3 = m(e3, t2.tofieldname, f$2(t2.expression, l.Standardised), this._parent.getFieldsIndex()));
    return e3;
  }
  _reformulateOrderClauseWithoutGroupByFields(e3) {
    const t2 = [];
    for (const i of this._decodedGroupbyfield)
      i.tofieldname !== i.name && t2.push({ field: i.tofieldname, newfield: i.name });
    return t2.length > 0 ? e3.replaceFields(t2) : e3;
  }
  _clonePageDefinition(e3) {
    return null === e3 ? null : true === e3.aggregatefeaturesetpagedefinition ? { aggregatefeaturesetpagedefinition: true, resultRecordCount: e3.resultRecordCount, resultOffset: e3.resultOffset, internal: e3.internal } : this._parent._clonePageDefinition(e3);
  }
  async _refineSetBlock(e3, t2, i) {
    if (true === this._checkIfNeedToExpandCandidatePage(e3, this._maxQuery))
      return await this._expandPagedSet(e3, this._maxQuery, 0, 0, i), this._refineSetBlock(e3, t2, i);
    this._checkCancelled(i);
    e3._candidates.length;
    this._refineKnowns(e3, t2);
    e3._candidates.length;
    return e3._candidates.length, e3;
  }
  _expandPagedSet(e3, t2, i, s2, n2) {
    return this._expandPagedSetFeatureSet(e3, t2, i, s2, n2);
  }
  async _getPhysicalPage(t2, i, s2) {
    if (true === t2.pagesDefinition.aggregatefeaturesetpagedefinition)
      return this._sequentialGetPhysicalItem(t2, t2.pagesDefinition.resultRecordCount, s2, []);
    const n2 = await this._getAgregagtePhysicalPage(t2, i, s2);
    for (const r2 of n2) {
      const t3 = { geometry: r2.geometry, attributes: {} }, i2 = {};
      for (const e3 in r2.attributes)
        i2[e3.toLowerCase()] = r2.attributes[e3];
      for (const e3 of this._decodedGroupbyfield)
        t3.attributes[e3.tofieldname] = i2[e3.name.toLowerCase()];
      for (const e3 of this._decodedStatsfield)
        t3.attributes[e3.tofieldname] = i2[e3.field.toLowerCase()];
      this._featureCache[t3.attributes[this.objectIdField]] = new c$1(t3);
    }
    return n2.length;
  }
  _sequentialGetPhysicalItem(e3, t2, i, s2) {
    return new Promise((n2, r2) => {
      null === e3.pagesDefinition.internal.iterator && (e3.pagesDefinition.internal.iterator = e3.pagesDefinition.internal.subfeatureset.iterator(i)), true === e3.pagesDefinition.internal.fullyResolved || 0 === t2 ? n2(s2.length) : this._nextAggregateItem(e3, t2, i, s2, (r3) => {
        null === r3 ? n2(s2.length) : (t2 -= 1, n2(this._sequentialGetPhysicalItem(e3, t2, i, s2)));
      }, r2);
    });
  }
  _nextAggregateItem(e3, i, s2, n2, r2, a4) {
    try {
      Re(e3.pagesDefinition.internal.iterator.next()).then((t2) => {
        if (null === t2)
          if (null !== e3.pagesDefinition.internal.workingItem) {
            const t3 = this._calculateAndAppendAggregateItem(e3.pagesDefinition.internal.workingItem);
            n2.push(t3), e3.pagesDefinition.internal.workingItem = null, e3.pagesDefinition.internal.set.push(t3.attributes[this.objectIdField]), e3.pagesDefinition.internal.fullyResolved = true, r2(null);
          } else
            e3.pagesDefinition.internal.fullyResolved = true, r2(null);
        else {
          const o = this._generateAggregateHash(t2);
          if (null === e3.pagesDefinition.internal.workingItem)
            e3.pagesDefinition.internal.workingItem = { features: [t2], id: o };
          else {
            if (o !== e3.pagesDefinition.internal.workingItem.id) {
              const s3 = this._calculateAndAppendAggregateItem(e3.pagesDefinition.internal.workingItem);
              return n2.push(s3), e3.pagesDefinition.internal.workingItem = null, e3.pagesDefinition.internal.set.push(s3.attributes[this.objectIdField]), i -= 1, e3.pagesDefinition.internal.workingItem = { features: [t2], id: o }, void r2(s3);
            }
            e3.pagesDefinition.internal.workingItem.features.push(t2);
          }
          this._nextAggregateItem(e3, i, s2, n2, r2, a4);
        }
      }, a4);
    } catch (o) {
      a4(o);
    }
  }
  _calculateFieldStat(e3, t2, i) {
    const s2 = [];
    for (let n2 = 0; n2 < e3.features.length; n2++)
      if (null !== t2.workingexpr) {
        const i2 = t2.workingexpr.calculateValue(e3.features[n2]);
        null !== i2 && (i2 instanceof n$2 || i2 instanceof n$3 ? s2.push(i2.toNumber()) : i2 instanceof r$1 ? s2.push(i2.toMilliseconds()) : s2.push(i2));
      } else
        s2.push(null);
    switch (t2.typeofstat) {
      case "MIN":
        i.attributes[t2.tofieldname] = d$2("min", s2, -1);
        break;
      case "MAX":
        i.attributes[t2.tofieldname] = d$2("max", s2, -1);
        break;
      case "SUM":
        i.attributes[t2.tofieldname] = d$2("sum", s2, -1);
        break;
      case "COUNT":
        i.attributes[t2.tofieldname] = s2.length;
        break;
      case "VAR":
        i.attributes[t2.tofieldname] = d$2("var", s2, -1);
        break;
      case "STDDEV":
        i.attributes[t2.tofieldname] = d$2("stddev", s2, -1);
        break;
      case "AVG":
        i.attributes[t2.tofieldname] = d$2("avg", s2, -1);
    }
    return true;
  }
  _calculateAndAppendAggregateItem(t2) {
    const i = { attributes: {}, geometry: null };
    for (const e3 of this._decodedGroupbyfield) {
      const s3 = e3.singlefield ? t2.features[0].attributes[e3.singlefield] : x$1.convertValueToStorageFormat(e3.expression.calculateValue(t2.features[0]), e3.sqlType);
      i.attributes[e3.tofieldname] = s3;
    }
    for (const e3 of this._decodedStatsfield)
      this._calculateFieldStat(t2, e3, i);
    const s2 = [];
    for (let e3 = 0; e3 < this._decodedStatsfield.length; e3++)
      s2.push(this._calculateFieldStat(t2, this._decodedStatsfield[e3], i));
    return this._featureCache[i.attributes[this.objectIdField]] = new c$1({ attributes: i.attributes, geometry: i.geometry }), i;
  }
  _generateAggregateHash(e3) {
    let t2 = "";
    for (const i of this._decodedGroupbyfield) {
      const s2 = i.singlefield ? e3.attributes[i.singlefield] : i.expression.calculateValue(e3);
      t2 += null == s2 ? ":" : ":" + s2.toString();
    }
    return x$2(t2, n$4.String);
  }
  async _stat() {
    return { calculated: false };
  }
  async getFeatureByObjectId() {
    return null;
  }
  static registerAction() {
    x._featuresetFunctions.groupby = function(e3, t2) {
      return new O({ parentfeatureset: this, groupbyfields: e3, statsfields: t2 });
    };
  }
};
class a3 extends x {
  constructor(t2) {
    super(t2), this._topnum = 0, this.declaredClass = "esri.arcade.featureset.actions.Top", this._countedin = 0, this._maxProcessing = 100, this._topnum = t2.topnum, this._parent = t2.parentfeatureset;
  }
  async _getSet(t2) {
    if (null === this._wset) {
      await this._ensureLoaded();
      const e3 = await this._parent._getSet(t2);
      return this._wset = new t$1(e3._candidates.slice(0), e3._known.slice(0), false, this._clonePageDefinition(e3.pagesDefinition)), this._setKnownLength(this._wset) > this._topnum && (this._wset._known = this._wset._known.slice(0, this._topnum)), this._setKnownLength(this._wset) >= this._topnum && (this._wset._candidates = []), this._wset;
    }
    return this._wset;
  }
  _setKnownLength(t2) {
    return t2._known.length > 0 && "GETPAGES" === t2._known[t2._known.length - 1] ? t2._known.length - 1 : t2._known.length;
  }
  _isInFeatureSet(t2) {
    const e3 = this._parent._isInFeatureSet(t2);
    if (e3 === s$1.NotInFeatureSet)
      return e3;
    const n2 = this._idstates[t2];
    return n2 === s$1.InFeatureSet || n2 === s$1.NotInFeatureSet ? n2 : e3 === s$1.InFeatureSet && void 0 === n2 ? this._countedin < this._topnum ? (this._idstates[t2] = s$1.InFeatureSet, this._countedin++, s$1.InFeatureSet) : (this._idstates[t2] = s$1.NotInFeatureSet, s$1.NotInFeatureSet) : s$1.Unknown;
  }
  async _expandPagedSet(n2, s2, i, a4, o) {
    if (null === this._parent)
      throw new s$2(r.NotImplemented);
    if (s2 > this._topnum && (s2 = this._topnum), this._countedin >= this._topnum && n2.pagesDefinition.internal.set.length <= n2.pagesDefinition.resultOffset) {
      let t2 = n2._known.length;
      return t2 > 0 && "GETPAGES" === n2._known[t2 - 1] && (n2._known.length = t2 - 1), t2 = n2._candidates.length, t2 > 0 && "GETPAGES" === n2._candidates[t2 - 1] && (n2._candidates.length = t2 - 1), "success";
    }
    const r$12 = await this._parent._expandPagedSet(n2, s2, i, a4, o);
    return this._setKnownLength(n2) > this._topnum && (n2._known.length = this._topnum), this._setKnownLength(n2) >= this._topnum && (n2._candidates.length = 0), r$12;
  }
  async _getFeatures(t2, e3, n2, i) {
    const a4 = [], o = this._maxQueryRate();
    if (true === this._checkIfNeedToExpandKnownPage(t2, o))
      return await this._expandPagedSet(t2, o, 0, 0, i), this._getFeatures(t2, e3, n2, i);
    -1 !== e3 && void 0 === this._featureCache[e3] && a4.push(e3);
    let r2 = 0;
    for (let s2 = t2._lastFetchedIndex; s2 < t2._known.length && (r2++, r2 <= n2 && (t2._lastFetchedIndex += 1), !(void 0 === this._featureCache[t2._known[s2]] && (t2._known[s2] !== e3 && a4.push(t2._known[s2]), a4.length > o))); s2++)
      ;
    if (0 === a4.length)
      return "success";
    const _ = new t$1([], a4, false, null), h = Math.min(a4.length, n2);
    await this._parent._getFeatures(_, -1, h, i);
    for (let s2 = 0; s2 < h; s2++) {
      const t3 = this._parent._featureFromCache(a4[s2]);
      void 0 !== t3 && (this._featureCache[a4[s2]] = t3);
    }
    return "success";
  }
  async _getFilteredSet(t2, e3, n2, i, a4) {
    await this._ensureLoaded();
    const o = await this._getSet(a4);
    return new t$1(o._candidates.slice(0).concat(o._known.slice(0)), [], false, this._clonePageDefinition(o.pagesDefinition));
  }
  _refineKnowns(t2, e3) {
    let n2 = 0, s2 = null;
    const a4 = [];
    for (let o = 0; o < t2._candidates.length; o++) {
      const r2 = this._isInFeatureSet(t2._candidates[o]);
      if (r2 === s$1.InFeatureSet) {
        if (t2._known.push(t2._candidates[o]), n2 += 1, null === s2 ? s2 = { start: o, end: o } : s2.end === o - 1 ? s2.end = o : (a4.push(s2), s2 = { start: o, end: o }), t2._known.length >= this._topnum)
          break;
      } else if (r2 === s$1.NotInFeatureSet)
        null === s2 ? s2 = { start: o, end: o } : s2.end === o - 1 ? s2.end = o : (a4.push(s2), s2 = { start: o, end: o }), n2 += 1;
      else if (r2 === s$1.Unknown)
        break;
      if (n2 >= e3)
        break;
    }
    null !== s2 && a4.push(s2);
    for (let i = a4.length - 1; i >= 0; i--)
      t2._candidates.splice(a4[i].start, a4[i].end - a4[i].start + 1);
    this._setKnownLength(t2) > this._topnum && (t2._known = t2._known.slice(0, this._topnum)), this._setKnownLength(t2) >= this._topnum && (t2._candidates = []);
  }
  async _stat() {
    return { calculated: false };
  }
  async _canDoAggregates() {
    return false;
  }
  static registerAction() {
    x._featuresetFunctions.top = function(t2) {
      return new a3({ parentfeatureset: this, topnum: t2 });
    };
  }
  getFieldsIndex() {
    return this._parent.getFieldsIndex();
  }
}
let T$1 = class T extends x {
  constructor(e3) {
    super(e3), this.declaredClass = "esri.arcade.featureset.sources.FeatureLayerDynamic", this._removeGeometry = false, this._overrideFields = null, this.formulaCredential = null, this._pageJustIds = false, this._requestStandardised = false, this._useDefinitionExpression = true, e3.spatialReference && (this.spatialReference = e3.spatialReference), this._transparent = true, this._maxProcessing = 1e3, this._layer = e3.layer, this._wset = null, void 0 !== e3.outFields && (this._overrideFields = e3.outFields), void 0 !== e3.includeGeometry && (this._removeGeometry = false === e3.includeGeometry);
  }
  _maxQueryRate() {
    return P;
  }
  end() {
    return this._layer;
  }
  optimisePagingFeatureQueries(e3) {
    this._pageJustIds = e3;
  }
  get urlQueryPath() {
    return this._layer.parsedUrl.path || "";
  }
  convertQueryToLruCacheKey(e3) {
    const t2 = this.urlQueryPath + "," + M(e3.toJSON());
    return x$2(t2, n$4.String);
  }
  async loadImpl() {
    return true === this._layer.loaded ? (this._initialiseFeatureSet(), this) : (await this._layer.load(), this._initialiseFeatureSet(), this);
  }
  _initialiseFeatureSet() {
    if (null == this.spatialReference && (this.spatialReference = this._layer.spatialReference), this.geometryType = this._layer.geometryType, this.fields = this._layer.fields.slice(0), this.hasZ = true === this._layer?.capabilities?.data?.supportsZ, this.hasM = true === this._layer?.capabilities?.data?.supportsM, null !== this._overrideFields)
      if (1 === this._overrideFields.length && "*" === this._overrideFields[0])
        this._overrideFields = null;
      else {
        const e3 = [], t2 = [];
        for (const i of this.fields)
          if ("oid" === i.type)
            e3.push(i), t2.push(i.name);
          else
            for (const r2 of this._overrideFields)
              if (r2.toLowerCase() === i.name.toLowerCase()) {
                e3.push(i), t2.push(i.name);
                break;
              }
        this.fields = e3, this._overrideFields = t2;
      }
    if (this._layer.source && this._layer.source.sourceJSON) {
      const e3 = this._layer.source.sourceJSON.currentVersion;
      true === this._layer.source.sourceJSON.useStandardizedQueries ? (this._databaseType = l.StandardisedNoInterval, null != e3 && e3 >= 10.61 && (this._databaseType = l.Standardised)) : null != e3 && (e3 >= 10.5 && (this._databaseType = l.StandardisedNoInterval, this._requestStandardised = true), e3 >= 10.61 && (this._databaseType = l.Standardised));
    }
    this.objectIdField = this._layer.objectIdField;
    for (const e3 of this.fields)
      "global-id" === e3.type && (this.globalIdField = e3.name);
    this._layer instanceof ae ? (this.typeIdField = this._layer.subtypeField ?? "", this.types = this._layer.subtypes) : (this.typeIdField = this._layer.typeIdField ?? "", this.types = this._layer.types);
  }
  _isInFeatureSet() {
    return s$1.InFeatureSet;
  }
  async _refineSetBlock(e3) {
    return e3;
  }
  _candidateIdTransform(e3) {
    return e3;
  }
  async _getSet(e3) {
    if (null === this._wset) {
      await this._ensureLoaded();
      const t2 = await this._getFilteredSet("", null, null, null, e3);
      return this._wset = t2, t2;
    }
    return this._wset;
  }
  async _runDatabaseProbe(e3) {
    await this._ensureLoaded();
    const t2 = new b$2();
    this.datesInUnknownTimezone && (t2.timeReferenceUnknownClient = true), t2.where = e3.replace("OBJECTID", this._layer.objectIdField);
    try {
      return await this._layer.queryObjectIds(t2), true;
    } catch (i) {
      return false;
    }
  }
  _canUsePagination() {
    return !(!this._layer.capabilities || !this._layer.capabilities.query || true !== this._layer.capabilities.query.supportsPagination);
  }
  _cacheableFeatureSetSourceKey() {
    return this._layer.url;
  }
  pbfSupportedForQuery(e3) {
    const t2 = this._layer?.capabilities?.query;
    return !e3.outStatistics && true === t2?.supportsFormatPBF && true === t2?.supportsQuantizationEditMode;
  }
  async queryPBF(e3) {
    return e3.quantizationParameters = { mode: "edit" }, (await f$4(this._layer.parsedUrl, e3, { format: "pbf" }, {})).unquantize();
  }
  get gdbVersion() {
    return this._layer && this._layer.capabilities && this._layer.capabilities.data && this._layer.capabilities.data.isVersioned ? this._layer.gdbVersion || "SDE.DEFAULT" : "";
  }
  nativeCapabilities() {
    return { title: this._layer.title ?? "", source: this, canQueryRelated: true, capabilities: this._layer.capabilities, databaseType: this._databaseType, requestStandardised: this._requestStandardised };
  }
  executeQuery(e3, t2) {
    e3.returnZ = this.hasZ, e3.returnM = this.hasM;
    const i = "execute" === t2 ? s$3 : "executeForCount" === t2 ? n$5 : s$4, r2 = "execute" === t2 && this.pbfSupportedForQuery(e3);
    let s2 = null;
    if (this.recentlyUsedQueries) {
      const t3 = this.convertQueryToLruCacheKey(e3);
      s2 = this.recentlyUsedQueries.getFromCache(t3), null === s2 && (s2 = true !== r2 ? i(this._layer.parsedUrl.path, e3) : this.queryPBF(e3), this.recentlyUsedQueries.addToCache(t3, s2), s2 = s2.catch((e4) => {
        throw this.recentlyUsedQueries?.removeFromCache(t3), e4;
      }));
    }
    return this.featureSetQueryInterceptor && this.featureSetQueryInterceptor.preLayerQueryCallback({ layer: this._layer, query: e3, method: t2 }), null === s2 && (s2 = true !== r2 ? i(this._layer.parsedUrl.path, e3) : this.queryPBF(e3)), s2;
  }
  async _getFilteredSet(e3, t2, i, r2, s2) {
    const a4 = await this.databaseType();
    if (this.isTable() && t2 && null !== e3 && "" !== e3) {
      return new t$1([], [], true, null);
    }
    if (this._canUsePagination())
      return this._getFilteredSetUsingPaging(e3, t2, i, r2, s2);
    let n2 = "", l2 = false;
    null !== r2 && this._layer.capabilities && this._layer.capabilities.query && true === this._layer.capabilities.query.supportsOrderBy && (n2 = r2.constructClause(), l2 = true);
    const u = new b$2();
    this.datesInUnknownTimezone && (u.timeReferenceUnknownClient = true), u.where = null === i ? null === t2 ? "1=1" : "" : f$2(i, a4), this._requestStandardised && (u.sqlFormat = "standard"), u.spatialRelationship = this._makeRelationshipEnum(e3), u.outSpatialReference = this.spatialReference, u.orderByFields = "" !== n2 ? n2.split(",") : null, u.geometry = null === t2 ? null : t2, u.relationParameter = this._makeRelationshipParam(e3);
    let d2 = await this.executeQuery(u, "executeForIds");
    null === d2 && (d2 = []), this._checkCancelled(s2);
    return new t$1([], d2, l2, null);
  }
  _expandPagedSet(e3, t2, i, r2, s2) {
    return this._expandPagedSetFeatureSet(e3, t2, i, r2, s2);
  }
  async _getFilteredSetUsingPaging(e3, t2, i, r2, s2) {
    let a4 = "", n2 = false;
    null !== r2 && this._layer.capabilities && this._layer.capabilities.query && true === this._layer.capabilities.query.supportsOrderBy && (a4 = r2.constructClause(), n2 = true);
    const l2 = await this.databaseType();
    let u = null === i ? null === t2 ? "1=1" : "" : f$2(i, l2);
    this._layer.definitionExpression && this._useDefinitionExpression && (u = "" !== u ? "((" + this._layer.definitionExpression + ") AND (" + u + "))" : this._layer.definitionExpression);
    let d2 = this._maxQueryRate();
    const h = this._layer.capabilities?.query.maxRecordCount;
    null != h && h < d2 && (d2 = h);
    let p2 = null;
    if (true === this._pageJustIds)
      p2 = new t$1([], ["GETPAGES"], n2, { spatialRel: this._makeRelationshipEnum(e3), relationParam: this._makeRelationshipParam(e3), outFields: this._layer.objectIdField, resultRecordCount: d2, resultOffset: 0, geometry: null === t2 ? null : t2, where: u, orderByFields: a4, returnGeometry: false, returnIdsOnly: "false", internal: { set: [], lastRetrieved: 0, lastPage: 0, fullyResolved: false } });
    else {
      let i2 = true;
      true === this._removeGeometry && (i2 = false);
      const r3 = this._overrideFields ?? this._fieldsIncludingObjectId(["*"]);
      p2 = new t$1([], ["GETPAGES"], n2, { spatialRel: this._makeRelationshipEnum(e3), relationParam: this._makeRelationshipParam(e3), outFields: r3.join(","), resultRecordCount: d2, resultOffset: 0, geometry: null === t2 ? null : t2, where: u, orderByFields: a4, returnGeometry: i2, returnIdsOnly: "false", internal: { set: [], lastRetrieved: 0, lastPage: 0, fullyResolved: false } });
    }
    return await this._expandPagedSet(p2, d2, 0, 1, s2), p2;
  }
  _clonePageDefinition(e3) {
    return null === e3 ? null : true !== e3.groupbypage ? { groupbypage: false, spatialRel: e3.spatialRel, relationParam: e3.relationParam, outFields: e3.outFields, resultRecordCount: e3.resultRecordCount, resultOffset: e3.resultOffset, geometry: e3.geometry, where: e3.where, orderByFields: e3.orderByFields, returnGeometry: e3.returnGeometry, returnIdsOnly: e3.returnIdsOnly, internal: e3.internal } : { groupbypage: true, spatialRel: e3.spatialRel, relationParam: e3.relationParam, outFields: e3.outFields, resultRecordCount: e3.resultRecordCount, useOIDpagination: e3.useOIDpagination, generatedOid: e3.generatedOid, groupByFieldsForStatistics: e3.groupByFieldsForStatistics, resultOffset: e3.resultOffset, outStatistics: e3.outStatistics, geometry: e3.geometry, where: e3.where, orderByFields: e3.orderByFields, returnGeometry: e3.returnGeometry, returnIdsOnly: e3.returnIdsOnly, internal: e3.internal };
  }
  async _getPhysicalPage(e3, t2, i) {
    const r2 = e3.pagesDefinition.internal.lastRetrieved, s2 = r2, a4 = e3.pagesDefinition.internal.lastPage, n2 = new b$2();
    this._requestStandardised && (n2.sqlFormat = "standard"), this.datesInUnknownTimezone && (n2.timeReferenceUnknownClient = true), n2.spatialRelationship = e3.pagesDefinition.spatialRel, n2.relationParameter = e3.pagesDefinition.relationParam, n2.outFields = e3.pagesDefinition.outFields.split(","), n2.num = e3.pagesDefinition.resultRecordCount, n2.start = e3.pagesDefinition.internal.lastPage, n2.geometry = e3.pagesDefinition.geometry, n2.where = e3.pagesDefinition.where, n2.orderByFields = "" !== e3.pagesDefinition.orderByFields ? e3.pagesDefinition.orderByFields.split(",") : null, n2.returnGeometry = e3.pagesDefinition.returnGeometry, n2.outSpatialReference = this.spatialReference;
    const l2 = await this.executeQuery(n2, "execute");
    if (this._checkCancelled(i), e3.pagesDefinition.internal.lastPage !== a4)
      return "done";
    const o = this._layer.objectIdField;
    for (let u = 0; u < l2.features.length; u++)
      e3.pagesDefinition.internal.set[s2 + u] = l2.features[u].attributes[o];
    if (false === this._pageJustIds)
      for (let u = 0; u < l2.features.length; u++)
        this._featureCache[l2.features[u].attributes[o]] = l2.features[u];
    return (void 0 === l2.exceededTransferLimit && l2.features.length !== e3.pagesDefinition.resultRecordCount || false === l2.exceededTransferLimit) && (e3.pagesDefinition.internal.fullyResolved = true), e3.pagesDefinition.internal.lastRetrieved = r2 + l2.features.length, e3.pagesDefinition.internal.lastPage += e3.pagesDefinition.resultRecordCount, "done";
  }
  _fieldsIncludingObjectId(e3) {
    if (null === e3)
      return [this.objectIdField];
    const t2 = e3.slice(0);
    if (t2.includes("*"))
      return t2;
    let i = false;
    for (const r2 of t2)
      if (r2.toUpperCase() === this.objectIdField.toUpperCase()) {
        i = true;
        break;
      }
    return false === i && t2.push(this.objectIdField), t2;
  }
  async _getFeatures(e3, t2, i, r$12) {
    const s2 = [];
    if (-1 !== t2 && void 0 === this._featureCache[t2] && s2.push(t2), true === this._checkIfNeedToExpandKnownPage(e3, this._maxProcessingRate()))
      return await this._expandPagedSet(e3, this._maxProcessingRate(), 0, 0, r$12), this._getFeatures(e3, t2, i, r$12);
    let l2 = 0;
    for (let a4 = e3._lastFetchedIndex; a4 < e3._known.length; a4++) {
      if (e3._lastFetchedIndex += 1, l2++, void 0 === this._featureCache[e3._known[a4]]) {
        let i2 = false;
        if (null !== this._layer._mode && void 0 !== this._layer._mode) {
          const t3 = this._layer._mode;
          if (void 0 !== t3._featureMap[e3._known[a4]]) {
            const r2 = t3._featureMap[e3._known[a4]];
            null !== r2 && (i2 = true, this._featureCache[e3._known[a4]] = r2);
          }
        }
        if (false === i2 && (e3._known[a4] !== t2 && s2.push(e3._known[a4]), s2.length >= this._maxProcessingRate() - 1))
          break;
      }
      if (l2 >= i && 0 === s2.length)
        break;
    }
    if (0 === s2.length)
      return "success";
    const o = new b$2();
    this._requestStandardised && (o.sqlFormat = "standard"), this.datesInUnknownTimezone && (o.timeReferenceUnknownClient = true), o.objectIds = s2, o.outFields = this._overrideFields ?? this._fieldsIncludingObjectId(["*"]), o.returnGeometry = true, true === this._removeGeometry && (o.returnGeometry = false), o.outSpatialReference = this.spatialReference;
    const u = await this.executeQuery(o, "execute");
    if (this._checkCancelled(r$12), void 0 !== u.error)
      throw new s$2(r.RequestFailed, { reason: u.error });
    const d2 = this._layer.objectIdField;
    for (let a4 = 0; a4 < u.features.length; a4++)
      this._featureCache[u.features[a4].attributes[d2]] = u.features[a4];
    return "success";
  }
  async _getDistinctPages(e3, t2, i, r$12, s2, l2, o, u, d2) {
    await this._ensureLoaded();
    const h = await this.databaseType();
    let p2 = i.parseTree.column;
    const c2 = this._layer.fields ?? [];
    for (let a4 = 0; a4 < c2.length; a4++)
      if (c2[a4].name.toLowerCase() === p2.toLowerCase()) {
        p2 = c2[a4].name;
        break;
      }
    const f2 = new b$2();
    this._requestStandardised && (f2.sqlFormat = "standard"), this.datesInUnknownTimezone && (f2.timeReferenceUnknownClient = true);
    let m2 = null === l2 ? null === s2 ? "1=1" : "" : f$2(l2, h);
    this._layer.definitionExpression && this._useDefinitionExpression && (m2 = "" !== m2 ? "((" + this._layer.definitionExpression + ") AND (" + m2 + "))" : this._layer.definitionExpression), f2.where = m2, f2.spatialRelationship = this._makeRelationshipEnum(r$12), f2.relationParameter = this._makeRelationshipParam(r$12), f2.geometry = null === s2 ? null : s2, f2.returnDistinctValues = true, f2.returnGeometry = false, f2.outFields = [p2];
    const _ = await this.executeQuery(f2, "execute");
    if (this._checkCancelled(d2), !_.hasOwnProperty("features"))
      throw new s$2(r.InvalidStatResponse);
    let g2 = false;
    for (let a4 = 0; a4 < c2.length; a4++)
      if (c2[a4].name === p2) {
        "date" === c2[a4].type && (g2 = true);
        break;
      }
    for (let a4 = 0; a4 < _.features.length; a4++) {
      if (g2) {
        const e4 = _.features[a4].attributes[p2];
        null !== e4 ? u.push(new Date(e4)) : u.push(e4);
      } else
        u.push(_.features[a4].attributes[p2]);
      if (u.length >= o)
        break;
    }
    if (0 === _.features.length)
      return u;
    if (_.features.length === this._layer.capabilities?.query.maxRecordCount && u.length < o) {
      return { calculated: true, result: await this._getDistinctPages(e3 + _.features.length, t2, i, r$12, s2, l2, o, u, d2) };
    }
    return u;
  }
  async _distinctStat(e3, t2, i, r2, s2, a4, n2) {
    return { calculated: true, result: await this._getDistinctPages(0, e3, t2, i, r2, s2, a4, [], n2) };
  }
  isTable() {
    return this._layer.isTable || null === this._layer.geometryType || "table" === this._layer.type || "" === this._layer.geometryType || "esriGeometryNull" === this._layer.geometryType;
  }
  async _countstat(e3, t2, i, r2) {
    const s2 = await this.databaseType(), a4 = new b$2();
    if (this._requestStandardised && (a4.sqlFormat = "standard"), this.isTable() && i && null !== t2 && "" !== t2)
      return { calculated: true, result: 0 };
    let n2 = null === r2 ? null === i ? "1=1" : "" : f$2(r2, s2);
    this._layer.definitionExpression && this._useDefinitionExpression && (n2 = "" !== n2 ? "((" + this._layer.definitionExpression + ") AND (" + n2 + "))" : this._layer.definitionExpression), a4.where = n2, this.datesInUnknownTimezone && (a4.timeReferenceUnknownClient = true), a4.where = n2, a4.spatialRelationship = this._makeRelationshipEnum(t2), a4.relationParameter = this._makeRelationshipParam(t2), a4.geometry = null === i ? null : i, a4.returnGeometry = false;
    return { calculated: true, result: await this.executeQuery(a4, "executeForCount") };
  }
  async _stats(e3, t2, i, r$12, s2, l2, o) {
    await this._ensureLoaded();
    const u = this._layer.capabilities && this._layer.capabilities.query && true === this._layer.capabilities.query.supportsSqlExpression, d2 = this._layer.capabilities && this._layer.capabilities.query && true === this._layer.capabilities.query.supportsStatistics, h = this._layer.capabilities && this._layer.capabilities.query && true === this._layer.capabilities.query.supportsDistinct;
    if ("count" === e3)
      return h ? this._countstat(e3, i, r$12, s2) : { calculated: false };
    if (false === d2 || false === D$2(t2) && false === u || false === t2.isStandardized)
      return "" !== i || null !== s2 ? { calculated: false } : this._manualStat(e3, t2, l2, o);
    if ("distinct" === e3)
      return false === h ? "" !== i || null !== s2 ? { calculated: false } : this._manualStat(e3, t2, l2, o) : this._distinctStat(e3, t2, i, r$12, s2, l2, o);
    const p2 = await this.databaseType();
    if (this.isTable() && r$12 && null !== i && "" !== i)
      return { calculated: true, result: null };
    const c2 = new b$2();
    this._requestStandardised && (c2.sqlFormat = "standard");
    let _ = null === s2 ? null === r$12 ? "1=1" : "" : f$2(s2, p2);
    this._layer.definitionExpression && this._useDefinitionExpression && (_ = "" !== _ ? "((" + this._layer.definitionExpression + ") AND (" + _ + "))" : this._layer.definitionExpression), c2.where = _, c2.spatialRelationship = this._makeRelationshipEnum(i), c2.relationParameter = this._makeRelationshipParam(i), c2.geometry = null === r$12 ? null : r$12, this.datesInUnknownTimezone && (c2.timeReferenceUnknownClient = true);
    const g2 = new m$1();
    g2.statisticType = w$1(e3), g2.onStatisticField = f$2(t2, p2), g2.outStatisticFieldName = "ARCADE_STAT_RESULT", c2.returnGeometry = false;
    let w2 = "ARCADE_STAT_RESULT";
    c2.outStatistics = [g2];
    const R = await this.executeQuery(c2, "execute");
    if (!R.hasOwnProperty("features") || 0 === R.features.length)
      throw new s$2(r.InvalidStatResponse);
    let S2 = false;
    const F2 = R.fields ?? [];
    for (let a4 = 0; a4 < F2.length; a4++)
      if ("ARCADE_STAT_RESULT" === F2[a4].name.toUpperCase()) {
        w2 = F2[a4].name, "date" === F2[a4].type && (S2 = true);
        break;
      }
    if (S2) {
      let e4 = R.features[0].attributes[w2];
      return null !== e4 && (e4 = new Date(R.features[0].attributes[w2])), { calculated: true, result: e4 };
    }
    return { calculated: true, result: R.features[0].attributes[w2] };
  }
  _stat(e3, t2, i, r2, s2, a4, n2) {
    return this._stats(e3, t2, i, r2, s2, a4, n2);
  }
  async _canDoAggregates(e3, t2) {
    await this._ensureLoaded();
    let i = false;
    const r2 = this._layer.capabilities?.query, s2 = true === r2?.supportsSqlExpression;
    if (null != r2 && true === r2.supportsStatistics && true === r2.supportsOrderBy && (i = true), i)
      for (let a4 = 0; a4 < t2.length - 1; a4++)
        (false === t2[a4].workingexpr?.isStandardized || false === D$2(t2[a4].workingexpr) && false === s2) && (i = false);
    return false !== i;
  }
  _makeRelationshipEnum(e3) {
    if (e3.includes("esriSpatialRelRelation"))
      return "relation";
    switch (e3) {
      case "esriSpatialRelRelation":
        return "relation";
      case "esriSpatialRelIntersects":
        return "intersects";
      case "esriSpatialRelContains":
        return "contains";
      case "esriSpatialRelOverlaps":
        return "overlaps";
      case "esriSpatialRelWithin":
        return "within";
      case "esriSpatialRelTouches":
        return "touches";
      case "esriSpatialRelCrosses":
        return "crosses";
      case "esriSpatialRelEnvelopeIntersects":
        return "envelope-intersects";
    }
    return e3;
  }
  _makeRelationshipParam(e3) {
    return e3.includes("esriSpatialRelRelation") ? e3.split(":")[1] : "";
  }
  async _getAggregatePagesDataSourceDefinition(e3, t2, i, r2, s2, a4, n2) {
    await this._ensureLoaded();
    const l2 = await this.databaseType();
    let u = "", d2 = false, h = false;
    null !== a4 && this._layer.capabilities && this._layer.capabilities.query && true === this._layer.capabilities.query.supportsOrderBy && (u = a4.constructClause(), h = true), this._layer.capabilities && this._layer.capabilities.query && false === this._layer.capabilities.query.supportsPagination && (h = false, d2 = true, u = this._layer.objectIdField);
    const p2 = [];
    for (let o = 0; o < t2.length; o++) {
      const e4 = new m$1();
      e4.onStatisticField = null !== t2[o].workingexpr ? f$2(t2[o].workingexpr, l2) : "", e4.outStatisticFieldName = t2[o].field, e4.statisticType = t2[o].toStatisticsName(), p2.push(e4);
    }
    "" === u && (u = e3.join(","));
    let c2 = this._maxQueryRate();
    const f2 = this._layer.capabilities?.query.maxRecordCount;
    null != f2 && f2 < c2 && (c2 = f2);
    let m2 = null === s2 ? null === r2 ? "1=1" : "" : f$2(s2, l2);
    this._layer.definitionExpression && this._useDefinitionExpression && (m2 = "" !== m2 ? "((" + this._layer.definitionExpression + ") AND (" + m2 + "))" : this._layer.definitionExpression);
    return new t$1([], ["GETPAGES"], h, { groupbypage: true, spatialRel: this._makeRelationshipEnum(i), relationParam: this._makeRelationshipParam(i), outFields: ["*"], useOIDpagination: d2, generatedOid: n2, resultRecordCount: c2, resultOffset: 0, groupByFieldsForStatistics: e3, outStatistics: p2, geometry: null === r2 ? null : r2, where: m2, orderByFields: u, returnGeometry: false, returnIdsOnly: false, internal: { lastMaxId: -1, set: [], lastRetrieved: 0, lastPage: 0, fullyResolved: false } });
  }
  async _getAgregagtePhysicalPage(t2, i, r$12) {
    let s2 = t2.pagesDefinition.where;
    true === t2.pagesDefinition.useOIDpagination && (s2 = "" !== s2 ? "(" + s2 + ") AND (" + t2.pagesDefinition.generatedOid + ">" + t2.pagesDefinition.internal.lastMaxId.toString() + ")" : t2.pagesDefinition.generatedOid + ">" + t2.pagesDefinition.internal.lastMaxId.toString());
    const l2 = t2.pagesDefinition.internal.lastRetrieved, o = l2, u = t2.pagesDefinition.internal.lastPage, d2 = new b$2();
    if (this._requestStandardised && (d2.sqlFormat = "standard"), d2.where = s2, d2.spatialRelationship = t2.pagesDefinition.spatialRel, d2.relationParameter = t2.pagesDefinition.relationParam, d2.outFields = t2.pagesDefinition.outFields, d2.outStatistics = t2.pagesDefinition.outStatistics, d2.geometry = t2.pagesDefinition.geometry, d2.groupByFieldsForStatistics = t2.pagesDefinition.groupByFieldsForStatistics, d2.num = t2.pagesDefinition.resultRecordCount, d2.start = t2.pagesDefinition.internal.lastPage, d2.returnGeometry = t2.pagesDefinition.returnGeometry, this.datesInUnknownTimezone && (d2.timeReferenceUnknownClient = true), d2.orderByFields = "" !== t2.pagesDefinition.orderByFields ? t2.pagesDefinition.orderByFields.split(",") : null, this.isTable() && d2.geometry && d2.spatialRelationship)
      return [];
    const h = await this.executeQuery(d2, "execute");
    if (this._checkCancelled(r$12), !h.hasOwnProperty("features"))
      throw new s$2(r.InvalidStatResponse);
    const p2 = [];
    if (t2.pagesDefinition.internal.lastPage !== u)
      return [];
    h.features.length > 0 && void 0 === h.features[0].attributes[t2.pagesDefinition.generatedOid] && (t2.pagesDefinition.generatedOid = t2.pagesDefinition.generatedOid.toLowerCase());
    for (let e3 = 0; e3 < h.features.length; e3++)
      t2.pagesDefinition.internal.set[o + e3] = h.features[e3].attributes[t2.pagesDefinition.generatedOid];
    for (let a4 = 0; a4 < h.features.length; a4++)
      p2.push(new c$1({ attributes: h.features[a4].attributes, geometry: null }));
    return true === t2.pagesDefinition.useOIDpagination ? 0 === h.features.length ? t2.pagesDefinition.internal.fullyResolved = true : t2.pagesDefinition.internal.lastMaxId = h.features[h.features.length - 1].attributes[t2.pagesDefinition.generatedOid] : (void 0 === h.exceededTransferLimit && h.features.length !== t2.pagesDefinition.resultRecordCount || false === h.exceededTransferLimit) && (t2.pagesDefinition.internal.fullyResolved = true), t2.pagesDefinition.internal.lastRetrieved = l2 + h.features.length, t2.pagesDefinition.internal.lastPage += t2.pagesDefinition.resultRecordCount, p2;
  }
  static create(e3, t2, i, r2, s2) {
    const a4 = new Ze({ url: e3, outFields: null === t2 ? ["*"] : t2 });
    return new T({ layer: a4, spatialReference: i, lrucache: r2, interceptor: s2 });
  }
  relationshipMetaData() {
    return this._layer && this._layer.source && this._layer.source.sourceJSON?.relationships ? this._layer.source.sourceJSON.relationships : [];
  }
  serviceUrl() {
    return J(this._layer.parsedUrl.path);
  }
  async queryAttachments(e3, t2, i, a4, n2) {
    const l2 = this._layer.capabilities;
    if (l2?.data.supportsAttachment && l2?.operations.supportsQueryAttachments) {
      const l3 = { objectIds: [e3], returnMetadata: n2 };
      (t2 && t2 > 0 || i && i > 0) && (l3.size = [t2 && t2 > 0 ? t2 : 0, i && i > 0 ? i : t2 + 1]), a4 && a4.length > 0 && (l3.attachmentTypes = a4), this.featureSetQueryInterceptor && this.featureSetQueryInterceptor.preLayerQueryCallback({ layer: this._layer, query: l3, method: "attachments" });
      const o = await this._layer.queryAttachments(l3), u = [];
      return o && o[e3] && o[e3].forEach((t3) => {
        const i2 = this._layer.parsedUrl.path + "/" + e3.toString() + "/attachments/" + t3.id.toString();
        let a5 = null;
        n2 && t3.exifInfo && (a5 = N$2.convertJsonToArcade(t3.exifInfo, "system", true)), u.push(new t$3(t3.id, t3.name, t3.contentType, t3.size, i2, a5, t3.keywords ?? null));
      }), u;
    }
    return [];
  }
  async queryRelatedFeatures(t2) {
    const r$12 = { f: "json", relationshipId: t2.relationshipId.toString(), definitionExpression: t2.where, outFields: t2.outFields?.join(","), returnGeometry: t2.returnGeometry.toString() };
    void 0 !== t2.resultOffset && null !== t2.resultOffset && (r$12.resultOffset = t2.resultOffset.toString()), void 0 !== t2.resultRecordCount && null !== t2.resultRecordCount && (r$12.resultRecordCount = t2.resultRecordCount.toString()), t2.orderByFields && (r$12.orderByFields = t2.orderByFields.join(",")), t2.objectIds && t2.objectIds.length > 0 && (r$12.objectIds = t2.objectIds.join(",")), t2.outSpatialReference && (r$12.outSR = T$4(t2.outSpatialReference)), this.featureSetQueryInterceptor && this.featureSetQueryInterceptor.preRequestCallback({ layer: this._layer, queryPayload: r$12, method: "relatedrecords", url: this._layer.parsedUrl.path + "/queryRelatedRecords" });
    const s2 = await j$1(this._layer.parsedUrl.path + "/queryRelatedRecords", { responseType: "json", query: r$12 });
    if (s2.data) {
      const t3 = {}, i = s2.data;
      if (i?.relatedRecordGroups) {
        const r2 = i.spatialReference;
        for (const s3 of i.relatedRecordGroups) {
          const a4 = s3.objectId, n2 = [];
          for (const t4 of s3.relatedRecords) {
            t4.geometry && (t4.geometry.spatialReference = r2);
            const i2 = new c$1({ geometry: t4.geometry ? p$1(t4.geometry) : null, attributes: t4.attributes });
            n2.push(i2);
          }
          t3[a4] = { features: n2, exceededTransferLimit: true === i.exceededTransferLimit };
        }
      }
      return t3;
    }
    throw new s$2(r.InvalidRequest);
  }
  async getFeatureByObjectId(e3, t2) {
    const i = new b$2();
    i.outFields = t2, i.returnGeometry = false, i.outSpatialReference = this.spatialReference, i.where = this.objectIdField + "=" + e3.toString(), this.datesInUnknownTimezone && (i.timeReferenceUnknownClient = true), this.featureSetQueryInterceptor && this.featureSetQueryInterceptor.preLayerQueryCallback({ layer: this._layer, query: i, method: "execute" });
    const r2 = await s$3(this._layer.parsedUrl.path, i);
    return 1 === r2.features.length ? r2.features[0] : null;
  }
  async getIdentityUser() {
    await this.load();
    const e3 = t$4?.findCredential(this._layer.url);
    return e3 ? e3.userId : null;
  }
  async getOwningSystemUrl() {
    await this.load();
    const e3 = t$4?.findServerInfo(this._layer.url);
    if (e3)
      return e3.owningSystemUrl;
    let r2 = this._layer.url;
    const s2 = r2.toLowerCase().indexOf("/rest/services");
    if (r2 = s2 > -1 ? r2.substring(0, s2) : r2, r2) {
      r2 += "/rest/info";
      try {
        const e4 = await j$1(r2, { query: { f: "json" } });
        let t2 = "";
        return e4.data?.owningSystemUrl && (t2 = e4.data.owningSystemUrl), t2;
      } catch (a4) {
        return "";
      }
    }
    return "";
  }
  getDataSourceFeatureSet() {
    const e3 = new T({ layer: this._layer, spatialReference: this.spatialReference ?? void 0, outFields: this._overrideFields ?? void 0, includeGeometry: !this._removeGeometry, lrucache: this.recentlyUsedQueries ?? void 0, interceptor: this.featureSetQueryInterceptor ?? void 0 });
    return e3._useDefinitionExpression = false, e3;
  }
  get preferredTimeZone() {
    return this._layer.preferredTimeZone ?? null;
  }
  get dateFieldsTimeZone() {
    return this._layer.dateFieldsTimeZone ?? null;
  }
  get datesInUnknownTimezone() {
    return this._layer.datesInUnknownTimezone;
  }
  get editFieldsInfo() {
    return this._layer.editFieldsInfo ?? null;
  }
  get timeInfo() {
    return this._layer.timeInfo ?? null;
  }
  async getFeatureSetInfo() {
    if (this.fsetInfo)
      return this.fsetInfo;
    let e3 = null, { parsedUrl: { path: t2 }, serviceItemId: r2 = null } = this._layer;
    if (t2) {
      const s3 = await j$1(t2, { responseType: "json", query: { f: "json" } });
      e3 = s3?.data?.name ?? null, r2 = s3?.data?.serviceItemId ?? null;
    }
    const s2 = this._layer.title && null !== (this._layer.parent ?? null);
    return this.featureSetInfo = { layerId: this._layer.layerId, layerName: "" === e3 ? null : e3, itemId: "" === r2 ? null : r2, serviceLayerUrl: "" === t2 ? null : t2, webMapLayerId: s2 ? this._layer.id ?? null : null, webMapLayerTitle: s2 ? this._layer.title ?? null : null, className: null, objectClassId: null }, this.fsetInfo;
  }
};
class f extends x {
  constructor(e3) {
    super(e3), this.declaredClass = "esri.arcade.featureset.sources.FeatureLayerMemory", this._removeGeometry = false, this._overrideFields = null, this._forceIsTable = false, e3.spatialReference && (this.spatialReference = e3.spatialReference), this._transparent = true, this._maxProcessing = 1e3, this._layer = e3.layer, this._wset = null, true === e3.isTable && (this._forceIsTable = true), void 0 !== e3.outFields && (this._overrideFields = e3.outFields), void 0 !== e3.includeGeometry && (this._removeGeometry = false === e3.includeGeometry);
  }
  _maxQueryRate() {
    return P;
  }
  end() {
    return this._layer;
  }
  optimisePagingFeatureQueries() {
  }
  async loadImpl() {
    return true === this._layer.loaded ? (this._initialiseFeatureSet(), this) : (await this._layer.load(), this._initialiseFeatureSet(), this);
  }
  get gdbVersion() {
    return "";
  }
  _initialiseFeatureSet() {
    if (null == this.spatialReference && (this.spatialReference = this._layer.spatialReference), this.geometryType = this._layer.geometryType, this.fields = this._layer.fields.slice(0), null !== this._overrideFields)
      if (1 === this._overrideFields.length && "*" === this._overrideFields[0])
        this._overrideFields = null;
      else {
        const e3 = [], t2 = [];
        for (const r2 of this.fields)
          if ("oid" === r2.type)
            e3.push(r2), t2.push(r2.name);
          else
            for (const s2 of this._overrideFields)
              if (s2.toLowerCase() === r2.name.toLowerCase()) {
                e3.push(r2), t2.push(r2.name);
                break;
              }
        this.fields = e3, this._overrideFields = t2;
      }
    this.objectIdField = this._layer.objectIdField;
    for (const e3 of this.fields)
      "global-id" === e3.type && (this.globalIdField = e3.name);
    this._databaseType = l.Standardised, this.hasZ = true === this._layer?.capabilities?.data?.supportsZ, this.hasM = true === this._layer?.capabilities?.data?.supportsM, this._layer instanceof ae ? (this.typeIdField = this._layer.subtypeField ?? "", this.types = this._layer.subtypes) : (this.typeIdField = this._layer.typeIdField ?? "", this.types = this._layer.types);
  }
  isTable() {
    return this._forceIsTable || this._layer.isTable || "table" === this._layer.type || !this._layer.geometryType;
  }
  _isInFeatureSet() {
    return s$1.InFeatureSet;
  }
  _candidateIdTransform(e3) {
    return e3;
  }
  async _getSet(e3) {
    if (null === this._wset) {
      await this._ensureLoaded();
      const t2 = await this._getFilteredSet("", null, null, null, e3);
      return this._wset = t2, t2;
    }
    return this._wset;
  }
  _changeFeature(t2) {
    const r2 = {};
    for (const e3 of this.fields)
      r2[e3.name] = t2.attributes[e3.name];
    return new c$1({ geometry: true === this._removeGeometry ? null : t2.geometry, attributes: r2 });
  }
  async _getFilteredSet(e3, t2, r2, s2, a4) {
    let n2 = "", u = false;
    if (null !== s2 && (n2 = s2.constructClause(), u = true), this.isTable() && t2 && null !== e3 && "" !== e3) {
      return new t$1([], [], true, null);
    }
    const h = new b$2();
    h.returnZ = this.hasZ, h.returnM = this.hasM, h.where = null === r2 ? null === t2 ? "1=1" : "" : f$2(r2, l.Standardised), h.spatialRelationship = this._makeRelationshipEnum(e3), h.outSpatialReference = this.spatialReference, h.orderByFields = "" !== n2 ? n2.split(",") : null, h.geometry = null === t2 ? null : t2, h.returnGeometry = true, h.relationParameter = this._makeRelationshipParam(e3);
    const y2 = await this._layer.queryFeatures(h);
    if (null === y2)
      return new t$1([], [], u, null);
    this._checkCancelled(a4);
    const c2 = [];
    y2.features.forEach((e4) => {
      const t3 = e4.attributes[this._layer.objectIdField];
      c2.push(t3), this._featureCache[t3] = this._changeFeature(e4);
    });
    return new t$1([], c2, u, null);
  }
  _makeRelationshipEnum(e3) {
    if (e3.includes("esriSpatialRelRelation"))
      return "relation";
    switch (e3) {
      case "esriSpatialRelRelation":
        return "relation";
      case "esriSpatialRelIntersects":
        return "intersects";
      case "esriSpatialRelContains":
        return "contains";
      case "esriSpatialRelOverlaps":
        return "overlaps";
      case "esriSpatialRelWithin":
        return "within";
      case "esriSpatialRelTouches":
        return "touches";
      case "esriSpatialRelCrosses":
        return "crosses";
      case "esriSpatialRelEnvelopeIntersects":
        return "envelope-intersects";
    }
    return e3;
  }
  _makeRelationshipParam(e3) {
    return e3.includes("esriSpatialRelRelation") ? e3.split(":")[1] : "";
  }
  async _queryAllFeatures() {
    if (this._wset)
      return this._wset;
    const e3 = new b$2();
    if (e3.where = "1=1", await this._ensureLoaded(), this._layer.source && this._layer.source.items) {
      const e4 = [];
      return this._layer.source.items.forEach((t3) => {
        const r3 = t3.attributes[this._layer.objectIdField];
        e4.push(r3), this._featureCache[r3] = this._changeFeature(t3);
      }), this._wset = new t$1([], e4, false, null), this._wset;
    }
    e3.returnZ = this.hasZ, e3.returnM = this.hasM;
    const t2 = await this._layer.queryFeatures(e3), r2 = [];
    return t2.features.forEach((e4) => {
      const t3 = e4.attributes[this._layer.objectIdField];
      r2.push(t3), this._featureCache[t3] = this._changeFeature(e4);
    }), this._wset = new t$1([], r2, false, null), this._wset;
  }
  async _getFeatures(e3, s2, i) {
    const a4 = [];
    -1 !== s2 && void 0 === this._featureCache[s2] && a4.push(s2);
    for (let t2 = e3._lastFetchedIndex; t2 < e3._known.length && (e3._lastFetchedIndex += 1, !(void 0 === this._featureCache[e3._known[t2]] && (e3._known[t2] !== s2 && a4.push(e3._known[t2]), a4.length > i))); t2++)
      ;
    if (0 === a4.length)
      return "success";
    throw new s$2(r.MissingFeatures);
  }
  async _refineSetBlock(e3) {
    return e3;
  }
  async _stat() {
    return { calculated: false };
  }
  async _canDoAggregates() {
    return false;
  }
  relationshipMetaData() {
    return [];
  }
  static _cloneAttr(e3) {
    const t2 = {};
    for (const r2 in e3)
      t2[r2] = e3[r2];
    return t2;
  }
  nativeCapabilities() {
    return { title: this._layer.title ?? "", canQueryRelated: false, source: this, capabilities: this._layer.capabilities, databaseType: this._databaseType, requestStandardised: true };
  }
  static create(e3, t2) {
    let r2 = e3.layerDefinition.objectIdField;
    const s2 = e3.layerDefinition.typeIdField ?? "", i = [];
    if (e3.layerDefinition.types)
      for (const u of e3.layerDefinition.types)
        i.push(n$6.fromJSON(u));
    let a4 = e3.layerDefinition.geometryType;
    void 0 === a4 && (a4 = e3.featureSet.geometryType || "");
    let l2 = e3.featureSet.features;
    const n2 = t2.toJSON();
    if (!r2) {
      let t3 = false;
      for (const s3 of e3.layerDefinition.fields)
        if ("oid" === s3.type || "esriFieldTypeOID" === s3.type) {
          r2 = s3.name, t3 = true;
          break;
        }
      if (false === t3) {
        let t4 = "FID", s3 = true, i2 = 0;
        for (; s3; ) {
          let r3 = true;
          for (const s4 of e3.layerDefinition.fields)
            if (s4.name === t4) {
              r3 = false;
              break;
            }
          true === r3 ? s3 = false : (i2++, t4 = "FID" + i2.toString());
        }
        e3.layerDefinition.fields.push({ type: "esriFieldTypeOID", name: t4, alias: t4 });
        const a5 = [];
        for (let r3 = 0; r3 < l2.length; r3++)
          a5.push({ geometry: e3.featureSet.features[r3].geometry, attributes: e3.featureSet.features[r3].attributes ? this._cloneAttr(e3.featureSet.features[r3].attributes) : {} }), a5[r3].attributes[t4] = r3;
        l2 = a5, r2 = t4;
      }
    }
    const o = [];
    for (const u of e3.layerDefinition.fields)
      u instanceof y$2 ? o.push(u) : o.push(y$2.fromJSON(u));
    let y2 = a4;
    switch (y2 || (y2 = ""), y2) {
      case "esriGeometryPoint":
        y2 = "point";
        break;
      case "esriGeometryPolyline":
        y2 = "polyline";
        break;
      case "esriGeometryPolygon":
        y2 = "polygon";
        break;
      case "esriGeometryEnvelope":
        y2 = "extent";
        break;
      case "esriGeometryMultipoint":
        y2 = "multipoint";
        break;
      case "":
      case "esriGeometryNull":
        y2 = "esriGeometryNull";
    }
    if ("esriGeometryNull" !== y2)
      for (const h of l2)
        h.geometry && h.geometry instanceof p$2 == false && (h.geometry.type = y2, void 0 === h.geometry.spatialReference && (h.geometry.spatialReference = n2));
    else
      for (const u of l2)
        u.geometry && (u.geometry = null);
    const p2 = { outFields: ["*"], source: l2, fields: o, hasZ: true === e3?.layerDefinition?.hasZ || true === e3?.featureSet?.hasZ, hasM: true === e3?.layerDefinition?.hasM || true === e3?.featureSet?.hasM, types: i, typeIdField: s2, objectIdField: r2, spatialReference: t2 }, m2 = "esriGeometryNull" === y2 || null === y2;
    m2 || (p2.geometryType = y2);
    const _ = new Ze(p2);
    return new f({ layer: _, spatialReference: t2, isTable: m2 });
  }
  async queryAttachments() {
    return [];
  }
  async getFeatureByObjectId(e3) {
    const t2 = new b$2();
    t2.where = this.objectIdField + "=" + e3.toString(), t2.returnZ = this.hasZ, t2.returnM = this.hasM;
    const r2 = await this._layer.queryFeatures(t2);
    return 1 === r2.features.length ? r2.features[0] : null;
  }
  async getOwningSystemUrl() {
    return "";
  }
  async getIdentityUser() {
    return "";
  }
  get preferredTimeZone() {
    return this._layer.preferredTimeZone ?? null;
  }
  get dateFieldsTimeZone() {
    return this._layer.dateFieldsTimeZone ?? null;
  }
  get datesInUnknownTimezone() {
    return this._layer?.datesInUnknownTimezone;
  }
  get editFieldsInfo() {
    return this._layer?.editFieldsInfo;
  }
  get timeInfo() {
    return this._layer?.timeInfo;
  }
  async getFeatureSetInfo() {
    const e3 = this._layer.title && this._layer.parent;
    return this.fsetInfo ?? { layerId: null, layerName: null, itemId: null, serviceLayerUrl: null, webMapLayerId: e3 ? this._layer.id ?? null : null, webMapLayerTitle: e3 ? this._layer.title ?? null : null, className: null, objectClassId: null };
  }
}
class d extends x {
  constructor(e3) {
    super(e3), this.declaredClass = "esri.arcade.featureset.sources.FeatureLayerRelated", this._findObjectId = -1, this._requestStandardised = false, this._removeGeometry = false, this._overrideFields = null, this.featureObjectId = null, e3.spatialReference && (this.spatialReference = e3.spatialReference), this._transparent = true, this._maxProcessing = 1e3, this._layer = e3.layer, this._wset = null, this._findObjectId = e3.objectId, this.featureObjectId = e3.objectId, this.relationship = e3.relationship, this._relatedLayer = e3.relatedLayer, void 0 !== e3.outFields && (this._overrideFields = e3.outFields), void 0 !== e3.includeGeometry && (this._removeGeometry = false === e3.includeGeometry);
  }
  _maxQueryRate() {
    return P;
  }
  end() {
    return this._layer;
  }
  optimisePagingFeatureQueries() {
  }
  async loadImpl() {
    return await Promise.all([this._layer.load(), this._relatedLayer?.load()]), this._initialiseFeatureSet(), this;
  }
  nativeCapabilities() {
    return this._relatedLayer.nativeCapabilities();
  }
  _initialiseFeatureSet() {
    if (null == this.spatialReference && (this.spatialReference = this._layer.spatialReference), this.geometryType = this._relatedLayer.geometryType, this.fields = this._relatedLayer.fields.slice(0), this.hasZ = this._relatedLayer.hasZ, this.hasM = this._relatedLayer.hasM, null !== this._overrideFields)
      if (1 === this._overrideFields.length && "*" === this._overrideFields[0])
        this._overrideFields = null;
      else {
        const e4 = [], t2 = [];
        for (const r2 of this.fields)
          if ("oid" === r2.type)
            e4.push(r2), t2.push(r2.name);
          else
            for (const i of this._overrideFields)
              if (i.toLowerCase() === r2.name.toLowerCase()) {
                e4.push(r2), t2.push(r2.name);
                break;
              }
        this.fields = e4, this._overrideFields = t2;
      }
    const e3 = this._layer.nativeCapabilities();
    e3 && (this._databaseType = e3.databaseType, this._requestStandardised = e3.requestStandardised), this.objectIdField = this._relatedLayer.objectIdField, this.globalIdField = this._relatedLayer.globalIdField, this.hasM = this._relatedLayer.supportsM, this.hasZ = this._relatedLayer.supportsZ, this.typeIdField = this._relatedLayer.typeIdField, this.types = this._relatedLayer.types;
  }
  async databaseType() {
    return await this._relatedLayer.databaseType(), this._databaseType = this._relatedLayer._databaseType, this._databaseType;
  }
  isTable() {
    return this._relatedLayer.isTable();
  }
  _isInFeatureSet() {
    return s$1.InFeatureSet;
  }
  _candidateIdTransform(e3) {
    return e3;
  }
  async _getSet(e3) {
    if (null === this._wset) {
      await this._ensureLoaded();
      const t2 = await this._getFilteredSet("", null, null, null, e3);
      return this._wset = t2, t2;
    }
    return this._wset;
  }
  _changeFeature(t2) {
    const r2 = {};
    for (const e3 of this.fields)
      r2[e3.name] = t2.attributes[e3.name];
    return new c$1({ geometry: true === this._removeGeometry ? null : t2.geometry, attributes: r2 });
  }
  async _getFilteredSet(e3, t2, r2, i, a4) {
    if (await this.databaseType(), this.isTable() && t2 && null !== e3 && "" !== e3) {
      return new t$1([], [], true, null);
    }
    const n2 = this._layer.nativeCapabilities();
    if (false === n2.canQueryRelated) {
      return new t$1([], [], true, null);
    }
    if (n2.capabilities?.queryRelated && n2.capabilities.queryRelated.supportsPagination)
      return this._getFilteredSetUsingPaging(e3, t2, r2, i, a4);
    let d2 = "", o = false;
    null !== i && n2.capabilities?.queryRelated && true === n2.capabilities.queryRelated.supportsOrderBy && (d2 = i.constructClause(), o = true);
    const u = new d$3();
    u.objectIds = [this._findObjectId];
    const h = null !== this._overrideFields ? this._overrideFields : this._fieldsIncludingObjectId(this._relatedLayer.fields ? this._relatedLayer.fields.map((e4) => e4.name) : ["*"]);
    u.outFields = h, u.relationshipId = this.relationship.id, u.where = "1=1";
    let c2 = true;
    true === this._removeGeometry && (c2 = false), u.returnGeometry = c2, this._requestStandardised && (u.sqlFormat = "standard"), u.outSpatialReference = this.spatialReference, u.orderByFields = "" !== d2 ? d2.split(",") : null;
    const y2 = await n2.source.queryRelatedFeatures(u);
    this._checkCancelled(a4);
    const p2 = y2[this._findObjectId] ? y2[this._findObjectId].features : [], _ = [];
    for (let s2 = 0; s2 < p2.length; s2++)
      this._featureCache[p2[s2].attributes[this._relatedLayer.objectIdField]] = p2[s2], _.push(p2[s2].attributes[this._relatedLayer.objectIdField]);
    const f2 = t2 && null !== e3 && "" !== e3, g2 = null != r2;
    return new t$1(f2 || g2 ? _ : [], f2 || g2 ? [] : _, o, null);
  }
  _fieldsIncludingObjectId(e3) {
    if (null === e3)
      return [this.objectIdField];
    const t2 = e3.slice(0);
    if (t2.includes("*"))
      return t2;
    let r2 = false;
    for (const i of t2)
      if (i.toUpperCase() === this.objectIdField.toUpperCase()) {
        r2 = true;
        break;
      }
    return false === r2 && t2.push(this.objectIdField), t2;
  }
  async _getFilteredSetUsingPaging(e3, t2, r2, i, a4) {
    let n2 = "", l2 = false;
    const d2 = this._layer.nativeCapabilities();
    null !== i && d2?.capabilities?.queryRelated && true === d2.capabilities.queryRelated.supportsOrderBy && (n2 = i.constructClause(), l2 = true), await this.databaseType();
    const o = "1=1";
    let u = this._maxQueryRate();
    const h = d2.capabilities?.query.maxRecordCount;
    null != h && h < u && (u = h);
    const c2 = t2 && null !== e3 && "" !== e3, y2 = null != r2;
    let p2 = null, _ = true;
    true === this._removeGeometry && (_ = false);
    const f2 = null !== this._overrideFields ? this._overrideFields : this._fieldsIncludingObjectId(this._relatedLayer.fields ? this._relatedLayer.fields.map((e4) => e4.name) : ["*"]);
    return p2 = new t$1(c2 || y2 ? ["GETPAGES"] : [], c2 || y2 ? [] : ["GETPAGES"], l2, { outFields: f2.join(","), resultRecordCount: u, resultOffset: 0, objectIds: [this._findObjectId], where: o, orderByFields: n2, returnGeometry: _, returnIdsOnly: "false", internal: { set: [], lastRetrieved: 0, lastPage: 0, fullyResolved: false } }), await this._expandPagedSet(p2, u, 0, 0, a4), p2;
  }
  _expandPagedSet(e3, t2, r2, i, s2) {
    return this._expandPagedSetFeatureSet(e3, t2, r2, i, s2);
  }
  _clonePageDefinition(e3) {
    return null === e3 ? null : true !== e3.groupbypage ? { groupbypage: false, outFields: e3.outFields, resultRecordCount: e3.resultRecordCount, resultOffset: e3.resultOffset, where: e3.where, objectIds: e3.objectIds, orderByFields: e3.orderByFields, returnGeometry: e3.returnGeometry, returnIdsOnly: e3.returnIdsOnly, internal: e3.internal } : { groupbypage: true, outFields: e3.outFields, resultRecordCount: e3.resultRecordCount, useOIDpagination: e3.useOIDpagination, generatedOid: e3.generatedOid, groupByFieldsForStatistics: e3.groupByFieldsForStatistics, resultOffset: e3.resultOffset, outStatistics: e3.outStatistics, geometry: e3.geometry, where: e3.where, objectIds: e3.objectIds, orderByFields: e3.orderByFields, returnGeometry: e3.returnGeometry, returnIdsOnly: e3.returnIdsOnly, internal: e3.internal };
  }
  async _getPhysicalPage(e3, t2, r2) {
    const i = e3.pagesDefinition.internal.lastRetrieved, s2 = i, a4 = e3.pagesDefinition.internal.lastPage, n2 = this._layer.nativeCapabilities(), d2 = new d$3();
    true === this._requestStandardised && (d2.sqlFormat = "standard"), d2.relationshipId = this.relationship.id, d2.objectIds = e3.pagesDefinition.objectIds, d2.resultOffset = e3.pagesDefinition.internal.lastPage, d2.resultRecordCount = e3.pagesDefinition.resultRecordCount, d2.outFields = e3.pagesDefinition.outFields.split(","), d2.where = e3.pagesDefinition.where, d2.orderByFields = "" !== e3.pagesDefinition.orderByFields ? e3.pagesDefinition.orderByFields.split(",") : null, d2.returnGeometry = e3.pagesDefinition.returnGeometry, d2.outSpatialReference = this.spatialReference;
    const o = await n2.source.queryRelatedFeatures(d2);
    if (this._checkCancelled(r2), e3.pagesDefinition.internal.lastPage !== a4)
      return 0;
    const u = o[this._findObjectId] ? o[this._findObjectId].features : [];
    for (let l2 = 0; l2 < u.length; l2++)
      e3.pagesDefinition.internal.set[s2 + l2] = u[l2].attributes[this._relatedLayer.objectIdField];
    for (let l2 = 0; l2 < u.length; l2++)
      this._featureCache[u[l2].attributes[this._relatedLayer.objectIdField]] = u[l2];
    const h = !o[this._findObjectId] || false === o[this._findObjectId].exceededTransferLimit;
    return u.length !== e3.pagesDefinition.resultRecordCount && h && (e3.pagesDefinition.internal.fullyResolved = true), e3.pagesDefinition.internal.lastRetrieved = i + u.length, e3.pagesDefinition.internal.lastPage += e3.pagesDefinition.resultRecordCount, u.length;
  }
  async _getFeatures(e3, i, s2, a4) {
    const n2 = [];
    -1 !== i && void 0 === this._featureCache[i] && n2.push(i);
    const l2 = this._maxQueryRate();
    if (true === this._checkIfNeedToExpandKnownPage(e3, l2))
      return await this._expandPagedSet(e3, l2, 0, 0, a4), this._getFeatures(e3, i, s2, a4);
    let d2 = 0;
    for (let t2 = e3._lastFetchedIndex; t2 < e3._known.length && (d2++, d2 <= s2 && (e3._lastFetchedIndex += 1), !("GETPAGES" !== e3._known[t2] && void 0 === this._featureCache[e3._known[t2]] && (e3._known[t2] !== i && n2.push(e3._known[t2]), n2.length > s2))) && !(d2 >= s2 && 0 === n2.length); t2++)
      ;
    if (0 === n2.length)
      return "success";
    throw new s$2(r.MissingFeatures);
  }
  async _refineSetBlock(e3, t2, r2) {
    return e3;
  }
  async _stat(e3, t2, r2, i, s2, a4, n2) {
    return { calculated: false };
  }
  get gdbVersion() {
    return this._relatedLayer.gdbVersion;
  }
  async _canDoAggregates(e3, t2, r2, i, s2) {
    return false;
  }
  relationshipMetaData() {
    return this._relatedLayer.relationshipMetaData();
  }
  serviceUrl() {
    return this._relatedLayer.serviceUrl();
  }
  queryAttachments(e3, t2, r2, i, s2) {
    return this._relatedLayer.queryAttachments(e3, t2, r2, i, s2);
  }
  getFeatureByObjectId(e3, t2) {
    return this._relatedLayer.getFeatureByObjectId(e3, t2);
  }
  getOwningSystemUrl() {
    return this._relatedLayer.getOwningSystemUrl();
  }
  getIdentityUser() {
    return this._relatedLayer.getIdentityUser();
  }
  getDataSourceFeatureSet() {
    return this._relatedLayer;
  }
  get preferredTimeZone() {
    return this._relatedLayer?.preferredTimeZone ?? null;
  }
  get dateFieldsTimeZone() {
    return this._relatedLayer?.dateFieldsTimeZone ?? null;
  }
  get datesInUnknownTimezone() {
    return this._relatedLayer?.datesInUnknownTimezone;
  }
  get editFieldsInfo() {
    return this._relatedLayer?.editFieldsInfo ?? null;
  }
  get timeInfo() {
    return this._relatedLayer?.timeInfo ?? null;
  }
  async getFeatureSetInfo() {
    return this.fsetInfo ?? this._layer.featureSetInfo;
  }
}
function L2() {
  null === a$3.applicationCache && (a$3.applicationCache = new a$3());
}
async function I2(e3, t2) {
  if (a$3.applicationCache) {
    const r2 = a$3.applicationCache.getLayerInfo(e3);
    if (r2) {
      const a4 = await r2;
      return new Ze({ url: e3, outFields: t2, sourceJSON: a4 });
    }
    const n2 = new Ze({ url: e3, outFields: t2 }), i = (async () => (await n2.load(), n2.sourceJSON))();
    if (a$3.applicationCache) {
      a$3.applicationCache.setLayerInfo(e3, i);
      try {
        return await i, n2;
      } catch (a4) {
        throw a$3.applicationCache.clearLayerInfo(e3), a4;
      }
    }
    return await i, n2;
  }
  return new Ze({ url: e3, outFields: t2 });
}
async function F(e3, t2, a4, r2, n2, i = null) {
  return g(await I2(e3, ["*"]), t2, a4, r2, n2, i);
}
function g(e3, t2 = null, r2 = null, n2 = true, i = null, s2 = null) {
  if (e3 instanceof Ze || Pe(e3)) {
    const a4 = { layer: e3, spatialReference: t2, outFields: r2, includeGeometry: n2, lrucache: i, interceptor: s2 };
    return true == !(e3.url || !e3.source) ? new f(a4) : new T$1(a4);
  }
  const l2 = g(e3.parent, t2, r2, n2, i, s2);
  return l2.filter(x$1.create(e3.parent.subtypeField + "=" + e3.subtypeCode.toString(), e3.parent.fieldsIndex, l2.dateFieldsTimeZoneDefaultUTC));
}
async function A(t2) {
  if (null !== a$3.applicationCache) {
    const e3 = a$3.applicationCache.getLayerInfo(t2);
    if (null !== e3)
      return e3;
  }
  const a4 = (async () => {
    const a5 = await j$1(t2, { responseType: "json", query: { f: "json" } });
    return a5.data ? a5.data : null;
  })();
  if (null !== a$3.applicationCache) {
    a$3.applicationCache.setLayerInfo(t2, a4);
    try {
      return await a4;
    } catch (r2) {
      throw a$3.applicationCache.clearLayerInfo(t2), r2;
    }
  }
  return a4;
}
async function N(t2, a4) {
  const r$12 = "QUERYDATAELEMTS:" + a4.toString() + ":" + t2;
  if (null !== a$3.applicationCache) {
    const e3 = a$3.applicationCache.getLayerInfo(r$12);
    if (null !== e3)
      return e3;
  }
  const n2 = (async () => {
    const r$13 = await j$1(t2 + "/queryDataElements", { method: "post", responseType: "json", query: { layers: JSON.stringify([a4.toString()]), f: "json" } });
    if (r$13.data) {
      const e3 = r$13.data;
      if (e3.layerDataElements?.[0])
        return e3.layerDataElements[0];
    }
    throw new s$2(r.DataElementsNotFound);
  })();
  if (null !== a$3.applicationCache) {
    a$3.applicationCache.setLayerInfo(r$12, n2);
    try {
      return await n2;
    } catch (i) {
      throw a$3.applicationCache.clearLayerInfo(r$12), i;
    }
  }
  return n2;
}
async function C(t2) {
  if (null !== a$3.applicationCache) {
    const e3 = a$3.applicationCache.getLayerInfo(t2);
    if (null !== e3)
      return e3;
  }
  const a4 = (async () => {
    const a5 = await j$1(t2, { responseType: "json", query: { f: "json" } });
    if (a5.data) {
      const e3 = a5.data;
      return e3.layers || (e3.layers = []), e3.tables || (e3.tables = []), e3;
    }
    return { layers: [], tables: [] };
  })();
  if (null !== a$3.applicationCache) {
    a$3.applicationCache.setLayerInfo(t2, a4);
    try {
      return await a4;
    } catch (r2) {
      throw a$3.applicationCache.clearLayerInfo(t2), r2;
    }
  }
  return a4;
}
async function T2(e3, t2) {
  const a4 = { metadata: null, networkId: -1, unVersion: 3, terminals: [], queryelem: null, layerNameLkp: {}, lkp: null }, r2 = await C(e3);
  if (a4.metadata = r2, void 0 !== r2.controllerDatasetLayers?.utilityNetworkLayerId && null !== r2.controllerDatasetLayers.utilityNetworkLayerId) {
    if (r2.layers)
      for (const e4 of r2.layers)
        a4.layerNameLkp[e4.id] = e4.name;
    if (r2.tables)
      for (const e4 of r2.tables)
        a4.layerNameLkp[e4.id] = e4.name;
    const n2 = r2.controllerDatasetLayers.utilityNetworkLayerId;
    a4.networkId = n2;
    const i = await N(e3, n2);
    if (i) {
      a4.queryelem = i, a4.queryelem?.dataElement && void 0 !== a4.queryelem.dataElement.schemaGeneration && (a4.unVersion = a4.queryelem.dataElement.schemaGeneration), a4.lkp = {}, a4.queryelem.dataElement.domainNetworks || (a4.queryelem.dataElement.domainNetworks = []);
      for (const e4 of a4.queryelem.dataElement.domainNetworks) {
        for (const t3 of e4.edgeSources ?? []) {
          const e5 = { layerId: t3.layerId, sourceId: t3.sourceId, className: a4.layerNameLkp[t3.layerId] ?? null };
          e5.className && (a4.lkp[e5.className] = e5);
        }
        for (const t3 of e4.junctionSources ?? []) {
          const e5 = { layerId: t3.layerId, sourceId: t3.sourceId, className: a4.layerNameLkp[t3.layerId] ?? null };
          e5.className && (a4.lkp[e5.className] = e5);
        }
      }
      if (a4.queryelem.dataElement.terminalConfigurations)
        for (const e4 of a4.queryelem.dataElement.terminalConfigurations)
          for (const t3 of e4.terminals)
            a4.terminals.push({ terminalId: t3.terminalId, terminalName: t3.terminalName });
      const r3 = await A(e3 + "/" + n2);
      if (void 0 !== r3.systemLayers?.associationsTableId && null !== r3.systemLayers.associationsTableId) {
        const n3 = [];
        a4.unVersion >= 4 && (n3.push("STATUS"), n3.push("PERCENTALONG"));
        let i2 = await F(e3 + "/" + r3.systemLayers.associationsTableId.toString(), t2, ["OBJECTID", "FROMNETWORKSOURCEID", "TONETWORKSOURCEID", "FROMGLOBALID", "TOGLOBALID", "TOTERMINALID", "FROMTERMINALID", "ASSOCIATIONTYPE", "ISCONTENTVISIBLE", "GLOBALID", ...n3], false, null, null);
        return await i2.load(), a4.unVersion >= 4 && (i2 = i2.filter(x$1.create("STATUS NOT IN (1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 23, 25, 26, 27, 28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 41, 42, 43, 44, 45, 46, 47, 49, 50, 51, 52, 53, 54, 55, 57, 58, 59, 60, 61, 62, 63)", i2.getFieldsIndex(), i2.dateFieldsTimeZoneDefaultUTC)), await i2.load()), { lkp: a4.lkp, associations: i2, unVersion: a4.unVersion, terminals: a4.terminals };
      }
      return { associations: null, unVersion: a4.unVersion, lkp: null, terminals: [] };
    }
    return { associations: null, unVersion: a4.unVersion, lkp: null, terminals: [] };
  }
  return { associations: null, unVersion: a4.unVersion, lkp: null, terminals: [] };
}
async function k2(e3, t2, a4, r2 = null, n2 = null, i = true, s2 = null, l2 = null) {
  let o = e3.serviceUrl();
  if (!o)
    return null;
  o = "/" === o.charAt(o.length - 1) ? o + t2.relatedTableId.toString() : o + "/" + t2.relatedTableId.toString();
  const u = await F(o, r2, n2, i, s2, l2);
  return new d({ layer: e3, relatedLayer: u, relationship: t2, objectId: a4, spatialReference: r2, outFields: n2, includeGeometry: i, lrucache: s2, interceptor: l2 });
}
c.registerAction(), O$1.registerAction(), a$2.registerAction(), f$5.registerAction(), a3.registerAction();
class b2 extends e$1 {
  constructor(e3, t2 = null, a4 = null, r2 = null) {
    super(), this._map = e3, this._overridespref = t2, this._lrucache = a4, this._interceptor = r2, this._instantLayers = [];
  }
  _makeAndAddFeatureSet(e3, t2 = true, a4 = null) {
    const r2 = g(e3, this._overridespref, null === a4 ? ["*"] : a4, t2, this._lrucache, this._interceptor);
    return this._instantLayers.push({ featureset: r2, opitem: e3, includeGeometry: t2, outFields: JSON.stringify(a4) }), r2;
  }
  async featureSetByName(e3, t2 = true, r2 = null) {
    if (void 0 !== this._map.loaded && void 0 !== this._map.load && false === this._map.loaded)
      return await this._map.load(), this.featureSetByName(e3, t2, r2);
    null === r2 && (r2 = ["*"]), r2 = (r2 = r2.slice(0)).sort();
    const n2 = JSON.stringify(r2);
    for (let a4 = 0; a4 < this._instantLayers.length; a4++) {
      const r3 = this._instantLayers[a4];
      if (r3.opitem.title === e3 && r3.includeGeometry === t2 && r3.outFields === n2)
        return this._instantLayers[a4].featureset;
    }
    const i = [], s2 = this._map.allLayers.find((t3) => {
      if (t3 instanceof Ze) {
        if (t3.title === e3)
          return true;
      } else if (Pe(t3)) {
        if (t3.title === e3)
          return true;
        i.push(t3);
      }
      return false;
    });
    if (s2)
      return this._makeAndAddFeatureSet(s2, t2, r2);
    if (this._map.tables) {
      const a4 = this._map.tables.find((t3) => !!(t3.title && t3.title === e3 || t3.title && t3.title === e3));
      if (a4) {
        if (a4 instanceof Ze)
          return this._makeAndAddFeatureSet(a4, t2, r2);
        if (a4._materializedTable)
          ;
        else {
          const e4 = a4.outFields ? a4 : { ...a4, outFields: ["*"] };
          a4._materializedTable = new Ze(e4);
        }
        return await a4._materializedTable.load(), this._makeAndAddFeatureSet(a4._materializedTable, t2, r2);
      }
    }
    for (const a4 of i) {
      if ("not-loaded" === a4.loadStatus || "loading" === a4.loadStatus)
        try {
          await a4.load();
        } catch (l2) {
        }
      const n3 = a4.sublayers.find((t3) => t3.title === e3);
      if (n3)
        return this._makeAndAddFeatureSet(n3, t2, r2);
    }
    return null;
  }
  async featureSetById(e3, t2 = true, r2 = ["*"]) {
    if (void 0 !== this._map.loaded && void 0 !== this._map.load && false === this._map.loaded)
      return await this._map.load(), this.featureSetById(e3, t2, r2);
    null === r2 && (r2 = ["*"]), r2 = (r2 = r2.slice(0)).sort();
    const n2 = JSON.stringify(r2);
    for (let a4 = 0; a4 < this._instantLayers.length; a4++) {
      const r3 = this._instantLayers[a4];
      if (r3.opitem.id === e3 && r3.includeGeometry === t2 && r3.outFields === n2)
        return this._instantLayers[a4].featureset;
    }
    const i = [], s2 = this._map.allLayers.find((t3) => {
      if (t3 instanceof Ze) {
        if (t3.id === e3)
          return true;
      } else if (Pe(t3)) {
        if (t3.id === e3)
          return true;
        i.push(t3);
      }
      return false;
    });
    if (s2)
      return this._makeAndAddFeatureSet(s2, t2, r2);
    if (this._map.tables) {
      const a4 = this._map.tables.find((t3) => t3.id === e3);
      if (a4) {
        if (a4 instanceof Ze)
          return this._makeAndAddFeatureSet(a4, t2, r2);
        if (a4._materializedTable)
          ;
        else {
          const e4 = { ...a4, outFields: ["*"] };
          a4._materializedTable = new Ze(e4);
        }
        return await a4._materializedTable.load(), this._makeAndAddFeatureSet(a4._materializedTable, t2, r2);
      }
    }
    for (const a4 of i) {
      if ("not-loaded" === a4.loadStatus || "loading" === a4.loadStatus)
        try {
          await a4.load();
        } catch (l2) {
        }
      const n3 = a4.sublayers.find((t3) => t3.id === e3);
      if (n3)
        return this._makeAndAddFeatureSet(n3, t2, r2);
    }
    return null;
  }
}
class O2 extends e$1 {
  constructor(e3, t2 = null, a4 = null, r2 = null) {
    super(), this._url = e3, this._overridespref = t2, this._lrucache = a4, this._interceptor = r2, this.metadata = null, this._instantLayers = [];
  }
  get url() {
    return this._url;
  }
  _makeAndAddFeatureSet(e3, t2 = true, a4 = null) {
    const r2 = g(e3, this._overridespref, null === a4 ? ["*"] : a4, t2, this._lrucache);
    return this._instantLayers.push({ featureset: r2, opitem: e3, includeGeometry: t2, outFields: JSON.stringify(a4) }), r2;
  }
  async _loadMetaData() {
    const e3 = await C(this._url);
    return this.metadata = e3, e3;
  }
  load() {
    return this._loadMetaData();
  }
  clone() {
    return new O2(this._url, this._overridespref, this._lrucache, this._interceptor);
  }
  async featureSetByName(e3, t2 = true, a4 = null) {
    null === a4 && (a4 = ["*"]), a4 = (a4 = a4.slice(0)).sort();
    const r2 = JSON.stringify(a4);
    for (let s2 = 0; s2 < this._instantLayers.length; s2++) {
      const a5 = this._instantLayers[s2];
      if (a5.opitem.title === e3 && a5.includeGeometry === t2 && a5.outFields === r2)
        return this._instantLayers[s2].featureset;
    }
    const n2 = await this._loadMetaData();
    let i = null;
    for (const s2 of n2.layers ?? [])
      s2.name === e3 && (i = s2);
    if (!i)
      for (const s2 of n2.tables ?? [])
        s2.name === e3 && (i = s2);
    if (i) {
      const e4 = await I2(this._url + "/" + i.id, ["*"]);
      return this._makeAndAddFeatureSet(e4, t2, a4);
    }
    return null;
  }
  async featureSetById(e3, t2 = true, a4 = ["*"]) {
    null === a4 && (a4 = ["*"]), a4 = (a4 = a4.slice(0)).sort();
    const r2 = JSON.stringify(a4);
    e3 = null != e3 ? e3.toString() : "";
    for (let s2 = 0; s2 < this._instantLayers.length; s2++) {
      const a5 = this._instantLayers[s2];
      if (a5.opitem.id === e3 && a5.includeGeometry === t2 && a5.outFields === r2)
        return this._instantLayers[s2].featureset;
    }
    const n2 = await this._loadMetaData();
    let i = null;
    for (const s2 of n2.layers ?? [])
      null !== s2.id && void 0 !== s2.id && s2.id.toString() === e3 && (i = s2);
    if (!i)
      for (const s2 of n2.tables ?? [])
        null !== s2.id && void 0 !== s2.id && s2.id.toString() === e3 && (i = s2);
    if (i) {
      const e4 = await I2(this._url + "/" + i.id, ["*"]);
      return this._makeAndAddFeatureSet(e4, t2, a4);
    }
    return null;
  }
}
function D2(e3, t2, a4 = null, r2 = null) {
  return new b2(e3, t2, a4, r2);
}
function E(e3, t2, a4 = null, r2 = null) {
  return new O2(e3, t2, a4, r2);
}
function j(e3, t2, n2, i, s2) {
  if (null === e3)
    return null;
  if (e3 instanceof Ze) {
    switch (t2) {
      case "datasource":
        return g(e3, s2, e3.outFields, true, n2, i).getDataSourceFeatureSet();
      case "parent":
      case "root":
        return g(e3, s2, e3.outFields, true, n2, i);
    }
    return null;
  }
  if (Pe(e3)) {
    switch (t2) {
      case "datasource":
        return g(e3, s2, e3.outFields, true, n2, i).getDataSourceFeatureSet();
      case "parent":
      case "root":
        return g(e3, s2, e3.outFields, true, n2, i);
    }
    return null;
  }
  if (Ye(e3)) {
    switch (t2) {
      case "datasource":
        return g(e3.parent, s2, e3.parent.outFields, true, n2, i).getDataSourceFeatureSet();
      case "parent":
      case "root":
        return g(e3, s2, e3.parent.outFields, true, n2, i);
    }
    return null;
  }
  if (e3 instanceof x)
    switch (t2) {
      case "datasource":
        return e3.getDataSourceFeatureSet();
      case "parent":
        return e3;
      case "root":
        return e3.getRootFeatureSet();
    }
  return null;
}
async function q(e3, t2, a4, r2, n2, i, s2, l2 = null) {
  if (a$3.applicationCache) {
    const o2 = a$3.applicationCache.getLayerInfo(e3 + ":" + i.url);
    if (o2) {
      const e4 = await o2;
      return g(new Ze({ url: J(e4.url) + "/" + t2, outFields: ["*"] }), a4, r2, n2, s2, l2);
    }
  }
  const o = new S$1({ id: e3, portal: i }).load();
  a$3.applicationCache && a$3.applicationCache.setLayerInfo(e3 + ":" + i.url, o);
  try {
    const e4 = await o;
    return g(new Ze({ url: J(e4.url ?? "") + "/" + t2, outFields: ["*"] }), a4, r2, n2, s2, l2);
  } catch (u) {
    throw a$3.applicationCache && a$3.applicationCache.clearLayerInfo(e3 + ":" + i.url), u;
  }
}
const featureSetUtils = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  constructAssociationMetaDataFeatureSetFromUrl: T2,
  constructFeatureSet: g,
  constructFeatureSetFromPortalItem: q,
  constructFeatureSetFromRelationship: k2,
  constructFeatureSetFromUrl: F,
  convertToFeatureSet: j,
  createFeatureSetCollectionFromMap: D2,
  createFeatureSetCollectionFromService: E,
  initialiseMetaDataCache: L2
}, Symbol.toStringTag, { value: "Module" }));
export {
  B,
  F,
  I$1 as I,
  L$1 as L,
  T2 as T,
  e2 as a,
  a$2 as b,
  c,
  a3 as d,
  e$1 as e,
  f,
  g,
  b$1 as h,
  k$1 as i,
  j,
  k2 as k,
  featureSetUtils as l,
  q
};
