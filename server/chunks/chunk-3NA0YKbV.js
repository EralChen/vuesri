import { bo as e, br as c, bH as a$1, hz as s, hA as c$1 } from "./chunk-KFNcxJaF.js";
import { p as p$1 } from "./chunk-Dc0kh_vC.js";
import { o } from "./chunk-pjiN37wa.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
class n {
  constructor(e2, t) {
    this.offset = e2, this.extent = t;
  }
}
function d(e2) {
  const t = e2.key, s2 = /* @__PURE__ */ new Map(), r = 256, o$1 = c$1, d2 = e2.tileInfoView.tileInfo.isWrappable;
  return s2.set(o(t, -1, -1, d2).id, new n([-o$1, -o$1], [o$1 - r, o$1 - r, o$1, o$1])), s2.set(o(t, 0, -1, d2).id, new n([0, -o$1], [0, o$1 - r, o$1, o$1])), s2.set(o(t, 1, -1, d2).id, new n([o$1, -o$1], [0, o$1 - r, r, o$1])), s2.set(o(t, -1, 0, d2).id, new n([-o$1, 0], [o$1 - r, 0, o$1, o$1])), s2.set(o(t, 1, 0, d2).id, new n([o$1, 0], [0, 0, r, o$1])), s2.set(o(t, -1, 1, d2).id, new n([-o$1, o$1], [o$1 - r, 0, o$1, r])), s2.set(o(t, 0, 1, d2).id, new n([0, o$1], [0, 0, o$1, r])), s2.set(o(t, 1, 1, d2).id, new n([o$1, o$1], [0, 0, r, r])), s2;
}
let l = class extends p$1 {
  constructor() {
    super(...arguments), this.type = "heatmap", this._tileKeyToFeatureSets = /* @__PURE__ */ new Map();
  }
  initialize() {
    this.addHandles([this.tileStore.on("update", this.onTileUpdate.bind(this))]);
  }
  async update(e2, t) {
    const r = t.schema.processors[0];
    if ("heatmap" !== r.type)
      return;
    a$1(this._schema, r) && (e2.mesh = true, this._schema = r);
  }
  onTileUpdate(e2) {
    for (const t of e2.removed)
      this._tileKeyToFeatureSets.delete(t.key.id);
  }
  onTileClear(e2) {
    const t = { clear: true };
    return this._tileKeyToFeatureSets.delete(e2.key.id), this.remoteClient.invoke("tileRenderer.onTileData", { tileKey: e2.id, data: t });
  }
  async onTileMessage(e2, t, s$1) {
    this._tileKeyToFeatureSets.has(e2.key.id) || this._tileKeyToFeatureSets.set(e2.key.id, /* @__PURE__ */ new Map());
    const i = this._tileKeyToFeatureSets.get(e2.key.id);
    if (i && null != t.addOrUpdate && t.addOrUpdate.hasFeatures && i.set(t.addOrUpdate.instance, t), t.end) {
      const t2 = [], i2 = d(e2);
      this._tileKeyToFeatureSets.forEach((s2, r) => {
        if (r === e2.key.id)
          s2.forEach(({ addOrUpdate: e3 }) => {
            e3 && t2.push(e3);
          });
        else if (i2.has(r)) {
          const e3 = i2.get(r), [o3, a2] = e3.offset;
          s2.forEach(({ addOrUpdate: e4 }) => {
            if (e4) {
              const s3 = e4.transform(o3, a2, 1, 1);
              t2.push(s3);
            }
          });
        }
      });
      const o2 = s(t2, this._schema.mesh, 512, 512), a = { tileKey: e2.key.id, intensityInfo: o2 }, n2 = [o2.matrix];
      return this.remoteClient.invoke("tileRenderer.onTileData", a, { ...s$1, transferList: n2 });
    }
  }
  onTileError(e2, t, s2) {
    return this.remoteClient.invoke("tileRenderer.onTileError", { tileKey: e2.id, error: t }, s2);
  }
};
l = e([c("esri.views.2d.layers.features.processors.HeatmapProcessor")], l);
const p = l;
export {
  p as default
};
