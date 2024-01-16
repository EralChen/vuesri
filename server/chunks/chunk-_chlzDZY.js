import { ek as t, bn as P$1, bf as c$1, bo as e, bp as y, dU as t$1, br as c$2, dP as u$1 } from "./chunk-KFNcxJaF.js";
import { E as Et } from "./chunk-q8E2ylxA.js";
import { n } from "./chunk-7Z1hjEcP.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-ZkCkRDhu.js";
import "./chunk-YQ5VkQy2.js";
import "./chunk-9JhcsZul.js";
import "./chunk-0qGRH15g.js";
import "./chunk-_FX4l1J_.js";
import "./chunk-sTYTsp9W.js";
import "./chunk-P6X7E8x9.js";
import "./chunk-K_eIouts.js";
import "./chunk-OvdaIYdh.js";
import "./chunk-HNaBfNyK.js";
import "./chunk-uS4nEbwW.js";
import "./chunk-rv0-OtqZ.js";
import "./chunk-pMG-yMIH.js";
import "./chunk-MT1PWqgL.js";
import "./chunk-tNARKRa3.js";
import "./chunk-mk4KSkT-.js";
import "./chunk-ewxQmXoN.js";
import "./chunk-Tt9yuqqG.js";
import "./chunk-I8SN0CZW.js";
import "./chunk-XCl2NxdK.js";
import "./chunk-H58sM9yM.js";
import "./chunk-UzDyJefO.js";
import "./chunk-vP0bHkve.js";
import "./chunk-UZskY1JT.js";
import "./chunk-F2pifch3.js";
import "./chunk-eM88eykE.js";
import "./chunk-Ju_DQ7D7.js";
import "./chunk-CenXEh_9.js";
const c = 0.2;
let d = class extends Et(n(u$1)) {
  constructor() {
    super(...arguments), this.type = "integrated-mesh-3d", this._elevationContext = "im", this._isIntegratedMesh = true, this._supportsLabeling = false, this.drapeTargetType = t.WithoutRasterImage;
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
    return this.lodFactor >= 1 ? c : 1;
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
e([y()], d.prototype, "layer", void 0), e([y()], d.prototype, "i3slayer", null), e([y(t$1)], d.prototype, "updatingProgress", void 0), e([y()], d.prototype, "updatingProgressValue", null), e([y()], d.prototype, "lodFactor", null), e([y({ readOnly: true })], d.prototype, "progressiveLoadFactor", null), d = e([c$2("esri.views.3d.layers.SceneLayerView3D")], d);
const u = d;
export {
  u as default
};
