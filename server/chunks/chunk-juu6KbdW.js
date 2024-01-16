import { x as x$2, n, t as t$1, s, a as r, r as r$1 } from "./chunk-ewxQmXoN.js";
import { D as D$1, ag as l, ah as f$3, ai as d$1, aj as g$2, ak as T$2, al as F$1, am as a$1, an as u$2, ao as G, ap as N$1, aq as s$1, ar as O$2, as as I$1, at as p$2, au as E$2, av as v$2 } from "./chunk-dapYIJB-.js";
import { n as n$1, m as m$2, b as n$2 } from "./chunk-Tt9yuqqG.js";
import { DateTime } from "luxon";
import { cZ as f$4, dj as Z, es as E$1 } from "./chunk-KFNcxJaF.js";
import { union as b$1, geodesicArea as K, planarArea as W, geodesicLength as M$1, planarLength as F$2, relate as R$1, crosses as m$3, touches as S$2, within as x$3, overlaps as O$3, contains as p$3, intersects as h$2 } from "./chunk-N6hZu8Yl.js";
class a {
  constructor() {
    this._databaseTypeMetaData = {}, this._layerInfo = {};
  }
  clearDatabaseType(a2) {
    void 0 === this._databaseTypeMetaData[a2] && delete this._databaseTypeMetaData[a2];
  }
  getDatabaseType(a2) {
    return "MUSTBESET" === a2 || void 0 === this._databaseTypeMetaData[a2] ? null : this._databaseTypeMetaData[a2];
  }
  setDatabaseType(a2, e2) {
    this._databaseTypeMetaData[a2] = e2;
  }
  getLayerInfo(a2) {
    return void 0 === this._layerInfo[a2] ? null : this._layerInfo[a2];
  }
  setLayerInfo(a2, e2) {
    this._layerInfo[a2] = e2;
  }
  clearLayerInfo(a2) {
    void 0 !== this._layerInfo[a2] && delete this._layerInfo[a2];
  }
}
a.applicationCache = null;
class e {
  constructor(t2, e2) {
    this._lastId = -1, this._progress = e2, this._parent = t2;
  }
  reset() {
    this._lastId = -1;
  }
  async nextBatchAsArcadeFeatures(e2, s2) {
    const n2 = await this.nextBatch(e2);
    return null === n2 ? n2 : n2.map((e3) => D$1.createFromGraphicLikeObject(e3.geometry, e3.attributes, this._parent, s2));
  }
  nextBatch(t2) {
    if (null !== this._parent._mainSetInUse)
      return this._parent._mainSetInUse.then((e3) => this.nextBatch(t2), (e3) => this.nextBatch(t2));
    const e2 = { returnpromise: null, hasset: false }, s2 = [];
    return e2.returnpromise = new Promise((n2, a2) => {
      this._parent._getSet(this._progress).then((r2) => {
        const i = r2._known;
        let h2 = i.length - 1;
        if ("GETPAGES" === i[i.length - 1] && (h2 -= 1), this._lastId + t2 > h2 && i.length > 0 && "GETPAGES" === i[i.length - 1])
          return void this._parent._expandPagedSet(r2, this._parent._maxQueryRate(), 0, 0, this._progress).then((s3) => {
            e2.hasset = true, this._parent._mainSetInUse = null, this.nextBatch(t2).then(n2, a2);
          }, (t3) => {
            e2.hasset = true, this._parent._mainSetInUse = null, a2(t3);
          });
        const _ = r2._candidates;
        if (h2 >= this._lastId + t2 || 0 === _.length) {
          for (let e3 = 0; e3 < t2; e3++) {
            const t3 = e3 + this._lastId + 1;
            if (t3 >= i.length)
              break;
            s2[e3] = i[t3];
          }
          return this._lastId += s2.length, 0 === s2.length && (e2.hasset = true, this._parent._mainSetInUse = null, n2([])), void this._parent._getFeatureBatch(s2, this._progress).then((t3) => {
            e2.hasset = true, this._parent._mainSetInUse = null, n2(t3);
          }, (t3) => {
            e2.hasset = true, this._parent._mainSetInUse = null, a2(t3);
          });
        }
        this._parent._refineSetBlock(r2, this._parent._maxProcessingRate(), this._progress).then(() => {
          e2.hasset = true, this._parent._mainSetInUse = null, this.nextBatch(t2).then(n2, a2);
        }, (t3) => {
          e2.hasset = true, this._parent._mainSetInUse = null, a2(t3);
        });
      }, (t3) => {
        e2.hasset = true, this._parent._mainSetInUse = null, a2(t3);
      });
    }), false === e2.hasset && (this._parent._mainSetInUse = e2.returnpromise, e2.hasset = true), e2.returnpromise;
  }
  next() {
    if (null !== this._parent._mainSetInUse)
      return this._parent._mainSetInUse.then((t3) => this.next(), (t3) => this.next());
    const t2 = { returnpromise: null, hasset: false };
    return t2.returnpromise = new Promise((e2, s2) => {
      this._parent._getSet(this._progress).then((n2) => {
        const a2 = n2._known;
        if (this._lastId < a2.length - 1)
          "GETPAGES" === a2[this._lastId + 1] ? this._parent._expandPagedSet(n2, this._parent._maxQueryRate(), 0, 0, this._progress).then((e3) => (t2.hasset = true, this._parent._mainSetInUse = null, this.next())).then(e2, s2) : (this._lastId += 1, this._parent._getFeature(n2, a2[this._lastId], this._progress).then((s3) => {
            t2.hasset = true, this._parent._mainSetInUse = null, e2(s3);
          }, (e3) => {
            t2.hasset = true, this._parent._mainSetInUse = null, s2(e3);
          }));
        else {
          n2._candidates.length > 0 ? this._parent._refineSetBlock(n2, this._parent._maxProcessingRate(), this._progress).then(() => {
            t2.hasset = true, this._parent._mainSetInUse = null, this.next().then(e2, s2);
          }, (e3) => {
            t2.hasset = true, this._parent._mainSetInUse = null, s2(e3);
          }) : (t2.hasset = true, this._parent._mainSetInUse = null, e2(null));
        }
      }, (e3) => {
        t2.hasset = true, this._parent._mainSetInUse = null, s2(e3);
      });
    }), false === t2.hasset && (this._parent._mainSetInUse = t2.returnpromise, t2.hasset = true), t2.returnpromise;
  }
  async count() {
    if (-1 !== this._parent._totalCount)
      return this._parent._totalCount;
    const t2 = await this._parent._getSet(this._progress), e2 = await this._refineAllSets(t2);
    return this._parent._totalCount = e2._known.length, this._parent._totalCount;
  }
  async _refineAllSets(t2) {
    if (t2._known.length > 0 && "GETPAGES" === t2._known[t2._known.length - 1])
      return await this._parent._expandPagedSet(t2, this._parent._maxQueryRate(), 0, 1, this._progress), this._refineAllSets(t2);
    if (t2._candidates.length > 0) {
      if ("GETPAGES" === t2._known[t2._candidates.length - 1])
        return await this._parent._expandPagedSet(t2, this._parent._maxQueryRate(), 0, 2, this._progress), this._refineAllSets(t2);
      const e2 = await this._parent._refineSetBlock(t2, this._parent._maxProcessingRate(), this._progress);
      return e2._candidates.length > 0 ? this._refineAllSets(e2) : e2;
    }
    return t2;
  }
}
class t {
  constructor(t2, s2, e2, i) {
    this._lastFetchedIndex = 0, this._ordered = false, this.pagesDefinition = null, this._candidates = t2, this._known = s2, this._ordered = e2, this.pagesDefinition = i;
  }
}
function f$2(e2, r2) {
  return h$1(e2?.parseTree, r2, e2?.parameters);
}
function p$1(e2, r2, t2) {
  return h$1(e2, r2, t2);
}
function m$1(e2, r2, t2, s2) {
  return x$2.create(h$1(e2.parseTree, l.Standardised, e2.parameters, r2, t2), s2, e2.timeZone);
}
function g$1(e2, r2, t2 = "AND") {
  return x$2.create("((" + f$2(e2, l.Standardised) + ")" + t2 + "(" + f$2(r2, l.Standardised) + "))", e2.fieldsIndex, e2.timeZone);
}
function h$1(e2, l$1, u2, d2 = null, f2 = null) {
  let p2, m2, g2, I2;
  switch (e2.type) {
    case "interval":
      return F(h$1(e2.value, l$1, u2, d2, f2), e2.qualifier, e2.op);
    case "case-expression": {
      let r2 = " CASE ";
      "simple" === e2.format && (r2 += h$1(e2.operand, l$1, u2, d2, f2));
      for (let t2 = 0; t2 < e2.clauses.length; t2++)
        r2 += " WHEN " + h$1(e2.clauses[t2].operand, l$1, u2, d2, f2) + " THEN " + h$1(e2.clauses[t2].value, l$1, u2, d2, f2);
      return null !== e2.else && (r2 += " ELSE " + h$1(e2.else, l$1, u2, d2, f2)), r2 += " END ", r2;
    }
    case "parameter": {
      const r2 = u2[e2.value.toLowerCase()];
      if ("string" == typeof r2) {
        return "'" + u2[e2.value.toLowerCase()].toString().replaceAll("'", "''") + "'";
      }
      if (f$3(r2))
        return w$1(r2, l$1);
      if (d$1(r2))
        return w$1(r2, l$1);
      if (g$2(r2))
        return E(r2, l$1);
      if (T$2(r2))
        return T$1(r2, l$1);
      if (F$1(r2))
        return S$1(r2, l$1);
      if (r2 instanceof Array) {
        const e3 = [];
        for (let t2 = 0; t2 < r2.length; t2++)
          "string" == typeof r2[t2] ? e3.push("'" + r2[t2].toString().replaceAll("'", "''") + "'") : f$3(r2[t2]) || d$1(r2[t2]) ? e3.push(w$1(r2[t2], l$1)) : g$2(r2[t2]) ? e3.push(E(r2[t2], l$1)) : T$2(r2[t2]) ? e3.push(T$1(r2[t2], l$1)) : F$1(r2[t2]) ? e3.push(S$1(r2[t2], l$1)) : e3.push(r2[t2].toString());
        return e3;
      }
      return r2.toString();
    }
    case "expression-list":
      m2 = [];
      for (const r2 of e2.value)
        m2.push(h$1(r2, l$1, u2, d2, f2));
      return m2;
    case "unary-expression":
      return " ( NOT " + h$1(e2.expr, l$1, u2, d2, f2) + " ) ";
    case "binary-expression":
      switch (e2.operator) {
        case "AND":
          return " (" + h$1(e2.left, l$1, u2, d2, f2) + " AND " + h$1(e2.right, l$1, u2, d2, f2) + ") ";
        case "OR":
          return " (" + h$1(e2.left, l$1, u2, d2, f2) + " OR " + h$1(e2.right, l$1, u2, d2, f2) + ") ";
        case "IS":
          if ("null" !== e2.right.type)
            throw new n(t$1.UnsupportedIsRhs);
          return " (" + h$1(e2.left, l$1, u2, d2, f2) + " IS NULL )";
        case "ISNOT":
          if ("null" !== e2.right.type)
            throw new n(t$1.UnsupportedIsRhs);
          return " (" + h$1(e2.left, l$1, u2, d2, f2) + " IS NOT NULL )";
        case "IN":
          return p2 = [], "expression-list" === e2.right.type ? (p2 = h$1(e2.right, l$1, u2, d2, f2), " (" + h$1(e2.left, l$1, u2, d2, f2) + " IN (" + p2.join(",") + ")) ") : (I2 = h$1(e2.right, l$1, u2, d2, f2), I2 instanceof Array ? " (" + h$1(e2.left, l$1, u2, d2, f2) + " IN (" + I2.join(",") + ")) " : " (" + h$1(e2.left, l$1, u2, d2, f2) + " IN (" + I2 + ")) ");
        case "NOT IN":
          return p2 = [], "expression-list" === e2.right.type ? (p2 = h$1(e2.right, l$1, u2, d2, f2), " (" + h$1(e2.left, l$1, u2, d2, f2) + " NOT IN (" + p2.join(",") + ")) ") : (I2 = h$1(e2.right, l$1, u2, d2, f2), I2 instanceof Array ? " (" + h$1(e2.left, l$1, u2, d2, f2) + " NOT IN (" + I2.join(",") + ")) " : " (" + h$1(e2.left, l$1, u2, d2, f2) + " NOT IN (" + I2 + ")) ");
        case "BETWEEN":
          return g2 = h$1(e2.right, l$1, u2, d2, f2), " (" + h$1(e2.left, l$1, u2, d2, f2) + " BETWEEN " + g2[0] + " AND " + g2[1] + " ) ";
        case "NOTBETWEEN":
          return g2 = h$1(e2.right, l$1, u2, d2, f2), " (" + h$1(e2.left, l$1, u2, d2, f2) + " NOT BETWEEN " + g2[0] + " AND " + g2[1] + " ) ";
        case "LIKE":
          return "" !== e2.escape ? " (" + h$1(e2.left, l$1, u2, d2, f2) + " LIKE " + h$1(e2.right, l$1, u2, d2, f2) + " ESCAPE '" + e2.escape + "') " : " (" + h$1(e2.left, l$1, u2, d2, f2) + " LIKE " + h$1(e2.right, l$1, u2, d2, f2) + ") ";
        case "NOT LIKE":
          return "" !== e2.escape ? " (" + h$1(e2.left, l$1, u2, d2, f2) + " NOT LIKE " + h$1(e2.right, l$1, u2, d2, f2) + " ESCAPE '" + e2.escape + "') " : " (" + h$1(e2.left, l$1, u2, d2, f2) + " NOT LIKE " + h$1(e2.right, l$1, u2, d2, f2) + ") ";
        case "<>":
        case "<":
        case ">":
        case ">=":
        case "<=":
        case "=":
        case "*":
        case "-":
        case "+":
        case "/":
          return " (" + h$1(e2.left, l$1, u2, d2, f2) + " " + e2.operator + " " + h$1(e2.right, l$1, u2, d2, f2) + ") ";
        case "||":
          return " (" + h$1(e2.left, l$1, u2, d2, f2) + " " + (l$1 === l.SqlServer ? "+" : e2.operator) + " " + h$1(e2.right, l$1, u2, d2, f2) + ") ";
      }
      throw new n(t$1.UnsupportedOperator, { operator: e2.operator });
    case "null":
      return "null";
    case "boolean":
      return true === e2.value ? "1" : "0";
    case "string":
      return "'" + e2.value.toString().replaceAll("'", "''") + "'";
    case "timestamp":
      return `timestamp '${e2.value}'`;
    case "date":
      return `date '${e2.value}'`;
    case "time":
      return `time '${e2.value}'`;
    case "number":
      return e2.value.toString();
    case "current-time":
      return L("date" === e2.mode, l$1);
    case "column-reference":
      return d2 ? d2.toLowerCase() === e2.column.toLowerCase() ? "(" + f2 + ")" : true === e2.delimited ? `"${e2.column.split('"').join('""')}"` : e2.column : e2.column;
    case "data-type":
      return e2.value;
    case "function": {
      const r2 = h$1(e2.args, l$1, u2, d2, f2);
      return y$1(e2.name, r2, l$1);
    }
  }
  throw new n(t$1.UnsupportedSyntax, { node: e2.type });
}
function y$1(e2, s2, n$12) {
  switch (e2.toLowerCase().trim()) {
    case "cos":
    case "sin":
    case "tan":
    case "cosh":
    case "tanh":
    case "sinh":
    case "acos":
    case "asin":
    case "atan":
    case "floor":
    case "log10":
    case "log":
    case "abs":
      if (1 !== s2.length)
        throw new n(t$1.InvalidFunctionParameters, { function: e2.toLowerCase().trim() });
      return `${e2.toUpperCase().trim()}(${s2[0]})`;
    case "ceiling":
    case "ceil":
      if (1 !== s2.length)
        throw new n(t$1.InvalidFunctionParameters, { function: "ceiling" });
      switch (n$12) {
        case l.Standardised:
        case l.StandardisedNoInterval:
      }
      return "CEILING(" + s2[0] + ")";
    case "mod":
    case "power":
    case "nullif":
      if (2 !== s2.length)
        throw new n(t$1.InvalidFunctionParameters, { function: e2.toLowerCase().trim() });
      return `${e2.toUpperCase().trim()}(${s2[0]},${s2[1]})`;
    case "round":
      if (2 === s2.length)
        return "ROUND(" + s2[0] + "," + s2[1] + ")";
      if (1 === s2.length)
        return "ROUND(" + s2[0] + ")";
      throw new n(t$1.InvalidFunctionParameters, { function: "round" });
    case "truncate":
      if (s2.length < 1 || s2.length > 2)
        throw new n(t$1.InvalidFunctionParameters, { function: "truncate" });
      return n$12 === l.SqlServer ? "ROUND(" + s2[0] + (1 === s2.length ? "0" : "," + s2[1]) + ",1)" : "TRUNCATE(" + s2[0] + (1 === s2.length ? ")" : "," + s2[1] + ")");
    case "char_length":
    case "len":
      if (1 !== s2.length)
        throw new n(t$1.InvalidFunctionParameters, { function: "char_length" });
      switch (n$12) {
        case l.SqlServer:
          return "LEN(" + s2[0] + ")";
        case l.Oracle:
          return "LENGTH(" + s2[0] + ")";
        default:
          return "CHAR_LENGTH(" + s2[0] + ")";
      }
    case "coalesce":
    case "concat": {
      if (s2.length < 1)
        throw new n(t$1.InvalidFunctionParameters, { function: e2.toLowerCase() });
      let a2 = e2.toUpperCase().trim() + "(";
      for (let e3 = 0; e3 < s2.length; e3++)
        0 !== e3 && (a2 += ","), a2 += s2[e3];
      return a2 += ")", a2;
    }
    case "lower":
    case "lcase":
      if (1 !== s2.length)
        throw new n(t$1.InvalidFunctionParameters, { function: "lower" });
      return "LOWER(" + s2[0] + ")";
    case "upper":
    case "ucase":
      if (1 !== s2.length)
        throw new n(t$1.InvalidFunctionParameters, { function: "upper" });
      return "UPPER(" + s2[0] + ")";
    case "substring": {
      let e3 = "";
      switch (n$12) {
        case l.Oracle:
          return e3 = "SUBSTR(" + s2[0] + "," + s2[1], 3 === s2.length && (e3 += "," + s2[2]), e3 += ")", e3;
        case l.SqlServer:
          return e3 = 3 === s2.length ? "SUBSTRING(" + s2[0] + "," + s2[1] + "," + s2[2] + ")" : "SUBSTRING(" + s2[0] + ",  " + s2[1] + ", LEN(" + s2[0] + ") - " + s2[1] + ")", e3;
        default:
          return e3 = "SUBSTRING(" + s2[0] + " FROM " + s2[1], 3 === s2.length && (e3 += " FOR " + s2[2]), e3 += ")", e3;
      }
    }
    case "extract":
      return "EXTRACT(" + s2[0].replaceAll("'", "") + " FROM " + s2[1] + ")";
    case "cast": {
      let e3 = "";
      switch (n$12) {
        case l.Oracle:
          switch (s2[1].type) {
            case "date":
              e3 = "DATE";
              break;
            case "float":
              e3 = "DOUBLE";
              break;
            case "integer":
              e3 = "INTEGER";
              break;
            case "real":
              e3 = "REAL";
              break;
            case "smallint":
              e3 = "SMALLINT";
              break;
            case "timestamp":
              e3 = "TIMESTAMP";
              break;
            case "varchar":
              e3 = "VARCHAR(" + s2[1].size.toString() + ")";
          }
          return `CAST(${s2[0]} AS ${e3})`;
        case l.Postgres:
          switch (s2[1].type) {
            case "date":
              e3 = "DATE";
              break;
            case "float":
              e3 = "DOUBLE PRECISION";
              break;
            case "integer":
              e3 = "INT";
              break;
            case "real":
              e3 = "REAL";
              break;
            case "smallint":
              e3 = "SMALLINT";
              break;
            case "timestamp":
              e3 = "TIMESTAMP";
              break;
            case "varchar":
              e3 = "VARCHAR(" + s2[1].size.toString() + ")";
          }
          return `CAST(${s2[0]} AS ${e3})`;
        case l.SqlServer:
          switch (s2[1].type) {
            case "date":
              e3 = "DATE";
              break;
            case "float":
              e3 = "FLOAT";
              break;
            case "integer":
              e3 = "INT";
              break;
            case "real":
              e3 = "REAL";
              break;
            case "smallint":
              e3 = "SMALLINT";
              break;
            case "timestamp":
              e3 = "DATETIME";
              break;
            case "varchar":
              e3 = "VARCHAR(" + s2[1].size.toString() + ")";
          }
          return `CAST(${s2[0]} AS ${e3})`;
        default:
          switch (s2[1].type) {
            case "date":
              e3 = "DATE";
              break;
            case "float":
              e3 = "FLOAT";
              break;
            case "integer":
              e3 = "INTEGER";
              break;
            case "real":
              e3 = "REAL";
              break;
            case "smallint":
              e3 = "SMALLINT";
              break;
            case "timestamp":
              e3 = "TIMESTAMP";
              break;
            case "varchar":
              e3 = "VARCHAR(" + s2[1].size.toString() + ")";
          }
          return `CAST(${s2[0]} AS ${e3})`;
      }
    }
  }
  throw new n(t$1.InvalidFunctionParameters, { function: e2 });
}
function T$1(e2, r2) {
  const t2 = e2.toDateTime(), s2 = 0 === t2.hour && 0 === t2.minute && 0 === t2.second && 0 === t2.millisecond;
  switch (r2) {
    case l.FILEGDB:
    case l.Standardised:
    case l.StandardisedNoInterval:
      return s2 ? `date '${t2.toFormat("yyyy-LL-dd")}'` : `timestamp '${t2.toFormat("yyyy-LL-dd HH:mm:ss")}'`;
    case l.Oracle:
      return s2 ? `TO_DATE('${t2.toFormat("yyyy-LL-dd")}','YYYY-MM-DD')` : `TO_DATE('${t2.toFormat("yyyy-LL-dd HH:mm:ss")}','YYYY-MM-DD HH24:MI:SS')`;
    case l.SqlServer:
      return `'${t2.toFormat(s2 ? "yyyy-LL-dd" : "yyyy-LL-dd HH:mm:ss")}'`;
    case l.PGDB:
      return `#${t2.toFormat(s2 ? "LL-dd-yyyy" : "LL-dd-yyyy HH:mm:ss")}#`;
    case l.Postgres:
      return `TIMESTAMP '${t2.toFormat(s2 ? "yyyy-LL-dd" : "yyyy-LL-dd HH:mm:ss")}'`;
    default:
      return `timestamp '${t2.toFormat("yyyy-LL-dd HH:mm:ss")}'`;
  }
}
function S$1(e2, r2) {
  switch (r2) {
    case l.FILEGDB:
    case l.Standardised:
    case l.StandardisedNoInterval:
      return e2.toSQLWithKeyword();
    case l.Oracle:
      return `TO_DATE('${e2.toFormat("Y-MM-DD")}'`;
    case l.SqlServer:
      return `'${e2.toFormat("Y-MM-DD")}'`;
    case l.PGDB:
      return `#${e2.toFormat("Y-MM-DD")}#`;
    case l.Postgres:
      return `TIMESTAMP '${e2.toFormat("Y-MM-DD")}'`;
    default:
      return e2.toSQLWithKeyword();
  }
}
function E(e2, r2) {
  switch (e2 instanceof n$1 && (e2 = e2.toStorageString()), r2) {
    case l.Oracle:
      return `TO_DATE('${e2}', 'HH24:MI:SS')`;
    case l.SqlServer:
      return `'${e2}'`;
    case l.FILEGDB:
    case l.Standardised:
    case l.StandardisedNoInterval:
    case l.Postgres:
    default:
      return `time '${e2}'`;
  }
}
function w$1(r2, t2) {
  return T$1(m$2.dateTimeToArcadeDate(d$1(r2) ? r2 : DateTime.fromJSDate(r2)), t2);
}
function L(e2, r2) {
  switch (r2) {
    case l.FILEGDB:
    case l.Standardised:
    case l.StandardisedNoInterval:
    case l.Oracle:
      return e2 ? "CURRENT_DATE" : "CURRENT_TIMESTAMP";
    case l.SqlServer:
      return e2 ? "CAST(GETDATE() AS DATE)" : "GETDATE()";
    case l.PGDB:
    case l.Postgres:
    default:
      return e2 ? "CURRENT_DATE" : "CURRENT_TIMESTAMP";
  }
}
function I(e2, r2, t2 = {}) {
  const a2 = {}, s2 = {}, n2 = { esriFieldTypeSmallInteger: "integer", esriFieldTypeInteger: "integer", esriFieldTypeBigInteger: "integer", esriFieldTypeSingle: "double", esriFieldTypeDouble: "double", esriFieldTypeString: "string", esriFieldTypeTimeOnly: "time-only", esriFieldTypeDateOnly: "date-only", esriFieldTypeTimestampOffset: "timestamp-offset", esriFieldTypeDate: "date", esriFieldTypeOID: "integer", esriFieldTypeGUID: "guid", esriFieldTypeGlobalID: "guid", oid: "integer", long: "integer", "small-integer": "integer", integer: "integer", "big-integer": "integer", single: "double", "time-only": "time-only", "date-only": "date-only", "timestamp-offset": "timestemp-offset", double: "double", date: "date", guid: "guid", "global-id": "guid", string: "string" };
  for (const c of r2) {
    const e3 = c.type ? n2[c.type] : void 0;
    a2[c.name.toLowerCase()] = void 0 === e3 ? "" : e3;
  }
  for (const c in t2) {
    const e3 = n2[t2[c]];
    s2[c.toLowerCase()] = void 0 === e3 ? "" : e3;
  }
  switch (A(a2, e2.parseTree, e2.parameters, s2)) {
    case "double":
      return "double";
    case "integer":
      return "integer";
    case "date":
      return "date";
    case "date-only":
      return "date-only";
    case "time-only":
      return "time-only";
    case "timestamp-offset":
      return "timestamp-offset";
    case "string":
      return "string";
    case "global-id":
    case "guid":
      return "guid";
  }
  return "";
}
function A(e2, a2, n$12, l2) {
  let u2;
  switch (a2.type) {
    case "interval":
      return "integer";
    case "case-expression": {
      const r2 = [];
      if ("simple" === a2.format) {
        for (let t2 = 0; t2 < a2.clauses.length; t2++)
          r2.push(A(e2, a2.clauses[t2].value, n$12, l2));
        null !== a2.else && r2.push(A(e2, a2.else, n$12, l2));
      } else {
        for (let t2 = 0; t2 < a2.clauses.length; t2++)
          r2.push(A(e2, a2.else, n$12, l2));
        null !== a2.else && r2.push(A(e2, a2.else, n$12, l2));
      }
      return b(r2);
    }
    case "parameter": {
      const e3 = l2[a2.value.toLowerCase()];
      if (void 0 === e3 && n$12) {
        const e4 = n$12[a2.value.toLowerCase()];
        if (void 0 === e4)
          return "";
        if (null === e4)
          return "";
        if ("string" == typeof e4 || e4 instanceof String)
          return "string";
        if ("boolean" == typeof e4)
          return "boolean";
        if (f$3(e4))
          return "date";
        if (T$2(e4))
          return "date";
        if (F$1(e4))
          return "date-only";
        if (g$2(e4))
          return "time-only";
        if ("number" == typeof e4)
          return e4 % 1 == 0 ? "integer" : "double";
      }
      return void 0 === e3 ? "" : e3;
    }
    case "expression-list": {
      const r2 = [];
      for (const t2 of a2.value)
        r2.push(A(e2, t2, n$12, l2));
      return r2;
    }
    case "unary-expression":
      return "boolean";
    case "binary-expression":
      switch (a2.operator) {
        case "AND":
        case "OR":
        case "IN":
        case "NOT IN":
        case "BETWEEN":
        case "NOTBETWEEN":
        case "LIKE":
        case "NOT LIKE":
        case "<>":
        case "<":
        case ">":
        case ">=":
        case "<=":
        case "=":
          return "boolean";
        case "IS":
        case "ISNOT":
          if ("null" !== a2.right.type)
            throw new n(t$1.UnsupportedIsRhs);
          return "boolean";
        case "*":
        case "-":
        case "+":
        case "/":
          return b([A(e2, a2.left, n$12, l2), A(e2, a2.right, n$12, l2)]);
        case "||":
          return "string";
        default:
          throw new n(t$1.UnsupportedOperator, { operator: a2.operator });
      }
    case "null":
      return "";
    case "boolean":
      return "boolean";
    case "string":
      return "string";
    case "number":
      return null === a2.value ? "" : a2.value % 1 == 0 ? "integer" : "double";
    case "date":
      return "date";
    case "timestamp":
      return a2.withtimezone ? "timestamp-offset" : "date";
    case "time":
      return "time-only";
    case "current-time":
      return "date";
    case "column-reference": {
      const r2 = e2[a2.column.toLowerCase()];
      return void 0 === r2 ? "" : r2;
    }
    case "function":
      switch (a2.name.toLowerCase()) {
        case "cast":
          switch (a2.args?.value[1]?.value.type ?? "") {
            case "integer":
            case "smallint":
              return "integer";
            case "real":
            case "float":
              return "double";
            case "date":
            case "timestamp":
              return true === a2.args?.value[1]?.value?.withtimezone ? "timestamp-offset" : "date";
            case "time":
              return "time-only";
            case "varchar":
              return "string";
            default:
              return "";
          }
        case "position":
        case "extract":
        case "char_length":
        case "mod":
          return "integer";
        case "round":
          if (u2 = A(e2, a2.args, n$12, l2), u2 instanceof Array) {
            if (u2.length <= 0)
              return "double";
            u2 = u2[0];
          }
          return u2;
        case "sign":
          return "integer";
        case "ceiling":
        case "floor":
        case "abs":
          return u2 = A(e2, a2.args, n$12, l2), u2 instanceof Array && (u2 = b(u2)), "integer" === u2 || "double" === u2 ? u2 : "double";
        case "area":
        case "length":
        case "log":
        case "log10":
        case "sin":
        case "cos":
        case "tan":
        case "asin":
        case "acos":
        case "atan":
        case "cosh":
        case "sinh":
        case "tanh":
        case "power":
          return "double";
        case "substring":
        case "trim":
        case "concat":
        case "lower":
        case "upper":
          return "string";
        case "truncate":
          return "double";
        case "nullif":
        case "coalesce":
          return u2 = A(e2, a2.args, n$12, l2), u2 instanceof Array ? u2.length > 0 ? u2[0] : "" : u2;
      }
      return "";
  }
  throw new n(t$1.UnsupportedSyntax, { node: a2.type });
}
const N = { boolean: 1, string: 2, integer: 3, double: 4, date: 5 };
function b(e2) {
  if (e2) {
    let r2 = "";
    for (const t2 of e2)
      "" !== t2 && (r2 = "" === r2 || N[r2] < N[t2] ? t2 : r2);
    return r2;
  }
  return "";
}
function v$1(e2, r2) {
  return O$1(e2.parseTree, r2);
}
function D(e2) {
  return "column-reference" === e2?.parseTree.type;
}
function O$1(e2, r2) {
  if (null == e2)
    return false;
  switch (e2.type) {
    case "when-clause":
      return O$1(e2.operand, r2) || O$1(e2.value, r2);
    case "case-expression":
      for (const t2 of e2.clauses)
        if (O$1(t2, r2))
          return true;
      return !("simple" !== e2.format || !O$1(e2.operand, r2)) || !(null === e2.else || !O$1(e2.else, r2));
    case "parameter":
    case "null":
    case "boolean":
    case "date":
    case "timestamp":
    case "time":
    case "string":
    case "number":
      return false;
    case "expression-list":
      for (const t2 of e2.value)
        if (O$1(t2, r2))
          return true;
      return false;
    case "unary-expression":
      return O$1(e2.expr, r2);
    case "binary-expression":
      return O$1(e2.left, r2) || O$1(e2.right, r2);
    case "column-reference":
      return r2.toLowerCase() === e2.column.toLowerCase();
    case "function":
      return O$1(e2.args, r2);
  }
  return false;
}
function R(e2) {
  let r2 = "";
  return r2 += e2.period.toUpperCase(), r2;
}
function F(e2, r2, t2) {
  let a2 = "";
  return a2 = "interval-period" === r2.type ? R(r2) : R(r2.start) + " TO " + R(r2.end), "INTERVAL " + t2 + " " + e2 + " " + a2;
}
function u$1(t2) {
  return t2 = +t2, isFinite(t2) ? t2 - t2 % 1 || (t2 < 0 ? -0 : 0 === t2 ? t2 : 0) : t2;
}
function f$1(t2) {
  let n2 = 0;
  for (let e2 = 0; e2 < t2.length; e2++)
    n2 += t2[e2];
  return n2 / t2.length;
}
function h(t2) {
  const n2 = f$1(t2);
  let e2 = 0;
  for (let r2 = 0; r2 < t2.length; r2++)
    e2 += (n2 - t2[r2]) ** 2;
  return e2 / t2.length;
}
function m(t2) {
  const n2 = f$1(t2);
  let e2 = 0;
  for (let r2 = 0; r2 < t2.length; r2++)
    e2 += (n2 - t2[r2]) ** 2;
  return e2 / (t2.length - 1);
}
function g(t2) {
  let n2 = 0;
  for (let e2 = 0; e2 < t2.length; e2++)
    n2 += t2[e2];
  return n2;
}
function p(t2, n2) {
  const c = [], s2 = {}, i = [];
  for (let o = 0; o < t2.length; o++) {
    if (void 0 !== t2[o] && null !== t2[o]) {
      const n3 = t2[o];
      if (a$1(n3) || u$2(n3))
        void 0 === s2[n3] && (c.push(n3), s2[n3] = 1);
      else {
        let t3 = false;
        for (let e2 = 0; e2 < i.length; e2++)
          true === G(i[e2], n3) && (t3 = true);
        false === t3 && (i.push(n3), c.push(n3));
      }
    }
    if (c.length >= n2 && -1 !== n2)
      return c;
  }
  return c;
}
function w(t2) {
  switch (t2.toLowerCase()) {
    case "distinct":
      return "distinct";
    case "avg":
    case "mean":
      return "avg";
    case "min":
      return "min";
    case "sum":
      return "sum";
    case "max":
      return "max";
    case "stdev":
    case "stddev":
      return "stddev";
    case "var":
    case "variance":
      return "var";
    case "count":
      return "count";
  }
  return "";
}
function d(t2, n2, e2 = 1e3) {
  switch (t2.toLowerCase()) {
    case "distinct":
      return p(n2, e2);
    case "avg":
    case "mean":
      return f$1(n2);
    case "min":
      return Math.min.apply(Math, n2);
    case "sum":
      return g(n2);
    case "max":
      return Math.max.apply(Math, n2);
    case "stdev":
    case "stddev":
      return Math.sqrt(h(n2));
    case "var":
    case "variance":
      return h(n2);
    case "count":
      return n2.length;
  }
  return 0;
}
async function v(t2, n2, e2) {
  const r2 = await O(t2, n2, e2, true);
  return 0 === r2.length ? null : Math.min.apply(Math, r2);
}
async function y(t2, n2, e2) {
  const r2 = await O(t2, n2, e2, true);
  return 0 === r2.length ? null : Math.max.apply(Math, r2);
}
async function M(t2, n2, e2) {
  let r2 = "";
  n2 && !D(n2) && (r2 = I(n2, t2.fields));
  const a2 = await O(t2, n2, e2, true);
  if (0 === a2.length)
    return null;
  const i = f$1(a2);
  return null === i ? i : "integer" === r2 ? u$1(i) : i;
}
async function x$1(t2, n2, e2) {
  const r2 = await O(t2, n2, e2, true);
  return 0 === r2.length ? null : m(r2);
}
async function T(t2, n2, e2) {
  const r2 = await O(t2, n2, e2, true);
  return 0 === r2.length ? null : Math.sqrt(m(r2));
}
async function k(t2, n2, e2) {
  const r2 = await O(t2, n2, e2, true);
  return 0 === r2.length ? null : g(r2);
}
async function q(t2, n2) {
  return t2.iterator(n2).count();
}
async function O(e2, r$2, a2, c = false) {
  const s$12 = e2.iterator(a2), u2 = [], f2 = { ticker: 0 };
  let h2 = await s$12.next();
  for (; null !== h2; ) {
    if (f2.ticker++, a2.aborted)
      throw new s(r.Cancelled);
    f2.ticker % 100 == 0 && (f2.ticker = 0, await new Promise((t2) => {
      setTimeout(t2, 0);
    }));
    const e3 = r$2?.calculateValue(h2);
    null === e3 ? false === c && (u2[u2.length] = e3) : u2[u2.length] = e3 instanceof n$2 || e3 instanceof n$1 ? e3.toNumber() : e3 instanceof r$1 ? e3.toMilliseconds() : e3, h2 = await s$12.next();
  }
  return u2;
}
async function S(e2, r$2, a2 = 1e3, c = null) {
  const s$12 = e2.iterator(c), u2 = [], f2 = {}, h2 = { ticker: 0 };
  let m2 = await s$12.next();
  for (; null !== m2; ) {
    if (h2.ticker++, c && c.aborted)
      throw new s(r.Cancelled);
    h2.ticker % 100 == 0 && (h2.ticker = 0, await new Promise((t2) => {
      setTimeout(t2, 0);
    }));
    const e3 = r$2?.calculateValue(m2);
    let g2 = e3;
    if (e3 instanceof n$2 ? g2 = "!!DATEONLY!!-" + e3.toString() : e3 instanceof r$1 ? g2 = "!!TSOFFSETONLY!!-" + e3.toString() : e3 instanceof n$1 ? g2 = "!!TIMEONLY!!-" + e3.toString() : e3 instanceof Date && (g2 = "!!DATE!!-" + e3.toString()), null != e3 && void 0 === f2[g2] && (u2.push(e3), f2[g2] = 1), u2.length >= a2 && -1 !== a2)
      return u2;
    m2 = await s$12.next();
  }
  return u2;
}
class x {
  constructor(e2) {
    this.recentlyUsedQueries = null, this.featureSetQueryInterceptor = null, this._idstates = [], this._parent = null, this._wset = null, this._mainSetInUse = null, this._maxProcessing = 200, this._maxQuery = 500, this._totalCount = -1, this._databaseType = l.NotEvaluated, this._databaseTypeProbed = null, this.declaredRootClass = "esri.arcade.featureset.support.FeatureSet", this._featureCache = [], this.typeIdField = null, this.types = null, this.fields = null, this.geometryType = "", this.objectIdField = "", this.globalIdField = "", this.spatialReference = null, this.hasM = false, this.hasZ = false, this._transparent = false, this.loaded = false, this._loadPromise = null, this._fieldsIndex = null, this.fsetInfo = null, e2?.lrucache && (this.recentlyUsedQueries = e2.lrucache), e2?.interceptor && (this.featureSetQueryInterceptor = e2.interceptor);
  }
  optimisePagingFeatureQueries(e2) {
    this._parent && this._parent.optimisePagingFeatureQueries(e2);
  }
  _hasMemorySource() {
    return true;
  }
  prop(e2, t2) {
    return void 0 === t2 ? this[e2] : (void 0 !== this[e2] && (this[e2] = t2), this);
  }
  end() {
    return null !== this._parent && true === this._parent._transparent ? this._parent.end() : this._parent;
  }
  _ensureLoaded() {
    return this.load();
  }
  load() {
    return null === this._loadPromise && (this._loadPromise = this.loadImpl()), this._loadPromise;
  }
  async loadImpl() {
    return true === this._parent?.loaded ? (this._initialiseFeatureSet(), this) : (await this._parent?.load(), this._initialiseFeatureSet(), this);
  }
  _initialiseFeatureSet() {
    null !== this._parent ? (this.fields = this._parent.fields.slice(0), this.geometryType = this._parent.geometryType, this.objectIdField = this._parent.objectIdField, this.globalIdField = this._parent.globalIdField, this.spatialReference = this._parent.spatialReference, this.hasM = this._parent.hasM, this.hasZ = this._parent.hasZ, this.typeIdField = this._parent.typeIdField, this.types = this._parent.types) : (this.fields = [], this.typeIdField = "", this.objectIdField = "", this.globalIdField = "", this.spatialReference = new f$4({ wkid: 4326 }), this.geometryType = N$1.point);
  }
  getField(e2, t2) {
    let s2;
    return (t2 = t2 || this.fields) && (e2 = e2.toLowerCase(), t2.some((t3) => (t3 && t3.name.toLowerCase() === e2 && (s2 = t3), !!s2))), s2;
  }
  getFieldsIndex() {
    return null === this._fieldsIndex && (this._fieldsIndex = Z.fromLayer({ timeInfo: this.timeInfo, editFieldsInfo: this.editFieldsInfo, dateFieldsTimeZone: this.dateFieldsTimeZone, datesInUnknownTimezone: this.datesInUnknownTimezone, fields: this.fields })), this._fieldsIndex;
  }
  _maxProcessingRate() {
    return null !== this._parent ? Math.min(this._maxProcessing, this._parent._maxProcessingRate()) : Math.min(this._maxProcessing, this._maxQueryRate());
  }
  _maxQueryRate() {
    return null !== this._parent ? Math.max(this._maxQuery, this._parent._maxQueryRate()) : this._maxQuery;
  }
  _checkCancelled(e2) {
    if (null != e2 && e2.aborted)
      throw new s(r.Cancelled);
  }
  nativeCapabilities() {
    return this._parent.nativeCapabilities();
  }
  async _canDoAggregates(e2, t2, s2, n2, i) {
    return null !== this._parent && this._parent._canDoAggregates(e2, t2, s2, n2, i);
  }
  async _getAggregatePagesDataSourceDefinition(e2, n2, i, a2, r$12, l2, u2) {
    if (null === this._parent)
      throw new s(r.NeverReach);
    return this._parent._getAggregatePagesDataSourceDefinition(e2, n2, i, a2, r$12, l2, u2);
  }
  async _getAgregagtePhysicalPage(e2, n2, i) {
    if (null === this._parent)
      throw new s(r.NeverReach);
    return this._parent._getAgregagtePhysicalPage(e2, n2, i);
  }
  async databaseType() {
    if (this._databaseType === l.NotEvaluated) {
      if (null !== a.applicationCache) {
        const t2 = a.applicationCache.getDatabaseType(this._cacheableFeatureSetSourceKey());
        if (null !== t2)
          return t2;
      }
      if (null !== this._databaseTypeProbed)
        return this._databaseTypeProbed;
      try {
        this._databaseTypeProbed = this._getDatabaseTypeImpl(), null !== a.applicationCache && a.applicationCache.setDatabaseType(this._cacheableFeatureSetSourceKey(), this._databaseTypeProbed);
      } catch (t2) {
        throw null !== a.applicationCache && a.applicationCache.clearDatabaseType(this._cacheableFeatureSetSourceKey()), t2;
      }
      return this._databaseTypeProbed;
    }
    return this._databaseType;
  }
  async _getDatabaseTypeImpl() {
    const e2 = [{ thetype: l.SqlServer, testwhere: "(CAST( '2015-01-01' as DATETIME) = CAST( '2015-01-01' as DATETIME)) AND OBJECTID<0" }, { thetype: l.Oracle, testwhere: "(TO_DATE('2003-11-18','YYYY-MM-DD') = TO_DATE('2003-11-18','YYYY-MM-DD')) AND OBJECTID<0" }, { thetype: l.StandardisedNoInterval, testwhere: "(date '2015-01-01 10:10:10' = date '2015-01-01 10:10:10') AND OBJECTID<0" }];
    for (const t2 of e2) {
      if (true === await this._runDatabaseProbe(t2.testwhere))
        return t2.thetype;
    }
    return l.StandardisedNoInterval;
  }
  _cacheableFeatureSetSourceKey() {
    return "MUSTBESET";
  }
  async _runDatabaseProbe(e2) {
    if (null !== this._parent)
      return this._parent._runDatabaseProbe(e2);
    throw new s(r.NotImplemented);
  }
  isTable() {
    return this._parent?.isTable() ?? false;
  }
  _featureFromCache(e2) {
    if (void 0 !== this._featureCache[e2])
      return this._featureCache[e2];
  }
  _isInFeatureSet(e2) {
    return s$1.Unknown;
  }
  _getSet(e2) {
    throw new s(r.NotImplemented);
  }
  async _getFeature(e2, n2, i) {
    if (this._checkCancelled(i), void 0 !== this._featureFromCache(n2))
      return this._featureFromCache(n2);
    if (await this._getFeatures(e2, n2, this._maxProcessingRate(), i), this._checkCancelled(i), void 0 !== this._featureFromCache(n2))
      return this._featureFromCache(n2);
    throw new s(r.MissingFeatures);
  }
  async _getFeatureBatch(e2, t$12) {
    this._checkCancelled(t$12);
    const s2 = new t([], e2, false, null), n2 = [];
    await this._getFeatures(s2, -1, e2.length, t$12), this._checkCancelled(t$12);
    for (const i of e2)
      void 0 !== this._featureFromCache(i) && n2.push(this._featureFromCache(i));
    return n2;
  }
  async _getFeatures(e2, t2, s2, n2) {
    return "success";
  }
  _getFilteredSet(e2, n2, i, a2, r$12) {
    throw new s(r.NotImplemented);
  }
  async _refineSetBlock(e2, t2, s2) {
    if (true === this._checkIfNeedToExpandCandidatePage(e2, this._maxQueryRate()))
      return await this._expandPagedSet(e2, this._maxQueryRate(), 0, 0, s2), this._refineSetBlock(e2, t2, s2);
    this._checkCancelled(s2);
    const n2 = e2._candidates.length;
    this._refineKnowns(e2, t2);
    let i = n2 - e2._candidates.length;
    if (0 === e2._candidates.length)
      return e2;
    if (i >= t2)
      return e2;
    if (await this._refineIfParentKnown(e2, t2 - i, s2), this._checkCancelled(s2), this._refineKnowns(e2, t2 - i), i = n2 - e2._candidates.length, i < t2 && e2._candidates.length > 0) {
      const n3 = t2 - i, a2 = this._prepareFetchAndRefineSet(e2._candidates);
      return await this._fetchAndRefineFeatures(a2, a2.length > n3 ? n3 : e2._candidates.length, s2), this._checkCancelled(s2), this._refineKnowns(e2, t2 - i), e2;
    }
    return e2;
  }
  _fetchAndRefineFeatures(e2, t2, s2) {
    return null;
  }
  _prepareFetchAndRefineSet(e2) {
    const t2 = [];
    for (let s2 = 0; s2 < e2.length; s2++)
      this._isPhysicalFeature(e2[s2]) && t2.push(e2[s2]);
    return t2;
  }
  _isPhysicalFeature(e2) {
    return null === this._parent || this._parent._isPhysicalFeature(e2);
  }
  _refineKnowns(e2, t2) {
    let s2 = 0, n2 = null;
    const i = [];
    t2 = this._maxQueryRate();
    for (let a2 = 0; a2 < e2._candidates.length && "GETPAGES" !== e2._candidates[a2]; a2++) {
      let r2 = false;
      const u2 = this._candidateIdTransform(e2._candidates[a2]);
      u2 !== e2._candidates[a2] && (r2 = true);
      const h2 = this._isInFeatureSet(u2);
      if (h2 === s$1.InFeatureSet)
        true === r2 ? e2._known.includes(u2) || (e2._known.push(u2), s2 += 1) : (e2._known.push(e2._candidates[a2]), s2 += 1), null === n2 ? n2 = { start: a2, end: a2 } : n2.end === a2 - 1 ? n2.end = a2 : (i.push(n2), n2 = { start: a2, end: a2 });
      else if (h2 === s$1.NotInFeatureSet)
        null === n2 ? n2 = { start: a2, end: a2 } : n2.end === a2 - 1 ? n2.end = a2 : (i.push(n2), n2 = { start: a2, end: a2 }), s2 += 1;
      else if (h2 === s$1.Unknown && (s2 += 1, true === e2._ordered))
        break;
      if (s2 >= t2)
        break;
    }
    null !== n2 && i.push(n2);
    for (let a2 = i.length - 1; a2 >= 0; a2--)
      e2._candidates.splice(i[a2].start, i[a2].end - i[a2].start + 1);
  }
  _refineIfParentKnown(e2, t$12, s2) {
    const n2 = new t([], [], e2._ordered, null);
    return n2._candidates = e2._candidates.slice(0), this._parent._refineSetBlock(n2, t$12, s2);
  }
  _candidateIdTransform(e2) {
    return this._parent._candidateIdTransform(e2);
  }
  _checkIfNeedToExpandKnownPage(e2, t2) {
    if (null === e2.pagesDefinition)
      return false;
    let s2 = 0;
    for (let n2 = e2._lastFetchedIndex; n2 < e2._known.length; n2++) {
      if ("GETPAGES" === e2._known[n2])
        return true;
      if (void 0 === this._featureCache[e2._known[n2]] && (s2 += 1, s2 >= t2))
        break;
    }
    return false;
  }
  _checkIfNeedToExpandCandidatePage(e2, t2) {
    if (null === e2.pagesDefinition)
      return false;
    let s2 = 0;
    for (let n2 = 0; n2 < e2._candidates.length; n2++) {
      if ("GETPAGES" === e2._candidates[n2])
        return true;
      if (s2 += 1, s2 >= t2)
        break;
    }
    return false;
  }
  async _expandPagedSet(e2, n2, i, a2, r$12) {
    if (null === this._parent)
      throw new s(r.NotImplemented);
    return this._parent._expandPagedSet(e2, n2, i, a2, r$12);
  }
  async _expandPagedSetFeatureSet(e2, t2, s2, n2, i) {
    if (e2._known.length > 0 && "GETPAGES" === e2._known[e2._known.length - 1] && (n2 = 1), 0 === n2 && e2._candidates.length > 0 && "GETPAGES" === e2._candidates[e2._candidates.length - 1] && (n2 = 2), 0 === n2)
      return "finished";
    const a2 = await this._getPage(e2, n2, i);
    return s2 + a2 < t2 ? this._expandPagedSet(e2, t2, s2 + a2, 0, i) : "success";
  }
  async _getPage(e2, t2, s2) {
    const n2 = 1 === t2 ? e2._known : e2._candidates;
    if (e2.pagesDefinition.internal.set.length > e2.pagesDefinition.resultOffset || true === e2.pagesDefinition.internal.fullyResolved) {
      n2.length = n2.length - 1;
      let t3 = 0;
      for (let i = 0; i < e2.pagesDefinition.resultRecordCount && !(e2.pagesDefinition.resultOffset + i >= e2.pagesDefinition.internal.set.length); i++)
        n2[n2.length] = e2.pagesDefinition.internal.set[e2.pagesDefinition.resultOffset + i], t3++;
      e2.pagesDefinition.resultOffset += t3;
      let s3 = false;
      return true === e2.pagesDefinition.internal.fullyResolved && e2.pagesDefinition.internal.set.length <= e2.pagesDefinition.resultOffset && (s3 = true), false === s3 && n2.push("GETPAGES"), t3;
    }
    return await this._getPhysicalPage(e2, t2, s2), this._getPage(e2, t2, s2);
  }
  _getPhysicalPage(e2, t2, s2) {
    return null;
  }
  _clonePageDefinition(e2) {
    return null === this._parent ? null : this._parent._clonePageDefinition(e2);
  }
  _first(e2) {
    return this.iterator(e2).next();
  }
  first(e2) {
    return this._first(e2);
  }
  async calculateStatistic(e2, t2, s2, n2) {
    await this._ensureLoaded();
    let i = await this._stat(e2, t2, "", null, null, s2, n2);
    return false === i.calculated && (i = await this._manualStat(e2, t2, s2, n2)), i.result;
  }
  async _manualStat(e2, t2, s2, n2) {
    let i = null;
    switch (e2.toLowerCase()) {
      case "count":
        return i = await q(this, n2), { calculated: true, result: i };
      case "distinct":
        return i = await S(this, t2, s2, n2), { calculated: true, result: i };
      case "avg":
      case "mean":
        return i = await M(this, t2, n2), { calculated: true, result: i };
      case "stdev":
        return i = await T(this, t2, n2), { calculated: true, result: i };
      case "variance":
        return i = await x$1(this, t2, n2), { calculated: true, result: i };
      case "sum":
        return i = await k(this, t2, n2), { calculated: true, result: i };
      case "min":
        return i = await v(this, t2, n2), { calculated: true, result: i };
      case "max":
        return i = await y(this, t2, n2), { calculated: true, result: i };
      default:
        return { calculated: true, result: 0 };
    }
  }
  async _stat(e2, t2, s2, n2, i, a2, r2) {
    const l2 = await this._parent._stat(e2, t2, s2, n2, i, a2, r2);
    return false === l2.calculated ? null === i && "" === s2 && null === n2 ? this._manualStat(e2, t2, a2, r2) : { calculated: false } : l2;
  }
  _unionAllGeomSelf(e2) {
    const t2 = this.iterator(this._defaultTracker(e2)), s2 = [];
    return new Promise((e3, n2) => {
      this._unionShapeInBatches(s2, t2, e3, n2);
    });
  }
  _unionAllGeom(e2) {
    return new Promise((t2, s2) => {
      const n2 = this.iterator(this._defaultTracker(e2)), i = [];
      this._unionShapeInBatches(i, n2, t2, s2);
    });
  }
  _unionShapeInBatches(e2, t2, s2, n2) {
    t2.next().then((i) => {
      try {
        null !== i && null !== i.geometry && e2.push(i.geometry), e2.length > 30 || null === i && e2.length > 1 ? b$1(e2).then((a2) => {
          try {
            null === i ? s2(a2) : (e2 = [a2], this._unionShapeInBatches(e2, t2, s2, n2));
          } catch (r2) {
            n2(r2);
          }
        }, n2) : null === i ? 1 === e2.length ? s2(e2[0]) : s2(null) : this._unionShapeInBatches(e2, t2, s2, n2);
      } catch (a2) {
        n2(a2);
      }
    }, n2);
  }
  iterator(e$1) {
    return new e(this, e$1);
  }
  intersection(e2, t2 = false) {
    return x._featuresetFunctions.intersection.bind(this)(e2, t2);
  }
  difference(e2, t2 = false, s2 = true) {
    return x._featuresetFunctions.difference.bind(this)(e2, t2, s2);
  }
  symmetricDifference(e2, t2 = false, s2 = true) {
    return x._featuresetFunctions.symmetricDifference.bind(this)(e2, t2, s2);
  }
  morphShape(e2, t2, s2 = "unknown", n2 = null) {
    return x._featuresetFunctions.morphShape.bind(this)(e2, t2, s2, n2);
  }
  morphShapeAndAttributes(e2, t2, s2 = "unknown") {
    return x._featuresetFunctions.morphShapeAndAttributes.bind(this)(e2, t2, s2);
  }
  union(e2, t2 = false) {
    return x._featuresetFunctions.union.bind(this)(e2, t2);
  }
  intersects(e2) {
    return x._featuresetFunctions.intersects.bind(this)(e2);
  }
  envelopeIntersects(e2) {
    return x._featuresetFunctions.envelopeIntersects.bind(this)(e2);
  }
  contains(e2) {
    return x._featuresetFunctions.contains.bind(this)(e2);
  }
  overlaps(e2) {
    return x._featuresetFunctions.overlaps.bind(this)(e2);
  }
  relate(e2, t2) {
    return x._featuresetFunctions.relate.bind(this)(e2, t2);
  }
  within(e2) {
    return x._featuresetFunctions.within.bind(this)(e2);
  }
  touches(e2) {
    return x._featuresetFunctions.touches.bind(this)(e2);
  }
  top(e2) {
    return x._featuresetFunctions.top.bind(this)(e2);
  }
  crosses(e2) {
    return x._featuresetFunctions.crosses.bind(this)(e2);
  }
  buffer(e2, t2, s2, n2 = true) {
    return x._featuresetFunctions.buffer.bind(this)(e2, t2, s2, n2);
  }
  filter(e2, t2 = null) {
    return x._featuresetFunctions.filter.bind(this)(e2, t2);
  }
  orderBy(e2) {
    return x._featuresetFunctions.orderBy.bind(this)(e2);
  }
  dissolve(e2, t2) {
    return x._featuresetFunctions.dissolve.bind(this)(e2, t2);
  }
  groupby(e2, t2) {
    return x._featuresetFunctions.groupby.bind(this)(e2, t2);
  }
  reduce(e2, t2 = null, s2) {
    return new Promise((n2, i) => {
      this._reduceImpl(this.iterator(this._defaultTracker(s2)), e2, t2, 0, n2, i, 0);
    });
  }
  _reduceImpl(e2, t2, s2, n2, i, a2, r2) {
    try {
      if (++r2 > 1e3)
        return void setTimeout(() => {
          r2 = 0, this._reduceImpl(e2, t2, s2, n2, i, a2, r2);
        });
      e2.next().then((l2) => {
        try {
          if (null === l2)
            i(s2);
          else {
            const u2 = t2(s2, l2, n2, this);
            E$1(u2) ? u2.then((s3) => {
              this._reduceImpl(e2, t2, s3, n2 + 1, i, a2, r2);
            }, a2) : this._reduceImpl(e2, t2, u2, n2 + 1, i, a2, r2);
          }
        } catch (u2) {
          a2(u2);
        }
      }, a2);
    } catch (l2) {
      a2(l2);
    }
  }
  removeField(e2) {
    return x._featuresetFunctions.removeField.bind(this)(e2);
  }
  addField(e2, t2, s2 = null) {
    return x._featuresetFunctions.addField.bind(this)(e2, t2, s2);
  }
  sumArea(e2, t2 = false, s2) {
    const n2 = O$2(e2);
    return this.reduce((e3, s3) => null === s3.geometry ? 0 : t2 ? K(s3.geometry, n2).then((t3) => e3 + t3) : W(s3.geometry, n2).then((t3) => e3 + t3), 0, s2);
  }
  sumLength(e2, t2 = false, s2) {
    const n2 = I$1(e2);
    return this.reduce((e3, s3) => null === s3.geometry ? 0 : t2 ? M$1(s3.geometry, n2).then((t3) => e3 + t3) : F$2(s3.geometry, n2).then((t3) => e3 + t3), 0, s2);
  }
  _substituteVars(e2, t2) {
    if (null !== t2) {
      const s2 = {};
      for (const e3 in t2)
        s2[e3.toLowerCase()] = t2[e3];
      e2.parameters = s2;
    }
  }
  async distinct(e2, t2 = 1e3, s2 = null, n2) {
    await this.load();
    const i = x$2.create(e2, this.getFieldsIndex(), this.dateFieldsTimeZoneDefaultUTC);
    return this._substituteVars(i, s2), this.calculateStatistic("distinct", i, t2, this._defaultTracker(n2));
  }
  async min(e2, t2 = null, s2) {
    await this.load();
    const n2 = x$2.create(e2, this.getFieldsIndex(), this.dateFieldsTimeZoneDefaultUTC);
    return this._substituteVars(n2, t2), this.calculateStatistic("min", n2, -1, this._defaultTracker(s2));
  }
  async max(e2, t2 = null, s2) {
    await this.load();
    const n2 = x$2.create(e2, this.getFieldsIndex(), this.dateFieldsTimeZoneDefaultUTC);
    return this._substituteVars(n2, t2), this.calculateStatistic("max", n2, -1, this._defaultTracker(s2));
  }
  async avg(e2, t2 = null, s2) {
    await this.load();
    const n2 = x$2.create(e2, this.getFieldsIndex(), this.dateFieldsTimeZoneDefaultUTC);
    return this._substituteVars(n2, t2), this.calculateStatistic("avg", n2, -1, this._defaultTracker(s2));
  }
  async sum(e2, t2 = null, s2) {
    await this.load();
    const n2 = x$2.create(e2, this.getFieldsIndex(), this.dateFieldsTimeZoneDefaultUTC);
    return this._substituteVars(n2, t2), this.calculateStatistic("sum", n2, -1, this._defaultTracker(s2));
  }
  async stdev(e2, t2 = null, s2) {
    await this.load();
    const n2 = x$2.create(e2, this.getFieldsIndex(), this.dateFieldsTimeZoneDefaultUTC);
    return this._substituteVars(n2, t2), this.calculateStatistic("stdev", n2, -1, this._defaultTracker(s2));
  }
  async variance(e2, t2 = null, s2) {
    await this.load();
    const n2 = x$2.create(e2, this.getFieldsIndex(), this.dateFieldsTimeZoneDefaultUTC);
    return this._substituteVars(n2, t2), this.calculateStatistic("variance", n2, -1, this._defaultTracker(s2));
  }
  async count(e2) {
    return await this.load(), this.calculateStatistic("count", x$2.create("1", this.getFieldsIndex(), this.dateFieldsTimeZoneDefaultUTC), -1, this._defaultTracker(e2));
  }
  _defaultTracker(e2) {
    return e2 ?? { aborted: false };
  }
  forEach(e2, t2) {
    return new Promise((s2, n2) => {
      this._forEachImpl(this.iterator(this._defaultTracker(t2)), e2, this, s2, n2, 0);
    });
  }
  _forEachImpl(e2, t2, s2, n2, i, a2) {
    try {
      if (++a2 > 1e3)
        return void setTimeout(() => {
          a2 = 0, this._forEachImpl(e2, t2, s2, n2, i, a2);
        }, 0);
      e2.next().then((r2) => {
        try {
          if (null === r2)
            n2(s2);
          else {
            const l2 = t2(r2);
            null == l2 ? this._forEachImpl(e2, t2, s2, n2, i, a2) : E$1(l2) ? l2.then(() => {
              try {
                this._forEachImpl(e2, t2, s2, n2, i, a2);
              } catch (r3) {
                i(r3);
              }
            }, i) : this._forEachImpl(e2, t2, s2, n2, i, a2);
          }
        } catch (l2) {
          i(l2);
        }
      }, i);
    } catch (r2) {
      i(r2);
    }
  }
  convertToJSON(e2) {
    const t2 = { layerDefinition: { geometryType: this.geometryType, fields: [] }, featureSet: { features: [], geometryType: this.geometryType } };
    for (let s2 = 0; s2 < this.fields.length; s2++)
      t2.layerDefinition.fields.push(p$2(this.fields[s2]));
    return this.reduce((e3, s2) => {
      const n2 = { geometry: s2.geometry?.toJSON(), attributes: {} };
      for (const t3 in s2.attributes)
        n2.attributes[t3] = s2.attributes[t3];
      return t2.featureSet.features.push(n2), 1;
    }, 0, e2).then(() => t2);
  }
  castToText(e2 = false) {
    return "object, FeatureSet";
  }
  queryAttachments(e2, t2, s2, n2, i) {
    return this._parent.queryAttachments(e2, t2, s2, n2, i);
  }
  serviceUrl() {
    return this._parent.serviceUrl();
  }
  subtypes() {
    return this.typeIdField ? { subtypeField: this.typeIdField, subtypes: this.types ? this.types.map((e2) => ({ name: e2.name, code: e2.id })) : [] } : null;
  }
  relationshipMetaData() {
    return this._parent.relationshipMetaData();
  }
  get gdbVersion() {
    return this._parent ? this._parent.gdbVersion : "";
  }
  schema() {
    const e2 = [];
    for (const t2 of this.fields)
      e2.push(p$2(t2));
    return { objectIdField: this.objectIdField, globalIdField: this.globalIdField, geometryType: void 0 === E$2[this.geometryType] ? "esriGeometryNull" : E$2[this.geometryType], fields: e2 };
  }
  async convertToText(e2, t2) {
    if ("schema" === e2)
      return await this._ensureLoaded(), JSON.stringify(this.schema());
    if ("featureset" === e2) {
      await this._ensureLoaded();
      const e3 = [];
      await this.reduce((t3, s3) => {
        const n2 = { geometry: s3.geometry ? s3.geometry.toJSON() : null, attributes: s3.attributes };
        return null !== n2.geometry && n2.geometry.spatialReference && delete n2.geometry.spatialReference, e3.push(n2), 1;
      }, 0, t2);
      const s2 = this.schema();
      return s2.features = e3, s2.spatialReference = this.spatialReference.toJSON(), JSON.stringify(s2);
    }
    return this.castToText();
  }
  getFeatureByObjectId(e2, t2) {
    return this._parent.getFeatureByObjectId(e2, t2);
  }
  getOwningSystemUrl() {
    return this._parent.getOwningSystemUrl();
  }
  getIdentityUser() {
    return this._parent.getIdentityUser();
  }
  getRootFeatureSet() {
    return null !== this._parent ? this._parent.getRootFeatureSet() : this;
  }
  getDataSourceFeatureSet() {
    return null !== this._parent ? this._parent.getDataSourceFeatureSet() : this;
  }
  castAsJson(e2 = null) {
    return "keeptype" === e2?.featureset ? this : "none" === e2?.featureset ? null : { type: "FeatureSet" };
  }
  async castAsJsonAsync(e2 = null, t2 = null) {
    if ("keeptype" === t2?.featureset)
      return this;
    if ("schema" === t2?.featureset)
      return await this._ensureLoaded(), JSON.parse(JSON.stringify(this.schema()));
    if ("none" === t2?.featureset)
      return null;
    await this._ensureLoaded();
    const s2 = [];
    await this.reduce((e3, n3) => {
      const i = { geometry: n3.geometry ? true === t2?.keepGeometryType ? n3.geometry : n3.geometry.toJSON() : null, attributes: n3.attributes };
      return null !== i.geometry && i.geometry.spatialReference && true !== t2?.keepGeometryType && delete i.geometry.spatialReference, s2.push(i), 1;
    }, 0, e2);
    const n2 = this.schema();
    return n2.features = s2, n2.spatialReference = true === t2?.keepGeometryType ? this.spatialReference : this.spatialReference?.toJSON(), n2;
  }
  fieldTimeZone(e2) {
    return this.getFieldsIndex().getTimeZone(e2);
  }
  get preferredTimeZone() {
    return this._parent?.preferredTimeZone ?? null;
  }
  get dateFieldsTimeZone() {
    return this._parent?.dateFieldsTimeZone ?? null;
  }
  get dateFieldsTimeZoneDefaultUTC() {
    if (this.datesInUnknownTimezone)
      return "unknown";
    const e2 = this.dateFieldsTimeZone ?? "UTC";
    return "" === e2 ? "UTC" : e2;
  }
  get datesInUnknownTimezone() {
    return this._parent.datesInUnknownTimezone;
  }
  get editFieldsInfo() {
    return this._parent?.editFieldsInfo ?? null;
  }
  get timeInfo() {
    return this._parent?.timeInfo ?? null;
  }
  set featureSetInfo(e2) {
    this.fsetInfo = e2;
  }
  async getFeatureSetInfo() {
    return this.fsetInfo ?? await this._parent?.getFeatureSetInfo() ?? null;
  }
}
x._featuresetFunctions = {};
class u extends x {
  constructor(e2) {
    super(e2), this.declaredClass = "esri.layers.featureset.sources.Empty", this._maxProcessing = 1e3, this._wset = new t([], [], false, null), this._parent = e2.parentfeatureset, this._databaseType = l.Standardised;
  }
  async _getSet() {
    return this._wset;
  }
  optimisePagingFeatureQueries() {
  }
  _isInFeatureSet() {
    return s$1.NotInFeatureSet;
  }
  async _getFeature() {
    throw new s(r.NeverReach);
  }
  async queryAttachments() {
    return [];
  }
  async _getFeatures() {
    return "success";
  }
  _featureFromCache() {
    return null;
  }
  async _fetchAndRefineFeatures() {
    throw new s(r.NeverReach);
  }
  async _getFilteredSet() {
    return new t([], [], false, null);
  }
  _stat(e2, t2, r2, s2, a2, n2, u2) {
    return this._manualStat(e2, t2, n2, u2);
  }
  async _canDoAggregates() {
    return false;
  }
}
class f extends x {
  constructor(e2) {
    super(e2), this._relation = "", this._relationGeom = null, this._relationString = "", this.declaredClass = "esri.arcade.featureset.actions.SpatialFilter", this._relationString = e2.relationString, this._parent = e2.parentfeatureset, this._maxProcessing = 40, this._relation = e2.relation, this._relationGeom = e2.relationGeom;
  }
  async _getSet(e2) {
    if (null === this._wset) {
      await this._ensureLoaded();
      const t$12 = await this._parent._getFilteredSet("esriSpatialRelRelation" !== this._relation ? this._relation : this._relation + ":" + this._relationString, this._relationGeom, null, null, e2);
      return this._checkCancelled(e2), this._wset = new t(t$12._candidates.slice(0), t$12._known.slice(0), t$12._ordered, this._clonePageDefinition(t$12.pagesDefinition)), this._wset;
    }
    return this._wset;
  }
  _isInFeatureSet(e2) {
    let t2 = this._parent._isInFeatureSet(e2);
    return t2 === s$1.NotInFeatureSet ? t2 : (t2 = this._idstates[e2], void 0 === t2 ? s$1.Unknown : t2);
  }
  _getFeature(e2, t2, i) {
    return this._parent._getFeature(e2, t2, i);
  }
  _getFeatures(e2, t2, i, r2) {
    return this._parent._getFeatures(e2, t2, i, r2);
  }
  _featureFromCache(e2) {
    return this._parent._featureFromCache(e2);
  }
  async executeSpatialRelationTest(e2) {
    if (null === e2.geometry)
      return false;
    switch (this._relation) {
      case "esriSpatialRelEnvelopeIntersects":
        return h$2(v$2(this._relationGeom), v$2(e2.geometry));
      case "esriSpatialRelIntersects":
        return h$2(this._relationGeom, e2.geometry);
      case "esriSpatialRelContains":
        return p$3(this._relationGeom, e2.geometry);
      case "esriSpatialRelOverlaps":
        return O$3(this._relationGeom, e2.geometry);
      case "esriSpatialRelWithin":
        return x$3(this._relationGeom, e2.geometry);
      case "esriSpatialRelTouches":
        return S$2(this._relationGeom, e2.geometry);
      case "esriSpatialRelCrosses":
        return m$3(this._relationGeom, e2.geometry);
      case "esriSpatialRelRelation":
        return R$1(this._relationGeom, e2.geometry, this._relationString ?? "");
    }
  }
  async _fetchAndRefineFeatures(e2, t$12, i) {
    const r2 = new t([], e2, false, null), s2 = Math.min(t$12, e2.length);
    await this._parent?._getFeatures(r2, -1, s2, i), this._checkCancelled(i);
    const l2 = [];
    for (let n2 = 0; n2 < s2; n2++) {
      const t2 = this._parent._featureFromCache(e2[n2]);
      l2.push(await this.executeSpatialRelationTest(t2));
    }
    for (let n2 = 0; n2 < t$12; n2++)
      true === l2[n2] ? this._idstates[e2[n2]] = s$1.InFeatureSet : this._idstates[e2[n2]] = s$1.NotInFeatureSet;
    return "success";
  }
  async _getFilteredSet(e2, t$12, i, r2, a2) {
    await this._ensureLoaded();
    const s2 = await this._parent._getFilteredSet("esriSpatialRelRelation" !== this._relation ? this._relation : this._relation + ":" + this._relationString, this._relationGeom, i, r2, a2);
    let l2;
    return this._checkCancelled(a2), l2 = null !== t$12 ? new t(s2._candidates.slice(0).concat(s2._known.slice(0)), [], s2._ordered, this._clonePageDefinition(s2.pagesDefinition)) : new t(s2._candidates.slice(0), s2._known.slice(0), s2._ordered, this._clonePageDefinition(s2.pagesDefinition)), l2;
  }
  async _stat(e2, t2, i, r2, n2, a2, s2) {
    if ("" !== i)
      return { calculated: false };
    const l2 = await this._parent._stat(e2, t2, "esriSpatialRelRelation" !== this._relation ? this._relation : this._relation + ":" + this._relationString, this._relationGeom, n2, a2, s2);
    return false === l2.calculated ? null === n2 && "" === i && null === r2 ? this._manualStat(e2, t2, a2, s2) : { calculated: false } : l2;
  }
  async _canDoAggregates(e2, t2, i, r2, n2) {
    return "" === i && null === r2 && (null !== this._parent && this._parent._canDoAggregates(e2, t2, "esriSpatialRelRelation" !== this._relation ? this._relation : this._relation + ":" + this._relationString, this._relationGeom, n2));
  }
  async _getAggregatePagesDataSourceDefinition(e2, r$12, n2, a2, s$12, l2, o) {
    if (null === this._parent)
      throw new s(r.NeverReach);
    return this._parent._getAggregatePagesDataSourceDefinition(e2, r$12, "esriSpatialRelRelation" !== this._relation ? this._relation : this._relation + ":" + this._relationString, this._relationGeom, s$12, l2, o);
  }
  static registerAction() {
    x._featuresetFunctions.intersects = function(t2) {
      return null == t2 ? new u({ parentfeatureset: this }) : new f({ parentfeatureset: this, relation: "esriSpatialRelIntersects", relationGeom: t2 });
    }, x._featuresetFunctions.envelopeIntersects = function(t2) {
      return null == t2 ? new u({ parentfeatureset: this }) : new f({ parentfeatureset: this, relation: "esriSpatialRelEnvelopeIntersects", relationGeom: t2 });
    }, x._featuresetFunctions.contains = function(t2) {
      return null == t2 ? new u({ parentfeatureset: this }) : new f({ parentfeatureset: this, relation: "esriSpatialRelContains", relationGeom: t2 });
    }, x._featuresetFunctions.overlaps = function(t2) {
      return null == t2 ? new u({ parentfeatureset: this }) : new f({ parentfeatureset: this, relation: "esriSpatialRelOverlaps", relationGeom: t2 });
    }, x._featuresetFunctions.within = function(t2) {
      return null == t2 ? new u({ parentfeatureset: this }) : new f({ parentfeatureset: this, relation: "esriSpatialRelWithin", relationGeom: t2 });
    }, x._featuresetFunctions.touches = function(t2) {
      return null == t2 ? new u({ parentfeatureset: this }) : new f({ parentfeatureset: this, relation: "esriSpatialRelTouches", relationGeom: t2 });
    }, x._featuresetFunctions.crosses = function(t2) {
      return null == t2 ? new u({ parentfeatureset: this }) : new f({ parentfeatureset: this, relation: "esriSpatialRelCrosses", relationGeom: t2 });
    }, x._featuresetFunctions.relate = function(t2, i) {
      return null == t2 ? new u({ parentfeatureset: this }) : new f({ parentfeatureset: this, relation: "esriSpatialRelRelation", relationGeom: t2, relationString: i });
    };
  }
  getFieldsIndex() {
    return this._parent.getFieldsIndex();
  }
}
export {
  D,
  E,
  F,
  I,
  L,
  S$1 as S,
  T$1 as T,
  f$2 as a,
  w as b,
  a as c,
  d,
  f,
  g$1 as g,
  m$1 as m,
  p$1 as p,
  t,
  u,
  v$1 as v,
  w$1 as w,
  x,
  y$1 as y
};
