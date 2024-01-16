import { nW as r$1, sA as F, aq as has, rZ as M$2, lC as o, lD as d$1, eu as e$1, lF as o$1, s0 as e$2, lJ as o$2, lR as t$3, lT as r$2, lU as r$3, sx as E, lV as S$2, t_ as l$3, hW as R, i5 as O, l$ as _, t$ as n$2, m4 as e$3, u0 as t$4, m9 as r$4, m7 as c$2, lK as o$3, m6 as A$1, s9 as t$5, nX as d$2, o2 as a$2, k5 as ht, rO as u$2, pl as d$3, mK as c$3, hw as r$5, pt as k$1, pq as s$1, eP as o$4, l6 as u$3, mL as g$3, u1 as R$1, q1 as f$2, o5 as f$3, q4 as c$4, u2 as S$3, pv as P$1, eN as _$1, eO as z$1, mJ as e$4, p$ as H$1, u3 as x$1, u4 as p$1, u5 as p$2, u6 as ss, le as t$6, u7 as l$4, f8 as v$2, nQ as q$1, nc as U$1, fl as m$2, pV as h$2, u8 as f$4, pU as W$1, u9 as ms, ua as n$3, pZ as ds, ub as J$1, bb as s$2, nV as x$2, bJ as d$4, bn as P$2, bu as u$5, o4 as ft, rV as t$7, oP as r$7, pM as R$2, sB as G, et as I$1, ev as t$8, o3 as f$5, lQ as e$6, eQ as n$4, r_ as r$8, uc as i$1, hy as e$7, hv as A, ud as Q, ue as o$5, uf as lt, ug as at } from "./chunk-KFNcxJaF.js";
import { M as M$3, $, D, e as e$5, O as O$1 } from "./chunk-S1k8w-_l.js";
import { g as g$4 } from "./chunk-zw9UPZSi.js";
import { a as a$1, u as u$4, r as r$6 } from "./chunk-XZLuqbq5.js";
const c$1 = r$1(0, 0, 0, 0.04);
function t$2({ accentColor: r2 }) {
  return F(r2, 0.5);
}
function n$1({ accentColor: r2 }) {
  return F(r2, 0.7);
}
const t$1 = has("mac") ? "Meta" : "Control", r = "Shift", s = 2, a = 1.15, c = 1.15, m$1 = 2500, h$1 = 0.02, e = Math.cos(M$2(45)), i = Math.cos(M$2(5)), f$1 = 0.95, p = 0.3, M$1 = 2, j$1 = 1, l$2 = 3, n = 11, x = 22.5, C = 40, S$1 = 48, U = 2.25, b = 4, d = 1, g$2 = 0.3, k = 6, q = 4, u$1 = 1600, v$1 = 0.4;
function t(t2) {
  const g2 = new o(), { vertex: l3, fragment: s2, attributes: n2, varyings: c2 } = g2;
  return d$1(l3, t2), n2.add(e$1.POSITION, "vec3"), n2.add(e$1.UV0, "vec2"), c2.add("vUV", "vec2"), l3.code.add(o$1`void main(void) {
vUV = uv0;
gl_Position = proj * view * vec4(position, 1.0);
}`), s2.uniforms.add(new e$2("backgroundColor", (e2) => e2.backgroundColor), new e$2("gridColor", (e2) => e2.gridColor), new o$2("gridWidth", (e2) => e2.gridWidth)), s2.code.add(o$1`void main() {
const float LINE_WIDTH = 1.0;
vec2 uvScaled = vUV * gridWidth;
vec2 gridUV = (fract(uvScaled + 0.5) - 0.5) / (LINE_WIDTH * fwidth(uvScaled));
vec2 grid = (1.0 - step(0.5, gridUV)) * step(-0.5, gridUV);
grid.x *= step(0.5, uvScaled.x) * step(uvScaled.x, gridWidth - 0.5);
grid.y *= step(0.5, uvScaled.y) * step(uvScaled.y, gridWidth - 0.5);
float gridFade = max(grid.x, grid.y);
float gridAlpha = gridColor.a * gridFade;
fragColor =
vec4(backgroundColor.rgb * backgroundColor.a, backgroundColor.a) * (1.0 - gridAlpha) +
vec4(gridColor.rgb, 1.0) * gridAlpha;
}`), g2;
}
const g$1 = Object.freeze(Object.defineProperty({ __proto__: null, build: t }, Symbol.toStringTag, { value: "Module" }));
class h extends n$2 {
  constructor() {
    super(...arguments), this.backgroundColor = r$1(1, 0, 0, 0.5), this.gridColor = r$1(0, 1, 0, 0.5), this.gridWidth = 4;
  }
}
class u extends r$2 {
  initializeProgram(e2) {
    return new r$3(e2.rctx, u.shader.get().build(this.configuration), E);
  }
  initializePipeline() {
    return S$2({ blending: l$3(R.ONE, R.ONE, R.ONE_MINUS_SRC_ALPHA, R.ONE_MINUS_SRC_ALPHA), depthTest: { func: O.LESS }, colorWrite: _ });
  }
}
u.shader = new t$3(g$1, () => import("./chunk-I2PlcvCt.js"));
let l$1 = class l extends e$3 {
  constructor(r2) {
    super(r2, new m()), this._configuration = new t$4();
  }
  createBufferWriter() {
    return new r$4(c$2);
  }
  produces(e2, t2) {
    return t2 === o$3.Color && e2 === A$1.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL;
  }
  createGLMaterial(r2) {
    return new f(r2);
  }
  getConfiguration() {
    return this._configuration;
  }
};
class f extends t$5 {
  constructor(r2) {
    super(r2), this.ensureTechnique(u, null);
  }
  beginSlot() {
    return this.technique;
  }
}
class m extends h {
  constructor() {
    super(...arguments), this.renderOccluded = d$2.Occlude, this.isDecoration = false;
  }
}
class l2 extends a$1 {
  constructor(r2) {
    super(r2), this._material = null, this._renderOccluded = d$2.OccludeAndTransparent, this._gridWidth = 1, this._gridColor = r$1(1, 0, 0, 1), this._backgroundColor = r$1(1, 0, 0, 1), this.applyProperties(r2);
  }
  get renderOccluded() {
    return this._renderOccluded;
  }
  set renderOccluded(r2) {
    r2 !== this._renderOccluded && (this._renderOccluded = r2, this._updateMaterial());
  }
  get gridWidth() {
    return this._gridWidth;
  }
  set gridWidth(r2) {
    this._gridWidth !== r2 && (this._gridWidth = r2, this._updateMaterial());
  }
  get gridColor() {
    return this._gridColor;
  }
  set gridColor(e2) {
    a$2(this._gridColor, e2), this._updateMaterial();
  }
  get backgroundColor() {
    return this._backgroundColor;
  }
  set backgroundColor(e2) {
    a$2(this._backgroundColor, e2), this._updateMaterial();
  }
  createExternalResources() {
    this._material = new l$1(this._materialParameters);
  }
  destroyExternalResources() {
    this._material = null;
  }
  forEachExternalMaterial(r2) {
    null != this._material && r2(this._material);
  }
  createGeometries(r2) {
    if (null != this._material) {
      const e2 = ht(this._material);
      r2.addGeometry(e2);
    }
  }
  get _materialParameters() {
    return { backgroundColor: this._backgroundColor, gridWidth: this._gridWidth, gridColor: this._gridColor, renderOccluded: this._renderOccluded, isDecoration: this.isDecoration };
  }
  _updateMaterial() {
    null != this._material && this._material.setParameters(this._materialParameters);
  }
}
function ti(i2, t2, e2, n2, o2, s2, r2, a2) {
  return ei(t2, r2.worldUpAtPosition(i2, c$3.get()), o2, s2, a2.basis1, a2.basis2), g$3(a2.basis1, a2.basis1, e2), g$3(a2.basis2, a2.basis2, n2), r$5(a2.origin, i2), S$3(a2.basis2, a2.basis1, a2.origin, a2.plane), a2;
}
function ei(i$12, t2, e$12, n2, o2, s2) {
  const r2 = P$1(i$12, t2), a2 = c$3.get(), c2 = c$3.get();
  switch (n2 === _i.HORIZONTAL_OR_VERTICAL ? Math.abs(r2) > e ? _i.HORIZONTAL : _i.VERTICAL : n2) {
    case _i.VERTICAL: {
      const n3 = Math.abs(r2) <= i ? i$12 : e$12.viewUp;
      _$1(a2, n3, t2), r$5(c2, t2);
      break;
    }
    case _i.HORIZONTAL:
      _$1(a2, e$12.viewUp, t2), _$1(c2, t2, a2);
      break;
    case _i.TILTED: {
      const n3 = Math.abs(r2) <= i ? t2 : e$12.viewUp;
      _$1(a2, n3, i$12), _$1(c2, i$12, a2);
      break;
    }
  }
  const l3 = _$1(c$3.get(), a2, c2);
  P$1(l3, e$12.viewForward) > 0 && g$3(c2, c2, -1), z$1(o2, a2), z$1(s2, c2);
}
function ni(i2, t2, e2) {
  const n2 = t2.worldUpAtPosition(i2.origin, c$3.get()), o2 = i2.basis1, s2 = wi(i2, n2), r2 = Math.round(s2 / yi) * yi;
  return ms(i2, r2 - s2, o2, e2);
}
function oi(i2, t2, e2, n2, o2, s2) {
  const r2 = r$5(c$3.get(), o2.origin);
  u$3(r2, r2, g$3(c$3.get(), o2.basis1, i2.direction[0] < 0 ? 1 : -1)), u$3(r2, r2, g$3(c$3.get(), o2.basis2, i2.direction[1] < 0 ? 1 : -1));
  const a2 = s$1(o2.basis1), c2 = s$1(o2.basis2), l3 = e$4(c$3.get(), e2, r2), m2 = e$4(c$3.get(), t2, r2);
  let p2 = 0, h2 = 0;
  if (Ii(i2)) {
    const t3 = hi(o2), e3 = hi(s2);
    p2 = a2 - 0.5 * i2.direction[0] * P$1(o2.basis1, m2) / a2, h2 = c2 - 0.5 * i2.direction[1] * P$1(o2.basis2, m2) / c2;
    const n3 = e3 / t3;
    p2 *= n3, h2 *= n3;
  }
  const I2 = p2 + 0.5 * i2.direction[0] * P$1(o2.basis1, l3) / a2, E2 = h2 + 0.5 * i2.direction[1] * P$1(o2.basis2, l3) / c2, A2 = g$3(c$3.get(), o2.basis1, I2 / a2), j2 = g$3(c$3.get(), o2.basis2, E2 / c2);
  (I2 <= 0 || bi(s2.origin, A2, n2) <= u$1) && r$5(A2, s2.basis1), (E2 <= 0 || bi(s2.origin, j2, n2) <= u$1) && r$5(j2, s2.basis2);
  const R2 = r$5(c$3.get(), r2);
  return u$3(R2, R2, g$3(c$3.get(), A2, i2.direction[0] < 0 ? -1 : 1)), u$3(R2, R2, g$3(c$3.get(), j2, i2.direction[1] < 0 ? -1 : 1)), H$1(R2, A2, j2, s2);
}
function si(i2, t2) {
  return v$1 * Math.min(t2.width, t2.height) * t2.computeRenderPixelSizeAt(i2);
}
function ri(i2, t2, e2, n2) {
  const o2 = _$1(c$3.get(), t2, e2);
  return _$1(o2, o2, t2), k$1(i2, o2, n2);
}
function ai(i2, t2) {
  return M$3(i2.basis1, i2.basis2, i2.origin, t2);
}
function ci(i2, t2, e2, n2) {
  const o2 = t2.worldUpAtPosition(i2.origin, c$3.get()), s2 = c$3.get();
  switch (e2) {
    case Ci.HEADING:
      r$5(s2, o2);
      break;
    case Ci.TILT:
      r$5(s2, i2.basis1);
  }
  return k$1(i2.origin, s2, n2);
}
function li(i2, t2, e2, n2) {
  const r2 = fi(e2, pi.NEGATIVE_X), a2 = f$2.get();
  x$1(a2, t2, r2.edge * Math.PI / 2);
  const c2 = z$1(c$3.get(), r2.basis);
  let l3 = g$3(c$3.get(), c2, r2.direction * n2.computeScreenPixelSizeAt(r2.position) * C);
  u$3(l3, l3, r2.position);
  const d2 = n2.projectToRenderScreen(l3, p$1(c$3.get())), g2 = ui(n2, d2);
  p$2(n2, d2, Si), z$1(Si.direction, Si.direction);
  const m2 = c$3.get();
  !g2 && ss(e2, Si, m2) && (l3 = m2), a2[12] = 0, a2[13] = 0, a2[14] = 0, i2.modelTransform = a2, i2.renderLocation = t$6(l3), g2 ? i2.state |= Mi : i2.state &= ~Mi;
}
function ui(i2, t2) {
  const [e2, n2, o2, s2] = i2.viewport, r2 = Math.min(o2, s2) / 16;
  let a2 = true;
  return t2[0] < e2 + r2 ? (t2[0] = e2 + r2, a2 = false) : t2[0] > e2 + o2 - r2 && (t2[0] = e2 + o2 - r2, a2 = false), t2[1] < n2 + r2 ? (t2[1] = n2 + r2, a2 = false) : t2[1] > n2 + s2 - r2 && (t2[1] = n2 + s2 - r2, a2 = false), a2;
}
function di(i2, t2, e2, n2) {
  const o2 = s$1(n2.basis1), s2 = s$1(n2.basis2), l3 = Ti(n2), d2 = hi(n2), g2 = o$4(c$3.get(), 0, 0, 0);
  u$3(g2, g$3(c$3.get(), n2.basis1, t2.direction[0]), g$3(c$3.get(), n2.basis2, t2.direction[1])), u$3(g2, n2.origin, g2);
  let m2 = 0, p2 = 1;
  if (Ii(t2))
    1 === t2.direction[0] && -1 === t2.direction[1] ? m2 = yi : 1 === t2.direction[0] && 1 === t2.direction[1] ? m2 = Math.PI : -1 === t2.direction[0] && 1 === t2.direction[1] && (m2 = 3 * Math.PI / 2), p2 = d2;
  else {
    const i3 = 0 !== t2.direction[0] ? 1 : 2;
    m2 = 1 === i3 ? yi : 0, p2 = (1 === i3 ? s2 : o2) - l3;
  }
  const T = R$1(f$2.get(), m2);
  f$3(T, T, o$4(c$3.get(), p2, p2, p2)), c$4(T, e2, T), T[12] = 0, T[13] = 0, T[14] = 0, i2.modelTransform = T, i2.renderLocation = g2;
}
function gi(i2, t2, e2, n2) {
  const o2 = n2.worldUpAtPosition(e2.origin, c$3.get()), s2 = fi(e2, pi.POSITIVE_X), a2 = R$1(f$2.get(), s2.edge * Math.PI / 2);
  l$4(a2, a2, -wi(e2, o2)), c$4(a2, t2, a2), a2[12] = 0, a2[13] = 0, a2[14] = 0, i2.modelTransform = a2, i2.renderLocation = s2.position;
}
function mi(i2, t2, e2) {
  const n2 = fi(e2, pi.POSITIVE_Y), o2 = R$1(f$2.get(), n2.edge * Math.PI / 2);
  l$4(o2, o2, yi), c$4(o2, t2, o2), o2[12] = 0, o2[13] = 0, o2[14] = 0, i2.modelTransform = o2, i2.renderLocation = n2.position;
}
var pi;
function fi(i2, t2) {
  switch (t2) {
    case pi.POSITIVE_X:
      return { basis: i2.basis1, direction: 1, position: u$3(c$3.get(), i2.origin, i2.basis1), edge: t2 };
    case pi.POSITIVE_Y:
      return { basis: i2.basis2, direction: 1, position: u$3(c$3.get(), i2.origin, i2.basis2), edge: t2 };
    case pi.NEGATIVE_X:
      return { basis: i2.basis1, direction: -1, position: e$4(c$3.get(), i2.origin, i2.basis1), edge: t2 };
    case pi.NEGATIVE_Y:
      return { basis: i2.basis2, direction: -1, position: e$4(c$3.get(), i2.origin, i2.basis2), edge: t2 };
  }
}
function bi(i2, t2, e2) {
  const n2 = e2.projectToRenderScreen(u$3(c$3.get(), i2, t2), p$1(c$3.get())), s2 = e2.projectToRenderScreen(e$4(c$3.get(), i2, t2), p$1(c$3.get()));
  return v$2(e$4(n2, n2, s2));
}
function Ti(i2) {
  const t2 = s$1(i2.basis1), e2 = s$1(i2.basis2);
  return g$2 * Math.min(t2, e2);
}
function hi(i2) {
  return Ti(i2);
}
function Ii(i2) {
  return 0 !== i2.direction[0] && 0 !== i2.direction[1];
}
function Ei(i2) {
  const t2 = [[-1, -1, 0], [1, -1, 0], [1, 1, 0], [-1, 1, 0], [-1, -1, 0]];
  return new u$4({ view: i2, attached: false, color: n$1(i2.effectiveTheme), width: j$1, renderOccluded: d$2.OccludeAndTransparent, geometry: [t2], isDecoration: true });
}
function Ai(i2) {
  return new l2({ view: i2, attached: false, backgroundColor: c$1, gridColor: t$2(i2.effectiveTheme), gridWidth: 4, renderOccluded: d$2.OccludeAndTransparent, isDecoration: true });
}
function ji(t2, n2, o2, s2 = new h$2()) {
  if (null == t2)
    return null;
  const { renderCoordsHelper: r2 } = n2, a2 = r2.fromRenderCoords(t2.origin, n2.spatialReference);
  if (null == a2)
    return null;
  const c2 = q$1(a2, o2);
  if (null == c2)
    return null;
  s2.position = c2;
  const l3 = 2 * s$1(t2.basis1), u2 = 2 * s$1(t2.basis2), d2 = U$1.renderUnitScaleFactor(n2.spatialReference, o2);
  s2.width = l3 * d2, s2.height = u2 * d2;
  const g2 = r2.worldUpAtPosition(t2.origin, c$3.get());
  return s2.tilt = m$2(wi(t2, g2)), s2.heading = r2.headingAtPosition(t2.origin, t2.basis1) - 90, s2;
}
function wi(i2, t2) {
  return f$4(t2, i2.basis2, i2.basis1) + yi;
}
function Oi(i2, e2, o2, s2, r2, a2, c2 = W$1()) {
  return a2.toRenderCoords(i2, c2.origin) ? (a2.worldBasisAtPosition(c2.origin, n$3.X, c2.basis1), a2.worldBasisAtPosition(c2.origin, n$3.Y, c2.basis2), S$3(c2.basis2, c2.basis1, c2.origin, c2.plane), ms(c2, -M$2(e2), ds(c2), c2), ms(c2, M$2(o2), c2.basis1, c2), g$3(c2.basis1, c2.basis1, s2 / 2), g$3(c2.basis2, c2.basis2, r2 / 2), J$1(c2), c2) : (s$2.getLogger("esri.views.3d.analysis.Slice.sliceToolUtils").error(`Failed to project slice plane position, projection from ${i2.spatialReference.wkid} is not supported`), null);
}
function Pi(i2, t2) {
  if (null == i2?.position)
    return null;
  const e2 = r$6(i2.position, t2.spatialReference, t2.elevationProvider);
  if (null == e2)
    return null;
  const n2 = U$1.renderUnitScaleFactor(i2.position.spatialReference, t2.spatialReference), o2 = i2.width * n2, s2 = i2.height * n2;
  return { position: e2, heading: i2.heading, tilt: i2.tilt, renderWidth: o2, renderHeight: s2 };
}
function vi(i2, t2, e2, n2 = W$1()) {
  if (null == i2)
    return null;
  const o2 = Oi(i2.position, i2.heading, i2.tilt, i2.renderWidth, i2.renderHeight, t2.renderCoordsHelper, n2);
  return e2.tiltEnabled || null == o2 || ni(o2, t2.renderCoordsHelper, o2), o2;
}
!function(i2) {
  i2[i2.POSITIVE_X = 0] = "POSITIVE_X", i2[i2.POSITIVE_Y = 1] = "POSITIVE_Y", i2[i2.NEGATIVE_X = 2] = "NEGATIVE_X", i2[i2.NEGATIVE_Y = 3] = "NEGATIVE_Y";
}(pi || (pi = {}));
const Vi = u$2.Custom1;
var Ci, _i;
!function(i2) {
  i2[i2.HEADING = 1] = "HEADING", i2[i2.TILT = 2] = "TILT";
}(Ci || (Ci = {})), function(i2) {
  i2[i2.HORIZONTAL_OR_VERTICAL = 0] = "HORIZONTAL_OR_VERTICAL", i2[i2.HORIZONTAL = 1] = "HORIZONTAL", i2[i2.VERTICAL = 2] = "VERTICAL", i2[i2.TILTED = 3] = "TILTED";
}(_i || (_i = {}));
const Mi = u$2.Custom2, Si = d$3(), yi = Math.PI / 2, Ni = u$2.Custom1, Hi = u$2.Custom2;
function Ui(i2) {
  return null != ("building-scene-3d" === i2.type ? i2 : null);
}
class v extends $ {
  constructor(o2, i2) {
    const s$12 = Ii(i2), m2 = s$12 ? b : d, f2 = m2 * s, d$12 = d, u2 = { renderOccluded: d$2.OccludeAndTransparent, isDecoration: true }, j2 = new x$2({ ...u2, width: m2 }), b$1 = new x$2({ ...u2, width: f2 }), v2 = new x$2({ ...u2, width: d$12 });
    super({ view: o2, ...D, ...M({ isCorner: s$12, unfocusedMaterial: j2, focusedMaterial: b$1, outlineMaterial: v2 }) }), this._themeHandle = d$4(() => o2.effectiveTheme.accentColor, (r2) => {
      const t2 = u$5.toUnitRGBA(r2);
      j2.setParameters({ color: t2 }), b$1.setParameters({ color: t2 }), v2.setParameters({ color: t2 });
    }, P$2);
  }
  destroy() {
    this._themeHandle.remove(), super.destroy();
  }
}
function M({ isCorner: e2, unfocusedMaterial: r2, focusedMaterial: t2, outlineMaterial: n2 }) {
  const a2 = e2 ? [r$7(1, 0, 0), r$7(0, 0, 0), r$7(0, 1, 0)] : [r$7(1, 0, 0), r$7(-1, 0, 0)];
  return { renderObjects: [new e$5(ft(r2, a2), t$7.Unfocused | Ni), new e$5(ft(t2, a2), t$7.Focused | Ni), new e$5(ft(n2, a2), Hi)], collisionType: { type: "line", paths: [a2] }, radius: e2 ? k : q, state: Ni };
}
class g extends $ {
  constructor(n2, s2) {
    const a2 = new g$4({ transparent: true, writeDepth: false, renderOccluded: d$2.Opaque, isDecoration: true }), c2 = O$1.calloutWidth, m2 = new x$2({ width: c2, renderOccluded: d$2.OccludeAndTransparent, isDecoration: true });
    super({ view: n2, ...j({ imageMaterial: a2, calloutMaterial: m2 }) }), this._currentTexture = null, this._themeHandle = d$4(() => n2.effectiveTheme.accentColor, (i2) => {
      const o2 = R$2(i2, 0.5), n3 = G(i2), l3 = this._currentTexture, c3 = s2(o2, n3);
      a2.setParameters({ textureId: c3.texture.id }), m2.setParameters({ color: u$5.toUnitRGBA(i2) }), this._currentTexture = c3, l3?.release();
    }, P$2);
  }
  destroy() {
    this._themeHandle.remove(), this._currentTexture?.release(), super.destroy();
  }
}
function j({ imageMaterial: e2, calloutMaterial: t2 }) {
  const { focusMultiplier: r2, calloutLength: i2, discRadius: o2 } = O$1, s2 = o2 * r2, d2 = (e3, t3) => {
    const r3 = [0, 1, 2, 2, 3, 0];
    return new I$1(t3, [[e$1.POSITION, new t$8([i2 - e3, -e3, 0, i2 + e3, -e3, 0, i2 + e3, e3, 0, i2 - e3, e3, 0], r3, 3, true)], [e$1.UV0, new t$8([0, 0, 1, 0, 1, 1, 0, 1], r3, 2, true)]]);
  }, f2 = ft(t2, [[0, 0, 0], [i2 - o2, 0, 0]]), b2 = ft(t2, [[0, 0, 0], [i2 - s2, 0, 0]]), g2 = Vi;
  return { autoScaleRenderObjects: false, collisionPriority: 1, collisionType: { type: "disc", direction: [0, 0, 1], offset: [i2, 0, 0] }, focusMultiplier: r2, radius: o2, renderObjects: [new e$5(d2(o2, e2), t$7.Unfocused | g2), new e$5(f2, t$7.Unfocused | g2), new e$5(d2(s2, e2), t$7.Focused | g2), new e$5(b2, t$7.Focused | g2)], state: g2 };
}
var H;
!function(e2) {
  e2[e2.CENTER_ON_CALLOUT = 0] = "CENTER_ON_CALLOUT", e2[e2.CENTER_ON_ARROW = 1] = "CENTER_ON_ARROW";
}(H || (H = {}));
class I extends $ {
  constructor(n2, s2) {
    const a2 = new x$2({ width: 1, renderOccluded: d$2.OccludeAndTransparent, isDecoration: true }), i2 = new f$5({ cullFace: e$6.Back, renderOccluded: d$2.Opaque, isDecoration: true }), c2 = new f$5({ cullFace: e$6.Back, renderOccluded: d$2.Opaque, isDecoration: true }), l3 = new f$5({ cullFace: e$6.Back, renderOccluded: d$2.Opaque, isDecoration: true }), m2 = new f$5({ writeDepth: false, cullFace: e$6.Front, renderOccluded: d$2.Transparent, isDecoration: true });
    super({ view: n2, ...S({ offsetMode: s2, tubeMaterial: i2, tipMaterial: c2, capMaterial: l3, outlineMaterial: m2, calloutMaterial: a2 }) }), this._themeHandle = d$4(() => n2.effectiveTheme.accentColor, (r2) => {
      const o2 = G(r2), n3 = u$5.toUnitRGBA(r2), s3 = u$5.toUnitRGBA(o2), u2 = u$5.toUnitRGBA(u$5.blendColors(o2, r2, 0.4)), p2 = u$5.toUnitRGBA(u$5.blendColors(o2, r2, 0.14));
      a2.setParameters({ color: n3 }), i2.setParameters({ color: p2 }), c2.setParameters({ color: s3 }), l3.setParameters({ color: u2 }), m2.setParameters({ color: n3 });
    }, P$2);
  }
  destroy() {
    this._themeHandle.remove(), super.destroy();
  }
}
function S({ offsetMode: e2, tubeMaterial: t2, tipMaterial: r2, capMaterial: o2, outlineMaterial: n$12, calloutMaterial: s2 }) {
  const a2 = e2 === H.CENTER_ON_CALLOUT ? C : 0, i2 = [r$7(a2, 0, -S$1 / 2), r$7(a2, 0, S$1 / 2)], c2 = J(i2, true), l3 = W({ vertices: i2, padding: 0, materials: { tube: t2, tip: r2, cap: o2 } }), m2 = W({ vertices: i2, padding: U, materials: { tube: n$12, tip: n$12, cap: n$12 } }), u2 = ft(s2, [[a2, 0, 0], [a2 - C, 0, 0]]), p2 = ft(s2, [[a2, 0, 0], [a2 - C, 0, 0]]);
  return { renderObjects: [...l3.normal.map((e3) => new e$5(e3, t$7.Unfocused | Vi)), ...m2.normal.map((e3) => new e$5(e3, t$7.Unfocused | Vi)), new e$5(u2, t$7.Unfocused | Vi | Mi), ...l3.focused.map((e3) => new e$5(e3, t$7.Focused | Vi)), ...m2.focused.map((e3) => new e$5(e3, t$7.Focused | Vi)), new e$5(p2, t$7.Focused | Vi | Mi)], autoScaleRenderObjects: false, collisionType: { type: "line", paths: [c2] }, collisionPriority: 1, radius: n, state: Vi };
}
function W({ vertices: e2, padding: t2, materials: r2 }) {
  const o2 = (o3) => {
    const M2 = e2.slice(0), C2 = e$4(c$3.get(), M2[0], M2[1]);
    z$1(C2, C2);
    const T = e$4(c$3.get(), M2[M2.length - 1], M2[M2.length - 2]);
    if (z$1(T, T), t2 > 0) {
      const e3 = g$3(n$4(), T, -t2);
      M2[M2.length - 1] = u$3(e3, e3, M2[M2.length - 1]);
      const r3 = g$3(n$4(), C2, -t2);
      M2[0] = u$3(r3, r3, M2[0]);
    }
    const E2 = o3 ? c : 1, N = x * E2, k2 = n * E2, F2 = r$8(f$2.get());
    if (t2 > 0) {
      const e3 = N / 4, r3 = o$4(c$3.get(), 0, e3, 0), o4 = 1 + t2 / e3;
      i$1(F2, F2, r3), f$3(F2, F2, o$4(c$3.get(), o4, o4, o4)), i$1(F2, F2, g$3(r3, r3, -1 / o4));
    }
    const y = r$8(e$7()), B = r$7(0, 1, 0), L = A(e$7(), Q(o$5.get(), B, T));
    L[12] = M2[M2.length - 1][0], L[13] = M2[M2.length - 1][1], L[14] = M2[M2.length - 1][2], c$4(L, L, F2);
    const P = r2.tube, G2 = z(l$2 * (o3 ? a : 1) + t2, M2, P);
    G2.transformation = y;
    const q2 = [G2], x$12 = r2.tip, H2 = lt(x$12, N, k2, 24, false, false, true);
    H2.transformation = L, q2.push(H2);
    const I2 = r2.cap, S2 = lt(I2, N, k2, 24, false, true, false);
    S2.transformation = L, q2.push(S2);
    const W2 = A(e$7(), Q(o$5.get(), B, C2));
    return W2[12] = M2[0][0], W2[13] = M2[0][1], W2[14] = M2[0][2], c$4(W2, W2, F2), q2.push(H2.instantiate({ transformation: W2 })), q2.push(S2.instantiate({ transformation: W2 })), q2;
  };
  return { normal: o2(false), focused: o2(true) };
}
function z(e2, t2, r2) {
  const o2 = [], n2 = 12;
  for (let s2 = 0; s2 < n2; s2++) {
    const t3 = s2 / n2 * 2 * Math.PI;
    o2.push([Math.cos(t3) * e2, Math.sin(t3) * e2]);
  }
  return at(r2, o2, t2, [], [], false);
}
function J(e2, t2) {
  const r2 = e$4(n$4(), e2[e2.length - 1], e2[e2.length - 2]);
  if (z$1(r2, r2), g$3(r2, r2, x), u$3(r2, r2, e2[e2.length - 1]), t2) {
    const t3 = e$4(n$4(), e2[0], e2[1]);
    return z$1(t3, t3), g$3(t3, t3, x), u$3(t3, t3, e2[0]), [t3, ...e2, r2];
  }
  return [...e2, r2];
}
export {
  Ai as A,
  Ii as B,
  Ci as C,
  hi as D,
  Ei as E,
  Hi as F,
  H,
  I,
  M$1 as M,
  Ni as N,
  Pi as P,
  Ui as U,
  Vi as V,
  _i as _,
  v as a,
  t$1 as b,
  ci as c,
  ti as d,
  ai as e,
  gi as f,
  g,
  mi as h,
  di as i,
  ji as j,
  c$1 as k,
  li as l,
  m$1 as m,
  n$1 as n,
  oi as o,
  p,
  ri as q,
  r,
  si as s,
  t,
  f$1 as u,
  vi as v,
  h$1 as w,
  t$2 as x,
  j$1 as y,
  Mi as z
};
