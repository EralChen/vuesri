import { aV as e, a_ as c$1, jf as l$2, dy as K$1, aT as s$1, jc as u$3, aB as f$1, ud as t, iy as o, cY as x$1, aO as s, gy as c$2, pl as s$2, fr as e$1, ue as I$2, uf as _$2, bY as j, gk as n, aX as y$1, cV as o$1, da as r, ug as r$1, bZ as S$1, aD as M$2, aC as M$3, uh as s$3, ui as u$4, uj as i, ay as m$1, iK as m$2, uk as n$1, jj as e$2, cB as p$2, jq as u$5, ul as m$3, um as g, un as R, uo as Y, up as tt, uq as Z, ur as ut, aQ as U$2, sA as n$2, gG as V$2, us as p$3, ut as c$3, bQ as V$3, fU as n$3, ds as o$2, ce as d$2, cU as s$4, f8 as n$4, hX as I$3, bO as G$1, dF as U$3, iC as o$4, o2 as x$2, d1 as n$5, ax as t$1, av as u$6, aw as j$2, f9 as k$1, jn as A$1, jd as s$5, a$ as b$3 } from "./chunk-ejFG4zJ0.js";
import { p as p$1, j as j$1, m as m$4 } from "./chunk-HWDf1Z3J.js";
import { o as o$3 } from "./chunk-XuSN4Qyd.js";
let c = class extends l$2 {
  projectOrWarn(e2, r2) {
    if (null == e2)
      return e2;
    const { geometry: t2, pending: c2 } = K$1(e2, r2);
    return c2 ? null : c2 || t2 ? t2 : (s$1.getLogger(this).warn("geometry could not be projected to the spatial reference", { georeference: this, geometry: e2, sourceSpatialReference: e2.spatialReference, targetSpatialReference: r2 }), null);
  }
};
c = e([c$1("esri.layers.support.GeoreferenceBase")], c);
const a$1 = c;
const C = e$1(), b$2 = n();
let _$1 = class _ extends S$1 {
  constructor() {
    super(...arguments), this.sourcePoint = null, this.mapPoint = null;
  }
};
e([y$1()], _$1.prototype, "sourcePoint", void 0), e([y$1({ type: x$1 })], _$1.prototype, "mapPoint", void 0), _$1 = e([c$1("esri.layers.support.ControlPoint")], _$1);
let T$1 = class T extends u$3(a$1) {
  constructor(o2) {
    super(o2), this.controlPoints = null, this.height = 0, this.type = "control-points", this.width = 0;
  }
  readControlPoints(o$12, t$12) {
    const r2 = f$1.fromJSON(t$12.spatialReference), e2 = t(...t$12.coefficients, 1);
    return o$12.map((o$13) => (o(b$2, o$13.x, o$13.y), p$1(b$2, b$2, e2), { sourcePoint: o$13, mapPoint: new x$1({ x: b$2[0], y: b$2[1], spatialReference: r2 }) }));
  }
  writeControlPoints(o2, t2, e2, i2) {
    if (null != this.transform)
      null != o2 && O$1(o2[0]) && (t2.controlPoints = o2.map((o3) => {
        const t3 = o3.sourcePoint;
        return { x: t3.x, y: t3.y };
      }), t2.spatialReference = o2[0].mapPoint.spatialReference.toJSON(), t2.coefficients = this.transform.slice(0, 8));
    else {
      const o3 = new s("web-document-write:invalid-georeference", "Invalid 'controlPoints', 'width', 'height' configuration.", { layer: i2?.layer, georeference: this });
      i2?.messages ? i2.messages.push(o3) : s$1.getLogger(this).error(o3.name, o3.message);
    }
  }
  get coords() {
    if (null == this.controlPoints)
      return null;
    const o2 = this._updateTransform(C);
    if (null == o2 || !O$1(this.controlPoints[0]))
      return null;
    const t2 = this.controlPoints[0].mapPoint.spatialReference;
    return H$1(o2, this.width, this.height, t2);
  }
  set coords(o$12) {
    if (null == this.controlPoints || !O$1(this.controlPoints[0]))
      return;
    const t2 = this.controlPoints[0].mapPoint.spatialReference;
    if (null == (o$12 = this.projectOrWarn(o$12, t2)))
      return;
    const { width: r2, height: e2 } = this, { rings: [[n2, s2, c2, a2]] } = o$12, p2 = { sourcePoint: c$2(0, e2), mapPoint: new x$1({ x: n2[0], y: n2[1], spatialReference: t2 }) }, u2 = { sourcePoint: c$2(0, 0), mapPoint: new x$1({ x: s2[0], y: s2[1], spatialReference: t2 }) }, m2 = { sourcePoint: c$2(r2, 0), mapPoint: new x$1({ x: c2[0], y: c2[1], spatialReference: t2 }) }, f2 = { sourcePoint: c$2(r2, e2), mapPoint: new x$1({ x: a2[0], y: a2[1], spatialReference: t2 }) };
    O$1(p2) && O$1(u2) && O$1(m2) && O$1(f2) && (E$1(C, p2, u2, m2, f2), this.controlPoints = this.controlPoints.map(({ sourcePoint: o$13 }) => (o(b$2, o$13.x, o$13.y), p$1(b$2, b$2, C), { sourcePoint: o$13, mapPoint: new x$1({ x: b$2[0], y: b$2[1], spatialReference: t2 }) })));
  }
  get inverseTransform() {
    return null == this.transform ? null : s$2(e$1(), this.transform);
  }
  get transform() {
    return this._updateTransform();
  }
  toMap(o$12) {
    if (null == o$12 || null == this.transform || null == this.controlPoints || !O$1(this.controlPoints[0]))
      return null;
    o(b$2, o$12.x, o$12.y);
    const t2 = this.controlPoints[0].mapPoint.spatialReference;
    return p$1(b$2, b$2, this.transform), new x$1({ x: b$2[0], y: b$2[1], spatialReference: t2 });
  }
  toSource(o$12) {
    if (null == o$12 || null == this.inverseTransform || null == this.controlPoints || !O$1(this.controlPoints[0]))
      return null;
    const t2 = this.controlPoints[0].mapPoint.spatialReference;
    return o$12 = o$12.normalize(), null == (o$12 = K$1(o$12, t2).geometry) ? null : (o(b$2, o$12.x, o$12.y), p$1(b$2, b$2, this.inverseTransform), c$2(b$2[0], b$2[1]));
  }
  toSourceNormalized(o2) {
    const t2 = this.toSource(o2);
    return null != t2 && (t2.x /= this.width, t2.y /= this.height), t2;
  }
  _updateTransform(o2) {
    const { controlPoints: t2, width: r2, height: e2 } = this;
    if (!(null != t2 && r2 > 0 && e2 > 0))
      return null;
    const [n2, i2, s2, l2] = t2;
    if (!O$1(n2))
      return null;
    const c2 = n2.mapPoint.spatialReference, a2 = this._projectControlPoint(i2, c2), p2 = this._projectControlPoint(s2, c2), u2 = this._projectControlPoint(l2, c2);
    if (!a2.valid || !p2.valid || !u2.valid)
      return null;
    if (!O$1(a2.controlPoint))
      return null;
    null == o2 && (o2 = e$1());
    let m2 = null;
    return m2 = O$1(p2.controlPoint) && O$1(u2.controlPoint) ? E$1(o2, n2, a2.controlPoint, p2.controlPoint, u2.controlPoint) : O$1(p2.controlPoint) ? B(o2, n2, a2.controlPoint, p2.controlPoint) : q(o2, n2, a2.controlPoint), m2.every((o3) => 0 === o3) ? null : m2;
  }
  _projectControlPoint(o2, t2) {
    if (!O$1(o2))
      return { valid: true, controlPoint: o2 };
    const { sourcePoint: r2, mapPoint: e2 } = o2, { geometry: i2, pending: s2 } = K$1(e2, t2);
    return s2 ? { valid: false, controlPoint: null } : s2 || i2 ? { valid: true, controlPoint: { sourcePoint: r2, mapPoint: i2 } } : (s$1.getLogger(this).warn("map point could not be projected to the spatial reference", { georeference: this, controlPoint: o2, sourceSpatialReference: e2.spatialReference, targetSpatialReference: t2 }), { valid: false, controlPoint: null });
  }
};
function O$1(o2) {
  return null != o2?.sourcePoint && null != o2.mapPoint;
}
e([y$1({ type: [_$1], json: { write: { allowNull: false, isRequired: true } } })], T$1.prototype, "controlPoints", void 0), e([o$1("controlPoints")], T$1.prototype, "readControlPoints", null), e([r("controlPoints")], T$1.prototype, "writeControlPoints", null), e([y$1()], T$1.prototype, "coords", null), e([y$1({ json: { write: true } })], T$1.prototype, "height", void 0), e([y$1({ readOnly: true })], T$1.prototype, "inverseTransform", null), e([y$1({ readOnly: true })], T$1.prototype, "transform", null), e([y$1({ json: { write: true } })], T$1.prototype, "width", void 0), T$1 = e([c$1("esri.layers.support.ControlPointsGeoreference")], T$1);
const N = n(), I$1 = n(), L$1 = n(), M$1 = n(), A = n(), G = n(), J = n(), z = n(), U$1 = Math.PI / 2;
function k(o$12, t2, r2) {
  o(o$12, r2.sourcePoint.x, r2.sourcePoint.y), o(t2, r2.mapPoint.x, r2.mapPoint.y);
}
function q(o2, t2, r2) {
  return k(N, A, t2), k(I$1, G, r2), I$2(L$1, I$1, N, U$1), I$2(M$1, N, I$1, U$1), I$2(J, G, A, -U$1), I$2(z, A, G, -U$1), F(o2, N, I$1, L$1, M$1, A, G, J, z);
}
function B(o2, t2, r2, e2) {
  return k(N, A, t2), k(I$1, G, r2), k(L$1, J, e2), _$2(M$1, N, I$1, 0.5), I$2(M$1, L$1, M$1, Math.PI), _$2(z, A, G, 0.5), I$2(z, J, z, Math.PI), F(o2, N, I$1, L$1, M$1, A, G, J, z);
}
function E$1(o2, t2, r2, e2, n2) {
  return k(N, A, t2), k(I$1, G, r2), k(L$1, J, e2), k(M$1, z, n2), F(o2, N, I$1, L$1, M$1, A, G, J, z);
}
const V$1 = new Array(8).fill(0), W = new Array(8).fill(0);
function D(o2, t2, r2, e2, n2) {
  return o2[0] = t2[0], o2[1] = t2[1], o2[2] = r2[0], o2[3] = r2[1], o2[4] = e2[0], o2[5] = e2[1], o2[6] = n2[0], o2[7] = n2[1], o2;
}
function F(o2, t2, r2, e2, n2, i2, l2, c2, a2) {
  return j$1(o2, D(V$1, t2, r2, e2, n2), D(W, i2, l2, c2, a2));
}
function H$1(o2, t2, r2, e2) {
  const n2 = r$1(0, r2), s2 = r$1(0, 0), l2 = r$1(t2, 0), c2 = r$1(t2, r2);
  return p$1(n2, n2, o2), p$1(s2, s2, o2), p$1(l2, l2, o2), p$1(c2, c2, o2), new j({ rings: [[n2, s2, l2, c2, n2]], spatialReference: e2 });
}
const K = T$1;
const u$2 = n();
let y = class extends a$1 {
  constructor(t2) {
    super(t2), this.bottomLeft = null, this.bottomRight = null, this.topLeft = null, this.topRight = null, this.type = "corners";
  }
  get coords() {
    let { topLeft: t2, topRight: o2, bottomLeft: e2, bottomRight: r2 } = this;
    if (null == t2 || null == o2 || null == e2 || null == r2)
      return null;
    const s2 = t2.spatialReference;
    return o2 = this.projectOrWarn(o2, s2), e2 = this.projectOrWarn(e2, s2), r2 = this.projectOrWarn(r2, s2), null == o2 || null == e2 || null == r2 ? null : new j({ rings: [[[e2.x, e2.y], [t2.x, t2.y], [o2.x, o2.y], [r2.x, r2.y], [e2.x, e2.y]]], spatialReference: s2 });
  }
  set coords(t2) {
    const { topLeft: o2 } = this;
    if (null == o2)
      return;
    const e2 = o2.spatialReference;
    if (null == (t2 = this.projectOrWarn(t2, e2)))
      return;
    const { rings: [[r2, s2, i2, l2]] } = t2;
    this.bottomLeft = new x$1({ x: r2[0], y: r2[1], spatialReference: e2 }), this.topLeft = new x$1({ x: s2[0], y: s2[1], spatialReference: e2 }), this.topRight = new x$1({ x: i2[0], y: i2[1], spatialReference: e2 }), this.bottomRight = new x$1({ x: l2[0], y: l2[1], spatialReference: e2 });
  }
  toSourceNormalized(t2) {
    const { topLeft: s2, topRight: i2, bottomRight: p2, bottomLeft: c2 } = this;
    if (null == t2 || null == s2 || null == i2 || null == p2 || null == c2)
      return null;
    const m2 = s2.spatialReference;
    t2 = t2.normalize();
    const f2 = K$1(t2, m2).geometry;
    if (null == f2)
      return null;
    o(u$2, f2.x, f2.y);
    const y2 = j$1(e$1(), [s2.x, s2.y, c2.x, c2.y, i2.x, i2.y, p2.x, p2.y], [0, 0, 0, 1, 1, 0, 1, 1]);
    return p$1(u$2, u$2, y2), c$2(u$2[0], u$2[1]);
  }
};
e([y$1()], y.prototype, "coords", null), e([y$1({ type: x$1 })], y.prototype, "bottomLeft", void 0), e([y$1({ type: x$1 })], y.prototype, "bottomRight", void 0), e([y$1({ type: x$1 })], y.prototype, "topLeft", void 0), e([y$1({ type: x$1 })], y.prototype, "topRight", void 0), y = e([c$1("esri.layers.support.CornersGeoreference")], y);
const h = y;
let p = class extends a$1 {
  constructor(t2) {
    super(t2), this.extent = null, this.rotation = 0, this.type = "extent-and-rotation";
  }
  get coords() {
    if (null == this.extent)
      return null;
    const { xmin: t2, ymin: e2, xmax: r2, ymax: o2, spatialReference: n2 } = this.extent;
    let s2;
    if (this.rotation) {
      const { x: n3, y: i2 } = this.extent.center, a2 = x(n3, i2, this.rotation);
      s2 = [a2(t2, e2), a2(t2, o2), a2(r2, o2), a2(r2, e2)], s2.push(s2[0]);
    } else
      s2 = [[t2, e2], [t2, o2], [r2, o2], [r2, e2], [t2, e2]];
    return new j({ rings: [s2], spatialReference: n2 });
  }
  set coords(t2) {
    if (null == t2 || null == this.extent)
      return;
    const r2 = this.extent.spatialReference;
    if (t2 = this.projectOrWarn(t2, r2), null == t2?.extent)
      return;
    const { rings: [[o2, n2, s2]], extent: { center: { x: i2, y: c2 } } } = t2, m2 = M$2(Math.PI / 2 - Math.atan2(n2[1] - o2[1], n2[0] - o2[0])), l2 = x(i2, c2, -m2), [p2, u2] = l2(o2[0], o2[1]), [f2, h2] = l2(s2[0], s2[1]);
    this.extent = new M$3({ xmin: p2, ymin: u2, xmax: f2, ymax: h2, spatialReference: r2 }), this.rotation = m2;
  }
  toSourceNormalized(t2) {
    const { extent: e2, rotation: n2 } = this;
    if (null == t2 || null == e2)
      return null;
    const { xmin: s2, ymin: i2, xmax: a2, ymax: c2, center: l2, spatialReference: p2 } = e2;
    t2 = t2.normalize();
    const u2 = K$1(t2, p2).geometry;
    if (null == u2)
      return null;
    let f2 = u2.x, h2 = u2.y;
    return n2 && ([f2, h2] = x(l2.x, l2.y, -n2)(f2, h2)), c$2(s$3(f2, s2, a2, 0, 1), s$3(h2, c2, i2, 0, 1));
  }
};
function x(t2, e2, r2) {
  const o2 = u$4(r2), n2 = Math.cos(o2), s2 = Math.sin(o2);
  return (r3, o3) => [n2 * (r3 - t2) + s2 * (o3 - e2) + t2, n2 * (o3 - e2) - s2 * (r3 - t2) + e2];
}
e([y$1()], p.prototype, "coords", null), e([y$1({ type: M$3 })], p.prototype, "extent", void 0), e([y$1({ type: Number })], p.prototype, "rotation", void 0), p = e([c$1("esri.layers.support.ExtentAndRotationGeoreference")], p);
const u$1 = p;
const l$1 = { key: "type", base: a$1, typeMap: { "control-points": K, corners: h, "extent-and-rotation": u$1 } }, f = { key: "type", base: a$1, typeMap: { "control-points": K } };
let u = class extends i(m$1(m$2)) {
  constructor(e2) {
    super(e2), this.georeference = null, this.opacity = 1;
  }
  readGeoreference(e2) {
    return K.fromJSON(e2);
  }
  get contentWidth() {
    return 0;
  }
  get contentHeight() {
    return 0;
  }
  toSource(e2) {
    const { georeference: r2, contentWidth: o2, contentHeight: t2 } = this;
    if (null == e2 || null == r2 || 0 === o2 || 0 === t2)
      return null;
    const s2 = r2.toSourceNormalized(e2);
    return null == s2 ? null : (s2.x *= o2, s2.y *= t2, s2);
  }
};
e([y$1({ types: l$1, json: { write: true, types: f } })], u.prototype, "georeference", void 0), e([o$1("georeference")], u.prototype, "readGeoreference", null), e([y$1({ json: { read: false, write: false } })], u.prototype, "opacity", void 0), u = e([c$1("esri.layers.support.MediaElementBase")], u);
const d$1 = u;
function m(e2) {
  return "media" === e2?.type;
}
function l(n2, o2) {
  const i2 = n$1(o2);
  return m(n2) && !!n2.portalItem && null != i2 && i2 > e$2.PORTAL_ITEM;
}
let w$1 = class w extends d$1 {
  constructor(e2) {
    super(e2), this.animationOptions = null, this.content = null, this.image = null, this.type = "image", this.image = null;
  }
  load() {
    const e2 = this.image;
    if ("string" == typeof e2) {
      const t2 = p$2(e2).then((e3) => {
        this._set("content", e3);
      });
      this.addResolvingPromise(t2);
    } else if (e2 instanceof HTMLImageElement) {
      const t2 = e2.decode().then(() => {
        this._set("content", e2);
      });
      this.addResolvingPromise(t2);
    } else
      e2 ? this._set("content", e2) : this.addResolvingPromise(Promise.reject(new s("image-element:invalid-image-type", "Invalid image type", { image: e2 })));
    return Promise.resolve(this);
  }
  get contentWidth() {
    return null == this.content ? 0 : this.content instanceof HTMLImageElement ? this.content.naturalWidth : this.content.width;
  }
  get contentHeight() {
    return null == this.content ? 0 : this.content instanceof HTMLImageElement ? this.content.naturalHeight : this.content.height;
  }
  readImage(e2, t2, r2) {
    return u$5(t2.url, r2);
  }
  writeImage(e2, t2, r2, o2) {
    if (null == e2)
      return;
    const n2 = o2?.portalItem, s2 = o2?.resources;
    if (!n2 || !s2)
      return void ("string" == typeof e2 && (t2[r2] = m$3(e2, o2)));
    const a2 = E(e2) ? e2 : null;
    if (a2) {
      if (null == g(a2))
        return void (t2[r2] = a2);
      const e3 = m$3(a2, { ...o2, verifyItemRelativeUrls: o2?.verifyItemRelativeUrls ? { writtenUrls: o2.verifyItemRelativeUrls.writtenUrls, rootPath: void 0 } : void 0 }, R.NO);
      if (n2 && e3 && !Y(e3))
        return s2.toKeep.push({ resource: n2.resourceFromPath(e3), compress: false }), void (t2[r2] = e3);
    }
    t2[r2] = "<pending>", s2.pendingOperations.push(H(e2).then((e3) => {
      const o3 = U(e3, n2);
      t2[r2] = o3.itemRelativeUrl, s2.toAdd.push({ resource: o3, content: { type: "blob", blob: e3 }, compress: false, finish: (e4) => {
        this.image = e4.url;
      } });
    }));
  }
  write(e2, t2) {
    const r2 = super.write(e2, t2);
    return "mediaType" in r2 && !r2.url && delete r2.mediaType, r2;
  }
};
e([y$1()], w$1.prototype, "animationOptions", void 0), e([y$1({ readOnly: true })], w$1.prototype, "content", void 0), e([y$1({ readOnly: true })], w$1.prototype, "contentWidth", null), e([y$1({ readOnly: true })], w$1.prototype, "contentHeight", null), e([y$1({ json: { name: "url", type: String, write: { overridePolicy: (e2, t2, r2) => ({ enabled: !l(r2?.layer, r2?.origin) }) } } })], w$1.prototype, "image", void 0), e([o$1("image", ["url"])], w$1.prototype, "readImage", null), e([r("image")], w$1.prototype, "writeImage", null), e([y$1({ readOnly: true, json: { read: false, write: { target: "mediaType", ignoreOrigin: true } } })], w$1.prototype, "type", void 0), w$1 = e([c$1("esri.layers.support.ImageElement")], w$1);
const b$1 = w$1;
function E(e2) {
  return "string" == typeof e2 && !tt(e2) && !Z(e2);
}
async function H(e2) {
  if ("string" == typeof e2) {
    if (tt(e2))
      return ut(e2);
    return (await U$2(e2, { responseType: "blob" })).data;
  }
  return new Promise((t2) => T2(e2).toBlob(t2));
}
function T2(e2) {
  if (e2 instanceof HTMLCanvasElement)
    return e2;
  const t2 = e2 instanceof HTMLImageElement ? e2.naturalWidth : e2.width, r2 = e2 instanceof HTMLImageElement ? e2.naturalHeight : e2.height, o2 = document.createElement("canvas"), i2 = o2.getContext("2d");
  return o2.width = t2, o2.height = r2, e2 instanceof HTMLImageElement ? i2.drawImage(e2, 0, 0, e2.width, e2.height) : e2 instanceof ImageData && i2.putImageData(e2, 0, 0), o2;
}
function U(e2, t2) {
  const r2 = n$2(), o2 = `${V$2("media", r2)}.${p$3({ type: "blob", blob: e2 })}`;
  return t2.resourceFromPath(o2);
}
let d = class extends d$1 {
  constructor(e2) {
    super(e2), this.autoplay = true, this.content = null, this.type = "video";
  }
  load() {
    const e2 = this.video;
    if ("string" == typeof e2) {
      const o2 = document.createElement("video");
      o2.src = e2, o2.crossOrigin = "anonymous", o2.autoplay = true, o2.muted = true, o2.loop = true, this.addResolvingPromise(this._loadVideo(o2).then(() => {
        this._set("content", o2);
      }));
    } else
      e2 instanceof HTMLVideoElement ? this.addResolvingPromise(this._loadVideo(e2).then(() => {
        this._set("content", e2);
      })) : this.addResolvingPromise(Promise.reject(new s("video-element:invalid-video-type", "Invalid video type", { video: e2 })));
    return Promise.resolve(this);
  }
  get contentWidth() {
    return this.content?.videoWidth ?? 0;
  }
  get contentHeight() {
    return this.content?.videoHeight ?? 0;
  }
  set video(e2) {
    "not-loaded" === this.loadStatus ? this._set("video", e2) : s$1.getLogger(this).error("#video", "video cannot be changed after the element is loaded.");
  }
  _loadVideo(e2) {
    return new Promise((o2, s2) => {
      const r2 = c$3(e2, "canplay", () => {
        this.removeHandles("canplay"), this.autoplay ? e2.play().then(o2, s2) : o2();
      });
      this.addHandles(r2, "canplay"), "anonymous" !== e2.crossOrigin && (e2.crossOrigin = "anonymous", e2.src?.includes("blob:") || (e2.src = e2.src));
    });
  }
};
e([y$1()], d.prototype, "autoplay", void 0), e([y$1({ readOnly: true })], d.prototype, "content", void 0), e([y$1({ readOnly: true })], d.prototype, "contentWidth", null), e([y$1({ readOnly: true })], d.prototype, "contentHeight", null), e([y$1()], d.prototype, "video", null), d = e([c$1("esri.layers.support.VideoElement")], d);
const a = d;
const w2 = { key: "type", defaultKeyValue: "image", base: d$1, typeMap: { image: b$1, video: a } }, M = V$3.ofType(w2);
let I = class extends m$2.LoadableMixin(n$3(o$2.EventedAccessor)) {
  constructor(e2) {
    super(e2), this._index = new o$3(), this._elementViewsMap = /* @__PURE__ */ new Map(), this._elementsIndexes = /* @__PURE__ */ new Map(), this._elementsChangedHandler = (e3) => {
      for (const s2 of e3.removed) {
        const e4 = this._elementViewsMap.get(s2);
        this._elementViewsMap.delete(s2), this._index.delete(e4), this.removeHandles(e4), e4.destroy(), this.notifyChange("fullExtent");
      }
      const { spatialReference: t2 } = this;
      for (const s2 of e3.added) {
        if (this._elementViewsMap.get(s2))
          continue;
        const e4 = new m$4({ spatialReference: t2, element: s2 });
        this._elementViewsMap.set(s2, e4);
        const o2 = d$2(() => e4.coords, () => this._updateIndexForElement(e4, false));
        this._updateIndexForElement(e4, true), this.addHandles(o2, e4);
      }
      this._elementsIndexes.clear(), this.elements.forEach((e4, t3) => this._elementsIndexes.set(e4, t3)), this.emit("refresh");
    }, this.elements = new M();
  }
  async load(e2) {
    if (s$4(e2), !this.spatialReference) {
      const e3 = this.elements.find((e4) => null != e4.georeference?.coords);
      this._set("spatialReference", e3 ? e3.georeference.coords.spatialReference : f$1.WGS84);
    }
    return this._elementsChangedHandler({ added: this.elements.items, removed: [] }), this.addHandles(this.elements.on("change", this._elementsChangedHandler)), this;
  }
  destroy() {
    this._index.clear(), this._elementViewsMap.clear(), this._elementsIndexes.clear();
  }
  set elements(e2) {
    this._set("elements", n$4(e2, this._get("elements"), M));
  }
  get fullExtent() {
    if ("not-loaded" === this.loadStatus)
      return null;
    const e2 = this._index.fullBounds;
    return null == e2 ? null : new M$3({ xmin: e2[0], ymin: e2[1], xmax: e2[2], ymax: e2[3], spatialReference: this.spatialReference });
  }
  set spatialReference(e2) {
    "not-loaded" === this.loadStatus ? this._set("spatialReference", e2) : s$1.getLogger(this).error("#spatialReference", "spatialReference cannot be changed after the source is loaded.");
  }
  async queryElements(e2, t2) {
    await this.load(), await I$3(e2.spatialReference, this.spatialReference, null, t2);
    const s2 = G$1(e2.spatialReference, this.spatialReference) ? e2 : U$3(e2, this.spatialReference);
    if (!s2)
      return [];
    const o2 = s2.normalize(), r2 = [];
    for (const n2 of o2)
      this._index.forEachInBounds(o$4(n2), ({ normalizedCoords: e3, element: t3 }) => {
        null != e3 && x$2(n2, e3) && r2.push(t3);
      });
    return r2.sort((e3, t3) => this._elementsIndexes.get(e3) - this._elementsIndexes.get(t3)), r2;
  }
  _updateIndexForElement(e2, t2) {
    const s2 = e2.normalizedBounds, o2 = this._index.has(e2), r2 = null != s2;
    this._index.delete(e2), r2 && this._index.set(e2, s2), this.notifyChange("fullExtent"), t2 || (o2 !== r2 ? this.emit("refresh") : this.emit("change", { element: e2.element }));
  }
};
e([y$1()], I.prototype, "elements", null), e([y$1({ readOnly: true })], I.prototype, "fullExtent", null), e([y$1()], I.prototype, "spatialReference", null), I = e([c$1("esri.layers.support.LocalMediaElementSource")], I);
const V = I;
function L(e2) {
  return "object" == typeof e2 && null != e2 && "type" in e2;
}
function O(e2) {
  return L(e2) && "image" === e2.type;
}
let _2 = class extends n$5(t$1(u$6(j$2(m$1(b$3))))) {
  constructor(e2) {
    super(e2), this.effectiveSource = null, this.georeference = null, this.copyright = null, this.operationalLayerType = "MediaLayer", this.spatialReference = null, this.type = "media", this._debouncedSaveOperations = k$1(async (e3, r2, o2) => {
      const { save: t2, saveAs: s2 } = await import("./chunk-phv-stqm.js");
      switch (e3) {
        case A$1.SAVE:
          return t2(this, r2);
        case A$1.SAVE_AS:
          return s2(this, o2, r2);
      }
    }), this.source = new V();
  }
  load(e2) {
    return this.addResolvingPromise(this._doLoad(e2)), Promise.resolve(this);
  }
  async _doLoad(e2) {
    await this.loadFromPortal({ supportedTypes: ["Media Layer"] }, e2);
    let t2 = this.source;
    if (!t2)
      throw new s("media-layer:source-missing", "Set 'MediaLayer.source' before loading the layer.");
    const s$12 = this._getSourceOverride(t2, this.georeference);
    s$12 && (this.setAtOrigin("source", s$12, "web-map"), t2 = s$12);
    const i2 = L(t2) ? new V({ elements: new V$3([t2]) }) : t2;
    this._set("effectiveSource", i2), this.spatialReference && (i2.spatialReference = this.spatialReference), await i2.load(e2), this.spatialReference = i2.spatialReference;
  }
  destroy() {
    this.effectiveSource?.destroy(), this.source?.destroy();
  }
  readGeoreference(e2, r2) {
    return e2 && "itemId" in r2 && r2.itemId ? e2 : void 0;
  }
  get fullExtent() {
    return this.loaded ? this.effectiveSource.fullExtent : null;
  }
  set source(e2) {
    "loaded" !== this.loadStatus && "failed" !== this.loadStatus ? this._set("source", e2) : s$1.getLogger(this).error("#source", "source cannot be changed after the layer is loaded.");
  }
  castSource(e2) {
    return e2 ? Array.isArray(e2) ? new V({ elements: new V$3(e2) }) : e2 instanceof V$3 ? new V({ elements: e2 }) : e2 : null;
  }
  readSource(e2, r2, o2) {
    if ("itemId" in r2 && r2.itemId)
      return;
    const t2 = this._createSource(r2);
    return t2?.read(r2, o2), t2;
  }
  writeSource(e2, r2, t2, s$12) {
    O(e2) ? e2.write(r2, s$12) : s$12?.messages && s$12?.messages?.push(new s("media-layer:unsupported-source", "source must be an 'ImageElement'"));
  }
  async save(e2) {
    return this._debouncedSaveOperations(A$1.SAVE, e2);
  }
  async saveAs(e2, r2) {
    return this._debouncedSaveOperations(A$1.SAVE_AS, r2, e2);
  }
  _createSource(e2) {
    if ("mediaType" in e2)
      switch (e2.mediaType) {
        case "image":
          return new b$1();
        case "video":
          return new a();
      }
    return null;
  }
  _getSourceOverride(e2, r2) {
    if (L(e2) && this.originIdOf("source") === e$2.PORTAL_ITEM && r2 && this.originIdOf("georeference") === e$2.WEB_MAP) {
      const o2 = e2.toJSON(), t2 = this._createSource(o2);
      return t2.read({ ...o2 }, { origin: "portal-item" }), t2.read({ georeference: r2 }, { origin: "web-map" }), t2;
    }
    return null;
  }
};
e([y$1({ readOnly: true })], _2.prototype, "effectiveSource", void 0), e([y$1({ readOnly: true, json: { read: false, write: false, origins: { "web-map": { read: true, write: false } } } })], _2.prototype, "georeference", void 0), e([o$1("web-map", "georeference")], _2.prototype, "readGeoreference", null), e([y$1({ type: String })], _2.prototype, "copyright", void 0), e([y$1({ readOnly: true })], _2.prototype, "fullExtent", null), e([y$1({ type: ["MediaLayer"] })], _2.prototype, "operationalLayerType", void 0), e([y$1({ type: ["show", "hide"] })], _2.prototype, "listMode", void 0), e([y$1({ nonNullable: true, json: { write: { enabled: true, allowNull: false, overridePolicy(e2, r2, o2) {
  return { enabled: true, allowNull: false, ignoreOrigin: l(this, o2?.origin) && O(e2) && !!e2.georeference && e2.originIdOf("georeference") > e$2.PORTAL_ITEM };
} } } })], _2.prototype, "source", null), e([s$5("source")], _2.prototype, "castSource", null), e([o$1("source", ["url"])], _2.prototype, "readSource", null), e([r("source")], _2.prototype, "writeSource", null), e([y$1()], _2.prototype, "spatialReference", void 0), e([y$1({ readOnly: true })], _2.prototype, "type", void 0), _2 = e([c$1("esri.layers.MediaLayer")], _2);
const b = _2;
const MediaLayer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: b
}, Symbol.toStringTag, { value: "Module" }));
export {
  MediaLayer as M,
  V,
  a,
  b$1 as b,
  b as c,
  u$1 as u
};
