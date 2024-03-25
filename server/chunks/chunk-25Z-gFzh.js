import { eH as r$1, tv as F, b0 as has, kR as h$2, mE as o, mF as d$1, fk as e$2, mH as o$1, tm as e$3, mL as o$2, mS as t$3, mU as r$2, mV as r$3, ux as O, mW as S$2, uy as l$3, mb as R, o7 as O$1, n0 as _, uz as n$1, n5 as e$4, n6 as A$1, mM as o$3, uA as t$4, nc as r$4, na as c$2, tq as t$5, l2 as h$3, l0 as a$1, li as a$2, ks as ct, uB as u$2, qm as d$2, uC as w, nP as c$3, aI as r$5, uD as j$2, kH as s$1, fF as o$4, aG as u$3, nQ as g$3, uE as R$1, qC as f$2, uF as f$3, qF as c$4, uG as U$1, qu as P$1, fD as _$1, fE as z$1, aF as e$5, qx as H$1, uH as x$1, uI as p$1, uJ as l$4, uK as ss, m4 as t$6, uL as l$5, f_ as v$2, cY as x$2, k_ as D, oc as v$3, aD as M$2, ql as h$4, uM as u$4, qk as W$1, uN as ms, uO as n$2, qv as ds, t0 as J$1, aT as s$2, uP as ee, l1 as H$2, uQ as j$3, ce as d$3, bX as P$2, b$ as u$5, uR as e$6, tt as gt, uS as t$7, aE as r$7, uT as h$5, ty as R$2, tw as G, fj as I$1, fl as t$8, uU as _$2, lk as e$7, aW as n$3, uV as o$5, pn as i$1, im as e$8, il as _$3, uW as R$3, uX as o$6, uY as at, uZ as it } from "./chunk-ejFG4zJ0.js";
import { T } from "./chunk--_aQKBqP.js";
import { f as f$4, r as r$6 } from "./chunk-feYAbK6R.js";
const t$2 = r$1(0, 0, 0, 0.04);
function c$1({ accentColor: r2 }) {
  return F(r2, 0.5);
}
function e$1({ accentColor: r2 }) {
  return F(r2, 0.7);
}
const t$1 = has("mac") ? "Meta" : "Control", r = "Shift", s = 2, a = 1.15, c = 1.15, m$1 = 2500, h$1 = 0.02, e = Math.cos(h$2(45)), i = Math.cos(h$2(5)), f$1 = 0.95, p = 0.3, M$1 = 2, j$1 = 1, l$2 = 3, n = 11, x = 22.5, C = 40, S$1 = 48, U = 2.25, b = 4, d = 1, g$2 = 0.3, k = 6, q = 4, u$1 = 1600, v$1 = 0.4;
function t(t2) {
  const g2 = new o(), { vertex: l3, fragment: s2, attributes: n2, varyings: c2 } = g2;
  return d$1(l3, t2), n2.add(e$2.POSITION, "vec3"), n2.add(e$2.UV0, "vec2"), c2.add("vUV", "vec2"), l3.code.add(o$1`void main(void) {
vUV = uv0;
gl_Position = proj * view * vec4(position, 1.0);
}`), s2.uniforms.add(new e$3("backgroundColor", (e2) => e2.backgroundColor), new e$3("gridColor", (e2) => e2.gridColor), new o$2("gridWidth", (e2) => e2.gridWidth)), s2.code.add(o$1`void main() {
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
class h extends n$1 {
  constructor() {
    super(...arguments), this.backgroundColor = r$1(1, 0, 0, 0.5), this.gridColor = r$1(0, 1, 0, 0.5), this.gridWidth = 4;
  }
}
class u extends r$2 {
  initializeProgram(e2) {
    return new r$3(e2.rctx, u.shader.get().build(this.configuration), O);
  }
  initializePipeline() {
    return S$2({ blending: l$3(R.ONE, R.ONE, R.ONE_MINUS_SRC_ALPHA, R.ONE_MINUS_SRC_ALPHA), depthTest: { func: O$1.LESS }, colorWrite: _ });
  }
}
u.shader = new t$3(g$1, () => import("./chunk-vmWiw8Tn.js"));
let l$1 = class l extends e$4 {
  constructor(t2) {
    super(t2, new m()), this.produces = /* @__PURE__ */ new Map([[A$1.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL, (e2) => e2 === o$3.Color]]), this._configuration = new t$4();
  }
  createBufferWriter() {
    return new r$4(c$2);
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
    super(...arguments), this.renderOccluded = h$3.Occlude, this.isDecoration = false;
  }
}
class l2 extends a$1 {
  constructor(r2) {
    super(r2), this._material = null, this._renderOccluded = h$3.OccludeAndTransparent, this._gridWidth = 1, this._gridColor = r$1(1, 0, 0, 1), this._backgroundColor = r$1(1, 0, 0, 1), this.applyProperties(r2);
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
      const e2 = ct(this._material);
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
function ei(i2, t2, e2, n2, o2, r2, s2, a2) {
  return ni(t2, s2.worldUpAtPosition(i2, c$3.get()), o2, r2, a2.basis1, a2.basis2), g$3(a2.basis1, a2.basis1, e2), g$3(a2.basis2, a2.basis2, n2), r$5(a2.origin, i2), U$1(a2.basis2, a2.basis1, a2.origin, a2.plane), a2;
}
function ni(i$12, t2, e$12, n2, o2, r2) {
  const s2 = P$1(i$12, t2), a2 = c$3.get(), c2 = c$3.get();
  switch (n2 === Mi.HORIZONTAL_OR_VERTICAL ? Math.abs(s2) > e ? Mi.HORIZONTAL : Mi.VERTICAL : n2) {
    case Mi.VERTICAL: {
      const n3 = Math.abs(s2) <= i ? i$12 : e$12.viewUp;
      _$1(a2, n3, t2), r$5(c2, t2);
      break;
    }
    case Mi.HORIZONTAL:
      _$1(a2, e$12.viewUp, t2), _$1(c2, t2, a2);
      break;
    case Mi.TILTED: {
      const n3 = Math.abs(s2) <= i ? t2 : e$12.viewUp;
      _$1(a2, n3, i$12), _$1(c2, i$12, a2);
      break;
    }
  }
  const l3 = _$1(c$3.get(), a2, c2);
  P$1(l3, e$12.viewForward) > 0 && g$3(c2, c2, -1), z$1(o2, a2), z$1(r2, c2);
}
function oi(i2, t2, e2) {
  const n2 = t2.worldUpAtPosition(i2.origin, c$3.get()), o2 = i2.basis1, r2 = Oi(i2, n2), s2 = Math.round(r2 / Ni) * Ni;
  return ms(i2, s2 - r2, o2, e2);
}
function ri(i2, t2, e2, n2, o2, r2) {
  const s2 = r$5(c$3.get(), o2.origin);
  u$3(s2, s2, g$3(c$3.get(), o2.basis1, i2.direction[0] < 0 ? 1 : -1)), u$3(s2, s2, g$3(c$3.get(), o2.basis2, i2.direction[1] < 0 ? 1 : -1));
  const a2 = s$1(o2.basis1), c2 = s$1(o2.basis2), l3 = e$5(c$3.get(), e2, s2), m2 = e$5(c$3.get(), t2, s2);
  let p2 = 0, h2 = 0;
  if (Ei(i2)) {
    const t3 = Ii(o2), e3 = Ii(r2);
    p2 = a2 - 0.5 * i2.direction[0] * P$1(o2.basis1, m2) / a2, h2 = c2 - 0.5 * i2.direction[1] * P$1(o2.basis2, m2) / c2;
    const n3 = e3 / t3;
    p2 *= n3, h2 *= n3;
  }
  const I2 = p2 + 0.5 * i2.direction[0] * P$1(o2.basis1, l3) / a2, E = h2 + 0.5 * i2.direction[1] * P$1(o2.basis2, l3) / c2, A = g$3(c$3.get(), o2.basis1, I2 / a2), j2 = g$3(c$3.get(), o2.basis2, E / c2);
  (I2 <= 0 || Ti(r2.origin, A, n2) <= u$1) && r$5(A, r2.basis1), (E <= 0 || Ti(r2.origin, j2, n2) <= u$1) && r$5(j2, r2.basis2);
  const R2 = r$5(c$3.get(), s2);
  return u$3(R2, R2, g$3(c$3.get(), A, i2.direction[0] < 0 ? -1 : 1)), u$3(R2, R2, g$3(c$3.get(), j2, i2.direction[1] < 0 ? -1 : 1)), H$1(R2, A, j2, r2);
}
function si(i2, t2) {
  return v$1 * Math.min(t2.width, t2.height) * t2.computeRenderPixelSizeAt(i2);
}
function ai(i2, t2, e2, n2) {
  const o2 = _$1(c$3.get(), t2, e2);
  return _$1(o2, o2, t2), j$2(i2, o2, n2);
}
function ci(i2, t2) {
  return w(i2.basis1, i2.basis2, i2.origin, t2);
}
function li(i2, t2, e2, n2) {
  const o2 = t2.worldUpAtPosition(i2.origin, c$3.get()), r2 = c$3.get();
  switch (e2) {
    case _i.HEADING:
      r$5(r2, o2);
      break;
    case _i.TILT:
      r$5(r2, i2.basis1);
  }
  return j$2(i2.origin, r2, n2);
}
function ui(i2, t2, e2, n2) {
  const s2 = bi(e2, fi.NEGATIVE_X), a2 = f$2.get();
  x$1(a2, t2, s2.edge * Math.PI / 2);
  const c2 = z$1(c$3.get(), s2.basis);
  let l3 = g$3(c$3.get(), c2, s2.direction * n2.computeScreenPixelSizeAt(s2.position) * C);
  u$3(l3, l3, s2.position);
  const d2 = n2.projectToRenderScreen(l3, p$1(c$3.get())), g2 = di(n2, d2);
  l$4(n2, d2, yi), z$1(yi.direction, yi.direction);
  const m2 = c$3.get();
  !g2 && ss(e2, yi, m2) && (l3 = m2), a2[12] = 0, a2[13] = 0, a2[14] = 0, i2.modelTransform = a2, i2.renderLocation = t$6(l3), g2 ? i2.state |= Si : i2.state &= ~Si;
}
function di(i2, t2) {
  const [e2, n2, o2, r2] = i2.viewport, s2 = Math.min(o2, r2) / 16;
  let a2 = true;
  return t2[0] < e2 + s2 ? (t2[0] = e2 + s2, a2 = false) : t2[0] > e2 + o2 - s2 && (t2[0] = e2 + o2 - s2, a2 = false), t2[1] < n2 + s2 ? (t2[1] = n2 + s2, a2 = false) : t2[1] > n2 + r2 - s2 && (t2[1] = n2 + r2 - s2, a2 = false), a2;
}
function gi(i2, t2, e2, n2) {
  const o2 = s$1(n2.basis1), r2 = s$1(n2.basis2), l3 = hi(n2), d2 = Ii(n2), g2 = o$4(c$3.get(), 0, 0, 0);
  u$3(g2, g$3(c$3.get(), n2.basis1, t2.direction[0]), g$3(c$3.get(), n2.basis2, t2.direction[1])), u$3(g2, n2.origin, g2);
  let m2 = 0, p2 = 1;
  if (Ei(t2))
    1 === t2.direction[0] && -1 === t2.direction[1] ? m2 = Ni : 1 === t2.direction[0] && 1 === t2.direction[1] ? m2 = Math.PI : -1 === t2.direction[0] && 1 === t2.direction[1] && (m2 = 3 * Math.PI / 2), p2 = d2;
  else {
    const i3 = 0 !== t2.direction[0] ? 1 : 2;
    m2 = 1 === i3 ? Ni : 0, p2 = (1 === i3 ? r2 : o2) - l3;
  }
  const T2 = R$1(f$2.get(), m2);
  f$3(T2, T2, o$4(c$3.get(), p2, p2, p2)), c$4(T2, e2, T2), T2[12] = 0, T2[13] = 0, T2[14] = 0, i2.modelTransform = T2, i2.renderLocation = g2;
}
function mi(i2, t2, e2, n2) {
  const o2 = n2.worldUpAtPosition(e2.origin, c$3.get()), r2 = bi(e2, fi.POSITIVE_X), a2 = R$1(f$2.get(), r2.edge * Math.PI / 2);
  l$5(a2, a2, -Oi(e2, o2)), c$4(a2, t2, a2), a2[12] = 0, a2[13] = 0, a2[14] = 0, i2.modelTransform = a2, i2.renderLocation = r2.position;
}
function pi(i2, t2, e2) {
  const n2 = bi(e2, fi.POSITIVE_Y), o2 = R$1(f$2.get(), n2.edge * Math.PI / 2);
  l$5(o2, o2, Ni), c$4(o2, t2, o2), o2[12] = 0, o2[13] = 0, o2[14] = 0, i2.modelTransform = o2, i2.renderLocation = n2.position;
}
var fi;
function bi(i2, t2) {
  switch (t2) {
    case fi.POSITIVE_X:
      return { basis: i2.basis1, direction: 1, position: u$3(c$3.get(), i2.origin, i2.basis1), edge: t2 };
    case fi.POSITIVE_Y:
      return { basis: i2.basis2, direction: 1, position: u$3(c$3.get(), i2.origin, i2.basis2), edge: t2 };
    case fi.NEGATIVE_X:
      return { basis: i2.basis1, direction: -1, position: e$5(c$3.get(), i2.origin, i2.basis1), edge: t2 };
    case fi.NEGATIVE_Y:
      return { basis: i2.basis2, direction: -1, position: e$5(c$3.get(), i2.origin, i2.basis2), edge: t2 };
  }
}
function Ti(i2, t2, e2) {
  const n2 = e2.projectToRenderScreen(u$3(c$3.get(), i2, t2), p$1(c$3.get())), r2 = e2.projectToRenderScreen(e$5(c$3.get(), i2, t2), p$1(c$3.get()));
  return v$2(e$5(n2, n2, r2));
}
function hi(i2) {
  const t2 = s$1(i2.basis1), e2 = s$1(i2.basis2);
  return g$2 * Math.min(t2, e2);
}
function Ii(i2) {
  return hi(i2);
}
function Ei(i2) {
  return 0 !== i2.direction[0] && 0 !== i2.direction[1];
}
function Ai(i2) {
  const t2 = [[-1, -1, 0], [1, -1, 0], [1, 1, 0], [-1, 1, 0], [-1, -1, 0]];
  return new f$4({ view: i2, attached: false, color: e$1(i2.effectiveTheme), width: j$1, renderOccluded: h$3.OccludeAndTransparent, geometry: [t2], isDecoration: true });
}
function ji(i2) {
  return new l2({ view: i2, attached: false, backgroundColor: t$2, gridColor: c$1(i2.effectiveTheme), gridWidth: 4, renderOccluded: h$3.OccludeAndTransparent, isDecoration: true });
}
function Ri(t2, n2, o2, r2 = new h$4()) {
  if (null == t2)
    return null;
  const { renderCoordsHelper: s2 } = n2, a2 = s2.fromRenderCoords(t2.origin, new x$2({ spatialReference: n2.spatialReference }));
  if (null == a2)
    return null;
  const c2 = D(a2, o2);
  if (null == c2)
    return null;
  r2.position = c2;
  const l3 = 2 * s$1(t2.basis1), u2 = 2 * s$1(t2.basis2), d2 = v$3.renderUnitScaleFactor(n2.spatialReference, o2);
  r2.width = l3 * d2, r2.height = u2 * d2;
  const g2 = s2.worldUpAtPosition(t2.origin, c$3.get());
  return r2.tilt = M$2(Oi(t2, g2)), r2.heading = s2.headingAtPosition(t2.origin, t2.basis1) - 90, r2;
}
function Oi(i2, t2) {
  return u$4(t2, i2.basis2, i2.basis1) + Ni;
}
function Pi(i2, e2, o2, r2, s2, a2, c2 = W$1()) {
  return a2.toRenderCoords(i2, c2.origin) ? (a2.worldBasisAtPosition(c2.origin, n$2.X, c2.basis1), a2.worldBasisAtPosition(c2.origin, n$2.Y, c2.basis2), U$1(c2.basis2, c2.basis1, c2.origin, c2.plane), ms(c2, -h$2(e2), ds(c2), c2), ms(c2, h$2(o2), c2.basis1, c2), g$3(c2.basis1, c2.basis1, r2 / 2), g$3(c2.basis2, c2.basis2, s2 / 2), J$1(c2), c2) : (s$2.getLogger("esri.views.3d.analysis.Slice.sliceToolUtils").error(`Failed to project slice plane position, projection from ${i2.spatialReference.wkid} is not supported`), null);
}
function Li(i2, t2) {
  if (null == i2?.position)
    return null;
  const e2 = r$6(i2.position, t2.spatialReference, t2.elevationProvider);
  if (null == e2)
    return null;
  const n2 = v$3.renderUnitScaleFactor(i2.position.spatialReference, t2.spatialReference), o2 = i2.width * n2, r2 = i2.height * n2;
  return { position: e2, heading: i2.heading, tilt: i2.tilt, renderWidth: o2, renderHeight: r2 };
}
function Vi(i2, t2, e2, n2 = W$1()) {
  if (null == i2)
    return null;
  const o2 = Pi(i2.position, i2.heading, i2.tilt, i2.renderWidth, i2.renderHeight, t2.renderCoordsHelper, n2);
  return e2.tiltEnabled || null == o2 || oi(o2, t2.renderCoordsHelper, o2), o2;
}
!function(i2) {
  i2[i2.POSITIVE_X = 0] = "POSITIVE_X", i2[i2.POSITIVE_Y = 1] = "POSITIVE_Y", i2[i2.NEGATIVE_X = 2] = "NEGATIVE_X", i2[i2.NEGATIVE_Y = 3] = "NEGATIVE_Y";
}(fi || (fi = {}));
const Ci = u$2.Custom1;
var _i, Mi;
!function(i2) {
  i2[i2.HEADING = 1] = "HEADING", i2[i2.TILT = 2] = "TILT";
}(_i || (_i = {})), function(i2) {
  i2[i2.HORIZONTAL_OR_VERTICAL = 0] = "HORIZONTAL_OR_VERTICAL", i2[i2.HORIZONTAL = 1] = "HORIZONTAL", i2[i2.VERTICAL = 2] = "VERTICAL", i2[i2.TILTED = 3] = "TILTED";
}(Mi || (Mi = {}));
const Si = u$2.Custom2, yi = d$2(), Ni = Math.PI / 2, Hi = u$2.Custom1, Ui = u$2.Custom2;
function xi(i2) {
  return null != ("building-scene-3d" === i2.type ? i2 : null);
}
class v extends ee {
  constructor(o2, i2) {
    const s$12 = Ei(i2), m2 = s$12 ? b : d, f2 = m2 * s, d$12 = d, u2 = { renderOccluded: h$3.OccludeAndTransparent, isDecoration: true }, j2 = new H$2({ ...u2, width: m2 }), h2 = new H$2({ ...u2, width: f2 }), v2 = new H$2({ ...u2, width: d$12 });
    super({ view: o2, ...j$3, ...M({ isCorner: s$12, unfocusedMaterial: j2, focusedMaterial: h2, outlineMaterial: v2 }) }), this._themeHandle = d$3(() => o2.effectiveTheme.accentColor, (r2) => {
      const t2 = u$5.toUnitRGBA(r2);
      j2.setParameters({ color: t2 }), h2.setParameters({ color: t2 }), v2.setParameters({ color: t2 });
    }, P$2);
  }
  destroy() {
    this._themeHandle.remove(), super.destroy();
  }
}
function M({ isCorner: e2, unfocusedMaterial: r2, focusedMaterial: t2, outlineMaterial: n2 }) {
  const a2 = e2 ? [r$7(1, 0, 0), r$7(0, 0, 0), r$7(0, 1, 0)] : [r$7(1, 0, 0), r$7(-1, 0, 0)];
  return { renderObjects: [new e$6(gt(r2, a2), t$7.Unfocused | Hi), new e$6(gt(t2, a2), t$7.Focused | Hi), new e$6(gt(n2, a2), Ui)], collisionType: { type: "line", paths: [a2] }, radius: e2 ? k : q, state: Hi };
}
class g extends ee {
  constructor(n2, s2) {
    const a2 = new T({ transparent: true, writeDepth: false, renderOccluded: h$3.Opaque, isDecoration: true }), c2 = h$5.calloutWidth, m2 = new H$2({ width: c2, renderOccluded: h$3.OccludeAndTransparent, isDecoration: true });
    super({ view: n2, ...j({ imageMaterial: a2, calloutMaterial: m2 }) }), this._currentTexture = null, this._themeHandle = d$3(() => n2.effectiveTheme.accentColor, (i2) => {
      const o2 = R$2(i2, 0.5), n3 = G(i2), l3 = this._currentTexture, c3 = s2(o2, n3);
      a2.setParameters({ textureId: c3.texture.id }), m2.setParameters({ color: u$5.toUnitRGBA(i2) }), this._currentTexture = c3, l3?.release();
    }, P$2);
  }
  destroy() {
    this._themeHandle.remove(), this._currentTexture?.release(), super.destroy();
  }
}
function j({ imageMaterial: e2, calloutMaterial: t2 }) {
  const { focusMultiplier: r2, calloutLength: i2, discRadius: o2 } = h$5, s2 = o2 * r2, d2 = (e3, t3) => {
    const r3 = [0, 1, 2, 2, 3, 0];
    return new I$1(t3, [[e$2.POSITION, new t$8([i2 - e3, -e3, 0, i2 + e3, -e3, 0, i2 + e3, e3, 0, i2 - e3, e3, 0], r3, 3, true)], [e$2.UV0, new t$8([0, 0, 1, 0, 1, 1, 0, 1], r3, 2, true)]]);
  }, f2 = gt(t2, [[0, 0, 0], [i2 - o2, 0, 0]]), b2 = gt(t2, [[0, 0, 0], [i2 - s2, 0, 0]]), g2 = Ci;
  return { autoScaleRenderObjects: false, collisionPriority: 1, collisionType: { type: "disc", direction: [0, 0, 1], offset: [i2, 0, 0] }, focusMultiplier: r2, radius: o2, renderObjects: [new e$6(d2(o2, e2), t$7.Unfocused | g2), new e$6(f2, t$7.Unfocused | g2), new e$6(d2(s2, e2), t$7.Focused | g2), new e$6(b2, t$7.Focused | g2)], state: g2 };
}
var H;
!function(e2) {
  e2[e2.CENTER_ON_CALLOUT = 0] = "CENTER_ON_CALLOUT", e2[e2.CENTER_ON_ARROW = 1] = "CENTER_ON_ARROW";
}(H || (H = {}));
class I extends ee {
  constructor(a2, n2) {
    const i2 = new H$2({ width: 1, renderOccluded: h$3.OccludeAndTransparent, isDecoration: true }), s2 = new _$2({ cullFace: e$7.Back, renderOccluded: h$3.Opaque, isDecoration: true }), c2 = new _$2({ cullFace: e$7.Back, renderOccluded: h$3.Opaque, isDecoration: true }), l3 = new _$2({ cullFace: e$7.Back, renderOccluded: h$3.Opaque, isDecoration: true }), m2 = new _$2({ writeDepth: false, cullFace: e$7.Front, renderOccluded: h$3.Transparent, isDecoration: true });
    super({ view: a2, ...S({ offsetMode: n2, tubeMaterial: s2, tipMaterial: c2, capMaterial: l3, outlineMaterial: m2, calloutMaterial: i2 }) }), this._themeHandle = d$3(() => a2.effectiveTheme.accentColor, (r2) => {
      const o2 = G(r2), a3 = u$5.toUnitRGBA(r2), n3 = u$5.toUnitRGBA(o2), p2 = u$5.toUnitRGBA(u$5.blendColors(o2, r2, 0.4)), u2 = u$5.toUnitRGBA(u$5.blendColors(o2, r2, 0.14));
      i2.setParameters({ color: a3 }), s2.setParameters({ color: u2 }), c2.setParameters({ color: n3 }), l3.setParameters({ color: p2 }), m2.setParameters({ color: a3 });
    }, P$2);
  }
  destroy() {
    this._themeHandle.remove(), super.destroy();
  }
}
function S({ offsetMode: e2, tubeMaterial: t2, tipMaterial: r2, capMaterial: o2, outlineMaterial: a2, calloutMaterial: n$12 }) {
  const i2 = e2 === H.CENTER_ON_CALLOUT ? C : 0, s2 = [r$7(i2, 0, -S$1 / 2), r$7(i2, 0, S$1 / 2)], c2 = J(s2, true), l3 = W({ vertices: s2, padding: 0, materials: { tube: t2, tip: r2, cap: o2 } }), m2 = W({ vertices: s2, padding: U, materials: { tube: a2, tip: a2, cap: a2 } }), p2 = gt(n$12, [[i2, 0, 0], [i2 - C, 0, 0]]), u2 = gt(n$12, [[i2, 0, 0], [i2 - C, 0, 0]]);
  return { renderObjects: [...l3.normal.map((e3) => new e$6(e3, t$7.Unfocused | Ci)), ...m2.normal.map((e3) => new e$6(e3, t$7.Unfocused | Ci)), new e$6(p2, t$7.Unfocused | Ci | Si), ...l3.focused.map((e3) => new e$6(e3, t$7.Focused | Ci)), ...m2.focused.map((e3) => new e$6(e3, t$7.Focused | Ci)), new e$6(u2, t$7.Focused | Ci | Si)], autoScaleRenderObjects: false, collisionType: { type: "line", paths: [c2] }, collisionPriority: 1, radius: n, state: Ci };
}
function W({ vertices: e2, padding: t2, materials: r2 }) {
  const o2 = (o3) => {
    const M2 = e2.slice(0), C2 = e$5(c$3.get(), M2[0], M2[1]);
    z$1(C2, C2);
    const T2 = e$5(c$3.get(), M2[M2.length - 1], M2[M2.length - 2]);
    if (z$1(T2, T2), t2 > 0) {
      const e3 = g$3(n$3(), T2, -t2);
      M2[M2.length - 1] = u$3(e3, e3, M2[M2.length - 1]);
      const r3 = g$3(n$3(), C2, -t2);
      M2[0] = u$3(r3, r3, M2[0]);
    }
    const E = o3 ? c : 1, N = x * E, F2 = n * E, y = o$5(f$2.get());
    if (t2 > 0) {
      const e3 = N / 4, r3 = o$4(c$3.get(), 0, e3, 0), o4 = 1 + t2 / e3;
      i$1(y, y, r3), f$3(y, y, o$4(c$3.get(), o4, o4, o4)), i$1(y, y, g$3(r3, r3, -1 / o4));
    }
    const B = o$5(e$8()), D2 = r$7(0, 1, 0), P = _$3(e$8(), R$3(o$6.get(), D2, T2));
    P[12] = M2[M2.length - 1][0], P[13] = M2[M2.length - 1][1], P[14] = M2[M2.length - 1][2], c$4(P, P, y);
    const x$12 = r2.tube, k2 = z(l$2 * (o3 ? a : 1) + t2, M2, x$12);
    k2.transformation = B;
    const G2 = [k2], q2 = r2.tip, H2 = at(q2, N, F2, 24, false, false, true);
    H2.transformation = P, G2.push(H2);
    const I2 = r2.cap, S2 = at(I2, N, F2, 24, false, true, false);
    S2.transformation = P, G2.push(S2);
    const W2 = _$3(e$8(), R$3(o$6.get(), D2, C2));
    return W2[12] = M2[0][0], W2[13] = M2[0][1], W2[14] = M2[0][2], c$4(W2, W2, y), G2.push(H2.instantiate({ transformation: W2 })), G2.push(S2.instantiate({ transformation: W2 })), G2;
  };
  return { normal: o2(false), focused: o2(true) };
}
function z(e2, t2, r2) {
  const o2 = [], a2 = 12;
  for (let n2 = 0; n2 < a2; n2++) {
    const t3 = n2 / a2 * 2 * Math.PI;
    o2.push([Math.cos(t3) * e2, Math.sin(t3) * e2]);
  }
  return it(r2, o2, t2, [], [], false);
}
function J(e2, t2) {
  const r2 = e$5(n$3(), e2[e2.length - 1], e2[e2.length - 2]);
  if (z$1(r2, r2), g$3(r2, r2, x), u$3(r2, r2, e2[e2.length - 1]), t2) {
    const t3 = e$5(n$3(), e2[0], e2[1]);
    return z$1(t3, t3), g$3(t3, t3, x), u$3(t3, t3, e2[0]), [t3, ...e2, r2];
  }
  return [...e2, r2];
}
export {
  Ai as A,
  Ii as B,
  Ci as C,
  Hi as D,
  Ei as E,
  H,
  I,
  Li as L,
  M$1 as M,
  Ri as R,
  Si as S,
  Ui as U,
  Vi as V,
  _i as _,
  t$1 as a,
  ri as b,
  Mi as c,
  ci as d,
  ei as e,
  mi as f,
  g,
  pi as h,
  gi as i,
  ji as j,
  e$1 as k,
  li as l,
  m$1 as m,
  t$2 as n,
  ai as o,
  p,
  f$1 as q,
  r,
  si as s,
  t,
  ui as u,
  v,
  h$1 as w,
  xi as x,
  c$1 as y,
  j$1 as z
};
