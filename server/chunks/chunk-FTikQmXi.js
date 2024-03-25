import { py as r$2, lB as b, m9 as e$1, b6 as u$1, n$ as h, cu as E, aV as e$2, a_ as c } from "./chunk-ejFG4zJ0.js";
import { i } from "./chunk-YBgi6goH.js";
let r$1 = class r extends r$2 {
  constructor(e2, s, r3, i2, a, n3, o2 = null) {
    super(e2, s, r3, i2, a, n3), this.bitmap = new b(o2), this.bitmap.coordScale = [a, n3], this.bitmap.once("isReady", () => this.ready());
  }
  destroy() {
    super.destroy(), this.bitmap.destroy();
  }
  beforeRender(e2) {
    this.bitmap.beforeRender(e2), super.beforeRender(e2);
  }
  afterRender(e2) {
    this.bitmap.afterRender(e2), super.afterRender(e2);
  }
  set stencilRef(e2) {
    this.bitmap.stencilRef = e2;
  }
  get stencilRef() {
    return this.bitmap.stencilRef;
  }
  _createTransforms() {
    return { displayViewScreenMat3: e$1(), tileMat3: e$1() };
  }
  setTransform(e2) {
    super.setTransform(e2), this.bitmap.transforms.displayViewScreenMat3 = this.transforms.displayViewScreenMat3;
  }
  onAttach() {
    this.bitmap.stage = this.stage;
  }
  onDetach() {
    this.bitmap && (this.bitmap.stage = null);
  }
};
let n$1 = class n extends i {
  get requiresDedicatedFBO() {
    return this.children.some((e2) => "additive" === e2.bitmap.blendFunction);
  }
  createTile(r3) {
    const t2 = this._tileInfoView.getTileBounds(u$1(), r3), s = this._tileInfoView.getTileResolution(r3.level), [n3, o2] = this._tileInfoView.tileInfo.size;
    return new r$1(r3, s, t2[0], t2[3], n3, o2);
  }
  prepareRenderPasses(e2) {
    const i2 = e2.registerRenderPass({ name: "bitmap (tile)", brushes: [h.bitmap], target: () => this.children.map((e3) => e3.bitmap), drawPhase: E.MAP });
    return [...super.prepareRenderPasses(e2), i2];
  }
  doRender(e2) {
    this.visible && e2.drawPhase === E.MAP && super.doRender(e2);
  }
};
const r2 = (r3) => {
  let s = class extends r3 {
    attach() {
      this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`), this._bitmapView = new n$1(this._tileInfoView), this.container.addChild(this._bitmapView);
    }
    detach() {
      this.container.removeChild(this._bitmapView), this._bitmapView?.removeAllChildren(), this._bitmapView = null;
    }
  };
  return s = e$2([c("esri.views.2d.layers.BitmapTileLayerView2D")], s), s;
};
function e(e2) {
  return e2 instanceof HTMLImageElement ? e2.naturalWidth : e2.width;
}
function t(e2) {
  return e2 instanceof HTMLImageElement ? e2.naturalHeight : e2.height;
}
function n2(n3, l, r3, u) {
  if (r3.level === u.level)
    return l;
  const i2 = n3.tileInfo.size, a = n3.getTileResolution(r3.level), c2 = n3.getTileResolution(u.level);
  let g = n3.getLODInfoAt(u.level);
  const h2 = g.getXForColumn(u.col), d = g.getYForRow(u.row);
  g = n3.getLODInfoAt(r3.level);
  const f = g.getXForColumn(r3.col), s = g.getYForRow(r3.row), m = e(l) / i2[0], v = t(l) / i2[1], w = Math.round(m * ((h2 - f) / a)), I = Math.round(v * (-(d - s) / a)), M = Math.round(m * i2[0] * (c2 / a)), F = Math.round(v * i2[1] * (c2 / a)), L = o(i2);
  return L.getContext("2d").drawImage(l, w, I, M, F, 0, 0, i2[0], i2[1]), L;
}
function o(e2) {
  const t2 = document.createElement("canvas");
  return [t2.width, t2.height] = e2, t2;
}
export {
  n2 as n,
  o,
  r2 as r
};
