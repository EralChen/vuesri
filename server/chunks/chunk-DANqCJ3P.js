import { dO as a, fQ as m$1, dP as u, fX as a$1, bI as b, bb as s$1, bJ as d$1, bD as u$1, ap as M$1, bo as e, bp as y$1, br as c } from "./chunk-KFNcxJaF.js";
import { v } from "./chunk-FihFYhey.js";
import { i } from "./chunk-ibWpFF1V.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
let y = class extends i(a(m$1(u))) {
  constructor() {
    super(...arguments), this.bitmapContainer = new a$1();
  }
  supportsSpatialReference(e2) {
    return this.layer.serviceSupportsSpatialReference(e2);
  }
  update(e2) {
    this.strategy.update(e2).catch((e3) => {
      b(e3) || s$1.getLogger(this).error(e3);
    });
  }
  attach() {
    const { layer: e2 } = this, { imageMaxHeight: t, imageMaxWidth: r } = e2;
    this.bitmapContainer = new a$1(), this.container.addChild(this.bitmapContainer), this.strategy = new v({ container: this.bitmapContainer, fetchSource: this.fetchImage.bind(this), requestUpdate: this.requestUpdate.bind(this), imageMaxHeight: t, imageMaxWidth: r, imageRotationSupported: false, imageNormalizationSupported: false, hidpi: false }), this.addAttachHandles(d$1(() => this.exportImageVersion, () => this.requestUpdate()));
  }
  detach() {
    this.strategy = u$1(this.strategy), this.container.removeAllChildren();
  }
  moveStart() {
  }
  viewChange() {
  }
  moveEnd() {
    this.requestUpdate();
  }
  createFetchPopupFeaturesQuery(e2) {
    const { view: t, bitmapContainer: r } = this, { x: i2, y: s } = e2, { spatialReference: a2 } = t;
    let o, n = 0, m = 0;
    if (r.children.some((e3) => {
      const { width: t2, height: r2, resolution: h2, x: c3, y: d2 } = e3, u2 = c3 + h2 * t2, y2 = d2 - h2 * r2;
      return i2 >= c3 && i2 <= u2 && s <= d2 && s >= y2 && (o = new M$1({ xmin: c3, ymin: y2, xmax: u2, ymax: d2, spatialReference: a2 }), n = t2, m = r2, true);
    }), !o)
      return null;
    const h = o.width / n, c2 = Math.round((i2 - o.xmin) / h), d = Math.round((o.ymax - s) / h);
    return { extent: o, width: n, height: m, x: c2, y: d };
  }
  async doRefresh() {
    this.requestUpdate();
  }
  isUpdating() {
    return this.strategy.updating || this.updateRequested;
  }
  fetchImage(e2, t, r, i2) {
    return this.layer.fetchImageBitmap(e2, t, r, { timeExtent: this.timeExtent, ...i2 });
  }
};
e([y$1()], y.prototype, "strategy", void 0), e([y$1()], y.prototype, "updating", void 0), y = e([c("esri.views.2d.layers.WMSLayerView2D")], y);
const g = y;
export {
  g as default
};
