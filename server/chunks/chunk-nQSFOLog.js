import { v0 as a, v1 as n$1, lJ as o, s2 as e$1, lI as s, uy as e$2, lF as o$1, lC as o$2, uw as e$3, uc as i, hK as r, eu as e$4, fw as n$2, hy as e$5, lR as t, lT as r$1, lU as r$2, lV as S$2, lO as s$1, hW as R$1, l$ as _$3, sa as H$1, eQ as n$3, k7 as t$1, eP as o$3, hX as E$1, uN as r$3, v2 as r$4, h as h$1, i3 as F$1, mJ as e$6, bo as e$7, lP as r$5, u0 as t$2, ps as b$1, rZ as M, v3 as o$4, s0 as e$8, eO as z$1, pq as s$2, fi as x$1, hx as O$1, hw as r$6, v4 as w$1, pI as A$1, eN as _$4, l6 as u$1, pt as k, s4 as n$4, l7 as E$2, t$ as n$5, oP as r$7, la as v$2, sx as E$3, py as a$1, bp as y$2, br as c$2, uG as c$3, fC as l, m6 as A$2, v5 as t$3, v6 as p$2, v7 as O$2, cp as t$4, hV as r$8, pD as y$3, v8 as p$3, pF as m$2, pG as p$4, pH as g, v9 as h$2, le as t$6, nW as r$9, pB as D$1, o2 as a$3, va as a$4, vb as u, vc as $, eY as i$1, eL as t$7, vd as c$4, ve as f$1, ko as o$5, mK as c$5, vf as ot, vg as o$6 } from "./chunk-KFNcxJaF.js";
import { t as t$5, a as a$2 } from "./chunk-XZLuqbq5.js";
function d$1(d2, i2) {
  const s$12 = d2.fragment;
  s$12.include(a), d2.include(n$1), s$12.uniforms.add(new o("globalAlpha", (o2) => o2.globalAlpha), new e$1("glowColor", (o2) => o2.glowColor), new o("glowWidth", (o2, e2) => o2.glowWidth * e2.camera.pixelRatio), new o("glowFalloff", (o2) => o2.glowFalloff), new e$1("innerColor", (o2) => o2.innerColor), new o("innerWidth", (o2, e2) => o2.innerWidth * e2.camera.pixelRatio), new s("depthMap", (o2, e2) => e2.linearDepth?.colorTexture), new e$2("nearFar", (o2, e2) => e2.camera.nearFar), new s("frameColor", (o2, e2) => e2.mainColor)), s$12.code.add(o$1`vec4 blendPremultiplied(vec4 source, vec4 dest) {
float oneMinusSourceAlpha = 1.0 - source.a;
return vec4(
source.rgb + dest.rgb * oneMinusSourceAlpha,
source.a + dest.a * oneMinusSourceAlpha
);
}`), s$12.code.add(o$1`vec4 premultipliedColor(vec3 rgb, float alpha) {
return vec4(rgb * alpha, alpha);
}`), s$12.code.add(o$1`vec4 laserlineProfile(float dist) {
if (dist > glowWidth) {
return vec4(0.0);
}
float innerAlpha = (1.0 - smoothstep(0.0, innerWidth, dist));
float glowAlpha = pow(max(0.0, 1.0 - dist / glowWidth), glowFalloff);
return blendPremultiplied(
premultipliedColor(innerColor, innerAlpha),
premultipliedColor(glowColor, glowAlpha)
);
}`), s$12.code.add(o$1`bool laserlineReconstructFromDepth(out vec3 pos, out vec3 normal, out float depthDiscontinuityAlpha) {
float depth = linearDepthFromTexture(depthMap, uv, nearFar);
if (-depth == nearFar[0]) {
return false;
}
pos = reconstructPosition(gl_FragCoord.xy, depth);
normal = normalize(cross(dFdx(pos), dFdy(pos)));
float ddepth = fwidth(depth);
depthDiscontinuityAlpha = 1.0 - smoothstep(0.0, 0.01, -ddepth / depth);
return true;
}`), i2.contrastControlEnabled ? (s$12.uniforms.add(new o("globalAlphaContrastBoost", (o2) => null != o2.globalAlphaContrastBoost ? o2.globalAlphaContrastBoost : 1)), s$12.code.add(o$1`float rgbToLuminance(vec3 color) {
return dot(vec3(0.2126, 0.7152, 0.0722), color);
}
vec4 laserlineOutput(vec4 color) {
float backgroundLuminance = rgbToLuminance(texture(frameColor, uv).rgb);
float alpha = clamp(globalAlpha * max(backgroundLuminance * globalAlphaContrastBoost, 1.0), 0.0, 1.0);
return color * alpha;
}`)) : s$12.code.add(o$1`vec4 laserlineOutput(vec4 color) {
return color * globalAlpha;
}`);
}
function v$1(i$12) {
  const r$12 = new o$2();
  r$12.include(d$1, i$12);
  const { vertex: v2, fragment: w2 } = r$12;
  return v2.uniforms.add(new e$3("modelView", (i$13, o2) => i(m$1, o2.camera.viewMatrix, i$13.origin)), new e$3("proj", (e2, i2) => i2.camera.projectionMatrix), new o("glowWidth", (e2, i2) => e2.glowWidth * i2.camera.pixelRatio), new e$2("pixelToNDC", (e2, i2) => r(p$1, 2 / i2.camera.fullViewport[2], 2 / i2.camera.fullViewport[3]))), r$12.attributes.add(e$4.START, "vec3"), r$12.attributes.add(e$4.END, "vec3"), r$12.attributes.add(e$4.UP, "vec3"), r$12.attributes.add(e$4.EXTRUDE, "vec2"), r$12.varyings.add("uv", "vec2"), r$12.varyings.add("vViewStart", "vec3"), r$12.varyings.add("vViewEnd", "vec3"), r$12.varyings.add("vViewPlane", "vec4"), v2.code.add(o$1`void main() {
vec3 pos = mix(start, end, extrude.x);
vec4 viewPos = modelView * vec4(pos, 1);
vec4 projPos = proj * viewPos;
vec2 ndcPos = projPos.xy / projPos.w;
vec3 viewUp = (modelView * vec4(extrude.y * up, 0)).xyz;
vec4 projPosUp = proj * vec4(viewPos.xyz + viewUp, 1);
vec2 projExtrudeDir = normalize(projPosUp.xy / projPosUp.w - ndcPos);
vec2 lxy = abs(sign(projExtrudeDir) - ndcPos);
ndcPos += length(lxy) * projExtrudeDir;
vec3 worldPlaneNormal = normalize(cross(up, normalize(end - start)));
vec3 viewPlaneNormal = (modelView * vec4(worldPlaneNormal, 0)).xyz;
vViewStart = (modelView * vec4(start, 1)).xyz;
vViewEnd = (modelView * vec4(end, 1)).xyz;
vViewPlane = vec4(viewPlaneNormal, -dot(viewPlaneNormal, vViewStart));
float xPaddingPixels = sign(dot(viewPlaneNormal, viewPos.xyz)) * (extrude.x * 2.0 - 1.0) * glowWidth;
ndcPos.x += xPaddingPixels * pixelToNDC.x;
uv = ndcPos * 0.5 + 0.5;
gl_Position = vec4(ndcPos, 0, 1);
}`), w2.uniforms.add(new o("perScreenPixelRatio", (e2, i2) => i2.camera.perScreenPixelRatio)), w2.code.add(o$1`float planeDistancePixels(vec4 plane, vec3 pos, vec3 start, vec3 end) {
vec3 origin = mix(start, end, 0.5);
vec3 basis = end - origin;
vec3 posAtOrigin = pos - origin;
float x = dot(normalize(basis), posAtOrigin);
float y = dot(plane.xyz, posAtOrigin);
float dx = max(abs(x) - length(basis), 0.0);
float dy = y;
float dist = length(vec2(dx, dy));
float width = fwidth(y);
float maxPixelDistance = length(pos) * perScreenPixelRatio * 2.0;
float pixelDist = dist / min(width, maxPixelDistance);
return abs(pixelDist);
}
void main() {
vec3 pos;
vec3 normal;
float depthDiscontinuityAlpha;
vec3 dEndStart = vViewEnd - vViewStart;
if (dot(dEndStart, dEndStart) < 1e-5) {
discard;
}
if (!laserlineReconstructFromDepth(pos, normal, depthDiscontinuityAlpha)) {
discard;
}
float distance = planeDistancePixels(vViewPlane, pos, vViewStart, vViewEnd);
vec4 color = laserlineProfile(distance);
float alpha = 1.0 - smoothstep(0.995, 0.999, abs(dot(normal, vViewPlane.xyz)));
fragColor = laserlineOutput(color * alpha * depthDiscontinuityAlpha);
}`), r$12;
}
const p$1 = n$2(), m$1 = e$5(), w = Object.freeze(Object.defineProperty({ __proto__: null, build: v$1 }, Symbol.toStringTag, { value: "Module" }));
class m extends r$1 {
  initializeProgram(e2) {
    return new r$2(e2.rctx, m.shader.get().build(this.configuration), h);
  }
  initializePipeline() {
    return S$2({ blending: s$1(R$1.ONE, R$1.ONE_MINUS_SRC_ALPHA), colorWrite: _$3 });
  }
}
m.shader = new t(w, () => import("./chunk-XKyIm6jv.js"));
const h = /* @__PURE__ */ new Map([[e$4.START, 0], [e$4.END, 1], [e$4.UP, 2], [e$4.EXTRUDE, 3]]);
let c$1 = class c {
  constructor(e2) {
    this._renderCoordsHelper = e2, this._buffers = null, this._origin = n$3(), this._dirty = false, this._count = 0, this._vao = null;
  }
  set vertices(e2) {
    const t2 = t$1(3 * e2.length);
    let r2 = 0;
    for (const s2 of e2)
      t2[r2++] = s2[0], t2[r2++] = s2[1], t2[r2++] = s2[2];
    this.buffers = [t2];
  }
  set buffers(t2) {
    if (this._buffers = t2, this._buffers.length > 0) {
      const t3 = this._buffers[0], r2 = 3 * Math.floor(t3.length / 3 / 2);
      o$3(this._origin, t3[r2], t3[r2 + 1], t3[r2 + 2]);
    } else
      o$3(this._origin, 0, 0, 0);
    this._dirty = true;
  }
  get origin() {
    return this._origin;
  }
  draw(e2) {
    const t2 = this._ensureVAO(e2);
    null != t2 && (e2.bindVAO(t2), e2.drawArrays(E$1.TRIANGLES, 0, this._count));
  }
  dispose() {
    null != this._vao && this._vao.dispose();
  }
  _ensureVAO(e2) {
    return null == this._buffers ? null : (null == this._vao && (this._vao = this._createVAO(e2, this._buffers)), this._ensureVertexData(this._vao, this._buffers), this._vao);
  }
  _createVAO(e2, t2) {
    const r2 = this._createDataBuffer(t2);
    return this._dirty = false, new r$3(e2, h, { data: r$4(b) }, { data: h$1.createVertex(e2, F$1.STATIC_DRAW, r2) });
  }
  _ensureVertexData(e2, t2) {
    if (!this._dirty)
      return;
    const r2 = this._createDataBuffer(t2);
    e2.vertexBuffers.data?.setData(r2), this._dirty = false;
  }
  _numberOfRenderVertices(e2) {
    return 3 * (2 * (e2.length / 3 - 1));
  }
  _createDataBuffer(r2) {
    const s2 = r2.reduce((e2, t2) => e2 + this._numberOfRenderVertices(t2), 0);
    this._count = s2;
    const i2 = b.createBuffer(s2), o2 = this._origin;
    let n2 = 0, u2 = 0;
    for (const f2 of r2) {
      for (let r3 = 0; r3 < f2.length; r3 += 3) {
        const s3 = o$3(d, f2[r3], f2[r3 + 1], f2[r3 + 2]);
        0 === r3 ? u2 = this._renderCoordsHelper.getAltitude(s3) : this._renderCoordsHelper.setAltitude(s3, u2);
        const a2 = this._renderCoordsHelper.worldUpAtPosition(s3, _$2), l2 = n2 + 2 * r3, h2 = e$6(d, s3, o2);
        if (r3 < f2.length - 3) {
          i2.up.setVec(l2, a2), i2.up.setVec(l2 + 3, a2), i2.up.setVec(l2 + 5, a2);
          for (let e2 = 0; e2 < 6; e2++)
            i2.start.setVec(l2 + e2, h2);
          i2.extrude.setValues(l2, 0, -1), i2.extrude.setValues(l2 + 1, 1, -1), i2.extrude.setValues(l2 + 2, 1, 1), i2.extrude.setValues(l2 + 3, 0, -1), i2.extrude.setValues(l2 + 4, 1, 1), i2.extrude.setValues(l2 + 5, 0, 1);
        }
        if (r3 > 0) {
          i2.up.setVec(l2 - 2, a2), i2.up.setVec(l2 - 4, a2), i2.up.setVec(l2 - 5, a2);
          for (let e2 = -6; e2 < 0; e2++)
            i2.end.setVec(l2 + e2, h2);
        }
      }
      n2 += this._numberOfRenderVertices(f2);
    }
    return i2.buffer;
  }
};
const _$2 = n$3(), d = n$3(), b = H$1().vec3f(e$4.START).vec3f(e$4.END).vec3f(e$4.UP).vec2f(e$4.EXTRUDE);
class e extends t$2 {
  constructor() {
    super(...arguments), this.contrastControlEnabled = false;
  }
}
e$7([r$5()], e.prototype, "contrastControlEnabled", void 0);
const C = M(6);
function A(e2) {
  const i2 = new o$2();
  i2.include(o$4), i2.include(d$1, e2);
  const t2 = i2.fragment;
  if (e2.lineVerticalPlaneEnabled || e2.heightManifoldEnabled)
    if (t2.uniforms.add(new o("maxPixelDistance", (i3, t3) => e2.heightManifoldEnabled ? 2 * t3.camera.computeScreenPixelSizeAt(i3.heightManifoldTarget) : 2 * t3.camera.computeScreenPixelSizeAt(i3.lineVerticalPlaneSegment.origin))), t2.code.add(o$1`float planeDistancePixels(vec4 plane, vec3 pos) {
float dist = dot(plane.xyz, pos) + plane.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`), e2.spherical) {
      const e3 = (e4, i4, t3) => O$1(e4, i4.heightManifoldTarget, t3.camera.viewMatrix), i3 = (e4, i4) => O$1(e4, [0, 0, 0], i4.camera.viewMatrix);
      t2.uniforms.add(new e$8("heightManifoldOrigin", (t3, r2) => (e3(T, t3, r2), i3(U, r2), e$6(U, U, T), z$1(R, U), R[3] = s$2(U), R)), new e$1("globalOrigin", (e4, t3) => i3(T, t3)), new o("cosSphericalAngleThreshold", (e4, i4) => 1 - Math.max(2, x$1(i4.camera.eye, e4.heightManifoldTarget) * i4.camera.perRenderPixelRatio) / s$2(e4.heightManifoldTarget))), t2.code.add(o$1`float globeDistancePixels(float posInGlobalOriginLength) {
float dist = abs(posInGlobalOriginLength - heightManifoldOrigin.w);
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}
float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
vec3 posInGlobalOriginNorm = normalize(globalOrigin - pos);
float cosAngle = dot(posInGlobalOriginNorm, heightManifoldOrigin.xyz);
vec3 posInGlobalOrigin = globalOrigin - pos;
float posInGlobalOriginLength = length(posInGlobalOrigin);
float sphericalDistance = globeDistancePixels(posInGlobalOriginLength);
float planarDistance = planeDistancePixels(heightPlane, pos);
return cosAngle < cosSphericalAngleThreshold ? sphericalDistance : planarDistance;
}`);
    } else
      t2.code.add(o$1`float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
return planeDistancePixels(heightPlane, pos);
}`);
  if (e2.pointDistanceEnabled && (t2.uniforms.add(new o("maxPixelDistance", (e3, i3) => 2 * i3.camera.computeScreenPixelSizeAt(e3.pointDistanceTarget))), t2.code.add(o$1`float sphereDistancePixels(vec4 sphere, vec3 pos) {
float dist = distance(sphere.xyz, pos) - sphere.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`)), e2.intersectsLineEnabled && (t2.uniforms.add(new o("perScreenPixelRatio", (e3, i3) => i3.camera.perScreenPixelRatio)), t2.code.add(o$1`float lineDistancePixels(vec3 start, vec3 dir, float radius, vec3 pos) {
float dist = length(cross(dir, pos - start)) / (length(pos) * perScreenPixelRatio);
return abs(dist) - radius;
}`)), (e2.lineVerticalPlaneEnabled || e2.intersectsLineEnabled) && t2.code.add(o$1`bool pointIsWithinLine(vec3 pos, vec3 start, vec3 end) {
vec3 dir = end - start;
float t2 = dot(dir, pos - start);
float l2 = dot(dir, dir);
return t2 >= 0.0 && t2 <= l2;
}`), t2.code.add(o$1`void main() {
vec3 pos;
vec3 normal;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, depthDiscontinuityAlpha)) {
discard;
}
vec4 color = vec4(0, 0, 0, 0);`), e2.heightManifoldEnabled) {
    t2.uniforms.add(new e$2("angleCutoff", (e3) => V(e3)), new e$8("heightPlane", (e3, i4) => z(e3.heightManifoldTarget, e3.renderCoordsHelper.worldUpAtPosition(e3.heightManifoldTarget, T), i4.camera.viewMatrix)));
    const i3 = e2.spherical ? o$1`normalize(globalOrigin - pos)` : o$1`heightPlane.xyz`;
    t2.code.add(o$1`
    {
      float heightManifoldAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, ${i3})));
      vec4 heightManifoldColor = laserlineProfile(heightManifoldDistancePixels(heightPlane, pos));
      color = max(color, heightManifoldColor * heightManifoldAlpha);
    }
    `);
  }
  return e2.pointDistanceEnabled && (t2.uniforms.add(new e$2("angleCutoff", (e3) => V(e3)), new e$8("pointDistanceSphere", (e3, i3) => j(e3, i3))), t2.code.add(o$1`{
float pointDistanceSphereDistance = sphereDistancePixels(pointDistanceSphere, pos);
vec4 pointDistanceSphereColor = laserlineProfile(pointDistanceSphereDistance);
float pointDistanceSphereAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, normalize(pos - pointDistanceSphere.xyz))));
color = max(color, pointDistanceSphereColor * pointDistanceSphereAlpha);
}`)), e2.lineVerticalPlaneEnabled && (t2.uniforms.add(new e$2("angleCutoff", (e3) => V(e3)), new e$8("lineVerticalPlane", (e3, i3) => y$1(e3, i3)), new e$1("lineVerticalStart", (e3, i3) => O(e3, i3)), new e$1("lineVerticalEnd", (e3, i3) => E(e3, i3))), t2.code.add(o$1`{
if (pointIsWithinLine(pos, lineVerticalStart, lineVerticalEnd)) {
float lineVerticalDistance = planeDistancePixels(lineVerticalPlane, pos);
vec4 lineVerticalColor = laserlineProfile(lineVerticalDistance);
float lineVerticalAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, lineVerticalPlane.xyz)));
color = max(color, lineVerticalColor * lineVerticalAlpha);
}
}`)), e2.intersectsLineEnabled && (t2.uniforms.add(new e$2("angleCutoff", (e3) => V(e3)), new e$1("intersectsLineStart", (e3, i3) => O$1(T, e3.lineStartWorld, i3.camera.viewMatrix)), new e$1("intersectsLineEnd", (e3, i3) => O$1(T, e3.lineEndWorld, i3.camera.viewMatrix)), new e$1("intersectsLineDirection", (e3, i3) => (r$6(R, e3.intersectsLineSegment.vector), R[3] = 0, z$1(T, w$1(R, R, i3.camera.viewMatrix)))), new o("intersectsLineRadius", (e3) => e3.intersectsLineRadius)), t2.code.add(o$1`{
if (pointIsWithinLine(pos, intersectsLineStart, intersectsLineEnd)) {
float intersectsLineDistance = lineDistancePixels(intersectsLineStart, intersectsLineDirection, intersectsLineRadius, pos);
vec4 intersectsLineColor = laserlineProfile(intersectsLineDistance);
float intersectsLineAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, 1.0 - abs(dot(normal, intersectsLineDirection)));
color = max(color, intersectsLineColor * intersectsLineAlpha);
}
}`)), t2.code.add(o$1`fragColor = laserlineOutput(color * depthDiscontinuityAlpha);
}`), i2;
}
function V(t2) {
  return r(I, Math.cos(t2.angleCutoff), Math.cos(Math.max(0, t2.angleCutoff - M(2))));
}
function j(e2, i2) {
  return O$1(H, e2.pointDistanceOrigin, i2.camera.viewMatrix), H[3] = x$1(e2.pointDistanceOrigin, e2.pointDistanceTarget), H;
}
function y$1(e2, i2) {
  const t2 = A$1(e2.lineVerticalPlaneSegment, 0.5, T), n2 = e2.renderCoordsHelper.worldUpAtPosition(t2, G), o2 = z$1(U, e2.lineVerticalPlaneSegment.vector), r2 = _$4(R, n2, o2);
  return z$1(r2, r2), z(e2.lineVerticalPlaneSegment.origin, r2, i2.camera.viewMatrix);
}
function O(e2, i2) {
  const t2 = r$6(T, e2.lineVerticalPlaneSegment.origin);
  return e2.renderCoordsHelper.setAltitude(t2, 0), O$1(t2, t2, i2.camera.viewMatrix);
}
function E(e2, i2) {
  const t2 = u$1(T, e2.lineVerticalPlaneSegment.origin, e2.lineVerticalPlaneSegment.vector);
  return e2.renderCoordsHelper.setAltitude(t2, 0), O$1(t2, t2, i2.camera.viewMatrix);
}
function z(e2, i2, t2) {
  return O$1(F, e2, t2), r$6(R, i2), R[3] = 0, w$1(R, R, t2), k(F, R, W);
}
const I = n$2(), T = n$3(), R = n$4(), G = n$3(), U = n$3(), F = n$3(), W = b$1(), H = E$2(), _$1 = Object.freeze(Object.defineProperty({ __proto__: null, build: A, defaultAngleCutoff: C }, Symbol.toStringTag, { value: "Module" }));
class f extends n$5 {
  constructor() {
    super(...arguments), this.innerColor = r$7(1, 1, 1), this.innerWidth = 1, this.glowColor = r$7(1, 0.5, 0), this.glowWidth = 8, this.glowFalloff = 8, this.globalAlpha = 0.75, this.globalAlphaContrastBoost = 2, this.angleCutoff = M(6), this.pointDistanceOrigin = n$3(), this.pointDistanceTarget = n$3(), this.lineVerticalPlaneSegment = v$2(), this.intersectsLineSegment = v$2(), this.intersectsLineRadius = 3, this.heightManifoldTarget = n$3(), this.lineStartWorld = n$3(), this.lineEndWorld = n$3();
  }
}
class p extends r$1 {
  initializeProgram(e2) {
    return new r$2(e2.rctx, p.shader.get().build(this.configuration), E$3);
  }
  initializePipeline() {
    return S$2({ blending: s$1(R$1.ONE, R$1.ONE_MINUS_SRC_ALPHA), colorWrite: _$3 });
  }
}
p.shader = new t(_$1, () => import("./chunk-i5kD2DHo.js"));
class n extends e {
  constructor() {
    super(...arguments), this.heightManifoldEnabled = false, this.pointDistanceEnabled = false, this.lineVerticalPlaneEnabled = false, this.intersectsLineEnabled = false, this.spherical = false;
  }
}
e$7([r$5()], n.prototype, "heightManifoldEnabled", void 0), e$7([r$5()], n.prototype, "pointDistanceEnabled", void 0), e$7([r$5()], n.prototype, "lineVerticalPlaneEnabled", void 0), e$7([r$5()], n.prototype, "intersectsLineEnabled", void 0), e$7([r$5()], n.prototype, "spherical", void 0);
let D = class extends c$3 {
  constructor(e2) {
    super(e2), this._technique = null, this._heightManifoldEnabled = false, this._pointDistanceEnabled = false, this._lineVerticalPlaneEnabled = false, this._intersectsLineEnabled = false, this._intersectsLineInfinite = false, this._viewingMode = l.Local, this._pathVerticalPlaneEnabled = false, this._pathVerticalPlaneData = null, this._pathTechnique = null, this._passParameters = new f(), this.produces = /* @__PURE__ */ new Map([[A$2.LASERLINES, () => !this.contrastControlEnabled], [A$2.LASERLINES_CONTRAST_CONTROL, () => this.contrastControlEnabled]]);
  }
  initialize() {
    this._passParameters.renderCoordsHelper = this.renderCoordsHelper;
  }
  consumes() {
    return t$3;
  }
  get isDecoration() {
    return this._isDecoration;
  }
  get heightManifoldEnabled() {
    return this._heightManifoldEnabled;
  }
  set heightManifoldEnabled(e2) {
    this._heightManifoldEnabled !== e2 && (this._heightManifoldEnabled = e2, this._requestRender());
  }
  get heightManifoldTarget() {
    return this._passParameters.heightManifoldTarget;
  }
  set heightManifoldTarget(e2) {
    r$6(this._passParameters.heightManifoldTarget, e2), this._requestRender();
  }
  get pointDistanceEnabled() {
    return this._pointDistanceEnabled;
  }
  set pointDistanceEnabled(e2) {
    e2 !== this._pointDistanceEnabled && (this._pointDistanceEnabled = e2, this._requestRender());
  }
  get pointDistanceTarget() {
    return this._passParameters.pointDistanceTarget;
  }
  set pointDistanceTarget(e2) {
    r$6(this._passParameters.pointDistanceTarget, e2), this._requestRender();
  }
  get pointDistanceOrigin() {
    return this._passParameters.pointDistanceOrigin;
  }
  set pointDistanceOrigin(e2) {
    r$6(this._passParameters.pointDistanceOrigin, e2), this._requestRender();
  }
  get lineVerticalPlaneEnabled() {
    return this._lineVerticalPlaneEnabled;
  }
  set lineVerticalPlaneEnabled(e2) {
    e2 !== this._lineVerticalPlaneEnabled && (this._lineVerticalPlaneEnabled = e2, this._requestRender());
  }
  get lineVerticalPlaneSegment() {
    return this._passParameters.lineVerticalPlaneSegment;
  }
  set lineVerticalPlaneSegment(e2) {
    p$2(e2, this._passParameters.lineVerticalPlaneSegment), this._requestRender();
  }
  get intersectsLineEnabled() {
    return this._intersectsLineEnabled;
  }
  set intersectsLineEnabled(e2) {
    e2 !== this._intersectsLineEnabled && (this._intersectsLineEnabled = e2, this._requestRender());
  }
  get intersectsLineSegment() {
    return this._passParameters.intersectsLineSegment;
  }
  set intersectsLineSegment(e2) {
    p$2(e2, this._passParameters.intersectsLineSegment), this._requestRender();
  }
  get intersectsLineRadius() {
    return this._passParameters.intersectsLineRadius;
  }
  set intersectsLineRadius(e2) {
    e2 !== this._passParameters.intersectsLineRadius && (this._passParameters.intersectsLineRadius = e2, this._requestRender());
  }
  get intersectsLineInfinite() {
    return this._intersectsLineInfinite;
  }
  set intersectsLineInfinite(e2) {
    e2 !== this._intersectsLineInfinite && (this._intersectsLineInfinite = e2, this._requestRender());
  }
  get viewingMode() {
    return this._viewingMode;
  }
  set viewingMode(e2) {
    e2 !== this._viewingMode && (this._viewingMode = e2, this._requestRender());
  }
  get pathVerticalPlaneEnabled() {
    return this._pathVerticalPlaneEnabled;
  }
  set pathVerticalPlaneEnabled(e2) {
    e2 !== this._pathVerticalPlaneEnabled && (this._pathVerticalPlaneEnabled = e2, null != this._pathVerticalPlaneData && this._requestRender());
  }
  set pathVerticalPlaneVertices(e2) {
    null == this._pathVerticalPlaneData && (this._pathVerticalPlaneData = new c$1(this._passParameters.renderCoordsHelper)), this._pathVerticalPlaneData.vertices = e2, this.pathVerticalPlaneEnabled && this._requestRender();
  }
  set pathVerticalPlaneBuffers(e2) {
    null == this._pathVerticalPlaneData && (this._pathVerticalPlaneData = new c$1(this._passParameters.renderCoordsHelper)), this._pathVerticalPlaneData.buffers = e2, this.pathVerticalPlaneEnabled && this._requestRender();
  }
  setParameters(e2) {
    O$2(this._passParameters, e2) && this._requestRender();
  }
  initializeRenderContext(e$12) {
    this._context = e$12, this._techniqueRepository = e$12.techniqueRepository, this._techniqueConfig = new n();
    const t2 = new e();
    t2.contrastControlEnabled = this.contrastControlEnabled, this._pathTechnique = this._techniqueRepository.acquire(m, t2);
  }
  uninitializeRenderContext() {
    this._technique = t$4(this._technique), this._pathVerticalPlaneData = r$8(this._pathVerticalPlaneData), this._pathTechnique = t$4(this._pathTechnique);
  }
  prepareTechnique() {
    return this.heightManifoldEnabled || this.pointDistanceEnabled || this.lineVerticalPlaneSegment || this.intersectsLineEnabled ? (this._techniqueConfig.heightManifoldEnabled = this.heightManifoldEnabled, this._techniqueConfig.lineVerticalPlaneEnabled = this.lineVerticalPlaneEnabled, this._techniqueConfig.pointDistanceEnabled = this.pointDistanceEnabled, this._techniqueConfig.intersectsLineEnabled = this.intersectsLineEnabled, this._techniqueConfig.contrastControlEnabled = this.contrastControlEnabled, this._techniqueConfig.spherical = this._viewingMode === l.Global, this._technique = this._techniqueRepository.releaseAndAcquire(p, this._techniqueConfig, this._technique), this._technique) : this._pathTechnique;
  }
  renderNode(e2, t2) {
    (this.heightManifoldEnabled || this.pointDistanceEnabled || this.lineVerticalPlaneSegment || this.intersectsLineEnabled) && this._renderUnified(e2, t2), this.pathVerticalPlaneEnabled && this._renderPath(e2);
  }
  _renderUnified(e2, t2) {
    const i2 = e2.rctx;
    this._updatePassParameters(e2), i2.bindTechnique(t2, this._passParameters, e2.bindParameters), i2.screen.draw();
  }
  _renderPath(e2) {
    if (null == this._pathVerticalPlaneData || null == this._pathTechnique)
      return;
    const t2 = e2.rctx, i2 = this._pathTechnique;
    t2.bindTechnique(i2, { ...this._passParameters, origin: this._pathVerticalPlaneData.origin }, e2.bindParameters), this._pathVerticalPlaneData.draw(e2.rctx);
  }
  _updatePassParameters(e2) {
    if (!this._intersectsLineEnabled)
      return;
    const t2 = e2.bindParameters.camera;
    if (this._intersectsLineInfinite) {
      if (y$3(p$3(this._passParameters.intersectsLineSegment.origin, this._passParameters.intersectsLineSegment.vector), S$1), S$1.c0 = -Number.MAX_VALUE, !m$2(t2.frustum, S$1))
        return;
      p$4(S$1, this._passParameters.lineStartWorld), g(S$1, this._passParameters.lineEndWorld);
    } else
      r$6(this._passParameters.lineStartWorld, this._passParameters.intersectsLineSegment.origin), u$1(this._passParameters.lineEndWorld, this._passParameters.intersectsLineSegment.origin, this._passParameters.intersectsLineSegment.vector);
  }
  _requestRender() {
    this._context && this._context.requestRender();
  }
  get test() {
    return { passParameters: this._passParameters };
  }
};
e$7([y$2({ constructOnly: true })], D.prototype, "contrastControlEnabled", void 0), e$7([y$2({ constructOnly: true })], D.prototype, "_isDecoration", void 0), e$7([y$2({ constructOnly: true })], D.prototype, "renderCoordsHelper", void 0), D = e$7([c$2("esri.views.3d.support.LaserLineRenderer")], D);
const S$1 = a$1();
class c2 extends t$5 {
  constructor(e2) {
    super(e2), this._angleCutoff = C, this._style = {}, this._heightManifoldTarget = n$3(), this._heightManifoldEnabled = false, this._intersectsLine = v$2(), this._intersectsLineEnabled = false, this._intersectsLineInfinite = false, this._lineVerticalPlaneSegment = null, this._pathVerticalPlaneBuffers = null, this._pointDistanceLine = null, this.applyProperties(e2);
  }
  get testData() {
    return this._renderer;
  }
  createResources() {
    this._ensureRenderer();
  }
  destroyResources() {
    this._disposeRenderer();
  }
  updateVisibility() {
    this._syncRenderer(), this._syncHeightManifold(), this._syncIntersectsLine(), this._syncPathVerticalPlane(), this._syncLineVerticalPlane(), this._syncPointDistance();
  }
  get angleCutoff() {
    return this._angleCutoff;
  }
  set angleCutoff(e2) {
    this._angleCutoff !== e2 && (this._angleCutoff = e2, this._syncAngleCutoff());
  }
  get style() {
    return this._style;
  }
  set style(e2) {
    this._style = e2, this._syncStyle();
  }
  get heightManifoldTarget() {
    return this._heightManifoldEnabled ? this._heightManifoldTarget : null;
  }
  set heightManifoldTarget(t2) {
    null != t2 ? (r$6(this._heightManifoldTarget, t2), this._heightManifoldEnabled = true) : this._heightManifoldEnabled = false, this._syncRenderer(), this._syncHeightManifold();
  }
  set intersectsWorldUpAtLocation(e2) {
    if (null == e2)
      return void (this.intersectsLine = null);
    const t2 = this.view.renderCoordsHelper.worldUpAtPosition(e2, _);
    this.intersectsLine = h$2(e2, t2), this.intersectsLineInfinite = true;
  }
  get intersectsLine() {
    return this._intersectsLineEnabled ? this._intersectsLine : null;
  }
  set intersectsLine(e2) {
    null != e2 ? (p$2(e2, this._intersectsLine), this._intersectsLineEnabled = true) : this._intersectsLineEnabled = false, this._syncIntersectsLine(), this._syncRenderer();
  }
  get intersectsLineInfinite() {
    return this._intersectsLineInfinite;
  }
  set intersectsLineInfinite(e2) {
    this._intersectsLineInfinite = e2, this._syncIntersectsLineInfinite();
  }
  get lineVerticalPlaneSegment() {
    return this._lineVerticalPlaneSegment;
  }
  set lineVerticalPlaneSegment(e2) {
    this._lineVerticalPlaneSegment = null != e2 ? p$2(e2) : null, this._syncLineVerticalPlane(), this._syncRenderer();
  }
  get pathVerticalPlane() {
    return this._pathVerticalPlaneBuffers;
  }
  set pathVerticalPlane(e2) {
    this._pathVerticalPlaneBuffers = e2, this._syncPathVerticalPlane(), this._syncLineVerticalPlane(), this._syncPointDistance(), this._syncRenderer();
  }
  get pointDistanceLine() {
    return this._pointDistanceLine;
  }
  set pointDistanceLine(e2) {
    this._pointDistanceLine = null != e2 ? { origin: t$6(e2.origin), target: e2.target ? t$6(e2.target) : null } : null, this._syncPointDistance(), this._syncRenderer();
  }
  _syncRenderer() {
    this.attached && this.visible && (this._intersectsLineEnabled || this._heightManifoldEnabled || null != this._pointDistanceLine || null != this._pathVerticalPlaneBuffers) ? this._ensureRenderer() : this._disposeRenderer();
  }
  _ensureRenderer() {
    null == this._renderer && (this._renderer = new D({ renderCoordsHelper: this.view.renderCoordsHelper, contrastControlEnabled: true, _isDecoration: this.isDecoration }), this._renderer.viewingMode = this.view.state.viewingMode, this._syncStyle(), this._syncHeightManifold(), this._syncIntersectsLine(), this._syncIntersectsLineInfinite(), this._syncPathVerticalPlane(), this._syncLineVerticalPlane(), this._syncPointDistance(), this._syncAngleCutoff(), this.view._stage && this.view._stage.addRenderPlugin(this._renderer));
  }
  _syncStyle() {
    null != this._renderer && (this._renderer.setParameters(this._style), null != this._style.intersectsLineRadius && (this._renderer.intersectsLineRadius = this._style.intersectsLineRadius));
  }
  _syncAngleCutoff() {
    null != this._renderer && this._renderer.setParameters({ angleCutoff: this._angleCutoff });
  }
  _syncHeightManifold() {
    null != this._renderer && (this._renderer.heightManifoldEnabled = this._heightManifoldEnabled && this.visible, this._heightManifoldEnabled && (this._renderer.heightManifoldTarget = this._heightManifoldTarget));
  }
  _syncIntersectsLine() {
    null != this._renderer && (this._renderer.intersectsLineEnabled = this._intersectsLineEnabled && this.visible, this._intersectsLineEnabled && (this._renderer.intersectsLineSegment = this._intersectsLine));
  }
  _syncIntersectsLineInfinite() {
    null != this._renderer && (this._renderer.intersectsLineInfinite = this._intersectsLineInfinite);
  }
  _syncPathVerticalPlane() {
    null != this._renderer && (this._renderer.pathVerticalPlaneEnabled = null != this._pathVerticalPlaneBuffers && this.visible, null != this._pathVerticalPlaneBuffers && (this._renderer.pathVerticalPlaneBuffers = this._pathVerticalPlaneBuffers));
  }
  _syncLineVerticalPlane() {
    null != this._renderer && (this._renderer.lineVerticalPlaneEnabled = null != this._lineVerticalPlaneSegment && this.visible, null != this._lineVerticalPlaneSegment && (this._renderer.lineVerticalPlaneSegment = this._lineVerticalPlaneSegment));
  }
  _syncPointDistance() {
    if (null == this._renderer)
      return;
    const e2 = this._pointDistanceLine, t2 = null != e2;
    this._renderer.pointDistanceEnabled = t2 && null != e2.target && this.visible, t2 && (this._renderer.pointDistanceOrigin = e2.origin, null != e2.target && (this._renderer.pointDistanceTarget = e2.target));
  }
  _disposeRenderer() {
    null != this._renderer && this.view._stage && (this.view._stage.removeRenderPlugin(this._renderer), this._renderer = null);
  }
}
const _ = n$3();
class x extends a$2 {
  constructor(e2) {
    super(e2), this._material = null, this._texture = null, this._geometry = null, this._size = 3, this._color = r$9(1, 0, 1, 1), this._pixelSnappingEnabled = true, this._primitive = "square", this._outlineSize = 1, this._outlineColor = r$9(1, 1, 1, 1), this._elevationInfo = null, this.applyProperties(e2);
  }
  get geometry() {
    return this._geometry;
  }
  set geometry(e2) {
    this._geometry = e2, this.recreateGeometry();
  }
  get size() {
    return this._size;
  }
  set size(e2) {
    if (e2 !== this._size) {
      const t2 = this._preferredTextureSize;
      this._size = e2, t2 < this._preferredTextureSize ? this.recreate() : this._updateSizeAttribute();
    }
  }
  get color() {
    return this._color;
  }
  set color(e2) {
    D$1(e2, this._color) || (a$3(this._color, e2), this._updateMaterial());
  }
  get pixelSnappingEnabled() {
    return this._pixelSnappingEnabled;
  }
  set pixelSnappingEnabled(e2) {
    this._pixelSnappingEnabled !== e2 && (this._pixelSnappingEnabled = e2, this._updateMaterial());
  }
  get primitive() {
    return this._primitive;
  }
  set primitive(e2) {
    this._primitive !== e2 && (this._primitive = e2, this.recreate());
  }
  get outlineSize() {
    return this._outlineSize;
  }
  set outlineSize(e2) {
    e2 !== this._outlineSize && (this._outlineSize = e2, this._updateMaterial());
  }
  get outlineColor() {
    return this._outlineColor;
  }
  set outlineColor(e2) {
    D$1(e2, this._outlineColor) || (a$3(this._outlineColor, e2), this._updateMaterial());
  }
  get elevationInfo() {
    return this._elevationInfo;
  }
  set elevationInfo(e2) {
    this._elevationInfo = e2, this.recreateGeometry();
  }
  _updateMaterial() {
    this._material && this._material.setParameters(this._materialParameters);
  }
  _updateSizeAttribute() {
    const e2 = this.object;
    if (null == e2)
      return;
    const t2 = e2.geometries[0];
    if (null == t2)
      return;
    const i2 = t2.getMutableAttribute(e$4.SIZE).data, r2 = this._geometrySize;
    i2[0] = r2, i2[1] = r2, e2.geometryVertexAttributeUpdated(e2.geometries[0], e$4.SIZE);
  }
  get _materialParameters() {
    return { color: this._color, textureIsSignedDistanceField: true, sampleSignedDistanceFieldTexelCenter: a$4(this._primitive), distanceFieldBoundingBox: v, occlusionTest: false, outlineColor: this._outlineColor, outlineSize: this._outlineSize, textureId: this._texture?.id, polygonOffset: false, shaderPolygonOffset: 0, drawInSecondSlot: true, depthEnabled: false, pixelSnappingEnabled: this.pixelSnappingEnabled, isDecoration: this.isDecoration };
  }
  get _geometrySize() {
    return this._size / S;
  }
  createExternalResources() {
    this._texture = u(this._primitive, this._preferredTextureSize), this._material = new $(this._materialParameters);
    const e2 = this.view._stage;
    this._texture.load(e2.renderView.renderingContext), e2.add(this._texture);
  }
  destroyExternalResources() {
    if (this._texture) {
      this.view._stage.remove(this._texture), this._texture.dispose(), this._texture = null;
    }
    this._material = null;
  }
  createGeometries(e2) {
    const t2 = this._createRenderGeometry();
    null != t2 && e2.addGeometry(t2);
  }
  forEachExternalMaterial(e2) {
    this._material && e2(this._material);
  }
  get _preferredTextureSize() {
    return i$1(2 * this._geometrySize, 16, 128);
  }
  calculateMapBounds(e2) {
    const t2 = this.object?.geometries[0];
    if (!t2)
      return false;
    const i2 = t2.attributes.get(e$4.POSITION);
    return t$7(i2.data, this.view.renderCoordsHelper.spatialReference, y, this.view.spatialReference), c$4(e2, y), true;
  }
  _createRenderGeometry() {
    const { geometry: e2, _material: i2 } = this;
    if (null == e2 || null == i2)
      return null;
    const { renderCoordsHelper: r2, elevationProvider: s2 } = this.view, o2 = f$1(e2, s2, o$5.fromElevationInfo(this.elevationInfo), r2), l2 = o$3(c$5.get(), e2.x, e2.y, o2), u2 = c$5.get();
    t$7(l2, e2.spatialReference, u2, r2.spatialReference);
    const p2 = this._geometrySize;
    return ot(i2, null, u2, null, [p2, p2], [0, 0, 0, 1]);
  }
}
const S = o$6, v = [S / 2, S / 2, 1 - S / 2, 1 - S / 2], y = n$3();
export {
  A,
  C,
  c2 as c,
  v$1 as v,
  x
};
