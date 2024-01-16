import { dC as r$6, es as E$4, cy as x$5, d4 as y$5, ap as M$6, bq as j$3, dy as m$8, dz as u$8, hd as p$9, aK as c$5, kH as a$6, kX as r$7, cZ as f$5, cF as s$c, dj as Z$5, cw as p$b, dp as st, fl as m$9, io as G$6, ie as z$7, b$ as n$7, aY as j$4, CO as N$5, a$ as j$5, aq as has, b8 as a$8 } from "./chunk-KFNcxJaF.js";
import { m as m$7, b as n$5, n as n$6, h as h$4, c as c$6, r as r$8, a as a$7 } from "./chunk-Tt9yuqqG.js";
import { DateTime } from "luxon";
import { s as s$b, p as p$a } from "./chunk-pLXZyeZ7.js";
import { i as i$8 } from "./chunk-uS4nEbwW.js";
let s$a = class s {
  constructor(s6) {
    this.source = s6;
  }
};
let s$9 = class s2 {
  constructor(s6, t6) {
    this._moduleSingletons = s6, this._syntaxModules = t6;
  }
  loadLibrary(s6) {
    if (null == this._syntaxModules)
      return null;
    const t6 = this._syntaxModules[s6.toLowerCase()];
    return t6 ? { syntax: t6.script, uri: t6.uri } : null;
  }
};
var r$5;
!function(e4) {
  e4.AsyncNotEnabled = "AsyncNotEnabled", e4.ModulesNotSupported = "ModulesNotSupported", e4.CircularModules = "CircularModules", e4.CannotCompareDateAndTime = "CannotCompareDateAndTime", e4.NeverReach = "NeverReach", e4.UnsupportedHashType = "UnsupportedHashType", e4.InvalidParameter = "InvalidParameter", e4.UnexpectedToken = "UnexpectedToken", e4.Unrecognized = "Unrecognized", e4.UnrecognizedType = "UnrecognizedType", e4.MaximumCallDepth = "MaximumCallDepth", e4.BooleanConditionRequired = "BooleanConditionRequired", e4.TypeNotAllowedInFeature = "TypeNotAllowedInFeature", e4.KeyMustBeString = "KeyMustBeString", e4.WrongNumberOfParameters = "WrongNumberOfParameters", e4.CallNonFunction = "CallNonFunction", e4.NoFunctionInTemplateLiteral = "NoFunctionInTemplateLiteral", e4.NoFunctionInDictionary = "NoFunctionInDictionary", e4.NoFunctionInArray = "NoFunctionInArray", e4.AssignModuleFunction = "AssignModuleFunction", e4.LogicExpressionOrAnd = "LogicExpressionOrAnd", e4.LogicalExpressionOnlyBoolean = "LogicalExpressionOnlyBoolean", e4.FunctionNotFound = "FunctionNotFound", e4.InvalidMemberAccessKey = "InvalidMemberAccessKey", e4.UnsupportedUnaryOperator = "UnsupportUnaryOperator", e4.InvalidIdentifier = "InvalidIdentifier", e4.MemberOfNull = "MemberOfNull", e4.UnsupportedOperator = "UnsupportedOperator", e4.Cancelled = "Cancelled", e4.ModuleAccessorMustBeString = "ModuleAccessorMustBeString", e4.ModuleExportNotFound = "ModuleExportNotFound", e4.Immutable = "Immutable", e4.OutOfBounds = "OutOfBounds", e4.IllegalResult = "IllegalResult", e4.FieldNotFound = "FieldNotFound", e4.PortalRequired = "PortalRequired", e4.LogicError = "LogicError", e4.ArrayAccessorMustBeNumber = "ArrayAccessMustBeNumber", e4.KeyAccessorMustBeString = "KeyAccessorMustBeString", e4.WrongSpatialReference = "WrongSpatialReference", e4.CannotChangeTimeZoneTime = "CannotChangeTimeZoneTime", e4.CannotChangeTimeZoneDateOnly = "CannotChangeTimeZoneDateOnly";
}(r$5 || (r$5 = {}));
const o$5 = { [r$5.TypeNotAllowedInFeature]: "Feature attributes only support dates, numbers, strings, guids.", [r$5.LogicError]: "Logic error - {reason}", [r$5.CannotCompareDateAndTime]: "Cannot compare date or dateonly with timeonly types", [r$5.NeverReach]: "Encountered unreachable logic", [r$5.AsyncNotEnabled]: "Async Arcade must be enabled for this script", [r$5.ModuleAccessorMustBeString]: "Module accessor must be a string", [r$5.ModuleExportNotFound]: "Module has no export with provided identifier", [r$5.ModulesNotSupported]: "Current profile does not support modules", [r$5.ArrayAccessorMustBeNumber]: "Array accessor must be a number", [r$5.FunctionNotFound]: "Function not found", [r$5.FieldNotFound]: "Key not found - {key}", [r$5.CircularModules]: "Circular module dependencies are not allowed", [r$5.Cancelled]: "Execution cancelled", [r$5.UnsupportedHashType]: "Type not supported in hash function", [r$5.IllegalResult]: "Value is not a supported return type", [r$5.PortalRequired]: "Portal is required", [r$5.InvalidParameter]: "Invalid parameter", [r$5.WrongNumberOfParameters]: "Call with wrong number of parameters", [r$5.Unrecognized]: "Unrecognized code structure", [r$5.UnrecognizedType]: "Unrecognized type", [r$5.WrongSpatialReference]: "Cannot work with geometry in this spatial reference. It is different to the execution spatial reference", [r$5.BooleanConditionRequired]: "Conditions must use booleans", [r$5.NoFunctionInDictionary]: "Dictionaries cannot contain functions.", [r$5.NoFunctionInArray]: "Arrays cannot contain functions.", [r$5.NoFunctionInTemplateLiteral]: "Template Literals do not expect functions by value.", [r$5.KeyAccessorMustBeString]: "Accessor must be a string", [r$5.KeyMustBeString]: "Object keys must be a string", [r$5.Immutable]: "Object is immutable", [r$5.UnexpectedToken]: "Unexpected token", [r$5.MemberOfNull]: "Cannot access property of null object", [r$5.MaximumCallDepth]: "Exceeded maximum function depth", [r$5.OutOfBounds]: "Out of bounds", [r$5.InvalidIdentifier]: "Identifier not recognized", [r$5.CallNonFunction]: "Expression is not a function", [r$5.InvalidMemberAccessKey]: "Cannot access value using a key of this type", [r$5.AssignModuleFunction]: "Cannot assign function to module variable", [r$5.UnsupportedUnaryOperator]: "Unsupported unary operator", [r$5.UnsupportedOperator]: "Unsupported operator", [r$5.LogicalExpressionOnlyBoolean]: "Logical expressions must be boolean", [r$5.LogicExpressionOrAnd]: "Logical expression can only be combined with || or &&", [r$5.CannotChangeTimeZoneTime]: "Cannot change the timezone of a Time", [r$5.CannotChangeTimeZoneDateOnly]: "Cannot change the timezone of a DateOnly" };
let n$4 = class n extends Error {
  constructor(...e4) {
    super(...e4);
  }
};
let t$6 = class t extends n$4 {
  constructor(e4, r3) {
    super(c$4(r3) + e4.message, { cause: e4 }), this.loc = null, Error.captureStackTrace && Error.captureStackTrace(this, t), r3?.loc && (this.loc = r3.loc);
  }
};
let a$5 = class a extends Error {
  constructor(r3, n3, t6, s6) {
    super("Execution error - " + c$4(t6) + r$6(o$5[n3], s6)), this.loc = null, this.declaredRootClass = "esri.arcade.arcadeexecutionerror", Error.captureStackTrace && Error.captureStackTrace(this, a), t6?.loc && (this.loc = t6.loc);
  }
};
function c$4(e4) {
  return e4 && e4.loc ? `Line : ${e4.loc.start?.line}, ${e4.loc.start?.column}: ` : "";
}
let s$8 = class s3 extends Error {
  constructor(r3, n3, t6, a3) {
    super("Compilation error - " + c$4(t6) + r$6(o$5[n3], a3)), this.loc = null, this.declaredRootClass = "esri.arcade.arcadecompilationerror", Error.captureStackTrace && Error.captureStackTrace(this, s3), t6?.loc && (this.loc = t6.loc);
  }
};
let i$7 = class i extends Error {
  constructor() {
    super("Uncompilable code structures"), this.declaredRootClass = "esri.arcade.arcadeuncompilableerror", Error.captureStackTrace && Error.captureStackTrace(this, i);
  }
};
function u$7(e4, r3, o3) {
  return "esri.arcade.arcadeexecutionerror" === o3.declaredRootClass || "esri.arcade.arcadecompilationerror" === o3.declaredRootClass ? null === o3.loc && r3?.loc ? new t$6(o3, { cause: o3 }) : o3 : ("esri.arcade.featureset.support.featureseterror" === o3.declaredRootClass || "esri.arcade.featureset.support.sqlerror" === o3.declaredRootClass || o3.declaredRootClass, r3?.loc ? new t$6(o3, { cause: o3 }) : o3);
}
var l$8;
!function(e4) {
  e4.UnrecognizedUri = "UnrecognizedUri", e4.UnsupportedUriProtocol = "UnsupportedUriProtocol";
}(l$8 || (l$8 = {}));
const d$6 = { [l$8.UnrecognizedUri]: "Unrecognized uri - {uri}", [l$8.UnsupportedUriProtocol]: "Unrecognized uri protocol" };
let p$8 = class p extends Error {
  constructor(r3, o3) {
    super(r$6(d$6[r3], o3)), this.declaredRootClass = "esri.arcade.arcademoduleerror", Error.captureStackTrace && Error.captureStackTrace(this, p);
  }
};
let r$4 = class r {
  constructor() {
  }
};
function n$3(t6, n3, e4) {
  if (t6 instanceof r$4 && !(t6 instanceof s$7)) {
    const r3 = new s$7();
    return r3.fn = t6, r3.parameterEvaluator = e4, r3.context = n3, r3;
  }
  return t6;
}
let e$4 = class e extends r$4 {
  constructor(t6) {
    super(), this.fn = t6;
  }
  createFunction(t6) {
    return (...r3) => this.fn(t6, { preparsed: true, arguments: r3 });
  }
  call(t6, r3) {
    return this.fn(t6, r3);
  }
  marshalledCall(e4, a3, l2, c2) {
    return c2(e4, a3, (a4, o3, i4) => {
      i4 = i4.map((t6) => t6 instanceof r$4 && !(t6 instanceof s$7) ? n$3(t6, e4, c2) : t6);
      const u3 = this.call(l2, { args: i4 });
      return E$4(u3) ? u3.then((t6) => n$3(t6, l2, c2)) : u3;
    });
  }
};
let s$7 = class s4 extends r$4 {
  constructor() {
    super(...arguments), this.fn = null, this.context = null;
  }
  createFunction(t6) {
    return this.fn.createFunction(this.context);
  }
  call(t6, r3) {
    return this.fn.marshalledCall(t6, r3, this.context, this.parameterEvaluator);
  }
  marshalledCall(t6, r3, n3) {
    return this.fn.marshalledCall(t6, r3, this.context, this.parameterEvaluator);
  }
};
let t$5 = class t2 {
  constructor(t6 = []) {
    this._elements = t6;
  }
  length() {
    return this._elements.length;
  }
  get(t6) {
    return this._elements[t6];
  }
  toArray() {
    const t6 = [];
    for (let e4 = 0; e4 < this.length(); e4++)
      t6.push(this.get(e4));
    return t6;
  }
};
let i$6 = class i2 extends t$5 {
  constructor(t6, s6, i4, e4, h3, a3) {
    super(t6), this._lazyPt = [], this._hasZ = false, this._hasM = false, this._spRef = s6, this._hasZ = i4, this._hasM = e4, this._cacheId = h3, this._partId = a3;
  }
  get(t6) {
    if (void 0 === this._lazyPt[t6]) {
      const i4 = this._elements[t6];
      if (void 0 === i4)
        return;
      const e4 = this._hasZ, h3 = this._hasM;
      let a3 = null;
      a3 = e4 && !h3 ? new x$5(i4[0], i4[1], i4[2], void 0, this._spRef) : h3 && !e4 ? new x$5(i4[0], i4[1], void 0, i4[2], this._spRef) : e4 && h3 ? new x$5(i4[0], i4[1], i4[2], i4[3], this._spRef) : new x$5(i4[0], i4[1], this._spRef), a3.cache._arcadeCacheId = this._cacheId.toString() + "-" + this._partId.toString() + "-" + t6.toString(), this._lazyPt[t6] = a3;
    }
    return this._lazyPt[t6];
  }
  equalityTest(t6) {
    return t6 === this || null !== t6 && (t6 instanceof i2 != false && t6.getUniqueHash() === this.getUniqueHash());
  }
  getUniqueHash() {
    return this._cacheId.toString() + "-" + this._partId.toString();
  }
};
let h$3 = class h extends t$5 {
  constructor(t6, s6, h3, i4, e4) {
    super(t6), this._lazyPath = [], this._hasZ = false, this._hasM = false, this._hasZ = h3, this._hasM = i4, this._spRef = s6, this._cacheId = e4;
  }
  get(t6) {
    if (void 0 === this._lazyPath[t6]) {
      const h3 = this._elements[t6];
      if (void 0 === h3)
        return;
      this._lazyPath[t6] = new i$6(h3, this._spRef, this._hasZ, this._hasM, this._cacheId, t6);
    }
    return this._lazyPath[t6];
  }
  equalityTest(t6) {
    return t6 === this || null !== t6 && (t6 instanceof h != false && t6.getUniqueHash() === this.getUniqueHash());
  }
  getUniqueHash() {
    return this._cacheId.toString();
  }
};
var l$7, s$6;
function y$4(e4) {
  return y$5.fromJSON(e4.toJSON());
}
function p$7(e4) {
  return e4.toJSON ? e4.toJSON() : e4;
}
function u$6(e4) {
  return "string" == typeof e4 || e4 instanceof String;
}
function a$4(e4) {
  return "number" == typeof e4;
}
function f$4(e4) {
  return e4 instanceof Date;
}
function d$5(e4) {
  return e4 instanceof DateTime;
}
function T$6(r3) {
  return r3 instanceof m$7;
}
function F$4(e4) {
  return e4 instanceof n$5;
}
function g$4(e4) {
  return e4 instanceof n$6;
}
function G$5(e4, r3) {
  return e4 === r3 || !(!f$4(e4) && !T$6(e4) || !f$4(r3) && !T$6(r3)) && e4.getTime() === r3.getTime();
}
function O$4(e4) {
  if (null == e4)
    return null;
  if ("number" == typeof e4)
    return e4;
  switch (e4.toLowerCase()) {
    case "meters":
    case "meter":
      return 109404;
    case "miles":
    case "mile":
      return 109439;
    case "kilometers":
    case "kilometer":
    case "km":
      return 109414;
  }
  return null;
}
function v$5(e4) {
  if (null == e4)
    return null;
  switch (e4.type) {
    case "polygon":
    case "multipoint":
    case "polyline":
      return e4.extent;
    case "point":
      return new M$6({ xmin: e4.x, ymin: e4.y, xmax: e4.x, ymax: e4.y, spatialReference: e4.spatialReference });
    case "extent":
      return e4;
  }
  return null;
}
function I$6(e4) {
  if (null == e4)
    return null;
  if ("number" == typeof e4)
    return e4;
  if ("number" == typeof e4)
    return e4;
  switch (e4.toLowerCase()) {
    case "meters":
    case "meter":
      return 9001;
    case "miles":
    case "mile":
      return 9093;
    case "kilometers":
    case "kilometer":
    case "km":
      return 9036;
  }
  return null;
}
!function(e4) {
  e4[e4.Standardised = 0] = "Standardised", e4[e4.StandardisedNoInterval = 1] = "StandardisedNoInterval", e4[e4.SqlServer = 2] = "SqlServer", e4[e4.Oracle = 3] = "Oracle", e4[e4.Postgres = 4] = "Postgres", e4[e4.PGDB = 5] = "PGDB", e4[e4.FILEGDB = 6] = "FILEGDB", e4[e4.NotEvaluated = 7] = "NotEvaluated";
}(l$7 || (l$7 = {})), function(e4) {
  e4[e4.InFeatureSet = 0] = "InFeatureSet", e4[e4.NotInFeatureSet = 1] = "NotInFeatureSet", e4[e4.Unknown = 2] = "Unknown";
}(s$6 || (s$6 = {}));
const P$7 = 1e3;
const N$4 = { point: "point", polygon: "polygon", polyline: "polyline", multipoint: "multipoint", extent: "extent", esriGeometryPoint: "point", esriGeometryPolygon: "polygon", esriGeometryPolyline: "polyline", esriGeometryMultipoint: "multipoint", esriGeometryEnvelope: "extent", envelope: "extent" }, E$3 = { point: "esriGeometryPoint", polygon: "esriGeometryPolygon", polyline: "esriGeometryPolyline", multipoint: "esriGeometryMultipoint", extent: "esriGeometryEnvelope", esriGeometryPoint: "esriGeometryPoint", esriGeometryPolygon: "esriGeometryPolygon", esriGeometryPolyline: "esriGeometryPolyline", esriGeometryMultipoint: "esriGeometryMultipoint", esriGeometryEnvelope: "esriGeometryEnvelope", envelope: "esriGeometryEnvelope" }, k$4 = { "small-integer": "esriFieldTypeSmallInteger", integer: "esriFieldTypeInteger", long: "esriFieldTypeLong", single: "esriFieldTypeSingle", double: "esriFieldTypeDouble", string: "esriFieldTypeString", date: "esriFieldTypeDate", "date-only": "esriFieldTypeDateOnly", "time-only": "esriFieldTypeTimeOnly", "timestamp-offset": "esriFieldTypeTimestampOffset", oid: "esriFieldTypeOID", geometry: "esriFieldTypeGeometry", blob: "esriFieldTypeBlob", raster: "esriFieldTypeRaster", guid: "esriFieldTypeGUID", "global-id": "esriFieldTypeGlobalID", xml: "esriFieldTypeXML", "big-integer": "esriFieldTypeBigInteger", esriFieldTypeSmallInteger: "esriFieldTypeSmallInteger", esriFieldTypeInteger: "esriFieldTypeInteger", esriFieldTypeLong: "esriFieldTypeLong", esriFieldTypeSingle: "esriFieldTypeSingle", esriFieldTypeDouble: "esriFieldTypeDouble", esriFieldTypeString: "esriFieldTypeString", esriFieldTypeDate: "esriFieldTypeDate", esriFieldTypeDateOnly: "esriFieldTypeDateOnly", esriFieldTypeTimeOnly: "esriFieldTypeTimeOnly", esriFieldTypeTimestampOffset: "esriFieldTypeTimestampOffset", esriFieldTypeOID: "esriFieldTypeOID", esriFieldTypeGeometry: "esriFieldTypeGeometry", esriFieldTypeBlob: "esriFieldTypeBlob", esriFieldTypeRaster: "esriFieldTypeRaster", esriFieldTypeGUID: "esriFieldTypeGUID", esriFieldTypeGlobalID: "esriFieldTypeGlobalID", esriFieldTypeXML: "esriFieldTypeXML", esriFieldTypeBigInteger: "esriFieldTypeBigInteger" };
function J$7(e4) {
  return void 0 === e4 ? "" : e4 = (e4 = (e4 = e4.replace(/\/featureserver\/[0-9]*/i, "/FeatureServer")).replace(/\/mapserver\/[0-9]*/i, "/MapServer")).split("?")[0];
}
function M$5(e4, r3) {
  r3 || (r3 = {}), "function" == typeof r3 && (r3 = { cmp: r3 });
  const t6 = "boolean" == typeof r3.cycles && r3.cycles, i4 = r3.cmp && (n3 = r3.cmp, function(e5) {
    return function(r4, t7) {
      const i5 = { key: r4, value: e5[r4] }, o4 = { key: t7, value: e5[t7] };
      return n3(i5, o4);
    };
  });
  var n3;
  const o3 = [];
  return function e5(r4) {
    if (r4?.toJSON && "function" == typeof r4.toJSON && (r4 = r4.toJSON()), void 0 === r4)
      return;
    if ("number" == typeof r4)
      return isFinite(r4) ? "" + r4 : "null";
    if ("object" != typeof r4)
      return JSON.stringify(r4);
    let n4, l2;
    if (Array.isArray(r4)) {
      for (l2 = "[", n4 = 0; n4 < r4.length; n4++)
        n4 && (l2 += ","), l2 += e5(r4[n4]) || "null";
      return l2 + "]";
    }
    if (null === r4)
      return "null";
    if (o3.includes(r4)) {
      if (t6)
        return JSON.stringify("__cycle__");
      throw new TypeError("Converting circular structure to JSON");
    }
    const s6 = o3.push(r4) - 1, y2 = Object.keys(r4).sort(i4?.(r4));
    for (l2 = "", n4 = 0; n4 < y2.length; n4++) {
      const t7 = y2[n4], i5 = e5(r4[t7]);
      i5 && (l2 && (l2 += ","), l2 += JSON.stringify(t7) + ":" + i5);
    }
    return o3.splice(s6, 1), "{" + l2 + "}";
  }(e4);
}
let C$4 = class C {
  constructor(e4) {
    this.value = e4;
  }
};
let j$2 = class j {
  constructor(e4) {
    this.value = e4;
  }
};
const M$4 = j$2, F$3 = C$4, w$3 = { type: "VOID" }, O$3 = { type: "BREAK" }, R$2 = { type: "CONTINUE" };
function I$5(e4, t6, n3) {
  return "" === t6 || null == t6 || t6 === n3 || t6 === n3 ? e4 : e4 = e4.split(t6).join(n3);
}
function v$4(e4) {
  return e4 instanceof r$4;
}
function _$4(e4) {
  return e4 instanceof s$a;
}
function J$6(e4) {
  return !!P$6(e4) || (!!z$6(e4) || (!!Q$5(e4) || (!!X$6(e4) || (!!K$4(e4) || (!!G$4(e4) || (null === e4 || (e4 === w$3 || "number" == typeof e4)))))));
}
function L$4(e4, t6) {
  return void 0 === e4 ? t6 : e4;
}
function Y$6(e4) {
  return null == e4 ? "" : q$7(e4) || $$4(e4) ? "Array" : Q$5(e4) ? "Date" : K$4(e4) ? "Time" : X$6(e4) ? "DateOnly" : P$6(e4) ? "String" : G$4(e4) ? "Boolean" : z$6(e4) ? "Number" : "esri.arcade.Attachment" === e4?.declaredClass ? "Attachment" : "esri.arcade.Portal" === e4?.declaredClass ? "Portal" : "esri.arcade.Dictionary" === e4?.declaredClass ? "Dictionary" : e4 instanceof s$a ? "Module" : U$3(e4) ? "Feature" : e4 instanceof x$5 ? "Point" : e4 instanceof j$3 ? "Polygon" : e4 instanceof m$8 ? "Polyline" : e4 instanceof u$8 ? "Multipoint" : e4 instanceof M$6 ? "Extent" : v$4(e4) ? "Function" : H$5(e4) ? "FeatureSet" : W$6(e4) ? "FeatureSetCollection" : e4 === w$3 ? "" : "number" == typeof e4 && isNaN(e4) ? "Number" : "Unrecognized Type";
}
function P$6(e4) {
  return "string" == typeof e4 || e4 instanceof String;
}
function G$4(e4) {
  return "boolean" == typeof e4;
}
function z$6(e4) {
  return "number" == typeof e4;
}
function E$2(e4) {
  return "number" == typeof e4 && isFinite(e4) && Math.floor(e4) === e4;
}
function V$6(e4) {
  return e4 instanceof p$9;
}
function q$7(e4) {
  return e4 instanceof Array;
}
function U$3(e4) {
  return "esri.arcade.Feature" === e4?.arcadeDeclaredClass;
}
function H$5(e4) {
  return "esri.arcade.featureset.support.FeatureSet" === e4?.declaredRootClass;
}
function B$4(e4) {
  return "esri.arcade.Dictionary" === e4?.declaredClass;
}
function W$6(e4) {
  return "esri.arcade.featureSetCollection" === e4?.declaredRootClass;
}
function $$4(e4) {
  return e4 instanceof t$5;
}
function Q$5(e4) {
  return e4 instanceof m$7;
}
function X$6(e4) {
  return e4 instanceof n$5;
}
function K$4(e4) {
  return e4 instanceof n$6;
}
function ee$5(e4) {
  return null != e4 && "object" == typeof e4;
}
function te$5(e4) {
  return e4 instanceof Date;
}
function ne$4(e4, t6, n3, r3, a3) {
  if (e4.length < t6 || e4.length > n3)
    throw new a$5(r3, r$5.WrongNumberOfParameters, a3);
}
function re$5(e4) {
  return e4 < 0 ? -Math.round(-e4) : Math.round(e4);
}
function ae$4() {
  let e4 = Date.now();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replaceAll(/[xy]/g, (t6) => {
    const n3 = (e4 + 16 * Math.random()) % 16 | 0;
    return e4 = Math.floor(e4 / 16), ("x" === t6 ? n3 : 3 & n3 | 8).toString(16);
  });
}
function ie$4(e4, t6) {
  return isNaN(e4) || null == t6 || "" === t6 ? e4.toString() : (t6 = I$5(t6, "‰", ""), t6 = I$5(t6, "¤", ""), s$b(e4, { pattern: t6 }));
}
function oe$4(e4, t6) {
  return null == t6 || "" === t6 ? e4.toISOString(true) : e4.toFormat(ue$4(t6), { locale: c$5(), numberingSystem: "latn" });
}
function ue$4(e4, t6 = false) {
  e4 = e4.replaceAll(/LTS|LT|LL?L?L?|l{1,4}/g, "[$&]");
  let n3 = "";
  const r3 = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|Z{1,5}|.)/g;
  for (const a3 of e4.match(r3) || [])
    switch (a3) {
      case "D":
        n3 += "d";
        break;
      case "DD":
        n3 += "dd";
        break;
      case "DDD":
        n3 += "o";
        break;
      case "d":
        n3 += "c";
        break;
      case "ddd":
        n3 += "ccc";
        break;
      case "dddd":
        n3 += "cccc";
        break;
      case "M":
        n3 += "L";
        break;
      case "MM":
        n3 += "LL";
        break;
      case "MMM":
        n3 += "LLL";
        break;
      case "MMMM":
        n3 += "LLLL";
        break;
      case "YY":
        n3 += "yy";
        break;
      case "Y":
      case "YYYY":
        n3 += "yyyy";
        break;
      case "Q":
        n3 += "q";
        break;
      case "Z":
        n3 += "Z";
        break;
      case "ZZ":
        n3 += "ZZ";
        break;
      case "ZZZ":
        n3 += "ZZZ";
        break;
      case "ZZZZ":
        n3 += t6 ? "[ZZZZ]" : "ZZZZ";
        break;
      case "ZZZZZ":
        n3 += t6 ? "[ZZZZZ]" : "ZZZZZ";
        break;
      case "S":
        n3 += "'S'";
        break;
      case "SS":
        n3 += "'SS'";
        break;
      case "SSS":
        n3 += "u";
        break;
      case "A":
      case "a":
        n3 += "a";
        break;
      case "m":
      case "mm":
      case "h":
      case "hh":
      case "H":
      case "HH":
      case "s":
      case "ss":
      case "X":
      case "x":
        n3 += a3;
        break;
      default:
        a3.length >= 2 && "[" === a3.slice(0, 1) && "]" === a3.slice(-1) ? n3 += `'${a3.slice(1, -1)}'` : n3 += `'${a3}'`;
    }
  return n3;
}
function le$3(e4, t6, n3) {
  switch (n3) {
    case ">":
      return e4 > t6;
    case "<":
      return e4 < t6;
    case ">=":
      return e4 >= t6;
    case "<=":
      return e4 <= t6;
  }
  return false;
}
function se$4(e4, t6, r3) {
  if (null === e4) {
    if (null === t6 || t6 === w$3)
      return le$3(null, null, r3);
    if (z$6(t6))
      return le$3(0, t6, r3);
    if (P$6(t6))
      return le$3(0, pe$2(t6), r3);
    if (G$4(t6))
      return le$3(0, pe$2(t6), r3);
    if (Q$5(t6))
      return le$3(0, t6.toNumber(), r3);
    if (K$4(t6))
      return le$3(e4, t6.toNumber(), r3);
    if (X$6(t6))
      return le$3(e4, t6.toNumber(), r3);
  }
  if (e4 === w$3) {
    if (null === t6 || t6 === w$3)
      return le$3(null, null, r3);
    if (z$6(t6))
      return le$3(0, t6, r3);
    if (P$6(t6))
      return le$3(0, pe$2(t6), r3);
    if (G$4(t6))
      return le$3(0, pe$2(t6), r3);
    if (Q$5(t6))
      return le$3(0, t6.toNumber(), r3);
    if (K$4(t6))
      return le$3(e4, t6.toNumber(), r3);
    if (X$6(t6))
      return le$3(e4, t6.toNumber(), r3);
  } else if (z$6(e4)) {
    if (z$6(t6))
      return le$3(e4, t6, r3);
    if (G$4(t6))
      return le$3(e4, pe$2(t6), r3);
    if (null === t6 || t6 === w$3)
      return le$3(e4, 0, r3);
    if (P$6(t6))
      return le$3(e4, pe$2(t6), r3);
    if (Q$5(t6))
      return le$3(e4, t6.toNumber(), r3);
    if (K$4(t6))
      return le$3(e4, t6.toNumber(), r3);
    if (X$6(t6))
      return le$3(e4, t6.toNumber(), r3);
  } else if (P$6(e4)) {
    if (P$6(t6))
      return le$3(ce$3(e4), ce$3(t6), r3);
    if (Q$5(t6))
      return le$3(pe$2(e4), t6.toNumber(), r3);
    if (K$4(t6))
      return le$3(pe$2(e4), t6.toNumber(), r3);
    if (X$6(t6))
      return le$3(pe$2(e4), t6.toNumber(), r3);
    if (z$6(t6))
      return le$3(pe$2(e4), t6, r3);
    if (null === t6 || t6 === w$3)
      return le$3(pe$2(e4), 0, r3);
    if (G$4(t6))
      return le$3(pe$2(e4), pe$2(t6), r3);
  } else if (Q$5(e4)) {
    if (Q$5(t6))
      return e4.timeZone !== t6.timeZone && (e4.isUnknownTimeZone ? e4 = m$7.arcadeDateAndZoneToArcadeDate(e4, t6.timeZone) : t6.isUnknownTimeZone && (t6 = m$7.arcadeDateAndZoneToArcadeDate(t6, e4.timeZone))), le$3(e4.toNumber(), t6.toNumber(), r3);
    if (null === t6 || t6 === w$3)
      return le$3(e4.toNumber(), 0, r3);
    if (z$6(t6))
      return le$3(e4.toNumber(), t6, r3);
    if (G$4(t6))
      return le$3(e4.toNumber(), pe$2(t6), r3);
    if (P$6(t6))
      return le$3(e4.toNumber(), pe$2(t6), r3);
    if (K$4(t6))
      throw new a$5(null, r$5.CannotCompareDateAndTime, null);
    if (X$6(t6))
      return le$3(e4.toNumber(), t6.toNumber(), r3);
  } else if (G$4(e4)) {
    if (G$4(t6))
      return le$3(e4, t6, r3);
    if (z$6(t6))
      return le$3(pe$2(e4), pe$2(t6), r3);
    if (Q$5(t6))
      return le$3(pe$2(e4), t6.toNumber(), r3);
    if (K$4(t6))
      return le$3(pe$2(e4), t6.toNumber(), r3);
    if (X$6(t6))
      return le$3(pe$2(e4), t6.toNumber(), r3);
    if (null === t6 || t6 === w$3)
      return le$3(pe$2(e4), 0, r3);
    if (P$6(t6))
      return le$3(pe$2(e4), pe$2(t6), r3);
  } else if (X$6(e4)) {
    if (Q$5(t6))
      return le$3(e4.toNumber(), t6.toNumber(), r3);
    if (null === t6 || t6 === w$3)
      return le$3(e4.toNumber(), 0, r3);
    if (z$6(t6))
      return le$3(e4.toNumber(), t6, r3);
    if (G$4(t6))
      return le$3(e4.toNumber(), pe$2(t6), r3);
    if (P$6(t6))
      return le$3(e4.toNumber(), pe$2(t6), r3);
    if (K$4(t6))
      throw new a$5(null, r$5.CannotCompareDateAndTime, null);
    if (X$6(t6))
      return le$3(e4.toNumber(), t6.toNumber(), r3);
  } else if (K$4(e4)) {
    if (Q$5(t6))
      throw new a$5(null, r$5.CannotCompareDateAndTime, null);
    if (null === t6 || t6 === w$3)
      return le$3(e4.toNumber(), 0, r3);
    if (z$6(t6))
      return le$3(e4.toNumber(), t6, r3);
    if (G$4(t6))
      return le$3(e4.toNumber(), pe$2(t6), r3);
    if (P$6(t6))
      return le$3(e4.toNumber(), pe$2(t6), r3);
    if (K$4(t6))
      return le$3(e4.toNumber(), t6.toNumber(), r3);
    if (X$6(t6))
      throw new a$5(null, r$5.CannotCompareDateAndTime, null);
  }
  return !!fe$2(e4, t6) && ("<=" === r3 || ">=" === r3);
}
function fe$2(e4, t6) {
  if (e4 === t6)
    return true;
  if (null === e4 && t6 === w$3 || null === t6 && e4 === w$3)
    return true;
  if (Q$5(e4) && Q$5(t6))
    return e4.equals(t6);
  if (K$4(e4) && K$4(t6))
    return e4.equals(t6);
  if (X$6(e4) && X$6(t6))
    return e4.equals(t6);
  if (e4 instanceof h$3)
    return e4.equalityTest(t6);
  if (e4 instanceof i$6)
    return e4.equalityTest(t6);
  if (e4 instanceof x$5 && t6 instanceof x$5) {
    const n3 = e4.cache._arcadeCacheId, r3 = t6.cache._arcadeCacheId;
    if (null != n3)
      return n3 === r3;
  }
  if (ee$5(e4) && ee$5(t6)) {
    if (e4._arcadeCacheId === t6._arcadeCacheId && void 0 !== e4._arcadeCacheId && null !== e4._arcadeCacheId)
      return true;
    if (e4._underlyingGraphic === t6._underlyingGraphic && void 0 !== e4._underlyingGraphic && null !== e4._underlyingGraphic)
      return true;
  }
  return false;
}
function ce$3(e4, t6) {
  if (P$6(e4))
    return e4;
  if (null === e4)
    return "";
  if (z$6(e4))
    return ie$4(e4, t6);
  if (G$4(e4))
    return e4.toString();
  if (Q$5(e4))
    return oe$4(e4, t6);
  if (K$4(e4))
    return e4.toFormat(t6);
  if (X$6(e4))
    return e4.toFormat(t6);
  if (e4 instanceof p$9)
    return JSON.stringify(e4.toJSON());
  if (q$7(e4)) {
    const t7 = [];
    for (let n3 = 0; n3 < e4.length; n3++)
      t7[n3] = ye$2(e4[n3]);
    return "[" + t7.join(",") + "]";
  }
  if (e4 instanceof t$5) {
    const t7 = [];
    for (let n3 = 0; n3 < e4.length(); n3++)
      t7[n3] = ye$2(e4.get(n3));
    return "[" + t7.join(",") + "]";
  }
  return null !== e4 && "object" == typeof e4 && void 0 !== e4.castToText ? e4.castToText() : v$4(e4) ? "object, Function" : e4 === w$3 ? "" : _$4(e4) ? "object, Module" : "";
}
function me$3(e4) {
  const t6 = [];
  if (!q$7(e4))
    return null;
  if (e4 instanceof t$5) {
    for (let n3 = 0; n3 < e4.length(); n3++)
      t6[n3] = pe$2(e4.get(n3));
    return t6;
  }
  for (let n3 = 0; n3 < e4.length; n3++)
    t6[n3] = pe$2(e4[n3]);
  return t6;
}
function de$3(e4, t6, n3 = false) {
  if (P$6(e4))
    return e4;
  if (null === e4)
    return "";
  if (z$6(e4))
    return ie$4(e4, t6);
  if (G$4(e4))
    return e4.toString();
  if (Q$5(e4))
    return oe$4(e4, t6);
  if (K$4(e4))
    return e4.toFormat(t6);
  if (X$6(e4))
    return e4.toFormat(t6);
  if (e4 instanceof p$9)
    return e4 instanceof M$6 ? '{"xmin":' + e4.xmin.toString() + ',"ymin":' + e4.ymin.toString() + "," + (e4.hasZ ? '"zmin":' + e4.zmin.toString() + "," : "") + (e4.hasM ? '"mmin":' + e4.mmin.toString() + "," : "") + '"xmax":' + e4.xmax.toString() + ',"ymax":' + e4.ymax.toString() + "," + (e4.hasZ ? '"zmax":' + e4.zmax.toString() + "," : "") + (e4.hasM ? '"mmax":' + e4.mmax.toString() + "," : "") + '"spatialReference":' + Ae$2(e4.spatialReference) + "}" : Ae$2(e4.toJSON(), (e5, t7) => e5.key === t7.key ? 0 : "spatialReference" === e5.key ? 1 : "spatialReference" === t7.key || e5.key < t7.key ? -1 : e5.key > t7.key ? 1 : 0);
  if (q$7(e4)) {
    const t7 = [];
    for (let r3 = 0; r3 < e4.length; r3++)
      t7[r3] = ye$2(e4[r3], n3);
    return "[" + t7.join(",") + "]";
  }
  if (e4 instanceof t$5) {
    const t7 = [];
    for (let r3 = 0; r3 < e4.length(); r3++)
      t7[r3] = ye$2(e4.get(r3), n3);
    return "[" + t7.join(",") + "]";
  }
  return null !== e4 && "object" == typeof e4 && void 0 !== e4.castToText ? e4.castToText(n3) : v$4(e4) ? "object, Function" : e4 === w$3 ? "" : _$4(e4) ? "object, Module" : "";
}
function ye$2(e4, t6 = false) {
  if (null === e4)
    return "null";
  if (G$4(e4) || z$6(e4) || P$6(e4))
    return JSON.stringify(e4);
  if (e4 instanceof p$9)
    return de$3(e4, null, t6);
  if (e4 instanceof t$5)
    return de$3(e4, null, t6);
  if (e4 instanceof Array)
    return de$3(e4, null, t6);
  if (Q$5(e4))
    return t6 ? JSON.stringify(e4.getTime()) : JSON.stringify(oe$4(e4, ""));
  if (K$4(e4))
    return JSON.stringify(e4.toString());
  if (X$6(e4))
    return JSON.stringify(e4.toString());
  if (null !== e4 && "object" == typeof e4) {
    if (void 0 !== e4.castToText)
      return e4.castToText(t6);
  } else if (e4 === w$3)
    return "null";
  return "null";
}
function pe$2(e4, t6) {
  return z$6(e4) ? e4 : null === e4 || "" === e4 ? 0 : Q$5(e4) || X$6(e4) || K$4(e4) ? NaN : G$4(e4) ? e4 ? 1 : 0 : q$7(e4) || "" === e4 || void 0 === e4 ? NaN : void 0 !== t6 && P$6(e4) ? (t6 = I$5(t6, "‰", ""), t6 = I$5(t6, "¤", ""), p$a(e4, { pattern: t6 })) : e4 === w$3 ? 0 : Number(e4);
}
function ge$2(e4, t6) {
  if (Q$5(e4))
    return e4;
  if (P$6(e4)) {
    const r3 = he$3(e4, t6);
    if (r3)
      return m$7.dateTimeToArcadeDate(r3);
  }
  return null;
}
function he$3(e4, t6) {
  const n3 = / (\d\d)/, a3 = h$4(t6);
  let i4 = DateTime.fromISO(e4, { zone: a3 });
  return i4.isValid || n3.test(e4) && (e4 = e4.replace(n3, "T$1"), i4 = DateTime.fromISO(e4, { zone: t6 }), i4.isValid) ? i4 : null;
}
function be$2(e4) {
  return G$4(e4) ? e4 : P$6(e4) ? "true" === (e4 = e4.toLowerCase()) : !!z$6(e4) && (0 !== e4 && !isNaN(e4));
}
function Ne$1(e4, t6) {
  return null == e4 ? null : (null !== e4.spatialReference && void 0 !== e4.spatialReference || (e4.spatialReference = t6), e4);
}
function Se$2(e4) {
  if (null === e4)
    return null;
  if (e4 instanceof x$5)
    return "NaN" === e4.x || null === e4.x || isNaN(e4.x) ? null : e4;
  if (e4 instanceof j$3) {
    if (0 === e4.rings.length)
      return null;
    for (const t6 of e4.rings)
      if (t6.length > 0)
        return e4;
    return null;
  }
  if (e4 instanceof m$8) {
    if (0 === e4.paths.length)
      return null;
    for (const t6 of e4.paths)
      if (t6.length > 0)
        return e4;
    return null;
  }
  return e4 instanceof u$8 ? 0 === e4.points.length ? null : e4 : e4 instanceof M$6 ? "NaN" === e4.xmin || null === e4.xmin || isNaN(e4.xmin) ? null : e4 : null;
}
function xe$2(e4, t6) {
  if (!e4)
    return t6;
  if (!e4.domain)
    return t6;
  let n3 = null, r3 = null;
  if ("string" === e4.field.type || "esriFieldTypeString" === e4.field.type)
    n3 = ce$3(t6);
  else {
    if (null == t6)
      return null;
    if ("" === t6)
      return t6;
    n3 = pe$2(t6);
  }
  for (let a3 = 0; a3 < e4.domain.codedValues.length; a3++) {
    const t7 = e4.domain.codedValues[a3];
    t7.code === n3 && (r3 = t7);
  }
  return null === r3 ? ce$3(t6) : r3.name;
}
function Ze(e4, t6) {
  if (!e4)
    return t6;
  if (!e4.domain)
    return t6;
  let n3 = null;
  const r3 = ce$3(t6);
  for (let a3 = 0; a3 < e4.domain.codedValues.length; a3++) {
    const t7 = e4.domain.codedValues[a3];
    t7.name === r3 && (n3 = t7);
  }
  return null === n3 ? t6 : n3.code;
}
function De$1(e4, t6, n3 = null, r3 = null) {
  if (!t6)
    return null;
  if (!t6.fields)
    return null;
  let a3, u3, l2 = null;
  for (let i4 = 0; i4 < t6.fields.length; i4++) {
    const n4 = t6.fields[i4];
    n4.name.toLowerCase() === e4.toString().toLowerCase() && (l2 = n4);
  }
  if (null === l2)
    throw new a$5(null, r$5.FieldNotFound, null, { key: e4 });
  if (null === r3 && n3 && t6.typeIdField)
    r3 = n3.hasField(t6.typeIdField) ? n3.field(t6.typeIdField) : null;
  else if (t6.typeIdField && null !== r3) {
    let e5 = false;
    for (const n4 of t6.types || [])
      if (r3 === n4.id) {
        e5 = true;
        break;
      }
    if (!e5) {
      for (const n4 of t6.types || [])
        if (r3 === n4.name) {
          r3 = n4.id, e5 = true;
          break;
        }
    }
    e5 || (r3 = null, n3 && t6.typeIdField && (r3 = n3.hasField(t6.typeIdField) ? n3.field(t6.typeIdField) : null));
  }
  return null != r3 && t6.types.some((e5) => e5.id === r3 && (a3 = e5.domains?.[l2.name], a3 && "inherited" === a3.type && (a3 = Te(l2.name, t6), u3 = true), true)), u3 || a3 || (a3 = Te(e4, t6)), { field: l2, domain: a3 };
}
function Te(e4, t6) {
  let n3;
  return t6.fields.some((t7) => (t7.name.toLowerCase() === e4.toLowerCase() && (n3 = t7.domain), !!n3)), n3;
}
function Ae$2(e4, t6) {
  t6 || (t6 = {}), "function" == typeof t6 && (t6 = { cmp: t6 });
  const n3 = "boolean" == typeof t6.cycles && t6.cycles, r3 = t6.cmp && (a3 = t6.cmp, function(e5) {
    return function(t7, n4) {
      const r4 = { key: t7, value: e5[t7] }, i5 = { key: n4, value: e5[n4] };
      return a3(r4, i5);
    };
  });
  var a3;
  const i4 = [];
  return function e5(t7) {
    if (t7?.toJSON && "function" == typeof t7.toJSON && (t7 = t7.toJSON()), void 0 === t7)
      return;
    if ("number" == typeof t7)
      return isFinite(t7) ? "" + t7 : "null";
    if ("object" != typeof t7)
      return JSON.stringify(t7);
    let a4, o3;
    if (Array.isArray(t7)) {
      for (o3 = "[", a4 = 0; a4 < t7.length; a4++)
        a4 && (o3 += ","), o3 += e5(t7[a4]) || "null";
      return o3 + "]";
    }
    if (null === t7)
      return "null";
    if (i4.includes(t7)) {
      if (n3)
        return JSON.stringify("__cycle__");
      throw new TypeError("Converting circular structure to JSON");
    }
    const u3 = i4.push(t7) - 1, l2 = Object.keys(t7).sort(r3?.(t7));
    for (o3 = "", a4 = 0; a4 < l2.length; a4++) {
      const n4 = l2[a4], r4 = e5(t7[n4]);
      r4 && (o3 && (o3 += ","), o3 += JSON.stringify(n4) + ":" + r4);
    }
    return i4.splice(u3, 1), "{" + o3 + "}";
  }(e4);
}
function ke(e4) {
  if (null === e4)
    return null;
  const t6 = [];
  for (const n3 of e4)
    n3?.arcadeDeclaredClass && "esri.arcade.Feature" === n3.arcadeDeclaredClass ? t6.push(n3.geometry()) : t6.push(n3);
  return t6;
}
function Ce$2(e4, t6) {
  if (!(t6 instanceof x$5))
    throw new a$5(null, r$5.InvalidParameter, null);
  e4.push(t6.hasZ ? t6.hasM ? [t6.x, t6.y, t6.z, t6.m] : [t6.x, t6.y, t6.z] : [t6.x, t6.y]);
}
function je$1(e4, t6) {
  if (q$7(e4) || $$4(e4)) {
    let n3 = false, r3 = false, a3 = [], u3 = t6;
    if (q$7(e4)) {
      for (const t7 of e4)
        Ce$2(a3, t7);
      a3.length > 0 && (u3 = e4[0].spatialReference, n3 = e4[0].hasZ, r3 = e4[0].hasM);
    } else if (e4 instanceof i$6)
      a3 = e4._elements, a3.length > 0 && (n3 = e4._hasZ, r3 = e4._hasM, u3 = e4.get(0).spatialReference);
    else {
      if (!$$4(e4))
        throw new a$5(null, r$5.InvalidParameter, null);
      for (const t7 of e4.toArray())
        Ce$2(a3, t7);
      a3.length > 0 && (u3 = e4.get(0).spatialReference, n3 = true === e4.get(0).hasZ, r3 = true === e4.get(0).hasM);
    }
    if (0 === a3.length)
      return null;
    return a$6(a3) || (a3 = a3.slice(0).reverse()), new j$3({ rings: [a3], spatialReference: u3, hasZ: n3, hasM: r3 });
  }
  return e4;
}
function Me$2(e4, t6) {
  if (q$7(e4) || $$4(e4)) {
    let n3 = false, r3 = false, a3 = [], i4 = t6;
    if (q$7(e4)) {
      for (const t7 of e4)
        Ce$2(a3, t7);
      a3.length > 0 && (i4 = e4[0].spatialReference, n3 = true === e4[0].hasZ, r3 = true === e4[0].hasM);
    } else if (e4 instanceof i$6)
      a3 = e4._elements, a3.length > 0 && (n3 = e4._hasZ, r3 = e4._hasM, i4 = e4.get(0).spatialReference);
    else if ($$4(e4)) {
      for (const t7 of e4.toArray())
        Ce$2(a3, t7);
      a3.length > 0 && (i4 = e4.get(0).spatialReference, n3 = true === e4.get(0).hasZ, r3 = true === e4.get(0).hasM);
    }
    return 0 === a3.length ? null : new m$8({ paths: [a3], spatialReference: i4, hasZ: n3, hasM: r3 });
  }
  return e4;
}
function Fe$2(e4, t6) {
  if (q$7(e4) || $$4(e4)) {
    let n3 = false, r3 = false, a3 = [], i4 = t6;
    if (q$7(e4)) {
      for (const t7 of e4)
        Ce$2(a3, t7);
      a3.length > 0 && (i4 = e4[0].spatialReference, n3 = true === e4[0].hasZ, r3 = true === e4[0].hasM);
    } else if (e4 instanceof i$6)
      a3 = e4._elements, a3.length > 0 && (n3 = e4._hasZ, r3 = e4._hasM, i4 = e4.get(0).spatialReference);
    else if ($$4(e4)) {
      for (const t7 of e4.toArray())
        Ce$2(a3, t7);
      a3.length > 0 && (i4 = e4.get(0).spatialReference, n3 = true === e4.get(0).hasZ, r3 = true === e4.get(0).hasM);
    }
    return 0 === a3.length ? null : new u$8({ points: a3, spatialReference: i4, hasZ: n3, hasM: r3 });
  }
  return e4;
}
function we$2(e4, t6 = false) {
  const n3 = [];
  if (null === e4)
    return n3;
  if (true === q$7(e4)) {
    for (let r3 = 0; r3 < e4.length; r3++) {
      const a3 = ce$3(e4[r3]);
      "" === a3 && true !== t6 || n3.push(a3);
    }
    return n3;
  }
  if (e4 instanceof t$5) {
    for (let r3 = 0; r3 < e4.length(); r3++) {
      const a3 = ce$3(e4.get(r3));
      "" === a3 && true !== t6 || n3.push(a3);
    }
    return n3;
  }
  if (J$6(e4)) {
    const r3 = ce$3(e4);
    return "" === r3 && true !== t6 || n3.push(r3), n3;
  }
  return [];
}
let Oe$1 = 0;
function Re$1(e4) {
  return Oe$1++, Oe$1 % 100 == 0 ? (Oe$1 = 0, new Promise((t6) => {
    setTimeout(() => {
      t6(e4);
    }, 0);
  })) : e4;
}
function Ie$2(e4, t6, n3) {
  switch (n3) {
    case "&":
      return e4 & t6;
    case "|":
      return e4 | t6;
    case "^":
      return e4 ^ t6;
    case "<<":
      return e4 << t6;
    case ">>":
      return e4 >> t6;
    case ">>>":
      return e4 >>> t6;
  }
}
function ve$2(e4, t6 = null) {
  return null == e4 ? null : G$4(e4) || z$6(e4) || P$6(e4) ? e4 : e4 instanceof p$9 ? true === t6?.keepGeometryType ? e4 : e4.toJSON() : e4 instanceof t$5 ? e4.toArray().map((e5) => ve$2(e5, t6)) : e4 instanceof Array ? e4.map((e5) => ve$2(e5, t6)) : te$5(e4) ? e4 : Q$5(e4) ? e4.toJSDate() : K$4(e4) ? e4.toString() : X$6(e4) ? e4.toJSDate() : null !== e4 && "object" == typeof e4 && void 0 !== e4.castAsJson ? e4.castAsJson(t6) : null;
}
async function _e$1(e4, t6, n3, r3, a3) {
  const i4 = await Je(e4, t6, n3);
  a3[r3] = i4;
}
async function Je(e4, t6 = null, n3 = null) {
  if (e4 instanceof t$5 && (e4 = e4.toArray()), null == e4)
    return null;
  if (J$6(e4) || e4 instanceof p$9 || te$5(e4) || Q$5(e4))
    return ve$2(e4, n3);
  if (e4 instanceof Array) {
    const r3 = [], a3 = [];
    for (const i4 of e4)
      null === i4 || J$6(i4) || i4 instanceof p$9 || te$5(i4) || Q$5(i4) ? a3.push(ve$2(i4, n3)) : (a3.push(null), r3.push(_e$1(i4, t6, n3, a3.length - 1, a3)));
    return r3.length > 0 && await Promise.all(r3), a3;
  }
  return null !== e4 && "object" == typeof e4 && void 0 !== e4.castAsJsonAsync ? e4.castAsJsonAsync(t6, n3) : null;
}
function Le$1(e4) {
  return Ye(e4) ? e4.parent : e4;
}
function Ye(e4) {
  return e4 && "declaredClass" in e4 && "esri.layers.support.SubtypeSublayer" === e4.declaredClass;
}
function Pe(e4) {
  return e4 && "declaredClass" in e4 && "esri.layers.SubtypeGroupLayer" === e4.declaredClass;
}
function Ge(e4, t6, n3) {
  const r3 = Le$1(e4.fullSchema());
  if (null === r3)
    return null;
  if (!r3.fields)
    return null;
  return De$1(t6, r3, e4, n3);
}
function ze(e4) {
  const t6 = Le$1(e4.fullSchema());
  return null === t6 ? null : t6.fields && t6.typeIdField ? { subtypeField: t6.typeIdField, subtypes: t6.types ? t6.types.map((e5) => ({ name: e5.name, code: e5.id })) : [] } : null;
}
function Ee$2(e4, t6, n3, r3) {
  const a3 = Le$1(e4.fullSchema());
  if (null === a3)
    return null;
  if (!a3.fields)
    return null;
  const i4 = De$1(t6, a3, e4, r3);
  if (void 0 === n3)
    try {
      n3 = e4.field(t6);
    } catch (o3) {
      return null;
    }
  return xe$2(i4, n3);
}
function Ve(e4, t6, n3, r3) {
  const a3 = Le$1(e4.fullSchema());
  if (null === a3)
    return null;
  if (!a3.fields)
    return null;
  if (void 0 === n3) {
    try {
      n3 = e4.field(t6);
    } catch (i4) {
      return null;
    }
    return n3;
  }
  return Ze(De$1(t6, a3, e4, r3), n3);
}
function qe(e4) {
  return e4?.timeZone ?? "system";
}
function Ue$1(e4) {
  const t6 = Le$1(e4.fullSchema());
  if (null === t6)
    return null;
  if (!t6.fields)
    return null;
  const n3 = [];
  for (const r3 of t6.fields)
    n3.push(p$7(r3));
  return { objectIdField: t6.objectIdField, globalIdField: t6.globalIdField ?? "", geometryType: void 0 === E$3[t6.geometryType] ? "" : E$3[t6.geometryType], fields: n3 };
}
function He(r3, a3) {
  return "system" === r3 && (r3 = m$7.systemTimeZoneCanonicalName), { version: Be$1, engineVersion: r$7, timeZone: r3, spatialReference: a3 instanceof f$5 ? a3.toJSON() : a3, application: s$c.applicationName ?? "", engine: "web", locale: c$5() };
}
const Be$1 = "1.24", We = Object.freeze(Object.defineProperty({ __proto__: null, ImplicitResult: M$4, ImplicitResultE: j$2, ReturnResult: F$3, ReturnResultE: C$4, absRound: re$5, arcadeVersion: Be$1, autoCastArrayOfPointsToMultiPoint: Fe$2, autoCastArrayOfPointsToPolygon: je$1, autoCastArrayOfPointsToPolyline: Me$2, autoCastFeatureToGeometry: ke, binaryOperator: Ie$2, breakResult: O$3, castAsJson: ve$2, castAsJsonAsync: Je, continueResult: R$2, defaultExecutingContext: He, defaultTimeZone: qe, defaultUndefined: L$4, equalityTest: fe$2, featureDomainCodeLookup: Ve, featureDomainValueLookup: Ee$2, featureFullDomain: Ge, featureSchema: Ue$1, featureSubtypes: ze, fixNullGeometry: Se$2, fixSpatialReference: Ne$1, formatDate: oe$4, formatNumber: ie$4, generateUUID: ae$4, getDomain: De$1, getDomainCode: Ze, getDomainValue: xe$2, getType: Y$6, greaterThanLessThan: se$4, isArray: q$7, isBoolean: G$4, isDate: Q$5, isDateOnly: X$6, isDictionary: B$4, isFeature: U$3, isFeatureSet: H$5, isFeatureSetCollection: W$6, isFunctionParameter: v$4, isGeometry: V$6, isImmutableArray: $$4, isInteger: E$2, isJsDate: te$5, isModule: _$4, isNumber: z$6, isObject: ee$5, isSimpleType: J$6, isString: P$6, isSubtypeGrouplayer: Pe, isSubtypeSublayer: Ye, isTime: K$4, multiReplace: I$5, pcCheck: ne$4, stableStringify: Ae$2, standardiseDateFormat: ue$4, tick: Re$1, toBoolean: be$2, toDate: ge$2, toNumber: pe$2, toNumberArray: me$3, toString: ce$3, toStringArray: we$2, toStringExplicit: de$3, voidOperation: w$3 }, Symbol.toStringTag, { value: "Module" }));
function i$5(a3) {
  m$6 = a3;
}
let m$6;
function p$6(i4) {
  return null === i4 ? null : Q$5(i4) ? i4.clone() : J$6(i4) ? i4 : V$6(i4) ? i4.clone() : $$4(i4) ? i4.toArray().map((a3) => p$6(a3)) : q$7(i4) ? i4.map((a3) => p$6(a3)) : U$3(i4) ? m$6.createFromArcadeFeature(i4) : W$6(i4) || H$5(i4) ? i4 : B$4(i4) || "esri.arcade.Attachment" === i4?.declaredClass ? i4.deepClone() : ("esri.arcade.Portal" === i4?.declaredClass || i4 instanceof s$a || v$4(i4), i4);
}
function v$3(t6, s6, i4 = false, e4 = false) {
  if (null == t6)
    return null;
  if (z$6(t6))
    return pe$2(t6);
  if (G$4(t6))
    return be$2(t6);
  if (P$6(t6))
    return ce$3(t6);
  if (Q$5(t6))
    return ge$2(t6, s6);
  if (X$6(t6))
    return t6;
  if (K$4(t6))
    return t6;
  if (q$7(t6)) {
    const r4 = [];
    for (const n3 of t6)
      r4.push(v$3(n3, s6, i4, e4));
    return r4;
  }
  if (e4 && V$6(t6))
    return t6;
  const r3 = new N$3();
  r3.immutable = false;
  for (const n3 of Object.keys(t6)) {
    const o3 = t6[n3];
    void 0 !== o3 && r3.setField(n3, v$3(o3, s6, i4, e4));
  }
  return r3.immutable = i4, r3;
}
let N$3 = class N {
  constructor(t6) {
    this.declaredClass = "esri.arcade.Dictionary", this.attributes = null, this.plain = false, this.immutable = true, this.attributes = t6 instanceof N ? t6.attributes : t6 ?? {};
  }
  field(t6) {
    const s6 = t6.toLowerCase(), r3 = this.attributes[t6];
    if (void 0 !== r3)
      return r3;
    for (const i4 in this.attributes)
      if (i4.toLowerCase() === s6)
        return this.attributes[i4];
    throw new a$5(null, r$5.FieldNotFound, null, { key: t6 });
  }
  setField(s6, r3) {
    if (this.immutable)
      throw new a$5(null, r$5.Immutable, null);
    if (v$4(r3))
      throw new a$5(null, r$5.NoFunctionInDictionary, null);
    const o3 = s6.toLowerCase();
    r3 instanceof Date && (r3 = m$7.dateJSToArcadeDate(r3));
    if (void 0 === this.attributes[s6]) {
      for (const t6 in this.attributes)
        if (t6.toLowerCase() === o3)
          return void (this.attributes[t6] = r3);
      this.attributes[s6] = r3;
    } else
      this.attributes[s6] = r3;
  }
  hasField(t6) {
    const s6 = t6.toLowerCase();
    if (void 0 !== this.attributes[t6])
      return true;
    for (const i4 in this.attributes)
      if (i4.toLowerCase() === s6)
        return true;
    return false;
  }
  keys() {
    let t6 = [];
    for (const s6 in this.attributes)
      t6.push(s6);
    return t6 = t6.sort(), t6;
  }
  castToText(s6 = false) {
    let i4 = "";
    for (const e4 in this.attributes) {
      "" !== i4 && (i4 += ",");
      const n3 = this.attributes[e4];
      null == n3 ? i4 += JSON.stringify(e4) + ":null" : G$4(n3) || z$6(n3) || P$6(n3) ? i4 += JSON.stringify(e4) + ":" + JSON.stringify(n3) : n3 instanceof p$9 ? i4 += JSON.stringify(e4) + ":" + de$3(n3) : n3 instanceof t$5 || n3 instanceof Array ? i4 += JSON.stringify(e4) + ":" + de$3(n3, null, s6) : n3 instanceof m$7 ? i4 += s6 ? JSON.stringify(e4) + ":" + JSON.stringify(n3.getTime()) : JSON.stringify(e4) + ":" + n3.stringify() : null !== n3 && "object" == typeof n3 && void 0 !== n3.castToText && (i4 += JSON.stringify(e4) + ":" + n3.castToText(s6));
    }
    return "{" + i4 + "}";
  }
  static convertObjectToArcadeDictionary(t6, s6, i4 = true, e4 = false) {
    const r3 = new N();
    r3.immutable = false;
    for (const n3 in t6) {
      const o3 = t6[n3];
      void 0 !== o3 && r3.setField(n3.toString(), v$3(o3, s6, i4, e4));
    }
    return r3.immutable = i4, r3;
  }
  static convertJsonToArcade(t6, s6, i4 = false) {
    return v$3(t6, s6, i4);
  }
  castAsJson(t6 = null) {
    const s6 = {};
    for (let i4 in this.attributes) {
      const e4 = this.attributes[i4];
      void 0 !== e4 && (t6?.keyTranslate && (i4 = t6.keyTranslate(i4)), s6[i4] = ve$2(e4, t6));
    }
    return s6;
  }
  async castDictionaryValueAsJsonAsync(t6, s6, i4, e4 = null, r3) {
    const n3 = await Je(i4, e4, r3);
    return t6[s6] = n3, n3;
  }
  async castAsJsonAsync(s6 = null, i4 = null) {
    const e4 = {}, r3 = [];
    for (let n3 in this.attributes) {
      const o3 = this.attributes[n3];
      i4?.keyTranslate && (n3 = i4.keyTranslate(n3)), void 0 !== o3 && (J$6(o3) || o3 instanceof p$9 || o3 instanceof m$7 ? e4[n3] = ve$2(o3, i4) : r3.push(this.castDictionaryValueAsJsonAsync(e4, n3, o3, s6, i4)));
    }
    return r3.length > 0 && await Promise.all(r3), e4;
  }
  deepClone() {
    const t6 = new N();
    t6.immutable = false;
    for (const i4 of this.keys())
      t6.setField(i4, p$6(this.field(i4)));
    return t6;
  }
};
let D$5 = class D {
  constructor() {
    this.arcadeDeclaredClass = "esri.arcade.Feature", this._optimizedGeomDefinition = null, this._geometry = null, this.attributes = null, this._layer = null, this._fieldTypesFixed = true, this.fieldsIndex = null, this.contextTimeZone = null, this.immutable = true, this._fieldsToFixDataTypes = null, this.immutable = true;
  }
  static createFromGraphic(e4, t6) {
    const i4 = new D();
    return i4.contextTimeZone = t6 ?? null, i4._geometry = null != e4.geometry ? e4.geometry : null, void 0 === e4.attributes || null === e4.attributes ? i4.attributes = {} : i4.attributes = e4.attributes, e4._sourceLayer ? (i4._layer = e4._sourceLayer, i4._fieldTypesFixed = false) : e4._layer ? (i4._layer = e4._layer, i4._fieldTypesFixed = false) : e4.layer && "fields" in e4.layer ? (i4._layer = e4.layer, i4._fieldTypesFixed = false) : e4.sourceLayer && "fields" in e4.sourceLayer && (i4._layer = e4.sourceLayer, i4._fieldTypesFixed = false), i4._layer && !i4._fieldTypesFixed && (i4.fieldsIndex = this.hydrateFieldsIndex(i4._layer)), i4;
  }
  static createFromArcadeFeature(e4) {
    if (e4 instanceof D) {
      const t7 = new D();
      return t7._fieldTypesFixed = e4._fieldTypesFixed, t7.attributes = e4.attributes, t7._geometry = e4._geometry, t7._optimizedGeomDefinition = e4._optimizedGeomDefinition, e4._layer && (t7._layer = e4._layer), t7.fieldsIndex = e4.fieldsIndex, t7.contextTimeZone = e4.contextTimeZone, t7;
    }
    const t6 = {};
    for (const i4 of e4.keys())
      t6[i4] = e4.field(i4);
    return D.createFromGraphicLikeObject(e4.geometry(), t6, e4.fullSchema(), e4.contextTimeZone);
  }
  static createFromOptimisedFeature(e4, t6, i4) {
    const s6 = new D();
    return s6._geometry = e4.geometry ? { geometry: e4.geometry } : null, s6._optimizedGeomDefinition = i4, s6.attributes = e4.attributes || {}, s6._layer = t6, s6._fieldTypesFixed = false, s6;
  }
  static createFromArcadeDictionary(e4) {
    const t6 = new D();
    return t6.attributes = e4.field("attributes"), null !== t6.attributes && t6.attributes instanceof N$3 ? (t6.attributes = t6.attributes.attributes, null === t6.attributes && (t6.attributes = {})) : t6.attributes = {}, t6._geometry = e4.field("geometry"), null !== t6._geometry && (t6._geometry instanceof N$3 ? t6._geometry = D.parseGeometryFromDictionary(t6._geometry) : t6._geometry instanceof p$9 || (t6._geometry = null)), t6;
  }
  static createFromGraphicLikeObject(e4, t6, i4 = null, s6) {
    const r3 = new D();
    return r3.contextTimeZone = s6 ?? null, null === t6 && (t6 = {}), r3.attributes = t6, r3._geometry = null != e4 ? e4 : null, r3._layer = i4, r3._layer && (r3._fieldTypesFixed = false, r3.fieldsIndex = this.hydrateFieldsIndex(r3._layer)), r3;
  }
  static hydrateFieldsIndex(e4) {
    return null === e4 ? null : H$5(e4) ? e4.getFieldsIndex() : e4.fieldsIndex ? e4.fieldsIndex : Z$5.fromLayerJSON({ datesInUnknownTimezone: e4.datesInUnknownTimezone, fields: e4.fields, timeInfo: e4.timeInfo, editFieldsInfo: e4.editFieldsInfo, dateFieldsTimeReference: e4.dateFieldsTimeReference ?? { timeZone: "UTC", respectsDaylightSaving: false } });
  }
  repurposeFromGraphicLikeObject(e4, t6, i4 = null) {
    null === t6 && (t6 = {}), this.attributes = t6, this._geometry = e4 ?? null, this._layer = i4, this._layer ? this._fieldTypesFixed = false : this._fieldTypesFixed = true;
  }
  castToText(t6 = false) {
    let i4 = "";
    false === this._fieldTypesFixed && this._fixFieldTypes();
    for (const s6 in this.attributes) {
      "" !== i4 && (i4 += ",");
      const r3 = this.attributes[s6];
      null == r3 ? i4 += JSON.stringify(s6) + ":null" : G$4(r3) || z$6(r3) || P$6(r3) ? i4 += JSON.stringify(s6) + ":" + JSON.stringify(r3) : r3 instanceof p$9 ? i4 += JSON.stringify(s6) + ":" + de$3(r3) : r3 instanceof n$6 || r3 instanceof n$5 ? i4 += `${JSON.stringify(s6)}:${JSON.stringify(r3.toString())}` : r3 instanceof t$5 || r3 instanceof Array ? i4 += JSON.stringify(s6) + ":" + de$3(r3, null, t6) : r3 instanceof m$7 ? i4 += t6 ? JSON.stringify(s6) + ":" + JSON.stringify(r3.getTime()) : JSON.stringify(s6) + ":" + r3.stringify() : null !== r3 && "object" == typeof r3 && void 0 !== r3.castToText && (i4 += JSON.stringify(s6) + ":" + r3.castToText(t6));
    }
    return '{"geometry":' + (null === this.geometry() ? "null" : de$3(this.geometry())) + ',"attributes":{' + i4 + "}}";
  }
  _fixFieldTypes() {
    if (this._fieldsToFixDataTypes && this._fieldsToFixDataTypes?.length > 0)
      return this._fixAllFields(this._fieldsToFixDataTypes), void (this._fieldTypesFixed = true);
    const e4 = [], t6 = this._layer.fields;
    for (let i4 = 0; i4 < t6.length; i4++) {
      const s6 = t6[i4], { name: r3, type: n3 } = s6;
      switch (n3) {
        case "date":
        case "esriFieldTypeDate":
          e4.push({ field: r3, dataType: "date" });
          break;
        case "date-only":
        case "esriFieldTypeDateOnly":
          e4.push({ field: r3, dataType: "date-only" });
          break;
        case "time-only":
        case "esriFieldTypeTimeOnly":
          e4.push({ field: r3, dataType: "time-only" });
          break;
        case "timestamp-offset":
        case "esriFieldTypeTimestampOffset":
          e4.push({ field: r3, dataType: "timestamp-offset" });
      }
    }
    this._fieldsToFixDataTypes = e4, e4.length > 0 && this._fixAllFields(e4), this._fieldTypesFixed = true;
  }
  isUnknownDateTimeField(e4) {
    return "unknown" === this.fieldsIndex?.getTimeZone(e4);
  }
  _fixAllFields(t6) {
    this.attributes = { ...this.attributes };
    const i4 = this.contextTimeZone ?? "system";
    for (let s6 = 0; s6 < t6.length; s6++) {
      const r3 = t6[s6].field, n3 = t6[s6].dataType;
      let o3 = this.attributes[r3];
      if (void 0 === o3) {
        for (const t7 in this.attributes)
          if (t7.toLowerCase() === r3.toLowerCase()) {
            if (o3 = this.attributes[t7], null !== o3) {
              if ("time-only" === n3) {
                K$4(o3) || (this.attributes[t7] = n$6.fromReader(o3.toString()));
                break;
              }
              if ("date-only" === n3) {
                X$6(o3) || (this.attributes[t7] = n$5.fromReader(o3.toString()));
                break;
              }
              if ("timestamp-offset" === n3) {
                Q$5(o3) || (this.attributes[t7] = m$7.fromReaderAsTimeStampOffset(o3.toString()));
                break;
              }
              const s7 = this.isUnknownDateTimeField(t7);
              o3 instanceof Date ? this.attributes[t7] = s7 ? m$7.unknownDateJSToArcadeDate(o3) : m$7.dateJSAndZoneToArcadeDate(o3, i4) : Q$5(o3) || (this.attributes[t7] = s7 ? m$7.unknownEpochToArcadeDate(o3) : m$7.epochToArcadeDate(o3, i4));
            }
            break;
          }
      } else if (null !== o3) {
        if ("time-only" === n3) {
          K$4(o3) ? this.attributes[r3] = o3 : this.attributes[r3] = n$6.fromReader(o3.toString());
          continue;
        }
        if ("date-only" === n3) {
          X$6(o3) ? this.attributes[r3] = o3 : this.attributes[r3] = n$5.fromReader(o3.toString());
          continue;
        }
        if ("timestamp-offset" === n3) {
          Q$5(o3) ? this.attributes[r3] = o3 : this.attributes[r3] = m$7.fromReaderAsTimeStampOffset(o3.toString());
          continue;
        }
        const t7 = this.isUnknownDateTimeField(r3);
        Q$5(o3) ? this.attributes[r3] = o3 : o3 instanceof Date ? this.attributes[r3] = t7 ? m$7.unknownDateJSToArcadeDate(o3) : m$7.dateJSAndZoneToArcadeDate(o3, i4) : this.attributes[r3] = t7 ? m$7.unknownEpochToArcadeDate(o3) : m$7.epochToArcadeDate(o3, i4);
      }
    }
  }
  geometry() {
    return null === this._geometry || this._geometry instanceof p$9 || (this._optimizedGeomDefinition ? (this._geometry = p$b(st(this._geometry, this._optimizedGeomDefinition.geometryType, this._optimizedGeomDefinition.hasZ, this._optimizedGeomDefinition.hasM)), this._geometry.spatialReference = this._optimizedGeomDefinition.spatialReference) : this._geometry = p$b(this._geometry)), this._geometry;
  }
  field(e4) {
    this._fieldTypesFixed || this._fixFieldTypes();
    const t6 = this.attributes[e4];
    if (void 0 !== t6)
      return t6;
    const i4 = e4.toLowerCase();
    for (const s6 in this.attributes)
      if (s6.toLowerCase() === i4)
        return this.attributes[s6];
    if (this._hasFieldDefinition(i4))
      return null;
    throw new a$5(null, r$5.FieldNotFound, null, { key: e4 });
  }
  _hasFieldDefinition(e4) {
    if (null === this._layer)
      return false;
    for (let t6 = 0; t6 < this._layer.fields.length; t6++) {
      if (this._layer.fields[t6].name.toLowerCase() === e4)
        return true;
    }
    return false;
  }
  setField(t6, i4) {
    if (this.immutable)
      throw new a$5(null, r$5.Immutable, null);
    if (i4 instanceof Date && (i4 = this.isUnknownDateTimeField(t6) ? m$7.unknownDateJSToArcadeDate(i4) : m$7.dateJSToArcadeDate(i4)), false === J$6(i4))
      throw new a$5(null, r$5.TypeNotAllowedInFeature, null);
    const n3 = t6.toLowerCase();
    if (void 0 === this.attributes[t6]) {
      for (const e4 in this.attributes)
        if (e4.toLowerCase() === n3)
          return void (this.attributes[e4] = i4);
      this.attributes[t6] = i4;
    } else
      this.attributes[t6] = i4;
  }
  hasField(e4) {
    const t6 = e4.toLowerCase();
    if (void 0 !== this.attributes[e4])
      return true;
    for (const i4 in this.attributes)
      if (i4.toLowerCase() === t6)
        return true;
    return !!this._hasFieldDefinition(t6);
  }
  keys() {
    let e4 = [];
    const t6 = {};
    for (const i4 in this.attributes)
      e4.push(i4), t6[i4.toLowerCase()] = 1;
    if (null !== this._layer)
      for (let i4 = 0; i4 < this._layer.fields.length; i4++) {
        const s6 = this._layer.fields[i4];
        1 !== t6[s6.name.toLowerCase()] && e4.push(s6.name);
      }
    return e4 = e4.sort(), e4;
  }
  static parseGeometryFromDictionary(e4) {
    const t6 = D._convertDictionaryToJson(e4, true);
    return void 0 !== t6.hasm && (t6.hasM = t6.hasm, delete t6.hasm), void 0 !== t6.hasz && (t6.hasZ = t6.hasz, delete t6.hasz), void 0 !== t6.spatialreference && (t6.spatialReference = t6.spatialreference, delete t6.spatialreference), void 0 !== t6.rings && (t6.rings = this._fixPathArrays(t6.rings, true === t6.hasZ, true === t6.hasZ)), void 0 !== t6.paths && (t6.paths = this._fixPathArrays(t6.paths, true === t6.hasZ, true === t6.hasM)), void 0 !== t6.points && (t6.points = this._fixPointArrays(t6.points, true === t6.hasZ, true === t6.hasM)), p$b(t6);
  }
  static _fixPathArrays(e4, t6, i4) {
    const s6 = [];
    if (e4 instanceof Array)
      for (let r3 = 0; r3 < e4.length; r3++)
        s6.push(this._fixPointArrays(e4[r3], t6, i4));
    else if (e4 instanceof t$5)
      for (let r3 = 0; r3 < e4.length(); r3++)
        s6.push(this._fixPointArrays(e4.get(r3), t6, i4));
    return s6;
  }
  static _fixPointArrays(e4, t6, i4) {
    const s6 = [];
    if (e4 instanceof Array)
      for (let r3 = 0; r3 < e4.length; r3++) {
        const o3 = e4[r3];
        o3 instanceof x$5 ? t6 && i4 ? s6.push([o3.x, o3.y, o3.z, o3.m]) : t6 ? s6.push([o3.x, o3.y, o3.z]) : i4 ? s6.push([o3.x, o3.y, o3.m]) : s6.push([o3.x, o3.y]) : o3 instanceof t$5 ? s6.push(o3.toArray()) : s6.push(o3);
      }
    else if (e4 instanceof t$5)
      for (let r3 = 0; r3 < e4.length(); r3++) {
        const o3 = e4.get(r3);
        o3 instanceof x$5 ? t6 && i4 ? s6.push([o3.x, o3.y, o3.z, o3.m]) : t6 ? s6.push([o3.x, o3.y, o3.z]) : i4 ? s6.push([o3.x, o3.y, o3.m]) : s6.push([o3.x, o3.y]) : o3 instanceof t$5 ? s6.push(o3.toArray()) : s6.push(o3);
      }
    return s6;
  }
  static _convertDictionaryToJson(e4, t6 = false) {
    const s6 = {};
    for (const r3 in e4.attributes) {
      let n3 = e4.attributes[r3];
      n3 instanceof N$3 && (n3 = D._convertDictionaryToJson(n3)), t6 ? s6[r3.toLowerCase()] = n3 : s6[r3] = n3;
    }
    return s6;
  }
  static parseAttributesFromDictionary(e4) {
    const t6 = {};
    for (const i4 in e4.attributes) {
      const n3 = e4.attributes[i4];
      if (!J$6(n3))
        throw new a$5(null, r$5.InvalidParameter, null);
      t6[i4] = n3;
    }
    return t6;
  }
  static fromJson(e4, t6) {
    let i4 = null;
    null !== e4.geometry && void 0 !== e4.geometry && (i4 = p$b(e4.geometry));
    const n3 = {};
    if (null !== e4.attributes && void 0 !== e4.attributes)
      for (const o3 in e4.attributes) {
        const t7 = e4.attributes[o3];
        if (null === t7)
          n3[o3] = t7;
        else {
          if (!(P$6(t7) || z$6(t7) || G$4(t7) || Q$5(t7) || K$4(t7) || X$6(t7)))
            throw new a$5(null, r$5.InvalidParameter, null);
          n3[o3] = t7;
        }
      }
    return D.createFromGraphicLikeObject(i4, n3, null, t6 ?? null);
  }
  fullSchema() {
    return this._layer;
  }
  gdbVersion() {
    if (null === this._layer)
      return "";
    const e4 = this._layer.gdbVersion;
    return void 0 === e4 ? "" : "" === e4 && this._layer.capabilities?.isVersioned ? "SDE.DEFAULT" : e4;
  }
  castAsJson(e4) {
    const t6 = { attributes: {}, geometry: true === e4?.keepGeometryType ? this.geometry() : this.geometry()?.toJSON() ?? null };
    for (const i4 in this.attributes) {
      const s6 = this.attributes[i4];
      void 0 !== s6 && (t6.attributes[i4] = ve$2(s6, e4));
    }
    return t6;
  }
  async castAsJsonAsync(e4 = null, t6) {
    return this.castAsJson(t6);
  }
};
i$5(D$5);
const e$3 = { all: { min: 2, max: 2 }, time: { min: 0, max: 4 }, dateonly: { min: 0, max: 3 }, getenvironment: { min: 0, max: 0 }, none: { min: 2, max: 2 }, any: { min: 2, max: 2 }, reduce: { min: 2, max: 3 }, map: { min: 2, max: 2 }, filter: { min: 2, max: 2 }, fromcodepoint: { min: 1, max: -1 }, fromcharcode: { min: 1, max: -1 }, tocodepoint: { min: 1, max: 2 }, tocharcode: { min: 1, max: 2 }, concatenate: { min: 0, max: -1 }, expects: { min: 1, max: -1 }, getfeatureset: { min: 1, max: 2 }, week: { min: 1, max: 2 }, fromjson: { min: 1, max: 1 }, length3d: { min: 1, max: 2 }, tohex: { min: 1, max: 1 }, hash: { min: 1, max: 1 }, timezone: { min: 1, max: 1 }, timezoneoffset: { min: 1, max: 1 }, changetimezone: { min: 2, max: 2 }, isoweek: { min: 1, max: 1 }, isoweekday: { min: 1, max: 1 }, hasvalue: { min: 2, max: 2 }, isomonth: { min: 1, max: 1 }, isoyear: { min: 1, max: 1 }, resize: { min: 2, max: 3 }, slice: { min: 0, max: -1 }, splice: { min: 0, max: -1 }, push: { min: 2, max: 2 }, pop: { min: 1, max: 1 }, includes: { min: 2, max: 2 }, array: { min: 0, max: 2 }, front: { min: 1, max: 1 }, back: { min: 1, max: 1 }, insert: { min: 3, max: 3 }, erase: { min: 2, max: 2 }, split: { min: 2, max: 4 }, guid: { min: 0, max: 1 }, standardizeguid: { min: 2, max: 2 }, today: { min: 0, max: 0 }, angle: { min: 2, max: 3 }, bearing: { min: 2, max: 3 }, urlencode: { min: 1, max: 1 }, now: { min: 0, max: 0 }, timestamp: { min: 0, max: 0 }, day: { min: 1, max: 1 }, month: { min: 1, max: 1 }, year: { min: 1, max: 1 }, hour: { min: 1, max: 1 }, second: { min: 1, max: 1 }, millisecond: { min: 1, max: 1 }, minute: { min: 1, max: 1 }, weekday: { min: 1, max: 1 }, toutc: { min: 1, max: 1 }, tolocal: { min: 1, max: 1 }, date: { min: 0, max: 8 }, datediff: { min: 2, max: 4 }, dateadd: { min: 2, max: 3 }, trim: { min: 1, max: 1 }, text: { min: 1, max: 2 }, left: { min: 2, max: 2 }, right: { min: 2, max: 2 }, mid: { min: 2, max: 3 }, upper: { min: 1, max: 1 }, proper: { min: 1, max: 2 }, lower: { min: 1, max: 1 }, find: { min: 2, max: 3 }, iif: { min: 3, max: 3 }, decode: { min: 2, max: -1 }, when: { min: 2, max: -1 }, defaultvalue: { min: 2, max: 2 }, isempty: { min: 1, max: 1 }, domaincode: { min: 2, max: 4 }, domainname: { min: 2, max: 4 }, polygon: { min: 1, max: 1 }, point: { min: 1, max: 1 }, polyline: { min: 1, max: 1 }, extent: { min: 1, max: 1 }, multipoint: { min: 1, max: 1 }, ringisclockwise: { min: 1, max: 1 }, geometry: { min: 1, max: 1 }, count: { min: 0, max: -1 }, number: { min: 1, max: 2 }, acos: { min: 1, max: 1 }, asin: { min: 1, max: 1 }, atan: { min: 1, max: 1 }, atan2: { min: 2, max: 2 }, ceil: { min: 1, max: 2 }, floor: { min: 1, max: 2 }, round: { min: 1, max: 2 }, cos: { min: 1, max: 1 }, exp: { min: 1, max: 1 }, log: { min: 1, max: 1 }, min: { min: 0, max: -1 }, constrain: { min: 3, max: 3 }, console: { min: 0, max: -1 }, max: { min: 0, max: -1 }, pow: { min: 2, max: 2 }, random: { min: 0, max: 0 }, sqrt: { min: 1, max: 1 }, sin: { min: 1, max: 1 }, tan: { min: 1, max: 1 }, abs: { min: 1, max: 1 }, isnan: { min: 1, max: 1 }, stdev: { min: 0, max: -1 }, average: { min: 0, max: -1 }, mean: { min: 0, max: -1 }, sum: { min: 0, max: -1 }, variance: { min: 0, max: -1 }, distinct: { min: 0, max: -1 }, first: { min: 1, max: 1 }, top: { min: 2, max: 2 }, boolean: { min: 1, max: 1 }, dictionary: { min: 0, max: -1 }, typeof: { min: 1, max: 1 }, reverse: { min: 1, max: 1 }, replace: { min: 3, max: 4 }, sort: { min: 1, max: 2 }, feature: { min: 1, max: -1 }, haskey: { min: 2, max: 2 }, indexof: { min: 2, max: 2 }, disjoint: { min: 2, max: 2 }, intersects: { min: 2, max: 2 }, touches: { min: 2, max: 2 }, crosses: { min: 2, max: 2 }, within: { min: 2, max: 2 }, contains: { min: 2, max: 2 }, overlaps: { min: 2, max: 2 }, equals: { min: 2, max: 2 }, relate: { min: 3, max: 3 }, intersection: { min: 2, max: 2 }, union: { min: 1, max: 2 }, difference: { min: 2, max: 2 }, symmetricdifference: { min: 2, max: 2 }, clip: { min: 2, max: 2 }, cut: { min: 2, max: 2 }, area: { min: 1, max: 2 }, areageodetic: { min: 1, max: 2 }, length: { min: 1, max: 2 }, lengthgeodetic: { min: 1, max: 2 }, distancegeodetic: { min: 2, max: 3 }, distance: { min: 2, max: 3 }, densify: { min: 2, max: 3 }, densifygeodetic: { min: 2, max: 3 }, generalize: { min: 2, max: 4 }, buffer: { min: 2, max: 3 }, buffergeodetic: { min: 2, max: 3 }, offset: { min: 2, max: 6 }, rotate: { min: 2, max: 3 }, issimple: { min: 1, max: 1 }, simplify: { min: 1, max: 1 }, convexhull: { min: 1, max: 1 }, centroid: { min: 1, max: 1 }, nearestcoordinate: { min: 2, max: 2 }, nearestvertex: { min: 2, max: 2 }, isselfintersecting: { min: 1, max: 1 }, multiparttosinglepart: { min: 1, max: 1 }, setgeometry: { min: 2, max: 2 }, portal: { min: 1, max: 1 }, getuser: { min: 0, max: 2 }, subtypes: { min: 1, max: 1 }, subtypecode: { min: 1, max: 1 }, subtypename: { min: 1, max: 1 }, domain: { min: 2, max: 3 }, convertdirection: { min: 3, max: 3 }, sqltimestamp: { min: 1, max: 3 }, schema: { min: 1, max: 1 } }, n$2 = { functionDefinitions: /* @__PURE__ */ new Map(), constantDefinitions: /* @__PURE__ */ new Map() }, a$3 = { functionDefinitions: /* @__PURE__ */ new Map(), constantDefinitions: /* @__PURE__ */ new Map() };
for (const b2 of ["pi", "infinity"])
  a$3.constantDefinitions.set(b2, { type: "constant" }), n$2.constantDefinitions.set(b2, { type: "constant" });
a$3.constantDefinitions.set("textformatting", { type: "namespace", key: "textformatting", members: [{ key: "backwardslash", type: "constant" }, { key: "doublequote", type: "constant" }, { key: "forwardslash", type: "constant" }, { key: "tab", type: "constant" }, { key: "singlequote", type: "constant" }, { key: "newline", type: "constant" }] }), n$2.constantDefinitions.set("textformatting", { type: "namespace", key: "textformatting", members: [{ key: "backwardslash", type: "constant" }, { key: "tab", type: "constant" }, { key: "singlequote", type: "constant" }, { key: "doublequote", type: "constant" }, { key: "forwardslash", type: "constant" }, { key: "newline", type: "constant" }] });
for (const b2 in e$3) {
  const t6 = e$3[b2];
  a$3.functionDefinitions.set(b2, { overloads: [{ type: "function", parametersInfo: { min: t6.min, max: t6.max } }] }), n$2.functionDefinitions.set(b2, { overloads: [{ type: "function", parametersInfo: { min: t6.min, max: t6.max } }] });
}
const t$4 = /* @__PURE__ */ new Set(["featureset", "featuresetbyid", "featuresetbyname", "featuresetbyassociation", "featuresetbyrelationshipname", "featuresetbyurl", "getfeatureset", "getuser", "attachments", "featuresetbyportalitem", "getfeaturesetinfo"]), m$5 = /* @__PURE__ */ new Set(["disjoint", "intersects", "touches", "crosses", "within", "contains", "overlaps", "equals", "relate", "intersection", "nearestvertex", "nearestcoordinate", "union", "difference", "symmetricdifference", "clip", "cut", "area", "areageodetic", "length", "length3d", "lengthgeodetic", "distance", "distancegeodetic", "densify", "densifygeodetic", "generalize", "buffer", "buffergeodetic", "offset", "rotate", "issimple", "convexhull", "simplify", "multiparttosinglepart"]);
function i$4(e4) {
  return "string" == typeof e4 || e4 instanceof String;
}
function o$4(e4, t6) {
  const m2 = "sync" === t6 ? n$2 : a$3;
  m2.functionDefinitions.has(e4.name.toLowerCase()) ? m2.functionDefinitions.get(e4.name.toLowerCase())?.overloads.push({ type: "function", parametersInfo: { min: e4.min, max: e4.max } }) : m2.functionDefinitions.set(e4.name.toLowerCase(), { overloads: [{ type: "function", parametersInfo: { min: e4.min, max: e4.max } }] });
}
function s$5(e4, n3) {
  if (e4)
    for (const a3 of e4)
      r$3(a3, n3);
}
function r$3(e4, n3) {
  if (e4 && false !== n3(e4))
    switch (e4.type) {
      case "ImportDeclaration":
        s$5(e4.specifiers, n3), r$3(e4.source, n3);
        break;
      case "ExportNamedDeclaration":
        r$3(e4.declaration, n3);
        break;
      case "ArrayExpression":
        s$5(e4.elements, n3);
        break;
      case "AssignmentExpression":
      case "BinaryExpression":
      case "LogicalExpression":
        r$3(e4.left, n3), r$3(e4.right, n3);
        break;
      case "BlockStatement":
      case "Program":
        s$5(e4.body, n3);
        break;
      case "BreakStatement":
      case "ContinueStatement":
      case "EmptyStatement":
      case "Identifier":
      case "Literal":
        break;
      case "CallExpression":
        r$3(e4.callee, n3), s$5(e4.arguments, n3);
        break;
      case "ExpressionStatement":
        r$3(e4.expression, n3);
        break;
      case "ForInStatement":
        r$3(e4.left, n3), r$3(e4.right, n3), r$3(e4.body, n3);
        break;
      case "ForStatement":
        r$3(e4.init, n3), r$3(e4.test, n3), r$3(e4.update, n3), r$3(e4.body, n3);
        break;
      case "WhileStatement":
        r$3(e4.test, n3), r$3(e4.body, n3);
        break;
      case "FunctionDeclaration":
        r$3(e4.id, n3), s$5(e4.params, n3), r$3(e4.body, n3);
        break;
      case "IfStatement":
        r$3(e4.test, n3), r$3(e4.consequent, n3), r$3(e4.alternate, n3);
        break;
      case "MemberExpression":
        r$3(e4.object, n3), r$3(e4.property, n3);
        break;
      case "ObjectExpression":
        s$5(e4.properties, n3);
        break;
      case "Property":
        r$3(e4.key, n3), r$3(e4.value, n3);
        break;
      case "ReturnStatement":
      case "UnaryExpression":
      case "UpdateExpression":
        r$3(e4.argument, n3);
        break;
      case "VariableDeclaration":
        s$5(e4.declarations, n3);
        break;
      case "VariableDeclarator":
        r$3(e4.id, n3), r$3(e4.init, n3);
        break;
      case "TemplateLiteral":
        s$5(e4.expressions, n3), s$5(e4.quasis, n3);
    }
}
function c$3(e4, n3) {
  let a3 = false;
  const t6 = n3.toLowerCase();
  return r$3(e4, (e5) => !a3 && ("Identifier" === e5.type && e5.name && e5.name.toLowerCase() === t6 && (a3 = true), true)), a3;
}
function x$4(e4) {
  const n3 = [];
  return r$3(e4, (e5) => ("ImportDeclaration" === e5.type && e5.source && e5.source.value && n3.push({ libname: e5.specifiers[0].local.name.toLowerCase(), source: e5.source.value }), true)), n3;
}
function p$5(e4, n3) {
  let a3 = false;
  const t6 = n3.toLowerCase();
  return r$3(e4, (e5) => !a3 && ("CallExpression" !== e5.type || "Identifier" !== e5.callee.type || !e5.callee.name || e5.callee.name.toLowerCase() !== t6 || (a3 = true, false))), a3;
}
function l$6(e4) {
  const n3 = [];
  return r$3(e4, (e5) => "MemberExpression" !== e5.type || "Identifier" !== e5.object.type || (false === e5.computed && e5.object && e5.object.name && e5.property && "Identifier" === e5.property.type && e5.property.name ? n3.push(e5.object.name.toLowerCase() + "." + e5.property.name.toLowerCase()) : e5.object && e5.object.name && e5.property && "Literal" === e5.property.type && "string" == typeof e5.property.value && n3.push(e5.object.name.toLowerCase() + "." + e5.property.value?.toString().toLowerCase()), false)), n3;
}
function u$5(e4) {
  const n3 = [];
  return r$3(e4, (e5) => {
    if ("CallExpression" === e5.type) {
      if ("Identifier" === e5.callee.type && "expects" === e5.callee.name.toLowerCase()) {
        let a3 = "";
        for (let t6 = 0; t6 < (e5.arguments || []).length; t6++)
          0 === t6 ? "Identifier" === e5.arguments[t6].type && (a3 = e5.arguments[t6].name.toLowerCase()) : a3 && "Literal" === e5.arguments[t6].type && i$4(e5.arguments[t6].value) && n3.push(a3 + "." + e5.arguments[t6].value.toLowerCase());
        return false;
      }
      if ("Identifier" === e5.callee.type && ["domainname", "domaincode", "domain", "haskey"].includes(e5.callee.name.toLowerCase()) && e5.arguments.length >= 2) {
        let a3 = "";
        return "Identifier" === e5.arguments[0].type && (a3 = e5.arguments[0].name.toLowerCase()), a3 && "Literal" === e5.arguments[1].type && i$4(e5.arguments[1].value) && n3.push(a3 + "." + e5.arguments[1].value.toLowerCase()), false;
      }
    }
    return "MemberExpression" !== e5.type || "Identifier" !== e5.object.type || (false === e5.computed && e5.object && e5.object.name && e5.property && "Identifier" === e5.property.type && e5.property.name ? n3.push(e5.object.name.toLowerCase() + "." + e5.property.name.toLowerCase()) : e5.object && e5.object.name && e5.property && "Literal" === e5.property.type && "string" == typeof e5.property.value && n3.push(e5.object.name.toLowerCase() + "." + e5.property.value?.toString().toLowerCase()), false);
  }), n3;
}
function y$3(e4) {
  const n3 = [];
  return r$3(e4, (e5) => ("CallExpression" === e5.type && "Identifier" === e5.callee.type && n3.push(e5.callee.name.toLowerCase()), true)), n3;
}
function d$4(e4, n3 = []) {
  let a3 = null;
  if (void 0 === e4.usesFeatureSet) {
    null === a3 && (a3 = y$3(e4)), e4.usesFeatureSet = false;
    for (let n4 = 0; n4 < a3.length; n4++)
      t$4.has(a3[n4]) && (e4.usesFeatureSet = true, e4.isAsync = true);
    if (false === e4.usesFeatureSet && n3 && n3.length > 0) {
      for (const a4 of n3)
        if (c$3(e4, a4)) {
          e4.usesFeatureSet = true, e4.isAsync = true;
          break;
        }
    }
  }
  if (void 0 === e4.usesModules) {
    e4.usesModules = false;
    x$4(e4).length > 0 && (e4.usesModules = true);
  }
  if (void 0 === e4.usesGeometry) {
    e4.usesGeometry = false, null === a3 && (a3 = y$3(e4));
    for (let n4 = 0; n4 < a3.length; n4++)
      m$5.has(a3[n4]) && (e4.usesGeometry = true);
  }
}
function F$2(F2) {
  function p3(n3, o3, u3) {
    if (n3 instanceof t$5)
      return n3.toArray();
    if (q$7(n3))
      return n3;
    throw new a$5(o3, r$5.InvalidParameter, u3);
  }
  function y2(n3, t6) {
    const r3 = n3.length, e4 = Math.floor(r3 / 2);
    return 0 === r3 ? [] : 1 === r3 ? [n3[0]] : v2(y2(n3.slice(0, e4), t6), y2(n3.slice(e4, r3), t6), t6);
  }
  function v2(n3, t6, r3) {
    const e4 = [];
    for (; n3.length > 0 || t6.length > 0; )
      if (n3.length > 0 && t6.length > 0) {
        let o3 = r3(n3[0], t6[0]);
        isNaN(o3) && (o3 = 0), o3 <= 0 ? (e4.push(n3[0]), n3 = n3.slice(1)) : (e4.push(t6[0]), t6 = t6.slice(1));
      } else
        n3.length > 0 ? (e4.push(n3[0]), n3 = n3.slice(1)) : t6.length > 0 && (e4.push(t6[0]), t6 = t6.slice(1));
    return e4;
  }
  async function P3(n3, t6) {
    const r3 = n3.length, e4 = Math.floor(r3 / 2);
    if (0 === r3)
      return [];
    if (1 === r3)
      return [n3[0]];
    const o3 = [await P3(n3.slice(0, e4), t6), await P3(n3.slice(e4, r3), t6)];
    return I2(o3[0], o3[1], t6, []);
  }
  async function I2(n3, t6, r3, e4) {
    const o3 = e4;
    if (!(n3.length > 0 || t6.length > 0))
      return e4;
    if (n3.length > 0 && t6.length > 0) {
      let i4 = await r3(n3[0], t6[0]);
      return isNaN(i4) && (i4 = 1), i4 <= 0 ? (o3.push(n3[0]), n3 = n3.slice(1)) : (o3.push(t6[0]), t6 = t6.slice(1)), I2(n3, t6, r3, e4);
    }
    return n3.length > 0 ? (o3.push(n3[0]), I2(n3 = n3.slice(1), t6, r3, e4)) : t6.length > 0 ? (o3.push(t6[0]), I2(n3, t6 = t6.slice(1), r3, e4)) : void 0;
  }
  function N3(n3, e4, u3, a3) {
    ne$4(u3, 1, 2, n3, e4);
    let s6 = u3[0];
    if ($$4(s6) && (s6 = s6.toArray()), false === q$7(s6))
      throw new a$5(n3, r$5.InvalidParameter, e4);
    if (u3.length > 1) {
      if (false === v$4(u3[1]))
        throw new a$5(n3, r$5.InvalidParameter, e4);
      let o3 = s6;
      const i4 = u3[1].createFunction(n3);
      return a3 ? P3(o3, i4) : (o3 = y2(o3, (n4, t6) => i4(n4, t6)), o3);
    }
    let l2 = s6;
    if (0 === l2.length)
      return [];
    const d2 = {};
    for (let t6 = 0; t6 < l2.length; t6++) {
      const n4 = Y$6(l2[t6]);
      "" !== n4 && (d2[n4] = true);
    }
    if (true === d2.Array || true === d2.Dictionary || true === d2.Feature || true === d2.Point || true === d2.Polygon || true === d2.Polyline || true === d2.Multipoint || true === d2.Extent || true === d2.Function)
      return l2.slice(0);
    let m2 = 0, F3 = "";
    for (const t6 in d2)
      m2++, F3 = t6;
    return l2 = m2 > 1 || "String" === F3 ? y2(l2, (n4, t6) => {
      if (null == n4 || n4 === w$3)
        return null == t6 || t6 === w$3 ? 0 : 1;
      if (null == t6 || t6 === w$3)
        return -1;
      const r3 = ce$3(n4), e5 = ce$3(t6);
      return r3 < e5 ? -1 : r3 === e5 ? 0 : 1;
    }) : "Number" === F3 ? y2(l2, (n4, t6) => n4 - t6) : "Boolean" === F3 ? y2(l2, (n4, t6) => n4 === t6 ? 0 : t6 ? -1 : 1) : "Date" === F3 ? y2(l2, (n4, t6) => t6 - n4) : l2.slice(0), l2;
  }
  F2.functions.array = function(e4, f2) {
    return F2.standardFunction(e4, f2, (d2, h3, w2) => {
      if (ne$4(w2, 0, 2, e4, f2), 0 === w2.length)
        return new Array();
      if (1 === w2.length && null === w2[0])
        return new Array();
      if (q$7(w2[0])) {
        if (2 === w2.length && false === G$4(w2[1]))
          throw new a$5(e4, r$5.InvalidParameter, f2);
        return true === L$4(w2[1], false) ? p$6(w2[0]) : w2[0].slice(0);
      }
      if ($$4(w2[0])) {
        if (2 === w2.length && false === G$4(w2[1]))
          throw new a$5(e4, r$5.InvalidParameter, f2);
        return true === L$4(w2[1], false) ? p$6(w2[0]) : w2[0].toArray().slice(0);
      }
      const g2 = pe$2(w2[0]);
      if (isNaN(g2) || false === E$2(g2))
        throw new a$5(e4, r$5.InvalidParameter, f2);
      const m2 = L$4(w2[1], null), F3 = new Array(g2);
      return F3.fill(m2), F3;
    });
  }, F2.functions.front = function(n3, e4) {
    return F2.standardFunction(n3, e4, (u3, a3, s6) => {
      if (ne$4(s6, 1, 1, n3, e4), $$4(s6[0])) {
        if (s6[0].length() <= 0)
          throw new a$5(n3, r$5.OutOfBounds, e4);
        return s6[0].get(0);
      }
      if (q$7(s6[0])) {
        if (s6[0].length <= 0)
          throw new a$5(n3, r$5.OutOfBounds, e4);
        return s6[0][0];
      }
      throw new a$5(n3, r$5.InvalidParameter, e4);
    });
  }, F2.functions.back = function(n3, e4) {
    return F2.standardFunction(n3, e4, (u3, a3, s6) => {
      if (ne$4(s6, 1, 1, n3, e4), $$4(s6[0])) {
        if (s6[0].length() <= 0)
          throw new a$5(n3, r$5.OutOfBounds, e4);
        return s6[0].get(s6[0].length() - 1);
      }
      if (q$7(s6[0])) {
        if (s6[0].length <= 0)
          throw new a$5(n3, r$5.OutOfBounds, e4);
        return s6[0][s6[0].length - 1];
      }
      throw new a$5(n3, r$5.InvalidParameter, e4);
    });
  }, F2.functions.push = function(n3, e4) {
    return F2.standardFunction(n3, e4, (u3, a3, c2) => {
      if (ne$4(c2, 1, 2, n3, e4), q$7(c2[0]))
        return c2[0][c2[0].length] = c2[1], c2[0].length;
      throw new a$5(n3, r$5.InvalidParameter, e4);
    });
  }, F2.functions.pop = function(n3, e4) {
    return F2.standardFunction(n3, e4, (u3, a3, c2) => {
      if (ne$4(c2, 1, 1, n3, e4), q$7(c2[0])) {
        if (c2[0].length <= 0)
          throw new a$5(n3, r$5.OutOfBounds, e4);
        const o3 = c2[0][c2[0].length - 1];
        return c2[0].length = c2[0].length - 1, o3;
      }
      throw new a$5(n3, r$5.InvalidParameter, e4);
    });
  }, F2.functions.erase = function(n3, e4) {
    return F2.standardFunction(n3, e4, (u3, a3, c2) => {
      if (ne$4(c2, 2, 2, n3, e4), q$7(c2[0])) {
        let o3 = pe$2(c2[1]);
        if (isNaN(o3) || false === E$2(o3))
          throw new a$5(n3, r$5.InvalidParameter, e4);
        const i4 = c2[0];
        if (i4.length <= 0)
          throw new a$5(n3, r$5.OutOfBounds, e4);
        if (o3 < 0 && (o3 = i4.length + o3), o3 < 0)
          throw new a$5(n3, r$5.OutOfBounds, e4);
        if (o3 >= i4.length)
          throw new a$5(n3, r$5.OutOfBounds, e4);
        return i4.splice(o3, 1), w$3;
      }
      throw new a$5(n3, r$5.InvalidParameter, e4);
    });
  }, F2.functions.insert = function(n3, e4) {
    return F2.standardFunction(n3, e4, (u3, a3, c2) => {
      if (ne$4(c2, 3, 3, n3, e4), q$7(c2[0])) {
        const o3 = pe$2(c2[1]);
        if (isNaN(o3) || false === E$2(o3))
          throw new a$5(n3, r$5.InvalidParameter, e4);
        const i4 = c2[2], u4 = c2[0];
        if (o3 > u4.length)
          throw new a$5(n3, r$5.OutOfBounds, e4);
        if (o3 < 0 && o3 < -1 * u4.length)
          throw new a$5(n3, r$5.OutOfBounds, e4);
        return o3 === u4.length ? (u4[o3] = i4, w$3) : (u4.splice(o3, 0, i4), w$3);
      }
      throw new a$5(n3, r$5.InvalidParameter, e4);
    });
  }, F2.functions.resize = function(n3, e4) {
    return F2.standardFunction(n3, e4, (u3, c2, d2) => {
      if (ne$4(d2, 2, 3, n3, e4), q$7(d2[0])) {
        const o3 = pe$2(d2[1]);
        if (isNaN(o3) || false === E$2(o3))
          throw new a$5(n3, r$5.InvalidParameter, e4);
        if (o3 < 0)
          throw new a$5(n3, r$5.InvalidParameter, e4);
        const i4 = L$4(d2[2], null), u4 = d2[0];
        if (u4.length >= o3)
          return u4.length = o3, w$3;
        const c3 = u4.length;
        u4.length = o3;
        for (let n4 = c3; n4 < u4.length; n4++)
          u4[n4] = i4;
        return w$3;
      }
      throw new a$5(n3, r$5.InvalidParameter, e4);
    });
  }, F2.functions.includes = function(n3, e4) {
    return F2.standardFunction(n3, e4, (u3, a3, s6) => {
      if (ne$4(s6, 2, 2, n3, e4), q$7(s6[0])) {
        const n4 = s6[1];
        return s6[0].findIndex((t6) => fe$2(t6, n4)) > -1;
      }
      if ($$4(s6[0])) {
        const n4 = s6[1];
        return s6[0].toArray().findIndex((t6) => fe$2(t6, n4)) > -1;
      }
      throw new a$5(n3, r$5.InvalidParameter, e4);
    });
  }, F2.functions.slice = function(n3, e4) {
    return F2.standardFunction(n3, e4, (u3, f2, d2) => {
      if (ne$4(d2, 1, 3, n3, e4), q$7(d2[0])) {
        const o3 = pe$2(L$4(d2[1], 0)), i4 = pe$2(L$4(d2[2], d2[0].length));
        if (isNaN(o3) || false === E$2(o3))
          throw new a$5(n3, r$5.InvalidParameter, e4);
        if (isNaN(i4) || false === E$2(i4))
          throw new a$5(n3, r$5.InvalidParameter, e4);
        return d2[0].slice(o3, i4);
      }
      if ($$4(d2[0])) {
        const o3 = d2[0], i4 = pe$2(L$4(d2[1], 0)), u4 = pe$2(L$4(d2[2], o3.length()));
        if (isNaN(i4) || false === E$2(i4))
          throw new a$5(n3, r$5.InvalidParameter, e4);
        if (isNaN(u4) || false === E$2(u4))
          throw new a$5(n3, r$5.InvalidParameter, e4);
        return o3.toArray().slice(i4, u4);
      }
      throw new a$5(n3, r$5.InvalidParameter, e4);
    });
  }, F2.functions.splice = function(n3, t6) {
    return F2.standardFunction(n3, t6, (n4, t7, r3) => {
      const e4 = [];
      for (let o3 = 0; o3 < r3.length; o3++)
        q$7(r3[o3]) ? e4.push(...r3[o3]) : $$4(r3[o3]) ? e4.push(...r3[o3].toArray()) : e4.push(r3[o3]);
      return e4;
    });
  }, F2.functions.top = function(n3, e4) {
    return F2.standardFunction(n3, e4, (u3, a3, l2) => {
      if (ne$4(l2, 2, 2, n3, e4), q$7(l2[0]))
        return pe$2(l2[1]) >= l2[0].length ? l2[0].slice(0) : l2[0].slice(0, pe$2(l2[1]));
      if ($$4(l2[0]))
        return pe$2(l2[1]) >= l2[0].length() ? l2[0].slice(0) : l2[0].slice(0, pe$2(l2[1]));
      throw new a$5(n3, r$5.InvalidParameter, e4);
    });
  }, F2.functions.first = function(n3, t6) {
    return F2.standardFunction(n3, t6, (r3, e4, u3) => (ne$4(u3, 1, 1, n3, t6), q$7(u3[0]) ? 0 === u3[0].length ? null : u3[0][0] : $$4(u3[0]) ? 0 === u3[0].length() ? null : u3[0].get(0) : null));
  }, "sync" === F2.mode && (F2.functions.sort = function(n3, t6) {
    return F2.standardFunction(n3, t6, (r3, e4, o3) => N3(n3, t6, o3, false));
  }, F2.functions.any = function(n3, t6) {
    return F2.standardFunction(n3, t6, (r3, e4, i4) => {
      ne$4(i4, 2, 2, n3, t6);
      const a3 = i4[1].createFunction(n3), c2 = p3(i4[0], n3, t6);
      for (const n4 of c2) {
        const t7 = a3(n4);
        if (G$4(t7) && true === t7)
          return true;
      }
      return false;
    });
  }, F2.functions.all = function(n3, t6) {
    return F2.standardFunction(n3, t6, (r3, e4, i4) => {
      ne$4(i4, 2, 2, n3, t6);
      const u3 = i4[1].createFunction(n3), a3 = p3(i4[0], n3, t6);
      for (const n4 of a3) {
        if (true !== u3(n4))
          return false;
      }
      return true;
    });
  }, F2.functions.none = function(n3, t6) {
    return F2.standardFunction(n3, t6, (r3, e4, i4) => {
      ne$4(i4, 2, 2, n3, t6);
      const u3 = i4[1].createFunction(n3), a3 = p3(i4[0], n3, t6);
      for (const n4 of a3) {
        if (true === u3(n4))
          return false;
      }
      return true;
    });
  }, F2.functions.reduce = function(n3, t6) {
    return F2.standardFunction(n3, t6, (r3, e4, i4) => {
      ne$4(i4, 2, 3, n3, t6);
      const u3 = i4[1].createFunction(n3), a3 = p3(i4[0], n3, t6);
      return 2 === i4.length ? 0 === a3.length ? null : a3.reduce((n4, t7) => {
        const r4 = u3(n4, t7);
        return n4 = void 0 !== r4 && r4 !== w$3 ? r4 : null;
      }) : a3.reduce((n4, t7) => {
        const r4 = u3(n4, t7);
        return n4 = void 0 !== r4 && r4 !== w$3 ? r4 : null;
      }, i4[2]);
    });
  }, F2.functions.map = function(n3, t6) {
    return F2.standardFunction(n3, t6, (r3, e4, i4) => {
      ne$4(i4, 2, 2, n3, t6);
      const u3 = i4[1].createFunction(n3), a3 = p3(i4[0], n3, t6), c2 = [];
      for (const n4 of a3) {
        const t7 = u3(n4);
        void 0 !== t7 && t7 !== w$3 ? c2.push(t7) : c2.push(null);
      }
      return c2;
    });
  }, F2.functions.filter = function(n3, t6) {
    return F2.standardFunction(n3, t6, (r3, e4, i4) => {
      ne$4(i4, 2, 2, n3, t6);
      const u3 = i4[1].createFunction(n3), a3 = p3(i4[0], n3, t6), c2 = [];
      for (const n4 of a3) {
        true === u3(n4) && c2.push(n4);
      }
      return c2;
    });
  }), "async" === F2.mode && (F2.functions.sort = function(n3, t6) {
    return F2.standardFunctionAsync(n3, t6, (r3, e4, o3) => N3(n3, t6, o3, true));
  }, F2.functions.any = function(n3, t6) {
    return F2.standardFunctionAsync(n3, t6, async (r3, e4, i4) => {
      ne$4(i4, 2, 2, n3, t6);
      const a3 = i4[1].createFunction(n3), c2 = p3(i4[0], n3, t6);
      for (const n4 of c2) {
        const t7 = await a3(n4);
        let r4 = null;
        if (r4 = E$4(r4) ? await t7 : t7, G$4(r4) && true === r4)
          return true;
      }
      return false;
    });
  }, F2.functions.all = function(n3, t6) {
    return F2.standardFunctionAsync(n3, t6, async (r3, e4, i4) => {
      ne$4(i4, 2, 2, n3, t6);
      const u3 = i4[1].createFunction(n3), a3 = p3(i4[0], n3, t6);
      for (const n4 of a3) {
        const t7 = await u3(n4);
        let r4 = null;
        if (r4 = E$4(r4) ? await t7 : t7, true !== r4)
          return false;
      }
      return true;
    });
  }, F2.functions.none = function(n3, t6) {
    return F2.standardFunctionAsync(n3, t6, async (r3, e4, i4) => {
      ne$4(i4, 2, 2, n3, t6);
      const u3 = i4[1].createFunction(n3), a3 = p3(i4[0], n3, t6);
      for (const n4 of a3) {
        const t7 = await u3(n4);
        let r4 = null;
        if (r4 = E$4(r4) ? await t7 : t7, true === r4)
          return false;
      }
      return true;
    });
  }, F2.functions.filter = function(n3, t6) {
    return F2.standardFunctionAsync(n3, t6, async (r3, e4, i4) => {
      ne$4(i4, 2, 2, n3, t6);
      const u3 = i4[1].createFunction(n3), a3 = p3(i4[0], n3, t6), c2 = [];
      for (const n4 of a3) {
        const t7 = await u3(n4);
        let r4 = null;
        r4 = E$4(r4) ? await t7 : t7, true === r4 && c2.push(n4);
      }
      return c2;
    });
  }, F2.functions.reduce = function(n3, t6) {
    return F2.standardFunctionAsync(n3, t6, (r3, e4, i4) => {
      ne$4(i4, 2, 3, n3, t6);
      const u3 = i4[1].createFunction(n3), c2 = p3(i4[0], n3, t6);
      let s6 = null;
      if (i4.length > 2) {
        const n4 = L$4(i4[2], null);
        s6 = c2.reduce(async (n5, t7) => {
          let r4 = await n5;
          return void 0 !== r4 && r4 !== w$3 || (r4 = null), u3(r4, t7);
        }, Promise.resolve(n4));
      } else {
        if (0 === c2.length)
          return null;
        s6 = c2.reduce(async (n4, t7, r4) => {
          if (r4 <= 1)
            return u3(n4, t7);
          let e5 = await n4;
          return void 0 !== e5 && e5 !== w$3 || (e5 = null), u3(e5, t7);
        });
      }
      return s6.then((n4) => void 0 !== n4 && n4 !== w$3 ? n4 : null);
    });
  }, F2.functions.map = function(n3, t6) {
    return F2.standardFunctionAsync(n3, t6, async (r3, e4, i4) => {
      ne$4(i4, 2, 2, n3, t6);
      const u3 = i4[1].createFunction(n3), a3 = p3(i4[0], n3, t6), c2 = [];
      for (const n4 of a3) {
        const t7 = await u3(n4);
        let r4 = null;
        r4 = E$4(r4) ? await t7 : t7, void 0 !== r4 && r4 !== w$3 ? c2.push(r4) : c2.push(null);
      }
      return c2;
    });
  });
}
const p$4 = Object.freeze(Object.defineProperty({ __proto__: null, registerFunctions: F$2 }, Symbol.toStringTag, { value: "Module" }));
function k$3(n3, e4, r3) {
  return n3 + (T$5(r3) ? P$5 : D$4)[e4];
}
function T$5(n3) {
  return n3 % 4 == 0 && (n3 % 100 != 0 || n3 % 400 == 0);
}
const D$4 = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], P$5 = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function S$3(n3) {
  return null === n3 ? n3 : false === n3.isValid ? null : n3;
}
function Z$4(n3, e4) {
  return "" === n3 || "default" === n3.toLowerCase().trim() ? qe(e4) : "z" === n3 || "Z" === n3 ? "UTC" : n3;
}
function p$3(n3, e4) {
  return X$6(n3) ? n3.toArcadeDate() : ge$2(n3, qe(e4));
}
function C$3(T2, D3) {
  T2.today = function(e4, r3) {
    return D3(e4, r3, (t6, a3, s6) => {
      ne$4(s6, 0, 0, e4, r3);
      const i4 = /* @__PURE__ */ new Date();
      return i4.setHours(0, 0, 0, 0), m$7.dateJSAndZoneToArcadeDate(i4, qe(e4));
    });
  }, T2.time = function(e4, f2) {
    return D3(e4, f2, (m2, d2, h3) => {
      switch (ne$4(h3, 0, 4, e4, f2), h3.length) {
        case 0: {
          const r3 = m$7.nowToArcadeDate(qe(e4));
          return new n$6(r3.hour, r3.minute, r3.second, r3.millisecond);
        }
        case 1: {
          if (K$4(h3[0]))
            return h3[0].clone();
          if (Q$5(h3[0]))
            return new n$6(h3[0].hour, h3[0].minute, h3[0].second, h3[0].millisecond);
          if (X$6(h3[0]))
            return new n$6(0, 0, 0, 0);
          if (P$6(h3[0]))
            return n$6.fromString(h3[0]);
          const n3 = pe$2(h3[0]);
          return false === isNaN(n3) ? n$6.fromMilliseconds(n3) : null;
        }
        case 2:
          return P$6(h3[0]) && P$6(h3[1]) ? n$6.fromString(h3[0], h3[1]) : n$6.fromParts(pe$2(h3[0]), pe$2(h3[1]), 0, 0);
        case 3:
          return n$6.fromParts(pe$2(h3[0]), pe$2(h3[1]), pe$2(h3[2]), 0);
        case 4:
          return n$6.fromParts(pe$2(h3[0]), pe$2(h3[1]), pe$2(h3[2]), pe$2(h3[3]));
      }
      throw new a$5(e4, r$5.InvalidParameter, f2);
    });
  }, T2.dateonly = function(e4, r3) {
    return D3(e4, r3, (t6, i4, m2) => {
      if (ne$4(m2, 0, 3, e4, r3), 3 === m2.length)
        return n$5.fromParts(pe$2(m2[0]), pe$2(m2[1]) + 1, pe$2(m2[2]));
      if (2 === m2.length) {
        const n3 = ce$3(m2[1]);
        return "" === n3 ? null : "X" === n3 ? n$5.fromSeconds(pe$2(m2[0])) : "x" === n3 ? n$5.fromMilliseconds(pe$2(m2[0])) : n$5.fromString(ce$3(m2[0]), n3);
      }
      if (1 === m2.length) {
        if (P$6(m2[0])) {
          if ("" === m2[0].replaceAll(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""))
            return null;
          if (true === /^[0-9][0-9][0-9][0-9]$/.test(m2[0]))
            return n$5.fromString(m2[0] + "-01-01");
        }
        if (X$6(m2[0]))
          return m2[0].clone();
        if (Q$5(m2[0]))
          return n$5.fromParts(m2[0].year, m2[0].monthJS + 1, m2[0].day);
        const n3 = pe$2(m2[0]);
        return false === isNaN(n3) ? n$5.fromMilliseconds(n3) : P$6(m2[0]) ? n$5.fromString(m2[0]) : null;
      }
      if (0 === m2.length) {
        const r4 = m$7.nowToArcadeDate(qe(e4));
        return false === r4.isValid ? null : n$5.fromParts(r4.year, r4.monthJS + 1, r4.day);
      }
      return null;
    });
  }, T2.changetimezone = function(a3, s6) {
    return D3(a3, s6, (i4, l2, d2) => {
      if (ne$4(d2, 2, 2, a3, s6), null === d2[0])
        return null;
      if (X$6(d2[0]))
        throw new a$5(a3, r$5.CannotChangeTimeZoneDateOnly, s6);
      if (X$6(d2[0]))
        throw new a$5(a3, r$5.CannotChangeTimeZoneTime, s6);
      const h3 = ge$2(d2[0], qe(a3));
      if (null === h3)
        throw new a$5(a3, r$5.InvalidParameter, s6);
      const y2 = h$4(Z$4(ce$3(d2[1]), a3), false);
      if (null === y2)
        return null;
      const N3 = m$7.arcadeDateAndZoneToArcadeDate(h3, y2);
      return false === N3.isValid ? null : N3;
    });
  }, T2.timezone = function(e4, r3) {
    return D3(e4, r3, (t6, a3, s6) => {
      if (ne$4(s6, 1, 2, e4, r3), K$4(s6[0]))
        return "Unknown";
      if (X$6(s6[0]))
        return "Unknown";
      const l2 = ge$2(s6[0], qe(e4));
      if (null === l2)
        return null;
      const f2 = l2.timeZone;
      return "system" === f2 ? m$7.systemTimeZoneCanonicalName : "utc" === f2.toLowerCase() ? "UTC" : "unknown" === f2.toLowerCase() ? "Unknown" : f2;
    });
  }, T2.timezoneoffset = function(n3, e4) {
    return D3(n3, e4, (r3, t6, a3) => {
      ne$4(a3, 1, 1, n3, e4);
      const s6 = ge$2(a3[0], qe(n3));
      return null === s6 ? null : 60 * s6.timeZoneOffset * 1e3;
    });
  }, T2.now = function(e4, r3) {
    return D3(e4, r3, (t6, a3, s6) => {
      ne$4(s6, 0, 0, e4, r3);
      const i4 = m$7.nowToArcadeDate(qe(e4));
      return false === i4.isValid ? null : i4;
    });
  }, T2.timestamp = function(e4, r3) {
    return D3(e4, r3, (t6, u3, a3) => {
      ne$4(a3, 0, 0, e4, r3);
      const s6 = m$7.nowUTCToArcadeDate();
      return false === s6.isValid ? null : s6;
    });
  }, T2.toutc = function(n3, e4) {
    return D3(n3, e4, (r3, t6, a3) => {
      ne$4(a3, 1, 1, n3, e4);
      const s6 = ge$2(a3[0], qe(n3));
      return null === s6 ? null : s6.toUTC();
    });
  }, T2.tolocal = function(n3, e4) {
    return D3(n3, e4, (r3, t6, a3) => {
      ne$4(a3, 1, 1, n3, e4);
      const s6 = ge$2(a3[0], qe(n3));
      return null === s6 ? null : s6.toLocal();
    });
  }, T2.day = function(n3, e4) {
    return D3(n3, e4, (r3, t6, a3) => {
      ne$4(a3, 1, 1, n3, e4);
      const s6 = p$3(a3[0], qe(n3));
      return null === s6 ? NaN : s6.day;
    });
  }, T2.month = function(n3, e4) {
    return D3(n3, e4, (r3, t6, a3) => {
      ne$4(a3, 1, 1, n3, e4);
      const s6 = p$3(a3[0], qe(n3));
      return null === s6 ? NaN : s6.monthJS;
    });
  }, T2.year = function(n3, e4) {
    return D3(n3, e4, (r3, t6, a3) => {
      ne$4(a3, 1, 1, n3, e4);
      const s6 = p$3(a3[0], qe(n3));
      return null === s6 ? NaN : s6.year;
    });
  }, T2.hour = function(n3, e4) {
    return D3(n3, e4, (r3, t6, a3) => {
      if (ne$4(a3, 1, 1, n3, e4), K$4(a3[0]))
        return a3[0].hour;
      const s6 = ge$2(a3[0], qe(n3));
      return null === s6 ? NaN : s6.hour;
    });
  }, T2.second = function(n3, e4) {
    return D3(n3, e4, (r3, t6, a3) => {
      if (ne$4(a3, 1, 1, n3, e4), K$4(a3[0]))
        return a3[0].second;
      const s6 = ge$2(a3[0], qe(n3));
      return null === s6 ? NaN : s6.second;
    });
  }, T2.millisecond = function(n3, e4) {
    return D3(n3, e4, (r3, t6, a3) => {
      if (ne$4(a3, 1, 1, n3, e4), K$4(a3[0]))
        return a3[0].millisecond;
      const s6 = ge$2(a3[0], qe(n3));
      return null === s6 ? NaN : s6.millisecond;
    });
  }, T2.minute = function(n3, e4) {
    return D3(n3, e4, (r3, t6, a3) => {
      if (ne$4(a3, 1, 1, n3, e4), K$4(a3[0]))
        return a3[0].minute;
      const s6 = ge$2(a3[0], qe(n3));
      return null === s6 ? NaN : s6.minute;
    });
  }, T2.week = function(n3, e4) {
    return D3(n3, e4, (s6, i4, l2) => {
      ne$4(l2, 1, 2, n3, e4);
      const c2 = p$3(l2[0], qe(n3));
      if (null === c2)
        return NaN;
      const f2 = pe$2(L$4(l2[1], 0));
      if (f2 < 0 || f2 > 6)
        throw new a$5(n3, r$5.InvalidParameter, e4);
      const m2 = c2.day, h3 = c2.monthJS, y2 = c2.year, N3 = c2.dayOfWeekJS, w2 = k$3(m2, h3, y2) - 1, g2 = Math.floor(w2 / 7);
      return N3 - f2 + (N3 - f2 < 0 ? 7 : 0) < w2 - 7 * g2 ? g2 + 1 : g2;
    });
  }, T2.weekday = function(n3, e4) {
    return D3(n3, e4, (r3, t6, a3) => {
      ne$4(a3, 1, 1, n3, e4);
      const s6 = p$3(a3[0], qe(n3));
      return null === s6 ? NaN : s6.dayOfWeekJS;
    });
  }, T2.isoweekday = function(n3, e4) {
    return D3(n3, e4, (r3, t6, a3) => {
      ne$4(a3, 1, 1, n3, e4);
      const s6 = p$3(a3[0], qe(n3));
      return null === s6 ? NaN : s6.dayOfWeekISO;
    });
  }, T2.isomonth = function(n3, e4) {
    return D3(n3, e4, (r3, t6, a3) => {
      ne$4(a3, 1, 1, n3, e4);
      const s6 = p$3(a3[0], qe(n3));
      return null === s6 ? NaN : s6.monthISO;
    });
  }, T2.isoweek = function(n3, e4) {
    return D3(n3, e4, (r3, t6, a3) => {
      ne$4(a3, 1, 1, n3, e4);
      const s6 = p$3(a3[0], qe(n3));
      return null === s6 ? NaN : s6.weekISO;
    });
  }, T2.isoyear = function(n3, e4) {
    return D3(n3, e4, (r3, t6, a3) => {
      ne$4(a3, 1, 1, n3, e4);
      const s6 = p$3(a3[0], qe(n3));
      return null === s6 ? NaN : s6.yearISO;
    });
  }, T2.date = function(r3, t6) {
    return D3(r3, t6, (l2, d2, y2) => {
      if (ne$4(y2, 0, 8, r3, t6), 3 === y2.length) {
        if (X$6(y2[0]) && K$4(y2[1]) && P$6(y2[2])) {
          const t7 = h$4(Z$4(ce$3(y2[2]) ?? "unknown", r3), false);
          return null === t7 ? null : S$3(m$7.fromParts(y2[0].year, y2[0].month, y2[0].day, y2[1].hour, y2[1].minute, y2[1].second, y2[1].millisecond, t7));
        }
        return S$3(m$7.fromParts(pe$2(y2[0]), pe$2(y2[1]) + 1, pe$2(y2[2]), 0, 0, 0, 0, qe(r3)));
      }
      if (4 === y2.length)
        return S$3(m$7.fromParts(pe$2(y2[0]), pe$2(y2[1]) + 1, pe$2(y2[2]), pe$2(y2[3]), 0, 0, 0, qe(r3)));
      if (5 === y2.length)
        return S$3(m$7.fromParts(pe$2(y2[0]), pe$2(y2[1]) + 1, pe$2(y2[2]), pe$2(y2[3]), pe$2(y2[4]), 0, 0, qe(r3)));
      if (6 === y2.length)
        return S$3(m$7.fromParts(pe$2(y2[0]), pe$2(y2[1]) + 1, pe$2(y2[2]), pe$2(y2[3]), pe$2(y2[4]), pe$2(y2[5]), 0, qe(r3)));
      if (7 === y2.length)
        return S$3(m$7.fromParts(pe$2(y2[0]), pe$2(y2[1]) + 1, pe$2(y2[2]), pe$2(y2[3]), pe$2(y2[4]), pe$2(y2[5]), pe$2(y2[6]), qe(r3)));
      if (8 === y2.length) {
        const t7 = h$4(Z$4(ce$3(y2[7]) ?? "unknown", r3), false);
        return null === t7 ? null : S$3(m$7.fromParts(pe$2(y2[0]), pe$2(y2[1]) + 1, pe$2(y2[2]), pe$2(y2[3]), pe$2(y2[4]), pe$2(y2[5]), pe$2(y2[6]), t7));
      }
      if (2 === y2.length) {
        if (X$6(y2[0]) && P$6(y2[1])) {
          const t8 = h$4(Z$4(ce$3(y2[1]) ?? "unknown", r3), false);
          return null === t8 ? null : S$3(m$7.fromParts(y2[0].year, y2[0].month, y2[0].day, 0, 0, 0, 0, t8));
        }
        if (X$6(y2[0]) && K$4(y2[1]))
          return S$3(m$7.fromParts(y2[0].year, y2[0].month, y2[0].day, y2[1].hour, y2[1].minute, y2[1].second, y2[1].millisecond, "unknown"));
        let t7, o3 = ce$3(y2[1]);
        return "" === o3 ? null : (o3 = ue$4(o3, true), t7 = "X" === o3 ? DateTime.fromSeconds(pe$2(y2[0])) : "x" === o3 ? DateTime.fromMillis(pe$2(y2[0])) : DateTime.fromFormat(ce$3(y2[0]), o3, { locale: c$5(), numberingSystem: "latn" }), t7.isValid ? m$7.dateTimeToArcadeDate(t7) : null);
      }
      if (1 === y2.length) {
        if (X$6(y2[0]))
          return S$3(m$7.fromParts(y2[0].year, y2[0].month, y2[0].day, 0, 0, 0, 0, "unknown"));
        if (P$6(y2[0])) {
          if ("" === y2[0].replaceAll(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""))
            return null;
          if (true === /^[0-9][0-9][0-9][0-9]$/.test(y2[0]))
            return ge$2(y2[0] + "-01-01", qe(r3));
        }
        const e4 = pe$2(y2[0]);
        if (false === isNaN(e4)) {
          const t7 = DateTime.fromMillis(e4);
          return t7.isValid ? m$7.dateTimeAndZoneToArcadeDate(t7, qe(r3)) : null;
        }
        return ge$2(y2[0], qe(r3));
      }
      return 0 === y2.length ? m$7.nowToArcadeDate(qe(r3)) : null;
    });
  }, T2.datediff = function(e4, r3) {
    return D3(e4, r3, (t6, a3, s6) => {
      if (ne$4(s6, 2, 4, e4, r3), K$4(s6[0]))
        return K$4(s6[1]) ? s6[0].difference(s6[1], ce$3(s6[2])) : NaN;
      if (K$4(s6[1]))
        return NaN;
      if (X$6(s6[0]))
        return X$6(s6[1]) ? s6[0].difference(s6[1], ce$3(s6[2])) : NaN;
      if (X$6(s6[1]))
        return NaN;
      let l2 = ge$2(s6[0], qe(e4)), h3 = ge$2(s6[1], qe(e4));
      if (null === l2 || null === h3)
        return NaN;
      let y2 = L$4(s6[3], "");
      switch ("" !== y2 && null !== y2 ? (y2 = Z$4(ce$3(y2), e4), l2 = m$7.arcadeDateAndZoneToArcadeDate(l2, y2), h3 = m$7.arcadeDateAndZoneToArcadeDate(h3, y2)) : l2.timeZone !== h3.timeZone && (l2.isUnknownTimeZone ? l2 = m$7.arcadeDateAndZoneToArcadeDate(l2, h3.timeZone) : h3 = (h3.isUnknownTimeZone, m$7.arcadeDateAndZoneToArcadeDate(h3, l2.timeZone))), ce$3(s6[2]).toLowerCase()) {
        case "days":
        case "day":
        case "d":
          return l2.diff(h3, "days");
        case "months":
        case "month":
          return l2.diff(h3, "months");
        case "minutes":
        case "minute":
        case "m":
          return "M" === s6[2] ? l2.diff(h3, "months") : l2.diff(h3, "minutes");
        case "seconds":
        case "second":
        case "s":
          return l2.diff(h3, "seconds");
        case "milliseconds":
        case "millisecond":
        case "ms":
        default:
          return l2.diff(h3);
        case "hours":
        case "hour":
        case "h":
          return l2.diff(h3, "hours");
        case "years":
        case "year":
        case "y":
          return l2.diff(h3, "years");
      }
    });
  }, T2.dateadd = function(n3, e4) {
    return D3(n3, e4, (r3, t6, s6) => {
      ne$4(s6, 2, 3, n3, e4);
      let l2 = pe$2(s6[1]);
      if (isNaN(l2) || l2 === 1 / 0 || l2 === -1 / 0)
        return K$4(s6[0]) || X$6(s6[0]) ? s6[0].clone() : ge$2(s6[0], qe(n3));
      let d2 = "milliseconds";
      switch (ce$3(s6[2]).toLowerCase()) {
        case "days":
        case "day":
        case "d":
          d2 = "days", l2 = X$6(s6[0]) ? l2 : re$5(l2);
          break;
        case "months":
        case "month":
          d2 = "months", l2 = X$6(s6[0]) ? l2 : re$5(l2);
          break;
        case "minutes":
        case "minute":
        case "m":
          d2 = "M" === s6[2] ? "months" : "minutes";
          break;
        case "seconds":
        case "second":
        case "s":
          d2 = "seconds";
          break;
        case "milliseconds":
        case "millisecond":
        case "ms":
          d2 = "milliseconds";
          break;
        case "hours":
        case "hour":
        case "h":
          d2 = "hours";
          break;
        case "years":
        case "year":
        case "y":
          d2 = "years";
      }
      if (K$4(s6[0]))
        return s6[0].plus(d2, l2);
      if (X$6(s6[0]))
        return s6[0].plus(d2, l2);
      const h3 = ge$2(s6[0], qe(n3));
      return null === h3 ? null : h3.plus({ [d2]: l2 });
    });
  };
}
function r$2(t6, n3, e4) {
  return Math.sqrt((t6[0] - n3[0]) ** 2 + (t6[1] - n3[1]) ** 2 + (void 0 !== t6[2] && void 0 !== n3[2] ? (t6[2] * e4 - n3[2] * e4) ** 2 : 0));
}
const o$3 = [];
for (const R2 of [[9002, 56146130, 6131, 6132, 8050, 8051, 8228], [9003, 5702, 6358, 6359, 6360, 8052, 8053], [9095, 5754]]) {
  const t6 = R2[0];
  for (let n3 = 1; n3 < R2.length; n3++)
    o$3[R2[n3]] = t6;
}
const s$4 = [];
function i$3(t6) {
  return t6.vcsWkid && void 0 !== o$3[t6.vcsWkid] ? s$4[o$3[t6.vcsWkid]] : t6.latestVcsWkid && void 0 !== o$3[t6.latestVcsWkid] ? s$4[o$3[t6.latestVcsWkid]] : 1;
}
function c$2(t6, n3, e4) {
  const r3 = { x: 0, y: 0 };
  n3 && (r3.z = 0), e4 && (r3.m = 0);
  let o3 = 0, s6 = t6[0];
  for (let i4 = 0; i4 < t6.length; i4++) {
    const c2 = t6[i4];
    if (false === l$5(c2, s6)) {
      const t7 = h$2(s6, c2, n3), i5 = a$2(s6, c2, n3, e4);
      i5.x *= t7, i5.y *= t7, r3.x += i5.x, r3.y += i5.y, n3 && (i5.z *= t7, r3.z += i5.z), e4 && (i5.m *= t7, r3.m += i5.m), o3 += t7, s6 = c2;
    }
  }
  return o3 > 0 ? (r3.x /= o3, r3.y /= o3, n3 && (r3.z /= o3), e4 && (r3.m /= o3)) : (r3.x = t6[0][0], r3.y = t6[0][1], n3 && (r3.z = t6[0][2]), e4 && n3 ? r3.m = t6[0][3] : e4 && (r3.m = t6[0][2])), r3;
}
function a$2(t6, n3, e4, r3) {
  const o3 = { x: (t6[0] + n3[0]) / 2, y: (t6[1] + n3[1]) / 2 };
  return e4 && (o3.z = (t6[2] + n3[2]) / 2), e4 && r3 ? o3.m = (t6[3] + n3[3]) / 2 : r3 && (o3.m = (t6[2] + n3[2]) / 2), o3;
}
function f$3(t6, n3) {
  if (t6.length <= 1)
    return 0;
  let e4 = 0;
  for (let r3 = 1; r3 < t6.length; r3++)
    e4 += h$2(t6[r3 - 1], t6[r3], n3);
  return e4;
}
function h$2(t6, n3, e4) {
  const r3 = n3[0] - t6[0], o3 = n3[1] - t6[1];
  if (e4) {
    const t7 = n3[2] - n3[2];
    return Math.sqrt(r3 * r3 + o3 * o3 + t7 * t7);
  }
  return Math.sqrt(r3 * r3 + o3 * o3);
}
function l$5(t6, n3) {
  if (t6.length !== n3.length)
    return false;
  for (let e4 = 0; e4 < t6.length; e4++)
    if (t6[e4] !== n3[e4])
      return false;
  return true;
}
function u$4(t6) {
  const e4 = { x: 0, y: 0, spatialReference: t6.spatialReference.toJSON() }, r3 = { x: 0, y: 0, spatialReference: t6.spatialReference.toJSON() };
  let o3 = 0, s6 = 0;
  for (let n3 = 0; n3 < t6.paths.length; n3++) {
    if (0 === t6.paths[n3].length)
      continue;
    const i4 = f$3(t6.paths[n3], true === t6.hasZ);
    if (0 === i4) {
      const r4 = c$2(t6.paths[n3], true === t6.hasZ, true === t6.hasM);
      e4.x += r4.x, e4.y += r4.y, true === t6.hasZ && (e4.z += r4.z), true === t6.hasM && (e4.m += r4.m), ++o3;
    } else {
      const e5 = c$2(t6.paths[n3], true === t6.hasZ, true === t6.hasM);
      r3.x += e5.x * i4, r3.y += e5.y * i4, true === t6.hasZ && (r3.z += e5.z * i4), true === t6.hasM && (r3.m += e5.m * i4), s6 += i4;
    }
  }
  return s6 > 0 ? (r3.x /= s6, r3.y /= s6, true === t6.hasZ && (r3.z /= s6), true === t6.hasM && (r3.m /= s6), new x$5(r3)) : o3 > 0 ? (e4.x /= o3, e4.y /= o3, true === t6.hasZ && (r3.z /= o3), true === t6.hasM && (e4.m /= o3), new x$5(e4)) : null;
}
function y$2(t6) {
  if (0 === t6.points.length)
    return null;
  let e4 = 0, r3 = 0, o3 = 0, s6 = 0;
  for (let n3 = 0; n3 < t6.points.length; n3++) {
    const i5 = t6.getPoint(n3);
    true === i5.hasZ && (o3 += i5.z), true === i5.hasM && (s6 += i5.m), e4 += i5.x, r3 += i5.y, s6 += i5.m;
  }
  const i4 = { x: e4 / t6.points.length, y: r3 / t6.points.length, spatialReference: null };
  return i4.spatialReference = t6.spatialReference.toJSON(), true === t6.hasZ && (i4.z = o3 / t6.points.length), true === t6.hasM && (i4.m = s6 / t6.points.length), new x$5(i4);
}
function x$3(t6, n3) {
  return t6.x * n3.x + t6.y * n3.y;
}
function m$4(t6, n3) {
  return t6.x * n3.y - n3.x * t6.y;
}
function p$2(t6, n3, e4 = 0) {
  for (; t6 < e4; )
    t6 += n3;
  const r3 = e4 + n3;
  for (; t6 >= r3; )
    t6 -= n3;
  return t6;
}
function g$3(t6, n3) {
  return Math.atan2(n3.y - t6.y, n3.x - t6.x);
}
function M$3(t6, n3) {
  return p$2(g$3(t6, n3), 2 * Math.PI) * (180 / Math.PI);
}
function z$5(t6, n3) {
  return p$2(Math.PI / 2 - g$3(t6, n3), 2 * Math.PI) * (180 / Math.PI);
}
function d$3(t6, n3, e4) {
  const r3 = { x: t6.x - n3.x, y: t6.y - n3.y }, o3 = { x: e4.x - n3.x, y: e4.y - n3.y };
  return Math.atan2(m$4(r3, o3), x$3(r3, o3));
}
function P$4(n3, e4, r3) {
  return m$9(p$2(d$3(n3, e4, r3), 2 * Math.PI));
}
function Z$3(n3, e4, r3) {
  return m$9(p$2(-1 * d$3(n3, e4, r3), 2 * Math.PI));
}
s$4[9002] = 0.3048, s$4[9003] = 0.3048006096012192, s$4[9095] = 0.3048007491;
const v$2 = [0, 0];
function I$4(t6) {
  for (let n3 = 0; n3 < t6.length; n3++) {
    const r3 = t6[n3];
    for (let s6 = 0; s6 < r3.length - 1; s6++) {
      const o4 = r3[s6], i4 = r3[s6 + 1];
      for (let r4 = n3 + 1; r4 < t6.length; r4++)
        for (let n4 = 0; n4 < t6[r4].length - 1; n4++) {
          const s7 = t6[r4][n4], c2 = t6[r4][n4 + 1];
          if (G$6(o4, i4, s7, c2, v$2) && !(v$2[0] === o4[0] && v$2[1] === o4[1] || v$2[0] === s7[0] && v$2[1] === s7[1] || v$2[0] === i4[0] && v$2[1] === i4[1] || v$2[0] === c2[0] && v$2[1] === c2[1]))
            return true;
        }
    }
    const o3 = r3.length;
    if (!(o3 < 3))
      for (let t7 = 0; t7 <= o3 - 2; t7++) {
        const n4 = r3[t7], s6 = r3[t7 + 1];
        for (let i4 = t7 + 2; i4 <= o3 - 2; i4++) {
          const t8 = r3[i4], o4 = r3[i4 + 1];
          if (G$6(n4, s6, t8, o4, v$2) && !(v$2[0] === n4[0] && v$2[1] === n4[1] || v$2[0] === t8[0] && v$2[1] === t8[1] || v$2[0] === s6[0] && v$2[1] === s6[1] || v$2[0] === o4[0] && v$2[1] === o4[1]))
            return true;
        }
      }
  }
  return false;
}
function A$3(e4) {
  return e4 && "esri.arcade.Feature" === e4.arcadeDeclaredClass;
}
function W$5(a3, W2) {
  a3.ringisclockwise = function(e4, r3) {
    return W2(e4, r3, (a4, c2, f2) => {
      ne$4(f2, 1, 1, e4, r3);
      let u3 = [];
      if (null === f2[0])
        return false;
      if (q$7(f2[0]))
        for (const i4 of f2[0]) {
          if (!(i4 instanceof x$5))
            throw new a$5(e4, r$5.InvalidParameter, r3);
          u3.push(i4.hasZ ? i4.hasM ? [i4.x, i4.y, i4.z, i4.m] : [i4.x, i4.y, i4.z] : [i4.x, i4.y]);
        }
      else if (f2[0] instanceof i$6)
        u3 = f2[0]._elements;
      else {
        if (!$$4(f2[0]))
          throw new a$5(e4, r$5.InvalidParameter, r3);
        for (const a5 of f2[0].toArray()) {
          if (!(a5 instanceof x$5))
            throw new a$5(e4, r$5.InvalidParameter, r3);
          u3.push(a5.hasZ ? a5.hasM ? [a5.x, a5.y, a5.z, a5.m] : [a5.x, a5.y, a5.z] : [a5.x, a5.y]);
        }
      }
      return !(u3.length < 3) && a$6(u3);
    });
  }, a3.polygon = function(a4, i4) {
    return W2(a4, i4, (s6, l2, u3) => {
      ne$4(u3, 1, 1, a4, i4);
      let m2 = null;
      if (u3[0] instanceof N$3) {
        if (m2 = Ne$1(D$5.parseGeometryFromDictionary(u3[0]), a4.spatialReference), m2 instanceof j$3 == false)
          throw new a$5(a4, r$5.InvalidParameter, i4);
      } else
        m2 = u3[0] instanceof j$3 ? p$b(u3[0].toJSON()) : Ne$1(new j$3(JSON.parse(u3[0])), a4.spatialReference);
      if (null !== m2 && false === m2.spatialReference.equals(a4.spatialReference))
        throw new a$5(a4, r$5.WrongSpatialReference, i4);
      return Se$2(m2);
    });
  }, a3.polyline = function(a4, i4) {
    return W2(a4, i4, (s6, l2, u3) => {
      ne$4(u3, 1, 1, a4, i4);
      let m2 = null;
      if (u3[0] instanceof N$3) {
        if (m2 = Ne$1(D$5.parseGeometryFromDictionary(u3[0]), a4.spatialReference), m2 instanceof m$8 == false)
          throw new a$5(a4, r$5.InvalidParameter, i4);
      } else
        m2 = u3[0] instanceof m$8 ? p$b(u3[0].toJSON()) : Ne$1(new m$8(JSON.parse(u3[0])), a4.spatialReference);
      if (null !== m2 && false === m2.spatialReference.equals(a4.spatialReference))
        throw new a$5(a4, r$5.WrongSpatialReference, i4);
      return Se$2(m2);
    });
  }, a3.point = function(a4, i4) {
    return W2(a4, i4, (s6, l2, u3) => {
      ne$4(u3, 1, 1, a4, i4);
      let m2 = null;
      if (u3[0] instanceof N$3) {
        if (m2 = Ne$1(D$5.parseGeometryFromDictionary(u3[0]), a4.spatialReference), m2 instanceof x$5 == false)
          throw new a$5(a4, r$5.InvalidParameter, i4);
      } else
        m2 = u3[0] instanceof x$5 ? p$b(u3[0].toJSON()) : Ne$1(new x$5(JSON.parse(u3[0])), a4.spatialReference);
      if (null !== m2 && false === m2.spatialReference.equals(a4.spatialReference))
        throw new a$5(a4, r$5.WrongSpatialReference, i4);
      return Se$2(m2);
    });
  }, a3.multipoint = function(a4, i4) {
    return W2(a4, i4, (s6, l2, u3) => {
      ne$4(u3, 1, 1, a4, i4);
      let m2 = null;
      if (u3[0] instanceof N$3) {
        if (m2 = Ne$1(D$5.parseGeometryFromDictionary(u3[0]), a4.spatialReference), m2 instanceof u$8 == false)
          throw new a$5(a4, r$5.InvalidParameter, i4);
      } else
        m2 = u3[0] instanceof u$8 ? p$b(u3[0].toJSON()) : Ne$1(new u$8(JSON.parse(u3[0])), a4.spatialReference);
      if (null !== m2 && false === m2.spatialReference.equals(a4.spatialReference))
        throw new a$5(a4, r$5.WrongSpatialReference, i4);
      return Se$2(m2);
    });
  }, a3.extent = function(a4, i4) {
    return W2(a4, i4, (s6, l2, m2) => {
      m2 = ke(m2), ne$4(m2, 1, 1, a4, i4);
      let h3 = null;
      if (m2[0] instanceof N$3)
        h3 = Ne$1(D$5.parseGeometryFromDictionary(m2[0]), a4.spatialReference);
      else if (m2[0] instanceof x$5) {
        const e4 = { xmin: m2[0].x, ymin: m2[0].y, xmax: m2[0].x, ymax: m2[0].y, spatialReference: m2[0].spatialReference.toJSON() }, t6 = m2[0];
        t6.hasZ ? (e4.zmin = t6.z, e4.zmax = t6.z) : t6.hasM && (e4.mmin = t6.m, e4.mmax = t6.m), h3 = p$b(e4);
      } else
        h3 = m2[0] instanceof j$3 || m2[0] instanceof m$8 || m2[0] instanceof u$8 ? p$b(m2[0].extent?.toJSON()) : m2[0] instanceof M$6 ? p$b(m2[0].toJSON()) : Ne$1(new M$6(JSON.parse(m2[0])), a4.spatialReference);
      if (null !== h3 && false === h3.spatialReference.equals(a4.spatialReference))
        throw new a$5(a4, r$5.WrongSpatialReference, i4);
      return Se$2(h3);
    });
  }, a3.geometry = function(a4, i4) {
    return W2(a4, i4, (s6, l2, u3) => {
      ne$4(u3, 1, 1, a4, i4);
      let m2 = null;
      if (null === u3[0])
        return null;
      if (m2 = A$3(u3[0]) ? Ne$1(u3[0].geometry(), a4.spatialReference) : u3[0] instanceof N$3 ? Ne$1(D$5.parseGeometryFromDictionary(u3[0]), a4.spatialReference) : Ne$1(p$b(JSON.parse(u3[0])), a4.spatialReference), null !== m2 && false === m2.spatialReference.equals(a4.spatialReference))
        throw new a$5(a4, r$5.WrongSpatialReference, i4);
      return Se$2(m2);
    });
  }, a3.setgeometry = function(e4, r3) {
    return W2(e4, r3, (a4, i4, s6) => {
      if (ne$4(s6, 2, 2, e4, r3), !A$3(s6[0]))
        throw new a$5(e4, r$5.InvalidParameter, r3);
      if (true === s6[0].immutable)
        throw new a$5(e4, r$5.Immutable, r3);
      if (!(s6[1] instanceof p$9 || null === s6[1]))
        throw new a$5(e4, r$5.InvalidParameter, r3);
      return s6[0]._geometry = s6[1], w$3;
    });
  }, a3.feature = function(a4, i4) {
    return W2(a4, i4, (o3, s6, l2) => {
      if (0 === l2.length)
        throw new a$5(a4, r$5.WrongNumberOfParameters, i4);
      let f2 = null;
      if (1 === l2.length)
        if (P$6(l2[0]))
          f2 = D$5.fromJson(JSON.parse(l2[0]), a4.timeZone);
        else if (A$3(l2[0]))
          f2 = D$5.createFromArcadeFeature(l2[0]);
        else if (l2[0] instanceof p$9)
          f2 = D$5.createFromGraphicLikeObject(l2[0], null, null, a4.timeZone);
        else {
          if (!(l2[0] instanceof N$3))
            throw new a$5(a4, r$5.InvalidParameter, i4);
          {
            let t6 = l2[0].hasField("geometry") ? l2[0].field("geometry") : null, n3 = l2[0].hasField("attributes") ? l2[0].field("attributes") : null;
            null !== t6 && t6 instanceof N$3 && (t6 = D$5.parseGeometryFromDictionary(t6)), null !== n3 && (n3 = D$5.parseAttributesFromDictionary(n3)), f2 = D$5.createFromGraphicLikeObject(t6, n3, null, a4.timeZone);
          }
        }
      else if (2 === l2.length) {
        let o4 = null, s7 = null;
        if (null !== l2[0])
          if (l2[0] instanceof p$9)
            o4 = l2[0];
          else {
            if (!(o4 instanceof N$3))
              throw new a$5(a4, r$5.InvalidParameter, i4);
            o4 = D$5.parseGeometryFromDictionary(l2[0]);
          }
        if (null !== l2[1]) {
          if (!(l2[1] instanceof N$3))
            throw new a$5(a4, r$5.InvalidParameter, i4);
          s7 = D$5.parseAttributesFromDictionary(l2[1]);
        }
        f2 = D$5.createFromGraphicLikeObject(o4, s7, null, a4.timeZone);
      } else {
        let o4 = null;
        const s7 = {};
        if (null !== l2[0])
          if (l2[0] instanceof p$9)
            o4 = l2[0];
          else {
            if (!(o4 instanceof N$3))
              throw new a$5(a4, r$5.InvalidParameter, i4);
            o4 = D$5.parseGeometryFromDictionary(l2[0]);
          }
        for (let e4 = 1; e4 < l2.length; e4 += 2) {
          const r3 = ce$3(l2[e4]), o5 = l2[e4 + 1];
          if (!(null == o5 || P$6(o5) || isNaN(o5) || Q$5(o5) || z$6(o5) || K$4(o5) || X$6(o5) || G$4(o5)))
            throw new a$5(a4, r$5.InvalidParameter, i4);
          if (v$4(o5) || false === J$6(o5))
            throw new a$5(a4, r$5.InvalidParameter, i4);
          s7[r3] = o5 === w$3 ? null : o5;
        }
        f2 = D$5.createFromGraphicLikeObject(o4, s7, null, a4.timeZone);
      }
      return f2._geometry = Ne$1(f2.geometry(), a4.spatialReference), f2.immutable = false, f2;
    });
  }, a3.dictionary = function(r3, a4) {
    return W2(r3, a4, (i4, o3, c2) => {
      if (0 === c2.length || 1 === c2.length && null === c2[0]) {
        const t6 = new N$3();
        return t6.immutable = false, t6;
      }
      if (1 === c2.length && P$6(c2[0]))
        try {
          const t6 = JSON.parse(c2[0]), n3 = N$3.convertObjectToArcadeDictionary(t6, qe(r3), false);
          return n3.immutable = false, n3;
        } catch (v2) {
          throw new a$5(r3, r$5.InvalidParameter, a4);
        }
      if (1 === c2.length && c2[0] instanceof p$9)
        try {
          const t6 = c2[0].toJSON();
          t6.hasZ = true === c2[0].hasZ, t6.hasM = true === c2[0].hasM;
          const n3 = N$3.convertObjectToArcadeDictionary(t6, qe(r3), false);
          return n3.immutable = false, n3;
        } catch (v2) {
          throw new a$5(r3, r$5.InvalidParameter, a4);
        }
      if (1 === c2.length && U$3(c2[0]))
        try {
          const t6 = new N$3();
          t6.immutable = false, t6.setField("geometry", c2[0].geometry());
          const n3 = new N$3();
          n3.immutable = false, t6.setField("attributes", n3);
          for (const e4 of c2[0].keys())
            n3.setField(e4, c2[0].field(e4));
          return t6;
        } catch (v2) {
          throw new a$5(r3, r$5.InvalidParameter, a4);
        }
      if (1 === c2.length && c2[0] instanceof N$3)
        try {
          const t6 = new N$3();
          t6.immutable = false;
          for (const e4 of c2[0].keys())
            t6.setField(e4, c2[0].field(e4));
          return t6;
        } catch (v2) {
          throw new a$5(r3, r$5.InvalidParameter, a4);
        }
      if (2 === c2.length && c2[0] instanceof N$3 && G$4(c2[1]))
        try {
          if (!(true === c2[1])) {
            const t6 = new N$3();
            t6.immutable = false;
            for (const e4 of c2[0].keys())
              t6.setField(e4, c2[0].field(e4));
            return t6;
          }
          return c2[0].deepClone();
        } catch (v2) {
          throw new a$5(r3, r$5.InvalidParameter, a4);
        }
      if (c2.length % 2 != 0)
        throw new a$5(r3, r$5.WrongNumberOfParameters, a4);
      const f2 = {};
      for (let e4 = 0; e4 < c2.length; e4 += 2) {
        const i5 = ce$3(c2[e4]), o4 = c2[e4 + 1];
        if (!(null == o4 || P$6(o4) || isNaN(o4) || Q$5(o4) || z$6(o4) || G$4(o4) || X$6(o4) || K$4(o4) || q$7(o4) || $$4(o4)))
          throw new a$5(r3, r$5.InvalidParameter, a4);
        if (v$4(o4))
          throw new a$5(r3, r$5.InvalidParameter, a4);
        f2[i5] = o4 === w$3 ? null : o4;
      }
      const u3 = new N$3(f2);
      return u3.immutable = false, u3;
    });
  }, a3.haskey = function(r3, a4) {
    return W2(r3, a4, (i4, s6, l2) => {
      ne$4(l2, 2, 2, r3, a4);
      const c2 = ce$3(l2[1]);
      if (A$3(l2[0]))
        return l2[0].hasField(c2);
      if (l2[0] instanceof N$3)
        return l2[0].hasField(c2);
      if (l2[0] instanceof p$9) {
        const e4 = L$3(l2[0], c2, null, null, 2);
        return !e4 || "notfound" !== e4.keystate;
      }
      throw new a$5(r3, r$5.InvalidParameter, a4);
    });
  }, a3.hasvalue = function(t6, n3) {
    return W2(t6, n3, (r3, a4, i4) => {
      if (ne$4(i4, 2, 2, t6, n3), null === i4[0] || null === i4[1])
        return false;
      const s6 = ce$3(i4[1]);
      if (U$3(i4[0]))
        return !!i4[0].hasField(s6) && null !== i4[0].field(s6);
      if (i4[0] instanceof N$3)
        return !!i4[0].hasField(s6) && null !== i4[0].field(s6);
      if (i4[0] instanceof p$9) {
        return null !== L$3(i4[0], s6, null, null, 0);
      }
      return false;
    });
  }, a3.indexof = function(e4, r3) {
    return W2(e4, r3, (a4, i4, c2) => {
      ne$4(c2, 2, 2, e4, r3);
      const f2 = c2[1];
      if (q$7(c2[0])) {
        for (let e5 = 0; e5 < c2[0].length; e5++)
          if (fe$2(f2, c2[0][e5]))
            return e5;
        return -1;
      }
      if ($$4(c2[0])) {
        const e5 = c2[0].length();
        for (let t6 = 0; t6 < e5; t6++)
          if (fe$2(f2, c2[0].get(t6)))
            return t6;
        return -1;
      }
      throw new a$5(e4, r$5.InvalidParameter, r3);
    });
  }, a3.angle = function(e4, r3) {
    return W2(e4, r3, (a4, i4, s6) => {
      if (s6 = ke(s6), ne$4(s6, 2, 3, e4, r3), !(s6[0] instanceof x$5))
        throw new a$5(e4, r$5.InvalidParameter, r3);
      if (!(s6[1] instanceof x$5))
        throw new a$5(e4, r$5.InvalidParameter, r3);
      if (s6.length > 2 && !(s6[2] instanceof x$5))
        throw new a$5(e4, r$5.InvalidParameter, r3);
      return 2 === s6.length ? M$3(s6[0], s6[1]) : P$4(s6[0], s6[1], s6[2]);
    });
  }, a3.bearing = function(e4, r3) {
    return W2(e4, r3, (a4, i4, s6) => {
      if (s6 = ke(s6), ne$4(s6, 2, 3, e4, r3), !(s6[0] instanceof x$5))
        throw new a$5(e4, r$5.InvalidParameter, r3);
      if (!(s6[1] instanceof x$5))
        throw new a$5(e4, r$5.InvalidParameter, r3);
      if (s6.length > 2 && !(s6[2] instanceof x$5))
        throw new a$5(e4, r$5.InvalidParameter, r3);
      return 2 === s6.length ? z$5(s6[0], s6[1]) : Z$3(s6[0], s6[1], s6[2]);
    });
  }, a3.isselfintersecting = function(e4, t6) {
    return W2(e4, t6, (n3, r3, a4) => {
      a4 = ke(a4), ne$4(a4, 1, 1, e4, t6);
      let i4 = a4[0];
      if (i4 instanceof j$3)
        return i4.isSelfIntersecting;
      if (i4 instanceof m$8)
        return i4 = i4.paths, I$4(i4);
      if (i4 instanceof u$8) {
        const e5 = i4.points;
        for (let t7 = 0; t7 < e5.length; t7++)
          for (let n4 = 0; n4 < e5.length; n4++)
            if (n4 !== t7) {
              let r4 = true;
              for (let a5 = 0; a5 < e5[t7].length; a5++)
                if (e5[t7][a5] !== e5[n4][a5]) {
                  r4 = false;
                  break;
                }
              if (true === r4)
                return true;
            }
      }
      return !(!q$7(i4) && !$$4(i4)) && (i4 = Me$2(i4, e4.spatialReference), null !== i4 && (i4 = i4.paths), I$4(i4));
    });
  };
}
let q$6 = 0;
function L$3(r3, o3, s6, l2, c2 = 1) {
  let f2;
  switch (o3 = o3.toLowerCase()) {
    case "hasz": {
      const e4 = r3.hasZ;
      return void 0 !== e4 && e4;
    }
    case "hasm": {
      const e4 = r3.hasM;
      return void 0 !== e4 && e4;
    }
    case "spatialreference": {
      let t6 = r3.spatialReference._arcadeCacheId;
      if (void 0 === t6) {
        let e4 = true;
        Object.freeze && Object.isFrozen(r3.spatialReference) && (e4 = false), e4 && (q$6++, r3.spatialReference._arcadeCacheId = q$6, t6 = q$6);
      }
      const n3 = new N$3({ wkt: r3.spatialReference.wkt, wkid: r3.spatialReference.wkid });
      return void 0 !== t6 && (n3._arcadeCacheId = "SPREF" + t6.toString()), n3;
    }
  }
  switch (r3.type) {
    case "extent":
      switch (o3) {
        case "xmin":
        case "xmax":
        case "ymin":
        case "ymax":
        case "zmin":
        case "zmax":
        case "mmin":
        case "mmax": {
          const e4 = r3[o3];
          return void 0 !== e4 ? e4 : null;
        }
        case "type":
          return "Extent";
      }
      break;
    case "polygon":
      switch (o3) {
        case "rings":
          f2 = r3.cache._arcadeCacheId, void 0 === f2 && (q$6++, f2 = q$6, r3.cache._arcadeCacheId = f2);
          return new h$3(r3.rings, r3.spatialReference, true === r3.hasZ, true === r3.hasM, f2);
        case "type":
          return "Polygon";
      }
      break;
    case "point":
      switch (o3) {
        case "x":
        case "y":
        case "z":
        case "m":
          return void 0 !== r3[o3] ? r3[o3] : null;
        case "type":
          return "Point";
      }
      break;
    case "polyline":
      switch (o3) {
        case "paths":
          f2 = r3.cache._arcadeCacheId, void 0 === f2 && (q$6++, f2 = q$6, r3.cache._arcadeCacheId = f2);
          return new h$3(r3.paths, r3.spatialReference, true === r3.hasZ, true === r3.hasM, f2);
        case "type":
          return "Polyline";
      }
      break;
    case "multipoint":
      switch (o3) {
        case "points":
          f2 = r3.cache._arcadeCacheId, void 0 === f2 && (q$6++, f2 = q$6, r3.cache._arcadeCacheId = f2);
          return new i$6(r3.points, r3.spatialReference, true === r3.hasZ, true === r3.hasM, f2, 1);
        case "type":
          return "Multipoint";
      }
  }
  if (1 === c2)
    throw new a$5(s6, r$5.InvalidIdentifier, l2);
  return 2 === c2 ? { keystate: "notfound" } : null;
}
let q$5 = null;
function z$4(e4) {
  return 0 === r$7.indexOf("4.") ? j$3.fromExtent(e4) : new j$3({ spatialReference: e4.spatialReference, rings: [[[e4.xmin, e4.ymin], [e4.xmin, e4.ymax], [e4.xmax, e4.ymax], [e4.xmax, e4.ymin], [e4.xmin, e4.ymin]]] });
}
function C$2(n3) {
  q$5 = n3;
}
function J$5(n3, e4) {
  if ("polygon" !== n3.type && "polyline" !== n3.type && "extent" !== n3.type)
    return 0;
  let t6 = 1;
  if (n3.spatialReference.vcsWkid || n3.spatialReference.latestVcsWkid) {
    t6 = i$3(n3.spatialReference) / z$7(n3.spatialReference);
  }
  let r3 = 0;
  if ("polyline" === n3.type)
    for (const a3 of n3.paths)
      for (let n4 = 1; n4 < a3.length; n4++)
        r3 += r$2(a3[n4], a3[n4 - 1], t6);
  else if ("polygon" === n3.type)
    for (const a3 of n3.rings) {
      for (let n4 = 1; n4 < a3.length; n4++)
        r3 += r$2(a3[n4], a3[n4 - 1], t6);
      (a3[0][0] !== a3[a3.length - 1][0] || a3[0][1] !== a3[a3.length - 1][1] || void 0 !== a3[0][2] && a3[0][2] !== a3[a3.length - 1][2]) && (r3 += r$2(a3[0], a3[a3.length - 1], t6));
    }
  else
    "extent" === n3.type && (r3 += 2 * r$2([n3.xmin, n3.ymin, 0], [n3.xmax, n3.ymin, 0], t6), r3 += 2 * r$2([n3.xmin, n3.ymin, 0], [n3.xmin, n3.ymax, 0], t6), r3 *= 2, r3 += 4 * Math.abs(L$4(n3.zmax, 0) * t6 - L$4(n3.zmin, 0) * t6));
  const i4 = new m$8({ hasZ: false, hasM: false, spatialReference: n3.spatialReference, paths: [[0, 0], [0, r3]] });
  return q$5.planarLength(i4, e4);
}
function S$2(n3, j3) {
  function L2(n4, e4, i4) {
    if (ne$4(i4, 2, 2, n4, e4), i4[0] instanceof p$9 && i4[1] instanceof p$9)
      ;
    else if (i4[0] instanceof p$9 && null === i4[1])
      ;
    else if (i4[1] instanceof p$9 && null === i4[0])
      ;
    else if (null !== i4[0] || null !== i4[1])
      throw new a$5(n4, r$5.InvalidParameter, e4);
  }
  n3.disjoint = function(n4, e4) {
    return j3(n4, e4, (t6, r3, i4) => (i4 = ke(i4), L2(n4, e4, i4), null === i4[0] || null === i4[1] || q$5.disjoint(i4[0], i4[1])));
  }, n3.intersects = function(n4, e4) {
    return j3(n4, e4, (t6, r3, i4) => (i4 = ke(i4), L2(n4, e4, i4), null !== i4[0] && null !== i4[1] && q$5.intersects(i4[0], i4[1])));
  }, n3.touches = function(n4, e4) {
    return j3(n4, e4, (t6, r3, i4) => (i4 = ke(i4), L2(n4, e4, i4), null !== i4[0] && null !== i4[1] && q$5.touches(i4[0], i4[1])));
  }, n3.crosses = function(n4, e4) {
    return j3(n4, e4, (t6, r3, i4) => (i4 = ke(i4), L2(n4, e4, i4), null !== i4[0] && null !== i4[1] && q$5.crosses(i4[0], i4[1])));
  }, n3.within = function(n4, e4) {
    return j3(n4, e4, (t6, r3, i4) => (i4 = ke(i4), L2(n4, e4, i4), null !== i4[0] && null !== i4[1] && q$5.within(i4[0], i4[1])));
  }, n3.contains = function(n4, e4) {
    return j3(n4, e4, (t6, r3, i4) => (i4 = ke(i4), L2(n4, e4, i4), null !== i4[0] && null !== i4[1] && q$5.contains(i4[0], i4[1])));
  }, n3.overlaps = function(n4, e4) {
    return j3(n4, e4, (t6, r3, i4) => (i4 = ke(i4), L2(n4, e4, i4), null !== i4[0] && null !== i4[1] && q$5.overlaps(i4[0], i4[1])));
  }, n3.equals = function(n4, e4) {
    return j3(n4, e4, (t6, r3, i4) => (ne$4(i4, 2, 2, n4, e4), i4[0] === i4[1] || (i4[0] instanceof p$9 && i4[1] instanceof p$9 ? q$5.equals(i4[0], i4[1]) : (Q$5(i4[0]) && Q$5(i4[1]) || K$4(i4[0]) && K$4(i4[1]) || !(!X$6(i4[0]) || !X$6(i4[1]))) && i4[0].equals(i4[1]))));
  }, n3.relate = function(n4, e4) {
    return j3(n4, e4, (i4, a3, l2) => {
      if (l2 = ke(l2), ne$4(l2, 3, 3, n4, e4), l2[0] instanceof p$9 && l2[1] instanceof p$9)
        return q$5.relate(l2[0], l2[1], ce$3(l2[2]));
      if (l2[0] instanceof p$9 && null === l2[1])
        return false;
      if (l2[1] instanceof p$9 && null === l2[0])
        return false;
      if (null === l2[0] && null === l2[1])
        return false;
      throw new a$5(n4, r$5.InvalidParameter, e4);
    });
  }, n3.intersection = function(n4, e4) {
    return j3(n4, e4, (t6, r3, i4) => (i4 = ke(i4), L2(n4, e4, i4), null === i4[0] || null === i4[1] ? null : q$5.intersect(i4[0], i4[1])));
  }, n3.union = function(n4, e4) {
    return j3(n4, e4, (a3, l2, f2) => {
      const s6 = [];
      if (0 === (f2 = ke(f2)).length)
        throw new a$5(n4, r$5.WrongNumberOfParameters, e4);
      if (1 === f2.length)
        if (q$7(f2[0])) {
          const i4 = ke(f2[0]);
          for (let a4 = 0; a4 < i4.length; a4++)
            if (null !== i4[a4]) {
              if (!(i4[a4] instanceof p$9))
                throw new a$5(n4, r$5.InvalidParameter, e4);
              s6.push(i4[a4]);
            }
        } else {
          if (!$$4(f2[0])) {
            if (f2[0] instanceof p$9)
              return Ne$1(c$6(f2[0]), n4.spatialReference);
            if (null === f2[0])
              return null;
            throw new a$5(n4, r$5.InvalidParameter, e4);
          }
          {
            const i4 = ke(f2[0].toArray());
            for (let a4 = 0; a4 < i4.length; a4++)
              if (null !== i4[a4]) {
                if (!(i4[a4] instanceof p$9))
                  throw new a$5(n4, r$5.InvalidParameter, e4);
                s6.push(i4[a4]);
              }
          }
        }
      else
        for (let i4 = 0; i4 < f2.length; i4++)
          if (null !== f2[i4]) {
            if (!(f2[i4] instanceof p$9))
              throw new a$5(n4, r$5.InvalidParameter, e4);
            s6.push(f2[i4]);
          }
      return 0 === s6.length ? null : q$5.union(s6);
    });
  }, n3.difference = function(n4, e4) {
    return j3(n4, e4, (t6, r3, a3) => (a3 = ke(a3), L2(n4, e4, a3), null !== a3[0] && null === a3[1] ? c$6(a3[0]) : null === a3[0] ? null : q$5.difference(a3[0], a3[1])));
  }, n3.symmetricdifference = function(n4, e4) {
    return j3(n4, e4, (t6, r3, a3) => (a3 = ke(a3), L2(n4, e4, a3), null === a3[0] && null === a3[1] ? null : null === a3[0] ? c$6(a3[1]) : null === a3[1] ? c$6(a3[0]) : q$5.symmetricDifference(a3[0], a3[1])));
  }, n3.clip = function(n4, e4) {
    return j3(n4, e4, (i4, a3, l2) => {
      if (l2 = ke(l2), ne$4(l2, 2, 2, n4, e4), !(l2[1] instanceof M$6) && null !== l2[1])
        throw new a$5(n4, r$5.InvalidParameter, e4);
      if (null === l2[0])
        return null;
      if (!(l2[0] instanceof p$9))
        throw new a$5(n4, r$5.InvalidParameter, e4);
      return null === l2[1] ? null : q$5.clip(l2[0], l2[1]);
    });
  }, n3.cut = function(n4, e4) {
    return j3(n4, e4, (a3, l2, s6) => {
      if (s6 = ke(s6), ne$4(s6, 2, 2, n4, e4), !(s6[1] instanceof m$8) && null !== s6[1])
        throw new a$5(n4, r$5.InvalidParameter, e4);
      if (null === s6[0])
        return [];
      if (!(s6[0] instanceof p$9))
        throw new a$5(n4, r$5.InvalidParameter, e4);
      return null === s6[1] ? [c$6(s6[0])] : q$5.cut(s6[0], s6[1]);
    });
  }, n3.area = function(n4, e4) {
    return j3(n4, e4, (i4, l2, s6) => {
      if (ne$4(s6, 1, 2, n4, e4), null === (s6 = ke(s6))[0])
        return 0;
      if (q$7(s6[0]) || $$4(s6[0])) {
        const e5 = je$1(s6[0], n4.spatialReference);
        return null === e5 ? 0 : q$5.planarArea(e5, r$8(L$4(s6[1], -1)));
      }
      if (!(s6[0] instanceof p$9))
        throw new a$5(n4, r$5.InvalidParameter, e4);
      return q$5.planarArea(s6[0], r$8(L$4(s6[1], -1)));
    });
  }, n3.areageodetic = function(n4, e4) {
    return j3(n4, e4, (i4, l2, s6) => {
      if (ne$4(s6, 1, 2, n4, e4), null === (s6 = ke(s6))[0])
        return 0;
      if (q$7(s6[0]) || $$4(s6[0])) {
        const e5 = je$1(s6[0], n4.spatialReference);
        return null === e5 ? 0 : q$5.geodesicArea(e5, r$8(L$4(s6[1], -1)));
      }
      if (!(s6[0] instanceof p$9))
        throw new a$5(n4, r$5.InvalidParameter, e4);
      return q$5.geodesicArea(s6[0], r$8(L$4(s6[1], -1)));
    });
  }, n3.length = function(n4, e4) {
    return j3(n4, e4, (i4, a3, s6) => {
      if (ne$4(s6, 1, 2, n4, e4), null === (s6 = ke(s6))[0])
        return 0;
      if (q$7(s6[0]) || $$4(s6[0])) {
        const e5 = Me$2(s6[0], n4.spatialReference);
        return null === e5 ? 0 : q$5.planarLength(e5, a$7(L$4(s6[1], -1)));
      }
      if (!(s6[0] instanceof p$9))
        throw new a$5(n4, r$5.InvalidParameter, e4);
      return q$5.planarLength(s6[0], a$7(L$4(s6[1], -1)));
    });
  }, n3.length3d = function(n4, e4) {
    return j3(n4, e4, (i4, a3, s6) => {
      if (ne$4(s6, 1, 2, n4, e4), null === (s6 = ke(s6))[0])
        return 0;
      if (q$7(s6[0]) || $$4(s6[0])) {
        const e5 = Me$2(s6[0], n4.spatialReference);
        return null === e5 ? 0 : true === e5.hasZ ? J$5(e5, a$7(L$4(s6[1], -1))) : q$5.planarLength(e5, a$7(L$4(s6[1], -1)));
      }
      if (!(s6[0] instanceof p$9))
        throw new a$5(n4, r$5.InvalidParameter, e4);
      return true === s6[0].hasZ ? J$5(s6[0], a$7(L$4(s6[1], -1))) : q$5.planarLength(s6[0], a$7(L$4(s6[1], -1)));
    });
  }, n3.lengthgeodetic = function(n4, e4) {
    return j3(n4, e4, (i4, a3, s6) => {
      if (ne$4(s6, 1, 2, n4, e4), null === (s6 = ke(s6))[0])
        return 0;
      if (q$7(s6[0]) || $$4(s6[0])) {
        const e5 = Me$2(s6[0], n4.spatialReference);
        return null === e5 ? 0 : q$5.geodesicLength(e5, a$7(L$4(s6[1], -1)));
      }
      if (!(s6[0] instanceof p$9))
        throw new a$5(n4, r$5.InvalidParameter, e4);
      return q$5.geodesicLength(s6[0], a$7(L$4(s6[1], -1)));
    });
  }, n3.distance = function(n4, e4) {
    return j3(n4, e4, (i4, a3, s6) => {
      s6 = ke(s6), ne$4(s6, 2, 3, n4, e4);
      let u3 = s6[0];
      (q$7(s6[0]) || $$4(s6[0])) && (u3 = Fe$2(s6[0], n4.spatialReference));
      let c2 = s6[1];
      if ((q$7(s6[1]) || $$4(s6[1])) && (c2 = Fe$2(s6[1], n4.spatialReference)), !(u3 instanceof p$9))
        throw new a$5(n4, r$5.InvalidParameter, e4);
      if (!(c2 instanceof p$9))
        throw new a$5(n4, r$5.InvalidParameter, e4);
      return q$5.distance(u3, c2, a$7(L$4(s6[2], -1)));
    });
  }, n3.distancegeodetic = function(n4, e4) {
    return j3(n4, e4, (i4, a3, s6) => {
      s6 = ke(s6), ne$4(s6, 2, 3, n4, e4);
      const u3 = s6[0], c2 = s6[1];
      if (!(u3 instanceof x$5))
        throw new a$5(n4, r$5.InvalidParameter, e4);
      if (!(c2 instanceof x$5))
        throw new a$5(n4, r$5.InvalidParameter, e4);
      const m2 = new m$8({ paths: [], spatialReference: u3.spatialReference });
      return m2.addPath([u3, c2]), q$5.geodesicLength(m2, a$7(L$4(s6[2], -1)));
    });
  }, n3.densify = function(n4, e4) {
    return j3(n4, e4, (i4, a3, s6) => {
      if (s6 = ke(s6), ne$4(s6, 2, 3, n4, e4), null === s6[0])
        return null;
      if (!(s6[0] instanceof p$9))
        throw new a$5(n4, r$5.InvalidParameter, e4);
      const u3 = pe$2(s6[1]);
      if (isNaN(u3))
        throw new a$5(n4, r$5.InvalidParameter, e4);
      if (u3 <= 0)
        throw new a$5(n4, r$5.InvalidParameter, e4);
      return s6[0] instanceof j$3 || s6[0] instanceof m$8 ? q$5.densify(s6[0], u3, a$7(L$4(s6[2], -1))) : s6[0] instanceof M$6 ? q$5.densify(z$4(s6[0]), u3, a$7(L$4(s6[2], -1))) : s6[0];
    });
  }, n3.densifygeodetic = function(n4, e4) {
    return j3(n4, e4, (i4, a3, s6) => {
      if (s6 = ke(s6), ne$4(s6, 2, 3, n4, e4), null === s6[0])
        return null;
      if (!(s6[0] instanceof p$9))
        throw new a$5(n4, r$5.InvalidParameter, e4);
      const u3 = pe$2(s6[1]);
      if (isNaN(u3))
        throw new a$5(n4, r$5.InvalidParameter, e4);
      if (u3 <= 0)
        throw new a$5(n4, r$5.InvalidParameter, e4);
      return s6[0] instanceof j$3 || s6[0] instanceof m$8 ? q$5.geodesicDensify(s6[0], u3, a$7(L$4(s6[2], -1))) : s6[0] instanceof M$6 ? q$5.geodesicDensify(z$4(s6[0]), u3, a$7(L$4(s6[2], -1))) : s6[0];
    });
  }, n3.generalize = function(n4, e4) {
    return j3(n4, e4, (i4, a3, s6) => {
      if (s6 = ke(s6), ne$4(s6, 2, 4, n4, e4), null === s6[0])
        return null;
      if (!(s6[0] instanceof p$9))
        throw new a$5(n4, r$5.InvalidParameter, e4);
      const u3 = pe$2(s6[1]);
      if (isNaN(u3))
        throw new a$5(n4, r$5.InvalidParameter, e4);
      return q$5.generalize(s6[0], u3, be$2(L$4(s6[2], true)), a$7(L$4(s6[3], -1)));
    });
  }, n3.buffer = function(n4, e4) {
    return j3(n4, e4, (a3, s6, u3) => {
      if (u3 = ke(u3), ne$4(u3, 2, 3, n4, e4), null === u3[0])
        return null;
      if (!(u3[0] instanceof p$9))
        throw new a$5(n4, r$5.InvalidParameter, e4);
      const c2 = pe$2(u3[1]);
      if (isNaN(c2))
        throw new a$5(n4, r$5.InvalidParameter, e4);
      return 0 === c2 ? c$6(u3[0]) : q$5.buffer(u3[0], c2, a$7(L$4(u3[2], -1)));
    });
  }, n3.buffergeodetic = function(n4, e4) {
    return j3(n4, e4, (a3, s6, u3) => {
      if (u3 = ke(u3), ne$4(u3, 2, 3, n4, e4), null === u3[0])
        return null;
      if (!(u3[0] instanceof p$9))
        throw new a$5(n4, r$5.InvalidParameter, e4);
      const c2 = pe$2(u3[1]);
      if (isNaN(c2))
        throw new a$5(n4, r$5.InvalidParameter, e4);
      return 0 === c2 ? c$6(u3[0]) : q$5.geodesicBuffer(u3[0], c2, a$7(L$4(u3[2], -1)));
    });
  }, n3.offset = function(n4, e4) {
    return j3(n4, e4, (i4, a3, s6) => {
      if (s6 = ke(s6), ne$4(s6, 2, 6, n4, e4), null === s6[0])
        return null;
      if (!(s6[0] instanceof j$3 || s6[0] instanceof m$8))
        throw new a$5(n4, r$5.InvalidParameter, e4);
      const u3 = pe$2(s6[1]);
      if (isNaN(u3))
        throw new a$5(n4, r$5.InvalidParameter, e4);
      const c2 = pe$2(L$4(s6[4], 10));
      if (isNaN(c2))
        throw new a$5(n4, r$5.InvalidParameter, e4);
      const h3 = pe$2(L$4(s6[5], 0));
      if (isNaN(h3))
        throw new a$5(n4, r$5.InvalidParameter, e4);
      return q$5.offset(s6[0], u3, a$7(L$4(s6[2], -1)), ce$3(L$4(s6[3], "round")).toLowerCase(), c2, h3);
    });
  }, n3.rotate = function(n4, e4) {
    return j3(n4, e4, (i4, a3, l2) => {
      l2 = ke(l2), ne$4(l2, 2, 3, n4, e4);
      let s6 = l2[0];
      if (null === s6)
        return null;
      if (!(s6 instanceof p$9))
        throw new a$5(n4, r$5.InvalidParameter, e4);
      s6 instanceof M$6 && (s6 = j$3.fromExtent(s6));
      const u3 = pe$2(l2[1]);
      if (isNaN(u3))
        throw new a$5(n4, r$5.InvalidParameter, e4);
      const c2 = L$4(l2[2], null);
      if (null === c2)
        return q$5.rotate(s6, u3);
      if (c2 instanceof x$5)
        return q$5.rotate(s6, u3, c2);
      throw new a$5(n4, r$5.InvalidParameter, e4);
    });
  }, n3.centroid = function(n4, e4) {
    return j3(n4, e4, (a3, l2, s6) => {
      if (s6 = ke(s6), ne$4(s6, 1, 1, n4, e4), null === s6[0])
        return null;
      let u3 = s6[0];
      if ((q$7(s6[0]) || $$4(s6[0])) && (u3 = Fe$2(s6[0], n4.spatialReference)), null === u3)
        return null;
      if (!(u3 instanceof p$9))
        throw new a$5(n4, r$5.InvalidParameter, e4);
      return u3 instanceof x$5 ? Ne$1(c$6(s6[0]), n4.spatialReference) : u3 instanceof j$3 ? u3.centroid : u3 instanceof m$8 ? u$4(u3) : u3 instanceof u$8 ? y$2(u3) : u3 instanceof M$6 ? u3.center : null;
    });
  }, n3.multiparttosinglepart = function(n4, e4) {
    return j3(n4, e4, (a3, l2, s6) => {
      s6 = ke(s6), ne$4(s6, 1, 1, n4, e4);
      const u3 = [];
      if (null === s6[0])
        return null;
      if (!(s6[0] instanceof p$9))
        throw new a$5(n4, r$5.InvalidParameter, e4);
      if (s6[0] instanceof x$5)
        return [Ne$1(c$6(s6[0]), n4.spatialReference)];
      if (s6[0] instanceof M$6)
        return [Ne$1(c$6(s6[0]), n4.spatialReference)];
      const c2 = q$5.simplify(s6[0]);
      if (c2 instanceof j$3) {
        const n5 = [], e5 = [];
        for (let t6 = 0; t6 < c2.rings.length; t6++)
          if (c2.isClockwise(c2.rings[t6])) {
            const e6 = p$b({ rings: [c2.rings[t6]], hasZ: true === c2.hasZ, hasM: true === c2.hasM, spatialReference: c2.spatialReference.toJSON() });
            n5.push(e6);
          } else
            e5.push({ ring: c2.rings[t6], pt: c2.getPoint(t6, 0) });
        for (let t6 = 0; t6 < e5.length; t6++)
          for (let r3 = 0; r3 < n5.length; r3++)
            if (n5[r3].contains(e5[t6].pt)) {
              n5[r3].addRing(e5[t6].ring);
              break;
            }
        return n5;
      }
      if (c2 instanceof m$8) {
        const n5 = [];
        for (let e5 = 0; e5 < c2.paths.length; e5++) {
          const t6 = p$b({ paths: [c2.paths[e5]], hasZ: true === c2.hasZ, hasM: true === c2.hasM, spatialReference: c2.spatialReference.toJSON() });
          n5.push(t6);
        }
        return n5;
      }
      if (s6[0] instanceof u$8) {
        const e5 = Ne$1(c$6(s6[0]), n4.spatialReference);
        for (let n5 = 0; n5 < e5.points.length; n5++)
          u3.push(e5.getPoint(n5));
        return u3;
      }
      return null;
    });
  }, n3.issimple = function(n4, e4) {
    return j3(n4, e4, (i4, a3, l2) => {
      if (l2 = ke(l2), ne$4(l2, 1, 1, n4, e4), null === l2[0])
        return true;
      if (!(l2[0] instanceof p$9))
        throw new a$5(n4, r$5.InvalidParameter, e4);
      return q$5.isSimple(l2[0]);
    });
  }, n3.simplify = function(n4, e4) {
    return j3(n4, e4, (i4, a3, l2) => {
      if (l2 = ke(l2), ne$4(l2, 1, 1, n4, e4), null === l2[0])
        return null;
      if (!(l2[0] instanceof p$9))
        throw new a$5(n4, r$5.InvalidParameter, e4);
      return q$5.simplify(l2[0]);
    });
  }, n3.convexhull = function(n4, e4) {
    return j3(n4, e4, (i4, a3, l2) => {
      if (l2 = ke(l2), ne$4(l2, 1, 1, n4, e4), null === l2[0])
        return null;
      if (!(l2[0] instanceof p$9))
        throw new a$5(n4, r$5.InvalidParameter, e4);
      return q$5.convexHull(l2[0]);
    });
  }, n3.nearestcoordinate = function(n4, i4) {
    return j3(n4, i4, (a3, l2, s6) => {
      if (s6 = ke(s6), ne$4(s6, 2, 2, n4, i4), !(s6[0] instanceof p$9 || null === s6[0]))
        throw new a$5(n4, r$5.InvalidParameter, i4);
      if (!(s6[1] instanceof x$5 || null === s6[1]))
        throw new a$5(n4, r$5.InvalidParameter, i4);
      if (null === s6[0] || null === s6[1])
        return null;
      const u3 = q$5.nearestCoordinate(s6[0], s6[1]);
      return null === u3 || u3.isEmpty ? null : N$3.convertObjectToArcadeDictionary({ coordinate: u3.coordinate, distance: u3.distance }, qe(n4), false, true);
    });
  }, n3.nearestvertex = function(n4, i4) {
    return j3(n4, i4, (a3, l2, s6) => {
      if (s6 = ke(s6), ne$4(s6, 2, 2, n4, i4), !(s6[0] instanceof p$9 || null === s6[0]))
        throw new a$5(n4, r$5.InvalidParameter, i4);
      if (!(s6[1] instanceof x$5 || null === s6[1]))
        throw new a$5(n4, r$5.InvalidParameter, i4);
      if (null === s6[0] || null === s6[1])
        return null;
      const u3 = q$5.nearestVertex(s6[0], s6[1]);
      return null === u3 || u3.isEmpty ? null : N$3.convertObjectToArcadeDictionary({ coordinate: u3.coordinate, distance: u3.distance }, qe(n4), false, true);
    });
  };
}
function h$1(n3, t6, r3) {
  return void 0 === r3 || 0 == +r3 ? Math[n3](t6) : (t6 = +t6, r3 = +r3, isNaN(t6) || "number" != typeof r3 || r3 % 1 != 0 ? NaN : (t6 = t6.toString().split("e"), +((t6 = (t6 = Math[n3](+(t6[0] + "e" + (t6[1] ? +t6[1] - r3 : -r3)))).toString().split("e"))[0] + "e" + (t6[1] ? +t6[1] + r3 : r3))));
}
function m$3(m2, M2) {
  function b2(n3, t6, r3) {
    const u3 = pe$2(n3);
    return isNaN(u3) ? u3 : isNaN(t6) || isNaN(r3) || t6 > r3 ? NaN : u3 < t6 ? t6 : u3 > r3 ? r3 : u3;
  }
  m2.number = function(s6, c2) {
    return M2(s6, c2, (l2, h3, m3) => {
      ne$4(m3, 1, 2, s6, c2);
      const M3 = m3[0];
      if (z$6(M3))
        return M3;
      if (null === M3)
        return 0;
      if (Q$5(M3) || K$4(M3) || X$6(M3))
        return M3.toNumber();
      if (G$4(M3))
        return Number(M3);
      if (q$7(M3))
        return NaN;
      if ("" === M3)
        return Number(M3);
      if (void 0 === M3)
        return Number(M3);
      if (P$6(M3)) {
        if (void 0 !== m3[1]) {
          let n3 = I$5(m3[1], "‰", "");
          return n3 = I$5(n3, "¤", ""), p$a(M3, { pattern: n3 });
        }
        return Number(M3.trim());
      }
      return Number(M3);
    });
  }, m2.abs = function(t6, r3) {
    return M2(t6, r3, (u3, e4, o3) => (ne$4(o3, 1, 1, t6, r3), Math.abs(pe$2(o3[0]))));
  }, m2.acos = function(t6, r3) {
    return M2(t6, r3, (u3, e4, o3) => (ne$4(o3, 1, 1, t6, r3), Math.acos(pe$2(o3[0]))));
  }, m2.asin = function(t6, r3) {
    return M2(t6, r3, (u3, e4, o3) => (ne$4(o3, 1, 1, t6, r3), Math.asin(pe$2(o3[0]))));
  }, m2.atan = function(t6, r3) {
    return M2(t6, r3, (u3, e4, o3) => (ne$4(o3, 1, 1, t6, r3), Math.atan(pe$2(o3[0]))));
  }, m2.atan2 = function(t6, r3) {
    return M2(t6, r3, (u3, e4, o3) => (ne$4(o3, 2, 2, t6, r3), Math.atan2(pe$2(o3[0]), pe$2(o3[1]))));
  }, m2.ceil = function(t6, r3) {
    return M2(t6, r3, (u3, e4, o3) => {
      if (ne$4(o3, 1, 2, t6, r3), 2 === o3.length) {
        let n3 = pe$2(o3[1]);
        return isNaN(n3) && (n3 = 0), h$1("ceil", pe$2(o3[0]), -1 * n3);
      }
      return Math.ceil(pe$2(o3[0]));
    });
  }, m2.round = function(t6, r3) {
    return M2(t6, r3, (u3, e4, o3) => {
      if (ne$4(o3, 1, 2, t6, r3), 2 === o3.length) {
        let n3 = pe$2(o3[1]);
        return isNaN(n3) && (n3 = 0), h$1("round", pe$2(o3[0]), -1 * n3);
      }
      return Math.round(pe$2(o3[0]));
    });
  }, m2.floor = function(t6, r3) {
    return M2(t6, r3, (u3, e4, o3) => {
      if (ne$4(o3, 1, 2, t6, r3), 2 === o3.length) {
        let n3 = pe$2(o3[1]);
        return isNaN(n3) && (n3 = 0), h$1("floor", pe$2(o3[0]), -1 * n3);
      }
      return Math.floor(pe$2(o3[0]));
    });
  }, m2.cos = function(t6, r3) {
    return M2(t6, r3, (u3, e4, o3) => (ne$4(o3, 1, 1, t6, r3), Math.cos(pe$2(o3[0]))));
  }, m2.isnan = function(t6, r3) {
    return M2(t6, r3, (u3, e4, o3) => (ne$4(o3, 1, 1, t6, r3), "number" == typeof o3[0] && isNaN(o3[0])));
  }, m2.exp = function(t6, r3) {
    return M2(t6, r3, (u3, e4, o3) => (ne$4(o3, 1, 1, t6, r3), Math.exp(pe$2(o3[0]))));
  }, m2.log = function(t6, r3) {
    return M2(t6, r3, (u3, e4, o3) => (ne$4(o3, 1, 1, t6, r3), Math.log(pe$2(o3[0]))));
  }, m2.pow = function(t6, r3) {
    return M2(t6, r3, (u3, e4, o3) => (ne$4(o3, 2, 2, t6, r3), pe$2(o3[0]) ** pe$2(o3[1])));
  }, m2.random = function(t6, r3) {
    return M2(t6, r3, (u3, e4, o3) => (ne$4(o3, 0, 0, t6, r3), Math.random()));
  }, m2.sin = function(t6, r3) {
    return M2(t6, r3, (u3, e4, o3) => (ne$4(o3, 1, 1, t6, r3), Math.sin(pe$2(o3[0]))));
  }, m2.sqrt = function(t6, r3) {
    return M2(t6, r3, (u3, e4, o3) => (ne$4(o3, 1, 1, t6, r3), Math.sqrt(pe$2(o3[0]))));
  }, m2.tan = function(t6, r3) {
    return M2(t6, r3, (u3, e4, o3) => (ne$4(o3, 1, 1, t6, r3), Math.tan(pe$2(o3[0]))));
  }, m2.defaultvalue = function(t6, r3) {
    return M2(t6, r3, (u3, e4, o3) => (ne$4(o3, 2, 2, t6, r3), null === o3[0] || "" === o3[0] || void 0 === o3[0] ? o3[1] : o3[0]));
  }, m2.isempty = function(t6, r3) {
    return M2(t6, r3, (u3, e4, o3) => (ne$4(o3, 1, 1, t6, r3), null === o3[0] || ("" === o3[0] || void 0 === o3[0])));
  }, m2.boolean = function(t6, r3) {
    return M2(t6, r3, (u3, e4, o3) => {
      ne$4(o3, 1, 1, t6, r3);
      const i4 = o3[0];
      return be$2(i4);
    });
  }, m2.constrain = function(t6, r3) {
    return M2(t6, r3, (u3, e4, o3) => {
      ne$4(o3, 3, 3, t6, r3);
      const a3 = pe$2(o3[1]), f2 = pe$2(o3[2]);
      if (q$7(o3[0])) {
        const n3 = [];
        for (const t7 of o3[0])
          n3.push(b2(t7, a3, f2));
        return n3;
      }
      if ($$4(o3[0])) {
        const n3 = [];
        for (let t7 = 0; t7 < o3[0].length(); t7++)
          n3.push(b2(o3[0].get(t7), a3, f2));
        return n3;
      }
      return b2(o3[0], a3, f2);
    });
  };
}
function s$3(e4) {
  let t6 = 0;
  for (let n3 = 0; n3 < e4.length; n3++)
    t6 += e4[n3];
  return t6 / e4.length;
}
function c$1(e4) {
  const t6 = s$3(e4);
  let n3 = 0;
  for (let r3 = 0; r3 < e4.length; r3++)
    n3 += (t6 - e4[r3]) ** 2;
  return n3 / e4.length;
}
function u$3(e4) {
  let t6 = 0;
  for (let n3 = 0; n3 < e4.length; n3++)
    t6 += e4[n3];
  return t6;
}
function i$2(e4, s6) {
  const c2 = [], u3 = {}, i4 = [];
  for (let o3 = 0; o3 < e4.length; o3++) {
    if (void 0 !== e4[o3] && null !== e4[o3] && e4[o3] !== w$3) {
      const t6 = e4[o3];
      if (z$6(t6) || P$6(t6))
        void 0 === u3[t6] && (c2.push(t6), u3[t6] = 1);
      else {
        let e5 = false;
        for (let n3 = 0; n3 < i4.length; n3++)
          true === fe$2(i4[n3], t6) && (e5 = true);
        false === e5 && (i4.push(t6), c2.push(t6));
      }
    }
    if (c2.length >= s6 && -1 !== s6)
      return c2;
  }
  return c2;
}
function l$4(t6, n3, r3 = 1e3) {
  switch (t6.toLowerCase()) {
    case "distinct":
      return i$2(n3, r3);
    case "avg":
    case "mean":
      return s$3(me$3(n3));
    case "min":
      return Math.min.apply(Math, me$3(n3));
    case "sum":
      return u$3(me$3(n3));
    case "max":
      return Math.max.apply(Math, me$3(n3));
    case "stdev":
    case "stddev":
      return Math.sqrt(c$1(me$3(n3)));
    case "var":
    case "variance":
      return c$1(me$3(n3));
    case "count":
      return n3.length;
  }
  return 0;
}
function a$1(n3, r3, t6, i4) {
  if (1 === i4.length) {
    if (q$7(i4[0]))
      return l$4(n3, i4[0], -1);
    if ($$4(i4[0]))
      return l$4(n3, i4[0].toArray(), -1);
  }
  return l$4(n3, i4, -1);
}
function f$2(o3, f2) {
  o3.stdev = function(n3, r3) {
    return f2(n3, r3, (n4, r4, t6) => a$1("stdev", n4, r4, t6));
  }, o3.variance = function(n3, r3) {
    return f2(n3, r3, (n4, r4, t6) => a$1("variance", n4, r4, t6));
  }, o3.average = function(n3, r3) {
    return f2(n3, r3, (n4, r4, t6) => a$1("mean", n4, r4, t6));
  }, o3.mean = function(n3, r3) {
    return f2(n3, r3, (n4, r4, t6) => a$1("mean", n4, r4, t6));
  }, o3.sum = function(n3, r3) {
    return f2(n3, r3, (n4, r4, t6) => a$1("sum", n4, r4, t6));
  }, o3.min = function(n3, r3) {
    return f2(n3, r3, (n4, r4, t6) => a$1("min", n4, r4, t6));
  }, o3.max = function(n3, r3) {
    return f2(n3, r3, (n4, r4, t6) => a$1("max", n4, r4, t6));
  }, o3.distinct = function(n3, r3) {
    return f2(n3, r3, (n4, r4, t6) => a$1("distinct", n4, r4, t6));
  }, o3.count = function(o4, a3) {
    return f2(o4, a3, (f3, c2, m2) => {
      if (ne$4(m2, 1, 1, o4, a3), q$7(m2[0]) || P$6(m2[0]))
        return m2[0].length;
      if ($$4(m2[0]))
        return m2[0].length();
      throw new a$5(o4, r$5.InvalidParameter, a3);
    });
  };
}
let t$3 = class t3 extends N$3 {
  constructor(s6) {
    super(), this.declaredClass = "esri.arcade.Portal", this.immutable = false, this.setField("url", s6), this.immutable = true;
  }
};
let t$2 = class t4 extends N$3 {
  constructor(e4, t6, i4, s6, l2, d2, h3) {
    super(), this.attachmentUrl = l2, this.declaredClass = "esri.arcade.Attachment", this.immutable = false, this.setField("id", e4), this.setField("name", t6), this.setField("contenttype", i4), this.setField("size", s6), this.setField("exifinfo", d2), this.setField("keywords", h3), this.immutable = true;
  }
  deepClone() {
    return new t4(this.field("id"), this.field("name"), this.field("contenttype"), this.field("size"), this.attachmentUrl, this.field("exifinfo")?.deepClone() ?? null, this.field("keywords"));
  }
};
const l$3 = (e4) => (n3, t6, r3) => (r3 = r3 || 14, +e4(n3, t6).toFixed(r3)), d$2 = (e4, n3) => e4 + n3, m$2 = (e4, n3) => e4 * n3, g$2 = (e4, n3) => e4 / n3, _$3 = (e4, n3, t6) => l$3(d$2)(e4, n3, t6), w$2 = (e4, n3, t6) => l$3(m$2)(e4, n3, t6), A$2 = (e4, n3, t6) => l$3(g$2)(e4, n3, t6), D$3 = 360, p$1 = 400, E$1 = 2 * Math.PI, T$4 = 3600, S$1 = 3240, R$1 = 60, M$2 = 60, F$1 = 180 * T$4 / Math.PI, v$1 = D$3 * R$1 * M$2, L$2 = 90 * T$4, U$2 = 180 * T$4, N$2 = 270 * T$4, x$2 = String.fromCharCode(7501), z$3 = "°";
function O$2(e4) {
  if (false === P$6(e4))
    throw new a$5(null, r$5.InvalidParameter, null);
  return e4;
}
function G$3(e4, n3) {
  const t6 = 10 ** n3;
  return Math.round(e4 * t6) / t6;
}
function I$3(e4, n3) {
  return e4 % n3;
}
function b(e4) {
  const n3 = parseFloat(e4.toString().replace(Math.trunc(e4).toString(), "0")) * Math.sign(e4);
  if (e4 < 0) {
    return { fraction: n3, integer: Math.ceil(e4) };
  }
  return { fraction: n3, integer: Math.floor(e4) };
}
var H$4, y$1, q$4, k$2;
function C$1(e4, n3) {
  switch (e4) {
    case H$4.north:
      return "SHORT" === n3 ? "N" : "North";
    case H$4.east:
      return "SHORT" === n3 ? "E" : "East";
    case H$4.south:
      return "SHORT" === n3 ? "S" : "South";
    case H$4.west:
      return "SHORT" === n3 ? "W" : "West";
  }
}
function P$3(e4, n3) {
  return e4 - Math.floor(e4 / n3) * n3;
}
function Q$4(e4) {
  switch (e4) {
    case y$1.truncated_degrees:
    case y$1.decimal_degrees:
      return D$3;
    case y$1.radians:
      return E$1;
    case y$1.gradians:
      return p$1;
    case y$1.seconds:
      return v$1;
    case y$1.fractional_degree_minutes:
      return R$1;
    case y$1.fractional_minute_seconds:
      return M$2;
    default:
      throw new a$5(null, r$5.LogicError, null, { reason: "unsupported evaluations" });
  }
}
function j$1(e4) {
  switch (e4.toUpperCase().trim()) {
    case "NORTH":
    case "NORTHAZIMUTH":
    case "NORTH AZIMUTH":
      return q$4.north_azimuth;
    case "POLAR":
      return q$4.polar;
    case "QUADRANT":
      return q$4.quadrant;
    case "SOUTH":
    case "SOUTHAZIMUTH":
    case "SOUTH AZIMUTH":
      return q$4.south_azimuth;
  }
  throw new a$5(null, r$5.LogicError, null, { reason: "unsupported directionType" });
}
function W$4(e4) {
  switch (e4.toUpperCase().trim()) {
    case "D":
    case "DD":
    case "DECIMALDEGREE":
    case "DECIMAL DEGREE":
    case "DEGREE":
    case "DECIMALDEGREES":
    case "DECIMAL DEGREES":
    case "DEGREES":
      return y$1.decimal_degrees;
    case "DMS":
    case "DEGREESMINUTESSECONDS":
    case "DEGREES MINUTES SECONDS":
      return y$1.degrees_minutes_seconds;
    case "R":
    case "RAD":
    case "RADS":
    case "RADIAN":
    case "RADIANS":
      return y$1.radians;
    case "G":
    case "GON":
    case "GONS":
    case "GRAD":
    case "GRADS":
    case "GRADIAN":
    case "GRADIANS":
      return y$1.gradians;
  }
  throw new a$5(null, r$5.LogicError, null, { reason: "unsupported units" });
}
!function(e4) {
  e4[e4.north = 0] = "north", e4[e4.east = 1] = "east", e4[e4.south = 2] = "south", e4[e4.west = 3] = "west";
}(H$4 || (H$4 = {})), function(e4) {
  e4[e4.decimal_degrees = 1] = "decimal_degrees", e4[e4.seconds = 2] = "seconds", e4[e4.degrees_minutes_seconds = 3] = "degrees_minutes_seconds", e4[e4.radians = 4] = "radians", e4[e4.gradians = 5] = "gradians", e4[e4.truncated_degrees = 6] = "truncated_degrees", e4[e4.fractional_degree_minutes = 7] = "fractional_degree_minutes", e4[e4.fractional_minute_seconds = 8] = "fractional_minute_seconds";
}(y$1 || (y$1 = {})), function(e4) {
  e4[e4.north_azimuth = 1] = "north_azimuth", e4[e4.polar = 2] = "polar", e4[e4.quadrant = 3] = "quadrant", e4[e4.south_azimuth = 4] = "south_azimuth";
}(q$4 || (q$4 = {})), function(e4) {
  e4[e4.meridian = 0] = "meridian", e4[e4.direction = 1] = "direction";
}(k$2 || (k$2 = {}));
let Z$2 = class Z {
  constructor(e4, n3, t6) {
    this.m_degrees = e4, this.m_minutes = n3, this.m_seconds = t6;
  }
  getField(e4) {
    switch (e4) {
      case y$1.decimal_degrees:
      case y$1.truncated_degrees:
        return this.m_degrees;
      case y$1.fractional_degree_minutes:
        return this.m_minutes;
      case y$1.seconds:
      case y$1.fractional_minute_seconds:
        return this.m_seconds;
      default:
        throw new a$5(null, r$5.LogicError, null, { reason: "unexpected evaluation" });
    }
  }
  static secondsToDMS(e4) {
    const n3 = b(e4).fraction;
    let t6 = b(e4).integer;
    const r3 = Math.floor(t6 / T$4);
    t6 -= r3 * T$4;
    const s6 = Math.floor(t6 / M$2);
    return t6 -= s6 * M$2, new Z(r3, s6, t6 + n3);
  }
  static numberToDms(e4) {
    const n3 = b(e4).fraction, t6 = b(e4).integer, r3 = w$2(b(100 * n3).fraction, 100), s6 = b(100 * n3).integer;
    return new Z(t6, s6, r3);
  }
  format(e4, n3) {
    let t6 = G$3(this.m_seconds, n3), r3 = this.m_minutes, s6 = this.m_degrees;
    if (e4 === y$1.seconds || e4 === y$1.fractional_minute_seconds)
      M$2 <= t6 && (t6 -= M$2, ++r3), R$1 <= r3 && (r3 = 0, ++s6), D$3 <= s6 && (s6 = 0);
    else if (e4 === y$1.fractional_degree_minutes)
      t6 = 0, r3 = 30 <= this.m_seconds ? this.m_minutes + 1 : this.m_minutes, s6 = this.m_degrees, R$1 <= r3 && (r3 = 0, ++s6), D$3 <= s6 && (s6 = 0);
    else if (e4 === y$1.decimal_degrees || e4 === y$1.truncated_degrees) {
      const e5 = A$2(this.m_seconds, T$4), n4 = A$2(this.m_minutes, R$1);
      s6 = Math.round(this.m_degrees + n4 + e5), r3 = 0, t6 = 0;
    }
    return new Z(s6, r3, t6);
  }
  static dmsToSeconds(e4, n3, t6) {
    return e4 * T$4 + n3 * M$2 + t6;
  }
};
let B$3 = class B {
  constructor(e4, n3, t6) {
    this.meridian = e4, this.angle = n3, this.direction = t6;
  }
  fetchAzimuth(e4) {
    return e4 === k$2.meridian ? this.meridian : this.direction;
  }
};
let V$5 = class V {
  constructor(e4) {
    this._angle = e4;
  }
  static createFromAngleAndDirection(e4, n3) {
    return new V(new J$4(V._convertDirectionFormat(e4.extractAngularUnits(y$1.seconds), n3, q$4.north_azimuth)));
  }
  getAngle(e4) {
    const n3 = this._angle.extractAngularUnits(y$1.seconds);
    switch (e4) {
      case q$4.north_azimuth:
      case q$4.south_azimuth:
      case q$4.polar:
        return new J$4(V._convertDirectionFormat(n3, q$4.north_azimuth, e4));
      case q$4.quadrant: {
        const e5 = V.secondsNorthAzimuthToQuadrant(n3);
        return new J$4(e5.angle);
      }
    }
  }
  getMeridian(e4) {
    const n3 = this._angle.extractAngularUnits(y$1.seconds);
    switch (e4) {
      case q$4.north_azimuth:
        return H$4.north;
      case q$4.south_azimuth:
        return H$4.south;
      case q$4.polar:
        return H$4.east;
      case q$4.quadrant:
        return V.secondsNorthAzimuthToQuadrant(n3).meridian;
    }
  }
  getDirection(e4) {
    const n3 = this._angle.extractAngularUnits(y$1.seconds);
    switch (e4) {
      case q$4.north_azimuth:
        return H$4.east;
      case q$4.south_azimuth:
        return H$4.west;
      case q$4.polar:
        return H$4.north;
      case q$4.quadrant:
        return V.secondsNorthAzimuthToQuadrant(n3).direction;
    }
  }
  static secondsNorthAzimuthToQuadrant(e4) {
    const n3 = e4 <= L$2 || e4 >= N$2 ? H$4.north : H$4.south, t6 = n3 === H$4.north ? Math.min(v$1 - e4, e4) : Math.abs(e4 - U$2), r3 = e4 > U$2 ? H$4.west : H$4.east;
    return new B$3(n3, t6, r3);
  }
  static createFromAngleMeridianAndDirection(e4, n3, t6) {
    return new V(new J$4(V.secondsQuadrantToNorthAzimuth(e4.extractAngularUnits(y$1.seconds), n3, t6)));
  }
  static secondsQuadrantToNorthAzimuth(e4, n3, t6) {
    return n3 === H$4.north ? t6 === H$4.east ? e4 : v$1 - e4 : t6 === H$4.east ? U$2 - e4 : U$2 + e4;
  }
  static _convertDirectionFormat(e4, r3, s6) {
    let a3 = 0;
    switch (r3) {
      case q$4.north_azimuth:
        a3 = e4;
        break;
      case q$4.polar:
        a3 = L$2 - e4;
        break;
      case q$4.quadrant:
        throw new a$5(null, r$5.LogicError, null, { reason: "unexpected evaluation" });
      case q$4.south_azimuth:
        a3 = e4 + U$2;
    }
    let i4 = 0;
    switch (s6) {
      case q$4.north_azimuth:
        i4 = a3;
        break;
      case q$4.polar:
        i4 = L$2 - a3;
        break;
      case q$4.quadrant:
        throw new a$5(null, r$5.LogicError, null, { reason: "unexpected evaluation" });
      case q$4.south_azimuth:
        i4 = a3 - U$2;
    }
    return i4 = I$3(i4, v$1), i4 < 0 ? v$1 + i4 : i4;
  }
};
function X$5(e4, r3, s6) {
  let a3 = null;
  switch (r3) {
    case y$1.decimal_degrees:
      a3 = w$2(e4, T$4);
      break;
    case y$1.seconds:
      a3 = e4;
      break;
    case y$1.gradians:
      a3 = w$2(e4, S$1);
      break;
    case y$1.radians:
      a3 = w$2(e4, F$1);
      break;
    default:
      throw new a$5(null, r$5.LogicError, null, { reason: "unexpected evaluation" });
  }
  switch (s6) {
    case y$1.decimal_degrees:
      return A$2(a3, T$4);
    case y$1.seconds:
      return a3;
    case y$1.gradians:
      return A$2(a3, S$1);
    case y$1.radians:
      return a3 / F$1;
    default:
      throw new a$5(null, r$5.LogicError, null, { reason: "unexpected evaluation" });
  }
}
let J$4 = class J {
  constructor(e4) {
    this._seconds = e4;
  }
  static createFromAngleAndUnits(e4, n3) {
    return new J(X$5(e4, n3, y$1.seconds));
  }
  extractAngularUnits(e4) {
    return X$5(this._seconds, y$1.seconds, K$3(e4));
  }
  static createFromDegreesMinutesSeconds(e4, n3, t6) {
    return new J(_$3(_$3(w$2(e4, T$4), w$2(n3, M$2)), t6));
  }
};
function K$3(e4) {
  switch (n$7(e4), e4) {
    case y$1.decimal_degrees:
    case y$1.truncated_degrees:
    case y$1.degrees_minutes_seconds:
      return y$1.decimal_degrees;
    case y$1.gradians:
      return y$1.gradians;
    case y$1.fractional_degree_minutes:
      return y$1.fractional_degree_minutes;
    case y$1.radians:
      return y$1.radians;
    case y$1.seconds:
    case y$1.fractional_minute_seconds:
      return y$1.seconds;
  }
}
let Y$5 = class Y {
  constructor(e4, n3, t6, r3) {
    this.view = e4, this.angle = n3, this.merdian = t6, this.direction = r3, this._dms = null, this._formattedDms = null;
  }
  static createFromStringAndBearing(e4, n3, t6) {
    return new Y(e4, n3.getAngle(t6), n3.getMeridian(t6), n3.getDirection(t6));
  }
  fetchAngle() {
    return this.angle;
  }
  fetchMeridian() {
    return this.merdian;
  }
  fetchDirection() {
    return this.direction;
  }
  fetchView() {
    return this.view;
  }
  fetchDms() {
    return null === this._dms && this._calculateDms(), this._dms;
  }
  fetchFormattedDms() {
    return null === this._formattedDms && this._calculateDms(), this._formattedDms;
  }
  _calculateDms() {
    let e4 = null, n3 = y$1.truncated_degrees, t6 = 0;
    for (let r3 = 0; r3 < this.view.length; r3++) {
      const s6 = this.view[r3];
      switch (s6) {
        case "m":
          e4 = le$2(this.view, r3, s6), n3 = n3 === y$1.truncated_degrees ? y$1.fractional_degree_minutes : n3, r3 = e4.newpos;
          continue;
        case "s":
          e4 = le$2(this.view, r3, s6), n3 = y$1.fractional_minute_seconds, t6 = t6 < e4.rounding ? e4.rounding : t6, r3 = e4.newpos;
          continue;
        default:
          continue;
      }
    }
    this._dms = Z$2.secondsToDMS(this.angle.extractAngularUnits(y$1.seconds)), this._formattedDms = Z$2.secondsToDMS(this.angle.extractAngularUnits(y$1.seconds)).format(n3, t6);
  }
};
function $$3(e4, r3, s6, a3, i4) {
  let o3 = null;
  switch (r3) {
    case y$1.decimal_degrees:
    case y$1.radians:
    case y$1.gradians:
      return o3 = P$3(G$3(e4.extractAngularUnits(r3), a3), Q$4(r3)), o3.toFixed(a3).padStart(s6 + a3 + (a3 > 0 ? 1 : 0), "0");
    case y$1.truncated_degrees:
    case y$1.fractional_degree_minutes:
      return o3 = P$3(i4.fetchFormattedDms().getField(r3), Q$4(r3)), o3.toFixed(a3).padStart(s6 + a3 + (a3 > 0 ? 1 : 0), "0");
    case y$1.fractional_minute_seconds:
      return o3 = P$3(G$3(i4.fetchDms().getField(r3), a3), Q$4(r3)), o3.toFixed(a3).padStart(s6 + a3 + (a3 > 0 ? 1 : 0), "0");
    default:
      throw new a$5(null, r$5.LogicError, null, { reason: "unexpected evaluation" });
  }
}
function ee$4(e4, r3, s6) {
  if (s6 === q$4.quadrant)
    throw new a$5(null, r$5.LogicError, null, { reason: "conversion error" });
  if (r3 === y$1.degrees_minutes_seconds) {
    const n3 = Z$2.numberToDms(e4);
    return V$5.createFromAngleAndDirection(J$4.createFromDegreesMinutesSeconds(n3.m_degrees, n3.m_minutes, n3.m_seconds), s6);
  }
  return V$5.createFromAngleAndDirection(J$4.createFromAngleAndUnits(e4, K$3(r3)), s6);
}
function ne$3(e4) {
  switch (pe$2(e4)) {
    case 1:
      return { first: H$4.north, second: H$4.east };
    case 2:
      return { first: H$4.south, second: H$4.east };
    case 3:
      return { first: H$4.south, second: H$4.west };
    case 4:
      return { first: H$4.north, second: H$4.west };
  }
  return null;
}
function te$4(e4) {
  switch (e4.toUpperCase().trim()) {
    case "N":
    case "NORTH":
      return H$4.north;
    case "E":
    case "EAST":
      return H$4.east;
    case "S":
    case "SOUTH":
      return H$4.south;
    case "W":
    case "WEST":
      return H$4.west;
  }
  return null;
}
function re$4(e4) {
  const r3 = parseFloat(e4);
  if (z$6(r3)) {
    if (isNaN(r3))
      throw new a$5(null, r$5.LogicError, null, { reason: "invalid conversion" });
    return r3;
  }
  throw new a$5(null, r$5.LogicError, null, { reason: "invalid conversion" });
}
function se$3(e4, s6, a3) {
  const i4 = a3 === q$4.quadrant;
  let o3 = null, c2 = null, u3 = 0, l2 = 0, d2 = 0;
  if (i4) {
    if (e4.length < 2)
      throw new a$5(null, r$5.LogicError, null, { reason: "conversion error" });
    d2 = 1;
    const s7 = ne$3(ce$3(e4[e4.length - 1]));
    if (s7 ? (o3 = s7.first, c2 = s7.second) : (u3 = 1, o3 = te$4(ce$3(e4[0])), c2 = te$4(ce$3(e4[e4.length - 1]))), null === o3 || null === c2)
      throw new a$5(null, r$5.LogicError, null, { reason: "invalid conversion" });
  }
  switch (s6) {
    case y$1.decimal_degrees:
    case y$1.radians:
    case y$1.gradians:
      if (0 === e4.length)
        throw new a$5(null, r$5.LogicError, null, { reason: "invalid conversion" });
      return i4 ? V$5.createFromAngleMeridianAndDirection(J$4.createFromAngleAndUnits(re$4(e4[u3]), K$3(s6)), o3, c2) : V$5.createFromAngleAndDirection(J$4.createFromAngleAndUnits(re$4(e4[u3]), K$3(s6)), a3);
    case y$1.degrees_minutes_seconds:
      if (l2 = e4.length - d2 - u3, 3 === l2) {
        const n3 = J$4.createFromDegreesMinutesSeconds(re$4(e4[u3]), re$4(e4[u3 + 1]), re$4(e4[u3 + 2]));
        return i4 ? V$5.createFromAngleMeridianAndDirection(n3, o3, c2) : V$5.createFromAngleAndDirection(n3, a3);
      }
      if (1 === l2) {
        const n3 = re$4(e4[u3]), t6 = Z$2.numberToDms(n3), r3 = J$4.createFromDegreesMinutesSeconds(t6.m_degrees, t6.m_minutes, t6.m_seconds);
        return i4 ? V$5.createFromAngleMeridianAndDirection(r3, o3, c2) : V$5.createFromAngleAndDirection(r3, a3);
      }
  }
  throw new a$5(null, r$5.LogicError, null, { reason: "invalid conversion" });
}
function ae$3(e4) {
  const n3 = /* @__PURE__ */ new Set([" ", "-", "/", "'", '"', "\\", "^", z$3, x$2, "	", "\r", "\n", "*"]);
  let t6 = "";
  for (let r3 = 0; r3 < e4.length; r3++) {
    const s6 = e4.charAt(r3);
    n3.has(s6) ? t6 += "RRSPLITRRSPLITRR" : t6 += s6;
  }
  return t6.split("RRSPLITRRSPLITRR").filter((e5) => "" !== e5);
}
function ie$3(e4, r3, u3) {
  if (z$6(e4))
    return ee$4(pe$2(e4), r3, u3);
  if (P$6(e4))
    return se$3(ae$3(e4), r3, u3);
  if (q$7(e4))
    return se$3(e4, r3, u3);
  if ($$4(e4))
    return se$3(e4.toArray(), r3, u3);
  throw new a$5(null, r$5.LogicError, null, { reason: "conversion error" });
}
function oe$3(e4, r3, s6) {
  const a3 = K$3(s6);
  if (a3 && s6 !== y$1.degrees_minutes_seconds) {
    return e4.getAngle(r3).extractAngularUnits(a3);
  }
  throw new a$5(null, r$5.LogicError, null, { reason: "conversion error" });
}
function ce$2(e4, n3, t6) {
  const r3 = e4.getAngle(n3);
  if (n3 === q$4.quadrant && t6 === y$1.degrees_minutes_seconds) {
    const t7 = Z$2.secondsToDMS(r3.extractAngularUnits(y$1.seconds));
    return [C$1(e4.getMeridian(n3), "SHORT"), t7.m_degrees, t7.m_minutes, t7.m_seconds, C$1(e4.getDirection(n3), "SHORT")];
  }
  if (t6 === y$1.degrees_minutes_seconds) {
    const e5 = Z$2.secondsToDMS(r3.extractAngularUnits(y$1.seconds));
    return [e5.m_degrees, e5.m_minutes, e5.m_seconds];
  }
  return n3 === q$4.quadrant ? [C$1(e4.getMeridian(n3), "SHORT"), r3.extractAngularUnits(t6), C$1(e4.getDirection(n3), "SHORT")] : [r3.extractAngularUnits(t6)];
}
function ue$3(e4, r3) {
  let s6 = "";
  switch (e4) {
    case y$1.decimal_degrees:
      s6 = r3 === q$4.quadrant ? "DD.DD" + z$3 : "DDD.DD" + z$3;
      break;
    case y$1.degrees_minutes_seconds:
      s6 = r3 === q$4.quadrant ? "dd" + z$3 + ` mm' ss"` : "ddd" + z$3 + ` mm' ss.ss"`;
      break;
    case y$1.radians:
      s6 = "R.RR";
      break;
    case y$1.gradians:
      s6 = "GGG.GG" + x$2;
      break;
    default:
      throw new a$5(null, r$5.LogicError, null, { reason: "conversion error" });
  }
  return r3 === q$4.quadrant && (s6 = "p " + s6 + " b"), s6;
}
function le$2(e4, n3, t6) {
  const r3 = { padding: 0, rounding: 0, newpos: n3 };
  let s6 = false;
  for (; n3 < e4.length; ) {
    const a3 = e4[n3];
    if (a3 === t6)
      s6 ? r3.rounding++ : r3.padding++, n3++;
    else {
      if ("." !== a3)
        break;
      s6 = true, n3++;
    }
  }
  return r3.newpos = n3 - 1, r3;
}
function de$2(e4, n3, t6) {
  const r3 = { escaped: "", newpos: n3 };
  for (n3++; n3 < e4.length; ) {
    const t7 = e4[n3];
    if (n3++, "]" === t7)
      break;
    r3.escaped += t7;
  }
  return r3.newpos = n3 - 1, r3;
}
function he$2(e4, n3, t6) {
  let r3 = "", s6 = null, a3 = null;
  const i4 = Y$5.createFromStringAndBearing(n3, e4, t6), o3 = { D: y$1.decimal_degrees, d: y$1.truncated_degrees, m: y$1.fractional_degree_minutes, s: y$1.fractional_minute_seconds, R: y$1.radians, G: y$1.gradians };
  for (let c2 = 0; c2 < n3.length; c2++) {
    const u3 = n3[c2];
    switch (u3) {
      case "[":
        s6 = de$2(n3, c2), r3 += s6.escaped, c2 = s6.newpos;
        continue;
      case "D":
      case "d":
      case "m":
      case "s":
      case "R":
      case "G":
        s6 = le$2(n3, c2, u3), a3 = e4.getAngle(t6), r3 += $$3(a3, o3[u3], s6.padding, s6.rounding, i4), c2 = s6.newpos;
        continue;
      case "P":
      case "p":
        r3 += C$1(i4.fetchMeridian(), "p" === u3 ? "SHORT" : "LONG");
        continue;
      case "B":
      case "b":
        r3 += C$1(i4.fetchDirection(), "b" === u3 ? "SHORT" : "LONG");
        continue;
      default:
        r3 += u3;
    }
  }
  return r3;
}
function me$2(s6, a3, i4) {
  if (!(a3 instanceof N$3))
    throw new a$5(null, r$5.InvalidParameter, null);
  if (false === a3.hasField("directionType"))
    throw new a$5(null, r$5.LogicError, null, { reason: "missing directionType" });
  if (false === a3.hasField("angleType"))
    throw new a$5(null, r$5.LogicError, null, { reason: "missing angleType" });
  const o3 = j$1(O$2(a3.field("directiontype"))), c2 = ie$3(s6, W$4(O$2(a3.field("angletype"))), o3);
  if (!(i4 instanceof N$3))
    throw new a$5(null, r$5.InvalidParameter, null);
  if (false === i4.hasField("directionType"))
    throw new a$5(null, r$5.LogicError, null, { reason: "missing directionType" });
  if (false === i4.hasField("outputType"))
    throw new a$5(null, r$5.LogicError, null, { reason: "missing angleType" });
  const u3 = j$1(O$2(i4.field("directiontype"))), l2 = i4.hasField("angleType") ? W$4(O$2(i4.field("angletype"))) : null, d2 = O$2(i4.field("outputType")).toUpperCase().trim();
  if (!u3 || !d2)
    throw new a$5(null, r$5.LogicError, null, { reason: "conversion error" });
  if (!(l2 || "TEXT" === d2 && i4.hasField("format")))
    throw new a$5(null, r$5.LogicError, null, { reason: "invalid unit" });
  switch (d2) {
    case "VALUE":
      return u3 === q$4.quadrant || l2 === y$1.degrees_minutes_seconds ? ce$2(c2, u3, l2) : oe$3(c2, u3, l2);
    case "TEXT": {
      let e4 = "";
      return i4.hasField("format") && (e4 = ce$3(i4.field("format"))), null !== e4 && "" !== e4 || (e4 = ue$3(l2, u3)), he$2(c2, e4, u3);
    }
    default:
      throw new a$5(null, r$5.InvalidParameter, null);
  }
}
function B$2(t6) {
  if ("loaded" === t6.loadStatus && t6.user?.sourceJSON) {
    return t6.user.sourceJSON;
  }
  return null;
}
function q$3(t6, e4) {
  return !!t6 && N$5(t6, e4?.restUrl || "");
}
function X$4(t6, e4) {
  if (!t6 || !e4)
    return t6 === e4;
  if (t6.x === e4.x && t6.y === e4.y) {
    if (t6.hasZ) {
      if (t6.z !== e4.z)
        return false;
    } else if (e4.hasZ)
      return false;
    if (t6.hasM) {
      if (t6.m !== e4.m)
        return false;
    } else if (e4.hasM)
      return false;
    return true;
  }
  return false;
}
function Y$4(o3, i4, u3) {
  if (null !== o3)
    if (q$7(o3)) {
      if (i4.updateUint8Array([61]), u3.map.has(o3)) {
        const t6 = u3.map.get(o3);
        i4.updateIntArray([61237541 ^ t6]);
      } else {
        u3.map.set(o3, u3.currentLength++);
        for (const t6 of o3)
          Y$4(t6, i4, u3);
        u3.map.delete(o3), u3.currentLength--;
      }
      i4.updateUint8Array([199]);
    } else if ($$4(o3)) {
      if (i4.updateUint8Array([61]), u3.map.has(o3)) {
        const t6 = u3.map.get(o3);
        i4.updateIntArray([61237541 ^ t6]);
      } else {
        u3.map.set(o3, u3.currentLength++);
        for (const t6 of o3.toArray())
          Y$4(t6, i4, u3);
        u3.map.delete(o3), u3.currentLength--;
      }
      i4.updateUint8Array([199]);
    } else {
      if (Q$5(o3))
        return i4.updateIntArray([o3.toNumber()]), void i4.updateUint8Array([241]);
      if (X$6(o3))
        return i4.updateIntArray([o3.toNumber()]), void i4.updateIntArray([257]);
      if (K$4(o3))
        return i4.updateIntArray([o3.toNumber()]), void i4.updateIntArray([263]);
      if (P$6(o3))
        return i4.updateIntArray([o3.length]), i4.updateWithString(o3), void i4.updateUint8Array([41]);
      if (G$4(o3))
        i4.updateUint8Array([true === o3 ? 1 : 0, 113]);
      else {
        if (z$6(o3))
          return i4.updateFloatArray([o3]), void i4.updateUint8Array([173]);
        if (o3 instanceof t$2)
          throw new a$5(u3.context, r$5.UnsupportedHashType, u3.node);
        if (o3 instanceof t$3)
          throw new a$5(u3.context, r$5.UnsupportedHashType, u3.node);
        if (!(o3 instanceof N$3)) {
          if (U$3(o3))
            throw new a$5(u3.context, r$5.UnsupportedHashType, u3.node);
          if (o3 instanceof x$5)
            return i4.updateIntArray([3833836621]), i4.updateIntArray([0]), i4.updateFloatArray([o3.x]), i4.updateIntArray([1]), i4.updateFloatArray([o3.y]), o3.hasZ && (i4.updateIntArray([2]), i4.updateFloatArray([o3.z])), o3.hasM && (i4.updateIntArray([3]), i4.updateFloatArray([o3.m])), i4.updateIntArray([3765347959]), void Y$4(o3.spatialReference.wkid, i4, u3);
          if (o3 instanceof j$3) {
            i4.updateIntArray([1266616829]);
            for (let t6 = 0; t6 < o3.rings.length; t6++) {
              const e4 = o3.rings[t6], r3 = [];
              let n3 = null, a3 = null;
              for (let i5 = 0; i5 < e4.length; i5++) {
                const u4 = o3.getPoint(t6, i5);
                if (0 === i5)
                  n3 = u4;
                else if (X$4(a3, u4))
                  continue;
                a3 = u4, i5 === e4.length - 1 && X$4(n3, u4) || r3.push(u4);
              }
              i4.updateIntArray([1397116793, r3.length]);
              for (let t7 = 0; t7 < r3.length; t7++) {
                const e5 = r3[t7];
                i4.updateIntArray([3962308117, t7]), Y$4(e5, i4, u3), i4.updateIntArray([2716288009]);
              }
              i4.updateIntArray([2278822459]);
            }
            return i4.updateIntArray([3878477243]), void Y$4(o3.spatialReference.wkid, i4, u3);
          }
          if (o3 instanceof m$8) {
            i4.updateIntArray([4106883559]);
            for (let t6 = 0; t6 < o3.paths.length; t6++) {
              const e4 = o3.paths[t6];
              i4.updateIntArray([1397116793, e4.length]);
              for (let r3 = 0; r3 < e4.length; r3++)
                i4.updateIntArray([3962308117, r3]), Y$4(o3.getPoint(t6, r3), i4, u3), i4.updateIntArray([2716288009]);
              i4.updateIntArray([2278822459]);
            }
            return i4.updateIntArray([2568784753]), void Y$4(o3.spatialReference.wkid, i4, u3);
          }
          if (o3 instanceof u$8) {
            i4.updateIntArray([588535921, o3.points.length]);
            for (let t6 = 0; t6 < o3.points.length; t6++) {
              const e4 = o3.getPoint(t6);
              i4.updateIntArray([t6]), Y$4(e4, i4, u3);
            }
            return i4.updateIntArray([1700171621]), void Y$4(o3.spatialReference.wkid, i4, u3);
          }
          if (o3 instanceof M$6)
            return i4.updateIntArray([3483648373]), i4.updateIntArray([0]), i4.updateFloatArray([o3.xmax]), i4.updateIntArray([1]), i4.updateFloatArray([o3.xmin]), i4.updateIntArray([2]), i4.updateFloatArray([o3.ymax]), i4.updateIntArray([3]), i4.updateFloatArray([o3.ymin]), o3.hasZ && (i4.updateIntArray([4]), i4.updateFloatArray([o3.zmax]), i4.updateIntArray([5]), i4.updateFloatArray([o3.zmin])), o3.hasM && (i4.updateIntArray([6]), i4.updateFloatArray([o3.mmax]), i4.updateIntArray([7]), i4.updateFloatArray([o3.mmin])), i4.updateIntArray([3622027469]), void Y$4(o3.spatialReference.wkid, i4, u3);
          if (o3 instanceof f$5)
            return i4.updateIntArray([14]), void 0 !== o3.wkid && null !== o3.wkid && i4.updateIntArray([o3.wkid]), o3.wkt && i4.updateWithString(o3.wkt), void (o3.wkt2 && i4.updateWithString(o3.wkt2));
          if (v$4(o3))
            throw new a$5(u3.context, r$5.UnsupportedHashType, u3.node);
          if (H$5(o3))
            throw new a$5(u3.context, r$5.UnsupportedHashType, u3.node);
          if (W$6(o3))
            throw new a$5(u3.context, r$5.UnsupportedHashType, u3.node);
          if (o3 === w$3)
            throw new a$5(u3.context, r$5.UnsupportedHashType, u3.node);
          throw new a$5(u3.context, r$5.UnsupportedHashType, u3.node);
        }
        if (i4.updateUint8Array([223]), u3.map.has(o3)) {
          const t6 = u3.map.get(o3);
          i4.updateIntArray([61237541 ^ t6]);
        } else {
          u3.map.set(o3, u3.currentLength++);
          for (const t6 of o3.keys()) {
            i4.updateIntArray([t6.length]), i4.updateWithString(t6), i4.updateUint8Array([251]);
            Y$4(o3.field(t6), i4, u3), i4.updateUint8Array([239]);
          }
          u3.map.delete(o3), u3.currentLength--;
        }
        i4.updateUint8Array([73]);
      }
    }
  else
    i4.updateUint8Array([0, 139]);
}
function $$2(e4, N3) {
  e4.portal = function(e5, r3) {
    return N3(e5, r3, (n3, a3, u3) => (ne$4(u3, 1, 1, e5, r3), new t$3(ce$3(u3[0]))));
  }, e4.typeof = function(t6, e5) {
    return N3(t6, e5, (r3, i4, s6) => {
      ne$4(s6, 1, 1, t6, e5);
      const l2 = Y$6(s6[0]);
      if ("Unrecognized Type" === l2)
        throw new a$5(t6, r$5.UnrecognizedType, e5);
      return l2;
    });
  }, e4.trim = function(t6, e5) {
    return N3(t6, e5, (r3, n3, a3) => (ne$4(a3, 1, 1, t6, e5), ce$3(a3[0]).trim()));
  }, e4.tohex = function(t6, e5) {
    return N3(t6, e5, (r3, n3, a3) => {
      ne$4(a3, 1, 1, t6, e5);
      const i4 = pe$2(a3[0]);
      return isNaN(i4) ? i4 : i4.toString(16);
    });
  }, e4.upper = function(t6, e5) {
    return N3(t6, e5, (r3, n3, a3) => (ne$4(a3, 1, 1, t6, e5), ce$3(a3[0]).toUpperCase()));
  }, e4.proper = function(t6, e5) {
    return N3(t6, e5, (r3, n3, a3) => {
      ne$4(a3, 1, 2, t6, e5);
      let u3 = 1;
      2 === a3.length && "firstword" === ce$3(a3[1]).toLowerCase() && (u3 = 2);
      const s6 = /\s/, l2 = ce$3(a3[0]);
      let d2 = "", p3 = true;
      for (let t7 = 0; t7 < l2.length; t7++) {
        let e6 = l2[t7];
        if (s6.test(e6))
          1 === u3 && (p3 = true);
        else {
          e6.toUpperCase() !== e6.toLowerCase() && (p3 ? (e6 = e6.toUpperCase(), p3 = false) : e6 = e6.toLowerCase());
        }
        d2 += e6;
      }
      return d2;
    });
  }, e4.lower = function(t6, e5) {
    return N3(t6, e5, (r3, n3, a3) => (ne$4(a3, 1, 1, t6, e5), ce$3(a3[0]).toLowerCase()));
  }, e4.guid = function(t6, e5) {
    return N3(t6, e5, (r3, n3, a3) => {
      if (ne$4(a3, 0, 1, t6, e5), a3.length > 0)
        switch (ce$3(a3[0]).toLowerCase()) {
          case "digits":
            return ae$4().replace("-", "").replace("-", "").replace("-", "").replace("-", "");
          case "digits-hyphen":
            return ae$4();
          case "digits-hyphen-braces":
            return "{" + ae$4() + "}";
          case "digits-hyphen-parentheses":
            return "(" + ae$4() + ")";
        }
      return "{" + ae$4() + "}";
    });
  }, e4.standardizeguid = function(t6, e5) {
    return N3(t6, e5, (r3, n3, a3) => {
      ne$4(a3, 2, 2, t6, e5);
      let u3 = ce$3(a3[0]);
      if ("" === u3 || null === u3)
        return "";
      const s6 = /^(\{|\()?(?<partA>[0-9a-z]{8})(\-?)(?<partB>[0-9a-z]{4})(\-?)(?<partC>[0-9a-z]{4})(\-?)(?<partD>[0-9a-z]{4})(\-?)(?<partE>[0-9a-z]{12})(\}|\))?$/gim.exec(u3);
      if (!s6)
        return "";
      const l2 = s6.groups;
      switch (u3 = l2.partA + "-" + l2.partB + "-" + l2.partC + "-" + l2.partD + "-" + l2.partE, ce$3(a3[1]).toLowerCase()) {
        case "digits":
          return u3.replace("-", "").replace("-", "").replace("-", "").replace("-", "");
        case "digits-hyphen":
          return u3;
        case "digits-hyphen-braces":
          return "{" + u3 + "}";
        case "digits-hyphen-parentheses":
          return "(" + u3 + ")";
      }
      return "{" + u3 + "}";
    });
  }, e4.console = function(t6, e5) {
    return N3(t6, e5, (e6, r3, n3) => (0 === n3.length || (1 === n3.length ? t6.console(ce$3(n3[0])) : t6.console(ce$3(n3))), w$3));
  }, e4.mid = function(t6, e5) {
    return N3(t6, e5, (r3, n3, a3) => {
      ne$4(a3, 2, 3, t6, e5);
      let u3 = pe$2(a3[1]);
      if (isNaN(u3))
        return "";
      if (u3 < 0 && (u3 = 0), 2 === a3.length)
        return ce$3(a3[0]).substr(u3);
      let l2 = pe$2(a3[2]);
      return isNaN(l2) ? "" : (l2 < 0 && (l2 = 0), ce$3(a3[0]).substr(u3, l2));
    });
  }, e4.find = function(t6, e5) {
    return N3(t6, e5, (r3, n3, a3) => {
      ne$4(a3, 2, 3, t6, e5);
      let u3 = 0;
      if (a3.length > 2) {
        if (u3 = pe$2(L$4(a3[2], 0)), isNaN(u3))
          return -1;
        u3 < 0 && (u3 = 0);
      }
      return ce$3(a3[1]).indexOf(ce$3(a3[0]), u3);
    });
  }, e4.left = function(t6, e5) {
    return N3(t6, e5, (r3, n3, a3) => {
      ne$4(a3, 2, 2, t6, e5);
      let u3 = pe$2(a3[1]);
      return isNaN(u3) ? "" : (u3 < 0 && (u3 = 0), ce$3(a3[0]).substr(0, u3));
    });
  }, e4.right = function(t6, e5) {
    return N3(t6, e5, (r3, n3, a3) => {
      ne$4(a3, 2, 2, t6, e5);
      let u3 = pe$2(a3[1]);
      return isNaN(u3) ? "" : (u3 < 0 && (u3 = 0), ce$3(a3[0]).substr(-1 * u3, u3));
    });
  }, e4.split = function(t6, e5) {
    return N3(t6, e5, (r3, n3, a3) => {
      let u3;
      ne$4(a3, 2, 4, t6, e5);
      let l2 = pe$2(L$4(a3[2], -1));
      const d2 = be$2(L$4(a3[3], false));
      if (-1 === l2 || null === l2 || true === d2 ? u3 = ce$3(a3[0]).split(ce$3(a3[1])) : (isNaN(l2) && (l2 = -1), l2 < -1 && (l2 = -1), u3 = ce$3(a3[0]).split(ce$3(a3[1]), l2)), false === d2)
        return u3;
      const f2 = [];
      for (let t7 = 0; t7 < u3.length && !(-1 !== l2 && f2.length >= l2); t7++)
        "" !== u3[t7] && void 0 !== u3[t7] && f2.push(u3[t7]);
      return f2;
    });
  }, e4.text = function(t6, e5) {
    return N3(t6, e5, (r3, n3, a3) => (ne$4(a3, 1, 2, t6, e5), de$3(a3[0], a3[1])));
  }, e4.concatenate = function(t6, e5) {
    return N3(t6, e5, (t7, e6, r3) => {
      const n3 = [];
      if (r3.length < 1)
        return "";
      if (q$7(r3[0])) {
        const t8 = L$4(r3[2], "");
        for (let e7 = 0; e7 < r3[0].length; e7++)
          n3[e7] = de$3(r3[0][e7], t8);
        return r3.length > 1 ? n3.join(r3[1]) : n3.join("");
      }
      if ($$4(r3[0])) {
        const t8 = L$4(r3[2], "");
        for (let e7 = 0; e7 < r3[0].length(); e7++)
          n3[e7] = de$3(r3[0].get(e7), t8);
        return r3.length > 1 ? n3.join(r3[1]) : n3.join("");
      }
      for (let a3 = 0; a3 < r3.length; a3++)
        n3[a3] = de$3(r3[a3]);
      return n3.join("");
    });
  }, e4.reverse = function(t6, e5) {
    return N3(t6, e5, (r3, i4, u3) => {
      if (ne$4(u3, 1, 1, t6, e5), q$7(u3[0])) {
        const t7 = u3[0].slice(0);
        return t7.reverse(), t7;
      }
      if ($$4(u3[0])) {
        const t7 = u3[0].toArray().slice(0);
        return t7.reverse(), t7;
      }
      throw new a$5(t6, r$5.InvalidParameter, e5);
    });
  }, e4.replace = function(t6, e5) {
    return N3(t6, e5, (r3, n3, a3) => {
      ne$4(a3, 3, 4, t6, e5);
      const u3 = ce$3(a3[0]), s6 = ce$3(a3[1]), l2 = ce$3(a3[2]);
      return 4 !== a3.length || be$2(a3[3]) ? I$5(u3, s6, l2) : u3.replace(s6, l2);
    });
  }, e4.schema = function(t6, e5) {
    return N3(t6, e5, (o3, i4, u3) => {
      if (U$3(u3[0])) {
        const e6 = Ue$1(u3[0]);
        return e6 ? N$3.convertObjectToArcadeDictionary(e6, qe(t6)) : null;
      }
      throw new a$5(t6, r$5.InvalidParameter, e5);
    });
  }, e4.subtypes = function(t6, e5) {
    return N3(t6, e5, (i4, u3, s6) => {
      if (ne$4(s6, 1, 1, t6, e5), U$3(s6[0])) {
        const e6 = ze(s6[0]);
        return e6 ? N$3.convertObjectToArcadeDictionary(e6, qe(t6)) : null;
      }
      throw new a$5(t6, r$5.InvalidParameter, e5);
    });
  }, e4.subtypecode = function(t6, e5) {
    return N3(t6, e5, (r3, i4, u3) => {
      if (ne$4(u3, 1, 1, t6, e5), U$3(u3[0])) {
        const t7 = ze(u3[0]);
        if (!t7)
          return null;
        if (t7.subtypeField && u3[0].hasField(t7.subtypeField)) {
          const e6 = u3[0].field(t7.subtypeField);
          for (const r4 of t7.subtypes)
            if (r4.code === e6)
              return r4.code;
          return null;
        }
        return null;
      }
      throw new a$5(t6, r$5.InvalidParameter, e5);
    });
  }, e4.subtypename = function(t6, e5) {
    return N3(t6, e5, (r3, i4, u3) => {
      if (ne$4(u3, 1, 1, t6, e5), U$3(u3[0])) {
        const t7 = ze(u3[0]);
        if (!t7)
          return "";
        if (t7.subtypeField && u3[0].hasField(t7.subtypeField)) {
          const e6 = u3[0].field(t7.subtypeField);
          for (const r4 of t7.subtypes)
            if (r4.code === e6)
              return r4.name;
          return "";
        }
        return "";
      }
      throw new a$5(t6, r$5.InvalidParameter, e5);
    });
  }, e4.gdbversion = function(t6, e5) {
    return N3(t6, e5, (r3, i4, u3) => {
      if (ne$4(u3, 1, 1, t6, e5), U$3(u3[0]))
        return u3[0].gdbVersion();
      throw new a$5(t6, r$5.InvalidParameter, e5);
    });
  }, e4.domain = function(t6, e5) {
    return N3(t6, e5, (u3, s6, l2) => {
      if (ne$4(l2, 2, 3, t6, e5), U$3(l2[0])) {
        const e6 = Ge(l2[0], ce$3(l2[1]), void 0 === l2[2] ? void 0 : l2[2]);
        return e6 && e6.domain ? "coded-value" === e6.domain.type || "codedValue" === e6.domain.type ? N$3.convertObjectToArcadeDictionary({ type: "codedValue", name: e6.domain.name, dataType: k$4[e6.field.type], codedValues: e6.domain.codedValues.map((t7) => ({ name: t7.name, code: t7.code })) }, qe(t6)) : N$3.convertObjectToArcadeDictionary({ type: "range", name: e6.domain.name, dataType: k$4[e6.field.type], min: e6.domain.min, max: e6.domain.max }, qe(t6)) : null;
      }
      throw new a$5(t6, r$5.InvalidParameter, e5);
    });
  }, e4.domainname = function(t6, e5) {
    return N3(t6, e5, (r3, u3, s6) => {
      if (ne$4(s6, 2, 4, t6, e5), U$3(s6[0]))
        return Ee$2(s6[0], ce$3(s6[1]), s6[2], void 0 === s6[3] ? void 0 : s6[3]);
      throw new a$5(t6, r$5.InvalidParameter, e5);
    });
  }, e4.domaincode = function(t6, e5) {
    return N3(t6, e5, (r3, u3, s6) => {
      if (ne$4(s6, 2, 4, t6, e5), U$3(s6[0]))
        return Ve(s6[0], ce$3(s6[1]), s6[2], void 0 === s6[3] ? void 0 : s6[3]);
      throw new a$5(t6, r$5.InvalidParameter, e5);
    });
  }, e4.urlencode = function(t6, e5) {
    return N3(t6, e5, (n3, a3, u3) => {
      if (ne$4(u3, 1, 1, t6, e5), null === u3[0])
        return "";
      if (u3[0] instanceof N$3) {
        let t7 = "";
        for (const e6 of u3[0].keys()) {
          const r3 = u3[0].field(e6);
          "" !== t7 && (t7 += "&"), t7 += null === r3 ? encodeURIComponent(e6) + "=" : encodeURIComponent(e6) + "=" + encodeURIComponent(r3);
        }
        return t7;
      }
      return encodeURIComponent(ce$3(u3[0]));
    });
  }, e4.hash = function(t6, e5) {
    return N3(t6, e5, (r3, n3, a3) => {
      ne$4(a3, 1, 1, t6, e5);
      const i4 = new i$8(0);
      return Y$4(a3[0], i4, { context: t6, node: e5, map: /* @__PURE__ */ new Map(), currentLength: 0 }), i4.digest();
    });
  }, e4.convertdirection = function(t6, e5) {
    return N3(t6, e5, (r3, n3, a3) => (ne$4(a3, 3, 3, t6, e5), me$2(a3[0], a3[1], a3[2])));
  }, e4.fromjson = function(t6, e5) {
    return N3(t6, e5, (u3, s6, l2) => {
      if (ne$4(l2, 1, 1, t6, e5), false === P$6(l2[0]))
        throw new a$5(t6, r$5.InvalidParameter, e5);
      return N$3.convertJsonToArcade(JSON.parse(ce$3(l2[0])), qe(t6));
    });
  }, e4.expects = function(t6, e5) {
    return N3(t6, e5, (r3, o3, i4) => {
      if (i4.length < 1)
        throw new a$5(t6, r$5.WrongNumberOfParameters, e5);
      return w$3;
    });
  }, e4.tocharcode = function(t6, e5) {
    return N3(t6, e5, (r3, u3, l2) => {
      ne$4(l2, 1, 2, t6, e5);
      const d2 = pe$2(L$4(l2[1], 0)), c2 = ce$3(l2[0]);
      if (0 === c2.length && 1 === l2.length)
        return null;
      if (c2.length <= d2 || d2 < 0)
        throw new a$5(t6, r$5.OutOfBounds, e5);
      return c2.charCodeAt(d2);
    });
  }, e4.tocodepoint = function(t6, e5) {
    return N3(t6, e5, (r3, u3, l2) => {
      ne$4(l2, 1, 2, t6, e5);
      const d2 = pe$2(L$4(l2[1], 0)), c2 = ce$3(l2[0]);
      if (0 === c2.length && 1 === l2.length)
        return null;
      if (c2.length <= d2 || d2 < 0)
        throw new a$5(t6, r$5.OutOfBounds, e5);
      return c2.codePointAt(d2);
    });
  }, e4.fromcharcode = function(t6, e5) {
    return N3(t6, e5, (r3, o3, i4) => {
      if (i4.length < 1)
        throw new a$5(t6, r$5.WrongNumberOfParameters, e5);
      const u3 = i4.map((t7) => Math.trunc(pe$2(t7))).filter((t7) => t7 >= 0 && t7 <= 65535);
      return 0 === u3.length ? null : String.fromCharCode.apply(null, u3);
    });
  }, e4.fromcodepoint = function(t6, e5) {
    return N3(t6, e5, (r3, o3, i4) => {
      if (i4.length < 1)
        throw new a$5(t6, r$5.WrongNumberOfParameters, e5);
      let u3;
      try {
        u3 = i4.map((t7) => Math.trunc(pe$2(t7))).filter((t7) => t7 <= 1114111 && t7 >>> 0 === t7);
      } catch (l2) {
        return null;
      }
      return 0 === u3.length ? null : String.fromCodePoint.apply(null, u3);
    });
  }, e4.getuser = function(e5, u3) {
    return N3(e5, u3, (s6, l2, d2) => {
      ne$4(d2, 0, 2, e5, u3);
      let c2 = L$4(d2[1], "");
      if (c2 = true === c2 || false === c2 ? "" : ce$3(c2), null !== c2 && "" !== c2)
        return null;
      if (0 === d2.length || d2[0] instanceof t$3) {
        let t6 = null;
        if (t6 = e5.services?.portal ? e5.services.portal : j$4.getDefault(), d2.length > 0) {
          if (!q$3(d2[0].field("url"), t6))
            return null;
        }
        if (!t6)
          return null;
        if ("" === c2) {
          const n3 = B$2(t6);
          if (n3) {
            const t7 = JSON.parse(JSON.stringify(n3));
            for (const e6 of ["lastLogin", "created", "modified"])
              void 0 !== t7[e6] && null !== t7[e6] && (t7[e6] = new Date(t7[e6]));
            return N$3.convertObjectToArcadeDictionary(t7, qe(e5));
          }
        }
        return null;
      }
      throw new a$5(e5, r$5.InvalidParameter, u3);
    });
  }, e4.getenvironment = function(t6, e5) {
    return N3(t6, e5, (n3, a3, i4) => (ne$4(i4, 0, 0, t6, e5), N$3.convertObjectToArcadeDictionary(He(qe(t6), t6.spatialReference), qe(t6), true)));
  };
}
let K$2 = class K extends r$4 {
  constructor(e4, n3) {
    super(), this.paramCount = n3, this.fn = e4;
  }
  createFunction(e4) {
    return (...n3) => {
      if (n3.length !== this.paramCount)
        throw new a$5(e4, r$5.WrongNumberOfParameters, null);
      return this.fn(...n3);
    };
  }
  call(e4, n3) {
    return this.fn(...n3.arguments);
  }
  marshalledCall(e4, n3, t6, o3) {
    return o3(e4, n3, (n4, l2, r3) => {
      r3 = r3.map((n5) => !v$4(n5) || n5 instanceof s$7 ? n5 : n$3(n5, e4, o3));
      const a3 = this.call(t6, { arguments: r3 });
      return E$4(a3) ? a3.then((e5) => n$3(e5, t6, o3)) : a3;
    });
  }
};
function q$2(e4, n3, t6) {
  try {
    return t6(e4, null, n3.arguments);
  } catch (o3) {
    throw o3;
  }
}
function W$3(e4, n3) {
  try {
    switch (n3.type) {
      case "EmptyStatement":
        return "lc.voidOperation";
      case "VariableDeclarator":
        return ue$2(e4, n3);
      case "VariableDeclaration":
        return ce$1(e4, n3);
      case "BlockStatement":
      case "Program":
        return oe$2(e4, n3);
      case "FunctionDeclaration":
        return ie$2(e4, n3);
      case "ImportDeclaration":
        return re$3(e4, n3);
      case "ExportNamedDeclaration":
        return ae$2(e4, n3);
      case "ReturnStatement":
        return le$1(e4, n3);
      case "IfStatement":
        return te$3(e4, n3);
      case "ExpressionStatement":
        return ee$3(e4, n3);
      case "AssignmentExpression":
        return X$3(e4, n3);
      case "UpdateExpression":
        return H$3(e4, n3);
      case "BreakStatement":
        return "break";
      case "ContinueStatement":
        return "continue";
      case "TemplateLiteral":
        return de$1(e4, n3);
      case "TemplateElement":
        return JSON.stringify(n3.value ? n3.value.cooked : "");
      case "ForStatement":
        return Y$3(e4, n3);
      case "ForInStatement":
        return J$3(e4, n3);
      case "WhileStatement":
        return Q$3(e4, n3);
      case "Identifier":
        return ye$1(e4, n3);
      case "MemberExpression":
        return pe$1(e4, n3);
      case "Literal":
        return null === n3.value || void 0 === n3.value ? "null" : JSON.stringify(n3.value);
      case "CallExpression":
        return be$1(e4, n3);
      case "UnaryExpression":
        return me$1(e4, n3);
      case "BinaryExpression":
        return fe$1(e4, n3);
      case "LogicalExpression":
        return he$1(e4, n3);
      case "ArrayExpression":
        return ge$1(e4, n3);
      case "ObjectExpression":
        return z$2(e4, n3);
      case "Property":
        return V$4(e4, n3);
      case "Array":
        throw new s$8(e4, r$5.NeverReach, n3);
      default:
        throw new s$8(e4, r$5.Unrecognized, n3);
    }
  } catch (t6) {
    throw t6;
  }
}
function z$2(e4, n3) {
  let t6 = "lang.dictionary([";
  for (let o3 = 0; o3 < n3.properties.length; o3++) {
    const l2 = n3.properties[o3];
    se$2(l2.key.name);
    o3 > 0 && (t6 += ","), t6 += "lang.strCheck(" + ("Identifier" === l2.key.type ? "'" + l2.key.name + "'" : W$3(e4, l2.key)) + ",'ObjectExpression'),lang.aCheck(" + W$3(e4, l2.value) + ", 'ObjectExpression')";
  }
  return t6 += "])", t6;
}
function V$4(e4, n3) {
  throw new s$8(e4, r$5.NeverReach, n3);
}
function J$3(e4, n3) {
  const t6 = Fe$1(e4), o3 = Fe$1(e4), l2 = Fe$1(e4);
  let r3 = "var " + t6 + " = " + W$3(e4, n3.right) + ";\n";
  "VariableDeclaration" === n3.left.type && (r3 += W$3(e4, n3.left));
  let a3 = "VariableDeclaration" === n3.left.type ? n3.left.declarations[0].id.name : n3.left.name;
  a3 = a3.toLowerCase(), se$2(a3);
  let s6 = "";
  null !== e4.localScope && (void 0 !== e4.localScope[a3] ? s6 = "lscope['" + a3 + "']" : void 0 !== e4.localScope._SymbolsMap[a3] && (s6 = "lscope['" + e4.localScope._SymbolsMap[a3] + "']"));
  let i4 = "";
  if ("" === s6) {
    if (void 0 !== e4.globalScope[a3])
      s6 = "gscope['" + a3 + "']";
    else if (void 0 !== e4.globalScope._SymbolsMap[a3])
      s6 = "gscope['" + e4.globalScope._SymbolsMap[a3] + "']";
    else if (null !== e4.localScope)
      if (e4.undeclaredGlobalsInFunctions.has(a3))
        s6 = "gscope['" + e4.undeclaredGlobalsInFunctions.get(a3).manglename + "']", i4 = e4.undeclaredGlobalsInFunctions.get(a3).manglename;
      else {
        const t7 = { manglename: Me$1(e4), node: n3.left };
        e4.undeclaredGlobalsInFunctions.set(a3, t7), s6 = "gscope['" + t7.manglename + "']", i4 = t7.manglename;
      }
  }
  return i4 && (r3 += "lang.chkAssig('" + i4 + "',runtimeCtx); \n"), r3 += "if (" + t6 + "===null) {  lastStatement = lc.voidOperation; }\n ", r3 += "else if (lc.isArray(" + t6 + ") || lc.isString(" + t6 + ")) {", r3 += "var " + o3 + "=" + t6 + ".length; \n", r3 += "for(var " + l2 + "=0; " + l2 + "<" + o3 + "; " + l2 + "++) {\n", r3 += s6 + "=" + l2 + ";\n", r3 += W$3(e4, n3.body), r3 += "\n}\n", r3 += " lastStatement = lc.voidOperation; \n", r3 += " \n}\n", r3 += "else if (lc.isImmutableArray(" + t6 + ")) {", r3 += "var " + o3 + "=" + t6 + ".length(); \n", r3 += "for(var " + l2 + "=0; " + l2 + "<" + o3 + "; " + l2 + "++) {\n", r3 += s6 + "=" + l2 + ";\n", r3 += W$3(e4, n3.body), r3 += "\n}\n", r3 += " lastStatement = lc.voidOperation; \n", r3 += " \n}\n", r3 += "else if (( " + t6 + " instanceof lang.Dictionary) || ( " + t6 + " instanceof lang.Feature)) {", r3 += "var " + o3 + "=" + t6 + ".keys(); \n", r3 += "for(var " + l2 + "=0; " + l2 + "<" + o3 + ".length; " + l2 + "++) {\n", r3 += s6 + "=" + o3 + "[" + l2 + "];\n", r3 += W$3(e4, n3.body), r3 += "\n}\n", r3 += " lastStatement = lc.voidOperation; \n", r3 += " \n}\n", e4.isAsync && (r3 += "else if (lc.isFeatureSet(" + t6 + ")) {", r3 += "var " + o3 + "=" + t6 + ".iterator(runtimeCtx.abortSignal); \n", r3 += "for(var " + l2 + "=lang. graphicToFeature( yield " + o3 + ".next()," + t6 + ", runtimeCtx); " + l2 + "!=null; " + l2 + "=lang. graphicToFeature( yield " + o3 + ".next()," + t6 + ", runtimeCtx)) {\n", r3 += s6 + "=" + l2 + ";\n", r3 += W$3(e4, n3.body), r3 += "\n}\n", r3 += " lastStatement = lc.voidOperation; \n", r3 += " \n}\n"), r3 += "else { lastStatement = lc.voidOperation; } \n", r3;
}
function Y$3(e4, n3) {
  let t6 = "lastStatement = lc.voidOperation; \n";
  null !== n3.init && (t6 += W$3(e4, n3.init) + "; ");
  const o3 = Fe$1(e4), r3 = Fe$1(e4);
  return t6 += "var " + o3 + " = true; ", t6 += "\n do { ", null !== n3.update && (t6 += " if (" + o3 + "===false) {\n " + W$3(e4, n3.update) + "  \n}\n " + o3 + "=false; \n"), null !== n3.test && (t6 += "var " + r3 + " = " + W$3(e4, n3.test) + "; ", t6 += "if (" + r3 + "===false) { break; } else if (" + r3 + "!==true) { lang.error('" + r$5.BooleanConditionRequired + "');   }\n"), t6 += W$3(e4, n3.body), null !== n3.update && (t6 += "\n " + W$3(e4, n3.update)), t6 += "\n" + o3 + " = true; \n} while(true);  lastStatement = lc.voidOperation; ", t6;
}
function H$3(e4, n3) {
  let t6 = null, r3 = "";
  if ("MemberExpression" === n3.argument.type)
    return t6 = W$3(e4, n3.argument.object), true === n3.argument.computed ? r3 = W$3(e4, n3.argument.property) : (r3 = "'" + n3.argument.property.name + "'", se$2(n3.argument.property.name)), "lang.memberupdate(" + t6 + "," + r3 + ",'" + n3.operator + "'," + n3.prefix + ")";
  if (t6 = n3.argument.name.toLowerCase(), se$2(t6), null !== e4.localScope) {
    if (void 0 !== e4.localScope[t6])
      return "lang.update(lscope, '" + t6 + "','" + n3.operator + "'," + n3.prefix + ")";
    if (void 0 !== e4.localScope._SymbolsMap[t6])
      return "lang.update(lscope, '" + e4.localScope._SymbolsMap[t6] + "','" + n3.operator + "'," + n3.prefix + ")";
  }
  if (void 0 !== e4.globalScope[t6])
    return "lang.update(gscope, '" + t6 + "','" + n3.operator + "'," + n3.prefix + ")";
  if (void 0 !== e4.globalScope._SymbolsMap[t6])
    return "lang.update(gscope, '" + e4.globalScope._SymbolsMap[t6] + "','" + n3.operator + "'," + n3.prefix + ")";
  if (null !== e4.localScope) {
    if (e4.undeclaredGlobalsInFunctions.has(t6))
      return "lang.update(gscope,lang.chkAssig( '" + e4.undeclaredGlobalsInFunctions.get(t6).manglename + "',runtimeCtx),'" + n3.operator + "'," + n3.prefix + ")";
    const o3 = { manglename: Me$1(e4), node: n3.argument };
    return e4.undeclaredGlobalsInFunctions.set(t6, o3), "lang.update(gscope, lang.chkAssig('" + o3.manglename + "',runtimeCtx),'" + n3.operator + "'," + n3.prefix + ")";
  }
  throw new a$5(e4, r$5.InvalidIdentifier, n3);
}
function Q$3(e4, n3) {
  let t6 = "lastStatement = lc.voidOperation; \n";
  const o3 = Fe$1(e4);
  return t6 += `
  var ${o3} = true;
    do {
      ${o3} = ${W$3(e4, n3.test)};
      if (${o3}==false) {
        break;
      }
      if (${o3}!==true) {
        lang.error('${r$5.BooleanConditionRequired}');
      }
      ${W$3(e4, n3.body)}
    }
    while (${o3} !== false);
    lastStatement = lc.voidOperation;
  `, t6;
}
function X$3(e4, n3) {
  const t6 = W$3(e4, n3.right);
  let r3 = null, a3 = "";
  if ("MemberExpression" === n3.left.type)
    return r3 = W$3(e4, n3.left.object), true === n3.left.computed ? a3 = W$3(e4, n3.left.property) : (a3 = "'" + n3.left.property.name + "'", se$2(n3.left.property.name)), "lang.assignmember(" + r3 + "," + a3 + ",'" + n3.operator + "'," + t6 + ")";
  if (r3 = n3.left.name.toLowerCase(), se$2(r3), null !== e4.localScope) {
    if (void 0 !== e4.localScope[r3])
      return "lscope['" + r3 + "']=lang.assign(" + t6 + ",'" + n3.operator + "', lscope['" + r3 + "'])";
    if (void 0 !== e4.localScope._SymbolsMap[r3])
      return "lscope['" + e4.localScope._SymbolsMap[r3] + "']=lang.assign(" + t6 + ",'" + n3.operator + "', lscope['" + e4.localScope._SymbolsMap[r3] + "'])";
  }
  if (void 0 !== e4.globalScope[r3])
    return "gscope['" + r3 + "']=lang.assign(" + t6 + ",'" + n3.operator + "', gscope['" + r3 + "'])";
  if (void 0 !== e4.globalScope._SymbolsMap[r3])
    return "gscope['" + e4.globalScope._SymbolsMap[r3] + "']=lang.assign(" + t6 + ",'" + n3.operator + "', gscope['" + e4.globalScope._SymbolsMap[r3] + "'])";
  if (null !== e4.localScope) {
    if (e4.undeclaredGlobalsInFunctions.has(r3))
      return "gscope[lang.chkAssig('" + e4.undeclaredGlobalsInFunctions.get(r3).manglename + "',runtimeCtx)]=lang.assign(" + t6 + ",'" + n3.operator + "', gscope['" + e4.undeclaredGlobalsInFunctions.get(r3).manglename + "'])";
    const o3 = { manglename: Me$1(e4), node: n3.argument };
    return e4.undeclaredGlobalsInFunctions.set(r3, o3), "gscope[lang.chkAssig('" + o3.manglename + "',runtimeCtx)]=lang.assign(" + t6 + ",'" + n3.operator + "', gscope['" + o3.manglename + "'])";
  }
  throw new a$5(e4, r$5.InvalidIdentifier, n3);
}
function ee$3(e4, n3) {
  return "AssignmentExpression" === n3.expression.type ? "lastStatement = lc.voidOperation; " + W$3(e4, n3.expression) + "; \n " : (n3.expression.type, "lastStatement = " + W$3(e4, n3.expression) + "; ");
}
function ne$2(e4, n3) {
  return "BlockStatement" === n3.type ? W$3(e4, n3) : "ReturnStatement" === n3.type || "BreakStatement" === n3.type || "ContinueStatement" === n3.type ? W$3(e4, n3) + "; " : "UpdateExpression" === n3.type ? "lastStatement = " + W$3(e4, n3) + "; " : "ExpressionStatement" === n3.type ? W$3(e4, n3) : "ObjectExpression" === n3.type ? "lastStatement = " + W$3(e4, n3) + "; " : W$3(e4, n3) + "; ";
}
function te$3(e4, n3) {
  if ("AssignmentExpression" === n3.test.type || "UpdateExpression" === n3.test.type)
    throw new s$8(e4, r$5.BooleanConditionRequired, n3);
  return `if (lang.mustBoolean(${W$3(e4, n3.test)}, runtimeCtx) === true) {
    ${ne$2(e4, n3.consequent)}
  } ` + (null !== n3.alternate ? "IfStatement" === n3.alternate.type ? " else " + te$3(e4, n3.alternate) : ` else {
      ${ne$2(e4, n3.alternate)}
    }
` : " else {\n      lastStatement = lc.voidOperation;\n    }\n");
}
function oe$2(e4, n3) {
  let t6 = "";
  for (let o3 = 0; o3 < n3.body.length; o3++)
    "EmptyStatement" !== n3.body[o3].type && ("ReturnStatement" === n3.body[o3].type || "BreakStatement" === n3.body[o3].type || "ContinueStatement" === n3.body[o3].type ? t6 += W$3(e4, n3.body[o3]) + "; \n" : "UpdateExpression" === n3.body[o3].type || "ObjectExpression" === n3.body[o3].type ? t6 += "lastStatement = " + W$3(e4, n3.body[o3]) + "; \n" : t6 += W$3(e4, n3.body[o3]) + " \n");
  return t6;
}
function le$1(e4, n3) {
  if (null === n3.argument)
    return "return lc.voidOperation";
  return "return " + W$3(e4, n3.argument);
}
function re$3(e4, n3) {
  const t6 = n3.specifiers[0].local.name.toLowerCase();
  se$2(t6);
  const o3 = e4.libraryResolver?.loadLibrary(t6), l2 = Me$1(e4);
  void 0 === e4.moduleFactory[o3.uri] && (e4.moduleFactory[o3.uri] = De(o3.syntax, { interceptor: e4.interceptor, services: e4.services, moduleFactory: e4.moduleFactory, lrucache: e4.lrucache, timeZone: e4.timeZone ?? null, libraryResolver: e4.libraryResolver, customfunctions: e4.customfunctions, vars: {} }, e4.isAsync)), e4.moduleFactoryMap[l2] = o3.uri;
  let r3 = "";
  if (r3 = e4.isAsync ? "(yield lang.loadModule('" + l2 + "', runtimeCtx) ); " : "lang.loadModule('" + l2 + "', runtimeCtx); ", void 0 !== e4.globalScope[t6])
    return "gscope['" + t6 + "']=" + r3;
  if (void 0 !== e4.globalScope._SymbolsMap[t6])
    return "gscope['" + e4.globalScope._SymbolsMap[t6] + "']=" + r3;
  let a3 = "";
  return e4.undeclaredGlobalsInFunctions.has(t6) ? (a3 = e4.undeclaredGlobalsInFunctions.get(t6).manglename, e4.undeclaredGlobalsInFunctions.delete(t6)) : a3 = Me$1(e4), e4.globalScope._SymbolsMap[t6] = a3, e4.mangleMap[t6] = a3, "gscope[lang.setAssig('" + a3 + "', runtimeCtx)]=" + r3;
}
function ae$2(e4, n3) {
  const t6 = W$3(e4, n3.declaration);
  if ("FunctionDeclaration" === n3.declaration.type)
    e4.exports[n3.declaration.id.name.toLowerCase()] = "function";
  else if ("VariableDeclaration" === n3.declaration.type)
    for (const o3 of n3.declaration.declarations)
      e4.exports[o3.id.name.toLowerCase()] = "variable";
  return t6;
}
function se$2(e4) {
  if ("iif" === e4)
    throw new i$7();
  if ("decode" === e4)
    throw new i$7();
  if ("when" === e4)
    throw new i$7();
}
function ie$2(e4, n3) {
  const t6 = n3.id.name.toLowerCase();
  se$2(t6);
  let o3 = "", l2 = false;
  void 0 !== e4.globalScope[t6] ? o3 = t6 : void 0 !== e4.globalScope._SymbolsMap[t6] ? o3 = e4.globalScope._SymbolsMap[t6] : e4.undeclaredGlobalsInFunctions.has(t6) ? (o3 = e4.undeclaredGlobalsInFunctions.get(t6).manglename, e4.globalScope._SymbolsMap[t6] = o3, e4.mangleMap[t6] = o3, e4.undeclaredGlobalsInFunctions.delete(t6), l2 = true) : (o3 = Me$1(e4), e4.globalScope._SymbolsMap[t6] = o3, e4.mangleMap[t6] = o3);
  const r3 = { isAsync: e4.isAsync, console: e4.console, exports: e4.exports, undeclaredGlobalsInFunctions: e4.undeclaredGlobalsInFunctions, customfunctions: e4.customfunctions, moduleFactory: e4.moduleFactory, moduleFactoryMap: e4.moduleFactoryMap, libraryResolver: e4.libraryResolver, lrucache: e4.lrucache, interceptor: e4.interceptor, services: e4.services, symbols: e4.symbols, mangleMap: e4.mangleMap, localScope: { _SymbolsMap: {} }, depthCounter: e4.depthCounter, globalScope: e4.globalScope };
  let a3 = "new lang.UserDefinedCompiledFunction( lang.functionDepthchecker(function() { var lastStatement = lc.voidOperation; \n   var lscope = runtimeCtx.localStack[runtimeCtx.localStack.length-1];\n";
  for (let s6 = 0; s6 < n3.params.length; s6++) {
    const t7 = n3.params[s6].name.toLowerCase();
    se$2(t7);
    const o4 = Me$1(e4);
    r3.localScope._SymbolsMap[t7] = o4, r3.mangleMap[t7] = o4, a3 += "lscope['" + o4 + "']=arguments[" + s6.toString() + "];\n";
  }
  return true === e4.isAsync ? (a3 += "return lang.__awaiter(this, void 0, void 0, function* () {\n", a3 += oe$2(r3, n3.body) + "\n return lastStatement; ", a3 += "});  }", a3 += ", runtimeCtx)," + n3.params.length + ")", a3 += "\n lastStatement = lc.voidOperation; \n") : (a3 += oe$2(r3, n3.body) + "\n return lastStatement; }, runtimeCtx)," + n3.params.length + ")", a3 += "\n lastStatement = lc.voidOperation; \n"), l2 ? "gscope[lang.setAssig('" + o3 + "', runtimeCtx)]=" + a3 : "gscope['" + o3 + "']=" + a3;
}
function ce$1(e4, n3) {
  const t6 = [];
  for (let o3 = 0; o3 < n3.declarations.length; o3++)
    t6.push(W$3(e4, n3.declarations[o3]));
  return t6.join("\n") + " \n lastStatement=  lc.voidOperation; \n";
}
function ue$2(e4, n3) {
  let t6 = null === n3.init ? null : W$3(e4, n3.init);
  t6 === w$3 && (t6 = null);
  const o3 = n3.id.name.toLowerCase();
  if (se$2(o3), null !== e4.localScope) {
    if (void 0 !== e4.localScope[o3])
      return "lscope['" + o3 + "']=" + t6 + "; ";
    if (void 0 !== e4.localScope._SymbolsMap[o3])
      return "lscope['" + e4.localScope._SymbolsMap[o3] + "']=" + t6 + "; ";
    {
      const n4 = Me$1(e4);
      return e4.localScope._SymbolsMap[o3] = n4, e4.mangleMap[o3] = n4, "lscope['" + n4 + "']=" + t6 + "; ";
    }
  }
  if (void 0 !== e4.globalScope[o3])
    return "gscope['" + o3 + "']=" + t6 + "; ";
  if (void 0 !== e4.globalScope._SymbolsMap[o3])
    return "gscope['" + e4.globalScope._SymbolsMap[o3] + "']=" + t6 + "; ";
  if (e4.undeclaredGlobalsInFunctions.has(o3)) {
    const n4 = e4.undeclaredGlobalsInFunctions.get(o3).manglename;
    return e4.globalScope._SymbolsMap[o3] = n4, e4.mangleMap[o3] = n4, e4.undeclaredGlobalsInFunctions.delete(o3), "gscope[lang.setAssig('" + n4 + "', runtimeCtx)]=" + t6 + "; ";
  }
  const l2 = Me$1(e4);
  return e4.globalScope._SymbolsMap[o3] = l2, e4.mangleMap[o3] = l2, "gscope['" + l2 + "']=" + t6 + "; ";
}
function pe$1(e4, n3) {
  try {
    let t6;
    return true === n3.computed ? t6 = W$3(e4, n3.property) : (t6 = "'" + n3.property.name + "'", se$2(n3.property.name)), "lang.member(" + W$3(e4, n3.object) + "," + t6 + ")";
  } catch (t6) {
    throw t6;
  }
}
function me$1(e4, n3) {
  try {
    return "lang.unary(" + W$3(e4, n3.argument) + ",'" + n3.operator + "')";
  } catch (t6) {
    throw t6;
  }
}
function ge$1(e4, n3) {
  try {
    const t6 = [];
    for (let o3 = 0; o3 < n3.elements.length; o3++)
      "Literal" === n3.elements[o3].type ? t6.push(W$3(e4, n3.elements[o3])) : t6.push("lang.aCheck(" + W$3(e4, n3.elements[o3]) + ",'ArrayExpression')");
    return "[" + t6.join(",") + "]";
  } catch (t6) {
    throw t6;
  }
}
function de$1(e4, n3) {
  try {
    const t6 = [];
    let o3 = 0;
    for (const l2 of n3.quasis)
      t6.push(l2.value ? JSON.stringify(l2.value.cooked) : JSON.stringify("")), false === l2.tail && (t6.push(n3.expressions[o3] ? "lang.castString(lang.aCheck(" + W$3(e4, n3.expressions[o3]) + ", 'TemplateLiteral'))" : ""), o3++);
    return "([" + t6.join(",") + "]).join('')";
  } catch (t6) {
    throw t6;
  }
}
function fe$1(e4, n3) {
  try {
    return "lang.binary(" + W$3(e4, n3.left) + "," + W$3(e4, n3.right) + ",'" + n3.operator + "')";
  } catch (t6) {
    throw t6;
  }
}
function he$1(e4, n3) {
  try {
    if ("AssignmentExpression" === n3.left.type || "UpdateExpression" === n3.left.type)
      throw new s$8(e4, r$5.LogicalExpressionOnlyBoolean, n3);
    if ("AssignmentExpression" === n3.right.type || "UpdateExpression" === n3.right.type)
      throw new s$8(e4, r$5.LogicalExpressionOnlyBoolean, n3);
    if ("&&" === n3.operator || "||" === n3.operator)
      return "(lang.logicalCheck(" + W$3(e4, n3.left) + ") " + n3.operator + " lang.logicalCheck(" + W$3(e4, n3.right) + "))";
    throw new s$8(null, r$5.LogicExpressionOrAnd, null);
  } catch (t6) {
    throw t6;
  }
}
function ye$1(e4, n3) {
  try {
    const t6 = n3.name.toLowerCase();
    if (se$2(t6), null !== e4.localScope) {
      if (void 0 !== e4.localScope[t6])
        return "lscope['" + t6 + "']";
      if (void 0 !== e4.localScope._SymbolsMap[t6])
        return "lscope['" + e4.localScope._SymbolsMap[t6] + "']";
    }
    if (void 0 !== e4.globalScope[t6])
      return "gscope['" + t6 + "']";
    if (void 0 !== e4.globalScope._SymbolsMap[t6])
      return "gscope['" + e4.globalScope._SymbolsMap[t6] + "']";
    if (null !== e4.localScope) {
      if (e4.undeclaredGlobalsInFunctions.has(t6))
        return "gscope[lang.chkAssig('" + e4.undeclaredGlobalsInFunctions.get(t6).manglename + "',runtimeCtx)]";
      const o3 = { manglename: Me$1(e4), node: n3.argument };
      return e4.undeclaredGlobalsInFunctions.set(t6, o3), "gscope[lang.chkAssig('" + o3.manglename + "',runtimeCtx)]";
    }
    throw new s$8(e4, r$5.InvalidIdentifier, n3);
  } catch (t6) {
    throw t6;
  }
}
function be$1(e4, n3) {
  try {
    if ("MemberExpression" === n3.callee.type) {
      let t7;
      true === n3.callee.computed ? t7 = W$3(e4, n3.callee.property) : (t7 = "'" + n3.callee.property.name + "'", se$2(n3.callee.property.name));
      let o4 = "[";
      for (let l2 = 0; l2 < n3.arguments.length; l2++)
        l2 > 0 && (o4 += ", "), o4 += W$3(e4, n3.arguments[l2]);
      return o4 += "]", e4.isAsync ? "(yield lang.callModuleFunction(" + W$3(e4, n3.callee.object) + "," + o4 + "," + t7 + ",runtimeCtx))" : "lang.callModuleFunction(" + W$3(e4, n3.callee.object) + "," + o4 + "," + t7 + ",runtimeCtx)";
    }
    if ("Identifier" !== n3.callee.type)
      throw new s$8(e4, r$5.FunctionNotFound, n3);
    const t6 = n3.callee.name.toLowerCase();
    if ("iif" === t6)
      return we$1(e4, n3);
    if ("when" === t6)
      return Se$1(e4, n3);
    if ("decode" === t6)
      return ve$1(e4, n3);
    let o3 = "";
    if (null !== e4.localScope && (void 0 !== e4.localScope[t6] ? o3 = "lscope['" + t6 + "']" : void 0 !== e4.localScope._SymbolsMap[t6] && (o3 = "lscope['" + e4.localScope._SymbolsMap[t6] + "']")), "" === o3) {
      if (void 0 !== e4.globalScope[t6])
        o3 = "gscope['" + t6 + "']";
      else if (void 0 !== e4.globalScope._SymbolsMap[t6])
        o3 = "gscope['" + e4.globalScope._SymbolsMap[t6] + "']";
      else if (null !== e4.localScope)
        if (e4.undeclaredGlobalsInFunctions.has(t6))
          o3 = "gscope[lang.chkAssig('" + e4.undeclaredGlobalsInFunctions.get(t6).manglename + "',runtimeCtx)]";
        else {
          const l2 = { manglename: Me$1(e4), node: n3.argument };
          e4.undeclaredGlobalsInFunctions.set(t6, l2), o3 = "gscope[lang.chkAssig('" + l2.manglename + "',runtimeCtx)]";
        }
    }
    if ("" !== o3) {
      let t7 = "[";
      for (let o4 = 0; o4 < n3.arguments.length; o4++)
        o4 > 0 && (t7 += ", "), t7 += W$3(e4, n3.arguments[o4]);
      return t7 += "]", e4.isAsync ? "(yield lang.callfunc(" + o3 + "," + t7 + ",runtimeCtx) )" : "lang.callfunc(" + o3 + "," + t7 + ",runtimeCtx)";
    }
    throw new s$8(e4, r$5.FunctionNotFound, n3);
  } catch (t6) {
    throw t6;
  }
}
function we$1(e4, n3) {
  try {
    if (3 !== n3.arguments.length)
      throw new s$8(e4, r$5.WrongNumberOfParameters, n3);
    const t6 = Fe$1(e4);
    return `${e4.isAsync ? "(yield (function() { \n return lang.__awaiter(this, void 0, void 0, function* () {" : "function() {"}
        var ${t6} = ${W$3(e4, n3.arguments[0])};

        if (${t6} === true) {
          return  ${W$3(e4, n3.arguments[1])};
        }
        else if (${t6} === false) {
          return ${W$3(e4, n3.arguments[2])};
        }
        else {
          lang.error('ExecutionErrorCodes.BooleanConditionRequired');
        }
      ${e4.isAsync ? "})}()))" : "}()"}`;
  } catch (t6) {
    throw t6;
  }
}
function Se$1(e4, n3) {
  try {
    if (n3.arguments.length < 3)
      throw new s$8(e4, r$5.WrongNumberOfParameters, n3);
    if (n3.arguments.length % 2 == 0)
      throw new s$8(e4, r$5.WrongNumberOfParameters, n3);
    const t6 = Fe$1(e4);
    let o3 = "var ";
    for (let l2 = 0; l2 < n3.arguments.length - 1; l2 += 2)
      o3 += `${t6} = lang.mustBoolean(${W$3(e4, n3.arguments[l2])}, runtimeCtx);
      if (${t6} === true ) {
        return ${W$3(e4, n3.arguments[l2 + 1])}
      }
`;
    return `${e4.isAsync ? "(yield (function() { \n return lang.__awaiter(this, void 0, void 0, function* () {" : "function() {"}
        ${o3}
        return ${W$3(e4, n3.arguments[n3.arguments.length - 1])}
        ${e4.isAsync ? "})}()))" : "}()"}`;
  } catch (t6) {
    throw t6;
  }
}
function ve$1(e4, n3) {
  try {
    if (n3.arguments.length < 2)
      throw new s$8(e4, r$5.WrongNumberOfParameters, n3);
    if (2 === n3.arguments.length)
      return `(${W$3(e4, n3.arguments[1])})`;
    if ((n3.arguments.length - 1) % 2 == 0)
      throw new s$8(e4, r$5.WrongNumberOfParameters, n3);
    const t6 = Fe$1(e4), o3 = Fe$1(e4);
    let a3 = "var ";
    for (let l2 = 1; l2 < n3.arguments.length - 1; l2 += 2)
      a3 += `${o3} = ${W$3(e4, n3.arguments[l2])};
      if (lang.binary(${o3}, ${t6}, "==") === true ) {
        return ${W$3(e4, n3.arguments[l2 + 1])}
      }
`;
    return `${e4.isAsync ? "(yield (function() { \n return lang.__awaiter(this, void 0, void 0, function* () {" : "function() {"}
        var ${t6} = ${W$3(e4, n3.arguments[0])};
        ${a3}
        return ${W$3(e4, n3.arguments[n3.arguments.length - 1])}
        ${e4.isAsync ? "})}()))" : "}()"}`;
  } catch (t6) {
    throw t6;
  }
}
const xe$1 = {};
function Me$1(e4) {
  return e4.symbols.symbolCounter++, "_T" + e4.symbols.symbolCounter.toString();
}
function Fe$1(e4) {
  return e4.symbols.symbolCounter++, "_Tvar" + e4.symbols.symbolCounter.toString();
}
C$3(xe$1, q$2), $$2(xe$1, q$2), m$3(xe$1, q$2), W$5(xe$1, q$2), f$2(xe$1, q$2), xe$1.iif = function(e4, n3) {
  try {
    return q$2(e4, n3, (t6, r3, a3) => {
      throw new a$5(e4, r$5.Unrecognized, n3);
    });
  } catch (t6) {
    throw t6;
  }
}, xe$1.decode = function(e4, n3) {
  try {
    return q$2(e4, n3, (t6, r3, a3) => {
      throw new a$5(e4, r$5.Unrecognized, n3);
    });
  } catch (t6) {
    throw t6;
  }
}, xe$1.when = function(e4, n3) {
  try {
    return q$2(e4, n3, (t6, r3, a3) => {
      throw new a$5(e4, r$5.Unrecognized, n3);
    });
  } catch (t6) {
    throw t6;
  }
};
const Ce$1 = {};
for (const Ze2 in xe$1)
  Ce$1[Ze2] = new e$4(xe$1[Ze2]);
S$2(xe$1, q$2);
for (const Ze2 in xe$1)
  xe$1[Ze2] = new e$4(xe$1[Ze2]);
const Ie$1 = function() {
};
Ie$1.prototype = xe$1;
const Ae$1 = function() {
};
function _e(e4, n3, t6) {
  const o3 = {};
  e4 || (e4 = {}), t6 || (t6 = {}), o3._SymbolsMap = {}, o3.textformatting = 1, o3.infinity = 1, o3.pi = 1;
  for (const l2 in n3)
    o3[l2] = 1;
  for (const l2 in t6)
    o3[l2] = 1;
  for (const l2 in e4)
    o3[l2] = 1;
  return o3;
}
function Oe(e4, n3, o3, l2) {
  const r3 = o3 ? new Ae$1() : new Ie$1();
  e4 || (e4 = {}), n3 || (n3 = {});
  const a3 = new N$3({ newline: "\n", tab: "	", singlequote: "'", doublequote: '"', forwardslash: "/", backwardslash: "\\" });
  a3.immutable = false, r3._SymbolsMap = { textformatting: 1, infinity: 1, pi: 1 }, r3.textformatting = a3, r3.infinity = Number.POSITIVE_INFINITY, r3.pi = Math.PI;
  for (const t6 in n3)
    r3[t6] = n3[t6], r3._SymbolsMap[t6] = 1;
  for (const t6 in e4)
    r3._SymbolsMap[t6] = 1, e4[t6] && "esri.Graphic" === e4[t6].declaredClass ? r3[t6] = D$5.createFromGraphic(e4[t6], l2 ?? null) : r3[t6] = e4[t6];
  return r3;
}
Ae$1.prototype = Ce$1;
function Ee$1(e4, n3) {
  const t6 = { mode: n3, compiled: true, functions: {}, signatures: [], standardFunction: q$2, standardFunctionAsync: q$2, evaluateIdentifier: Be };
  for (let o3 = 0; o3 < e4.length; o3++)
    e4[o3].registerFunctions(t6);
  if ("sync" === n3) {
    for (const e5 in t6.functions)
      xe$1[e5] = new e$4(t6.functions[e5]), Ie$1.prototype[e5] = xe$1[e5];
    for (let e5 = 0; e5 < t6.signatures.length; e5++)
      o$4(t6.signatures[e5], "sync");
  } else {
    for (const e5 in t6.functions)
      Ce$1[e5] = new e$4(t6.functions[e5]), Ae$1.prototype[e5] = Ce$1[e5];
    for (let e5 = 0; e5 < t6.signatures.length; e5++)
      o$4(t6.signatures[e5], "async");
  }
}
function Be(e4, n3) {
  const t6 = n3.name;
  if ("_SymbolsMap" === t6)
    throw new a$5(e4, r$5.InvalidIdentifier, null);
  if (e4.localStack.length > 0) {
    if ("_t" !== t6.substr(0, 2).toLowerCase() && void 0 !== e4.localStack[e4.localStack.length - 1][t6])
      return e4.localStack[e4.localStack.length - 1][t6];
    const n4 = e4.mangleMap[t6];
    if (void 0 !== n4 && void 0 !== e4.localStack[e4.localStack.length - 1][n4])
      return e4.localStack[e4.localStack.length - 1][n4];
  }
  if ("_t" !== t6.substr(0, 2).toLowerCase() && void 0 !== e4.globalScope[t6])
    return e4.globalScope[t6];
  if (1 === e4.globalScope._SymbolsMap[t6])
    return e4.globalScope[t6];
  const r3 = e4.mangleMap[t6];
  return void 0 !== r3 ? e4.globalScope[r3] : void 0;
}
Ee$1([p$4], "sync"), Ee$1([p$4], "async");
let $e = 0;
const je = { error(e4) {
  throw new a$5(null, e4, null);
}, __awaiter: (e4, n3, t6, o3) => new Promise((t7, l2) => {
  function r3(e5) {
    try {
      s6(o3.next(e5));
    } catch (n4) {
      l2(n4);
    }
  }
  function a3(e5) {
    try {
      s6(o3.throw(e5));
    } catch (n4) {
      l2(n4);
    }
  }
  function s6(e5) {
    e5.done ? t7(e5.value) : e5.value?.then ? e5.value.then(r3, a3) : ($e++, $e % 100 == 0 ? setTimeout(() => {
      $e = 0, r3(e5.value);
    }, 0) : r3(e5.value));
  }
  s6((o3 = o3.apply(e4, n3 || [])).next());
}), functionDepthchecker: (e4, n3) => function() {
  if (n3.depthCounter.depth++, n3.localStack.push([]), n3.depthCounter.depth > 64)
    throw new a$5(null, r$5.MaximumCallDepth, null);
  const t6 = e4.apply(this, arguments);
  return E$4(t6) ? t6.then((e5) => (n3.depthCounter.depth--, n3.localStack.length = n3.localStack.length - 1, e5)) : (n3.depthCounter.depth--, n3.localStack.length = n3.localStack.length - 1, t6);
}, chkAssig(e4, n3) {
  if (void 0 === n3.gdefs[e4])
    throw new a$5(n3, r$5.InvalidIdentifier, null);
  return e4;
}, mustBoolean(e4, n3) {
  if (true === e4 || false === e4)
    return e4;
  throw new a$5(n3, r$5.BooleanConditionRequired, null);
}, setAssig: (e4, n3) => (n3.gdefs[e4] = 1, e4), castString: (e4) => ce$3(e4), aCheck(e4, n3) {
  if (v$4(e4)) {
    if ("ArrayExpression" === n3)
      throw new a$5(null, r$5.NoFunctionInArray, null);
    if ("ObjectExpression" === n3)
      throw new a$5(null, r$5.NoFunctionInDictionary, null);
    throw new a$5(null, r$5.NoFunctionInTemplateLiteral, null);
  }
  return e4 === w$3 ? null : e4;
}, Dictionary: N$3, Feature: D$5, UserDefinedCompiledFunction: K$2, dictionary(e4) {
  const n3 = {}, r3 = /* @__PURE__ */ new Map();
  for (let t6 = 0; t6 < e4.length; t6 += 2) {
    if (v$4(e4[t6 + 1]))
      throw new a$5(null, r$5.NoFunctionInDictionary, null);
    if (false === P$6(e4[t6]))
      throw new a$5(null, r$5.KeyMustBeString, null);
    let a4 = e4[t6].toString();
    const s6 = a4.toLowerCase();
    r3.has(s6) ? a4 = r3.get(s6) : r3.set(s6, a4), e4[t6 + 1] === w$3 ? n3[a4] = null : n3[a4] = e4[t6 + 1];
  }
  const a3 = new N$3(n3);
  return a3.immutable = false, a3;
}, strCheck(e4) {
  if (false === P$6(e4))
    throw new a$5(null, r$5.KeyMustBeString, null);
  return e4;
}, unary(e4, n3) {
  if (G$4(e4)) {
    if ("!" === n3)
      return !e4;
    if ("-" === n3)
      return -1 * pe$2(e4);
    if ("+" === n3)
      return 1 * pe$2(e4);
    if ("~" === n3)
      return ~pe$2(e4);
    throw new a$5(null, r$5.UnsupportedUnaryOperator, null);
  }
  if ("-" === n3)
    return -1 * pe$2(e4);
  if ("+" === n3)
    return 1 * pe$2(e4);
  if ("~" === n3)
    return ~pe$2(e4);
  throw new a$5(null, r$5.UnsupportedUnaryOperator, null);
}, logicalCheck(e4) {
  if (false === G$4(e4))
    throw new a$5(null, r$5.LogicExpressionOrAnd, null);
  return e4;
}, logical(e4, n3, t6) {
  if (G$4(e4) && G$4(n3))
    switch (t6) {
      case "||":
        return e4 || n3;
      case "&&":
        return e4 && n3;
      default:
        throw new a$5(null, r$5.LogicExpressionOrAnd, null);
    }
  throw new a$5(null, r$5.LogicExpressionOrAnd, null);
}, binary(e4, n3, t6) {
  switch (t6) {
    case "|":
    case "<<":
    case ">>":
    case ">>>":
    case "^":
    case "&":
      return Ie$2(pe$2(e4), pe$2(n3), t6);
    case "==":
    case "=":
      return fe$2(e4, n3);
    case "!=":
      return !fe$2(e4, n3);
    case "<":
    case ">":
    case "<=":
    case ">=":
      return se$4(e4, n3, t6);
    case "+":
      return P$6(e4) || P$6(n3) ? ce$3(e4) + ce$3(n3) : pe$2(e4) + pe$2(n3);
    case "-":
      return pe$2(e4) - pe$2(n3);
    case "*":
      return pe$2(e4) * pe$2(n3);
    case "/":
      return pe$2(e4) / pe$2(n3);
    case "%":
      return pe$2(e4) % pe$2(n3);
    default:
      throw new a$5(null, r$5.UnsupportedOperator, null);
  }
}, assign(e4, n3, t6) {
  switch (n3) {
    case "=":
      return e4 === w$3 ? null : e4;
    case "/=":
      return pe$2(t6) / pe$2(e4);
    case "*=":
      return pe$2(t6) * pe$2(e4);
    case "-=":
      return pe$2(t6) - pe$2(e4);
    case "+=":
      return P$6(t6) || P$6(e4) ? ce$3(t6) + ce$3(e4) : pe$2(t6) + pe$2(e4);
    case "%=":
      return pe$2(t6) % pe$2(e4);
    default:
      throw new a$5(null, r$5.UnsupportedOperator, null);
  }
}, update(e4, n3, t6, o3) {
  const l2 = pe$2(e4[n3]);
  return e4[n3] = "++" === t6 ? l2 + 1 : l2 - 1, false === o3 ? l2 : "++" === t6 ? l2 + 1 : l2 - 1;
}, graphicToFeature: (e4, n3, t6) => null === e4 ? null : D$5.createFromGraphicLikeObject(e4.geometry, e4.attributes, n3, t6.timeZone), memberupdate(e4, n3, r3, a3) {
  let s6;
  if (q$7(e4)) {
    if (!z$6(n3))
      throw new a$5(null, r$5.ArrayAccessorMustBeNumber, null);
    if (n3 < 0 && (n3 = e4.length + n3), n3 < 0 || n3 >= e4.length)
      throw new a$5(null, r$5.OutOfBounds, null);
    s6 = pe$2(e4[n3]), e4[n3] = "++" === r3 ? s6 + 1 : s6 - 1;
  } else if (e4 instanceof N$3) {
    if (false === P$6(n3))
      throw new a$5(null, r$5.KeyAccessorMustBeString, null);
    if (true !== e4.hasField(n3))
      throw new a$5(null, r$5.FieldNotFound, null, { key: n3 });
    s6 = pe$2(e4.field(n3)), e4.setField(n3, "++" === r3 ? s6 + 1 : s6 - 1);
  } else if (U$3(e4)) {
    if (false === P$6(n3))
      throw new a$5(null, r$5.KeyAccessorMustBeString, null);
    if (true !== e4.hasField(n3))
      throw new a$5(null, r$5.FieldNotFound, null);
    s6 = pe$2(e4.field(n3)), e4.setField(n3, "++" === r3 ? s6 + 1 : s6 - 1);
  } else {
    if ($$4(e4))
      throw new a$5(null, r$5.Immutable, null);
    if (!(e4 instanceof Ue))
      throw new a$5(null, r$5.InvalidIdentifier, null);
    if (false === P$6(n3))
      throw new a$5(null, r$5.ModuleAccessorMustBeString, null);
    if (true !== e4.hasGlobal(n3))
      throw new a$5(null, r$5.ModuleExportNotFound, null);
    s6 = pe$2(e4.global(n3)), e4.setGlobal(n3, "++" === r3 ? s6 + 1 : s6 - 1);
  }
  return false === a3 ? s6 : "++" === r3 ? s6 + 1 : s6 - 1;
}, assignmember(e4, n3, r3, a3) {
  if (q$7(e4)) {
    if (!z$6(n3))
      throw new a$5(null, r$5.ArrayAccessorMustBeNumber, null);
    if (n3 < 0 && (n3 = e4.length + n3), n3 < 0 || n3 > e4.length)
      throw new a$5(null, r$5.OutOfBounds, null);
    if (n3 === e4.length) {
      if ("=" !== r3)
        throw new a$5(null, r$5.OutOfBounds, null);
      e4[n3] = this.assign(a3, r3, e4[n3]);
    } else
      e4[n3] = this.assign(a3, r3, e4[n3]);
  } else if (e4 instanceof N$3) {
    if (false === P$6(n3))
      throw new a$5(null, r$5.KeyAccessorMustBeString, null);
    if (true === e4.hasField(n3))
      e4.setField(n3, this.assign(a3, r3, e4.field(n3)));
    else {
      if ("=" !== r3)
        throw new a$5(null, r$5.FieldNotFound, null);
      e4.setField(n3, this.assign(a3, r3, null));
    }
  } else if (U$3(e4)) {
    if (false === P$6(n3))
      throw new a$5(null, r$5.KeyAccessorMustBeString, null);
    if (true === e4.hasField(n3))
      e4.setField(n3, this.assign(a3, r3, e4.field(n3)));
    else {
      if ("=" !== r3)
        throw new a$5(null, r$5.FieldNotFound, null);
      e4.setField(n3, this.assign(a3, r3, null));
    }
  } else {
    if ($$4(e4))
      throw new a$5(null, r$5.Immutable, null);
    if (!(e4 instanceof Ue))
      throw new a$5(null, r$5.InvalidIdentifier, null);
    if (false === P$6(n3))
      throw new a$5(null, r$5.ModuleAccessorMustBeString, null);
    if (!e4.hasGlobal(n3))
      throw new a$5(null, r$5.ModuleExportNotFound, null);
    e4.setGlobal(n3, this.assign(a3, r3, e4.global(n3)));
  }
}, member(e4, n3) {
  if (null === e4)
    throw new a$5(null, r$5.MemberOfNull, null);
  if (e4 instanceof N$3 || U$3(e4)) {
    if (P$6(n3))
      return e4.field(n3);
    throw new a$5(null, r$5.InvalidMemberAccessKey, null);
  }
  if (e4 instanceof p$9) {
    if (P$6(n3))
      return L$3(e4, n3, null, null);
    throw new a$5(null, r$5.InvalidMemberAccessKey, null);
  }
  if (q$7(e4)) {
    if (z$6(n3) && isFinite(n3) && Math.floor(n3) === n3) {
      if (n3 < 0 && (n3 = e4.length + n3), n3 >= e4.length || n3 < 0)
        throw new a$5(null, r$5.OutOfBounds, null);
      return e4[n3];
    }
    throw new a$5(null, r$5.InvalidMemberAccessKey, null);
  }
  if (P$6(e4)) {
    if (z$6(n3) && isFinite(n3) && Math.floor(n3) === n3) {
      if (n3 < 0 && (n3 = e4.length + n3), n3 >= e4.length || n3 < 0)
        throw new a$5(null, r$5.OutOfBounds, null);
      return e4[n3];
    }
    throw new a$5(null, r$5.InvalidMemberAccessKey, null);
  }
  if ($$4(e4)) {
    if (z$6(n3) && isFinite(n3) && Math.floor(n3) === n3) {
      if (n3 < 0 && (n3 = e4.length() + n3), n3 >= e4.length() || n3 < 0)
        throw new a$5(null, r$5.OutOfBounds, null);
      return e4.get(n3);
    }
    throw new a$5(null, r$5.InvalidMemberAccessKey, null);
  }
  if (e4 instanceof Ue) {
    if (P$6(n3))
      return e4.global(n3);
    throw new a$5(null, r$5.InvalidMemberAccessKey, null);
  }
  throw new a$5(null, r$5.InvalidMemberAccessKey, null);
}, callfunc: (e4, n3, t6) => e4.call(t6, { arguments: n3, preparsed: true }), loadModule(e4, n3) {
  const t6 = n3.moduleFactoryMap[e4];
  if (n3.moduleSingletons[t6])
    return n3.moduleSingletons[t6];
  const o3 = n3.moduleFactory[t6]({ vars: {}, moduleSingletons: n3.moduleSingletons, depthCounter: n3.depthCounter, console: n3.console, abortSignal: n3.abortSignal, isAsync: n3.isAsync, services: n3.services, lrucache: n3.lrucache, timeZone: n3.timeZone ?? null, interceptor: n3.interceptor }, n3.spatialReference);
  return n3.moduleSingletons[t6] = o3, o3;
}, callModuleFunction(e4, n3, t6, r3) {
  if (!(e4 instanceof Ue))
    throw new a$5(null, r$5.FunctionNotFound, null);
  const a3 = e4.global(t6);
  if (false === v$4(a3))
    throw new a$5(null, r$5.CallNonFunction, null);
  return a3.call(r3, { preparsed: true, arguments: n3 });
} };
function Ne(e4) {
  console.log(e4);
}
function Le(e4, t6, a3 = false) {
  null === t6 && (t6 = { vars: {}, customfunctions: {} });
  let s6 = null;
  e4.usesModules && (s6 = new s$9(null, e4.loadedModules));
  const i4 = { isAsync: a3, globalScope: _e(t6.vars, a3 ? Ce$1 : xe$1, t6.customfunctions), moduleFactory: {}, moduleFactoryMap: {}, undeclaredGlobalsInFunctions: /* @__PURE__ */ new Map(), customfunctions: t6.customfunctions, libraryResolver: s6, localScope: null, mangleMap: {}, depthCounter: { depth: 1 }, exports: {}, console: Ne, lrucache: t6.lrucache, timeZone: t6.timeZone ?? null, interceptor: t6.interceptor, services: t6.services, symbols: { symbolCounter: 0 } };
  let c2 = W$3(i4, e4);
  "" === c2 && (c2 = "lc.voidOperation; "), i4.undeclaredGlobalsInFunctions.size > 0 && i4.undeclaredGlobalsInFunctions.forEach((e5) => {
    throw new s$8(t6, r$5.InvalidIdentifier, e5.node);
  });
  let u3 = "";
  u3 = a3 ? "var runtimeCtx=this.prepare(context, true);\n var lc = this.lc;  var lang = this.lang; var gscope=runtimeCtx.globalScope; \nreturn lang.__awaiter(this, void 0, void 0, function* () {\n\n function mainBody() {\n var lastStatement=lc.voidOperation;\n return lang.__awaiter(this, void 0, void 0, function* () {\n" + c2 + "\n return lastStatement; }); } \n return this.postProcess(yield mainBody()); }); " : "var runtimeCtx=this.prepare(context, false);\n var lc = this.lc;  var lang = this.lang; var gscope=runtimeCtx.globalScope; \n function mainBody() {\n var lastStatement=lc.voidOperation;\n " + c2 + "\n return lastStatement; } \n return this.postProcess(mainBody()); ";
  const p3 = i4.moduleFactory, w2 = i4.moduleFactoryMap, S2 = i4.exports, v2 = {};
  for (const n3 in S2)
    v2[n3] = void 0 !== i4.mangleMap[n3] ? i4.mangleMap[n3] : n3;
  const x3 = { lc: We, lang: je, mangles: i4.mangleMap, postProcess(e5) {
    if (e5 instanceof F$3 && (e5 = e5.value), e5 instanceof M$4 && (e5 = e5.value), e5 === w$3 && (e5 = null), e5 === O$3)
      throw new a$5(null, r$5.IllegalResult, null);
    if (e5 === R$2)
      throw new a$5(null, r$5.IllegalResult, null);
    if (v$4(e5))
      throw new a$5(null, r$5.IllegalResult, null);
    return e5;
  }, prepare(e5, n3) {
    let t7 = e5.spatialReference;
    null == t7 && (t7 = f$5.WebMercator);
    const o3 = Oe(e5.vars, e5.customfunctions, n3, e5.timeZone);
    return { localStack: [], isAsync: n3, moduleFactory: p3, moduleFactoryMap: w2, mangleMap: this.mangles, moduleSingletons: {}, exports: S2, gdefs: {}, exportmangle: v2, spatialReference: t7, globalScope: o3, abortSignal: void 0 === e5.abortSignal || null === e5.abortSignal ? { aborted: false } : e5.abortSignal, localScope: null, services: e5.services, console: e5.console ?? Ne, lrucache: e5.lrucache, timeZone: e5.timeZone ?? null, interceptor: e5.interceptor, symbols: { symbolCounter: 0 }, depthCounter: { depth: 1 } };
  } };
  return new Function("context", "spatialReference", u3).bind(x3);
}
async function Re() {
  return Ee$1([await import("./chunk-e6Er9YHc.js")], "async"), true;
}
class Ue extends s$a {
  constructor(e4) {
    super(null), this.moduleContext = e4;
  }
  hasGlobal(e4) {
    return void 0 === this.moduleContext.exports[e4] && (e4 = e4.toLowerCase()), void 0 !== this.moduleContext.exports[e4];
  }
  setGlobal(e4, n3) {
    const t6 = this.moduleContext.globalScope, r3 = e4.toLowerCase();
    if (v$4(n3))
      throw new a$5(null, r$5.AssignModuleFunction, null);
    t6[this.moduleContext.exportmangle[r3]] = n3;
  }
  global(e4) {
    const n3 = this.moduleContext.globalScope;
    e4 = e4.toLowerCase();
    const t6 = n3[this.moduleContext.exportmangle[e4]];
    if (void 0 === t6)
      throw new a$5(null, r$5.InvalidIdentifier, null);
    if (v$4(t6) && !(t6 instanceof s$7)) {
      const o3 = new s$7();
      return o3.fn = t6, o3.parameterEvaluator = q$2, o3.context = this.moduleContext, n3[this.moduleContext.exportmangle[e4]] = o3, o3;
    }
    return t6;
  }
}
function De(e4, t6, o3 = false) {
  const l2 = { isAsync: o3, moduleFactory: t6.moduleFactory, moduleFactoryMap: {}, libraryResolver: new s$9(null, e4.loadedModules), globalScope: _e(t6.vars, o3 ? Ce$1 : xe$1, t6.customfunctions), customfunctions: t6.customfunctions, localScope: null, mangleMap: {}, undeclaredGlobalsInFunctions: /* @__PURE__ */ new Map(), depthCounter: { depth: 1 }, exports: {}, console: Ne, lrucache: t6.lrucache, timeZone: t6.timeZone ?? null, interceptor: t6.interceptor, services: t6.services, symbols: { symbolCounter: 0 } };
  let r3 = W$3(l2, e4);
  "" === r3 && (r3 = "lc.voidOperation; ");
  let a3 = "";
  a3 = o3 ? "var runtimeCtx=this.prepare(context, true);\n var lc = this.lc;  var lang = this.lang; var gscope=runtimeCtx.globalScope; \nreturn lang.__awaiter(this, void 0, void 0, function* () {\n\n function mainBody() {\n var lastStatement=lc.voidOperation;\n return lang.__awaiter(this, void 0, void 0, function* () {\n" + r3 + "\n return lastStatement; }); } \n yield mainBody(); \n return this.prepareModule(runtimeCtx); }); " : "var runtimeCtx=this.prepare(context, false);\n var lc = this.lc;  var lang = this.lang; var gscope=runtimeCtx.globalScope; \n function mainBody() {\n var lastStatement=lc.voidOperation;\n " + r3 + "\n return lastStatement; } \n mainBody(); \n return this.prepareModule(runtimeCtx); ";
  const s6 = l2.moduleFactory, i4 = l2.moduleFactoryMap, c2 = l2.exports, u3 = {};
  for (const n3 in c2)
    u3[n3] = void 0 !== l2.mangleMap[n3] ? l2.mangleMap[n3] : n3;
  const p3 = { lc: We, lang: je, mangles: l2.mangleMap, prepareModule: (e5) => new Ue(e5), prepare(e5, n3) {
    let t7 = e5.spatialReference;
    null == t7 && (t7 = new f$5({ wkid: 102100 }));
    const o4 = Oe(e5.vars, e5.customfunctions, n3, e5.timeZone);
    return { localStack: [], isAsync: n3, exports: c2, exportmangle: u3, gdefs: {}, moduleFactory: s6, moduleFactoryMap: i4, moduleSingletons: e5.moduleSingletons, mangleMap: this.mangles, spatialReference: t7, globalScope: o4, abortSignal: void 0 === e5.abortSignal || null === e5.abortSignal ? { aborted: false } : e5.abortSignal, localScope: null, services: e5.services, console: e5.console ?? Ne, lrucache: e5.lrucache, timeZone: e5.timeZone ?? null, interceptor: e5.interceptor, symbols: { symbolCounter: 0 }, depthCounter: e5.depthCounter };
  } };
  return new Function("context", "spatialReference", a3).bind(p3);
}
var e$2, t$1;
!function(e4) {
  e4.Break = "break", e4.Continue = "continue", e4.Else = "else", e4.False = "false", e4.For = "for", e4.From = "from", e4.Function = "function", e4.If = "if", e4.Import = "import", e4.Export = "export", e4.In = "in", e4.Null = "null", e4.Return = "return", e4.True = "true", e4.Var = "var", e4.While = "while";
}(e$2 || (e$2 = {})), function(e4) {
  e4.AssignmentExpression = "AssignmentExpression", e4.ArrayExpression = "ArrayExpression", e4.BlockComment = "BlockComment", e4.BlockStatement = "BlockStatement", e4.BinaryExpression = "BinaryExpression", e4.BreakStatement = "BreakStatement", e4.CallExpression = "CallExpression", e4.ContinueStatement = "ContinueStatement", e4.EmptyStatement = "EmptyStatement", e4.ExpressionStatement = "ExpressionStatement", e4.ExportNamedDeclaration = "ExportNamedDeclaration", e4.ExportSpecifier = "ExportSpecifier", e4.ForStatement = "ForStatement", e4.ForInStatement = "ForInStatement", e4.FunctionDeclaration = "FunctionDeclaration", e4.Identifier = "Identifier", e4.IfStatement = "IfStatement", e4.ImportDeclaration = "ImportDeclaration", e4.ImportDefaultSpecifier = "ImportDefaultSpecifier", e4.LineComment = "LineComment", e4.Literal = "Literal", e4.LogicalExpression = "LogicalExpression", e4.MemberExpression = "MemberExpression", e4.ObjectExpression = "ObjectExpression", e4.Program = "Program", e4.Property = "Property", e4.ReturnStatement = "ReturnStatement", e4.TemplateElement = "TemplateElement", e4.TemplateLiteral = "TemplateLiteral", e4.UnaryExpression = "UnaryExpression", e4.UpdateExpression = "UpdateExpression", e4.VariableDeclaration = "VariableDeclaration", e4.VariableDeclarator = "VariableDeclarator", e4.WhileStatement = "WhileStatement";
}(t$1 || (t$1 = {}));
const n$1 = ["++", "--"], r$1 = ["-", "+", "!", "~"], i$1 = ["=", "/=", "*=", "%=", "+=", "-="], a2 = ["||", "&&"], o$2 = ["|", "&", ">>", "<<", ">>>", "^", "==", "!=", "<", "<=", ">", ">=", "+", "-", "*", "/", "%"], c = { "||": 1, "&&": 2, "|": 3, "^": 4, "&": 5, "==": 6, "!=": 6, "<": 7, ">": 7, "<=": 7, ">=": 7, "<<": 8, ">>": 8, ">>>": 8, "+": 9, "-": 9, "*": 10, "/": 10, "%": 10 };
var l$2;
!function(e4) {
  e4[e4.Unknown = 0] = "Unknown", e4[e4.BooleanLiteral = 1] = "BooleanLiteral", e4[e4.EOF = 2] = "EOF", e4[e4.Identifier = 3] = "Identifier", e4[e4.Keyword = 4] = "Keyword", e4[e4.NullLiteral = 5] = "NullLiteral", e4[e4.NumericLiteral = 6] = "NumericLiteral", e4[e4.Punctuator = 7] = "Punctuator", e4[e4.StringLiteral = 8] = "StringLiteral", e4[e4.Template = 10] = "Template";
}(l$2 || (l$2 = {}));
const s$2 = ["Unknown", "Boolean", "<end>", "Identifier", "Keyword", "Null", "Numeric", "Punctuator", "String", "RegularExpression", "Template"];
var p2;
!function(e4) {
  e4.InvalidModuleUri = "InvalidModuleUri", e4.ForInOfLoopInitializer = "ForInOfLoopInitializer", e4.IdentiferExpected = "IdentiferExpected", e4.InvalidEscapedReservedWord = "InvalidEscapedReservedWord", e4.InvalidExpression = "InvalidExpression", e4.InvalidFunctionIdentifier = "InvalidFunctionIdentifier", e4.InvalidHexEscapeSequence = "InvalidHexEscapeSequence", e4.InvalidLeftHandSideInAssignment = "InvalidLeftHandSideInAssignment", e4.InvalidLeftHandSideInForIn = "InvalidLeftHandSideInForIn", e4.InvalidTemplateHead = "InvalidTemplateHead", e4.InvalidVariableAssignment = "InvalidVariableAssignment", e4.KeyMustBeString = "KeyMustBeString", e4.NoFunctionInsideBlock = "NoFunctionInsideBlock", e4.NoFunctionInsideFunction = "NoFunctionInsideFunction", e4.ModuleExportRootOnly = "ModuleExportRootOnly", e4.ModuleImportRootOnly = "ModuleImportRootOnly", e4.PunctuatorExpected = "PunctuatorExpected", e4.TemplateOctalLiteral = "TemplateOctalLiteral", e4.UnexpectedBoolean = "UnexpectedBoolean", e4.UnexpectedEndOfScript = "UnexpectedEndOfScript", e4.UnexpectedIdentifier = "UnexpectedIdentifier", e4.UnexpectedKeyword = "UnexpectedKeyword", e4.UnexpectedNull = "UnexpectedNull", e4.UnexpectedNumber = "UnexpectedNumber", e4.UnexpectedPunctuator = "UnexpectedPunctuator", e4.UnexpectedString = "UnexpectedString", e4.UnexpectedTemplate = "UnexpectedTemplate", e4.UnexpectedToken = "UnexpectedToken";
}(p2 || (p2 = {}));
const d$1 = { [p2.InvalidModuleUri]: "Module uri must be a text literal.", [p2.ForInOfLoopInitializer]: "for-in loop variable declaration may not have an initializer.", [p2.IdentiferExpected]: "'${value}' is an invalid identifier.", [p2.InvalidEscapedReservedWord]: "Keyword cannot contain escaped characters.", [p2.InvalidExpression]: "Invalid expression.", [p2.InvalidFunctionIdentifier]: "'${value}' is an invalid function identifier.", [p2.InvalidHexEscapeSequence]: "Invalid hexadecimal escape sequence.", [p2.InvalidLeftHandSideInAssignment]: "Invalid left-hand side in assignment.", [p2.InvalidLeftHandSideInForIn]: "Invalid left-hand side in for-in.", [p2.InvalidTemplateHead]: "Invalid template structure.", [p2.InvalidVariableAssignment]: "Invalid variable assignment.", [p2.KeyMustBeString]: "Object property keys must be a word starting with a letter.", [p2.NoFunctionInsideBlock]: "Functions cannot be declared inside of code blocks.", [p2.NoFunctionInsideFunction]: "Functions cannot be declared inside another function.", [p2.ModuleExportRootOnly]: "Module exports cannot be declared inside of code blocks.", [p2.ModuleImportRootOnly]: "Module import cannot be declared inside of code blocks.", [p2.PunctuatorExpected]: "'${value}' expected.", [p2.TemplateOctalLiteral]: "Octal literals are not allowed in template literals.", [p2.UnexpectedBoolean]: "Unexpected boolean literal.", [p2.UnexpectedEndOfScript]: "Unexpected end of Arcade expression.", [p2.UnexpectedIdentifier]: "Unexpected identifier.", [p2.UnexpectedKeyword]: "Unexpected keyword.", [p2.UnexpectedNull]: "Unexpected null literal.", [p2.UnexpectedNumber]: "Unexpected number.", [p2.UnexpectedPunctuator]: "Unexpected ponctuator.", [p2.UnexpectedString]: "Unexpected text literal.", [p2.UnexpectedTemplate]: "Unexpected quasi '${value}'.", [p2.UnexpectedToken]: "Unexpected token '${value}'." };
let u$2 = class u extends Error {
  constructor({ code: e4, index: t6, line: n3, column: r3, len: i4 = 0, description: a3, data: o3 }) {
    super(`${a3 ?? e4}`), this.declaredRootClass = "esri.arcade.lib.parsingerror", this.name = "ParsingError", this.code = e4, this.index = t6, this.line = n3, this.column = r3, this.len = i4, this.data = o3, this.description = a3, this.range = { start: { line: n3, column: r3 - 1 }, end: { line: n3, column: r3 + i4 } }, Error.captureStackTrace?.(this, u);
  }
};
function m$1(e4) {
  return e4?.type === t$1.Program;
}
function f$1(e4) {
  return e4?.type === t$1.BlockStatement;
}
function I$2(e4) {
  return e4?.type === t$1.BlockComment;
}
function S(e4) {
  return e4?.type === t$1.EmptyStatement;
}
function V$3(e4) {
  return e4?.type === t$1.VariableDeclarator;
}
function i3(t6, n3) {
  return !!n3 && (n3.loc.end.line === t6.loc.start.line && n3.loc.end.column <= t6.loc.start.column);
}
function m(t6, n3) {
  return t6.range[0] >= n3.range[0] && t6.range[1] <= n3.range[1];
}
let o$1 = class o {
  constructor() {
    this.comments = [], this._nodeStack = [], this._newComments = [];
  }
  insertInnerComments(n3) {
    if (!f$1(n3) || 0 !== n3.body.length)
      return;
    const e4 = [];
    for (let t6 = this._newComments.length - 1; t6 >= 0; --t6) {
      const s6 = this._newComments[t6];
      n3.range[1] >= s6.range[0] && (e4.unshift(s6), this._newComments.splice(t6, 1));
    }
    e4.length && (n3.innerComments = e4);
  }
  attachTrailingComments(n3) {
    if (!n3)
      return;
    const e4 = this._nodeStack[this._nodeStack.length - 1];
    if (f$1(n3) && m(e4, n3))
      for (let t6 = this._newComments.length - 1; t6 >= 0; --t6) {
        const s7 = this._newComments[t6];
        m(s7, n3) && (e4.trailingComments = [...e4.trailingComments ?? [], s7], this._newComments.splice(t6, 1));
      }
    let s6 = [];
    if (this._newComments.length > 0)
      for (let t6 = this._newComments.length - 1; t6 >= 0; --t6) {
        const m2 = this._newComments[t6];
        i3(m2, e4) ? (e4.trailingComments = [...e4.trailingComments ?? [], m2], this._newComments.splice(t6, 1)) : i3(m2, n3) && (s6.unshift(m2), this._newComments.splice(t6, 1));
      }
    if (e4?.trailingComments) {
      i3(e4.trailingComments[0], n3) && (s6 = [...s6, ...e4.trailingComments], delete e4.trailingComments);
    }
    s6.length > 0 && (n3.trailingComments = s6);
  }
  attachLeadingComments(t6) {
    if (!t6)
      return;
    let s6;
    for (; this._nodeStack.length > 0; ) {
      const n3 = this._nodeStack[this._nodeStack.length - 1];
      if (!(t6.range[0] <= n3.range[0]))
        break;
      s6 = n3, this._nodeStack.pop();
    }
    const i4 = [], m2 = [];
    if (s6) {
      for (let o3 = (s6.leadingComments?.length ?? 0) - 1; o3 >= 0; --o3) {
        const l2 = s6.leadingComments[o3];
        t6.range[0] >= l2.range[1] ? (i4.unshift(l2), s6.leadingComments.splice(o3, 1)) : V$3(t6) && !I$2(l2) && (m2.unshift(l2), s6.leadingComments.splice(o3, 1));
      }
      return 0 === s6.leadingComments?.length && delete s6.leadingComments, i4.length && (t6.leadingComments = i4), void (m2.length && (t6.trailingComments = [...m2, ...t6.trailingComments ?? []]));
    }
    for (let n3 = this._newComments.length - 1; n3 >= 0; --n3) {
      const e4 = this._newComments[n3];
      t6.range[0] >= e4.range[0] && (i4.unshift(e4), this._newComments.splice(n3, 1));
    }
    i4.length && (t6.leadingComments = i4);
  }
  attachComments(t6) {
    if (m$1(t6) && t6.body.length > 0) {
      const n3 = this._nodeStack[this._nodeStack.length - 1];
      return n3 ? (n3.trailingComments = [...n3.trailingComments ?? [], ...this._newComments], this._newComments.length = 0, void this._nodeStack.pop()) : (t6.trailingComments = [...this._newComments], void (this._newComments.length = 0));
    }
    this.attachTrailingComments(t6), this.attachLeadingComments(t6), this.insertInnerComments(t6), this._nodeStack.push(t6);
  }
  collectComment(t6) {
    this.comments.push(t6), this._newComments.push(t6);
  }
};
function o2(t6, o3) {
  const e4 = d$1[t6];
  return o3 ? e4.replaceAll(/\${(.*?)}/g, (r3, t7) => o3[t7]?.toString() ?? "") : e4;
}
let e$1 = class e2 {
  constructor(r3 = false) {
    this.tolerant = r3, this.errors = [];
  }
  recordError(r3) {
    this.errors.push(r3);
  }
  tolerate(r3) {
    if (!this.tolerant)
      throw r3;
    this.recordError(r3);
  }
  throwError(r3) {
    throw r3.description = r3.description ?? o2(r3.code, r3.data), new u$2(r3);
  }
  tolerateError(r3) {
    r3.description = r3.description ?? o2(r3.code, r3.data);
    const e4 = new u$2(r3);
    if (!this.tolerant)
      throw e4;
    this.recordError(e4);
  }
};
function r2(r3, o3) {
  if (!r3)
    throw new Error("ASSERT: " + o3);
}
const u$1 = { NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB67\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDEC0-\uDEEB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/, NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u07FD\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D3-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u09FE\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CD0-\u1CD2\u1CD4-\u1CFA\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB67\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD27\uDD30-\uDD39\uDF00-\uDF1C\uDF27\uDF30-\uDF50\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD44-\uDD46\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDC9-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3B-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5E\uDC5F\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDC00-\uDC3A\uDCA0-\uDCE9\uDCFF\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE1\uDDE3\uDDE4\uDE00-\uDE3E\uDE47\uDE50-\uDE99\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4B\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/ }, D$2 = { fromCodePoint: (u3) => u3 < 65536 ? String.fromCharCode(u3) : String.fromCharCode(55296 + (u3 - 65536 >> 10)) + String.fromCharCode(56320 + (u3 - 65536 & 1023)), isWhiteSpace: (u3) => 32 === u3 || 9 === u3 || 11 === u3 || 12 === u3 || 160 === u3 || u3 >= 5760 && [5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279].includes(u3), isLineTerminator: (u3) => 10 === u3 || 13 === u3 || 8232 === u3 || 8233 === u3, isIdentifierStart: (F2) => 36 === F2 || 95 === F2 || F2 >= 65 && F2 <= 90 || F2 >= 97 && F2 <= 122 || 92 === F2 || F2 >= 128 && u$1.NonAsciiIdentifierStart.test(D$2.fromCodePoint(F2)), isIdentifierPart: (F2) => 36 === F2 || 95 === F2 || F2 >= 65 && F2 <= 90 || F2 >= 97 && F2 <= 122 || F2 >= 48 && F2 <= 57 || 92 === F2 || F2 >= 128 && u$1.NonAsciiIdentifierPart.test(D$2.fromCodePoint(F2)), isDecimalDigit: (u3) => u3 >= 48 && u3 <= 57, isHexDigit: (u3) => u3 >= 48 && u3 <= 57 || u3 >= 65 && u3 <= 70 || u3 >= 97 && u3 <= 102, isOctalDigit: (u3) => u3 >= 48 && u3 <= 55 };
function d(e4) {
  return "0123456789abcdef".indexOf(e4.toLowerCase());
}
function l$1(e4) {
  return "01234567".indexOf(e4);
}
const u2 = [[], [], []];
n$1.forEach((e4) => u2[e4.length - 1].push(e4)), r$1.forEach((e4) => u2[e4.length - 1].push(e4)), a2.forEach((e4) => u2[e4.length - 1].push(e4)), i$1.forEach((e4) => u2[e4.length - 1].push(e4)), o$2.forEach((e4) => u2[e4.length - 1].push(e4));
let x$1 = class x {
  constructor(e4, t6) {
    this.source = e4, this.errorHandler = t6, this._length = e4.length, this.index = 0, this.lineNumber = 1, this.lineStart = 0, this.curlyStack = [];
  }
  saveState() {
    return { index: this.index, lineNumber: this.lineNumber, lineStart: this.lineStart, curlyStack: this.curlyStack.slice() };
  }
  restoreState(e4) {
    this.index = e4.index, this.lineNumber = e4.lineNumber, this.lineStart = e4.lineStart, this.curlyStack = e4.curlyStack;
  }
  eof() {
    return this.index >= this._length;
  }
  throwUnexpectedToken(e4 = p2.UnexpectedToken) {
    this.errorHandler.throwError({ code: e4, index: this.index, line: this.lineNumber, column: this.index - this.lineStart + 1 });
  }
  tolerateUnexpectedToken(e4 = p2.UnexpectedToken) {
    this.errorHandler.tolerateError({ code: e4, index: this.index, line: this.lineNumber, column: this.index - this.lineStart + 1 });
  }
  skipSingleLineComment(e4) {
    const i4 = [], s6 = this.index - e4, n3 = { start: { line: this.lineNumber, column: this.index - this.lineStart - e4 }, end: { line: 0, column: 0 } };
    for (; !this.eof(); ) {
      const r3 = this.source.charCodeAt(this.index);
      if (++this.index, D$2.isLineTerminator(r3)) {
        if (n3) {
          n3.end = { line: this.lineNumber, column: this.index - this.lineStart - 1 };
          const t6 = { multiLine: false, start: s6 + e4, end: this.index - 1, range: [s6, this.index - 1], loc: n3 };
          i4.push(t6);
        }
        return 13 === r3 && 10 === this.source.charCodeAt(this.index) && ++this.index, ++this.lineNumber, this.lineStart = this.index, i4;
      }
    }
    if (n3) {
      n3.end = { line: this.lineNumber, column: this.index - this.lineStart };
      const t6 = { multiLine: false, start: s6 + e4, end: this.index, range: [s6, this.index], loc: n3 };
      i4.push(t6);
    }
    return i4;
  }
  skipMultiLineComment() {
    const e4 = [], i4 = this.index - 2, s6 = { start: { line: this.lineNumber, column: this.index - this.lineStart - 2 }, end: { line: 0, column: 0 } };
    for (; !this.eof(); ) {
      const n3 = this.source.charCodeAt(this.index);
      if (D$2.isLineTerminator(n3))
        13 === n3 && 10 === this.source.charCodeAt(this.index + 1) && ++this.index, ++this.lineNumber, ++this.index, this.lineStart = this.index;
      else if (42 === n3) {
        if (47 === this.source.charCodeAt(this.index + 1)) {
          if (this.index += 2, s6) {
            s6.end = { line: this.lineNumber, column: this.index - this.lineStart };
            const t6 = { multiLine: true, start: i4 + 2, end: this.index - 2, range: [i4, this.index], loc: s6 };
            e4.push(t6);
          }
          return e4;
        }
        ++this.index;
      } else
        ++this.index;
    }
    if (s6) {
      s6.end = { line: this.lineNumber, column: this.index - this.lineStart };
      const t6 = { multiLine: true, start: i4 + 2, end: this.index, range: [i4, this.index], loc: s6 };
      e4.push(t6);
    }
    return this.tolerateUnexpectedToken(), e4;
  }
  scanComments() {
    let e4 = [];
    for (; !this.eof(); ) {
      let i4 = this.source.charCodeAt(this.index);
      if (D$2.isWhiteSpace(i4))
        ++this.index;
      else if (D$2.isLineTerminator(i4))
        ++this.index, 13 === i4 && 10 === this.source.charCodeAt(this.index) && ++this.index, ++this.lineNumber, this.lineStart = this.index;
      else {
        if (47 !== i4)
          break;
        if (i4 = this.source.charCodeAt(this.index + 1), 47 === i4) {
          this.index += 2;
          const t6 = this.skipSingleLineComment(2);
          e4 = [...e4, ...t6];
        } else {
          if (42 !== i4)
            break;
          {
            this.index += 2;
            const t6 = this.skipMultiLineComment();
            e4 = [...e4, ...t6];
          }
        }
      }
    }
    return e4;
  }
  isKeyword(e4) {
    switch ((e4 = e4.toLowerCase()).length) {
      case 2:
        return e4 === e$2.If || e4 === e$2.In;
      case 3:
        return e4 === e$2.Var || e4 === e$2.For;
      case 4:
        return e4 === e$2.Else;
      case 5:
        return e4 === e$2.Break || e4 === e$2.While;
      case 6:
        return e4 === e$2.Return || e4 === e$2.Import || e4 === e$2.Export;
      case 8:
        return e4 === e$2.Function || e4 === e$2.Continue;
      default:
        return false;
    }
  }
  codePointAt(e4) {
    let t6 = this.source.charCodeAt(e4);
    if (t6 >= 55296 && t6 <= 56319) {
      const i4 = this.source.charCodeAt(e4 + 1);
      if (i4 >= 56320 && i4 <= 57343) {
        t6 = 1024 * (t6 - 55296) + i4 - 56320 + 65536;
      }
    }
    return t6;
  }
  scanHexEscape(e4) {
    const i4 = "u" === e4 ? 4 : 2;
    let s6 = 0;
    for (let n3 = 0; n3 < i4; ++n3) {
      if (this.eof() || !D$2.isHexDigit(this.source.charCodeAt(this.index)))
        return null;
      s6 = 16 * s6 + d(this.source[this.index++]);
    }
    return String.fromCharCode(s6);
  }
  scanUnicodeCodePointEscape() {
    let e4 = this.source[this.index], i4 = 0;
    for ("}" === e4 && this.throwUnexpectedToken(); !this.eof() && (e4 = this.source[this.index++], D$2.isHexDigit(e4.charCodeAt(0))); )
      i4 = 16 * i4 + d(e4);
    return (i4 > 1114111 || "}" !== e4) && this.throwUnexpectedToken(), D$2.fromCodePoint(i4);
  }
  getIdentifier() {
    const e4 = this.index++;
    for (; !this.eof(); ) {
      const i4 = this.source.charCodeAt(this.index);
      if (92 === i4)
        return this.index = e4, this.getComplexIdentifier();
      if (i4 >= 55296 && i4 < 57343)
        return this.index = e4, this.getComplexIdentifier();
      if (!D$2.isIdentifierPart(i4))
        break;
      ++this.index;
    }
    return this.source.slice(e4, this.index);
  }
  getComplexIdentifier() {
    let e4, i4 = this.codePointAt(this.index), s6 = D$2.fromCodePoint(i4);
    for (this.index += s6.length, 92 === i4 && (117 !== this.source.charCodeAt(this.index) && this.throwUnexpectedToken(), ++this.index, "{" === this.source[this.index] ? (++this.index, e4 = this.scanUnicodeCodePointEscape()) : (e4 = this.scanHexEscape("u"), null !== e4 && "\\" !== e4 && D$2.isIdentifierStart(e4.charCodeAt(0)) || this.throwUnexpectedToken()), s6 = e4); !this.eof() && (i4 = this.codePointAt(this.index), D$2.isIdentifierPart(i4)); )
      e4 = D$2.fromCodePoint(i4), s6 += e4, this.index += e4.length, 92 === i4 && (s6 = s6.substring(0, s6.length - 1), 117 !== this.source.charCodeAt(this.index) && this.throwUnexpectedToken(), ++this.index, "{" === this.source[this.index] ? (++this.index, e4 = this.scanUnicodeCodePointEscape()) : (e4 = this.scanHexEscape("u"), null !== e4 && "\\" !== e4 && D$2.isIdentifierPart(e4.charCodeAt(0)) || this.throwUnexpectedToken()), s6 += e4);
    return s6;
  }
  octalToDecimal(e4) {
    let i4 = "0" !== e4, s6 = l$1(e4);
    return !this.eof() && D$2.isOctalDigit(this.source.charCodeAt(this.index)) && (i4 = true, s6 = 8 * s6 + l$1(this.source[this.index++]), "0123".includes(e4) && !this.eof() && D$2.isOctalDigit(this.source.charCodeAt(this.index)) && (s6 = 8 * s6 + l$1(this.source[this.index++]))), { code: s6, octal: i4 };
  }
  scanIdentifier() {
    let e4;
    const t6 = this.index, i4 = 92 === this.source.charCodeAt(t6) ? this.getComplexIdentifier() : this.getIdentifier();
    if (e4 = 1 === i4.length ? l$2.Identifier : this.isKeyword(i4) ? l$2.Keyword : i4.toLowerCase() === e$2.Null ? l$2.NullLiteral : i4.toLowerCase() === e$2.True || i4.toLowerCase() === e$2.False ? l$2.BooleanLiteral : l$2.Identifier, e4 !== l$2.Identifier && t6 + i4.length !== this.index) {
      const e5 = this.index;
      this.index = t6, this.tolerateUnexpectedToken(p2.InvalidEscapedReservedWord), this.index = e5;
    }
    return { type: e4, value: i4, lineNumber: this.lineNumber, lineStart: this.lineStart, start: t6, end: this.index };
  }
  scanPunctuator() {
    const e4 = this.index;
    let t6 = this.source[this.index];
    switch (t6) {
      case "(":
      case "{":
        "{" === t6 && this.curlyStack.push("{"), ++this.index;
        break;
      case ".":
      case ")":
      case ";":
      case ",":
      case "[":
      case "]":
      case ":":
      case "?":
      case "~":
        ++this.index;
        break;
      case "}":
        ++this.index, this.curlyStack.pop();
        break;
      default:
        for (let e5 = u2.length; e5 > 0; e5--)
          if (t6 = this.source.substring(this.index, this.index + e5), u2[e5 - 1].includes(t6)) {
            this.index += e5;
            break;
          }
    }
    return this.index === e4 && this.throwUnexpectedToken(), { type: l$2.Punctuator, value: t6, lineNumber: this.lineNumber, lineStart: this.lineStart, start: e4, end: this.index };
  }
  scanHexLiteral(e4) {
    let i4 = "";
    for (; !this.eof() && D$2.isHexDigit(this.source.charCodeAt(this.index)); )
      i4 += this.source[this.index++];
    return 0 === i4.length && this.throwUnexpectedToken(), D$2.isIdentifierStart(this.source.charCodeAt(this.index)) && this.throwUnexpectedToken(), { type: l$2.NumericLiteral, value: parseInt("0x" + i4, 16), lineNumber: this.lineNumber, lineStart: this.lineStart, start: e4, end: this.index };
  }
  scanBinaryLiteral(e4) {
    let i4 = "";
    for (; !this.eof(); ) {
      const e5 = this.source[this.index];
      if ("0" !== e5 && "1" !== e5)
        break;
      i4 += this.source[this.index++];
    }
    if (0 === i4.length && this.throwUnexpectedToken(), !this.eof()) {
      const e5 = this.source.charCodeAt(this.index);
      (D$2.isIdentifierStart(e5) || D$2.isDecimalDigit(e5)) && this.throwUnexpectedToken();
    }
    return { type: l$2.NumericLiteral, value: parseInt(i4, 2), lineNumber: this.lineNumber, lineStart: this.lineStart, start: e4, end: this.index };
  }
  scanOctalLiteral(e4, i4) {
    let s6 = "", n3 = false;
    for (D$2.isOctalDigit(e4.charCodeAt(0)) ? (n3 = true, s6 = "0" + this.source[this.index++]) : ++this.index; !this.eof() && D$2.isOctalDigit(this.source.charCodeAt(this.index)); )
      s6 += this.source[this.index++];
    return n3 || 0 !== s6.length || this.throwUnexpectedToken(), (D$2.isIdentifierStart(this.source.charCodeAt(this.index)) || D$2.isDecimalDigit(this.source.charCodeAt(this.index))) && this.throwUnexpectedToken(), { type: l$2.NumericLiteral, value: parseInt(s6, 8), lineNumber: this.lineNumber, lineStart: this.lineStart, start: i4, end: this.index };
  }
  scanNumericLiteral() {
    const i4 = this.index;
    let s6 = this.source[i4];
    r2(D$2.isDecimalDigit(s6.charCodeAt(0)) || "." === s6, "Numeric literal must start with a decimal digit or a decimal point");
    let n3 = "";
    if ("." !== s6) {
      if (n3 = this.source[this.index++], s6 = this.source[this.index], "0" === n3) {
        if ("x" === s6 || "X" === s6)
          return ++this.index, this.scanHexLiteral(i4);
        if ("b" === s6 || "B" === s6)
          return ++this.index, this.scanBinaryLiteral(i4);
        if ("o" === s6 || "O" === s6)
          return this.scanOctalLiteral(s6, i4);
      }
      for (; D$2.isDecimalDigit(this.source.charCodeAt(this.index)); )
        n3 += this.source[this.index++];
      s6 = this.source[this.index];
    }
    if ("." === s6) {
      for (n3 += this.source[this.index++]; D$2.isDecimalDigit(this.source.charCodeAt(this.index)); )
        n3 += this.source[this.index++];
      s6 = this.source[this.index];
    }
    if ("e" === s6 || "E" === s6)
      if (n3 += this.source[this.index++], s6 = this.source[this.index], "+" !== s6 && "-" !== s6 || (n3 += this.source[this.index++]), D$2.isDecimalDigit(this.source.charCodeAt(this.index)))
        for (; D$2.isDecimalDigit(this.source.charCodeAt(this.index)); )
          n3 += this.source[this.index++];
      else
        this.throwUnexpectedToken();
    return D$2.isIdentifierStart(this.source.charCodeAt(this.index)) && this.throwUnexpectedToken(), { type: l$2.NumericLiteral, value: parseFloat(n3), lineNumber: this.lineNumber, lineStart: this.lineStart, start: i4, end: this.index };
  }
  scanStringLiteral() {
    const i4 = this.index;
    let s6 = this.source[i4];
    r2("'" === s6 || '"' === s6, "String literal must starts with a quote"), ++this.index;
    let n3 = false, r$12 = "";
    for (; !this.eof(); ) {
      let e4 = this.source[this.index++];
      if (e4 === s6) {
        s6 = "";
        break;
      }
      if ("\\" === e4)
        if (e4 = this.source[this.index++], e4 && D$2.isLineTerminator(e4.charCodeAt(0)))
          ++this.lineNumber, "\r" === e4 && "\n" === this.source[this.index] && ++this.index, this.lineStart = this.index;
        else
          switch (e4) {
            case "u":
              if ("{" === this.source[this.index])
                ++this.index, r$12 += this.scanUnicodeCodePointEscape();
              else {
                const t6 = this.scanHexEscape(e4);
                null === t6 && this.throwUnexpectedToken(), r$12 += t6;
              }
              break;
            case "x": {
              const t6 = this.scanHexEscape(e4);
              null === t6 && this.throwUnexpectedToken(p2.InvalidHexEscapeSequence), r$12 += t6;
              break;
            }
            case "n":
              r$12 += "\n";
              break;
            case "r":
              r$12 += "\r";
              break;
            case "t":
              r$12 += "	";
              break;
            case "b":
              r$12 += "\b";
              break;
            case "f":
              r$12 += "\f";
              break;
            case "v":
              r$12 += "\v";
              break;
            case "8":
            case "9":
              r$12 += e4, this.tolerateUnexpectedToken();
              break;
            default:
              if (e4 && D$2.isOctalDigit(e4.charCodeAt(0))) {
                const t6 = this.octalToDecimal(e4);
                n3 = t6.octal || n3, r$12 += String.fromCharCode(t6.code);
              } else
                r$12 += e4;
          }
      else {
        if (D$2.isLineTerminator(e4.charCodeAt(0)))
          break;
        r$12 += e4;
      }
    }
    return "" !== s6 && (this.index = i4, this.throwUnexpectedToken()), { type: l$2.StringLiteral, value: r$12, lineNumber: this.lineNumber, lineStart: this.lineStart, start: i4, end: this.index };
  }
  scanTemplate() {
    let e4 = "", i4 = false;
    const s6 = this.index, n3 = "`" === this.source[s6];
    let r3 = false, h3 = 2;
    for (++this.index; !this.eof(); ) {
      let s7 = this.source[this.index++];
      if ("`" === s7) {
        h3 = 1, r3 = true, i4 = true;
        break;
      }
      if ("$" !== s7)
        if ("\\" !== s7)
          D$2.isLineTerminator(s7.charCodeAt(0)) ? (++this.lineNumber, "\r" === s7 && "\n" === this.source[this.index] && ++this.index, this.lineStart = this.index, e4 += "\n") : e4 += s7;
        else if (s7 = this.source[this.index++], D$2.isLineTerminator(s7.charCodeAt(0)))
          ++this.lineNumber, "\r" === s7 && "\n" === this.source[this.index] && ++this.index, this.lineStart = this.index;
        else
          switch (s7) {
            case "n":
              e4 += "\n";
              break;
            case "r":
              e4 += "\r";
              break;
            case "t":
              e4 += "	";
              break;
            case "u":
              if ("{" === this.source[this.index])
                ++this.index, e4 += this.scanUnicodeCodePointEscape();
              else {
                const t6 = this.index, i5 = this.scanHexEscape(s7);
                null !== i5 ? e4 += i5 : (this.index = t6, e4 += s7);
              }
              break;
            case "x": {
              const t6 = this.scanHexEscape(s7);
              null === t6 && this.throwUnexpectedToken(p2.InvalidHexEscapeSequence), e4 += t6;
              break;
            }
            case "b":
              e4 += "\b";
              break;
            case "f":
              e4 += "\f";
              break;
            case "v":
              e4 += "\v";
              break;
            default:
              "0" === s7 ? (D$2.isDecimalDigit(this.source.charCodeAt(this.index)) && this.throwUnexpectedToken(p2.TemplateOctalLiteral), e4 += "\0") : D$2.isOctalDigit(s7.charCodeAt(0)) ? this.throwUnexpectedToken(p2.TemplateOctalLiteral) : e4 += s7;
          }
      else {
        if ("{" === this.source[this.index]) {
          this.curlyStack.push("${"), ++this.index, i4 = true;
          break;
        }
        e4 += s7;
      }
    }
    return i4 || this.throwUnexpectedToken(), n3 || this.curlyStack.pop(), { type: l$2.Template, value: this.source.slice(s6 + 1, this.index - h3), cooked: e4, head: n3, tail: r3, lineNumber: this.lineNumber, lineStart: this.lineStart, start: s6, end: this.index };
  }
  lex() {
    if (this.eof())
      return { type: l$2.EOF, value: "", lineNumber: this.lineNumber, lineStart: this.lineStart, start: this.index, end: this.index };
    const e4 = this.source.charCodeAt(this.index);
    return D$2.isIdentifierStart(e4) ? this.scanIdentifier() : 40 === e4 || 41 === e4 || 59 === e4 ? this.scanPunctuator() : 39 === e4 || 34 === e4 ? this.scanStringLiteral() : 46 === e4 ? D$2.isDecimalDigit(this.source.charCodeAt(this.index + 1)) ? this.scanNumericLiteral() : this.scanPunctuator() : D$2.isDecimalDigit(e4) ? this.scanNumericLiteral() : 96 === e4 || 125 === e4 && "${" === this.curlyStack[this.curlyStack.length - 1] ? this.scanTemplate() : e4 >= 55296 && e4 < 57343 && D$2.isIdentifierStart(this.codePointAt(this.index)) ? this.scanIdentifier() : this.scanPunctuator();
  }
};
var k$1, w$1;
function g$1(t6, e4 = 0) {
  let r3 = t6.start - t6.lineStart, i4 = t6.lineNumber;
  return r3 < 0 && (r3 += e4, i4--), { index: t6.start, line: i4, column: r3 };
}
function y(t6) {
  return [{ index: t6.range[0], ...t6.loc.start }, { index: t6.range[1], ...t6.loc.end }];
}
function T$3(t6) {
  return c[t6] ?? 0;
}
!function(t6) {
  t6[t6.None = 0] = "None", t6[t6.Function = 1] = "Function", t6[t6.IfClause = 2] = "IfClause", t6[t6.ForLoop = 4] = "ForLoop", t6[t6.WhileLoop = 8] = "WhileLoop";
}(k$1 || (k$1 = {})), function(t6) {
  t6[t6.AsObject = 0] = "AsObject", t6[t6.Automatic = 1] = "Automatic";
}(w$1 || (w$1 = {}));
class f {
  constructor(r3, n3 = {}, a3) {
    this.delegate = a3, this.hasLineTerminator = false, this.options = { tokens: "boolean" == typeof n3.tokens && n3.tokens, comments: "boolean" == typeof n3.comments && n3.comments, tolerant: "boolean" == typeof n3.tolerant && n3.tolerant }, this.options.comments && (this.commentHandler = new o$1()), this.errorHandler = new e$1(this.options.tolerant), this.scanner = new x$1(r3, this.errorHandler), this.context = { isAssignmentTarget: false, blockContext: k$1.None, curlyParsingType: w$1.AsObject }, this.rawToken = { type: l$2.EOF, value: "", lineNumber: this.scanner.lineNumber, lineStart: 0, start: 0, end: 0 }, this.tokens = [], this.startMarker = { index: 0, line: this.scanner.lineNumber, column: 0 }, this.endMarker = { index: 0, line: this.scanner.lineNumber, column: 0 }, this.readNextRawToken(), this.endMarker = { index: this.scanner.index, line: this.scanner.lineNumber, column: this.scanner.index - this.scanner.lineStart };
  }
  throwIfInvalidType(t6, e4, { validTypes: r3, invalidTypes: i4 }) {
    r3?.some((e5) => t6.type === e5) || i4?.some((e5) => t6.type === e5) && this.throwError(p2.InvalidExpression, e4);
  }
  throwError(t6, e4, r3 = this.endMarker) {
    const { index: i4, line: n3, column: s6 } = e4, a3 = r3.index - i4 - 1;
    this.errorHandler.throwError({ code: t6, index: i4, line: n3, column: s6 + 1, len: a3 });
  }
  tolerateError(t6, e4) {
    throw new Error("######################################### !!!");
  }
  unexpectedTokenError(t6 = {}) {
    const { rawToken: e4 } = t6;
    let i4, { code: n3, data: h3 } = t6;
    if (e4) {
      if (!n3)
        switch (e4.type) {
          case l$2.EOF:
            n3 = p2.UnexpectedEndOfScript;
            break;
          case l$2.Identifier:
            n3 = p2.UnexpectedIdentifier;
            break;
          case l$2.NumericLiteral:
            n3 = p2.UnexpectedNumber;
            break;
          case l$2.StringLiteral:
            n3 = p2.UnexpectedString;
            break;
          case l$2.Template:
            n3 = p2.UnexpectedTemplate;
        }
      i4 = e4.value.toString();
    } else
      i4 = "ILLEGAL";
    n3 = n3 ?? p2.UnexpectedToken, h3 || (h3 = { value: i4 });
    const c2 = o2(n3, h3);
    if (e4) {
      const t7 = e4.start, r3 = e4.lineNumber, i5 = e4.start - e4.lineStart + 1;
      return new u$2({ code: n3, index: t7, line: r3, column: i5, len: e4.end - e4.start - 1, data: h3, description: c2 });
    }
    const { index: p$12, line: l2 } = this.endMarker;
    return new u$2({ code: n3, index: p$12, line: l2, column: this.endMarker.column + 1, data: h3, description: c2 });
  }
  throwUnexpectedToken(t6 = {}) {
    throw t6.rawToken = t6.rawToken ?? this.rawToken, this.unexpectedTokenError(t6);
  }
  collectComments(t6) {
    const { commentHandler: e4 } = this;
    e4 && t6.length && t6.forEach((t7) => {
      const r3 = { type: t7.multiLine ? t$1.BlockComment : t$1.LineComment, value: this.getSourceValue(t7), range: t7.range, loc: t7.loc };
      e4.collectComment(r3);
    });
  }
  peekAhead(t6) {
    const e4 = () => (this.scanner.scanComments(), this.scanner.lex()), r3 = this.scanner.saveState(), i4 = t6.call(this, e4);
    return this.scanner.restoreState(r3), i4;
  }
  getSourceValue(t6) {
    return this.scanner.source.slice(t6.start, t6.end);
  }
  convertToToken(t6) {
    return { type: s$2[t6.type], value: this.getSourceValue(t6), range: [t6.start, t6.end], loc: { start: { line: this.startMarker.line, column: this.startMarker.column }, end: { line: this.scanner.lineNumber, column: this.scanner.index - this.scanner.lineStart } } };
  }
  readNextRawToken() {
    this.endMarker.index = this.scanner.index, this.endMarker.line = this.scanner.lineNumber, this.endMarker.column = this.scanner.index - this.scanner.lineStart;
    const t6 = this.rawToken;
    this.collectComments(this.scanner.scanComments()), this.scanner.index !== this.startMarker.index && (this.startMarker.index = this.scanner.index, this.startMarker.line = this.scanner.lineNumber, this.startMarker.column = this.scanner.index - this.scanner.lineStart), this.rawToken = this.scanner.lex(), this.hasLineTerminator = t6.lineNumber !== this.rawToken.lineNumber, this.options.tokens && this.rawToken.type !== l$2.EOF && this.tokens.push(this.convertToToken(this.rawToken));
  }
  captureStartMarker() {
    return { index: this.startMarker.index, line: this.startMarker.line, column: this.startMarker.column };
  }
  getItemLocation(t6) {
    return { range: [t6.index, this.endMarker.index], loc: { start: { line: t6.line, column: t6.column }, end: { line: this.endMarker.line, column: this.endMarker.column } } };
  }
  finalize(t6) {
    return (this.delegate || this.commentHandler) && (this.commentHandler?.attachComments(t6), this.delegate?.(t6)), t6;
  }
  expectPunctuator(t6) {
    const e4 = this.rawToken;
    this.matchPunctuator(t6) ? this.readNextRawToken() : this.throwUnexpectedToken({ rawToken: e4, code: p2.PunctuatorExpected, data: { value: t6 } });
  }
  expectKeyword(t6) {
    this.rawToken.type !== l$2.Keyword || this.rawToken.value.toLowerCase() !== t6 ? this.throwUnexpectedToken({ rawToken: this.rawToken }) : this.readNextRawToken();
  }
  expectContextualKeyword(t6) {
    this.rawToken.type !== l$2.Identifier || this.rawToken.value.toLowerCase() !== t6 ? this.throwUnexpectedToken({ rawToken: this.rawToken }) : this.readNextRawToken();
  }
  matchKeyword(t6) {
    return this.rawToken.type === l$2.Keyword && this.rawToken.value.toLowerCase() === t6;
  }
  matchContextualKeyword(t6) {
    return this.rawToken.type === l$2.Identifier && this.rawToken.value === t6;
  }
  matchPunctuator(t6) {
    return this.rawToken.type === l$2.Punctuator && this.rawToken.value === t6;
  }
  getMatchingPunctuator(t6) {
    if ("string" == typeof t6 && (t6 = t6.split("")), this.rawToken.type === l$2.Punctuator && t6?.length)
      return t6.find(this.matchPunctuator, this);
  }
  isolateCoverGrammar(t6) {
    const e4 = this.context.isAssignmentTarget;
    this.context.isAssignmentTarget = true;
    const r3 = t6.call(this);
    return this.context.isAssignmentTarget = e4, r3;
  }
  inheritCoverGrammar(t6) {
    const e4 = this.context.isAssignmentTarget;
    this.context.isAssignmentTarget = true;
    const r3 = t6.call(this);
    return this.context.isAssignmentTarget = this.context.isAssignmentTarget && e4, r3;
  }
  withBlockContext(t6, e4) {
    const r3 = this.context.blockContext;
    this.context.blockContext = this.context.blockContext | t6;
    const i4 = this.context.curlyParsingType;
    this.context.curlyParsingType = w$1.Automatic;
    const n3 = e4.call(this);
    return this.context.blockContext = r3, this.context.curlyParsingType = i4, n3;
  }
  consumeSemicolon() {
    if (this.matchPunctuator(";"))
      this.readNextRawToken();
    else if (!this.hasLineTerminator)
      return this.rawToken.type === l$2.EOF || this.matchPunctuator("}") ? (this.endMarker.index = this.startMarker.index, this.endMarker.line = this.startMarker.line, void (this.endMarker.column = this.startMarker.column)) : void this.throwUnexpectedToken({ rawToken: this.rawToken });
  }
  parsePrimaryExpression() {
    const t6 = this.captureStartMarker(), e4 = this.rawToken;
    switch (e4.type) {
      case l$2.Identifier:
        return this.readNextRawToken(), this.finalize({ type: t$1.Identifier, name: e4.value, ...this.getItemLocation(t6) });
      case l$2.NumericLiteral:
      case l$2.StringLiteral:
        return this.context.isAssignmentTarget = false, this.readNextRawToken(), this.finalize({ type: t$1.Literal, value: e4.value, raw: this.getSourceValue(e4), isString: "string" == typeof e4.value, ...this.getItemLocation(t6) });
      case l$2.BooleanLiteral:
        return this.context.isAssignmentTarget = false, this.readNextRawToken(), this.finalize({ type: t$1.Literal, value: e4.value.toLowerCase() === e$2.True, raw: this.getSourceValue(e4), isString: false, ...this.getItemLocation(t6) });
      case l$2.NullLiteral:
        return this.context.isAssignmentTarget = false, this.readNextRawToken(), this.finalize({ type: t$1.Literal, value: null, raw: this.getSourceValue(e4), isString: false, ...this.getItemLocation(t6) });
      case l$2.Template:
        return this.parseTemplateLiteral();
      case l$2.Punctuator:
        switch (e4.value) {
          case "(":
            return this.inheritCoverGrammar(this.parseGroupExpression);
          case "[":
            return this.inheritCoverGrammar(this.parseArrayInitializer);
          case "{":
            return this.inheritCoverGrammar(this.parseObjectExpression);
          default:
            return this.throwUnexpectedToken({ rawToken: this.rawToken });
        }
      case l$2.Keyword:
        return this.context.isAssignmentTarget = false, this.throwUnexpectedToken({ rawToken: this.rawToken });
      default:
        return this.throwUnexpectedToken({ rawToken: this.rawToken });
    }
  }
  parseArrayInitializer() {
    const t6 = this.captureStartMarker();
    this.expectPunctuator("[");
    const e4 = [];
    for (; !this.matchPunctuator("]"); ) {
      const t7 = this.captureStartMarker();
      this.matchPunctuator(",") ? (this.readNextRawToken(), this.throwError(p2.InvalidExpression, t7)) : (e4.push(this.inheritCoverGrammar(this.parseAssignmentExpression)), this.matchPunctuator("]") || this.expectPunctuator(","));
    }
    return this.expectPunctuator("]"), this.finalize({ type: t$1.ArrayExpression, elements: e4, ...this.getItemLocation(t6) });
  }
  parseObjectPropertyKey() {
    const t6 = this.captureStartMarker(), e4 = this.rawToken;
    switch (e4.type) {
      case l$2.StringLiteral:
        return this.readNextRawToken(), this.finalize({ type: t$1.Literal, value: e4.value, raw: this.getSourceValue(e4), isString: true, ...this.getItemLocation(t6) });
      case l$2.Identifier:
      case l$2.BooleanLiteral:
      case l$2.NullLiteral:
      case l$2.Keyword:
        return this.readNextRawToken(), this.finalize({ type: t$1.Identifier, name: e4.value, ...this.getItemLocation(t6) });
      default:
        this.throwError(p2.KeyMustBeString, t6);
    }
  }
  parseObjectProperty() {
    const t6 = this.rawToken, e4 = this.captureStartMarker(), r3 = this.parseObjectPropertyKey();
    let i4 = false, n3 = null;
    return this.matchPunctuator(":") ? (this.readNextRawToken(), n3 = this.inheritCoverGrammar(this.parseAssignmentExpression)) : t6.type === l$2.Identifier ? (i4 = true, n3 = this.finalize({ type: t$1.Identifier, name: t6.value, ...this.getItemLocation(e4) })) : this.throwUnexpectedToken({ rawToken: this.rawToken }), this.finalize({ type: t$1.Property, kind: "init", key: r3, value: n3, shorthand: i4, ...this.getItemLocation(e4) });
  }
  parseObjectExpression() {
    const t6 = this.captureStartMarker();
    this.expectPunctuator("{");
    const e4 = [];
    for (; !this.matchPunctuator("}"); )
      e4.push(this.parseObjectProperty()), this.matchPunctuator("}") || this.expectPunctuator(",");
    return this.expectPunctuator("}"), this.finalize({ type: t$1.ObjectExpression, properties: e4, ...this.getItemLocation(t6) });
  }
  parseTemplateElement(t6 = false) {
    const e4 = this.rawToken;
    e4.type !== l$2.Template && this.throwUnexpectedToken({ rawToken: e4 }), t6 && !e4.head && this.throwUnexpectedToken({ code: p2.InvalidTemplateHead, rawToken: e4 });
    const r3 = this.captureStartMarker();
    this.readNextRawToken();
    const { value: i4, cooked: n3, tail: o3 } = e4, c2 = this.finalize({ type: t$1.TemplateElement, value: { raw: i4, cooked: n3 }, tail: o3, ...this.getItemLocation(r3) });
    return c2.loc.start.column++, c2.loc.end.column = c2.loc.end.column - (o3 ? 1 : 2), c2;
  }
  parseTemplateLiteral() {
    const t6 = this.captureStartMarker(), e4 = [], r3 = [];
    let i4 = this.parseTemplateElement(true);
    for (r3.push(i4); !i4.tail; )
      e4.push(this.parseExpression()), i4 = this.parseTemplateElement(), r3.push(i4);
    return this.finalize({ type: t$1.TemplateLiteral, quasis: r3, expressions: e4, ...this.getItemLocation(t6) });
  }
  parseGroupExpression() {
    this.expectPunctuator("(");
    const t6 = this.inheritCoverGrammar(this.parseAssignmentExpression);
    return this.expectPunctuator(")"), t6;
  }
  parseArguments() {
    this.expectPunctuator("(");
    const t6 = [];
    if (!this.matchPunctuator(")"))
      for (; ; ) {
        const e4 = this.isolateCoverGrammar(this.parseAssignmentExpression);
        if (t6.push(e4), this.matchPunctuator(")"))
          break;
        if (this.expectPunctuator(","), this.matchPunctuator(")"))
          break;
      }
    return this.expectPunctuator(")"), t6;
  }
  parseMemberName() {
    const t6 = this.rawToken, e4 = this.captureStartMarker();
    return this.readNextRawToken(), t6.type !== l$2.NullLiteral && t6.type !== l$2.Identifier && t6.type !== l$2.Keyword && t6.type !== l$2.BooleanLiteral && this.throwUnexpectedToken({ rawToken: t6 }), this.finalize({ type: t$1.Identifier, name: t6.value, ...this.getItemLocation(e4) });
  }
  parseLeftHandSideExpression() {
    const t6 = this.captureStartMarker();
    let e4 = this.inheritCoverGrammar(this.parsePrimaryExpression);
    const r3 = this.captureStartMarker();
    let i4;
    for (; i4 = this.getMatchingPunctuator("([."); )
      switch (i4) {
        case "(": {
          this.context.isAssignmentTarget = false, e4.type !== t$1.Identifier && e4.type !== t$1.MemberExpression && this.throwError(p2.IdentiferExpected, t6, r3);
          const i5 = this.parseArguments();
          e4 = this.finalize({ type: t$1.CallExpression, callee: e4, arguments: i5, ...this.getItemLocation(t6) });
          continue;
        }
        case "[": {
          this.context.isAssignmentTarget = true, this.expectPunctuator("[");
          const r4 = this.isolateCoverGrammar(this.parseExpression);
          this.expectPunctuator("]"), e4 = this.finalize({ type: t$1.MemberExpression, computed: true, object: e4, property: r4, ...this.getItemLocation(t6) });
          continue;
        }
        case ".": {
          this.context.isAssignmentTarget = true, this.expectPunctuator(".");
          const r4 = this.parseMemberName();
          e4 = this.finalize({ type: t$1.MemberExpression, computed: false, object: e4, property: r4, ...this.getItemLocation(t6) });
          continue;
        }
      }
    return e4;
  }
  parseUpdateExpression() {
    const t6 = this.captureStartMarker();
    let e4 = this.getMatchingPunctuator(n$1);
    if (e4) {
      this.readNextRawToken();
      const r4 = this.captureStartMarker(), i5 = this.inheritCoverGrammar(this.parseUnaryExpression);
      return i5.type !== t$1.Identifier && i5.type !== t$1.MemberExpression && i5.type !== t$1.CallExpression && this.throwError(p2.InvalidExpression, r4), this.context.isAssignmentTarget || this.tolerateError(p2.InvalidLeftHandSideInAssignment, t6), this.context.isAssignmentTarget = false, this.finalize({ type: t$1.UpdateExpression, operator: e4, argument: i5, prefix: true, ...this.getItemLocation(t6) });
    }
    const r3 = this.captureStartMarker(), i4 = this.inheritCoverGrammar(this.parseLeftHandSideExpression), n3 = this.captureStartMarker();
    return this.hasLineTerminator ? i4 : (e4 = this.getMatchingPunctuator(n$1), e4 ? (i4.type !== t$1.Identifier && i4.type !== t$1.MemberExpression && this.throwError(p2.InvalidExpression, r3, n3), this.context.isAssignmentTarget || this.tolerateError(p2.InvalidLeftHandSideInAssignment, t6), this.readNextRawToken(), this.context.isAssignmentTarget = false, this.finalize({ type: t$1.UpdateExpression, operator: e4, argument: i4, prefix: false, ...this.getItemLocation(t6) })) : i4);
  }
  parseUnaryExpression() {
    const t6 = this.getMatchingPunctuator(r$1);
    if (t6) {
      const e4 = this.captureStartMarker();
      this.readNextRawToken();
      const r3 = this.inheritCoverGrammar(this.parseUnaryExpression);
      return this.context.isAssignmentTarget = false, this.finalize({ type: t$1.UnaryExpression, operator: t6, argument: r3, prefix: true, ...this.getItemLocation(e4) });
    }
    return this.parseUpdateExpression();
  }
  parseBinaryExpression() {
    const t6 = this.rawToken;
    let e4 = this.inheritCoverGrammar(this.parseUnaryExpression);
    if (this.rawToken.type !== l$2.Punctuator)
      return e4;
    const r3 = this.rawToken.value;
    let i4 = T$3(r3);
    if (0 === i4)
      return e4;
    this.readNextRawToken(), this.context.isAssignmentTarget = false;
    const n3 = [t6, this.rawToken];
    let a3 = e4, o3 = this.inheritCoverGrammar(this.parseUnaryExpression);
    const h3 = [a3, r3, o3], c2 = [i4];
    for (; this.rawToken.type === l$2.Punctuator && (i4 = T$3(this.rawToken.value)) > 0; ) {
      for (; h3.length > 2 && i4 <= c2[c2.length - 1]; ) {
        o3 = h3.pop();
        const t7 = h3.pop();
        c2.pop(), a3 = h3.pop(), n3.pop();
        const e5 = n3[n3.length - 1], r4 = g$1(e5, e5.lineStart);
        h3.push(this.finalize(this.createBinaryOrLogicalExpression(r4, t7, a3, o3)));
      }
      h3.push(this.rawToken.value), c2.push(i4), n3.push(this.rawToken), this.readNextRawToken(), h3.push(this.inheritCoverGrammar(this.parseUnaryExpression));
    }
    let p3 = h3.length - 1;
    e4 = h3[p3];
    let l2 = n3.pop();
    for (; p3 > 1; ) {
      const t7 = n3.pop();
      if (!t7)
        break;
      const r4 = l2?.lineStart, i5 = g$1(t7, r4), s6 = h3[p3 - 1];
      e4 = this.finalize(this.createBinaryOrLogicalExpression(i5, s6, h3[p3 - 2], e4)), p3 -= 2, l2 = t7;
    }
    return e4;
  }
  createBinaryOrLogicalExpression(t6, e4, r3, i4) {
    const n3 = a2.includes(e4) ? t$1.LogicalExpression : t$1.BinaryExpression;
    return n3 === t$1.BinaryExpression || (r3.type !== t$1.AssignmentExpression && r3.type !== t$1.UpdateExpression || this.throwError(p2.InvalidExpression, ...y(r3)), i4.type !== t$1.AssignmentExpression && i4.type !== t$1.UpdateExpression || this.throwError(p2.InvalidExpression, ...y(r3))), { type: n3, operator: e4, left: r3, right: i4, ...this.getItemLocation(t6) };
  }
  parseAssignmentExpression() {
    const t6 = this.captureStartMarker(), e4 = this.inheritCoverGrammar(this.parseBinaryExpression), r3 = this.captureStartMarker(), i4 = this.getMatchingPunctuator(i$1);
    if (!i4)
      return e4;
    e4.type !== t$1.Identifier && e4.type !== t$1.MemberExpression && this.throwError(p2.InvalidExpression, t6, r3), this.context.isAssignmentTarget || this.tolerateError(p2.InvalidLeftHandSideInAssignment, t6), this.matchPunctuator("=") || (this.context.isAssignmentTarget = false), this.readNextRawToken();
    const n3 = this.isolateCoverGrammar(this.parseAssignmentExpression);
    return this.finalize({ type: t$1.AssignmentExpression, left: e4, operator: i4, right: n3, ...this.getItemLocation(t6) });
  }
  parseExpression() {
    return this.isolateCoverGrammar(this.parseAssignmentExpression);
  }
  parseStatements(t6) {
    const e4 = [];
    for (; this.rawToken.type !== l$2.EOF && !this.matchPunctuator(t6); ) {
      const t7 = this.parseStatementListItem();
      S(t7) || e4.push(t7);
    }
    return e4;
  }
  parseStatementListItem() {
    return this.context.isAssignmentTarget = true, this.matchKeyword(e$2.Function) ? this.parseFunctionDeclaration() : this.matchKeyword(e$2.Export) ? this.parseExportDeclaration() : this.matchKeyword(e$2.Import) ? this.parseImportDeclaration() : this.parseStatement();
  }
  parseBlock() {
    const t6 = this.captureStartMarker();
    this.expectPunctuator("{");
    const e4 = this.parseStatements("}");
    return this.expectPunctuator("}"), this.finalize({ type: t$1.BlockStatement, body: e4, ...this.getItemLocation(t6) });
  }
  parseObjectStatement() {
    const t6 = this.captureStartMarker(), e4 = this.parseObjectExpression();
    return this.finalize({ type: t$1.ExpressionStatement, expression: e4, ...this.getItemLocation(t6) });
  }
  parseBlockOrObjectStatement() {
    if (this.context.curlyParsingType === w$1.AsObject)
      return this.parseObjectStatement();
    return this.peekAhead((t6) => {
      let e4 = t6();
      return (e4.type === l$2.Identifier || e4.type === l$2.StringLiteral) && (e4 = t6(), e4.type === l$2.Punctuator && ":" === e4.value);
    }) ? this.parseObjectStatement() : this.parseBlock();
  }
  parseIdentifier() {
    const t6 = this.rawToken;
    if (t6.type !== l$2.Identifier)
      return null;
    const e4 = this.captureStartMarker();
    return this.readNextRawToken(), this.finalize({ type: t$1.Identifier, name: t6.value, ...this.getItemLocation(e4) });
  }
  parseVariableDeclarator() {
    const t6 = this.captureStartMarker(), e4 = this.parseIdentifier();
    e4 || this.throwUnexpectedToken({ code: p2.IdentiferExpected });
    let r3 = null;
    if (this.matchPunctuator("=")) {
      this.readNextRawToken();
      const t7 = this.rawToken;
      try {
        r3 = this.isolateCoverGrammar(this.parseAssignmentExpression);
      } catch (i4) {
        this.throwUnexpectedToken({ rawToken: t7, code: p2.InvalidVariableAssignment });
      }
    }
    return this.finalize({ type: t$1.VariableDeclarator, id: e4, init: r3, ...this.getItemLocation(t6) });
  }
  parseVariableDeclarationList() {
    const t6 = [this.parseVariableDeclarator()];
    for (; this.matchPunctuator(","); )
      this.readNextRawToken(), t6.push(this.parseVariableDeclarator());
    return t6;
  }
  parseVariableDeclaration() {
    const t6 = this.captureStartMarker();
    this.expectKeyword(e$2.Var);
    const e4 = this.parseVariableDeclarationList();
    return this.consumeSemicolon(), this.finalize({ type: t$1.VariableDeclaration, declarations: e4, kind: "var", ...this.getItemLocation(t6) });
  }
  parseEmptyStatement() {
    const t6 = this.captureStartMarker();
    return this.expectPunctuator(";"), this.finalize({ type: t$1.EmptyStatement, ...this.getItemLocation(t6) });
  }
  parseExpressionStatement() {
    const t6 = this.captureStartMarker(), e4 = this.parseExpression();
    return this.consumeSemicolon(), this.finalize({ type: t$1.ExpressionStatement, expression: e4, ...this.getItemLocation(t6) });
  }
  parseIfClause() {
    return this.withBlockContext(k$1.IfClause, this.parseStatement);
  }
  parseIfStatement() {
    const t6 = this.captureStartMarker();
    this.expectKeyword(e$2.If), this.expectPunctuator("(");
    const e4 = this.captureStartMarker(), r3 = this.parseExpression(), i4 = this.captureStartMarker();
    this.expectPunctuator(")"), r3.type !== t$1.AssignmentExpression && r3.type !== t$1.UpdateExpression || this.throwError(p2.InvalidExpression, e4, i4);
    const n3 = this.parseIfClause();
    let s6 = null;
    return this.matchKeyword(e$2.Else) && (this.readNextRawToken(), s6 = this.parseIfClause()), this.finalize({ type: t$1.IfStatement, test: r3, consequent: n3, alternate: s6, ...this.getItemLocation(t6) });
  }
  parseWhileStatement() {
    const t6 = this.captureStartMarker();
    this.expectKeyword(e$2.While), this.expectPunctuator("(");
    const e4 = this.captureStartMarker(), r3 = this.parseExpression(), i4 = this.captureStartMarker();
    this.expectPunctuator(")"), r3.type !== t$1.AssignmentExpression && r3.type !== t$1.UpdateExpression || this.throwError(p2.InvalidExpression, e4, i4);
    const n3 = this.withBlockContext(k$1.WhileLoop, this.parseStatement);
    return this.finalize({ type: t$1.WhileStatement, test: r3, body: n3, ...this.getItemLocation(t6) });
  }
  parseForStatement() {
    let t6 = null, e4 = null, r3 = null, i4 = null, n3 = null;
    const s6 = this.captureStartMarker();
    if (this.expectKeyword(e$2.For), this.expectPunctuator("("), this.matchPunctuator(";"))
      this.readNextRawToken();
    else if (this.matchKeyword(e$2.Var)) {
      const e5 = this.captureStartMarker();
      this.readNextRawToken();
      const r4 = this.parseVariableDeclarationList();
      if (1 === r4.length && this.matchKeyword(e$2.In)) {
        r4[0].init && this.throwError(p2.ForInOfLoopInitializer, e5), i4 = this.finalize({ type: t$1.VariableDeclaration, declarations: r4, kind: "var", ...this.getItemLocation(e5) }), this.readNextRawToken(), n3 = this.parseExpression();
      } else
        this.matchKeyword(e$2.In) && this.throwError(p2.InvalidLeftHandSideInForIn, e5), t6 = this.finalize({ type: t$1.VariableDeclaration, declarations: r4, kind: "var", ...this.getItemLocation(e5) }), this.expectPunctuator(";");
    } else {
      const e5 = this.context.isAssignmentTarget, r4 = this.captureStartMarker();
      t6 = this.inheritCoverGrammar(this.parseAssignmentExpression), this.matchKeyword(e$2.In) ? (this.context.isAssignmentTarget || this.tolerateError(p2.InvalidLeftHandSideInForIn, r4), t6.type !== t$1.Identifier && this.throwError(p2.InvalidLeftHandSideInForIn, r4), this.readNextRawToken(), i4 = t6, n3 = this.parseExpression(), t6 = null) : (this.context.isAssignmentTarget = e5, this.expectPunctuator(";"));
    }
    i4 || (this.matchPunctuator(";") || (e4 = this.isolateCoverGrammar(this.parseExpression)), this.expectPunctuator(";"), this.matchPunctuator(")") || (r3 = this.isolateCoverGrammar(this.parseExpression))), this.expectPunctuator(")");
    const o3 = this.withBlockContext(k$1.ForLoop, () => this.isolateCoverGrammar(this.parseStatement));
    return i4 && n3 ? this.finalize({ type: t$1.ForInStatement, left: i4, right: n3, body: o3, ...this.getItemLocation(s6) }) : this.finalize({ type: t$1.ForStatement, init: t6, test: e4, update: r3, body: o3, ...this.getItemLocation(s6) });
  }
  parseContinueStatement() {
    const t6 = this.captureStartMarker();
    return this.expectKeyword(e$2.Continue), this.consumeSemicolon(), this.finalize({ type: t$1.ContinueStatement, ...this.getItemLocation(t6) });
  }
  parseBreakStatement() {
    const t6 = this.captureStartMarker();
    return this.expectKeyword(e$2.Break), this.consumeSemicolon(), this.finalize({ type: t$1.BreakStatement, ...this.getItemLocation(t6) });
  }
  parseReturnStatement() {
    const t6 = this.captureStartMarker();
    this.expectKeyword(e$2.Return);
    const e4 = !this.matchPunctuator(";") && !this.matchPunctuator("}") && !this.hasLineTerminator && this.rawToken.type !== l$2.EOF || this.rawToken.type === l$2.StringLiteral || this.rawToken.type === l$2.Template ? this.parseExpression() : null;
    return this.consumeSemicolon(), this.finalize({ type: t$1.ReturnStatement, argument: e4, ...this.getItemLocation(t6) });
  }
  parseStatement() {
    switch (this.rawToken.type) {
      case l$2.BooleanLiteral:
      case l$2.NullLiteral:
      case l$2.NumericLiteral:
      case l$2.StringLiteral:
      case l$2.Template:
      case l$2.Identifier:
        return this.parseExpressionStatement();
      case l$2.Punctuator:
        return "{" === this.rawToken.value ? this.parseBlockOrObjectStatement() : "(" === this.rawToken.value ? this.parseExpressionStatement() : ";" === this.rawToken.value ? this.parseEmptyStatement() : this.parseExpressionStatement();
      case l$2.Keyword:
        switch (this.rawToken.value.toLowerCase()) {
          case e$2.Break:
            return this.parseBreakStatement();
          case e$2.Continue:
            return this.parseContinueStatement();
          case e$2.For:
            return this.parseForStatement();
          case e$2.Function:
            return this.parseFunctionDeclaration();
          case e$2.If:
            return this.parseIfStatement();
          case e$2.Return:
            return this.parseReturnStatement();
          case e$2.Var:
            return this.parseVariableDeclaration();
          case e$2.While:
            return this.parseWhileStatement();
          default:
            return this.parseExpressionStatement();
        }
      default:
        return this.throwUnexpectedToken({ rawToken: this.rawToken });
    }
  }
  parseFormalParameters() {
    const t6 = [];
    if (this.expectPunctuator("("), !this.matchPunctuator(")"))
      for (; this.rawToken.type !== l$2.EOF; ) {
        const e4 = this.parseIdentifier();
        if (e4 || this.throwUnexpectedToken({ rawToken: this.rawToken, code: p2.IdentiferExpected }), t6.push(e4), this.matchPunctuator(")"))
          break;
        if (this.expectPunctuator(","), this.matchPunctuator(")"))
          break;
      }
    return this.expectPunctuator(")"), t6;
  }
  parseFunctionDeclaration() {
    (this.context.blockContext & k$1.Function) === k$1.Function && this.throwUnexpectedToken({ code: p2.NoFunctionInsideFunction }), (this.context.blockContext & k$1.WhileLoop) !== k$1.WhileLoop && (this.context.blockContext & k$1.IfClause) !== k$1.IfClause || this.throwUnexpectedToken({ code: p2.NoFunctionInsideBlock });
    const t6 = this.captureStartMarker();
    this.expectKeyword(e$2.Function);
    const e4 = this.parseIdentifier();
    e4 || this.throwUnexpectedToken({ code: p2.InvalidFunctionIdentifier });
    const r3 = this.parseFormalParameters(), i4 = this.context.blockContext;
    this.context.blockContext = this.context.blockContext | k$1.Function;
    const n3 = this.parseBlock();
    return this.context.blockContext = i4, this.finalize({ type: t$1.FunctionDeclaration, id: e4, params: r3, body: n3, ...this.getItemLocation(t6) });
  }
  parseScript() {
    const t6 = this.captureStartMarker(), e4 = this.parseStatements(), r3 = this.finalize({ type: t$1.Program, body: e4, ...this.getItemLocation(t6) });
    return this.options.tokens && (r3.tokens = this.tokens), this.options.tolerant && (r3.errors = this.errorHandler.errors), r3;
  }
  parseExportDeclaration() {
    this.context.blockContext !== k$1.None && this.throwUnexpectedToken({ code: p2.ModuleExportRootOnly });
    let t6 = null;
    const e4 = this.captureStartMarker();
    return this.expectKeyword(e$2.Export), this.matchKeyword(e$2.Var) ? t6 = this.parseVariableDeclaration() : this.matchKeyword("function") ? t6 = this.parseFunctionDeclaration() : this.throwUnexpectedToken({ code: p2.InvalidExpression }), this.finalize({ type: t$1.ExportNamedDeclaration, declaration: t6, specifiers: [], source: null, ...this.getItemLocation(e4) });
  }
  parseModuleSpecifier() {
    const t6 = this.captureStartMarker(), e4 = this.rawToken;
    if (e4.type === l$2.StringLiteral)
      return this.readNextRawToken(), this.finalize({ type: t$1.Literal, value: e4.value, raw: this.getSourceValue(e4), isString: true, ...this.getItemLocation(t6) });
    this.throwError(p2.InvalidModuleUri, t6);
  }
  parseDefaultSpecifier() {
    const t6 = this.captureStartMarker(), e4 = this.parseIdentifier();
    return e4 || this.throwUnexpectedToken({ code: p2.IdentiferExpected }), this.finalize({ type: t$1.ImportDefaultSpecifier, local: e4, ...this.getItemLocation(t6) });
  }
  parseImportDeclaration() {
    this.context.blockContext !== k$1.None && this.throwUnexpectedToken({ code: p2.ModuleImportRootOnly });
    const t6 = this.captureStartMarker();
    this.expectKeyword(e$2.Import);
    const e4 = this.parseDefaultSpecifier();
    this.expectContextualKeyword(e$2.From);
    const r3 = this.parseModuleSpecifier();
    return this.finalize({ type: t$1.ImportDeclaration, specifiers: [e4], source: r3, ...this.getItemLocation(t6) });
  }
}
function s$1(r3, s6, t6) {
  return new f(r3, s6, t6).parseScript();
}
function n2(n3, d2 = []) {
  const l2 = s$1(n3);
  if (null === l2.body || void 0 === l2.body)
    throw new u$2({ index: 0, line: 0, column: 0, data: null, description: "", code: p2.InvalidExpression });
  return l2.loadedModules = {}, d$4(l2, d2), l2;
}
class e3 {
  constructor(e4) {
    const s6 = this;
    s6._keys = [], s6._values = [], s6.length = 0, e4 && e4.forEach((e5) => {
      s6.set(e5[0], e5[1]);
    });
  }
  entries() {
    return [].slice.call(this.keys().map((e4, s6) => [e4, this._values[s6]]));
  }
  keys() {
    return [].slice.call(this._keys);
  }
  values() {
    return [].slice.call(this._values);
  }
  has(e4) {
    return this._keys.includes(e4);
  }
  get(e4) {
    const s6 = this._keys.indexOf(e4);
    return s6 > -1 ? this._values[s6] : null;
  }
  deepGet(s6) {
    if (!s6?.length)
      return null;
    const t6 = (s7, i4) => null == s7 ? null : i4.length ? t6(s7 instanceof e3 ? s7.get(i4[0]) : s7[i4[0]], i4.slice(1)) : s7;
    return t6(this.get(s6[0]), s6.slice(1));
  }
  set(e4, s6) {
    const t6 = this, i4 = this._keys.indexOf(e4);
    return i4 > -1 ? t6._values[i4] = s6 : (t6._keys.push(e4), t6._values.push(s6), t6.length = t6._values.length), this;
  }
  sortedSet(e4, s6, t6, i4) {
    const h3 = this, l2 = this._keys.length, r3 = t6 || 0, n3 = void 0 !== i4 ? i4 : l2 - 1;
    if (0 === l2)
      return h3._keys.push(e4), h3._values.push(s6), h3;
    if (e4 === this._keys[r3])
      return this._values.splice(r3, 0, s6), this;
    if (e4 === this._keys[n3])
      return this._values.splice(n3, 0, s6), this;
    if (e4 > this._keys[n3])
      return this._keys.splice(n3 + 1, 0, e4), this._values.splice(n3 + 1, 0, s6), this;
    if (e4 < this._keys[r3])
      return this._values.splice(r3, 0, s6), this._keys.splice(r3, 0, e4), this;
    if (r3 >= n3)
      return this;
    const u3 = r3 + Math.floor((n3 - r3) / 2);
    return e4 < this._keys[u3] ? this.sortedSet(e4, s6, r3, u3 - 1) : e4 > this._keys[u3] ? this.sortedSet(e4, s6, u3 + 1, n3) : this;
  }
  size() {
    return this.length;
  }
  clear() {
    const e4 = this;
    return e4._keys.length = e4.length = e4._values.length = 0, this;
  }
  delete(e4) {
    const s6 = this, t6 = s6._keys.indexOf(e4);
    return t6 > -1 && (s6._keys.splice(t6, 1), s6._values.splice(t6, 1), s6.length = s6._keys.length, true);
  }
  forEach(e4) {
    this._keys.forEach((s6, t6) => {
      e4(this._values[t6], s6, t6);
    });
  }
  map(e4) {
    return this.keys().map((s6, t6) => e4(this._values[t6], s6, t6));
  }
  filter(e4) {
    const s6 = this;
    return s6._keys.forEach((t6, i4) => {
      false === e4(s6._values[i4], t6, i4) && s6.delete(t6);
    }), this;
  }
  clone() {
    return new e3(this.entries());
  }
}
class s5 {
  constructor(s6 = 20) {
    this._maxEntries = s6, this._values = new e3();
  }
  delete(e4) {
    this._values.has(e4) && this._values.delete(e4);
  }
  get(e4) {
    let s6 = null;
    return this._values.has(e4) && (s6 = this._values.get(e4), this._values.delete(e4), this._values.set(e4, s6)), s6;
  }
  put(e4, s6) {
    if (this._values.size() >= this._maxEntries) {
      const e5 = this._values.keys()[0];
      this._values.delete(e5);
    }
    this._values.set(e4, s6);
  }
}
class t5 {
  constructor(e4 = 20) {
    this._maxEntries = e4, this._cache = new s5(this._maxEntries);
  }
  clear() {
    this._cache = new s5(this._maxEntries);
  }
  addToCache(e4, s6) {
    this._cache.put(e4, s6);
  }
  removeFromCache(e4) {
    this._cache.delete(e4);
  }
  getFromCache(e4) {
    return this._cache.get(e4);
  }
}
class l {
  constructor(e4) {
    this.portalUri = e4;
  }
  normalizeModuleUri(e4) {
    const o3 = /^[a-z0-9A-Z]+(@[0-9]+\.[0-9]+\.[0-9]+)?([\?|\/].*)?$/gi, s6 = /(?<portalurl>.+)\/home\/item\.html\?id\=(?<itemid>.+)$/gi, c2 = /(?<portalurl>.+)\/sharing\/rest\/content\/users\/[a-zA-Z0-9]+\/items\/(?<itemid>.+)$/gi, u3 = /(?<portalurl>.+)\/sharing\/rest\/content\/items\/(?<itemid>.+)$/gi, n3 = /(?<itemid>.*)@(?<versionstring>[0-9]+\.[0-9]+\.[0-9]+)([\?|\/].*)?$/gi;
    if (e4.startsWith("portal+")) {
      let l2 = e4.substring(7), a3 = "", m2 = l2, d2 = false;
      for (const e5 of [s6, u3, c2]) {
        const t6 = e5.exec(l2);
        if (null !== t6) {
          const e6 = t6.groups;
          m2 = e6.itemid, a3 = e6.portalurl, d2 = true;
          break;
        }
      }
      if (false === d2) {
        if (!o3.test(l2))
          throw new p$8(l$8.UnsupportedUriProtocol, { uri: e4 });
        m2 = l2, a3 = this.portalUri;
      }
      m2.includes("/") && (m2 = m2.split("/")[0]), m2.includes("?") && (m2 = m2.split("?")[0]);
      let h3 = "current";
      const p3 = n3.exec(m2);
      if (null !== p3) {
        const e5 = p3.groups;
        m2 = e5.itemid, h3 = e5.versionstring;
      }
      return l2 = new j$4({ url: a3 }).restUrl + "/content/items/" + m2 + "/resources/" + h3 + ".arc", { url: l2, scheme: "portal", uri: "PO:" + l2 };
    }
    if (e4.startsWith("mock")) {
      if ("mock" === e4) {
        return { url: "", scheme: "mock", data: '\n      export var hello = 1;\n      export function helloWorld() {\n          return "Hello World " + hello;\n      }\n  ', uri: "mock" };
      }
      const t6 = e4.replace("mock:", "");
      if (void 0 !== l.mocks[t6])
        return { url: "", scheme: "mock", data: l.mocks[t6], uri: e4 };
    }
    throw new p$8(l$8.UnrecognizedUri, { uri: e4 });
  }
  async fetchModule(e4) {
    const t6 = l.cachedModules.getFromCache(e4.uri);
    if (t6)
      return t6;
    const r3 = this.fetchSource(e4);
    l.cachedModules.addToCache(e4.uri, r3);
    let o3 = null;
    try {
      o3 = await r3;
    } catch (s6) {
      throw l.cachedModules.removeFromCache(e4.uri), s6;
    }
    return o3;
  }
  async fetchSource(s6) {
    if ("portal" === s6.scheme) {
      const t6 = await j$5(s6.url, { responseType: "text", query: {} });
      if (t6.data)
        return n2(t6.data, []);
    }
    if ("mock" === s6.scheme)
      return n2(s6.data ?? "", []);
    throw new p$8(l$8.UnsupportedUriProtocol);
  }
  static create(e4) {
    return new l(e4);
  }
  static getDefault() {
    return this._default ?? (l._default = l._moduleResolverFactory());
  }
  static set moduleResolverClass(e4) {
    this._moduleResolverFactory = e4, this._default = null;
  }
}
l.mocks = {}, l.cachedModules = new t5(30), l._default = null, l._moduleResolverFactory = () => {
  const e4 = j$4.getDefault();
  return new l(e4.url);
};
let G$2 = class G extends r$4 {
  constructor(e4, t6) {
    super(), this.definition = null, this.context = null, this.definition = e4, this.context = t6;
  }
  createFunction(e4) {
    return (...t6) => {
      const n3 = { spatialReference: this.context.spatialReference, console: this.context.console, services: this.context.services, timeZone: this.context.timeZone ?? null, lrucache: this.context.lrucache, exports: this.context.exports, libraryResolver: this.context.libraryResolver, interceptor: this.context.interceptor, localScope: {}, depthCounter: { depth: e4.depthCounter.depth + 1 }, globalScope: this.context.globalScope };
      if (n3.depthCounter.depth > 64)
        throw new a$5(e4, r$5.MaximumCallDepth, null);
      return Ie(this.definition, n3, t6, null);
    };
  }
  call(e4, t6) {
    return W$2(e4, t6, (n3, l2, i4) => {
      const a3 = { spatialReference: e4.spatialReference, services: e4.services, globalScope: e4.globalScope, depthCounter: { depth: e4.depthCounter.depth + 1 }, libraryResolver: e4.libraryResolver, exports: e4.exports, timeZone: e4.timeZone ?? null, console: e4.console, lrucache: e4.lrucache, interceptor: e4.interceptor, localScope: {} };
      if (a3.depthCounter.depth > 64)
        throw new a$5(e4, r$5.MaximumCallDepth, t6);
      return Ie(this.definition, a3, i4, t6);
    });
  }
  marshalledCall(e4, t6, n3, o3) {
    return o3(e4, t6, (r3, l2, i4) => {
      const a3 = { spatialReference: e4.spatialReference, globalScope: n3.globalScope, services: e4.services, depthCounter: { depth: e4.depthCounter.depth + 1 }, libraryResolver: e4.libraryResolver, exports: e4.exports, console: e4.console, timeZone: e4.timeZone ?? null, lrucache: e4.lrucache, interceptor: e4.interceptor, localScope: {} };
      return i4 = i4.map((t7) => !v$4(t7) || t7 instanceof s$7 ? t7 : n$3(t7, e4, o3)), n$3(Ie(this.definition, a3, i4, t6), n3, o3);
    });
  }
};
let P$2 = class P extends s$a {
  constructor(e4) {
    super(e4);
  }
  global(e4) {
    const t6 = this.executingContext.globalScope[e4.toLowerCase()];
    if (t6.valueset || (t6.value = V$2(this.executingContext, t6.node), t6.valueset = true), v$4(t6.value) && !(t6.value instanceof s$7)) {
      const e5 = new s$7();
      e5.fn = t6.value, e5.parameterEvaluator = W$2, e5.context = this.executingContext, t6.value = e5;
    }
    return t6.value;
  }
  setGlobal(e4, t6) {
    if (v$4(t6))
      throw new a$5(null, r$5.AssignModuleFunction, null);
    this.executingContext.globalScope[e4.toLowerCase()] = { value: t6, valueset: true, node: null };
  }
  hasGlobal(e4) {
    return void 0 === this.executingContext.exports[e4] && (e4 = e4.toLowerCase()), void 0 !== this.executingContext.exports[e4];
  }
  loadModule(e4) {
    let n3 = e4.spatialReference;
    null == n3 && (n3 = new f$5({ wkid: 102100 })), this.moduleScope = Ce({}, e4.customfunctions, e4.timeZone), this.executingContext = { spatialReference: n3, globalScope: this.moduleScope, localScope: null, libraryResolver: new s$9(e4.libraryResolver._moduleSingletons, this.source.syntax.loadedModules), exports: {}, services: e4.services, console: e4.console ?? Ae, timeZone: e4.timeZone ?? null, lrucache: e4.lrucache, interceptor: e4.interceptor, depthCounter: { depth: 1 } }, V$2(this.executingContext, this.source.syntax);
  }
};
function T$2(e4, t6) {
  const n3 = [];
  for (let o3 = 0; o3 < t6.arguments.length; o3++)
    n3.push(V$2(e4, t6.arguments[o3]));
  return n3;
}
function W$2(e4, t6, n3) {
  try {
    return true === t6.preparsed ? n3(e4, null, t6.arguments) : n3(e4, t6, T$2(e4, t6));
  } catch (o3) {
    throw o3;
  }
}
function V$2(e4, t6) {
  try {
    switch (t6?.type) {
      case "EmptyStatement":
        return w$3;
      case "VariableDeclarator":
        return ce(e4, t6);
      case "VariableDeclaration":
        return se$1(e4, t6);
      case "ImportDeclaration":
        return ie$1(e4, t6);
      case "ExportNamedDeclaration":
        return ae$1(e4, t6);
      case "BlockStatement":
      case "Program":
        return oe$1(e4, t6);
      case "FunctionDeclaration":
        return le(e4, t6);
      case "ReturnStatement":
        return re$2(e4, t6);
      case "IfStatement":
        return ne$1(e4, t6);
      case "ExpressionStatement":
        return te$2(e4, t6);
      case "AssignmentExpression":
        return ee$2(e4, t6);
      case "UpdateExpression":
        return X$2(e4, t6);
      case "BreakStatement":
        return O$3;
      case "ContinueStatement":
        return R$2;
      case "TemplateElement":
        return we(e4, t6);
      case "TemplateLiteral":
        return ge(e4, t6);
      case "ForStatement":
        return H$2(e4, t6);
      case "ForInStatement":
        return Y$2(e4, t6);
      case "WhileStatement":
        return J$2(e4, t6);
      case "Identifier":
        return ve(e4, t6);
      case "MemberExpression":
        return ue$1(e4, t6);
      case "Literal":
        return t6.value;
      case "CallExpression":
        return ye(e4, t6);
      case "UnaryExpression":
        return fe(e4, t6);
      case "BinaryExpression":
        return de(e4, t6);
      case "LogicalExpression":
        return he(e4, t6);
      case "ArrayExpression":
        return pe(e4, t6);
      case "ObjectExpression":
        return _$2(e4, t6);
      case "Property":
        return z$1(e4, t6);
      default:
        throw new a$5(e4, r$5.Unrecognized, t6);
    }
  } catch (n3) {
    throw u$7(e4, t6, n3);
  }
}
function _$2(e4, t6) {
  const l2 = {}, i4 = /* @__PURE__ */ new Map();
  for (let n3 = 0; n3 < t6.properties.length; n3++) {
    const a4 = V$2(e4, t6.properties[n3]);
    if (v$4(a4.value))
      throw new a$5(e4, r$5.NoFunctionInDictionary, t6);
    if (false === P$6(a4.key))
      throw new a$5(e4, r$5.KeyMustBeString, t6);
    let s6 = a4.key.toString();
    const c2 = s6.toLowerCase();
    i4.has(c2) ? s6 = i4.get(c2) : i4.set(c2, s6), a4.value === w$3 ? l2[s6] = null : l2[s6] = a4.value;
  }
  const a3 = new N$3(l2);
  return a3.immutable = false, a3;
}
function z$1(e4, t6) {
  return { key: "Identifier" === t6.key.type ? t6.key.name : V$2(e4, t6.key), value: V$2(e4, t6.value) };
}
function Y$2(e4, t6) {
  const l2 = V$2(e4, t6.right);
  "VariableDeclaration" === t6.left.type && V$2(e4, t6.left);
  let i4 = null, a3 = "";
  if ("VariableDeclaration" === t6.left.type) {
    const e5 = t6.left.declarations[0].id;
    "Identifier" === e5.type && (a3 = e5.name);
  } else
    "Identifier" === t6.left.type && (a3 = t6.left.name);
  if (!a3)
    throw new a$5(e4, r$5.InvalidIdentifier, t6);
  if (a3 = a3.toLowerCase(), null != e4.localScope && void 0 !== e4.localScope[a3] && (i4 = e4.localScope[a3]), null === i4 && void 0 !== e4.globalScope[a3] && (i4 = e4.globalScope[a3]), null === i4)
    throw new a$5(e4, r$5.InvalidIdentifier, t6);
  if (q$7(l2) || P$6(l2)) {
    const n3 = l2.length;
    for (let o3 = 0; o3 < n3; o3++) {
      i4.value = o3;
      const n4 = V$2(e4, t6.body);
      if (n4 === O$3)
        break;
      if (n4 instanceof F$3)
        return n4;
    }
    return w$3;
  }
  if ($$4(l2)) {
    for (let n3 = 0; n3 < l2.length(); n3++) {
      i4.value = n3;
      const o3 = V$2(e4, t6.body);
      if (o3 === O$3)
        break;
      if (o3 instanceof F$3)
        return o3;
    }
    return w$3;
  }
  if (!(l2 instanceof N$3 || U$3(l2)))
    return w$3;
  {
    const n3 = l2.keys();
    for (let o3 = 0; o3 < n3.length; o3++) {
      i4.value = n3[o3];
      const r3 = V$2(e4, t6.body);
      if (r3 === O$3)
        break;
      if (r3 instanceof F$3)
        return r3;
    }
  }
}
function H$2(e4, t6) {
  null !== t6.init && V$2(e4, t6.init);
  const n3 = { testResult: true, lastAction: w$3 };
  do {
    Q$2(e4, t6, n3);
  } while (true === n3.testResult);
  return n3.lastAction instanceof F$3 ? n3.lastAction : w$3;
}
function J$2(e4, t6) {
  const n3 = { testResult: true, lastAction: w$3 };
  if (n3.testResult = V$2(e4, t6.test), false === n3.testResult)
    return w$3;
  if (true !== n3.testResult)
    throw new a$5(e4, r$5.BooleanConditionRequired, t6);
  for (; true === n3.testResult && (n3.lastAction = V$2(e4, t6.body), n3.lastAction !== O$3) && !(n3.lastAction instanceof F$3); )
    if (n3.testResult = V$2(e4, t6.test), true !== n3.testResult && false !== n3.testResult)
      throw new a$5(e4, r$5.BooleanConditionRequired, t6);
  return n3.lastAction instanceof F$3 ? n3.lastAction : w$3;
}
function Q$2(e4, t6, n3) {
  if (null !== t6.test) {
    if (n3.testResult = V$2(e4, t6.test), false === n3.testResult)
      return;
    if (true !== n3.testResult)
      throw new a$5(e4, r$5.BooleanConditionRequired, t6);
  }
  n3.lastAction = V$2(e4, t6.body), n3.lastAction !== O$3 ? n3.lastAction instanceof F$3 ? n3.testResult = false : null !== t6.update && V$2(e4, t6.update) : n3.testResult = false;
}
function X$2(e4, t6) {
  let l2, i4 = null, a3 = "";
  if ("MemberExpression" === t6.argument.type) {
    if (i4 = V$2(e4, t6.argument.object), true === t6.argument.computed ? a3 = V$2(e4, t6.argument.property) : "Identifier" === t6.argument.property.type && (a3 = t6.argument.property.name), q$7(i4)) {
      if (!z$6(a3))
        throw new a$5(e4, r$5.ArrayAccessorMustBeNumber, t6);
      if (a3 < 0 && (a3 = i4.length + a3), a3 < 0 || a3 >= i4.length)
        throw new a$5(e4, r$5.OutOfBounds, t6);
      l2 = pe$2(i4[a3]), i4[a3] = "++" === t6.operator ? l2 + 1 : l2 - 1;
    } else if (i4 instanceof N$3) {
      if (false === P$6(a3))
        throw new a$5(e4, r$5.KeyAccessorMustBeString, t6);
      if (true !== i4.hasField(a3))
        throw new a$5(e4, r$5.FieldNotFound, t6);
      l2 = pe$2(i4.field(a3)), i4.setField(a3, "++" === t6.operator ? l2 + 1 : l2 - 1);
    } else if (U$3(i4)) {
      if (false === P$6(a3))
        throw new a$5(e4, r$5.KeyAccessorMustBeString, t6);
      if (true !== i4.hasField(a3))
        throw new a$5(e4, r$5.FieldNotFound, t6);
      l2 = pe$2(i4.field(a3)), i4.setField(a3, "++" === t6.operator ? l2 + 1 : l2 - 1);
    } else {
      if ($$4(i4))
        throw new a$5(e4, r$5.Immutable, t6);
      if (!(i4 instanceof P$2))
        throw new a$5(e4, r$5.InvalidParameter, t6);
      if (false === P$6(a3))
        throw new a$5(e4, r$5.ModuleAccessorMustBeString, t6);
      if (true !== i4.hasGlobal(a3))
        throw new a$5(e4, r$5.ModuleExportNotFound, t6);
      l2 = pe$2(i4.global(a3)), i4.setGlobal(a3, "++" === t6.operator ? l2 + 1 : l2 - 1);
    }
    return false === t6.prefix ? l2 : "++" === t6.operator ? l2 + 1 : l2 - 1;
  }
  if (i4 = "Identifier" === t6.argument.type ? t6.argument.name.toLowerCase() : "", !i4)
    throw new a$5(e4, r$5.InvalidIdentifier, t6);
  if (null != e4.localScope && void 0 !== e4.localScope[i4])
    return l2 = pe$2(e4.localScope[i4].value), e4.localScope[i4] = { value: "++" === t6.operator ? l2 + 1 : l2 - 1, valueset: true, node: t6 }, false === t6.prefix ? l2 : "++" === t6.operator ? l2 + 1 : l2 - 1;
  if (void 0 !== e4.globalScope[i4])
    return l2 = pe$2(e4.globalScope[i4].value), e4.globalScope[i4] = { value: "++" === t6.operator ? l2 + 1 : l2 - 1, valueset: true, node: t6 }, false === t6.prefix ? l2 : "++" === t6.operator ? l2 + 1 : l2 - 1;
  throw new a$5(e4, r$5.InvalidIdentifier, t6);
}
function $$1(e4, t6, n3, l2, i4) {
  switch (t6) {
    case "=":
      return e4 === w$3 ? null : e4;
    case "/=":
      return pe$2(n3) / pe$2(e4);
    case "*=":
      return pe$2(n3) * pe$2(e4);
    case "-=":
      return pe$2(n3) - pe$2(e4);
    case "+=":
      return P$6(n3) || P$6(e4) ? ce$3(n3) + ce$3(e4) : pe$2(n3) + pe$2(e4);
    case "%=":
      return pe$2(n3) % pe$2(e4);
    default:
      throw new a$5(i4, r$5.UnsupportedOperator, l2);
  }
}
function ee$2(e4, t6) {
  let l2 = null, i4 = "";
  if ("MemberExpression" === t6.left.type) {
    if (l2 = V$2(e4, t6.left.object), true === t6.left.computed)
      i4 = V$2(e4, t6.left.property);
    else {
      if ("Identifier" !== t6.left.property.type)
        throw new a$5(e4, r$5.InvalidIdentifier, t6);
      i4 = t6.left.property.name;
    }
    const a4 = V$2(e4, t6.right);
    if (q$7(l2)) {
      if (!z$6(i4))
        throw new a$5(e4, r$5.ArrayAccessorMustBeNumber, t6);
      if (i4 < 0 && (i4 = l2.length + i4), i4 < 0 || i4 > l2.length)
        throw new a$5(e4, r$5.OutOfBounds, t6);
      if (i4 === l2.length) {
        if ("=" !== t6.operator)
          throw new a$5(e4, r$5.OutOfBounds, t6);
        l2[i4] = $$1(a4, t6.operator, l2[i4], t6, e4);
      } else
        l2[i4] = $$1(a4, t6.operator, l2[i4], t6, e4);
    } else if (l2 instanceof N$3) {
      if (false === P$6(i4))
        throw new a$5(e4, r$5.KeyAccessorMustBeString, t6);
      if (true === l2.hasField(i4))
        l2.setField(i4, $$1(a4, t6.operator, l2.field(i4), t6, e4));
      else {
        if ("=" !== t6.operator)
          throw new a$5(e4, r$5.FieldNotFound, t6, { key: i4 });
        l2.setField(i4, $$1(a4, t6.operator, null, t6, e4));
      }
    } else if (U$3(l2)) {
      if (false === P$6(i4))
        throw new a$5(e4, r$5.KeyAccessorMustBeString, t6);
      if (true === l2.hasField(i4))
        l2.setField(i4, $$1(a4, t6.operator, l2.field(i4), t6, e4));
      else {
        if ("=" !== t6.operator)
          throw new a$5(e4, r$5.FieldNotFound, t6, { key: i4 });
        l2.setField(i4, $$1(a4, t6.operator, null, t6, e4));
      }
    } else {
      if ($$4(l2))
        throw new a$5(e4, r$5.Immutable, t6);
      if (!(l2 instanceof P$2))
        throw new a$5(e4, r$5.InvalidIdentifier, t6);
      if (false === P$6(i4))
        throw new a$5(e4, r$5.ModuleAccessorMustBeString, t6);
      if (true !== l2.hasGlobal(i4))
        throw new a$5(e4, r$5.ModuleExportNotFound, t6);
      l2.setGlobal(i4, $$1(a4, t6.operator, l2.global(i4), t6, e4));
    }
    return w$3;
  }
  l2 = t6.left.name.toLowerCase();
  const a3 = V$2(e4, t6.right);
  if (null != e4.localScope && void 0 !== e4.localScope[l2])
    return e4.localScope[l2] = { value: $$1(a3, t6.operator, e4.localScope[l2].value, t6, e4), valueset: true, node: t6.right }, w$3;
  if (void 0 !== e4.globalScope[l2])
    return e4.globalScope[l2] = { value: $$1(a3, t6.operator, e4.globalScope[l2].value, t6, e4), valueset: true, node: t6.right }, w$3;
  throw new a$5(e4, r$5.InvalidIdentifier, t6);
}
function te$2(e4, t6) {
  if ("AssignmentExpression" === t6.expression.type || "UpdateExpression" === t6.expression.type)
    return V$2(e4, t6.expression);
  if ("CallExpression" === t6.expression.type) {
    const n3 = V$2(e4, t6.expression);
    return n3 === w$3 ? w$3 : new M$4(n3);
  }
  {
    const n3 = V$2(e4, t6.expression);
    return n3 === w$3 ? w$3 : new M$4(n3);
  }
}
function ne$1(e4, t6) {
  const n3 = V$2(e4, t6.test);
  if (true === n3)
    return V$2(e4, t6.consequent);
  if (false === n3)
    return null !== t6.alternate ? V$2(e4, t6.alternate) : w$3;
  throw new a$5(e4, r$5.BooleanConditionRequired, t6);
}
function oe$1(e4, t6) {
  let n3 = w$3;
  for (let o3 = 0; o3 < t6.body.length; o3++)
    if (n3 = V$2(e4, t6.body[o3]), n3 instanceof F$3 || n3 === O$3 || n3 === R$2)
      return n3;
  return n3;
}
function re$2(e4, t6) {
  if (null === t6.argument)
    return new F$3(w$3);
  const n3 = V$2(e4, t6.argument);
  return new F$3(n3);
}
function le(e4, t6) {
  const n3 = t6.id.name.toLowerCase();
  return e4.globalScope[n3] = { valueset: true, node: null, value: new G$2(t6, e4) }, w$3;
}
function ie$1(e4, t6) {
  const n3 = t6.specifiers[0].local.name.toLowerCase(), o3 = e4.libraryResolver.loadLibrary(n3);
  let r3 = null;
  return e4.libraryResolver._moduleSingletons?.has(o3.uri) ? r3 = e4.libraryResolver._moduleSingletons.get(o3.uri) : (r3 = new P$2(o3), r3.loadModule(e4), e4.libraryResolver._moduleSingletons?.set(o3.uri, r3)), e4.globalScope[n3] = { value: r3, valueset: true, node: t6 }, w$3;
}
function ae$1(e4, t6) {
  if (V$2(e4, t6.declaration), "FunctionDeclaration" === t6.declaration.type)
    e4.exports[t6.declaration.id.name.toLowerCase()] = "function";
  else if ("VariableDeclaration" === t6.declaration.type)
    for (const n3 of t6.declaration.declarations)
      e4.exports[n3.id.name.toLowerCase()] = "variable";
  return w$3;
}
function se$1(e4, t6) {
  for (let n3 = 0; n3 < t6.declarations.length; n3++)
    V$2(e4, t6.declarations[n3]);
  return w$3;
}
function ce(e4, t6) {
  let n3 = null === t6.init ? null : V$2(e4, t6.init);
  if (n3 === w$3 && (n3 = null), "Identifier" !== t6.id.type)
    throw new a$5(e4, r$5.InvalidIdentifier, t6);
  const l2 = t6.id.name.toLowerCase();
  return null != e4.localScope ? e4.localScope[l2] = { value: n3, valueset: true, node: t6.init } : e4.globalScope[l2] = { value: n3, valueset: true, node: t6.init }, w$3;
}
function ue$1(e4, t6) {
  try {
    const l2 = V$2(e4, t6.object);
    if (null === l2)
      throw new a$5(e4, r$5.MemberOfNull, t6);
    if (false === t6.computed) {
      if ("Identifier" === t6.property.type) {
        if (l2 instanceof N$3 || U$3(l2))
          return l2.field(t6.property.name);
        if (l2 instanceof p$9)
          return L$3(l2, t6.property.name, t6, e4);
        if (l2 instanceof P$2) {
          if (!l2.hasGlobal(t6.property.name))
            throw new a$5(e4, r$5.InvalidIdentifier, t6);
          return l2.global(t6.property.name);
        }
      }
      throw new a$5(e4, r$5.InvalidMemberAccessKey, t6);
    }
    {
      let i4 = V$2(e4, t6.property);
      if (l2 instanceof N$3 || U$3(l2)) {
        if (P$6(i4))
          return l2.field(i4);
        throw new a$5(e4, r$5.InvalidMemberAccessKey, t6);
      }
      if (l2 instanceof P$2) {
        if (P$6(i4))
          return l2.global(i4);
        throw new a$5(e4, r$5.InvalidMemberAccessKey, t6);
      }
      if (l2 instanceof p$9) {
        if (P$6(i4))
          return L$3(l2, i4, t6, e4);
        throw new a$5(e4, r$5.InvalidMemberAccessKey, t6);
      }
      if (q$7(l2)) {
        if (z$6(i4) && isFinite(i4) && Math.floor(i4) === i4) {
          if (i4 < 0 && (i4 = l2.length + i4), i4 >= l2.length || i4 < 0)
            throw new a$5(e4, r$5.OutOfBounds, t6);
          return l2[i4];
        }
        throw new a$5(e4, r$5.InvalidMemberAccessKey, t6);
      }
      if (P$6(l2)) {
        if (z$6(i4) && isFinite(i4) && Math.floor(i4) === i4) {
          if (i4 < 0 && (i4 = l2.length + i4), i4 >= l2.length || i4 < 0)
            throw new a$5(e4, r$5.OutOfBounds, t6);
          return l2[i4];
        }
        throw new a$5(e4, r$5.InvalidMemberAccessKey, t6);
      }
      if ($$4(l2)) {
        if (z$6(i4) && isFinite(i4) && Math.floor(i4) === i4) {
          if (i4 < 0 && (i4 = l2.length() + i4), i4 >= l2.length() || i4 < 0)
            throw new a$5(e4, r$5.OutOfBounds, t6);
          return l2.get(i4);
        }
        throw new a$5(e4, r$5.InvalidMemberAccessKey, t6);
      }
      throw new a$5(e4, r$5.InvalidMemberAccessKey, t6);
    }
  } catch (l2) {
    throw l2;
  }
}
function fe(e4, t6) {
  try {
    const n3 = V$2(e4, t6.argument);
    if (G$4(n3)) {
      if ("!" === t6.operator)
        return !n3;
      if ("-" === t6.operator)
        return -1 * pe$2(n3);
      if ("+" === t6.operator)
        return 1 * pe$2(n3);
      if ("~" === t6.operator)
        return ~pe$2(n3);
      throw new a$5(e4, r$5.UnsupportedUnaryOperator, t6);
    }
    if ("~" === t6.operator)
      return ~pe$2(n3);
    if ("-" === t6.operator)
      return -1 * pe$2(n3);
    if ("+" === t6.operator)
      return 1 * pe$2(n3);
    throw new a$5(e4, r$5.UnsupportedUnaryOperator, t6);
  } catch (n3) {
    throw n3;
  }
}
function pe(e4, t6) {
  try {
    const n3 = [];
    for (let l2 = 0; l2 < t6.elements.length; l2++) {
      const i4 = V$2(e4, t6.elements[l2]);
      if (v$4(i4))
        throw new a$5(e4, r$5.NoFunctionInArray, t6);
      i4 === w$3 ? n3.push(null) : n3.push(i4);
    }
    return n3;
  } catch (n3) {
    throw n3;
  }
}
function de(e4, t6) {
  try {
    const n3 = [V$2(e4, t6.left), V$2(e4, t6.right)], l2 = n3[0], i4 = n3[1];
    switch (t6.operator) {
      case "|":
      case "<<":
      case ">>":
      case ">>>":
      case "^":
      case "&":
        return Ie$2(pe$2(l2), pe$2(i4), t6.operator);
      case "==":
        return fe$2(l2, i4);
      case "!=":
        return !fe$2(l2, i4);
      case "<":
      case ">":
      case "<=":
      case ">=":
        return se$4(l2, i4, t6.operator);
      case "+":
        return P$6(l2) || P$6(i4) ? ce$3(l2) + ce$3(i4) : pe$2(l2) + pe$2(i4);
      case "-":
        return pe$2(l2) - pe$2(i4);
      case "*":
        return pe$2(l2) * pe$2(i4);
      case "/":
        return pe$2(l2) / pe$2(i4);
      case "%":
        return pe$2(l2) % pe$2(i4);
      default:
        throw new a$5(e4, r$5.UnsupportedOperator, t6);
    }
  } catch (n3) {
    throw n3;
  }
}
function he(e4, t6) {
  try {
    const n3 = V$2(e4, t6.left);
    if (G$4(n3))
      switch (t6.operator) {
        case "||":
          if (true === n3)
            return n3;
          {
            const n4 = V$2(e4, t6.right);
            if (G$4(n4))
              return n4;
            throw new a$5(e4, r$5.LogicExpressionOrAnd, t6);
          }
        case "&&":
          if (false === n3)
            return n3;
          {
            const n4 = V$2(e4, t6.right);
            if (G$4(n4))
              return n4;
            throw new a$5(e4, r$5.LogicExpressionOrAnd, t6);
          }
        default:
          throw new a$5(e4, r$5.LogicExpressionOrAnd, t6);
      }
    throw new a$5(e4, r$5.LogicalExpressionOnlyBoolean, t6);
  } catch (n3) {
    throw n3;
  }
}
function we(e4, t6) {
  return t6.value ? t6.value.cooked : "";
}
function me(e4, t6, n3) {
  if (v$4(e4))
    throw new a$5(t6, r$5.NoFunctionInTemplateLiteral, n3);
  return e4;
}
function ge(e4, t6) {
  let n3 = "", o3 = 0;
  for (const r3 of t6.quasis)
    if (n3 += r3.value ? r3.value.cooked : "", false === r3.tail) {
      n3 += t6.expressions[o3] ? ce$3(me(V$2(e4, t6.expressions[o3]), e4, t6)) : "", o3++;
    }
  return n3;
}
function ve(e4, t6) {
  let n3;
  try {
    const l2 = t6.name.toLowerCase();
    if (null != e4.localScope && void 0 !== e4.localScope[l2])
      return n3 = e4.localScope[l2], true === n3.valueset || (n3.value = V$2(e4, n3.node), n3.valueset = true), n3.value;
    if (void 0 !== e4.globalScope[l2])
      return n3 = e4.globalScope[l2], true === n3.valueset || (n3.value = V$2(e4, n3.node), n3.valueset = true), n3.value;
    throw new a$5(e4, r$5.InvalidIdentifier, t6);
  } catch (l2) {
    throw l2;
  }
}
function ye(e4, t6) {
  try {
    if ("MemberExpression" === t6.callee.type) {
      const n3 = V$2(e4, t6.callee.object);
      if (!(n3 instanceof P$2))
        throw new a$5(e4, r$5.FunctionNotFound, t6);
      const l2 = false === t6.callee.computed ? t6.callee.property.name : V$2(e4, t6.callee.property);
      if (!n3.hasGlobal(l2))
        throw new a$5(e4, r$5.FunctionNotFound, t6);
      const i4 = n3.global(l2);
      if (!v$4(i4))
        throw new a$5(e4, r$5.CallNonFunction, t6);
      return i4.call(e4, t6);
    }
    if ("Identifier" !== t6.callee.type)
      throw new a$5(e4, r$5.FunctionNotFound, t6);
    if (null != e4.localScope && void 0 !== e4.localScope[t6.callee.name.toLowerCase()]) {
      const n3 = e4.localScope[t6.callee.name.toLowerCase()];
      if (v$4(n3.value))
        return n3.value.call(e4, t6);
      throw new a$5(e4, r$5.CallNonFunction, t6);
    }
    if (void 0 !== e4.globalScope[t6.callee.name.toLowerCase()]) {
      const n3 = e4.globalScope[t6.callee.name.toLowerCase()];
      if (v$4(n3.value))
        return n3.value.call(e4, t6);
      throw new a$5(e4, r$5.CallNonFunction, t6);
    }
    throw new a$5(e4, r$5.FunctionNotFound, t6);
  } catch (n3) {
    throw n3;
  }
}
const be = {};
function xe(e4, t6, n3, o3) {
  try {
    const r3 = t6.arguments, l2 = V$2(e4, r3[n3]);
    if (fe$2(l2, o3))
      return V$2(e4, r3[n3 + 1]);
    {
      const l3 = r3.length - n3;
      return 1 === l3 ? V$2(e4, r3[n3]) : 2 === l3 ? null : 3 === l3 ? V$2(e4, r3[n3 + 2]) : xe(e4, t6, n3 + 2, o3);
    }
  } catch (r3) {
    throw r3;
  }
}
function Se(e4, t6, n3, l2) {
  try {
    const i4 = t6.arguments;
    if (true === l2)
      return V$2(e4, i4[n3 + 1]);
    if (3 === i4.length - n3)
      return V$2(e4, i4[n3 + 2]);
    {
      const l3 = V$2(e4, i4[n3 + 2]);
      if (false === G$4(l3))
        throw new a$5(e4, r$5.BooleanConditionRequired, i4[n3 + 2]);
      return Se(e4, t6, n3 + 2, l3);
    }
  } catch (i4) {
    throw i4;
  }
}
function Ie(e4, t6, n3, l2) {
  try {
    const i4 = e4.body;
    if (n3.length !== e4.params.length)
      throw new a$5(t6, r$5.WrongNumberOfParameters, l2);
    if (null != t6.localScope)
      for (let o3 = 0; o3 < n3.length; o3++)
        t6.localScope[e4.params[o3].name.toLowerCase()] = { value: n3[o3], valueset: true, node: null };
    const a3 = V$2(t6, i4);
    if (a3 instanceof F$3)
      return a3.value;
    if (a3 === O$3)
      throw new a$5(t6, r$5.UnexpectedToken, l2);
    if (a3 === R$2)
      throw new a$5(t6, r$5.UnexpectedToken, l2);
    return a3 instanceof M$4 ? a3.value : a3;
  } catch (i4) {
    throw i4;
  }
}
C$3(be, W$2), $$2(be, W$2), m$3(be, W$2), W$5(be, W$2), f$2(be, W$2), S$2(be, W$2), be.iif = function(e4, t6) {
  try {
    const n3 = t6.arguments;
    ne$4(null === n3 ? [] : n3, 3, 3, e4, t6);
    const l2 = V$2(e4, n3[0]);
    if (false === G$4(l2))
      throw new a$5(e4, r$5.BooleanConditionRequired, t6);
    return V$2(e4, true === l2 ? n3[1] : n3[2]);
  } catch (n3) {
    throw n3;
  }
}, be.decode = function(e4, t6) {
  try {
    const n3 = t6.arguments;
    if (n3.length < 2)
      throw new a$5(e4, r$5.WrongNumberOfParameters, t6);
    if (2 === n3.length)
      return V$2(e4, n3[1]);
    {
      if ((n3.length - 1) % 2 == 0)
        throw new a$5(e4, r$5.WrongNumberOfParameters, t6);
      const l2 = V$2(e4, n3[0]);
      return xe(e4, t6, 1, l2);
    }
  } catch (n3) {
    throw n3;
  }
}, be.when = function(e4, t6) {
  try {
    const n3 = t6.arguments;
    if (n3.length < 3)
      throw new a$5(e4, r$5.WrongNumberOfParameters, t6);
    if (n3.length % 2 == 0)
      throw new a$5(e4, r$5.WrongNumberOfParameters, t6);
    const l2 = V$2(e4, n3[0]);
    if (false === G$4(l2))
      throw new a$5(e4, r$5.BooleanConditionRequired, n3[0]);
    return Se(e4, t6, 0, l2);
  } catch (n3) {
    throw n3;
  }
};
for (const Le2 in be)
  be[Le2] = { value: new e$4(be[Le2]), valueset: true, node: null };
const Fe = function() {
};
function Ce(e4, t6, o3) {
  const r3 = new Fe();
  e4 || (e4 = {}), t6 || (t6 = {});
  const l2 = new N$3({ newline: "\n", tab: "	", singlequote: "'", doublequote: '"', forwardslash: "/", backwardslash: "\\" });
  l2.immutable = false, r3.textformatting = { value: l2, valueset: true, node: null };
  for (const n3 in t6)
    r3[n3] = { value: new e$4(t6[n3]), native: true, valueset: true, node: null };
  for (const n3 in e4)
    e4[n3] && "esri.Graphic" === e4[n3].declaredClass ? r3[n3] = { value: D$5.createFromGraphic(e4[n3], o3), valueset: true, node: null } : r3[n3] = { value: e4[n3], valueset: true, node: null };
  return r3;
}
Fe.prototype = be, Fe.prototype.infinity = { value: Number.POSITIVE_INFINITY, valueset: true, node: null }, Fe.prototype.pi = { value: Math.PI, valueset: true, node: null };
function Ae(e4) {
  console.log(e4);
}
function Me(e4) {
  const t6 = { mode: "sync", compiled: false, functions: {}, signatures: [], standardFunction: W$2, evaluateIdentifier: ve };
  for (let n3 = 0; n3 < e4.length; n3++)
    e4[n3].registerFunctions(t6);
  for (const n3 in t6.functions)
    be[n3] = { value: new e$4(t6.functions[n3]), valueset: true, node: null }, Fe.prototype[n3] = be[n3];
  for (let n3 = 0; n3 < t6.signatures.length; n3++)
    o$4(t6.signatures[n3], "sync");
}
function Ee(e4, n3) {
  let l2 = n3.spatialReference;
  null == l2 && (l2 = new f$5({ wkid: 102100 }));
  let i4 = null;
  e4.usesModules && (i4 = new s$9(/* @__PURE__ */ new Map(), e4.loadedModules));
  const a3 = { spatialReference: l2, globalScope: Ce(n3.vars, n3.customfunctions, n3.timeZone), localScope: null, services: n3.services ?? null, exports: {}, libraryResolver: i4, console: n3.console ?? Ae, timeZone: n3.timeZone ?? null, lrucache: n3.lrucache, interceptor: n3.interceptor, depthCounter: { depth: 1 } };
  let s6 = V$2(a3, e4);
  if (s6 instanceof F$3 && (s6 = s6.value), s6 instanceof M$4 && (s6 = s6.value), s6 === w$3 && (s6 = null), s6 === O$3)
    throw new a$5(a3, r$5.IllegalResult, null);
  if (s6 === R$2)
    throw new a$5(a3, r$5.IllegalResult, null);
  if (v$4(s6))
    throw new a$5(a3, r$5.IllegalResult, null);
  return s6;
}
Me([p$4]);
const w = /* @__PURE__ */ new Set(["feature", "angle", "bearing", "centroid", "envelopeintersects", "extent", "geometry", "isselfintersecting", "ringisclockwise"]);
let A$1 = false, g = false, h2 = null, j2 = [];
function x2(t6, r3) {
  if (true === r3.useAsync || true === t6.isAsync)
    return M$1(t6, r3);
  if (has("esri-csp-restrictions")) {
    return function(e4) {
      return Ee(t6, e4);
    };
  }
  try {
    return Le(t6, r3);
  } catch (n3) {
    if ("esri.arcade.arcadeuncompilableerror" === n3.declaredRootClass)
      return function(e4) {
        return Ee(t6, e4);
      };
    throw n3;
  }
}
function M$1(t6, r3) {
  if (null === h2)
    throw new a$5(null, r$5.AsyncNotEnabled, null);
  if (has("esri-csp-restrictions")) {
    return function(e4) {
      return h2.executeScript(t6, e4);
    };
  }
  try {
    return Le(t6, r3, true);
  } catch (n3) {
    if ("esri.arcade.arcadeuncompilableerror" === n3.declaredRootClass)
      return function(e4) {
        return h2.executeScript(t6, e4);
      };
    throw n3;
  }
}
function F(e4) {
  Me(e4), Ee$1(e4, "sync"), null === h2 ? j2.push(e4) : (Ee$1(e4, "async"), h2.extend(e4));
}
function E(e4, t6 = []) {
  return n2(e4, t6);
}
function v(e4, t6, r3 = []) {
  return G$1(n2(e4, r3), t6);
}
function G$1(e4, t6) {
  if (true === t6.useAsync || true === e4.isAsync) {
    if (null === h2)
      throw new a$5(null, r$5.AsyncNotEnabled, null);
    return h2.executeScript(e4, t6);
  }
  return Ee(e4, t6);
}
function U$1(e4, t6) {
  return c$3(e4, t6);
}
function _$1(e4, t6) {
  return p$5(e4, t6);
}
function I$1(e4, t6 = false) {
  return void 0 === t6 && (t6 = false), l$6(e4);
}
function R(e4) {
  return u$5(e4);
}
function C2(e4, t6 = []) {
  return void 0 === e4.usesGeometry && d$4(e4, t6), true === e4.usesGeometry;
}
let D$1 = null;
function k() {
  return D$1 || (D$1 = z(), D$1);
}
async function z() {
  const e4 = await import("./chunk-WuibsuuF.js");
  return g = true, C$2(e4), true;
}
let P$1 = null;
function L$1() {
  return null !== P$1 || (P$1 = N$1()), P$1;
}
async function N$1() {
  await Re(), h2 = await import("./chunk-r9nolioy.js");
  for (const e4 of j2)
    h2.extend(e4), Ee$1(e4, "async");
  return j2 = null, true;
}
function O$1() {
  return A$1;
}
function T$1() {
  return !!h2;
}
function q$1() {
  return g;
}
let B$1 = null;
function H$1() {
  return B$1 || (B$1 = J$1(), B$1);
}
async function J$1() {
  await L$1();
  const [e4, r3, n3, s6, u3] = await Promise.all([import("./chunk-J_UQQa3Y.js").then((n4) => n4.l), import("./chunk-tbjP4kDr.js"), import("./chunk-9Atcu6C2.js"), import("./chunk-1BtRPXFc.js"), import("./chunk-zmTByh7r.js")]);
  return ee$1 = e4, h2.extend([r3, n3, s6, u3]), Ee$1([r3, n3, s6, u3], "async"), A$1 = true, true;
}
function K$1(e4, t6 = []) {
  return void 0 === e4.usesFeatureSet && d$4(e4, t6), true === e4.usesFeatureSet;
}
function Q$1(e4, t6 = []) {
  return void 0 === e4.isAsync && d$4(e4, t6), true === e4.isAsync;
}
function V$1(e4, t6) {
  if (t6) {
    for (const r3 of t6)
      if (U$1(e4, r3))
        return true;
    return false;
  }
  return false;
}
async function W$1(e4, t6, r3 = [], n3 = false, s6 = null) {
  return X$1(/* @__PURE__ */ new Set(), e4, t6, r3, n3, s6);
}
async function X$1(e4, t6, r3, n3 = [], s6 = false, u3 = null) {
  const a3 = "string" == typeof t6 ? E(t6) : t6, o3 = [];
  return a3 && (false === q$1() && (C2(a3) || s6) && o3.push(k()), false === T$1() && (true === a3.isAsync || r3) && o3.push(L$1()), false === O$1() && (K$1(a3) || V$1(a3, n3)) && o3.push(H$1())), o3.length && await Promise.all(o3), await Z$1(e4, a3, u3, r3, s6), true;
}
function Y$1(e4, t6 = []) {
  return void 0 === e4.usesModules && d$4(e4, t6), true === e4.usesModules;
}
async function Z$1(e4, t6, r3 = null, s6 = false, u3 = false) {
  const c2 = x$4(t6);
  null === r3 && c2.length > 0 && (r3 = l.getDefault()), t6.loadedModules = {};
  for (const n3 of c2) {
    n$7(r3);
    const c3 = r3.normalizeModuleUri(n3.source);
    if (e4.has(c3.uri))
      throw new a$5(null, r$5.CircularModules, null);
    e4.add(c3.uri);
    const i4 = await r3.fetchModule(c3);
    await X$1(e4, i4, s6, [], u3, r3), e4.delete(c3.uri), i4.isAsync && (t6.isAsync = true), i4.usesFeatureSet && (t6.usesFeatureSet = true), i4.usesGeometry && (t6.usesGeometry = true), t6.loadedModules[n3.libname] = { uri: c3.uri, script: i4 };
  }
}
function $(e4) {
  if (C2(e4))
    return true;
  const t6 = y$3(e4);
  let r3 = false;
  for (let n3 = 0; n3 < t6.length; n3++)
    if (w.has(t6[n3])) {
      r3 = true;
      break;
    }
  return r3;
}
let ee$1 = null;
function te$1() {
  return ee$1;
}
const re$1 = Object.freeze(Object.defineProperty({ __proto__: null, _loadScriptDependenciesImpl: X$1, compileScript: x2, enableAsyncSupport: L$1, enableAsyncSupportImpl: N$1, enableFeatureSetSupport: H$1, enableFeatureSetSupportImpl: J$1, enableGeometrySupport: k, enableGeometrySupportImpl: z, executeScript: G$1, extend: F, extractExpectedFieldLiterals: R, extractFieldLiterals: I$1, featureSetUtils: te$1, isAsyncEnabled: T$1, isFeatureSetSupportEnabled: O$1, isGeometryEnabled: q$1, loadDependentModules: Z$1, loadScriptDependencies: W$1, parseAndExecuteScript: v, parseScript: E, referencesFunction: _$1, referencesMember: U$1, scriptIsAsync: Q$1, scriptTouchesGeometry: $, scriptUsesFeatureSet: K$1, scriptUsesGeometryEngine: C2, scriptUsesModules: Y$1 }, Symbol.toStringTag, { value: "Module" }));
const M = /^\$(feature|aggregatedFeatures)\./i, P2 = { vars: { $feature: "any", $view: "any" }, spatialReference: null };
function A(e4) {
  return e4.replaceAll(/[|\\{}()[\]^$+*?.]/g, "\\$&");
}
function q(e4) {
  return null == e4 ? null : q$7(e4) || $$4(e4) ? "array" : Q$5(e4) ? "date" : P$6(e4) ? "text" : G$4(e4) ? "boolean" : z$6(e4) ? "number" : e4 instanceof N$3 ? "dictionary" : U$3(e4) ? "feature" : e4 instanceof x$5 ? "point" : e4 instanceof j$3 ? "polygon" : e4 instanceof m$8 ? "polyline" : e4 instanceof u$8 ? "multipoint" : e4 instanceof M$6 ? "extent" : e4 instanceof n$5 ? "dateOnly" : e4 instanceof n$6 ? "time" : H$5(e4) ? "featureSet" : W$6(e4) ? "featureSetCollection" : null;
}
function I(n3) {
  if (!n3)
    return null;
  try {
    return E(n3);
  } catch (r3) {
  }
  return null;
}
function O(e4, r3) {
  const t6 = "string" == typeof e4 ? I(e4) : e4;
  if (!t6)
    return null;
  try {
    return r3 = r3 || a$8(P2), x2(t6, r3);
  } catch (o3) {
  }
  return null;
}
function G2(e4, n3, r3) {
  return { vars: { $feature: null == e4 ? new D$5() : D$5.createFromGraphic(e4, r3), $view: n3?.view }, spatialReference: n3?.sr, timeZone: r3 ?? null };
}
function T(e4, n3, r3) {
  return D$5.createFromGraphicLikeObject(n3, e4, r3, null);
}
function V2(e4, n3) {
  null != e4.vars && (e4.vars.$feature = n3);
}
function D2(e4, n3) {
  let t6;
  try {
    t6 = G$1(e4, n3);
  } catch (o3) {
    t6 = null;
  }
  return t6;
}
function L(e4, n3) {
  let r3;
  try {
    r3 = e4 ? e4(n3) : null;
  } catch (t6) {
    r3 = null;
  }
  return r3;
}
function J2(e4, n3) {
  try {
    return e4 ? e4(n3) : Promise.resolve(null);
  } catch (r3) {
    return Promise.resolve(null);
  }
}
function U(e4, n3) {
  if (!e4)
    return [];
  const r3 = "string" == typeof e4 ? I(e4) : e4;
  if (!r3)
    return [];
  const o3 = R(r3);
  let i4 = new Array();
  o3.forEach((e5) => {
    M.test(e5) && (e5 = e5.replace(M, ""), i4.push(e5));
  });
  const s6 = i4.filter((e5) => e5.includes("*"));
  return i4 = i4.filter((e5) => !s6.includes(e5)), n3 && s6.forEach((e5) => {
    const r4 = new RegExp(`^${e5.split(/\*+/).map(A).join(".*")}$`, "i");
    n3.forEach((e6) => r4.test(e6) ? i4.push(e6) : null);
  }), [...new Set(i4.sort())];
}
function Z2(e4) {
  return U$1(e4, "$view");
}
function B2(e4, n3) {
  return !!e4 && U$1(e4, n3);
}
function H(e4) {
  if (!e4 || null == e4.spatialReference && (null == e4.scale || null == e4.viewingMode))
    return;
  return { view: e4.viewingMode && null != e4.scale ? new N$3({ viewingMode: e4.viewingMode, scale: e4.scale }) : null, sr: e4.spatialReference };
}
function K2({ url: e4, spatialReference: n3, lrucache: r3, interceptor: t6 }) {
  const o3 = te$1();
  return o3 ? o3.createFeatureSetCollectionFromService(e4, n3, r3, t6) : null;
}
function N2({ layer: e4, spatialReference: n3, outFields: r3, returnGeometry: t6, lrucache: o3, interceptor: i4 }) {
  if (null === e4)
    return null;
  const s6 = te$1();
  return s6 ? s6.constructFeatureSet(e4, n3, r3, t6 ?? true, o3, i4) : null;
}
function Q(e4) {
  if (null === e4?.map)
    return null;
  const n3 = te$1();
  return n3 ? n3.createFeatureSetCollectionFromMap(e4.map, e4.spatialReference, e4.lrucache, e4.interceptor) : null;
}
function W(e4, n3) {
  return N$3.convertJsonToArcade(e4, n3);
}
function X(e4, n3, r3 = []) {
  return W$1(e4, n3, r3);
}
function Y2() {
  return k();
}
function _() {
  return H$1();
}
function ee(e4) {
  return "simple" === e4.type || "class-breaks" === e4.type || "unique-value" === e4.type || "dot-density" === e4.type || "dictionary" === e4.type || "pie-chart" === e4.type;
}
function ne(e4) {
  return "esri.layers.support.LabelClass" === e4.declaredClass;
}
function re(e4) {
  return "esri.PopupTemplate" === e4.declaredClass;
}
function te(e4, n3) {
  if (!e4)
    return false;
  if ("string" == typeof e4)
    return n3(e4);
  const r3 = e4;
  if (ee(r3)) {
    if ("dot-density" === r3.type) {
      const e6 = r3.attributes?.some((e7) => n3(e7.valueExpression));
      if (e6)
        return e6;
    }
    const e5 = r3.visualVariables, t6 = !!e5 && e5.some((e6) => {
      let r4 = n3(e6.valueExpression);
      return "size" === e6.type && (ue(e6.minSize) && (r4 = r4 || n3(e6.minSize.valueExpression)), ue(e6.maxSize) && (r4 = r4 || n3(e6.maxSize.valueExpression))), r4;
    });
    return !(!("valueExpression" in r3) || !n3(r3.valueExpression)) || t6;
  }
  if (ne(r3)) {
    const e5 = r3.labelExpressionInfo?.expression;
    return !(!e5 || !n3(e5)) || false;
  }
  return !!re(r3) && (!!r3.expressionInfos && r3.expressionInfos.some((e5) => n3(e5.expression)) || Array.isArray(r3.content) && r3.content.some((e5) => "expression" === e5.type && n3(e5.expressionInfo?.expression)));
}
function oe(e4) {
  const n3 = I(e4);
  return !!n3 && $(n3);
}
function ie(e4) {
  return te(e4, oe);
}
function se(e4) {
  const n3 = I(e4);
  return !!n3 && C2(n3);
}
function ae(e4) {
  return te(e4, se);
}
function ue(e4) {
  return e4 && "esri.renderers.visualVariables.SizeVariable" === e4.declaredClass;
}
const arcadeUtils = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Dictionary: N$3,
  arcade: re$1,
  arcadeFeature: D$5,
  convertFeatureLayerToFeatureSet: N2,
  convertJsonToArcade: W,
  convertMapToFeatureSetCollection: Q,
  convertServiceUrlToWorkspace: K2,
  createExecContext: G2,
  createFeature: T,
  createFunction: O,
  createSyntaxTree: I,
  dependsOnView: Z2,
  enableFeatureSetOperations: _,
  enableGeometryOperations: Y2,
  evalSyntaxTree: D2,
  executeAsyncFunction: J2,
  executeFunction: L,
  extractFieldNames: U,
  getArcadeType: q,
  getViewInfo: H,
  hasGeometryFunctions: ie,
  hasGeometryOperations: ae,
  hasVariable: B2,
  loadScriptDependencies: X,
  updateExecContext: V2
}, Symbol.toStringTag, { value: "Module" }));
export {
  $$2 as $,
  L$4 as A,
  be$2 as B,
  C$3 as C,
  D$5 as D,
  t$3 as E,
  F$3 as F,
  G$4 as G,
  H$5 as H,
  Ie$2 as I,
  t$5 as J,
  K$4 as K,
  L$3 as L,
  M$4 as M,
  N$3 as N,
  O$3 as O,
  P$6 as P,
  Q$5 as Q,
  R$2 as R,
  we$2 as S,
  I$5 as T,
  U$3 as U,
  y$4 as V,
  W$5 as W,
  X$6 as X,
  l$4 as Y,
  ke as Z,
  Ge as _,
  a$5 as a,
  De$1 as a0,
  ze as a1,
  Ee$2 as a2,
  xe$2 as a3,
  Ve as a4,
  Ze as a5,
  de$3 as a6,
  Ue$1 as a7,
  k$4 as a8,
  je$1 as a9,
  t$2 as aA,
  Pe as aB,
  Ye as aC,
  arcadeUtils as aD,
  Me$2 as aa,
  Fe$2 as ab,
  u$4 as ac,
  y$2 as ad,
  i$3 as ae,
  r$2 as af,
  l$7 as ag,
  f$4 as ah,
  d$5 as ai,
  g$4 as aj,
  T$6 as ak,
  F$4 as al,
  a$4 as am,
  u$6 as an,
  G$5 as ao,
  N$4 as ap,
  s$6 as aq,
  O$4 as ar,
  I$6 as as,
  p$7 as at,
  E$3 as au,
  v$5 as av,
  Re$1 as aw,
  P$7 as ax,
  M$5 as ay,
  J$7 as az,
  $$4 as b,
  pe$2 as c,
  ce$3 as d,
  e$4 as e,
  f$2 as f,
  se$4 as g,
  fe$2 as h,
  Ne$1 as i,
  r$4 as j,
  s$7 as k,
  n$3 as l,
  m$3 as m,
  ne$4 as n,
  o$4 as o,
  p$4 as p,
  q$7 as q,
  r$5 as r,
  s$9 as s,
  s$a as t,
  u$7 as u,
  v$4 as v,
  w$3 as w,
  ge$2 as x,
  qe as y,
  z$6 as z
};