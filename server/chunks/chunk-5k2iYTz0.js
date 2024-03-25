import { aV as e$2, aX as y$1, a_ as c$7, bJ as c$8, bZ as S$1, b0 as has, ym as h$1, cV as o$8, dm as d$6, aB as f$2, o4 as c$9, gO as e$3, b6 as u$8, sl as b, aO as s$4, aT as s$5, bW as h$2, cu as E$1, cU as s$6, bC as L$1, cv as R$1, cw as a$2, mn as N, cZ as p$4, ds as o$a, z3 as s$7, An as i$4, es as e$4, Ao as m$3, id as u$9, gR as n$6, Ap as P$1, b_ as S, zk as f$3, i1 as K$1, Aq as i$6, Ar as o$b, As as ne, At as Z$1, Au as o$c, Av as c$a, my as c$b, bF as O$1, bD as a$4, iT as w$1, eT as d$7, fQ as t$7, Aw as F, et as i$7, gJ as m$5, eu as u$a, f9 as k$1, lV as n$8, bQ as V, cr as q$1, cm as e$7, aC as M$1, ce as d$8, bX as P$2, c8 as u$b, ck as b$1, qi as f$4, cc as m$6, cd as b$2, Ax as T, gT as t$9 } from "./chunk-ejFG4zJ0.js";
import { i as i$3, r as r$6 } from "./chunk-uWxJ6ZLt.js";
import { r as r$5 } from "./chunk-Mke_bPEP.js";
import { o as o$9 } from "./chunk-pjiN37wa.js";
import { e as e$5 } from "./chunk-zypaAtdF.js";
import { e as e$6 } from "./chunk-BRDTP7A8.js";
import { n as n$7, h as h$3, c as y$2, d as t$5, e as h$4, f as a$3, i as i$5, x as x$1, t as t$6, m as m$4, g as c$c, b as a$5 } from "./chunk-xXBI18-w.js";
import { t as t$8 } from "./chunk-ifmCHxBO.js";
import { j } from "./chunk-GTnGZnu1.js";
let p$3 = class p extends c$8 {
  constructor() {
    super(...arguments), this.isAggregate = true;
  }
  getEffectivePopupTemplate(e2 = false) {
    if (this.popupTemplate)
      return this.popupTemplate;
    const t2 = this.sourceLayer?.featureReduction;
    return t2 && "popupTemplate" in t2 && t2.popupEnabled ? t2.popupTemplate : null;
  }
  getObjectId() {
    return this.attributes.aggregateId;
  }
};
e$2([y$1({ type: Boolean })], p$3.prototype, "isAggregate", void 0), p$3 = e$2([c$7("esri.AggregateGraphic")], p$3);
const s$3 = p$3;
let c$6 = class c extends S$1 {
  constructor(e2) {
    super(e2), this._filter = null, this.duration = has("mapview-transitions-duration"), this._excludedEffectView = new h$1(e2), this._includedEffectView = new h$1(e2);
  }
  get excludedEffects() {
    return this._excludedEffectView.effects;
  }
  set featureEffect(e2) {
    this._get("featureEffect") !== e2 && this._transitionTo(e2);
  }
  get filter() {
    return this._filter || this.featureEffect?.filter || null;
  }
  get hasEffects() {
    return this._excludedEffectView.hasEffects || this._includedEffectView.hasEffects;
  }
  get includedEffects() {
    return this._includedEffectView.effects;
  }
  set scale(e2) {
    this._set("scale", e2), this._excludedEffectView.scale = e2, this._includedEffectView.scale = e2;
  }
  get transitioning() {
    return this._excludedEffectView.transitioning || this._includedEffectView.transitioning;
  }
  transitionStep(e2, t2) {
    this._set("scale", t2), this.transitioning ? (this._includedEffectView.transitionStep(e2, t2), this._excludedEffectView.transitionStep(e2, t2), this.transitioning || (this._filter = null)) : (this._excludedEffectView.scale = t2, this._includedEffectView.scale = t2);
  }
  endTransitions() {
    this._includedEffectView.endTransitions(), this._excludedEffectView.endTransitions(), this._filter = null;
  }
  _transitionTo(e2) {
    const t2 = this._get("featureEffect"), i2 = e2, s3 = i2?.includedEffect, f2 = i2?.excludedEffect, c5 = this._includedEffectView.canTransitionTo(s3) && this._excludedEffectView.canTransitionTo(f2);
    this._includedEffectView.effect = s3, this._excludedEffectView.effect = f2, this._set("featureEffect", i2), this._filter = i2?.filter || t2?.filter || null, c5 || this.endTransitions();
  }
};
e$2([y$1()], c$6.prototype, "_filter", void 0), e$2([y$1()], c$6.prototype, "_excludedEffectView", void 0), e$2([y$1()], c$6.prototype, "_includedEffectView", void 0), e$2([y$1()], c$6.prototype, "duration", void 0), e$2([y$1()], c$6.prototype, "excludedEffects", null), e$2([y$1()], c$6.prototype, "featureEffect", null), e$2([y$1()], c$6.prototype, "filter", null), e$2([y$1()], c$6.prototype, "hasEffects", null), e$2([y$1()], c$6.prototype, "includedEffects", null), e$2([y$1({ value: 0 })], c$6.prototype, "scale", null), e$2([y$1()], c$6.prototype, "transitioning", null), c$6 = e$2([c$7("esri.layers.effects.FeatureEffectView")], c$6);
const r$4 = c$6;
let c$5 = class c2 extends d$6 {
  constructor() {
    super(...arguments), this.features = [];
  }
  readFeatures(e2, t2) {
    const o2 = f$2.fromJSON(t2.spatialReference), s3 = [];
    for (let a2 = 0; a2 < e2.length; a2++) {
      const t3 = e2[a2], p3 = s$3.fromJSON(t3), c5 = t3.geometry?.spatialReference;
      null == p3.geometry || c5 || (p3.geometry.spatialReference = o2);
      const m2 = t3.aggregateGeometries, i2 = p3.aggregateGeometries;
      if (m2 && null != i2)
        for (const e3 in i2) {
          const r2 = i2[e3], t4 = m2[e3], s4 = t4?.spatialReference;
          null == r2 || s4 || (r2.spatialReference = o2);
        }
      s3.push(p3);
    }
    return s3;
  }
};
e$2([y$1({ type: [s$3], json: { write: true } })], c$5.prototype, "features", void 0), e$2([o$8("features")], c$5.prototype, "readFeatures", null), c$5 = e$2([c$7("esri.rest.support.AggregateFeatureSet")], c$5);
const m$2 = c$5;
let s$2 = class s {
  constructor() {
    this._instanceById = /* @__PURE__ */ new Map();
  }
  destroy() {
    this._instanceById.clear();
  }
  get size() {
    return this._instanceById.size;
  }
  updateStart() {
    this._instanceByIdNext = /* @__PURE__ */ new Map();
  }
  updateEnd() {
    if (!this._instanceByIdNext)
      throw new Error("InternalError: Found updateEnd call without corresponding updateStart");
    for (const t2 of this._instanceById.keys())
      this._instanceByIdNext.has(t2) || this._instanceById.delete(t2);
    for (const [t2, e2] of this._instanceByIdNext.entries()) {
      const n5 = this._instanceById.get(t2);
      n5 ? n5.setInput(e2.getInput()) : this._instanceById.set(t2, e2);
    }
    this._instanceByIdNext = null;
  }
  values() {
    return this._instanceById.values();
  }
  ensureInstance(s3, i2, r2) {
    let a2 = `${s3.registryName}`;
    for (const t2 in i2) {
      const e2 = i2[t2];
      if ("object" == typeof e2 && "geometry" === t2)
        for (const n5 in e2)
          a2 += `.${t2}.${n5}.${null != e2[n5]}`;
      else
        a2 += `.${t2}.${null != i2[t2]}`;
    }
    if (null != r2)
      for (const t2 in r2)
        r2[t2] && (a2 += `-${t2}`);
    const c5 = c$9(a2);
    if (this._instanceByIdNext) {
      const t2 = new i$3(r$5(c5), s3, s3.meshWriter.name, i2, r2);
      return this._instanceByIdNext.set(c5, t2), t2;
    }
    if (!this._instanceById.has(c5)) {
      const t2 = new i$3(r$5(c5), s3, s3.meshWriter.name, i2, r2);
      this._instanceById.set(c5, t2);
    }
    return this._instanceById.get(c5);
  }
  getInstance(t2) {
    return this._instanceById.get(t2);
  }
};
let n$5 = class n {
  constructor(e2, t2, i2) {
    this.getStage = e2, this.version = t2, this._tileInfoView = i2, this._tiles = /* @__PURE__ */ new Map(), this._pendingUpdates = [], this._locked = false;
  }
  destroy() {
  }
  tiles() {
    return this._tiles.values();
  }
  size() {
    return this._tiles.size;
  }
  setTiles(e2) {
    this._tiles.clear();
    for (const t2 of e2)
      this._tiles.set(t2.key.id, t2);
  }
  lockUploads() {
    this._locked = true;
  }
  unlockUploads() {
    this._locked = false;
    for (const e2 of this._pendingUpdates)
      this.updateTile(e2);
    this._pendingUpdates = [];
  }
  updateTile(e2) {
    if (this._locked)
      return void this._pendingUpdates.push(e2);
    if (has("esri-2d-update-debug")) {
      const t3 = e2.debugInfo?.chunkId ?? "<EnsureEnd>";
      console.debug(`Version[${e2.version}] Tile[${e2.id}] Chunk[${t3}] RenderState.updateTile [${e2.type}]`, e2);
    }
    const t2 = this._ensureTile(e2.id);
    if ("update" === e2.type) {
      const [i3, ...s4] = e2.modify;
      t2.onMessage({ type: "update", modify: i3, remove: e2.remove, end: e2.end, attributeEpoch: e2.attributeEpoch });
      for (const t3 of s4) {
        const i4 = this._tiles.get(t3.tileId);
        i4 && i4.onMessage({ type: "update", modify: t3, remove: e2.remove, end: false, isPixelBuffer: true, attributeEpoch: null });
      }
      return;
    }
    if (null == e2.append)
      return void t2.onMessage({ type: "append", clear: e2.clear, debugInfo: e2.debugInfo, end: e2.end, attributeEpoch: e2.attributeEpoch });
    const [i2, ...s3] = e2.append;
    t2.onMessage({ type: "append", clear: e2.clear, append: i2, debugInfo: e2.debugInfo, end: e2.end, attributeEpoch: e2.attributeEpoch });
    for (const o2 of s3) {
      const e3 = this._tiles.get(o2.tileId);
      e3 && e3.onMessage({ type: "update", modify: o2, remove: [], sort: false, end: false, isPixelBuffer: true, attributeEpoch: null });
    }
  }
  removeTile(e2) {
    const t2 = this._tiles.get(e2);
    has("esri-2d-update-debug") && console.debug(`Tile[${e2}] RenderState.removeTile`), t2?.destroy(), this._tiles.delete(e2);
  }
  isTileDone(e2) {
    const t2 = this._tiles.get(e2.id);
    return !!t2 && t2.isReady;
  }
  _ensureTile(e2) {
    if (!this._tiles.has(e2)) {
      const t2 = this._createTile(e2);
      this._copyPixelBufferedEntitiesInto(t2), this._tiles.set(e2, t2);
    }
    return this._tiles.get(e2);
  }
  _createTile(r2) {
    has("esri-2d-update-debug") && console.debug(`Version[${this.version}] Tile[${r2}] RenderState.createTile`);
    const n5 = new e$3(r2), l3 = this._tileInfoView.getTileBounds(u$8(), n5), d4 = this._tileInfoView.getTileResolution(n5.level), a2 = new b(n5, d4, l3[0], l3[3], true);
    if (a2.stage = this.getStage(), !a2.stage) {
      const i2 = new s$4("featurelayerview:webgl", "Cannot create tile with empty stage");
      s$5.getLogger("esri.views.2d.layers.features.RenderState").error(i2);
    }
    return a2;
  }
  _copyPixelBufferedEntitiesInto(e2) {
    let t2 = 7;
    for (let i2 = -1; i2 <= 1; i2++)
      for (let s3 = -1; s3 <= 1; s3++) {
        if (0 === i2 && 0 === s3)
          continue;
        const o2 = this._tileInfoView.tileInfo.isWrappable, n5 = o$9(e2.key, s3, i2, o2).id, l3 = this._tiles.get(n5);
        if (null != l3) {
          const o3 = 1 << t2;
          e2.copyPixelBufferedEntitesFrom(l3, o3, s3, i2);
        }
        t2--;
      }
  }
};
let l$4 = class l {
  constructor(e2, s3) {
    this.id = e2, this.version = s3, this._resolver = L$1(), this._done = false;
  }
  get done() {
    return this._done;
  }
  get promise() {
    return this._resolver.promise;
  }
  end() {
    this._resolver.resolve(), this._done = true;
  }
  destroy() {
    this._resolver.reject();
  }
};
let u$7 = class u extends r$6 {
  constructor(e2) {
    super(e2.view.featuresTilingScheme), this.updatingHandles = new h$2(), this._hitTestsRequests = [], this._store = new s$2(), this._visibleTiles = /* @__PURE__ */ new Set(), this._subscriptions = /* @__PURE__ */ new Map(), this._updateStatisticsRequests = [], this._lockStatisticUpdates = false, this._layerView = e2;
  }
  renderChildren(e2) {
    if (this.attributeView.update(), this._renderState) {
      const e3 = Array.from(this._renderState.tiles()).filter((e4) => e4.needsUpload);
      if (e3.length) {
        e3[Math.floor(Math.random() * e3.length)].upload(), e3.length >= 2 && this.requestRender();
      }
      for (const t2 of this._renderState.tiles())
        t2.tryReady(this.attributeView.currentEpoch) && (this._layerView.requestUpdate(), this.hasLabels && this._layerView.view.labelManager.requestUpdate(), this.requestRender());
    }
    for (const t2 of this.children)
      t2.setTransform(e2.state);
    if (this.hasAnimation) {
      e2.painter.effects.integrate.draw(e2, e2.attributeView);
    }
    switch (super.renderChildren(e2), e2.drawPhase) {
      case E$1.MAP:
        return this._renderMapPhase(e2);
      case E$1.HIGHLIGHT:
        return this._renderHighlightPhase(e2);
      case E$1.LABEL:
        return this._renderLabelPhase(e2);
    }
  }
  subscriptions() {
    return this._subscriptions.values();
  }
  get _instanceStore() {
    return this._store;
  }
  get instanceStore() {
    return this._store;
  }
  get layerView() {
    return this._layerView;
  }
  get hasLabels() {
    return this._layerView.labelingCollisionInfos.length > 0;
  }
  get hasHighlight() {
    return this._layerView.hasHighlight();
  }
  get _layer() {
    return this._layerView.layer;
  }
  _getExclusivePostprocessingInstance({ drawPhase: e2 }) {
    if (null == this._instanceStore)
      return null;
    let t2 = 0, s3 = null;
    for (const i2 of this._instanceStore.values())
      i2.techniqueRef.drawPhase & e2 && (t2++, i2.techniqueRef.postProcessingEnabled && (s3 = i2));
    return t2 > 1 ? null : s3;
  }
  _getOverrideStencilRef({ drawPhase: e2 }) {
    if (null == this._instanceStore)
      return null;
    let t2 = null;
    for (const s3 of this._instanceStore.values()) {
      if (!(s3.techniqueRef.drawPhase & e2))
        continue;
      const { overrideStencilRef: i2 } = s3.techniqueRef;
      if (null == t2)
        t2 = i2;
      else if (t2 !== i2) {
        t2 = null;
        break;
      }
    }
    return t2;
  }
  get children() {
    return this._renderState ? Array.from(this._renderState.tiles()).filter((e2) => this._visibleTiles.has(e2.key.id)) : [];
  }
  async updateAttributeView(e2) {
    this.requestRender(), await this.updatingHandles.addPromise(this.attributeView.requestUpdate(e2)), this.hasLabels && this._layerView.view.labelManager.requestUpdate();
  }
  updateSubscriptions(e2) {
    for (const { tileId: t2, version: s3 } of e2.subscribe)
      if (this._subscriptions.has(t2))
        this._subscriptions.get(t2).version = s3;
      else {
        const e3 = new l$4(t2, s3);
        this._subscriptions.set(t2, e3), this.updatingHandles.addPromise(e3.promise);
      }
    for (const t2 of e2.unsubscribe) {
      const e3 = this._subscriptions.get(t2);
      e3?.destroy(), this._subscriptions.delete(t2), this.removeTile(t2);
    }
  }
  isDone(e2) {
    return !!this._renderState && this._renderState.isTileDone(e2);
  }
  async updateRenderState(e2) {
    has("esri-2d-update-debug") && console.debug(`Version[${e2}] FeatureContainer.updateRenderState`), this._renderStateNext = new n$5(() => this._stage, e2, this._tileInfoView);
  }
  getDisplayStatistics(e2, t2) {
    const s3 = this._statisticsByLevel.get(e2);
    return s3 ? s3.get(t2) : null;
  }
  updateStatistics(e2, t2) {
    if (this._lockStatisticUpdates)
      return void this._updateStatisticsRequests.push({ level: e2, statistics: t2 });
    let s3 = this._statisticsByLevel.get(e2);
    s3 || (s3 = /* @__PURE__ */ new Map(), this._statisticsByLevel.set(e2, s3));
    for (const i2 of t2)
      s3.set(i2.fieldName, { minValue: i2.minValue, maxValue: i2.maxValue });
  }
  editStart() {
    this._renderState?.lockUploads(), this.attributeView.lockTextureUploads(), this._lockStatisticUpdates = true;
  }
  editEnd() {
    this._renderState?.unlockUploads(), this.attributeView.unlockTextureUploads(), this._lockStatisticUpdates = false;
    for (const e2 of this._updateStatisticsRequests)
      this.updateStatistics(e2.level, e2.statistics);
    this._updateStatisticsRequests = [], this.requestRender();
  }
  swapRenderState() {
    if (this._renderStateNext && (has("esri-2d-update-debug") && console.debug(`Version[${this._renderStateNext.version}] FeatureContainer.update.swapRenderState`), this._renderState?.destroy(), this._renderState = this._renderStateNext, this._renderStateNext = null), this._renderState)
      for (const e2 of this._renderState.tiles())
        e2.upload();
    this.requestRender();
  }
  setVisibleTiles(e2) {
    this._visibleTiles = e2;
  }
  async onMessage(t2, s3) {
    if (s$6(s3), !this._subscriptions.has(t2.id))
      return;
    const i2 = this._subscriptions.get(t2.id);
    if (i2.version !== t2.subscriptionVesrion) {
      if (has("esri-2d-update-debug")) {
        const e2 = `${t2.subscriptionVesrion} != ${i2.version}`;
        console.debug(`Version[${e2}] Tile[${t2.id}] FeatureContainer - Dropping message, outdated version]`, t2);
      }
      return;
    }
    const r2 = this._renderStateNext ?? this._renderState;
    if (!r2)
      throw new Error("InternalError: No renderState defined");
    if (r2.version !== t2.version && console.error(`InternalError: Version mismatch. [renderState: ${r2.version}, message: ${t2.version}]`), r2.updateTile(t2), t2.end) {
      this._subscriptions.get(t2.id).end();
    }
    this.requestRender(), this._layerView.view.labelManager.requestUpdate(), this._layerView.requestUpdate();
  }
  removeTile(e2) {
    (this._renderState || this._renderStateNext) && (this._renderState && this._renderState.removeTile(e2), this._renderStateNext && this._renderStateNext.removeTile(e2));
  }
  hitTest(e2) {
    let s3 = this._hitTestsRequests.find(({ x: t2, y: s4 }) => t2 === e2.x && s4 === e2.y);
    const i2 = L$1();
    return s3 ? s3.resolvers.push(i2) : (s3 = { x: e2.x, y: e2.y, resolvers: [i2] }, this._hitTestsRequests.push(s3)), this.requestRender(), i2.promise;
  }
  getSortKeys(e2) {
    const t2 = new Set(e2), s3 = /* @__PURE__ */ new Map();
    for (const i2 of this.children)
      if (i2.getSortKeys(t2).forEach((e3, t3) => s3.set(t3, e3)), s3.size === t2.size)
        break;
    return s3;
  }
  get hasAnimation() {
    return this.hasLabels;
  }
  updateTransitionProperties(e2, t2) {
    super.updateTransitionProperties(e2, t2), this._layerView.featureEffectView.transitionStep(e2, t2), this._layerView.featureEffectView.transitioning && this.requestRender();
  }
  doRender(e2) {
    const { minScale: t2, maxScale: s3 } = this._layer.effectiveScaleRange, i2 = e2.state.scale;
    i2 <= (t2 || 1 / 0) && i2 >= s3 && super.doRender(e2);
  }
  afterRender(e2) {
    super.afterRender(e2), this._hitTestsRequests.length && this.requestRender();
  }
  setStencilReference(e2) {
    const t2 = this._getOverrideStencilRef(e2);
    if (null == t2)
      super.setStencilReference(e2);
    else
      for (const s3 of this.children)
        s3.stencilRef = t2(s3);
  }
  _renderMapPhase(e2) {
    this._layerView.featureEffectView.hasEffects ? (this._renderOutsideEffect(e2), this._renderInsideEffect(e2)) : this._renderFeatures(e2, R$1.All), this._hitTestsRequests.length > 0 && this._renderHittest(e2);
  }
  _renderHighlightPhase(e2) {
    this.hasHighlight && a$2(e2, false, (e3) => {
      this._renderFeatures(e3, R$1.Highlight);
    });
  }
  _renderLabelPhase(e2) {
    this._renderFeatures(e2, R$1.All);
  }
  _renderInsideEffect(e2) {
    const t2 = e2.painter.effects.insideEffect;
    t2.bind(e2), this._renderFeatures(e2, R$1.InsideEffect), t2.draw(e2, this._layerView.featureEffectView.includedEffects), t2.unbind();
  }
  _renderOutsideEffect(e2) {
    const t2 = e2.painter.effects.outsideEffect;
    t2.bind(e2), this._renderFeatures(e2, R$1.OutsideEffect), t2.draw(e2, this._layerView.featureEffectView.excludedEffects), t2.unbind();
  }
  _renderHittest(e2) {
    const { context: t2 } = e2, s3 = e2.painter.effects.hittest, i2 = t2.getBoundFramebufferObject(), r2 = t2.getViewport(), a2 = e2.passOptions;
    s3.bind(e2), e2.passOptions = s3.createOptions(e2, this._hitTestsRequests), this._renderFeatures(e2, R$1.All), s3.draw(e2), s3.unbind(), t2.bindFramebuffer(i2), t2.restoreViewport(r2), e2.passOptions = a2;
  }
  _renderFeatures(e2, t2) {
    for (const i2 of this.children) {
      if (!i2.visible)
        continue;
      const s4 = has("featurelayer-force-marker-text-draw-order") ? N.STRICT_MARKERS_AND_TEXT : N.BATCHING, r2 = i2.getDisplayList(e2.drawPhase, this._instanceStore, s4);
      e2.selection = t2, r2?.render(e2);
    }
    const s3 = this._getExclusivePostprocessingInstance(e2);
    null != s3 && s3.techniqueRef.postProcess(e2, s3);
  }
};
async function t$4(t2) {
  const o2 = await p$4("FeaturePipelineWorker", { client: t2, strategy: "dedicated" });
  return new n$4(o2);
}
let n$4 = class n2 {
  constructor(e2) {
    this._connection = e2, this.pipeline = this._connection.createInvokeProxy(), this.features = this._connection.createInvokeProxy("features"), this.aggregates = this._connection.createInvokeProxy("aggregates"), this.streamMessenger = this._connection.createInvokeProxy("streamMessenger");
  }
  destroy() {
    this._connection.destroy();
  }
  get closed() {
    return this._connection.closed;
  }
};
const o$7 = "esri.views.2d.layers.features.FeatureSourceEventLog";
let n$3 = class n3 extends S$1 {
  constructor() {
    super(...arguments), this.events = new o$a(), this._updatingStrategy = true, this._tileToEvent = new s$7(), this._fetchStatus = { outstanding: 0, done: 0 };
  }
  get hasAllFeatures() {
    return this._hasAllData() && (this._strategyInfo?.willQueryAllFeatures ?? false);
  }
  get hasAllFeaturesInView() {
    return this._hasAllData();
  }
  get hasFullGeometries() {
    return this._hasAllData() && (this._strategyInfo?.willQueryFullResolutionGeometry ?? false);
  }
  onEvent(t2) {
    switch (t2.type) {
      case "subscribe":
      case "unsubscribe":
      case "loaded":
      case "error":
        this._handleTileEvent(t2);
        break;
      case "updateStrategyStart":
        this._updatingStrategy = true, this._fetchStatus = { done: 0, outstanding: 0 }, this._strategyInfo = t2.about;
        break;
      case "updateStrategyEnd":
        this._updatingStrategy = false;
        break;
      case "updateFieldsStart":
        this._fetchStatus = { done: 0, outstanding: 0 };
        break;
      case "updateFieldsEnd":
        break;
      case "updateFieldsError":
        this.events.emit("error", t2);
        break;
      case "fetchStart":
        this._fetchStatus.outstanding += 1, this.events.emit("status", this._fetchStatus);
        break;
      case "fetchEnd":
        this._fetchStatus.done += 1, this.events.emit("status", this._fetchStatus), t2.done && (this._fetchStatus = { done: 0, outstanding: 0 });
    }
  }
  _hasAllData() {
    return !this._updatingStrategy && this._hasAllTileData();
  }
  _hasAllTileData() {
    for (const t2 of this._tileToEvent.values()) {
      if ("loaded" !== t2[t2.length - 1].type)
        return false;
    }
    return true;
  }
  _handleTileEvent(t2) {
    switch (t2.type) {
      case "subscribe":
        this._tileToEvent.set(t2.tile, [t2]);
        break;
      case "unsubscribe":
        this._tileToEvent.delete(t2.tile);
        break;
      case "loaded": {
        const e2 = this._tileToEvent.get(t2.tile);
        if (!e2)
          return;
        e2.push(t2), this._tileToEvent.set(t2.tile, e2);
        break;
      }
      case "error": {
        const e2 = this._tileToEvent.get(t2.tile);
        if (!e2)
          return;
        e2.push(t2), this._tileToEvent.set(t2.tile, e2), this.events.emit("error", t2);
        break;
      }
    }
  }
};
e$2([y$1({ readOnly: true })], n$3.prototype, "hasAllFeatures", null), e$2([y$1({ readOnly: true })], n$3.prototype, "hasAllFeaturesInView", null), e$2([y$1({ readOnly: true })], n$3.prototype, "hasFullGeometries", null), e$2([y$1()], n$3.prototype, "_updatingStrategy", void 0), e$2([y$1()], n$3.prototype, "_strategyInfo", void 0), e$2([y$1()], n$3.prototype, "_tileToEvent", void 0), n$3 = e$2([c$7(o$7)], n$3);
function e$1(e2) {
  switch (e2.geometryType) {
    case "point":
      return "esriGeometryPoint";
    case "polyline":
      return "esriGeometryPolyline";
    case "polygon":
    case "multipatch":
      return "esriGeometryPolygon";
    case "multipoint":
      return "esriGeometryMultipoint";
    default:
      return null;
  }
}
const r$3 = Math.PI;
function i$2(e2, t2) {
  switch (t2.transformationType) {
    case i$4.Additive:
      return s$1(e2, t2);
    case i$4.Constant:
      return o$6(t2, e2);
    case i$4.ClampedLinear:
      return u$6(e2, t2);
    case i$4.Proportional:
      return l$3(e2, t2);
    case i$4.Stops:
      return c$4(e2, t2);
    case i$4.RealWorldSize:
      return m$1(e2, t2);
    case i$4.Identity:
      return e2;
    case i$4.Unknown:
      return null;
  }
}
function a$1(e2, t2) {
  return "number" == typeof e2 ? e2 : i$2(t2, e2);
}
function s$1(e2, t2) {
  return e2 + (a$1(t2.minSize, e2) || t2.minDataValue);
}
function o$6(e2, t2) {
  const n5 = e2.stops;
  let r2 = n5?.length && n5[0].size;
  return null == r2 && (r2 = e2.minSize), a$1(r2, t2);
}
function u$6(e2, t2) {
  const n5 = t2.minDataValue, r2 = t2.maxDataValue, i2 = (e2 - n5) / (r2 - n5), s3 = a$1(t2.minSize, e2), o2 = a$1(t2.maxSize, e2);
  return e2 <= n5 ? s3 : e2 >= r2 ? o2 : s3 + i2 * (o2 - s3);
}
function l$3(t2, n5) {
  const r2 = t2 / n5.minDataValue, i2 = a$1(n5.minSize, t2), s3 = a$1(n5.maxSize, t2);
  let o2 = null;
  return o2 = r2 * i2, e$4(o2, i2, s3);
}
function c$4(e2, t2) {
  const [n5, r2, i2] = p$2(e2, t2.cache.ipData);
  if (n5 === r2)
    return a$1(t2.stops[n5].size, e2);
  {
    const s3 = a$1(t2.stops[n5].size, e2);
    return s3 + (a$1(t2.stops[r2].size, e2) - s3) * i2;
  }
}
function m$1(n5, i2) {
  const s3 = m$3[i2.valueUnit], o2 = a$1(i2.minSize, n5), u5 = a$1(i2.maxSize, n5), { valueRepresentation: l3 } = i2;
  let c5 = null;
  return c5 = "area" === l3 ? 2 * Math.sqrt(n5 / r$3) / s3 : "radius" === l3 || "distance" === l3 ? 2 * n5 / s3 : n5 / s3, e$4(c5, o2, u5);
}
function p$2(e2, t2) {
  if (!t2)
    return;
  let n5 = 0, r2 = t2.length - 1;
  return t2.some((t3, i2) => e2 < t3 ? (r2 = i2, true) : (n5 = i2, false)), [n5, r2, (e2 - t2[n5]) / (t2[r2] - t2[n5])];
}
function l$2(n5) {
  return (n5.labelsVisible && n5.labelingInfo?.every((n6) => "none" !== n6.deconflictionStrategy)) ?? false;
}
function r$2(n5, i2) {
  const l3 = e$5(n5, i2);
  if (l3?.labelsVisible && l3.labelingInfo?.length)
    return l3.labelingInfo.every((n6) => "none" !== n6.deconflictionStrategy);
}
function t$3(e2) {
  return (l3) => u$9(i$2(l3, e2));
}
function o$5(n5) {
  const e2 = null != n5 && "visualVariables" in n5 && n5.visualVariables;
  if (!e2)
    return null;
  for (const i2 of e2)
    if ("size" === i2.type)
      return t$3(i2);
  return null;
}
function t$2(t2, i2, o2, n5, r2) {
  const s3 = null != i2.subtypeCode ? `${i2.subtypeField} = ${i2.subtypeCode}` : null, a2 = n$6(i2.definitionExpression, s3), l3 = i2.customParameters ?? {};
  return r2 && (l3.token = r2), { type: "feature", mutable: { sourceRefreshVersion: n5, availableFields: o2.availableFields, dataFilter: { definitionExpression: a2, gdbVersion: i2.gdbVersion, historicMoment: i2.historicMoment?.getTime(), outSpatialReference: o2.outSpatialReference.toJSON(), timeExtent: i2.timeExtent?.toJSON(), customParameters: l3 } }, service: t2, tileInfoJSON: o2.tileInfoJSON };
}
function u$5(n5, r2, t2 = 0) {
  if (null == r2)
    return n5[t2] = 0, n5[t2 + 1] = 0, n5[t2 + 2] = 0, void (n5[t2 + 3] = 0);
  const { r: o2, g: u5, b: i2, a: c5 } = r2;
  n5[t2] = o2 * c5 / 255, n5[t2 + 1] = u5 * c5 / 255, n5[t2 + 2] = i2 * c5 / 255, n5[t2 + 3] = c5;
}
async function z$1(e2, a2) {
  if (!e2)
    return [];
  switch (e2.type) {
    case "simple-fill":
      return E(e2, a2);
    case "picture-fill":
      return P(e2, a2);
    case "simple-marker":
      return C(e2, a2);
    case "picture-marker":
      return I(e2, a2);
    case "simple-line":
      return U(e2, a2, false);
    case "text":
      return A(e2, a2);
    case "label":
      return w(e2, a2);
    case "cim":
      return n$7(e2.data, a2);
    case "web-style": {
      const l3 = await e2.fetchCIMSymbol();
      return n$7(l3.data, a2);
    }
    default:
      throw new Error(`symbol not supported ${e2.type}`);
  }
}
async function d$5(e2, a2) {
  const { schemaOptions: l3 } = a2, { store: i2 } = l3, r2 = new Array(P$1), t2 = new Array(P$1 / 4);
  for (let p3 = 0; p3 < P$1; p3++) {
    const a3 = p3 < e2.attributes.length ? e2.attributes[p3].color : null;
    r2[p3] = [0, 0, 0, 0], u$5(r2[p3], a3);
  }
  for (let u5 = 0; u5 < P$1 / 4; u5++)
    t2[u5] = [0, 0, 0, 0], t2[u5][0] = 4 * u5 < e2.attributes.length ? 1 : 0, t2[u5][1] = 4 * u5 + 1 < e2.attributes.length ? 1 : 0, t2[u5][2] = 4 * u5 + 2 < e2.attributes.length ? 1 : 0, t2[u5][3] = 4 * u5 + 3 < e2.attributes.length ? 1 : 0;
  const o2 = { isActive: t2, colors: r2, dotValue: e2.dotValue, dotScale: e2.referenceScale, blending: e2.dotBlendingEnabled, dotSize: e2.dotSize, seed: e2.seed }, s3 = i2.ensureInstance(h$3.dotDensity, o2, {}).createMeshInfo({ params: { effects: null } }), n5 = [];
  if (e2.backgroundColor) {
    const l4 = new S({ color: e2.backgroundColor, outline: null }), i3 = await z$1(l4, a2);
    n5.push(...i3);
  }
  if (n5.push(s3), e2.outline) {
    const l4 = U(e2.outline, a2, true);
    n5.push(...l4);
  }
  return n5;
}
async function g(l3, i2) {
  const { store: r2 } = i2, { radius: t2, minDensity: o2, maxDensity: s3, referenceScale: n5, field: u5, valueExpression: c5, colorStops: f2 } = l3, m2 = f$3(f2);
  return [r2.ensureInstance(h$3.heatmap, { radius: u$9(t2), minDensity: o2, maxDensity: s3, referenceScale: n5, isFieldActive: !(!u5 && !c5), gradient: m2, gradientHash: m2.join(",") }, {}).createMeshInfo({ params: { effects: null } })];
}
function x(a2, l3) {
  const { store: i2 } = l3, r2 = a2.outline?.width || 0, t2 = y$2(a2), o2 = i2.ensureInstance(h$3.pieChart, { geometry: { outlineWidth: Math.round(u$9(r2)), defaultColor: t$5(a2.defaultColor), outlineColor: t$5(a2.outline?.color), othersColor: t$5(a2.othersCategory?.color), donutRatio: a2.holePercentage, sectorThreshold: a2.othersCategory?.threshold || 0, colors: a2.attributes.map((e2) => t$5(e2.color)), visualVariableOpacity: t2.visualVariableOpacity, visualVariableSizeMinMaxValue: t2.visualVariableSizeMinMaxValue, visualVariableSizeScaleStops: t2.visualVariableSizeScaleStops, visualVariableSizeStops: t2.visualVariableSizeStops, visualVariableSizeUnitValue: t2.visualVariableSizeUnitValue, hittestUniforms: null }, numberOfFields: a2.attributes.length }, {}).createMeshInfo({ params: { size: a2.size, outlineWidth: r2, effects: null, scaleInfo: null, minPixelBuffer: h$4(t2) } });
  return [...a2.backgroundFillSymbol ? E(a2.backgroundFillSymbol, { schemaOptions: l3, path: "", uniforms: x$1 }) : [], o2];
}
function M(e2) {
  if ("path" === e2.style) {
    if (null == e2.path)
      throw new Error("Symbol with a style of type path must define a path");
    return { type: "sprite-rasterization-param", overrides: [], resource: { type: "path", path: e2.path, asFill: true } };
  }
  const a2 = K$1.fromSimpleMarker(e2);
  if ("outline" in e2 && e2.outline && "none" !== e2.outline.style) {
    if ("solid" !== e2.outline.style) {
      if (!a2 || !a2.symbolLayers)
        throw new Error("Error handling marker! ");
      return { type: "sprite-rasterization-param", resource: a2.symbolLayers[0], overrides: [] };
    }
  }
  return { type: "sprite-rasterization-param", resource: e$6(a2), overrides: [] };
}
async function C(e2, a2) {
  const { uniforms: i2, schemaOptions: r2 } = a2, { store: o2 } = r2;
  if ("path" === e2.style || e2.outline && "solid" !== e2.outline.style && "none" !== e2.outline.style) {
    const r3 = K$1.fromSimpleMarker(e2);
    if (!r3 || !r3.symbolLayers)
      throw new Error("Error handling marker! ");
    if (i2.visualVariableRotation && (r3.angleAlignment = "Map"), "path" !== e2.style) {
      const e3 = r3.symbolLayers[0];
      if (a$3(a2.uniforms)) {
        const l3 = h$4(a2.uniforms, 0, 1);
        if (l3 > e3.size) {
          const a3 = l3 / e3.size;
          e3.size = l3;
          const i3 = e3.markerGraphics?.[0].symbol;
          (i3.symbolLayers && i3.symbolLayers[0]).width *= a3;
        }
      }
    }
    return n$7({ type: "CIMSymbolReference", symbol: r3 }, a2);
  }
  const s3 = o2.ensureInstance(h$3.marker, { geometry: { visualVariableColor: i2.visualVariableColor, visualVariableOpacity: i2.visualVariableOpacity, visualVariableSizeMinMaxValue: i2.visualVariableSizeMinMaxValue, visualVariableSizeScaleStops: i2.visualVariableSizeScaleStops, visualVariableSizeStops: i2.visualVariableSizeStops, visualVariableSizeUnitValue: i2.visualVariableSizeUnitValue, visualVariableRotation: i2.visualVariableRotation } }, { zoomRange: false }), n5 = M(e2);
  let u5 = e2.color?.toArray() ?? [0, 0, 0, 0];
  "CIMVectorMarker" === n5.resource.type && (u5 = [255, 255, 255, 255]);
  const c5 = "triangle" === e2.style ? 124 / 116 : 1, f2 = e2.size, m2 = f2 * c5, S2 = null != i2.visualVariableColor && ("cross" === e2.style || "x" === e2.style);
  return [s3.createMeshInfo({ params: { type: "simple", color: u5, height: f2, width: m2, offsetX: e2.xoffset, offsetY: e2.yoffset, angle: e2.angle, alignment: i$5(i2) ? i$6.MAP : i$6.SCREEN, outlineColor: e2.outline?.color?.toArray() ?? [0, 0, 0, 0], outlineSize: e2.outline?.width ?? 1, referenceSize: f2, sprite: n5, overrideOutlineColor: S2, hasSizeVV: a$3(i2), placement: null, effects: null, transforms: null, scaleInfo: null, minPixelBuffer: h$4(i2) } })];
}
function I(e2, a2) {
  const { uniforms: i2, schemaOptions: r2 } = a2, { store: o2 } = r2, s3 = o2.ensureInstance(h$3.marker, { geometry: { visualVariableColor: i2.visualVariableColor, visualVariableOpacity: i2.visualVariableOpacity, visualVariableSizeMinMaxValue: i2.visualVariableSizeMinMaxValue, visualVariableSizeScaleStops: i2.visualVariableSizeScaleStops, visualVariableSizeStops: i2.visualVariableSizeStops, visualVariableSizeUnitValue: i2.visualVariableSizeUnitValue, visualVariableRotation: i2.visualVariableRotation } }, { zoomRange: false }), n5 = K$1.createPictureMarkerRasterizationParam(e2);
  if (!n5)
    return [];
  return [s3.createMeshInfo({ params: { type: "picture", color: [255, 255, 255, 255], height: e2.height, width: e2.width, offsetX: e2.xoffset, offsetY: e2.yoffset, angle: e2.angle, alignment: i$5(i2) ? i$6.MAP : i$6.SCREEN, outlineColor: null, outlineSize: 0, referenceSize: e2.height, sprite: n5, overrideOutlineColor: false, hasSizeVV: a$3(i2), placement: null, effects: null, transforms: null, scaleInfo: null, minPixelBuffer: h$4(i2) } })];
}
function O(e2, a2, l3) {
  const { uniforms: i2, schemaOptions: r2 } = l3, { store: s3 } = r2, n5 = s3.ensureInstance(h$3.marker, { geometry: { visualVariableColor: i2.visualVariableColor, visualVariableOpacity: i2.visualVariableOpacity, visualVariableSizeMinMaxValue: i2.visualVariableSizeMinMaxValue, visualVariableSizeScaleStops: i2.visualVariableSizeScaleStops, visualVariableSizeStops: i2.visualVariableSizeStops, visualVariableSizeUnitValue: i2.visualVariableSizeUnitValue, visualVariableRotation: i2.visualVariableRotation } }, { zoomRange: false }), u5 = M(e2), c5 = 6, f2 = c5 * a2.width, m2 = f2, S2 = e2.color?.toArray() ?? a2.color?.toArray() ?? [0, 0, 0, 0], V2 = "cross" === e2.style || "x" === e2.style;
  let h2;
  switch (e2.placement) {
    case "begin-end":
      h2 = o$c.Both;
      break;
    case "begin":
      h2 = o$c.JustBegin;
      break;
    case "end":
      h2 = o$c.JustEnd;
      break;
    default:
      h2 = o$c.None;
  }
  const z2 = { type: "cim-marker-placement-info", placement: { type: "CIMMarkerPlacementAtExtremities", angleToLine: true, offset: 0, extremityPlacement: h2, offsetAlongLine: 0 }, overrides: [] };
  return [n5.createMeshInfo({ params: { type: "simple", color: S2, height: m2, width: f2, offsetX: 0, offsetY: 0, angle: 0, alignment: i$5(i2) ? i$6.MAP : i$6.SCREEN, outlineColor: S2, outlineSize: V2 ? a2.width : 0, referenceSize: m2 / c5, sprite: u5, overrideOutlineColor: V2 && null != i2.visualVariableColor, hasSizeVV: a$3(i2), placement: z2, transforms: null, effects: null, scaleInfo: null, minPixelBuffer: h$4(i2) } })];
}
function A(e2, a2) {
  const { uniforms: i2, schemaOptions: r2 } = a2, { store: t2 } = r2;
  return [t2.ensureInstance(h$3.text, { geometry: { visualVariableColor: i2.visualVariableColor, visualVariableOpacity: i2.visualVariableOpacity, visualVariableRotation: i2.visualVariableRotation, visualVariableSizeMinMaxValue: i2.visualVariableSizeMinMaxValue, visualVariableSizeScaleStops: i2.visualVariableSizeScaleStops, visualVariableSizeStops: i2.visualVariableSizeStops, visualVariableSizeUnitValue: i2.visualVariableSizeUnitValue } }, { zoomRange: false, clipAngle: false, referenceSymbol: false }).createMeshInfo({ params: { boxBackgroundColor: e2.backgroundColor?.toArray(), boxBorderLineColor: e2.borderLineColor?.toArray(), boxBorderLineSize: e2.borderLineSize ?? 0, color: e2.color?.toArray() ?? [0, 0, 0, 0], offsetX: e2.xoffset, offsetY: e2.yoffset, postAngle: e2.angle, fontSize: e2.font.size, decoration: e2.font.decoration, haloColor: e2.haloColor?.toArray() ?? [0, 0, 0, 0], haloFontSize: e2.haloSize ?? 0, lineWidth: e2.lineWidth, lineHeightRatio: e2.lineHeight, horizontalAlignment: e2.horizontalAlignment, verticalAlignment: e2.verticalAlignment, useCIMAngleBehavior: false, glyphs: { type: "text-rasterization-param", resource: { type: "text", font: e2.font.toJSON(), textString: e2.text, symbol: K$1.createCIMTextSymbolfromTextSymbol(e2) }, overrides: [] }, referenceSize: null, effects: null, placement: null, scaleInfo: null, transforms: null, scaleFactor: 1, minPixelBuffer: h$4(i2), repeatLabel: null, repeatLabelDistance: null, allowOverrun: null, labelPosition: null, isLineLabel: false } })];
}
function w(a2, i2) {
  const { schemaOptions: r2, uniforms: t2 } = i2, { store: o2 } = r2, s3 = a2.symbol, { allowOverrun: u5, repeatLabel: c5, repeatLabelDistance: f2 } = a2, m2 = { maxScale: a2.maxScale ?? 0, minScale: a2.minScale ?? 0 }, S2 = o2.ensureInstance(h$3.label, { geometry: { visualVariableColor: null, visualVariableOpacity: null, visualVariableRotation: t2.visualVariableRotation, visualVariableSizeMinMaxValue: t2.visualVariableSizeMinMaxValue, visualVariableSizeScaleStops: t2.visualVariableSizeScaleStops, visualVariableSizeStops: t2.visualVariableSizeStops, visualVariableSizeUnitValue: t2.visualVariableSizeUnitValue } }, { zoomRange: true, clipAngle: true, referenceSymbol: true }), V2 = a2.labelPlacement, [y2, v] = o$b(V2);
  return [S2.createMeshInfo({ params: { boxBackgroundColor: s3.backgroundColor?.toArray(), boxBorderLineColor: s3.borderLineColor?.toArray(), boxBorderLineSize: s3.borderLineSize ?? 0, color: s3.color?.toArray() ?? [0, 0, 0, 0], offsetX: s3.xoffset, offsetY: s3.yoffset, postAngle: s3.angle, fontSize: s3.font.size, decoration: s3.font.decoration, haloColor: s3.haloColor?.toArray() ?? [0, 0, 0, 0], haloFontSize: s3.haloSize ?? 0, lineWidth: s3.lineWidth, lineHeightRatio: s3.lineHeight, horizontalAlignment: y2, verticalAlignment: v, repeatLabel: c5, repeatLabelDistance: u$9(f2), allowOverrun: u5, labelPosition: a2.labelPosition, scaleInfo: m2, minPixelBuffer: h$4(t2), useCIMAngleBehavior: false, glyphs: { type: "text-rasterization-param", resource: { type: "text", font: s3.font.toJSON(), textString: s3.text, symbol: K$1.createCIMTextSymbolfromTextSymbol(s3), primitiveName: "label-override" }, useLegacyLabelEvaluationRules: null == a2.labelExpressionInfo?.expression, overrides: [{ type: "CIMPrimitiveOverride", valueExpressionInfo: { type: "CIMExpressionInfo", expression: a2.labelExpressionInfo?.expression ?? a2.labelExpression, returnType: "String" }, primitiveName: "label-override", propertyName: "textString", defaultValue: "" }] }, referenceSize: null, effects: null, placement: null, transforms: null, scaleFactor: 1, isLineLabel: false } })];
}
function R(e2, a2) {
  const l3 = e2.width;
  return { outlineColor: e2.color?.toArray() || [0, 0, 0, 1], width: l3, referenceWidth: l3, capType: e2.cap ?? "round", joinType: e2.join ?? "round", miterLimit: e2.miterLimit, hasSizeVV: a2 };
}
function L(e2, a2) {
  const { uniforms: l3, schemaOptions: i2 } = a2, { store: r2 } = i2, t2 = e2.color?.toArray() ?? [0, 0, 0, 0], o2 = { type: "sprite-rasterization-param", resource: { type: "fill-style", style: e2.style }, overrides: [] };
  if ("solid" === e2.outline?.style) {
    return [r2.ensureInstance(h$3.patternOutlineFill, { geometry: { visualVariableColor: l3.visualVariableColor, visualVariableOpacity: l3.visualVariableOpacity, visualVariableSizeScaleStops: l3.visualVariableSizeOutlineScaleStops, visualVariableSizeMinMaxValue: null, visualVariableSizeStops: null, visualVariableSizeUnitValue: null } }, { zoomRange: false }).createMeshInfo({ params: { color: t2, ...R(e2.outline, !!l3.visualVariableSizeOutlineScaleStops), sprite: o2, scaleInfo: null, effects: null } })];
  }
  const s3 = [], n5 = r2.ensureInstance(h$3.patternFill, { geometry: { visualVariableColor: l3.visualVariableColor, visualVariableOpacity: l3.visualVariableOpacity } }, { zoomRange: false }).createMeshInfo({ params: { color: e2.color?.toArray() ?? [0, 0, 0, 0], sprite: o2, scaleInfo: null, effects: null } });
  return s3.push(n5), e2.outline && s3.push(...U(e2.outline, a2, true)), s3;
}
function k(e2, a2) {
  const { uniforms: l3, schemaOptions: i2 } = a2, { store: r2 } = i2, t2 = e2.color?.toArray() ?? [0, 0, 0, 0];
  if ("none" !== e2.style && "solid" === e2.outline?.style) {
    return [r2.ensureInstance(h$3.outlineFill, { geometry: { visualVariableColor: l3.visualVariableColor, visualVariableOpacity: l3.visualVariableOpacity, visualVariableSizeScaleStops: l3.visualVariableSizeOutlineScaleStops, visualVariableSizeMinMaxValue: null, visualVariableSizeStops: null, visualVariableSizeUnitValue: null } }, { zoomRange: false }).createMeshInfo({ params: { color: t2, ...R(e2.outline, !!l3.visualVariableSizeOutlineScaleStops), scaleInfo: null, effects: null } })];
  }
  const o2 = [];
  if ("none" !== e2.style) {
    const e3 = r2.ensureInstance(h$3.fill, { geometry: { visualVariableColor: l3.visualVariableColor, visualVariableOpacity: l3.visualVariableOpacity } }, { zoomRange: false }).createMeshInfo({ params: { color: t2, scaleInfo: null, effects: null } });
    o2.push(e3);
  }
  return e2.outline && o2.push(...U(e2.outline, a2, true)), o2;
}
function E(e2, a2) {
  const { style: l3 } = e2;
  return l3 && "none" !== l3 && "solid" !== l3 ? L(e2, a2) : k(e2, a2);
}
function P(e2, a2) {
  const { outline: i2 } = e2, { uniforms: r2, schemaOptions: t2 } = a2, { store: o2 } = t2, s3 = [], n5 = K$1.createPictureFillRasterizationParam(e2);
  if (!n5)
    return [];
  const { width: u5, height: c5, xoffset: f2, yoffset: m2, xscale: b2, yscale: S2 } = e2, V2 = { color: [255, 255, 255, 255], sprite: n5, height: c5, aspectRatio: u5 / c5, offsetX: f2, offsetY: m2, scaleX: b2, scaleY: S2, angle: 0, applyRandomOffset: false, sampleAlphaOnly: false, scaleProportionally: false, effects: null, scaleInfo: null };
  if ("solid" === i2?.style) {
    return [o2.ensureInstance(h$3.complexOutlineFill, { geometry: { visualVariableColor: r2.visualVariableColor, visualVariableOpacity: r2.visualVariableOpacity, visualVariableSizeScaleStops: r2.visualVariableSizeOutlineScaleStops, visualVariableSizeMinMaxValue: null, visualVariableSizeStops: null, visualVariableSizeUnitValue: null } }, { zoomRange: false }).createMeshInfo({ params: { ...V2, ...R(i2, !!r2.visualVariableSizeOutlineScaleStops) } })];
  }
  const y2 = o2.ensureInstance(h$3.complexFill, { geometry: { visualVariableColor: r2.visualVariableColor, visualVariableOpacity: r2.visualVariableOpacity } }, { zoomRange: false });
  return s3.push(y2.createMeshInfo({ params: V2 })), i2 && s3.push(...U(i2, a2, true)), s3;
}
function U(e2, a2, l3) {
  const { color: t2, style: o2, width: s3, cap: n5, join: u5 } = e2, { schemaOptions: c5 } = a2, { store: f2 } = c5, m2 = [], b2 = l3 ? { ...x$1, visualVariableSizeScaleStops: a2.uniforms.visualVariableSizeOutlineScaleStops } : a2.uniforms, V2 = { geometry: { visualVariableColor: b2.visualVariableColor, visualVariableOpacity: b2.visualVariableOpacity, visualVariableSizeMinMaxValue: b2.visualVariableSizeMinMaxValue, visualVariableSizeScaleStops: b2.visualVariableSizeScaleStops, visualVariableSizeStops: b2.visualVariableSizeStops, visualVariableSizeUnitValue: b2.visualVariableSizeUnitValue } }, v = { color: t2?.toArray() ?? [0, 0, 0, 0], width: s3, referenceWidth: s3, capType: n5, joinType: u5, miterLimit: e2.miterLimit, hasSizeVV: a$3(b2), effects: null, scaleInfo: null };
  if (null == o2 || "solid" === o2) {
    const e3 = f2.ensureInstance(h$3.line, V2, { zoomRange: false }).createMeshInfo({ params: v });
    m2.push(e3);
  } else if ("none" !== o2) {
    const e3 = f2.ensureInstance(h$3.texturedLine, V2, { zoomRange: false }).createMeshInfo({ params: { ...v, shouldScaleDash: true, shouldSampleAlphaOnly: false, isSDF: true, sprite: { type: "sprite-rasterization-param", resource: { type: "dash", dashTemplate: ne(o2, n5), capStyle: Z$1(n5) }, overrides: [] } } });
    m2.push(e3);
  }
  return null != e2.marker && m2.push(...O(e2.marker, e2, a2)), m2;
}
async function l$1(a2, l3, r2) {
  const n5 = l3.labelsVisible && l3.labelingInfo || [], i2 = e$1(l3), m2 = c$a(n5, i2);
  return { type: "label", classes: await Promise.all(m2.map((e2, s3) => o$4(a2, e2, s3, r2))) };
}
async function o$4(e2, s3, l3, o2) {
  const r2 = await z$1(s3, { path: `${l3}`, schemaOptions: e2, uniforms: o2 });
  return { maxScale: s3.maxScale, minScale: s3.minScale, expression: s3.labelExpressionInfo?.expression ?? s3.labelExpression, where: s3.where, meshes: r2 };
}
async function r$1(e2, a2) {
  if (!a2)
    return { type: "simple", meshes: [] };
  switch (a2.type) {
    case "simple":
      return o$3(e2, a2);
    case "dot-density":
      return u$4(e2, a2);
    case "class-breaks":
      return m(e2, a2);
    case "unique-value":
      return c$3(e2, a2);
    case "dictionary":
      return p$1(a2);
    case "heatmap":
      return f$1(e2, a2);
    case "pie-chart":
      return y(e2, a2);
  }
}
async function o$3(a2, l3) {
  const n5 = l3.getSymbols(), s3 = n5.length ? n5[0] : null, r2 = y$2(l3), t2 = "renderer.symbol";
  return { type: "simple", meshes: await z$1(s3, { schemaOptions: a2, uniforms: r2, path: t2 }) };
}
async function u$4(a2, i2) {
  const n5 = y$2(i2), s3 = "renderer.symbol";
  return { type: "dot-density", meshes: await d$5(i2, { schemaOptions: a2, uniforms: n5, path: s3 }) };
}
async function m(l3, n5) {
  const s3 = y$2(n5), r2 = n5.backgroundFillSymbol, t2 = n5.normalizationType, o2 = "log" === t2 ? "esriNormalizeByLog" : "percent-of-total" === t2 ? "esriNormalizeByPercentOfTotal" : "field" === t2 ? "esriNormalizeByField" : null, u5 = n5.classBreakInfos.map(async (e2) => ({ meshes: await z$1(e2.symbol, { path: `renderer-stop-${e2.minValue}-${e2.maxValue}`, schemaOptions: l3, uniforms: s3 }), min: e2.minValue, max: e2.maxValue })), m2 = (await Promise.all(u5)).sort((e2, a2) => e2.min - a2.min), c5 = await z$1(r2, { schemaOptions: l3, path: "renderer.backgroundFill", uniforms: { ...x$1, visualVariableSizeOutlineScaleStops: s3.visualVariableSizeOutlineScaleStops } }), p3 = await z$1(n5.defaultSymbol, { schemaOptions: l3, path: "renderer.defaultSymbol", uniforms: s3 });
  return { type: "interval", field: n5.field, expression: n5.valueExpression, backgroundFill: c5, defaultSymbol: p3, intervals: m2, normalizationField: n5.normalizationField, normalizationTotal: n5.normalizationTotal, normalizationType: o2, isMaxInclusive: n5.isMaxInclusive };
}
async function c$3(l3, n5) {
  const s3 = [], r2 = y$2(n5), t2 = await z$1(n5.backgroundFillSymbol, { schemaOptions: l3, path: "renderer.backgroundFill", uniforms: { ...x$1, visualVariableSizeOutlineScaleStops: r2.visualVariableSizeOutlineScaleStops } }), o2 = await z$1(n5.defaultSymbol, { schemaOptions: l3, path: "renderer.defaultSymbol", uniforms: r2 });
  for (const e2 of n5.uniqueValueInfos ?? []) {
    const a2 = await z$1(e2.symbol, { path: `renderer-unique-value-${e2.value}`, schemaOptions: l3, uniforms: r2 });
    s3.push({ value: "" + e2.value, symbol: a2 });
  }
  return { type: "map", field: n5.field, expression: n5.valueExpression, field2: n5.field2, field3: n5.field3, fieldDelimiter: n5.fieldDelimiter, backgroundFill: t2, defaultSymbol: o2, map: s3 };
}
function p$1(a2) {
  const i2 = y$2(a2), l3 = a2.scaleExpression, n5 = null != l3 && "1" !== l3 ? { valueExpressionInfo: { type: "CIMExpressionInfo", expression: a2.scaleExpression, returnType: "Numeric" }, defaultValue: 1 } : void 0;
  return { type: "dictionary", fieldMap: a2.fieldMap, scaleExpression: n5, visualVariableUniforms: i2 };
}
async function f$1(e2, a2) {
  return { type: "heatmap", meshes: await g(a2, e2) };
}
async function y(e2, a2) {
  return { type: "pie-chart", meshes: x(a2, e2) };
}
async function l2(e2, r2) {
  const i2 = r2.renderer, l3 = y$2(i2);
  return { symbology: await r$1(e2, i2), labels: await l$1(e2, r2, l3) };
}
async function a(e2, r2, t2, s3) {
  const n5 = t2.featureReduction;
  if (n5)
    switch (n5.type) {
      case "binning":
        return u$3(n5, e2, r2, t2, s3);
      case "cluster":
        return f(n5, e2, r2, t2, s3);
    }
  const a2 = d$4(t2.orderBy, t2.renderer, t2.objectIdField);
  return { storage: t$6(t2.renderer, r2.filters), mesh: { displayRefreshVersion: s3, strategy: { type: "feature" }, factory: await l2(e2, t2), sortKey: a2, timeZone: r2.timeZone } };
}
function o$2(e2, r2) {
  return e2.fields.map((e3) => ({ ...e3.toJSON(), type: c$2(e3, r2) }));
}
function c$2(e2, r2) {
  const { onStatisticExpression: t2, onStatisticField: s3, statisticType: i2 } = e2;
  switch (i2) {
    case "min":
    case "max":
    case "avg":
    case "avg_angle":
    case "sum":
    case "count":
      return "esriFieldTypeDouble";
    case "mode": {
      if (t2) {
        const { returnType: e4 } = t2;
        return e4 ? "string" === e4 ? "esriFieldTypeString" : "esriFieldTypeDouble" : "esriFieldTypeString";
      }
      const e3 = r2.find((e4) => e4.name === s3);
      return e3 ? e3.type : "esriFieldTypeString";
    }
  }
}
async function u$3(e2, r2, l3, a2, c5) {
  const u5 = o$2(e2, a2.fields), f2 = e2.renderer, d4 = await r$1(r2, f2), y2 = t$6(f2, [null, null]), p3 = y$2(f2), m2 = await l$1(r2, { geometryType: "polygon", labelingInfo: e2.labelingInfo, labelsVisible: e2.labelsVisible }, p3);
  return { storage: y2, mesh: { displayRefreshVersion: c5, strategy: { type: "binning", fields: u5, fixedBinLevel: e2.fixedBinLevel, featureFilter: l3.filters[0] }, factory: { labels: m2, symbology: d4 }, sortKey: null, timeZone: l3.timeZone } };
}
async function f(r2, l3, a2, c5, u5) {
  const f2 = o$2(r2, c5.fields), d4 = { type: "cluster", feature: await r$1(l3, r2.effectiveFeatureRenderer), cluster: await r$1(l3, r2.effectiveClusterRenderer) }, y2 = y$2(r2.effectiveFeatureRenderer), p3 = { type: "cluster", feature: await l$1(l3, c5, y2), cluster: await l$1(l3, { geometryType: "point", labelingInfo: r2.labelingInfo, labelsVisible: r2.labelsVisible }, y2) };
  return { storage: t$6(r2.effectiveFeatureRenderer, [null, null]), mesh: { displayRefreshVersion: u5, strategy: { type: "cluster", fields: f2, featureFilter: a2.filters[0], clusterRadius: u$9(r2.clusterRadius / 2) }, factory: { labels: p3, symbology: d4 }, sortKey: null, timeZone: a2.timeZone } };
}
function d$4(e2, t2, s3) {
  const i2 = null != t2 && "unique-value" === t2.type && t2.orderByClassesEnabled;
  if ("default" !== e2 || i2 || (e2 = [new c$b({ field: s3, order: "descending" })]), "default" !== e2 && e2.length) {
    e2.length;
    const r2 = e2[0], t3 = "ascending" === r2.order ? "asc" : "desc";
    return r2.field ? { field: r2.field, order: t3 } : r2.valueExpression ? { expression: r2.valueExpression, order: t3 } : null;
  }
  if (i2) {
    return { byRenderer: true, order: "asc" };
  }
  return null;
}
let d$3 = class d {
  constructor(e2) {
    this.layer = e2;
  }
  getLabelingDeconflictionInfo(e2) {
    const r2 = this.layer, t2 = l$2(r2);
    return [{ vvEvaluators: { 0: o$5(r2.renderer) }, deconflictionEnabled: t2 }];
  }
  async createServiceOptions(s3) {
    const o2 = this.layer, a2 = o2.parent, l3 = O$1(a2), { capabilities: n5, editingInfo: d4, objectIdField: p3, globalIdField: c5, datesInUnknownTimezone: m2, orderBy: y2, subtypeField: f2, parsedUrl: u5 } = a2, b2 = a2.fieldsIndex.toJSON(), g2 = e$1(o2), h2 = a2.timeInfo?.toJSON(), I2 = o2.spatialReference.toJSON(), S2 = a$4(u5);
    let j2 = p3;
    if (y2?.length) {
      const e2 = !y2[0].valueExpression && y2[0].field;
      e2 && (j2 = e2);
    }
    return { type: "feature-service", source: S2, isSourceHosted: w$1(S2.path), orderByFields: j2, metadata: { timeReferenceUnknownClient: m2, subtypeField: f2, globalIdField: c5, fieldsIndex: b2, geometryType: g2, objectIdField: p3, timeInfo: h2, spatialReference: I2, subtypes: null, typeIdField: null, types: null }, queryMetadata: { capabilities: n5, effectiveCapabilities: l3, lastEditDate: d4?.lastEditDate?.getTime(), snapshotInfo: null } };
  }
  createSourceSchema(e2, r2, t2) {
    const { definitionExpression: i2, customParameters: s3, timeExtent: o2, apiKey: l3 } = this.layer.parent;
    return t$2(e2, { definitionExpression: i2, customParameters: s3, timeExtent: o2 }, r2, t2, l3);
  }
  createProcessorSchema(e2, r2, t2) {
    const { parent: { fields: i2, geometryType: s3, orderBy: o2, objectIdField: a$12 }, renderer: n5, labelingInfo: d4, labelsVisible: p3 } = this.layer, c5 = { featureReduction: null, fields: i2.map((e3) => e3.toJSON()), geometryType: s3, labelingInfo: d4, labelsVisible: p3, objectIdField: a$12, orderBy: o2 ?? "default", renderer: n5?.clone() };
    return a(e2, r2, c5, t2);
  }
  get hasRequiredSupport() {
    return m$4(this.layer.renderer);
  }
  getUpdateHashProperties(e2) {
    const r2 = this.layer, { parent: t2, parent: { definitionExpression: i2, apiKey: s3 }, renderer: o2 } = r2, a2 = this.layer.labelsVisible ? this.layer.labelingInfo : null;
    return { apiKey: s3, customParameters: JSON.stringify(t2.customParameters), definitionExpression: i2, labelingInfo: a2, orderBy: JSON.stringify(t2.orderBy), renderer: o2 };
  }
  setGraphicOrigin(e2) {
    e2.origin = { type: "catalog", layer: this.layer };
  }
};
function t$1(t2, e2) {
  const n5 = t2.extent, o2 = e2?.clone().intersection(n5), i2 = null != o2 ? o2.width * o2.height : 0, r2 = e2 ? e2.width * e2.height : 0, h2 = 0 === r2 ? 0 : i2 / r2, s3 = has("featurelayer-snapshot-point-coverage");
  return !isNaN(h2) && h2 >= s3;
}
function o$1(e2, l3) {
  return null != e2.floorInfo && (e2.floorInfo.viewAllLevelIds.length > 0 || l3.floors.length > 0);
}
function r(e2, o2, r2) {
  const t2 = n$2(e2, o2?.where, r2);
  return t2 ? (o2 ??= new d$7(), o2.where = t2, o2) : o2;
}
function n$2(l3, o2, r2) {
  if (null == l3.floorInfo || !r2.floors?.length)
    return o2;
  let n5 = r2.floors;
  const { floorField: t2, viewAllLevelIds: f2 } = l3.floorInfo;
  f2.length && (n5 = f2);
  const s3 = n5.filter((e2) => "" !== e2).map((e2) => "'" + e2 + "'");
  if (s3.push("''"), o2?.includes(t2)) {
    let e2 = new RegExp("AND \\(" + t2 + ".*NULL\\)", "g");
    o2 = o2.replace(e2, ""), e2 = new RegExp("\\(" + t2 + ".*NULL\\)", "g"), o2 = (o2 = o2.replace(e2, "")).replaceAll(/\s+/g, " ").trim();
  }
  let i2 = "(" + t2 + " IN ({ids}) OR " + t2 + " IS NULL)";
  return i2 = i2.replace("{ids}", s3.join(", ")), n$6(o2, i2);
}
let u$2 = class u2 {
  constructor(e2) {
    this.layer = e2;
  }
  getLabelingDeconflictionInfo(e2) {
    const t2 = this.layer, r2 = r$2(t2, e2) ?? l$2(t2);
    return [{ vvEvaluators: { 0: o$5(t2.renderer) }, deconflictionEnabled: r2 }];
  }
  async createServiceOptions(s3) {
    const o2 = this.layer, a2 = O$1(o2), { capabilities: n5, editingInfo: d4, objectIdField: p3, typeIdField: y2, globalIdField: m2, datesInUnknownTimezone: c5, orderBy: u5, subtypeField: f2, refreshInterval: h2 } = o2, b2 = o2.fieldsIndex.toJSON(), g2 = b2.fields, S2 = e$1(o2), I2 = o2.timeInfo?.toJSON(), j2 = o2.spatialReference.toJSON(), F2 = o2.types?.map((e2) => e2.toJSON()), x2 = a$4(this.layer.parsedUrl);
    this.layer.dynamicDataSource && (x2.query = { layer: JSON.stringify({ source: this.layer.dynamicDataSource }) });
    let E2 = this.layer.objectIdField;
    if (u5?.length) {
      const e2 = !u5[0].valueExpression && u5[0].field;
      e2 && (E2 = e2);
    }
    const U2 = !(null != d4?.lastEditDate) && h2 > 0, v = has("featurelayer-snapshot-enabled") && "point" === o2.geometryType && n5?.query.supportsPagination && !n5?.operations.supportsEditing && !U2, O2 = v && t$1(s3, o2.fullExtent);
    return { type: "feature-service", source: x2, isSourceHosted: w$1(x2.path), orderByFields: E2, metadata: { typeIdField: y2 ?? void 0, types: F2, timeReferenceUnknownClient: c5, subtypeField: f2, globalIdField: m2, fields: g2, fieldsIndex: b2, geometryType: S2, objectIdField: p3, timeInfo: I2, spatialReference: j2, subtypes: this.layer.subtypes?.map((e2) => e2.toJSON()) }, queryMetadata: { capabilities: n5, effectiveCapabilities: a2, lastEditDate: d4?.lastEditDate?.getTime(), snapshotInfo: { supportsSnapshotMinThreshold: v, supportsSnapshotMaxThreshold: O2, snapshotCountThresholds: { min: has("featurelayer-snapshot-point-min-threshold"), max: has("featurelayer-snapshot-point-max-threshold") } } } };
  }
  createSourceSchema(e2, t2, r2) {
    const { definitionExpression: s3, customParameters: i2, gdbVersion: o2, historicMoment: a2, subtypeCode: l3, subtypeField: n5, timeExtent: d4, apiKey: p3 } = this.layer;
    return t$2(e2, { definitionExpression: s3, customParameters: i2, gdbVersion: o2, historicMoment: a2, subtypeCode: l3, subtypeField: n5, timeExtent: d4 }, t2, r2, p3);
  }
  createProcessorSchema(e2, t2, r2) {
    const { fields: i2, renderer: o2, geometryType: a$12, labelingInfo: l3, labelsVisible: n5, orderBy: d4, objectIdField: p3 } = this.layer, y2 = { fields: i2.map((e3) => e3.toJSON()), renderer: o2?.clone(), featureReduction: e$5(this.layer, t2), geometryType: a$12, labelingInfo: l3, labelsVisible: n5, objectIdField: p3, orderBy: d4 ?? "default" };
    return a(e2, t2, y2, r2);
  }
  get hasRequiredSupport() {
    return m$4(this.layer.renderer);
  }
  hasFilters(e2) {
    return o$1(this.layer, e2);
  }
  addFilters(e2, t2) {
    return r(this.layer, e2, t2);
  }
  getUpdateHashProperties(e2) {
    const t2 = this.layer, { definitionExpression: r2, renderer: i2, gdbVersion: a2, apiKey: l3, subtypeCode: n5 } = t2, d4 = this.layer.labelsVisible ? this.layer.labelingInfo : null, p3 = t2.historicMoment?.getTime() ?? void 0, y2 = JSON.stringify(t2.customParameters), m2 = e$5(t2, e2)?.toJSON(), c5 = JSON.stringify(t2.orderBy);
    return { apiKey: l3, customParameters: y2, definitionExpression: r2, featureReduction: m2, floors: o$1(this.layer, e2) ? e2.floors : null, gdbVersion: a2, historicMoment: p3, labelingInfo: d4, orderBy: c5, renderer: i2, subtypeCode: n5 };
  }
};
function d$2(r2) {
  if (!("openPorts" in r2))
    throw new s$4("source-not-supported");
}
class p2 {
  constructor(e2) {
    this.layer = e2;
  }
  getLabelingDeconflictionInfo(e2) {
    const r2 = this.layer, t2 = r$2(r2, e2) ?? l$2(r2);
    return [{ vvEvaluators: { 0: o$5(r2.renderer) }, deconflictionEnabled: t2 }];
  }
  async createServiceOptions(e2) {
    const t2 = this.layer, o2 = O$1(t2), { capabilities: s3, objectIdField: l3 } = t2, n5 = t2.fieldsIndex.toJSON(), a2 = e$1(t2), c5 = t2.timeInfo?.toJSON(), p3 = t2.spatialReference.toJSON();
    d$2(t2.source);
    return { type: "memory", source: await t2.source.openPorts(), orderByFields: l3, metadata: { fieldsIndex: n5, geometryType: a2, objectIdField: l3, timeInfo: c5, spatialReference: p3, subtypes: null, subtypeField: null, globalIdField: null, typeIdField: null, types: null, timeReferenceUnknownClient: null }, queryMetadata: { capabilities: s3, effectiveCapabilities: o2, lastEditDate: null, snapshotInfo: null } };
  }
  createSourceSchema(e2, r2, t2) {
    const { definitionExpression: i2, timeExtent: o2 } = this.layer;
    return t$2(e2, { definitionExpression: i2, timeExtent: o2, customParameters: null }, r2, t2, null);
  }
  createProcessorSchema(e2, r2, i2) {
    const { fields: o2, renderer: s3, geometryType: l3, labelingInfo: n5, labelsVisible: c5, orderBy: d4, objectIdField: p3 } = this.layer, u5 = { fields: o2.map((e3) => e3.toJSON()), renderer: s3?.clone(), featureReduction: e$5(this.layer, r2), geometryType: l3, labelingInfo: n5, labelsVisible: c5, objectIdField: p3, orderBy: d4 ?? "default" };
    return a(e2, r2, u5, i2);
  }
  get hasRequiredSupport() {
    return m$4(this.layer.renderer);
  }
  getUpdateHashProperties(e2) {
    const r2 = this.layer, { definitionExpression: i2, renderer: o2 } = r2, s3 = this.layer.labelsVisible ? this.layer.labelingInfo : null, l3 = e$5(r2, e2)?.toJSON();
    return { orderBy: JSON.stringify(r2.orderBy), definitionExpression: i2, renderer: o2, labelingInfo: s3, featureReduction: l3 };
  }
}
let c$1 = class c3 {
  constructor(e2) {
    this.layer = e2;
  }
  getLabelingDeconflictionInfo(e2) {
    const r2 = this.layer, t2 = r$2(r2, e2) ?? l$2(r2);
    return [{ vvEvaluators: { 0: o$5(r2.renderer) }, deconflictionEnabled: t2 }];
  }
  async createServiceOptions(r2) {
    const i2 = this.layer, l3 = O$1(i2), { capabilities: s3, objectIdField: o2 } = i2, n5 = i2.fieldsIndex.toJSON(), a2 = e$1(i2), c5 = i2.spatialReference.toJSON();
    return { type: "memory", source: await i2.source.openPorts(), orderByFields: o2, metadata: { fieldsIndex: n5, geometryType: a2, objectIdField: o2, spatialReference: c5, globalIdField: null, subtypeField: null, subtypes: null, timeInfo: null, timeReferenceUnknownClient: null, typeIdField: null, types: null }, queryMetadata: { capabilities: s3, effectiveCapabilities: l3, lastEditDate: null, snapshotInfo: null } };
  }
  createSourceSchema(e2, r2, t2) {
    const { definitionExpression: i2 } = this.layer;
    return t$2(e2, { definitionExpression: i2, customParameters: null }, r2, t2, null);
  }
  createProcessorSchema(e2, t2, i2) {
    const { fields: l3, renderer: s3, geometryType: o2, labelingInfo: a$12, labelsVisible: c5, objectIdField: d4 } = this.layer, p3 = { fields: l3.map((e3) => e3.toJSON()), renderer: s3?.clone(), featureReduction: e$5(this.layer, t2), geometryType: o2, labelingInfo: a$12, labelsVisible: c5, objectIdField: d4, orderBy: "default" };
    return a(e2, t2, p3, i2);
  }
  get hasRequiredSupport() {
    return m$4(this.layer.renderer);
  }
  getUpdateHashProperties(e2) {
    const t2 = this.layer, { definitionExpression: i2, renderer: l3 } = t2, s3 = this.layer.labelsVisible ? this.layer.labelingInfo : null, o2 = e$5(t2, e2)?.toJSON();
    return { definitionExpression: i2, renderer: l3, labelingInfo: s3, featureReduction: o2 };
  }
};
let d$1 = class d2 {
  constructor(e2) {
    this.layer = e2;
  }
  getLabelingDeconflictionInfo(e2) {
    const r2 = this.layer, t2 = r$2(r2, e2) ?? l$2(r2);
    return [{ vvEvaluators: { 0: o$5(r2.renderer) }, deconflictionEnabled: t2 }];
  }
  async createServiceOptions(t2) {
    const i2 = this.layer, l3 = O$1(i2), { capabilities: s3, objectIdField: a2 } = i2, n5 = i2.fieldsIndex.toJSON(), c5 = e$1(i2), d4 = i2.timeInfo?.toJSON(), m2 = i2.spatialReference.toJSON(), u5 = i2.source.getSource(), p3 = this.layer.objectIdField, y2 = a$4(s3);
    return y2.query.maxRecordCount = u5.maxRecordCount, { type: "ogc", source: u5, orderByFields: p3, metadata: { fieldsIndex: n5, geometryType: c5, objectIdField: a2, timeInfo: d4, spatialReference: m2, globalIdField: null, subtypeField: null, subtypes: null, timeReferenceUnknownClient: null, typeIdField: null, types: null }, queryMetadata: { capabilities: y2, effectiveCapabilities: l3, lastEditDate: null, snapshotInfo: null } };
  }
  createSourceSchema(e2, r2, t2) {
    const { customParameters: o2, timeExtent: i2, apiKey: l3 } = this.layer;
    return t$2(e2, { customParameters: o2, timeExtent: i2 }, r2, t2, l3);
  }
  createProcessorSchema(e2, r2, o2) {
    const { fields: i2, renderer: l3, geometryType: s3, labelingInfo: a$12, labelsVisible: c5, orderBy: d4, objectIdField: m2 } = this.layer, u5 = { fields: i2.map((e3) => e3.toJSON()), renderer: l3?.clone(), featureReduction: e$5(this.layer, r2), geometryType: s3, labelingInfo: a$12, labelsVisible: c5, objectIdField: m2, orderBy: d4 ?? "default" };
    return a(e2, r2, u5, o2);
  }
  get hasRequiredSupport() {
    return m$4(this.layer.renderer);
  }
  getUpdateHashProperties(e2) {
    const r2 = this.layer, { renderer: o2, apiKey: i2 } = r2, l3 = this.layer.labelsVisible ? this.layer.labelingInfo : null, s3 = JSON.stringify(r2.customParameters), a2 = e$5(r2, e2)?.toJSON();
    return { apiKey: i2, customParameters: s3, featureReduction: a2, labelingInfo: l3, orderBy: JSON.stringify(r2.orderBy), renderer: o2 };
  }
};
let u$1 = class u3 {
  constructor(e2) {
    this.layer = e2;
  }
  getLabelingDeconflictionInfo(e2) {
    const r2 = this.layer, t2 = r$2(r2, e2) ?? l$2(r2);
    return [{ vvEvaluators: { 0: o$5(r2.renderer) }, deconflictionEnabled: t2 }];
  }
  async createServiceOptions(s3) {
    const i2 = this.layer, l3 = O$1(i2), { capabilities: n5, objectIdField: p3, globalIdField: d4, orderBy: c5, refreshInterval: f2 } = i2, m2 = i2.fieldsIndex.toJSON(), u5 = m2.fields, y2 = e$1(i2), h2 = i2.timeInfo?.toJSON(), b2 = i2.spatialReference.toJSON(), g2 = a$4(this.layer.parsedUrl);
    let S2 = this.layer.objectIdField;
    if (c5?.length) {
      const e2 = !c5[0].valueExpression && c5[0].field;
      e2 && (S2 = e2);
    }
    const I2 = f2 > 0, j2 = has("featurelayer-snapshot-enabled") && "point" === i2.geometryType && n5?.query.supportsPagination && !n5?.operations.supportsEditing && !I2, x2 = j2 && t$1(s3, i2.fullExtent);
    return { type: "feature-service", source: g2, isSourceHosted: w$1(g2.path), orderByFields: S2, metadata: { globalIdField: d4, fields: u5, fieldsIndex: m2, geometryType: y2, objectIdField: p3, timeInfo: h2, spatialReference: b2, timeReferenceUnknownClient: false, subtypeField: null, subtypes: null, typeIdField: null, types: null }, queryMetadata: { capabilities: n5, effectiveCapabilities: l3, lastEditDate: null, snapshotInfo: { supportsSnapshotMinThreshold: j2, supportsSnapshotMaxThreshold: x2, snapshotCountThresholds: { min: has("featurelayer-snapshot-point-min-threshold"), max: has("featurelayer-snapshot-point-max-threshold") } } } };
  }
  createSourceSchema(e2, r2, t2) {
    const { definitionExpression: s3, customParameters: o2, timeExtent: i2 } = this.layer;
    return t$2(e2, { definitionExpression: s3, customParameters: o2, timeExtent: i2 }, r2, t2, null);
  }
  createProcessorSchema(e2, r2, t2) {
    const { fields: o2, renderer: i2, geometryType: l3, labelingInfo: a$12, labelsVisible: n5, orderBy: p3, objectIdField: d4 } = this.layer, c5 = { fields: o2.map((e3) => e3.toJSON()), renderer: i2?.clone(), featureReduction: e$5(this.layer, r2), geometryType: l3, labelingInfo: a$12, labelsVisible: n5, objectIdField: d4, orderBy: p3 ?? "default" };
    return a(e2, r2, c5, t2);
  }
  get hasRequiredSupport() {
    return m$4(this.layer.renderer);
  }
  hasFilters(e2) {
    return o$1(this.layer, e2);
  }
  addFilters(e2, r$12) {
    return r(this.layer, e2, r$12);
  }
  getUpdateHashProperties(e2) {
    const r2 = this.layer, { definitionExpression: t2, renderer: o2 } = r2, l3 = this.layer.labelsVisible ? this.layer.labelingInfo : null, a2 = JSON.stringify(r2.customParameters), n5 = e$5(r2, e2)?.toJSON();
    return { orderBy: JSON.stringify(r2.orderBy), definitionExpression: t2, renderer: o2, labelingInfo: l3, featureReduction: n5, customParameters: a2, floors: o$1(this.layer, e2) ? e2.floors : null };
  }
};
class s2 {
  constructor(e2) {
    this.layer = e2;
  }
  getLabelingDeconflictionInfo(e2) {
    const t2 = this.layer, o2 = r$2(t2, e2) ?? l$2(t2);
    return [{ vvEvaluators: { 0: o$5(t2.renderer) }, deconflictionEnabled: o2 }];
  }
  async createServiceOptions(e2) {
    const r2 = this.layer, { objectIdField: i2 } = r2, n5 = e$1(r2), o2 = r2.timeInfo?.toJSON() || null, l3 = r2.spatialReference ? r2.spatialReference.toJSON() : null;
    return { source: this.layer.parsedUrl, metadata: { fieldsIndex: this.layer.fieldsIndex.toJSON(), geometryType: n5, objectIdField: i2, timeInfo: o2, timeReferenceUnknownClient: null, spatialReference: l3, subtypeField: null, subtypes: null, globalIdField: null, typeIdField: null, types: null } };
  }
  createSourceSchema(e2, t2, r2) {
    const { definitionExpression: i2, geometryDefinition: n5, customParameters: o2 } = this.layer;
    return { type: "stream", service: e2, tileInfoJSON: t2.tileInfoJSON, mutable: { sourceRefreshVersion: r2, availableFields: t2.availableFields, dataFilter: { geometryDefinition: n5?.toJSON(), definitionExpression: i2, outSpatialReference: t2.outSpatialReference.toJSON(), customParameters: o2 ?? null, maxReconnectionAttempts: this.layer.maxReconnectionAttempts, maxReconnectionInterval: this.layer.maxReconnectionInterval, purgeOptions: this.layer.purgeOptions.toJSON() } } };
  }
  createProcessorSchema(t2, r2, i2) {
    const { fields: n5, renderer: l3, geometryType: s3, labelingInfo: a$12, labelsVisible: c5, objectIdField: d4 } = this.layer, m2 = { fields: n5.map((e2) => e2.toJSON()), renderer: l3?.clone(), featureReduction: e$5(this.layer, r2), geometryType: s3, labelingInfo: a$12, labelsVisible: c5, objectIdField: d4, orderBy: "default" };
    return a(t2, r2, m2, i2);
  }
  get hasRequiredSupport() {
    return m$4(this.layer.renderer);
  }
  getUpdateHashProperties(t2) {
    const r2 = this.layer, { definitionExpression: i2, renderer: n5 } = r2, o2 = this.layer.labelsVisible ? this.layer.labelingInfo : null, l3 = JSON.stringify(r2.customParameters), s3 = e$5(r2, t2)?.toJSON();
    return { definitionExpression: i2, renderer: n5, labelingInfo: o2, featureReduction: s3, customParameters: l3, streamFilter: `${JSON.stringify(r2.geometryDefinition)}${r2.definitionExpression}` };
  }
}
async function i$1(e2, { subtypeField: t2, sublayers: s3 }) {
  const a2 = await Promise.all(s3.map(({ renderer: t3 }) => r$1(e2, t3)));
  return { type: "subtype", subtypeField: t2, renderers: s3.reduce((e3, { subtypeCode: r2 }, t3) => ({ ...e3, [r2]: a2[t3] }), {}) };
}
function o(e2, r2) {
  const s3 = t$7();
  return { type: "subtype", filters: e2.filters, capabilities: { maxTextureSize: s3.maxTextureSize }, subtypeField: r2.subtypeField, target: "feature", bindings: r2.sublayers.reduce((e3, { renderer: r3, subtypeCode: s4 }) => ({ ...e3, [s4]: c$c(r3) }), {}) };
}
async function u4(r2, { subtypeField: t2, sublayers: a2 }) {
  const i2 = await Promise.all(a2.map((t3) => {
    const a3 = y$2(t3.renderer), i3 = { ...t3, geometryType: t3.geometryType ?? null };
    return l$1(r2, i3, a3);
  }));
  return { type: "subtype", subtypeField: t2, renderers: a2.reduce((e2, { subtypeCode: r3 }, t3) => ({ ...e2, [r3]: i2[t3] }), {}) };
}
async function n$1(e2, r2, t2, s3) {
  return { storage: o(r2, t2), mesh: { displayRefreshVersion: s3, strategy: { type: "feature" }, factory: { symbology: await i$1(e2, t2), labels: await u4(e2, t2) }, sortKey: null, timeZone: r2.timeZone } };
}
class c4 {
  constructor(e2) {
    this.layer = e2;
  }
  getLabelingDeconflictionInfo(e2) {
    return [{ vvEvaluators: {}, deconflictionEnabled: this.layer.sublayers.every((e3) => l$2(e3)) }];
  }
  async createServiceOptions(t2) {
    const r2 = this.layer, i2 = O$1(r2), { capabilities: l3, datesInUnknownTimezone: n5, editingInfo: y2, globalIdField: u5, objectIdField: m2, refreshInterval: c5, subtypeField: d4 } = r2, h2 = r2.fieldsIndex.toJSON(), b2 = e$1(r2), f2 = r2.timeInfo?.toJSON(), g2 = r2.spatialReference.toJSON(), S2 = a$4(this.layer.parsedUrl), F2 = m2, I2 = !(null != y2?.lastEditDate) && c5 > 0, j2 = has("featurelayer-snapshot-enabled") && "point" === r2.geometryType && l3?.query.supportsPagination && !l3?.operations.supportsEditing && !I2, x2 = j2 && t$1(t2, r2.fullExtent);
    return { type: "feature-service", source: S2, isSourceHosted: w$1(S2.path), orderByFields: F2, metadata: { timeReferenceUnknownClient: n5, subtypeField: d4, globalIdField: u5, fieldsIndex: h2, geometryType: b2, objectIdField: m2, timeInfo: f2, spatialReference: g2, subtypes: this.layer.subtypes?.map((e2) => e2.toJSON()), typeIdField: null, types: null }, queryMetadata: { capabilities: l3, effectiveCapabilities: i2, lastEditDate: y2?.lastEditDate?.getTime(), snapshotInfo: { supportsSnapshotMinThreshold: j2, supportsSnapshotMaxThreshold: x2, snapshotCountThresholds: { min: has("featurelayer-snapshot-point-min-threshold"), max: has("featurelayer-snapshot-point-max-threshold") } } } };
  }
  createSourceSchema(e2, t2, s3) {
    const { definitionExpression: i2, customParameters: a2, gdbVersion: o2, historicMoment: l3, subtypeField: n5, timeExtent: p3, apiKey: y2 } = this.layer, m2 = this.layer.sublayers.map((e3) => e3.subtypeCode).join(","), c5 = this.layer.sublayers.length ? `${this.layer.subtypeField} IN (${m2})` : "1=2", d4 = { definitionExpression: n$6(i2, c5), customParameters: a2, gdbVersion: o2, historicMoment: l3, subtypeField: n5, timeExtent: p3 };
    return t$2(e2, d4, t2, s3, y2);
  }
  createProcessorSchema(e2, t2, r2) {
    const s3 = { subtypeField: this.layer.subtypeField, sublayers: Array.from(this.layer.sublayers, (e3) => ({ featureReduction: null, geometryType: this.layer.geometryType, labelingInfo: e3.labelingInfo, labelsVisible: e3.labelsVisible, renderer: e3.renderer, subtypeCode: e3.subtypeCode, orderBy: null })) };
    return n$1(e2, t2, s3, r2);
  }
  hasFilters(e2) {
    return o$1(this.layer, e2) || d3(this.layer, e2);
  }
  addFilters(e2, t2) {
    e2 = r(this.layer, e2, t2);
    const s3 = this.layer.sublayers.filter((e3) => !h(e3, t2)).map((e3) => e3.subtypeCode);
    if (!s3.length)
      return e2;
    e2 ??= new d$7();
    const a2 = `NOT ${this.layer.subtypeField} IN (${s3.join(",")})`;
    return e2.where = n$6(e2.where, a2), e2;
  }
  get hasRequiredSupport() {
    return true;
  }
  getUpdateHashProperties(e2) {
    const t2 = this.layer, { definitionExpression: r2, gdbVersion: s3, apiKey: i2 } = t2, a2 = t2.historicMoment?.getTime() ?? void 0, o2 = JSON.stringify(t2.customParameters), n5 = o$1(this.layer, e2) ? e2.floors : null;
    return { gdbVersion: s3, definitionExpression: r2, historicMoment: a2, customParameters: o2, apiKey: i2, sublayerHash: "sublayers" in this.layer && this.layer.sublayers.items.reduce((e3, t3) => e3 + `${t3.visible ? 1 : 0}.${JSON.stringify(t3.renderer)}.${t3.labelsVisible}
.${JSON.stringify(t3.labelingInfo)}`, ""), floors: n5 };
  }
  setGraphicOrigin(e2) {
    const t2 = this.layer.fieldsIndex.get(this.layer.subtypeField), r2 = e2.attributes[t2.name], s3 = this.layer.sublayers.find((e3) => e3.subtypeCode === r2);
    e2.layer = e2.sourceLayer = s3;
  }
}
function d3(e2, t2) {
  return e2.sublayers.some((e3) => !h(e3, t2));
}
function h(e2, r2) {
  return e2.visible && (0 === e2.minScale || F(r2.scale, e2.minScale) || r2.scale < e2.minScale) && (0 === e2.maxScale || F(r2.scale, e2.maxScale) || r2.scale > e2.maxScale);
}
async function n4(n5, r2) {
  try {
    return await n5;
  } catch (t2) {
    if ("no-queryEngine" !== t2.name)
      throw t2;
    return r2;
  }
}
function e(s3, e2) {
  const i2 = /* @__PURE__ */ new Set();
  for (const t2 of s3 instanceof Set ? s3.values() : s3.keys())
    e2.has(t2) || i2.add(t2);
  return i2;
}
class i {
  constructor(s3) {
    this.version = s3;
  }
}
class t {
  constructor(s3) {
    this._subscriptions = /* @__PURE__ */ new Map(), this._visible = /* @__PURE__ */ new Set(), this._paused = /* @__PURE__ */ new Set(), this._version = 0, this._config = s3;
  }
  destroy() {
  }
  get _coverageSet() {
    const s3 = this._coverage ? Array.from(this._coverage.keys()).map((s4) => s4.id) : [];
    return new Set(s3);
  }
  suspend() {
    this._suspendedOverage = this._coverage, this._coverage = null, this._updateSubscriptions();
  }
  resume() {
    null == this._coverage && (this._coverage = this._suspendedOverage, this._suspendedOverage = null, this._updateSubscriptions());
  }
  update(s3) {
    return this._version = this._version + 1 % Number.MAX_SAFE_INTEGER, this._updateCoverage(s3), this._updateSubscriptions(), new Set(this._visible);
  }
  _updateCoverage(s3) {
    this._coverage = this._config.tileInfoView.getTileCoverage(s3.state, 0, true, "closest");
  }
  _updateSubscriptions() {
    const s3 = this._coverageSet, t2 = this._updateVisibility(), o2 = e(t2, s3), n5 = e(this._subscriptions, t2), r2 = e(s3, this._subscriptions), a2 = e(n5, s3), u5 = e(o2, a2), c5 = e(u5, this._paused);
    this._visible = t2;
    for (const e2 of r2.values())
      this._subscriptions.set(e2, new i(this._version));
    for (const e2 of c5.values())
      this._paused.add(e2);
    for (const e2 of a2.values())
      this._subscriptions.delete(e2), this._paused.delete(e2);
    (r2.size || a2.size || c5.size) && this._sendUpdateSubscriptions(r2, a2, c5);
  }
  _sendUpdateSubscriptions(s3, e2, i2) {
    const t2 = Array.from(s3.values()).map((s4) => ({ tileId: s4, version: this._subscriptions.get(s4).version }));
    this._config.updateSubscriptions({ subscribe: t2, unsubscribe: Array.from(e2.values()), pause: Array.from(i2.values()), tileInfoJSON: this._config.tileInfoView.tileInfo.toJSON() });
  }
  _updateVisibility() {
    const s3 = /* @__PURE__ */ new Set();
    if (!this._coverage)
      return s3;
    for (const e2 of this._coverage.keys()) {
      if (this._config.isDone(e2)) {
        s3.add(e2.id);
        continue;
      }
      if (this._addVisibleParent(s3, e2))
        continue;
      this._addVisibleChildren(s3, e2) || s3.add(e2.id);
    }
    return s3;
  }
  _addVisibleParent(e2, i2) {
    let t2 = false;
    for (const o2 of this._visible.values()) {
      new e$3(o2).containsChild(i2) && (e2.add(o2), t2 = true);
    }
    return t2;
  }
  _addVisibleChildren(e2, i2) {
    let t2 = false;
    for (const o2 of this._visible.values()) {
      const n5 = new e$3(o2);
      i2.containsChild(n5) && (e2.add(o2), t2 = true);
    }
    return t2;
  }
}
function z(e2, t2) {
  const r2 = /* @__PURE__ */ new Set();
  return e2 && e2.forEach((e3) => r2.add(e3)), t2 && t2.forEach((e3) => r2.add(e3)), r2.has("*") ? ["*"] : Array.from(r2);
}
const B = "esri.views.2d.layers.FeatureLayerView2D", Z = 4294967294;
let K = class extends j(i$7(m$5(u$a))) {
  constructor() {
    super(...arguments), this._commandsQueue = new a$5({ process: (e2) => {
      switch (e2.type) {
        case "processed-edit":
          return this._doEdit(e2);
        case "update":
          return this._doUpdate();
      }
    } }), this._visibilityOverrides = /* @__PURE__ */ new Set(), this._highlightCounter = new t$8(), this._updateHighlight = k$1(async () => {
      const e2 = [];
      for (const t2 of this._highlightCounter.ids()) {
        const r2 = this._highlightCounter.getHighestReason(t2), s3 = t$9(r2);
        e2.push({ objectId: t2, highlightFlags: s3 });
      }
      this._worker.pipeline.updateHighlight({ highlights: e2 });
    }), this._lastAvailableFields = [], this.eventLog = new n$3(), this._sourceRefreshVersion = 1, this._displayRefreshVersion = 1, this._pipelineUpdating = false, this._fields = null, this.featureEffectView = new r$4();
  }
  destroy() {
    this._worker?.destroy(), this._commandsQueue.destroy();
  }
  initialize() {
    this.addResolvingPromise(this._initProxy()), this.featureEffectView.featureEffect = this.featureEffect, this.featureEffectView.endTransitions();
  }
  async _initProxy() {
    const e2 = this.layer;
    if ("isTable" in e2 && e2.isTable)
      throw new s$4("featurelayerview:table-not-supported", "table feature layer can't be displayed", { layer: e2 });
    if ("mesh" === e2.geometryType)
      throw new s$4("featurelayerview:geometry-type-not-supported", `Geometry type of ${e2.geometryType} is not supported`, { layer: e2 });
    if (("feature" === e2.type || "subtype-group" === e2.type) && false === O$1(e2)?.operations.supportsQuery)
      throw new s$4("featurelayerview:query-not-supported", "layer view requires a layer with query capability", { layer: e2 });
    this._worker && this._worker.destroy();
    const t2 = this._createClientOptions();
    this._worker = await t$4(t2);
  }
  get hasAllFeatures() {
    return this.layer.visible && this.eventLog.hasAllFeatures;
  }
  get hasAllFeaturesInView() {
    return this.layer.visible && this.eventLog.hasAllFeaturesInView;
  }
  get hasFullGeometries() {
    return this.layer.visible && this.eventLog.hasFullGeometries;
  }
  get labelingCollisionInfos() {
    const e2 = this.layerAdapter.getLabelingDeconflictionInfo(this.view), t2 = this.layer.geometryType, r2 = !this.suspended;
    return e2.map(({ vvEvaluators: e3, deconflictionEnabled: s3 }) => ({ container: this.featureContainer, vvEvaluators: e3, deconflictionEnabled: s3, geometryType: t2, visible: r2 }));
  }
  get layerAdapter() {
    switch (this.layer.type) {
      case "feature":
        return "memory" === this.layer.source.type ? new p2(this.layer) : new u$2(this.layer);
      case "geojson":
      case "csv":
      case "wfs":
        return new p2(this.layer);
      case "subtype-group":
        return new c4(this.layer);
      case "ogc-feature":
        return new d$1(this.layer);
      case "stream":
        return new s2(this.layer);
      case "oriented-imagery":
        return new u$1(this.layer);
      case "knowledge-graph-sublayer":
        return new c$1(this.layer);
      case "catalog-footprint":
        return new d$3(this.layer);
      default:
        n$8(this.layer);
    }
    return null;
  }
  get updateHash() {
    if (!this.layerAdapter)
      return null;
    const { availableFields: e2, _displayRefreshVersion: t2, timeExtent: r2, clips: s3, filter: i2, featureEffect: a2, _sourceRefreshVersion: o2, view: { timeZone: n5 } } = this, u5 = JSON.stringify(s3), l3 = a2?.toJSON(), h2 = i2?.toJSON();
    return JSON.stringify({ availableFields: e2, clipsHash: u5, displayRefreshVersion: t2, effectHash: l3, filterHash: h2, sourceRefreshVersion: o2, timeExtent: r2, timeZone: n5, ...this.layerAdapter.getUpdateHashProperties(this.view) });
  }
  getDisplayStatistics(e2, t2) {
    return this.featureContainer?.getDisplayStatistics(e2, t2);
  }
  async queryHeatmapStatistics(e2) {
    return this._worker.pipeline.queryHeatmapStatistics(e2);
  }
  highlight(e2, t2 = "highlight") {
    let a2;
    e2 instanceof c$8 ? a2 = [e2.getObjectId()] : "number" == typeof e2 || "string" == typeof e2 ? a2 = [e2] : V.isCollection(e2) && e2.length > 0 ? a2 = e2.map((e3) => e3?.getObjectId()).toArray() : Array.isArray(e2) && e2.length > 0 && (a2 = "number" == typeof e2[0] || "string" == typeof e2[0] ? e2 : e2.map((e3) => e3?.getObjectId()));
    const o2 = a2?.filter(q$1);
    return o2?.length ? (this._addHighlight(o2, t2), e$7(() => this._removeHighlight(o2, t2))) : e$7();
  }
  getHighlightIds() {
    return Array.from(this._highlightCounter.ids());
  }
  hasHighlight() {
    return !this._highlightCounter.empty;
  }
  async hitTest(e2, s3) {
    const i2 = await this.featureContainer.hitTest(s3);
    if (0 === i2.length)
      return null;
    const { features: a2, aggregates: o2 } = await this._worker.pipeline.getDisplayFeatures(i2), n5 = this.featureContainer.getSortKeys(i2), u5 = ({ displayId: e3 }, { displayId: t2 }) => n5.has(e3) && n5.has(t2) ? n5.get(e3) - n5.get(t2) : e3 - t2;
    return a2.sort(u5).reverse(), o2.sort(u5).reverse(), [...o2.map((r2) => this._createGraphicHit(e2, s$3.fromJSON(r2))), ...a2.map((t2) => this._createGraphicHit(e2, c$8.fromJSON(t2)))];
  }
  queryStatistics() {
    return n4(this._worker.pipeline.queryStatistics(), { featureCount: 0, ringCount: 0, vertexCount: 0 });
  }
  querySummaryStatistics(e2, t2, r2) {
    const s3 = { ...t2, scale: this.view.scale }, i2 = this._worker.features.executeQueryForSummaryStatistics(this._cleanUpQuery(e2), s3, r2);
    return n4(i2, {});
  }
  async queryAggregateSummaryStatistics(e2, t2, r2) {
    const s3 = { ...t2, scale: this.view.scale }, i2 = this._worker.aggregates.executeQueryForSummaryStatistics(this._cleanUpAggregateQuery(e2), s3, r2);
    return n4(i2, {});
  }
  async queryUniqueValues(e2, t2, r2) {
    const s3 = { ...t2, scale: this.view.scale }, i2 = this._worker.features.executeQueryForUniqueValues(this._cleanUpQuery(e2), s3, r2);
    return n4(i2, { uniqueValueInfos: [] });
  }
  async queryAggregateUniqueValues(e2, t2, r2) {
    const s3 = { ...t2, scale: this.view.scale }, i2 = this._worker.aggregates.executeQueryForUniqueValues(this._cleanUpAggregateQuery(e2), s3, r2);
    return n4(i2, { uniqueValueInfos: [] });
  }
  async queryClassBreaks(e2, t2, r2) {
    const s3 = { ...t2, scale: this.view.scale }, i2 = this._worker.features.executeQueryForClassBreaks(this._cleanUpQuery(e2), s3, r2);
    return n4(i2, { classBreakInfos: [] });
  }
  async queryAggregateClassBreaks(e2, t2, r2) {
    const s3 = { ...t2, scale: this.view.scale }, i2 = this._worker.aggregates.executeQueryForClassBreaks(this._cleanUpAggregateQuery(e2), s3, r2);
    return n4(i2, { classBreakInfos: [] });
  }
  async queryHistogram(e2, t2, r2) {
    const s3 = { ...t2, scale: this.view.scale }, i2 = this._worker.features.executeQueryForHistogram(this._cleanUpQuery(e2), s3, r2);
    return n4(i2, { bins: [], maxValue: null, minValue: null, normalizationTotal: null });
  }
  async queryAggregateHistogram(e2, t2, r2) {
    const s3 = { ...t2, scale: this.view.scale }, i2 = this._worker.aggregates.executeQueryForHistogram(this._cleanUpAggregateQuery(e2), s3, r2);
    return n4(i2, { bins: [], maxValue: null, minValue: null, normalizationTotal: null });
  }
  queryFeatures(e2, t2) {
    return this.queryFeaturesJSON(e2, t2).then((e3) => {
      const t3 = d$6.fromJSON(e3);
      return t3.features.forEach((e4) => this._setLayersForFeature(e4)), t3;
    });
  }
  async queryVisibleFeatures(e2, t2) {
    const r2 = this._worker.pipeline.queryVisibleFeatures(this._cleanUpQuery(e2), t2), s3 = await n4(r2, { features: [] }), i2 = d$6.fromJSON(s3);
    return i2.features.forEach((e3) => this._setLayersForFeature(e3)), i2;
  }
  async queryAggregates(e2, t2) {
    const r2 = this._worker.aggregates.executeQuery(this._cleanUpAggregateQuery(e2), t2), s3 = await n4(r2, { features: [] }), i2 = m$2.fromJSON(s3);
    return i2.features.forEach((e3) => this._setLayersForFeature(e3)), i2;
  }
  queryAggregateIds(e2, t2) {
    const r2 = this._worker.aggregates.executeQueryForIds(this._cleanUpAggregateQuery(e2), t2);
    return n4(r2, []);
  }
  queryAggregateCount(e2, t2) {
    const r2 = this._worker.aggregates.executeQueryForCount(this._cleanUpAggregateQuery(e2), t2);
    return n4(r2, 0);
  }
  queryAggregateJSON(e2, t2) {
    const r2 = this._worker.aggregates.executeQuery(this._cleanUpAggregateQuery(e2), t2);
    return n4(r2, { features: [] });
  }
  async queryFeaturesJSON(e2, t2) {
    const r2 = this._worker.features.executeQuery(this._cleanUpQuery(e2), t2);
    return n4(r2, { features: [] });
  }
  queryObjectIds(e2, t2) {
    const r2 = this._worker.features.executeQueryForIds(this._cleanUpQuery(e2), t2);
    return n4(r2, []);
  }
  queryFeatureCount(e2, t2) {
    const r2 = this._worker.features.executeQueryForCount(this._cleanUpQuery(e2), t2);
    return n4(r2, 0);
  }
  async queryExtent(e2, t2) {
    const r2 = this._worker.features.executeQueryForExtent(this._cleanUpQuery(e2), t2), s3 = await n4(r2, { count: 0, extent: null });
    return { count: s3.count, extent: M$1.fromJSON(s3.extent) };
  }
  async getSampleFeatures(e2) {
    return this._worker.pipeline.getSampleFeatures(e2);
  }
  setVisibility(e2, t2) {
    t2 ? this._visibilityOverrides.delete(e2) : this._visibilityOverrides.add(e2), this._update();
  }
  update(e2) {
    if (!this._subscriptionManager)
      return;
    const t2 = this._subscriptionManager.update(e2);
    this.featureContainer.setVisibleTiles(t2);
  }
  attach() {
    has("esri-2d-update-debug") && console.debug("FeatureLayerView2D.attach"), this.featureContainer = new u$7(this), this.container.addChild(this.featureContainer), this.view.timeline.record(`${this.layer.title} (FeatureLayer) Attach`), this._subscriptionManager = new t({ tileInfoView: this.view.featuresTilingScheme, updateSubscriptions: (e2) => {
      this.featureContainer.updateSubscriptions(e2), this._worker.pipeline.updateSubscriptions(e2);
    }, isDone: (e2) => this.featureContainer.isDone(e2) }), this.requestUpdate(), this.addAttachHandles([d$8(() => this.updateHash, () => this._update(), P$2), d$8(() => this.updateSuspended, (e2) => {
      e2 || this._subscriptionManager.resume();
    })]), "stream" !== this.layer.type && "catalog-footprint" !== this.layer.type && this.addAttachHandles(this.layer.on("edits", (e2) => this._edit(e2)));
  }
  detach() {
    has("esri-2d-update-debug") && console.debug("FeatureLayerView2D.detach"), this._fields = null, this.featureContainer.destroy(), this._commandsQueue.clear(), this.container.removeAllChildren(), this._subscriptionManager = u$b(this._subscriptionManager), this._worker.pipeline.onDetach();
  }
  moveStart() {
    this.requestUpdate();
  }
  viewChange() {
    this.requestUpdate();
  }
  moveEnd() {
    this.requestUpdate();
  }
  isUpdating() {
    const e2 = "renderer" in this.layer && null != this.layer.renderer, t2 = this._commandsQueue.updateTracking.updating, r2 = null != this._updatingRequiredFieldsPromise, s3 = this.featureContainer.updatingHandles.updating, i2 = e2 && (t2 || r2) || s3 || this._pipelineUpdating || this.dataUpdating;
    if (has("esri-2d-log-updating")) {
      console.log(`Updating FLV2D (${this.layer.id}): ${i2}
  -> hasRenderer ${e2}
  -> updatingRequiredFields ${r2}
  -> hasPendingCommand ${t2}
  -> dataUpdating ${this.dataUpdating}
  -> processing ${this._pipelineUpdating}
  -> updatingContainer ${s3}
`);
      for (const e3 of this.featureContainer.subscriptions())
        console.log(`    -> Tile[${e3.id}] Done: ${e3.done}`);
    }
    return i2;
  }
  _createClientOptions() {
    const e2 = this;
    return { get container() {
      return e2.featureContainer;
    }, setUpdating: (e3) => {
      this._set("_pipelineUpdating", e3.pipeline), this._set("dataUpdating", e3.data);
    }, emitEvent: (e3) => {
      this.emit(e3.name, e3.event);
    }, get eventLog() {
      return e2.eventLog;
    }, fetch: (t2) => Promise.all(t2.map((t3) => e2.view.stage.painter.textureManager.rasterizeItem(t3))), fetchDictionary: (e3) => Promise.all(e3.map((e4) => this._fetchDictionaryRequest(e4))) };
  }
  async _fetchDictionaryRequest(e2) {
    try {
      if ("subtype-group" === this.layer.type)
        throw new Error("InternalError: SubtypeGroupLayer does not support dictionary renderer");
      const t2 = this.layer.renderer;
      if (!t2 || "dictionary" !== t2.type)
        throw new Error("InternalError: Expected layer to have a DictionaryRenderer");
      const r2 = this._lastSchema.processor.mesh.factory.symbology;
      if ("dictionary" !== r2.type)
        throw new Error("InternalError: Expected schema to be of type 'dictionary'");
      const s3 = { cimAnalyzer: this.view.stage.cimAnalyzer, cimResourceManager: this.view.stage.painter.textureManager.resourceManager, store: this.featureContainer.instanceStore, scaleExpression: r2.scaleExpression };
      this._fields || (this._fields = this.layer.fields.map((e3) => e3.toJSON()));
      const i2 = r2.visualVariableUniforms, a2 = await t2.getSymbolAsync(e2.feature, { fields: this._fields });
      if (!a2 || !a2.data)
        return { type: "dictionary-response", meshes: [] };
      return { type: "dictionary-response", meshes: await n$7(a2.data, { uniforms: i2, path: "renderer", schemaOptions: s3 }) };
    } catch (t2) {
      return { type: "dictionary-response", meshes: [] };
    }
  }
  _cleanUpQuery(e2) {
    const t2 = b$1.from(e2) || this.createQuery();
    return t2.outSpatialReference || (t2.outSpatialReference = this.view.spatialReference), t2.toJSON();
  }
  _cleanUpAggregateQuery(e2) {
    const t2 = b$1.from(e2) || this.createAggregateQuery();
    t2.outSpatialReference || (t2.outSpatialReference = this.view.spatialReference);
    const r2 = t2.objectIds ?? [];
    for (const s3 of t2.aggregateIds ?? [])
      r2.push(s3);
    return t2.objectIds = r2, t2.aggregateIds = [], t2.toJSON();
  }
  async _update() {
    return this._commandsQueue.push({ type: "update" });
  }
  async _edit(e2) {
    if (this.updateSuspended)
      return void this._subscriptionManager.suspend();
    return this._validateEdit(e2) ? this._commandsQueue.push({ type: "edit", edits: e2 }).catch(f$4) : void 0;
  }
  async doRefresh(e2) {
    this.attached && (this.updateSuspended && e2 || (e2 ? this.incrementSourceRefreshVersion() : this.incrementDisplayRefreshVersion()));
  }
  incrementSourceRefreshVersion() {
    this._sourceRefreshVersion = (this._sourceRefreshVersion + 1) % Z + 1;
  }
  incrementDisplayRefreshVersion() {
    this._displayRefreshVersion = (this._displayRefreshVersion + 1) % Z + 1;
  }
  _validateEdit(e2) {
    const t2 = "globalIdField" in this.layer && this.layer.globalIdField, r2 = e2.deletedFeatures.some((e3) => -1 === e3.objectId || !e3.objectId), s3 = t2 && this.availableFields.includes(t2);
    return r2 && !s3 ? (s$5.getLogger(this).error(new s$4("mapview-apply-edits", `Editing the specified service requires the layer's globalIdField, ${t2} to be included the layer's outFields for updates to be reflected on the map`)), null) : e2;
  }
  async _doUpdate() {
    "featureReduction" in this.layer && this.layer.featureReduction && this.layer.featureReduction !== this._lastFeatureReduction && (this.layer.featureReduction = this.layer.featureReduction?.clone(), this._lastFeatureReduction = this.layer.featureReduction);
    try {
      if (await this._updateRequiredFields(), this.destroyed || !this.layerAdapter?.hasRequiredSupport || !this._subscriptionManager)
        return;
      const e2 = this.featureContainer.instanceStore;
      this.featureContainer.attributeView.lockTextureUploads(), e2.updateStart();
      const t2 = this.featureEffect, r2 = { store: e2, cimAnalyzer: this.view.stage.cimAnalyzer, cimResourceManager: this.view.stage.painter.textureManager.resourceManager, scaleExpression: void 0 }, s3 = await this.layerAdapter.createServiceOptions(this.view), i2 = this._createViewSchemaConfig(), a2 = { source: this.layerAdapter.createSourceSchema(s3, i2, this._sourceRefreshVersion), processor: await this.layerAdapter.createProcessorSchema(r2, i2, this._displayRefreshVersion) }, o2 = !!m$6(this._lastSchema?.source.mutable, a2.source.mutable) || !!m$6(this._lastSchema?.processor, a2.processor);
      if (!o2)
        return this.featureContainer.requestRender(), this.featureContainer.attributeView.unlockTextureUploads(), e2.updateEnd(), void (this.featureEffectView.featureEffect = t2);
      this._lastSchema = a2, this._fields = null;
      const n5 = Math.round(performance.now());
      has("esri-2d-update-debug") && console.debug(`Id[${this.layer.uid}] Version[${n5}] FeatureLayerView2D._doUpdate`, { changes: o2 });
      let u5 = [];
      Array.isArray(s3.source) && (u5 = s3.source), await this._worker.pipeline.updateSchema(a2, n5, { transferList: u5 }), e2.updateEnd(), this.featureEffectView.featureEffect = t2, this.featureEffectView.endTransitions(), this.featureContainer.attributeView.unlockTextureUploads(), this.featureContainer.swapRenderState(), this.featureContainer.requestRender(), has("esri-2d-update-debug") && console.debug(`Version[${n5}] FeatureLayerView2D.updateEnd`), this.requestUpdate();
    } catch (e2) {
      has("esri-2d-update-debug") && console.error("Encountered an error during update", e2);
    }
  }
  async _doEdit(e2) {
    try {
      this.featureContainer.editStart(), await this._worker.pipeline.onEdits(e2), this.featureContainer.editEnd();
    } catch (t2) {
      b$2(t2);
    }
  }
  get hasFilter() {
    const e2 = this.layerAdapter.hasFilters?.(this.view) ?? false;
    return null != this.filter || null != this.timeExtent || this._visibilityOverrides.size > 0 || e2;
  }
  _getEffectiveAvailableFields(e2) {
    const t2 = z(this._lastAvailableFields, e2);
    return this._lastAvailableFields = t2, T(this.layer.fieldsIndex, t2);
  }
  _createViewSchemaConfig() {
    const e2 = [W(this.view, this.layerAdapter, this.timeExtent, this._visibilityOverrides, this.filter), this.featureEffect?.filter?.toJSON() ?? null];
    return { availableFields: this._getEffectiveAvailableFields(this.availableFields), filters: e2, outSpatialReference: this.view.spatialReference, tileInfoJSON: this.view.featuresTilingScheme.tileInfo.toJSON(), scale: this.view.scale, timeZone: this.view.timeZone };
  }
  _addHighlight(e2, t2) {
    this._highlightCounter.addReason(e2, t2), this._updateHighlight().catch((e3) => {
      b$2(e3) || s$5.getLogger(this).error(e3);
    });
  }
  _removeHighlight(e2, t2) {
    this._highlightCounter.deleteReason(e2, t2), this._updateHighlight().catch((e3) => {
      b$2(e3) || s$5.getLogger(this).error(e3);
    });
  }
  _setLayersForFeature(e2) {
    e2.layer = e2.sourceLayer = this.layer, this.layerAdapter.setGraphicOrigin && this.layerAdapter.setGraphicOrigin(e2);
  }
  _createGraphicHit(e2, t2) {
    return this._setLayersForFeature(t2), null != t2.geometry && (t2.geometry.spatialReference = this.view.spatialReference), { type: "graphic", graphic: t2, layer: this.layer, mapPoint: e2 };
  }
};
function W(e2, t2, r2, s3, i2) {
  i2 && (i2 = i2.clone());
  const a2 = null != i2 ? i2.timeExtent : null, o2 = null != r2 && null != a2 ? r2.intersection(a2) : r2 || a2;
  o2 && (i2 ??= new d$7(), i2.timeExtent = o2), i2 = t2.addFilters?.(i2, e2) ?? i2;
  let n5 = i2?.toJSON() ?? null;
  return s3.size && (n5 ??= new d$7().toJSON(), n5.hiddenIds = Array.from(s3)), n5;
}
e$2([y$1()], K.prototype, "_worker", void 0), e$2([y$1()], K.prototype, "_commandsQueue", void 0), e$2([y$1()], K.prototype, "_sourceRefreshVersion", void 0), e$2([y$1()], K.prototype, "_displayRefreshVersion", void 0), e$2([y$1({ readOnly: true })], K.prototype, "_pipelineUpdating", void 0), e$2([y$1({ readOnly: true })], K.prototype, "hasAllFeatures", null), e$2([y$1({ readOnly: true })], K.prototype, "hasAllFeaturesInView", null), e$2([y$1({ readOnly: true })], K.prototype, "hasFullGeometries", null), e$2([y$1()], K.prototype, "featureEffectView", void 0), e$2([y$1()], K.prototype, "labelingCollisionInfos", null), e$2([y$1()], K.prototype, "layerAdapter", null), e$2([y$1()], K.prototype, "updateHash", null), e$2([y$1()], K.prototype, "updating", void 0), K = e$2([c$7(B)], K);
const X = K;
const FeatureLayerView2D = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: X
}, Symbol.toStringTag, { value: "Module" }));
export {
  FeatureLayerView2D as F,
  X,
  n4 as n
};
