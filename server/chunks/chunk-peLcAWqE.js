import { bJ as d$1, bR as A, aM as s$1, el as d$2, bD as u$1, em as e, en as c$1, bo as e$1, bp as y, br as c$2, dP as u } from "./chunk-KFNcxJaF.js";
import { n } from "./chunk-7Z1hjEcP.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const c = "analysis-view-handles";
let p = class extends n(u) {
  constructor(s) {
    super(s), this.type = "line-of-sight-3d", this._analysisModule = null;
  }
  initialize() {
    this.addHandles(d$1(() => this.layer.analysis, (s) => {
      this._destroyAnalysisView(), null != s && this._createAnalysisView(s);
    }, A), c);
  }
  destroy() {
    this.removeHandles(c), this._destroyAnalysisView();
  }
  async whenAnalysisView() {
    if (null != this.analysisView)
      return this.analysisView;
    if (null != this._createAnalysisViewTask)
      return this._createAnalysisViewTask.promise;
    throw new s$1("layerview:no-analysisview-for-analysis", "The analysis has not been set on the LineOfSightLayer of this layer view");
  }
  isUpdating() {
    return null != this._createAnalysisViewTask || null != this.analysisView && this.analysisView.updating;
  }
  _createAnalysisView(s) {
    const e2 = d$2(async (i) => (this.analysisView = await this._createAnalysisViewPromise(s, i), this._createAnalysisViewTask === e2 && (this._createAnalysisViewTask = null), this.analysisView));
    this._createAnalysisViewTask = e2;
  }
  _destroyAnalysisView() {
    this.analysisView = u$1(this.analysisView), this._createAnalysisViewTask = e(this._createAnalysisViewTask);
  }
  async _createAnalysisViewPromise(s, i) {
    let a = this._analysisModule;
    if (null == a) {
      const s2 = await this._loadAnalysisModule();
      this._analysisModule = s2, a = s2;
    }
    const t = new a.default({ analysis: s, view: this.view, parent: this });
    if (await t.when(), c$1(i))
      throw t.destroy(), new s$1("layerview:no-analysisview-for-analysis", "The analysis has not been added to the LineOfSightLayer of this layer view", { analysis: s });
    return t;
  }
  _loadAnalysisModule() {
    return import("./chunk-cpQ6zxYB.js");
  }
};
e$1([y()], p.prototype, "type", void 0), e$1([y()], p.prototype, "layer", void 0), e$1([y()], p.prototype, "analysisView", void 0), e$1([y()], p.prototype, "_createAnalysisViewTask", void 0), p = e$1([c$2("esri.views.3d.layers.LineOfSightLayerView3D")], p);
const d = p;
export {
  d as default
};
