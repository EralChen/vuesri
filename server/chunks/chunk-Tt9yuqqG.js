import { nz as t, dC as r$1, aK as c$2, ap as M$1 } from "./chunk-KFNcxJaF.js";
import { DateTime, Zone, FixedOffsetZone, IANAZone } from "luxon";
var o$1;
!function(e) {
  e.TimeZoneNotRecognized = "TimeZoneNotRecognized";
}(o$1 || (o$1 = {}));
const a$1 = { [o$1.TimeZoneNotRecognized]: "Timezone identifier has not been recognized." };
class d extends Error {
  constructor(t2, n3) {
    super(r$1(a$1[t2], n3)), this.declaredRootClass = "esri.arcade.arcadedate.dateerror", Error.captureStackTrace && Error.captureStackTrace(this, d);
  }
}
function u(e, t2, n3) {
  return e < t2 ? e - t2 : e > n3 ? e - n3 : 0;
}
function c$1(e, t2, n3) {
  return e < t2 ? t2 : e > n3 ? n3 : e;
}
class m {
  constructor(e) {
    this._date = e, this.declaredRootClass = "esri.arcade.arcadedate";
  }
  static fromParts(e = 0, t2 = 1, r2 = 1, s2 = 0, i2 = 0, o2 = 0, a2 = 0, d2) {
    if (isNaN(e) || isNaN(t2) || isNaN(r2) || isNaN(s2) || isNaN(i2) || isNaN(o2) || isNaN(a2))
      return null;
    const l = DateTime.local(e, t2).daysInMonth;
    let f = DateTime.fromObject({ day: c$1(r2, 1, l), year: e, month: c$1(t2, 1, 12), hour: c$1(s2, 0, 23), minute: c$1(i2, 0, 59), second: c$1(o2, 0, 59), millisecond: c$1(a2, 0, 999) }, { zone: h(d2) });
    return f = f.plus({ months: u(t2, 1, 12), days: u(r2, 1, l), hours: u(s2, 0, 23), minutes: u(i2, 0, 59), seconds: u(o2, 0, 59), milliseconds: u(a2, 0, 999) }), new m(f);
  }
  static get systemTimeZoneCanonicalName() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone ?? "system";
  }
  static arcadeDateAndZoneToArcadeDate(e, n3) {
    const r2 = h(n3);
    return e.isUnknownTimeZone || r2 === t.instance ? m.fromParts(e.year, e.monthJS + 1, e.day, e.hour, e.minute, e.second, e.millisecond, r2) : new m(e._date.setZone(r2));
  }
  static dateJSToArcadeDate(e) {
    return new m(DateTime.fromJSDate(e, { zone: "system" }));
  }
  static dateJSAndZoneToArcadeDate(e, t2 = "system") {
    const r2 = h(t2);
    return new m(DateTime.fromJSDate(e, { zone: r2 }));
  }
  static unknownEpochToArcadeDate(e) {
    return new m(DateTime.fromMillis(e, { zone: t.instance }));
  }
  static unknownDateJSToArcadeDate(e) {
    return new m(DateTime.fromMillis(e.getTime(), { zone: t.instance }));
  }
  static epochToArcadeDate(e, t2 = "system") {
    const r2 = h(t2);
    return new m(DateTime.fromMillis(e, { zone: r2 }));
  }
  static dateTimeToArcadeDate(e) {
    return new m(e);
  }
  clone() {
    return new m(this._date);
  }
  changeTimeZone(e) {
    const t2 = h(e);
    return m.dateTimeToArcadeDate(this._date.setZone(t2));
  }
  static dateTimeAndZoneToArcadeDate(e, n3) {
    const r2 = h(n3);
    return e.zone === t.instance || r2 === t.instance ? m.fromParts(e.year, e.month, e.day, e.hour, e.minute, e.second, e.millisecond, r2) : new m(e.setZone(r2));
  }
  static nowToArcadeDate(e) {
    const t2 = h(e);
    return new m(DateTime.fromJSDate(/* @__PURE__ */ new Date(), { zone: t2 }));
  }
  static nowUTCToArcadeDate() {
    return new m(DateTime.utc());
  }
  get isSystem() {
    return "system" === this.timeZone || this.timeZone === m.systemTimeZoneCanonicalName;
  }
  equals(e) {
    return this.isSystem && e.isSystem ? this.toNumber() === e.toNumber() : this.isUnknownTimeZone === e.isUnknownTimeZone && this._date.equals(e._date);
  }
  get isUnknownTimeZone() {
    return this._date.zone === t.instance;
  }
  get isValid() {
    return this._date.isValid;
  }
  get hour() {
    return this._date.hour;
  }
  get second() {
    return this._date.second;
  }
  get day() {
    return this._date.day;
  }
  get dayOfWeekISO() {
    return this._date.weekday;
  }
  get dayOfWeekJS() {
    let e = this._date.weekday;
    return e > 6 && (e = 0), e;
  }
  get millisecond() {
    return this._date.millisecond;
  }
  get monthISO() {
    return this._date.month;
  }
  get weekISO() {
    return this._date.weekNumber;
  }
  get yearISO() {
    return this._date.weekYear;
  }
  get monthJS() {
    return this._date.month - 1;
  }
  get year() {
    return this._date.year;
  }
  get minute() {
    return this._date.minute;
  }
  get zone() {
    return this._date.zone;
  }
  get timeZoneOffset() {
    return this.isUnknownTimeZone ? 0 : this._date.offset;
  }
  get timeZone() {
    if (this.isUnknownTimeZone)
      return "unknown";
    if ("system" === this._date.zone.type)
      return "system";
    const e = this.zone;
    return "fixed" === e.type ? 0 === e.fixed ? "UTC" : e.formatOffset(0, "short") : e.name;
  }
  stringify() {
    return JSON.stringify(this.toJSDate());
  }
  plus(e) {
    return new m(this._date.plus(e));
  }
  diff(e, t2 = "milliseconds") {
    return this._date.diff(e._date, t2)[t2];
  }
  toISODate() {
    return this._date.toISODate();
  }
  toISOString(e) {
    return e ? this._date.toISO({ suppressMilliseconds: true, includeOffset: !this.isUnknownTimeZone }) : this._date.toISO({ includeOffset: !this.isUnknownTimeZone });
  }
  toISOTime(e, t2) {
    return this._date.toISOTime({ suppressMilliseconds: e, includeOffset: t2 && !this.isUnknownTimeZone });
  }
  toFormat(e, t2) {
    return this.isUnknownTimeZone && (e = e.replaceAll("Z", "")), this._date.toFormat(e, t2);
  }
  toJSDate() {
    return this._date.toJSDate();
  }
  toSQLValue() {
    return this._date.toFormat("yyyy-LL-dd HH:mm:ss");
  }
  toSQLWithKeyword() {
    return `timestamp '${this.toSQLValue()}'`;
  }
  toDateTime() {
    return this._date;
  }
  toNumber() {
    return this._date.toMillis();
  }
  getTime() {
    return this._date.toMillis();
  }
  toUTC() {
    return new m(this._date.toUTC());
  }
  toLocal() {
    return new m(this._date.toLocal());
  }
  toString() {
    return this.toISOString(true);
  }
  static fromReaderAsTimeStampOffset(e) {
    if (!e)
      return null;
    const t2 = DateTime.fromISO(e, { setZone: true });
    return new m(t2);
  }
}
function h(e, n3 = true) {
  if (e instanceof Zone)
    return e;
  if ("system" === e.toLowerCase())
    return "system";
  if ("utc" === e.toLowerCase())
    return "UTC";
  if ("unknown" === e.toLowerCase())
    return t.instance;
  if (/^[\+\-]?[0-9]{1,2}([:][0-9]{2})?$/.test(e)) {
    const t2 = FixedOffsetZone.parseSpecifier("UTC" + (e.startsWith("+") || e.startsWith("-") ? "" : "+") + e);
    if (t2)
      return t2;
  }
  const a2 = IANAZone.create(e);
  if (!a2.isValid) {
    if (n3)
      throw new d(o$1.TimeZoneNotRecognized);
    return null;
  }
  return a2;
}
function o(t2) {
  t2 = t2.replaceAll(/LTS|LT|LL?L?L?|l{1,4}/g, "[$&]");
  let e = "";
  const a2 = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
  for (const r2 of t2.match(a2) || [])
    switch (r2) {
      case "D":
        e += "d";
        break;
      case "DD":
        e += "dd";
        break;
      case "DDD":
        e += "o";
        break;
      case "d":
        e += "c";
        break;
      case "ddd":
        e += "ccc";
        break;
      case "dddd":
        e += "cccc";
        break;
      case "M":
        e += "L";
        break;
      case "MM":
        e += "LL";
        break;
      case "MMM":
        e += "LLL";
        break;
      case "MMMM":
        e += "LLLL";
        break;
      case "YY":
        e += "yy";
        break;
      case "Y":
      case "YYYY":
        e += "yyyy";
        break;
      case "Q":
        e += "q";
        break;
      case "X":
      case "x":
        e += r2;
        break;
      default:
        r2.length >= 2 && "[" === r2.slice(0, 1) && "]" === r2.slice(-1) ? e += `'${r2.slice(1, -1)}'` : e += `'${r2}'`;
    }
  return e;
}
let n$2 = class n {
  constructor(t2, e, a2) {
    this._year = t2, this._month = e, this._day = a2, this.declaredRootClass = "esri.core.sql.dateonly";
  }
  get month() {
    return this._month;
  }
  get monthJS() {
    return this._month - 1;
  }
  get year() {
    return this._year;
  }
  get day() {
    return this._day;
  }
  get isValid() {
    return this.toDateTime("unknown").isValid;
  }
  equals(t2) {
    return t2 instanceof n && t2.day === this.day && t2.month === this.month && t2.year === this.year;
  }
  clone() {
    return new n(this._year, this._month, this._day);
  }
  toDateTime(e) {
    return DateTime.fromObject({ day: this.day, month: this.month, year: this.year }, { zone: h(e) });
  }
  toDateTimeLuxon(e) {
    return DateTime.fromObject({ day: this.day, month: this.month, year: this.year }, { zone: h(e) });
  }
  toString() {
    return `${this.year.toString().padStart(4, "0")}-${this.month.toString().padStart(2, "0")}-${this.day.toString().padStart(2, "0")}`;
  }
  toFormat(t2 = null) {
    if (null === t2 || "" === t2)
      return this.toString();
    if (!(t2 = o(t2)))
      return "";
    const r2 = this.toDateTime("unknown");
    return m.dateTimeToArcadeDate(r2).toFormat(t2, { locale: c$2(), numberingSystem: "latn" });
  }
  toArcadeDate() {
    const t2 = this.toDateTime("unknown");
    return m.dateTimeToArcadeDate(t2);
  }
  toNumber() {
    return this.toDateTime("unknown").toMillis();
  }
  toJSDate() {
    return this.toDateTime("unknown").toJSDate();
  }
  toStorageFormat() {
    return this.toFormat("yyyy-LL-dd");
  }
  toSQLValue() {
    return this.toFormat("yyyy-LL-dd");
  }
  toSQLWithKeyword() {
    return "date '" + this.toFormat("yyyy-LL-dd") + "'";
  }
  plus(t2, e) {
    return n.fromDateTime(this.toUTCDateTime().plus({ [t2]: e }));
  }
  toUTCDateTime() {
    return DateTime.utc(this.year, this.month, this.day, 0, 0, 0, 0);
  }
  difference(t2, e) {
    switch (e.toLowerCase()) {
      case "days":
      case "day":
      case "d":
        return this.toUTCDateTime().diff(t2.toUTCDateTime(), "days").days;
      case "months":
      case "month":
        return this.toUTCDateTime().diff(t2.toUTCDateTime(), "months").months;
      case "minutes":
      case "minute":
      case "m":
        return "M" === e ? this.toUTCDateTime().diff(t2.toUTCDateTime(), "months").months : this.toUTCDateTime().diff(t2.toUTCDateTime(), "minutes").minutes;
      case "seconds":
      case "second":
      case "s":
        return this.toUTCDateTime().diff(t2.toUTCDateTime(), "seconds").seconds;
      case "milliseconds":
      case "millisecond":
      case "ms":
      default:
        return this.toUTCDateTime().diff(t2.toUTCDateTime(), "milliseconds").milliseconds;
      case "hours":
      case "hour":
      case "h":
        return this.toUTCDateTime().diff(t2.toUTCDateTime(), "hours").hours;
      case "years":
      case "year":
      case "y":
        return this.toUTCDateTime().diff(t2.toUTCDateTime(), "years").years;
    }
  }
  static fromMilliseconds(t2) {
    const e = DateTime.fromMillis(t2, { zone: FixedOffsetZone.utcInstance });
    return e.isValid ? n.fromParts(e.year, e.month, e.day) : null;
  }
  static fromSeconds(t2) {
    const e = DateTime.fromSeconds(t2, { zone: FixedOffsetZone.utcInstance });
    return e.isValid ? n.fromParts(e.year, e.month, e.day) : null;
  }
  static fromReader(t2) {
    if (!t2)
      return null;
    const e = t2.split("-");
    return 3 !== e.length ? null : new n(parseInt(e[0], 10), parseInt(e[1], 10), parseInt(e[2], 10));
  }
  static fromParts(t2, e, a2) {
    const r2 = new n(t2, e, a2);
    return false === r2.isValid ? null : r2;
  }
  static fromDateJS(t2) {
    return n.fromParts(t2.getFullYear(), t2.getMonth() + 1, t2.getDay());
  }
  static fromDateTime(t2) {
    return n.fromParts(t2.year, t2.month, t2.day);
  }
  static fromSqlTimeStampOffset(t2) {
    return this.fromDateTime(t2.toDateTime());
  }
  static fromString(t2, e = null) {
    if ("" === t2)
      return null;
    if (null === t2)
      return null;
    const a2 = [];
    if (e)
      (e = o(e)) && a2.push(e);
    else if (null === e || "" === e) {
      const e2 = DateTime.fromISO(t2, { setZone: true });
      return e2.isValid ? n.fromParts(e2.year, e2.month, e2.day) : null;
    }
    for (const s2 of a2) {
      const a3 = DateTime.fromFormat(t2, e ?? s2);
      if (a3.isValid)
        return new n(a3.year, a3.month, a3.day);
    }
    return null;
  }
  static fromNow(e = "system") {
    const a2 = DateTime.fromJSDate(/* @__PURE__ */ new Date()).setZone(h(e));
    return new n(a2.year, a2.month, a2.day);
  }
};
function r(e) {
  if (null == e)
    return null;
  if ("number" == typeof e)
    return e;
  let r2 = e.toLowerCase();
  switch (r2 = r2.replaceAll(/\s/g, ""), r2 = r2.replaceAll("-", ""), r2) {
    case "meters":
    case "meter":
    case "m":
    case "squaremeters":
    case "squaremeter":
      return 109404;
    case "miles":
    case "mile":
    case "squaremile":
    case "squaremiles":
      return 109439;
    case "kilometers":
    case "kilometer":
    case "squarekilometers":
    case "squarekilometer":
    case "km":
      return 109414;
    case "acres":
    case "acre":
    case "ac":
      return 109402;
    case "hectares":
    case "hectare":
    case "ha":
      return 109401;
    case "yard":
    case "yd":
    case "yards":
    case "squareyards":
    case "squareyard":
      return 109442;
    case "feet":
    case "ft":
    case "foot":
    case "squarefeet":
    case "squarefoot":
      return 109405;
    case "nmi":
    case "nauticalmile":
    case "nauticalmiles":
    case "squarenauticalmile":
    case "squarenauticalmiles":
      return 109409;
  }
  return null;
}
function s(r2) {
  if (null == r2)
    return null;
  switch (r2.type) {
    case "polygon":
    case "multipoint":
    case "polyline":
      return r2.extent;
    case "point":
      return new M$1({ xmin: r2.x, ymin: r2.y, xmax: r2.x, ymax: r2.y, spatialReference: r2.spatialReference });
    case "extent":
      return r2;
  }
  return null;
}
function a(e) {
  if (null == e)
    return null;
  if ("number" == typeof e)
    return e;
  let r2 = e.toLowerCase();
  switch (r2 = r2.replaceAll(/\s/g, ""), r2 = r2.replaceAll("-", ""), r2) {
    case "meters":
    case "meter":
    case "m":
    case "squaremeters":
    case "squaremeter":
      return 9001;
    case "miles":
    case "mile":
    case "squaremile":
    case "squaremiles":
      return 9093;
    case "kilometers":
    case "kilometer":
    case "squarekilometers":
    case "squarekilometer":
    case "km":
      return 9036;
    case "yard":
    case "yd":
    case "yards":
    case "squareyards":
    case "squareyard":
      return 9096;
    case "feet":
    case "ft":
    case "foot":
    case "squarefeet":
    case "squarefoot":
      return 9002;
    case "nmi":
    case "nauticalmile":
    case "nauticalmiles":
    case "squarenauticalmile":
    case "squarenauticalmiles":
      return 9030;
  }
  return null;
}
function c(e) {
  if (null == e)
    return null;
  const r2 = e.clone();
  return void 0 !== e.cache._geVersion && (r2.cache._geVersion = e.cache._geVersion), r2;
}
function n$1(e) {
  return "number" == typeof e && isFinite(e) && Math.floor(e) === e;
}
function i(t2) {
  if (!t2)
    return "";
  const s2 = /(a|A|hh?|HH?|mm?|ss?|SSS|S|.)/g;
  let e = "";
  for (const i2 of t2.match(s2) || [])
    switch (i2) {
      case "SSS":
      case "m":
      case "mm":
      case "h":
      case "hh":
      case "H":
      case "HH":
      case "s":
      case "ss":
        e += i2;
        break;
      case "A":
      case "a":
        e += "a";
        break;
      default:
        e += `'${i2}'`;
    }
  return e;
}
class n2 {
  constructor(t2, s2, e, i2) {
    this._hour = t2, this._minute = s2, this._second = e, this._millisecond = i2, this.declaredRootClass = "esri.core.sql.timeonly";
  }
  get hour() {
    return this._hour;
  }
  get minute() {
    return this._minute;
  }
  get second() {
    return this._second;
  }
  get millisecond() {
    return this._millisecond;
  }
  equals(t2) {
    return t2 instanceof n2 && t2.hour === this.hour && t2.minute === this.minute && t2.second === this.second && t2.millisecond === this.millisecond;
  }
  clone() {
    return new n2(this.hour, this.minute, this.second, this.millisecond);
  }
  isValid() {
    return n$1(this.hour) && n$1(this.minute) && n$1(this.second) && n$1(this.millisecond) && this.hour >= 0 && this.hour < 24 && this.minute >= 0 && this.minute < 60 && this.second >= 0 && this.second < 60 && this.millisecond >= 0 && this.millisecond < 1e3;
  }
  toString() {
    return `${this.hour.toString().padStart(2, "0")}:${this.minute.toString().padStart(2, "0")}:${this.second.toString().padStart(2, "0")}` + (this.millisecond > 0 ? "." + this.millisecond.toString().padStart(3, "0") : "");
  }
  toSQLValue() {
    return this.toString();
  }
  toSQLWithKeyword() {
    return `time '${this.hour.toString().padStart(2, "0")}:${this.minute.toString().padStart(2, "0")}:${this.second.toString().padStart(2, "0")}${this.millisecond > 0 ? "." + this.millisecond.toString().padStart(3, "0") : ""}'`;
  }
  toStorageString() {
    return `${this.hour.toString().padStart(2, "0")}:${this.minute.toString().padStart(2, "0")}:${this.second.toString().padStart(2, "0")}`;
  }
  toFormat(t2 = null) {
    if (null === t2 || "" === t2)
      return this.toString();
    if (!(t2 = i(t2)))
      return "";
    return DateTime.local(1970, 1, 1, this._hour, this._minute, this._second, this._millisecond).toFormat(t2, { locale: c$2(), numberingSystem: "latn" });
  }
  toNumber() {
    return this.millisecond + 1e3 * this.second + 1e3 * this.minute * 60 + 60 * this.hour * 60 * 1e3;
  }
  static fromParts(t2, s2, e, i2) {
    const r2 = new n2(t2, s2, e, i2);
    return r2.isValid() ? r2 : null;
  }
  static fromReader(t2) {
    if (!t2)
      return null;
    const s2 = t2.split(":");
    return 3 !== s2.length ? null : new n2(parseInt(s2[0], 10), parseInt(s2[1], 10), parseInt(s2[2], 10), 0);
  }
  static fromMilliseconds(t2) {
    if (t2 > 864e5 || t2 < 0)
      return null;
    const s2 = Math.floor(t2 / 1e3 % 60), e = Math.floor(t2 / 6e4 % 60), i2 = Math.floor(t2 / 36e5 % 24), r2 = Math.floor(t2 % 1e3);
    return new n2(i2, e, s2, r2);
  }
  static fromDateJS(t2) {
    return new n2(t2.getHours(), t2.getMinutes(), t2.getSeconds(), t2.getMilliseconds());
  }
  static fromDateTime(t2) {
    return new n2(t2.hour, t2.minute, t2.second, t2.millisecond);
  }
  static fromSqlTimeStampOffset(t2) {
    return this.fromDateTime(t2.toDateTime());
  }
  static fromString(t2, s2 = null) {
    if ("" === t2)
      return null;
    if (null === t2)
      return null;
    const r2 = [];
    s2 ? (s2 = i(s2)) && r2.push(s2) : null !== s2 && "" !== s2 || (r2.push("HH:mm:ss"), r2.push("HH:mm:ss.SSS"), r2.push("hh:mm:ss a"), r2.push("hh:mm:ss.SSS a"), r2.push("HH:mm"), r2.push("hh:mm a"), r2.push("H:mm"), r2.push("h:mm a"), r2.push("H:mm:ss"), r2.push("h:mm:ss a"), r2.push("H:mm:ss.SSS"), r2.push("h:mm:ss.SSS a"));
    for (const i2 of r2) {
      const s3 = DateTime.fromFormat(t2, i2);
      if (s3.isValid)
        return new n2(s3.hour, s3.minute, s3.second, s3.millisecond);
    }
    return null;
  }
  plus(t2, s2) {
    switch (t2) {
      case "days":
      case "years":
      case "months":
        return this.clone();
      case "hours":
      case "minutes":
      case "seconds":
      case "milliseconds":
        return n2.fromDateTime(this.toUTCDateTime().plus({ [t2]: s2 }));
    }
    return null;
  }
  toUTCDateTime() {
    return DateTime.utc(1970, 1, 1, this.hour, this.minute, this.second, this.millisecond);
  }
  difference(t2, s2) {
    switch (s2.toLowerCase()) {
      case "days":
      case "day":
      case "d":
        return this.toUTCDateTime().diff(t2.toUTCDateTime(), "days").days;
      case "months":
      case "month":
        return this.toUTCDateTime().diff(t2.toUTCDateTime(), "months").months;
      case "minutes":
      case "minute":
      case "m":
        return "M" === s2 ? this.toUTCDateTime().diff(t2.toUTCDateTime(), "months").months : this.toUTCDateTime().diff(t2.toUTCDateTime(), "minutes").minutes;
      case "seconds":
      case "second":
      case "s":
        return this.toUTCDateTime().diff(t2.toUTCDateTime(), "seconds").seconds;
      case "milliseconds":
      case "millisecond":
      case "ms":
      default:
        return this.toUTCDateTime().diff(t2.toUTCDateTime(), "milliseconds").milliseconds;
      case "hours":
      case "hour":
      case "h":
        return this.toUTCDateTime().diff(t2.toUTCDateTime(), "hours").hours;
      case "years":
      case "year":
      case "y":
        return this.toUTCDateTime().diff(t2.toUTCDateTime(), "years").years;
    }
  }
}
export {
  a,
  n$2 as b,
  c,
  h,
  m,
  n2 as n,
  r,
  s
};
