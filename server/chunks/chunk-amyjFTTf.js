import { jT as i$1, db as f$1, aV as e, aX as y, a_ as c, b$ as u$1, gJ as m$1, eu as u$2, dG as h, bJ as c$1, c8 as u$3, ce as d$1, bX as P$1 } from "./chunk-ejFG4zJ0.js";
import { t } from "./chunk-Ds4Mh7HH.js";
import { $ } from "./chunk-bVBkTso-.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-ZVucZwAB.js";
import "./chunk-uWxJ6ZLt.js";
import "./chunk-Mke_bPEP.js";
import "./chunk-iXn63MLq.js";
import "./chunk-9fkEo-9z.js";
import "./chunk-YBgi6goH.js";
import "./chunk-xXBI18-w.js";
import "./chunk-drfK378b.js";
import "./chunk-xHgk_Pqx.js";
import "./chunk-KfB6QvrM.js";
import "./chunk-stE6bWuO.js";
import "./chunk-pZO3UCge.js";
import "./chunk-H58sM9yM.js";
import "./chunk-X6Yd3gQb.js";
let p = class extends i$1(f$1) {
  constructor(o) {
    super(o), this.frameCenter = null, this.frameOutline = null, this.lineOfSight = null, this.sensorLocation = null, this.sensorTrail = null;
  }
};
e([y({ type: Boolean })], p.prototype, "frameCenter", void 0), e([y({ type: Boolean })], p.prototype, "frameOutline", void 0), e([y({ type: Boolean })], p.prototype, "lineOfSight", void 0), e([y({ type: Boolean })], p.prototype, "sensorLocation", void 0), e([y({ type: Boolean })], p.prototype, "sensorTrail", void 0), p = e([c("esri.layers.support.TelemetryDisplay")], p);
const i = p;
const f = new u$1([255, 127, 0]);
let g = class extends m$1(u$2) {
  constructor() {
    super(...arguments), this._graphicsLayer = new h(), this._frameOutlineGraphic = new c$1({ symbol: { type: "simple-fill", outline: { type: "simple-line", color: f } } }), this._sensorTrailGraphic = new c$1({ symbol: { type: "simple-line", color: f } }), this._lineOfSightGraphic = new c$1({ symbol: { type: "simple-line", color: f } }), this._sensorLocationGraphic = new c$1({ symbol: { type: "simple-marker", color: f } }), this._frameCenterGraphic = new c$1({ symbol: { type: "simple-marker", color: f } }), this.layer = null, this.symbolColor = f, this.visibleTelemetryElements = null;
  }
  destroy() {
    this._graphicsLayer = u$3(this._graphicsLayer);
  }
  initialize() {
    this.addHandles(d$1(() => this.symbolColor, () => {
      this._frameOutlineGraphic.symbol.outline.color = this.symbolColor, this._sensorTrailGraphic.symbol.color = this.symbolColor, this._lineOfSightGraphic.symbol.color = this.symbolColor, this._sensorLocationGraphic.symbol.color = this.symbolColor, this._frameCenterGraphic.symbol.color = this.symbolColor;
    }, P$1)), this._graphicsLayer.graphics.addMany([this._frameOutlineGraphic, this._sensorTrailGraphic, this._lineOfSightGraphic, this._sensorLocationGraphic, this._frameCenterGraphic]), this.visibleTelemetryElements = new i({ frameCenter: this.layer.telemetryDisplay?.frameCenter ?? true, frameOutline: this.layer.telemetryDisplay?.frameOutline ?? true, lineOfSight: this.layer.telemetryDisplay?.lineOfSight ?? true, sensorLocation: this.layer.telemetryDisplay?.sensorLocation ?? true, sensorTrail: this.layer.telemetryDisplay?.sensorTrail ?? true });
  }
  attach() {
    this.graphicsView = new $({ requestUpdateCallback: () => this.requestUpdate(), view: this.view, graphics: this._graphicsLayer.graphics, container: new t(this.view.featuresTilingScheme) }), this.container.addChild(this.graphicsView.container), this.addAttachHandles(this._graphicsLayer.on("graphic-update", this.graphicsView.graphicUpdateHandler)), this.addAttachHandles([d$1(() => [this.layer.telemetryDisplay?.frameCenter, this.layer.telemetryDisplay?.frameOutline, this.layer.telemetryDisplay?.sensorLocation, this.layer.telemetryDisplay?.sensorTrail, this.layer.telemetryDisplay?.lineOfSight], () => this._updateVisibleTelemetryElements(), P$1), d$1(() => [this.layer.telemetry, this.visibleTelemetryElements?.frameCenter, this.visibleTelemetryElements?.frameOutline, this.visibleTelemetryElements?.sensorLocation, this.visibleTelemetryElements?.sensorTrail, this.visibleTelemetryElements?.lineOfSight], () => this._updateGraphicGeometries(), P$1)]);
  }
  detach() {
    this.container.removeAllChildren(), this.graphicsView = u$3(this.graphicsView);
  }
  supportsSpatialReference(e2) {
    return true;
  }
  moveStart() {
  }
  moveEnd() {
  }
  viewChange() {
    this.graphicsView.viewChange();
  }
  update(e2) {
    this.graphicsView.processUpdate(e2);
  }
  isUpdating() {
    return !this.graphicsView || this.graphicsView.updating;
  }
  _updateVisibleTelemetryElements() {
    this.visibleTelemetryElements && this.layer.telemetryDisplay && (this.visibleTelemetryElements.frameCenter = this.layer.telemetryDisplay.frameCenter, this.visibleTelemetryElements.frameOutline = this.layer.telemetryDisplay.frameOutline, this.visibleTelemetryElements.lineOfSight = this.layer.telemetryDisplay.lineOfSight, this.visibleTelemetryElements.sensorLocation = this.layer.telemetryDisplay.sensorLocation, this.visibleTelemetryElements.sensorTrail = this.layer.telemetryDisplay.sensorTrail);
  }
  _updateGraphicGeometries() {
    const { telemetry: e2 } = this.layer, { visibleTelemetryElements: i2 } = this;
    e2 && i2 && (i2.frameOutline && e2.frameOutline ? this._frameOutlineGraphic.geometry = this.layer.telemetry.frameOutline : this._frameOutlineGraphic.geometry = null, i2.sensorTrail && e2.sensorTrail ? this._sensorTrailGraphic.geometry = this.layer.telemetry.sensorTrail : this._sensorTrailGraphic.geometry = null, i2.lineOfSight && e2.lineOfSight ? this._lineOfSightGraphic.geometry = this.layer.telemetry.lineOfSight : this._lineOfSightGraphic.geometry = null, i2.sensorLocation && e2.sensorLocation ? this._sensorLocationGraphic.geometry = this.layer.telemetry.sensorLocation : this._sensorLocationGraphic.geometry = null, i2.frameCenter && e2.frameCenter ? this._frameCenterGraphic.geometry = this.layer.telemetry.frameCenter : this._frameCenterGraphic.geometry = null);
  }
};
e([y()], g.prototype, "graphicsView", void 0), e([y()], g.prototype, "layer", void 0), e([y()], g.prototype, "symbolColor", void 0), e([y({ type: i })], g.prototype, "visibleTelemetryElements", void 0), g = e([c("esri.views.2d.layers.VideoLayerView2D")], g);
const u = g;
export {
  u as default
};
