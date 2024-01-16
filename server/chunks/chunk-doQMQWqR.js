import { bo as e, bp as y, br as c, bh as V$1, kc as u, bJ as d$1, bR as A, aM as s$1, el as d$2, bD as u$1, em as e$1, en as c$1, dP as u$2 } from "./chunk-KFNcxJaF.js";
import { n as n$1 } from "./chunk-7Z1hjEcP.js";
import "@popperjs/core";
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
  return e([y()], o.prototype, "layer", void 0), e([y()], o.prototype, "interactive", null), e([y({ readOnly: true })], o.prototype, "results", null), e([y()], o.prototype, "selectedDimension", null), e([y()], o.prototype, "analysisView", void 0), o = e([c("esri.views.layers.DimensionLayerView")], o), o;
};
const p = "analysis-view-handles";
let d = class extends n$1(n(u$2)) {
  constructor(s) {
    super(s), this.type = "dimension-3d", this._analysisModule = null;
  }
  initialize() {
    this.addHandles(d$1(() => this.layer.source, (s) => {
      this._destroyAnalysisView(), null != s && this._createAnalysisView(s);
    }, A), p);
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
    throw new s$1("layerview:no-analysisview-for-analysis", "The analysis has not been set on the DimensionLayer of this layer view");
  }
  _createAnalysisView(s) {
    const e2 = d$2(async (i) => (this.analysisView = await this._createAnalysisViewPromise(s, i), this._createAnalysisViewTask === e2 && (this._createAnalysisViewTask = null), this.analysisView));
    this.addResolvingPromise(e2.promise), this._createAnalysisViewTask = e2;
  }
  _destroyAnalysisView() {
    this.analysisView = u$1(this.analysisView), this._createAnalysisViewTask = e$1(this._createAnalysisViewTask);
  }
  async _createAnalysisViewPromise(s, i) {
    let e2 = this._analysisModule;
    if (null == e2) {
      const s2 = await this._loadAnalysisModule();
      this._analysisModule = s2, e2 = s2;
    }
    const a = new e2.default({ analysis: s, view: this.view, parent: this });
    if (await a.when(), c$1(i))
      throw a.destroy(), u();
    return a;
  }
  _loadAnalysisModule() {
    return import("./chunk-VYdtGLBV.js");
  }
};
e([y()], d.prototype, "type", void 0), e([y()], d.prototype, "analysisView", void 0), e([y()], d.prototype, "_createAnalysisViewTask", void 0), d = e([c("esri.views.3d.layers.DimensionLayerView3D")], d);
const V = d;
export {
  V as default
};
