import { aK as c } from "./chunk-KFNcxJaF.js";
import { E as Ee$1, P as Pe$1, N, G as Ge$1, z as ze$1, Y as Ye$1, f as ft$1, m, w as we, Q as Qe$1, a as z, b as Y, V as Ve$1, $ as $t, W as We$1, _ as _t$1, r as rt$1, i as it$1, c as at$1, o as ot$1, M, d as $, D as De$1, B, y, e as et$1, v, O as Ot$1, g as P, h as $e$1, q, j as h, t as ti, s as st$1, k as d, l as kt$1, J, u as u$1, p, X as Xe$1, n, x as l, I as It, A as yt$1, C as Bt$1, F as At$1, S as St$1, H as Ct$1, K as jt$1, L as Et$1, R as Mt$1, T as s$1, U as Tt$1, Z as Q, a0 as _, a1 as I, a2 as c$1, a3 as Zt, a4 as dt$1, a5 as L, a6 as H, a7 as ht$1, a8 as pt$1, a9 as D, aa as Re$1, ab as b, ac as K, ad as ue, ae as ut$1, af as A, ag as pe, ah as ne, ai as Dt$1 } from "./chunk-55vU5FGs.js";
import { u } from "./chunk-ZSioWg-m.js";
import { s } from "./chunk-YavKHluu.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
class xe {
  constructor() {
    Object.defineProperty(this, "_observer", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_targets", { enumerable: true, configurable: true, writable: true, value: [] }), this._observer = new ResizeObserver((e) => {
      m(e, (e2) => {
        m(this._targets, (t) => {
          t.target === e2.target && t.callback();
        });
      });
    });
  }
  addTarget(e, t) {
    this._observer.observe(e, { box: "border-box" }), this._targets.push({ target: e, callback: t });
  }
  removeTarget(e) {
    this._observer.unobserve(e), M(this._targets, (t) => t.target !== e);
  }
}
class Pe {
  constructor() {
    Object.defineProperty(this, "_timer", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "_targets", { enumerable: true, configurable: true, writable: true, value: [] });
  }
  addTarget(e, i) {
    if (null === this._timer) {
      let e2 = null;
      const i2 = () => {
        const s3 = Date.now();
        (null === e2 || s3 > e2 + Pe.delay) && (e2 = s3, m(this._targets, (e3) => {
          let t = e3.target.getBoundingClientRect();
          t.width === e3.size.width && t.height === e3.size.height || (e3.size = t, e3.callback());
        })), 0 === this._targets.length ? this._timer = null : this._timer = requestAnimationFrame(i2);
      };
      this._timer = requestAnimationFrame(i2);
    }
    let s2 = { width: 0, height: 0, left: 0, right: 0, top: 0, bottom: 0, x: 0, y: 0 };
    this._targets.push({ target: e, callback: i, size: s2 });
  }
  removeTarget(e) {
    M(this._targets, (t) => t.target !== e), 0 === this._targets.length && null !== this._timer && (cancelAnimationFrame(this._timer), this._timer = null);
  }
}
Object.defineProperty(Pe, "delay", { enumerable: true, configurable: true, writable: true, value: 200 });
let Oe = null;
function ke() {
  return null === Oe && (Oe = "undefined" != typeof ResizeObserver ? new xe() : new Pe()), Oe;
}
class Me {
  constructor(t, i) {
    Object.defineProperty(this, "_sensor", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_element", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_listener", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_disposed", { enumerable: true, configurable: true, writable: true, value: false }), this._sensor = ke(), this._element = t, this._listener = st$1(i), this._sensor.addTarget(t, i);
  }
  isDisposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed || (this._disposed = true, this._sensor.removeTarget(this._element), this._listener.dispose());
  }
  get sensor() {
    return this._sensor;
  }
}
class je extends Ee$1 {
}
Object.defineProperty(je, "className", { enumerable: true, configurable: true, writable: true, value: "InterfaceColors" }), Object.defineProperty(je, "classNames", { enumerable: true, configurable: true, writable: true, value: Ee$1.classNames.concat([je.className]) });
class Se extends Ee$1 {
  _setDefaults() {
    this._setDefault("negativeBase", 0), this._setDefault("numberFormat", "#,###.#####"), this._setDefault("smallNumberThreshold", 1);
    const e = "_big_number_suffix_", t = "_small_number_suffix_", i = "_byte_suffix_";
    this._setDefault("bigNumberPrefixes", [{ number: 1e3, suffix: this._t(e + "3") }, { number: 1e6, suffix: this._t(e + "6") }, { number: 1e9, suffix: this._t(e + "9") }, { number: 1e12, suffix: this._t(e + "12") }, { number: 1e15, suffix: this._t(e + "15") }, { number: 1e18, suffix: this._t(e + "18") }, { number: 1e21, suffix: this._t(e + "21") }, { number: 1e24, suffix: this._t(e + "24") }]), this._setDefault("smallNumberPrefixes", [{ number: 1e-24, suffix: this._t(t + "24") }, { number: 1e-21, suffix: this._t(t + "21") }, { number: 1e-18, suffix: this._t(t + "18") }, { number: 1e-15, suffix: this._t(t + "15") }, { number: 1e-12, suffix: this._t(t + "12") }, { number: 1e-9, suffix: this._t(t + "9") }, { number: 1e-6, suffix: this._t(t + "6") }, { number: 1e-3, suffix: this._t(t + "3") }]), this._setDefault("bytePrefixes", [{ number: 1, suffix: this._t(i + "B") }, { number: 1024, suffix: this._t(i + "KB") }, { number: 1048576, suffix: this._t(i + "MB") }, { number: 1073741824, suffix: this._t(i + "GB") }, { number: 1099511627776, suffix: this._t(i + "TB") }, { number: 1125899906842624, suffix: this._t(i + "PB") }]), super._setDefaults();
  }
  _beforeChanged() {
    super._beforeChanged();
  }
  format(e, t, i) {
    let s2;
    (null == t || h(t) && "number" === t.toLowerCase()) && (t = this.get("numberFormat", ""));
    let h$1 = Number(e);
    if (d(t))
      try {
        return this.get("intlLocales") ? new Intl.NumberFormat(this.get("intlLocales"), t).format(h$1) : new Intl.NumberFormat(void 0, t).format(h$1);
      } catch (u2) {
        return "Invalid";
      }
    else {
      t = kt$1(t);
      let e2, r = this.parseFormat(t, this._root.language);
      e2 = h$1 > this.get("negativeBase") ? r.positive : h$1 < this.get("negativeBase") ? r.negative : r.zero, null == i || e2.mod || (e2 = J(e2), e2.decimals.active = 0 == h$1 ? 0 : i), s2 = e2.template.split(u$1).join(this.applyFormat(h$1, e2));
    }
    return true === this.get("forceLTR") && (s2 = "‎" + s2), s2;
  }
  parseFormat(e, t) {
    const i = t.translateEmpty("_thousandSeparator"), s2 = t.translateEmpty("_decimalSeparator");
    let r = { positive: { thousands: { active: -1, passive: -1, interval: -1, separator: i }, decimals: { active: -1, passive: -1, separator: s2 }, template: "", source: "", parsed: false }, negative: { thousands: { active: -1, passive: -1, interval: -1, separator: i }, decimals: { active: -1, passive: -1, separator: s2 }, template: "", source: "", parsed: false }, zero: { thousands: { active: -1, passive: -1, interval: -1, separator: i }, decimals: { active: -1, passive: -1, separator: s2 }, template: "", source: "", parsed: false } }, a = (e = e.replace("||", p)).split("|");
    return r.positive.source = a[0], void 0 === a[2] ? r.zero = r.positive : r.zero.source = a[2], void 0 === a[1] ? r.negative = r.positive : r.negative.source = a[1], q(r, (e2, t2) => {
      if (t2.parsed)
        return;
      let i2 = t2.source;
      "number" === i2.toLowerCase() && (i2 = this.get("numberFormat", "#,###.#####"));
      let s3 = Xe$1.chunk(i2, true);
      for (let r2 = 0; r2 < s3.length; r2++) {
        let e3 = s3[r2];
        if (e3.text = e3.text.replace(p, "|"), "value" === e3.type) {
          let i3 = e3.text.match(/[#0.,]+[ ]?[abespABESP%!]?[abespABESP‰!]?/);
          if (i3)
            if (null === i3 || "" === i3[0])
              t2.template += e3.text;
            else {
              let s4 = i3[0].match(/[abespABESP%‰!]{2}|[abespABESP%‰]{1}$/);
              s4 && (t2.mod = s4[0].toLowerCase(), t2.modSpacing = !!i3[0].match(/[ ]{1}[abespABESP%‰!]{1}$/));
              let r3 = i3[0].split(".");
              if ("" === r3[0])
                ;
              else {
                t2.thousands.active = (r3[0].match(/0/g) || []).length, t2.thousands.passive = (r3[0].match(/\#/g) || []).length + t2.thousands.active;
                let e4 = r3[0].split(",");
                1 === e4.length || (t2.thousands.interval = (e4.pop() || "").length, 0 === t2.thousands.interval && (t2.thousands.interval = -1));
              }
              void 0 === r3[1] || (t2.decimals.active = (r3[1].match(/0/g) || []).length, t2.decimals.passive = (r3[1].match(/\#/g) || []).length + t2.decimals.active), t2.template += e3.text.split(i3[0]).join(u$1);
            }
        } else
          t2.template += e3.text;
      }
      t2.parsed = true;
    }), r;
  }
  applyFormat(e, t) {
    let i = e < 0;
    e = Math.abs(e);
    let s2 = "", r = "", a = t.mod ? t.mod.split("") : [];
    if (-1 !== a.indexOf("b")) {
      let i2 = this.applyPrefix(e, this.get("bytePrefixes"), -1 !== a.indexOf("!"));
      e = i2[0], s2 = i2[1], r = i2[2], t.modSpacing && (r = " " + r);
    } else if (-1 !== a.indexOf("a")) {
      let i2 = this.applyPrefix(e, e < this.get("smallNumberThreshold") ? this.get("smallNumberPrefixes") : this.get("bigNumberPrefixes"), -1 !== a.indexOf("!"));
      e = i2[0], s2 = i2[1], r = i2[2], t.modSpacing && (r = " " + r);
    } else if (-1 !== a.indexOf("p")) {
      let t2 = Math.min(e.toString().length + 2, 21);
      e = parseFloat(e.toPrecision(t2)), s2 = this._root.language.translate("_percentPrefix"), r = this._root.language.translate("_percentSuffix"), "" == s2 && "" == r && (r = "%");
    } else if (-1 !== a.indexOf("%")) {
      let t2 = Math.min(e.toString().length + 2, 21);
      e *= 100, e = parseFloat(e.toPrecision(t2)), r = "%";
    } else if (-1 !== a.indexOf("‰")) {
      let t2 = Math.min(e.toString().length + 3, 21);
      e *= 1e3, e = parseFloat(e.toPrecision(t2)), r = "‰";
    }
    if (-1 !== a.indexOf("e")) {
      let i2;
      i2 = t.decimals.passive >= 0 ? e.toExponential(t.decimals.passive).split("e") : e.toExponential().split("e"), e = Number(i2[0]), r = "e" + i2[1], t.modSpacing && (r = " " + r);
    } else if (0 === t.decimals.passive)
      e = Math.round(e);
    else if (t.decimals.passive > 0) {
      let i2 = Math.pow(10, t.decimals.passive);
      e = Math.round(e * i2) / i2;
    }
    let n$1 = "", o = n(e).split("."), l2 = o[0];
    if (l2.length < t.thousands.active && (l2 = Array(t.thousands.active - l2.length + 1).join("0") + l2), t.thousands.interval > 0) {
      let e2 = [], i2 = l2.split("").reverse().join("");
      for (let s3 = 0, r2 = l2.length; s3 <= r2; s3 += t.thousands.interval) {
        let r3 = i2.substr(s3, t.thousands.interval).split("").reverse().join("");
        "" !== r3 && e2.unshift(r3);
      }
      l2 = e2.join(t.thousands.separator);
    }
    n$1 += l2, 1 === o.length && o.push("");
    let h2 = o[1];
    return h2.length < t.decimals.active && (h2 += Array(t.decimals.active - h2.length + 1).join("0")), "" !== h2 && (n$1 += t.decimals.separator + h2), "" === n$1 && (n$1 = "0"), 0 !== e && i && -1 === a.indexOf("s") && (n$1 = "-" + n$1), s2 && (n$1 = s2 + n$1), r && (n$1 += r), n$1;
  }
  applyPrefix(e, t, i = false) {
    let s2 = e, r = "", a = "", n2 = false, o = 1;
    for (let l2 = 0, h2 = t.length; l2 < h2; l2++)
      t[l2].number <= e && (0 === t[l2].number ? s2 = 0 : (s2 = e / t[l2].number, o = t[l2].number), r = t[l2].prefix, a = t[l2].suffix, n2 = true);
    return !n2 && i && t.length && 0 != e && (s2 = e / t[0].number, r = t[0].prefix, a = t[0].suffix, n2 = true), n2 && (s2 = parseFloat(s2.toPrecision(Math.min(o.toString().length + Math.floor(s2).toString().replace(/[^0-9]*/g, "").length, 21)))), [s2, r, a];
  }
  escape(e) {
    return e.replace("||", p);
  }
  unescape(e) {
    return e.replace(p, "|");
  }
}
function Ee(e, t) {
  let i = 0, s2 = 0, r = 1, a = 0, n2 = 0, o = 0, l2 = 0, h2 = 0;
  return e.formatToParts(t).forEach((e2) => {
    switch (e2.type) {
      case "year":
        i = +e2.value;
        break;
      case "month":
        s2 = +e2.value - 1;
        break;
      case "day":
        r = +e2.value;
        break;
      case "hour":
        a = +e2.value;
        break;
      case "minute":
        n2 = +e2.value;
        break;
      case "second":
        o = +e2.value;
        break;
      case "fractionalSecond":
        l2 = +e2.value;
        break;
      case "weekday":
        switch (e2.value) {
          case "Sun":
            h2 = 0;
            break;
          case "Mon":
            h2 = 1;
            break;
          case "Tue":
            h2 = 2;
            break;
          case "Wed":
            h2 = 3;
            break;
          case "Thu":
            h2 = 4;
            break;
          case "Fri":
            h2 = 5;
            break;
          case "Sat":
            h2 = 6;
        }
    }
  }), 24 === a && (a = 0), { year: i, month: s2, day: r, hour: a, minute: n2, second: o, millisecond: l2, weekday: h2 };
}
function Te(e, t) {
  const { year: i, month: s2, day: r, hour: a, minute: n2, second: o, millisecond: l2 } = Ee(e, t);
  return Date.UTC(i, s2, r, a, n2, o, l2);
}
class Ce {
  constructor(e, t) {
    if (Object.defineProperty(this, "_utc", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_dtf", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "name", { enumerable: true, configurable: true, writable: true, value: void 0 }), !t)
      throw new Error("You cannot use `new Class()`, instead use `Class.new()`");
    this.name = e, this._utc = new Intl.DateTimeFormat("UTC", { hour12: false, timeZone: "UTC", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", weekday: "short", fractionalSecondDigits: 3 }), this._dtf = new Intl.DateTimeFormat("UTC", { hour12: false, timeZone: e, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", weekday: "short", fractionalSecondDigits: 3 });
  }
  static new(e) {
    return new this(e, true);
  }
  convertLocal(e) {
    const t = this.offsetUTC(e), i = e.getTimezoneOffset(), s2 = new Date(e);
    s2.setUTCMinutes(s2.getUTCMinutes() - (t - i));
    const r = s2.getTimezoneOffset();
    return i != r && s2.setUTCMinutes(s2.getUTCMinutes() + r - i), s2;
  }
  offsetUTC(e) {
    return (Te(this._utc, e) - Te(this._dtf, e)) / 6e4;
  }
  parseDate(e) {
    return Ee(this._dtf, e);
  }
}
class Be extends Ee$1 {
  _setDefaults() {
    this._setDefault("capitalize", true), this._setDefault("dateFormat", "yyyy-MM-dd"), super._setDefaults();
  }
  _beforeChanged() {
    super._beforeChanged();
  }
  format(e, t) {
    let i;
    void 0 !== t && "" !== t || (t = this.get("dateFormat", "yyyy-MM-dd"));
    let s2 = e;
    if (d(t))
      try {
        const e2 = this.get("intlLocales");
        return e2 ? new Intl.DateTimeFormat(e2, t).format(s2) : new Intl.DateTimeFormat(void 0, t).format(s2);
      } catch (o) {
        return "Invalid";
      }
    let r = this.parseFormat(t);
    const n2 = this._root.timezone;
    return n2 && !this._root.utc && (s2 = n2.convertLocal(s2)), l(s2.getTime()) ? (i = this.applyFormat(s2, r), this.get("capitalize") && (i = i.replace(/^.{1}/, i.substr(0, 1).toUpperCase())), i) : "Invalid date";
  }
  applyFormat(e, t) {
    let i, s2, r, a, n2, o, h2, u2, c2 = t.template, d2 = e.getTime();
    this._root.utc ? (i = e.getUTCFullYear(), s2 = e.getUTCMonth(), r = e.getUTCDay(), a = e.getUTCDate(), n2 = e.getUTCHours(), o = e.getUTCMinutes(), h2 = e.getUTCSeconds(), u2 = e.getUTCMilliseconds()) : (i = e.getFullYear(), s2 = e.getMonth(), r = e.getDay(), a = e.getDate(), n2 = e.getHours(), o = e.getMinutes(), h2 = e.getSeconds(), u2 = e.getMilliseconds());
    for (let b2 = 0, x = t.parts.length; b2 < x; b2++) {
      let x2 = "";
      switch (t.parts[b2]) {
        case "G":
          x2 = this._t(i < 0 ? "_era_bc" : "_era_ad");
          break;
        case "yyyy":
          x2 = Math.abs(i).toString(), i < 0 && (x2 += this._t("_era_bc"));
          break;
        case "yyy":
        case "yy":
        case "y":
          x2 = Math.abs(i).toString().substr(-t.parts[b2].length), i < 0 && (x2 += this._t("_era_bc"));
          break;
        case "YYYY":
        case "YYY":
        case "YY":
        case "Y":
          let l2 = Et$1(e, this._root.utc);
          x2 = "YYYY" == t.parts[b2] ? Math.abs(l2).toString() : Math.abs(l2).toString().substr(-t.parts[b2].length), l2 < 0 && (x2 += this._t("_era_bc"));
          break;
        case "u":
        case "F":
        case "g":
          break;
        case "q":
          x2 = "" + Math.ceil((e.getMonth() + 1) / 3);
          break;
        case "MMMMM":
          x2 = this._t(this._getMonth(s2)).substr(0, 1);
          break;
        case "MMMM":
          x2 = this._t(this._getMonth(s2));
          break;
        case "MMM":
          x2 = this._t(this._getShortMonth(s2));
          break;
        case "MM":
          x2 = yt$1(s2 + 1, 2, "0");
          break;
        case "M":
          x2 = (s2 + 1).toString();
          break;
        case "ww":
          x2 = yt$1(jt$1(e, this._root.utc), 2, "0");
          break;
        case "w":
          x2 = jt$1(e, this._root.utc).toString();
          break;
        case "W":
          x2 = Ct$1(e, this._root.utc).toString();
          break;
        case "dd":
          x2 = yt$1(a, 2, "0");
          break;
        case "d":
          x2 = a.toString();
          break;
        case "DD":
        case "DDD":
          x2 = yt$1(St$1(e, this._root.utc).toString(), t.parts[b2].length, "0");
          break;
        case "D":
          x2 = St$1(e, this._root.utc).toString();
          break;
        case "t":
          x2 = this._root.language.translateFunc("_dateOrd").call(this, a);
          break;
        case "E":
          x2 = (r || 7).toString();
          break;
        case "EE":
          x2 = yt$1((r || 7).toString(), 2, "0");
          break;
        case "EEE":
        case "eee":
          x2 = this._t(this._getShortWeekday(r));
          break;
        case "EEEE":
        case "eeee":
          x2 = this._t(this._getWeekday(r));
          break;
        case "EEEEE":
        case "eeeee":
          x2 = this._t(this._getShortWeekday(r)).substr(0, 1);
          break;
        case "e":
        case "ee":
          x2 = (r - (this._root.locale.firstDayOfWeek || 1) + 1).toString(), "ee" == t.parts[b2] && (x2 = yt$1(x2, 2, "0"));
          break;
        case "a":
          x2 = n2 >= 12 ? this._t("PM") : this._t("AM");
          break;
        case "aa":
          x2 = n2 >= 12 ? this._t("P.M.") : this._t("A.M.");
          break;
        case "aaa":
          x2 = n2 >= 12 ? this._t("P") : this._t("A");
          break;
        case "h":
          x2 = At$1(n2).toString();
          break;
        case "hh":
          x2 = yt$1(At$1(n2), 2, "0");
          break;
        case "H":
          x2 = n2.toString();
          break;
        case "HH":
          x2 = yt$1(n2, 2, "0");
          break;
        case "K":
          x2 = At$1(n2, 0).toString();
          break;
        case "KK":
          x2 = yt$1(At$1(n2, 0), 2, "0");
          break;
        case "k":
          x2 = (n2 + 1).toString();
          break;
        case "kk":
          x2 = yt$1(n2 + 1, 2, "0");
          break;
        case "m":
          x2 = o.toString();
          break;
        case "mm":
          x2 = yt$1(o, 2, "0");
          break;
        case "s":
          x2 = h2.toString();
          break;
        case "ss":
          x2 = yt$1(h2, 2, "0");
          break;
        case "S":
        case "SS":
        case "SSS":
          x2 = Math.round(u2 / 1e3 * Math.pow(10, t.parts[b2].length)).toString();
          break;
        case "x":
          x2 = d2.toString();
          break;
        case "n":
        case "nn":
        case "nnn":
          x2 = yt$1(u2, t.parts[b2].length, "0");
          break;
        case "z":
          x2 = Bt$1(e, false, false, this._root.utc, this._root.timezone ? this._root.timezone.name : void 0);
          break;
        case "zz":
          x2 = Bt$1(e, true, false, this._root.utc, this._root.timezone ? this._root.timezone.name : void 0);
          break;
        case "zzz":
          x2 = Bt$1(e, false, true, this._root.utc, this._root.timezone ? this._root.timezone.name : void 0);
          break;
        case "zzzz":
          x2 = Bt$1(e, true, true, this._root.utc, this._root.timezone ? this._root.timezone.name : void 0);
          break;
        case "Z":
        case "ZZ":
          let c3 = this._root.utc ? "UTC" : this._root.timezone;
          c3 instanceof Ce && (c3 = c3.name);
          const P2 = c3 ? It(c3) : e.getTimezoneOffset();
          let O = Math.abs(P2) / 60, k = Math.floor(O), M2 = 60 * O - 60 * k;
          this._root.utc && (k = 0, M2 = 0), "Z" == t.parts[b2] ? (x2 = "GMT", x2 += P2 > 0 ? "-" : "+", x2 += yt$1(k, 2) + ":" + yt$1(M2, 2)) : (x2 = P2 > 0 ? "-" : "+", x2 += yt$1(k, 2) + yt$1(M2, 2));
          break;
        case "i":
          x2 = e.toISOString();
          break;
        case "I":
          x2 = e.toUTCString();
      }
      c2 = c2.replace(u$1, x2);
    }
    return c2;
  }
  parseFormat(e) {
    let t = { template: "", parts: [] }, i = Xe$1.chunk(e, true);
    for (let s2 = 0; s2 < i.length; s2++) {
      let e2 = i[s2];
      if ("value" === e2.type) {
        if (e2.text.match(/^date$/i)) {
          let t2 = this.get("dateFormat", "yyyy-MM-dd");
          h(t2) || (t2 = "yyyy-MM-dd"), e2.text = t2;
        }
        let i2 = e2.text.match(/G|yyyy|yyy|yy|y|YYYY|YYY|YY|Y|u|q|MMMMM|MMMM|MMM|MM|M|ww|w|W|dd|d|DDD|DD|D|F|g|EEEEE|EEEE|EEE|EE|E|eeeee|eeee|eee|ee|e|aaa|aa|a|hh|h|HH|H|KK|K|kk|k|mm|m|ss|s|SSS|SS|S|A|zzzz|zzz|zz|z|ZZ|Z|t|x|nnn|nn|n|i|I/g);
        if (i2)
          for (let s3 = 0; s3 < i2.length; s3++)
            t.parts.push(i2[s3]), e2.text = e2.text.replace(i2[s3], u$1);
      }
      t.template += e2.text;
    }
    return t;
  }
  _months() {
    return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  }
  _getMonth(e) {
    return this._months()[e];
  }
  _shortMonths() {
    return ["Jan", "Feb", "Mar", "Apr", "May(short)", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  }
  _getShortMonth(e) {
    return this._shortMonths()[e];
  }
  _weekdays() {
    return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  }
  _getWeekday(e) {
    return this._weekdays()[e];
  }
  _shortWeekdays() {
    return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  }
  _getShortWeekday(e) {
    return this._shortWeekdays()[e];
  }
  parse(e, t) {
    if (e instanceof Date)
      return e;
    if (l(e))
      return new Date(e);
    let i;
    h(e) || (e = e.toString());
    let s2 = "";
    t = (t = kt$1(t)).substr(0, e.length);
    let a = this.parseFormat(t), o = { year: -1, year3: -1, year2: -1, year1: -1, month: -1, monthShort: -1, monthLong: -1, weekdayShort: -1, weekdayLong: -1, day: -1, yearDay: -1, week: -1, hourBase0: -1, hour12Base0: -1, hourBase1: -1, hour12Base1: -1, minute: -1, second: -1, millisecond: -1, millisecondDigits: -1, am: -1, zone: -1, timestamp: -1, iso: -1 }, l$1 = { year: 1970, month: 0, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0, timestamp: null, offset: 0, utc: this._root.utc }, h$1 = 0, u2 = 0;
    for (let r = 0; r < a.parts.length; r++) {
      switch (u2 = r + h$1 + 1, a.parts[r]) {
        case "yyyy":
        case "YYYY":
          s2 += "([0-9]{4})", o.year = u2;
          break;
        case "yyy":
        case "YYY":
          s2 += "([0-9]{3})", o.year3 = u2;
          break;
        case "yy":
        case "YY":
          s2 += "([0-9]{2})", o.year2 = u2;
          break;
        case "y":
        case "Y":
          s2 += "([0-9]{1})", o.year1 = u2;
          break;
        case "MMMM":
          s2 += "(" + this.getStringList(this._months()).join("|") + ")", o.monthLong = u2;
          break;
        case "MMM":
          s2 += "(" + this.getStringList(this._shortMonths()).join("|") + ")", o.monthShort = u2;
          break;
        case "MM":
        case "M":
          s2 += "([0-9]{2}|[0-9]{1})", o.month = u2;
          break;
        case "ww":
        case "w":
          s2 += "([0-9]{2}|[0-9]{1})", o.week = u2;
          break;
        case "dd":
        case "d":
          s2 += "([0-9]{2}|[0-9]{1})", o.day = u2;
          break;
        case "DDD":
        case "DD":
        case "D":
          s2 += "([0-9]{3}|[0-9]{2}|[0-9]{1})", o.yearDay = u2;
          break;
        case "dddd":
          s2 += "(" + this.getStringList(this._weekdays()).join("|") + ")", o.weekdayLong = u2;
          break;
        case "ddd":
          s2 += "(" + this.getStringList(this._shortWeekdays()).join("|") + ")", o.weekdayShort = u2;
          break;
        case "aaa":
        case "aa":
        case "a":
          s2 += "(" + this.getStringList(["AM", "PM", "A.M.", "P.M.", "A", "P"]).join("|") + ")", o.am = u2;
          break;
        case "hh":
        case "h":
          s2 += "([0-9]{2}|[0-9]{1})", o.hour12Base1 = u2;
          break;
        case "HH":
        case "H":
          s2 += "([0-9]{2}|[0-9]{1})", o.hourBase0 = u2;
          break;
        case "KK":
        case "K":
          s2 += "([0-9]{2}|[0-9]{1})", o.hour12Base0 = u2;
          break;
        case "kk":
        case "k":
          s2 += "([0-9]{2}|[0-9]{1})", o.hourBase1 = u2;
          break;
        case "mm":
        case "m":
          s2 += "([0-9]{2}|[0-9]{1})", o.minute = u2;
          break;
        case "ss":
        case "s":
          s2 += "([0-9]{2}|[0-9]{1})", o.second = u2;
          break;
        case "SSS":
        case "SS":
        case "S":
          s2 += "([0-9]{3}|[0-9]{2}|[0-9]{1})", o.millisecond = u2, o.millisecondDigits = a.parts[r].length;
          break;
        case "nnn":
        case "nn":
        case "n":
          s2 += "([0-9]{3}|[0-9]{2}|[0-9]{1})", o.millisecond = u2;
          break;
        case "x":
          s2 += "([0-9]{1,})", o.timestamp = u2;
          break;
        case "Z":
          s2 += "GMT([-+]+[0-9]{2}:[0-9]{2})", o.zone = u2;
          break;
        case "ZZ":
          s2 += "([\\-+]+[0-9]{2}[0-9]{2})", o.zone = u2;
          break;
        case "i":
          s2 += "([0-9]{4})-?([0-9]{2})-?([0-9]{2})T?([0-9]{2}):?([0-9]{2}):?([0-9]{2})\\.?([0-9]{0,3})([zZ]|[+\\-][0-9]{2}:?[0-9]{2}|$)", o.iso = u2, h$1 += 7;
          break;
        case "G":
        case "YYYY":
        case "YYY":
        case "YY":
        case "Y":
        case "MMMMM":
        case "W":
        case "EEEEE":
        case "EEEE":
        case "EEE":
        case "EE":
        case "E":
        case "eeeee":
        case "eeee":
        case "eee":
        case "ee":
        case "e":
        case "zzzz":
        case "zzz":
        case "zz":
        case "z":
        case "t":
          h$1--;
      }
      s2 += "[^0-9]*";
    }
    let c2 = new RegExp(s2), d2 = e.match(c2);
    if (d2) {
      if (o.year > -1 && (l$1.year = parseInt(d2[o.year])), o.year3 > -1) {
        let e2 = parseInt(d2[o.year3]);
        e2 += 1e3, l$1.year = e2;
      }
      if (o.year2 > -1) {
        let e2 = parseInt(d2[o.year2]);
        e2 += e2 > 50 ? 1e3 : 2e3, l$1.year = e2;
      }
      if (o.year1 > -1) {
        let e2 = parseInt(d2[o.year1]);
        e2 = 10 * Math.floor((/* @__PURE__ */ new Date()).getFullYear() / 10) + e2, l$1.year = e2;
      }
      if (o.monthLong > -1 && (l$1.month = this.resolveMonth(d2[o.monthLong])), o.monthShort > -1 && (l$1.month = this.resolveShortMonth(d2[o.monthShort])), o.month > -1 && (l$1.month = parseInt(d2[o.month]) - 1), o.week > -1 && -1 === o.day && (l$1.month = 0, l$1.day = Mt$1(parseInt(d2[o.week]), l$1.year, 1, this._root.utc)), o.day > -1 && (l$1.day = parseInt(d2[o.day])), o.yearDay > -1 && (l$1.month = 0, l$1.day = parseInt(d2[o.yearDay])), o.hourBase0 > -1 && (l$1.hour = parseInt(d2[o.hourBase0])), o.hourBase1 > -1 && (l$1.hour = parseInt(d2[o.hourBase1]) - 1), o.hour12Base0 > -1) {
        let e2 = parseInt(d2[o.hour12Base0]);
        11 == e2 && (e2 = 0), o.am > -1 && !this.isAm(d2[o.am]) && (e2 += 12), l$1.hour = e2;
      }
      if (o.hour12Base1 > -1) {
        let e2 = parseInt(d2[o.hour12Base1]);
        12 == e2 && (e2 = 0), o.am > -1 && !this.isAm(d2[o.am]) && (e2 += 12), l$1.hour = e2;
      }
      if (o.minute > -1 && (l$1.minute = parseInt(d2[o.minute])), o.second > -1 && (l$1.second = parseInt(d2[o.second])), o.millisecond > -1) {
        let e2 = parseInt(d2[o.millisecond]);
        2 == o.millisecondDigits ? e2 *= 10 : 1 == o.millisecondDigits && (e2 *= 100), l$1.millisecond = e2;
      }
      if (o.timestamp > -1) {
        l$1.timestamp = parseInt(d2[o.timestamp]);
        const e2 = new Date(l$1.timestamp);
        l$1.year = e2.getUTCFullYear(), l$1.month = e2.getUTCMonth(), l$1.day = e2.getUTCDate(), l$1.hour = e2.getUTCHours(), l$1.minute = e2.getUTCMinutes(), l$1.second = e2.getUTCSeconds(), l$1.millisecond = e2.getUTCMilliseconds();
      }
      o.zone > -1 && (l$1.offset = this.resolveTimezoneOffset(new Date(l$1.year, l$1.month, l$1.day), d2[o.zone])), o.iso > -1 && (l$1.year = s$1(d2[o.iso + 0]), l$1.month = s$1(d2[o.iso + 1]) - 1, l$1.day = s$1(d2[o.iso + 2]), l$1.hour = s$1(d2[o.iso + 3]), l$1.minute = s$1(d2[o.iso + 4]), l$1.second = s$1(d2[o.iso + 5]), l$1.millisecond = s$1(d2[o.iso + 6]), "Z" == d2[o.iso + 7] || "z" == d2[o.iso + 7] ? l$1.utc = true : "" != d2[o.iso + 7] && (l$1.offset = this.resolveTimezoneOffset(new Date(l$1.year, l$1.month, l$1.day), d2[o.iso + 7]))), i = l$1.utc ? new Date(Date.UTC(l$1.year, l$1.month, l$1.day, l$1.hour, l$1.minute, l$1.second, l$1.millisecond)) : new Date(l$1.year, l$1.month, l$1.day, l$1.hour, l$1.minute + l$1.offset, l$1.second, l$1.millisecond);
    } else
      i = new Date(e);
    return i;
  }
  resolveTimezoneOffset(e, t) {
    if (t.match(/([+\-]?)([0-9]{2}):?([0-9]{2})/)) {
      let i = t.match(/([+\-]?)([0-9]{2}):?([0-9]{2})/), s2 = i[1], r = i[2], a = i[3], n2 = 60 * parseInt(r) + parseInt(a);
      return "+" == s2 && (n2 *= -1), n2 - (e || /* @__PURE__ */ new Date()).getTimezoneOffset();
    }
    return 0;
  }
  resolveMonth(e) {
    let t = this._months().indexOf(e);
    return t > -1 || !this._root.language.isDefault() && (t = this._root.language.translateAll(this._months()).indexOf(e), t > -1) ? t : 0;
  }
  resolveShortMonth(e) {
    let t = this._shortMonths().indexOf(e);
    return t > -1 ? t : (t = this._months().indexOf(e), t > -1 || this._root.language && !this._root.language.isDefault() && (t = this._root.language.translateAll(this._shortMonths()).indexOf(e), t > -1) ? t : 0);
  }
  isAm(e) {
    return this.getStringList(["AM", "A.M.", "A"]).indexOf(e.toUpperCase()) > -1;
  }
  getStringList(e) {
    let t = [];
    for (let i = 0; i < e.length; i++)
      this._root.language ? t.push(Tt$1(this._t(e[i]))) : t.push(Tt$1(e[i]));
    return t;
  }
}
class De extends Ee$1 {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_unitAliases", { enumerable: true, configurable: true, writable: true, value: { Y: "y", D: "d", H: "h", K: "h", k: "h", n: "S" } });
  }
  _setDefaults() {
    const e = "_duration_millisecond", t = "_duration_second", i = "_duration_minute", s2 = "_duration_hour", r = "_duration_day", a = "_duration_week", n2 = "_duration_month", o = "_duration_year", l2 = "_second", h2 = "_minute", u2 = "_hour", c2 = "_day", d2 = "_week", b2 = "_week", f = "_year";
    this._setDefault("negativeBase", 0), this._setDefault("baseUnit", "second"), this._setDefault("durationFormats", { millisecond: { millisecond: this._t(e), second: this._t(e + l2), minute: this._t(e + h2), hour: this._t(e + u2), day: this._t(e + c2), week: this._t(e + d2), month: this._t(e + b2), year: this._t(e + f) }, second: { second: this._t(t), minute: this._t(t + h2), hour: this._t(t + u2), day: this._t(t + c2), week: this._t(t + d2), month: this._t(t + b2), year: this._t(t + f) }, minute: { minute: this._t(i), hour: this._t(i + u2), day: this._t(i + c2), week: this._t(i + d2), month: this._t(i + b2), year: this._t(i + f) }, hour: { hour: this._t(s2), day: this._t(s2 + c2), week: this._t(s2 + d2), month: this._t(s2 + b2), year: this._t(s2 + f) }, day: { day: this._t(r), week: this._t(r + d2), month: this._t(r + b2), year: this._t(r + f) }, week: { week: this._t(a), month: this._t(a + b2), year: this._t(a + f) }, month: { month: this._t(n2), year: this._t(n2 + f) }, year: { year: this._t(o) } }), super._setDefaults();
  }
  _beforeChanged() {
    super._beforeChanged();
  }
  format(e, t, i) {
    let s2 = i || this.get("baseUnit");
    void 0 !== t && "" !== t || (t = null != this.get("durationFormat") ? this.get("durationFormat") : this.getFormat(s$1(e), void 0, s2)), t = kt$1(t);
    let r, a = this.parseFormat(t, s2), o = Number(e);
    r = o > this.get("negativeBase") ? a.positive : o < this.get("negativeBase") ? a.negative : a.zero;
    let l2 = this.applyFormat(o, r);
    return "" !== r.color && (l2 = "[" + r.color + "]" + l2 + "[/]"), l2;
  }
  parseFormat(e, t) {
    let i = t || this.get("baseUnit"), s2 = { positive: { color: "", template: "", parts: [], source: "", baseUnit: i, parsed: false, absolute: false }, negative: { color: "", template: "", parts: [], source: "", baseUnit: i, parsed: false, absolute: false }, zero: { color: "", template: "", parts: [], source: "", baseUnit: i, parsed: false, absolute: false } }, r = (e = e.replace("||", p)).split("|");
    return s2.positive.source = r[0], void 0 === r[2] ? s2.zero = s2.positive : s2.zero.source = r[2], void 0 === r[1] ? s2.negative = s2.positive : s2.negative.source = r[1], q(s2, (e2, t2) => {
      if (t2.parsed)
        return;
      let i2 = t2.source, s3 = [];
      s3 = t2.source.match(/^\[([^\]]*)\]/), s3 && s3.length && "" !== s3[0] && (i2 = t2.source.substr(s3[0].length), t2.color = s3[1]);
      let r2 = Xe$1.chunk(i2, true);
      for (let a = 0; a < r2.length; a++) {
        let e3 = r2[a];
        if (e3.text = e3.text.replace(p, "|"), "value" === e3.type) {
          e3.text.match(/[yYMdDwhHKkmsSn]+a/) && (t2.absolute = true, e3.text = e3.text.replace(/([yYMdDwhHKkmsSn]+)a/, "$1"));
          let i3 = e3.text.match(/y+|Y+|M+|d+|D+|w+|h+|H+|K+|k+|m+|s+|S+|n+/g);
          if (i3)
            for (let s4 = 0; s4 < i3.length; s4++)
              null == i3[s4] && (i3[s4] = this._unitAliases[i3[s4]]), t2.parts.push(i3[s4]), e3.text = e3.text.replace(i3[s4], u$1);
        }
        t2.template += e3.text;
      }
      t2.parsed = true;
    }), s2;
  }
  applyFormat(e, t) {
    let i = !t.absolute && e < this.get("negativeBase");
    e = Math.abs(e);
    let s2 = this.toTimeStamp(e, t.baseUnit), r = t.template;
    for (let a = 0, n2 = t.parts.length; a < n2; a++) {
      let e2 = t.parts[a], i2 = this._toTimeUnit(e2.substr(0, 1)), n3 = e2.length, o = Math.floor(s2 / this._getUnitValue(i2));
      r = r.replace(u$1, yt$1(o, n3, "0")), s2 -= o * this._getUnitValue(i2);
    }
    return i && (r = "-" + r), r;
  }
  toTimeStamp(e, t) {
    return e * this._getUnitValue(t);
  }
  _toTimeUnit(e) {
    switch (e) {
      case "S":
        return "millisecond";
      case "s":
        return "second";
      case "m":
        return "minute";
      case "h":
        return "hour";
      case "d":
        return "day";
      case "w":
        return "week";
      case "M":
        return "month";
      case "y":
        return "year";
    }
  }
  getFormat(e, t, i) {
    if (null != this.get("durationFormat"))
      return this.get("durationFormat");
    if (i || (i = this.get("baseUnit")), null != t && e != t) {
      e = Math.abs(e), t = Math.abs(t);
      let s2 = this.getValueUnit(Math.max(e, t), i);
      return this.get("durationFormats")[i][s2];
    }
    {
      let t2 = this.getValueUnit(e, i);
      return this.get("durationFormats")[i][t2];
    }
  }
  getValueUnit(e, t) {
    let i;
    t || (t = this.get("baseUnit"));
    let s2 = this.getMilliseconds(e, t);
    return Q(this._getUnitValues(), (e2, r) => {
      if (e2 == t || i) {
        if (s2 / r <= 1)
          return i || (i = e2), false;
        i = e2;
      }
      return true;
    }), i;
  }
  getMilliseconds(e, t) {
    return t || (t = this.get("baseUnit")), e * this._getUnitValue(t);
  }
  _getUnitValue(e) {
    return this._getUnitValues()[e];
  }
  _getUnitValues() {
    return { millisecond: 1, second: 1e3, minute: 6e4, hour: 36e5, day: 864e5, week: 6048e5, month: 2592e6, year: 31536e6 };
  }
}
const Ae = { firstDayOfWeek: 1, _decimalSeparator: ".", _thousandSeparator: ",", _percentPrefix: null, _percentSuffix: "%", _big_number_suffix_3: "k", _big_number_suffix_6: "M", _big_number_suffix_9: "G", _big_number_suffix_12: "T", _big_number_suffix_15: "P", _big_number_suffix_18: "E", _big_number_suffix_21: "Z", _big_number_suffix_24: "Y", _small_number_suffix_3: "m", _small_number_suffix_6: "μ", _small_number_suffix_9: "n", _small_number_suffix_12: "p", _small_number_suffix_15: "f", _small_number_suffix_18: "a", _small_number_suffix_21: "z", _small_number_suffix_24: "y", _byte_suffix_B: "B", _byte_suffix_KB: "KB", _byte_suffix_MB: "MB", _byte_suffix_GB: "GB", _byte_suffix_TB: "TB", _byte_suffix_PB: "PB", _date: "yyyy-MM-dd", _date_millisecond: "mm:ss SSS", _date_millisecond_full: "HH:mm:ss SSS", _date_second: "HH:mm:ss", _date_second_full: "HH:mm:ss", _date_minute: "HH:mm", _date_minute_full: "HH:mm - MMM dd, yyyy", _date_hour: "HH:mm", _date_hour_full: "HH:mm - MMM dd, yyyy", _date_day: "MMM dd", _date_day_full: "MMM dd, yyyy", _date_week: "ww", _date_week_full: "MMM dd, yyyy", _date_month: "MMM", _date_month_full: "MMM, yyyy", _date_year: "yyyy", _duration_millisecond: "SSS", _duration_millisecond_second: "ss.SSS", _duration_millisecond_minute: "mm:ss SSS", _duration_millisecond_hour: "hh:mm:ss SSS", _duration_millisecond_day: "d'd' mm:ss SSS", _duration_millisecond_week: "d'd' mm:ss SSS", _duration_millisecond_month: "M'm' dd'd' mm:ss SSS", _duration_millisecond_year: "y'y' MM'm' dd'd' mm:ss SSS", _duration_second: "ss", _duration_second_minute: "mm:ss", _duration_second_hour: "hh:mm:ss", _duration_second_day: "d'd' hh:mm:ss", _duration_second_week: "d'd' hh:mm:ss", _duration_second_month: "M'm' dd'd' hh:mm:ss", _duration_second_year: "y'y' MM'm' dd'd' hh:mm:ss", _duration_minute: "mm", _duration_minute_hour: "hh:mm", _duration_minute_day: "d'd' hh:mm", _duration_minute_week: "d'd' hh:mm", _duration_minute_month: "M'm' dd'd' hh:mm", _duration_minute_year: "y'y' MM'm' dd'd' hh:mm", _duration_hour: "hh'h'", _duration_hour_day: "d'd' hh'h'", _duration_hour_week: "d'd' hh'h'", _duration_hour_month: "M'm' dd'd' hh'h'", _duration_hour_year: "y'y' MM'm' dd'd' hh'h'", _duration_day: "d'd'", _duration_day_week: "d'd'", _duration_day_month: "M'm' dd'd'", _duration_day_year: "y'y' MM'm' dd'd'", _duration_week: "w'w'", _duration_week_month: "w'w'", _duration_week_year: "w'w'", _duration_month: "M'm'", _duration_month_year: "y'y' MM'm'", _duration_year: "y'y'", _era_ad: "AD", _era_bc: "BC", A: "", P: "", AM: "", PM: "", "A.M.": "", "P.M.": "", January: "", February: "", March: "", April: "", May: "", June: "", July: "", August: "", September: "", October: "", November: "", December: "", Jan: "", Feb: "", Mar: "", Apr: "", "May(short)": "May", Jun: "", Jul: "", Aug: "", Sep: "", Oct: "", Nov: "", Dec: "", Sunday: "", Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sun: "", Mon: "", Tue: "", Wed: "", Thu: "", Fri: "", Sat: "", _dateOrd: function(e) {
  let t = "th";
  if (e < 11 || e > 13)
    switch (e % 10) {
      case 1:
        t = "st";
        break;
      case 2:
        t = "nd";
        break;
      case 3:
        t = "rd";
    }
  return t;
}, "Zoom Out": "", Play: "", Stop: "", Legend: "", "Press ENTER to toggle": "", Loading: "", Home: "", Chart: "", "Serial chart": "", "X/Y chart": "", "Pie chart": "", "Gauge chart": "", "Radar chart": "", "Sankey diagram": "", "Flow diagram": "", "Chord diagram": "", "TreeMap chart": "", "Force directed tree": "", "Sliced chart": "", Series: "", "Candlestick Series": "", "OHLC Series": "", "Column Series": "", "Line Series": "", "Pie Slice Series": "", "Funnel Series": "", "Pyramid Series": "", "X/Y Series": "", Map: "", "Press ENTER to zoom in": "", "Press ENTER to zoom out": "", "Use arrow keys to zoom in and out": "", "Use plus and minus keys on your keyboard to zoom in and out": "", Export: "", Image: "", Data: "", Print: "", "Press ENTER or use arrow keys to navigate": "", "Press ENTER to open": "", "Press ENTER to print.": "", "Press ENTER to export as %1.": "", "(Press ESC to close this message)": "", "Image Export Complete": "", "Export operation took longer than expected. Something might have gone wrong.": "", "Saved from": "", PNG: "", JPG: "", GIF: "", SVG: "", PDF: "", JSON: "", CSV: "", XLSX: "", HTML: "", "Use TAB to select grip buttons or left and right arrows to change selection": "", "Use left and right arrows to move selection": "", "Use left and right arrows to move left selection": "", "Use left and right arrows to move right selection": "", "Use TAB select grip buttons or up and down arrows to change selection": "", "Use up and down arrows to move selection": "", "Use up and down arrows to move lower selection": "", "Use up and down arrows to move upper selection": "", "From %1 to %2": "", "From %1": "", "To %1": "", "No parser available for file: %1": "", "Error parsing file: %1": "", "Unable to load file: %1": "", "Invalid date": "", Close: "", Minimize: "" };
class Le extends Ee$1 {
  _setDefaults() {
    this.setPrivate("defaultLocale", Ae), super._setDefaults();
  }
  translate(e, t, ...i) {
    t || (t = this._root.locale || this.getPrivate("defaultLocale"));
    let s2 = e, r = t[e];
    if (null === r)
      s2 = "";
    else if (null != r)
      r && (s2 = r);
    else if (t !== this.getPrivate("defaultLocale"))
      return this.translate(e, this.getPrivate("defaultLocale"), ...i);
    if (i.length)
      for (let a = i.length, n2 = 0; n2 < a; ++n2)
        s2 = s2.split("%" + (n2 + 1)).join(i[n2]);
    return s2;
  }
  translateAny(e, t, ...i) {
    return this.translate(e, t, ...i);
  }
  setTranslationAny(e, t, i) {
    (i || this._root.locale)[e] = t;
  }
  setTranslationsAny(e, t) {
    q(e, (e2, i) => {
      this.setTranslationAny(e2, i, t);
    });
  }
  translateEmpty(e, t, ...i) {
    let s2 = this.translate(e, t, ...i);
    return s2 == e ? "" : s2;
  }
  translateFunc(e, t) {
    return this._root.locale[e] ? this._root.locale[e] : t !== this.getPrivate("defaultLocale") ? this.translateFunc(e, this.getPrivate("defaultLocale")) : () => "";
  }
  translateAll(e, t) {
    return this.isDefault() ? e : _(e, (e2) => this.translate(e2, t));
  }
  isDefault() {
    return this.getPrivate("defaultLocale") === this._root.locale;
  }
}
class ze {
  constructor(e = 1, t = 0, i = 0, s2 = 1, r = 0, a = 0) {
    Object.defineProperty(this, "a", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "b", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "c", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "d", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "tx", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "ty", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.a = e, this.b = t, this.c = i, this.d = s2, this.tx = r, this.ty = a;
  }
  setTransform(e, t, i, s2, r, a = 1) {
    this.a = Math.cos(r) * a, this.b = Math.sin(r) * a, this.c = -Math.sin(r) * a, this.d = Math.cos(r) * a, this.tx = e - (i * this.a + s2 * this.c), this.ty = t - (i * this.b + s2 * this.d);
  }
  apply(e) {
    return { x: this.a * e.x + this.c * e.y + this.tx, y: this.b * e.x + this.d * e.y + this.ty };
  }
  applyInverse(e) {
    const t = 1 / (this.a * this.d + this.c * -this.b);
    return { x: this.d * t * e.x + -this.c * t * e.y + (this.ty * this.c - this.tx * this.d) * t, y: this.a * t * e.y + -this.b * t * e.x + (-this.ty * this.a + this.tx * this.b) * t };
  }
  append(e) {
    const t = this.a, i = this.b, s2 = this.c, r = this.d;
    this.a = e.a * t + e.b * s2, this.b = e.a * i + e.b * r, this.c = e.c * t + e.d * s2, this.d = e.c * i + e.d * r, this.tx = e.tx * t + e.ty * s2 + this.tx, this.ty = e.tx * i + e.ty * r + this.ty;
  }
  prepend(e) {
    const t = this.tx;
    if (1 !== e.a || 0 !== e.b || 0 !== e.c || 1 !== e.d) {
      const t2 = this.a, i = this.c;
      this.a = t2 * e.a + this.b * e.c, this.b = t2 * e.b + this.b * e.d, this.c = i * e.a + this.d * e.c, this.d = i * e.b + this.d * e.d;
    }
    this.tx = t * e.a + this.ty * e.c + e.tx, this.ty = t * e.b + this.ty * e.d + e.ty;
  }
  copyFrom(e) {
    this.a = e.a, this.b = e.b, this.c = e.c, this.d = e.d, this.tx = e.tx, this.ty = e.ty;
  }
}
var Fe = /* @__PURE__ */ function() {
  function e(e2, t) {
    var i = [], s2 = true, r = false, a = void 0;
    try {
      for (var n2, o = e2[Symbol.iterator](); !(s2 = (n2 = o.next()).done) && (i.push(n2.value), !t || i.length !== t); s2 = true)
        ;
    } catch (l2) {
      r = true, a = l2;
    } finally {
      try {
        !s2 && o.return && o.return();
      } finally {
        if (r)
          throw a;
      }
    }
    return i;
  }
  return function(t, i) {
    if (Array.isArray(t))
      return t;
    if (Symbol.iterator in Object(t))
      return e(t, i);
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  };
}(), He = 2 * Math.PI, Ye = function(e, t, i, s2, r, a, n2) {
  var o = e.x, l2 = e.y;
  return { x: s2 * (o *= t) - r * (l2 *= i) + a, y: r * o + s2 * l2 + n2 };
}, Ie = function(e, t) {
  var i = 1.5707963267948966 === t ? 0.551915024494 : -1.5707963267948966 === t ? -0.551915024494 : 4 / 3 * Math.tan(t / 4), s2 = Math.cos(e), r = Math.sin(e), a = Math.cos(e + t), n2 = Math.sin(e + t);
  return [{ x: s2 - r * i, y: r + s2 * i }, { x: a + n2 * i, y: n2 - a * i }, { x: a, y: n2 }];
}, Re = function(e, t, i, s2) {
  var r = e * i + t * s2;
  return r > 1 && (r = 1), r < -1 && (r = -1), (e * s2 - t * i < 0 ? -1 : 1) * Math.acos(r);
}, Ue = function(e, t, i, s2, r, a, n2, o, l2, h2, u2, c2) {
  var d2 = Math.pow(r, 2), b2 = Math.pow(a, 2), f = Math.pow(u2, 2), p2 = Math.pow(c2, 2), g = d2 * b2 - d2 * p2 - b2 * f;
  g < 0 && (g = 0), g /= d2 * p2 + b2 * f;
  var m2 = (g = Math.sqrt(g) * (n2 === o ? -1 : 1)) * r / a * c2, _2 = g * -a / r * u2, y2 = h2 * m2 - l2 * _2 + (e + i) / 2, v2 = l2 * m2 + h2 * _2 + (t + s2) / 2, w = (u2 - m2) / r, x = (c2 - _2) / a, P2 = (-u2 - m2) / r, O = (-c2 - _2) / a, k = Re(1, 0, w, x), M2 = Re(w, x, P2, O);
  return 0 === o && M2 > 0 && (M2 -= He), 1 === o && M2 < 0 && (M2 += He), [y2, v2, k, M2];
}, We = function(e) {
  var t = e.px, i = e.py, s2 = e.cx, r = e.cy, a = e.rx, n2 = e.ry, o = e.xAxisRotation, l2 = void 0 === o ? 0 : o, h2 = e.largeArcFlag, u2 = void 0 === h2 ? 0 : h2, c2 = e.sweepFlag, d2 = void 0 === c2 ? 0 : c2, b2 = [];
  if (0 === a || 0 === n2)
    return [];
  var f = Math.sin(l2 * He / 360), p2 = Math.cos(l2 * He / 360), g = p2 * (t - s2) / 2 + f * (i - r) / 2, m2 = -f * (t - s2) / 2 + p2 * (i - r) / 2;
  if (0 === g && 0 === m2)
    return [];
  a = Math.abs(a), n2 = Math.abs(n2);
  var _2 = Math.pow(g, 2) / Math.pow(a, 2) + Math.pow(m2, 2) / Math.pow(n2, 2);
  _2 > 1 && (a *= Math.sqrt(_2), n2 *= Math.sqrt(_2));
  var y2 = Ue(t, i, s2, r, a, n2, u2, d2, f, p2, g, m2), v2 = Fe(y2, 4), w = v2[0], x = v2[1], P2 = v2[2], O = v2[3], k = Math.abs(O) / (He / 4);
  Math.abs(1 - k) < 1e-7 && (k = 1);
  var M2 = Math.max(Math.ceil(k), 1);
  O /= M2;
  for (var j = 0; j < M2; j++)
    b2.push(Ie(P2, O)), P2 += O;
  return b2.map(function(e2) {
    var t2 = Ye(e2[0], a, n2, p2, f, w, x), i2 = t2.x, s3 = t2.y, r2 = Ye(e2[1], a, n2, p2, f, w, x), o2 = r2.x, l3 = r2.y, h3 = Ye(e2[2], a, n2, p2, f, w, x);
    return { x1: i2, y1: s3, x2: o2, y2: l3, x: h3.x, y: h3.y };
  });
};
function Ve(e, t, i) {
  if (t !== i)
    throw new Error("Required " + i + " arguments for " + e + " but got " + t);
}
function Ne(e, t, i) {
  if (t < i)
    throw new Error("Required at least " + i + " arguments for " + e + " but got " + t);
}
function Xe(e, t, i) {
  if (Ne(e, t, i), t % i != 0)
    throw new Error("Arguments for " + e + " must be in pairs of " + i);
}
function Ge(e) {
  for (let t = 0; t < e.length; t += 7) {
    let i = t + 3, s2 = e[i];
    if (s2.length > 1) {
      const t2 = /^([01])([01])(.*)$/.exec(s2);
      null !== t2 && (e.splice(i, 0, t2[1]), ++i, e.splice(i, 0, t2[2]), ++i, t2[3].length > 0 ? e[i] = t2[3] : e.splice(i, 1));
    }
    if (++i, s2 = e[i], s2.length > 1) {
      const t2 = /^([01])(.+)$/.exec(s2);
      null !== t2 && (e.splice(i, 0, t2[1]), ++i, e[i] = t2[2]);
    }
  }
}
function qe(e) {
  if (0 === e || 1 === e)
    return e;
  throw new Error("Flag must be 0 or 1");
}
function Ke(e) {
  const t = [0, 0, 0];
  for (let i = 0; i < 24; i++)
    t[i % 3] <<= 1, t[i % 3] |= 1 & e, e >>= 1;
  return (0 | t[2]) + (t[1] << 8) + (t[0] << 16);
}
function Ze(e, t) {
  for (; (!e.interactive || t(e)) && e._parent; )
    e = e._parent;
}
function Je(e, t, i) {
  return it$1(e, ht$1(t), (e2) => {
    const t2 = pt$1(e2);
    let s2 = e2.touches;
    s2 ? (0 == s2.length && (s2 = e2.changedTouches), i(D(s2), t2)) : i([e2], t2);
  });
}
function $e(e) {
  const t = document.createElement("canvas");
  t.width = 1, t.height = 1;
  const i = t.getContext("2d", { willReadFrequently: true });
  i.drawImage(e, 0, 0, 1, 1);
  try {
    return i.getImageData(0, 0, 1, 1), false;
  } catch (s2) {
    return console.warn('Image "' + e.src + '" is loaded from different host and is not covered by CORS policy. For more information about the implications read here: https://www.amcharts.com/docs/v5/concepts/cors'), true;
  }
}
function Qe(e) {
  e.width = 0, e.height = 0, e.style.width = "0px", e.style.height = "0px";
}
class et {
  constructor() {
    Object.defineProperty(this, "_x", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_y", { enumerable: true, configurable: true, writable: true, value: 0 });
  }
  get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }
  set x(e) {
    this._x = e;
  }
  set y(e) {
    this._y = e;
  }
}
class tt extends A {
  constructor(e) {
    super(), Object.defineProperty(this, "_layer", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "mask", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "visible", { enumerable: true, configurable: true, writable: true, value: true }), Object.defineProperty(this, "exportable", { enumerable: true, configurable: true, writable: true, value: true }), Object.defineProperty(this, "interactive", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "inactive", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "wheelable", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "cancelTouch", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "isMeasured", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "buttonMode", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "alpha", { enumerable: true, configurable: true, writable: true, value: 1 }), Object.defineProperty(this, "compoundAlpha", { enumerable: true, configurable: true, writable: true, value: 1 }), Object.defineProperty(this, "angle", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "scale", { enumerable: true, configurable: true, writable: true, value: 1 }), Object.defineProperty(this, "x", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "y", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "crisp", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "pivot", { enumerable: true, configurable: true, writable: true, value: new et() }), Object.defineProperty(this, "filter", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "cursorOverStyle", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_replacedCursorStyle", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_localMatrix", { enumerable: true, configurable: true, writable: true, value: new ze() }), Object.defineProperty(this, "_matrix", { enumerable: true, configurable: true, writable: true, value: new ze() }), Object.defineProperty(this, "_uMatrix", { enumerable: true, configurable: true, writable: true, value: new ze() }), Object.defineProperty(this, "_renderer", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_parent", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_localBounds", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_bounds", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_colorId", { enumerable: true, configurable: true, writable: true, value: void 0 }), this._renderer = e;
  }
  _dispose() {
    this._renderer._removeObject(this), this.getLayer().dirty = true;
  }
  getCanvas() {
    return this.getLayer().view;
  }
  getLayer() {
    let e = this;
    for (; ; ) {
      if (e._layer)
        return e._layer;
      if (!e._parent)
        return this._renderer.defaultLayer;
      e = e._parent;
    }
  }
  setLayer(e, t) {
    if (null == e)
      this._layer = void 0;
    else {
      const i = true;
      this._layer = this._renderer.getLayer(e, i), this._layer.visible = i, this._layer.margin = t, t && _t$1(this._layer.view, false), this._renderer._ghostLayer.setMargin(this._renderer.layers), this._parent && this._parent.registerChildLayer(this._layer), this._layer.dirty = true, this._renderer.resizeLayer(this._layer), this._renderer.resizeGhost();
    }
  }
  markDirtyLayer() {
    this.getLayer().dirty = true;
  }
  clear() {
    this.invalidateBounds();
  }
  invalidateBounds() {
    this._localBounds = void 0;
  }
  _addBounds(e) {
  }
  _getColorId() {
    return void 0 === this._colorId && (this._colorId = this._renderer.paintId(this)), this._colorId;
  }
  _isInteractive() {
    return 0 == this.inactive && (this.interactive || this._renderer._forceInteractive > 0);
  }
  _isInteractiveMask() {
    return this._isInteractive();
  }
  contains(e) {
    for (; ; ) {
      if (e === this)
        return true;
      if (!e._parent)
        return false;
      e = e._parent;
    }
  }
  toGlobal(e) {
    return this._matrix.apply(e);
  }
  toLocal(e) {
    return this._matrix.applyInverse(e);
  }
  getLocalMatrix() {
    return this._uMatrix.setTransform(0, 0, this.pivot.x, this.pivot.y, this.angle * Math.PI / 180, this.scale), this._uMatrix;
  }
  getLocalBounds() {
    if (!this._localBounds) {
      const e = 1e7;
      this._localBounds = { left: e, top: e, right: -e, bottom: -e }, this._addBounds(this._localBounds);
    }
    return this._localBounds;
  }
  getAdjustedBounds(e) {
    this._setMatrix();
    const t = this.getLocalMatrix(), i = t.apply({ x: e.left, y: e.top }), s2 = t.apply({ x: e.right, y: e.top }), r = t.apply({ x: e.right, y: e.bottom }), a = t.apply({ x: e.left, y: e.bottom });
    return { left: Math.min(i.x, s2.x, r.x, a.x), top: Math.min(i.y, s2.y, r.y, a.y), right: Math.max(i.x, s2.x, r.x, a.x), bottom: Math.max(i.y, s2.y, r.y, a.y) };
  }
  on(e, t, i) {
    return this.interactive ? this._renderer._addEvent(this, e, t, i) : new B(() => {
    });
  }
  _setMatrix() {
    this._localMatrix.setTransform(this.x, this.y, this.pivot.x, this.pivot.y, this.angle * Math.PI / 180, this.scale), this._matrix.copyFrom(this._localMatrix), this._parent && this._matrix.prepend(this._parent._matrix);
  }
  _transform(e, t) {
    const i = this._matrix;
    let s2 = i.tx * t, r = i.ty * t;
    this.crisp && (s2 = Math.floor(s2) + 0.5, r = Math.floor(r) + 0.5), e.setTransform(i.a * t, i.b * t, i.c * t, i.d * t, s2, r);
  }
  _transformMargin(e, t, i) {
    const s2 = this._matrix;
    e.setTransform(s2.a * t, s2.b * t, s2.c * t, s2.d * t, (s2.tx + i.left) * t, (s2.ty + i.top) * t);
  }
  _transformLayer(e, t, i) {
    i.margin ? this._transformMargin(e, i.scale || t, i.margin) : this._transform(e, i.scale || t);
  }
  render(e) {
    if (this.visible && (false !== this.exportable || !this._renderer._omitTainted)) {
      this._setMatrix();
      const i = this._renderer.resolution, s2 = this._renderer.layers, r = this._renderer._ghostLayer, a = r.context, n2 = this.mask;
      n2 && n2._setMatrix(), m(s2, (e2) => {
        if (e2) {
          const t = e2.context;
          t.save(), n2 && (n2._transformLayer(t, i, e2), n2._runPath(t), t.clip()), t.globalAlpha = this.compoundAlpha * this.alpha, this._transformLayer(t, i, e2), this.filter && (t.filter = this.filter);
        }
      }), a.save(), n2 && this._isInteractiveMask() && (n2._transformMargin(a, i, r.margin), n2._runPath(a), a.clip()), this._transformMargin(a, i, r.margin), this._render(e), a.restore(), m(s2, (e2) => {
        e2 && e2.context.restore();
      });
    }
  }
  _render(e) {
    if (false === this.exportable) {
      (this._layer || e).tainted = true;
    }
  }
  hovering() {
    return this._renderer._hovering.has(this);
  }
  dragging() {
    return this._renderer._dragging.some((e) => e.value === this);
  }
  shouldCancelTouch() {
    const e = this._renderer;
    return !(e.tapToActivate && !e._touchActive) && (!!this.cancelTouch || !!this._parent && this._parent.shouldCancelTouch());
  }
}
class it extends tt {
  constructor() {
    super(...arguments), Object.defineProperty(this, "interactiveChildren", { enumerable: true, configurable: true, writable: true, value: true }), Object.defineProperty(this, "_childLayers", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_children", { enumerable: true, configurable: true, writable: true, value: [] });
  }
  _isInteractiveMask() {
    return this.interactiveChildren || super._isInteractiveMask();
  }
  addChild(e) {
    e._parent = this, this._children.push(e), e._layer && this.registerChildLayer(e._layer);
  }
  addChildAt(e, t) {
    e._parent = this, this._children.splice(t, 0, e), e._layer && this.registerChildLayer(e._layer);
  }
  removeChild(e) {
    e._parent = void 0, y(this._children, e);
  }
  _render(e) {
    super._render(e);
    const i = this._renderer;
    this.interactive && this.interactiveChildren && ++i._forceInteractive;
    const s2 = this._layer || e;
    m(this._children, (e2) => {
      e2.compoundAlpha = this.compoundAlpha * this.alpha, e2.render(s2);
    }), this.interactive && this.interactiveChildren && --i._forceInteractive;
  }
  registerChildLayer(e) {
    this._childLayers || (this._childLayers = []), P(this._childLayers, e), this._parent && this._parent.registerChildLayer(e);
  }
  markDirtyLayer(e = false) {
    super.markDirtyLayer(), e && this._childLayers && m(this._childLayers, (e2) => e2.dirty = true);
  }
  _dispose() {
    super._dispose(), this._childLayers && m(this._childLayers, (e) => {
      e.dirty = true;
    });
  }
}
function st(e, t) {
  e.left = Math.min(e.left, t.x), e.top = Math.min(e.top, t.y), e.right = Math.max(e.right, t.x), e.bottom = Math.max(e.bottom, t.y);
}
class rt {
  colorize(e, t) {
  }
  path(e) {
  }
  addBounds(e) {
  }
}
class at extends rt {
  colorize(e, t) {
    e.beginPath();
  }
}
class nt extends rt {
  constructor(e) {
    super(), Object.defineProperty(this, "color", { enumerable: true, configurable: true, writable: true, value: e });
  }
  colorize(e, t) {
    e.fillStyle = void 0 !== t ? t : this.color;
  }
}
class ot extends rt {
  constructor(e) {
    super(), Object.defineProperty(this, "clearShadow", { enumerable: true, configurable: true, writable: true, value: e });
  }
  colorize(e, t) {
    e.fill(), this.clearShadow && (e.shadowColor = "", e.shadowBlur = 0, e.shadowOffsetX = 0, e.shadowOffsetY = 0);
  }
}
class lt extends rt {
  colorize(e, t) {
    e.stroke();
  }
}
class ht extends rt {
  constructor(e, t, i) {
    super(), Object.defineProperty(this, "width", { enumerable: true, configurable: true, writable: true, value: e }), Object.defineProperty(this, "color", { enumerable: true, configurable: true, writable: true, value: t }), Object.defineProperty(this, "lineJoin", { enumerable: true, configurable: true, writable: true, value: i });
  }
  colorize(e, t) {
    e.strokeStyle = void 0 !== t ? t : this.color, e.lineWidth = this.width, this.lineJoin && (e.lineJoin = this.lineJoin);
  }
}
class ut extends rt {
  constructor(e) {
    super(), Object.defineProperty(this, "dash", { enumerable: true, configurable: true, writable: true, value: e });
  }
  colorize(e, t) {
    e.setLineDash(this.dash);
  }
}
class ct extends rt {
  constructor(e) {
    super(), Object.defineProperty(this, "dashOffset", { enumerable: true, configurable: true, writable: true, value: e });
  }
  colorize(e, t) {
    e.lineDashOffset = this.dashOffset;
  }
}
class dt extends rt {
  constructor(e, t, i, s2) {
    super(), Object.defineProperty(this, "x", { enumerable: true, configurable: true, writable: true, value: e }), Object.defineProperty(this, "y", { enumerable: true, configurable: true, writable: true, value: t }), Object.defineProperty(this, "width", { enumerable: true, configurable: true, writable: true, value: i }), Object.defineProperty(this, "height", { enumerable: true, configurable: true, writable: true, value: s2 });
  }
  path(e) {
    e.rect(this.x, this.y, this.width, this.height);
  }
  addBounds(e) {
    const t = this.x, i = this.y, s2 = t + this.width, r = i + this.height;
    st(e, { x: t, y: i }), st(e, { x: s2, y: i }), st(e, { x: t, y: r }), st(e, { x: s2, y: r });
  }
}
class bt extends rt {
  constructor(e, t, i) {
    super(), Object.defineProperty(this, "x", { enumerable: true, configurable: true, writable: true, value: e }), Object.defineProperty(this, "y", { enumerable: true, configurable: true, writable: true, value: t }), Object.defineProperty(this, "radius", { enumerable: true, configurable: true, writable: true, value: i });
  }
  path(e) {
    e.moveTo(this.x + this.radius, this.y), e.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
  }
  addBounds(e) {
    st(e, { x: this.x - this.radius, y: this.y - this.radius }), st(e, { x: this.x + this.radius, y: this.y + this.radius });
  }
}
class ft extends rt {
  constructor(e, t, i, s2) {
    super(), Object.defineProperty(this, "x", { enumerable: true, configurable: true, writable: true, value: e }), Object.defineProperty(this, "y", { enumerable: true, configurable: true, writable: true, value: t }), Object.defineProperty(this, "radiusX", { enumerable: true, configurable: true, writable: true, value: i }), Object.defineProperty(this, "radiusY", { enumerable: true, configurable: true, writable: true, value: s2 });
  }
  path(e) {
    e.ellipse(0, 0, this.radiusX, this.radiusY, 0, 0, 2 * Math.PI);
  }
  addBounds(e) {
    st(e, { x: this.x - this.radiusX, y: this.y - this.radiusY }), st(e, { x: this.x + this.radiusX, y: this.y + this.radiusY });
  }
}
class pt extends rt {
  constructor(e, t, i, s2, r, a) {
    super(), Object.defineProperty(this, "cx", { enumerable: true, configurable: true, writable: true, value: e }), Object.defineProperty(this, "cy", { enumerable: true, configurable: true, writable: true, value: t }), Object.defineProperty(this, "radius", { enumerable: true, configurable: true, writable: true, value: i }), Object.defineProperty(this, "startAngle", { enumerable: true, configurable: true, writable: true, value: s2 }), Object.defineProperty(this, "endAngle", { enumerable: true, configurable: true, writable: true, value: r }), Object.defineProperty(this, "anticlockwise", { enumerable: true, configurable: true, writable: true, value: a });
  }
  path(e) {
    this.radius > 0 && e.arc(this.cx, this.cy, this.radius, this.startAngle, this.endAngle, this.anticlockwise);
  }
  addBounds(e) {
    let t = pe(this.cx, this.cy, this.startAngle * ne, this.endAngle * ne, this.radius);
    st(e, { x: t.left, y: t.top }), st(e, { x: t.right, y: t.bottom });
  }
}
class gt extends rt {
  constructor(e, t, i, s2, r) {
    super(), Object.defineProperty(this, "x1", { enumerable: true, configurable: true, writable: true, value: e }), Object.defineProperty(this, "y1", { enumerable: true, configurable: true, writable: true, value: t }), Object.defineProperty(this, "x2", { enumerable: true, configurable: true, writable: true, value: i }), Object.defineProperty(this, "y2", { enumerable: true, configurable: true, writable: true, value: s2 }), Object.defineProperty(this, "radius", { enumerable: true, configurable: true, writable: true, value: r });
  }
  path(e) {
    this.radius > 0 && e.arcTo(this.x1, this.y1, this.x2, this.y2, this.radius);
  }
  addBounds(e) {
  }
}
class mt extends rt {
  constructor(e, t) {
    super(), Object.defineProperty(this, "x", { enumerable: true, configurable: true, writable: true, value: e }), Object.defineProperty(this, "y", { enumerable: true, configurable: true, writable: true, value: t });
  }
  path(e) {
    e.lineTo(this.x, this.y);
  }
  addBounds(e) {
    st(e, { x: this.x, y: this.y });
  }
}
class _t extends rt {
  constructor(e, t) {
    super(), Object.defineProperty(this, "x", { enumerable: true, configurable: true, writable: true, value: e }), Object.defineProperty(this, "y", { enumerable: true, configurable: true, writable: true, value: t });
  }
  path(e) {
    e.moveTo(this.x, this.y);
  }
  addBounds(e) {
    st(e, { x: this.x, y: this.y });
  }
}
class yt extends rt {
  path(e) {
    e.closePath();
  }
}
class vt extends rt {
  constructor(e, t, i, s2, r, a) {
    super(), Object.defineProperty(this, "cpX", { enumerable: true, configurable: true, writable: true, value: e }), Object.defineProperty(this, "cpY", { enumerable: true, configurable: true, writable: true, value: t }), Object.defineProperty(this, "cpX2", { enumerable: true, configurable: true, writable: true, value: i }), Object.defineProperty(this, "cpY2", { enumerable: true, configurable: true, writable: true, value: s2 }), Object.defineProperty(this, "toX", { enumerable: true, configurable: true, writable: true, value: r }), Object.defineProperty(this, "toY", { enumerable: true, configurable: true, writable: true, value: a });
  }
  path(e) {
    e.bezierCurveTo(this.cpX, this.cpY, this.cpX2, this.cpY2, this.toX, this.toY);
  }
  addBounds(e) {
    st(e, { x: this.cpX, y: this.cpY }), st(e, { x: this.cpX2, y: this.cpY2 }), st(e, { x: this.toX, y: this.toY });
  }
}
class wt extends rt {
  constructor(e, t, i, s2) {
    super(), Object.defineProperty(this, "cpX", { enumerable: true, configurable: true, writable: true, value: e }), Object.defineProperty(this, "cpY", { enumerable: true, configurable: true, writable: true, value: t }), Object.defineProperty(this, "toX", { enumerable: true, configurable: true, writable: true, value: i }), Object.defineProperty(this, "toY", { enumerable: true, configurable: true, writable: true, value: s2 });
  }
  path(e) {
    e.quadraticCurveTo(this.cpX, this.cpY, this.toX, this.toY);
  }
  addBounds(e) {
    st(e, { x: this.cpX, y: this.cpY }), st(e, { x: this.toX, y: this.toY });
  }
}
class xt extends rt {
  constructor(e, t, i, s2, r) {
    super(), Object.defineProperty(this, "color", { enumerable: true, configurable: true, writable: true, value: e }), Object.defineProperty(this, "blur", { enumerable: true, configurable: true, writable: true, value: t }), Object.defineProperty(this, "offsetX", { enumerable: true, configurable: true, writable: true, value: i }), Object.defineProperty(this, "offsetY", { enumerable: true, configurable: true, writable: true, value: s2 }), Object.defineProperty(this, "opacity", { enumerable: true, configurable: true, writable: true, value: r });
  }
  colorize(e, t) {
    this.opacity && (e.fillStyle = this.color), e.shadowColor = this.color, e.shadowBlur = this.blur, e.shadowOffsetX = this.offsetX, e.shadowOffsetY = this.offsetY;
  }
}
class Pt extends rt {
  constructor(e, t, i, s2, r) {
    super(), Object.defineProperty(this, "image", { enumerable: true, configurable: true, writable: true, value: e }), Object.defineProperty(this, "width", { enumerable: true, configurable: true, writable: true, value: t }), Object.defineProperty(this, "height", { enumerable: true, configurable: true, writable: true, value: i }), Object.defineProperty(this, "x", { enumerable: true, configurable: true, writable: true, value: s2 }), Object.defineProperty(this, "y", { enumerable: true, configurable: true, writable: true, value: r });
  }
  path(e) {
    e.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
  addBounds(e) {
    st(e, { x: this.x, y: this.y }), st(e, { x: this.width, y: this.height });
  }
}
class Ot extends tt {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_operations", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "blendMode", { enumerable: true, configurable: true, writable: true, value: Re$1.NORMAL }), Object.defineProperty(this, "_hasShadows", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_fillAlpha", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_strokeAlpha", { enumerable: true, configurable: true, writable: true, value: void 0 });
  }
  clear() {
    super.clear(), this._operations.length = 0;
  }
  _pushOp(e) {
    this._operations.push(e);
  }
  beginFill(e, t = 1) {
    this._fillAlpha = t, e ? e instanceof Zt ? this._pushOp(new nt(e.toCSS(t))) : (this.isMeasured = true, this._pushOp(new nt(e))) : this._pushOp(new nt("rgba(0, 0, 0, " + t + ")"));
  }
  endFill() {
    this._pushOp(new ot(this._hasShadows));
  }
  endStroke() {
    this._pushOp(new lt());
  }
  beginPath() {
    this._pushOp(new at());
  }
  lineStyle(e = 0, t, i = 1, s2) {
    this._strokeAlpha = i, t ? t instanceof Zt ? this._pushOp(new ht(e, t.toCSS(i), s2)) : this._pushOp(new ht(e, t, s2)) : this._pushOp(new ht(e, "rgba(0, 0, 0, " + i + ")", s2));
  }
  setLineDash(e) {
    this._pushOp(new ut(e || []));
  }
  setLineDashOffset(e = 0) {
    this._pushOp(new ct(e));
  }
  drawRect(e, t, i, s2) {
    this._pushOp(new dt(e, t, i, s2));
  }
  drawCircle(e, t, i) {
    this._pushOp(new bt(e, t, i));
  }
  drawEllipse(e, t, i, s2) {
    this._pushOp(new ft(e, t, i, s2));
  }
  arc(e, t, i, s2, r, a = false) {
    this._pushOp(new pt(e, t, i, s2, r, a));
  }
  arcTo(e, t, i, s2, r) {
    this._pushOp(new gt(e, t, i, s2, r));
  }
  lineTo(e, t) {
    this._pushOp(new mt(e, t));
  }
  moveTo(e, t) {
    this._pushOp(new _t(e, t));
  }
  bezierCurveTo(e, t, i, s2, r, a) {
    this._pushOp(new vt(e, t, i, s2, r, a));
  }
  quadraticCurveTo(e, t, i, s2) {
    this._pushOp(new wt(e, t, i, s2));
  }
  closePath() {
    this._pushOp(new yt());
  }
  shadow(e, t = 0, i = 0, s2 = 0, r) {
    this._hasShadows = true, this._pushOp(new xt(r ? e.toCSS(r) : e.toCSS(this._fillAlpha || this._strokeAlpha), t, i, s2));
  }
  image(e, t, i, s2, r) {
    this._pushOp(new Pt(e, t, i, s2, r));
  }
  svgPath(e) {
    let i = 0, s2 = 0, r = null, a = null, n2 = null, o = null;
    const l2 = /([MmZzLlHhVvCcSsQqTtAa])([^MmZzLlHhVvCcSsQqTtAa]*)/g, h2 = /[\u0009\u0020\u000A\u000C\u000D]*([\+\-]?[0-9]*\.?[0-9]+(?:[eE][\+\-]?[0-9]+)?)[\u0009\u0020\u000A\u000C\u000D]*,?/g;
    let u2;
    for (; null !== (u2 = l2.exec(e)); ) {
      const e2 = u2[1], l3 = u2[2], c2 = [];
      for (; null !== (u2 = h2.exec(l3)); )
        c2.push(u2[1]);
      switch ("S" !== e2 && "s" !== e2 && "C" !== e2 && "c" !== e2 && (r = null, a = null), "Q" !== e2 && "q" !== e2 && "T" !== e2 && "t" !== e2 && (n2 = null, o = null), e2) {
        case "M":
          Xe(e2, c2.length, 2), i = +c2[0], s2 = +c2[1], this.moveTo(i, s2);
          for (let e3 = 2; e3 < c2.length; e3 += 2)
            i = +c2[e3], s2 = +c2[e3 + 1], this.lineTo(i, s2);
          break;
        case "m":
          Xe(e2, c2.length, 2), i += +c2[0], s2 += +c2[1], this.moveTo(i, s2);
          for (let e3 = 2; e3 < c2.length; e3 += 2)
            i += +c2[e3], s2 += +c2[e3 + 1], this.lineTo(i, s2);
          break;
        case "L":
          Xe(e2, c2.length, 2);
          for (let e3 = 0; e3 < c2.length; e3 += 2)
            i = +c2[e3], s2 = +c2[e3 + 1], this.lineTo(i, s2);
          break;
        case "l":
          Xe(e2, c2.length, 2);
          for (let e3 = 0; e3 < c2.length; e3 += 2)
            i += +c2[e3], s2 += +c2[e3 + 1], this.lineTo(i, s2);
          break;
        case "H":
          Ne(e2, c2.length, 1);
          for (let e3 = 0; e3 < c2.length; ++e3)
            i = +c2[e3], this.lineTo(i, s2);
          break;
        case "h":
          Ne(e2, c2.length, 1);
          for (let e3 = 0; e3 < c2.length; ++e3)
            i += +c2[e3], this.lineTo(i, s2);
          break;
        case "V":
          Ne(e2, c2.length, 1);
          for (let e3 = 0; e3 < c2.length; ++e3)
            s2 = +c2[e3], this.lineTo(i, s2);
          break;
        case "v":
          Ne(e2, c2.length, 1);
          for (let e3 = 0; e3 < c2.length; ++e3)
            s2 += +c2[e3], this.lineTo(i, s2);
          break;
        case "C":
          Xe(e2, c2.length, 6);
          for (let e3 = 0; e3 < c2.length; e3 += 6) {
            const t = +c2[e3], n3 = +c2[e3 + 1];
            r = +c2[e3 + 2], a = +c2[e3 + 3], i = +c2[e3 + 4], s2 = +c2[e3 + 5], this.bezierCurveTo(t, n3, r, a, i, s2);
          }
          break;
        case "c":
          Xe(e2, c2.length, 6);
          for (let e3 = 0; e3 < c2.length; e3 += 6) {
            const t = +c2[e3] + i, n3 = +c2[e3 + 1] + s2;
            r = +c2[e3 + 2] + i, a = +c2[e3 + 3] + s2, i += +c2[e3 + 4], s2 += +c2[e3 + 5], this.bezierCurveTo(t, n3, r, a, i, s2);
          }
          break;
        case "S":
          Xe(e2, c2.length, 4), null !== r && null !== a || (r = i, a = s2);
          for (let e3 = 0; e3 < c2.length; e3 += 4) {
            const t = 2 * i - r, n3 = 2 * s2 - a;
            r = +c2[e3], a = +c2[e3 + 1], i = +c2[e3 + 2], s2 = +c2[e3 + 3], this.bezierCurveTo(t, n3, r, a, i, s2);
          }
          break;
        case "s":
          Xe(e2, c2.length, 4), null !== r && null !== a || (r = i, a = s2);
          for (let e3 = 0; e3 < c2.length; e3 += 4) {
            const t = 2 * i - r, n3 = 2 * s2 - a;
            r = +c2[e3] + i, a = +c2[e3 + 1] + s2, i += +c2[e3 + 2], s2 += +c2[e3 + 3], this.bezierCurveTo(t, n3, r, a, i, s2);
          }
          break;
        case "Q":
          Xe(e2, c2.length, 4);
          for (let e3 = 0; e3 < c2.length; e3 += 4)
            n2 = +c2[e3], o = +c2[e3 + 1], i = +c2[e3 + 2], s2 = +c2[e3 + 3], this.quadraticCurveTo(n2, o, i, s2);
          break;
        case "q":
          Xe(e2, c2.length, 4);
          for (let e3 = 0; e3 < c2.length; e3 += 4)
            n2 = +c2[e3] + i, o = +c2[e3 + 1] + s2, i += +c2[e3 + 2], s2 += +c2[e3 + 3], this.quadraticCurveTo(n2, o, i, s2);
          break;
        case "T":
          Xe(e2, c2.length, 2), null !== n2 && null !== o || (n2 = i, o = s2);
          for (let e3 = 0; e3 < c2.length; e3 += 2)
            n2 = 2 * i - n2, o = 2 * s2 - o, i = +c2[e3], s2 = +c2[e3 + 1], this.quadraticCurveTo(n2, o, i, s2);
          break;
        case "t":
          Xe(e2, c2.length, 2), null !== n2 && null !== o || (n2 = i, o = s2);
          for (let e3 = 0; e3 < c2.length; e3 += 2)
            n2 = 2 * i - n2, o = 2 * s2 - o, i += +c2[e3], s2 += +c2[e3 + 1], this.quadraticCurveTo(n2, o, i, s2);
          break;
        case "A":
        case "a":
          const l4 = "a" === e2;
          Ge(c2), Xe(e2, c2.length, 7);
          for (let e3 = 0; e3 < c2.length; e3 += 7) {
            let r2 = +c2[e3 + 5], a2 = +c2[e3 + 6];
            l4 && (r2 += i, a2 += s2);
            const n3 = We({ px: i, py: s2, rx: +c2[e3], ry: +c2[e3 + 1], xAxisRotation: +c2[e3 + 2], largeArcFlag: qe(+c2[e3 + 3]), sweepFlag: qe(+c2[e3 + 4]), cx: r2, cy: a2 });
            m(n3, (e4) => {
              this.bezierCurveTo(e4.x1, e4.y1, e4.x2, e4.y2, e4.x, e4.y), i = e4.x, s2 = e4.y;
            });
          }
          break;
        case "Z":
        case "z":
          Ve(e2, c2.length, 0), this.closePath();
      }
    }
  }
  _runPath(e) {
    e.beginPath(), m(this._operations, (t) => {
      t.path(e);
    });
  }
  _render(e) {
    super._render(e);
    const i = this._layer || e, s2 = i.dirty, r = this._isInteractive();
    if (s2 || r) {
      const e2 = i.context, a = this._renderer._ghostLayer.context;
      let n2;
      s2 && (e2.globalCompositeOperation = this.blendMode, e2.beginPath()), r && (a.beginPath(), n2 = this._getColorId()), m(this._operations, (t) => {
        s2 && (t.path(e2), t.colorize(e2, void 0)), r && (t.path(a), t.colorize(a, n2));
      });
    }
  }
  renderDetached(e) {
    if (this.visible) {
      this._setMatrix(), e.save();
      const i = this.mask;
      i && (i._setMatrix(), i._transform(e, 1), i._runPath(e), e.clip()), e.globalAlpha = this.compoundAlpha * this.alpha, this._transform(e, 1), this.filter && (e.filter = this.filter), e.globalCompositeOperation = this.blendMode, e.beginPath(), m(this._operations, (t) => {
        t.path(e), t.colorize(e, void 0);
      }), e.restore();
    }
  }
  _addBounds(e) {
    this.visible && this.isMeasured && m(this._operations, (t) => {
      t.addBounds(e);
    });
  }
}
class kt extends tt {
  constructor(e, t, i) {
    super(e), Object.defineProperty(this, "text", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "style", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "resolution", { enumerable: true, configurable: true, writable: true, value: 1 }), Object.defineProperty(this, "textVisible", { enumerable: true, configurable: true, writable: true, value: true }), Object.defineProperty(this, "_textInfo", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_originalScale", { enumerable: true, configurable: true, writable: true, value: 1 }), this.text = t, this.style = i;
  }
  invalidateBounds() {
    super.invalidateBounds(), this._textInfo = void 0;
  }
  _shared(e) {
    this.style.textAlign && (e.textAlign = this.style.textAlign), this.style.direction && (e.direction = this.style.direction), this.style.textBaseline && (e.textBaseline = this.style.textBaseline);
  }
  _prerender(e, t = false, i = false) {
    super._render(e);
    const s2 = e.context, r = this._renderer._ghostLayer.context, a = this.style;
    let n2 = this._getFontStyle(void 0, i);
    s2.font = n2, this._isInteractive() && !t && (r.font = n2), a.fill && (a.fill instanceof Zt ? s2.fillStyle = a.fill.toCSS(null != a.fillOpacity ? a.fillOpacity : 1) : s2.fillStyle = a.fill), a.shadowColor && (e.context.shadowColor = a.shadowColor.toCSS(a.shadowOpacity || 1)), a.shadowBlur && (e.context.shadowBlur = a.shadowBlur), a.shadowOffsetX && (e.context.shadowOffsetX = a.shadowOffsetX), a.shadowOffsetY && (e.context.shadowOffsetY = a.shadowOffsetY), this._shared(s2), this._isInteractive() && !t && (r.fillStyle = this._getColorId(), this._shared(r));
  }
  _getFontStyle(e, t = false) {
    const i = this.style;
    let s2 = [];
    return e && e.fontVariant ? s2.push(e.fontVariant) : i.fontVariant && s2.push(i.fontVariant), t || (e && e.fontWeight ? s2.push(e.fontWeight) : i.fontWeight && s2.push(i.fontWeight)), e && e.fontStyle ? s2.push(e.fontStyle) : i.fontStyle && s2.push(i.fontStyle), e && e.fontSize ? (l(e.fontSize) && (e.fontSize = e.fontSize + "px"), s2.push(e.fontSize)) : i.fontSize && (l(i.fontSize) && (i.fontSize = i.fontSize + "px"), s2.push(i.fontSize)), e && e.fontFamily ? s2.push(e.fontFamily) : i.fontFamily ? s2.push(i.fontFamily) : s2.length && s2.push("Arial"), s2.join(" ");
  }
  _render(e) {
    const i = this._layer || e;
    if (this._textInfo || this._measure(i), this.textVisible) {
      const e2 = this._isInteractive(), s2 = i.context, r = i.dirty, a = this._renderer._ghostLayer.context;
      s2.save(), a.save(), this._prerender(i), m(this._textInfo, (i2, n2) => {
        m(i2.textChunks, (t, n3) => {
          if (t.style && (s2.save(), a.save(), s2.font = t.style, this._isInteractive() && (a.font = t.style)), t.fill && (s2.save(), s2.fillStyle = t.fill.toCSS()), r && s2.fillText(t.text, t.offsetX, i2.offsetY + t.offsetY), "underline" == t.textDecoration || "line-through" == t.textDecoration) {
            let e3, r2 = 1, a2 = 1, n4 = t.height, o = t.offsetX;
            switch (this.style.textAlign) {
              case "right":
              case "end":
                o -= t.width;
                break;
              case "center":
                o -= t.width / 2;
            }
            if (t.style) {
              switch (Xe$1.getTextStyle(t.style).fontWeight) {
                case "bolder":
                case "bold":
                case "700":
                case "800":
                case "900":
                  r2 = 2;
              }
            }
            n4 && (a2 = n4 / 20), e3 = "line-through" == t.textDecoration ? r2 + i2.offsetY + t.offsetY - t.height / 2 : r2 + 1.5 * a2 + i2.offsetY + t.offsetY, s2.save(), s2.beginPath(), t.fill ? s2.strokeStyle = t.fill.toCSS() : this.style.fill && this.style.fill instanceof Zt && (s2.strokeStyle = this.style.fill.toCSS()), s2.lineWidth = r2 * a2, s2.moveTo(o, e3), s2.lineTo(o + t.width, e3), s2.stroke(), s2.restore();
          }
          e2 && this.interactive && a.fillText(t.text, t.offsetX, i2.offsetY + t.offsetY), t.fill && s2.restore(), t.style && (s2.restore(), a.restore());
        });
      }), s2.restore(), a.restore();
    }
  }
  _addBounds(e) {
    if (this.visible && this.isMeasured) {
      const t = this._measure(this.getLayer());
      st(e, { x: t.left, y: t.top }), st(e, { x: t.right, y: t.bottom });
    }
  }
  _ignoreFontWeight() {
    return /apple/i.test(navigator.vendor);
  }
  _measure(e) {
    const i = e.context, s2 = this._renderer._ghostLayer.context, r = "rtl" == this.style.direction;
    this._textInfo = [];
    const a = this.style.oversizedBehavior, n2 = this.style.maxWidth, o = l(n2) && "truncate" == a, l$1 = l(n2) && ("wrap" == a || "wrap-no-break" == a);
    i.save(), s2.save(), this._prerender(e, true, this._ignoreFontWeight());
    const h2 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ", u2 = this.text.toString().replace(/\r/g, "").split(/\n/);
    let d2, f = true, p2 = 0, g = 0, m$1 = 0;
    m(u2, (e2, t) => {
      let r2;
      for (r2 = "" == e2 ? [{ type: "value", text: "" }] : Xe$1.chunk(e2, false, this.style.ignoreFormatting); r2.length > 0; ) {
        let e3 = { offsetY: m$1, ascent: 0, width: 0, height: 0, left: 0, right: 0, textChunks: [] };
        const t2 = this._measureText(h2, i), a2 = t2.actualBoundingBoxAscent + t2.actualBoundingBoxDescent;
        let u3;
        e3.height = a2, e3.ascent = t2.actualBoundingBoxAscent;
        let b$1, _3, y2, v2 = this.style.textDecoration, w = false, x = true, O = [];
        b(r2, (t3, a3) => {
          if ("format" == t3.type)
            if ("[/]" == t3.text)
              f || (i.restore(), s2.restore(), f = true), b$1 = void 0, d2 = void 0, _3 = void 0, v2 = this.style.textDecoration, y2 = void 0, u3 = t3.text;
            else {
              f || (i.restore(), s2.restore());
              let r3 = Xe$1.getTextStyle(t3.text);
              const a4 = this._getFontStyle(r3);
              i.save(), s2.save(), i.font = a4, d2 = a4, u3 = t3.text, r3.textDecoration && (v2 = r3.textDecoration), r3.fill && (b$1 = r3.fill), r3.width && (_3 = s$1(r3.width)), r3.verticalAlign && (y2 = r3.verticalAlign), f = false;
              const n3 = this._measureText(h2, i), o2 = n3.actualBoundingBoxAscent + n3.actualBoundingBoxDescent;
              o2 > e3.height && (e3.height = o2), n3.actualBoundingBoxAscent > e3.ascent && (e3.ascent = n3.actualBoundingBoxAscent);
            }
          else if ("value" == t3.type && !w) {
            const s3 = this._measureText(t3.text, i);
            let h3 = s3.actualBoundingBoxLeft + s3.actualBoundingBoxRight;
            if (o) {
              let s4 = x || this.style.breakWords || false;
              const r3 = this.style.ellipsis || "", a4 = this._measureText(r3, i), o2 = a4.actualBoundingBoxLeft + a4.actualBoundingBoxRight;
              if (e3.width + h3 > n2) {
                const a5 = n2 - e3.width - o2;
                t3.text = this._truncateText(i, t3.text, a5, s4), t3.text += r3, w = true;
              }
            } else if (l$1 && e3.width + h3 > n2) {
              const s4 = n2 - e3.width, o2 = this._truncateText(i, t3.text, s4, false, x && "wrap-no-break" != this.style.oversizedBehavior);
              if ("" == o2)
                return this.textVisible = true, false;
              O = r2.slice(a3 + 1), Dt$1(o2) != Dt$1(t3.text) && (O.unshift({ type: "value", text: t3.text.substr(o2.length) }), u3 && O.unshift({ type: "format", text: u3 })), t3.text = Dt$1(o2), r2 = [], w = true;
            }
            let c2 = 1, f2 = 1;
            if (d2 && _3 && _3 > h3) {
              const e4 = h3 / _3;
              switch (this.style.textAlign) {
                case "right":
                case "end":
                  c2 = e4;
                  break;
                case "center":
                  c2 = e4, f2 = e4;
                  break;
                default:
                  f2 = e4;
              }
              h3 = _3;
            }
            const p3 = s3.actualBoundingBoxAscent + s3.actualBoundingBoxDescent;
            p3 > e3.height && (e3.height = p3), s3.actualBoundingBoxAscent > e3.ascent && (e3.ascent = s3.actualBoundingBoxAscent), e3.width += h3, e3.left += s3.actualBoundingBoxLeft / c2, e3.right += s3.actualBoundingBoxRight / f2, e3.textChunks.push({ style: d2, fill: b$1, text: t3.text, width: h3, height: p3, left: s3.actualBoundingBoxLeft, right: s3.actualBoundingBoxRight, ascent: s3.actualBoundingBoxAscent, offsetX: 0, offsetY: 0, textDecoration: v2, verticalAlign: y2 }), x = false;
          }
          return true;
        }), this.style.lineHeight instanceof K ? (e3.height *= this.style.lineHeight.value, e3.ascent *= this.style.lineHeight.value) : (e3.height *= this.style.lineHeight || 1.2, e3.ascent *= this.style.lineHeight || 1.2), p2 < e3.left && (p2 = e3.left), g < e3.right && (g = e3.right), this._textInfo.push(e3), m$1 += e3.height, r2 = O || [];
      }
    }), f || (i.restore(), s2.restore()), m(this._textInfo, (e2, i2) => {
      let s3 = 0;
      m(e2.textChunks, (t) => {
        if (t.offsetX = s3 + t.left - e2.left, t.offsetY += e2.height - e2.height * (this.style.baselineRatio || 0.19), s3 += t.width, t.verticalAlign)
          switch (t.verticalAlign) {
            case "super":
              t.offsetY -= e2.height / 2 - t.height / 2;
              break;
            case "sub":
              t.offsetY += t.height / 2;
          }
      });
    });
    const _2 = { left: r ? -g : -p2, top: 0, right: r ? p2 : g, bottom: m$1 };
    if ("none" !== a) {
      const e2 = this._fitRatio(_2);
      if (e2 < 1)
        if ("fit" == a)
          l(this.style.minScale) && e2 < this.style.minScale ? (this.textVisible = false, _2.left = 0, _2.top = 0, _2.right = 0, _2.bottom = 0) : (this._originalScale && 1 != this._originalScale || (this._originalScale = this.scale), this.scale = e2, this.textVisible = true);
        else if ("hide" == a)
          this.textVisible = false, _2.left = 0, _2.top = 0, _2.right = 0, _2.bottom = 0;
        else {
          switch (this.style.textAlign) {
            case "right":
            case "end":
              _2.left = -n2, _2.right = 0;
              break;
            case "center":
              _2.left = -n2 / 2, _2.right = n2 / 2;
              break;
            default:
              _2.left = 0, _2.right = n2;
          }
          this.scale = this._originalScale || 1, this._originalScale = void 0, this.textVisible = true;
        }
      else
        this.scale = this._originalScale || 1, this._originalScale = void 0, this.textVisible = true;
    }
    return i.restore(), s2.restore(), _2;
  }
  _fitRatio(e) {
    const t = this.style.maxWidth, i = this.style.maxHeight;
    if (!l(t) && !l(i))
      return 1;
    const s2 = e.right - e.left, r = e.bottom - e.top;
    return Math.min(t / s2 || 1, i / r || 1);
  }
  _truncateText(e, t, i, s2 = false, r = true) {
    let a;
    do {
      if (s2)
        t = t.slice(0, -1);
      else {
        let e2 = t.replace(/[^,;:!?\\\/\s​]+[,;:!?\\\/\s​]*$/g, "");
        if ("" != e2 && e2 !== t || !r) {
          if ("" == e2)
            return t;
          t = e2;
        } else
          s2 = true;
      }
      const i2 = this._measureText(t, e);
      a = i2.actualBoundingBoxLeft + i2.actualBoundingBoxRight;
    } while (a > i && "" != t);
    return t;
  }
  _measureText(e, t) {
    let i = t.measureText(e), s2 = {};
    if (null == i.actualBoundingBoxAscent) {
      const t2 = document.createElement("div");
      t2.innerText = e, t2.style.visibility = "hidden", t2.style.position = "absolute", t2.style.top = "-1000000px;", t2.style.fontFamily = this.style.fontFamily || "", t2.style.fontSize = this.style.fontSize + "", document.body.appendChild(t2);
      const r2 = t2.getBoundingClientRect();
      document.body.removeChild(t2);
      const a = r2.height, n2 = i.width;
      s2 = { actualBoundingBoxAscent: a, actualBoundingBoxDescent: 0, actualBoundingBoxLeft: 0, actualBoundingBoxRight: n2, fontBoundingBoxAscent: a, fontBoundingBoxDescent: 0, width: n2 };
    } else
      s2 = { actualBoundingBoxAscent: i.actualBoundingBoxAscent, actualBoundingBoxDescent: i.actualBoundingBoxDescent, actualBoundingBoxLeft: i.actualBoundingBoxLeft, actualBoundingBoxRight: i.actualBoundingBoxRight, fontBoundingBoxAscent: i.actualBoundingBoxAscent, fontBoundingBoxDescent: i.actualBoundingBoxDescent, width: i.width };
    const r = i.width;
    switch (this.style.textAlign) {
      case "right":
      case "end":
        s2.actualBoundingBoxLeft = r, s2.actualBoundingBoxRight = 0;
        break;
      case "center":
        s2.actualBoundingBoxLeft = r / 2, s2.actualBoundingBoxRight = r / 2;
        break;
      default:
        s2.actualBoundingBoxLeft = 0, s2.actualBoundingBoxRight = r;
    }
    return s2;
  }
}
class Mt {
  constructor() {
    Object.defineProperty(this, "fill", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "fillOpacity", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "textAlign", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "fontFamily", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "fontSize", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "fontWeight", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "fontStyle", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "fontVariant", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "textDecoration", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "shadowColor", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "shadowBlur", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "shadowOffsetX", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "shadowOffsetY", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "shadowOpacity", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "lineHeight", { enumerable: true, configurable: true, writable: true, value: z(120) }), Object.defineProperty(this, "baselineRatio", { enumerable: true, configurable: true, writable: true, value: 0.19 }), Object.defineProperty(this, "direction", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "textBaseline", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "oversizedBehavior", { enumerable: true, configurable: true, writable: true, value: "none" }), Object.defineProperty(this, "breakWords", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "ellipsis", { enumerable: true, configurable: true, writable: true, value: "…" }), Object.defineProperty(this, "maxWidth", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "maxHeight", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "minScale", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "ignoreFormatting", { enumerable: true, configurable: true, writable: true, value: false });
  }
}
class jt extends kt {
  constructor() {
    super(...arguments), Object.defineProperty(this, "textType", { enumerable: true, configurable: true, writable: true, value: "circular" }), Object.defineProperty(this, "radius", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "startAngle", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "inside", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "orientation", { enumerable: true, configurable: true, writable: true, value: "auto" }), Object.defineProperty(this, "kerning", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_textReversed", { enumerable: true, configurable: true, writable: true, value: false });
  }
  _render(e) {
    if ("circular" === this.textType)
      this._renderCircular(e);
    else
      super._render(e);
  }
  _renderCircular(e) {
    if (this.textVisible) {
      const i = this._layer || e;
      this._prerender(i);
      const s2 = this._isInteractive(), r = i.context, a = i.dirty, n2 = this._renderer._ghostLayer.context;
      r.save(), s2 && n2.save(), this._textInfo || this._measure(i);
      let o = this.radius || 0, l2 = this.startAngle || 0, h2 = 0, u2 = this.orientation, c2 = "auto" == u2 ? "auto" : "inward" == u2;
      const d2 = this.inside, b2 = this.style.textAlign || "left", f = this.kerning || 0;
      let p2 = "left" == b2 ? 1 : -1;
      const g = !this._textReversed;
      if ("auto" == c2) {
        let e2 = 0, i2 = 0;
        m(this._textInfo, (t, i3) => {
          const s3 = l2 + t.width / (o - t.height) / 2 * -p2;
          s3 > e2 && (e2 = s3);
        }), i2 = "left" == b2 ? (e2 + h2 / 2) * ne : "right" == b2 ? (e2 - h2 / 2) * ne : l2 * ne, i2 = ue(i2), c2 = i2 >= 270 || i2 <= 90;
      }
      1 == c2 && g && (this._textInfo.reverse(), this._textReversed = true), m(this._textInfo, (e2, i2) => {
        const u3 = e2.height;
        d2 || (o += u3), (-1 == p2 && c2 || 1 == p2 && !c2) && g && e2.textChunks.reverse();
        let m$1 = l2;
        h2 = 0, "center" == b2 && (m$1 += e2.width / (o - u3) / 2 * -p2, h2 = m$1 - l2), m$1 += Math.PI * (c2 ? 0 : 1), r.save(), s2 && n2.save(), r.rotate(m$1), s2 && n2.rotate(m$1);
        let _2 = 0;
        m(e2.textChunks, (e3, t) => {
          const i3 = e3.text, l3 = e3.width;
          _2 = l3 / 2 / (o - u3) * p2, r.rotate(_2), s2 && n2.rotate(_2), e3.style && (r.save(), n2.save(), r.font = e3.style, s2 && (n2.font = e3.style)), e3.fill && (r.save(), r.fillStyle = e3.fill.toCSS()), r.textBaseline = "middle", r.textAlign = "center", s2 && (n2.textBaseline = "middle", n2.textAlign = "center"), a && r.fillText(i3, 0, (c2 ? 1 : -1) * (0 - o + u3 / 2)), s2 && n2.fillText(i3, 0, (c2 ? 1 : -1) * (0 - o + u3 / 2)), e3.fill && r.restore(), e3.style && (r.restore(), n2.restore()), _2 = (l3 / 2 + f) / (o - u3) * p2, r.rotate(_2), s2 && n2.rotate(_2);
        }), r.restore(), s2 && n2.restore(), d2 && (o -= u3);
      }), r.restore(), s2 && n2.restore();
    }
  }
  _measure(e) {
    return "circular" === this.textType ? this._measureCircular(e) : super._measure(e);
  }
  _measureCircular(e) {
    const i = e.context, s2 = this._renderer._ghostLayer.context, r = "rtl" == this.style.direction, a = this.style.oversizedBehavior, n2 = this.style.maxWidth, o = l(n2) && "truncate" == a, l$1 = this.style.ellipsis || "";
    let h2;
    this.textVisible = true, this._textInfo = [], this._textReversed = false, i.save(), s2.save(), this._prerender(e, true);
    const u2 = this.text.toString().replace(/\r/g, "").split(/\n/);
    let d2 = true, f = 0, p2 = 0;
    return m(u2, (e2, a2) => {
      let u3, b2, g, m$1 = Xe$1.chunk(e2, false, this.style.ignoreFormatting), _2 = { offsetY: p2, ascent: 0, width: 0, height: 0, left: 0, right: 0, textChunks: [] };
      m(m$1, (e3, t) => {
        if ("format" == e3.type) {
          if ("[/]" == e3.text)
            d2 || (i.restore(), s2.restore(), d2 = true), b2 = void 0, u3 = void 0, g = void 0;
          else {
            let t2 = Xe$1.getTextStyle(e3.text);
            const r2 = this._getFontStyle(t2);
            i.save(), s2.save(), i.font = r2, u3 = r2, t2.fill && (b2 = t2.fill), t2.width && (g = s$1(t2.width)), d2 = false;
          }
          o && (h2 = this._measureText(l$1, i));
        } else if ("value" == e3.type) {
          const t2 = e3.text.match(/./gu) || [];
          r && t2.reverse();
          for (let e4 = 0; e4 < t2.length; e4++) {
            const s3 = t2[e4], a3 = this._measureText(s3, i);
            let c2 = a3.width;
            u3 && g && g > c2 && (c2 = g);
            const d3 = a3.actualBoundingBoxAscent + a3.actualBoundingBoxDescent;
            if (d3 > _2.height && (_2.height = d3), a3.actualBoundingBoxAscent > _2.ascent && (_2.ascent = a3.actualBoundingBoxAscent), _2.width += c2, _2.left += a3.actualBoundingBoxLeft, _2.right += a3.actualBoundingBoxRight, _2.textChunks.push({ style: u3, fill: b2, text: s3, width: c2, height: d3 + a3.actualBoundingBoxDescent, left: a3.actualBoundingBoxLeft, right: a3.actualBoundingBoxRight, ascent: a3.actualBoundingBoxAscent, offsetX: 0, offsetY: d3, textDecoration: void 0 }), f += c2, o) {
              h2 || (h2 = this._measureText(l$1, i));
              const e5 = h2.actualBoundingBoxLeft + h2.actualBoundingBoxRight;
              if (f += e5, f + e5 > n2) {
                1 == _2.textChunks.length ? this.textVisible = false : (_2.width += e5, _2.left += h2.actualBoundingBoxLeft, _2.right += h2.actualBoundingBoxRight, _2.textChunks.push({ style: u3, fill: b2, text: l$1, width: e5, height: d3 + h2.actualBoundingBoxDescent, left: h2.actualBoundingBoxLeft, right: h2.actualBoundingBoxRight, ascent: h2.actualBoundingBoxAscent, offsetX: 0, offsetY: d3, textDecoration: void 0 }));
                break;
              }
            }
            if (r)
              break;
          }
        }
      }), this.style.lineHeight instanceof K ? _2.height *= this.style.lineHeight.value : _2.height *= this.style.lineHeight || 1.2, this._textInfo.push(_2), p2 += _2.height;
    }), d2 || (i.restore(), s2.restore()), "hide" == a && f > n2 && (this.textVisible = false), m(this._textInfo, (e2) => {
      m(e2.textChunks, (t) => {
        t.offsetY += Math.round((e2.height - t.height + (e2.ascent - t.ascent)) / 2);
      });
    }), i.restore(), s2.restore(), { left: 0, top: 0, right: 0, bottom: 0 };
  }
}
class St extends tt {
  constructor(e, t) {
    super(e), Object.defineProperty(this, "width", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "height", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "image", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "tainted", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "shadowColor", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "shadowBlur", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "shadowOffsetX", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "shadowOffsetY", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "shadowOpacity", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_imageMask", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.image = t;
  }
  _dispose() {
    super._dispose(), this._imageMask && Qe(this._imageMask);
  }
  getLocalBounds() {
    if (!this._localBounds) {
      let e = 0, t = 0;
      this.width && (e = this.width), this.height && (t = this.height), this._localBounds = { left: 0, top: 0, right: e, bottom: t }, this._addBounds(this._localBounds);
    }
    return this._localBounds;
  }
  _render(e) {
    if (super._render(e), this.image) {
      const t = this._layer || e;
      if (void 0 === this.tainted && (this.tainted = $e(this.image), t.tainted = true), this.tainted && this._renderer._omitTainted)
        return;
      if (t.dirty) {
        this.shadowColor && (t.context.shadowColor = this.shadowColor.toCSS(this.shadowOpacity || 1)), this.shadowBlur && (t.context.shadowBlur = this.shadowBlur), this.shadowOffsetX && (t.context.shadowOffsetX = this.shadowOffsetX), this.shadowOffsetY && (t.context.shadowOffsetY = this.shadowOffsetY);
        const e2 = this.width || this.image.naturalWidth, i = this.height || this.image.naturalHeight;
        t.context.drawImage(this.image, 0, 0, e2, i);
      }
      if (this.interactive && this._isInteractive()) {
        const e2 = this._getMask(this.image);
        this._renderer._ghostLayer.context.drawImage(e2, 0, 0);
      }
    }
  }
  clear() {
    super.clear(), this.image = void 0, this._imageMask = void 0;
  }
  _getMask(e) {
    if (void 0 === this._imageMask) {
      const t = this.width || e.naturalWidth, i = this.height || e.naturalHeight, s2 = document.createElement("canvas");
      s2.width = t, s2.height = i;
      const r = s2.getContext("2d");
      r.imageSmoothingEnabled = false, r.fillStyle = this._getColorId(), r.fillRect(0, 0, t, i), $e(e) || (r.globalCompositeOperation = "destination-in", r.drawImage(e, 0, 0, t, i)), this._imageMask = s2;
    }
    return this._imageMask;
  }
}
class Et {
  constructor(e, t, i, s2) {
    Object.defineProperty(this, "event", { enumerable: true, configurable: true, writable: true, value: e }), Object.defineProperty(this, "originalPoint", { enumerable: true, configurable: true, writable: true, value: t }), Object.defineProperty(this, "point", { enumerable: true, configurable: true, writable: true, value: i }), Object.defineProperty(this, "bbox", { enumerable: true, configurable: true, writable: true, value: s2 }), Object.defineProperty(this, "id", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "simulated", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "native", { enumerable: true, configurable: true, writable: true, value: true }), rt$1("touchevents") && e instanceof Touch ? this.id = e.identifier : this.id = null;
  }
}
class Tt extends I {
  constructor(i) {
    if (super(), Object.defineProperty(this, "view", { enumerable: true, configurable: true, writable: true, value: document.createElement("div") }), Object.defineProperty(this, "_layerDom", { enumerable: true, configurable: true, writable: true, value: document.createElement("div") }), Object.defineProperty(this, "layers", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "_dirtyLayers", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "defaultLayer", { enumerable: true, configurable: true, writable: true, value: this.getLayer(0) }), Object.defineProperty(this, "_ghostLayer", { enumerable: true, configurable: true, writable: true, value: new Ct() }), Object.defineProperty(this, "_patternCanvas", { enumerable: true, configurable: true, writable: true, value: document.createElement("canvas") }), Object.defineProperty(this, "_patternContext", { enumerable: true, configurable: true, writable: true, value: this._patternCanvas.getContext("2d") }), Object.defineProperty(this, "_realWidth", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_realHeight", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_calculatedWidth", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_calculatedHeight", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "resolution", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "interactionsEnabled", { enumerable: true, configurable: true, writable: true, value: true }), Object.defineProperty(this, "_listeners", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_events", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_colorId", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_colorMap", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_forceInteractive", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_omitTainted", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_hovering", { enumerable: true, configurable: true, writable: true, value: /* @__PURE__ */ new Set() }), Object.defineProperty(this, "_dragging", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "_mousedown", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "_lastPointerMoveEvent", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "tapToActivate", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "tapToActivateTimeout", { enumerable: true, configurable: true, writable: true, value: 3e3 }), Object.defineProperty(this, "_touchActive", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_touchActiveTimeout", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.resolution = i ?? window.devicePixelRatio, this.view.style.position = "absolute", this.view.setAttribute("aria-hidden", "true"), this.view.appendChild(this._layerDom), this._disposers.push(new B(() => {
      q(this._events, (e, t) => {
        t.disposer.dispose();
      }), m(this.layers, (e) => {
        Qe(e.view), e.exportableView && Qe(e.exportableView);
      }), Qe(this._ghostLayer.view), Qe(this._patternCanvas);
    })), this._disposers.push(st$1(() => {
      null == i && (this.resolution = window.devicePixelRatio);
    })), rt$1("touchevents")) {
      const e = (e2) => {
        0 !== this._dragging.length && b(this._dragging, (t) => !t.value.shouldCancelTouch() || (e2.preventDefault(), false)), this._touchActiveTimeout && this._delayTouchDeactivate();
      };
      this._disposers.push(it$1(window, "touchstart", e, { passive: false })), this._disposers.push(it$1(this.view, "touchstart", e, { passive: false })), this._disposers.push(it$1(this.view, "touchmove", () => {
        this._touchActiveTimeout && this._delayTouchDeactivate();
      }, { passive: true })), this._disposers.push(it$1(window, "click", (e2) => {
        this._touchActive = false;
      }, { passive: true })), this._disposers.push(it$1(this.view, "click", (e2) => {
        window.setTimeout(() => {
          this._touchActive = true, this._delayTouchDeactivate();
        }, 100);
      }, { passive: true }));
    }
    rt$1("wheelevents") && this._disposers.push(it$1(this.view, "wheel", (e) => {
      let t = false;
      this._hovering.forEach((e2) => {
        if (e2.wheelable)
          return t = true, false;
      }), t && e.preventDefault();
    }, { passive: false }));
  }
  _delayTouchDeactivate() {
    this._touchActiveTimeout && clearTimeout(this._touchActiveTimeout), this.tapToActivateTimeout > 0 && (this._touchActiveTimeout = window.setTimeout(() => {
      this._touchActive = false;
    }, this.tapToActivateTimeout));
  }
  get debugGhostView() {
    return !!this._ghostLayer.view.parentNode;
  }
  set debugGhostView(e) {
    e ? this._ghostLayer.view.parentNode || this.view.appendChild(this._ghostLayer.view) : this._ghostLayer.view.parentNode && this._ghostLayer.view.parentNode.removeChild(this._ghostLayer.view);
  }
  createLinearGradient(e, t, i, s2) {
    return this.defaultLayer.context.createLinearGradient(e, t, i, s2);
  }
  createRadialGradient(e, t, i, s2, r, a) {
    return this.defaultLayer.context.createRadialGradient(e, t, i, s2, r, a);
  }
  createPattern(e, t, i, s2, r) {
    return this._patternCanvas.width = s2, this._patternCanvas.height = r, this._patternContext.clearRect(0, 0, s2, r), t.renderDetached(this._patternContext), e.renderDetached(this._patternContext), this._patternContext.createPattern(this._patternCanvas, i);
  }
  makeContainer() {
    return new it(this);
  }
  makeGraphics() {
    return new Ot(this);
  }
  makeText(e, t) {
    return new kt(this, e, t);
  }
  makeTextStyle() {
    return new Mt();
  }
  makeRadialText(e, t) {
    return new jt(this, e, t);
  }
  makePicture(e) {
    return new St(this, e);
  }
  resizeLayer(e) {
    e.resize(this._calculatedWidth, this._calculatedHeight, this._calculatedWidth, this._calculatedHeight, this.resolution);
  }
  resizeGhost() {
    this._ghostLayer.resize(this._calculatedWidth, this._calculatedHeight, this._calculatedWidth, this._calculatedHeight, this.resolution);
  }
  resize(e, i, s2, r) {
    this._realWidth = e, this._realHeight = i, this._calculatedWidth = s2, this._calculatedHeight = r, m(this.layers, (e2) => {
      e2 && (e2.dirty = true, this.resizeLayer(e2));
    }), this.resizeGhost(), this.view.style.width = s2 + "px", this.view.style.height = r + "px";
  }
  createDetachedLayer(e = false) {
    const t = document.createElement("canvas"), i = t.getContext("2d", { willReadFrequently: e }), s2 = new Bt(t, i);
    return t.style.position = "absolute", t.style.top = "0px", t.style.left = "0px", s2;
  }
  getLayerByOrder(e) {
    const t = this.layers, i = t.length;
    for (let s2 = 0; s2 < i; s2++) {
      const i2 = t[s2];
      if (i2.order == e)
        return i2;
    }
  }
  getLayer(e, t = true) {
    let i = this.getLayerByOrder(e);
    if (i)
      return i;
    const s2 = this.createDetachedLayer(99 == e);
    s2.order = e, s2.visible = t, s2.visible && this.resizeLayer(s2);
    const r = this.layers;
    r.push(s2), r.sort((e2, t2) => e2.order > t2.order ? 1 : e2.order < t2.order ? -1 : 0);
    const a = r.length;
    let n2;
    for (let o = c$1(r, s2) + 1; o < a; o++)
      if (r[o].visible) {
        n2 = r[o];
        break;
      }
    return s2.visible && (void 0 === n2 ? this._layerDom.appendChild(s2.view) : this._layerDom.insertBefore(s2.view, n2.view)), s2;
  }
  render(e) {
    if (this._dirtyLayers.length = 0, m(this.layers, (e2) => {
      e2 && e2.dirty && e2.visible && (this._dirtyLayers.push(e2), e2.clear());
    }), this._ghostLayer.clear(), e.render(this.defaultLayer), this._ghostLayer.context.restore(), m(this.layers, (e2) => {
      if (e2) {
        const t = e2.context;
        t.beginPath(), t.moveTo(0, 0), t.stroke();
      }
    }), m(this._dirtyLayers, (e2) => {
      e2.context.restore(), e2.dirty = false;
    }), this._hovering.size && this._lastPointerMoveEvent) {
      const { events: e2, target: i, native: s2 } = this._lastPointerMoveEvent;
      m(e2, (e3) => {
        this._dispatchGlobalMousemove(e3, i, s2);
      });
    }
  }
  paintId(e) {
    const t = Ke(++this._colorId), i = Zt.fromHex(t).toCSS();
    return this._colorMap[i] = e, i;
  }
  _removeObject(e) {
    void 0 !== e._colorId && delete this._colorMap[e._colorId];
  }
  _adjustBoundingBox(e) {
    const t = this._ghostLayer.margin;
    return new DOMRect(-t.left, -t.top, e.width + t.left + t.right, e.height + t.top + t.bottom);
  }
  getEvent(e, t = true) {
    const i = this.view.getBoundingClientRect(), s2 = e.clientX || 0, r = e.clientY || 0, a = this._calculatedWidth / this._realWidth, n2 = this._calculatedHeight / this._realHeight, o = { x: s2 - i.left, y: r - i.top }, l2 = { x: (s2 - (t ? i.left : 0)) * a, y: (r - (t ? i.top : 0)) * n2 };
    return new Et(e, o, l2, this._adjustBoundingBox(i));
  }
  _getHitTarget(e, t, i) {
    if (0 === t.width || 0 === t.height || e.x < t.left || e.x > t.right || e.y < t.top || e.y > t.bottom)
      return;
    if (!i || !this._layerDom.contains(i))
      return;
    const s2 = this._ghostLayer.getImageData(e, t);
    if (0 === s2.data[0] && 0 === s2.data[1] && 0 === s2.data[2])
      return false;
    const r = Zt.fromRGB(s2.data[0], s2.data[1], s2.data[2]).toCSS();
    return this._colorMap[r];
  }
  _withEvents(e, t) {
    const s2 = this._events[e];
    if (void 0 !== s2) {
      s2.dispatching = true;
      try {
        t(s2);
      } finally {
        s2.dispatching = false, s2.cleanup && (s2.cleanup = false, M(s2.callbacks, (e2) => !e2.disposed), 0 === s2.callbacks.length && (s2.disposer.dispose(), delete this._events[e]));
      }
    }
  }
  _dispatchEventAll(e, i) {
    this.interactionsEnabled && this._withEvents(e, (e2) => {
      m(e2.callbacks, (e3) => {
        e3.disposed || e3.callback.call(e3.context, i);
      });
    });
  }
  _dispatchEvent(e, i, s2) {
    if (!this.interactionsEnabled)
      return false;
    let r = false;
    return this._withEvents(e, (e2) => {
      m(e2.callbacks, (e3) => {
        e3.disposed || e3.object !== i || (e3.callback.call(e3.context, s2), r = true);
      });
    }), r;
  }
  _dispatchMousedown(e, t) {
    const i = e.button;
    if (0 != i && 2 != i && 1 != i && void 0 !== i)
      return;
    const s2 = this.getEvent(e), r = this._getHitTarget(s2.originalPoint, s2.bbox, t);
    if (r) {
      const e2 = s2.id;
      let t2 = false;
      Ze(r, (i2) => {
        const r2 = { id: e2, value: i2 };
        if (this._mousedown.push(r2), !t2 && this._dispatchEvent("pointerdown", i2, s2)) {
          t2 = true;
          this._dragging.some((t3) => t3.value === i2 && t3.id === e2) || this._dragging.push(r2);
        }
        return true;
      });
    }
  }
  _dispatchGlobalMousemove(e, t, i) {
    const s2 = this.getEvent(e), r = this._getHitTarget(s2.originalPoint, s2.bbox, t);
    s2.native = i, r ? (this._hovering.forEach((e2) => {
      e2.contains(r) || (this._hovering.delete(e2), e2.cursorOverStyle && dt$1(document.body, "cursor", e2._replacedCursorStyle), this._dispatchEvent("pointerout", e2, s2));
    }), s2.native && Ze(r, (e2) => (this._hovering.has(e2) || (this._hovering.add(e2), e2.cursorOverStyle && (e2._replacedCursorStyle = ut$1(document.body, "cursor"), dt$1(document.body, "cursor", e2.cursorOverStyle)), this._dispatchEvent("pointerover", e2, s2)), true))) : (this._hovering.forEach((e2) => {
      e2.cursorOverStyle && dt$1(document.body, "cursor", e2._replacedCursorStyle), this._dispatchEvent("pointerout", e2, s2);
    }), this._hovering.clear()), this._dispatchEventAll("globalpointermove", s2);
  }
  _dispatchGlobalMouseup(e, t) {
    const i = this.getEvent(e);
    i.native = t, this._dispatchEventAll("globalpointerup", i);
  }
  _dispatchDragMove(e) {
    if (0 !== this._dragging.length) {
      const t = this.getEvent(e), i = t.id;
      this._dragging.forEach((e2) => {
        e2.id === i && this._dispatchEvent("pointermove", e2.value, t);
      });
    }
  }
  _dispatchDragEnd(e, t) {
    const i = e.button;
    let s2;
    if (0 == i || void 0 === i)
      s2 = "click";
    else if (2 == i)
      s2 = "rightclick";
    else {
      if (1 != i)
        return;
      s2 = "middleclick";
    }
    const r = this.getEvent(e), a = r.id;
    if (0 !== this._mousedown.length) {
      const e2 = this._getHitTarget(r.originalPoint, r.bbox, t);
      e2 && this._mousedown.forEach((t2) => {
        t2.id === a && t2.value.contains(e2) && this._dispatchEvent(s2, t2.value, r);
      }), this._mousedown.length = 0;
    }
    0 !== this._dragging.length && (this._dragging.forEach((e2) => {
      e2.id === a && this._dispatchEvent("pointerup", e2.value, r);
    }), this._dragging.length = 0);
  }
  _dispatchDoubleClick(e, t) {
    const i = this.getEvent(e), s2 = this._getHitTarget(i.originalPoint, i.bbox, t);
    s2 && Ze(s2, (e2) => !this._dispatchEvent("dblclick", e2, i));
  }
  _dispatchWheel(e, t) {
    const i = this.getEvent(e), s2 = this._getHitTarget(i.originalPoint, i.bbox, t);
    s2 && Ze(s2, (e2) => !this._dispatchEvent("wheel", e2, i));
  }
  _makeSharedEvent(e, t) {
    if (void 0 === this._listeners[e]) {
      const i = t();
      this._listeners[e] = new L(() => {
        delete this._listeners[e], i.dispose();
      });
    }
    return this._listeners[e].increment();
  }
  _onPointerEvent(e, t) {
    let i = false, s2 = null;
    function r() {
      s2 = null, i = false;
    }
    return new H([new B(() => {
      null !== s2 && clearTimeout(s2), r();
    }), it$1(this.view, ht$1(e), (e2) => {
      i = true, null !== s2 && clearTimeout(s2), s2 = window.setTimeout(r, 0);
    }), Je(window, e, (e2, r2) => {
      null !== s2 && (clearTimeout(s2), s2 = null), t(e2, r2, i), i = false;
    })]);
  }
  _initEvent(e) {
    switch (e) {
      case "globalpointermove":
      case "pointerover":
      case "pointerout":
        return this._makeSharedEvent("pointermove", () => {
          const e2 = (e3, i, s2) => {
            this._lastPointerMoveEvent = { events: e3, target: i, native: s2 }, m(e3, (e4) => {
              this._dispatchGlobalMousemove(e4, i, s2);
            });
          };
          return new H([this._onPointerEvent("pointerdown", e2), this._onPointerEvent("pointermove", e2)]);
        });
      case "globalpointerup":
        return this._makeSharedEvent("pointerup", () => {
          const e2 = this._onPointerEvent("pointerup", (e3, i2, s2) => {
            m(e3, (e4) => {
              this._dispatchGlobalMouseup(e4, s2);
            }), this._lastPointerMoveEvent = { events: e3, target: i2, native: s2 };
          }), i = this._onPointerEvent("pointercancel", (e3, i2, s2) => {
            m(e3, (e4) => {
              this._dispatchGlobalMouseup(e4, s2);
            }), this._lastPointerMoveEvent = { events: e3, target: i2, native: s2 };
          });
          return new B(() => {
            e2.dispose(), i.dispose();
          });
        });
      case "click":
      case "rightclick":
      case "middleclick":
      case "pointerdown":
      case "pointermove":
      case "pointerup":
        return this._makeSharedEvent("pointerdown", () => {
          const e2 = this._onPointerEvent("pointerdown", (e3, i2) => {
            m(e3, (e4) => {
              this._dispatchMousedown(e4, i2);
            });
          }), i = this._onPointerEvent("pointermove", (e3) => {
            m(e3, (e4) => {
              this._dispatchDragMove(e4);
            });
          }), s2 = this._onPointerEvent("pointerup", (e3, i2) => {
            m(e3, (e4) => {
              this._dispatchDragEnd(e4, i2);
            });
          }), r = this._onPointerEvent("pointercancel", (e3, i2) => {
            m(e3, (e4) => {
              this._dispatchDragEnd(e4, i2);
            });
          });
          return new B(() => {
            e2.dispose(), i.dispose(), s2.dispose(), r.dispose();
          });
        });
      case "dblclick":
        return this._makeSharedEvent("dblclick", () => this._onPointerEvent("dblclick", (e2, i) => {
          m(e2, (e3) => {
            this._dispatchDoubleClick(e3, i);
          });
        }));
      case "wheel":
        return this._makeSharedEvent("wheel", () => it$1(window, ht$1("wheel"), (e2) => {
          this._dispatchWheel(e2, pt$1(e2));
        }, { passive: false }));
    }
  }
  _addEvent(e, t, i, s2) {
    let r = this._events[t];
    void 0 === r && (r = this._events[t] = { disposer: this._initEvent(t), callbacks: [], dispatching: false, cleanup: false });
    const a = { object: e, context: s2, callback: i, disposed: false };
    return r.callbacks.push(a), new B(() => {
      a.disposed = true, r.dispatching ? r.cleanup = true : (y(r.callbacks, a), 0 === r.callbacks.length && (r.disposer.dispose(), delete this._events[t]));
    });
  }
  getCanvas(e, i) {
    this.render(e), i || (i = {});
    let s2 = this.resolution, r = Math.floor(this._calculatedWidth * this.resolution), a = Math.floor(this._calculatedHeight * this.resolution);
    if (i.minWidth && i.minWidth > r) {
      let e2 = i.minWidth / r;
      e2 > s2 && (s2 = e2 * this.resolution);
    }
    if (i.minHeight && i.minHeight > a) {
      let e2 = i.minHeight / a;
      e2 > s2 && (s2 = e2 * this.resolution);
    }
    if (i.maxWidth && i.maxWidth < r) {
      let e2 = i.maxWidth / r;
      e2 < s2 && (s2 = e2 * this.resolution);
    }
    if (i.maxHeight && i.maxHeight > a) {
      let e2 = i.maxHeight / a;
      e2 < s2 && (s2 = e2 * this.resolution);
    }
    i.maintainPixelRatio && (s2 /= this.resolution);
    const n2 = [];
    let o = false;
    const l2 = document.createElement("canvas");
    s2 != this.resolution && (o = true, r = r * s2 / this.resolution, a = a * s2 / this.resolution), l2.width = r, l2.height = a, l2.style.position = "fixed", l2.style.top = "-10000px", this.view.appendChild(l2), n2.push(l2);
    const h2 = l2.getContext("2d");
    let u2 = 0, c2 = 0, d2 = false;
    return m(this.layers, (e2) => {
      if (e2 && e2.visible && (e2.tainted || o)) {
        d2 = true, e2.exportableView = e2.view, e2.exportableContext = e2.context, e2.view = document.createElement("canvas"), e2.view.style.position = "fixed", e2.view.style.top = "-10000px", this.view.appendChild(e2.view), n2.push(e2.view);
        let t = 0, i2 = 0;
        e2.margin && (t += e2.margin.left || 0 + e2.margin.right || 0, i2 += e2.margin.top || 0 + e2.margin.bottom || 0), e2.view.width = r + t, e2.view.height = a + i2, e2.context = e2.view.getContext("2d"), e2.dirty = true, e2.scale = s2;
      }
    }), d2 && (this._omitTainted = true, this.render(e), this._omitTainted = false), m(this.layers, (e2) => {
      if (e2 && e2.visible) {
        let t = 0, i2 = 0;
        e2.margin && (t = -(e2.margin.left || 0) * this.resolution, i2 = -(e2.margin.top || 0) * this.resolution), h2.drawImage(e2.view, t, i2), e2.exportableView && (e2.view = e2.exportableView, e2.exportableView = void 0), e2.exportableContext && (e2.context = e2.exportableContext, e2.exportableContext = void 0), u2 < e2.view.clientWidth && (u2 = e2.view.clientWidth), c2 < e2.view.clientHeight && (c2 = e2.view.clientHeight), e2.scale = void 0;
      }
    }), l2.style.width = u2 + "px", l2.style.height = c2 + "px", m(n2, (e2) => {
      e2.style.position = "", e2.style.top = "", this.view.removeChild(e2);
    }), l2;
  }
}
class Ct {
  constructor() {
    Object.defineProperty(this, "view", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "context", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "margin", { enumerable: true, configurable: true, writable: true, value: { left: 0, right: 0, top: 0, bottom: 0 } }), Object.defineProperty(this, "_width", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_height", { enumerable: true, configurable: true, writable: true, value: 0 }), this.view = document.createElement("canvas"), this.context = this.view.getContext("2d", { alpha: false, willReadFrequently: true }), this.context.imageSmoothingEnabled = false, this.view.style.position = "absolute", this.view.style.top = "0px", this.view.style.left = "0px";
  }
  resize(e, t, i, s2, r) {
    e += this.margin.left + this.margin.right, t += this.margin.top + this.margin.bottom, i += this.margin.left + this.margin.right, s2 += this.margin.top + this.margin.bottom, this.view.style.left = -this.margin.left + "px", this.view.style.top = -this.margin.top + "px", this._width = Math.floor(e * r), this._height = Math.floor(t * r), this.view.width = this._width, this.view.style.width = i + "px", this.view.height = this._height, this.view.style.height = s2 + "px";
  }
  getImageData(e, t) {
    return this.context.getImageData(Math.round((e.x - t.left) / t.width * this._width), Math.round((e.y - t.top) / t.height * this._height), 1, 1);
  }
  setMargin(e) {
    this.margin.left = 0, this.margin.right = 0, this.margin.top = 0, this.margin.bottom = 0, m(e, (e2) => {
      e2.margin && (this.margin.left = Math.max(this.margin.left, e2.margin.left), this.margin.right = Math.max(this.margin.right, e2.margin.right), this.margin.top = Math.max(this.margin.top, e2.margin.top), this.margin.bottom = Math.max(this.margin.bottom, e2.margin.bottom));
    });
  }
  clear() {
    this.context.save(), this.context.fillStyle = "#000", this.context.fillRect(0, 0, this._width, this._height);
  }
}
class Bt {
  constructor(e, t) {
    Object.defineProperty(this, "view", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "context", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "tainted", { enumerable: true, configurable: true, writable: true, value: true }), Object.defineProperty(this, "margin", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "order", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "visible", { enumerable: true, configurable: true, writable: true, value: true }), Object.defineProperty(this, "width", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "height", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "scale", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "dirty", { enumerable: true, configurable: true, writable: true, value: true }), Object.defineProperty(this, "exportableView", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "exportableContext", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_width", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_height", { enumerable: true, configurable: true, writable: true, value: 0 }), this.view = e, this.context = t;
  }
  resize(e, t, i, s2, r) {
    null != this.width && (e = this.width, i = this.width), null != this.height && (t = this.height, s2 = this.height), this.margin ? (e += this.margin.left + this.margin.right, t += this.margin.top + this.margin.bottom, i += this.margin.left + this.margin.right, s2 += this.margin.top + this.margin.bottom, this.view.style.left = -this.margin.left + "px", this.view.style.top = -this.margin.top + "px") : (this.view.style.left = "0px", this.view.style.top = "0px"), this._width = Math.floor(e * r), this._height = Math.floor(t * r), this.view.width = this._width, this.view.style.width = i + "px", this.view.height = this._height, this.view.style.height = s2 + "px";
  }
  clear() {
    this.context.save(), this.context.clearRect(0, 0, this._width, this._height);
  }
}
function Dt(e, t) {
  null == e ? requestAnimationFrame(t) : setTimeout(() => {
    requestAnimationFrame(t);
  }, 1e3 / e);
}
class At {
  constructor(e, i = {}, s2) {
    if (Object.defineProperty(this, "dom", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_inner", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_settings", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_isDirty", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_isDirtyParents", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_dirty", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_dirtyParents", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_dirtyBounds", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_dirtyPositions", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_ticker", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "_tickers", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "_updateTick", { enumerable: true, configurable: true, writable: true, value: true }), Object.defineProperty(this, "events", { enumerable: true, configurable: true, writable: true, value: new N() }), Object.defineProperty(this, "animationTime", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "_animations", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "_renderer", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_rootContainer", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "container", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "tooltipContainer", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_tooltipContainerSettings", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_tooltip", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "language", { enumerable: true, configurable: true, writable: true, value: Le.new(this, {}) }), Object.defineProperty(this, "locale", { enumerable: true, configurable: true, writable: true, value: Ae }), Object.defineProperty(this, "utc", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "timezone", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "fps", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "numberFormatter", { enumerable: true, configurable: true, writable: true, value: Se.new(this, {}) }), Object.defineProperty(this, "dateFormatter", { enumerable: true, configurable: true, writable: true, value: Be.new(this, {}) }), Object.defineProperty(this, "durationFormatter", { enumerable: true, configurable: true, writable: true, value: De.new(this, {}) }), Object.defineProperty(this, "tabindex", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_tabindexes", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "_a11yD", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_focusElementDirty", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_focusElementContainer", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_focusedSprite", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_isShift", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_keyboardDragPoint", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_tooltipElementContainer", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_readerAlertElement", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_logo", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_tooltipDiv", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "nonce", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "interfaceColors", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "verticalLayout", { enumerable: true, configurable: true, writable: true, value: Ge$1.new(this, {}) }), Object.defineProperty(this, "horizontalLayout", { enumerable: true, configurable: true, writable: true, value: ze$1.new(this, {}) }), Object.defineProperty(this, "gridLayout", { enumerable: true, configurable: true, writable: true, value: Ye$1.new(this, {}) }), Object.defineProperty(this, "_paused", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "autoResize", { enumerable: true, configurable: true, writable: true, value: true }), Object.defineProperty(this, "_fontHash", { enumerable: true, configurable: true, writable: true, value: "" }), Object.defineProperty(this, "_isDisposed", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_disposers", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "_resizeSensorDisposer", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_tooltips", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "_htmlElementContainer", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_htmlEnabledContainers", { enumerable: true, configurable: true, writable: true, value: [] }), !s2)
      throw new Error("You cannot use `new Class()`, instead use `Class.new()`");
    let r, a;
    if (this._settings = i, 0 == i.accessible && (this._a11yD = true), null == i.useSafeResolution && (i.useSafeResolution = true), i.useSafeResolution && (r = ft$1()), this._renderer = new Tt(r), a = e instanceof HTMLElement ? e : document.getElementById(e), m(we.rootElements, (e2) => {
      if (e2.dom === a)
        throw new Error("You cannot have multiple Roots on the same DOM node");
    }), this.interfaceColors = je.new(this, {}), null === a)
      throw new Error("Could not find HTML element with id `" + e + "`");
    this.dom = a;
    let n2 = document.createElement("div");
    n2.style.position = "relative", n2.style.width = "100%", n2.style.height = "100%", a.appendChild(n2);
    const o = i.tooltipContainerBounds;
    o && (this._tooltipContainerSettings = o), this._inner = n2, this._updateComputedStyles(), we.rootElements.push(this);
  }
  static new(e, t) {
    const i = new At(e, t, true);
    return i._init(), i;
  }
  moveDOM(e) {
    let t;
    if (t = e instanceof HTMLElement ? e : document.getElementById(e), t) {
      for (; this.dom.childNodes.length > 0; )
        t.appendChild(this.dom.childNodes[0]);
      this.dom = t, this._initResizeSensor(), this.resize();
    }
  }
  _handleLogo() {
    if (this._logo) {
      const e = this.dom.offsetWidth, t = this.dom.offsetHeight;
      e <= 150 || t <= 60 ? this._logo.hide() : this._logo.show();
    }
  }
  _showBranding() {
    if (!this._logo) {
      const e = this.tooltipContainer.children.push(Qe$1.new(this, { interactive: true, interactiveChildren: false, position: "absolute", setStateOnChildren: true, paddingTop: 9, paddingRight: 9, paddingBottom: 9, paddingLeft: 9, scale: 0.6, y: z(100), centerY: Y, tooltipText: "Created using amCharts 5", tooltipX: Y, cursorOverStyle: "pointer", background: Ve$1.new(this, { fill: $t(4671320), fillOpacity: 0, tooltipY: 5 }) })), t = u.new(this, { pointerOrientation: "horizontal", paddingTop: 4, paddingRight: 7, paddingBottom: 4, paddingLeft: 7 });
      t.label.setAll({ fontSize: 12 }), t.get("background").setAll({ fill: this.interfaceColors.get("background"), stroke: this.interfaceColors.get("grid"), strokeOpacity: 0.3 }), e.set("tooltip", t), e.events.on("click", () => {
        window.open("https://www.amcharts.com/", "_blank");
      }), e.states.create("hover", {});
      e.children.push(We$1.new(this, { stroke: $t(13421772), strokeWidth: 3, svgPath: "M5 25 L13 25h13.6c3.4 0 6 0 10.3-4.3s5.2-12 8.6-12c3.4 0 4.3 8.6 7.7 8.6M83.4 25H79.8c-3.4 0-6 0-10.3-4.3s-5.2-12-8.6-12-4.3 8.6-7.7 8.6" })).states.create("hover", { stroke: $t(3976191) });
      e.children.push(We$1.new(this, { stroke: $t(8947848), strokeWidth: 3, svgPath: "M83.4 25h-31C37 25 39.5 4.4 28.4 4.4S18.9 24.2 4.3 25H0" })).states.create("hover", { stroke: $t(4671320) }), this._logo = e, this._handleLogo();
    }
  }
  _getRealSize() {
    return this.dom.getBoundingClientRect();
  }
  _getCalculatedSize(e) {
    return this._settings.calculateSize ? this._settings.calculateSize(e) : { width: e.width, height: e.height };
  }
  _init() {
    const e = this._settings;
    false !== e.accessible && (e.focusable && (this._inner.setAttribute("focusable", "true"), this._inner.setAttribute("tabindex", this.tabindex + "")), e.ariaLabel && this._inner.setAttribute("aria-label", e.ariaLabel));
    const t = this._renderer, i = this._getRealSize(), s$12 = this._getCalculatedSize(i), r = Math.floor(s$12.width), a = Math.floor(s$12.height), n2 = Math.floor(i.width), o = Math.floor(i.height), l2 = Qe$1.new(this, { visible: true, width: r, height: a });
    this._rootContainer = l2, this._rootContainer._defaultThemes.push(s.new(this));
    const h2 = l2.children.push(Qe$1.new(this, { visible: true, width: Y, height: Y }));
    this.container = h2, t.resize(n2, o, r, a), this._inner.appendChild(t.view), this._initResizeSensor();
    const u2 = document.createElement("div");
    if (this._htmlElementContainer = u2, u2.className = "am5-html-container", u2.style.position = "absolute", u2.style.pointerEvents = "none", this._tooltipContainerSettings || (u2.style.overflow = "hidden"), this._inner.appendChild(u2), true !== this._a11yD) {
      const e2 = document.createElement("div");
      e2.className = "am5-reader-container", e2.setAttribute("role", "alert"), e2.style.position = "absolute", e2.style.width = "1px", e2.style.height = "1px", e2.style.overflow = "hidden", e2.style.clip = "rect(1px, 1px, 1px, 1px)", this._readerAlertElement = e2, this._inner.appendChild(this._readerAlertElement);
      const i2 = document.createElement("div");
      i2.className = "am5-focus-container", i2.style.position = "absolute", i2.style.pointerEvents = "none", i2.style.top = "0px", i2.style.left = "0px", i2.style.overflow = "hidden", i2.style.width = r + "px", i2.style.height = a + "px", i2.setAttribute("role", "graphics-document"), _t$1(i2, false), this._focusElementContainer = i2, this._inner.appendChild(this._focusElementContainer);
      const s2 = document.createElement("div");
      this._tooltipElementContainer = s2, s2.className = "am5-tooltip-container", this._inner.appendChild(s2), rt$1("keyboardevents") && (this._disposers.push(it$1(window, "keydown", (e3) => {
        16 == e3.keyCode ? this._isShift = true : 9 == e3.keyCode && (this._isShift = e3.shiftKey);
      })), this._disposers.push(it$1(window, "keyup", (e3) => {
        16 == e3.keyCode && (this._isShift = false);
      })), this._disposers.push(it$1(i2, "click", () => {
        const e3 = this._focusedSprite;
        if (e3) {
          const i3 = t.getEvent(new MouseEvent("click"));
          e3.events.dispatch("click", { type: "click", originalEvent: i3.event, point: i3.point, simulated: true, target: e3 });
        }
      })), this._disposers.push(it$1(i2, "keydown", (e3) => {
        const i3 = this._focusedSprite;
        if (i3) {
          27 == e3.keyCode && (at$1(), this._focusedSprite = void 0);
          let s3 = 0, r2 = 0;
          switch (e3.keyCode) {
            case 13:
              e3.preventDefault();
              const a2 = t.getEvent(new MouseEvent("click"));
              return void i3.events.dispatch("click", { type: "click", originalEvent: a2.event, point: a2.point, simulated: true, target: i3 });
            case 37:
              s3 = -6;
              break;
            case 39:
              s3 = 6;
              break;
            case 38:
              r2 = -6;
              break;
            case 40:
              r2 = 6;
              break;
            default:
              return;
          }
          if (0 != s3 || 0 != r2) {
            if (e3.preventDefault(), !i3.isDragging()) {
              this._keyboardDragPoint = { x: 0, y: 0 };
              const e4 = t.getEvent(new MouseEvent("mousedown", { clientX: 0, clientY: 0 }));
              i3.events.isEnabled("pointerdown") && i3.events.dispatch("pointerdown", { type: "pointerdown", originalEvent: e4.event, point: e4.point, simulated: true, target: i3 });
            }
            const a2 = this._keyboardDragPoint;
            a2.x += s3, a2.y += r2;
            const n3 = t.getEvent(new MouseEvent("mousemove", { clientX: a2.x, clientY: a2.y }), false);
            i3.events.isEnabled("globalpointermove") && i3.events.dispatch("globalpointermove", { type: "globalpointermove", originalEvent: n3.event, point: n3.point, simulated: true, target: i3 });
          }
        }
      })), this._disposers.push(it$1(i2, "keyup", (e3) => {
        if (this._focusedSprite) {
          const i3 = this._focusedSprite, s3 = e3.keyCode;
          switch (s3) {
            case 37:
            case 39:
            case 38:
            case 40:
              if (i3.isDragging()) {
                const e4 = this._keyboardDragPoint, s4 = t.getEvent(new MouseEvent("mouseup", { clientX: e4.x, clientY: e4.y }));
                return i3.events.isEnabled("globalpointerup") && i3.events.dispatch("globalpointerup", { type: "globalpointerup", originalEvent: s4.event, point: s4.point, simulated: true, target: i3 }), void (this._keyboardDragPoint = void 0);
              }
              if (i3.get("focusableGroup")) {
                const e4 = i3.get("focusableGroup"), t2 = this._tabindexes.filter((t3) => t3.get("focusableGroup") == e4 && false !== t3.getPrivate("focusable"));
                let r2 = t2.indexOf(i3);
                const a2 = t2.length - 1;
                r2 += 39 == s3 || 40 == s3 ? 1 : -1, r2 < 0 ? r2 = a2 : r2 > a2 && (r2 = 0), ot$1(t2[r2].getPrivate("focusElement").dom);
              }
          }
        }
      })));
    }
    this._startTicker(), this.setThemes([]), this._addTooltip(), this._hasLicense() || this._showBranding();
  }
  _initResizeSensor() {
    this._resizeSensorDisposer && this._resizeSensorDisposer.dispose(), this._resizeSensorDisposer = new Me(this.dom, () => {
      this.autoResize && this.resize();
    }), this._disposers.push(this._resizeSensorDisposer);
  }
  resize() {
    const e = this._getRealSize(), t = this._getCalculatedSize(e), i = Math.floor(t.width), s2 = Math.floor(t.height);
    if (i > 0 && s2 > 0) {
      const t2 = Math.floor(e.width), r = Math.floor(e.height), a = this._htmlElementContainer;
      if (a.style.width = i + "px", a.style.height = s2 + "px", true !== this._a11yD) {
        const e2 = this._focusElementContainer;
        e2.style.width = i + "px", e2.style.height = s2 + "px";
      }
      this._renderer.resize(t2, r, i, s2);
      const n2 = this._rootContainer;
      n2.setPrivate("width", i), n2.setPrivate("height", s2), this._render(), this._handleLogo();
    }
  }
  _render() {
    this._renderer.render(this._rootContainer._display), this._focusElementDirty && (this._updateCurrentFocus(), this._focusElementDirty = false);
  }
  _runTickers(e) {
    m(this._tickers, (t) => {
      t(e);
    });
  }
  _runAnimations(e) {
    M(this._animations, (t) => t._runAnimation(e));
  }
  _runDirties() {
    let e = {};
    for (; this._isDirtyParents; )
      this._isDirtyParents = false, $(this._dirtyParents).forEach((t2) => {
        const i2 = this._dirtyParents[t2];
        delete this._dirtyParents[t2], i2.isDisposed() || (e[i2.uid] = i2, i2._prepareChildren());
      });
    $(e).forEach((t2) => {
      e[t2]._updateChildren();
    });
    const t = [];
    $(this._dirty).forEach((e2) => {
      const i2 = this._dirty[e2];
      i2.isDisposed() ? delete this._dirty[i2.uid] : (t.push(i2), i2._beforeChanged());
    }), t.forEach((e2) => {
      e2._changed(), delete this._dirty[e2.uid], e2._clearDirty();
    }), this._isDirty = false;
    const i = {}, s2 = [];
    $(this._dirtyBounds).forEach((e2) => {
      const t2 = this._dirtyBounds[e2];
      delete this._dirtyBounds[e2], t2.isDisposed() || (i[t2.uid] = t2.depth(), s2.push(t2));
    }), this._positionHTMLElements(), s2.sort((e2, t2) => De$1(i[t2.uid], i[e2.uid])), s2.forEach((e2) => {
      e2._updateBounds();
    });
    const r = this._dirtyPositions;
    $(r).forEach((e2) => {
      const t2 = r[e2];
      delete r[e2], t2.isDisposed() || t2._updatePosition();
    }), t.forEach((e2) => {
      e2._afterChanged();
    });
  }
  _renderFrame(e) {
    return !this._updateTick || (this.events.isEnabled("framestarted") && this.events.dispatch("framestarted", { type: "framestarted", target: this, timestamp: e }), this._checkComputedStyles(), this._runTickers(e), this._runAnimations(e), this._runDirties(), this._render(), this._positionHTMLElements(), this.events.isEnabled("frameended") && this.events.dispatch("frameended", { type: "frameended", target: this, timestamp: e }), 0 === this._tickers.length && 0 === this._animations.length && !this._isDirty);
  }
  _runTicker(e, t) {
    if (!this.isDisposed()) {
      this.animationTime = e;
      this._renderFrame(e) ? (this._ticker = null, this.animationTime = null) : this._paused || (t ? this._ticker : Dt(this.fps, this._ticker));
    }
  }
  _runTickerNow(e = 1e4) {
    if (!this.isDisposed()) {
      const t = performance.now() + e;
      for (; ; ) {
        const e2 = performance.now();
        if (e2 >= t) {
          this.animationTime = null;
          break;
        }
        this.animationTime = e2;
        if (this._renderFrame(e2)) {
          this.animationTime = null;
          break;
        }
      }
    }
  }
  _startTicker() {
    null === this._ticker && (this.animationTime = null, this._ticker = (e) => {
      this._runTicker(e);
    }, Dt(this.fps, this._ticker));
  }
  get updateTick() {
    return this._updateTick;
  }
  set updateTick(e) {
    this._updateTick = e, e && this._startTicker();
  }
  _addDirtyEntity(e) {
    void 0 === this._dirty[e.uid] && (this._isDirty = true, this._dirty[e.uid] = e, this._startTicker());
  }
  _addDirtyParent(e) {
    void 0 === this._dirtyParents[e.uid] && (this._isDirty = true, this._isDirtyParents = true, this._dirtyParents[e.uid] = e, this._startTicker());
  }
  _addDirtyBounds(e) {
    void 0 === this._dirtyBounds[e.uid] && (this._isDirty = true, this._dirtyBounds[e.uid] = e, this._startTicker());
  }
  _addDirtyPosition(e) {
    void 0 === this._dirtyPositions[e.uid] && (this._isDirty = true, this._dirtyPositions[e.uid] = e, this._startTicker());
  }
  _addAnimation(e) {
    -1 === this._animations.indexOf(e) && (this._animations.push(e), this._startTicker());
  }
  _markDirty() {
    this._isDirty = true;
  }
  _markDirtyRedraw() {
    this.events.once("frameended", () => {
      this._isDirty = true, this._startTicker();
    });
  }
  eachFrame(e) {
    return this._tickers.push(e), this._startTicker(), new B(() => {
      y(this._tickers, e);
    });
  }
  markDirtyGlobal(e) {
    e || (e = this.container), e.walkChildren((e2) => {
      e2 instanceof Qe$1 && this.markDirtyGlobal(e2), e2.markDirty(), e2.markDirtyBounds();
    });
  }
  width() {
    return Math.floor(this._getCalculatedSize(this._getRealSize()).width);
  }
  height() {
    return Math.floor(this._getCalculatedSize(this._getRealSize()).height);
  }
  dispose() {
    this._isDisposed || (this._isDisposed = true, this._rootContainer.dispose(), this._renderer.dispose(), this.horizontalLayout.dispose(), this.verticalLayout.dispose(), this.interfaceColors.dispose(), m(this._disposers, (e) => {
      e.dispose();
    }), this._inner && et$1(this._inner), v(we.rootElements, this));
  }
  isDisposed() {
    return this._isDisposed;
  }
  readerAlert(e) {
    true !== this._a11yD && (this._readerAlertElement.innerHTML = Ot$1(e));
  }
  setThemes(e) {
    this._rootContainer.set("themes", e);
    const t = this.tooltipContainer;
    t && t._applyThemes();
    const i = this.interfaceColors;
    i && i._applyThemes();
  }
  _addTooltip() {
    if (!this.tooltipContainer) {
      const e = this._tooltipContainerSettings, t = this._rootContainer.children.push(Qe$1.new(this, { position: "absolute", isMeasured: false, width: Y, height: Y, layer: e ? 35 : 30, layerMargin: e || void 0 }));
      this.tooltipContainer = t;
      const i = u.new(this, {});
      this.container.set("tooltip", i), i.hide(0), this._tooltip = i;
    }
  }
  _registerTabindexOrder(e) {
    1 != this._a11yD && (e.get("focusable") ? P(this._tabindexes, e) : v(this._tabindexes, e), this._invalidateTabindexes());
  }
  _unregisterTabindexOrder(e) {
    1 != this._a11yD && (v(this._tabindexes, e), this._invalidateTabindexes());
  }
  _invalidateTabindexes() {
    if (1 == this._a11yD)
      return;
    this._tabindexes.sort((e2, t) => {
      const i = e2.get("tabindexOrder", 0), s2 = t.get("tabindexOrder", 0);
      return i == s2 ? 0 : i > s2 ? 1 : -1;
    });
    const e = [];
    m(this._tabindexes, (t, i) => {
      t.getPrivate("focusElement") ? this._moveFocusElement(i, t) : this._makeFocusElement(i, t);
      const s2 = t.get("focusableGroup");
      s2 && false !== t.getPrivate("focusable") && (-1 !== e.indexOf(s2) ? t.getPrivate("focusElement").dom.setAttribute("tabindex", "-1") : e.push(s2));
    });
  }
  _updateCurrentFocus() {
    1 != this._a11yD && this._focusedSprite && (this._decorateFocusElement(this._focusedSprite), this._positionFocusElement(this._focusedSprite));
  }
  _decorateFocusElement(e, t) {
    if (1 == this._a11yD)
      return;
    if (t || (t = e.getPrivate("focusElement").dom), !t)
      return;
    const i = e.get("role");
    i ? t.setAttribute("role", i) : t.removeAttribute("role");
    const s2 = e.get("ariaLabel");
    if (s2) {
      const i2 = $e$1(e, s2);
      t.setAttribute("aria-label", i2);
    } else
      t.removeAttribute("aria-label");
    const r = e.get("ariaLive");
    r ? t.setAttribute("aria-live", r) : t.removeAttribute("aria-live");
    const a = e.get("ariaChecked");
    null != a ? t.setAttribute("aria-checked", a ? "true" : "false") : t.removeAttribute("aria-checked"), e.get("ariaHidden") ? t.setAttribute("aria-hidden", "true") : t.removeAttribute("aria-hidden");
    const n2 = e.get("ariaOrientation");
    n2 ? t.setAttribute("aria-orientation", n2) : t.removeAttribute("aria-orientation");
    const o = e.get("ariaValueNow");
    o ? t.setAttribute("aria-valuenow", o) : t.removeAttribute("aria-valuenow");
    const l2 = e.get("ariaValueMin");
    l2 ? t.setAttribute("aria-valuemin", l2) : t.removeAttribute("aria-valuemin");
    const h2 = e.get("ariaValueMax");
    h2 ? t.setAttribute("aria-valuemax", h2) : t.removeAttribute("aria-valuemax");
    const u2 = e.get("ariaValueText");
    u2 ? t.setAttribute("aria-valuetext", u2) : t.removeAttribute("aria-valuetext");
    const c2 = e.get("ariaControls");
    c2 ? t.setAttribute("aria-controls", c2) : t.removeAttribute("aria-controls"), e.get("visible") && 0 !== e.get("opacity") && "tooltip" != e.get("role") && !e.isHidden() && false !== e.getPrivate("focusable") ? ("-1" != t.getAttribute("tabindex") && t.setAttribute("tabindex", "" + this.tabindex), t.removeAttribute("aria-hidden")) : (t.removeAttribute("tabindex"), t.setAttribute("aria-hidden", "true"));
  }
  _makeFocusElement(e, t) {
    if (t.getPrivate("focusElement") || 1 == this._a11yD)
      return;
    const i = document.createElement("div");
    "tooltip" != t.get("role") && (i.tabIndex = this.tabindex), i.style.position = "absolute", _t$1(i, false);
    const s2 = [];
    t.setPrivate("focusElement", { dom: i, disposers: s2 }), this._decorateFocusElement(t), s2.push(it$1(i, "focus", (t2) => {
      this._handleFocus(t2, e);
    })), s2.push(it$1(i, "blur", (t2) => {
      this._handleBlur(t2, e);
    })), this._moveFocusElement(e, t);
  }
  _removeFocusElement(e) {
    if (1 == this._a11yD)
      return;
    v(this._tabindexes, e);
    const i = e.getPrivate("focusElement");
    if (i) {
      this._focusElementContainer.removeChild(i.dom), m(i.disposers, (e2) => {
        e2.dispose();
      });
    }
  }
  _hideFocusElement(e) {
    if (1 == this._a11yD)
      return;
    e.getPrivate("focusElement").dom.style.display = "none";
  }
  _moveFocusElement(e, t) {
    if (1 == this._a11yD)
      return;
    const i = this._focusElementContainer, s2 = t.getPrivate("focusElement").dom;
    if (s2 === this._focusElementContainer.children[e])
      return;
    const r = this._focusElementContainer.children[e + 1];
    r ? i.insertBefore(s2, r) : i.append(s2);
  }
  _positionFocusElement(e) {
    if (1 == this._a11yD || null == e)
      return;
    const t = e.globalBounds();
    let i = t.right == t.left ? e.width() : t.right - t.left, s2 = t.top == t.bottom ? e.height() : t.bottom - t.top, r = t.left - 2, a = t.top - 2;
    i < 0 && (r += i, i = Math.abs(i)), s2 < 0 && (a += s2, s2 = Math.abs(s2));
    const n2 = e.getPrivate("focusElement").dom;
    n2.style.top = a + "px", n2.style.left = r + "px", n2.style.width = i + 4 + "px", n2.style.height = s2 + 4 + "px";
  }
  _handleFocus(e, t) {
    if (1 == this._a11yD)
      return;
    const i = this._tabindexes[t];
    i.isVisibleDeep() ? (this._positionFocusElement(i), this._focusedSprite = i, i.events.isEnabled("focus") && i.events.dispatch("focus", { type: "focus", originalEvent: e, target: i })) : this._focusNext(e.target, this._isShift ? -1 : 1);
  }
  _focusNext(e, t) {
    if (1 == this._a11yD)
      return;
    const i = Array.from(document.querySelectorAll(["a[href]", "area[href]", "button:not([disabled])", "details", "input:not([disabled])", "iframe:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", '[contentEditable=""]', '[contentEditable="true"]', '[contentEditable="TRUE"]', '[tabindex]:not([tabindex^="-"])'].join(",")));
    let s2 = i.indexOf(e) + t;
    s2 < 0 ? s2 = i.length - 1 : s2 >= i.length && (s2 = 0), i[s2].focus();
  }
  _handleBlur(e, t) {
    if (1 == this._a11yD)
      return;
    const i = this._focusedSprite;
    i && i.events.isEnabled("blur") && i.events.dispatch("blur", { type: "blur", originalEvent: e, target: i }), this._focusedSprite = void 0;
  }
  updateTooltip(e) {
    if (1 == this._a11yD)
      return;
    const t = Ot$1(e._getText());
    let i = e.getPrivate("tooltipElement");
    "tooltip" == e.get("role") && "" != t ? (i || (i = this._makeTooltipElement(e)), i.innerHTML != t && (i.innerHTML = t)) : i && (i.remove(), e.removePrivate("tooltipElement"));
  }
  _makeTooltipElement(e) {
    const t = this._tooltipElementContainer, i = document.createElement("div");
    return i.style.position = "absolute", i.style.width = "1px", i.style.height = "1px", i.style.overflow = "hidden", i.style.clip = "rect(1px, 1px, 1px, 1px)", _t$1(i, false), this._decorateFocusElement(e, i), t.append(i), e.setPrivate("tooltipElement", i), i;
  }
  _removeTooltipElement(e) {
    if (1 == this._a11yD)
      return;
    const t = e.getPrivate("tooltipElement");
    if (t) {
      const e2 = t.parentElement;
      e2 && e2.removeChild(t);
    }
  }
  _invalidateAccessibility(e) {
    if (1 == this._a11yD)
      return;
    this._focusElementDirty = true;
    const t = e.getPrivate("focusElement");
    e.get("focusable") ? t && (this._decorateFocusElement(e), this._positionFocusElement(e)) : t && this._removeFocusElement(e);
  }
  focused(e) {
    return this._focusedSprite === e;
  }
  documentPointToRoot(e) {
    const t = this._getRealSize(), i = this._getCalculatedSize(t), s2 = i.width / t.width, r = i.height / t.height;
    return { x: (e.x - t.left) * s2, y: (e.y - t.top) * r };
  }
  rootPointToDocument(e) {
    const t = this._getRealSize(), i = this._getCalculatedSize(t), s2 = i.width / t.width, r = i.height / t.height;
    return { x: e.x / s2 + t.left, y: e.y / r + t.top };
  }
  addDisposer(e) {
    return this._disposers.push(e), e;
  }
  _updateComputedStyles() {
    const e = window.getComputedStyle(this.dom);
    let t = "";
    q(e, (e2, i2) => {
      h(e2) && e2.match(/^font/) && (t += i2);
    });
    const i = t != this._fontHash;
    return i && (this._fontHash = t), i;
  }
  _checkComputedStyles() {
    this._updateComputedStyles() && this._invalidateLabelBounds(this.container);
  }
  _invalidateLabelBounds(e) {
    e instanceof Qe$1 ? e.children.each((e2) => {
      this._invalidateLabelBounds(e2);
    }) : e instanceof ti && e.markDirtyBounds();
  }
  _hasLicense() {
    for (let e = 0; e < we.licenses.length; e++)
      if (we.licenses[e].match(/^AM5C.{5,}/i))
        return true;
    return false;
  }
  _licenseApplied() {
    this._logo && this._logo.set("forceHidden", true);
  }
  get debugGhostView() {
    return this._renderer.debugGhostView;
  }
  set debugGhostView(e) {
    this._renderer.debugGhostView = e;
  }
  set tapToActivate(e) {
    this._renderer.tapToActivate = e;
  }
  get tapToActivate() {
    return this._renderer.tapToActivate;
  }
  set tapToActivateTimeout(e) {
    this._renderer.tapToActivateTimeout = e;
  }
  get tapToActivateTimeout() {
    return this._renderer.tapToActivateTimeout;
  }
  _makeHTMLElement(e) {
    const t = this._htmlElementContainer, i = document.createElement("div");
    return e.setPrivate("htmlElement", i), i.style.position = "absolute", i.style.overflow = "auto", i.style.boxSizing = "border-box", _t$1(i, e.get("interactive", false)), e.events.isEnabled("click") && (_t$1(i, true), this._disposers.push(it$1(i, "click", (t2) => {
      const i2 = this._renderer.getEvent(t2);
      e.events.dispatch("click", { type: "click", originalEvent: i2.event, point: i2.point, simulated: false, target: e });
    }))), this._positionHTMLElement(e), t.append(i), P(this._htmlEnabledContainers, e), i;
  }
  _positionHTMLElements() {
    m(this._htmlEnabledContainers, (e) => {
      this._positionHTMLElement(e);
    });
  }
  _positionHTMLElement(e) {
    const i = e.getPrivate("htmlElement");
    if (i) {
      m(["paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "minWidth", "minHeight", "maxWidth", "maxHeight"], (t) => {
        const s3 = e.get(t);
        i.style[t] = s3 ? s3 + "px" : "";
      });
      const s2 = e.compositeOpacity();
      setTimeout(() => {
        i.style.opacity = s2 + "";
      }, 10);
      const r = e.isVisibleDeep();
      r && (i.style.display = "block");
      const a = e.globalBounds();
      i.style.top = a.top + "px", i.style.left = a.left + "px";
      const n2 = e.get("width"), o = e.get("height");
      let l2 = 0, h2 = 0;
      if (n2 && (l2 = e.width()), o && (h2 = e.height()), n2 && o)
        e.removePrivate("minWidth"), e.removePrivate("minHeight");
      else {
        i.style.position = "fixed", i.style.width = "", i.style.height = "";
        const t = i.getBoundingClientRect();
        i.style.position = "absolute", l2 = t.width, h2 = t.height, e._adjustedLocalBounds = { left: 0, right: 0, top: 0, bottom: 0 }, e.setPrivate("minWidth", l2), e.setPrivate("minHeight", h2);
      }
      l2 > 0 && (i.style.minWidth = l2 + "px"), h2 > 0 && (i.style.minHeight = h2 + "px"), r && 0 != s2 || (i.style.display = "none");
    }
  }
  _setHTMLContent(e, t) {
    let i = e.getPrivate("htmlElement");
    i || (i = this._makeHTMLElement(e)), i.innerHTML != t && (i.innerHTML = t);
  }
  _removeHTMLContent(e) {
    let t = e.getPrivate("htmlElement");
    t && this._htmlElementContainer.removeChild(t), v(this._htmlEnabledContainers, e);
  }
}
Pe$1("AM5C241025748");
const Lt = "en-us", zt = /* @__PURE__ */ new Map([["ar", () => import("./chunk-brCxnTaz.js")], ["bg-bg", () => import("./chunk-FiuL3tg7.js")], ["bs-ba", () => import("./chunk-x8kHhyJs.js")], ["ca-es", () => import("./chunk-t3Lw8fWg.js")], ["cs-cz", () => import("./chunk-1QLNvnK2.js")], ["da-dk", () => import("./chunk-FeUeauWm.js")], ["de-de", () => import("./chunk-DPaxFeEk.js")], ["de-ch", () => import("./chunk-92z-rNJ4.js")], ["el-gr", () => import("./chunk-UFo0j0xg.js")], ["en-us", () => import("./chunk-zqTOL5it.js")], ["en-ca", () => import("./chunk-D8asrRuj.js")], ["es-es", () => import("./chunk-jXwq6gUw.js")], ["et-ee", () => import("./chunk-r3osRIn_.js")], ["fi-fi", () => import("./chunk-wff7UQIB.js")], ["fr-fr", () => import("./chunk-We77LulA.js")], ["he-il", () => import("./chunk-AKvpM_DR.js")], ["hr-hr", () => import("./chunk-zSxgn4gB.js")], ["hu-hu", () => import("./chunk-SyugPV65.js")], ["id-id", () => import("./chunk-plwBYLVv.js")], ["it-it", () => import("./chunk-xJelD8bf.js")], ["ja-jp", () => import("./chunk-kca33GcV.js")], ["ko-kr", () => import("./chunk-MPrXOYuJ.js")], ["lt-lt", () => import("./chunk-0eoFkKeW.js")], ["lv-lv", () => import("./chunk-XscRrK4j.js")], ["nb-no", () => import("./chunk-51EiNgLT.js")], ["nl-nl", () => import("./chunk-GoYG6P_t.js")], ["pl-pl", () => import("./chunk-NmH4HJRN.js")], ["pt-br", () => import("./chunk-6MSOXp22.js")], ["pt-pt", () => import("./chunk-rBdVEgAB.js")], ["ro-ro", () => import("./chunk-5Tv-MoPM.js")], ["ru-ru", () => import("./chunk-6FnZLpX2.js")], ["sk-sk", () => import("./chunk-oeUhmhb2.js")], ["sl-sl", () => import("./chunk-jusRLrKv.js")], ["sr-rs", () => import("./chunk-zt-fqydR.js")], ["sv-se", () => import("./chunk-qYMsy8fD.js")], ["th-th", () => import("./chunk-cP9MT4A8.js")], ["tr-tr", () => import("./chunk-t-QiVPCM.js")], ["uk-ua", () => import("./chunk-l9WTtRnJ.js")], ["vi-vn", () => import("./chunk-_ctb8ZO0.js")], ["zh-cn", () => import("./chunk-vckq-TON.js")], ["zh-hk", () => import("./chunk-Iqt5hC5p.js")], ["zh-tw", () => import("./chunk-Iqt5hC5p.js")]]);
function Ft(e) {
  const t = e.split("-")[0].toLowerCase();
  let i = null;
  for (const s2 of zt.keys())
    if (s2.startsWith(t)) {
      i = s2;
      break;
    }
  return i;
}
function Ht(e) {
  return e ? zt.has(e.toLowerCase()) ? e.toLowerCase() : Ft(e) || Lt : Lt;
}
async function Yt(e, t = c()) {
  const i = At.new(e);
  return i.locale = (await zt.get(Ht(t))()).default, i;
}
export {
  Yt as createRoot
};
