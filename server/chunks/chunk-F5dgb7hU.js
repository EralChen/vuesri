import { au as l, av as u$1, aw as j, ax as t, ay as m, az as e, aA as i, aB as f$1, aC as M, aD as M$1, aE as r$1, aF as e$1, aG as u, aH as O$1, aI as r$2, aJ as n, aK as u$2, aL as m$1, aM as b, aN as K, aO as s, aP as a, aQ as U$1, aR as I, aS as x, aT as s$1, aU as Z, aV as e$2, aW as n$1, aX as y, aY as f, aZ as d, a_ as c, a$ as b$1 } from "./chunk-ejFG4zJ0.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
let U = class extends l(u$1(j(t(m(e(i(b$1))))))) {
  constructor(e2) {
    super(e2), this.operationalLayerType = "IntegratedMesh3DTilesLayer", this.spatialReference = new f$1({ wkid: 4326, vcsWkid: 115700 }), this.fullExtent = new M(-180, -90, 180, 90, this.spatialReference), this.url = null, this.type = "integrated-mesh-3dtiles", this.path = null, this.minScale = 0, this.maxScale = 0;
  }
  set elevationInfo(e2) {
    this._set("elevationInfo", e2), this._validateElevationInfo();
  }
  _verifyArray(e2, t2) {
    if (!Array.isArray(e2) || e2.length < t2)
      return false;
    for (const r of e2)
      if ("number" != typeof r)
        return false;
    return true;
  }
  _initFullExtent(e2) {
    const t2 = e2.root?.boundingVolume;
    if (!t2)
      return;
    if (t2.box) {
      const e3 = t2?.box;
      if (e3[3] > 7972671 && e3[7] > 7972671 && e3[11] > 7945940)
        return;
    }
    const r = e2.root?.transform, i2 = n$1();
    if (t2.region && this._verifyArray(t2.region, 6)) {
      const e3 = t2.region, r2 = M$1(e3[0]), i3 = M$1(e3[1]), s2 = e3[4], a2 = M$1(e3[2]), n2 = M$1(e3[3]), m2 = e3[5];
      this.fullExtent = new M({ xmin: r2, ymin: i3, zmin: s2, xmax: a2, ymax: n2, zmax: m2, spatialReference: this.spatialReference });
    } else if (t2.sphere && this._verifyArray(t2.sphere, 4)) {
      const e3 = t2.sphere, o = r$1(e3[0], e3[1], e3[2]), s2 = e3[3] / Math.sqrt(3), a2 = n$1();
      e$1(a2, o, r$1(-s2, -s2, -s2));
      const n$2 = n$1();
      if (u(n$2, o, r$1(s2, s2, s2)), r && this._verifyArray(r, 16)) {
        const e4 = r;
        O$1(i2, a2, e4), r$2(a2, i2), O$1(i2, n$2, e4), r$2(n$2, i2);
      }
      n(a2, u$2, 0, a2, f$1.WGS84, 0, 1), n(n$2, u$2, 0, n$2, f$1.WGS84, 0, 1);
      const m2 = n$1(), d2 = n$1();
      m$1(m2, a2, n$2), b(d2, a2, n$2), this.fullExtent = new M({ xmin: m2[0], ymin: m2[1], zmin: m2[2], xmax: d2[0], ymax: d2[1], zmax: d2[2], spatialReference: this.spatialReference });
    } else if (t2.box && this._verifyArray(t2.box, 12)) {
      const e3 = t2.box, i3 = r$1(e3[0], e3[1], e3[2]), o = r$1(e3[3], e3[4], e3[5]), s2 = r$1(e3[6], e3[7], e3[8]), a2 = r$1(e3[9], e3[10], e3[11]), n$2 = [];
      for (let t3 = 0; t3 < 8; ++t3)
        n$2.push(n$1());
      if (u(n$2[0], i3, o), u(n$2[0], n$2[0], s2), u(n$2[0], n$2[0], a2), K(n$2[1], i3, o), u(n$2[1], n$2[1], s2), u(n$2[1], n$2[1], a2), u(n$2[2], i3, o), K(n$2[2], n$2[2], s2), u(n$2[2], n$2[2], a2), K(n$2[3], i3, o), K(n$2[3], n$2[3], s2), u(n$2[3], n$2[3], a2), u(n$2[4], i3, o), u(n$2[4], n$2[4], s2), K(n$2[4], n$2[4], a2), K(n$2[5], i3, o), u(n$2[5], n$2[5], s2), K(n$2[5], n$2[5], a2), u(n$2[6], i3, o), K(n$2[6], n$2[6], s2), K(n$2[6], n$2[6], a2), K(n$2[7], i3, o), K(n$2[7], n$2[7], s2), K(n$2[7], n$2[7], a2), r && this._verifyArray(r, 16)) {
        const e4 = r;
        for (let t3 = 0; t3 < 8; ++t3)
          O$1(n$2[t3], n$2[t3], e4);
      }
      const m2 = r$1(Number.MIN_VALUE, Number.MIN_VALUE, Number.MIN_VALUE), l2 = r$1(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
      for (let t3 = 0; t3 < 8; ++t3)
        n(n$2[t3], u$2, 0, n$2[t3], f$1.WGS84, 0, 1), m$1(l2, l2, n$2[t3]), b(m2, m2, n$2[t3]);
      this.fullExtent = new M({ xmin: l2[0], ymin: l2[1], zmin: l2[2], xmax: m2[0], ymax: m2[1], zmax: m2[2], spatialReference: this.spatialReference });
    }
  }
  async load(e2) {
    return this.addResolvingPromise(this._doLoad(e2)), this;
  }
  async _doLoad(e2) {
    const i2 = null != e2 ? e2.signal : null;
    try {
      await this.loadFromPortal({ supportedTypes: ["3DTiles Service"], validateItem: (e3) => {
        if (e3.typeKeywords?.includes("IntegratedMesh"))
          return true;
        throw new s("portal:invalid-layer-item-type", "Invalid layer item, expected '${expectedType}' ", { expectedType: "3DTiles Service containing IntegratedMesh" });
      } }, e2);
    } catch (o) {
      a(o);
    }
    if (this.url) {
      const e3 = U$1(this.url, { query: { f: "json", ...this.customParameters, token: this.apiKey }, responseType: "json", signal: i2 }).then((e4) => {
        this._initFullExtent(e4.data);
      }, (e4) => {
        a(e4);
      });
      await e3;
    }
  }
  async fetchAttributionData() {
    return this.load().then(() => ({}));
  }
  _validateElevationInfo() {
    const e2 = this.elevationInfo, t2 = "Integrated mesh 3d tiles layers";
    I(s$1.getLogger(this), x(t2, "absolute-height", e2)), I(s$1.getLogger(this), Z(t2, e2));
  }
};
e$2([y({ type: ["IntegratedMesh3DTilesLayer"] })], U.prototype, "operationalLayerType", void 0), e$2([y({ type: f$1 })], U.prototype, "spatialReference", void 0), e$2([y({ type: M })], U.prototype, "fullExtent", void 0), e$2([y(f)], U.prototype, "elevationInfo", null), e$2([y({ type: ["show", "hide"] })], U.prototype, "listMode", void 0), e$2([y(d)], U.prototype, "url", void 0), e$2([y({ readOnly: true })], U.prototype, "type", void 0), e$2([y({ type: String, json: { origins: { "web-scene": { read: true, write: true }, "portal-item": { read: true, write: true } }, read: false } })], U.prototype, "path", void 0), e$2([y({ type: Number, json: { origins: { "web-scene": { name: "layerDefinition.minScale", write: () => {
}, read: () => {
} }, "portal-item": { name: "layerDefinition.minScale", write: () => {
}, read: () => {
} } } } })], U.prototype, "minScale", void 0), e$2([y({ type: Number, json: { origins: { "web-scene": { name: "layerDefinition.maxScale", write: () => {
}, read: () => {
} }, "portal-item": { name: "layerDefinition.maxScale", write: () => {
}, read: () => {
} } } } })], U.prototype, "maxScale", void 0), U = e$2([c("esri.layers.IntegratedMesh3DTilesLayer")], U);
const z = U;
export {
  z as default
};
