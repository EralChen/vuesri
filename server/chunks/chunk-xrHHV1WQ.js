import { bh as V, bo as e, bp as y, eh as t, br as c, i_ as c$1, bJ as d$2, bR as A, ei as n$1, i$ as a, d7 as U, eM as h$2, j0 as e$1, j1 as r, cl as u$1, cn as m$1, bN as b$1 } from "./chunk-KFNcxJaF.js";
import { f, u } from "./chunk-_p1vQhyl.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const h$1 = V.ofType(f);
let d$1 = class d extends c$1 {
  constructor(t2) {
    super(t2), this.type = "line-of-sight", this.observer = null, this.extent = null;
  }
  initialize() {
    this.addHandles(d$2(() => this._computeExtent(), (t2) => {
      null == t2?.pending && this._set("extent", null != t2 ? t2.extent : null);
    }, A));
  }
  get targets() {
    return this._get("targets") || new h$1();
  }
  set targets(t2) {
    this._set("targets", n$1(t2, this.targets, h$1));
  }
  get spatialReference() {
    return null != this.observer?.position ? this.observer.position.spatialReference : null;
  }
  get requiredPropertiesForEditing() {
    return [this.observer?.position];
  }
  async waitComputeExtent() {
    const t2 = this._computeExtent();
    return null != t2 ? t2.pending : Promise.resolve();
  }
  _computeExtent() {
    const t2 = this.spatialReference;
    if (null == this.observer?.position || null == t2)
      return null;
    const e2 = (t3) => "absolute-height" === r(t3.position, t3.elevationInfo), r$1 = this.observer.position, o = a(r$1.x, r$1.y, r$1.z, r$1.x, r$1.y, r$1.z);
    for (const i of this.targets)
      if (null != i.position) {
        const e3 = U(i.position, t2);
        if (null != e3.pending)
          return { pending: e3.pending, extent: null };
        if (null != e3.geometry) {
          const { x: t3, y: r2, z: s2 } = e3.geometry;
          h$2(o, [t3, r2, s2]);
        }
      }
    const s = e$1(o, t2);
    return e2(this.observer) && this.targets.every(e2) || (s.zmin = void 0, s.zmax = void 0), { pending: null, extent: s };
  }
  clear() {
    this.observer = null, this.targets.removeAll();
  }
};
e([y({ type: ["line-of-sight"] })], d$1.prototype, "type", void 0), e([y({ type: u, json: { read: true, write: true } })], d$1.prototype, "observer", void 0), e([y({ cast: t, type: h$1, nonNullable: true, json: { read: true, write: true } })], d$1.prototype, "targets", null), e([y({ value: null, readOnly: true })], d$1.prototype, "extent", void 0), e([y({ readOnly: true })], d$1.prototype, "spatialReference", null), e([y({ readOnly: true })], d$1.prototype, "requiredPropertiesForEditing", null), d$1 = e([c("esri.analysis.LineOfSightAnalysis")], d$1);
const v = d$1;
const h = V.ofType(f);
let m = class extends u$1(m$1(b$1)) {
  constructor(e2) {
    super(e2), this.type = "line-of-sight", this.operationalLayerType = "LineOfSightLayer", this.analysis = new v(), this.opacity = 1;
  }
  initialize() {
    this.addHandles(d$2(() => this.analysis, (e2, s) => {
      null != s && s.parent === this && (s.parent = null), null != e2 && (e2.parent = this);
    }, A));
  }
  async load() {
    return null != this.analysis && this.addResolvingPromise(this.analysis.waitComputeExtent()), this;
  }
  get observer() {
    return this.analysis?.observer;
  }
  set observer(e2) {
    const { analysis: s } = this;
    s && (s.observer = e2);
  }
  get targets() {
    return null != this.analysis ? this.analysis.targets : new V();
  }
  set targets(e2) {
    n$1(e2, this.analysis?.targets);
  }
  get fullExtent() {
    return null != this.analysis ? this.analysis.extent : null;
  }
  get spatialReference() {
    return null != this.analysis ? this.analysis.spatialReference : null;
  }
  releaseAnalysis(e2) {
    this.analysis === e2 && (this.analysis = new v());
  }
};
e([y({ json: { read: false }, readOnly: true })], m.prototype, "type", void 0), e([y({ type: ["LineOfSightLayer"] })], m.prototype, "operationalLayerType", void 0), e([y({ type: u, json: { read: true, write: { isRequired: true, ignoreOrigin: true } } })], m.prototype, "observer", null), e([y({ type: h, json: { read: true, write: { ignoreOrigin: true } } })], m.prototype, "targets", null), e([y({ nonNullable: true, json: { read: false, write: false } })], m.prototype, "analysis", void 0), e([y({ readOnly: true })], m.prototype, "fullExtent", null), e([y({ readOnly: true })], m.prototype, "spatialReference", null), e([y({ readOnly: true, json: { read: false, write: false, origins: { service: { read: false, write: false }, "portal-item": { read: false, write: false }, "web-document": { read: false, write: false } } } })], m.prototype, "opacity", void 0), e([y({ type: ["show", "hide"] })], m.prototype, "listMode", void 0), m = e([c("esri.layers.LineOfSightLayer")], m);
const d2 = m;
export {
  d2 as default
};
