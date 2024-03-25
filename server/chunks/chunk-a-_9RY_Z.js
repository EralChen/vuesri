import { cA as n$2, b0 as has, ds as o$1, wD as t$3, wE as u, es as e$2, sj as O, wF as Q, bZ as S$1, aV as e$3, aX as y, a_ as c$2, go as _$2, gy as c$3, wG as c$4, aW as n$3, wH as l$2, cY as x$1, f6 as p$1, wI as kt, nQ as g$2, ls as i$1, aE as r$6, wJ as a$4, wK as s$1, iy as o$2, wL as rt, nG as u$1, wM as Gt, gk as n$4, wN as $, wO as bt, wP as pt, vu as r$7, c8 as u$2, wQ as Rt, b as e$4 } from "./chunk-ejFG4zJ0.js";
import { t as t$2 } from "./chunk-jrhFla2W.js";
import { t as t$4 } from "./chunk-xHgk_Pqx.js";
const e$1 = { shaders: { vertexShader: n$2("bitBlit/bitBlit.vert"), fragmentShader: n$2("bitBlit/bitBlit.frag") }, attributes: /* @__PURE__ */ new Map([["a_pos", 0], ["a_tex", 1]]) };
const r$5 = { shaders: { vertexShader: n$2("stencil/stencil.vert"), fragmentShader: n$2("stencil/stencil.frag") }, attributes: /* @__PURE__ */ new Map([["a_pos", 0]]) };
const t$1 = { shaders: { vertexShader: n$2("highlight/textured.vert"), fragmentShader: n$2("highlight/highlight.frag") }, attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) }, r$4 = { shaders: { vertexShader: n$2("highlight/textured.vert"), fragmentShader: n$2("highlight/blur.frag") }, attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
const r$3 = has("esri-2d-profiler");
let n$1 = class n {
  constructor(n3, i) {
    if (this._events = new o$1(), this._entries = /* @__PURE__ */ new Map(), this._timings = new t$2(10), this._currentContainer = null, this._currentPass = null, this._currentBrush = null, this._currentSummary = null, !r$3)
      return;
    this._ext = t$3(n3.gl, {}), this._debugOutput = i;
    const o2 = n3.gl;
    if (!this.enableCommandLogging)
      return;
    let a3;
    for (a3 in o2)
      if ("function" == typeof o2[a3]) {
        const e2 = o2[a3], t2 = a3.includes("draw");
        o2[a3] = (...s2) => (this._events.emit("command", { container: this._currentContainer, pass: this._currentPass, brush: this._currentBrush, method: a3, args: s2, isDrawCommand: t2 }), this._currentSummary && (this._currentSummary.commands++, t2 && this._currentSummary.drawCommands++), e2.apply(o2, s2));
      }
  }
  get enableCommandLogging() {
    return !("object" == typeof r$3 && r$3.disableCommands);
  }
  recordContainerStart(e2) {
    r$3 && (this._currentContainer = e2);
  }
  recordContainerEnd() {
    r$3 && (this._currentContainer = null);
  }
  recordPassStart(e2) {
    r$3 && (this._currentPass = e2, this._initSummary());
  }
  recordPassEnd() {
    r$3 && (this._currentPass = null, this._emitSummary());
  }
  recordBrushStart(e2) {
    r$3 && (this._currentBrush = e2);
  }
  recordBrushEnd() {
    r$3 && (this._currentBrush = null);
  }
  recordStart(e2) {
    if (r$3 && null != this._ext) {
      if (this._entries.has(e2)) {
        const t3 = this._entries.get(e2), s2 = this._ext.resultAvailable(t3.query), r2 = this._ext.disjoint();
        if (s2 && !r2) {
          const s3 = this._ext.getResult(t3.query) / 1e6;
          let r3 = 0;
          if (null != this._timings.enqueue(s3)) {
            const e3 = this._timings.entries, t4 = e3.length;
            let s4 = 0;
            for (const r4 of e3)
              s4 += r4;
            r3 = s4 / t4;
          }
          const n3 = s3.toFixed(2), i = r3 ? r3.toFixed(2) : "--";
          this.enableCommandLogging ? (console.groupCollapsed(`Frame report for ${e2}, ${n3} ms (${i} last 10 avg)
${t3.commandsLen} Commands (${t3.drawCommands} draw)`), console.log("RenderPass breakdown: "), console.table(t3.summaries), console.log("Commands: ", t3.commands), console.groupEnd()) : console.log(`Frame report for ${e2}, ${n3} ms (${i} last 10 avg)`), this._debugOutput.innerHTML = `${n3} (${i})`;
        }
        for (const e3 of t3.handles)
          e3.remove();
        this._ext.deleteQuery(t3.query), this._entries.delete(e2);
      }
      const t2 = { name: e2, query: this._ext.createQuery(), commands: [], commandsLen: 0, drawCommands: 0, summaries: [], handles: [] };
      this.enableCommandLogging && (t2.handles.push(this._events.on("command", (e3) => {
        t2.commandsLen++, t2.commands.push(e3), e3.isDrawCommand && t2.drawCommands++;
      })), t2.handles.push(this._events.on("summary", (e3) => {
        t2.summaries.push(e3);
      }))), this._ext.beginTimeElapsed(t2.query), this._entries.set(e2, t2);
    }
  }
  recordEnd(e2) {
    r$3 && null != this._ext && this._entries.has(e2) && this._ext.endTimeElapsed();
  }
  _initSummary() {
    this.enableCommandLogging && (this._currentSummary = { container: this._currentContainer, pass: this._currentPass, drawCommands: 0, commands: 0 });
  }
  _emitSummary() {
    this.enableCommandLogging && this._currentSummary && this._events.emit("summary", this._currentSummary);
  }
};
const e = 1, h$1 = 0, o = 1, r$2 = 2;
let l$1 = class l {
  constructor(t2, s2, h2) {
    this._debugMap = /* @__PURE__ */ new Map(), this._width = t2 * h2, this._height = s2 * h2, this._pixelRatio = h2;
    const o2 = Math.ceil(this._width / e), r2 = Math.ceil(this._height / e);
    this._cols = o2, this._rows = r2, this._cells = t$4.create(o2 * r2);
  }
  insertMetrics(t2) {
    this._markMetrics(t2);
  }
  hasCollision(t2) {
    let i = 0;
    for (const { computedX: e2, computedY: h2, width: l3, height: c2 } of t2.bounds) {
      const t3 = (l3 + u) * this._pixelRatio, a3 = (c2 + u) * this._pixelRatio;
      switch (this._collide(e2, h2, t3, a3)) {
        case r$2:
          return r$2;
        case o:
          i++;
      }
    }
    return i === t2.bounds.length ? o : h$1;
  }
  getCellId(t2, s2) {
    return t2 + s2 * this._cols;
  }
  has(t2) {
    return this._cells.has(t2);
  }
  hasRange(t2, s2) {
    return this._cells.hasRange(t2, s2);
  }
  set(t2) {
    this._cells.set(t2);
  }
  setRange(t2, s2) {
    this._cells.setRange(t2, s2);
  }
  _collide(s2, i, l3, c2) {
    const a3 = s2 - l3 / 2, n3 = i - c2 / 2, _3 = a3 + l3, u2 = n3 + c2;
    if (_3 < 0 || u2 < 0 || a3 > this._width || n3 > this._height)
      return o;
    const d4 = e$2(Math.floor(a3 / e), 0, this._cols), f2 = e$2(Math.floor(n3 / e), 0, this._rows), p = e$2(Math.ceil(_3 / e), 0, this._cols), M = e$2(Math.ceil(u2 / e), 0, this._rows);
    for (let t2 = f2; t2 <= M; t2++)
      for (let s3 = d4; s3 <= p; s3++) {
        const i2 = this.getCellId(s3, t2);
        if (this.has(i2))
          return r$2;
      }
    return h$1;
  }
  _mark(s2, i, h2, o2, r2) {
    const l3 = s2 - h2 / 2, c2 = i - o2 / 2, a3 = l3 + h2, n3 = c2 + o2, _3 = e$2(Math.floor(l3 / e), 0, this._cols), u2 = e$2(Math.floor(c2 / e), 0, this._rows), d4 = e$2(Math.ceil(a3 / e), 0, this._cols), f2 = e$2(Math.ceil(n3 / e), 0, this._rows);
    for (let t2 = u2; t2 <= f2; t2++)
      for (let s3 = _3; s3 <= d4; s3++) {
        const i2 = this.getCellId(s3, t2);
        this._debugMap.set(i2, r2), this.set(i2);
      }
    return false;
  }
  _markMetrics(t2) {
    for (const { computedX: i, computedY: e2, width: h2, height: o2 } of t2.bounds) {
      const r2 = (h2 + u) * this._pixelRatio, l3 = (o2 + u) * this._pixelRatio;
      this._mark(i, e2, r2, l3, t2.entityTexel);
    }
  }
};
const s = 254, r$1 = 255, c$1 = 0;
function a$3(e2, t2) {
  const o2 = e2.children.slice();
  o2.sort((e3, t3) => e3.tileAge - t3.tileAge), o2.forEach((e3) => {
    null != e3.labelMetrics && e3.isReady && t2(e3, e3.labelMetrics);
  });
}
function f$2(e2, t2) {
  return (!e2.minScale || e2.minScale >= t2) && (!e2.maxScale || e2.maxScale <= t2);
}
let d$4 = class d {
  run(e2, t2, o2, i) {
    const n3 = [];
    for (let l3 = e2.length - 1; l3 >= 0; l3--) {
      const t3 = e2[l3];
      t3.labelingCollisionInfos?.length && n3.push(...t3.labelingCollisionInfos);
    }
    has("esri-2d-update-debug") && n3.length && console.debug("CollisionEngine.run"), this._transformMetrics(n3), this._runCollision(n3, t2, o2, i);
    for (const l3 of n3)
      l3.container.requestRender();
  }
  _runCollision(e2, t2, i, n3) {
    const [l3, d4] = t2.state.size, u2 = new l$1(l3, d4, t2.pixelRatio);
    for (const { container: o2, deconflictionEnabled: b, visible: h2 } of e2) {
      const e3 = o2.attributeView;
      b ? h2 ? (this._prepare(o2), this._collideVisible(u2, o2, i, n3), this._collideInvisible(u2, o2)) : a$3(o2, (t3, o3) => {
        for (const i2 of o3)
          e3.setLabelMinZoom(i2.entityTexel, r$1);
      }) : a$3(o2, (t3, o3) => {
        for (const n4 of o3)
          f$2(n4, i) ? (e3.setLabelMinZoom(n4.entityTexel, c$1), h2 && u2.insertMetrics(n4)) : e3.setLabelMinZoom(n4.entityTexel, s);
      });
    }
  }
  _isFiltered(o2, i, n3) {
    const l3 = i.getFilterFlags(o2), s2 = !n3.hasFilter || !!(l3 & O), r2 = null == n3.featureEffect || n3.featureEffect.excludedLabelsVisible || !!(l3 & Q);
    return !(s2 && r2);
  }
  _prepare(e2) {
    const t2 = e2.attributeView, o2 = /* @__PURE__ */ new Set();
    a$3(e2, (i, n3) => {
      for (const l3 of n3) {
        const i2 = l3.entityTexel;
        if (o2.has(i2))
          continue;
        if (o2.add(i2), this._isFiltered(i2, t2, e2.layerView)) {
          t2.setLabelMinZoom(i2, s);
          continue;
        }
        t2.getLabelMinZoom(i2) !== c$1 ? t2.setLabelMinZoom(i2, r$1) : t2.setLabelMinZoom(i2, c$1);
      }
    });
  }
  _collideVisible(e2, t2, o$12, r2) {
    const d4 = t2.attributeView, u2 = /* @__PURE__ */ new Set();
    a$3(t2, (t3, a3) => {
      for (let b = 0; b < a3.length; b++) {
        const h2 = a3[b].entityTexel;
        if (u2.has(h2))
          continue;
        if (t3.key.level !== r2) {
          d4.setLabelMinZoom(h2, s), u2.add(h2);
          continue;
        }
        if (!f$2(a3[b], o$12)) {
          d4.setLabelMinZoom(h2, s), u2.add(h2);
          continue;
        }
        if (0 !== d4.getLabelMinZoom(h2)) {
          u2.add(h2);
          continue;
        }
        let m = false, M = true;
        const g2 = b;
        let p = b;
        for (; p < a3.length; p++) {
          const t4 = a3[p];
          if (t4.entityTexel !== h2)
            break;
          if (m)
            continue;
          switch (e2.hasCollision(t4)) {
            case o:
              break;
            case r$2:
              m = true, M = false;
              break;
            case h$1:
              M = false;
          }
        }
        if (!m)
          for (let t4 = g2; t4 < p; t4++)
            e2.insertMetrics(a3[t4]);
        b = p - 1, M || (u2.add(h2), d4.setLabelMinZoom(h2, m ? s : c$1));
      }
    });
  }
  _collideInvisible(e2, t2) {
    const o$12 = t2.attributeView, s2 = /* @__PURE__ */ new Set();
    a$3(t2, (t3, a3) => {
      for (let f2 = 0; f2 < a3.length; f2++) {
        const t4 = a3[f2].entityTexel;
        if (s2.has(t4))
          continue;
        if (o$12.getLabelMinZoom(t4) !== r$1) {
          s2.add(t4);
          continue;
        }
        let d4 = false, u2 = true;
        const b = f2;
        let h2 = f2;
        for (; h2 < a3.length; h2++) {
          const o$13 = a3[h2];
          if (o$13.entityTexel !== t4)
            break;
          if (d4)
            continue;
          switch (e2.hasCollision(o$13)) {
            case o:
              break;
            case r$2:
              d4 = true, u2 = false;
              break;
            case h$1:
              u2 = false;
          }
        }
        if (!d4)
          for (let o2 = b; o2 < h2; o2++)
            e2.insertMetrics(a3[o2]);
        f2 = h2 - 1, u2 || (s2.add(t4), o$12.setLabelMinZoom(t4, d4 ? r$1 : c$1));
      }
    });
  }
  _transformMetrics(e2) {
    for (const { container: t2, geometryType: o2, vvEvaluators: i } of e2)
      a$3(t2, (e3, n3) => {
        const l3 = t2.attributeView, s2 = e3.transforms.labelMat2d;
        s2[4] = Math.round(s2[4]), s2[5] = Math.round(s2[5]);
        const r2 = "polyline" === o2;
        for (const t3 of n3) {
          const { entityTexel: e4, anchorX: o3, anchorY: n4 } = t3;
          let c2 = t3.referenceBounds?.size ?? 0;
          const a3 = i[0];
          if (null != a3) {
            const t4 = a3(l3.getVVSize(e4));
            c2 = isNaN(t4) || null == t4 || t4 === 1 / 0 ? c2 : t4;
          }
          const f2 = t3.directionX * (c2 / 2), d4 = t3.directionY * (c2 / 2);
          for (const i2 of t3.bounds) {
            let e5 = o3, t4 = n4;
            if (r2) {
              let o4 = e5 + i2.x + f2, n5 = t4 + i2.y + d4;
              o4 = s2[0] * o4 + s2[2] * n5 + s2[4], n5 = s2[1] * o4 + s2[3] * n5 + s2[5], i2.computedX = Math.floor(o4), i2.computedY = Math.floor(n5);
            } else {
              e5 = s2[0] * o3 + s2[2] * n4 + s2[4], t4 = s2[1] * o3 + s2[3] * n4 + s2[5];
              const l4 = e5 + i2.x + f2, r3 = t4 + i2.y + d4;
              i2.computedX = l4, i2.computedY = r3;
            }
          }
        }
      });
  }
};
const r = 32;
let a$2 = class a extends S$1 {
  constructor(e2) {
    super(e2), this._lastUpdate = 0, this.collisionEngine = new d$4(), this.lastUpdateId = -1, this.updateRequested = false, this.view = null;
  }
  get updating() {
    return has("esri-2d-log-updating") && console.log(`Updating LabelManager ${this.updateRequested}:
-> updateRequested: ${this.updateRequested}`), this.updateRequested;
  }
  update(e2) {
    const t2 = performance.now();
    t2 - this._lastUpdate >= r ? (this._lastUpdate = t2, this.doUpdate(e2)) : this.requestUpdate();
  }
  viewChange() {
    this.requestUpdate();
  }
  requestUpdate() {
    this.updateRequested || (this.updateRequested = true, this.view?.requestUpdate());
  }
  processUpdate(e2) {
    this.updateRequested && (this.updateRequested = false, this.update(e2));
  }
  doUpdate(e2) {
    const t2 = this.view;
    if (t2)
      try {
        const s2 = e2.state.scale, o2 = t2.featuresTilingScheme.getClosestInfoForScale(s2).level;
        this.collisionEngine.run(t2.allLayerViews.items, e2, s2, o2);
      } catch (s2) {
      }
  }
};
e$3([y()], a$2.prototype, "updateRequested", void 0), e$3([y()], a$2.prototype, "updating", null), e$3([y()], a$2.prototype, "view", void 0), a$2 = e$3([c$2("esri.views.2d.LabelManager")], a$2);
const a$1 = "esri-zoom-box", n2 = { container: `${a$1}__container`, overlay: `${a$1}__overlay`, background: `${a$1}__overlay-background`, box: `${a$1}__outline` }, h = { zoom: "Shift", counter: "Ctrl" };
let l2 = class extends S$1 {
  constructor(t2) {
    super(t2), this._container = null, this._overlay = null, this._backgroundShape = null, this._boxShape = null, this._box = { x: 0, y: 0, width: 0, height: 0 }, this._rafId = null, this._redraw = this._redraw.bind(this);
  }
  destroy() {
    this.view = null;
  }
  set view(t2) {
    this.removeAllHandles(), this._destroyOverlay(), this._set("view", t2), t2 && this.addHandles([t2.on("drag", [h.zoom], (t3) => this._handleDrag(t3, 1), _$2.INTERNAL), t2.on("drag", [h.zoom, h.counter], (t3) => this._handleDrag(t3, -1), _$2.INTERNAL)]);
  }
  _start() {
    this._createContainer(), this._createOverlay(), this.navigation.begin();
  }
  _update(t2, e2, i, r2) {
    this._box.x = t2, this._box.y = e2, this._box.width = i, this._box.height = r2, this._rafId || (this._rafId = requestAnimationFrame(this._redraw));
  }
  _end(t2, e2, r2, s2, o2) {
    const a3 = this.view, n3 = a3.toMap(c$3(t2 + 0.5 * r2, e2 + 0.5 * s2));
    let h2 = Math.max(r2 / a3.width, s2 / a3.height);
    -1 === o2 && (h2 = 1 / h2), this._destroyOverlay(), this.navigation.end(), a3.goTo({ center: n3, scale: a3.scale * h2 });
  }
  _updateBox(t2, e2, i, r2) {
    const s2 = this._boxShape;
    s2.setAttributeNS(null, "x", "" + t2), s2.setAttributeNS(null, "y", "" + e2), s2.setAttributeNS(null, "width", "" + i), s2.setAttributeNS(null, "height", "" + r2), s2.setAttributeNS(null, "class", n2.box);
  }
  _updateBackground(t2, e2, i, r2) {
    this._backgroundShape.setAttributeNS(null, "d", this._toSVGPath(t2, e2, i, r2, this.view.width, this.view.height));
  }
  _createContainer() {
    const t2 = document.createElement("div");
    t2.className = n2.container, this.view.root.appendChild(t2), this._container = t2;
  }
  _createOverlay() {
    const t2 = this.view.width, e2 = this.view.height, i = document.createElementNS("http://www.w3.org/2000/svg", "path");
    i.setAttributeNS(null, "d", "M 0 0 L " + t2 + " 0 L " + t2 + " " + e2 + " L 0 " + e2 + " Z"), i.setAttributeNS(null, "class", n2.background);
    const r2 = document.createElementNS("http://www.w3.org/2000/svg", "rect"), s2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    s2.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"), s2.setAttributeNS(null, "class", n2.overlay), s2.appendChild(i), s2.appendChild(r2), this._container.appendChild(s2), this._backgroundShape = i, this._boxShape = r2, this._overlay = s2;
  }
  _destroyOverlay() {
    this._container && this._container.parentNode && this._container.parentNode.removeChild(this._container), this._container = this._backgroundShape = this._boxShape = this._overlay = null;
  }
  _toSVGPath(t2, e2, i, r2, s2, o2) {
    const a3 = t2 + i, n3 = e2 + r2;
    return "M 0 0 L " + s2 + " 0 L " + s2 + " " + o2 + " L 0 " + o2 + " ZM " + t2 + " " + e2 + " L " + t2 + " " + n3 + " L " + a3 + " " + n3 + " L " + a3 + " " + e2 + " Z";
  }
  _handleDrag(t2, e2) {
    const i = t2.x, r2 = t2.y, s2 = t2.origin.x, o2 = t2.origin.y;
    let a3, n3, h2, l3;
    switch (i > s2 ? (a3 = s2, h2 = i - s2) : (a3 = i, h2 = s2 - i), r2 > o2 ? (n3 = o2, l3 = r2 - o2) : (n3 = r2, l3 = o2 - r2), t2.action) {
      case "start":
        this._start();
        break;
      case "update":
        this._update(a3, n3, h2, l3);
        break;
      case "end":
        this._end(a3, n3, h2, l3, e2);
    }
    t2.stopPropagation();
  }
  _redraw() {
    if (!this._rafId)
      return;
    if (this._rafId = null, !this._overlay)
      return;
    const { x: t2, y: e2, width: i, height: r2 } = this._box;
    this._updateBox(t2, e2, i, r2), this._updateBackground(t2, e2, i, r2), this._rafId = requestAnimationFrame(this._redraw);
  }
};
e$3([y()], l2.prototype, "navigation", void 0), e$3([y()], l2.prototype, "view", null), l2 = e$3([c$2("esri.views.2d.navigation.ZoomBox")], l2);
const c = l2;
let d$3 = class d2 extends S$1 {
  constructor(t2) {
    super(t2), this.animationTime = 0, this.momentumEstimator = new c$4(500, 6, 0.92), this.momentum = null, this.tmpMomentum = n$3(), this.momentumFinished = false, this.viewpoint = new l$2({ targetGeometry: new x$1(), scale: 0, rotation: 0 }), this._previousDrag = null, p$1(() => this.momentumFinished, () => this.navigation.stop());
  }
  begin(t2, i) {
    this.navigation.begin(), this.momentumEstimator.reset(), this.addToEstimator(i), this._previousDrag = i;
  }
  update(t2, i) {
    this.addToEstimator(i);
    let o2 = i.center.x, e2 = i.center.y;
    const s2 = this._previousDrag;
    o2 = s2 ? s2.center.x - o2 : -o2, e2 = s2 ? e2 - s2.center.y : e2, t2.viewpoint = kt(this.viewpoint, t2.viewpoint, [o2 || 0, e2 || 0]), this._previousDrag = i;
  }
  end(t2, i) {
    this.addToEstimator(i);
    const o2 = t2.navigation.momentumEnabled;
    this.momentum = o2 ? this.momentumEstimator.evaluateMomentum() : null, this.animationTime = 0, this.momentum && this.onAnimationUpdate(t2), this._previousDrag = null, this.navigation.end();
  }
  addToEstimator(t2) {
    const i = t2.center.x, o2 = t2.center.y, e2 = i$1(-i, o2), m = r$6(-i, o2, 0);
    this.momentumEstimator.add(e2, m, 1e-3 * t2.timestamp);
  }
  onAnimationUpdate(t2) {
    this.navigation.animationManager?.animateContinous(t2.viewpoint, (i, o2) => {
      const { momentum: e2, animationTime: s2, tmpMomentum: m } = this, n3 = 1e-3 * o2;
      if (!(this.momentumFinished = !e2 || e2.isFinished(s2))) {
        const o3 = e2.valueDelta(s2, n3);
        g$2(m, e2.direction, o3), kt(i, i, m), t2.constraints.constrainByGeometry(i);
      }
      this.animationTime += n3;
    });
  }
  stopMomentumNavigation() {
    this.momentum && (this.momentumEstimator.reset(), this.momentum = null, this.navigation.stop());
  }
};
e$3([y()], d$3.prototype, "momentumFinished", void 0), e$3([y()], d$3.prototype, "viewpoint", void 0), e$3([y()], d$3.prototype, "navigation", void 0), d$3 = e$3([c$2("esri.views.2d.navigation.actions.Pan")], d$3);
const v$1 = d$3;
let _$1 = class _ extends S$1 {
  constructor(t2) {
    super(t2), this._animationTime = 0, this._momentumFinished = false, this._previousAngle = 0, this._previousRadius = 0, this._previousCenter = null, this._rotationMomentumEstimator = new a$4(0.6, 0.15, 0.95), this._rotationDirection = 1, this._startAngle = 0, this._startRadius = 0, this._updateTimestamp = null, this._zoomDirection = 1, this._zoomMomentumEstimator = new s$1(), this._zoomOnly = null, this.zoomMomentum = null, this.rotateMomentum = null, this.viewpoint = new l$2({ targetGeometry: new x$1(), scale: 0, rotation: 0 }), this.addHandles(p$1(() => this._momentumFinished, () => this.navigation.stop()));
  }
  begin(t2, o2) {
    this.navigation.begin(), this._rotationMomentumEstimator.reset(), this._zoomMomentumEstimator.reset(), this._zoomOnly = null, this._previousAngle = this._startAngle = o2.angle, this._previousRadius = this._startRadius = o2.radius, this._previousCenter = o2.center, this._updateTimestamp = null, t2.constraints.rotationEnabled && this.addToRotateEstimator(0, o2.timestamp), this.addToZoomEstimator(o2, 1);
  }
  update(t2, o2) {
    null === this._updateTimestamp && (this._updateTimestamp = o2.timestamp);
    const i = o2.angle, s2 = o2.radius, e2 = o2.center, m = Math.abs(180 * (i - this._startAngle) / Math.PI), n3 = Math.abs(s2 - this._startRadius), a3 = this._startRadius / s2;
    if (this._previousRadius && this._previousCenter) {
      const r2 = s2 / this._previousRadius;
      let h2 = 180 * (i - this._previousAngle) / Math.PI;
      this._rotationDirection = h2 >= 0 ? 1 : -1, this._zoomDirection = r2 >= 1 ? 1 : -1, t2.constraints.rotationEnabled ? (null === this._zoomOnly && o2.timestamp - this._updateTimestamp > 200 && (this._zoomOnly = n3 - m > 0), null === this._zoomOnly || this._zoomOnly ? h2 = 0 : this.addToRotateEstimator(i - this._startAngle, o2.timestamp)) : h2 = 0, this.addToZoomEstimator(o2, a3), this.navigation.setViewpoint([e2.x, e2.y], 1 / r2, h2, [this._previousCenter.x - e2.x, e2.y - this._previousCenter.y]);
    }
    this._previousAngle = i, this._previousRadius = s2, this._previousCenter = e2;
  }
  end(t2) {
    this.rotateMomentum = this._rotationMomentumEstimator.evaluateMomentum(), this.zoomMomentum = this._zoomMomentumEstimator.evaluateMomentum(), this._animationTime = 0, (this.rotateMomentum || this.zoomMomentum) && this.onAnimationUpdate(t2), this.navigation.end();
  }
  addToRotateEstimator(t2, o2) {
    this._rotationMomentumEstimator.add(t2, 1e-3 * o2);
  }
  addToZoomEstimator(t2, o2) {
    this._zoomMomentumEstimator.add(o2, 1e-3 * t2.timestamp);
  }
  canZoomIn(t2) {
    const o2 = t2.scale, i = t2.constraints.effectiveMaxScale;
    return 0 === i || o2 > i;
  }
  canZoomOut(t2) {
    const o2 = t2.scale, i = t2.constraints.effectiveMinScale;
    return 0 === i || o2 < i;
  }
  onAnimationUpdate(t2) {
    this.navigation.animationManager?.animateContinous(t2.viewpoint, (o2, i) => {
      const s2 = !this.canZoomIn(t2) && this._zoomDirection > 1 || !this.canZoomOut(t2) && this._zoomDirection < 1, e2 = !this.rotateMomentum || this.rotateMomentum.isFinished(this._animationTime), m = s2 || !this.zoomMomentum || this.zoomMomentum.isFinished(this._animationTime), l3 = 1e-3 * i;
      if (this._momentumFinished = e2 && m, !this._momentumFinished) {
        const i2 = this.rotateMomentum ? Math.abs(this.rotateMomentum.valueDelta(this._animationTime, l3)) * this._rotationDirection * 180 / Math.PI : 0;
        let s3 = this.zoomMomentum ? Math.abs(this.zoomMomentum.valueDelta(this._animationTime, l3)) : 1;
        const e3 = n$4(), m2 = n$4();
        if (this._previousCenter) {
          o$2(e3, this._previousCenter.x, this._previousCenter.y), rt(m2, t2.size, t2.padding), u$1(e3, e3, m2);
          const { constraints: r2, scale: l4 } = t2, p = l4 * s3;
          s3 < 1 && !r2.canZoomInTo(p) ? (s3 = l4 / r2.effectiveMaxScale, this.zoomMomentum = null, this.rotateMomentum = null) : s3 > 1 && !r2.canZoomOutTo(p) && (s3 = l4 / r2.effectiveMinScale, this.zoomMomentum = null, this.rotateMomentum = null), Gt(o2, t2.viewpoint, s3, i2, e3, t2.size), t2.constraints.constrainByGeometry(o2);
        }
      }
      this._animationTime += l3;
    });
  }
  stopMomentumNavigation() {
    (this.rotateMomentum || this.zoomMomentum) && (this.rotateMomentum && (this._rotationMomentumEstimator.reset(), this.rotateMomentum = null), this.zoomMomentum && (this._zoomMomentumEstimator.reset(), this.zoomMomentum = null), this.navigation.stop());
  }
};
e$3([y()], _$1.prototype, "_momentumFinished", void 0), e$3([y()], _$1.prototype, "viewpoint", void 0), e$3([y()], _$1.prototype, "navigation", void 0), _$1 = e$3([c$2("esri.views.2d.navigation.actions.Pinch")], _$1);
const d$2 = _$1;
const d$1 = n$4(), g$1 = n$4();
let j = class extends S$1 {
  constructor(t2) {
    super(t2), this._previousCenter = n$4(), this.viewpoint = new l$2({ targetGeometry: new x$1(), scale: 0, rotation: 0 });
  }
  begin(t2, e2) {
    this.navigation.begin(), o$2(this._previousCenter, e2.center.x, e2.center.y);
  }
  update(t2, e2) {
    const { state: { size: o2, padding: r2 } } = t2;
    o$2(d$1, e2.center.x, e2.center.y), $(g$1, o2, r2), t2.viewpoint = bt(this.viewpoint, t2.state.paddedViewState.viewpoint, pt(g$1, this._previousCenter, d$1)), r$7(this._previousCenter, d$1);
  }
  end() {
    this.navigation.end();
  }
};
e$3([y()], j.prototype, "viewpoint", void 0), e$3([y()], j.prototype, "navigation", void 0), j = e$3([c$2("esri.views.2d.actions.Rotate")], j);
const f$1 = j;
const v = 10, w = 1, g = new l$2({ targetGeometry: new x$1() }), d3 = [0, 0], _2 = 250;
let T = class extends S$1 {
  constructor(t2) {
    super(t2), this._endTimer = null, this._lastEventTimestamp = null, this.animationManager = null, this.interacting = false;
  }
  initialize() {
    this.pan = new v$1({ navigation: this }), this.rotate = new f$1({ navigation: this }), this.pinch = new d$2({ navigation: this }), this.zoomBox = new c({ view: this.view, navigation: this });
  }
  destroy() {
    this.pan = u$2(this.pan), this.rotate = u$2(this.rotate), this.pinch = u$2(this.pinch), this.zoomBox = u$2(this.zoomBox), this.animationManager = null;
  }
  begin() {
    this.stop(), this._set("interacting", true);
  }
  end() {
    this._lastEventTimestamp = performance.now(), this._startTimer(_2);
  }
  async zoom(t2, i = this._getDefaultAnchor()) {
    if (this.begin(), this.view.constraints.snapToZoom && this.view.constraints.effectiveLODs)
      return t2 < 1 ? this.zoomIn(i) : this.zoomOut(i);
    this.setViewpoint(i, t2, 0, [0, 0]);
  }
  async zoomIn(t2) {
    const i = this.view, o2 = i.constraints.snapToNextScale(i.scale);
    return this._zoomToScale(o2, t2);
  }
  async zoomOut(t2) {
    const i = this.view, o2 = i.constraints.snapToPreviousScale(i.scale);
    return this._zoomToScale(o2, t2);
  }
  setViewpoint(t2, i, o2, n3) {
    this.begin(), this.view.stateManager.state.viewpoint = this._scaleRotateTranslateViewpoint(this.view.viewpoint, t2, i, o2, n3), this.end();
  }
  setViewpointImmediate(t2, i = 0, o2 = [0, 0], n3 = this._getDefaultAnchor()) {
    this.view.stateManager.state.viewpoint = this._scaleRotateTranslateViewpoint(this.view.viewpoint, n3, t2, i, o2);
  }
  continousRotateClockwise() {
    const t2 = this.view.viewpoint;
    this.animationManager?.animateContinous(t2, (t3) => {
      bt(t3, t3, -w);
    });
  }
  continousRotateCounterclockwise() {
    const t2 = this.view.viewpoint;
    this.animationManager?.animateContinous(t2, (t3) => {
      bt(t3, t3, w);
    });
  }
  resetRotation() {
    this.view.constraints.rotationEnabled && (this.view.rotation = 0);
  }
  continousPanLeft() {
    this._continuousPan([-v, 0]);
  }
  continousPanRight() {
    this._continuousPan([v, 0]);
  }
  continousPanUp() {
    this._continuousPan([0, v]);
  }
  continousPanDown() {
    this._continuousPan([0, -v]);
  }
  continuousPanVector({ x: t2, y: i }) {
    this._continuousPan([t2 * v, i * v]);
  }
  stop() {
    this.pan.stopMomentumNavigation(), this.animationManager?.stop(), this.end(), null !== this._endTimer && (clearTimeout(this._endTimer), this._endTimer = null, this._set("interacting", false));
  }
  _continuousPan(t2) {
    const i = this.view.viewpoint;
    this.animationManager?.animateContinous(i, (i2) => {
      kt(i2, i2, t2), this.view.constraints.constrainByGeometry(i2);
    });
  }
  _startTimer(t2) {
    return null !== this._endTimer || (this._endTimer = setTimeout(() => {
      this._endTimer = null;
      const t3 = performance.now() - (this._lastEventTimestamp ?? 0);
      t3 < _2 ? this._endTimer = this._startTimer(t3) : this._set("interacting", false);
    }, t2)), this._endTimer;
  }
  _getDefaultAnchor() {
    const { size: t2, padding: { left: i, right: o2, top: n3, bottom: e2 } } = this.view;
    return d3[0] = 0.5 * (t2[0] - o2 + i), d3[1] = 0.5 * (t2[1] - e2 + n3), d3;
  }
  async _zoomToScale(t2, i = this._getDefaultAnchor()) {
    const { view: o2 } = this, { constraints: n3, scale: e2, viewpoint: s2, size: a3, padding: r2 } = o2, c2 = n3.canZoomInTo(t2), m = n3.canZoomOutTo(t2);
    if (!(t2 < e2 && !c2 || t2 > e2 && !m))
      return Rt(g, s2, t2 / e2, 0, i, a3, r2), n3.constrainByGeometry(g), o2.goTo(g, { animate: true, pickClosestTarget: false });
  }
  _scaleRotateTranslateViewpoint(t2, i, o2, n3, e2) {
    const { view: s2 } = this, { size: a3, padding: r2, constraints: m, scale: p, viewpoint: u2 } = s2, l3 = p * o2, v2 = m.canZoomInTo(l3), w2 = m.canZoomOutTo(l3);
    return (o2 < 1 && !v2 || o2 > 1 && !w2) && (o2 = 1), kt(u2, u2, e2), Rt(t2, u2, o2, n3, i, a3, r2), m.constrainByGeometry(t2);
  }
};
e$3([y()], T.prototype, "animationManager", void 0), e$3([y({ type: Boolean, readOnly: true })], T.prototype, "interacting", void 0), e$3([y()], T.prototype, "pan", void 0), e$3([y()], T.prototype, "pinch", void 0), e$3([y()], T.prototype, "rotate", void 0), e$3([y()], T.prototype, "view", void 0), e$3([y()], T.prototype, "zoomBox", void 0), T = e$3([c$2("esri.views.2d.navigation.MapViewNavigation")], T);
const f = T;
const a2 = { shaders: { vertexShader: n$2("magnifier/magnifier.vert"), fragmentShader: n$2("magnifier/magnifier.frag") }, attributes: /* @__PURE__ */ new Map([["a_pos", 0]]) };
function t(r2) {
  return e$4(r2, a2);
}
export {
  r$4 as a,
  t as b,
  a2 as c,
  a$2 as d,
  e$1 as e,
  f,
  n$1 as n,
  r$5 as r,
  t$1 as t
};
