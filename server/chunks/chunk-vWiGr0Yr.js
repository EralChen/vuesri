import { kw as y$1, bJ as d$1, eV as I, kx as F, ky as x$1, em as e$1, kr as l$1, kz as d$2, ej as k, bo as e$2, bs as g$1, bp as y$2, br as c } from "./chunk-KFNcxJaF.js";
import { r } from "./chunk-OvdaIYdh.js";
import { U } from "./chunk-FKMfLf6u.js";
import { e } from "./chunk-tNL5i2kK.js";
function f({ predicate: o = () => true, snappingManager: i, snappingContext: l, updatingHandles: u, useZ: c2 = true }) {
  const p2 = new U();
  if (null == i)
    return { snappingStep: [y, p2], cancelSnapping: y };
  let f2, Z = null, j = null, z = null;
  const T = () => {
    Z = e$1(Z), i.doneSnapping(), j?.frameTask.remove(), j = null, f2 = l$1(f2), z = null;
  }, k2 = d(i, c2, p2);
  let w = null, I2 = null, U$1 = null;
  return { snappingStep: [(n) => {
    if (!o(n))
      return n;
    const { action: e2 } = n;
    if ("start" === e2) {
      const { info: e3 } = n, t = m(i.view);
      if (j = g(l, n, t), j.context.selfSnappingZ = null, !c2 && null != e3) {
        const n2 = S(l.coordinateHelper, e3.handle.component);
        null != n2 && (j.context.selfSnappingZ = { value: n2, elevationInfo: l.elevationInfo ?? y$1 });
      }
    }
    if (null != j) {
      const { context: o2, originalScenePos: l2, originalPos: a } = j, { mapEnd: s, mapStart: p3, scenePoints: d2 } = n, m2 = x(a, v(s, p3)), g2 = v(p3, a), S2 = { ...n, action: "update" }, y2 = j.context, T2 = P(l2, d2), C = i.update({ point: m2, scenePoint: T2, context: o2 });
      if (U$1 = C, h(s, C, g2, c2), w = m2, I2 = T2, "end" !== e2) {
        const { frameTask: n2 } = j;
        null == Z && (Z = new AbortController()), z = (e3) => {
          u.addPromise(d$2(k2({ frameTask: n2, event: S2, context: y2, point: m2, scenePoint: T2, delta: g2, getLastState: () => ({ point: w, scenePoint: I2, updatePoint: e3.forceUpdate ? null : U$1 }) }, Z.signal)));
        }, z({ forceUpdate: false }), null == f2 && (f2 = d$1(() => i.options.effectiveEnabled, () => z?.({ forceUpdate: true })));
      }
    }
    return "end" === e2 && T(), n;
  }, p2], cancelSnapping: (n) => (T(), n) };
}
function d(n, e2, t) {
  return k(async ({ frameTask: o, point: r$1, scenePoint: l, context: a, event: s, delta: u, getLastState: c2 }, p2) => {
    const f2 = await o.schedule(() => n.snap({ point: r$1, scenePoint: l, context: a, signal: p2 }), p2);
    if (f2.valid) {
      let l2 = await o.schedule(() => f2.apply(), p2);
      const d2 = c2();
      null != d2.point && r$1 !== d2.point && (l2 = n.update({ point: d2.point, scenePoint: d2.scenePoint, context: a })), null != d2.updatePoint && r(l2, d2.updatePoint) || (h(s.mapEnd, l2, u, e2), t.execute(s));
    }
  });
}
function m(n) {
  return "3d" === n.type ? n.resourceController.scheduler.registerTask(I.SNAPPING) : F;
}
function g(n, e$12, t) {
  return { context: new e({ editGeometryOperations: n.editGeometryOperations, elevationInfo: n.elevationInfo, pointer: n.pointer, vertexHandle: null != e$12.info ? e$12.info.handle : null, excludeFeature: n.excludeFeature, feature: n.feature, visualizer: n.visualizer }), originalPos: null != e$12.snapOrigin ? n.coordinateHelper.vectorToDehydratedPoint(e$12.snapOrigin) : e$12.mapStart, originalScenePos: null != e$12.scenePoints ? e$12.scenePoints.sceneStart : null, frameTask: t };
}
function x(n, [e2, t, o]) {
  const r2 = x$1(n);
  return r2.x += e2, r2.y += t, r2.hasZ && (r2.z += o), r2;
}
function P(n, e2) {
  return null == n || null == e2 ? null : x(n, v(e2.sceneEnd, e2.sceneStart));
}
function v(n, e2) {
  const t = n.hasZ && e2.hasZ ? n.z - e2.z : 0;
  return [n.x - e2.x, n.y - e2.y, t];
}
function h(n, e2, [t, o, r2], i) {
  n.x = e2.x + t, n.y = e2.y + o, i && n.hasZ && e2.hasZ && (n.z = e2.z + r2);
}
function S(n, e2) {
  if (!n.hasZ())
    return null;
  const t = e2.vertices;
  let o = null;
  for (const r2 of t) {
    const e3 = n.getZ(r2.pos);
    if (null != o && null != e3 && Math.abs(e3 - o) > 1e-6)
      return null;
    null == o && (o = e3);
  }
  return o;
}
function y(n) {
  return n;
}
let p = class extends g$1 {
  constructor(t) {
    super(t), this.constrainResult = (t2) => t2, this._snapPoints = null, this._frameTask = null, this._abortController = null, this._stagedPoint = null, this._snap = k(async (t2, s, o, r2) => {
      const n = this._frameTask;
      if (null == n)
        return;
      const e2 = await n.schedule(() => s.snap({ ...t2, context: o, signal: r2 }), r2);
      e2.valid && await n.schedule(() => {
        this.stagedPoint = e2.apply(), t2 !== this._snapPoints && null != this._snapPoints && (this.stagedPoint = s.update({ ...this._snapPoints, context: o }));
      }, r2);
    });
  }
  get stagedPoint() {
    return this._stagedPoint;
  }
  set stagedPoint(t) {
    this._stagedPoint = this.constrainResult(t);
  }
  initialize() {
    const t = "3d" === this.view.type ? this.view?.resourceController?.scheduler : null;
    this._frameTask = null != t ? t.registerTask(I.SNAPPING) : F;
  }
  destroy() {
    this._abortController = e$1(this._abortController), this._frameTask = l$1(this._frameTask);
  }
  update(t, s, o) {
    this._snapPoints = t;
    const { point: r2, scenePoint: n } = t, e2 = s.update({ point: r2, scenePoint: n, context: o });
    return this.stagedPoint = e2, e2;
  }
  async snap(t, s, o) {
    const { point: r2, scenePoint: n } = t;
    return this.stagedPoint = s.update({ point: r2, scenePoint: n, context: o }), this._snapPoints = t, null == this._abortController && (this._abortController = new AbortController()), this._snap(t, s, o, this._abortController.signal);
  }
  async resnap(t, s) {
    null != this._snapPoints && await this.snap(this._snapPoints, t, s);
  }
  abort() {
    this._abortController = e$1(this._abortController), this._snapPoints = null;
  }
};
e$2([y$2({ constructOnly: true })], p.prototype, "view", void 0), e$2([y$2()], p.prototype, "stagedPoint", null), e$2([y$2()], p.prototype, "constrainResult", void 0), e$2([y$2()], p.prototype, "_stagedPoint", void 0), p = e$2([c("esri.views.interactive.snapping.SnappingOperation")], p);
export {
  f,
  p
};
