import { lN as d$1, h6 as K, lO as e, aO as s$1, fb as d$2, cd as b$1, aT as s$2, bT as I, aQ as U$1, dL as Z, dM as i, h5 as H, h8 as i$1, d_ as n, bO as G, b9 as w, lP as M, lQ as W, aB as f$1, cs as t$1, ct as e$1, dT as g$1, bS as bt, dN as o$1 } from "./chunk-ejFG4zJ0.js";
import { t } from "./chunk-H58sM9yM.js";
import { m as m$1 } from "./chunk-HoJyfhBe.js";
import { x as x$1 } from "./chunk-pZO3UCge.js";
import { $ } from "./chunk-P_v7gizd.js";
import { a as a$1 } from "./chunk-hqbnpNKg.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-XuSN4Qyd.js";
import "./chunk-E1ai5rf5.js";
import "./chunk-ISSNghJ_.js";
import "./chunk-stE6bWuO.js";
import "./chunk-KyVc0M84.js";
import "./chunk-KfB6QvrM.js";
const r = /^\s*"([\S\s]*)"\s*$/, l = /""/g, o = "\n", s = [",", " ", ";", "|", "	"];
function* u(e2, t2, n2) {
  let i2 = 0;
  for (; i2 <= e2.length; ) {
    const r2 = e2.indexOf(t2, i2), l2 = e2.substring(i2, r2 > -1 ? r2 : void 0);
    i2 += l2.length + t2.length, n2 && !l2.trim() || (yield l2);
  }
}
function c(e2) {
  const t2 = e2.includes("\r\n") ? "\r\n" : o;
  return u(e2, t2, true);
}
function d(e2, t2) {
  return u(e2, t2, false);
}
function f(e2, t2, n2) {
  e2 = e2.trim(), t2 = t2?.trim();
  const i2 = [], r2 = Array.from(/* @__PURE__ */ new Set([n2?.delimiter, ...s])).filter((e3) => null != e3);
  for (const o2 of r2) {
    const n3 = m(e2, o2).length, r3 = m(t2, o2).length ?? n3;
    n3 > 1 && i2.push({ weight: Math.min(n3, r3), delimiter: o2 });
  }
  const l2 = i2.sort(({ weight: e3 }, { weight: t3 }) => t3 - e3).map(({ delimiter: e3 }) => e3);
  for (const o2 of l2) {
    const t3 = h(g(e2, o2).names, n2?.longitudeField, n2?.latitudeField);
    if (t3.longitudeFieldName && t3.latitudeFieldName)
      return { delimiter: o2, locationInfo: t3 };
  }
  return { delimiter: l2[0], locationInfo: null };
}
function* a(e2, t2, n2, i2 = () => /* @__PURE__ */ Object.create(null)) {
  const s2 = c(e2);
  s2.next();
  let u2 = "", f2 = "", a2 = 0, g2 = i2(), m2 = 0;
  e:
    for (const c2 of s2) {
      const e3 = d(c2, n2);
      for (const o2 of e3)
        if (u2 += f2 + o2, f2 = "", a2 += p(o2), a2 % 2 == 0) {
          if (a2 > 0) {
            const e4 = r.exec(u2);
            if (!e4) {
              g2 = i2(), m2 = 0, u2 = "", a2 = 0;
              continue e;
            }
            g2[t2[m2]] = e4[1].replaceAll(l, '"'), m2++;
          } else
            g2[t2[m2]] = u2, m2++;
          u2 = "", a2 = 0;
        } else
          f2 = n2;
      0 === a2 ? (yield g2, g2 = i2(), m2 = 0) : f2 = o;
    }
}
function g(e2, t2) {
  const i2 = m(e2, t2).filter((e3) => null != e3), r2 = i2.map((e3) => d$1(e3));
  for (let n2 = r2.length - 1; n2 >= 0; n2--)
    r2[n2] || (r2.splice(n2, 1), i2.splice(n2, 1));
  return { names: r2, aliases: i2 };
}
function m(e2, t2) {
  if (!e2?.length)
    return [];
  const n2 = [];
  let i2 = "", o2 = "", s2 = 0;
  const u2 = d(e2, t2);
  for (const c2 of u2)
    if (i2 += o2 + c2, o2 = "", s2 += p(c2), s2 % 2 == 0) {
      if (s2 > 0) {
        const e3 = r.exec(i2);
        e3 && n2.push(e3[1].replaceAll(l, '"'));
      } else
        n2.push(i2);
      i2 = "", s2 = 0;
    } else
      o2 = t2;
  return n2;
}
function p(e2) {
  let t2 = 0, n2 = 0;
  for (n2 = e2.indexOf('"', n2); n2 >= 0; )
    t2++, n2 = e2.indexOf('"', n2 + 1);
  return t2;
}
function h(e2, t2, i2) {
  t2 = d$1(t2)?.toLowerCase(), i2 = d$1(i2)?.toLowerCase();
  const r2 = e2.map((e3) => e3.toLowerCase()), l2 = t2 ? e2[r2.indexOf(t2)] : null, o2 = i2 ? e2[r2.indexOf(i2)] : null;
  return { longitudeFieldName: l2 || e2[r2.indexOf(F.find((e3) => r2.includes(e3)))], latitudeFieldName: o2 || e2[r2.indexOf(y.find((e3) => r2.includes(e3)))] };
}
function b(e2, t2, n2, r2, l2) {
  const o2 = [], s2 = a(e2, n2, t2), u2 = [];
  for (const i2 of s2) {
    if (10 === u2.length)
      break;
    u2.push(i2);
  }
  for (let c2 = 0; c2 < n2.length; c2++) {
    const e3 = n2[c2], t3 = r2[c2];
    if (e3 === l2.longitudeFieldName || e3 === l2.latitudeFieldName)
      o2.push({ name: e3, type: "esriFieldTypeDouble", alias: t3 });
    else {
      let n3;
      switch (N(u2.map((t4) => t4[e3]))) {
        case "integer":
          n3 = "esriFieldTypeInteger";
          break;
        case "double":
          n3 = "esriFieldTypeDouble";
          break;
        case "date":
          n3 = "esriFieldTypeDate";
          break;
        default:
          n3 = "esriFieldTypeString";
      }
      o2.push({ name: e3, type: n3, alias: t3, length: K(n3) });
    }
  }
  return o2;
}
function N(t2) {
  if (!t2.length)
    return "string";
  const n2 = /[^+\-.,0-9]/;
  return t2.map((t3) => {
    if ("" !== t3) {
      if (!n2.test(t3)) {
        let e2 = x(t3);
        if (!isNaN(e2))
          return /[.,]/.test(t3) || !Number.isInteger(e2) || e2 > 214783647 || e2 < -214783648 ? "double" : "integer";
        if (t3.includes("E")) {
          if (e2 = Number(t3), !Number.isNaN(e2))
            return "double";
          if (t3.includes(",") && (t3 = t3.replace(",", "."), e2 = Number(t3), !Number.isNaN(e2)))
            return "double";
        }
      }
      return e(t3) ? "date" : "string";
    }
  }).reduce((e2, t3) => void 0 === e2 ? t3 : void 0 === t3 ? e2 : e2 === t3 ? t3 : "string" === e2 || "string" === t3 ? "string" : "double" === e2 || "double" === t3 ? "double" : void 0);
}
const x = function() {
  const e2 = a$1(), n2 = new RegExp("^" + e2.regexp + "$"), i2 = new RegExp("[" + e2.group + "\\s\\xa0]", "g"), r2 = e2.factor;
  return (t2) => {
    const l2 = n2.exec(t2);
    if (e2.factor = r2, !l2)
      return NaN;
    let o2 = l2[1];
    if (!l2[1]) {
      if (!l2[2])
        return NaN;
      o2 = l2[2], e2.factor *= -1;
    }
    return o2 = o2.replace(i2, "").replace(e2.decimal, "."), +o2 * e2.factor;
  };
}(), y = ["lat", "latitude", "latitude83", "latdecdeg", "lat_dd", "y", "ycenter", "point_y"], F = ["lon", "lng", "long", "longitude", "longitude83", "longdecdeg", "long_dd", "x", "xcenter", "point_x"];
const O = o$1("esriGeometryPoint"), v = ["csv"], D = [0, 0];
class k {
  constructor(e2, t2) {
    this.x = e2, this.y = t2;
  }
}
class P {
  constructor() {
    this._queryEngine = null, this._snapshotFeatures = async (e2) => {
      const t2 = await this._fetch(e2);
      return this._createFeatures(t2);
    };
  }
  destroy() {
    this._queryEngine?.destroy(), this._queryEngine = null;
  }
  async load(e2, t2 = {}) {
    this._loadOptions = e2;
    const [i2] = await Promise.all([this._fetch(t2.signal), this._checkProjection(e2?.parsingOptions?.spatialReference)]), n2 = R(i2, e2);
    this._locationInfo = n2.locationInfo, this._delimiter = n2.delimiter, this._queryEngine = this._createQueryEngine(n2);
    const r2 = await this._createFeatures(i2);
    this._queryEngine.featureStore.addMany(r2);
    const { fullExtent: s2, timeExtent: o2 } = await this._queryEngine.fetchRecomputedExtents();
    if (n2.layerDefinition.extent = s2, o2) {
      const { start: e3, end: t3 } = o2;
      n2.layerDefinition.timeInfo.timeExtent = [e3, t3];
    }
    return n2;
  }
  async applyEdits() {
    throw new s$1("csv-layer:editing-not-supported", "applyEdits() is not supported on CSVLayer");
  }
  async queryFeatures(e2 = {}, t2 = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQuery(e2, t2.signal);
  }
  async queryFeatureCount(e2 = {}, t2 = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForCount(e2, t2.signal);
  }
  async queryObjectIds(e2 = {}, t2 = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForIds(e2, t2.signal);
  }
  async queryExtent(e2 = {}, t2 = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForExtent(e2, t2.signal);
  }
  async querySnapping(e2, t2 = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForSnapping(e2, t2.signal);
  }
  async refresh(e2) {
    this._loadOptions.customParameters = e2, this._snapshotTask?.abort(), this._snapshotTask = d$2(this._snapshotFeatures), this._snapshotTask.promise.then((e3) => {
      this._queryEngine.featureStore.clear(), e3 && this._queryEngine.featureStore.addMany(e3);
    }, (e3) => {
      this._queryEngine.featureStore.clear(), b$1(e3) || s$2.getLogger("esri.layers.CSVLayer").error(new s$1("csv-layer:refresh", "An error occurred during refresh", { error: e3 }));
    }), await this._waitSnapshotComplete();
    const { fullExtent: i2, timeExtent: o2 } = await this._queryEngine.fetchRecomputedExtents();
    return { extent: i2, timeExtent: o2 };
  }
  async _waitSnapshotComplete() {
    if (this._snapshotTask && !this._snapshotTask.finished) {
      try {
        await this._snapshotTask.promise;
      } catch {
      }
      return this._waitSnapshotComplete();
    }
  }
  async _fetch(t2) {
    const { url: i2, customParameters: r2 } = this._loadOptions;
    if (!i2)
      throw new s$1("csv-layer:invalid-source", "url not defined");
    const s2 = I(i2);
    return (await U$1(s2.path, { query: { ...s2.query, ...r2 }, responseType: "text", signal: t2 })).data;
  }
  _createQueryEngine(e2) {
    const { objectIdField: t2, fields: i$12, extent: n2, timeInfo: r2 } = e2.layerDefinition, s2 = new m$1({ geometryType: "esriGeometryPoint", hasM: false, hasZ: false });
    return new $({ fieldsIndex: Z.fromLayerJSON({ fields: i$12, dateFieldsTimeReference: { timeZoneIANA: i } }), geometryType: "esriGeometryPoint", hasM: false, hasZ: false, timeInfo: r2, objectIdField: t2, spatialReference: n2.spatialReference || { wkid: 4326 }, cacheSpatialQueries: true, featureStore: s2 });
  }
  async _createFeatures(e2) {
    const { latitudeFieldName: t$2, longitudeFieldName: n$1 } = this._locationInfo, { objectIdField: r2, fieldsIndex: s2, spatialReference: o2 } = this._queryEngine;
    let a$12 = [];
    const u2 = [], h2 = s2.fields.filter((e3) => e3.name !== r2).map((e3) => e3.name);
    let g2 = 0;
    const I2 = {};
    for (const i2 of s2.fields)
      if ("esriFieldTypeOID" !== i2.type && "esriFieldTypeGlobalID" !== i2.type) {
        const e3 = H(i2);
        void 0 !== e3 && (I2[i2.name] = e3);
      }
    const w$1 = a(e2, h2, this._delimiter, i$1(I2, r2));
    for (const l2 of w$1) {
      const e3 = this._parseCoordinateValue(l2[t$2]), o3 = this._parseCoordinateValue(l2[n$1]);
      if (null != o3 && null != e3 && !isNaN(e3) && !isNaN(o3)) {
        l2[t$2] = e3, l2[n$1] = o3;
        for (const e4 in l2)
          if (e4 !== t$2 && e4 !== n$1) {
            if (s2.isDateField(e4))
              l2[e4] = n(l2[e4]);
            else if (s2.isNumericField(e4)) {
              const t2 = x(l2[e4]);
              isNaN(t2) ? l2[e4] = null : l2[e4] = t2;
            }
          }
        l2[r2] = g2, g2++, a$12.push(new k(o3, e3)), u2.push(l2);
      }
    }
    if (!G({ wkid: 4326 }, o2))
      if (w(o2))
        for (const i2 of a$12)
          [i2.x, i2.y] = M(i2.x, i2.y, D);
      else
        a$12 = W(t, a$12, f$1.WGS84, o2, null, null);
    const E = [];
    for (let i2 = 0; i2 < a$12.length; i2++) {
      const { x: e3, y: t2 } = a$12[i2], n2 = u2[i2];
      n2[r2] = i2 + 1, E.push(new t$1(new e$1([], [e3, t2]), n2, null, n2[r2]));
    }
    return E;
  }
  _parseCoordinateValue(e2) {
    if (null == e2 || "" === e2)
      return null;
    let t2 = x(e2);
    return (isNaN(t2) || Math.abs(t2) > 181) && (t2 = parseFloat(e2)), t2;
  }
  async _checkProjection(e2) {
    try {
      await x$1(g$1, e2);
    } catch {
      throw new s$1("csv-layer:projection-not-supported", "Projection not supported");
    }
  }
}
function R(e2, t2) {
  const i$12 = t2.parsingOptions || {}, r2 = { delimiter: i$12.delimiter, layerDefinition: null, locationInfo: { latitudeFieldName: i$12.latitudeField, longitudeFieldName: i$12.longitudeField } }, s2 = r2.layerDefinition = { name: bt(t2.url, v) || "csv", dateFieldsTimeReference: { timeZoneIANA: i }, drawingInfo: O, geometryType: "esriGeometryPoint", objectIdField: null, fields: [], timeInfo: i$12.timeInfo, extent: { xmin: Number.POSITIVE_INFINITY, ymin: Number.POSITIVE_INFINITY, xmax: Number.NEGATIVE_INFINITY, ymax: Number.NEGATIVE_INFINITY, spatialReference: i$12.spatialReference || { wkid: 4326 } } }, o2 = c(e2), l2 = o2.next().value?.trim(), m2 = o2.next().value?.trim();
  if (!l2)
    throw new s$1("csv-layer:empty-csv", "CSV is empty", { csv: e2 });
  const { delimiter: c$1, locationInfo: d2 } = f(l2, m2, i$12);
  if (!c$1)
    throw new s$1("csv-layer:invalid-delimiter", "Unable to detect the delimiter from CSV", { firstLine: l2, secondLine: m2, parsingOptions: i$12 });
  if (!d2)
    throw new s$1("csv-layer:location-fields-not-found", "Unable to identify latitude and longitude fields from the CSV file", { firstLine: l2, secondLine: m2, parsingOptions: i$12 });
  r2.locationInfo = d2, r2.delimiter = c$1;
  const { names: u2, aliases: p2 } = g(l2, c$1), f$12 = b(e2, r2.delimiter, u2, p2, r2.locationInfo);
  if (i$12.fields?.length) {
    const e3 = new Z(i$12.fields);
    for (const t3 of f$12) {
      const i2 = e3.get(t3.name);
      i2 && Object.assign(t3, i2);
    }
  }
  if (!f$12.some((e3) => "esriFieldTypeOID" === e3.type && (s2.objectIdField = e3.name, true))) {
    const e3 = { name: "__OBJECTID", alias: "__OBJECTID", type: "esriFieldTypeOID", editable: false, nullable: false };
    s2.objectIdField = e3.name, f$12.unshift(e3);
  }
  s2.fields = f$12;
  const y2 = new Z(s2.fields);
  if (r2.locationInfo && (r2.locationInfo.latitudeFieldName = y2.get(r2.locationInfo.latitudeFieldName).name, r2.locationInfo.longitudeFieldName = y2.get(r2.locationInfo.longitudeFieldName).name), s2.timeInfo) {
    const e3 = s2.timeInfo;
    if (e3.startTimeField) {
      const t3 = y2.get(e3.startTimeField);
      t3 ? (e3.startTimeField = t3.name, t3.type = "esriFieldTypeDate") : e3.startTimeField = null;
    }
    if (e3.endTimeField) {
      const t3 = y2.get(e3.endTimeField);
      t3 ? (e3.endTimeField = t3.name, t3.type = "esriFieldTypeDate") : e3.endTimeField = null;
    }
    if (e3.trackIdField) {
      const t3 = y2.get(e3.trackIdField);
      e3.trackIdField = t3 ? t3.name : null;
    }
    e3.startTimeField || e3.endTimeField || (s2.timeInfo = null);
  }
  return r2;
}
export {
  P as default
};
