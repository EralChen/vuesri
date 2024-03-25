import { gH as p$1, gI as d$1, q3 as i, q4 as n, q5 as n$1, gR as n$2, aV as e, aX as y, q6 as n$3, cX as y$1, da as r, aC as M, aB as f$1, iS as c, a_ as c$1, db as f$2, gX as v, bJ as c$2, cV as o$1, jC as i$1, gD as f$3, bI as R$1, gW as s, gV as n$4, aQ as U$1, bZ as S$1, f9 as k, eV as v$1, aO as s$1, cm as e$1, bQ as V, cr as q$1, d8 as y$2, eL as r$1, j3 as W, b0 as has, q7 as o$2, q8 as o$3, f5 as n$5, cU as s$2, f2 as b, ee as i$2, f4 as p$2 } from "./chunk-ejFG4zJ0.js";
function o(e2, r2) {
  const { dpi: n2, gdbVersion: s2, geometry: o2, geometryPrecision: a2, height: m2, historicMoment: p2, layerOption: f2, mapExtent: y2, maxAllowableOffset: u2, returnFieldName: c2, returnGeometry: d2, returnUnformattedValues: g, returnZ: x, spatialReference: h, timeExtent: b2, tolerance: E, width: O } = e2.toJSON(), { dynamicLayers: S2, layerDefs: j, layerIds: N } = l(e2), $ = null != r2?.geometry ? r2.geometry : null, I = { historicMoment: p2, geometryPrecision: a2, maxAllowableOffset: u2, returnFieldName: c2, returnGeometry: d2, returnUnformattedValues: g, returnZ: x, tolerance: E }, R2 = $ && $.toJSON() || o2;
  I.imageDisplay = `${O},${m2},${n2}`, s2 && (I.gdbVersion = s2), R2 && (delete R2.spatialReference, I.geometry = JSON.stringify(R2), I.geometryType = p$1(R2));
  const U2 = h ?? R2?.spatialReference ?? y2?.spatialReference;
  if (U2 && (I.sr = d$1(U2)), I.time = b2 ? [b2.start, b2.end].join(",") : null, y2) {
    const { xmin: e3, ymin: t, xmax: r3, ymax: i2 } = y2;
    I.mapExtent = `${e3},${t},${r3},${i2}`;
  }
  return j && (I.layerDefs = j), S2 && !j && (I.dynamicLayers = S2), I.layers = "popup" === f2 ? "visible" : f2, N && !S2 && (I.layers += `:${N.join(",")}`), I;
}
function l(e2) {
  const { mapExtent: t, floors: i$12, width: o2, sublayers: l2, layerIds: m2, layerOption: p2, gdbVersion: f2 } = e2, y2 = l2?.find((e3) => null != e3.layer)?.layer?.serviceSublayers, u2 = "popup" === p2, c2 = {}, d2 = i({ extent: t, width: o2, spatialReference: t?.spatialReference }), g = [], x = (e3) => {
    const t2 = 0 === d2, r2 = 0 === e3.minScale || d2 <= e3.minScale, i2 = 0 === e3.maxScale || d2 >= e3.maxScale;
    if (e3.visible && (t2 || r2 && i2))
      if (e3.sublayers)
        e3.sublayers.forEach(x);
      else {
        if (false === m2?.includes(e3.id) || u2 && (!e3.popupTemplate || !e3.popupEnabled))
          return;
        g.unshift(e3);
      }
  };
  if (l2?.forEach(x), l2 && !g.length)
    c2.layerIds = [];
  else {
    const e3 = n(g, y2, f2), t2 = g.map((e4) => {
      const t3 = n$1(i$12, e4);
      return e4.toExportImageJSON(t3);
    });
    if (e3)
      c2.dynamicLayers = JSON.stringify(t2);
    else {
      if (l2) {
        let e5 = g.map(({ id: e6 }) => e6);
        m2 && (e5 = e5.filter((e6) => m2.includes(e6))), c2.layerIds = e5;
      } else
        m2?.length && (c2.layerIds = m2);
      const e4 = a$2(i$12, g);
      if (null != e4 && e4.length) {
        const t3 = {};
        for (const r2 of e4)
          r2.definitionExpression && (t3[r2.id] = r2.definitionExpression);
        Object.keys(t3).length && (c2.layerDefs = JSON.stringify(t3));
      }
    }
  }
  return c2;
}
function a$2(t, r2) {
  const i2 = !!t?.length, s2 = r2.filter((e2) => null != e2.definitionExpression || i2 && null != e2.floorInfo);
  return s2.length ? s2.map((r3) => {
    const i3 = n$1(t, r3), s3 = n$2(i3, r3.definitionExpression);
    return { id: r3.id, definitionExpression: s3 ?? void 0 };
  }) : null;
}
var a$1;
let u$1 = a$1 = class extends f$2 {
  static from(t) {
    return v(a$1, t);
  }
  constructor(t) {
    super(t), this.dpi = 96, this.floors = null, this.gdbVersion = null, this.geometry = null, this.geometryPrecision = null, this.height = 400, this.historicMoment = null, this.layerIds = null, this.layerOption = "top", this.mapExtent = null, this.maxAllowableOffset = null, this.returnFieldName = true, this.returnGeometry = false, this.returnM = false, this.returnUnformattedValues = true, this.returnZ = false, this.spatialReference = null, this.sublayers = null, this.timeExtent = null, this.tolerance = null, this.width = 400;
  }
  writeHistoricMoment(t, e2) {
    e2.historicMoment = t && t.getTime();
  }
};
e([y({ type: Number, json: { write: true } })], u$1.prototype, "dpi", void 0), e([y()], u$1.prototype, "floors", void 0), e([y({ type: String, json: { write: true } })], u$1.prototype, "gdbVersion", void 0), e([y({ types: n$3, json: { read: y$1, write: true } })], u$1.prototype, "geometry", void 0), e([y({ type: Number, json: { write: true } })], u$1.prototype, "geometryPrecision", void 0), e([y({ type: Number, json: { write: true } })], u$1.prototype, "height", void 0), e([y({ type: Date })], u$1.prototype, "historicMoment", void 0), e([r("historicMoment")], u$1.prototype, "writeHistoricMoment", null), e([y({ type: [Number], json: { write: true } })], u$1.prototype, "layerIds", void 0), e([y({ type: ["top", "visible", "all", "popup"], json: { write: true } })], u$1.prototype, "layerOption", void 0), e([y({ type: M, json: { write: true } })], u$1.prototype, "mapExtent", void 0), e([y({ type: Number, json: { write: true } })], u$1.prototype, "maxAllowableOffset", void 0), e([y({ type: Boolean, json: { write: true } })], u$1.prototype, "returnFieldName", void 0), e([y({ type: Boolean, json: { write: true } })], u$1.prototype, "returnGeometry", void 0), e([y({ type: Boolean, json: { write: true } })], u$1.prototype, "returnM", void 0), e([y({ type: Boolean, json: { write: true } })], u$1.prototype, "returnUnformattedValues", void 0), e([y({ type: Boolean, json: { write: true } })], u$1.prototype, "returnZ", void 0), e([y({ type: f$1, json: { write: true } })], u$1.prototype, "spatialReference", void 0), e([y()], u$1.prototype, "sublayers", void 0), e([y({ type: c, json: { write: true } })], u$1.prototype, "timeExtent", void 0), e([y({ type: Number, json: { write: true } })], u$1.prototype, "tolerance", void 0), e([y({ type: Number, json: { write: true } })], u$1.prototype, "width", void 0), u$1 = a$1 = e([c$1("esri.rest.support.IdentifyParameters")], u$1);
const d = u$1;
let u = class extends f$2 {
  constructor(r2) {
    super(r2), this.displayFieldName = null, this.feature = null, this.layerId = null, this.layerName = null;
  }
  readFeature(r2, t) {
    return c$2.fromJSON({ attributes: { ...t.attributes }, geometry: { ...t.geometry } });
  }
  writeFeature(r2, e2) {
    if (!r2)
      return;
    const { attributes: t, geometry: o2 } = r2;
    t && (e2.attributes = { ...t }), null != o2 && (e2.geometry = o2.toJSON(), e2.geometryType = i$1.toJSON(o2.type));
  }
};
e([y({ type: String, json: { write: true } })], u.prototype, "displayFieldName", void 0), e([y({ type: c$2 })], u.prototype, "feature", void 0), e([o$1("feature", ["attributes", "geometry"])], u.prototype, "readFeature", null), e([r("feature")], u.prototype, "writeFeature", null), e([y({ type: Number, json: { write: true } })], u.prototype, "layerId", void 0), e([y({ type: String, json: { write: true } })], u.prototype, "layerName", void 0), u = e([c$1("esri.rest.support.IdentifyResult")], u);
const m$1 = u;
async function f(u2, i2, f2) {
  const c2 = (i2 = a(i2)).geometry ? [i2.geometry] : [], l2 = f$3(u2);
  return l2.path += "/identify", R$1(c2).then((e2) => {
    const t = o(i2, { geometry: e2?.[0] }), u3 = s({ ...l2.query, f: "json", ...t }), a2 = n$4(u3, f2);
    return U$1(l2.path, a2).then(m).then((r2) => p(r2, i2.sublayers));
  });
}
function m(r2) {
  const e2 = r2.data;
  return e2.results = e2.results || [], e2.exceededTransferLimit = Boolean(e2.exceededTransferLimit), e2.results = e2.results.map((r3) => m$1.fromJSON(r3)), e2;
}
function a(r2) {
  return r2 = d.from(r2);
}
function p(r2, e2) {
  if (!e2?.length)
    return r2;
  const t = /* @__PURE__ */ new Map();
  function o2(r3) {
    t.set(r3.id, r3), r3.sublayers && r3.sublayers.forEach(o2);
  }
  e2.forEach(o2);
  for (const s2 of r2.results)
    s2.feature.sourceLayer = t.get(s2.layerId);
  return r2;
}
let G = null;
function S(e2, t) {
  return "tile" === t.type || "map-image" === t.type;
}
let U = class extends S$1 {
  constructor(e2) {
    super(e2), this._featuresResolutions = /* @__PURE__ */ new WeakMap(), this.highlightGraphics = null, this.highlightGraphicUpdated = null, this.updateHighlightedFeatures = k(async (e3) => {
      this.destroyed || this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(e3).catch(() => {
      }));
    });
  }
  initialize() {
    const e2 = (e3) => {
      this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(e3).catch(() => {
      })), this.updateHighlightedFeatures(this._highlightGeometriesResolution);
    };
    this.addHandles([v$1(() => this.highlightGraphics, "change", (t) => e2(t.added), { onListenerAdd: (t) => e2(t) })]);
  }
  async fetchPopupFeaturesAtLocation(e2, t) {
    const { layerView: { layer: r2, view: { scale: s2 } } } = this;
    if (!e2)
      throw new s$1("fetchPopupFeatures:invalid-area", "Nothing to fetch without area", { layer: r2 });
    const i2 = _(r2.sublayers, s2, t);
    if (!i2.length)
      return [];
    const a2 = await A(r2, i2);
    if (!((r2.capabilities?.operations?.supportsIdentify ?? true) && r2.version >= 10.5) && !a2)
      throw new s$1("fetchPopupFeatures:not-supported", "query operation is disabled for this service", { layer: r2 });
    return a2 ? this._fetchPopupFeaturesUsingQueries(e2, i2, t) : this._fetchPopupFeaturesUsingIdentify(e2, i2, t);
  }
  clearHighlights() {
    this.highlightGraphics?.removeAll();
  }
  highlight(e2) {
    const r2 = this.highlightGraphics;
    if (!r2)
      return e$1();
    let o2 = null;
    if (e2 instanceof c$2 ? o2 = [e2] : V.isCollection(e2) && e2.length > 0 ? o2 = e2.toArray() : Array.isArray(e2) && e2.length > 0 && (o2 = e2), o2 = o2?.filter(q$1), !o2?.length)
      return e$1();
    for (const t of o2) {
      const e3 = t.sourceLayer;
      null != e3 && "geometryType" in e3 && "point" === e3.geometryType && (t.visible = false);
    }
    return r2.addMany(o2), e$1(() => r2.removeMany(o2 ?? []));
  }
  async _updateHighlightedFeaturesSymbols(e2) {
    const { layerView: { view: t }, highlightGraphics: r2, highlightGraphicUpdated: s2 } = this;
    if (r2 && s2)
      for (const i2 of e2) {
        const e3 = i2.sourceLayer && "renderer" in i2.sourceLayer && i2.sourceLayer.renderer;
        i2.sourceLayer && "geometryType" in i2.sourceLayer && "point" === i2.sourceLayer.geometryType && e3 && "getSymbolAsync" in e3 && e3.getSymbolAsync(i2).then(async (o2) => {
          o2 ||= new y$2();
          let a2 = null;
          const n2 = "visualVariables" in e3 ? e3.visualVariables?.find((e4) => "size" === e4.type) : void 0;
          n2 && (G || (G = (await import("./chunk-ejFG4zJ0.js").then((n3) => n3.DW)).getSize), a2 = G(n2, i2, { view: t.type, scale: t.scale, shape: "simple-marker" === o2.type ? o2.style : null })), a2 ||= "width" in o2 && "height" in o2 && null != o2.width && null != o2.height ? Math.max(o2.width, o2.height) : "size" in o2 ? o2.size : 16, r2.includes(i2) && (i2.symbol = new y$2({ style: "square", size: a2, xoffset: "xoffset" in o2 ? o2.xoffset : 0, yoffset: "yoffset" in o2 ? o2.yoffset : 0 }), s2(i2, "symbol"), i2.visible = true);
        });
      }
  }
  async _updateHighlightedFeaturesGeometries(e2) {
    const { layerView: { layer: t, view: r2 }, highlightGraphics: s2, highlightGraphicUpdated: i2 } = this;
    if (this._highlightGeometriesResolution = e2, !i2 || !s2?.length || !t.capabilities.operations.supportsQuery)
      return;
    const o2 = this._getTargetResolution(e2), a2 = /* @__PURE__ */ new Map();
    for (const c2 of s2)
      if (!this._featuresResolutions.has(c2) || this._featuresResolutions.get(c2) > o2) {
        const e3 = c2.sourceLayer;
        r$1(a2, e3, () => /* @__PURE__ */ new Map()).set(c2.getObjectId(), c2);
      }
    const l2 = Array.from(a2, ([e3, t2]) => {
      const s3 = e3.createQuery();
      return s3.objectIds = [...t2.keys()], s3.outFields = [e3.objectIdField], s3.returnGeometry = true, s3.maxAllowableOffset = o2, s3.outSpatialReference = r2.spatialReference, e3.queryFeatures(s3);
    }), p2 = await Promise.all(l2);
    if (!this.destroyed)
      for (const { features: n2 } of p2)
        for (const e3 of n2) {
          const t2 = e3.sourceLayer, r3 = a2.get(t2).get(e3.getObjectId());
          r3 && s2.includes(r3) && (r3.geometry = e3.geometry, i2(r3, "geometry"), this._featuresResolutions.set(r3, o2));
        }
  }
  _getTargetResolution(e2) {
    const t = e2 * W(this.layerView.view.spatialReference), r2 = t / 16;
    return r2 <= 10 ? 0 : e2 / t * r2;
  }
  async _fetchPopupFeaturesUsingIdentify(e2, t, r2) {
    const s2 = await this._createIdentifyParameters(e2, t, r2);
    if (null == s2)
      return [];
    const { results: i2 } = await f(this.layerView.layer.parsedUrl, s2, r2);
    return i2.map((e3) => e3.feature);
  }
  async _createIdentifyParameters(e2, t, r2) {
    const { floors: s2, layer: i2, timeExtent: o2, view: { spatialReference: a2, scale: n2 } } = this.layerView;
    if (!t.length)
      return null;
    await Promise.all(t.map(({ sublayer: e3 }) => e3.load(r2).catch(() => {
    })));
    const l2 = Math.min(has("mapservice-popup-identify-max-tolerance"), i2.allSublayers.reduce((e3, t2) => t2.renderer ? o$2({ renderer: t2.renderer, pointerType: r2?.pointerType }) : e3, 2)), p2 = this.createFetchPopupFeaturesQueryGeometry(e2, l2), c2 = o$3(n2, a2), u2 = Math.round(p2.width / c2), h = new M({ xmin: p2.center.x - c2 * u2, ymin: p2.center.y - c2 * u2, xmax: p2.center.x + c2 * u2, ymax: p2.center.y + c2 * u2, spatialReference: p2.spatialReference });
    return new d({ floors: s2, gdbVersion: "gdbVersion" in i2 ? i2.gdbVersion : void 0, geometry: e2, height: u2, layerOption: "popup", mapExtent: h, returnGeometry: true, spatialReference: a2, sublayers: i2.sublayers, timeExtent: o2, tolerance: l2, width: u2 });
  }
  async _fetchPopupFeaturesUsingQueries(e2, t, r2) {
    const { layerView: { floors: i2, timeExtent: o2 } } = this, a2 = t.map(async ({ sublayer: t2, popupTemplate: s2 }) => {
      if (await t2.load(r2).catch(() => {
      }), t2.capabilities && !t2.capabilities.operations.supportsQuery)
        return [];
      const a3 = t2.createQuery(), n2 = o$2({ renderer: t2.renderer, pointerType: r2?.pointerType }), l2 = this.createFetchPopupFeaturesQueryGeometry(e2, n2), c2 = /* @__PURE__ */ new Set(), [u2] = await Promise.all([n$5(t2, s2), t2.renderer?.collectRequiredFields(c2, t2.fieldsIndex)]);
      s$2(r2), b(c2, t2.fieldsIndex, u2);
      const h = Array.from(c2).sort();
      if (a3.geometry = l2, a3.outFields = h, a3.timeExtent = o2, i2) {
        const e3 = i2.clone(), r3 = n$1(e3, t2);
        null != r3 && (a3.where = a3.where ? `(${a3.where}) AND (${r3})` : r3);
      }
      const y2 = this._getTargetResolution(l2.width / n2), m2 = await R(s2);
      s$2(r2);
      const f2 = "point" === t2.geometryType || m2 && m2.arcadeUtils.hasGeometryOperations(s2);
      f2 || (a3.maxAllowableOffset = y2);
      let { features: b$1 } = await t2.queryFeatures(a3, r2);
      const v2 = f2 ? 0 : y2;
      b$1 = await T(t2, b$1, r2);
      for (const e3 of b$1)
        this._featuresResolutions.set(e3, v2);
      return b$1;
    });
    return (await Promise.allSettled(a2)).reduce((e3, t2) => "fulfilled" === t2.status ? [...e3, ...t2.value] : e3, []).filter(q$1);
  }
};
function _(e2, t, r2) {
  const s2 = [];
  if (!e2)
    return s2;
  const i2 = (e3) => {
    const o2 = 0 === e3.minScale || t <= e3.minScale, a2 = 0 === e3.maxScale || t >= e3.maxScale;
    if (e3.visible && o2 && a2) {
      if (e3.sublayers)
        e3.sublayers.forEach(i2);
      else if (e3.popupEnabled) {
        const t2 = p$2(e3, { ...r2, defaultPopupTemplateEnabled: false });
        null != t2 && s2.unshift({ sublayer: e3, popupTemplate: t2 });
      }
    }
  };
  return e2.map(i2), s2;
}
function R(e2) {
  return e2.expressionInfos?.length || Array.isArray(e2.content) && e2.content.some((e3) => "expression" === e3.type) ? i$2() : Promise.resolve();
}
async function A(e2, t) {
  if (e2.capabilities?.operations?.supportsQuery)
    return true;
  try {
    return await Promise.any(t.map(({ sublayer: e3 }) => e3.load().then(() => e3.capabilities.operations.supportsQuery)));
  } catch {
    return false;
  }
}
async function T(e2, t, r2) {
  const s2 = e2.renderer;
  return s2 && "defaultSymbol" in s2 && !s2.defaultSymbol && (t = s2.valueExpression ? await Promise.all(t.map((e3) => s2.getSymbolAsync(e3, r2).then((t2) => t2 ? e3 : null))).then((e3) => e3.filter((e4) => null != e4)) : t.filter((e3) => null != s2.getSymbol(e3))), t;
}
e([y({ constructOnly: true })], U.prototype, "createFetchPopupFeaturesQueryGeometry", void 0), e([y({ constructOnly: true })], U.prototype, "layerView", void 0), e([y({ constructOnly: true })], U.prototype, "highlightGraphics", void 0), e([y({ constructOnly: true })], U.prototype, "highlightGraphicUpdated", void 0), e([y({ constructOnly: true })], U.prototype, "updatingHandles", void 0), U = e([c$1("esri.views.layers.support.MapService")], U);
export {
  S,
  U
};
