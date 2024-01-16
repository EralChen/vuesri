import { bo as e$1, br as c } from "./chunk-KFNcxJaF.js";
import { n as n$1 } from "./chunk-0Hxi-cKV.js";
const r = (r2) => {
  let s = class extends r2 {
    attach() {
      this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`), this._bitmapView = new n$1(this._tileInfoView), this.container.addChild(this._bitmapView);
    }
    detach() {
      this.container.removeChild(this._bitmapView), this._bitmapView?.removeAllChildren(), this._bitmapView = null;
    }
  };
  return s = e$1([c("esri.views.2d.layers.BitmapTileLayerView2D")], s), s;
};
function e(e2) {
  return e2 instanceof HTMLImageElement ? e2.naturalWidth : e2.width;
}
function t(e2) {
  return e2 instanceof HTMLImageElement ? e2.naturalHeight : e2.height;
}
function n(n2, l, r2, u) {
  if (r2.level === u.level)
    return l;
  const i = n2.tileInfo.size, a = n2.getTileResolution(r2.level), c2 = n2.getTileResolution(u.level);
  let g = n2.getLODInfoAt(u.level);
  const h = g.getXForColumn(u.col), d = g.getYForRow(u.row);
  g = n2.getLODInfoAt(r2.level);
  const f = g.getXForColumn(r2.col), s = g.getYForRow(r2.row), m = e(l) / i[0], v = t(l) / i[1], w = Math.round(m * ((h - f) / a)), I = Math.round(v * (-(d - s) / a)), M = Math.round(m * i[0] * (c2 / a)), F = Math.round(v * i[1] * (c2 / a)), L = o(i);
  return L.getContext("2d").drawImage(l, w, I, M, F, 0, 0, i[0], i[1]), L;
}
function o(e2) {
  const t2 = document.createElement("canvas");
  return [t2.width, t2.height] = e2, t2;
}
export {
  n,
  o,
  r
};
