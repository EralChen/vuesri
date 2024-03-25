import { et as i, gJ as m$1, eu as u$1, cd as b$1, aT as s$1, gQ as a, aV as e, aX as y, a_ as c } from "./chunk-ejFG4zJ0.js";
import { v } from "./chunk-tFylJgQz.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
let h = class extends i(m$1(u$1)) {
  update(t) {
    this._strategy.update(t).catch((t2) => {
      b$1(t2) || s$1.getLogger(this).error(t2);
    }), this.notifyChange("updating");
  }
  attach() {
    this._bitmapContainer = new a(), this.container.addChild(this._bitmapContainer), this._strategy = new v({ container: this._bitmapContainer, fetchSource: this.fetchBitmapData.bind(this), requestUpdate: this.requestUpdate.bind(this) });
  }
  detach() {
    this._strategy.destroy(), this._strategy = null, this.container.removeChild(this._bitmapContainer), this._bitmapContainer.removeAllChildren();
  }
  moveStart() {
  }
  viewChange() {
  }
  moveEnd() {
    this.requestUpdate();
  }
  fetchBitmapData(t, e2, r) {
    return this.layer.fetchImageBitmap(t, e2, r);
  }
  async doRefresh() {
    this.requestUpdate();
  }
  isUpdating() {
    return this._strategy.updating || this.updateRequested;
  }
};
e([y()], h.prototype, "_strategy", void 0), e([y()], h.prototype, "updating", void 0), h = e([c("esri.views.2d.layers.BaseDynamicLayerView2D")], h);
const d = h;
export {
  d as default
};
