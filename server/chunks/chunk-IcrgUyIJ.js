import { fO as v, fP as T$1, pa as i, pb as n, pc as n$1, jt as n$2, bo as e, bp as y, pd as n$3, cw as p$1, ap as M$1, cZ as f$1, lu as c, br as c$1, cO as f$2, g2 as v$1, bf as c$2, ct as o$1, cN as r, j2 as i$1, fK as f$3, be as R$1, g1 as s, g0 as i$2, a$ as j, bs as g$1, ej as k, e3 as v$2, aM as s$1, bS as e$1, bh as V, bX as k$1, cL as y$1, n1 as r$1, ie as z, aq as has, pe as o$2, pf as o$3, ef as n$4, ec as b, dK as i$3, ee as p$2 } from "./chunk-KFNcxJaF.js";
function l(e2, t) {
  const { dpi: i2, gdbVersion: s2, geometry: l2, geometryPrecision: a2, height: p2, layerOption: f2, mapExtent: m2, maxAllowableOffset: y2, returnFieldName: u2, returnGeometry: c2, returnUnformattedValues: d, returnZ: g, spatialReference: x, timeExtent: b2, tolerance: h, width: E } = e2.toJSON(), { dynamicLayers: O, layerDefs: S2, layerIds: j2 } = o(e2), N = null != t?.geometry ? t.geometry : null, $ = { geometryPrecision: a2, maxAllowableOffset: y2, returnFieldName: u2, returnGeometry: c2, returnUnformattedValues: d, returnZ: g, tolerance: h }, I = N && N.toJSON() || l2;
  $.imageDisplay = `${E},${p2},${i2}`, s2 && ($.gdbVersion = s2), I && (delete I.spatialReference, $.geometry = JSON.stringify(I), $.geometryType = v(I));
  const R2 = x ?? I?.spatialReference ?? m2?.spatialReference;
  if (R2 && ($.sr = T$1(R2)), $.time = b2 ? [b2.start, b2.end].join(",") : null, m2) {
    const { xmin: e3, ymin: r2, xmax: t2, ymax: n2 } = m2;
    $.mapExtent = `${e3},${r2},${t2},${n2}`;
  }
  return S2 && ($.layerDefs = S2), O && !S2 && ($.dynamicLayers = O), $.layers = "popup" === f2 ? "visible" : f2, j2 && !O && ($.layers += `:${j2.join(",")}`), $;
}
function o(e2) {
  const { mapExtent: r2, floors: n$22, width: l2, sublayers: o2, layerIds: p2, layerOption: f2, gdbVersion: m2 } = e2, y2 = o2?.find((e3) => null != e3.layer)?.layer?.serviceSublayers, u2 = "popup" === f2, c2 = {}, d = i({ extent: r2, width: l2, spatialReference: r2?.spatialReference }), g = [], x = (e3) => {
    const r3 = 0 === d, t = 0 === e3.minScale || d <= e3.minScale, n2 = 0 === e3.maxScale || d >= e3.maxScale;
    if (e3.visible && (r3 || t && n2))
      if (e3.sublayers)
        e3.sublayers.forEach(x);
      else {
        if (false === p2?.includes(e3.id) || u2 && (!e3.popupTemplate || !e3.popupEnabled))
          return;
        g.unshift(e3);
      }
  };
  if (o2?.forEach(x), o2 && !g.length)
    c2.layerIds = [];
  else {
    const e3 = n(g, y2, m2), r3 = g.map((e4) => {
      const r4 = n$1(n$22, e4);
      return e4.toExportImageJSON(r4);
    });
    if (e3)
      c2.dynamicLayers = JSON.stringify(r3);
    else {
      if (o2) {
        let e5 = g.map(({ id: e6 }) => e6);
        p2 && (e5 = e5.filter((e6) => p2.includes(e6))), c2.layerIds = e5;
      } else
        p2?.length && (c2.layerIds = p2);
      const e4 = a$2(n$22, g);
      if (null != e4 && e4.length) {
        const r4 = {};
        for (const t of e4)
          t.definitionExpression && (r4[t.id] = t.definitionExpression);
        Object.keys(r4).length && (c2.layerDefs = JSON.stringify(r4));
      }
    }
  }
  return c2;
}
function a$2(r2, t) {
  const n2 = !!r2?.length, s2 = t.filter((e2) => null != e2.definitionExpression || n2 && null != e2.floorInfo);
  return s2.length ? s2.map((t2) => {
    const n3 = n$1(r2, t2), s3 = n$2(n3, t2.definitionExpression);
    return { id: t2.id, definitionExpression: s3 ?? void 0 };
  }) : null;
}
var m$2;
let a$1 = m$2 = class extends f$2 {
  static from(t) {
    return v$1(m$2, t);
  }
  constructor(t) {
    super(t), this.dpi = 96, this.floors = null, this.gdbVersion = null, this.geometry = null, this.geometryPrecision = null, this.height = 400, this.layerIds = null, this.layerOption = "top", this.mapExtent = null, this.maxAllowableOffset = null, this.returnFieldName = true, this.returnGeometry = false, this.returnM = false, this.returnUnformattedValues = true, this.returnZ = false, this.spatialReference = null, this.sublayers = null, this.timeExtent = null, this.tolerance = null, this.width = 400;
  }
};
e([y({ type: Number, json: { write: true } })], a$1.prototype, "dpi", void 0), e([y()], a$1.prototype, "floors", void 0), e([y({ type: String, json: { write: true } })], a$1.prototype, "gdbVersion", void 0), e([y({ types: n$3, json: { read: p$1, write: true } })], a$1.prototype, "geometry", void 0), e([y({ type: Number, json: { write: true } })], a$1.prototype, "geometryPrecision", void 0), e([y({ type: Number, json: { write: true } })], a$1.prototype, "height", void 0), e([y({ type: [Number], json: { write: true } })], a$1.prototype, "layerIds", void 0), e([y({ type: ["top", "visible", "all", "popup"], json: { write: true } })], a$1.prototype, "layerOption", void 0), e([y({ type: M$1, json: { write: true } })], a$1.prototype, "mapExtent", void 0), e([y({ type: Number, json: { write: true } })], a$1.prototype, "maxAllowableOffset", void 0), e([y({ type: Boolean, json: { write: true } })], a$1.prototype, "returnFieldName", void 0), e([y({ type: Boolean, json: { write: true } })], a$1.prototype, "returnGeometry", void 0), e([y({ type: Boolean, json: { write: true } })], a$1.prototype, "returnM", void 0), e([y({ type: Boolean, json: { write: true } })], a$1.prototype, "returnUnformattedValues", void 0), e([y({ type: Boolean, json: { write: true } })], a$1.prototype, "returnZ", void 0), e([y({ type: f$1, json: { write: true } })], a$1.prototype, "spatialReference", void 0), e([y()], a$1.prototype, "sublayers", void 0), e([y({ type: c, json: { write: true } })], a$1.prototype, "timeExtent", void 0), e([y({ type: Number, json: { write: true } })], a$1.prototype, "tolerance", void 0), e([y({ type: Number, json: { write: true } })], a$1.prototype, "width", void 0), a$1 = m$2 = e([c$1("esri.rest.support.IdentifyParameters")], a$1);
const u$1 = a$1;
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
  const c2 = (i2 = a(i2)).geometry ? [i2.geometry] : [], l$1 = f$3(u2);
  return l$1.path += "/identify", R$1(c2).then((e2) => {
    const t = l(i2, { geometry: e2?.[0] }), u3 = s({ ...l$1.query, f: "json", ...t }), a2 = i$2(u3, f2);
    return j(l$1.path, a2).then(m).then((r2) => p(r2, i2.sublayers));
  });
}
function m(r2) {
  const e2 = r2.data;
  return e2.results = e2.results || [], e2.exceededTransferLimit = Boolean(e2.exceededTransferLimit), e2.results = e2.results.map((r3) => m$1.fromJSON(r3)), e2;
}
function a(r2) {
  return r2 = u$1.from(r2);
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
let P = null;
function S(e2, t) {
  return "tile" === t.type || "map-image" === t.type;
}
let G = class extends g$1 {
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
    this.addHandles([v$2(() => this.highlightGraphics, "change", (t) => e2(t.added), { onListenerAdd: (t) => e2(t) })]);
  }
  async fetchPopupFeatures(e2, t) {
    const { layerView: { layer: r2, view: { scale: s2 } } } = this;
    if (!e2)
      throw new s$1("fetchPopupFeatures:invalid-area", "Nothing to fetch without area", { layer: r2 });
    const i2 = U(r2.sublayers, s2, t);
    if (!i2.length)
      return [];
    const a2 = await R(r2, i2);
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
    if (e2 instanceof c$2 ? o2 = [e2] : V.isCollection(e2) && e2.length > 0 ? o2 = e2.toArray() : Array.isArray(e2) && e2.length > 0 && (o2 = e2), o2 = o2?.filter(k$1), !o2?.length)
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
          o2 ||= new y$1();
          let a2 = null;
          const n2 = "visualVariables" in e3 ? e3.visualVariables?.find((e4) => "size" === e4.type) : void 0;
          n2 && (P || (P = (await import("./chunk-KFNcxJaF.js").then((n3) => n3.D_)).getSize), a2 = P(n2, i2, { view: t.type, scale: t.scale, shape: "simple-marker" === o2.type ? o2.style : null })), a2 ||= "width" in o2 && "height" in o2 && null != o2.width && null != o2.height ? Math.max(o2.width, o2.height) : "size" in o2 ? o2.size : 16, r2.includes(i2) && (i2.symbol = new y$1({ style: "square", size: a2, xoffset: "xoffset" in o2 ? o2.xoffset : 0, yoffset: "yoffset" in o2 ? o2.yoffset : 0 }), s2(i2, "symbol"), i2.visible = true);
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
    const t = e2 * z(this.layerView.view.spatialReference), r2 = t / 16;
    return r2 <= 10 ? 0 : e2 / t * r2;
  }
  async _fetchPopupFeaturesUsingIdentify(e2, t, r2) {
    const s2 = await this._createIdentifyParameters(e2, t, r2);
    if (null == s2)
      return [];
    const { results: i2 } = await f(this.layerView.layer.parsedUrl, s2);
    return i2.map((e3) => e3.feature);
  }
  async _createIdentifyParameters(e2, t, r2) {
    const { floors: s2, layer: i2, timeExtent: o2, view: { spatialReference: a2, scale: n2 } } = this.layerView, l2 = null != r2 ? r2.event : null;
    if (!t.length)
      return null;
    await Promise.all(t.map(({ sublayer: e3 }) => e3.load().catch(() => {
    })));
    const p2 = Math.min(has("mapservice-popup-identify-max-tolerance"), i2.allSublayers.reduce((e3, t2) => t2.renderer ? o$2({ renderer: t2.renderer, event: l2 }) : e3, 2)), c2 = this.createFetchPopupFeaturesQueryGeometry(e2, p2), u2 = o$3(n2, a2), h = Math.round(c2.width / u2), f2 = new M$1({ xmin: c2.center.x - u2 * h, ymin: c2.center.y - u2 * h, xmax: c2.center.x + u2 * h, ymax: c2.center.y + u2 * h, spatialReference: c2.spatialReference });
    return new u$1({ floors: s2, gdbVersion: "gdbVersion" in i2 ? i2.gdbVersion : void 0, geometry: e2, height: h, layerOption: "popup", mapExtent: f2, returnGeometry: true, spatialReference: a2, sublayers: i2.sublayers, timeExtent: o2, tolerance: p2, width: h });
  }
  async _fetchPopupFeaturesUsingQueries(e2, t, r2) {
    const { layerView: { floors: i2, timeExtent: o2 } } = this, a2 = null != r2 ? r2.event : null, n2 = t.map(async ({ sublayer: t2, popupTemplate: r3 }) => {
      if (await t2.load().catch(() => {
      }), t2.capabilities && !t2.capabilities.operations.supportsQuery)
        return [];
      const s2 = t2.createQuery(), n3 = o$2({ renderer: t2.renderer, event: a2 }), l2 = this.createFetchPopupFeaturesQueryGeometry(e2, n3), p2 = /* @__PURE__ */ new Set(), [c2] = await Promise.all([n$4(t2, r3), t2.renderer?.collectRequiredFields(p2, t2.fieldsIndex)]);
      b(p2, t2.fieldsIndex, c2);
      const u2 = Array.from(p2).sort();
      if (s2.geometry = l2, s2.outFields = u2, s2.timeExtent = o2, i2) {
        const e3 = i2.clone(), r4 = n$1(e3, t2);
        null != r4 && (s2.where = s2.where ? `(${s2.where}) AND (${r4})` : r4);
      }
      const h = this._getTargetResolution(l2.width / n3), y2 = await _(r3), m2 = "point" === t2.geometryType || y2 && y2.arcadeUtils.hasGeometryOperations(r3);
      m2 || (s2.maxAllowableOffset = h);
      let { features: w } = await t2.queryFeatures(s2);
      const b$1 = m2 ? 0 : h;
      w = await A(t2, w);
      for (const e3 of w)
        this._featuresResolutions.set(e3, b$1);
      return w;
    });
    return (await Promise.allSettled(n2)).reduce((e3, t2) => "fulfilled" === t2.status ? [...e3, ...t2.value] : e3, []).filter(k$1);
  }
};
function U(e2, t, r2) {
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
function _(e2) {
  return e2.expressionInfos?.length || Array.isArray(e2.content) && e2.content.some((e3) => "expression" === e3.type) ? i$3() : Promise.resolve();
}
async function R(e2, t) {
  if (e2.capabilities?.operations?.supportsQuery)
    return true;
  try {
    return await Promise.any(t.map(({ sublayer: e3 }) => e3.load().then(() => e3.capabilities.operations.supportsQuery)));
  } catch {
    return false;
  }
}
async function A(e2, t) {
  const r2 = e2.renderer;
  return r2 && "defaultSymbol" in r2 && !r2.defaultSymbol && (t = r2.valueExpression ? await Promise.all(t.map((e3) => r2.getSymbolAsync(e3).then((t2) => t2 ? e3 : null))).then((e3) => e3.filter((e4) => null != e4)) : t.filter((e3) => null != r2.getSymbol(e3))), t;
}
e([y({ constructOnly: true })], G.prototype, "createFetchPopupFeaturesQueryGeometry", void 0), e([y({ constructOnly: true })], G.prototype, "layerView", void 0), e([y({ constructOnly: true })], G.prototype, "highlightGraphics", void 0), e([y({ constructOnly: true })], G.prototype, "highlightGraphicUpdated", void 0), e([y({ constructOnly: true })], G.prototype, "updatingHandles", void 0), G = e([c$1("esri.views.layers.support.MapService")], G);
export {
  G,
  S
};
