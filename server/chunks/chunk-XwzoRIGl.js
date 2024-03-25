import { et as i, gJ as m$1, eu as u$1, gQ as a, cd as b$1, aT as s$1, ce as d$1, c8 as u$2, aC as M, aV as e, aX as y$1, a_ as c } from "./chunk-ejFG4zJ0.js";
import { v } from "./chunk-tFylJgQz.js";
import { m } from "./chunk-EGG5wFDa.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
let g = class extends m(i(m$1(u$1))) {
  constructor() {
    super(...arguments), this.bitmapContainer = new a();
  }
  supportsSpatialReference(t) {
    return this.layer.serviceSupportsSpatialReference(t);
  }
  update(t) {
    this.strategy.update(t).catch((t2) => {
      b$1(t2) || s$1.getLogger(this).error(t2);
    });
  }
  attach() {
    const { layer: t } = this, { imageMaxHeight: e2, imageMaxWidth: r } = t;
    this.bitmapContainer = new a(), this.container.addChild(this.bitmapContainer), this.strategy = new v({ container: this.bitmapContainer, fetchSource: this.fetchImage.bind(this), requestUpdate: this.requestUpdate.bind(this), imageMaxHeight: e2, imageMaxWidth: r, imageRotationSupported: false, imageNormalizationSupported: false, hidpi: false }), this.addAttachHandles(d$1(() => this.exportImageVersion, () => this.requestUpdate()));
  }
  detach() {
    this.strategy = u$2(this.strategy), this.container.removeAllChildren();
  }
  moveStart() {
  }
  viewChange() {
  }
  moveEnd() {
    this.requestUpdate();
  }
  createFetchPopupFeaturesQuery(t) {
    const { view: e2, bitmapContainer: r } = this, { x: i2, y: s } = t, { spatialReference: a2 } = e2;
    let o, p = 0, m2 = 0;
    if (r.children.some((t2) => {
      const { width: e3, height: r2, resolution: h2, x: c3, y: d2 } = t2, u = c3 + h2 * e3, g2 = d2 - h2 * r2;
      return i2 >= c3 && i2 <= u && s <= d2 && s >= g2 && (o = new M({ xmin: c3, ymin: g2, xmax: u, ymax: d2, spatialReference: a2 }), p = e3, m2 = r2, true);
    }), !o)
      return null;
    const h = o.width / p, c2 = Math.round((i2 - o.xmin) / h), d = Math.round((o.ymax - s) / h);
    return { extent: o, width: p, height: m2, x: c2, y: d };
  }
  async doRefresh() {
    this.requestUpdate();
  }
  isUpdating() {
    return this.strategy.updating || this.updateRequested;
  }
  fetchImage(t, e2, r, i2) {
    return this.layer.fetchImageBitmap(t, e2, r, { timeExtent: this.timeExtent, ...i2 });
  }
};
e([y$1()], g.prototype, "strategy", void 0), e([y$1()], g.prototype, "updating", void 0), g = e([c("esri.views.2d.layers.WMSLayerView2D")], g);
const y = g;
export {
  y as default
};
