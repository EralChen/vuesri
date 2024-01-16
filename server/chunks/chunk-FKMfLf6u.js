import { bX as k$1, mO as f$1, mP as k, de as b$1, cy as x$1, fC as l$1, mQ as a$1, le as t, eY as i$1, ky as x$2, b8 as a$2, fF as c, bh as V, bo as e, bs as g$1, mR as o, b7 as C$1, bb as s$1, bp as y$1, br as c$1 } from "./chunk-KFNcxJaF.js";
import { r } from "./chunk-s_1zK5-o.js";
function f(e2, t2) {
  let n = null, r2 = null;
  return (a2) => {
    if ("cancel" === a2.action)
      return void (null != r2 && (r2.execute({ action: "cancel" }), n = null, r2 = null));
    const o2 = { action: a2.action, screenStart: a2.start, screenEnd: a2.screenPoint };
    "start" === a2.action && null == n && (n = new U(), r2 = new U(), t2(e2, n, r2, a2.pointerType, o2)), null != n && n.execute(o2), "end" === a2.action && null != n && (n = null, r2 = null);
  };
}
function d(e2, t2) {
  return e2.events.on("drag", f(e2, t2));
}
function y(e2, t2) {
  const n = [e2.x, e2.y, e2.z ?? 0], r2 = t2, a2 = [Math.cos(r2), Math.sin(r2)], o2 = Math.sqrt(a2[0] * a2[0] + a2[1] * a2[1]);
  if (0 === o2)
    return null;
  a2[0] /= o2, a2[1] /= o2;
  const l2 = (e3) => {
    const t3 = (e3.x - n[0]) * a2[0] + (e3.y - n[1]) * a2[1];
    e3.x = n[0] + t3 * a2[0], e3.y = n[1] + t3 * a2[1];
  };
  return (e3) => (l2(e3.mapStart), l2(e3.mapEnd), { ...e3, axis: a2 });
}
function x(e2, t2) {
  let n = null;
  return (r2) => {
    if ("start" === r2.action && (n = h(e2, r2.mapStart.spatialReference, t2)), null == n)
      return null;
    const a2 = r2.mapEnd.x - r2.mapStart.x, o2 = r2.mapEnd.y - r2.mapStart.y, l2 = r2.mapEnd.z - r2.mapStart.z;
    return n.move(a2, o2, l2, r2.action), { ...r2, translationX: a2, translationY: o2, translationZ: l2 };
  };
}
function g(e2, t2) {
  return null == e2 ? null : e2.spatialReference.equals(t2) ? e2.clone() : b$1(e2, t2);
}
function h(e2, t2, n) {
  const r$1 = e2.geometry, a2 = k(t2);
  if (null == r$1)
    return null;
  if ("mesh" === r$1.type)
    return E(e2, r$1, a2, n);
  const s = g(r$1, a2), c2 = r$1.spatialReference;
  return null == s ? null : { move: (t3, n2, r$12) => {
    const a3 = r(s.clone(), t3, n2, r$12);
    a3.spatialReference.equals(c2) ? e2.geometry = a3 : e2.geometry = b$1(a3, c2);
  } };
}
function E(e2, t2, n, r2) {
  if (t2.vertexSpace.isRelative)
    return S(e2, t2, t2.vertexSpace, n);
  if (!t2.spatialReference.equals(n))
    return null;
  let a2 = 0, o2 = 0, l2 = 0;
  return { move: (n2, s, c2) => {
    const i2 = n2 - a2, p = s - o2, f2 = c2 - l2;
    if (i2 || p || f2) {
      const d2 = new x$1(t2.origin.x + i2, t2.origin.y + p, (t2.origin.z ?? 0) + f2, t2.origin.spatialReference);
      t2.centerAt(d2, { geographic: t2.vertexSpace.isRelative ? void 0 : r2 === l$1.Global }), e2.notifyGeometryChanged(), a2 = n2, o2 = s, l2 = c2;
    }
  } };
}
function S(e2, t2, n, r$1) {
  const a2 = g(n.getOriginPoint(t2.spatialReference), r$1), l2 = t2.spatialReference;
  return null == a2 ? null : { move: (t3, r$12, s, i2) => {
    const u = r(a2.clone(), t3, r$12, s);
    if (u.spatialReference.equals(l2))
      n.setOriginFromPoint(u);
    else {
      const e3 = b$1(u, l2);
      null != e3 && n.setOriginFromPoint(e3);
    }
    if (n.isGeoreferenced)
      e2.notifyGeometryChanged();
    else {
      const t4 = "end" === i2;
      e2.notifyMeshTransformChanged(t4 ? { action: a$1.UpdateFastLocalOrigin } : {});
    }
  } };
}
function v(e2, t2 = null, n) {
  let r2 = null;
  const a2 = null == t2 || e2.spatialReference?.equals(t2) ? (e3) => e3 : (e3) => null != e3 ? b$1(e3, t2) : e3, l2 = { exclude: [], ...n };
  return (t3) => {
    if ("start" === t3.action && (r2 = a2(e2.toMap(t3.screenStart, l2))), null == r2)
      return null;
    const n2 = a2(e2.toMap(t3.screenEnd, l2));
    return null != n2 ? { ...t3, mapStart: r2, mapEnd: n2 } : null;
  };
}
function j(t2, n) {
  const r2 = t2.map((e2) => x(e2, n)).filter(k$1);
  return (e2) => {
    const t3 = e2.mapEnd.x - e2.mapStart.x, n2 = e2.mapEnd.y - e2.mapStart.y, a2 = e2.mapEnd.z - e2.mapStart.z;
    return r2.forEach((t4) => t4(e2)), { ...e2, translationX: t3, translationY: n2, translationZ: a2 };
  };
}
function R(e2, n) {
  const r2 = /* @__PURE__ */ new Map();
  for (const a2 of n)
    r2.set(a2, a$2(e2[a2]));
  return (t2) => (r2.forEach((t3, n2) => {
    e2[n2] = t3;
  }), t2);
}
function z(e2) {
  return null != e2.geometry && "mesh" === e2.geometry.type ? M(e2, e2.geometry) : R(e2, ["geometry"]);
}
function M(e2, t$1) {
  const { vertexSpace: n } = t$1;
  if (n.isGeoreferenced) {
    const n2 = t$1.vertexAttributes.clonePositional();
    return (r3) => (t$1.vertexAttributes = n2, e2.notifyGeometryChanged(), r3);
  }
  const r2 = t(n.origin), o2 = t$1.transform?.clone();
  return (n2) => (t$1.transform = o2, t$1.vertexSpace.origin = r2, e2.notifyMeshTransformChanged(), n2);
}
function w(e2) {
  const t2 = e2.map((e3) => z(e3)).filter((e3) => null != e3);
  return (e3) => (t2.forEach((t3) => t3(e3)), e3);
}
function P() {
  let e2 = 0, t2 = 0, n = 0;
  return (r2) => {
    "start" === r2.action && (e2 = r2.mapStart.x, t2 = r2.mapStart.y, n = r2.mapStart.z);
    const a2 = r2.mapEnd.x - e2, o2 = r2.mapEnd.y - t2, l2 = r2.mapEnd.z - n;
    return e2 = r2.mapEnd.x, t2 = r2.mapEnd.y, n = r2.mapEnd.z, { ...r2, mapDeltaX: a2, mapDeltaY: o2, mapDeltaZ: l2, mapDeltaSpatialReference: r2.mapStart.spatialReference };
  };
}
function q() {
  let e2 = 0, t2 = 0;
  return (n) => {
    "start" === n.action && (e2 = n.screenStart.x, t2 = n.screenStart.y);
    const r2 = n.screenEnd.x - e2, a2 = n.screenEnd.y - t2;
    return e2 = n.screenEnd.x, t2 = n.screenEnd.y, { ...n, screenDeltaX: r2, screenDeltaY: a2 };
  };
}
function D(e2, t2) {
  let a2 = null, o2 = 0, l2 = 0;
  return (s) => {
    if ("start" === s.action && (a2 = e2.toScreen?.(t2), null != a2 && (a2.x < 0 || a2.x > e2.width || a2.y < 0 || a2.y > e2.height ? a2 = null : (o2 = s.screenStart.x - a2.x, l2 = s.screenStart.y - a2.y))), null == a2)
      return null;
    const c$12 = i$1(s.screenEnd.x - o2, 0, e2.width), i2 = i$1(s.screenEnd.y - l2, 0, e2.height), u = c(c$12, i2);
    return s.screenStart = a2, s.screenEnd = u, s;
  };
}
const G = () => {
};
class U {
  constructor() {
    this.execute = G;
  }
  next(e2, t2 = new U()) {
    return null != e2 && (this.execute = (n) => {
      const r2 = e2(n);
      null != r2 && t2.execute(r2);
    }), t2;
  }
}
function C(e2, t2, n = []) {
  if ("2d" === e2.type)
    return (e3) => e3;
  let r2 = null;
  return (a2) => {
    "start" === a2.action && (r2 = e2.toMap(a2.screenStart, { exclude: n }), null != r2 && (r2.z = f$1(r2, e2, t2)));
    const o2 = e2.toMap(a2.screenEnd, { exclude: n });
    null != o2 && (o2.z = f$1(o2, e2, t2));
    const l2 = null != r2 && null != o2 ? { sceneStart: r2, sceneEnd: o2 } : null;
    return { ...a2, scenePoints: l2 };
  };
}
function F(e2, t2, n) {
  const r2 = t2.elevationProvider.getElevation(e2.x, e2.y, e2.z ?? 0, e2.spatialReference, "scene") ?? 0, a2 = x$2(e2);
  return a2.z = r2, a2.hasZ = true, a2.z = f$1(a2, t2, n), a2;
}
function O(e2, t2) {
  if ("2d" === e2.type)
    return (e3) => e3;
  let n = null;
  return (r2) => {
    "start" === r2.action && (n = F(r2.mapStart, e2, t2));
    const a2 = F(r2.mapEnd, e2, t2), o2 = null != n && null != a2 ? { sceneStart: n, sceneEnd: a2 } : null;
    return { ...r2, scenePoints: o2 };
  };
}
var a;
!function(t2) {
  t2[t2.WhenToolEditable = 0] = "WhenToolEditable", t2[t2.WhenToolNotEditable = 1] = "WhenToolNotEditable", t2[t2.Always = 2] = "Always";
}(a || (a = {}));
class i {
  constructor() {
    this._isToolEditable = true, this._manipulators = new V(), this._resourceContexts = { manipulator3D: {} }, this._attached = false;
  }
  set isToolEditable(t2) {
    this._isToolEditable = t2;
  }
  get length() {
    return this._manipulators.length;
  }
  add(t2, i2 = a.WhenToolEditable) {
    this.addMany([t2], i2);
  }
  addMany(t2, i2 = a.WhenToolEditable) {
    for (const a2 of t2) {
      const t3 = { manipulator: a2, visibilityPredicate: i2, attached: false };
      this._manipulators.add(t3), this._attached && this._updateManipulatorAttachment(t3);
    }
  }
  remove(t2) {
    for (let a2 = 0; a2 < this._manipulators.length; a2++)
      if (this._manipulators.at(a2).manipulator === t2) {
        const t3 = this._manipulators.splice(a2, 1)[0];
        this._detachManipulator(t3);
        break;
      }
  }
  removeAll() {
    this._manipulators.forEach((t2) => {
      this._detachManipulator(t2);
    }), this._manipulators.removeAll();
  }
  attach() {
    this._manipulators.forEach((t2) => {
      this._updateManipulatorAttachment(t2);
    }), this._attached = true;
  }
  detach() {
    this._manipulators.forEach((t2) => {
      this._detachManipulator(t2);
    }), this._attached = false;
  }
  destroy() {
    this.detach(), this._manipulators.forEach(({ manipulator: t2 }) => t2.destroy()), this._manipulators.destroy(), this._resourceContexts = null;
  }
  on(t2, a2) {
    return this._manipulators.on(t2, (t3) => {
      a2(t3);
    });
  }
  forEach(t2) {
    for (const a2 of this._manipulators.items)
      t2(a2);
  }
  some(t2) {
    return this._manipulators.items.some(t2);
  }
  toArray() {
    const t2 = [];
    return this.forEach((a2) => t2.push(a2.manipulator)), t2;
  }
  intersect(t2, a2) {
    let i2 = null, e2 = Number.MAX_VALUE;
    return this._manipulators.forEach(({ manipulator: o2, attached: s }) => {
      if (!s || !o2.interactive)
        return;
      const r2 = o2.intersectionDistance(t2, a2);
      null != r2 && r2 < e2 && (e2 = r2, i2 = o2);
    }), i2;
  }
  _updateManipulatorAttachment(t2) {
    this._isManipulatorItemVisible(t2) ? this._attachManipulator(t2) : this._detachManipulator(t2);
  }
  _attachManipulator(t2) {
    t2.attached || (t2.manipulator.attach && t2.manipulator.attach(this._resourceContexts), t2.attached = true);
  }
  _detachManipulator(t2) {
    if (!t2.attached)
      return;
    const a2 = t2.manipulator;
    a2.grabbing = false, a2.dragging = false, a2.hovering = false, a2.selected = false, a2.detach && a2.detach(this._resourceContexts), t2.attached = false;
  }
  _isManipulatorItemVisible(t2) {
    return t2.visibilityPredicate === a.Always || (this._isToolEditable ? t2.visibilityPredicate === a.WhenToolEditable : t2.visibilityPredicate === a.WhenToolNotEditable);
  }
}
let l = class extends g$1 {
  constructor(t2) {
    super(t2), this.manipulators = new i(), this.automaticManipulatorSelection = true, this.hasGrabbedManipulators = false, this.hasHoveredManipulators = false, this.firstGrabbedManipulator = null, this.created = false, this.removeIncompleteOnCancel = true, this._editableFlags = /* @__PURE__ */ new Map([[o.MANAGER, true], [o.USER, true]]), this._creationFinishedResolver = C$1();
  }
  get active() {
    return null != this.view && this.view.activeTool === this;
  }
  set visible(t2) {
    this._get("visible") !== t2 && (this._set("visible", t2), this._syncVisible());
  }
  get editable() {
    return this.getEditableFlag(o.USER);
  }
  set editable(t2) {
    this.setEditableFlag(o.USER, t2);
  }
  get updating() {
    return false;
  }
  get cursor() {
    return null;
  }
  get hasFocusedManipulators() {
    return this.hasGrabbedManipulators || this.hasHoveredManipulators;
  }
  destroy() {
    this.manipulators.destroy(), this._set("view", null);
  }
  onAdd() {
    this._syncVisible();
  }
  activate() {
    null != this.view ? (this.view.focus(), this.onActivate()) : s$1.getLogger(this).error("Can't activate tool if view is not defined.");
  }
  deactivate() {
    this.onDeactivate();
  }
  handleInputEvent(t2) {
    this.onInputEvent(t2);
  }
  handleInputEventAfter(t2) {
    this.onInputEventAfter(t2);
  }
  setEditableFlag(t2, e2) {
    this._editableFlags.set(t2, e2), this.manipulators.isToolEditable = this.internallyEditable, this._updateManipulatorAttachment(), t2 === o.USER && this.notifyChange("editable"), this.onEditableChange(), this.onManipulatorSelectionChanged();
  }
  getEditableFlag(t2) {
    return this._editableFlags.get(t2) ?? false;
  }
  whenCreated() {
    return this._creationFinishedResolver.promise;
  }
  onManipulatorSelectionChanged() {
  }
  onActivate() {
  }
  onDeactivate() {
  }
  onShow() {
  }
  onHide() {
  }
  onEditableChange() {
  }
  onInputEvent(t2) {
  }
  onInputEventAfter(t2) {
  }
  get internallyEditable() {
    return this.getEditableFlag(o.USER) && this.getEditableFlag(o.MANAGER);
  }
  finishToolCreation() {
    this.created || this._creationFinishedResolver.resolve(this), this._set("created", true);
  }
  _syncVisible() {
    if (this.initialized) {
      if (this.visible)
        this._show();
      else if (this._hide(), this.active)
        return void (this.view.activeTool = null);
    }
  }
  _show() {
    this._updateManipulatorAttachment(), this.onShow();
  }
  _hide() {
    this._updateManipulatorAttachment(), this.onHide();
  }
  _updateManipulatorAttachment() {
    this.visible ? this.manipulators.attach() : this.manipulators.detach();
  }
};
e([y$1({ constructOnly: true })], l.prototype, "view", void 0), e([y$1({ readOnly: true })], l.prototype, "active", null), e([y$1({ value: true })], l.prototype, "visible", null), e([y$1({ value: true })], l.prototype, "editable", null), e([y$1({ readOnly: true })], l.prototype, "manipulators", void 0), e([y$1({ readOnly: true })], l.prototype, "updating", null), e([y$1()], l.prototype, "cursor", null), e([y$1({ readOnly: true })], l.prototype, "automaticManipulatorSelection", void 0), e([y$1()], l.prototype, "hasFocusedManipulators", null), e([y$1()], l.prototype, "hasGrabbedManipulators", void 0), e([y$1()], l.prototype, "hasHoveredManipulators", void 0), e([y$1()], l.prototype, "firstGrabbedManipulator", void 0), e([y$1({ readOnly: true })], l.prototype, "created", void 0), e([y$1({ readOnly: true })], l.prototype, "removeIncompleteOnCancel", void 0), l = e([c$1("esri.views.interactive.InteractiveToolBase")], l);
export {
  C,
  D,
  O,
  P,
  R,
  U,
  d,
  j,
  l,
  q,
  v,
  w,
  x,
  y,
  z
};
