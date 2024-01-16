import { bo as e, br as c$1, iD as l$1, d7 as U$1, bb as s$1, iz as u$2, cZ as f$2, sH as t, hK as r, cy as x$1, aM as s$2, fF as c$2, sI as u$3, eB as e$1, sJ as L$1, sK as A$1, bq as j$2, fw as n, bp as y$1, ct as o, cN as r$1, sL as r$2, bs as g$1, fl as m, ap as M$2, sM as h$2, sN as r$3, sO as i, iv as m$1, bZ as p$1, hj as i$1, sP as c$3, ci as tt, sQ as Z, sR as U$2, sS as R, sT as Y, sU as ut, a$ as j$3, sV as n$1, fN as V, sW as p$2, sX as n$2, bh as V$1, f3 as n$3, d1 as o$1, bJ as d$1, b1 as s$3, ei as n$4, c2 as F$1, c4 as d$2, de as b$2, hO as o$3, n2 as x$2, cB as a$2, cD as t$1, cl as u$4, cn as m$2, iA as s, bN as b$3 } from "./chunk-KFNcxJaF.js";
import { h as h$1, j as j$1, i as i$2 } from "./chunk-_6WFmAiF.js";
import { o as o$2 } from "./chunk-vP0bHkve.js";
let c = class extends l$1 {
  projectOrWarn(e2, r2) {
    if (null == e2)
      return e2;
    const { geometry: t2, pending: c2 } = U$1(e2, r2);
    return c2 ? null : c2 || t2 ? t2 : (s$1.getLogger(this).warn("geometry could not be projected to the spatial reference", { georeference: this, geometry: e2, sourceSpatialReference: e2.spatialReference, targetSpatialReference: r2 }), null);
  }
};
c = e([c$1("esri.layers.support.GeoreferenceBase")], c);
const a$1 = c;
const C = e$1(), T = n();
let _ = class extends g$1 {
  constructor() {
    super(...arguments), this.sourcePoint = null, this.mapPoint = null;
  }
};
e([y$1()], _.prototype, "sourcePoint", void 0), e([y$1({ type: x$1 })], _.prototype, "mapPoint", void 0), _ = e([c$1("esri.layers.support.ControlPoint")], _);
let O = class extends u$2(a$1) {
  constructor(o2) {
    super(o2), this.controlPoints = null, this.height = 0, this.type = "control-points", this.width = 0;
  }
  readControlPoints(o2, t$12) {
    const r$12 = f$2.fromJSON(t$12.spatialReference), n2 = t(...t$12.coefficients, 1);
    return o2.map((o3) => (r(T, o3.x, o3.y), h$1(T, T, n2), { sourcePoint: o3, mapPoint: new x$1({ x: T[0], y: T[1], spatialReference: r$12 }) }));
  }
  writeControlPoints(o2, t2, n2, i2) {
    if (null != this.transform)
      null != o2 && k(o2[0]) && (t2.controlPoints = o2.map((o3) => {
        const t3 = o3.sourcePoint;
        return { x: t3.x, y: t3.y };
      }), t2.spatialReference = o2[0].mapPoint.spatialReference.toJSON(), t2.coefficients = this.transform.slice(0, 8));
    else {
      const o3 = new s$2("web-document-write:invalid-georeference", "Invalid 'controlPoints', 'width', 'height' configuration.", { layer: i2?.layer, georeference: this });
      i2?.messages ? i2.messages.push(o3) : s$1.getLogger(this).error(o3.name, o3.message);
    }
  }
  get coords() {
    if (null == this.controlPoints)
      return null;
    const o2 = this._updateTransform(C);
    if (null == o2 || !k(this.controlPoints[0]))
      return null;
    const t2 = this.controlPoints[0].mapPoint.spatialReference;
    return K(o2, this.width, this.height, t2);
  }
  set coords(o2) {
    if (null == this.controlPoints || !k(this.controlPoints[0]))
      return;
    const t2 = this.controlPoints[0].mapPoint.spatialReference;
    if (null == (o2 = this.projectOrWarn(o2, t2)))
      return;
    const { width: r$12, height: n2 } = this, { rings: [[e2, s2, c2, a2]] } = o2, p2 = { sourcePoint: c$2(0, n2), mapPoint: new x$1({ x: e2[0], y: e2[1], spatialReference: t2 }) }, u2 = { sourcePoint: c$2(0, 0), mapPoint: new x$1({ x: s2[0], y: s2[1], spatialReference: t2 }) }, m2 = { sourcePoint: c$2(r$12, 0), mapPoint: new x$1({ x: c2[0], y: c2[1], spatialReference: t2 }) }, f2 = { sourcePoint: c$2(r$12, n2), mapPoint: new x$1({ x: a2[0], y: a2[1], spatialReference: t2 }) };
    k(p2) && k(u2) && k(m2) && k(f2) && (E$1(C, p2, u2, m2, f2), this.controlPoints = this.controlPoints.map(({ sourcePoint: o3 }) => (r(T, o3.x, o3.y), h$1(T, T, C), { sourcePoint: o3, mapPoint: new x$1({ x: T[0], y: T[1], spatialReference: t2 }) })));
  }
  get inverseTransform() {
    return null == this.transform ? null : u$3(e$1(), this.transform);
  }
  get transform() {
    return this._updateTransform();
  }
  toMap(o2) {
    if (null == o2 || null == this.transform || null == this.controlPoints || !k(this.controlPoints[0]))
      return null;
    r(T, o2.x, o2.y);
    const t2 = this.controlPoints[0].mapPoint.spatialReference;
    return h$1(T, T, this.transform), new x$1({ x: T[0], y: T[1], spatialReference: t2 });
  }
  toSource(o2) {
    if (null == o2 || null == this.inverseTransform || null == this.controlPoints || !k(this.controlPoints[0]))
      return null;
    const t2 = this.controlPoints[0].mapPoint.spatialReference;
    return o2 = o2.normalize(), null == (o2 = U$1(o2, t2).geometry) ? null : (r(T, o2.x, o2.y), h$1(T, T, this.inverseTransform), c$2(T[0], T[1]));
  }
  toSourceNormalized(o2) {
    const t2 = this.toSource(o2);
    return null != t2 && (t2.x /= this.width, t2.y /= this.height), t2;
  }
  _updateTransform(o2) {
    const { controlPoints: t2, width: r2, height: n2 } = this;
    if (!(null != t2 && r2 > 0 && n2 > 0))
      return null;
    const [e2, i2, s2, l2] = t2;
    if (!k(e2))
      return null;
    const c2 = e2.mapPoint.spatialReference, a2 = this._projectControlPoint(i2, c2), p2 = this._projectControlPoint(s2, c2), u2 = this._projectControlPoint(l2, c2);
    if (!a2.valid || !p2.valid || !u2.valid)
      return null;
    if (!k(a2.controlPoint))
      return null;
    null == o2 && (o2 = e$1());
    let m2 = null;
    return m2 = k(p2.controlPoint) && k(u2.controlPoint) ? E$1(o2, e2, a2.controlPoint, p2.controlPoint, u2.controlPoint) : k(p2.controlPoint) ? B(o2, e2, a2.controlPoint, p2.controlPoint) : q(o2, e2, a2.controlPoint), m2.every((o3) => 0 === o3) ? null : m2;
  }
  _projectControlPoint(o2, t2) {
    if (!k(o2))
      return { valid: true, controlPoint: o2 };
    const { sourcePoint: r2, mapPoint: n2 } = o2, { geometry: i2, pending: s2 } = U$1(n2, t2);
    return s2 ? { valid: false, controlPoint: null } : s2 || i2 ? { valid: true, controlPoint: { sourcePoint: r2, mapPoint: i2 } } : (s$1.getLogger(this).warn("map point could not be projected to the spatial reference", { georeference: this, controlPoint: o2, sourceSpatialReference: n2.spatialReference, targetSpatialReference: t2 }), { valid: false, controlPoint: null });
  }
};
function k(o2) {
  return null != o2?.sourcePoint && null != o2.mapPoint;
}
e([y$1({ type: [_], json: { write: { allowNull: false, isRequired: true } } })], O.prototype, "controlPoints", void 0), e([o("controlPoints")], O.prototype, "readControlPoints", null), e([r$1("controlPoints")], O.prototype, "writeControlPoints", null), e([y$1()], O.prototype, "coords", null), e([y$1({ json: { write: true } })], O.prototype, "height", void 0), e([y$1({ readOnly: true })], O.prototype, "inverseTransform", null), e([y$1({ readOnly: true })], O.prototype, "transform", null), e([y$1({ json: { write: true } })], O.prototype, "width", void 0), O = e([c$1("esri.layers.support.ControlPointsGeoreference")], O);
const N = n(), b$1 = n(), I$2 = n(), M$1 = n(), A = n(), J = n(), L = n(), U = n(), z = Math.PI / 2;
function G(o2, t2, r$12) {
  r(o2, r$12.sourcePoint.x, r$12.sourcePoint.y), r(t2, r$12.mapPoint.x, r$12.mapPoint.y);
}
function q(o2, t2, r2) {
  return G(N, A, t2), G(b$1, J, r2), L$1(I$2, b$1, N, z), L$1(M$1, N, b$1, z), L$1(L, J, A, -z), L$1(U, A, J, -z), H$1(o2, N, b$1, I$2, M$1, A, J, L, U);
}
function B(o2, t2, r2, n2) {
  return G(N, A, t2), G(b$1, J, r2), G(I$2, L, n2), A$1(M$1, N, b$1, 0.5), L$1(M$1, I$2, M$1, Math.PI), A$1(U, A, J, 0.5), L$1(U, L, U, Math.PI), H$1(o2, N, b$1, I$2, M$1, A, J, L, U);
}
function E$1(o2, t2, r2, n2, e2) {
  return G(N, A, t2), G(b$1, J, r2), G(I$2, L, n2), G(M$1, U, e2), H$1(o2, N, b$1, I$2, M$1, A, J, L, U);
}
const W = new Array(8).fill(0), D = new Array(8).fill(0);
function F(o2, t2, r2, n2, e2) {
  return o2[0] = t2[0], o2[1] = t2[1], o2[2] = r2[0], o2[3] = r2[1], o2[4] = n2[0], o2[5] = n2[1], o2[6] = e2[0], o2[7] = e2[1], o2;
}
function H$1(o2, t2, r2, n2, e2, i2, l2, c2, a2) {
  return j$1(o2, F(W, t2, r2, n2, e2), F(D, i2, l2, c2, a2));
}
function K(o2, t2, r2, n2) {
  const e2 = r$2(0, r2), s2 = r$2(0, 0), l2 = r$2(t2, 0), c2 = r$2(t2, r2);
  return h$1(e2, e2, o2), h$1(s2, s2, o2), h$1(l2, l2, o2), h$1(c2, c2, o2), new j$2({ rings: [[e2, s2, l2, c2, e2]], spatialReference: n2 });
}
const Q = O;
const f$1 = n();
let y = class extends a$1 {
  constructor(t2) {
    super(t2), this.bottomLeft = null, this.bottomRight = null, this.topLeft = null, this.topRight = null, this.type = "corners";
  }
  get coords() {
    let { topLeft: t2, topRight: o2, bottomLeft: e2, bottomRight: r2 } = this;
    if (null == t2 || null == o2 || null == e2 || null == r2)
      return null;
    const s2 = t2.spatialReference;
    return o2 = this.projectOrWarn(o2, s2), e2 = this.projectOrWarn(e2, s2), r2 = this.projectOrWarn(r2, s2), null == o2 || null == e2 || null == r2 ? null : new j$2({ rings: [[[e2.x, e2.y], [t2.x, t2.y], [o2.x, o2.y], [r2.x, r2.y], [e2.x, e2.y]]], spatialReference: s2 });
  }
  set coords(t2) {
    const { topLeft: o2 } = this;
    if (null == o2)
      return;
    const e2 = o2.spatialReference;
    if (null == (t2 = this.projectOrWarn(t2, e2)))
      return;
    const { rings: [[r2, s2, n2, i2]] } = t2;
    this.bottomLeft = new x$1({ x: r2[0], y: r2[1], spatialReference: e2 }), this.topLeft = new x$1({ x: s2[0], y: s2[1], spatialReference: e2 }), this.topRight = new x$1({ x: n2[0], y: n2[1], spatialReference: e2 }), this.bottomRight = new x$1({ x: i2[0], y: i2[1], spatialReference: e2 });
  }
  toSourceNormalized(t2) {
    const { topLeft: s2, topRight: n2, bottomRight: p2, bottomLeft: c2 } = this;
    if (null == t2 || null == s2 || null == n2 || null == p2 || null == c2)
      return null;
    const u2 = s2.spatialReference;
    t2 = t2.normalize();
    const a2 = U$1(t2, u2).geometry;
    if (null == a2)
      return null;
    r(f$1, a2.x, a2.y);
    const y2 = j$1(e$1(), [s2.x, s2.y, c2.x, c2.y, n2.x, n2.y, p2.x, p2.y], [0, 0, 0, 1, 1, 0, 1, 1]);
    return h$1(f$1, f$1, y2), c$2(f$1[0], f$1[1]);
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
      const { x: n3, y: i2 } = this.extent.center, a2 = u$1(n3, i2, this.rotation);
      s2 = [a2(t2, e2), a2(t2, o2), a2(r2, o2), a2(r2, e2)], s2.push(s2[0]);
    } else
      s2 = [[t2, e2], [t2, o2], [r2, o2], [r2, e2], [t2, e2]];
    return new j$2({ rings: [s2], spatialReference: n2 });
  }
  set coords(t2) {
    if (null == t2 || null == this.extent)
      return;
    const r2 = this.extent.spatialReference;
    if (t2 = this.projectOrWarn(t2, r2), null == t2?.extent)
      return;
    const { rings: [[o2, n2, s2]], extent: { center: { x: i2, y: c2 } } } = t2, m$12 = m(Math.PI / 2 - Math.atan2(n2[1] - o2[1], n2[0] - o2[0])), l2 = u$1(i2, c2, -m$12), [p2, x2] = l2(o2[0], o2[1]), [f2, y2] = l2(s2[0], s2[1]);
    this.extent = new M$2({ xmin: p2, ymin: x2, xmax: f2, ymax: y2, spatialReference: r2 }), this.rotation = m$12;
  }
  toSourceNormalized(t2) {
    const { extent: e2, rotation: n2 } = this;
    if (null == t2 || null == e2)
      return null;
    const { xmin: s2, ymin: i2, xmax: a2, ymax: c2, center: l2, spatialReference: p2 } = e2;
    t2 = t2.normalize();
    const x2 = U$1(t2, p2).geometry;
    if (null == x2)
      return null;
    let f2 = x2.x, y2 = x2.y;
    return n2 && ([f2, y2] = u$1(l2.x, l2.y, -n2)(f2, y2)), c$2(h$2(f2, s2, a2, 0, 1), h$2(y2, c2, i2, 0, 1));
  }
};
function u$1(t2, e2, r2) {
  const o2 = r$3(r2), n2 = Math.cos(o2), s2 = Math.sin(o2);
  return (r3, o3) => [n2 * (r3 - t2) + s2 * (o3 - e2) + t2, n2 * (o3 - e2) - s2 * (r3 - t2) + e2];
}
e([y$1()], p.prototype, "coords", null), e([y$1({ type: M$2 })], p.prototype, "extent", void 0), e([y$1({ type: Number })], p.prototype, "rotation", void 0), p = e([c$1("esri.layers.support.ExtentAndRotationGeoreference")], p);
const x = p;
const l = { key: "type", base: a$1, typeMap: { "control-points": Q, corners: h, "extent-and-rotation": x } };
let u = class extends i(u$2(m$1)) {
  constructor(e2) {
    super(e2), this.georeference = null, this.opacity = 1;
  }
  readGeoreference(e2) {
    return Q.fromJSON(e2);
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
e([y$1({ types: l, json: { write: true } })], u.prototype, "georeference", void 0), e([o("georeference")], u.prototype, "readGeoreference", null), e([y$1()], u.prototype, "opacity", void 0), u = e([c$1("esri.layers.support.MediaElementBase")], u);
const f = u;
let I$1 = class I extends f {
  constructor(t2) {
    super(t2), this.animationOptions = null, this.content = null, this.image = null, this.type = "image", this.image = null;
  }
  load() {
    const t2 = this.image;
    if ("string" == typeof t2) {
      const e2 = p$1(t2).then((t3) => {
        this._set("content", t3);
      });
      this.addResolvingPromise(e2);
    } else if (t2 instanceof HTMLImageElement) {
      const e2 = t2.decode().then(() => {
        this._set("content", t2);
      });
      this.addResolvingPromise(e2);
    } else
      t2 ? this._set("content", t2) : this.addResolvingPromise(Promise.reject(new s$2("image-element:invalid-image-type", "Invalid image type", { image: t2 })));
    return Promise.resolve(this);
  }
  get contentWidth() {
    return null == this.content ? 0 : this.content instanceof HTMLImageElement ? this.content.naturalWidth : this.content.width;
  }
  get contentHeight() {
    return null == this.content ? 0 : this.content instanceof HTMLImageElement ? this.content.naturalHeight : this.content.height;
  }
  readImage(t2, e2, r2) {
    return i$1(e2.url, r2);
  }
  writeImage(t2, e2, r2, o2) {
    if (null == t2)
      return;
    const a2 = o2?.portalItem, l2 = o2?.resources;
    if (!a2 || !l2)
      return void ("string" == typeof t2 && (e2[r2] = c$3(t2, o2)));
    const m2 = "string" != typeof t2 || tt(t2) || Z(t2) ? null : t2;
    if (m2) {
      if (null == U$2(m2))
        return void (e2[r2] = m2);
      const t3 = c$3(m2, { ...o2, verifyItemRelativeUrls: o2?.verifyItemRelativeUrls ? { writtenUrls: o2.verifyItemRelativeUrls.writtenUrls, rootPath: void 0 } : void 0 }, R.NO);
      if (a2 && t3 && !Y(t3))
        return l2.toKeep.push({ resource: a2.resourceFromPath(t3), compress: false }), void (e2[r2] = t3);
    }
    e2[r2] = "<pending>", l2.pendingOperations.push(w$1(t2).then((t3) => {
      const o3 = H(t3, a2);
      e2[r2] = o3.itemRelativeUrl, l2.toAdd.push({ resource: o3, content: { type: "blob", blob: t3 }, compress: false, finish: (t4) => {
        this.image = t4.url;
      } });
    }));
  }
};
e([y$1()], I$1.prototype, "animationOptions", void 0), e([y$1({ readOnly: true })], I$1.prototype, "content", void 0), e([y$1({ readOnly: true })], I$1.prototype, "contentWidth", null), e([y$1({ readOnly: true })], I$1.prototype, "contentHeight", null), e([y$1({ json: { name: "url", type: String } })], I$1.prototype, "image", void 0), e([o("image", ["url"])], I$1.prototype, "readImage", null), e([r$1("image")], I$1.prototype, "writeImage", null), e([y$1({ readOnly: true, json: { name: "mediaType" } })], I$1.prototype, "type", void 0), I$1 = e([c$1("esri.layers.support.ImageElement")], I$1);
const b = I$1;
async function w$1(t2) {
  if ("string" == typeof t2) {
    if (tt(t2))
      return ut(t2);
    return (await j$3(t2, { responseType: "blob" })).data;
  }
  return new Promise((e2) => E(t2).toBlob(e2));
}
function E(t2) {
  if (t2 instanceof HTMLCanvasElement)
    return t2;
  const e2 = t2 instanceof HTMLImageElement ? t2.naturalWidth : t2.width, r2 = t2 instanceof HTMLImageElement ? t2.naturalHeight : t2.height, o2 = document.createElement("canvas"), n2 = o2.getContext("2d");
  return o2.width = e2, o2.height = r2, t2 instanceof HTMLImageElement ? n2.drawImage(t2, 0, 0, t2.width, t2.height) : t2 instanceof ImageData && n2.putImageData(t2, 0, 0), o2;
}
function H(t2, e2) {
  const r2 = n$1(), o2 = `${V("media", r2)}.${p$2({ type: "blob", blob: t2 })}`;
  return e2.resourceFromPath(o2);
}
let a = class extends f {
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
      })) : this.addResolvingPromise(Promise.reject(new s$2("video-element:invalid-video-type", "Invalid video type", { video: e2 })));
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
      const r2 = n$2(e2, "canplay", () => {
        this.removeHandles("canplay"), this.autoplay ? e2.play().then(o2, s2) : o2();
      });
      this.addHandles(r2, "canplay"), "anonymous" !== e2.crossOrigin && (e2.crossOrigin = "anonymous", e2.src?.includes("blob:") || (e2.src = e2.src));
    });
  }
};
e([y$1()], a.prototype, "autoplay", void 0), e([y$1({ readOnly: true })], a.prototype, "content", void 0), e([y$1({ readOnly: true })], a.prototype, "contentWidth", null), e([y$1({ readOnly: true })], a.prototype, "contentHeight", null), e([y$1()], a.prototype, "video", null), a = e([c$1("esri.layers.support.VideoElement")], a);
const d = a;
const w = { key: "type", defaultKeyValue: "image", base: f, typeMap: { image: b, video: d } }, M = V$1.ofType(w);
let I2 = class extends m$1.LoadableMixin(n$3(o$1.EventedAccessor)) {
  constructor(e2) {
    super(e2), this._index = new o$2(), this._elementViewsMap = /* @__PURE__ */ new Map(), this._elementsIndexes = /* @__PURE__ */ new Map(), this._elementsChangedHandler = (e3) => {
      for (const s2 of e3.removed) {
        const e4 = this._elementViewsMap.get(s2);
        this._elementViewsMap.delete(s2), this._index.delete(e4), this.removeHandles(e4), e4.destroy(), this.notifyChange("fullExtent");
      }
      const { spatialReference: t2 } = this;
      for (const s2 of e3.added) {
        if (this._elementViewsMap.get(s2))
          continue;
        const e4 = new i$2({ spatialReference: t2, element: s2 });
        this._elementViewsMap.set(s2, e4);
        const r2 = d$1(() => e4.coords, () => this._updateIndexForElement(e4, false));
        this._updateIndexForElement(e4, true), this.addHandles(r2, e4);
      }
      this._elementsIndexes.clear(), this.elements.forEach((e4, t3) => this._elementsIndexes.set(e4, t3)), this.emit("refresh");
    }, this.elements = new M();
  }
  async load(e2) {
    if (s$3(e2), !this.spatialReference) {
      const e3 = this.elements.find((e4) => null != e4.georeference?.coords);
      this._set("spatialReference", e3 ? e3.georeference.coords.spatialReference : f$2.WGS84);
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
    return null == e2 ? null : new M$2({ xmin: e2[0], ymin: e2[1], xmax: e2[2], ymax: e2[3], spatialReference: this.spatialReference });
  }
  set spatialReference(e2) {
    "not-loaded" === this.loadStatus ? this._set("spatialReference", e2) : s$1.getLogger(this).error("#spatialReference", "spatialReference cannot be changed after the source is loaded.");
  }
  async queryElements(e2, t2) {
    await this.load(), await F$1(e2.spatialReference, this.spatialReference, null, t2);
    const s2 = d$2(e2.spatialReference, this.spatialReference) ? e2 : b$2(e2, this.spatialReference);
    if (!s2)
      return [];
    const r2 = s2.normalize(), o2 = [];
    for (const n2 of r2)
      this._index.forEachInBounds(o$3(n2), ({ normalizedCoords: e3, element: t3 }) => {
        null != e3 && x$2(n2, e3) && o2.push(t3);
      });
    return o2.sort((e3, t3) => this._elementsIndexes.get(e3) - this._elementsIndexes.get(t3)), o2;
  }
  _updateIndexForElement(e2, t2) {
    const s2 = e2.normalizedBounds, r2 = this._index.has(e2), o2 = null != s2;
    this._index.delete(e2), o2 && this._index.set(e2, s2), this.notifyChange("fullExtent"), t2 || (r2 !== o2 ? this.emit("refresh") : this.emit("change", { element: e2.element }));
  }
};
e([y$1()], I2.prototype, "elements", null), e([y$1({ readOnly: true })], I2.prototype, "fullExtent", null), e([y$1()], I2.prototype, "spatialReference", null), I2 = e([c$1("esri.layers.support.LocalMediaElementSource")], I2);
const S$1 = I2;
function S(e2) {
  return "object" == typeof e2 && null != e2 && "type" in e2;
}
let g = class extends a$2(t$1(u$4(m$2(b$3)))) {
  constructor(e2) {
    super(e2), this.effectiveSource = null, this.copyright = null, this.operationalLayerType = "MediaLayer", this.spatialReference = null, this.type = "media", this.source = new S$1();
  }
  load(e2) {
    const t2 = this.source;
    if (!t2)
      return this.addResolvingPromise(Promise.reject(new s$2("media-layer:source-missing", "Set 'MediaLayer.source' before loading the layer."))), Promise.resolve(this);
    const s2 = S(t2) ? new S$1({ elements: new V$1([t2]) }) : t2;
    this._set("effectiveSource", s2), this.spatialReference && (s2.spatialReference = this.spatialReference);
    const i2 = s2.load(e2).then(() => {
      this.spatialReference = s2.spatialReference;
    });
    return this.addResolvingPromise(i2), Promise.resolve(this);
  }
  destroy() {
    this.effectiveSource?.destroy(), this.source?.destroy();
  }
  get fullExtent() {
    return this.loaded ? this.effectiveSource.fullExtent : null;
  }
  set source(e2) {
    "not-loaded" === this.loadStatus ? this._set("source", e2) : s$1.getLogger(this).error("#source", "source cannot be changed after the layer is loaded.");
  }
  castSource(e2) {
    return e2 ? Array.isArray(e2) ? new S$1({ elements: new V$1(e2) }) : e2 instanceof V$1 ? new S$1({ elements: e2 }) : e2 : null;
  }
  readSource(e2, r2, o2) {
    const t2 = "image" === r2.mediaType ? new b() : "video" === r2.mediaType ? new d() : null;
    return t2?.read(r2, o2), t2;
  }
  writeSource(e2, r2, t2, s2) {
    e2 && S(e2) && "image" === e2.type ? e2.write(r2, s2) : s2?.messages && s2?.messages?.push(new s$2("media-layer:unsupported-source", "source must be an 'ImageElement'"));
  }
};
e([y$1({ readOnly: true })], g.prototype, "effectiveSource", void 0), e([y$1({ type: String })], g.prototype, "copyright", void 0), e([y$1({ readOnly: true })], g.prototype, "fullExtent", null), e([y$1({ type: ["MediaLayer"] })], g.prototype, "operationalLayerType", void 0), e([y$1({ type: ["show", "hide"] })], g.prototype, "listMode", void 0), e([y$1({ nonNullable: true, json: { write: { enabled: true, allowNull: false } } })], g.prototype, "source", null), e([s("source")], g.prototype, "castSource", null), e([o("source", ["url"])], g.prototype, "readSource", null), e([r$1("source")], g.prototype, "writeSource", null), e([y$1()], g.prototype, "spatialReference", void 0), e([y$1({ readOnly: true })], g.prototype, "type", void 0), g = e([c$1("esri.layers.MediaLayer")], g);
const j = g;
const MediaLayer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: j
}, Symbol.toStringTag, { value: "Module" }));
export {
  MediaLayer as M,
  S$1 as S,
  b,
  d,
  j,
  x
};
