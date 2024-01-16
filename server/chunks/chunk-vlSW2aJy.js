import { bo as e, bp as y, e1 as d, br as c } from "./chunk-KFNcxJaF.js";
const o = (o2) => {
  let i = class extends o2 {
    resume() {
      this._isUserPaused = false, this.suspended || this._doResume();
    }
    pause() {
      this._isUserPaused = true, this.suspended || this._doPause();
    }
    constructor(...s) {
      super(...s), this._isUserPaused = false, this.filter = null;
    }
    get connectionStatus() {
      return this._isUserPaused ? "paused" : this._streamConnectionStatus;
    }
    _onSuspendedChange(s) {
      s ? this._doPause() : this._isUserPaused || this._doResume();
    }
  };
  return e([y()], i.prototype, "_isUserPaused", void 0), e([y({ readOnly: true })], i.prototype, "connectionStatus", null), e([y({ type: d })], i.prototype, "filter", void 0), i = e([c("esri.layers.mixins.StreamLayerView")], i), i;
};
export {
  o
};
