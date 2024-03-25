import { fU as n$1, cm as e$1, aV as e, aX as y, a_ as c } from "./chunk-ejFG4zJ0.js";
const s = (s2) => {
  let n = class extends n$1(s2) {
    constructor() {
      super(...arguments), this.parent = null, this._userInteractive = false, this._interactiveViewModelCount = 0;
    }
    get interactive() {
      return this._interactiveViewModelCount > 0 || this._userInteractive;
    }
    set interactive(e2) {
      this._userInteractive = e2;
    }
    get updating() {
      return false;
    }
    get visible() {
      return null == this.parent || this.parent.visible && !this.parent.suspended;
    }
    set visible(e2) {
      this._overrideIfSome("visible", e2);
    }
    forceInteractiveForViewModel() {
      return this._interactiveViewModelCount++, e$1(() => this._interactiveViewModelCount--);
    }
  };
  return e([y({ constructOnly: true })], n.prototype, "parent", void 0), e([y({ constructOnly: true })], n.prototype, "view", void 0), e([y({ type: Boolean })], n.prototype, "interactive", null), e([y()], n.prototype, "_userInteractive", void 0), e([y({ readOnly: true })], n.prototype, "updating", null), e([y()], n.prototype, "visible", null), e([y()], n.prototype, "_interactiveViewModelCount", void 0), n = e([c("esri.views.3d.analysis.AnalysisView3D")], n), n;
};
export {
  s
};
