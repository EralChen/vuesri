import { bI as b$1, bo as e, br as c, bH as a$1, lg as s, b1 as s$1, cZ as f$1, c9 as S$1, b$ as n } from "./chunk-KFNcxJaF.js";
import { i } from "./chunk-G90k0bzF.js";
import { p as p$1 } from "./chunk-yIp_WHt0.js";
import { x, o, a, E, n as n$1 } from "./chunk-b7K892Yv.js";
import { p } from "./chunk-Dc0kh_vC.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-U6xagfDK.js";
import "./chunk-ubi9cRRg.js";
import "./chunk-ZLxFSCNp.js";
import "./chunk-Fng9kmUI.js";
import "./chunk-pjiN37wa.js";
import "./chunk-6KbR9szJ.js";
import "./chunk-b-LoIQKK.js";
class t {
  constructor(e2) {
    this._remoteClient = e2, this._resourceMap = /* @__PURE__ */ new Map(), this._inFlightResourceMap = /* @__PURE__ */ new Map(), this.geometryEngine = null, this.geometryEnginePromise = null;
  }
  destroy() {
  }
  async fetchResource(t2, r) {
    const s2 = this._resourceMap, i2 = s2.get(t2);
    if (i2)
      return i2;
    let n2 = this._inFlightResourceMap.get(t2);
    if (n2)
      return n2;
    try {
      n2 = this._remoteClient.invoke("tileRenderer.fetchResource", { url: t2 }, { ...r }), this._inFlightResourceMap.set(t2, n2), n2.then((e2) => (this._inFlightResourceMap.delete(t2), s2.set(t2, e2), e2));
    } catch (o2) {
      return b$1(o2) ? null : { width: 0, height: 0 };
    }
    return n2;
  }
  getResource(e2) {
    return this._resourceMap.get(e2) ?? null;
  }
  loadFont(e2) {
    return Promise.resolve(null);
  }
}
function _(e2, t2) {
  const s2 = t2 - t2 / 4, r = t2 + t2 / 2;
  return (!e2.minScale || e2.minScale >= s2) && (!e2.maxScale || e2.maxScale <= r);
}
function b(e2) {
  const t2 = e2.message, s2 = { message: { data: {}, tileKey: t2.tileKey, tileKeyOrigin: t2.tileKeyOrigin, version: t2.version }, transferList: new Array() };
  for (const r in t2.data) {
    const e3 = r, i2 = t2.data[e3];
    if (s2.message.data[e3] = null, null != i2) {
      const t3 = i2.stride, r2 = i2.indices.slice(0), a2 = i2.vertices.slice(0), o2 = i2.records.slice(0), n2 = i2.metrics?.slice(0), l = { stride: t3, indices: r2, vertices: a2, records: o2, metrics: n2 };
      s2.transferList.push(r2, a2, o2), s2.message.data[e3] = l;
    }
  }
  return s2;
}
let S = class extends p {
  constructor() {
    super(...arguments), this.type = "symbol", this._matchers = { feature: null, aggregate: null }, this._bufferData = /* @__PURE__ */ new Map(), this._bufferIds = /* @__PURE__ */ new Map();
  }
  initialize() {
    this.addHandles([this.tileStore.on("update", this.onTileUpdate.bind(this))]), this._resourceManagerProxy = new t(this.remoteClient);
  }
  destroy() {
    this._resourceManagerProxy.destroy();
  }
  get supportsTileUpdates() {
    return true;
  }
  forEachBufferId(e2) {
    this._bufferIds.forEach((t2) => {
      t2.forEach(e2);
    });
  }
  async update(e2, t2) {
    const s$12 = t2.schema.processors[0];
    if ("symbol" !== s$12.type)
      return;
    const r = a$1(this._schema, s$12);
    (s(r, "mesh") || s(r, "target")) && (e2.mesh = true, e2.why?.mesh.push("Symbology changed"), this._schema = s$12, this._factory = this._createFactory(s$12), this._factory.update(s$12, this.tileStore.tileScheme.tileInfo));
  }
  onTileMessage(e2, t2, s2, i2) {
    return s$1(i2), this._onTileData(e2, t2, s2, i2);
  }
  onTileClear(e2, t2) {
    const s2 = { clear: true, end: t2 };
    return this._bufferData.delete(e2.key.id), this._bufferIds.delete(e2.key.id), this.remoteClient.invoke("tileRenderer.onTileData", { tileKey: e2.id, data: s2 });
  }
  onTileError(e2, t2, s2) {
    const r = s2.signal, i2 = { tileKey: e2.id, error: t2 };
    return this.remoteClient.invoke("tileRenderer.onTileError", i2, { signal: r });
  }
  onTileUpdate(e2) {
    for (const t2 of e2.removed)
      this._bufferData.has(t2.key.id) && this._bufferData.delete(t2.key.id), this._bufferIds.has(t2.key.id) && this._bufferIds.delete(t2.key.id);
    for (const t2 of e2.added)
      this._bufferData.forEach((e3) => {
        for (const s2 of e3)
          s2.message.tileKey === t2.id && this._updateTileMesh("append", t2, b(s2), [], false, false, null);
      });
  }
  _addBufferData(e2, t2) {
    this._bufferData.has(e2) || this._bufferData.set(e2, []), this._bufferData.get(e2)?.push(b(t2));
  }
  _createFactory(e2) {
    const { geometryType: t2, objectIdField: s2, fields: r } = this.service, i2 = (e3, t3) => this.remoteClient.invoke("tileRenderer.getMaterialItems", e3, t3), a$12 = { geometryType: t2, fields: r, spatialReference: f$1.fromJSON(this.spatialReference) }, o$1 = new x(i2, this.tileStore.tileScheme.tileInfo), { matcher: n2, aggregateMatcher: c2 } = e2.mesh;
    return this._store = o$1, this._matchers.feature = o(n2, o$1, a$12, this._resourceManagerProxy), this._matchers.aggregate = c2 ? o(c2, o$1, a$12, this._resourceManagerProxy) : null, new a(t2, s2, o$1);
  }
  async _onTileData(e2, t2, s2, i2) {
    s$1(i2);
    const { type: a2, addOrUpdate: o2, remove: n2, clear: l, end: c2 } = t2, d = !!this._schema.mesh.sortKey;
    if (!o2) {
      const t3 = { type: a2, addOrUpdate: null, remove: n2, clear: l, end: c2, sort: d };
      return this.remoteClient.invoke("tileRenderer.onTileData", { tileKey: e2.id, data: t3 }, i2);
    }
    const h = this._processFeatures(e2, o2, s2, i2, t2.status?.version);
    try {
      const s3 = await h;
      if (null == s3) {
        const t3 = { type: a2, addOrUpdate: null, remove: n2, clear: l, end: c2, sort: d };
        return this.remoteClient.invoke("tileRenderer.onTileData", { tileKey: e2.id, data: t3 }, i2);
      }
      const r = [];
      for (const t3 of s3) {
        let s4 = false;
        const i3 = t3.message.bufferIds, a3 = e2.key.id, o3 = t3.message.tileKey;
        if (a3 !== o3 && null != i3) {
          if (!this.tileStore.get(o3)) {
            this._addBufferData(a3, t3), r.push(t3);
            continue;
          }
          let e3 = this._bufferIds.get(o3);
          e3 || (e3 = /* @__PURE__ */ new Set(), this._bufferIds.set(o3, e3));
          const n3 = Array.from(i3);
          for (const t4 of n3) {
            if (e3.has(t4)) {
              s4 = true;
              break;
            }
            e3.add(t4);
          }
        }
        s4 || (this._addBufferData(a3, t3), r.push(t3));
      }
      await Promise.all(r.map((s4) => {
        const r2 = e2.key.id === s4.message.tileKey, o3 = r2 ? t2.remove : [], n3 = r2 && t2.end;
        return this._updateTileMesh(a2, e2, s4, o3, n3, !!t2.clear, i2.signal);
      }));
    } catch (f) {
      this._handleError(e2, f, i2);
    }
  }
  async _updateTileMesh(e2, t2, s2, i2, a2, o2, n2) {
    const l = e2, c2 = s2.message.tileKey, d = !!this._schema.mesh.sortKey;
    c2 !== t2.key.id && (a2 = false);
    const h = s2?.message, f = { type: l, addOrUpdate: h, remove: i2, clear: o2, end: a2, sort: d }, u = { transferList: s2?.transferList ?? [], signal: n2 };
    return s$1(u), this.remoteClient.invoke("tileRenderer.onTileData", { tileKey: c2, data: f }, u);
  }
  async _processFeatures(e2, t2, s2, i2, a2) {
    if (null == t2 || !t2.hasFeatures)
      return null;
    const o2 = { transform: e2.transform, hasZ: false, hasM: false }, n2 = this._factory, l = { viewingMode: "", scale: e2.scale }, c2 = await this._matchers.feature, d = await this._matchers.aggregate;
    s$1(i2);
    const h = this._getLabelInfos(e2, t2);
    return await n2.analyze(t2.getCursor(), this._resourceManagerProxy, c2, d, o2, l), s$1(i2), this._writeFeatureSet(e2, t2, o2, h, n2, s2, a2);
  }
  _writeFeatureSet(e2, t2, s2, r, i2, a2, o2) {
    const n2 = t2.getSize(), l = this._schema.mesh.matcher.symbologyType, c2 = new E(e2.key.id, { features: n2, records: n2, metrics: 0 }, l, a2, l !== S$1.HEATMAP, o2), f = { viewingMode: "", scale: e2.scale }, u = t2.getCursor();
    for (; u.next(); )
      try {
        const t3 = u.getDisplayId(), a3 = null != r ? r.get(t3) : null;
        i2.writeCursor(c2, u, s2, f, e2.level, a3, this._resourceManagerProxy);
      } catch (g) {
      }
    const m = e2.tileInfoView.tileInfo.isWrappable;
    return c2.serialize(m);
  }
  _handleError(e2, t2, s2) {
    if (!b$1(t2)) {
      const r = { tileKey: e2.id, error: t2.message };
      return this.remoteClient.invoke("tileRenderer.onTileError", r, { signal: s2.signal });
    }
    return Promise.resolve();
  }
  _getLabelingSchemaForScale(e2) {
    const t2 = this._schema.mesh.labels;
    if (null == t2)
      return null;
    if ("subtype" === t2.type) {
      const s3 = { type: "subtype", classes: {} };
      let r = false;
      for (const i2 in t2.classes) {
        const a2 = t2.classes[i2].filter((t3) => _(t3, e2.scale));
        r = r || !!a2.length, s3.classes[i2] = a2;
      }
      return r ? s3 : null;
    }
    const s2 = t2.classes.filter((t3) => _(t3, e2.scale));
    return s2.length ? { type: "simple", classes: s2 } : null;
  }
  _getLabels(e2, t2) {
    if ("subtype" === t2.type) {
      const r = this.service.subtypeField;
      n(r, "Expected to find subtype Field");
      const i2 = e2.readAttribute(r);
      return null == i2 ? [] : t2.classes[i2] ?? [];
    }
    return t2.classes;
  }
  _getLabelInfos(e2, s2) {
    const r = this._getLabelingSchemaForScale(e2);
    if (null == r)
      return null;
    const i$1 = /* @__PURE__ */ new Map(), a2 = s2.getCursor();
    for (; a2.next(); ) {
      const e3 = a2.getDisplayId(), s3 = [], o2 = p$1(e3), n2 = o2 && 1 !== a2.readAttribute("cluster_count") ? "aggregate" : "feature", l = this._getLabels(a2, r);
      for (const r2 of l) {
        if (r2.target !== n2)
          continue;
        const i$12 = a2.getStorage(), l2 = o2 && "feature" === n2 ? i$12.getComputedStringAtIndex(a2.readAttribute("referenceId"), r2.fieldIndex) : i$12.getComputedStringAtIndex(e3, r2.fieldIndex);
        if (!l2)
          continue;
        const c2 = i(l2.toString()), d = c2[0], h = c2[1];
        this._store.getMosaicItem(r2.symbol, n$1(d)).then((e4) => {
          s3[r2.index] = { glyphs: e4.glyphMosaicItems ?? [], rtl: h, index: r2.index };
        });
      }
      i$1.set(e3, s3);
    }
    return i$1;
  }
};
S = e([c("esri.views.2d.layers.features.processors.SymbolProcessor")], S);
const w = S;
export {
  w as default
};
