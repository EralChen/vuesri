import { bQ as V, aV as e, aX as y$1, f7 as t, a_ as c, jy as c$1, ce as d$2, cl as A$1, f8 as n$1, jz as a, dy as K, fC as h, jA as e$1, jB as i, av as u$2, ay as m$1, a$ as b } from "./chunk-ejFG4zJ0.js";
import { f, u as u$1 } from "./chunk-zlqL92VV.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const y = V.ofType(f);
let d$1 = class d extends c$1 {
  constructor(t2) {
    super(t2), this.type = "line-of-sight", this.observer = null, this.extent = null;
  }
  initialize() {
    this.addHandles(d$2(() => this._computeExtent(), (t2) => {
      null == t2?.pending && this._set("extent", null != t2 ? t2.extent : null);
    }, A$1));
  }
  get targets() {
    return this._get("targets") || new y();
  }
  set targets(t2) {
    this._set("targets", n$1(t2, this.targets, y));
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
    const e2 = (t3) => "absolute-height" === i(t3.position, t3.elevationInfo), o = this.observer.position, r = a(o.x, o.y, o.z, o.x, o.y, o.z);
    for (const i2 of this.targets)
      if (null != i2.position) {
        const e3 = K(i2.position, t2);
        if (null != e3.pending)
          return { pending: e3.pending, extent: null };
        if (null != e3.geometry) {
          const { x: t3, y: o2, z: s2 } = e3.geometry;
          h(r, [t3, o2, s2]);
        }
      }
    const s = e$1(r, t2);
    return e2(this.observer) && this.targets.every(e2) || (s.zmin = void 0, s.zmax = void 0), { pending: null, extent: s };
  }
  clear() {
    this.observer = null, this.targets.removeAll();
  }
};
e([y$1({ type: ["line-of-sight"] })], d$1.prototype, "type", void 0), e([y$1({ type: u$1, json: { read: true, write: true } })], d$1.prototype, "observer", void 0), e([y$1({ cast: t, type: y, nonNullable: true, json: { read: true, write: true } })], d$1.prototype, "targets", null), e([y$1({ value: null, readOnly: true })], d$1.prototype, "extent", void 0), e([y$1({ readOnly: true })], d$1.prototype, "spatialReference", null), e([y$1({ readOnly: true })], d$1.prototype, "requiredPropertiesForEditing", null), d$1 = e([c("esri.analysis.LineOfSightAnalysis")], d$1);
const v = d$1;
const m = V.ofType(f);
let u = class extends u$2(m$1(b)) {
  constructor(e2) {
    super(e2), this.type = "line-of-sight", this.operationalLayerType = "LineOfSightLayer", this.analysis = new v(), this.opacity = 1;
  }
  initialize() {
    this.addHandles(d$2(() => this.analysis, (e2, t2) => {
      null != t2 && t2.parent === this && (t2.parent = null), null != e2 && (e2.parent = this);
    }, A$1));
  }
  async load() {
    return null != this.analysis && this.addResolvingPromise(this.analysis.waitComputeExtent()), this;
  }
  get observer() {
    return this.analysis?.observer;
  }
  set observer(e2) {
    const { analysis: t2 } = this;
    t2 && (t2.observer = e2);
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
e([y$1({ json: { read: false }, readOnly: true })], u.prototype, "type", void 0), e([y$1({ type: ["LineOfSightLayer"] })], u.prototype, "operationalLayerType", void 0), e([y$1({ type: u$1, json: { read: true, write: { isRequired: true, ignoreOrigin: true } } })], u.prototype, "observer", null), e([y$1({ type: m, json: { read: true, write: { ignoreOrigin: true } } })], u.prototype, "targets", null), e([y$1({ nonNullable: true, json: { read: false, write: false } })], u.prototype, "analysis", void 0), e([y$1({ readOnly: true })], u.prototype, "fullExtent", null), e([y$1({ readOnly: true })], u.prototype, "spatialReference", null), e([y$1({ readOnly: true, json: { read: false, write: false, origins: { service: { read: false, write: false }, "portal-item": { read: false, write: false }, "web-document": { read: false, write: false } } } })], u.prototype, "opacity", void 0), e([y$1({ type: ["show", "hide"] })], u.prototype, "listMode", void 0), u = e([c("esri.layers.LineOfSightLayer")], u);
const d2 = u;
export {
  d2 as default
};
