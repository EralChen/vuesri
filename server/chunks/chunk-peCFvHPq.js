import { ce as d$1, cl as A$1, aO as s, fb as d$2, c8 as u$1, fc as e, fd as c$1, aV as e$1, aX as y, a_ as c$2, eu as u$2 } from "./chunk-ejFG4zJ0.js";
import { n } from "./chunk-ZRKw_7qF.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const c = "analysis-view-handles";
let p = class extends n(u$2) {
  constructor(s2) {
    super(s2), this.type = "line-of-sight-3d", this._analysisModule = null;
  }
  initialize() {
    this.addHandles(d$1(() => this.layer.analysis, (s2) => {
      this._destroyAnalysisView(), null != s2 && this._createAnalysisView(s2);
    }, A$1), c);
  }
  destroy() {
    this.removeHandles(c), this._destroyAnalysisView();
  }
  async whenAnalysisView() {
    if (null != this.analysisView)
      return this.analysisView;
    if (null != this._createAnalysisViewTask)
      return this._createAnalysisViewTask.promise;
    throw new s("layerview:no-analysisview-for-analysis", "The analysis has not been set on the LineOfSightLayer of this layer view");
  }
  isUpdating() {
    return null != this._createAnalysisViewTask || null != this.analysisView && this.analysisView.updating;
  }
  _createAnalysisView(s2) {
    const e2 = d$2(async (i) => (this.analysisView = await this._createAnalysisViewPromise(s2, i), this._createAnalysisViewTask === e2 && (this._createAnalysisViewTask = null), this.analysisView));
    this._createAnalysisViewTask = e2;
  }
  _destroyAnalysisView() {
    this.analysisView = u$1(this.analysisView), this._createAnalysisViewTask = e(this._createAnalysisViewTask);
  }
  async _createAnalysisViewPromise(s$1, i) {
    let a = this._analysisModule;
    if (null == a) {
      const s2 = await this._loadAnalysisModule();
      this._analysisModule = s2, a = s2;
    }
    const t = new a.default({ analysis: s$1, view: this.view, parent: this });
    if (await t.when(), c$1(i))
      throw t.destroy(), new s("layerview:no-analysisview-for-analysis", "The analysis has not been added to the LineOfSightLayer of this layer view", { analysis: s$1 });
    return t;
  }
  _loadAnalysisModule() {
    return import("./chunk-dkZLOQ5C.js");
  }
};
e$1([y()], p.prototype, "type", void 0), e$1([y()], p.prototype, "layer", void 0), e$1([y()], p.prototype, "analysisView", void 0), e$1([y()], p.prototype, "_createAnalysisViewTask", void 0), p = e$1([c$2("esri.views.3d.layers.LineOfSightLayerView3D")], p);
const d = p;
export {
  d as default
};
