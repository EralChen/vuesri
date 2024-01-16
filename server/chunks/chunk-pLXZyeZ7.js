import { aK as c, aL as o$1 } from "./chunk-KFNcxJaF.js";
const n = { ar: [".", ","], bg: [",", " "], bs: [",", "."], ca: [",", "."], cs: [",", " "], da: [",", "."], de: [",", "."], "de-ch": [".", "’"], el: [",", "."], en: [".", ","], "en-au": [".", ","], es: [",", "."], "es-mx": [".", ","], et: [",", " "], fi: [",", " "], fr: [",", " "], "fr-ch": [",", " "], he: [".", ","], hi: [".", ",", "#,##,##0.###"], hr: [",", "."], hu: [",", " "], id: [",", "."], it: [",", "."], "it-ch": [".", "’"], ja: [".", ","], ko: [".", ","], lt: [",", " "], lv: [",", " "], mk: [",", "."], nb: [",", " "], nl: [",", "."], pl: [",", " "], pt: [",", "."], "pt-pt": [",", " "], ro: [",", "."], ru: [",", " "], sk: [",", " "], sl: [",", "."], sr: [",", "."], sv: [",", " "], th: [".", ","], tr: [",", "."], uk: [",", " "], vi: [",", "."], zh: [".", ","] };
function r(e = c()) {
  let r2 = (e = e.toLowerCase()) in n;
  if (!r2) {
    const t = e.split("-");
    t.length > 1 && t[0] in n && (e = t[0], r2 = true), r2 || (e = "en");
  }
  const [s2, l2, o2 = "#,##0.###"] = n[e];
  return { decimal: s2, group: l2, pattern: o2 };
}
function s(e, t) {
  const n2 = r((t = { ...t }).locale);
  t.customs = n2;
  const s2 = t.pattern || n2.pattern;
  return isNaN(e) || Math.abs(e) === 1 / 0 ? null : o(e, s2, t);
}
const l = /[#0,]*[#0](?:\.0*#*)?/;
function o(e, t, n2) {
  const r2 = (n2 = n2 || {}).customs.group, s2 = n2.customs.decimal, o2 = t.split(";"), c2 = o2[0];
  if ((t = o2[e < 0 ? 1 : 0] || "-" + c2).includes("%"))
    e *= 100;
  else if (t.includes("‰"))
    e *= 1e3;
  else {
    if (t.includes("¤"))
      throw new Error("currency notation not supported");
    if (t.includes("E"))
      throw new Error("exponential notation not supported");
  }
  const a2 = l, p2 = c2.match(a2);
  if (!p2)
    throw new Error("unable to find a number expression in pattern: " + t);
  return false === n2.fractional && (n2.places = 0), t.replace(a2, i(e, p2[0], { decimal: s2, group: r2, places: n2.places, round: n2.round }));
}
function i(e, t, n2) {
  true === (n2 = n2 || {}).places && (n2.places = 0), n2.places === 1 / 0 && (n2.places = 6);
  const r2 = t.split("."), s2 = "string" == typeof n2.places && n2.places.indexOf(",");
  let l2 = n2.places;
  s2 ? l2 = n2.places.substring(s2 + 1) : +l2 >= 0 || (l2 = (r2[1] || []).length), n2.round < 0 || (e = Number(e.toFixed(Number(l2))));
  const o2 = String(Math.abs(e)).split("."), i2 = o2[1] || "";
  if (r2[1] || n2.places) {
    s2 && (n2.places = n2.places.substring(0, s2));
    const e2 = void 0 !== n2.places ? n2.places : r2[1] && r2[1].lastIndexOf("0") + 1;
    +e2 > i2.length && (o2[1] = i2.padEnd(Number(e2), "0")), +l2 < i2.length && (o2[1] = i2.substr(0, Number(l2)));
  } else
    o2[1] && o2.pop();
  const c2 = r2[0].replace(",", "");
  let a2 = c2.indexOf("0");
  -1 !== a2 && (a2 = c2.length - a2, a2 > o2[0].length && (o2[0] = o2[0].padStart(a2, "0")), c2.includes("#") || (o2[0] = o2[0].substr(o2[0].length - a2)));
  let p2, u2, d2 = r2[0].lastIndexOf(",");
  if (-1 !== d2) {
    p2 = r2[0].length - d2 - 1;
    const e2 = r2[0].substr(0, d2);
    d2 = e2.lastIndexOf(","), -1 !== d2 && (u2 = e2.length - d2 - 1);
  }
  const g2 = [];
  for (let f2 = o2[0]; f2; ) {
    const e2 = f2.length - p2;
    g2.push(e2 > 0 ? f2.substr(e2) : f2), f2 = e2 > 0 ? f2.slice(0, e2) : "", u2 && (p2 = u2, u2 = void 0);
  }
  return o2[0] = g2.reverse().join(n2.group || ","), o2.join(n2.decimal || ".");
}
function a(t) {
  const n2 = r((t = t || {}).locale), s2 = t.pattern || n2.pattern, o2 = n2.group, i2 = n2.decimal;
  let c2 = 1;
  if (s2.includes("%"))
    c2 /= 100;
  else if (s2.includes("‰"))
    c2 /= 1e3;
  else if (s2.includes("¤"))
    throw new Error("currency notation not supported");
  const a2 = s2.split(";");
  1 === a2.length && a2.push("-" + a2[0]);
  const p2 = g(a2, (n3) => (n3 = "(?:" + o$1(n3, ".") + ")").replace(l, (e) => {
    const n4 = { signed: false, separator: t.strict ? o2 : [o2, ""], fractional: t.fractional, decimal: i2, exponent: false }, r2 = e.split(".");
    let s3 = t.places;
    1 === r2.length && 1 !== c2 && (r2[1] = "###"), 1 === r2.length || 0 === s3 ? n4.fractional = false : (void 0 === s3 && (s3 = t.pattern ? r2[1].lastIndexOf("0") + 1 : 1 / 0), s3 && null == t.fractional && (n4.fractional = true), !t.places && +s3 < r2[1].length && (s3 += "," + r2[1].length), n4.places = s3);
    const l2 = r2[0].split(",");
    return l2.length > 1 && (n4.groupSize = l2.pop().length, l2.length > 1 && (n4.groupSize2 = l2.pop().length)), "(" + u(n4) + ")";
  }), true);
  return { regexp: p2.replaceAll(/[\xa0 ]/g, "[\\s\\xa0]"), group: o2, decimal: i2, factor: c2 };
}
function p(e, t) {
  const n2 = a(t), r2 = new RegExp("^" + n2.regexp + "$").exec(e);
  if (!r2)
    return NaN;
  let s2 = r2[1];
  if (!r2[1]) {
    if (!r2[2])
      return NaN;
    s2 = r2[2], n2.factor *= -1;
  }
  return s2 = s2.replaceAll(new RegExp("[" + n2.group + "\\s\\xa0]", "g"), "").replace(n2.decimal, "."), Number(s2) * n2.factor;
}
function u(e) {
  "places" in (e = e || {}) || (e.places = 1 / 0), "string" != typeof e.decimal && (e.decimal = "."), "fractional" in e && !String(e.places).startsWith("0") || (e.fractional = [true, false]), "exponent" in e || (e.exponent = [true, false]), "eSigned" in e || (e.eSigned = [true, false]);
  const t = d(e), n2 = g(e.fractional, (t2) => {
    let n3 = "";
    return t2 && 0 !== e.places && (n3 = "\\" + e.decimal, e.places === 1 / 0 ? n3 = "(?:" + n3 + "\\d+)?" : n3 += "\\d{" + e.places + "}"), n3;
  }, true);
  let r2 = t + n2;
  return n2 && (r2 = "(?:(?:" + r2 + ")|(?:" + n2 + "))"), r2 + g(e.exponent, (t2) => t2 ? "([eE]" + d({ signed: e.eSigned }) + ")" : "");
}
function d(t) {
  "signed" in (t = t || {}) || (t.signed = [true, false]), "separator" in t ? "groupSize" in t || (t.groupSize = 3) : t.separator = "";
  return g(t.signed, (e) => e ? "[-+]" : "", true) + g(t.separator, (n2) => {
    if (!n2)
      return "(?:\\d+)";
    " " === (n2 = o$1(n2)) ? n2 = "\\s" : " " === n2 && (n2 = "\\s\\xa0");
    const r2 = t.groupSize, s2 = t.groupSize2;
    if (s2) {
      const e = "(?:0|[1-9]\\d{0," + (s2 - 1) + "}(?:[" + n2 + "]\\d{" + s2 + "})*[" + n2 + "]\\d{" + r2 + "})";
      return r2 - s2 > 0 ? "(?:" + e + "|(?:0|[1-9]\\d{0," + (r2 - 1) + "}))" : e;
    }
    return "(?:0|[1-9]\\d{0," + (r2 - 1) + "}(?:[" + n2 + "]\\d{" + r2 + "})*)";
  }, true);
}
const g = (e, t, n2) => {
  if (!(e instanceof Array))
    return t(e);
  const r2 = [];
  for (let s2 = 0; s2 < e.length; s2++)
    r2.push(t(e[s2]));
  return f(r2.join("|"), Boolean(n2));
}, f = (e, t) => "(" + (t ? "?:" : "") + e + ")";
export {
  a,
  p,
  s
};
