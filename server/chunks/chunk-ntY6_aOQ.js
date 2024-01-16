import { fw as n, sL as r$1, cy as x$1, sK as A, w7 as m, yY as e$2, wa as a, eP as o$1, eQ as n$1, yZ as k, oP as r$2, mI as A$1, fi as x$2, vw as e$3, hw as r$3, vh as G, s4 as n$2, nW as r$4, y_ as j, pR as e$4, o2 as a$1, y$ as E$1, ax as G$1, fC as l$1, d1 as o, dy as m$1, bq as j$1, b0 as h$1, vF as O, ps as b, z0 as H, z1 as e$5, pv as P$1, pE as j$2, eN as _, eO as z$1, l6 as u$1, pt as k$1, p_ as nt, z2 as j$3, z3 as l$2, fp as o$2, mD as v, sG as j$4, mL as g$1, z4 as a$2, z5 as F, z6 as Q, f9 as ot$1, rZ as M$1, z7 as z$2, sJ as L, x5 as w$1, bS as e$6 } from "./chunk-KFNcxJaF.js";
var R;
!function(e2) {
  e2[e2.Z = 0] = "Z", e2[e2.M = 1] = "M";
}(R || (R = {}));
class x {
  constructor(e2) {
    this.spatialReference = e2;
  }
  createVector() {
    return this._tag(n());
  }
  pointToVector(e2) {
    return this._tag(r$1(e2.x, e2.y));
  }
  arrayToVector(e2) {
    return this._tag(r$1(e2[0], e2[1]));
  }
  vectorToArray(e2) {
    return [e2[0], e2[1]];
  }
  pointToArray(e2) {
    return [e2.x, e2.y];
  }
  vectorToPoint(e2, t6 = new x$1()) {
    return t6.x = e2[0], t6.y = e2[1], t6.z = void 0, t6.m = void 0, t6.spatialReference = this.spatialReference, t6;
  }
  arrayToPoint(e2, t6 = new x$1()) {
    return t6.x = e2[0], t6.y = e2[1], t6.z = void 0, t6.m = void 0, t6.spatialReference = this.spatialReference, t6;
  }
  vectorToDehydratedPoint(e2, t6 = { x: void 0, y: void 0, z: void 0, m: void 0, hasZ: void 0, hasM: void 0, spatialReference: void 0, type: "point" }) {
    return t6.x = e2[0], t6.y = e2[1], t6.z = void 0, t6.m = void 0, t6.hasZ = false, t6.hasM = false, t6.spatialReference = this.spatialReference, t6;
  }
  lerp(t6, r2, a2, n2) {
    return A(n2, t6, r2, a2);
  }
  addDelta(e2, t6, r2) {
    e2[0] += t6, e2[1] += r2;
  }
  distance(e2, r2) {
    return m(e2, r2);
  }
  getZ(e2, t6 = void 0) {
    return t6;
  }
  hasZ() {
    return false;
  }
  getM(e2, t6 = void 0) {
    return t6;
  }
  hasM() {
    return false;
  }
  clone(e2) {
    return this._tag(e$2(e2));
  }
  copy(e2, t6) {
    return a(t6, e2);
  }
  fromXYZ(e2) {
    return this._tag(r$1(e2[0], e2[1]));
  }
  toXYZ(e2, t6 = n$1()) {
    return o$1(t6, e2[0], e2[1], 0);
  }
  pointToXYZ(e2, t6 = n$1()) {
    return o$1(t6, e2.x, e2.y, 0);
  }
  equals(e2, t6) {
    return k(e2, t6);
  }
  _tag(e2) {
    return e2;
  }
}
class M {
  constructor(e2, t6) {
    this._valueType = e2, this.spatialReference = t6;
  }
  createVector() {
    return this._tag(n$1());
  }
  pointToVector(e2) {
    return this._tag(r$2(e2.x, e2.y, this._valueType === R.Z ? e2.z : e2.m));
  }
  arrayToVector(e2) {
    return this._tag(r$2(e2[0], e2[1], e2[2] || 0));
  }
  vectorToArray(e2) {
    return [e2[0], e2[1], e2[2]];
  }
  pointToArray(e2) {
    return this._valueType === R.Z ? [e2.x, e2.y, e2.z] : [e2.x, e2.y, e2.m];
  }
  vectorToPoint(e2, t6 = new x$1()) {
    return t6.x = e2[0], t6.y = e2[1], t6.z = this._valueType === R.Z ? e2[2] : void 0, t6.m = this._valueType === R.M ? e2[2] : void 0, t6.spatialReference = this.spatialReference, t6;
  }
  arrayToPoint(e2, t6 = new x$1()) {
    return t6.x = e2[0], t6.y = e2[1], t6.z = this._valueType === R.Z ? e2[2] : void 0, t6.m = this._valueType === R.M ? e2[2] : void 0, t6.spatialReference = this.spatialReference, t6;
  }
  vectorToDehydratedPoint(e2, t6 = { x: void 0, y: void 0, z: void 0, m: void 0, hasZ: void 0, hasM: void 0, spatialReference: void 0, type: "point" }) {
    const r2 = this._valueType === R.Z, a2 = this._valueType === R.M;
    return t6.x = e2[0], t6.y = e2[1], t6.z = r2 ? e2[2] : void 0, t6.m = a2 ? e2[2] : void 0, t6.hasZ = r2, t6.hasM = a2, t6.spatialReference = this.spatialReference, t6;
  }
  lerp(e2, t6, r2, a2) {
    return A$1(a2, e2, t6, r2);
  }
  addDelta(e2, t6, r2, a2) {
    e2[0] += t6, e2[1] += r2, this._valueType === R.Z && (e2[2] += a2);
  }
  distance(e2, r2) {
    return this._valueType === R.Z ? x$2(e2, r2) : m(e2, r2);
  }
  getZ(e2, t6 = void 0) {
    return this._valueType === R.Z ? e2[2] : t6;
  }
  hasZ() {
    return this._valueType === R.Z;
  }
  getM(e2, t6 = void 0) {
    return this._valueType === R.M ? e2[2] : t6;
  }
  hasM() {
    return this._valueType === R.M;
  }
  clone(e2) {
    return this._tag(e$3(e2));
  }
  copy(e2, t6) {
    return r$3(t6, e2);
  }
  fromXYZ(e2, t6 = 0, r2 = 0) {
    return this._tag(r$2(e2[0], e2[1], this._valueType === R.Z ? e2.length > 2 ? e2[2] : t6 : r2));
  }
  toXYZ(e2, t6 = n$1()) {
    return o$1(t6, e2[0], e2[1], this._valueType === R.Z ? e2[2] : 0);
  }
  pointToXYZ(e2, t6 = n$1()) {
    return o$1(t6, e2.x, e2.y, this._valueType === R.Z ? e2.z ?? 0 : 0);
  }
  equals(e2, t6) {
    return G(e2, t6);
  }
  _tag(e2) {
    return e2;
  }
}
class z {
  constructor(e2) {
    this.spatialReference = e2;
  }
  createVector() {
    return this._tag(n$2());
  }
  pointToVector(e2) {
    return this._tag(r$4(e2.x, e2.y, e2.z, e2.m));
  }
  arrayToVector(e2) {
    return this._tag(r$4(e2[0], e2[1], e2[2] || 0, e2[3] || 0));
  }
  vectorToArray(e2) {
    return [e2[0], e2[1], e2[2], e2[3]];
  }
  pointToArray(e2) {
    return [e2.x, e2.y, e2.z, e2.m];
  }
  vectorToPoint(e2, t6 = new x$1()) {
    return t6.x = e2[0], t6.y = e2[1], t6.z = e2[2], t6.m = e2[3], t6.spatialReference = this.spatialReference, t6;
  }
  arrayToPoint(e2, t6 = new x$1()) {
    return t6.x = e2[0], t6.y = e2[1], t6.z = e2[2], t6.m = e2[3], t6.spatialReference = this.spatialReference, t6;
  }
  vectorToDehydratedPoint(e2, t6 = { x: void 0, y: void 0, z: void 0, m: void 0, hasZ: void 0, hasM: void 0, spatialReference: void 0, type: "point" }) {
    return t6.x = e2[0], t6.y = e2[1], t6.z = e2[2], t6.m = e2[3], t6.hasZ = true, t6.hasM = true, t6.spatialReference = this.spatialReference, t6;
  }
  lerp(e2, t6, r2, a2) {
    return j(a2, e2, t6, r2);
  }
  addDelta(e2, t6, r2, a2) {
    e2[0] += t6, e2[1] += r2, e2[2] += a2;
  }
  distance(e2, t6) {
    return x$2(e2, t6);
  }
  getZ(e2) {
    return e2[2];
  }
  hasZ() {
    return true;
  }
  getM(e2) {
    return e2[3];
  }
  hasM() {
    return true;
  }
  clone(e2) {
    return this._tag(e$4(e2));
  }
  copy(e2, t6) {
    return a$1(t6, e2);
  }
  fromXYZ(e2, t6 = 0, r2 = 0) {
    return this._tag(r$4(e2[0], e2[1], e2.length > 2 ? e2[2] : t6, r2));
  }
  toXYZ(e2, t6 = n$1()) {
    return o$1(t6, e2[0], e2[1], e2[2]);
  }
  pointToXYZ(e2, t6 = n$1()) {
    return o$1(t6, e2.x, e2.y, e2.z ?? 0);
  }
  equals(e2, t6) {
    return E$1(e2, t6);
  }
  _tag(e2) {
    return e2;
  }
}
function w(e2, t6, r2) {
  return e2 && t6 ? new z(r2) : t6 ? new M(R.M, r2) : e2 ? new M(R.Z, r2) : new x(r2);
}
function e$1(o2, r2) {
  if (!r2.supported)
    return;
  let e2 = 1 / 0, p2 = -1 / 0;
  const n2 = r2.upperBoundX - r2.lowerBoundX;
  o2.forEach((o3) => {
    let u2 = o3.pos[0];
    for (; u2 < r2.lowerBoundX; )
      u2 += n2;
    for (; u2 > r2.upperBoundX; )
      u2 -= n2;
    e2 = Math.min(e2, u2), p2 = Math.max(p2, u2), o3.pos[0] = u2;
  });
  const u = p2 - e2;
  n2 - u < u && o2.forEach((o3) => {
    o3.pos[0] < 0 && (o3.pos[0] += n2);
  });
}
function p$1(e2, p2) {
  const n2 = G$1(e2);
  return p2 === l$1.Global && n2 ? { supported: true, lowerBoundX: n2.valid[0], upperBoundX: n2.valid[1] } : { supported: false, lowerBoundX: null, upperBoundX: null };
}
class h {
  constructor(e2) {
    this.component = e2, this.leftEdge = null, this.rightEdge = null, this.type = "vertex", this.index = null;
  }
  get pos() {
    return this._pos;
  }
  set pos(e2) {
    this._pos = e2, this.component.unnormalizeVertexPositions();
  }
}
let c$1 = class c {
  constructor(e2, t6, s2) {
    this.component = e2, this.leftVertex = t6, this.rightVertex = s2, this.type = "edge", t6.rightEdge = this, s2.leftEdge = this;
  }
};
class l {
  constructor(e2, t6) {
    this._spatialReference = e2, this._viewingMode = t6, this.vertices = [], this.edges = [], this.index = null;
  }
  unnormalizeVertexPositions() {
    this.vertices.length <= 1 || e$1(this.vertices, p$1(this._spatialReference, this._viewingMode));
  }
  updateVertexIndex(e2, t6) {
    if (0 === this.vertices.length)
      return;
    const s2 = this.vertices[0];
    let i3 = null, r2 = e2, n2 = t6;
    do {
      i3 = r2, i3.index = n2++, r2 = i3.rightEdge ? i3.rightEdge.rightVertex : null;
    } while (null != r2 && r2 !== s2);
    i3.leftEdge && i3 !== this.vertices[this.vertices.length - 1] && this.swapVertices(this.vertices.indexOf(i3), this.vertices.length - 1);
  }
  getFirstVertex() {
    return 0 === this.vertices.length ? null : this.vertices[0];
  }
  getLastVertex() {
    return 0 === this.vertices.length ? null : this.vertices[this.vertices.length - 1];
  }
  isClosed() {
    return this.vertices.length > 2 && null !== this.vertices[0].leftEdge;
  }
  swapVertices(e2, t6) {
    const s2 = this.vertices[e2];
    this.vertices[e2] = this.vertices[t6], this.vertices[t6] = s2;
  }
  iterateVertices(e2) {
    if (0 === this.vertices.length)
      return;
    const t6 = this.vertices[0];
    let s2 = t6;
    do {
      e2(s2, s2.index), s2 = null != s2.rightEdge ? s2.rightEdge.rightVertex : null;
    } while (s2 !== t6 && null != s2);
  }
}
class p extends o {
  constructor(e2, t6) {
    super(), this.type = e2, this.coordinateHelper = t6, this._geometry = null, this._dirty = true, this.components = [];
  }
  get geometry() {
    if (this._dirty) {
      switch (this.type) {
        case "point":
          this._geometry = this._toPoint();
          break;
        case "polyline":
          this._geometry = this._toPolyline();
          break;
        case "polygon":
          this._geometry = this._toPolygon();
      }
      this._dirty = false;
    }
    return this._geometry;
  }
  get spatialReference() {
    return this.coordinateHelper.spatialReference;
  }
  notifyChanges(e2) {
    this._dirty = true, this.emit("change", e2);
  }
  _toPoint() {
    return 0 === this.components.length || 0 === this.components[0].vertices.length ? null : this.coordinateHelper.vectorToPoint(this.components[0].vertices[0].pos);
  }
  _toPolyline() {
    const e2 = [], t6 = this.coordinateHelper.vectorToArray;
    for (const s2 of this.components) {
      if (s2.vertices.length < 1)
        continue;
      const i3 = [];
      let r2 = s2.vertices.find((e3) => null == e3.leftEdge);
      const n2 = r2;
      do {
        i3.push(t6(r2.pos)), r2 = r2.rightEdge ? r2.rightEdge.rightVertex : null;
      } while (r2 && r2 !== n2);
      e2.push(i3);
    }
    return new m$1({ paths: e2, spatialReference: this.spatialReference, hasZ: this.coordinateHelper.hasZ(), hasM: this.coordinateHelper.hasM() });
  }
  _toPolygon() {
    const e2 = [], t6 = this.coordinateHelper.vectorToArray;
    for (const s2 of this.components) {
      if (s2.vertices.length < 1)
        continue;
      const i3 = [], r2 = s2.vertices[0];
      let n2 = r2;
      const o2 = n2;
      do {
        i3.push(t6(n2.pos)), n2 = null != n2.rightEdge ? n2.rightEdge.rightVertex : null;
      } while (n2 && n2 !== o2);
      s2.isClosed() && i3.push(t6(r2.pos)), e2.push(i3);
    }
    return new j$1({ rings: e2, spatialReference: this.spatialReference, hasZ: this.coordinateHelper.hasZ(), hasM: this.coordinateHelper.hasM() });
  }
  static fromGeometry(t6, s2) {
    const i3 = t6.spatialReference, n2 = w(t6.hasZ, t6.hasM, i3), o2 = new p(t6.type, n2);
    switch (t6.type) {
      case "polygon": {
        const r2 = t6.rings;
        for (let t7 = 0; t7 < r2.length; ++t7) {
          const p2 = r2[t7], g = new l(i3, s2);
          g.index = t7;
          const a2 = p2.length > 2 && h$1(p2[0], p2[p2.length - 1]), d = a2 ? p2.length - 1 : p2.length;
          for (let e2 = 0; e2 < d; ++e2) {
            const t8 = n2.arrayToVector(p2[e2]), s3 = new h(g);
            g.vertices.push(s3), s3.pos = t8, s3.index = e2;
          }
          const u = g.vertices.length - 1;
          for (let e2 = 0; e2 < u; ++e2) {
            const t8 = g.vertices[e2], s3 = g.vertices[e2 + 1], i4 = new c$1(g, t8, s3);
            g.edges.push(i4);
          }
          if (a2) {
            const e2 = new c$1(g, g.vertices[g.vertices.length - 1], g.vertices[0]);
            g.edges.push(e2);
          }
          o2.components.push(g);
        }
        break;
      }
      case "polyline": {
        const e2 = t6.paths;
        for (let t7 = 0; t7 < e2.length; ++t7) {
          const r2 = e2[t7], p2 = new l(i3, s2);
          p2.index = t7;
          const g = r2.length;
          for (let e3 = 0; e3 < g; ++e3) {
            const t8 = n2.arrayToVector(r2[e3]), s3 = new h(p2);
            p2.vertices.push(s3), s3.pos = t8, s3.index = e3;
          }
          const a2 = p2.vertices.length - 1;
          for (let e3 = 0; e3 < a2; ++e3) {
            const t8 = p2.vertices[e3], s3 = p2.vertices[e3 + 1], i4 = new c$1(p2, t8, s3);
            p2.edges.push(i4);
          }
          o2.components.push(p2);
        }
        break;
      }
      case "point": {
        const e2 = new l(i3, s2);
        e2.index = 0;
        const r2 = new h(e2);
        r2.index = 0, r2.pos = n2.pointToVector(t6), e2.vertices.push(r2), o2.components.push(e2);
        break;
      }
    }
    return o2;
  }
}
var E;
!function(E2) {
  E2[E2.NEW_STEP = 0] = "NEW_STEP", E2[E2.ACCUMULATE_STEPS = 1] = "ACCUMULATE_STEPS";
}(E || (E = {}));
let i$1 = class i {
  constructor(e2, t6, i3) {
    this._editGeometry = e2, this._component = t6, this._pos = i3, this._addedVertex = null, this._originalEdge = null, this._left = null, this._right = null;
  }
  apply() {
    let i3 = "redo";
    null == this._addedVertex && (i3 = "apply", this._addedVertex = new h(this._component));
    const s2 = this._component.getLastVertex();
    if (null == s2)
      this._component.vertices.push(this._addedVertex), this._addedVertex.pos = this._pos, this._addedVertex.index = 0;
    else {
      let e2 = null;
      s2.rightEdge && (this._originalEdge = s2.rightEdge, e2 = this._originalEdge.rightVertex, this._component.edges.splice(this._component.edges.indexOf(this._originalEdge), 1)), this._component.vertices.push(this._addedVertex), this._addedVertex.pos = this._pos, null == this._left && (this._left = new c$1(this._component, s2, this._addedVertex)), this._component.edges.push(this._left), s2.rightEdge = this._left, null != this._originalEdge && null != e2 && (null == this._right && (this._right = new c$1(this._component, this._addedVertex, e2)), this._component.edges.push(this._right), e2.leftEdge = this._right), this._component.updateVertexIndex(this._addedVertex, s2.index + 1);
    }
    this._editGeometry.notifyChanges({ operation: i3, addedVertices: [this._addedVertex] });
  }
  undo() {
    null != this._addedVertex && (this._component.vertices.splice(this._component.vertices.indexOf(this._addedVertex), 1), null != this._left && (this._component.edges.splice(this._component.edges.indexOf(this._left), 1), this._left.leftVertex.rightEdge = null), null != this._right && (this._component.edges.splice(this._component.edges.indexOf(this._right), 1), this._right.rightVertex.leftEdge = null), null != this._originalEdge && (this._component.edges.push(this._originalEdge), this._originalEdge.leftVertex.rightEdge = this._originalEdge, this._originalEdge.rightVertex.leftEdge = this._originalEdge), null != this._left ? this._component.updateVertexIndex(this._left.leftVertex, this._left.leftVertex.index) : this._component.updateVertexIndex(this._addedVertex, 0), this._editGeometry.notifyChanges({ operation: "undo", removedVertices: [this._addedVertex] }));
  }
  accumulate() {
    return false;
  }
};
let t$4 = class t {
  constructor(t6, e2, i3) {
    this._editGeometry = t6, this._vertices = e2, this.operation = i3, this._undone = false;
  }
  apply() {
    this._vertices.forEach((t6) => this.operation.apply(t6)), this._editGeometry.components.forEach((t6) => t6.unnormalizeVertexPositions()), this._editGeometry.notifyChanges({ operation: this._undone ? "redo" : "apply", updatedVertices: this._vertices });
  }
  undo() {
    this._vertices.forEach((t6) => this.operation.undo(t6)), this._editGeometry.notifyChanges({ operation: "undo", updatedVertices: this._vertices }), this._undone = true;
  }
  canAccumulate(t6) {
    if (this._undone || t6._vertices.length !== this._vertices.length)
      return false;
    for (let e2 = 0; e2 < t6._vertices.length; ++e2)
      if (t6._vertices[e2] !== this._vertices[e2])
        return false;
    return this.operation.canAccumulate(t6.operation);
  }
  accumulate(e2) {
    return !!(e2 instanceof t && this.canAccumulate(e2)) && (this._vertices.forEach((t6) => this.operation.accumulate(t6, e2.operation)), this.operation.accumulateParams(e2.operation), this._editGeometry.components.forEach((t6) => t6.unnormalizeVertexPositions()), this._editGeometry.notifyChanges({ operation: "apply", updatedVertices: this._vertices }), true);
  }
};
var e;
!function(t6) {
  t6[t6.CUMULATIVE = 0] = "CUMULATIVE", t6[t6.REPLACE = 1] = "REPLACE";
}(e || (e = {}));
let t$3 = class t2 {
  constructor(e2, t6, r2 = 0) {
    this._editGeometry = e2, this._vertices = t6, this._minNumberOfVertices = r2, this.removedVertices = null;
  }
  apply() {
    let e2 = "redo";
    if (null == this.removedVertices) {
      const t6 = this.removedVertices = [];
      this._vertices.forEach((e3) => {
        const r2 = this._removeVertex(e3);
        null != r2 && t6.push(r2);
      }), e2 = "apply";
    } else
      this.removedVertices.forEach((e3) => {
        this._removeVertex(e3.removedVertex);
      });
    this._editGeometry.notifyChanges({ operation: e2, removedVertices: this._vertices });
  }
  undo() {
    this.removedVertices?.forEach((e2) => {
      this._undoRemoveVertex(e2);
    }), this._editGeometry.notifyChanges({ operation: "undo", addedVertices: this._vertices });
  }
  accumulate() {
    return false;
  }
  _removeVertex(t6) {
    const r2 = t6.component;
    if (r2.vertices.length <= this._minNumberOfVertices)
      return null;
    const i3 = { removedVertex: t6, createdEdge: null }, s2 = t6.leftEdge, d = t6.rightEdge;
    return r2.vertices.splice(r2.vertices.indexOf(t6), 1), s2 && (r2.edges.splice(r2.edges.indexOf(s2), 1), s2.leftVertex.rightEdge = null), d && (r2.edges.splice(r2.edges.indexOf(d), 1), d.rightVertex.leftEdge = null), 0 === t6.index && d && this._vertices.length > 0 && r2.swapVertices(r2.vertices.indexOf(d.rightVertex), 0), s2 && d && (i3.createdEdge = new c$1(r2, s2.leftVertex, d.rightVertex), r2.edges.push(i3.createdEdge)), d && r2.updateVertexIndex(d.rightVertex, d.rightVertex.index - 1), i3;
  }
  _undoRemoveVertex(e2) {
    const t6 = e2.removedVertex, r2 = e2.removedVertex.component, i3 = t6.leftEdge, s2 = t6.rightEdge;
    e2.createdEdge && r2.edges.splice(r2.edges.indexOf(e2.createdEdge), 1), r2.vertices.push(t6), i3 && (r2.edges.push(i3), i3.leftVertex.rightEdge = i3), s2 && (r2.edges.push(s2), s2.rightVertex.leftEdge = s2), r2.updateVertexIndex(t6, t6.index);
  }
};
class i2 {
  constructor(e2, t6, i3) {
    this._editGeometry = e2, this._edge = t6, this._t = i3, this.createdVertex = null, this._left = null, this._right = null;
  }
  apply() {
    let i3 = "redo";
    const r2 = this._edge, s2 = r2.component, d = r2.leftVertex, h$12 = r2.rightVertex;
    s2.edges.splice(s2.edges.indexOf(r2), 1), null == this.createdVertex && (i3 = "apply", this.createdVertex = new h(r2.component)), s2.vertices.push(this.createdVertex), this.createdVertex.pos = this._editGeometry.coordinateHelper.lerp(r2.leftVertex.pos, r2.rightVertex.pos, this._t, this._editGeometry.coordinateHelper.createVector()), null == this._left && (this._left = new c$1(s2, d, this.createdVertex)), this._left.leftVertex.leftEdge ? s2.edges.push(this._left) : s2.edges.unshift(this._left), d.rightEdge = this._left, null == this._right && (this._right = new c$1(s2, this.createdVertex, h$12)), s2.edges.push(this._right), h$12.leftEdge = this._right, s2.updateVertexIndex(this.createdVertex, d.index + 1), this._editGeometry.notifyChanges({ operation: i3, addedVertices: [this.createdVertex] });
  }
  undo() {
    if (null == this.createdVertex || null == this._left || null == this._right)
      return null;
    const e2 = this._edge, t6 = e2.component, i3 = this.createdVertex.leftEdge, r2 = this.createdVertex.rightEdge, s2 = i3?.leftVertex, d = r2?.rightVertex;
    t6.vertices.splice(t6.vertices.indexOf(this.createdVertex), 1), t6.edges.splice(t6.edges.indexOf(this._left), 1), t6.edges.splice(t6.edges.indexOf(this._right), 1), this._edge.leftVertex.leftEdge ? t6.edges.push(this._edge) : t6.edges.unshift(this._edge), s2 && (s2.rightEdge = e2), d && (d.leftEdge = e2), s2 && t6.updateVertexIndex(s2, s2.index), this._editGeometry.notifyChanges({ operation: "undo", removedVertices: [this.createdVertex] });
  }
  accumulate() {
    return false;
  }
}
let t$2 = class t3 {
  constructor(t6, e2, i3) {
    this._editGeometry = t6, this._vertex = e2, this._pos = i3;
  }
  apply() {
    const t6 = null == this._originalPosition;
    t6 && (this._originalPosition = this._vertex.pos), this._apply(t6 ? "apply" : "redo");
  }
  undo() {
    this._vertex.pos = this._originalPosition, this._editGeometry.notifyChanges({ operation: "undo", updatedVertices: [this._vertex] });
  }
  accumulate(e2) {
    return e2 instanceof t3 && e2._vertex === this._vertex && (this._pos = e2._pos, this._apply("apply"), true);
  }
  _apply(t6) {
    this._vertex.pos = this._pos, this._editGeometry.components.forEach((t7) => t7.unnormalizeVertexPositions()), this._editGeometry.notifyChanges({ operation: t6, updatedVertices: [this._vertex] });
  }
};
class r {
  constructor(e2, t6) {
    this._editGeometry = e2, this._component = t6, this._createdEdge = null;
  }
  apply() {
    let e2 = "redo";
    if (null == this._createdEdge) {
      e2 = "apply";
      const r2 = this._component.getFirstVertex(), i3 = this._component.getLastVertex();
      if (this._component.isClosed() || this._component.vertices.length < 3 || null == r2 || null == i3)
        return;
      this._createdEdge = new c$1(this._component, i3, r2);
    }
    this._createdEdge.leftVertex.rightEdge = this._createdEdge, this._createdEdge.rightVertex.leftEdge = this._createdEdge, this._component.edges.push(this._createdEdge), this._editGeometry.notifyChanges({ operation: e2 });
  }
  undo() {
    null != this._createdEdge && (O(this._component.edges, this._createdEdge), this._createdEdge.leftVertex.rightEdge = null, this._createdEdge.rightVertex.leftEdge = null, this._editGeometry.notifyChanges({ operation: "undo" }));
  }
  accumulate() {
    return false;
  }
}
let t$1 = class t4 {
  constructor(t6, s2, d, h2) {
    this._helper = t6, this.dx = s2, this.dy = d, this.dz = h2;
  }
  _move(t6, s2, d, h2) {
    this._helper.addDelta(t6.pos, s2, d, h2);
  }
  apply(t6) {
    this._move(t6, this.dx, this.dy, this.dz);
  }
  undo(t6) {
    this._move(t6, -this.dx, -this.dy, -this.dz);
  }
  canAccumulate(s2) {
    return s2 instanceof t4;
  }
  accumulate(t6, s2) {
    this._move(t6, s2.dx, s2.dy, s2.dz);
  }
  accumulateParams(t6) {
    this.dx += t6.dx, this.dy += t6.dy, this.dz += t6.dz;
  }
};
class N {
  get plane() {
    return this._plane;
  }
  get requiresSplitEdgeLeft() {
    return !this._left.isOriginalDirection;
  }
  get requiresSplitEdgeRight() {
    return !this._right.isOriginalDirection;
  }
  get edgeDirection() {
    return this._edgeDirection;
  }
  constructor(t6, i3, e2, s2 = 0, n2 = Z.IMMEDIATE) {
    this._helper = t6, this._planeType = i3, this._edge = e2, this.distance = s2, this._plane = b(), this._offsetPlane = b(), this._minDistance = -1 / 0, this._maxDistance = 1 / 0, this._selectedArrow = 1, n2 === Z.IMMEDIATE && this._initialize();
  }
  _initialize() {
    this._initializeNeighbors(), this._initializePlane(), this._initializeDistanceConstraints();
  }
  _initializeNeighbors() {
    const t6 = this._toXYZ(this._edge.leftVertex.pos), i3 = this._toXYZ(this._edge.leftVertex.leftEdge?.leftVertex?.pos), e2 = this._toXYZ(this._edge.rightVertex.pos), s2 = this._toXYZ(this._edge.rightVertex.rightEdge?.rightVertex?.pos);
    this._edgeDirection = H(n$1(), t6, e2), this._left = this._computeNeighbor(t6, i3, this._edgeDirection), this._right = this._computeNeighbor(e2, s2, this._edgeDirection);
  }
  _toXYZ(t6) {
    return null != t6 ? this._helper.toXYZ(t6) : null;
  }
  _pointToXYZ(t6) {
    return this._toXYZ(this._helper.pointToVector(t6));
  }
  _computeNeighbor(t6, i3, e2) {
    if (null == i3)
      return { start: t6, end: i3, direction: r$2(-e2[1], e2[0], 0), isOriginalDirection: true };
    const s2 = H(n$1(), t6, i3), n2 = !this._passesBisectingAngleThreshold(s2, e2);
    return { start: t6, end: i3, direction: n2 ? this._bisectVectorsPerpendicular(e2, s2) : s2, isOriginalDirection: !n2 };
  }
  _passesBisectingAngleThreshold(t6, i3) {
    const e2 = Math.abs(e$5(i3, t6));
    return e2 >= P && e2 <= Math.PI - P;
  }
  _bisectVectorsPerpendicular(t6, i3) {
    const e2 = P$1(t6, i3) < 0 ? t6 : j$2(n$1(), t6), s2 = Math.abs(P$1(e2, i3));
    if (!(s2 < T || s2 > 1 - T))
      return this._bisectDirection(e2, i3);
    const n2 = _(n$1(), e2, [0, 0, 1]);
    return z$1(n2, n2);
  }
  _bisectDirection(t6, i3) {
    const e2 = u$1(n$1(), t6, i3);
    return z$1(e2, e2);
  }
  _initializePlane() {
    const t6 = this._computeNormalDirection(this._left), i3 = this._computeNormalDirection(this._right);
    P$1(t6, i3) < 0 && j$2(i3, i3), k$1(this._left.start, this._bisectDirection(t6, i3), this._plane);
  }
  _computeNormalDirection(t6) {
    const i3 = _(n$1(), t6.direction, this._edgeDirection);
    z$1(i3, i3);
    const e2 = _(n$1(), this._edgeDirection, i3);
    return this._planeType === y.XY && (e2[2] = 0), z$1(e2, e2);
  }
  _initializeDistanceConstraints() {
    null == this._left.end || this.requiresSplitEdgeLeft || this._updateDistanceConstraint(nt(this._plane, this._left.end)), null == this._right.end || this.requiresSplitEdgeRight || this._updateDistanceConstraint(nt(this._plane, this._right.end)), this._updateIntersectDistanceConstraint(this._plane);
  }
  _updateDistanceConstraint(t6) {
    t6 <= 0 && (this._minDistance = Math.max(this._minDistance, t6)), t6 >= 0 && (this._maxDistance = Math.min(this._maxDistance, t6));
  }
  _updateIntersectDistanceConstraint(t6) {
    const r2 = ot$1(t6), h2 = this._edgeDirection, o2 = u$1(n$1(), this._left.start, this._left.direction), a2 = u$1(n$1(), this._right.start, this._right.direction), _2 = this._pointInBasis2D(n(), r2, h2, this._left.start), p2 = this._pointInBasis2D(n(), r2, h2, o2), d = this._pointInBasis2D(n(), r2, h2, this._right.start), u = this._pointInBasis2D(n(), r2, h2, a2), [f] = j$3({ start: p2, end: _2, type: l$2.LINE }, { start: u, end: d, type: l$2.LINE });
    if (!f)
      return;
    const m2 = o$2(n(), _2, p2);
    v(m2, m2);
    const E2 = o$2(n(), f, p2), x2 = j$4(m2, E2), I = u$1(n$1(), o2, g$1(n$1(), this._left.direction, -x2)), V2 = nt(t6, I);
    this._updateDistanceConstraint(V2);
  }
  _pointInBasis2D(t6, i3, e2, s2) {
    return t6[0] = a$2(i3, s2), t6[1] = a$2(e2, s2), t6;
  }
  _offset(t6, i3) {
    Number.isFinite(this._minDistance) && (i3 = Math.max(this._minDistance, i3)), Number.isFinite(this._maxDistance) && (i3 = Math.min(this._maxDistance, i3)), F(this._offsetPlane, this._plane), this._offsetPlane[3] -= i3;
    const e2 = (t7, i4, e3) => null != i4 && z$2(this._offsetPlane, t7, u$1(n$1(), t7, i4), e3), s2 = n$1();
    (t6 === this._edge.leftVertex ? e2(this._left.start, this._left.direction, s2) : e2(this._right.start, this._right.direction, s2)) && this._helper.copy(this._helper.fromXYZ(s2, void 0, this._helper.getM(t6.pos)), t6.pos);
  }
  selectArrowFromStartPoint(t6) {
    this._selectedArrow = Q(this.plane, this._pointToXYZ(t6)) ? 1 : -1;
  }
  get selectedArrow() {
    return this._selectedArrow;
  }
  signedDistanceToPoint(t6) {
    return nt(this.plane, this._pointToXYZ(t6));
  }
  apply(t6) {
    this._offset(t6, this.distance);
  }
  undo(t6) {
    this._offset(t6, 0);
  }
  canAccumulate(t6) {
    return t6 instanceof N && this._edge.leftVertex.index === t6._edge.leftVertex.index && this._edge.rightVertex.index === t6._edge.rightVertex.index && this._edge.component === t6._edge.component && this._maybeEqualsVec3(this._left.direction, t6._left.direction) && this._maybeEqualsVec3(this._right.direction, t6._right.direction) && G(ot$1(this._plane), ot$1(t6._plane));
  }
  accumulate(t6, i3) {
    const e2 = this._plane[3] - i3._plane[3] + i3.distance;
    this._offset(t6, e2);
  }
  accumulateParams(t6) {
    const i3 = t6.distance - t6._plane[3];
    this.distance = i3 + this._plane[3];
  }
  clone() {
    const t6 = new N(this._helper, this._planeType, this._edge, this.distance, Z.DEFERRED);
    return F(t6._plane, this._plane), F(t6._offsetPlane, this._offsetPlane), t6._maxDistance = this._maxDistance, t6._minDistance = this._minDistance, t6._left = this._cloneNeighbor(this._left), t6._right = this._cloneNeighbor(this._right), t6._edgeDirection = r$3(n$1(), this._edgeDirection), t6;
  }
  _maybeEqualsVec3(t6, i3) {
    return null == t6 && null == i3 || null != t6 && null != i3 && G(t6, i3);
  }
  _cloneNeighbor({ start: t6, end: i3, direction: e2, isOriginalDirection: s2 }) {
    return { start: r$3(n$1(), t6), end: null != i3 ? r$3(n$1(), i3) : null, direction: r$3(n$1(), e2), isOriginalDirection: s2 };
  }
}
const P = M$1(15), T = 1e-3;
var y, Z;
!function(t6) {
  t6[t6.XYZ = 0] = "XYZ", t6[t6.XY = 1] = "XY";
}(y || (y = {})), function(t6) {
  t6[t6.IMMEDIATE = 0] = "IMMEDIATE", t6[t6.DEFERRED = 1] = "DEFERRED";
}(Z || (Z = {}));
class s {
  constructor(t6, a2, s2 = e.CUMULATIVE) {
    this.origin = t6, this.angle = a2, this._accumulationType = s2;
  }
  _rotate(t6, i3) {
    L(t6.pos, t6.pos, this.origin, i3);
  }
  apply(t6) {
    this._rotate(t6, this.angle);
  }
  undo(t6) {
    this._rotate(t6, -this.angle);
  }
  canAccumulate(a2) {
    return a2 instanceof s && h$1(this.origin, a2.origin);
  }
  accumulate(t6, a2) {
    const s2 = a2._accumulationType === e.REPLACE;
    this._rotate(t6, s2 ? a2.angle - this.angle : a2.angle);
  }
  accumulateParams(t6) {
    const a2 = t6._accumulationType === e.REPLACE;
    this.angle = a2 ? t6.angle : this.angle + t6.angle;
  }
}
class c2 {
  constructor(t6, a2, c3, o2, r2 = e.CUMULATIVE) {
    this.origin = t6, this.axis1 = a2, this.factor1 = c3, this.factor2 = o2, this._accumulationType = r2, this.axis2 = r$1(a2[1], -a2[0]);
  }
  _scale(t6, s2, i3) {
    w$1(t6.pos, t6.pos, this.origin, this.axis1, s2), w$1(t6.pos, t6.pos, this.origin, this.axis2, i3);
  }
  apply(t6) {
    this._scale(t6, this.factor1, this.factor2);
  }
  undo(t6) {
    this._scale(t6, 1 / this.factor1, 1 / this.factor2);
  }
  canAccumulate(s2) {
    return s2 instanceof c2 && h$1(this.origin, s2.origin) && h$1(this.axis1, s2.axis1);
  }
  accumulate(t6, s2) {
    s2._accumulationType === e.REPLACE ? this._scale(t6, s2.factor1 / this.factor1, s2.factor2 / this.factor2) : this._scale(t6, s2.factor1, s2.factor2);
  }
  accumulateParams(t6) {
    const s2 = t6._accumulationType === e.REPLACE;
    this.factor1 = s2 ? t6.factor1 : this.factor1 * t6.factor1, this.factor2 = s2 ? t6.factor2 : this.factor2 * t6.factor2;
  }
}
class t5 {
  constructor() {
    this._operations = [], this._closed = false;
  }
  close() {
    this._closed = true;
  }
  apply() {
    for (const t6 of this._operations)
      t6.apply();
  }
  undo() {
    for (let t6 = this._operations.length - 1; t6 >= 0; t6--)
      this._operations[t6].undo();
  }
  accumulate(t6) {
    if (this._closed)
      return false;
    const o2 = this._operations.length ? this._operations[this._operations.length - 1] : null;
    return o2 && o2.accumulate(t6) || (this._operations.push(t6), t6.apply()), true;
  }
}
class V extends o {
  constructor(e2) {
    super(), this.data = e2, this._undoStack = [], this._redoStack = [], this._listener = this.data.on("change", (e3) => {
      e3.addedVertices && this.emit("vertex-add", { type: "vertex-add", vertices: e3.addedVertices, operation: e3.operation }), e3.removedVertices && this.emit("vertex-remove", { type: "vertex-remove", vertices: e3.removedVertices, operation: e3.operation }), e3.updatedVertices && this.emit("vertex-update", { type: "vertex-update", vertices: e3.updatedVertices, operation: e3.operation });
    });
  }
  destroy() {
    this._listener.remove();
  }
  splitEdge(e2, t6) {
    return this._apply(new i2(this.data, e2, t6));
  }
  updateVertices(e2, t6, r2 = E.ACCUMULATE_STEPS) {
    return this._apply(new t$4(this.data, e2, t6), r2);
  }
  moveVertices(e2, t6, r2, s2, i3 = E.ACCUMULATE_STEPS) {
    return this.updateVertices(e2, new t$1(this.data.coordinateHelper, t6, r2, s2), i3);
  }
  scaleVertices(e$12, t6, r2, s2, i3, a2 = E.ACCUMULATE_STEPS, p2 = e.CUMULATIVE) {
    return this.updateVertices(e$12, new c2(t6, r2, s2, i3, p2), a2);
  }
  rotateVertices(e$12, t6, r2, s$1 = E.ACCUMULATE_STEPS, i3 = e.CUMULATIVE) {
    return this.updateVertices(e$12, new s(t6, r2, i3), s$1);
  }
  removeVertices(e2) {
    return this._apply(new t$3(this.data, e2, this._minNumVerticesPerType));
  }
  appendVertex(e2) {
    return 0 === this.data.components.length ? null : this._apply(new i$1(this.data, this.data.components[0], e2));
  }
  setVertexPosition(e2, t6) {
    return this._apply(new t$2(this.data, e2, t6));
  }
  offsetEdge(e2, t6, r2, s2 = E.ACCUMULATE_STEPS) {
    return this.updateVertices([t6.leftVertex, t6.rightVertex], new N(this.data.coordinateHelper, e2, t6, r2), s2);
  }
  closeComponent(e2) {
    return this.data.components.includes(e2) ? this._apply(new r(this.data, e2)) : null;
  }
  canRemoveVertex(e2) {
    return e2.vertices.length > this._minNumVerticesPerType;
  }
  createUndoGroup() {
    const e2 = new t5();
    return this._apply(e2), e$6(() => e2.close());
  }
  undo() {
    if (this._undoStack.length > 0) {
      const e2 = this._undoStack.pop();
      return e2.undo(), this._redoStack.push(e2), e2;
    }
    return null;
  }
  redo() {
    if (this._redoStack.length > 0) {
      const e2 = this._redoStack.pop();
      return e2.apply(), this._undoStack.push(e2), e2;
    }
    return null;
  }
  get canUndo() {
    return this._undoStack.length > 0;
  }
  get canRedo() {
    return this._redoStack.length > 0;
  }
  get lastOperation() {
    return this._undoStack.length > 0 ? this._undoStack[this._undoStack.length - 1] : null;
  }
  get _minNumVerticesPerType() {
    switch (this.data.type) {
      case "point":
        return 1;
      case "polyline":
        return 2;
      case "polygon":
        return 3;
      default:
        return 0;
    }
  }
  _apply(e2, t6 = E.ACCUMULATE_STEPS) {
    return t6 !== E.NEW_STEP && null != this.lastOperation && this.lastOperation.accumulate(e2) || (e2.apply(), this._undoStack.push(e2), this._redoStack = []), e2;
  }
  static fromGeometry(e2, t6) {
    return new V(p.fromGeometry(e2, t6));
  }
}
export {
  E,
  N,
  V,
  t$1 as a,
  c2 as c,
  e,
  l,
  p,
  s,
  t$4 as t,
  w,
  y
};
