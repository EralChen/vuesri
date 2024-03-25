import { b0 as has, fa as t, bX as P$1, bJ as c$1, aV as e, aX as y, ez as t$1, a_ as c$2, eu as u$1 } from "./chunk-ejFG4zJ0.js";
import { S as St } from "./chunk-Or4hSTj_.js";
import { n } from "./chunk-ZRKw_7qF.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-m3sjKNXT.js";
import "./chunk-tcpOk1v2.js";
import "./chunk-n_TfoHHo.js";
import "./chunk-LITpsmk3.js";
import "./chunk-wg0ozFEK.js";
import "./chunk-9u8dCT92.js";
import "./chunk-IVubHwAV.js";
import "./chunk-8zH-_H-O.js";
import "./chunk-qr0t-oSA.js";
import "./chunk-nxkTbLqW.js";
import "./chunk-uS4nEbwW.js";
import "./chunk-KrpK7L1w.js";
import "./chunk-t40IK_QY.js";
import "./chunk-ISSNghJ_.js";
import "./chunk-stE6bWuO.js";
import "./chunk-E1ai5rf5.js";
import "./chunk-P_v7gizd.js";
import "./chunk-KyVc0M84.js";
import "./chunk-KfB6QvrM.js";
import "./chunk-pZO3UCge.js";
import "./chunk-H58sM9yM.js";
import "./chunk-HoJyfhBe.js";
import "./chunk-XuSN4Qyd.js";
import "./chunk-drfK378b.js";
import "./chunk-315ILBUn.js";
import "./chunk-QztbNmp9.js";
import "./chunk-GTnGZnu1.js";
import "./chunk-F8GT-pDR.js";
import "./chunk-6ji-DoVP.js";
import "./chunk-ItRUmXQG.js";
const d = 0.2;
let c = class extends St(n(u$1)) {
  constructor() {
    super(...arguments), this.type = "integrated-mesh-3d", this._elevationContext = "im", this._isIntegratedMesh = true, this._supportsLabeling = false, this._needsNormals = has("enable-feature:im-shading"), this.drapeTargetType = t.WithoutRasterImage;
  }
  get i3slayer() {
    return this.layer;
  }
  get updatingProgressValue() {
    return this._controller?.updatingProgress ?? 0;
  }
  get lodFactor() {
    return this.view?.qualitySettings?.sceneService?.integratedMesh?.lodFactor ?? 1;
  }
  get progressiveLoadFactor() {
    return this.lodFactor >= 1 ? d : 1;
  }
  get layerPopupEnabledAndHasTemplate() {
    return false;
  }
  initialize() {
    this._updatingHandles.add(() => this.layer.modifications, () => this._loadModifications(), P$1), this.view.basemapTerrain.overlayManager.registerDrapeTarget(this);
  }
  destroy() {
    this.view.basemapTerrain.overlayManager.unregisterDrapeTarget(this);
  }
  _createLayerGraphic() {
    const e2 = new c$1();
    return e2.layer = this.layer, e2.sourceLayer = this.layer, e2;
  }
  canResume() {
    return super.canResume() && (!this._controller || this._controller.rootNodeVisible);
  }
  _loadModifications() {
    if (this.removeHandles("modifications"), null == this.layer.modifications)
      return void (this._modifications = []);
    const e2 = this.layer.modifications;
    this.addHandles(this._updatingHandles.addOnCollectionChange(() => e2, () => this._modifications = e2.toArray(), P$1), "modifications");
  }
};
e([y()], c.prototype, "layer", void 0), e([y()], c.prototype, "i3slayer", null), e([y(t$1)], c.prototype, "updatingProgress", void 0), e([y()], c.prototype, "updatingProgressValue", null), e([y()], c.prototype, "lodFactor", null), e([y({ readOnly: true })], c.prototype, "progressiveLoadFactor", null), c = e([c$2("esri.views.3d.layers.SceneLayerView3D")], c);
const m = c;
export {
  m as default
};
