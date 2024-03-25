import { a as n$2, n as n$3, m as m$4 } from "./chunk-KfB6QvrM.js";
import { e6 as r$2, oz as t$2, uu as i$1, uv as r$3, cO as o$3, b0 as has } from "./chunk-ejFG4zJ0.js";
import { DateTime, Zone, FixedOffsetZone } from "luxon";
var t$1;
!function(e2) {
  e2.InvalidFunctionParameters = "InvalidFunctionParameters", e2.InvalidValueForAggregateFunction = "InvalidValueForAggregateFunction", e2.UnsupportedSqlFunction = "UnsupportedSqlFunction", e2.UnsupportedOperator = "UnsupportedOperator", e2.UnsupportedSyntax = "UnsupportedSyntax", e2.UnsupportedIsRhs = "UnsupportedIsRhs", e2.UnsupportedIsLhs = "UnsupportedIsLhs", e2.InvalidDataType = "InvalidDataType", e2.CannotCastValue = "CannotCastValue", e2.FunctionNotRecognized = "FunctionNotRecognized", e2.InvalidTime = "InvalidTime", e2.InvalidParameterCount = "InvalidParameterCount", e2.InvalidTimeStamp = "InvalidTimeStamp", e2.InvalidDate = "InvalidDate", e2.InvalidOperator = "InvalidOperator", e2.IllegalInterval = "IllegalInterval", e2.YearMonthIntervals = "YearMonthIntervals", e2.PrimarySecondaryQualifiers = "PrimarySecondaryQualifiers", e2.MissingStatisticParameters = "MissingStatisticParameters";
}(t$1 || (t$1 = {}));
const a = { [t$1.InvalidValueForAggregateFunction]: "Invalid value used in aggregate function", [t$1.MissingStatisticParameters]: "Statistic does not have 1 or 0 Parameters", [t$1.InvalidFunctionParameters]: "Invalid parameters for call to {function}", [t$1.UnsupportedIsLhs]: "Unsupported left hand expression in is statement", [t$1.UnsupportedIsRhs]: "Unsupported right hand expression in is statement", [t$1.UnsupportedOperator]: "Unsupported operator - {operator}", [t$1.UnsupportedSyntax]: "Unsupported syntax - {node}", [t$1.UnsupportedSqlFunction]: "Sql function not found = {function}", [t$1.InvalidDataType]: "Invalid sql data type", [t$1.InvalidDate]: "Invalid date encountered", [t$1.InvalidOperator]: "Invalid operator encountered", [t$1.InvalidTime]: "Invalid time encountered", [t$1.IllegalInterval]: "Illegal interval", [t$1.FunctionNotRecognized]: "Function not recognized", [t$1.InvalidTimeStamp]: "Invalid timestamp encountered", [t$1.InvalidParameterCount]: "Invalid parameter count for call to {name}", [t$1.PrimarySecondaryQualifiers]: "Primary and Secondary SqlInterval qualifiers not supported", [t$1.YearMonthIntervals]: "Year-Month Intervals not supported", [t$1.CannotCastValue]: "Cannot cast value to the required data type" };
let n$1 = class n extends Error {
  constructor(t2, r2) {
    super(r$2(a[t2], r2)), this.declaredRootClass = "esri.arcade.featureset.support.sqlerror", Error.captureStackTrace && Error.captureStackTrace(this, n);
  }
};
var r$1;
!function(e2) {
  e2.NeverReach = "NeverReach", e2.NotImplemented = "NotImplemented", e2.Cancelled = "Cancelled", e2.InvalidStatResponse = "InvalidStatResponse", e2.InvalidRequest = "InvalidRequest", e2.RequestFailed = "RequestFailed", e2.MissingFeatures = "MissingFeatures", e2.AggregationFieldNotFound = "AggregationFieldNotFound", e2.DataElementsNotFound = "DataElementsNotFound";
}(r$1 || (r$1 = {}));
const o$2 = { [r$1.Cancelled]: "Cancelled", [r$1.InvalidStatResponse]: "Invalid statistics response from service", [r$1.InvalidRequest]: "Invalid request", [r$1.RequestFailed]: "Request failed - {reason}", [r$1.MissingFeatures]: "Missing features", [r$1.AggregationFieldNotFound]: "Aggregation field not found", [r$1.DataElementsNotFound]: "Data elements not found on service", [r$1.NeverReach]: "Encountered unreachable logic", [r$1.NotImplemented]: "Not implemented" };
let s$2 = class s extends Error {
  constructor(t2, a2) {
    super(r$2(o$2[t2], a2)), this.declaredRootClass = "esri.arcade.featureset.support.featureseterror", Error.captureStackTrace && Error.captureStackTrace(this, s);
  }
};
function e$1(t2) {
  return Number.isNaN(t2) || 0 === t2 ? t2 : Math.trunc(t2);
}
class r {
  constructor(t2) {
    this._timeStampOffset = t2, this._date = null;
  }
  toDateTime() {
    return this._date ??= DateTime.fromISO(this._timeStampOffset, { setZone: true }), this._date;
  }
  get isValid() {
    return this.toDateTime().isValid;
  }
  get timezoneOffsetHour() {
    return e$1(this.toDateTime().offset / 60);
  }
  get timezoneOffsetMinutes() {
    return e$1(this.toDateTime().offset % 60);
  }
  toMilliseconds() {
    return this.toDateTime().toMillis();
  }
  get hour() {
    return this.toDateTime().hour;
  }
  get minute() {
    return this.toDateTime().minute;
  }
  get second() {
    return this.toDateTime().second;
  }
  get day() {
    return this.toDateTime().day;
  }
  get month() {
    return this.toDateTime().month;
  }
  get year() {
    return this.toDateTime().year;
  }
  startOfDay() {
    return r.fromDateTime(this.toDateTime().startOf("day"));
  }
  static fromJSDate(e2) {
    return new r(DateTime.fromJSDate(e2).toISO({ includeOffset: true }));
  }
  static fromDateTime(t2) {
    return new r(t2.toISO({ includeOffset: true }));
  }
  static fromParts(t2, e2, i2 = 0, a2 = 0, o2 = 0, n3 = 0, s3 = 0, m2 = false, u2 = 0, f2 = 0) {
    const S2 = `${t2.toString().padStart(4, "0")}-${e2.toString().padStart(2, "0")}-${i2.toString().padStart(2, "0")}`;
    let d2 = "";
    n3 < 10 && (d2 = "0");
    let h2 = `${a2.toString().padStart(2, "0")}:${o2.toString().padStart(2, "0")}:${d2 + n3.toString()}`;
    0 !== s3 && (h2 += "." + s3.toString().padStart(3, "0"));
    const l2 = `${m2 ? "-" : "+"}${u2.toString().padStart(2, "0")}:${f2.toString().padStart(2, "0")}`;
    return new r(S2 + "T" + h2 + l2);
  }
  toStorageFormat() {
    return this._timeStampOffset;
  }
  toString() {
    return this._timeStampOffset;
  }
  toSQLValue() {
    let t2 = this.toDateTime().toSQL({ includeOffset: true, includeOffsetSpace: true });
    return t2 && (t2 = t2.replace(".000", "")), t2;
  }
  toSQLWithKeyword() {
    return `timestamp '${this.toSQLValue()}'`;
  }
  addMilliseconds(t2) {
    const e2 = this.toDateTime().plus(t2);
    return r.fromDateTime(e2);
  }
}
function u$2(t2, a2) {
  const e2 = m$3[t2.toLowerCase()];
  if (null == e2)
    throw new n$1(t$1.FunctionNotRecognized);
  if (a2.length < e2.minParams || a2.length > e2.maxParams)
    throw new n$1(t$1.InvalidParameterCount, { name: t2.toUpperCase() });
  return e2.evaluate(a2);
}
function o$1(n3, l2) {
  const t2 = m$3[n3.toLowerCase()];
  return null != t2 && l2 >= t2.minParams && l2 <= t2.maxParams;
}
const m$3 = { min: { minParams: 1, maxParams: 1, evaluate: (n3) => f$1(n3[0], "min") }, max: { minParams: 1, maxParams: 1, evaluate: (n3) => f$1(n3[0], "max") }, avg: { minParams: 1, maxParams: 1, evaluate: (n3) => i(n3[0]) }, sum: { minParams: 1, maxParams: 1, evaluate: (n3) => c$1(n3[0]) }, stddev: { minParams: 1, maxParams: 1, evaluate: (n3) => g$2(n3[0]) }, count: { minParams: 1, maxParams: 1, evaluate: (n3) => null == n3[0] ? null : n3[0].length }, var: { minParams: 1, maxParams: 1, evaluate: (n3) => P$2(n3[0]) } };
function i(t2) {
  if (null === t2)
    return null;
  let a2 = 0, e2 = 0;
  for (let r2 = 0; r2 < t2.length; r2++) {
    const u2 = t2[r2];
    if (null !== u2) {
      if (!s$1(u2))
        throw new n$1(t$1.InvalidValueForAggregateFunction);
      e2++, a2 += u2;
    }
  }
  return 0 === e2 ? null : a2 / t2.length;
}
function s$1(n3) {
  return "number" == typeof n3;
}
function f$1(n3, l2) {
  if (null === n3)
    return null;
  let u2 = null, o2 = null;
  for (const m2 of n3) {
    let n4 = m2;
    n4 = m2 instanceof n$2 || m2 instanceof n$3 ? m2.toNumber() : m2 instanceof DateTime ? m2.toMillis() : m2 instanceof r ? m2.toMilliseconds() : m2, (null === u2 || "max" === l2 && null !== o2 && null !== n4 && o2 <= n4 || "min" === l2 && null !== o2 && null !== n4 && o2 >= n4) && (u2 = m2, o2 = n4);
  }
  return u2;
}
function c$1(t2) {
  if (null === t2)
    return null;
  let a2 = 0;
  for (let e2 = 0; e2 < t2.length; e2++) {
    const r2 = t2[e2];
    if (null !== r2) {
      if (!s$1(r2))
        throw new n$1(t$1.InvalidValueForAggregateFunction);
      a2 += r2;
    }
  }
  return a2;
}
function g$2(n3) {
  if (null === n3)
    return null;
  const l2 = P$2(n3);
  return null === l2 ? null : Math.sqrt(l2);
}
function P$2(t2) {
  if (null === t2)
    return null;
  if (0 === (t2 = t2.filter((n3) => null !== n3)).length)
    return null;
  const a2 = i(t2);
  if (null === a2)
    return null;
  let e2 = 0;
  for (const r2 of t2) {
    if (!s$1(r2))
      throw new n$1(t$1.InvalidValueForAggregateFunction);
    e2 += (a2 - r2) ** 2;
  }
  return e2 / (t2.length - 1);
}
class s2 {
  constructor() {
    this.op = "+", this.day = 0, this.second = 0, this.hour = 0, this.month = 0, this.year = 0, this.minute = 0, this.millis = 0;
  }
  static _fixDefaults(s3) {
    if (null !== s3.precision || null !== s3.secondary)
      throw new n$1(t$1.PrimarySecondaryQualifiers);
  }
  static _parseSecondsComponent(e2, t2) {
    if (t2.includes(".")) {
      const s3 = t2.split(".");
      e2.second = parseFloat(s3[0]), e2.millis = parseInt(s3[1], 10);
    } else
      e2.second = parseFloat(t2);
  }
  static createFromMilliseconds(e2) {
    const t2 = new s2();
    return t2.second = e2 / 1e3, t2;
  }
  static createFromValueAndQualifier(r2, a2, l2) {
    let o2 = null;
    const n3 = new s2();
    if (n3.op = "-" === l2 ? "-" : "+", "interval-period" === a2.type) {
      s2._fixDefaults(a2);
      const l3 = new RegExp("^[0-9]{1,}$");
      if ("year" === a2.period || "month" === a2.period)
        throw new n$1(t$1.YearMonthIntervals);
      if ("second" === a2.period) {
        if (!/^[0-9]{1,}([.]{1}[0-9]{1,}){0,1}$/.test(r2))
          throw new n$1(t$1.IllegalInterval);
        s2._parseSecondsComponent(n3, r2);
      } else {
        if (!l3.test(r2))
          throw new n$1(t$1.IllegalInterval);
        n3[a2.period] = parseFloat(r2);
      }
    } else {
      if (s2._fixDefaults(a2.start), s2._fixDefaults(a2.end), "year" === a2.start.period || "month" === a2.start.period || "year" === a2.end.period || "month" === a2.end.period)
        throw new n$1(t$1.YearMonthIntervals);
      switch (a2.start.period) {
        case "day":
          switch (a2.end.period) {
            case "hour":
              if (o2 = new RegExp("^[0-9]{1,} [0-9]{1,}$"), !o2.test(r2))
                throw new n$1(t$1.IllegalInterval);
              n3[a2.start.period] = parseFloat(r2.split(" ")[0]), n3[a2.end.period] = parseFloat(r2.split(" ")[1]);
              break;
            case "minute":
              if (o2 = new RegExp("^[0-9]{1,} [0-9]{1,2}:[0-9]{1,}$"), !o2.test(r2))
                throw new n$1(t$1.IllegalInterval);
              {
                n3[a2.start.period] = parseFloat(r2.split(" ")[0]);
                const e2 = r2.split(" ")[1].split(":");
                n3.hour = parseFloat(e2[0]), n3.minute = parseFloat(e2[1]);
              }
              break;
            case "second":
              if (o2 = new RegExp("^[0-9]{1,} [0-9]{1,2}:[0-9]{1,2}:[0-9]{1,}([.]{1}[0-9]{1,}){0,1}$"), !o2.test(r2))
                throw new n$1(t$1.IllegalInterval);
              {
                n3[a2.start.period] = parseFloat(r2.split(" ")[0]);
                const e2 = r2.split(" ")[1].split(":");
                n3.hour = parseFloat(e2[0]), n3.minute = parseFloat(e2[1]), s2._parseSecondsComponent(n3, e2[2]);
              }
              break;
            default:
              throw new n$1(t$1.IllegalInterval);
          }
          break;
        case "hour":
          switch (a2.end.period) {
            case "minute":
              if (o2 = new RegExp("^[0-9]{1,}:[0-9]{1,}$"), !o2.test(r2))
                throw new n$1(t$1.IllegalInterval);
              n3.hour = parseFloat(r2.split(":")[0]), n3.minute = parseFloat(r2.split(":")[1]);
              break;
            case "second":
              if (o2 = new RegExp("^[0-9]{1,}:[0-9]{1,2}:[0-9]{1,}([.]{1}[0-9]{1,}){0,1}$"), !o2.test(r2))
                throw new n$1(t$1.IllegalInterval);
              {
                const e2 = r2.split(":");
                n3.hour = parseFloat(e2[0]), n3.minute = parseFloat(e2[1]), s2._parseSecondsComponent(n3, e2[2]);
              }
              break;
            default:
              throw new n$1(t$1.IllegalInterval);
          }
          break;
        case "minute":
          if ("second" !== a2.end.period)
            throw new n$1(t$1.IllegalInterval);
          if (o2 = new RegExp("^[0-9]{1,}:[0-9]{1,}([.]{1}[0-9]{1,}){0,1}$"), !o2.test(r2))
            throw new n$1(t$1.IllegalInterval);
          {
            const e2 = r2.split(":");
            n3.minute = parseFloat(e2[0]), s2._parseSecondsComponent(n3, e2[1]);
          }
          break;
        default:
          throw new n$1(t$1.IllegalInterval);
      }
    }
    return n3;
  }
  valueInMilliseconds() {
    return ("-" === this.op ? -1 : 1) * (this.millis + 1e3 * this.second + 60 * this.minute * 1e3 + 60 * this.hour * 60 * 1e3 + 24 * this.day * 60 * 60 * 1e3 + this.month * (365 / 12) * 24 * 60 * 60 * 1e3 + 365 * this.year * 24 * 60 * 60 * 1e3);
  }
}
const l$1 = /^(\d{1,2}):(\d{1,2}):(\d{1,2})$/, d$2 = /^(\d{1,2}):(\d{1,2})$/, c = /^(\d{1,2}):(\d{1,2}):(\d{1,2}).([0-9]+)$/, u$1 = /^(\d{4})-(\d{1,2})-(\d{1,2})$/, m$2 = /^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})(\.[0-9]+)?$/, I$3 = /^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})(\.[0-9]+)?[ ]{0,1}(\+|\-)(\d{1,2}):(\d{1,2})$/, w$3 = /^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2})?[ ]{0,1}(\+|\-)(\d{1,2}):(\d{1,2})$/, h$2 = /^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2})$/;
function T$3(n3, e2) {
  if (e2 instanceof Zone)
    return e2 === t$2.instance ? DateTime.fromMillis(n3.getTime(), { zone: t$2.instance }) : DateTime.fromJSDate(n3, { zone: e2 });
  switch (e2) {
    case "system":
    case "local":
    case null:
      return DateTime.fromJSDate(n3);
    default:
      return "unknown" === e2?.toLowerCase() ? DateTime.fromMillis(n3.getTime(), { zone: t$2.instance }) : DateTime.fromJSDate(n3, { zone: e2 });
  }
}
function v$3(n3) {
  return "number" == typeof n3;
}
function y$2(n3) {
  return "string" == typeof n3 || n3 instanceof String;
}
function S$1(n3) {
  return n3 instanceof s2;
}
function x$4(n3) {
  return n3 instanceof Date;
}
function j$3(n3) {
  return n3 instanceof DateTime;
}
function $$1(n3) {
  return n3 instanceof n$2;
}
function z$2(n3) {
  return n3 instanceof n$3;
}
function D$3(n3) {
  return n3 instanceof r;
}
function O$3(t2) {
  let r2 = l$1.exec(t2);
  if (null !== r2) {
    const [, t3, a2, s3] = r2, i2 = n$3.fromParts(parseInt(t3, 10), parseInt(a2, 10), parseInt(s3, 10), 0);
    if (null !== i2)
      return i2;
    throw new n$1(t$1.InvalidTime);
  }
  if (r2 = d$2.exec(t2), null !== r2) {
    const [, t3, a2] = r2, s3 = n$3.fromParts(parseInt(t3, 10), parseInt(a2, 10), 0, 0);
    if (null !== s3)
      return s3;
    throw new n$1(t$1.InvalidTime);
  }
  if (r2 = c.exec(t2), null !== r2) {
    const [, t3, a2, s3, i2] = r2, f2 = n$3.fromParts(parseInt(t3, 10), parseInt(a2, 10), parseInt(s3, 10), parseInt(i2, 10));
    if (null !== f2)
      return f2;
    throw new n$1(t$1.InvalidTime);
  }
  throw new n$1(t$1.InvalidTime);
}
function P$1(t2, r$12, o2 = false) {
  let s3 = m$2.exec(t2);
  if (null !== s3) {
    const [, t3, a2, o3, f2, l2, d2, c2] = s3, u2 = DateTime.fromObject({ year: parseInt(t3, 10), month: parseInt(a2, 10), day: parseInt(o3, 10), hour: parseInt(f2, 10), minute: parseInt(l2, 10), second: parseInt(d2, 10), millisecond: c2 ? parseInt(c2.replace(".", ""), 10) : 0 }, { zone: i$1(r$12) });
    if (false === u2.isValid)
      throw new n$1(t$1.InvalidTimeStamp);
    return u2;
  }
  if (s3 = I$3.exec(t2), null !== s3) {
    const [, t3, r$13, o3, i2, f2, p2, l2, d2, c2, u2] = s3, m2 = r.fromParts(parseInt(t3, 10), parseInt(r$13, 10), parseInt(o3, 10), parseInt(i2, 10), parseInt(f2, 10), parseInt(p2, 10), l2 ? parseInt(l2.replace(".", ""), 10) : 0, "-" === d2, parseInt(c2, 10), parseInt(u2, 10));
    if (false === m2.isValid)
      throw new n$1(t$1.InvalidTimeStamp);
    return m2;
  }
  if (s3 = w$3.exec(t2), null !== s3) {
    const [, t3, r$13, o3, i2, f2, p2, l2, d2] = s3, c2 = r.fromParts(parseInt(t3, 10), parseInt(r$13, 10), parseInt(o3, 10), parseInt(i2, 10), parseInt(f2, 10), 0, 0, "-" === p2, parseInt(l2, 10), parseInt(d2, 10));
    if (false === c2.isValid)
      throw new n$1(t$1.InvalidTimeStamp);
    return c2;
  }
  if (s3 = h$2.exec(t2), null !== s3) {
    const [, t3, a2, o3, f2, l2] = s3, d2 = DateTime.fromObject({ year: parseInt(t3, 10), month: parseInt(a2, 10), day: parseInt(o3, 10), hour: parseInt(f2, 10), minute: parseInt(l2, 10), second: 0 }, { zone: i$1(r$12) });
    if (false === d2.isValid)
      throw new n$1(t$1.InvalidTimeStamp);
    return d2;
  }
  if (s3 = u$1.exec(t2), null !== s3) {
    const [, t3, a2, o3] = s3, f2 = DateTime.fromObject({ year: parseInt(t3, 10), month: parseInt(a2, 10), day: parseInt(o3, 10), hour: 0, minute: 0, second: 0 }, { zone: i$1(r$12) });
    if (false === f2.isValid)
      throw new n$1(t$1.InvalidTimeStamp);
    return f2;
  }
  throw new n$1(t$1.InvalidTimeStamp);
}
function V$2(r2, a2) {
  const o2 = u$1.exec(r2);
  if (null === o2)
    try {
      return P$1(r2, a2);
    } catch {
      throw new n$1(t$1.InvalidDate);
    }
  const [, s3, i2, f2] = o2, p2 = n$2.fromParts(parseInt(s3, 10), parseInt(i2, 10), parseInt(f2, 10));
  if (null === p2)
    throw new n$1(t$1.InvalidDate);
  return p2;
}
const l = 321408e5, w$2 = 26784e5, p$2 = 864e5, d$1 = 36e5, m$1 = 6e4;
function h$1(r2) {
  return !!j$3(r2) || !!D$3(r2);
}
function O$2(r2) {
  return !!j$3(r2) || (!!$$1(r2) || (!!D$3(r2) || !!z$2(r2)));
}
function v$2(o2) {
  if (j$3(o2))
    return o2.toMillis();
  if ($$1(o2))
    return o2.toNumber();
  if (D$3(o2))
    return o2.toMilliseconds();
  throw new n$1(t$1.InvalidDataType);
}
function I$2(l2, w2, p2, d2) {
  if (null == l2 || null == w2)
    return null;
  if (v$3(l2)) {
    if (v$3(w2))
      return D$2(l2, w2, p2);
    if (y$2(w2))
      return T$2(l2, w2, p2);
    if (O$2(w2))
      throw new n$1(t$1.InvalidOperator);
    if ($$1(w2))
      throw new n$1(t$1.InvalidOperator);
  } else if (y$2(l2)) {
    if (v$3(w2))
      return M$2(l2, w2, p2);
    if (y$2(w2))
      return z$1(l2, w2, p2);
    if (j$3(w2))
      throw new n$1(t$1.InvalidOperator);
    if ($$1(w2))
      throw new n$1(t$1.InvalidOperator);
    if (z$2(w2))
      throw new n$1(t$1.InvalidOperator);
    if (D$3(w2))
      throw new n$1(t$1.InvalidOperator);
  } else if (j$3(l2)) {
    if (h$1(w2)) {
      if (l2 instanceof DateTime && r$3(l2.zone)) {
        if (w2 instanceof DateTime && false === r$3(w2.zone))
          return j$2(l2, w2, p2);
        if (w2 instanceof r)
          return j$2(l2, w2, p2);
      } else if (w2 instanceof DateTime && r$3(w2.zone)) {
        if (l2 instanceof DateTime && false === r$3(l2.zone))
          return j$2(l2, w2, p2);
        if (l2 instanceof r)
          return j$2(l2, w2, p2);
      }
      return D$2(v$2(l2), v$2(w2), p2);
    }
    if (y$2(w2))
      throw new n$1(t$1.InvalidOperator);
    if ($$1(w2))
      return N$1(l2, w2, p2);
    if (z$2(w2))
      throw new n$1(t$1.InvalidOperator);
    if (v$3(w2))
      throw new n$1(t$1.InvalidOperator);
  } else if ($$1(l2)) {
    if (D$3(w2))
      return b$2(l2, w2, p2);
    if (j$3(w2))
      return x$3(l2, w2, p2);
    if (y$2(w2))
      throw new n$1(t$1.InvalidOperator);
    if ($$1(w2))
      return D$2(l2.toNumber(), w2.toNumber(), p2);
    if (z$2(w2))
      throw new n$1(t$1.InvalidOperator);
    if (v$3(w2))
      throw new n$1(t$1.InvalidOperator);
  } else if (z$2(l2)) {
    if (z$2(w2))
      return D$2(l2.toNumber(), w2.toNumber(), p2);
    if (y$2(w2))
      throw new n$1(t$1.InvalidOperator);
    if (v$3(w2))
      throw new n$1(t$1.InvalidOperator);
    if ($$1(w2))
      throw new n$1(t$1.InvalidOperator);
    if (h$1(w2))
      throw new n$1(t$1.InvalidOperator);
  } else if (D$3(l2)) {
    if (h$1(w2))
      return w2 instanceof DateTime && r$3(w2.zone) ? j$2(l2, w2, p2) : D$2(v$2(l2), v$2(w2), p2);
    if (y$2(w2))
      throw new n$1(t$1.InvalidOperator);
    if ($$1(w2))
      return y$1(l2, w2, p2);
    if (z$2(w2))
      throw new n$1(t$1.InvalidOperator);
    if (v$3(w2))
      throw new n$1(t$1.InvalidOperator);
  }
  switch (p2) {
    case "<>":
      return l2 !== w2;
    case "=":
      return l2 === w2;
    case ">":
      return l2 > w2;
    case "<":
      return l2 < w2;
    case ">=":
      return l2 >= w2;
    case "<=":
      return l2 <= w2;
  }
}
function D$2(r2, e2, t2) {
  switch (t2) {
    case "<>":
      return r2 !== e2;
    case "=":
      return r2 === e2;
    case ">":
      return r2 > e2;
    case "<":
      return r2 < e2;
    case ">=":
      return r2 >= e2;
    case "<=":
      return r2 <= e2;
  }
}
function T$2(r2, e2, t2) {
  const n3 = parseFloat(e2);
  if (!isNaN(n3))
    return D$2(r2, n3, t2);
  const i2 = r2.toString();
  switch (t2) {
    case "<>":
      return i2 !== e2;
    case "=":
      return i2 === e2;
    case ">":
      return i2 > e2;
    case "<":
      return i2 < e2;
    case ">=":
      return i2 >= e2;
    case "<=":
      return i2 <= e2;
  }
}
function M$2(r2, e2, t2) {
  const n3 = parseFloat(r2);
  if (!isNaN(n3))
    return D$2(n3, e2, t2);
  const i2 = e2.toString();
  switch (t2) {
    case "<>":
      return r2 !== i2;
    case "=":
      return r2 === i2;
    case ">":
      return r2 > i2;
    case "<":
      return r2 < i2;
    case ">=":
      return r2 >= i2;
    case "<=":
      return r2 <= i2;
  }
}
function z$1(r2, e2, t2) {
  switch (t2) {
    case "<>":
      return r2 !== e2;
    case "=":
      return r2 === e2;
    case ">":
      return r2 > e2;
    case "<":
      return r2 < e2;
    case ">=":
      return r2 >= e2;
    case "<=":
      return r2 <= e2;
  }
}
function N$1(r2, e2, t2) {
  const n3 = e2.toDateTimeLuxon(r2.zone);
  return D$2((r2 = r2.startOf("day")).toMillis(), n3.toMillis(), t2);
}
function y$1(r2, e2, t2) {
  const n3 = e2.toDateTimeLuxon(r2.toDateTime().zone);
  return D$2((r2 = r2.startOfDay()).toMilliseconds(), n3.toMillis(), t2);
}
function x$3(r2, e2, t2) {
  const n3 = r2.toDateTimeLuxon(e2.zone);
  return e2 = e2.startOf("day"), D$2(n3.toMillis(), e2.toMillis(), t2);
}
function b$2(r2, e2, t2) {
  const n3 = r2.toDateTimeLuxon(e2.toDateTime().zone);
  return e2 = e2.startOfDay(), D$2(n3.toMillis(), e2.toMilliseconds(), t2);
}
function j$2(r$12, e2, t2) {
  r$12 instanceof r && (r$12 = r$12.toDateTime()), e2 instanceof r && (e2 = e2.toDateTime());
  const n3 = L$2(r$12), i2 = L$2(e2);
  switch (t2) {
    case "<>":
      return n3 !== i2;
    case "=":
      return n3 === i2;
    case ">":
      return n3 > i2;
    case "<":
      return n3 < i2;
    case ">=":
      return n3 >= i2;
    case "<=":
      return n3 <= i2;
  }
}
function L$2(r2) {
  return r2.year * l + r2.month * w$2 + r2.day * p$2 + r2.hour * d$1 + r2.minute * m$1 + 1e3 * r2.second + r2.millisecond;
}
function w$1(e2, t2, r2) {
  const l2 = T$1[e2.toLowerCase()];
  if (null == l2)
    throw new n$1(t$1.FunctionNotRecognized);
  if (t2.length < l2.minParams || t2.length > l2.maxParams)
    throw new n$1(t$1.InvalidParameterCount, { name: e2.toUpperCase() });
  return l2.evaluate(t2, r2);
}
function C$2(a2, n3) {
  const e2 = T$1[a2.toLowerCase()];
  return null != e2 && n3 >= e2.minParams && n3 <= e2.maxParams;
}
function p$1(a2) {
  return "string" == typeof a2 || a2 instanceof String;
}
function g$1(a2) {
  return !x$4(a2) && (!$$1(a2) && (!j$3(a2) && (!z$2(a2) && !D$3(a2))));
}
function x$2(a2) {
  return $$1(a2) || z$2(a2) ? a2.toString() : D$3(a2) ? a2.toSQLValue() : j$3(a2) ? 0 === a2.millisecond ? a2.toFormat("yyyy-LL-dd HH:mm:ss") : a2.toSQL({ includeOffset: false }) : x$4(a2) ? x$2(DateTime.fromJSDate(a2)) : a2.toString();
}
function E$2(e2) {
  if (x$4(e2))
    return n$2.fromDateJS(e2);
  if (j$3(e2))
    return n$2.fromParts(e2.year, e2.month, e2.day);
  if ($$1(e2))
    return e2;
  if (z$2(e2))
    throw new n$1(t$1.CannotCastValue);
  if (D$3(e2)) {
    if (null === n$2.fromParts(e2.year, e2.month, e2.day))
      throw new n$1(t$1.CannotCastValue);
  }
  if (p$1(e2)) {
    const a2 = n$2.fromReader(e2);
    if (null !== a2 && a2.isValid)
      return a2;
  }
  throw new n$1(t$1.CannotCastValue);
}
function M$1(e2, t2, r2) {
  if (x$4(e2))
    return T$3(e2, t2);
  if (j$3(e2))
    return e2;
  if ($$1(e2))
    return e2.toDateTimeLuxon("unknown");
  if (z$2(e2))
    throw new n$1(t$1.CannotCastValue);
  if (D$3(e2))
    return e2;
  if (p$1(e2))
    return P$1(e2, "unknown", r2);
  throw new n$1(t$1.CannotCastValue);
}
function v$1(e2) {
  if (x$4(e2))
    return n$3.fromDateJS(e2);
  if (j$3(e2))
    return n$3.fromDateTime(e2);
  if ($$1(e2))
    throw new n$1(t$1.CannotCastValue);
  if (z$2(e2))
    return e2;
  if (D$3(e2))
    return n$3.fromSqlTimeStampOffset(e2);
  if (p$1(e2))
    return O$3(e2);
  throw new n$1(t$1.CannotCastValue);
}
const T$1 = { extract: { minParams: 2, maxParams: 2, evaluate: ([e2, t2]) => {
  if (null == t2)
    return null;
  if (x$4(t2))
    switch (e2.toUpperCase()) {
      case "SECOND":
        return t2.getSeconds();
      case "MINUTE":
        return t2.getMinutes();
      case "HOUR":
        return t2.getHours();
      case "DAY":
        return t2.getDate();
      case "MONTH":
        return t2.getMonth() + 1;
      case "YEAR":
        return t2.getFullYear();
      case "TIMEZONE_HOUR":
      case "TIMEZONE_MINUTE":
        return 0;
    }
  else if (j$3(t2))
    switch (e2.toUpperCase()) {
      case "SECOND":
        return t2.second;
      case "MINUTE":
        return t2.minute;
      case "HOUR":
        return t2.hour;
      case "DAY":
        return t2.day;
      case "MONTH":
        return t2.month;
      case "YEAR":
        return t2.year;
      case "TIMEZONE_HOUR":
      case "TIMEZONE_MINUTE":
        throw new n$1(t$1.InvalidFunctionParameters, { function: "EXTRACT" });
    }
  else if ($$1(t2))
    switch (e2.toUpperCase()) {
      case "DAY":
        return t2.day;
      case "MONTH":
        return t2.month;
      case "YEAR":
        return t2.year;
      case "TIMEZONE_HOUR":
      case "TIMEZONE_MINUTE":
        throw new n$1(t$1.InvalidFunctionParameters, { function: "EXTRACT" });
    }
  else if (z$2(t2))
    switch (e2.toUpperCase()) {
      case "SECOND":
        return t2.second;
      case "MINUTE":
        return t2.minute;
      case "HOUR":
        return t2.hour;
    }
  else if (D$3(t2))
    switch (e2.toUpperCase()) {
      case "SECOND":
        return t2.second;
      case "MINUTE":
        return t2.minute;
      case "HOUR":
        return t2.hour;
      case "DAY":
        return t2.day;
      case "MONTH":
        return t2.month;
      case "YEAR":
        return t2.year;
      case "TIMEZONE_HOUR":
        return t2.timezoneOffsetHour;
      case "TIMEZONE_MINUTE":
        return t2.timezoneOffsetMinutes;
    }
  throw new n$1(t$1.InvalidFunctionParameters, { function: "EXTRACT" });
} }, substring: { minParams: 2, maxParams: 3, evaluate: (a2) => {
  if (2 === a2.length) {
    const [n3, e2] = a2;
    return null == n3 || null == e2 ? null : n3.toString().substring(e2 - 1);
  }
  if (3 === a2.length) {
    const [n3, e2, t2] = a2;
    return null == n3 || null == e2 || null == t2 ? null : t2 <= 0 ? "" : n3.toString().substring(e2 - 1, e2 + t2 - 1);
  }
} }, position: { minParams: 2, maxParams: 2, evaluate: ([a2, n3]) => null == a2 || null == n3 ? null : n3.indexOf(a2) + 1 }, trim: { minParams: 2, maxParams: 3, evaluate: (t2) => {
  const r2 = 3 === t2.length, l2 = r2 ? t2[1] : " ", s3 = r2 ? t2[2] : t2[1];
  if (null == l2 || null == s3)
    return null;
  const u2 = `(${o$3(l2)})`;
  switch (t2[0]) {
    case "BOTH":
      return s3.replaceAll(new RegExp(`^${u2}*|${u2}*$`, "g"), "");
    case "LEADING":
      return s3.replaceAll(new RegExp(`^${u2}*`, "g"), "");
    case "TRAILING":
      return s3.replaceAll(new RegExp(`${u2}*$`, "g"), "");
  }
  throw new n$1(t$1.InvalidFunctionParameters, { function: "TRIM" });
} }, abs: { minParams: 1, maxParams: 1, evaluate: (a2) => null == a2[0] ? null : Math.abs(a2[0]) }, ceiling: { minParams: 1, maxParams: 1, evaluate: (a2) => null == a2[0] ? null : Math.ceil(a2[0]) }, floor: { minParams: 1, maxParams: 1, evaluate: (a2) => null == a2[0] ? null : Math.floor(a2[0]) }, log: { minParams: 1, maxParams: 1, evaluate: (a2) => null == a2[0] ? null : Math.log(a2[0]) }, log10: { minParams: 1, maxParams: 1, evaluate: (a2) => null == a2[0] ? null : Math.log(a2[0]) * Math.LOG10E }, sin: { minParams: 1, maxParams: 1, evaluate: (a2) => null == a2[0] ? null : Math.sin(a2[0]) }, cos: { minParams: 1, maxParams: 1, evaluate: (a2) => null == a2[0] ? null : Math.cos(a2[0]) }, tan: { minParams: 1, maxParams: 1, evaluate: (a2) => null == a2[0] ? null : Math.tan(a2[0]) }, asin: { minParams: 1, maxParams: 1, evaluate: (a2) => null == a2[0] ? null : Math.asin(a2[0]) }, acos: { minParams: 1, maxParams: 1, evaluate: (a2) => null == a2[0] ? null : Math.acos(a2[0]) }, atan: { minParams: 1, maxParams: 1, evaluate: (a2) => null == a2[0] ? null : Math.atan(a2[0]) }, sign: { minParams: 1, maxParams: 1, evaluate: (a2) => null == a2[0] ? null : a2[0] > 0 ? 1 : a2[1] < 0 ? -1 : 0 }, power: { minParams: 2, maxParams: 2, evaluate: (a2) => null == a2[0] || null == a2[1] ? null : a2[0] ** a2[1] }, mod: { minParams: 2, maxParams: 2, evaluate: (a2) => null == a2[0] || null == a2[1] ? null : a2[0] % a2[1] }, round: { minParams: 1, maxParams: 2, evaluate: (a2) => {
  const n3 = a2[0], e2 = 2 === a2.length ? 10 ** a2[1] : 1;
  return null == n3 ? null : Math.round(n3 * e2) / e2;
} }, truncate: { minParams: 1, maxParams: 2, evaluate: (a2) => null == a2[0] ? null : 1 === a2.length ? parseInt(a2[0].toFixed(0), 10) : parseFloat(a2[0].toFixed(a2[1])) }, char_length: { minParams: 1, maxParams: 1, evaluate: (a2) => p$1(a2[0]) ? a2[0].length : 0 }, concat: { minParams: 1, maxParams: 1 / 0, evaluate: (a2) => {
  let n3 = "";
  for (let e2 = 0; e2 < a2.length; e2++) {
    if (null == a2[e2])
      return null;
    n3 += a2[e2].toString();
  }
  return n3;
} }, lower: { minParams: 1, maxParams: 1, evaluate: (a2) => null == a2[0] ? null : a2[0].toString().toLowerCase() }, upper: { minParams: 1, maxParams: 1, evaluate: (a2) => null == a2[0] ? null : a2[0].toString().toUpperCase() }, coalesce: { minParams: 1, maxParams: 1 / 0, evaluate: (a2) => {
  for (const n3 of a2)
    if (null !== n3)
      return n3;
  return null;
} }, cosh: { minParams: 1, maxParams: 1, evaluate: (a2) => null == a2[0] ? null : Math.cosh(a2[0]) }, sinh: { minParams: 1, maxParams: 1, evaluate: (a2) => null == a2[0] ? null : Math.sinh(a2[0]) }, tanh: { minParams: 1, maxParams: 1, evaluate: (a2) => null == a2[0] ? null : Math.tanh(a2[0]) }, nullif: { minParams: 2, maxParams: 2, evaluate: (a2, n3) => I$2(a2[0], a2[1], "=") ? null : a2[0] }, cast: { minParams: 2, maxParams: 2, evaluate: (e2, t2) => {
  const r2 = e2[0], l2 = e2[1];
  if (null === r2)
    return null;
  switch (l2.type) {
    case "integer": {
      if (!g$1(r2))
        throw new n$1(t$1.CannotCastValue);
      const e3 = parseInt(r2, 10);
      if (isNaN(e3))
        throw new n$1(t$1.CannotCastValue);
      return e3;
    }
    case "smallint": {
      if (!g$1(r2))
        throw new n$1(t$1.CannotCastValue);
      const e3 = parseInt(r2, 10);
      if (isNaN(e3))
        throw new n$1(t$1.CannotCastValue);
      if (e3 > 32767 || e3 < -32767)
        throw new n$1(t$1.CannotCastValue);
      return e3;
    }
    case "float":
    case "real": {
      if (!g$1(r2))
        throw new n$1(t$1.CannotCastValue);
      const e3 = parseFloat(r2);
      if (isNaN(e3))
        throw new n$1(t$1.CannotCastValue);
      return e3;
    }
    case "time":
      return v$1(r2);
    case "date":
      return E$2(r2);
    case "timestamp":
      return M$1(r2, t2, true === l2.withtimezone);
    case "varchar": {
      const e3 = x$2(r2);
      if (e3.length > l2.size)
        throw new n$1(t$1.CannotCastValue);
      return e3;
    }
    default:
      throw new n$1(t$1.InvalidDataType);
  }
} } };
function d(u2, d2, sn, un) {
  if ("||" === u2)
    return w$1("concat", [d2, sn], un);
  if (null === d2 || null === sn)
    return null;
  if (v$3(d2)) {
    if (v$3(sn))
      return f(d2, sn, u2);
    if (S$1(sn))
      return M(d2, sn, u2);
    if (z$2(sn))
      return U$1();
    if ($$1(sn))
      return q$1();
    if (D$3(sn))
      return N();
    if (j$3(sn))
      return z();
    if (y$2(sn))
      return C$1(d2, sn, u2);
    throw new n$1(t$1.InvalidOperator);
  }
  if ($$1(d2)) {
    if (v$3(sn))
      return x(d2, sn, u2);
    if (S$1(sn))
      return T(d2, sn, u2);
    if (z$2(sn))
      return E$1();
    if ($$1(sn))
      return B(d2, sn, u2);
    if (D$3(sn))
      return A$1(d2, sn, u2);
    if (j$3(sn))
      return k$1(d2, sn, u2);
    if (y$2(sn))
      return _();
    throw new n$1(t$1.InvalidOperator);
  }
  if (z$2(d2)) {
    if (v$3(sn))
      return L$1(d2, sn, u2);
    if (S$1(sn))
      return p(d2, sn, u2);
    if (z$2(sn))
      return W();
    if ($$1(sn))
      return R();
    if (D$3(sn))
      return V$1();
    if (j$3(sn))
      return Q();
    if (y$2(sn))
      return nn();
    throw new n$1(t$1.InvalidOperator);
  }
  if (S$1(d2)) {
    if (v$3(sn))
      return m(d2, sn, u2);
    if (S$1(sn))
      return O$1(d2, sn, u2);
    if (z$2(sn))
      return v(d2, sn, u2);
    if ($$1(sn))
      return I$1(d2, sn, u2);
    if (D$3(sn))
      return h(d2, sn, u2);
    if (j$3(sn))
      return w(d2, sn, u2);
    if (y$2(sn))
      return P();
    throw new n$1(t$1.InvalidOperator);
  }
  if (j$3(d2)) {
    if (v$3(sn))
      return y(d2, sn, u2);
    if (S$1(sn))
      return D$1(d2, sn, u2);
    if (z$2(sn))
      return $();
    if ($$1(sn))
      return Y(d2, sn, u2);
    if (D$3(sn))
      return Z$1(d2, sn, u2);
    if (j$3(sn))
      return X(d2, sn, u2);
    if (y$2(sn))
      return rn();
    throw new n$1(t$1.InvalidOperator);
  }
  if (D$3(d2)) {
    if (v$3(sn))
      return j$1(d2, sn, u2);
    if (S$1(sn))
      return F$1(d2, sn, u2);
    if (z$2(sn))
      return G();
    if ($$1(sn))
      return H(d2, sn, u2);
    if (D$3(sn))
      return K(d2, sn, u2);
    if (j$3(sn))
      return J(d2, sn, u2);
    if (y$2(sn))
      return en();
    throw new n$1(t$1.InvalidOperator);
  }
  if (y$2(d2)) {
    if (v$3(sn))
      return S(d2, sn, u2);
    if (S$1(sn))
      return b$1();
    if (z$2(sn))
      return tn();
    if ($$1(sn))
      return on();
    if (D$3(sn))
      return ln();
    if (j$3(sn))
      return an();
    if (y$2(sn))
      return g(d2, sn, u2);
    throw new n$1(t$1.InvalidOperator);
  }
  throw new n$1(t$1.InvalidOperator);
}
function f(e2, i2, t2) {
  switch (t2) {
    case "+":
      return e2 + i2;
    case "-":
      return e2 - i2;
    case "*":
      return e2 * i2;
    case "/":
      return e2 / i2;
  }
  throw new n$1(t$1.InvalidOperator);
}
function w(e2, i2, t2) {
  switch (t2) {
    case "+":
      return i2.plus({ milliseconds: e2.valueInMilliseconds() });
    case "-":
      return e2.valueInMilliseconds() - i2.toMillis();
  }
  throw new n$1(t$1.InvalidOperator);
}
function v(e2, i2, t2) {
  if ("+" === t2)
    return i2.plus("milliseconds", e2.valueInMilliseconds());
  throw new n$1(t$1.InvalidOperator);
}
function I$1(e2, i2, t2) {
  if ("+" === t2)
    return i2.plus("milliseconds", e2.valueInMilliseconds());
  throw new n$1(t$1.InvalidOperator);
}
function p(e2, i2, t2) {
  switch (t2) {
    case "+":
      return e2.plus("milliseconds", i2.valueInMilliseconds());
    case "-":
      return e2.plus("milliseconds", -1 * i2.valueInMilliseconds());
  }
  throw new n$1(t$1.InvalidOperator);
}
function h(e2, i2, t2) {
  if ("+" === t2)
    return i2.addMilliseconds(e2.valueInMilliseconds());
  throw new n$1(t$1.InvalidOperator);
}
function O$1(e2, i2, t2) {
  switch (t2) {
    case "+":
      return s2.createFromMilliseconds(e2.valueInMilliseconds() + i2.valueInMilliseconds());
    case "-":
      return s2.createFromMilliseconds(e2.valueInMilliseconds() - i2.valueInMilliseconds());
    case "*":
      return s2.createFromMilliseconds(e2.valueInMilliseconds() * i2.valueInMilliseconds());
    case "/":
      return s2.createFromMilliseconds(e2.valueInMilliseconds() / i2.valueInMilliseconds());
  }
  throw new n$1(t$1.InvalidOperator);
}
function m(e2, i2, t2) {
  switch (t2) {
    case "+":
      return s2.createFromMilliseconds(e2.valueInMilliseconds() + i2);
    case "-":
      return s2.createFromMilliseconds(e2.valueInMilliseconds() - i2);
    case "*":
      return s2.createFromMilliseconds(e2.valueInMilliseconds() * i2);
    case "/":
      return s2.createFromMilliseconds(e2.valueInMilliseconds() / i2);
  }
  throw new n$1(t$1.InvalidOperator);
}
function M(e2, i2, t2) {
  switch (t2) {
    case "+":
      return s2.createFromMilliseconds(e2 + i2.valueInMilliseconds());
    case "-":
      return s2.createFromMilliseconds(e2 - i2.valueInMilliseconds());
    case "*":
      return s2.createFromMilliseconds(e2 * i2.valueInMilliseconds());
    case "/":
      return s2.createFromMilliseconds(e2 / i2.valueInMilliseconds());
  }
  throw new n$1(t$1.InvalidOperator);
}
function T(e2, i2, t2) {
  switch (t2) {
    case "+":
      return e2.plus("milliseconds", i2.valueInMilliseconds());
    case "-":
      return e2.plus("milliseconds", -1 * i2.valueInMilliseconds());
  }
  throw new n$1(t$1.InvalidOperator);
}
function D$1(e2, i2, t2) {
  switch (t2) {
    case "+":
      return e2.plus({ milliseconds: i2.valueInMilliseconds() });
    case "-":
      return e2.minus({ milliseconds: i2.valueInMilliseconds() });
  }
  throw new n$1(t$1.InvalidOperator);
}
function F$1(e2, i2, t2) {
  switch (t2) {
    case "+":
      return e2.addMilliseconds(i2.valueInMilliseconds());
    case "-":
      return e2.addMilliseconds(-1 * i2.valueInMilliseconds());
  }
  throw new n$1(t$1.InvalidOperator);
}
function y(e2, i2, t2) {
  const o2 = 1e3 * i2 * 24 * 60 * 60;
  switch (t2) {
    case "+":
      return e2.plus({ milliseconds: o2 });
    case "-":
      return e2.minus({ milliseconds: o2 });
  }
  throw new n$1(t$1.InvalidOperator);
}
function x(e2, i2, t2) {
  const o2 = 1e3 * i2 * 24 * 60 * 60;
  switch (t2) {
    case "+":
      return e2.plus("milliseconds", o2);
    case "-":
      return e2.plus("milliseconds", -1 * o2);
  }
  throw new n$1(t$1.InvalidOperator);
}
function L$1(e2, i2, t2) {
  const o2 = 1e3 * i2 * 24 * 60 * 60;
  switch (t2) {
    case "+":
      return e2.plus("milliseconds", o2);
    case "-":
      return e2.plus("milliseconds", -1 * o2);
  }
  throw new n$1(t$1.InvalidOperator);
}
function z(e2, i2, t2) {
  throw new n$1(t$1.InvalidOperator);
}
function j$1(e2, i2, t2) {
  const o2 = 1e3 * i2 * 24 * 60 * 60;
  switch (t2) {
    case "+":
      return e2.addMilliseconds(o2);
    case "-":
      return e2.addMilliseconds(-1 * o2);
  }
  throw new n$1(t$1.InvalidOperator);
}
function N(e2, i2, t2) {
  throw new n$1(t$1.InvalidOperator);
}
function U$1(e2, i2, t2) {
  throw new n$1(t$1.InvalidOperator);
}
function q$1(e2, i2, t2) {
  throw new n$1(t$1.InvalidOperator);
}
function C$1(e2, i2, t2) {
  const o2 = parseFloat(i2);
  if (isNaN(o2))
    throw new n$1(t$1.InvalidOperator);
  return f(e2, o2, t2);
}
function S(e2, i2, t2) {
  const o2 = parseFloat(e2);
  if (isNaN(o2))
    throw new n$1(t$1.InvalidOperator);
  return f(o2, i2, t2);
}
function g(e2, i2, t2) {
  if ("+" === t2)
    return e2 + i2;
  throw new n$1(t$1.InvalidOperator);
}
function P(e2, i2, t2) {
  throw new n$1(t$1.InvalidOperator);
}
function b$1(e2, i2, t2) {
  throw new n$1(t$1.InvalidOperator);
}
function k$1(e2, i2, t2) {
  if ("-" === t2)
    return e2.toDateTimeLuxon(i2.zone).diff(i2).as("days");
  throw new n$1(t$1.InvalidOperator);
}
function A$1(e2, i2, t2) {
  if ("-" === t2)
    return e2.toDateTimeLuxon(i2.toDateTime().zone).diff(i2.toDateTime()).as("days");
  throw new n$1(t$1.InvalidOperator);
}
function B(e2, i2, t2) {
  if ("-" === t2)
    return e2.toDateTimeLuxon("UTC").diff(i2.toDateTimeLuxon("UTC")).as("days");
  throw new n$1(t$1.InvalidOperator);
}
function E$1(e2, i2, t2) {
  throw new n$1(t$1.InvalidOperator);
}
function G(e2, i2, t2) {
  throw new n$1(t$1.InvalidOperator);
}
function H(e2, i2, t2) {
  if ("-" === t2)
    return e2.toDateTime().diff(i2.toDateTimeLuxon(e2.toDateTime().zone)).as("days");
  throw new n$1(t$1.InvalidOperator);
}
function J(e2, i2, t2) {
  if ("-" === t2)
    return e2.toDateTime().diff(i2).as("days");
  throw new n$1(t$1.InvalidOperator);
}
function K(e2, i2, t2) {
  if ("-" === t2)
    return e2.toDateTime().diff(i2.toDateTime()).as("days");
  throw new n$1(t$1.InvalidOperator);
}
function Q(e2, i2, t2) {
  throw new n$1(t$1.InvalidOperator);
}
function R(e2, i2, t2) {
  throw new n$1(t$1.InvalidOperator);
}
function V$1(e2, i2, t2) {
  throw new n$1(t$1.InvalidOperator);
}
function W(e2, i2, t2) {
  throw new n$1(t$1.InvalidOperator);
}
function X(e2, i2, t2) {
  if ("-" === t2)
    return e2.diff(i2).as("days");
  throw new n$1(t$1.InvalidOperator);
}
function Y(e2, i2, t2) {
  if ("-" === t2)
    return e2.diff(i2.toDateTimeLuxon(e2.zone)).as("days");
  throw new n$1(t$1.InvalidOperator);
}
function Z$1(e2, i2, t2) {
  if ("-" === t2)
    return e2.diff(i2.toDateTime()).as("days");
  throw new n$1(t$1.InvalidOperator);
}
function $(e2, i2, t2) {
  throw new n$1(t$1.InvalidOperator);
}
function _(e2, i2, t2) {
  throw new n$1(t$1.InvalidOperator);
}
function nn(e2, i2, t2) {
  throw new n$1(t$1.InvalidOperator);
}
function rn(e2, i2, t2) {
  throw new n$1(t$1.InvalidOperator);
}
function en(e2, i2, t2) {
  throw new n$1(t$1.InvalidOperator);
}
function tn(e2, i2, t2) {
  throw new n$1(t$1.InvalidOperator);
}
function on(e2, i2, t2) {
  throw new n$1(t$1.InvalidOperator);
}
function an(e2, i2, t2) {
  throw new n$1(t$1.InvalidOperator);
}
function ln(e2, i2, t2) {
  throw new n$1(t$1.InvalidOperator);
}
var t, n2, e = { exports: {} };
n2 = function() {
  function r2(r3, t3) {
    function n4() {
      this.constructor = r3;
    }
    n4.prototype = t3.prototype, r3.prototype = new n4();
  }
  function t2(r3, n4, e3, u2) {
    var o2 = Error.call(this, r3);
    return Object.setPrototypeOf && Object.setPrototypeOf(o2, t2.prototype), o2.expected = n4, o2.found = e3, o2.location = u2, o2.name = "SyntaxError", o2;
  }
  function n3(r3, t3, n4) {
    return n4 = n4 || " ", r3.length > t3 ? r3 : (t3 -= r3.length, r3 + (n4 += n4.repeat(t3)).slice(0, t3));
  }
  function e2(r3, n4) {
    var e3, u2 = {}, o2 = (n4 = void 0 !== n4 ? n4 : {}).grammarSource, i2 = { start: Bu }, a2 = Bu, s3 = "!", c2 = "=", f2 = ">=", l2 = ">", v2 = "<=", p2 = "<>", d2 = "<", h2 = "!=", y2 = "+", b2 = "-", A2 = "||", C2 = "*", g2 = "/", m2 = "@", E2 = "'", L2 = "N'", T2 = "''", w2 = ".", x3 = "null", N2 = "true", I2 = "false", O2 = "in", R2 = "is", S2 = "like", F2 = "escape", M2 = "not", H2 = "and", U2 = "or", $2 = "between", _2 = "from", D2 = "for", j2 = "substring", Z2 = "extract", z2 = "trim", P2 = "position", B2 = "timestamp", G2 = "date", V2 = "time", W2 = "leading", Y2 = "trailing", k2 = "both", q2 = "cast", K2 = "as", X2 = "integer", J2 = "smallint", Q2 = "float", rr = "real", tr = "varchar", nr = "to", er = "interval", ur = "year", or = "timezone_hour", ir = "timezone_minute", ar = "month", sr = "day", cr = "hour", fr = "minute", lr = "second", vr = "case", pr = "end", dr = "when", hr = "then", yr = "else", br = ",", Ar = "(", Cr = ")", gr = "`", mr = /^[A-Za-z_\x80-\uFFFF]/, Er = /^[A-Za-z0-9_]/, Lr = /^[A-Za-z0-9_.\x80-\uFFFF]/, Tr = /^["]/, wr = /^[^']/, xr = /^[0-9]/, Nr = /^[eE]/, Ir = /^[+\-]/, Or = /^[ \t\n\r]/, Rr = /^[^`]/, Sr = Uu("!", false), Fr = Uu("=", false), Mr = Uu(">=", false), Hr = Uu(">", false), Ur = Uu("<=", false), $r = Uu("<>", false), _r = Uu("<", false), Dr = Uu("!=", false), jr = Uu("+", false), Zr = Uu("-", false), zr = Uu("||", false), Pr = Uu("*", false), Br = Uu("/", false), Gr = $u([["A", "Z"], ["a", "z"], "_", ["", "￿"]], false, false), Vr = $u([["A", "Z"], ["a", "z"], ["0", "9"], "_"], false, false), Wr = $u([["A", "Z"], ["a", "z"], ["0", "9"], "_", ".", ["", "￿"]], false, false), Yr = $u(['"'], false, false), kr = Uu("@", false), qr = Uu("'", false), Kr = Uu("N'", false), Xr = Uu("''", false), Jr = $u(["'"], true, false), Qr = Uu(".", false), rt = $u([["0", "9"]], false, false), tt = $u(["e", "E"], false, false), nt = $u(["+", "-"], false, false), et = Uu("NULL", true), ut = Uu("TRUE", true), ot = Uu("FALSE", true), it = Uu("IN", true), at = Uu("IS", true), st = Uu("LIKE", true), ct = Uu("ESCAPE", true), ft = Uu("NOT", true), lt = Uu("AND", true), vt = Uu("OR", true), pt = Uu("BETWEEN", true), dt = Uu("FROM", true), ht = Uu("FOR", true), yt = Uu("SUBSTRING", true), bt = Uu("EXTRACT", true), At = Uu("TRIM", true), Ct = Uu("POSITION", true), gt = Uu("TIMESTAMP", true), mt = Uu("DATE", true), Et = Uu("TIME", true), Lt = Uu("LEADING", true), Tt = Uu("TRAILING", true), wt = Uu("BOTH", true), xt = Uu("CAST", true), Nt = Uu("AS", true), It = Uu("INTEGER", true), Ot = Uu("SMALLINT", true), Rt = Uu("FLOAT", true), St = Uu("REAL", true), Ft = Uu("VARCHAR", true), Mt = Uu("TO", true), Ht = Uu("INTERVAL", true), Ut = Uu("YEAR", true), $t = Uu("TIMEZONE_HOUR", true), _t = Uu("TIMEZONE_MINUTE", true), Dt = Uu("MONTH", true), jt = Uu("DAY", true), Zt = Uu("HOUR", true), zt = Uu("MINUTE", true), Pt = Uu("SECOND", true), Bt = Uu("CASE", true), Gt = Uu("END", true), Vt = Uu("WHEN", true), Wt = Uu("THEN", true), Yt = Uu("ELSE", true), kt = Uu(",", false), qt = Uu("(", false), Kt = Uu(")", false), Xt = $u([" ", "	", "\n", "\r"], false, false), Jt = Uu("`", false), Qt = $u(["`"], true, false), rn2 = function(r4) {
      return r4;
    }, tn2 = function(r4, t3) {
      var n5 = { type: "expression-list" }, e4 = ca(r4, t3);
      return n5.value = e4, n5;
    }, nn2 = function(r4, t3) {
      return fa(r4, t3);
    }, en2 = function(r4, t3) {
      return fa(r4, t3);
    }, un = function(r4) {
      return ia("NOT", r4);
    }, on2 = function(r4, t3) {
      return "" == t3 || null == t3 || null == t3 ? r4 : "arithmetic" == t3.type ? fa(r4, t3.tail) : aa(t3.op, r4, t3.right, t3.escape);
    }, an2 = function(r4) {
      return { type: "arithmetic", tail: r4 };
    }, sn = function(r4, t3) {
      return { op: r4 + "NOT", right: t3 };
    }, cn = function(r4, t3) {
      return { op: r4, right: t3 };
    }, fn = function(r4, t3, n5) {
      return { op: "NOT" + r4, right: { type: "expression-list", value: [t3, n5] } };
    }, ln2 = function(r4, t3, n5) {
      return { op: r4, right: { type: "expression-list", value: [t3, n5] } };
    }, vn = function(r4) {
      return r4[0] + " " + r4[2];
    }, pn = function(r4) {
      return r4[0] + " " + r4[2];
    }, dn = function(r4, t3, n5) {
      return { op: r4, right: t3, escape: n5.value };
    }, hn = function(r4, t3) {
      return { op: r4, right: t3, escape: "" };
    }, yn = function(r4, t3) {
      return { op: r4, right: t3 };
    }, bn = function(r4) {
      return { op: r4, right: { type: "expression-list", value: [] } };
    }, An = function(r4, t3) {
      return { op: r4, right: t3 };
    }, Cn = function(r4, t3) {
      return fa(r4, t3);
    }, gn = function(r4, t3) {
      return fa(r4, t3);
    }, mn = function(r4) {
      return r4.paren = true, r4;
    }, En = function(r4) {
      return /^CURRENT_DATE$/i.test(r4) ? { type: "current-time", mode: "date" } : /^CURRENT_TIMESTAMP$/i.test(r4) ? { type: "current-time", mode: "timestamp" } : { type: "column-reference", table: "", column: r4 };
    }, Ln = function(r4) {
      return { type: "column-reference", table: "", column: r4, delimited: true };
    }, Tn = function(r4) {
      return r4;
    }, wn = function(r4, t3) {
      return r4 + t3.join("");
    }, xn = function(r4, t3) {
      return r4 + t3.join("");
    }, Nn = function(r4) {
      return r4;
    }, In = function(r4) {
      return r4.join("");
    }, On = function() {
      return '"';
    }, Rn = function(r4) {
      return { type: "parameter", value: r4[1] };
    }, Sn = function(r4, t3) {
      return { type: "function", name: "extract", args: { type: "expression-list", value: [{ type: "string", value: r4 }, t3] } };
    }, Fn = function(r4, t3, n5) {
      return { type: "function", name: "substring", args: { type: "expression-list", value: n5 ? [r4, t3, n5[2]] : [r4, t3] } };
    }, Mn = function(r4, t3) {
      return { type: "function", name: "cast", args: { type: "expression-list", value: [r4, t3] } };
    }, Hn = function() {
      return { type: "data-type", value: { type: "integer" } };
    }, Un = function() {
      return { type: "data-type", value: { type: "smallint" } };
    }, $n = function() {
      return { type: "data-type", value: { type: "float" } };
    }, _n = function() {
      return { type: "data-type", value: { type: "real" } };
    }, Dn = function() {
      return { type: "data-type", value: { type: "date" } };
    }, jn = function() {
      return { type: "data-type", value: { type: "timestamp" } };
    }, Zn = function() {
      return { type: "data-type", value: { type: "time" } };
    }, zn = function(r4) {
      return { type: "data-type", value: { type: "varchar", size: parseInt(r4) } };
    }, Pn = function(r4, t3, n5) {
      return { type: "function", name: "trim", args: { type: "expression-list", value: [{ type: "string", value: r4 ?? "BOTH" }, t3, n5] } };
    }, Bn = function(r4, t3) {
      return { type: "function", name: "trim", args: { type: "expression-list", value: [{ type: "string", value: r4 ?? "BOTH" }, t3] } };
    }, Gn = function(r4, t3) {
      return { type: "function", name: "position", args: { type: "expression-list", value: [r4, t3] } };
    }, Vn = function(r4, t3) {
      return { type: "function", name: r4, args: t3 || { type: "expression-list", value: [] } };
    }, Wn = function(r4) {
      return "string" === r4.type && la(r4.value), { type: "timestamp", value: r4.value };
    }, Yn = function(r4) {
      return "string" === r4.type && va(r4.value), { type: "time", value: r4.value };
    }, kn = function(r4, t3, n5) {
      return { type: "interval", value: t3, qualifier: n5, op: r4 };
    }, qn = function(r4, t3) {
      return { type: "interval", value: r4, qualifier: t3, op: "" };
    }, Kn = function(r4, t3) {
      return { type: "interval-qualifier", start: r4, end: t3 };
    }, Xn = function(r4, t3) {
      return { type: "interval-period", period: r4.value, precision: t3, secondary: null };
    }, Jn = function(r4) {
      return { type: "interval-period", period: r4.value, precision: null, secondary: null };
    }, Qn = function(r4) {
      return { type: "interval-period", period: r4.value, precision: null, secondary: null };
    }, re = function(r4, t3) {
      return { type: "interval-period", period: "second", precision: r4, secondary: t3 };
    }, te = function(r4) {
      return { type: "interval-period", period: "second", precision: r4, secondary: null };
    }, ne = function() {
      return { type: "interval-period", period: "second", precision: null, secondary: null };
    }, ee = function(r4, t3) {
      return { type: "interval-period", period: r4.value, precision: t3, secondary: null };
    }, ue = function(r4) {
      return { type: "interval-period", period: r4.value, precision: null, secondary: null };
    }, oe = function(r4, t3) {
      return { type: "interval-period", period: "second", precision: r4, secondary: t3 };
    }, ie = function(r4) {
      return { type: "interval-period", period: "second", precision: r4, secondary: null };
    }, ae = function() {
      return { type: "interval-period", period: "second", precision: null, secondary: null };
    }, se = function() {
      return { type: "string", value: "day" };
    }, ce = function() {
      return { type: "string", value: "hour" };
    }, fe = function() {
      return { type: "string", value: "minute" };
    }, le = function() {
      return { type: "string", value: "month" };
    }, ve = function() {
      return { type: "string", value: "year" };
    }, pe = function(r4) {
      return parseFloat(r4);
    }, de = function(r4) {
      return parseFloat(r4);
    }, he = function(r4) {
      return "string" === r4.type && pa(r4.value), { type: "date", value: r4.value };
    }, ye = function() {
      return { type: "null", value: null };
    }, be = function() {
      return { type: "boolean", value: true };
    }, Ae = function() {
      return { type: "boolean", value: false };
    }, Ce = function() {
      return "'";
    }, ge = function(r4) {
      return { type: "string", value: r4.join("") };
    }, me = function(r4, t3) {
      return { type: "case-expression", format: "simple", operand: r4, clauses: t3, else: null };
    }, Ee = function(r4, t3, n5) {
      return { type: "case-expression", format: "simple", operand: r4, clauses: t3, else: n5.value };
    }, Le = function(r4) {
      return { type: "case-expression", format: "searched", clauses: r4, else: null };
    }, Te = function(r4, t3) {
      return { type: "case-expression", format: "searched", clauses: r4, else: t3.value };
    }, we = function(r4, t3) {
      return { type: "when-clause", operand: r4, value: t3 };
    }, xe = function(r4, t3) {
      return { type: "when-clause", operand: r4, value: t3 };
    }, Ne = function(r4) {
      return { type: "else-clause", value: r4 };
    }, Ie = function(r4) {
      return { type: "number", value: r4 };
    }, Oe = function(r4, t3, n5) {
      return parseFloat(r4 + t3 + n5);
    }, Re = function(r4, t3) {
      return parseFloat(r4 + t3);
    }, Se = function(r4, t3) {
      return parseFloat(r4 + t3);
    }, Fe = function(r4) {
      return parseFloat(r4);
    }, Me = function(r4, t3) {
      return r4[0] + t3;
    }, He = function(r4) {
      return "." + (null != r4 ? r4 : "");
    }, Ue = function(r4, t3) {
      return r4 + t3;
    }, $e = function(r4) {
      return r4.join("");
    }, _e = function(r4, t3) {
      return "e" + (null === t3 ? "" : t3);
    }, De = function() {
      return "IN";
    }, je = function() {
      return "IS";
    }, Ze = function() {
      return "LIKE";
    }, ze = function() {
      return "ESCAPE";
    }, Pe = function() {
      return "NOT";
    }, Be = function() {
      return "AND";
    }, Ge = function() {
      return "OR";
    }, Ve = function() {
      return "BETWEEN";
    }, We = function() {
      return "FROM";
    }, Ye = function() {
      return "FOR";
    }, ke = function() {
      return "SUBSTRING";
    }, qe = function() {
      return "EXTRACT";
    }, Ke = function() {
      return "TRIM";
    }, Xe = function() {
      return "POSITION";
    }, Je = function() {
      return "TIMESTAMP";
    }, Qe = function() {
      return "DATE";
    }, ru = function() {
      return "TIME";
    }, tu = function() {
      return "LEADING";
    }, nu = function() {
      return "TRAILING";
    }, eu = function() {
      return "BOTH";
    }, uu = function() {
      return "CAST";
    }, ou = function() {
      return "AS";
    }, iu = function() {
      return "INTEGER";
    }, au = function() {
      return "SMALLINT";
    }, su = function() {
      return "FLOAT";
    }, cu = function() {
      return "REAL";
    }, fu = function() {
      return "VARCHAR";
    }, lu = function() {
      return "TO";
    }, vu = function() {
      return "INTERVAL";
    }, pu = function() {
      return "YEAR";
    }, du = function() {
      return "TIMEZONE_HOUR";
    }, hu = function() {
      return "TIMEZONE_MINUTE";
    }, yu = function() {
      return "MONTH";
    }, bu = function() {
      return "DAY";
    }, Au = function() {
      return "HOUR";
    }, Cu = function() {
      return "MINUTE";
    }, gu = function() {
      return "SECOND";
    }, mu = function() {
      return "CASE";
    }, Eu = function() {
      return "END";
    }, Lu = function() {
      return "WHEN";
    }, Tu = function() {
      return "THEN";
    }, wu = function() {
      return "ELSE";
    }, xu = function(r4) {
      return r4;
    }, Nu = function(r4) {
      return r4.join("");
    }, Iu = 0, Ou = 0, Ru = [{ line: 1, column: 1 }], Su = 0, Fu = [], Mu = 0;
    if ("startRule" in n4) {
      if (!(n4.startRule in i2))
        throw new Error(`Can't start parsing from rule "` + n4.startRule + '".');
      a2 = i2[n4.startRule];
    }
    function Hu(r4, t3) {
      throw zu(r4, t3 = void 0 !== t3 ? t3 : ju(Ou, Iu));
    }
    function Uu(r4, t3) {
      return { type: "literal", text: r4, ignoreCase: t3 };
    }
    function $u(r4, t3, n5) {
      return { type: "class", parts: r4, inverted: t3, ignoreCase: n5 };
    }
    function _u() {
      return { type: "end" };
    }
    function Du(t3) {
      var n5, e4 = Ru[t3];
      if (e4)
        return e4;
      for (n5 = t3 - 1; !Ru[n5]; )
        n5--;
      for (e4 = { line: (e4 = Ru[n5]).line, column: e4.column }; n5 < t3; )
        10 === r3.charCodeAt(n5) ? (e4.line++, e4.column = 1) : e4.column++, n5++;
      return Ru[t3] = e4, e4;
    }
    function ju(r4, t3, n5) {
      var e4 = Du(r4), u3 = Du(t3), i3 = { source: o2, start: { offset: r4, line: e4.line, column: e4.column }, end: { offset: t3, line: u3.line, column: u3.column } };
      return n5 && o2 && "function" == typeof o2.offset && (i3.start = o2.offset(i3.start), i3.end = o2.offset(i3.end)), i3;
    }
    function Zu(r4) {
      Iu < Su || (Iu > Su && (Su = Iu, Fu = []), Fu.push(r4));
    }
    function zu(r4, n5) {
      return new t2(r4, null, null, n5);
    }
    function Pu(r4, n5, e4) {
      return new t2(t2.buildMessage(r4, n5), r4, n5, e4);
    }
    function Bu() {
      var r4, t3;
      return r4 = Iu, ea(), (t3 = Vu()) !== u2 ? (ea(), Ou = r4, r4 = rn2(t3)) : (Iu = r4, r4 = u2), r4;
    }
    function Gu() {
      var r4, t3, n5, e4, o3, i3, a3, s4;
      if (r4 = Iu, (t3 = Vu()) !== u2) {
        for (n5 = [], e4 = Iu, o3 = ea(), (i3 = ra()) !== u2 ? (a3 = ea(), (s4 = Vu()) !== u2 ? e4 = o3 = [o3, i3, a3, s4] : (Iu = e4, e4 = u2)) : (Iu = e4, e4 = u2); e4 !== u2; )
          n5.push(e4), e4 = Iu, o3 = ea(), (i3 = ra()) !== u2 ? (a3 = ea(), (s4 = Vu()) !== u2 ? e4 = o3 = [o3, i3, a3, s4] : (Iu = e4, e4 = u2)) : (Iu = e4, e4 = u2);
        Ou = r4, r4 = tn2(t3, n5);
      } else
        Iu = r4, r4 = u2;
      return r4;
    }
    function Vu() {
      var r4, t3, n5, e4, o3, i3, a3, s4;
      if (r4 = Iu, (t3 = Wu()) !== u2) {
        for (n5 = [], e4 = Iu, o3 = ea(), (i3 = Ai()) !== u2 ? (a3 = ea(), (s4 = Wu()) !== u2 ? e4 = o3 = [o3, i3, a3, s4] : (Iu = e4, e4 = u2)) : (Iu = e4, e4 = u2); e4 !== u2; )
          n5.push(e4), e4 = Iu, o3 = ea(), (i3 = Ai()) !== u2 ? (a3 = ea(), (s4 = Wu()) !== u2 ? e4 = o3 = [o3, i3, a3, s4] : (Iu = e4, e4 = u2)) : (Iu = e4, e4 = u2);
        Ou = r4, r4 = nn2(t3, n5);
      } else
        Iu = r4, r4 = u2;
      return r4;
    }
    function Wu() {
      var r4, t3, n5, e4, o3, i3, a3, s4;
      if (r4 = Iu, (t3 = Yu()) !== u2) {
        for (n5 = [], e4 = Iu, o3 = ea(), (i3 = bi()) !== u2 ? (a3 = ea(), (s4 = Yu()) !== u2 ? e4 = o3 = [o3, i3, a3, s4] : (Iu = e4, e4 = u2)) : (Iu = e4, e4 = u2); e4 !== u2; )
          n5.push(e4), e4 = Iu, o3 = ea(), (i3 = bi()) !== u2 ? (a3 = ea(), (s4 = Yu()) !== u2 ? e4 = o3 = [o3, i3, a3, s4] : (Iu = e4, e4 = u2)) : (Iu = e4, e4 = u2);
        Ou = r4, r4 = en2(t3, n5);
      } else
        Iu = r4, r4 = u2;
      return r4;
    }
    function Yu() {
      var t3, n5, e4, o3, i3;
      return t3 = Iu, (n5 = yi()) === u2 && (n5 = Iu, 33 === r3.charCodeAt(Iu) ? (e4 = s3, Iu++) : (e4 = u2, 0 === Mu && Zu(Sr)), e4 !== u2 ? (o3 = Iu, Mu++, 61 === r3.charCodeAt(Iu) ? (i3 = c2, Iu++) : (i3 = u2, 0 === Mu && Zu(Fr)), Mu--, i3 === u2 ? o3 = void 0 : (Iu = o3, o3 = u2), o3 !== u2 ? n5 = e4 = [e4, o3] : (Iu = n5, n5 = u2)) : (Iu = n5, n5 = u2)), n5 !== u2 ? (e4 = ea(), (o3 = Yu()) !== u2 ? (Ou = t3, t3 = un(o3)) : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2), t3 === u2 && (t3 = ku()), t3;
    }
    function ku() {
      var r4, t3, n5;
      return r4 = Iu, (t3 = uo()) !== u2 ? (ea(), (n5 = qu()) === u2 && (n5 = null), Ou = r4, r4 = on2(t3, n5)) : (Iu = r4, r4 = u2), r4;
    }
    function qu() {
      var r4;
      return (r4 = Ku()) === u2 && (r4 = eo()) === u2 && (r4 = Qu()) === u2 && (r4 = Ju()) === u2 && (r4 = no()), r4;
    }
    function Ku() {
      var r4, t3, n5, e4, o3, i3, a3;
      if (r4 = Iu, t3 = [], n5 = Iu, e4 = ea(), (o3 = Xu()) !== u2 ? (i3 = ea(), (a3 = uo()) !== u2 ? n5 = e4 = [e4, o3, i3, a3] : (Iu = n5, n5 = u2)) : (Iu = n5, n5 = u2), n5 !== u2)
        for (; n5 !== u2; )
          t3.push(n5), n5 = Iu, e4 = ea(), (o3 = Xu()) !== u2 ? (i3 = ea(), (a3 = uo()) !== u2 ? n5 = e4 = [e4, o3, i3, a3] : (Iu = n5, n5 = u2)) : (Iu = n5, n5 = u2);
      else
        t3 = u2;
      return t3 !== u2 && (Ou = r4, t3 = an2(t3)), r4 = t3;
    }
    function Xu() {
      var t3;
      return r3.substr(Iu, 2) === f2 ? (t3 = f2, Iu += 2) : (t3 = u2, 0 === Mu && Zu(Mr)), t3 === u2 && (62 === r3.charCodeAt(Iu) ? (t3 = l2, Iu++) : (t3 = u2, 0 === Mu && Zu(Hr)), t3 === u2 && (r3.substr(Iu, 2) === v2 ? (t3 = v2, Iu += 2) : (t3 = u2, 0 === Mu && Zu(Ur)), t3 === u2 && (r3.substr(Iu, 2) === p2 ? (t3 = p2, Iu += 2) : (t3 = u2, 0 === Mu && Zu($r)), t3 === u2 && (60 === r3.charCodeAt(Iu) ? (t3 = d2, Iu++) : (t3 = u2, 0 === Mu && Zu(_r)), t3 === u2 && (61 === r3.charCodeAt(Iu) ? (t3 = c2, Iu++) : (t3 = u2, 0 === Mu && Zu(Fr)), t3 === u2 && (r3.substr(Iu, 2) === h2 ? (t3 = h2, Iu += 2) : (t3 = u2, 0 === Mu && Zu(Dr)))))))), t3;
    }
    function Ju() {
      var r4, t3, n5, e4;
      return r4 = Iu, (t3 = pi()) !== u2 ? (ea(), (n5 = yi()) !== u2 ? (ea(), (e4 = uo()) !== u2 ? (Ou = r4, r4 = sn(t3, e4)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2), r4 === u2 && (r4 = Iu, (t3 = pi()) !== u2 ? (ea(), (n5 = uo()) !== u2 ? (Ou = r4, r4 = cn(t3, n5)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)), r4;
    }
    function Qu() {
      var r4, t3, n5, e4, o3, i3;
      return r4 = Iu, (t3 = yi()) !== u2 ? (ea(), (n5 = Ci()) !== u2 ? (ea(), (e4 = uo()) !== u2 ? (ea(), (o3 = bi()) !== u2 ? (ea(), (i3 = uo()) !== u2 ? (Ou = r4, r4 = fn(n5, e4, i3)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2), r4 === u2 && (r4 = Iu, (t3 = Ci()) !== u2 ? (ea(), (n5 = uo()) !== u2 ? (ea(), (e4 = bi()) !== u2 ? (ea(), (o3 = uo()) !== u2 ? (Ou = r4, r4 = ln2(t3, n5, o3)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)), r4;
    }
    function ro() {
      var r4, t3, n5, e4, o3;
      return r4 = Iu, t3 = Iu, (n5 = yi()) !== u2 ? (e4 = ea(), (o3 = di()) !== u2 ? t3 = n5 = [n5, e4, o3] : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2), t3 !== u2 && (Ou = r4, t3 = vn(t3)), (r4 = t3) === u2 && (r4 = di()), r4;
    }
    function to() {
      var r4, t3, n5, e4, o3;
      return r4 = Iu, t3 = Iu, (n5 = yi()) !== u2 ? (e4 = ea(), (o3 = vi()) !== u2 ? t3 = n5 = [n5, e4, o3] : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2), t3 !== u2 && (Ou = r4, t3 = pn(t3)), (r4 = t3) === u2 && (r4 = vi()), r4;
    }
    function no() {
      var r4, t3, n5, e4;
      return r4 = Iu, (t3 = ro()) !== u2 ? (ea(), (n5 = Yo()) !== u2 ? (ea(), hi() !== u2 ? (ea(), (e4 = ko()) !== u2 ? (Ou = r4, r4 = dn(t3, n5, e4)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2), r4 === u2 && (r4 = Iu, (t3 = ro()) !== u2 ? (ea(), (n5 = Yo()) !== u2 ? (Ou = r4, r4 = hn(t3, n5)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)), r4;
    }
    function eo() {
      var r4, t3, n5, e4;
      return r4 = Iu, (t3 = to()) !== u2 ? (ea(), (n5 = ta()) !== u2 ? (ea(), (e4 = Gu()) !== u2 ? (ea(), na() !== u2 ? (Ou = r4, r4 = yn(t3, e4)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2), r4 === u2 && (r4 = Iu, (t3 = to()) !== u2 ? (ea(), (n5 = ta()) !== u2 ? (ea(), (e4 = na()) !== u2 ? (Ou = r4, r4 = bn(t3)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2), r4 === u2 && (r4 = Iu, (t3 = to()) !== u2 ? (ea(), (n5 = Lo()) !== u2 ? (Ou = r4, r4 = An(t3, n5)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2))), r4;
    }
    function uo() {
      var r4, t3, n5, e4, o3, i3, a3, s4;
      if (r4 = Iu, (t3 = io()) !== u2) {
        for (n5 = [], e4 = Iu, o3 = ea(), (i3 = oo()) !== u2 ? (a3 = ea(), (s4 = io()) !== u2 ? e4 = o3 = [o3, i3, a3, s4] : (Iu = e4, e4 = u2)) : (Iu = e4, e4 = u2); e4 !== u2; )
          n5.push(e4), e4 = Iu, o3 = ea(), (i3 = oo()) !== u2 ? (a3 = ea(), (s4 = io()) !== u2 ? e4 = o3 = [o3, i3, a3, s4] : (Iu = e4, e4 = u2)) : (Iu = e4, e4 = u2);
        Ou = r4, r4 = Cn(t3, n5);
      } else
        Iu = r4, r4 = u2;
      return r4;
    }
    function oo() {
      var t3;
      return 43 === r3.charCodeAt(Iu) ? (t3 = y2, Iu++) : (t3 = u2, 0 === Mu && Zu(jr)), t3 === u2 && (45 === r3.charCodeAt(Iu) ? (t3 = b2, Iu++) : (t3 = u2, 0 === Mu && Zu(Zr)), t3 === u2 && (r3.substr(Iu, 2) === A2 ? (t3 = A2, Iu += 2) : (t3 = u2, 0 === Mu && Zu(zr)))), t3;
    }
    function io() {
      var r4, t3, n5, e4, o3, i3, a3, s4;
      if (r4 = Iu, (t3 = so()) !== u2) {
        for (n5 = [], e4 = Iu, o3 = ea(), (i3 = ao()) !== u2 ? (a3 = ea(), (s4 = so()) !== u2 ? e4 = o3 = [o3, i3, a3, s4] : (Iu = e4, e4 = u2)) : (Iu = e4, e4 = u2); e4 !== u2; )
          n5.push(e4), e4 = Iu, o3 = ea(), (i3 = ao()) !== u2 ? (a3 = ea(), (s4 = so()) !== u2 ? e4 = o3 = [o3, i3, a3, s4] : (Iu = e4, e4 = u2)) : (Iu = e4, e4 = u2);
        Ou = r4, r4 = gn(t3, n5);
      } else
        Iu = r4, r4 = u2;
      return r4;
    }
    function ao() {
      var t3;
      return 42 === r3.charCodeAt(Iu) ? (t3 = C2, Iu++) : (t3 = u2, 0 === Mu && Zu(Pr)), t3 === u2 && (47 === r3.charCodeAt(Iu) ? (t3 = g2, Iu++) : (t3 = u2, 0 === Mu && Zu(Br))), t3;
    }
    function so() {
      var r4, t3;
      return (r4 = Mo()) === u2 && (r4 = To()) === u2 && (r4 = wo()) === u2 && (r4 = Io()) === u2 && (r4 = Ro()) === u2 && (r4 = xo()) === u2 && (r4 = So()) === u2 && (r4 = qo()) === u2 && (r4 = co()) === u2 && (r4 = Lo()) === u2 && (r4 = Iu, ta() !== u2 ? (ea(), (t3 = Vu()) !== u2 ? (ea(), na() !== u2 ? (Ou = r4, r4 = mn(t3)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)), r4;
    }
    function co() {
      var r4, t3;
      return r4 = Iu, (t3 = fo()) !== u2 && (Ou = r4, t3 = En(t3)), (r4 = t3) === u2 && (r4 = Iu, (t3 = bo()) !== u2 && (Ou = r4, t3 = Ln(t3)), r4 = t3), r4;
    }
    function fo() {
      var r4, t3;
      return r4 = Iu, (t3 = lo()) !== u2 && (Ou = r4, t3 = Tn(t3)), r4 = t3;
    }
    function lo() {
      var r4, t3, n5, e4;
      if (r4 = Iu, (t3 = po()) !== u2) {
        for (n5 = [], e4 = yo(); e4 !== u2; )
          n5.push(e4), e4 = yo();
        Ou = r4, r4 = wn(t3, n5);
      } else
        Iu = r4, r4 = u2;
      return r4;
    }
    function vo() {
      var r4, t3, n5, e4;
      if (r4 = Iu, (t3 = po()) !== u2) {
        for (n5 = [], e4 = ho(); e4 !== u2; )
          n5.push(e4), e4 = ho();
        Ou = r4, r4 = xn(t3, n5);
      } else
        Iu = r4, r4 = u2;
      return r4;
    }
    function po() {
      var t3;
      return mr.test(r3.charAt(Iu)) ? (t3 = r3.charAt(Iu), Iu++) : (t3 = u2, 0 === Mu && Zu(Gr)), t3;
    }
    function ho() {
      var t3;
      return Er.test(r3.charAt(Iu)) ? (t3 = r3.charAt(Iu), Iu++) : (t3 = u2, 0 === Mu && Zu(Vr)), t3;
    }
    function yo() {
      var t3;
      return Lr.test(r3.charAt(Iu)) ? (t3 = r3.charAt(Iu), Iu++) : (t3 = u2, 0 === Mu && Zu(Wr)), t3;
    }
    function bo() {
      var r4, t3;
      return r4 = Iu, Eo() !== u2 ? (t3 = Ao(), Eo() !== u2 ? (Ou = r4, r4 = Nn(t3)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2), r4;
    }
    function Ao() {
      var r4, t3, n5;
      for (r4 = Iu, t3 = [], n5 = Co(); n5 !== u2; )
        t3.push(n5), n5 = Co();
      return Ou = r4, r4 = t3 = In(t3);
    }
    function Co() {
      var r4;
      return (r4 = mo()) === u2 && (r4 = go()), r4;
    }
    function go() {
      var r4;
      return r4 = Iu, Eo() !== u2 && Eo() !== u2 ? (Ou = r4, r4 = On()) : (Iu = r4, r4 = u2), r4;
    }
    function mo() {
      var t3;
      return Lr.test(r3.charAt(Iu)) ? (t3 = r3.charAt(Iu), Iu++) : (t3 = u2, 0 === Mu && Zu(Wr)), t3;
    }
    function Eo() {
      var t3;
      return Tr.test(r3.charAt(Iu)) ? (t3 = r3.charAt(Iu), Iu++) : (t3 = u2, 0 === Mu && Zu(Yr)), t3;
    }
    function Lo() {
      var t3, n5, e4, o3;
      return t3 = Iu, n5 = Iu, 64 === r3.charCodeAt(Iu) ? (e4 = m2, Iu++) : (e4 = u2, 0 === Mu && Zu(kr)), e4 !== u2 && (o3 = vo()) !== u2 ? n5 = e4 = [e4, o3] : (Iu = n5, n5 = u2), n5 !== u2 && (Ou = t3, n5 = Rn(n5)), t3 = n5;
    }
    function To() {
      var r4, t3, n5;
      return r4 = Iu, Li() !== u2 ? (ea(), ta() !== u2 ? (ea(), (t3 = Fo()) !== u2 ? (ea(), gi() !== u2 ? (ea(), (n5 = Vu()) !== u2 ? (ea(), na() !== u2 ? (Ou = r4, r4 = Sn(t3, n5)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2), r4;
    }
    function wo() {
      var r4, t3, n5, e4, o3, i3, a3;
      return r4 = Iu, Ei() !== u2 ? (ea(), ta() !== u2 ? (ea(), (t3 = Vu()) !== u2 ? (ea(), gi() !== u2 ? (ea(), (n5 = Vu()) !== u2 ? (ea(), e4 = Iu, (o3 = mi()) !== u2 ? (i3 = ea(), (a3 = Vu()) !== u2 ? e4 = o3 = [o3, i3, a3, ea()] : (Iu = e4, e4 = u2)) : (Iu = e4, e4 = u2), e4 === u2 && (e4 = null), (o3 = na()) !== u2 ? (Ou = r4, r4 = Fn(t3, n5, e4)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2), r4;
    }
    function xo() {
      var r4, t3, n5;
      return r4 = Iu, Fi() !== u2 ? (ea(), ta() !== u2 ? (ea(), (t3 = Vu()) !== u2 ? (ea(), Mi() !== u2 ? (ea(), (n5 = No()) !== u2 ? (ea(), na() !== u2 ? (Ou = r4, r4 = Mn(t3, n5)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2), r4;
    }
    function No() {
      var r4, t3, n5;
      return r4 = Iu, (t3 = Hi()) !== u2 && (Ou = r4, t3 = Hn()), (r4 = t3) === u2 && (r4 = Iu, (t3 = Ui()) !== u2 && (Ou = r4, t3 = Un()), (r4 = t3) === u2 && (r4 = Iu, (t3 = $i()) !== u2 && (Ou = r4, t3 = $n()), (r4 = t3) === u2 && (r4 = Iu, (t3 = _i()) !== u2 && (Ou = r4, t3 = _n()), (r4 = t3) === u2 && (r4 = Iu, (t3 = Ni()) !== u2 && (Ou = r4, t3 = Dn()), (r4 = t3) === u2 && (r4 = Iu, (t3 = xi()) !== u2 && (Ou = r4, t3 = jn()), (r4 = t3) === u2 && (r4 = Iu, (t3 = Ii()) !== u2 && (Ou = r4, t3 = Zn()), (r4 = t3) === u2 && (r4 = Iu, (t3 = Di()) !== u2 ? (ea(), ta() !== u2 ? (ea(), (n5 = ii()) !== u2 ? (ea(), na() !== u2 ? (Ou = r4, r4 = zn(n5)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)))))))), r4;
    }
    function Io() {
      var r4, t3, n5, e4;
      return r4 = Iu, Ti() !== u2 ? (ea(), ta() !== u2 ? (ea(), (t3 = Oo()) === u2 && (t3 = null), ea(), (n5 = Vu()) !== u2 ? (ea(), gi() !== u2 ? (ea(), (e4 = Vu()) !== u2 ? (ea(), na() !== u2 ? (Ou = r4, r4 = Pn(t3, n5, e4)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2), r4 === u2 && (r4 = Iu, Ti() !== u2 ? (ea(), ta() !== u2 ? (ea(), (t3 = Oo()) === u2 && (t3 = null), ea(), (n5 = Vu()) !== u2 ? (ea(), na() !== u2 ? (Ou = r4, r4 = Bn(t3, n5)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)), r4;
    }
    function Oo() {
      var r4;
      return (r4 = Oi()) === u2 && (r4 = Ri()) === u2 && (r4 = Si()), r4;
    }
    function Ro() {
      var r4, t3, n5;
      return r4 = Iu, wi() !== u2 ? (ea(), ta() !== u2 ? (ea(), (t3 = Vu()) !== u2 ? (ea(), vi() !== u2 ? (ea(), (n5 = Vu()) !== u2 ? (ea(), na() !== u2 ? (Ou = r4, r4 = Gn(t3, n5)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2), r4;
    }
    function So() {
      var r4, t3, n5;
      return r4 = Iu, (t3 = oa()) !== u2 ? (ea(), ta() !== u2 ? (ea(), (n5 = Gu()) === u2 && (n5 = null), ea(), na() !== u2 ? (Ou = r4, r4 = Vn(t3, n5)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2), r4;
    }
    function Fo() {
      var r4;
      return (r4 = zi()) === u2 && (r4 = Gi()) === u2 && (r4 = Vi()) === u2 && (r4 = Wi()) === u2 && (r4 = Yi()) === u2 && (r4 = ki()) === u2 && (r4 = Pi()) === u2 && (r4 = Bi()), r4;
    }
    function Mo() {
      var r4;
      return (r4 = ko()) === u2 && (r4 = ti()) === u2 && (r4 = Wo()) === u2 && (r4 = Vo()) === u2 && (r4 = Go()) === u2 && (r4 = Ho()) === u2 && (r4 = $o()) === u2 && (r4 = Uo()), r4;
    }
    function Ho() {
      var r4, t3;
      return r4 = Iu, xi() !== u2 ? (ea(), (t3 = Yo()) !== u2 ? (Ou = r4, r4 = Wn(t3)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2), r4;
    }
    function Uo() {
      var r4, t3;
      return r4 = Iu, Ii() !== u2 ? (ea(), (t3 = Yo()) !== u2 ? (Ou = r4, r4 = Yn(t3)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2), r4;
    }
    function $o() {
      var t3, n5, e4, o3;
      return t3 = Iu, Zi() !== u2 ? (ea(), 45 === r3.charCodeAt(Iu) ? (n5 = b2, Iu++) : (n5 = u2, 0 === Mu && Zu(Zr)), n5 === u2 && (43 === r3.charCodeAt(Iu) ? (n5 = y2, Iu++) : (n5 = u2, 0 === Mu && Zu(jr))), n5 !== u2 ? (ea(), (e4 = Yo()) !== u2 ? (ea(), (o3 = _o()) !== u2 ? (Ou = t3, t3 = kn(n5, e4, o3)) : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2), t3 === u2 && (t3 = Iu, Zi() !== u2 ? (ea(), (n5 = Yo()) !== u2 ? (ea(), (e4 = _o()) !== u2 ? (Ou = t3, t3 = qn(n5, e4)) : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2)), t3;
    }
    function _o() {
      var r4, t3, n5;
      return r4 = Iu, (t3 = Do()) !== u2 ? (ea(), ji() !== u2 ? (ea(), (n5 = jo()) !== u2 ? (Ou = r4, r4 = Kn(t3, n5)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2), r4 === u2 && (r4 = Zo()), r4;
    }
    function Do() {
      var r4, t3, n5;
      return r4 = Iu, (t3 = zo()) !== u2 ? (ea(), ta() !== u2 ? (ea(), (n5 = Bo()) !== u2 ? (ea(), na() !== u2 ? (Ou = r4, r4 = Xn(t3, n5)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2), r4 === u2 && (r4 = Iu, (t3 = zo()) !== u2 && (Ou = r4, t3 = Jn(t3)), r4 = t3), r4;
    }
    function jo() {
      var r4, t3, n5, e4;
      return r4 = Iu, (t3 = zo()) !== u2 && (Ou = r4, t3 = Qn(t3)), (r4 = t3) === u2 && (r4 = Iu, (t3 = ki()) !== u2 ? (ea(), ta() !== u2 ? (ea(), (n5 = Bo()) !== u2 ? (ea(), ra() !== u2 ? (ea(), (e4 = Po()) !== u2 ? (ea(), na() !== u2 ? (Ou = r4, r4 = re(n5, e4)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2), r4 === u2 && (r4 = Iu, (t3 = ki()) !== u2 ? (ea(), ta() !== u2 ? (ea(), (n5 = Bo()) !== u2 ? (ea(), na() !== u2 ? (Ou = r4, r4 = te(n5)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2), r4 === u2 && (r4 = Iu, (t3 = ki()) !== u2 && (Ou = r4, t3 = ne()), r4 = t3))), r4;
    }
    function Zo() {
      var r4, t3, n5, e4;
      return r4 = Iu, (t3 = zo()) !== u2 ? (ea(), ta() !== u2 ? (ea(), (n5 = Po()) !== u2 ? (ea(), na() !== u2 ? (Ou = r4, r4 = ee(t3, n5)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2), r4 === u2 && (r4 = Iu, (t3 = zo()) !== u2 && (Ou = r4, t3 = ue(t3)), (r4 = t3) === u2 && (r4 = Iu, (t3 = ki()) !== u2 ? (ea(), ta() !== u2 ? (ea(), (n5 = Bo()) !== u2 ? (ea(), ra() !== u2 ? (ea(), (e4 = Po()) !== u2 ? (ea(), na() !== u2 ? (Ou = r4, r4 = oe(n5, e4)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2), r4 === u2 && (r4 = Iu, (t3 = ki()) !== u2 ? (ea(), ta() !== u2 ? (ea(), (n5 = Po()) !== u2 ? (ea(), na() !== u2 ? (Ou = r4, r4 = ie(n5)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2), r4 === u2 && (r4 = Iu, (t3 = ki()) !== u2 && (Ou = r4, t3 = ae()), r4 = t3)))), r4;
    }
    function zo() {
      var r4, t3;
      return r4 = Iu, (t3 = Vi()) !== u2 && (Ou = r4, t3 = se()), (r4 = t3) === u2 && (r4 = Iu, (t3 = Wi()) !== u2 && (Ou = r4, t3 = ce()), (r4 = t3) === u2 && (r4 = Iu, (t3 = Yi()) !== u2 && (Ou = r4, t3 = fe()), (r4 = t3) === u2 && (r4 = Iu, (t3 = Gi()) !== u2 && (Ou = r4, t3 = le()), (r4 = t3) === u2 && (r4 = Iu, (t3 = zi()) !== u2 && (Ou = r4, t3 = ve()), r4 = t3)))), r4;
    }
    function Po() {
      var r4, t3;
      return r4 = Iu, (t3 = ii()) !== u2 && (Ou = r4, t3 = pe(t3)), r4 = t3;
    }
    function Bo() {
      var r4, t3;
      return r4 = Iu, (t3 = ii()) !== u2 && (Ou = r4, t3 = de(t3)), r4 = t3;
    }
    function Go() {
      var r4, t3;
      return r4 = Iu, Ni() !== u2 ? (ea(), (t3 = Yo()) !== u2 ? (Ou = r4, r4 = he(t3)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2), r4;
    }
    function Vo() {
      var r4, t3;
      return r4 = Iu, (t3 = ci()) !== u2 && (Ou = r4, t3 = ye()), r4 = t3;
    }
    function Wo() {
      var r4, t3;
      return r4 = Iu, (t3 = fi()) !== u2 && (Ou = r4, t3 = be()), (r4 = t3) === u2 && (r4 = Iu, (t3 = li()) !== u2 && (Ou = r4, t3 = Ae()), r4 = t3), r4;
    }
    function Yo() {
      var r4;
      return (r4 = ko()) === u2 && (r4 = Lo()), r4;
    }
    function ko() {
      var t3, n5, e4, o3, i3;
      if (t3 = Iu, 39 === r3.charCodeAt(Iu) ? (n5 = E2, Iu++) : (n5 = u2, 0 === Mu && Zu(qr)), n5 === u2 && (r3.substr(Iu, 2) === L2 ? (n5 = L2, Iu += 2) : (n5 = u2, 0 === Mu && Zu(Kr))), n5 !== u2) {
        for (e4 = [], o3 = Iu, r3.substr(Iu, 2) === T2 ? (i3 = T2, Iu += 2) : (i3 = u2, 0 === Mu && Zu(Xr)), i3 !== u2 && (Ou = o3, i3 = Ce()), (o3 = i3) === u2 && (wr.test(r3.charAt(Iu)) ? (o3 = r3.charAt(Iu), Iu++) : (o3 = u2, 0 === Mu && Zu(Jr))); o3 !== u2; )
          e4.push(o3), o3 = Iu, r3.substr(Iu, 2) === T2 ? (i3 = T2, Iu += 2) : (i3 = u2, 0 === Mu && Zu(Xr)), i3 !== u2 && (Ou = o3, i3 = Ce()), (o3 = i3) === u2 && (wr.test(r3.charAt(Iu)) ? (o3 = r3.charAt(Iu), Iu++) : (o3 = u2, 0 === Mu && Zu(Jr)));
        39 === r3.charCodeAt(Iu) ? (o3 = E2, Iu++) : (o3 = u2, 0 === Mu && Zu(qr)), o3 !== u2 ? (Ou = t3, t3 = ge(e4)) : (Iu = t3, t3 = u2);
      } else
        Iu = t3, t3 = u2;
      return t3;
    }
    function qo() {
      var r4;
      return (r4 = Ko()) === u2 && (r4 = Xo()), r4;
    }
    function Ko() {
      var r4, t3, n5, e4, o3;
      if (r4 = Iu, qi() !== u2)
        if (ea(), (t3 = Vu()) !== u2) {
          for (ea(), n5 = [], e4 = Qo(); e4 !== u2; )
            n5.push(e4), e4 = Qo();
          e4 = ea(), (o3 = Ki()) !== u2 ? (Ou = r4, r4 = me(t3, n5)) : (Iu = r4, r4 = u2);
        } else
          Iu = r4, r4 = u2;
      else
        Iu = r4, r4 = u2;
      if (r4 === u2)
        if (r4 = Iu, qi() !== u2)
          if (ea(), (t3 = Vu()) !== u2) {
            for (ea(), n5 = [], e4 = Qo(); e4 !== u2; )
              n5.push(e4), e4 = Qo();
            e4 = ea(), (o3 = ri()) !== u2 ? (ea(), Ki() !== u2 ? (Ou = r4, r4 = Ee(t3, n5, o3)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2);
          } else
            Iu = r4, r4 = u2;
        else
          Iu = r4, r4 = u2;
      return r4;
    }
    function Xo() {
      var r4, t3, n5, e4;
      if (r4 = Iu, qi() !== u2) {
        for (ea(), t3 = [], n5 = Jo(); n5 !== u2; )
          t3.push(n5), n5 = Jo();
        n5 = ea(), (e4 = Ki()) !== u2 ? (Ou = r4, r4 = Le(t3)) : (Iu = r4, r4 = u2);
      } else
        Iu = r4, r4 = u2;
      if (r4 === u2)
        if (r4 = Iu, qi() !== u2) {
          for (ea(), t3 = [], n5 = Jo(); n5 !== u2; )
            t3.push(n5), n5 = Jo();
          n5 = ea(), (e4 = ri()) !== u2 ? (ea(), Ki() !== u2 ? (Ou = r4, r4 = Te(t3, e4)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2);
        } else
          Iu = r4, r4 = u2;
      return r4;
    }
    function Jo() {
      var r4, t3, n5;
      return r4 = Iu, Xi() !== u2 ? (ea(), (t3 = Vu()) !== u2 ? (ea(), Ji() !== u2 ? (ea(), (n5 = Vu()) !== u2 ? (Ou = r4, r4 = we(t3, n5)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2), r4;
    }
    function Qo() {
      var r4, t3, n5;
      return r4 = Iu, Xi() !== u2 ? (ea(), (t3 = Vu()) !== u2 ? (ea(), Ji() !== u2 ? (ea(), (n5 = Vu()) !== u2 ? (Ou = r4, r4 = xe(t3, n5)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2), r4;
    }
    function ri() {
      var r4, t3;
      return r4 = Iu, Qi() !== u2 ? (ea(), (t3 = Vu()) !== u2 ? (Ou = r4, r4 = Ne(t3)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2), r4;
    }
    function ti() {
      var r4, t3, n5, e4;
      return r4 = Iu, (t3 = ni()) !== u2 ? (n5 = Iu, Mu++, e4 = po(), Mu--, e4 === u2 ? n5 = void 0 : (Iu = n5, n5 = u2), n5 !== u2 ? (Ou = r4, r4 = Ie(t3)) : (Iu = r4, r4 = u2)) : (Iu = r4, r4 = u2), r4;
    }
    function ni() {
      var r4, t3, n5, e4;
      return r4 = Iu, (t3 = ei()) !== u2 && (n5 = ui()) !== u2 && (e4 = oi()) !== u2 ? (Ou = r4, r4 = Oe(t3, n5, e4)) : (Iu = r4, r4 = u2), r4 === u2 && (r4 = Iu, (t3 = ei()) !== u2 && (n5 = ui()) !== u2 ? (Ou = r4, r4 = Re(t3, n5)) : (Iu = r4, r4 = u2), r4 === u2 && (r4 = Iu, (t3 = ei()) !== u2 && (n5 = oi()) !== u2 ? (Ou = r4, r4 = Se(t3, n5)) : (Iu = r4, r4 = u2), r4 === u2 && (r4 = Iu, (t3 = ei()) !== u2 && (Ou = r4, t3 = Fe(t3)), r4 = t3))), r4;
    }
    function ei() {
      var t3, n5, e4;
      return (t3 = ii()) === u2 && (t3 = Iu, 45 === r3.charCodeAt(Iu) ? (n5 = b2, Iu++) : (n5 = u2, 0 === Mu && Zu(Zr)), n5 === u2 && (43 === r3.charCodeAt(Iu) ? (n5 = y2, Iu++) : (n5 = u2, 0 === Mu && Zu(jr))), n5 !== u2 && (e4 = ii()) !== u2 ? (Ou = t3, t3 = Me(n5, e4)) : (Iu = t3, t3 = u2)), t3;
    }
    function ui() {
      var t3, n5, e4;
      return t3 = Iu, 46 === r3.charCodeAt(Iu) ? (n5 = w2, Iu++) : (n5 = u2, 0 === Mu && Zu(Qr)), n5 !== u2 ? ((e4 = ii()) === u2 && (e4 = null), Ou = t3, t3 = He(e4)) : (Iu = t3, t3 = u2), t3;
    }
    function oi() {
      var r4, t3, n5;
      return r4 = Iu, (t3 = si()) !== u2 && (n5 = ii()) !== u2 ? (Ou = r4, r4 = Ue(t3, n5)) : (Iu = r4, r4 = u2), r4;
    }
    function ii() {
      var r4, t3, n5;
      if (r4 = Iu, t3 = [], (n5 = ai()) !== u2)
        for (; n5 !== u2; )
          t3.push(n5), n5 = ai();
      else
        t3 = u2;
      return t3 !== u2 && (Ou = r4, t3 = $e(t3)), r4 = t3;
    }
    function ai() {
      var t3;
      return xr.test(r3.charAt(Iu)) ? (t3 = r3.charAt(Iu), Iu++) : (t3 = u2, 0 === Mu && Zu(rt)), t3;
    }
    function si() {
      var t3, n5, e4;
      return t3 = Iu, Nr.test(r3.charAt(Iu)) ? (n5 = r3.charAt(Iu), Iu++) : (n5 = u2, 0 === Mu && Zu(tt)), n5 !== u2 ? (Ir.test(r3.charAt(Iu)) ? (e4 = r3.charAt(Iu), Iu++) : (e4 = u2, 0 === Mu && Zu(nt)), e4 === u2 && (e4 = null), Ou = t3, t3 = _e(n5, e4)) : (Iu = t3, t3 = u2), t3;
    }
    function ci() {
      var t3, n5, e4, o3;
      return t3 = Iu, r3.substr(Iu, 4).toLowerCase() === x3 ? (n5 = r3.substr(Iu, 4), Iu += 4) : (n5 = u2, 0 === Mu && Zu(et)), n5 !== u2 ? (e4 = Iu, Mu++, o3 = ho(), Mu--, o3 === u2 ? e4 = void 0 : (Iu = e4, e4 = u2), e4 !== u2 ? t3 = n5 = [n5, e4] : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2), t3;
    }
    function fi() {
      var t3, n5, e4, o3;
      return t3 = Iu, r3.substr(Iu, 4).toLowerCase() === N2 ? (n5 = r3.substr(Iu, 4), Iu += 4) : (n5 = u2, 0 === Mu && Zu(ut)), n5 !== u2 ? (e4 = Iu, Mu++, o3 = ho(), Mu--, o3 === u2 ? e4 = void 0 : (Iu = e4, e4 = u2), e4 !== u2 ? t3 = n5 = [n5, e4] : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2), t3;
    }
    function li() {
      var t3, n5, e4, o3;
      return t3 = Iu, r3.substr(Iu, 5).toLowerCase() === I2 ? (n5 = r3.substr(Iu, 5), Iu += 5) : (n5 = u2, 0 === Mu && Zu(ot)), n5 !== u2 ? (e4 = Iu, Mu++, o3 = ho(), Mu--, o3 === u2 ? e4 = void 0 : (Iu = e4, e4 = u2), e4 !== u2 ? t3 = n5 = [n5, e4] : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2), t3;
    }
    function vi() {
      var t3, n5, e4, o3;
      return t3 = Iu, r3.substr(Iu, 2).toLowerCase() === O2 ? (n5 = r3.substr(Iu, 2), Iu += 2) : (n5 = u2, 0 === Mu && Zu(it)), n5 !== u2 ? (e4 = Iu, Mu++, o3 = ho(), Mu--, o3 === u2 ? e4 = void 0 : (Iu = e4, e4 = u2), e4 !== u2 ? (Ou = t3, t3 = De()) : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2), t3;
    }
    function pi() {
      var t3, n5, e4, o3;
      return t3 = Iu, r3.substr(Iu, 2).toLowerCase() === R2 ? (n5 = r3.substr(Iu, 2), Iu += 2) : (n5 = u2, 0 === Mu && Zu(at)), n5 !== u2 ? (e4 = Iu, Mu++, o3 = ho(), Mu--, o3 === u2 ? e4 = void 0 : (Iu = e4, e4 = u2), e4 !== u2 ? (Ou = t3, t3 = je()) : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2), t3;
    }
    function di() {
      var t3, n5, e4, o3;
      return t3 = Iu, r3.substr(Iu, 4).toLowerCase() === S2 ? (n5 = r3.substr(Iu, 4), Iu += 4) : (n5 = u2, 0 === Mu && Zu(st)), n5 !== u2 ? (e4 = Iu, Mu++, o3 = ho(), Mu--, o3 === u2 ? e4 = void 0 : (Iu = e4, e4 = u2), e4 !== u2 ? (Ou = t3, t3 = Ze()) : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2), t3;
    }
    function hi() {
      var t3, n5, e4, o3;
      return t3 = Iu, r3.substr(Iu, 6).toLowerCase() === F2 ? (n5 = r3.substr(Iu, 6), Iu += 6) : (n5 = u2, 0 === Mu && Zu(ct)), n5 !== u2 ? (e4 = Iu, Mu++, o3 = ho(), Mu--, o3 === u2 ? e4 = void 0 : (Iu = e4, e4 = u2), e4 !== u2 ? (Ou = t3, t3 = ze()) : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2), t3;
    }
    function yi() {
      var t3, n5, e4, o3;
      return t3 = Iu, r3.substr(Iu, 3).toLowerCase() === M2 ? (n5 = r3.substr(Iu, 3), Iu += 3) : (n5 = u2, 0 === Mu && Zu(ft)), n5 !== u2 ? (e4 = Iu, Mu++, o3 = ho(), Mu--, o3 === u2 ? e4 = void 0 : (Iu = e4, e4 = u2), e4 !== u2 ? (Ou = t3, t3 = Pe()) : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2), t3;
    }
    function bi() {
      var t3, n5, e4, o3;
      return t3 = Iu, r3.substr(Iu, 3).toLowerCase() === H2 ? (n5 = r3.substr(Iu, 3), Iu += 3) : (n5 = u2, 0 === Mu && Zu(lt)), n5 !== u2 ? (e4 = Iu, Mu++, o3 = ho(), Mu--, o3 === u2 ? e4 = void 0 : (Iu = e4, e4 = u2), e4 !== u2 ? (Ou = t3, t3 = Be()) : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2), t3;
    }
    function Ai() {
      var t3, n5, e4, o3;
      return t3 = Iu, r3.substr(Iu, 2).toLowerCase() === U2 ? (n5 = r3.substr(Iu, 2), Iu += 2) : (n5 = u2, 0 === Mu && Zu(vt)), n5 !== u2 ? (e4 = Iu, Mu++, o3 = ho(), Mu--, o3 === u2 ? e4 = void 0 : (Iu = e4, e4 = u2), e4 !== u2 ? (Ou = t3, t3 = Ge()) : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2), t3;
    }
    function Ci() {
      var t3, n5, e4, o3;
      return t3 = Iu, r3.substr(Iu, 7).toLowerCase() === $2 ? (n5 = r3.substr(Iu, 7), Iu += 7) : (n5 = u2, 0 === Mu && Zu(pt)), n5 !== u2 ? (e4 = Iu, Mu++, o3 = ho(), Mu--, o3 === u2 ? e4 = void 0 : (Iu = e4, e4 = u2), e4 !== u2 ? (Ou = t3, t3 = Ve()) : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2), t3;
    }
    function gi() {
      var t3, n5, e4, o3;
      return t3 = Iu, r3.substr(Iu, 4).toLowerCase() === _2 ? (n5 = r3.substr(Iu, 4), Iu += 4) : (n5 = u2, 0 === Mu && Zu(dt)), n5 !== u2 ? (e4 = Iu, Mu++, o3 = ho(), Mu--, o3 === u2 ? e4 = void 0 : (Iu = e4, e4 = u2), e4 !== u2 ? (Ou = t3, t3 = We()) : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2), t3;
    }
    function mi() {
      var t3, n5, e4, o3;
      return t3 = Iu, r3.substr(Iu, 3).toLowerCase() === D2 ? (n5 = r3.substr(Iu, 3), Iu += 3) : (n5 = u2, 0 === Mu && Zu(ht)), n5 !== u2 ? (e4 = Iu, Mu++, o3 = ho(), Mu--, o3 === u2 ? e4 = void 0 : (Iu = e4, e4 = u2), e4 !== u2 ? (Ou = t3, t3 = Ye()) : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2), t3;
    }
    function Ei() {
      var t3, n5, e4, o3;
      return t3 = Iu, r3.substr(Iu, 9).toLowerCase() === j2 ? (n5 = r3.substr(Iu, 9), Iu += 9) : (n5 = u2, 0 === Mu && Zu(yt)), n5 !== u2 ? (e4 = Iu, Mu++, o3 = ho(), Mu--, o3 === u2 ? e4 = void 0 : (Iu = e4, e4 = u2), e4 !== u2 ? (Ou = t3, t3 = ke()) : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2), t3;
    }
    function Li() {
      var t3, n5, e4, o3;
      return t3 = Iu, r3.substr(Iu, 7).toLowerCase() === Z2 ? (n5 = r3.substr(Iu, 7), Iu += 7) : (n5 = u2, 0 === Mu && Zu(bt)), n5 !== u2 ? (e4 = Iu, Mu++, o3 = ho(), Mu--, o3 === u2 ? e4 = void 0 : (Iu = e4, e4 = u2), e4 !== u2 ? (Ou = t3, t3 = qe()) : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2), t3;
    }
    function Ti() {
      var t3, n5, e4, o3;
      return t3 = Iu, r3.substr(Iu, 4).toLowerCase() === z2 ? (n5 = r3.substr(Iu, 4), Iu += 4) : (n5 = u2, 0 === Mu && Zu(At)), n5 !== u2 ? (e4 = Iu, Mu++, o3 = ho(), Mu--, o3 === u2 ? e4 = void 0 : (Iu = e4, e4 = u2), e4 !== u2 ? (Ou = t3, t3 = Ke()) : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2), t3;
    }
    function wi() {
      var t3, n5, e4, o3;
      return t3 = Iu, r3.substr(Iu, 8).toLowerCase() === P2 ? (n5 = r3.substr(Iu, 8), Iu += 8) : (n5 = u2, 0 === Mu && Zu(Ct)), n5 !== u2 ? (e4 = Iu, Mu++, o3 = ho(), Mu--, o3 === u2 ? e4 = void 0 : (Iu = e4, e4 = u2), e4 !== u2 ? (Ou = t3, t3 = Xe()) : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2), t3;
    }
    function xi() {
      var t3, n5, e4, o3;
      return t3 = Iu, r3.substr(Iu, 9).toLowerCase() === B2 ? (n5 = r3.substr(Iu, 9), Iu += 9) : (n5 = u2, 0 === Mu && Zu(gt)), n5 !== u2 ? (e4 = Iu, Mu++, o3 = ho(), Mu--, o3 === u2 ? e4 = void 0 : (Iu = e4, e4 = u2), e4 !== u2 ? (Ou = t3, t3 = Je()) : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2), t3;
    }
    function Ni() {
      var t3, n5, e4, o3;
      return t3 = Iu, r3.substr(Iu, 4).toLowerCase() === G2 ? (n5 = r3.substr(Iu, 4), Iu += 4) : (n5 = u2, 0 === Mu && Zu(mt)), n5 !== u2 ? (e4 = Iu, Mu++, o3 = ho(), Mu--, o3 === u2 ? e4 = void 0 : (Iu = e4, e4 = u2), e4 !== u2 ? (Ou = t3, t3 = Qe()) : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2), t3;
    }
    function Ii() {
      var t3, n5, e4, o3;
      return t3 = Iu, r3.substr(Iu, 4).toLowerCase() === V2 ? (n5 = r3.substr(Iu, 4), Iu += 4) : (n5 = u2, 0 === Mu && Zu(Et)), n5 !== u2 ? (e4 = Iu, Mu++, o3 = ho(), Mu--, o3 === u2 ? e4 = void 0 : (Iu = e4, e4 = u2), e4 !== u2 ? (Ou = t3, t3 = ru()) : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2), t3;
    }
    function Oi() {
      var t3, n5, e4, o3;
      return t3 = Iu, r3.substr(Iu, 7).toLowerCase() === W2 ? (n5 = r3.substr(Iu, 7), Iu += 7) : (n5 = u2, 0 === Mu && Zu(Lt)), n5 !== u2 ? (e4 = Iu, Mu++, o3 = ho(), Mu--, o3 === u2 ? e4 = void 0 : (Iu = e4, e4 = u2), e4 !== u2 ? (Ou = t3, t3 = tu()) : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2), t3;
    }
    function Ri() {
      var t3, n5, e4, o3;
      return t3 = Iu, r3.substr(Iu, 8).toLowerCase() === Y2 ? (n5 = r3.substr(Iu, 8), Iu += 8) : (n5 = u2, 0 === Mu && Zu(Tt)), n5 !== u2 ? (e4 = Iu, Mu++, o3 = ho(), Mu--, o3 === u2 ? e4 = void 0 : (Iu = e4, e4 = u2), e4 !== u2 ? (Ou = t3, t3 = nu()) : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2), t3;
    }
    function Si() {
      var t3, n5, e4, o3;
      return t3 = Iu, r3.substr(Iu, 4).toLowerCase() === k2 ? (n5 = r3.substr(Iu, 4), Iu += 4) : (n5 = u2, 0 === Mu && Zu(wt)), n5 !== u2 ? (e4 = Iu, Mu++, o3 = ho(), Mu--, o3 === u2 ? e4 = void 0 : (Iu = e4, e4 = u2), e4 !== u2 ? (Ou = t3, t3 = eu()) : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2), t3;
    }
    function Fi() {
      var t3, n5, e4, o3;
      return t3 = Iu, r3.substr(Iu, 4).toLowerCase() === q2 ? (n5 = r3.substr(Iu, 4), Iu += 4) : (n5 = u2, 0 === Mu && Zu(xt)), n5 !== u2 ? (e4 = Iu, Mu++, o3 = ho(), Mu--, o3 === u2 ? e4 = void 0 : (Iu = e4, e4 = u2), e4 !== u2 ? (Ou = t3, t3 = uu()) : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2), t3;
    }
    function Mi() {
      var t3, n5, e4, o3;
      return t3 = Iu, r3.substr(Iu, 2).toLowerCase() === K2 ? (n5 = r3.substr(Iu, 2), Iu += 2) : (n5 = u2, 0 === Mu && Zu(Nt)), n5 !== u2 ? (e4 = Iu, Mu++, o3 = ho(), Mu--, o3 === u2 ? e4 = void 0 : (Iu = e4, e4 = u2), e4 !== u2 ? (Ou = t3, t3 = ou()) : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2), t3;
    }
    function Hi() {
      var t3, n5, e4, o3;
      return t3 = Iu, r3.substr(Iu, 7).toLowerCase() === X2 ? (n5 = r3.substr(Iu, 7), Iu += 7) : (n5 = u2, 0 === Mu && Zu(It)), n5 !== u2 ? (e4 = Iu, Mu++, o3 = ho(), Mu--, o3 === u2 ? e4 = void 0 : (Iu = e4, e4 = u2), e4 !== u2 ? (Ou = t3, t3 = iu()) : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2), t3;
    }
    function Ui() {
      var t3, n5, e4, o3;
      return t3 = Iu, r3.substr(Iu, 8).toLowerCase() === J2 ? (n5 = r3.substr(Iu, 8), Iu += 8) : (n5 = u2, 0 === Mu && Zu(Ot)), n5 !== u2 ? (e4 = Iu, Mu++, o3 = ho(), Mu--, o3 === u2 ? e4 = void 0 : (Iu = e4, e4 = u2), e4 !== u2 ? (Ou = t3, t3 = au()) : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2), t3;
    }
    function $i() {
      var t3, n5, e4, o3;
      return t3 = Iu, r3.substr(Iu, 5).toLowerCase() === Q2 ? (n5 = r3.substr(Iu, 5), Iu += 5) : (n5 = u2, 0 === Mu && Zu(Rt)), n5 !== u2 ? (e4 = Iu, Mu++, o3 = ho(), Mu--, o3 === u2 ? e4 = void 0 : (Iu = e4, e4 = u2), e4 !== u2 ? (Ou = t3, t3 = su()) : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2), t3;
    }
    function _i() {
      var t3, n5, e4, o3;
      return t3 = Iu, r3.substr(Iu, 4).toLowerCase() === rr ? (n5 = r3.substr(Iu, 4), Iu += 4) : (n5 = u2, 0 === Mu && Zu(St)), n5 !== u2 ? (e4 = Iu, Mu++, o3 = ho(), Mu--, o3 === u2 ? e4 = void 0 : (Iu = e4, e4 = u2), e4 !== u2 ? (Ou = t3, t3 = cu()) : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2), t3;
    }
    function Di() {
      var t3, n5, e4, o3;
      return t3 = Iu, r3.substr(Iu, 7).toLowerCase() === tr ? (n5 = r3.substr(Iu, 7), Iu += 7) : (n5 = u2, 0 === Mu && Zu(Ft)), n5 !== u2 ? (e4 = Iu, Mu++, o3 = ho(), Mu--, o3 === u2 ? e4 = void 0 : (Iu = e4, e4 = u2), e4 !== u2 ? (Ou = t3, t3 = fu()) : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2), t3;
    }
    function ji() {
      var t3, n5, e4, o3;
      return t3 = Iu, r3.substr(Iu, 2).toLowerCase() === nr ? (n5 = r3.substr(Iu, 2), Iu += 2) : (n5 = u2, 0 === Mu && Zu(Mt)), n5 !== u2 ? (e4 = Iu, Mu++, o3 = ho(), Mu--, o3 === u2 ? e4 = void 0 : (Iu = e4, e4 = u2), e4 !== u2 ? (Ou = t3, t3 = lu()) : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2), t3;
    }
    function Zi() {
      var t3, n5, e4, o3;
      return t3 = Iu, r3.substr(Iu, 8).toLowerCase() === er ? (n5 = r3.substr(Iu, 8), Iu += 8) : (n5 = u2, 0 === Mu && Zu(Ht)), n5 !== u2 ? (e4 = Iu, Mu++, o3 = ho(), Mu--, o3 === u2 ? e4 = void 0 : (Iu = e4, e4 = u2), e4 !== u2 ? (Ou = t3, t3 = vu()) : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2), t3;
    }
    function zi() {
      var t3, n5, e4, o3;
      return t3 = Iu, r3.substr(Iu, 4).toLowerCase() === ur ? (n5 = r3.substr(Iu, 4), Iu += 4) : (n5 = u2, 0 === Mu && Zu(Ut)), n5 !== u2 ? (e4 = Iu, Mu++, o3 = ho(), Mu--, o3 === u2 ? e4 = void 0 : (Iu = e4, e4 = u2), e4 !== u2 ? (Ou = t3, t3 = pu()) : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2), t3;
    }
    function Pi() {
      var t3, n5, e4, o3;
      return t3 = Iu, r3.substr(Iu, 13).toLowerCase() === or ? (n5 = r3.substr(Iu, 13), Iu += 13) : (n5 = u2, 0 === Mu && Zu($t)), n5 !== u2 ? (e4 = Iu, Mu++, o3 = ho(), Mu--, o3 === u2 ? e4 = void 0 : (Iu = e4, e4 = u2), e4 !== u2 ? (Ou = t3, t3 = du()) : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2), t3;
    }
    function Bi() {
      var t3, n5, e4, o3;
      return t3 = Iu, r3.substr(Iu, 15).toLowerCase() === ir ? (n5 = r3.substr(Iu, 15), Iu += 15) : (n5 = u2, 0 === Mu && Zu(_t)), n5 !== u2 ? (e4 = Iu, Mu++, o3 = ho(), Mu--, o3 === u2 ? e4 = void 0 : (Iu = e4, e4 = u2), e4 !== u2 ? (Ou = t3, t3 = hu()) : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2), t3;
    }
    function Gi() {
      var t3, n5, e4, o3;
      return t3 = Iu, r3.substr(Iu, 5).toLowerCase() === ar ? (n5 = r3.substr(Iu, 5), Iu += 5) : (n5 = u2, 0 === Mu && Zu(Dt)), n5 !== u2 ? (e4 = Iu, Mu++, o3 = ho(), Mu--, o3 === u2 ? e4 = void 0 : (Iu = e4, e4 = u2), e4 !== u2 ? (Ou = t3, t3 = yu()) : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2), t3;
    }
    function Vi() {
      var t3, n5, e4, o3;
      return t3 = Iu, r3.substr(Iu, 3).toLowerCase() === sr ? (n5 = r3.substr(Iu, 3), Iu += 3) : (n5 = u2, 0 === Mu && Zu(jt)), n5 !== u2 ? (e4 = Iu, Mu++, o3 = ho(), Mu--, o3 === u2 ? e4 = void 0 : (Iu = e4, e4 = u2), e4 !== u2 ? (Ou = t3, t3 = bu()) : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2), t3;
    }
    function Wi() {
      var t3, n5, e4, o3;
      return t3 = Iu, r3.substr(Iu, 4).toLowerCase() === cr ? (n5 = r3.substr(Iu, 4), Iu += 4) : (n5 = u2, 0 === Mu && Zu(Zt)), n5 !== u2 ? (e4 = Iu, Mu++, o3 = ho(), Mu--, o3 === u2 ? e4 = void 0 : (Iu = e4, e4 = u2), e4 !== u2 ? (Ou = t3, t3 = Au()) : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2), t3;
    }
    function Yi() {
      var t3, n5, e4, o3;
      return t3 = Iu, r3.substr(Iu, 6).toLowerCase() === fr ? (n5 = r3.substr(Iu, 6), Iu += 6) : (n5 = u2, 0 === Mu && Zu(zt)), n5 !== u2 ? (e4 = Iu, Mu++, o3 = ho(), Mu--, o3 === u2 ? e4 = void 0 : (Iu = e4, e4 = u2), e4 !== u2 ? (Ou = t3, t3 = Cu()) : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2), t3;
    }
    function ki() {
      var t3, n5, e4, o3;
      return t3 = Iu, r3.substr(Iu, 6).toLowerCase() === lr ? (n5 = r3.substr(Iu, 6), Iu += 6) : (n5 = u2, 0 === Mu && Zu(Pt)), n5 !== u2 ? (e4 = Iu, Mu++, o3 = ho(), Mu--, o3 === u2 ? e4 = void 0 : (Iu = e4, e4 = u2), e4 !== u2 ? (Ou = t3, t3 = gu()) : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2), t3;
    }
    function qi() {
      var t3, n5, e4, o3;
      return t3 = Iu, r3.substr(Iu, 4).toLowerCase() === vr ? (n5 = r3.substr(Iu, 4), Iu += 4) : (n5 = u2, 0 === Mu && Zu(Bt)), n5 !== u2 ? (e4 = Iu, Mu++, o3 = ho(), Mu--, o3 === u2 ? e4 = void 0 : (Iu = e4, e4 = u2), e4 !== u2 ? (Ou = t3, t3 = mu()) : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2), t3;
    }
    function Ki() {
      var t3, n5, e4, o3;
      return t3 = Iu, r3.substr(Iu, 3).toLowerCase() === pr ? (n5 = r3.substr(Iu, 3), Iu += 3) : (n5 = u2, 0 === Mu && Zu(Gt)), n5 !== u2 ? (e4 = Iu, Mu++, o3 = ho(), Mu--, o3 === u2 ? e4 = void 0 : (Iu = e4, e4 = u2), e4 !== u2 ? (Ou = t3, t3 = Eu()) : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2), t3;
    }
    function Xi() {
      var t3, n5, e4, o3;
      return t3 = Iu, r3.substr(Iu, 4).toLowerCase() === dr ? (n5 = r3.substr(Iu, 4), Iu += 4) : (n5 = u2, 0 === Mu && Zu(Vt)), n5 !== u2 ? (e4 = Iu, Mu++, o3 = ho(), Mu--, o3 === u2 ? e4 = void 0 : (Iu = e4, e4 = u2), e4 !== u2 ? (Ou = t3, t3 = Lu()) : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2), t3;
    }
    function Ji() {
      var t3, n5, e4, o3;
      return t3 = Iu, r3.substr(Iu, 4).toLowerCase() === hr ? (n5 = r3.substr(Iu, 4), Iu += 4) : (n5 = u2, 0 === Mu && Zu(Wt)), n5 !== u2 ? (e4 = Iu, Mu++, o3 = ho(), Mu--, o3 === u2 ? e4 = void 0 : (Iu = e4, e4 = u2), e4 !== u2 ? (Ou = t3, t3 = Tu()) : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2), t3;
    }
    function Qi() {
      var t3, n5, e4, o3;
      return t3 = Iu, r3.substr(Iu, 4).toLowerCase() === yr ? (n5 = r3.substr(Iu, 4), Iu += 4) : (n5 = u2, 0 === Mu && Zu(Yt)), n5 !== u2 ? (e4 = Iu, Mu++, o3 = ho(), Mu--, o3 === u2 ? e4 = void 0 : (Iu = e4, e4 = u2), e4 !== u2 ? (Ou = t3, t3 = wu()) : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2), t3;
    }
    function ra() {
      var t3;
      return 44 === r3.charCodeAt(Iu) ? (t3 = br, Iu++) : (t3 = u2, 0 === Mu && Zu(kt)), t3;
    }
    function ta() {
      var t3;
      return 40 === r3.charCodeAt(Iu) ? (t3 = Ar, Iu++) : (t3 = u2, 0 === Mu && Zu(qt)), t3;
    }
    function na() {
      var t3;
      return 41 === r3.charCodeAt(Iu) ? (t3 = Cr, Iu++) : (t3 = u2, 0 === Mu && Zu(Kt)), t3;
    }
    function ea() {
      var r4, t3;
      for (r4 = [], t3 = ua(); t3 !== u2; )
        r4.push(t3), t3 = ua();
      return r4;
    }
    function ua() {
      var t3;
      return Or.test(r3.charAt(Iu)) ? (t3 = r3.charAt(Iu), Iu++) : (t3 = u2, 0 === Mu && Zu(Xt)), t3;
    }
    function oa() {
      var t3, n5, e4, o3;
      if (t3 = Iu, (n5 = vo()) !== u2 && (Ou = t3, n5 = xu(n5)), (t3 = n5) === u2)
        if (t3 = Iu, 96 === r3.charCodeAt(Iu) ? (n5 = gr, Iu++) : (n5 = u2, 0 === Mu && Zu(Jt)), n5 !== u2) {
          if (e4 = [], Rr.test(r3.charAt(Iu)) ? (o3 = r3.charAt(Iu), Iu++) : (o3 = u2, 0 === Mu && Zu(Qt)), o3 !== u2)
            for (; o3 !== u2; )
              e4.push(o3), Rr.test(r3.charAt(Iu)) ? (o3 = r3.charAt(Iu), Iu++) : (o3 = u2, 0 === Mu && Zu(Qt));
          else
            e4 = u2;
          e4 !== u2 ? (96 === r3.charCodeAt(Iu) ? (o3 = gr, Iu++) : (o3 = u2, 0 === Mu && Zu(Jt)), o3 !== u2 ? (Ou = t3, t3 = Nu(e4)) : (Iu = t3, t3 = u2)) : (Iu = t3, t3 = u2);
        } else
          Iu = t3, t3 = u2;
      return t3;
    }
    function ia(r4, t3) {
      return { type: "unary-expression", operator: r4, expr: t3 };
    }
    function aa(r4, t3, n5, e4) {
      var u3 = { type: "binary-expression", operator: r4, left: t3, right: n5 };
      return void 0 !== e4 && (u3.escape = e4), u3;
    }
    function sa(r4, t3) {
      for (var n5 = [r4], e4 = 0; e4 < t3.length; e4++)
        n5.push(t3[e4][3]);
      return n5;
    }
    function ca(r4, t3, n5) {
      return sa(r4, t3);
    }
    function fa(r4, t3) {
      for (var n5 = r4, e4 = 0; e4 < t3.length; e4++)
        n5 = aa(t3[e4][1], n5, t3[e4][3]);
      return n5;
    }
    function la(r4) {
      true !== /^(\d{4})-(\d{1,2})-(\d{1,2})$|^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})(\.[0-9]+)?$|^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})(\.[0-9]+)?[ ]{0,1}(\+|\-)(\d{1,2}):(\d{1,2})$|^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2})?[ ]{0,1}(\+|\-)(\d{1,2}):(\d{1,2})$|^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2})$/.test(r4) && Hu("Timestamp literal is invalid");
    }
    function va(r4) {
      true !== /^(\d{1,2}):(\d{1,2}):(\d{1,2})$|^(\d{1,2}):(\d{1,2})$|^(\d{1,2}):(\d{1,2}):(\d{1,2}).([0-9]+)$/.test(r4) && Hu("Time literal is invalid");
    }
    function pa(r4) {
      true !== /^(\d{4})-(\d{1,2})-(\d{1,2})$|^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})(\.[0-9]+)?$|^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})(\.[0-9]+)?[ ]{0,1}(\+|\-)(\d{1,2}):(\d{1,2})$|^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2})?[ ]{0,1}(\+|\-)(\d{1,2}):(\d{1,2})$|^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2})$/.test(r4) && Hu("Date literal is invalid");
    }
    if ((e3 = a2()) !== u2 && Iu === r3.length)
      return e3;
    throw e3 !== u2 && Iu < r3.length && Zu(_u()), Pu(Fu, Su < r3.length ? r3.charAt(Su) : null, Su < r3.length ? ju(Su, Su + 1) : ju(Su, Su));
  }
  return r2(t2, Error), t2.prototype.format = function(r3) {
    var t3 = "Error: " + this.message;
    if (this.location) {
      var e3, u2 = null;
      for (e3 = 0; e3 < r3.length; e3++)
        if (r3[e3].source === this.location.source) {
          u2 = r3[e3].text.split(/\r\n|\n|\r/g);
          break;
        }
      var o2 = this.location.start, i2 = this.location.source && "function" == typeof this.location.source.offset ? this.location.source.offset(o2) : o2, a2 = this.location.source + ":" + i2.line + ":" + i2.column;
      if (u2) {
        var s3 = this.location.end, c2 = n3("", i2.line.toString().length, " "), f2 = u2[o2.line - 1], l2 = (o2.line === s3.line ? s3.column : f2.length + 1) - o2.column || 1;
        t3 += "\n --> " + a2 + "\n" + c2 + " |\n" + i2.line + " | " + f2 + "\n" + c2 + " | " + n3("", o2.column - 1, " ") + n3("", l2, "^");
      } else
        t3 += "\n at " + a2;
    }
    return t3;
  }, t2.buildMessage = function(r3, t3) {
    var n4 = { literal: function(r4) {
      return '"' + u2(r4.text) + '"';
    }, class: function(r4) {
      var t4 = r4.parts.map(function(r5) {
        return Array.isArray(r5) ? o2(r5[0]) + "-" + o2(r5[1]) : o2(r5);
      });
      return "[" + (r4.inverted ? "^" : "") + t4.join("") + "]";
    }, any: function() {
      return "any character";
    }, end: function() {
      return "end of input";
    }, other: function(r4) {
      return r4.description;
    } };
    function e3(r4) {
      return r4.charCodeAt(0).toString(16).toUpperCase();
    }
    function u2(r4) {
      return r4.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(r5) {
        return "\\x0" + e3(r5);
      }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(r5) {
        return "\\x" + e3(r5);
      });
    }
    function o2(r4) {
      return r4.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(r5) {
        return "\\x0" + e3(r5);
      }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(r5) {
        return "\\x" + e3(r5);
      });
    }
    function i2(r4) {
      return n4[r4.type](r4);
    }
    function a2(r4) {
      var t4, n5, e4 = r4.map(i2);
      if (e4.sort(), e4.length > 0) {
        for (t4 = 1, n5 = 1; t4 < e4.length; t4++)
          e4[t4 - 1] !== e4[t4] && (e4[n5] = e4[t4], n5++);
        e4.length = n5;
      }
      switch (e4.length) {
        case 1:
          return e4[0];
        case 2:
          return e4[0] + " or " + e4[1];
        default:
          return e4.slice(0, -1).join(", ") + ", or " + e4[e4.length - 1];
      }
    }
    function s3(r4) {
      return r4 ? '"' + u2(r4) + '"' : "end of input";
    }
    return "Expected " + a2(r3) + " but " + s3(t3) + " found.";
  }, { SyntaxError: t2, parse: e2 };
}, (t = e).exports && (t.exports = n2());
var u = e.exports;
class o {
  static parse(r2) {
    return u.parse(r2);
  }
}
const A = /* @__PURE__ */ new Set(["current_timestamp", "current_date", "current_time"]);
class I {
  static makeBool(e2) {
    return O(e2);
  }
  static featureValue(e2, t2, a2, r2) {
    return C(e2, t2, a2, r2);
  }
  static equalsNull(e2) {
    return null === e2;
  }
  static applyLike(e2, t2, a2) {
    return j(e2, t2, a2);
  }
  static ensureArray(e2) {
    return F(e2);
  }
  static applyIn(e2, t2) {
    return E(e2, t2);
  }
  static currentDate(e2) {
    return n$2.fromNow(e2);
  }
  static makeSqlInterval(e2, t2, a2) {
    return s2.createFromValueAndQualifier(e2, t2, a2);
  }
  static convertInterval(e2) {
    return e2 instanceof s2 ? e2.valueInMilliseconds() : e2;
  }
  static currentTimestamp(e2) {
    return T$3(/* @__PURE__ */ new Date(), e2);
  }
  static compare(e2, t2, a2, r2) {
    return I$2(t2, a2, e2);
  }
  static calculate(e2, t2, a2, r2) {
    return d(e2, t2, a2, r2);
  }
  static evaluateTime(e2) {
    return O$3(e2);
  }
  static evaluateTimestamp(e2, t2, a2) {
    return P$1(e2, t2, a2);
  }
  static evaluateDate(e2, t2) {
    return V$2(e2, t2);
  }
  static evaluateFunction(e2, t2, a2) {
    return w$1(e2, t2, a2);
  }
  static lookup(e2, t2) {
    const a2 = t2[e2];
    return void 0 === a2 ? null : a2;
  }
  static between(e2, t2, a2) {
    return null == e2 || null == t2[0] || null == t2[1] ? null : I$2(e2, t2[0], ">=") && I$2(e2, t2[1], "<=");
  }
  static notbetween(e2, t2, a2) {
    return null == e2 || null == t2[0] || null == t2[1] ? null : I$2(e2, t2[0], "<") || I$2(e2, t2[1], ">");
  }
  static ternaryNot(e2) {
    return b(e2);
  }
  static ternaryAnd(e2, t2) {
    return D(e2, t2);
  }
  static ternaryOr(e2, t2) {
    return k(e2, t2);
  }
}
let x$1 = class x2 {
  constructor(e2, t2, a2 = "UTC") {
    this.fieldsIndex = t2, this.timeZone = a2, this.parameters = {}, this._hasDateFunctions = void 0, this.parseTree = o.parse(e2);
    const { isStandardized: r2, isAggregate: s3, referencedFieldNames: i2 } = this._extractExpressionInfo(t2);
    this._referencedFieldNames = i2, this.isStandardized = r2, this.isAggregate = s3;
  }
  static convertValueToStorageFormat(e2, t2 = null) {
    if (null === t2)
      return x$4(e2) ? e2.getTime() : j$3(e2) ? e2.toMillis() : D$3(e2) ? e2.toStorageFormat() : z$2(e2) ? e2.toStorageString() : $$1(e2) ? e2.toStorageFormat() : e2;
    switch (t2) {
      case "date":
        return x$4(e2) ? e2.getTime() : j$3(e2) ? e2.toMillis() : D$3(e2) ? e2.toMilliseconds() : $$1(e2) ? e2.toNumber() : e2;
      case "date-only":
        return x$4(e2) ? n$2.fromDateJS(e2).toString() : D$3(e2) ? n$2.fromSqlTimeStampOffset(e2).toString() : j$3(e2) ? n$2.fromDateTime(e2).toString() : e2;
      case "time-only":
        return x$4(e2) ? n$3.fromDateJS(e2).toStorageString() : j$3(e2) ? n$3.fromDateTime(e2).toStorageString() : D$3(e2) ? n$3.fromSqlTimeStampOffset(e2).toStorageString() : z$2(e2) ? e2.toStorageString() : e2;
      case "timestamp-offset":
        if (x$4(e2))
          return r.fromJSDate(e2).toStorageFormat();
        if (j$3(e2))
          return r.fromDateTime(e2).toStorageFormat();
        if (D$3(e2))
          return e2.toStorageFormat();
    }
    return e2;
  }
  static create(e2, t2, a2 = "UTC") {
    return new x2(e2, t2, a2);
  }
  get fieldNames() {
    return this._referencedFieldNames;
  }
  testSet(e2, t2 = U) {
    return !!this._evaluateNode(this.parseTree, null, t2, e2);
  }
  calculateValue(e2, t2 = U) {
    const a2 = this._evaluateNode(this.parseTree, e2, t2, null);
    return a2 instanceof s2 ? a2.valueInMilliseconds() / 864e5 : a2;
  }
  calculateValueCompiled(e2, t2 = U) {
    return null != this.parseTree._compiledVersion ? this.parseTree._compiledVersion(e2, this.parameters, t2, this.fieldsIndex, this.timeZone) : has("esri-csp-restrictions") ? this.calculateValue(e2, t2) : (this._compileMe(), this.parseTree._compiledVersion(e2, this.parameters, t2, this.fieldsIndex, this.timeZone));
  }
  testFeature(e2, t2 = U) {
    return !!this._evaluateNode(this.parseTree, e2, t2, null);
  }
  testFeatureCompiled(e2, t2 = U) {
    return null != this.parseTree._compiledVersion ? !!this.parseTree._compiledVersion(e2, this.parameters, t2, this.fieldsIndex, this.timeZone) : has("esri-csp-restrictions") ? this.testFeature(e2, t2) : (this._compileMe(), !!this.parseTree._compiledVersion(e2, this.parameters, t2, this.fieldsIndex, this.timeZone));
  }
  get hasDateFunctions() {
    return null != this._hasDateFunctions || (this._hasDateFunctions = false, this._visitAll(this.parseTree, (e2) => {
      "current-time" === e2.type ? this._hasDateFunctions = true : "function" === e2.type && (this._hasDateFunctions = this._hasDateFunctions || A.has(e2.name.toLowerCase()));
    })), this._hasDateFunctions;
  }
  getFunctions() {
    const e2 = /* @__PURE__ */ new Set();
    return this._visitAll(this.parseTree, (t2) => {
      "function" === t2.type && e2.add(t2.name.toLowerCase());
    }), Array.from(e2);
  }
  getExpressions() {
    const e2 = /* @__PURE__ */ new Map();
    return this._visitAll(this.parseTree, (t2) => {
      if ("function" === t2.type) {
        const a2 = t2.name.toLowerCase(), r2 = t2.args.value[0];
        if ("column-reference" === r2.type) {
          const t3 = r2.column, s3 = `${a2}-${t3}`;
          e2.has(s3) || e2.set(s3, { aggregateType: a2, field: t3 });
        }
      }
    }), [...e2.values()];
  }
  getVariables() {
    const e2 = /* @__PURE__ */ new Set();
    return this._visitAll(this.parseTree, (t2) => {
      "parameter" === t2.type && e2.add(t2.value.toLowerCase());
    }), Array.from(e2);
  }
  _compileMe() {
    const e2 = "return this.convertInterval(" + this.evaluateNodeToJavaScript(this.parseTree) + ")";
    this.parseTree._compiledVersion = new Function("feature", "lookups", "attributeAdapter", "fieldsIndex", "timeZone", e2).bind(I);
  }
  _extractExpressionInfo(e2) {
    const t2 = [], a2 = /* @__PURE__ */ new Set();
    let s3 = true, i2 = false;
    return this._visitAll(this.parseTree, (n3) => {
      switch (n3.type) {
        case "column-reference": {
          const r2 = e2?.get(n3.column);
          let s4, i3;
          r2 ? s4 = i3 = r2.name ?? "" : (i3 = n3.column, s4 = i3.toLowerCase()), a2.has(s4) || (a2.add(s4), t2.push(i3)), n3.column = i3;
          break;
        }
        case "function": {
          const { name: e3, args: t3 } = n3, a3 = t3.value.length;
          s3 && (s3 = C$2(e3, a3)), false === i2 && (i2 = o$1(e3, a3));
          break;
        }
      }
    }), { referencedFieldNames: Array.from(t2), isStandardized: s3, isAggregate: i2 };
  }
  _visitAll(e2, t2) {
    if (null != e2)
      switch (t2(e2), e2.type) {
        case "when-clause":
          this._visitAll(e2.operand, t2), this._visitAll(e2.value, t2);
          break;
        case "case-expression":
          for (const a2 of e2.clauses)
            this._visitAll(a2, t2);
          "simple" === e2.format && this._visitAll(e2.operand, t2), null !== e2.else && this._visitAll(e2.else, t2);
          break;
        case "expression-list":
          for (const a2 of e2.value)
            this._visitAll(a2, t2);
          break;
        case "unary-expression":
          this._visitAll(e2.expr, t2);
          break;
        case "binary-expression":
          this._visitAll(e2.left, t2), this._visitAll(e2.right, t2);
          break;
        case "function":
          this._visitAll(e2.args, t2);
      }
  }
  evaluateNodeToJavaScript(e2) {
    switch (e2.type) {
      case "interval":
        return "this.makeSqlInterval(" + this.evaluateNodeToJavaScript(e2.value) + ", " + JSON.stringify(e2.qualifier) + "," + JSON.stringify(e2.op) + ")";
      case "case-expression": {
        let t2 = "";
        if ("simple" === e2.format) {
          const a2 = this.evaluateNodeToJavaScript(e2.operand);
          t2 = "( ";
          for (let r2 = 0; r2 < e2.clauses.length; r2++)
            t2 += " (this.compare('='," + a2 + "," + this.evaluateNodeToJavaScript(e2.clauses[r2].operand) + ") ? (" + this.evaluateNodeToJavaScript(e2.clauses[r2].value) + ") : ";
          null !== e2.else ? t2 += this.evaluateNodeToJavaScript(e2.else) : t2 += "null", t2 += " )";
        } else {
          t2 = "( ";
          for (let a2 = 0; a2 < e2.clauses.length; a2++)
            t2 += " this.makeBool(" + this.evaluateNodeToJavaScript(e2.clauses[a2].operand) + ")===true ? (" + this.evaluateNodeToJavaScript(e2.clauses[a2].value) + ") : ";
          null !== e2.else ? t2 += this.evaluateNodeToJavaScript(e2.else) : t2 += "null", t2 += " )";
        }
        return t2;
      }
      case "parameter":
        return "this.lookup(" + JSON.stringify(e2.value.toLowerCase()) + ",lookups)";
      case "expression-list": {
        let t2 = "[";
        for (const a2 of e2.value)
          "[" !== t2 && (t2 += ","), t2 += this.evaluateNodeToJavaScript(a2);
        return t2 += "]", t2;
      }
      case "unary-expression":
        return "this.ternaryNot(" + this.evaluateNodeToJavaScript(e2.expr) + ")";
      case "binary-expression":
        switch (e2.operator) {
          case "AND":
            return "this.ternaryAnd(" + this.evaluateNodeToJavaScript(e2.left) + "," + this.evaluateNodeToJavaScript(e2.right) + " )";
          case "OR":
            return "this.ternaryOr(" + this.evaluateNodeToJavaScript(e2.left) + "," + this.evaluateNodeToJavaScript(e2.right) + " )";
          case "IS":
            if ("null" !== e2.right.type)
              throw new n$1(t$1.UnsupportedIsRhs);
            return "this.equalsNull(" + this.evaluateNodeToJavaScript(e2.left) + ")";
          case "ISNOT":
            if ("null" !== e2.right.type)
              throw new n$1(t$1.UnsupportedIsRhs);
            return "(!(this.equalsNull(" + this.evaluateNodeToJavaScript(e2.left) + ")))";
          case "IN":
            return "this.applyIn(" + this.evaluateNodeToJavaScript(e2.left) + ",this.ensureArray(" + this.evaluateNodeToJavaScript(e2.right) + "))";
          case "NOT IN":
            return "this.ternaryNot(this.applyIn(" + this.evaluateNodeToJavaScript(e2.left) + ",this.ensureArray(" + this.evaluateNodeToJavaScript(e2.right) + ")))";
          case "BETWEEN":
            return "this.between(" + this.evaluateNodeToJavaScript(e2.left) + "," + this.evaluateNodeToJavaScript(e2.right) + ", timeZone)";
          case "NOTBETWEEN":
            return "this.notbetween(" + this.evaluateNodeToJavaScript(e2.left) + "," + this.evaluateNodeToJavaScript(e2.right) + ", timeZone)";
          case "LIKE":
            return "this.applyLike(" + this.evaluateNodeToJavaScript(e2.left) + "," + this.evaluateNodeToJavaScript(e2.right) + "," + JSON.stringify(e2.escape) + ")";
          case "NOT LIKE":
            return "this.ternaryNot(this.applyLike(" + this.evaluateNodeToJavaScript(e2.left) + "," + this.evaluateNodeToJavaScript(e2.right) + "," + JSON.stringify(e2.escape) + "))";
          case "<>":
          case "<":
          case ">":
          case ">=":
          case "<=":
          case "=":
            return "this.compare(" + JSON.stringify(e2.operator) + "," + this.evaluateNodeToJavaScript(e2.left) + "," + this.evaluateNodeToJavaScript(e2.right) + ", timeZone)";
          case "*":
          case "-":
          case "+":
          case "/":
          case "||":
            return "this.calculate(" + JSON.stringify(e2.operator) + "," + this.evaluateNodeToJavaScript(e2.left) + "," + this.evaluateNodeToJavaScript(e2.right) + ", timeZone)";
        }
        throw new n$1(t$1.UnsupportedOperator, { operator: e2.operator });
      case "null":
      case "boolean":
      case "string":
      case "number":
        return JSON.stringify(e2.value);
      case "time":
        return "this.evaluateTime(JSON.stringify(node.value))";
      case "date":
        return "this.evaluateDate(JSON.stringify(node.value), 'unknown')";
      case "timestamp":
        return "this.evaluateTimestamp(JSON.stringify(node.value), 'unknown')";
      case "current-time":
        return "date" === e2.mode ? "this.currentDate(timeZone)" : "this.currentTimestamp(timeZone)";
      case "column-reference":
        return "this.featureValue(feature," + JSON.stringify(e2.column) + ",fieldsIndex,attributeAdapter)";
      case "function":
        return "this.evaluateFunction(" + JSON.stringify(e2.name) + "," + this.evaluateNodeToJavaScript(e2.args) + ", timeZone)";
    }
    throw new n$1(t$1.UnsupportedSyntax, { node: e2.type });
  }
  _evaluateNode(u2, c2, h2, p2) {
    let g2;
    switch (u2.type) {
      case "interval": {
        const e2 = this._evaluateNode(u2.value, c2, h2, p2);
        return s2.createFromValueAndQualifier(e2, u2.qualifier, u2.op);
      }
      case "case-expression":
        if ("simple" === u2.format) {
          const e2 = this._evaluateNode(u2.operand, c2, h2, p2);
          for (let t2 = 0; t2 < u2.clauses.length; t2++)
            if (I$2(e2, this._evaluateNode(u2.clauses[t2].operand, c2, h2, p2), "=", this.timeZone))
              return this._evaluateNode(u2.clauses[t2].value, c2, h2, p2);
          if (null !== u2.else)
            return this._evaluateNode(u2.else, c2, h2, p2);
        } else {
          for (let e2 = 0; e2 < u2.clauses.length; e2++)
            if (O(this._evaluateNode(u2.clauses[e2].operand, c2, h2, p2)))
              return this._evaluateNode(u2.clauses[e2].value, c2, h2, p2);
          if (null !== u2.else)
            return this._evaluateNode(u2.else, c2, h2, p2);
        }
        return null;
      case "parameter":
        return g2 = this.parameters[u2.value.toLowerCase()], x$4(g2) ? DateTime.fromJSDate(g2) : g2 instanceof m$4 ? g2.toDateTime() : g2;
      case "expression-list": {
        const e2 = [];
        for (const t2 of u2.value)
          e2.push(this._evaluateNode(t2, c2, h2, p2));
        return e2;
      }
      case "unary-expression":
        return b(this._evaluateNode(u2.expr, c2, h2, p2));
      case "binary-expression":
        switch (u2.operator) {
          case "AND":
            return D(this._evaluateNode(u2.left, c2, h2, p2), this._evaluateNode(u2.right, c2, h2, p2));
          case "OR":
            return k(this._evaluateNode(u2.left, c2, h2, p2), this._evaluateNode(u2.right, c2, h2, p2));
          case "IS":
            if ("null" !== u2.right.type)
              throw new n$1(t$1.UnsupportedIsRhs);
            return null === this._evaluateNode(u2.left, c2, h2, p2);
          case "ISNOT":
            if ("null" !== u2.right.type)
              throw new n$1(t$1.UnsupportedIsRhs);
            return null !== this._evaluateNode(u2.left, c2, h2, p2);
          case "IN": {
            const e2 = F(this._evaluateNode(u2.right, c2, h2, p2));
            return E(this._evaluateNode(u2.left, c2, h2, p2), e2);
          }
          case "NOT IN": {
            const e2 = F(this._evaluateNode(u2.right, c2, h2, p2));
            return b(E(this._evaluateNode(u2.left, c2, h2, p2), e2));
          }
          case "BETWEEN": {
            const e2 = this._evaluateNode(u2.left, c2, h2, p2), t2 = this._evaluateNode(u2.right, c2, h2, p2);
            return null == e2 || null == t2[0] || null == t2[1] ? null : I$2(e2, t2[0], ">=", this.timeZone) && I$2(e2, t2[1], "<=", this.timeZone);
          }
          case "NOTBETWEEN": {
            const e2 = this._evaluateNode(u2.left, c2, h2, p2), t2 = this._evaluateNode(u2.right, c2, h2, p2);
            return null == e2 || null == t2[0] || null == t2[1] ? null : I$2(e2, t2[0], "<", this.timeZone) || I$2(e2, t2[1], ">", this.timeZone);
          }
          case "LIKE":
            return j(this._evaluateNode(u2.left, c2, h2, p2), this._evaluateNode(u2.right, c2, h2, p2), u2.escape);
          case "NOT LIKE":
            return b(j(this._evaluateNode(u2.left, c2, h2, p2), this._evaluateNode(u2.right, c2, h2, p2), u2.escape));
          case "<>":
          case "<":
          case ">":
          case ">=":
          case "<=":
          case "=":
            return I$2(this._evaluateNode(u2.left, c2, h2, p2), this._evaluateNode(u2.right, c2, h2, p2), u2.operator, this.timeZone);
          case "-":
          case "+":
          case "*":
          case "/":
          case "||":
            return d(u2.operator, this._evaluateNode(u2.left, c2, h2, p2), this._evaluateNode(u2.right, c2, h2, p2), this.timeZone);
        }
      case "null":
      case "boolean":
      case "string":
      case "number":
        return u2.value;
      case "date":
        return u2.parsedValue ??= V$2(u2.value, "unknown"), u2.parsedValue;
      case "timestamp":
        return u2.parsedValue ??= P$1(u2.value, "unknown"), u2.parsedValue;
      case "time":
        return O$3(u2.value);
      case "current-time":
        return "date" === u2.mode ? n$2.fromNow(this.timeZone) : T$3(/* @__PURE__ */ new Date(), this.timeZone);
      case "column-reference":
        return C(c2, u2.column, this.fieldsIndex, h2);
      case "data-type":
        return u2.value;
      case "function": {
        if (this.isAggregate && o$1(u2.name, u2.args.value.length)) {
          const e3 = [];
          for (const t2 of u2.args?.value || []) {
            const a2 = [];
            for (const e4 of p2 || [])
              a2.push(this._evaluateNode(t2, e4, h2, null));
            e3.push(a2);
          }
          return u$2(u2.name, e3);
        }
        const e2 = this._evaluateNode(u2.args, c2, h2, p2);
        return w$1(u2.name, e2, this.timeZone);
      }
    }
    throw new n$1(t$1.UnsupportedSyntax, { node: u2.type });
  }
};
function O(e2) {
  return true === e2;
}
function F(e2) {
  return Array.isArray(e2) ? e2 : [e2];
}
function b(e2) {
  return null !== e2 ? true !== e2 : null;
}
function D(e2, t2) {
  return null != e2 && null != t2 ? true === e2 && true === t2 : false !== e2 && false !== t2 && null;
}
function k(e2, t2) {
  return null != e2 && null != t2 ? true === e2 || true === t2 : true === e2 || true === t2 || null;
}
function E(e2, t2) {
  if (null == e2)
    return null;
  let a2 = false;
  for (const r2 of t2)
    if (null == r2)
      a2 = null;
    else if (e2 === r2) {
      a2 = true;
      break;
    }
  return a2;
}
const Z = "-[]/{}()*+?.\\^$|";
var V;
function L(e2, t2) {
  const a2 = t2;
  let r2 = "", s3 = V.Normal;
  for (let i2 = 0; i2 < e2.length; i2++) {
    const t3 = e2.charAt(i2);
    switch (s3) {
      case V.Normal:
        t3 === a2 ? s3 = V.Escaped : Z.includes(t3) ? r2 += "\\" + t3 : r2 += "%" === t3 ? ".*" : "_" === t3 ? "." : t3;
        break;
      case V.Escaped:
        Z.includes(t3) ? r2 += "\\" + t3 : r2 += t3, s3 = V.Normal;
    }
  }
  return new RegExp("^" + r2 + "$", "m");
}
function j(e2, t2, a2) {
  if (null == e2)
    return null;
  return L(t2, a2).test(e2);
}
function q(e2) {
  return e2 && "object" == typeof e2.attributes;
}
function C(e2, t2, a2, r$12) {
  const s3 = r$12.getAttribute(e2, t2), n3 = a2?.get(t2);
  return null == s3 || "esriFieldTypeDate" !== n3?.type && "date" !== n3?.type ? null == s3 || "esriFieldTypeDateOnly" !== n3?.type && "date-only" !== n3?.type ? null == s3 || "esriFieldTypeTimeOnly" !== n3?.type && "time-only" !== n3?.type ? null == s3 || "esriFieldTypeTimestampOffset" !== n3?.type && "timestamp-offset" !== n3?.type ? s3 : new r(s3) : n$3.fromReader(s3) : n$2.fromReader(s3) : T$3(new Date(s3), a2?.getLuxonTimeZone(n3.name) ?? FixedOffsetZone.utcInstance);
}
!function(e2) {
  e2[e2.Normal = 0] = "Normal", e2[e2.Escaped = 1] = "Escaped";
}(V || (V = {}));
const U = { getAttribute: (e2, t2) => (q(e2) ? e2.attributes : e2)[t2] };
const WhereClause = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  WhereClause: x$1,
  defaultAttributeAdapter: U
}, Symbol.toStringTag, { value: "Module" }));
export {
  WhereClause as W,
  r$1 as a,
  n$1 as n,
  r,
  s$2 as s,
  t$1 as t,
  x$1 as x
};
