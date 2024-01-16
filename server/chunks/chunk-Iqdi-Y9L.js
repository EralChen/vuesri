import { bo as e, bs as g$1, bt as S, bf as c$1, bu as u$1, bv as w$1, bw as i, bx as d$1, by as m, bh as V, bz as z, bA as m$1, bp as y, br as c, bB as s } from "./chunk-KFNcxJaF.js";
const u = [[0, 179, 255], [117, 62, 128], [0, 104, 255], [215, 189, 166], [32, 0, 193], [98, 162, 206], [102, 112, 129], [52, 125, 0], [142, 118, 246], [138, 83, 0], [92, 122, 255], [122, 55, 83], [0, 142, 255], [81, 40, 179], [0, 200, 244], [13, 24, 127], [0, 170, 147], [19, 58, 241], [22, 44, 35]];
let d = class extends g$1 {
  constructor(e2) {
    super(e2), this.updating = false, this.enablePolygons = true, this.enableLabels = true, this._polygons = /* @__PURE__ */ new Map(), this._labels = /* @__PURE__ */ new Map(), this._enabled = true;
  }
  initialize() {
    this._symbols = u.map((e2) => new S({ color: [e2[0], e2[1], e2[2], 0.6], outline: { color: "black", width: 1 } })), this.update();
  }
  destroy() {
    this._enabled = false, this.clear();
  }
  get enabled() {
    return this._enabled;
  }
  set enabled(e2) {
    this._enabled !== e2 && (this._enabled = e2, this.update());
  }
  update() {
    if (!this._enabled)
      return void this.clear();
    const e2 = (e3) => {
      if (null != e3.label)
        return e3.label;
      let s2 = e3.lij.toString();
      return null != e3.loadPriority && (s2 += ` (${e3.loadPriority})`), s2;
    }, t = this.getTiles(), i$1 = new Array(), a = new Set((this._labels.size, this._labels.keys()));
    t.forEach((m$22, u2) => {
      const d2 = m$22.lij.toString();
      a.delete(d2);
      const g = m$22.lij[0], f = m$22.geometry;
      if (this.enablePolygons && !this._polygons.has(d2)) {
        const e3 = new c$1({ geometry: f, symbol: this._symbols[g % this._symbols.length] });
        this._polygons.set(d2, e3), i$1.push(e3);
      }
      if (this.enableLabels) {
        const a2 = e2(m$22), g2 = u2 / (t.length - 1), w = s(0, 200, g2), _ = s(20, 6, g2) / 0.75, j = null != m$22.loadPriority && m$22.loadPriority >= t.length, v = new u$1([w, j ? 0 : w, j ? 0 : w]), S2 = "3d" === this.view.type ? () => new w$1({ verticalOffset: new i({ screenLength: 40 / 0.75 }), callout: new d$1({ color: new u$1("white"), border: new m({ color: new u$1("black") }) }), symbolLayers: new V([new z({ text: a2, halo: { color: "white", size: 1 / 0.75 }, material: { color: v }, size: _ })]) }) : () => new m$1({ text: a2, haloColor: "white", haloSize: 1 / 0.75, color: v, size: _ }), x = this._labels.get(d2);
        if (x) {
          const e3 = S2();
          null != x.symbol && JSON.stringify(e3) === JSON.stringify(x.symbol) || (x.symbol = e3);
        } else {
          const e3 = new c$1({ geometry: f.extent.center, symbol: S2() });
          this._labels.set(d2, e3), i$1.push(e3);
        }
      }
    });
    const m$2 = new Array();
    a.forEach((e3) => {
      const s2 = this._polygons.get(e3);
      null != s2 && (m$2.push(s2), this._polygons.delete(e3));
      const o = this._labels.get(e3);
      null != o && (m$2.push(o), this._labels.delete(e3));
    }), this.view.graphics.removeMany(m$2), this.view.graphics.addMany(i$1);
  }
  clear() {
    this.view.graphics.removeMany(Array.from(this._polygons.values())), this.view.graphics.removeMany(Array.from(this._labels.values())), this._polygons.clear(), this._labels.clear();
  }
};
e([y({ constructOnly: true })], d.prototype, "view", void 0), e([y({ readOnly: true })], d.prototype, "updating", void 0), e([y()], d.prototype, "enabled", null), d = e([c("esri.views.support.TileTreeDebugger")], d);
export {
  d
};
