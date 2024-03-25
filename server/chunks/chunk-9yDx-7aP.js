import { aV as e, aX as y, eT as d, a_ as c } from "./chunk-ejFG4zJ0.js";
const r = (r2) => {
  let i = class extends r2 {
    resume() {
      this._isUserPaused = false, this.suspended || this._doResume();
    }
    pause() {
      this._isUserPaused = true, this.suspended || this._doPause();
    }
    disconnect() {
      this._doDisconnect();
    }
    connect() {
      this._doConnect();
    }
    clear() {
      this._doClear();
    }
    constructor(...s) {
      super(...s), this._isUserPaused = false, this.filter = null;
    }
    get connectionStatus() {
      return (this._isUserPaused || this.suspended) && "connected" === this._streamConnectionStatus ? "paused" : this._streamConnectionStatus;
    }
    _onSuspendedChange(s) {
      s ? this._doPause() : this._isUserPaused || this._doResume();
    }
  };
  return e([y()], i.prototype, "_isUserPaused", void 0), e([y({ readOnly: true })], i.prototype, "connectionStatus", null), e([y({ type: d })], i.prototype, "filter", void 0), i = e([c("esri.layers.mixins.StreamLayerView")], i), i;
};
export {
  r
};
