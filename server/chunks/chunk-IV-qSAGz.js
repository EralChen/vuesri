import { aV as e, aX as y, a_ as c, bQ as V$1, ky as u, ce as d$1, cl as A$1, aO as s, fb as d$2, c8 as u$1, fc as e$1, fd as c$1, eu as u$2 } from "./chunk-ejFG4zJ0.js";
import { n as n$1 } from "./chunk-ZRKw_7qF.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const n = (n2) => {
  let o = class extends n2 {
    constructor(...e2) {
      super(...e2), this.layer = null;
    }
    get interactive() {
      return null != this.analysisView && this.analysisView.interactive;
    }
    set interactive(e2) {
      null != this.analysisView && (this.analysisView.interactive = e2);
    }
    get results() {
      return null != this.analysisView ? this.analysisView.results : new V$1();
    }
    get selectedDimension() {
      return null != this.analysisView ? this.analysisView.selectedDimension : null;
    }
    set selectedDimension(e2) {
      null != this.analysisView && (this.analysisView.selectedDimension = e2);
    }
    async createLengthDimensions(e2) {
      if (null == this.analysisView)
        throw u();
      await this.analysisView.createLengthDimensions(e2);
    }
  };
  return e([y()], o.prototype, "layer", void 0), e([y()], o.prototype, "interactive", null), e([y({ readOnly: true })], o.prototype, "results", null), e([y()], o.prototype, "selectedDimension", null), o = e([c("esri.views.layers.DimensionLayerView")], o), o;
};
const p = "analysis-view-handles";
let d = class extends n$1(n(u$2)) {
  constructor(s2) {
    super(s2), this.type = "dimension-3d", this._analysisModule = null;
  }
  initialize() {
    this.addHandles(d$1(() => this.layer.source, (s2) => {
      this._destroyAnalysisView(), null != s2 && this._createAnalysisView(s2);
    }, A$1), p);
  }
  destroy() {
    this.removeHandles(p), this._destroyAnalysisView();
  }
  isUpdating() {
    return null != this._createAnalysisViewTask || null != this.analysisView && this.analysisView.updating;
  }
  async whenAnalysisView() {
    if (null != this.analysisView)
      return this.analysisView;
    if (null != this._createAnalysisViewTask)
      return this._createAnalysisViewTask.promise;
    throw new s("layerview:no-analysisview-for-analysis", "The analysis has not been set on the DimensionLayer of this layer view");
  }
  _createAnalysisView(s2) {
    const e2 = d$2(async (i) => (this.analysisView = await this._createAnalysisViewPromise(s2, i), this._createAnalysisViewTask === e2 && (this._createAnalysisViewTask = null), this.analysisView));
    this.addResolvingPromise(e2.promise), this._createAnalysisViewTask = e2;
  }
  _destroyAnalysisView() {
    this.analysisView = u$1(this.analysisView), this._createAnalysisViewTask = e$1(this._createAnalysisViewTask);
  }
  async _createAnalysisViewPromise(s2, i) {
    let e2 = this._analysisModule;
    if (null == e2) {
      const s3 = await this._loadAnalysisModule();
      this._analysisModule = s3, e2 = s3;
    }
    const a = new e2.default({ analysis: s2, view: this.view, parent: this });
    if (await a.when(), c$1(i))
      throw a.destroy(), u();
    return a;
  }
  _loadAnalysisModule() {
    return import("./chunk-7GRgxXII.js");
  }
};
e([y()], d.prototype, "type", void 0), e([y()], d.prototype, "analysisView", void 0), e([y()], d.prototype, "_createAnalysisViewTask", void 0), d = e([c("esri.views.3d.layers.DimensionLayerView3D")], d);
const V = d;
export {
  V as default
};
