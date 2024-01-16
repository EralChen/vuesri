import { iz as u$1, bu as u$2, bo as e, bp as y$1, jo as T, lz as o, fs as e$1, br as c$1, iD as l$1, bh as V, eh as t, i_ as c$2, bJ as d$2, bR as A, ei as n$1, lA as W, ap as M$1, cl as u$4, cn as m$1, cN as r, bN as b$1 } from "./chunk-KFNcxJaF.js";
import { u as u$3 } from "./chunk-D9uRu2V9.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
let c = class extends u$1(l$1) {
  constructor(o2) {
    super(o2), this.type = "simple", this.color = new u$2("black"), this.lineSize = 2, this.fontSize = 10, this.textColor = new u$2("black"), this.textBackgroundColor = new u$2([255, 255, 255, 0.6]);
  }
};
e([y$1({ type: ["simple"], readOnly: true, json: { write: { isRequired: true } } })], c.prototype, "type", void 0), e([y$1({ type: u$2, nonNullable: true, json: { type: [T], write: { isRequired: true } } })], c.prototype, "color", void 0), e([y$1({ type: Number, cast: o, nonNullable: true, range: { min: e$1(1) }, json: { write: { isRequired: true } } })], c.prototype, "lineSize", void 0), e([y$1({ type: Number, cast: o, nonNullable: true, json: { write: { isRequired: true } } })], c.prototype, "fontSize", void 0), e([y$1({ type: u$2, nonNullable: true, json: { type: [T], write: { isRequired: true } } })], c.prototype, "textColor", void 0), e([y$1({ type: u$2, nonNullable: true, json: { type: [T], write: { isRequired: true } } })], c.prototype, "textBackgroundColor", void 0), c = e([c$1("esri.analysis.DimensionSimpleStyle")], c);
const a = c;
const d$1 = V.ofType(u$3);
let y = class extends c$2 {
  constructor(e2) {
    super(e2), this.type = "dimension", this.style = new a(), this.extent = null;
  }
  initialize() {
    this.addHandles(d$2(() => this._computeExtent(), (e2) => {
      null == e2?.pending && this._set("extent", null != e2 ? e2.extent : null);
    }, A));
  }
  get dimensions() {
    return this._get("dimensions") || new d$1();
  }
  set dimensions(e2) {
    this._set("dimensions", n$1(e2, this.dimensions, d$1));
  }
  get spatialReference() {
    for (const e2 of this.dimensions) {
      if (null != e2.startPoint)
        return e2.startPoint.spatialReference;
      if (null != e2.endPoint)
        return e2.endPoint.spatialReference;
    }
    return null;
  }
  get requiredPropertiesForEditing() {
    return this.dimensions.reduce((e2, t2) => (e2.push(t2.startPoint, t2.endPoint), e2), []);
  }
  async waitComputeExtent() {
    const e2 = this._computeExtent();
    return null != e2 ? e2.pending : Promise.resolve();
  }
  _computeExtent() {
    const e2 = this.spatialReference;
    if (null == e2)
      return { pending: null, extent: null };
    const t2 = [];
    for (const s of this.dimensions)
      null != s.startPoint && t2.push(s.startPoint), null != s.endPoint && t2.push(s.endPoint);
    const n = W(t2, e2);
    if (null != n.pending)
      return { pending: n.pending, extent: null };
    let o2 = null;
    return null != n.geometries && (o2 = n.geometries.reduce((e3, t3) => null == e3 ? null != t3 ? M$1.fromPoint(t3) : null : null != t3 ? e3.union(M$1.fromPoint(t3)) : e3, null)), { pending: null, extent: o2 };
  }
  clear() {
    this.dimensions.removeAll();
  }
};
e([y$1({ type: ["dimension"] })], y.prototype, "type", void 0), e([y$1({ cast: t, type: d$1, nonNullable: true })], y.prototype, "dimensions", null), e([y$1({ readOnly: true })], y.prototype, "spatialReference", null), e([y$1({ types: { key: "type", base: null, typeMap: { simple: a } }, nonNullable: true })], y.prototype, "style", void 0), e([y$1({ value: null, readOnly: true })], y.prototype, "extent", void 0), e([y$1({ readOnly: true })], y.prototype, "requiredPropertiesForEditing", null), y = e([c$1("esri.analysis.DimensionAnalysis")], y);
const f = y;
let u = class extends u$4(m$1(b$1)) {
  constructor(e2) {
    if (super(e2), this.type = "dimension", this.operationalLayerType = "ArcGISDimensionLayer", this.source = new f(), this.opacity = 1, e2) {
      const { source: s, style: r2 } = e2;
      s && r2 && (s.style = r2);
    }
  }
  initialize() {
    this.addHandles([d$2(() => this.source, (e2, s) => {
      null != s && s.parent === this && (s.parent = null), null != e2 && (e2.parent = this);
    }, A)]);
  }
  async load() {
    return this.addResolvingPromise(this.source.waitComputeExtent()), this;
  }
  get spatialReference() {
    return this.source.spatialReference;
  }
  get style() {
    return this.source.style;
  }
  set style(e2) {
    this.source.style = e2;
  }
  get fullExtent() {
    return this.source.extent;
  }
  releaseAnalysis(e2) {
    this.source === e2 && (this.source = new f());
  }
  get analysis() {
    return this.source;
  }
  set analysis(e2) {
    this.source = e2;
  }
  get dimensions() {
    return this.source.dimensions;
  }
  set dimensions(e2) {
    this.source.dimensions = e2;
  }
  writeDimensions(e2, s, r2, t2) {
    s.dimensions = e2.filter(({ startPoint: e3, endPoint: s2 }) => null != e3 && null != s2).map((e3) => e3.toJSON(t2)).toJSON();
  }
};
e([y$1({ json: { read: false }, readOnly: true })], u.prototype, "type", void 0), e([y$1({ type: ["ArcGISDimensionLayer"] })], u.prototype, "operationalLayerType", void 0), e([y$1({ nonNullable: true })], u.prototype, "source", void 0), e([y$1({ readOnly: true })], u.prototype, "spatialReference", null), e([y$1({ types: { key: "type", base: null, typeMap: { simple: a } }, json: { write: { ignoreOrigin: true } } })], u.prototype, "style", null), e([y$1({ readOnly: true })], u.prototype, "fullExtent", null), e([y$1({ readOnly: true, json: { read: false, write: false, origins: { service: { read: false, write: false }, "portal-item": { read: false, write: false }, "web-document": { read: false, write: false } } } })], u.prototype, "opacity", void 0), e([y$1({ type: ["show", "hide"] })], u.prototype, "listMode", void 0), e([y$1({ type: V.ofType(u$3), json: { write: { ignoreOrigin: true }, origins: { "web-scene": { write: { ignoreOrigin: true } } } } })], u.prototype, "dimensions", null), e([r("web-scene", "dimensions")], u.prototype, "writeDimensions", null), u = e([c$1("esri.layers.DimensionLayer")], u);
const d = u;
export {
  d as default
};
