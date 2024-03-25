import { dv as y, aV as e, aX as y$1, a_ as c, b_ as S, d6 as d, d8 as y$2, c5 as m, d1 as n, ax as t, av as u$1, aw as j, ay as m$1, aB as f$1, bQ as V, dw as We, bD as a, b1 as D, dx as m$2, dy as K, dz as I, dA as K$1, dB as c$1, bJ as c$2, aO as s, dC as o, bO as G, dc as H$1, dD as E, dE as B$1, dF as U$1, bI as R, dd as s$1, cV as o$1, da as r, aC as M, dG as h, a$ as b } from "./chunk-ejFG4zJ0.js";
import { n as n$1 } from "./chunk-wHNDki6K.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
function B(e2) {
  return "markup" === e2.featureCollectionType || e2.layers.some((e3) => null != e3.layerDefinition.visibilityField || !k(e3));
}
function k({ layerDefinition: e2, featureSet: t2 }) {
  const r2 = e2.geometryType ?? t2.geometryType;
  return $.find((t3) => r2 === t3.geometryTypeJSON && e2.drawingInfo?.renderer?.symbol?.type === t3.identifyingSymbol.type);
}
function z() {
  return new M({ xmin: -180, ymin: -90, xmax: 180, ymax: 90 });
}
const U = new y({ name: "OBJECTID", alias: "OBJECTID", type: "oid", nullable: false, editable: false }), W = new y({ name: "title", alias: "Title", type: "string", nullable: true, editable: true, length: 255 });
let A = class extends h {
  constructor(e2) {
    super(e2), this.visibilityMode = "inherited";
  }
  initialize() {
    for (const e2 of this.graphics)
      e2.sourceLayer = this.layer;
    this.graphics.on("after-add", (e2) => {
      e2.item.sourceLayer = this.layer;
    }), this.graphics.on("after-remove", (e2) => {
      e2.item.sourceLayer = null;
    });
  }
  get fullExtent() {
    const e2 = this.layer?.spatialReference, t2 = this.fullBounds;
    return e2 ? null == t2 ? K(z(), e2).geometry : c$1(t2, e2) : null;
  }
  get fullBounds() {
    const e2 = this.layer?.spatialReference;
    if (!e2)
      return null;
    const t2 = D();
    return this.graphics.forEach((r2) => {
      const o2 = null != r2.geometry ? K(r2.geometry, e2).geometry : null;
      null != o2 && m$2(t2, "point" === o2.type ? o2 : o2.extent, t2);
    }), I(t2, K$1) ? null : t2;
  }
  get sublayers() {
    return this.graphics;
  }
};
e([y$1({ readOnly: true })], A.prototype, "fullExtent", null), e([y$1({ readOnly: true })], A.prototype, "fullBounds", null), e([y$1({ readOnly: true })], A.prototype, "sublayers", null), e([y$1()], A.prototype, "layer", void 0), e([y$1()], A.prototype, "layerId", void 0), e([y$1({ readOnly: true })], A.prototype, "visibilityMode", void 0), A = e([c("esri.layers.MapNotesLayer.MapNotesSublayer")], A);
const $ = [{ geometryType: "polygon", geometryTypeJSON: "esriGeometryPolygon", id: "polygonLayer", layerId: 0, title: "Polygons", identifyingSymbol: new S().toJSON() }, { geometryType: "polyline", geometryTypeJSON: "esriGeometryPolyline", id: "polylineLayer", layerId: 1, title: "Polylines", identifyingSymbol: new d().toJSON() }, { geometryType: "multipoint", geometryTypeJSON: "esriGeometryMultipoint", id: "multipointLayer", layerId: 2, title: "Multipoints", identifyingSymbol: new y$2().toJSON() }, { geometryType: "point", geometryTypeJSON: "esriGeometryPoint", id: "pointLayer", layerId: 3, title: "Points", identifyingSymbol: new y$2().toJSON() }, { geometryType: "point", geometryTypeJSON: "esriGeometryPoint", id: "textLayer", layerId: 4, title: "Text", identifyingSymbol: new m().toJSON() }];
let q = class extends n(t(u$1(j(m$1(b))))) {
  constructor(e2) {
    super(e2), this.capabilities = { operations: { supportsMapNotesEditing: true } }, this.featureCollections = null, this.featureCollectionJSON = null, this.featureCollectionType = "notes", this.legendEnabled = false, this.listMode = "hide-children", this.minScale = 0, this.maxScale = 0, this.spatialReference = f$1.WGS84, this.sublayers = new V($.map((e3) => new A({ id: e3.id, layerId: e3.layerId, title: e3.title, layer: this }))), this.title = "Map Notes", this.type = "map-notes", this.visibilityMode = "inherited";
  }
  readCapabilities(e2, t2, r2) {
    return { operations: { supportsMapNotesEditing: !B(t2) && "portal-item" !== r2?.origin } };
  }
  readFeatureCollections(e2, t2, o2) {
    if (!B(t2))
      return null;
    const i = t2.layers.map((e3) => {
      const t3 = new We();
      return t3.read(e3, o2), t3;
    });
    return new V({ items: i });
  }
  readLegacyfeatureCollectionJSON(e2, t2) {
    return B(t2) ? a(t2.featureCollection) : null;
  }
  get fullExtent() {
    const e2 = this.spatialReference, t2 = D();
    if (null != this.sublayers)
      this.sublayers.forEach(({ fullBounds: e3 }) => null != e3 ? m$2(t2, e3, t2) : t2, t2);
    else if (this.featureCollectionJSON?.layers.some((e3) => e3.layerDefinition.extent)) {
      this.featureCollectionJSON.layers.forEach((r2) => {
        const o2 = K(r2.layerDefinition.extent, e2).geometry;
        null != o2 && m$2(t2, o2, t2);
      });
    }
    return I(t2, K$1) ? K(z(), e2).geometry : c$1(t2, e2);
  }
  readMinScale(e2, t2) {
    for (const r2 of t2.layers)
      if (null != r2.layerDefinition.minScale)
        return r2.layerDefinition.minScale;
    return 0;
  }
  readMaxScale(e2, t2) {
    for (const r2 of t2.layers)
      if (null != r2.layerDefinition.maxScale)
        return r2.layerDefinition.maxScale;
    return 0;
  }
  get multipointLayer() {
    return this._findSublayer("multipointLayer");
  }
  get pointLayer() {
    return this._findSublayer("pointLayer");
  }
  get polygonLayer() {
    return this._findSublayer("polygonLayer");
  }
  get polylineLayer() {
    return this._findSublayer("polylineLayer");
  }
  readSpatialReference(e2, t2) {
    return t2.layers.length ? f$1.fromJSON(t2.layers[0].layerDefinition.spatialReference) : f$1.WGS84;
  }
  readSublayers(e2, o2, i) {
    if (B(o2))
      return null;
    const l = [];
    let a2 = o2.layers.reduce((e3, t2) => Math.max(e3, t2.layerDefinition.id ?? -1), -1) + 1;
    for (const r2 of o2.layers) {
      const { layerDefinition: e3, featureSet: o3 } = r2, i2 = e3.id ?? a2++, n2 = k(r2);
      if (null != n2) {
        const r3 = new A({ id: n2.id, title: e3.name, layerId: i2, layer: this, graphics: o3.features.map(({ geometry: e4, symbol: r4, attributes: o4, popupInfo: i3 }) => c$2.fromJSON({ attributes: o4, geometry: e4, symbol: r4, popupTemplate: i3 })) });
        l.push(r3);
      }
    }
    return new V(l);
  }
  writeSublayers(e2, t2, r2, i) {
    const { minScale: l, maxScale: n2 } = this;
    if (null == e2)
      return;
    const s$12 = e2.some((e3) => e3.graphics.length > 0);
    if (!this.capabilities.operations.supportsMapNotesEditing)
      return void (s$12 && i?.messages?.push(new s("map-notes-layer:editing-not-supported", "New map notes cannot be added to this layer")));
    const p = [];
    let y2 = this.spatialReference.toJSON();
    e:
      for (const o2 of e2)
        for (const e3 of o2.graphics)
          if (null != e3.geometry) {
            y2 = e3.geometry.spatialReference.toJSON();
            break e;
          }
    for (const o2 of $) {
      const t3 = e2.find((e3) => o2.id === e3.id);
      this._writeMapNoteSublayer(p, t3, o2, l, n2, y2, i);
    }
    o("featureCollection.layers", p, t2);
  }
  get textLayer() {
    return this._findSublayer("textLayer");
  }
  load(e2) {
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Feature Collection"] }, e2)), Promise.resolve(this);
  }
  read(e2, t2) {
    "featureCollection" in e2 && (e2 = a(e2), Object.assign(e2, e2.featureCollection)), super.read(e2, t2);
  }
  async beforeSave() {
    if (null == this.sublayers)
      return;
    let e2 = null;
    const t2 = [];
    for (const o2 of this.sublayers)
      for (const r3 of o2.graphics)
        if (null != r3.geometry) {
          const o3 = r3.geometry;
          e2 ? G(o3.spatialReference, e2) || (H$1(o3.spatialReference, e2) || E() || await B$1(), r3.geometry = U$1(o3, e2)) : e2 = o3.spatialReference, t2.push(r3);
        }
    const r2 = await R(t2.map((e3) => e3.geometry));
    t2.forEach((e3, t3) => e3.geometry = r2[t3]);
  }
  _findSublayer(e2) {
    return null == this.sublayers ? null : this.sublayers?.find((t2) => t2.id === e2) ?? null;
  }
  _writeMapNoteSublayer(e2, t2, r2, o2, l, a$1, n2) {
    const s2 = [];
    if (null != t2) {
      for (const e3 of t2.graphics)
        this._writeMapNote(s2, e3, r2.geometryType, n2);
      this._normalizeObjectIds(s2, U), e2.push({ layerDefinition: { name: t2.title, drawingInfo: { renderer: { type: "simple", symbol: a(r2.identifyingSymbol) } }, id: t2.layerId, geometryType: r2.geometryTypeJSON, minScale: o2, maxScale: l, objectIdField: "OBJECTID", fields: [U.toJSON(), W.toJSON()], spatialReference: a$1 }, featureSet: { features: s2, geometryType: r2.geometryTypeJSON } });
    }
  }
  _writeMapNote(e2, t2, r2, o2) {
    if (null == t2)
      return;
    const { geometry: i, symbol: l, popupTemplate: a2 } = t2;
    if (null == i)
      return;
    if (i.type !== r2)
      return void o2?.messages?.push(new s$1("map-notes-layer:invalid-geometry-type", `Geometry "${i.type}" cannot be saved in "${r2}" layer`, { graphic: t2 }));
    if (null == l)
      return void o2?.messages?.push(new s$1("map-notes-layer:no-symbol", "Skipping map notes with no symbol", { graphic: t2 }));
    const s2 = { attributes: { ...t2.attributes }, geometry: i.toJSON(), symbol: l.toJSON() };
    null != a2 && (s2.popupInfo = a2.toJSON()), e2.push(s2);
  }
  _normalizeObjectIds(e2, t2) {
    const r2 = t2.name;
    let o2 = n$1(r2, e2) + 1;
    const i = /* @__PURE__ */ new Set();
    for (const l of e2) {
      l.attributes || (l.attributes = {});
      const { attributes: e3 } = l;
      (null == e3[r2] || i.has(e3[r2])) && (e3[r2] = o2++), i.add(e3[r2]);
    }
  }
};
e([y$1({ readOnly: true })], q.prototype, "capabilities", void 0), e([o$1(["portal-item", "web-map"], "capabilities", ["layers"])], q.prototype, "readCapabilities", null), e([y$1({ readOnly: true })], q.prototype, "featureCollections", void 0), e([o$1(["web-map", "portal-item"], "featureCollections", ["layers"])], q.prototype, "readFeatureCollections", null), e([y$1({ readOnly: true, json: { origins: { "web-map": { write: { enabled: true, target: "featureCollection" } } } } })], q.prototype, "featureCollectionJSON", void 0), e([o$1(["web-map", "portal-item"], "featureCollectionJSON", ["featureCollection"])], q.prototype, "readLegacyfeatureCollectionJSON", null), e([y$1({ readOnly: true, json: { read: true, write: { enabled: true, ignoreOrigin: true } } })], q.prototype, "featureCollectionType", void 0), e([y$1({ readOnly: true })], q.prototype, "fullExtent", null), e([y$1({ readOnly: true, json: { origins: { "web-map": { write: { target: "featureCollection.showLegend", overridePolicy() {
  return { enabled: null != this.featureCollectionJSON };
} } } } } })], q.prototype, "legendEnabled", void 0), e([y$1({ type: ["show", "hide", "hide-children"] })], q.prototype, "listMode", void 0), e([y$1({ type: Number, nonNullable: true, json: { write: false } })], q.prototype, "minScale", void 0), e([o$1(["web-map", "portal-item"], "minScale", ["layers"])], q.prototype, "readMinScale", null), e([y$1({ type: Number, nonNullable: true, json: { write: false } })], q.prototype, "maxScale", void 0), e([o$1(["web-map", "portal-item"], "maxScale", ["layers"])], q.prototype, "readMaxScale", null), e([y$1({ readOnly: true })], q.prototype, "multipointLayer", null), e([y$1({ value: "ArcGISFeatureLayer", type: ["ArcGISFeatureLayer"] })], q.prototype, "operationalLayerType", void 0), e([y$1({ readOnly: true })], q.prototype, "pointLayer", null), e([y$1({ readOnly: true })], q.prototype, "polygonLayer", null), e([y$1({ readOnly: true })], q.prototype, "polylineLayer", null), e([y$1({ type: f$1 })], q.prototype, "spatialReference", void 0), e([o$1(["web-map", "portal-item"], "spatialReference", ["layers"])], q.prototype, "readSpatialReference", null), e([y$1({ readOnly: true, json: { origins: { "web-map": { write: { ignoreOrigin: true } } } } })], q.prototype, "sublayers", void 0), e([o$1("web-map", "sublayers", ["layers"])], q.prototype, "readSublayers", null), e([r("web-map", "sublayers")], q.prototype, "writeSublayers", null), e([y$1({ readOnly: true })], q.prototype, "textLayer", null), e([y$1()], q.prototype, "title", void 0), e([y$1({ readOnly: true, json: { read: false } })], q.prototype, "type", void 0), q = e([c("esri.layers.MapNotesLayer")], q);
const H = q;
export {
  H as default
};
