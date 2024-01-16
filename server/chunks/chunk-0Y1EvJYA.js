import { mj as h$3, pv as P$1, um as K$1, cU as i, un as P, uo as b, up as z, uq as N, ur as ke, bo as e$2, bp as y$1, br as c, bf as c$1, bS as e$3, us as r$4, bP as t$2, t$ as n$2, ut as v, uu as u$3, lC as o$2, lK as o$3, lG as P$2, eu as e$4, uv as o$4, q4 as c$2, lk as q$1, uw as e$5, ux as o$5, hK as r$5, uy as e$6, uz as o$6, eP as o$7, uA as D, uB as i$1, uC as n$3, lF as o$8, uD as a$1, uE as a$2, hy as e$7, eQ as n$4, fw as n$5, lR as t$3, lT as r$6, lU as r$7, sx as E, lV as S$1, i5 as O$1, lZ as o$9, l$ as _$1, m0 as e$8, m2 as f, lP as r$8, lS as t$4, uF as t$5, hY as C$1, uG as c$3, n7 as i$2, m6 as A$1, as as l$3, ps as b$1, mJ as e$9, pq as s$1, mL as g$2, pE as j, uH as r$9, uI as Y$1, uJ as Q$1, uK as R$1, uL as U, uM as y$2, f8 as v$1, ng as t$6, pA as h$4, nh as M, hX as E$1, qU as O$2, cY as B$1, hV as r$a, uN as r$b, h as h$5, i3 as F$1, uO as s$2, uP as n$7, e5 as x, uQ as m$1, n3 as W, n4 as r$c, ki as e$a, uR as Te, uS as Ee, uT as A, bn as P$3, bJ as d$1, bK as C$2, eV as I, bD as u$4, em as e$b, kf as u$5, uU as s$3, uV as b$2, is as _$2, uW as u$6, uX as p$1, bX as k$1, bh as V, uY as H, uZ as _$3, u_ as c$5, bI as b$3, bb as s$4, g$ as P$4, b1 as s$5, hw as r$d, u$ as t$7, mu as A$2, gq as t$8, dU as t$9, aw as u$8, dP as u$9, h8 as u$a, k9 as a$4, sk as t$a } from "./chunk-KFNcxJaF.js";
import { n as n$6 } from "./chunk-7Z1hjEcP.js";
import { c as c$4, u as u$7, a as a$3 } from "./chunk-TwcdQFpe.js";
import { i as i$3 } from "./chunk-9RFzr6gv.js";
let r$3 = class r extends h$3 {
  constructor(t2) {
    super("PointCloudWorker", "transform", { transform: (t3) => this._getTransferList(t3) }, t2);
  }
  _getTransferList(t2) {
    const r3 = [t2.geometryBuffer];
    if (null != t2.primaryAttributeData && t2.primaryAttributeData.buffer && r3.push(t2.primaryAttributeData.buffer), null != t2.modulationAttributeData && t2.modulationAttributeData.buffer && r3.push(t2.modulationAttributeData.buffer), null != t2.filterAttributesData)
      for (const e2 of t2.filterAttributesData)
        null != e2 && e2.buffer && r3.push(e2.buffer);
    for (const e2 of t2.userAttributesData)
      e2.buffer && r3.push(e2.buffer);
    return r3;
  }
};
function t$1(e2, t2, g2) {
  for (let n2 = 0; n2 < t2.length; n2++)
    r$2[n2] = false, o$1[n2] = null;
  for (let r3 = 0; r3 < e2.length; r3++)
    n$1[r3] = false, l$2[r3] = null;
  for (let n2 = 0; n2 < t2.length; n2++) {
    const o2 = h$2(t2[n2], e2, g2);
    o2 >= 0 && (r$2[n2] = true, null != l$2[o2] ? l$2[o2].push(t2[n2]) : l$2[o2] = [t2[n2]]);
  }
  for (let l2 = 0; l2 < e2.length; l2++) {
    const r3 = h$2(e2[l2], t2, g2);
    r3 >= 0 && (n$1[l2] = true, null != o$1[r3] ? o$1[r3].push(e2[l2]) : o$1[r3] = [e2[l2]]);
  }
  const u2 = [];
  for (let r3 = 0; r3 < e2.length; r3++)
    null != l$2[r3] || n$1[r3] || u2.push({ load: [], remove: [e2[r3]] });
  for (let n2 = 0; n2 < t2.length; n2++)
    null != o$1[n2] || r$2[n2] || u2.push({ load: [t2[n2]], remove: [] });
  for (let n2 = 0; n2 < t2.length; n2++)
    null != o$1[n2] && (o$1[n2].length > 1 || o$1[n2][0] !== t2[n2]) && u2.push({ load: [t2[n2]], remove: o$1[n2] });
  for (let n2 = 0; n2 < e2.length; n2++)
    null != l$2[n2] && (l$2[n2].length > 1 || l$2[n2][0] !== e2[n2]) && u2.push({ load: l$2[n2], remove: [e2[n2]] });
  return u2;
}
const n$1 = [false], l$2 = [null], r$2 = [false], o$1 = [null];
function h$2(e2, t2, n2) {
  let l2 = e2;
  for (; l2 > 0; ) {
    const e3 = t2.indexOf(l2);
    if (e3 >= 0)
      return e3;
    l2 = n2.getParentId(l2);
  }
  return t2.indexOf(l2);
}
function g$1(t2, n2, l2) {
  return t2.sort((t3, r3) => {
    if (0 === t3.load.length && 0 === r3.load.length)
      return 0;
    if (0 === t3.load.length)
      return -1;
    if (0 === r3.load.length)
      return 1;
    if (0 === t3.remove.length && 0 === r3.remove.length) {
      const o2 = l2.getRenderCenter(t3.load[0]), h2 = l2.getRenderCenter(r3.load[0]);
      return P$1(o2, n2) - P$1(h2, n2);
    }
    if (0 === t3.remove.length)
      return -1;
    if (0 === r3.remove.length)
      return 1;
    if (1 === t3.load.length && 1 === r3.load.length) {
      const o2 = l2.getRenderCenter(t3.load[0]), h2 = l2.getRenderCenter(r3.load[0]);
      return P$1(o2, n2) - P$1(h2, n2);
    }
    if (1 === t3.load.length)
      return -1;
    if (1 === r3.load.length)
      return 1;
    {
      const o2 = l2.getRenderCenter(t3.remove[0]), h2 = l2.getRenderCenter(r3.remove[0]);
      return P$1(o2, n2) - P$1(h2, n2);
    }
  });
}
function u$2(e2, t2, n2) {
  for (let l2 = 0; l2 < e2.length; ++l2) {
    const r3 = e2[l2];
    r3.load.length > t2 && 1 === r3.remove.length && d(e2, r3, n2);
  }
}
function d(e2, t2, n2) {
  const l2 = [t2.remove[0]], r3 = [];
  for (; 1 === l2.length; ) {
    const e3 = l2.pop();
    r3.length = 0;
    for (let o2 = 0; o2 < t2.load.length; o2++) {
      let h2 = t2.load[o2], g2 = n2.getParentId(h2);
      for (; g2 !== e3; )
        h2 = g2, g2 = n2.getParentId(h2);
      let u2 = l2.indexOf(h2);
      u2 < 0 && (u2 = l2.length, l2.push(h2), r3.push([])), r3[u2].push(t2.load[o2]);
    }
  }
  t2.load = l2;
  for (let o2 = 0; o2 < l2.length; o2++)
    r3[o2].length > 1 ? e2.push({ remove: [l2[o2]], load: r3[o2] }) : l2[o2] = r3[o2][0];
}
class p {
  constructor(e2, t2, s2) {
    this._pages = [], this.pageSize = 0, this._nodeSR = null, this._renderSR = null, this._nodeSR = e2, this._renderSR = t2, this.pageSize = s2;
  }
  addPage(e2, t2, s2 = 0) {
    for (; this._pages.length < e2; )
      this._pages.push(null);
    a(t2, this._nodeSR, this._renderSR, s2), this._pages[e2] = { nodes: t2, parents: new Uint32Array(this.pageSize) }, g(this._pages, this.pageSize);
  }
  hasPage(e2) {
    return !!this._pages[e2];
  }
  getNode(e2) {
    const t2 = this.pageSize;
    return this._pages[u$1(e2, t2)].nodes[l$1(e2, t2)];
  }
  getRenderObb(e2) {
    const t2 = this.pageSize;
    return this._pages[u$1(e2, t2)].nodes[l$1(e2, t2)].obbInRenderSR;
  }
  getRenderCenter(e2) {
    return this.getRenderObb(e2).center;
  }
  setRenderObb(e2, t2) {
    const s2 = this.pageSize;
    K$1(t2, this._pages[u$1(e2, s2)].nodes[l$1(e2, s2)].obbInRenderSR);
  }
  getParentId(e2) {
    const t2 = this.pageSize;
    return this._pages[u$1(e2, t2)].parents[l$1(e2, t2)];
  }
  hasNodes(e2, t2) {
    const s2 = u$1(e2, this.pageSize), n2 = u$1(e2 + t2 - 1, this.pageSize);
    for (let i2 = s2; i2 <= n2; i2++)
      if (null == this._pages[i2])
        return false;
    return true;
  }
  forEachNodeId(e2) {
    for (let t2 = 0; t2 < this._pages.length; t2++) {
      const s2 = this._pages[t2];
      if (s2)
        for (let n2 = 0; n2 < s2.nodes.length; n2++)
          e2(t2 * this.pageSize + n2);
    }
  }
  createVisibilityTraverse() {
    const t2 = { index: this, queue: [], masks: [], tempAabb: i() };
    return (e2, s2) => h$1(t2, e2, s2);
  }
}
function h$1(e2, n2, i2) {
  const p2 = e2.index;
  if (!p2.hasNodes(0, 1))
    return;
  const h2 = e2.queue;
  h2.length = 0, h2.push(0);
  const a2 = e2.masks;
  for (a2.length = 0, a2.push(0); h2.length > 0; ) {
    const g2 = h2.pop();
    let l2 = a2.pop();
    const d2 = p2.getNode(g2), c2 = p2.getRenderObb(g2);
    let f2 = true;
    if (null != n2.clippingBox) {
      const i3 = 1 << n2.frustum.length;
      if (0 == (l2 & i3)) {
        const r3 = P(c2, e2.tempAabb);
        b(n2.clippingBox, r3) ? l2 |= i3 : z(n2.clippingBox, r3) || (f2 = false);
      }
    }
    for (let e3 = 0; e3 < n2.frustum.length && f2; e3++) {
      const t2 = 1 << e3;
      if (0 == (l2 & t2)) {
        const s2 = N(c2, n2.frustum[e3]);
        s2 > 0 ? f2 = false : s2 < 0 && (l2 |= t2);
      }
    }
    if (i2.predicate(g2, d2, f2)) {
      const e3 = d2.firstChild, t2 = d2.childCount;
      let s2 = false;
      const n3 = u$1(e3, p2.pageSize), o2 = u$1(e3 + t2 - 1, p2.pageSize);
      for (let r3 = n3; r3 <= o2; r3++)
        if (!p2.hasPage(r3)) {
          i2.pageMiss(g2, r3), s2 = true;
          break;
        }
      if (!s2)
        for (let i3 = 0; i3 < t2; i3++)
          h2.push(e3 + i3), a2.push(l2);
    }
  }
}
function a(e2, t2, s2, i2) {
  for (let o2 = 0; o2 < e2.length; o2++) {
    const r3 = e2[o2];
    ke(r3.obb, t2, r3.obbInRenderSR, s2, i2);
  }
}
function g(e2, t2) {
  const s2 = [0];
  for (; s2.length; ) {
    const n2 = s2.pop(), i2 = e2[u$1(n2, t2)].nodes[l$1(n2, t2)];
    for (let o2 = 0; o2 < i2.childCount; o2++) {
      const r3 = i2.firstChild + o2;
      null != e2[u$1(r3, t2)] && (e2[u$1(r3, t2)].parents[l$1(r3, t2)] = n2, s2.push(r3));
    }
  }
}
function u$1(e2, t2) {
  return e2 / t2 | 0;
}
function l$1(e2, t2) {
  return e2 % t2;
}
function t(t2) {
  const e2 = t2.renderer, n2 = e2?.type, o2 = e2?.toJSON() ?? null;
  let l2 = null, i2 = false;
  const a2 = t2.attributeStorageInfo;
  "point-cloud-unique-value" === n2 || "point-cloud-stretch" === n2 || "point-cloud-class-breaks" === n2 ? l2 = u(a2, e2.field) : "point-cloud-rgb" === n2 ? (l2 = r$1(a2, e2.field), i2 = null != l2) : (l2 = r$1(a2, "RGB"), i2 = null != l2);
  let s2 = null;
  return e2?.colorModulation && (s2 = u(a2, e2.colorModulation.field)), { rendererJSON: o2, isRGBRenderer: i2, primaryAttribute: l2, modulationAttribute: s2 };
}
function e$1(t2) {
  const e2 = t2.filters;
  return e2 ? e2.map((e3) => ({ filterJSON: e3.toJSON(), attributeInfo: u(t2.attributeStorageInfo, e3.field) })) : [];
}
function n(t2) {
  const e2 = t2?.pointSizeAlgorithm;
  return e2 && "splat" === e2.type ? e2 : null;
}
function o(t2) {
  const e2 = t2?.pointSizeAlgorithm;
  return e2 && "fixed-size" === e2.type ? e2 : null;
}
function l(t2) {
  const e2 = t2?.pointSizeAlgorithm;
  return !!e2?.type && "fixed-size" === e2.type;
}
function r$1(t2, e2) {
  for (const n2 of t2 ?? [])
    if (n2.name === e2 && null != n2.attributeValues && "UInt8" === n2.attributeValues.valueType && 3 === n2.attributeValues.valuesPerElement)
      return { name: e2, storageInfo: n2, useElevation: false };
  return null;
}
function u(t2, e2) {
  for (const n2 of t2 ?? [])
    if (n2.name === e2) {
      const t3 = "embedded-elevation" === n2.encoding;
      return t3 ? { name: e2, storageInfo: null, useElevation: t3 } : { name: e2, storageInfo: n2, useElevation: t3 };
    }
  return "elevation" === e2?.toLowerCase() ? { name: e2, storageInfo: null, useElevation: true } : null;
}
let e = class extends c$1 {
  constructor(r3) {
    super(r3), this.pointCloudMetadata = null;
  }
};
e$2([y$1({ constructOnly: true, clonable: "reference" })], e.prototype, "pointCloudMetadata", void 0), e = e$2([c("esri.views.3d.layers.i3s.PointGraphic")], e);
class h {
  constructor(e2) {
    this._context = e2, this._highlights = /* @__PURE__ */ new Set();
  }
  get empty() {
    return 0 === this._highlights.size;
  }
  destroy() {
    this._highlights = null;
  }
  add(t2) {
    const i2 = new s(t2);
    return this._highlights.add(i2), this._enableSet(i2), e$3(() => this._removeSet(i2));
  }
  _removeSet(e2) {
    this._disableSet(e2), this._highlights.delete(e2);
  }
  _enableSet(e2) {
    e2.enabled || (e2.enabled = true, this._context.forEachNode((t2) => this._enableSetForNode(e2, t2)));
  }
  _enableSetForNode(e2, t2) {
    if (!e2.enabled)
      return;
    const i2 = e2.ids.get(t2.id);
    i2 && i2.forEach((i3) => this._context.addHighlight(t2, i3, e2.id));
  }
  _disableSet(e2) {
    e2.enabled && (e2.enabled = false, this._context.forEachNode((t2) => this._disableSetForNode(e2, t2)));
  }
  _disableSetForNode(e2, t2) {
    e2.enabled || this._context.removeHighlight(t2, e2.id);
  }
  nodeAdded(e2) {
    this._highlights.forEach((t2) => this._enableSetForNode(t2, e2));
  }
  nodeRemoved(e2) {
    this._highlights.forEach((t2) => this._disableSetForNode(t2, e2));
  }
  removeAll() {
    this._highlights.forEach((e2) => this._disableSet(e2));
  }
}
class s {
  constructor(e2) {
    this.id = new r$4(t$2.Highlight), this.ids = /* @__PURE__ */ new Map(), this.enabled = false;
    for (const t2 of e2)
      null != t2 && this._add(t2.nodeId, t2.pointId);
  }
  _add(e2, t2) {
    const i2 = this.ids.get(e2);
    i2 ? i2.add(t2) : this.ids.set(e2, /* @__PURE__ */ new Set([t2]));
  }
}
class y extends n$2 {
  constructor() {
    super(...arguments), this.clipBox = i(v), this.useFixedSizes = false, this.useRealWorldSymbolSizes = false, this.scaleFactor = 1, this.minSizePx = 0, this.size = 0, this.sizePx = 0;
  }
  get fixedSize() {
    return this.drawScreenSpace ? this.sizePx : this.size;
  }
  get screenMinSize() {
    return this.useFixedSizes ? 0 : this.minSizePx;
  }
  get drawScreenSpace() {
    return this.useFixedSizes && !this.useRealWorldSymbolSizes;
  }
}
class O extends u$3 {
  constructor(e2, i2, o2) {
    super(e2), this.origin = e2, this.isLeaf = i2, this.splatSize = o2;
  }
}
function R(r3) {
  const a2 = new o$2(), n2 = r3.output === o$3.Color, c2 = r3.output === o$3.Depth, l2 = r3.output === o$3.Highlight, { vertex: f2, fragment: x2 } = a2;
  return a2.include(P$2, r3), a2.attributes.add(e$4.POSITION, "vec3"), a2.attributes.add(e$4.COLOR, "vec3"), f2.uniforms.add(new o$4("modelView", (e2, r4) => c$2(B, r4.camera.viewMatrix, q$1(B, e2.origin))), new e$5("proj", (e2, i2) => i2.camera.projectionMatrix), new o$5("screenMinMaxSize", (e2, i2, o2) => r$5(L, o2.useFixedSizes ? 0 : o2.minSizePx * i2.camera.pixelRatio, F(e2.isLeaf) * i2.camera.pixelRatio)), r3.useFixedSizes ? new e$6("pointScale", (e2, i2) => r$5(L, e2.fixedSize * i2.camera.pixelRatio, i2.camera.fullHeight)) : new o$5("pointScale", (e2, i2, o2) => r$5(L, e2.splatSize * o2.scaleFactor * i2.camera.pixelRatio, i2.camera.fullHeight / i2.camera.pixelRatio))), r3.clippingEnabled ? f2.uniforms.add(new o$6("clipMin", (e2, i2, o2) => o$7(_, o2.clipBox[0] - e2.origin[0], o2.clipBox[1] - e2.origin[1], o2.clipBox[2] - e2.origin[2])), new o$6("clipMax", (e2, i2, o2) => o$7(_, o2.clipBox[3] - e2.origin[0], o2.clipBox[4] - e2.origin[1], o2.clipBox[5] - e2.origin[2]))) : (f2.constants.add("clipMin", "vec3", [-D, -D, -D]), f2.constants.add("clipMax", "vec3", [D, D, D])), c2 ? (i$1(a2), n$3(a2), a2.varyings.add("depth", "float")) : r3.output !== o$3.Highlight && a2.varyings.add("vColor", "vec3"), f2.code.add(o$8`
    void main(void) {
      // Move clipped points outside of clipspace
      if (position.x < clipMin.x || position.y < clipMin.y || position.z < clipMin.z ||
        position.x > clipMax.x || position.y > clipMax.y || position.z > clipMax.z) {
        gl_Position = vec4(0.0,0.0,0.0,2.0);
        gl_PointSize = 0.0;
        return;
      }

      if (rejectBySlice(position)) {
        gl_Position = vec4(0.0,0.0,0.0,2.0);
        gl_PointSize = 0.0;
        return;
      }

      // Position in camera space
      vec4 camera = modelView * vec4(position, 1.0);

      float pointSize = pointScale.x;
      vec4 position = proj * camera;
     ${r3.drawScreenSize ? o$8`
      float clampedScreenSize = pointSize;` : o$8`
      float pointRadius = 0.5 * pointSize;
      vec4 cameraOffset = camera + vec4(0.0, pointRadius, 0.0, 0.0);
      vec4 positionOffset = proj * cameraOffset;
      float radius = abs(positionOffset.y - position.y);
      float viewHeight = pointScale.y;
      // screen diameter = (2 * r / w) * (h / 2)
      float screenPointSize = (radius / position.w) * viewHeight;
      float clampedScreenSize = clamp(screenPointSize, screenMinMaxSize.x, screenMinMaxSize.y);
      // Shift towards camera, to move rendered point out of terrain i.e. to
      // the camera-facing end of the virtual point when considering it as a
      // 3D sphere.
      camera.xyz -= normalize(camera.xyz) * pointRadius * clampedScreenSize / screenPointSize;
      position = proj * camera;`}

     gl_PointSize = clampedScreenSize;
     gl_Position = position;

     ${c2 ? o$8`depth = calculateLinearDepth(nearFar, camera.z);` : ""}
     ${n2 ? o$8`vColor = color;` : ""}
    }
  `), x2.include(a$1, r3), l2 && a2.include(a$2, r3), x2.code.add(o$8`
    void main(void) {
      vec2 vOffset = gl_PointCoord - vec2(0.5, 0.5);
      float r2 = dot(vOffset, vOffset);

      if (r2 > 0.25) {
        discard;
      }
      ${c2 ? o$8`fragColor = float2rgba(depth);` : ""}
      ${l2 ? o$8`outputHighlight();` : ""}
      ${n2 ? o$8`fragColor = vec4(vColor, 1.0);` : ""}
    }
  `), a2;
}
function F(e2) {
  return e2 ? 256 : 64;
}
const B = e$7(), _ = n$4(), L = n$5(), C = Object.freeze(Object.defineProperty({ __proto__: null, PointRendererDrawParameters: O, PointRendererPassParameters: y, build: R, getMaxPointSizeScreenspace: F }, Symbol.toStringTag, { value: "Module" }));
class m extends r$6 {
  constructor(e2, r3, i2) {
    super(e2, r3, i2);
  }
  initializeProgram(e2) {
    return new r$7(e2.rctx, m.shader.get().build(this.configuration), E);
  }
  initializePipeline() {
    return S$1({ depthTest: { func: O$1.LESS }, depthWrite: o$9, colorWrite: _$1, stencilWrite: this.configuration.hasOccludees ? e$8 : null, stencilTest: this.configuration.hasOccludees ? f : null });
  }
}
m.shader = new t$3(C, () => import("./chunk-AeNIoTDq.js"));
class r2 extends t$4 {
  constructor() {
    super(...arguments), this.output = o$3.Color, this.hasSlicePlane = false, this.drawScreenSize = false, this.useFixedSizes = false, this.hasOccludees = false, this.clippingEnabled = false;
  }
}
e$2([r$8({ count: o$3.COUNT })], r2.prototype, "output", void 0), e$2([r$8()], r2.prototype, "hasSlicePlane", void 0), e$2([r$8()], r2.prototype, "drawScreenSize", void 0), e$2([r$8()], r2.prototype, "useFixedSizes", void 0), e$2([r$8()], r2.prototype, "hasOccludees", void 0), e$2([r$8()], r2.prototype, "clippingEnabled", void 0), e$2([r$8({ constValue: true })], r2.prototype, "hasSliceInVertexProgram", void 0);
const Q = { positions: [new t$5(e$4.POSITION, 3, C$1.FLOAT, 0, 12)], colors: [new t$5(e$4.COLOR, 3, C$1.UNSIGNED_BYTE, 0, 3, true)] };
let Y = class extends c$3 {
  constructor(e2) {
    super(e2), this.type = i$2.PCL, this.isGround = false, this._passParameters = new y(), this._highlights = new h({ forEachNode: (e3) => this.forEachNode(e3), addHighlight: (e3, s2, t2) => this._addHighlight(e3, s2, t2), removeHighlight: (e3, s2) => this._removeHighlight(e3, s2) }), this.produces = /* @__PURE__ */ new Map([[A$1.OPAQUE_MATERIAL, (e3) => e3 !== o$3.Highlight || !this._highlights.empty]]), this.layerUid = "", this._slicePlaneEnabled = false, this._techniqueConfig = new r2(), this._nodes = new l$3();
  }
  initializeRenderContext(e2) {
    this._context = e2, e2.requestRender();
  }
  uninitializeRenderContext() {
  }
  intersect(e2, s2, t2, i$12) {
    const r3 = n$4(), f2 = n$4(), P$22 = n$4(), b$22 = n$4(), w = b$1(), A2 = e2.camera.perScreenPixelRatio / 2, I2 = e2.camera.near;
    e$9(f2, i$12, t2);
    const v2 = 1 / s$1(f2);
    g$2(f2, f2, v2), j(P$22, f2), r$9(w, f2[0], f2[1], f2[2], -P$1(f2, t2));
    const F2 = new ie(), C2 = new ie(), N2 = new Array(), T = i(), L2 = i(this._passParameters.clipBox);
    Y$1(L2, -t2[0], -t2[1], -t2[2], L2), this._nodes.forAll((o2) => {
      const a2 = o2.splatSize * this._passParameters.scaleFactor;
      let l2 = Q$1(o2.obb, w), u2 = R$1(o2.obb, w);
      l2 -= Z(a2, l2 + I2, this._passParameters, A2, o2.isLeaf), u2 -= Z(a2, u2 + I2, this._passParameters, A2, o2.isLeaf);
      const d2 = u2 < 0, p2 = null != F2.dist && null != C2.dist && F2.dist < l2 * v2 && C2.dist > u2 * v2;
      if (d2 || p2)
        return;
      const S = X(a2, u2 + I2, this._passParameters, A2, o2.isLeaf);
      if (!U(o2.obb, t2, f2, S))
        return;
      const x2 = S * S;
      P(o2.obb, T), Y$1(T, -t2[0], -t2[1], -t2[2], T);
      const z2 = !b(L2, T);
      e$9(b$22, o2.origin, t2);
      const E2 = o2.coordinates.length / 3;
      for (let n2 = 0; n2 < E2; n2++) {
        if (r3[0] = b$22[0] + o2.coordinates[3 * n2], r3[1] = b$22[1] + o2.coordinates[3 * n2 + 1], r3[2] = b$22[2] + o2.coordinates[3 * n2 + 2], z2 && !y$2(L2, r3))
          continue;
        const l3 = P$1(r3, f2), u3 = v$1(r3) - l3 * l3;
        if (u3 > x2)
          continue;
        let d3 = l3 + I2;
        const p3 = Z(a2, d3, this._passParameters, A2, o2.isLeaf);
        if (l3 - p3 < 0)
          continue;
        d3 -= p3;
        const m2 = X(a2, d3, this._passParameters, A2, o2.isLeaf);
        if (u3 > m2 * m2)
          continue;
        const g2 = (l3 - p3) * v2, S2 = (e3) => (e3.point = $(o2, n2, e3.point), e3.dist = g2, e3.normal = P$22, e3.node = o2, e3.pointId = n2, e3.layerUid = this.layerUid, e3);
        if ((null == F2.dist || g2 < F2.dist) && (null == s2 || s2(t2, i$12, g2)) && S2(F2), e2.options.store !== t$6.MIN && (null == C2.dist || g2 > C2.dist) && (null == s2 || s2(t2, i$12, g2)) && S2(C2), e2.options.store === t$6.ALL && (null == s2 || s2(t2, i$12, g2))) {
          const e3 = new ie();
          N2.push(S2(e3));
        }
      }
    });
    const H2 = (e3) => {
      const { layerUid: s3, node: t3, pointId: i2 } = e3;
      return new s$2(e3.point, s3, i2, () => this.createGraphic(t3, i2, e3.point));
    }, M$1 = (e3, s3) => {
      const t3 = H2(s3);
      e3.set(this.type, t3, s3.dist, s3.normal);
    };
    if (re(F2)) {
      const s3 = e2.results.min;
      (null == s3.dist || F2.dist < s3.dist) && M$1(s3, F2);
    }
    if (re(C2) && e2.options.store !== t$6.MIN) {
      const s3 = e2.results.max;
      (null == s3.dist || C2.dist > s3.dist) && M$1(s3, C2);
    }
    if (e2.options.store === t$6.ALL) {
      const s3 = h$4(t2, i$12);
      for (const t3 of N2) {
        const i2 = M(s3);
        M$1(i2, t3), e2.results.all.push(i2);
      }
    }
  }
  prepareTechnique(e2) {
    return 0 === this._nodes.length || e2.output !== o$3.Color && e2.output !== o$3.Depth && e2.output !== o$3.Highlight ? null : (this._nodes.forAll((s2) => {
      null == s2.vao && this._initNode(e2, s2);
    }), this._techniqueConfig.drawScreenSize = this._passParameters.drawScreenSpace, this._techniqueConfig.useFixedSizes = this._passParameters.useFixedSizes, this._techniqueConfig.hasSlicePlane = this._slicePlaneEnabled, this._techniqueConfig.hasOccludees = e2.bindParameters.hasOccludees, this._techniqueConfig.clippingEnabled = this._clippingEnabled, this._techniqueConfig.output = e2.output, this._context.techniqueRepository.releaseAndAcquire(m, this._techniqueConfig, this._technique));
  }
  renderNode(e2, s2) {
    const t2 = e2.rctx, i2 = t2.bindTechnique(s2, this._passParameters, e2.bindParameters), r3 = e2.output === o$3.Highlight;
    this._nodes.forAll((s3) => {
      0 === s3.coordinates.length || r3 && !s3.highlights || (i2.bindDraw(s3, e2.bindParameters, this._passParameters), t2.bindVAO(s3.vao), r3 ? this._renderHighlightFragments(t2, s3) : t2.drawArrays(E$1.POINTS, 0, s3.coordinates.length / 3));
    });
  }
  _renderHighlightFragments(e2, s2) {
    const t2 = s2.highlights;
    if (null == t2)
      return;
    let i2 = t2[0].component, r3 = i2 + 1;
    for (let o2 = 1; o2 < t2.length; o2++) {
      const s3 = t2[o2].component;
      if (s3 !== r3) {
        const t3 = r3 - i2;
        t3 > 0 && e2.drawArrays(E$1.POINTS, i2, t3), i2 = s3;
      }
      r3 = s3 + 1;
    }
    const n2 = r3 - i2;
    n2 > 0 && e2.drawArrays(E$1.POINTS, i2, n2);
  }
  set useFixedSizes(e2) {
    this._passParameters.useFixedSizes !== e2 && (this._passParameters.useFixedSizes = e2, this._requestRender());
  }
  get useFixedSizes() {
    return this._passParameters.useFixedSizes;
  }
  set scaleFactor(e2) {
    this._passParameters.scaleFactor !== e2 && (this._passParameters.scaleFactor = e2, this._requestRender());
  }
  get scaleFactor() {
    return this._passParameters.scaleFactor;
  }
  set minSizePx(e2) {
    this._passParameters.minSizePx !== e2 && (this._passParameters.minSizePx = e2, this._requestRender());
  }
  get minSizePx() {
    return this._passParameters.minSizePx;
  }
  set useRealWorldSymbolSizes(e2) {
    this._passParameters.useRealWorldSymbolSizes !== e2 && (this._passParameters.useRealWorldSymbolSizes = e2, this._requestRender());
  }
  get useRealWorldSymbolSizes() {
    return this._passParameters.useRealWorldSymbolSizes;
  }
  set size(e2) {
    this._passParameters.size !== e2 && (this._passParameters.size = e2, this._requestRender());
  }
  get size() {
    return this._passParameters.size;
  }
  set sizePx(e2) {
    this._passParameters.sizePx !== e2 && (this._passParameters.sizePx = e2, this._requestRender());
  }
  get sizePx() {
    return this._passParameters.sizePx;
  }
  set clippingBox(e2) {
    O$2(this._passParameters.clipBox, e2 || v);
  }
  get _clippingEnabled() {
    return !B$1(this._passParameters.clipBox, v, (e2, s2) => e2 === s2);
  }
  get slicePlaneEnabled() {
    return this._slicePlaneEnabled;
  }
  set slicePlaneEnabled(e2) {
    this._slicePlaneEnabled !== e2 && (this._slicePlaneEnabled = e2, this._requestRender());
  }
  addNode(e2) {
    this._nodes.push(e2), this._highlights.nodeAdded(e2), this._requestRender();
  }
  removeNode(e2) {
    let t2 = null;
    return this._nodes.filterInPlace((i2) => i2.id !== e2 || (t2 = i2, i2.vao = r$a(i2.vao), this._highlights.nodeRemoved(i2), false)), this._requestRender(), t2;
  }
  forEachNode(e2) {
    this._nodes.forAll(e2);
  }
  removeAll() {
    this._nodes.forAll((e2) => e2.vao = r$a(e2.vao)), this._highlights.removeAll(), this._nodes.clear(), this._requestRender();
  }
  highlight(e2) {
    return this._highlights.add(e2);
  }
  _addHighlight(e2, s2, t2) {
    e2.highlights = se(e2.highlights, s2, t2), this._requestRender();
  }
  _removeHighlight(e2, s2) {
    e2.highlights = te(e2.highlights, s2), this._requestRender();
  }
  _initNode(e2, s2) {
    const t2 = e2.rctx;
    s2.vao = new r$b(t2, E, Q, { positions: h$5.createVertex(t2, F$1.STATIC_DRAW, s2.coordinates), colors: h$5.createVertex(t2, F$1.STATIC_DRAW, s2.rgb) });
  }
  _requestRender() {
    this._context && this._context.requestRender();
  }
};
e$2([y$1({ constructOnly: true })], Y.prototype, "createGraphic", void 0), Y = e$2([c("esri.views.3d.layers.i3s.PointRenderer")], Y);
class J extends O {
  constructor(e2, s2, t2, i2, r3, n2, o2, a2, l2 = null, h2 = null) {
    super(t2, r3, s2), this.id = e2, this.obb = i2, this.coordinates = n2, this.rgb = o2, this.attributes = a2, this.pointIdFilterMap = l2, this.highlights = h2;
  }
}
function K(e2) {
  return e2.hasOwnProperty("splatSize");
}
function X(e2, s2, t2, i2, r3) {
  if (t2.drawScreenSpace)
    return t2.fixedSize * s2 * i2;
  const n2 = F(r3) * s2 * i2;
  return t2.useFixedSizes ? Math.min(t2.fixedSize / 2, n2) : t2.screenMinSize > 0 ? Math.min(Math.max(t2.screenMinSize * s2 * i2, e2 / 2), n2) : Math.min(e2 / 2, n2);
}
function Z(e2, s2, t2, i2, r3) {
  return t2.drawScreenSpace ? 0 : X(e2, s2, t2, i2, r3);
}
function $(e2, s2, t2) {
  return null == t2 && (t2 = n$4()), t2[0] = e2.origin[0] + e2.coordinates[3 * s2], t2[1] = e2.origin[1] + e2.coordinates[3 * s2 + 1], t2[2] = e2.origin[2] + e2.coordinates[3 * s2 + 2], t2;
}
function ee(e2) {
  return null != e2.component ? e2.component : -1;
}
function se(e2, s2, t2) {
  null == e2 && (e2 = []);
  const i2 = { component: s2, id: t2 };
  e2.push(i2);
  const r3 = ee(i2);
  let n2 = e2.length - 1;
  for (; n2 > 0 && r3 < ee(e2[n2 - 1]); )
    [e2[n2 - 1], e2[n2]] = [e2[n2], e2[n2 - 1]], --n2;
  return e2;
}
function te(e2, s2) {
  if (null == e2)
    return e2;
  const t2 = e2.filter((e3) => e3.id !== s2);
  return 0 === t2.length ? null : t2;
}
class ie {
  constructor() {
    this.node = null, this.pointId = null, this.point = null, this.dist = null, this.normal = null, this.layerUid = "";
  }
}
function re(e2) {
  return null != e2.dist && null != e2.point && null != e2.pointId && null != e2.node;
}
const me = 8, ge = b$1();
let fe = class extends i$3(n$6(u$9)) {
  constructor() {
    super(...arguments), this.type = "point-cloud-3d", this.slots = [A$1.OPAQUE_MATERIAL], this.maximumPointCount = 4e6, this.slicePlaneEnabled = false, this._renderer = null, this._rendererAdded = false, this._renderedNodes = /* @__PURE__ */ new Set(), this._nodeScales = /* @__PURE__ */ new Map(), this._updateViewNeeded = true, this._lodFactor = 1, this._maxLoggedBoxWarnings = 5, this._pageMultiplier = 1, this._nodeLoadEpoch = 0, this._indexQueue = [], this._workQueue = new Array(), this._idleQueue = new n$7(), this._indexPagesLoading = /* @__PURE__ */ new Map(), this._loadingNodes = /* @__PURE__ */ new Map(), this._recalcWork = true, this._layerIsVisible = false, this._codedDomainPopulationPromise = null, this._codedDomainPopulationAbortController = null, this._totalWork = 0, this._index = null, this._loadingInitNodePage = false, this._nodeIdArray = [], this.ignoresMemoryFactor = false;
  }
  get baseUrl() {
    return this.layer.parsedUrl.path;
  }
  get pointScale() {
    const e2 = n(this.layer?.renderer), t2 = 1;
    return null != e2?.scaleFactor ? e2.scaleFactor : t2;
  }
  get useRealWorldSymbolSizes() {
    const e2 = o(this.layer?.renderer), t2 = false;
    return null != e2?.useRealWorldSymbolSizes ? e2.useRealWorldSymbolSizes : t2;
  }
  get pointSize() {
    const e2 = o(this.layer?.renderer), t2 = 0;
    return null != e2?.size ? e2.size : t2;
  }
  get inverseDensity() {
    const e2 = 96;
    return this.layer?.renderer ? 1 * e2 / this.layer.renderer.pointsPerInch : 5;
  }
  get availableFields() {
    const e2 = t(this.layer), t$12 = /* @__PURE__ */ new Set();
    e2.primaryAttribute && t$12.add(e2.primaryAttribute.name), e2.modulationAttribute && t$12.add(e2.modulationAttribute.name);
    const i2 = e$1(this.layer);
    if (i2)
      for (const r3 of i2)
        r3.attributeInfo && t$12.add(r3.attributeInfo.name);
    if (this.layer.outFields)
      for (const r3 of x(this.layer.fieldsIndex, this.layer.outFields))
        t$12.add(r3);
    return Array.from(t$12);
  }
  get _clippingBox() {
    if (!this.view || !this.view.clippingArea)
      return null;
    const e2 = i(), t2 = this.view.renderSpatialReference;
    return m$1(this.view.clippingArea, e2, t2) ? e2 : null;
  }
  get _elevationOffset() {
    const e2 = this.layer && this.layer.elevationInfo;
    if (e2 && "absolute-height" === e2.mode) {
      const t2 = W(this.layer.spatialReference), i2 = r$c(e2.unit);
      return (e2.offset ?? 0) * i2 / t2;
    }
    return 0;
  }
  initialize() {
    const e2 = this.view.resourceController, t2 = Pe(e2);
    this._worker = new r$3(t2), this.addResolvingPromise(this._worker.promise), this._tmpPoint = e$a(0, 0, 0, this.layer.spatialReference), Te(this.layer), Ee(this.layer, this.view), this._indexRequester = e2.createStreamDataRequester(A.I3S_INDEX), this._dataRequester = e2.createStreamDataRequester(A.I3S_DATA), this._initRenderer();
    const i2 = this._initNodePages(), r3 = this.view.resourceController.memoryController;
    this._memCache = r3.newCache(`pcl-${this.layer.uid}`), this._updatingHandles.add(() => this._clippingBox, () => this._setUpdateViewNeeded(), P$3), this._updatingHandles.add(() => this._elevationOffset, () => this._elevationOffsetChanged(), P$3), this._updatingHandles.add(() => this.layer.renderer, () => this._rendererChanged(), P$3), this._updatingHandles.add(() => this.layer.filters, () => this._reload(), P$3), this._updatingHandles.add(() => this.layer.outFields, () => this._reload(), P$3), this._updatingHandles.add(() => this.layer.effectiveScaleRange, () => this._setUpdateViewNeeded()), this._updatingHandles.add(() => this.view.state.contentCamera, () => this._setUpdateViewNeeded()), this.addHandles([this.view.basemapTerrain.on("scale-change", (e3) => this._scaleUpdateHandler(e3)), d$1(() => this.view.quality, () => this._setUpdateViewNeeded(), C$2)]), this.addResolvingPromise(i2), this.when(() => {
      this.addHandles([e2.scheduler.registerTask(I.POINT_CLOUD_LAYER, this), e2.scheduler.registerIdleStateCallbacks(() => this._idleBegin(), () => this._idleEnd()), this._updatingHandles.add(() => this.suspended, (e3) => {
        e3 ? this._clearNodeState() : this._setUpdateViewNeeded();
      }, P$3)]);
    }, () => {
      this._updatingHandles.removeAll(), this.removeAllHandles();
    });
  }
  _setUpdateViewNeeded() {
    this._updateViewNeeded = true, this._updateLoading();
  }
  destroy() {
    this.cancelLoading(), this._worker = u$4(this._worker), this._destroyRenderer(), this._memCache = u$4(this._memCache), this._codedDomainPopulationAbortController = e$b(this._codedDomainPopulationAbortController), this._codedDomainPopulationPromise = null;
  }
  _initRenderer() {
    this._renderer = new Y({ createGraphic: (e2, t2, i2) => this._createGraphic(e2, t2, i2) }), this._renderer.layerUid = this.layer.uid, this._updatingHandles.add(() => this._clippingBox, (e2) => this._renderer.clippingBox = e2, P$3), this._updatingHandles.add(() => this.suspended, (e2) => this._setPointsVisible(!e2), P$3), this._updatingHandles.add(() => this.pointScale, (e2) => this._renderer.scaleFactor = e2, P$3), this._renderer.minSizePx = Math.sqrt(2), this._updatingHandles.add(() => this.useRealWorldSymbolSizes, (e2) => this._renderer.useRealWorldSymbolSizes = e2, P$3), this._updatingHandles.add(() => this.pointSize, (e2) => {
      const t2 = u$a(e2);
      this._renderer.size = e2, this._renderer.sizePx = t2;
    }, P$3), this._updatingHandles.add(() => this.slicePlaneEnabled, (e2) => this._renderer.slicePlaneEnabled = e2, P$3), this._updatingHandles.add(() => this.inverseDensity, () => this._setUpdateViewNeeded(), P$3), this._updatingHandles.add(() => this.maximumPointCount, () => this._setUpdateViewNeeded(), P$3), this._updatingHandles.add(() => this.view.qualitySettings.sceneService.pointCloud.lodFactor, (e2) => {
      this._lodFactor = e2, this._setUpdateViewNeeded();
    }, P$3);
  }
  _destroyRenderer() {
    this._renderer.removeAll(), this._setPointsVisible(false);
  }
  _createGraphic(e$12, t2, i2) {
    const r3 = null != e$12.pointIdFilterMap ? e$12.pointIdFilterMap[t2] : t2, s2 = this.view.computeMapPointFromVec3d(i2), o2 = this._createGraphicAttributes(e$12, r3);
    return new e({ pointCloudMetadata: { nodeId: e$12.id, pointIndexInNode: t2, attributePointIndexInNode: r3, epoch: this._nodeLoadEpoch }, geometry: s2, attributes: o2, layer: this.layer, sourceLayer: this.layer });
  }
  _createGraphicAttributes(e2, t2) {
    const i2 = {};
    for (const r3 of e2.attributes)
      this._encodeGraphicAttribute(r3.attributeInfo, r3.values, t2, i2);
    return i2;
  }
  _encodeGraphicAttribute(e2, t2, i2, r3) {
    const s2 = e2.storageInfo?.attributeValues, o2 = s2?.valuesPerElement ?? 1;
    if (1 === o2)
      r3[e2.name] = t2[i2];
    else if ("UInt8" === s2?.valueType && o2 <= 4) {
      let s3 = 0;
      const n2 = i2 * o2;
      for (let e3 = n2; e3 < n2 + o2; e3++)
        s3 = (s3 << 8) + t2[e3];
      r3[e2.name] = s3;
    } else
      r3[e2.name] = void 0;
  }
  _setPointsVisible(e2) {
    e2 && !this._rendererAdded ? (this.view._stage.addRenderPlugin(this._renderer), this._rendererAdded = true) : !e2 && this._rendererAdded && (this.view._stage.removeRenderPlugin(this._renderer), this._rendererAdded = false);
  }
  _rendererChanged() {
    this._renderer.useFixedSizes = l(this.layer.renderer), this._reload();
  }
  _reload() {
    this._clearNodeState(), this._memCache.clear(), this._setUpdateViewNeeded();
  }
  _elevationOffsetChanged() {
    this._clearNodeState(), this._memCache.clear(), this._initNodePages();
  }
  _scaleUpdateHandler(e2) {
    const t2 = this.layer.effectiveScaleRange;
    u$5(t2.minScale, t2.maxScale) ? s$3(e2.extent, e2.spatialReference, we, this.layer.spatialReference) && (this._nodeScales.forEach((t3, i2) => {
      if (!this._renderedNodes.has(i2))
        return void this._nodeScales.delete(i2);
      const r3 = this._index.getNode(i2);
      b$2(we, r3.obb.center) && this._nodeScales.set(i2, e2.scale);
    }), this._setUpdateViewNeeded()) : this._nodeScales.clear();
  }
  _displayNodes(e2) {
    this._workQueue = t$1([...this._renderedNodes], e2, this._index), g$1(this._workQueue, this.view.state.contentCamera.viewForward, this._index), u$2(this._workQueue, me, this._index), this._updateQueues(), this._totalWork = this._computeWork(), this._updateLoading(), this._layerIsVisible = e2.length > 0 || this._loadingInitNodePage, this.notifyChange("suspended");
  }
  cancelLoading() {
    this._cancelNodeLoading(), this._cancelIndexLoading();
  }
  _cancelNodeLoading() {
    const e2 = new Array();
    this._loadingNodes.forEach(({ abortController: t2 }) => e2.push(t2)), this._loadingNodes.clear();
    for (const t2 of e2)
      t2.abort();
    this._workQueue = [], this._idleQueue.cancelAll(), this._totalWork = this._computeWork(), this._updateLoading();
  }
  _updateQueues() {
    const e2 = /* @__PURE__ */ new Set();
    this._workQueue.forEach((t3) => t3.load.forEach((t4) => e2.add(t4)));
    const t2 = new Array(), i2 = /* @__PURE__ */ new Map();
    this._loadingNodes.forEach((r3, s2) => {
      e2.has(s2) ? i2.set(s2, r3) : t2.push(r3);
    }), this._loadingNodes = i2;
    for (const { abortController: r3 } of t2)
      r3.abort();
    this._workQueue = this._workQueue.filter((e3) => {
      for (const t3 of e3.load)
        if (this._loadingNodes.has(t3))
          return this._recalcWork = true, false;
      return true;
    }), this._totalWork = this._computeWork(), this._updateLoading();
  }
  _cancelIndexLoading() {
    this._indexQueue = [], this._indexPagesLoading.forEach(({ abortController: e2 }) => e2.abort()), this._indexPagesLoading.clear(), this._totalWork = this._computeWork(), this._updateLoading();
  }
  _clearNodeState() {
    this._nodeLoadEpoch++, this._renderedNodes.forEach((e2) => this._removeFromRenderer(e2)), this._cancelNodeLoading();
  }
  _idleBegin() {
    this._setUpdateViewNeeded();
  }
  _idleEnd() {
    this._setUpdateViewNeeded();
  }
  get running() {
    return this.suspended ? this._updateViewNeeded : this._updateViewNeeded || this._indexQueue.length > 0 || this._workQueue.length > 0 || this._idleQueue.running;
  }
  runTask(e2) {
    if (this.suspended) {
      if (this._updateViewNeeded) {
        this._updateViewNeeded = false;
        const e3 = this._isRootNodeVisible();
        e3 !== this._layerIsVisible && (this._layerIsVisible = e3, this.notifyChange("suspended")), this._updateLoading();
      }
    } else {
      for (e2.run(() => this._updateWorkQueues()); this._indexQueue.length > 0 && e2.run(() => this._processIndexQueue()); )
        ;
      this._processWorkQueue(e2), this._idleQueue.runTask(e2);
    }
  }
  _processIndexQueue() {
    const e2 = this._indexQueue.shift(), t2 = this._loadNodePage(e2);
    return this._indexPagesLoading.set(e2, t2), t2.promise.then((t3) => {
      this._index.addPage(e2, t3, this._elevationOffset), this._setUpdateViewNeeded();
    }).then(() => {
      this._indexPagesLoading.delete(e2);
    }, () => {
      this._indexPagesLoading.delete(e2);
    }), true;
  }
  _processWorkQueue(e2) {
    for (; !e2.done; ) {
      const t2 = this._scheduleWorkEntry();
      if (null == t2)
        return void e2.madeProgress();
      this._processWorkEntry(t2), e2.madeProgress();
    }
  }
  _scheduleWorkEntry() {
    let e2 = this._workQueue.length;
    for (; e2--; ) {
      const e3 = this._workQueue.shift();
      if (!e3.remove.find((e4) => !this._renderedNodes.has(e4)))
        return e3;
      this._workQueue.push(e3);
    }
    return null;
  }
  _processWorkEntry(e2) {
    if (0 !== e2.load.length)
      Promise.all(e2.load.map((e3) => {
        const t2 = new AbortController(), i2 = this._memCache.pop(e3.toString());
        return null != i2 ? this._loadingNodes.set(e3, { abortController: t2, promise: Promise.resolve(i2) }) : this._loadingNodes.has(e3) || this._loadingNodes.set(e3, { abortController: t2, promise: this._loadNode(e3, t2.signal) }), this._loadingNodes.get(e3).promise;
      })).then((t2) => {
        for (let i2 = 0; i2 < e2.load.length; i2++)
          if (t2[i2]) {
            const r3 = this._setupRendererData(e2.load[i2], t2[i2]);
            this._addToRenderer(r3);
          }
        for (const i2 of e2.remove)
          this._removeFromRenderer(i2);
      }).catch(() => {
      }).then(() => {
        for (const t2 of e2.load)
          this._loadingNodes.delete(t2);
        this._updateLoading(), this._recalcWork && !this._idleQueue.running && 0 === this._indexQueue.length && 0 === this._loadingNodes.size && (this._recalcWork = false, this._setUpdateViewNeeded());
      }), this._updateLoading();
    else
      for (const t2 of e2.remove)
        this._removeFromRenderer(t2);
  }
  async _populateClassCodeCodedDomain(e2, t2) {
    const r3 = "CLASS_CODE", s2 = this.layer.fieldsIndex.get(r3);
    if (!s2 || s2.domain)
      return;
    if (!e2.includes(s2.name))
      return;
    const o2 = await _$2(this.layer.queryCachedStatistics(r3, { signal: t2 }));
    if (false === o2.ok)
      return;
    const n2 = o2.value?.stats?.labels?.labels;
    n2 && Array.isArray(n2) && (s2.domain = new u$6({ name: "CLASS_CODE", codedValues: n2.map((e3) => new p$1({ code: e3.value, name: e3.label })) }));
  }
  async prepareFetchPopupFeatures(e2) {
    return this._codedDomainPopulationPromise || (this._codedDomainPopulationAbortController = new AbortController(), this._codedDomainPopulationPromise = this._populateClassCodeCodedDomain(e2, this._codedDomainPopulationAbortController.signal).then(() => {
      this._codedDomainPopulationAbortController = null;
    })), this._codedDomainPopulationPromise;
  }
  async whenGraphicAttributes(e2, i2) {
    const s2 = this._splitGraphicsPerNode(e2), o2 = this.layer.attributeStorageInfo, n2 = i2.map((e3) => u(o2, e3)).filter(k$1), a2 = async (e3, t2) => {
      const i3 = this._index.getNode(t2);
      await a$4(n2, async (t3) => {
        const r3 = t3.useElevation ? await this._loadElevationAttributeFromGeometry(i3.resourceId) : await this._loadAndParseAttribute(i3, t3);
        if (r3) {
          for (const i4 of e3)
            if (this._isValidPointGraphic(i4)) {
              const e4 = i4.pointCloudMetadata.attributePointIndexInNode;
              this._encodeGraphicAttribute(t3, r3, e4, i4.attributes);
            }
        }
      });
    }, d2 = [];
    return s2.forEach((e3, t2) => {
      d2.push(a2(e3, t2));
    }), await Promise.allSettled(d2), e2;
  }
  _isValidPointGraphic(e$12) {
    return e$12 instanceof e && e$12.pointCloudMetadata?.epoch === this._nodeLoadEpoch;
  }
  _splitGraphicsPerNode(e2) {
    const t2 = /* @__PURE__ */ new Map();
    for (const i2 of e2) {
      if (!this._isValidPointGraphic(i2))
        continue;
      const e3 = i2.pointCloudMetadata, r3 = t2.get(e3.nodeId);
      r3 ? r3.push(i2) : t2.set(e3.nodeId, [i2]);
    }
    return t2;
  }
  async _loadAndParseAttribute(e2, t2) {
    const i2 = await this._loadAttribute(e2.resourceId, t2, null);
    return null != i2 ? c$4({ attributeInfo: t2, buffer: i2 }, null, e2.vertexCount) : null;
  }
  async _loadElevationAttributeFromGeometry(e2) {
    const t2 = this.layer.store.defaultGeometrySchema, i2 = u$7(t2, await this._loadGeometry(e2, null));
    return a$3(i2, i2.length / 3);
  }
  highlight(e2) {
    if (!e2)
      return e$3();
    const t2 = V.isCollection(e2) ? e2.toArray() : Array.isArray(e2) ? e2 : [e2];
    return this._renderer.highlight(t2.map((e3) => this._graphicToPointDefinition(e3)));
  }
  _graphicToPointDefinition(e2) {
    if (!this._isValidPointGraphic(e2))
      return null;
    const { nodeId: t2, pointIndexInNode: i2 } = e2.pointCloudMetadata;
    return null != t2 && null != i2 ? { nodeId: t2, pointId: i2 } : null;
  }
  _computeWork() {
    let e2 = 0;
    for (const t2 of this._workQueue)
      e2 += t2.load.length + t2.remove.length;
    return e2 += this._loadingNodes.size, e2 += (this._indexQueue.length + this._indexPagesLoading.size) * this._index.pageSize, e2 += this._loadingInitNodePage ? 100 : 0, e2 += this._updateViewNeeded ? 100 : 0, e2;
  }
  get updatingProgressValue() {
    if (this.suspended)
      return this._updateViewNeeded ? 0 : 1;
    const e2 = this._computeWork();
    return 1 - Math.min(this._totalWork, e2) / this._totalWork;
  }
  _updateLoading() {
    this.notifyChange("updating"), this.notifyChange("updatingProgressValue");
  }
  canResume() {
    return super.canResume() && this._layerIsVisible;
  }
  isUpdating() {
    return this.suspended ? this._updateViewNeeded : this._computeWork() > 0;
  }
  _initNodePages() {
    const e2 = this.layer.store.index, t2 = e2.nodesPerPage || e2.nodePerIndexBlock;
    return this._index = new p(this.layer.spatialReference, this.view.renderCoordsHelper.spatialReference, t2), this._cancelIndexLoading(), this._traverseVisible = this._index.createVisibilityTraverse(), this._loadingInitNodePage = true, this._layerIsVisible = true, this.notifyChange("suspended"), this._updateLoading(), this._pageMultiplier = null != e2.nodesPerPage ? 1 : e2.nodePerIndexBlock, this._loadNodePage(0).promise.then((e3) => {
      this._index.addPage(0, e3, this._elevationOffset), this._loadingInitNodePage = false, this._setUpdateViewNeeded();
    });
  }
  _loadNodePage(e2) {
    const t2 = new AbortController(), i2 = `${this.baseUrl}/nodepages/${e2 * this._pageMultiplier}`;
    return { promise: this._requestNodePage(i2, t2.signal).then((t3) => t3.nodes.map((t4, i3) => ({ resourceId: null != t4.resourceId ? t4.resourceId : e2 * this._index.pageSize + i3, obb: t4.obb, obbInRenderSR: H(), firstChild: t4.firstChild, childCount: t4.childCount, vertexCount: t4.vertexCount ?? t4.pointCount, lodThreshold: t4.lodThreshold ?? t4.effectiveArea }))), abortController: t2 };
  }
  _updateWorkQueues() {
    if (!this._updateViewNeeded)
      return false;
    const e2 = this.view.quality;
    let t2 = this.inverseDensity / this._lodFactor * e2;
    const i2 = this.maximumPointCount * this._lodFactor * e2;
    let r3 = this._computeNodesForMinimumDensity(t2), s2 = this._computePointCount(r3), o2 = Math.sqrt(s2 / (0.75 * i2));
    for (; s2 > i2; )
      t2 *= o2, r3 = this._computeNodesForMinimumDensity(t2), s2 = this._computePointCount(r3), o2 = Math.sqrt(2);
    return this._displayNodes(r3), this._updateViewNeeded = false, this._updateLoading(), true;
  }
  _computePointCount(e2) {
    let t2 = 0;
    for (let i2 = 0; i2 < e2.length; i2++) {
      const r3 = this._index.getNode(e2[i2]);
      r3 && (t2 += r3.vertexCount);
    }
    return t2;
  }
  _isRootNodeVisible() {
    let e2 = false;
    return this._traverseVisible({ frustum: this.view.state.contentCamera.frustum, clippingBox: this._clippingBox }, { predicate: (t2, i2, r3) => (e2 = r3, false), pageMiss: () => {
    } }), e2;
  }
  _computeNodesForMinimumDensity(e2) {
    const t2 = this.view.state.contentCamera, i2 = t2.frustum, r3 = this._clippingBox, s2 = t2.viewForward, o2 = P$1(s2, t2.eye), n2 = _$3(s2, -o2, ge), a2 = t2.perScreenPixelRatio / 2, d2 = e2 * e2, l2 = this._nodeIdArray;
    l2.length = 0;
    const { minScale: h2, maxScale: u2 } = c$5(this.layer), p2 = 0 === h2 && 0 === u2 ? (e3) => l2.push(e3) : (e3) => {
      const t3 = this._getScale(e3);
      t$a(t3, h2, u2) && l2.push(e3);
    };
    return this._traverseVisible({ frustum: i2, clippingBox: r3 }, { predicate: (e3, t3, i3) => {
      if (!i3)
        return false;
      if (0 === t3.childCount)
        return p2(e3), false;
      const r4 = this._index.getRenderObb(e3);
      return !(this._computeAveragePixelArea(r4, t3.lodThreshold, t3.vertexCount, n2, a2) <= d2) || (p2(e3), false);
    }, pageMiss: (e3, t3) => {
      p2(e3), this._indexQueue.includes(t3) || this._indexQueue.push(t3);
    } }), l2;
  }
  _getScale(e2) {
    let t2 = this._nodeScales.get(e2);
    if (null == t2) {
      const i2 = this._index.getNode(e2).obb.center;
      this._tmpPoint.x = i2[0], this._tmpPoint.y = i2[1], this._tmpPoint.z = i2[2], t2 = this.view.basemapTerrain.getScale(this._tmpPoint), this._nodeScales.set(e2, t2);
    }
    return t2;
  }
  _computeAveragePixelArea(e2, t2, i2, r3, s2) {
    const o2 = 1e-7, n2 = Math.max(o2, Q$1(e2, r3));
    return t2 / (n2 * n2) / (4 * s2 * s2) / i2;
  }
  _loadNode(e2, t2) {
    try {
      return this._loadNodeAsync(e2, t2);
    } catch (i2) {
      throw b$3(i2) || s$4.getLogger(this).error(i2), i2;
    }
  }
  async _loadAdditionalUserAttributes(e2, i2, r3) {
    const s2 = this.layer.outFields;
    if (!s2)
      return [];
    const o2 = x(this.layer.fieldsIndex, s2), n2 = new Set(e2.map((e3) => null != e3 ? e3.name : null)), a2 = this.layer.attributeStorageInfo, d2 = [];
    for (const t2 of o2) {
      if (n2.has(t2))
        continue;
      const e3 = u(a2, t2);
      e3 && d2.push(i2(e3));
    }
    const l2 = await P$4(d2);
    return s$5(r3), l2.filter(k$1);
  }
  async _loadNodeAsync(e2, t$12) {
    const i2 = this._index.getNode(e2), r3 = t(this.layer), s2 = e$1(this.layer), o2 = i2.resourceId, n2 = async (e3) => {
      if (!e3)
        return null;
      if (e3.useElevation)
        return { attributeInfo: e3, buffer: null };
      const i3 = await this._loadAttribute(o2, e3, t$12);
      return null != i3 ? { attributeInfo: e3, buffer: i3 } : null;
    };
    return this._idleQueue.push(async () => {
      const i3 = this._loadGeometry(o2, t$12), { primaryAttribute: a2, modulationAttribute: d2 } = r3, l2 = n2(a2), h2 = n2(d2), p2 = s2.map((e3) => e3.attributeInfo), c2 = p2.map((e3) => n2(e3)), _2 = this._loadAdditionalUserAttributes([a2, d2, ...p2], n2, t$12), [m2, g2, f2, y2, b2] = await Promise.all([i3, l2, h2, Promise.all(c2), _2]);
      s$5(t$12);
      const w = { geometryBuffer: m2, primaryAttributeData: g2, modulationAttributeData: f2, filterAttributesData: y2, userAttributesData: b2, schema: this.layer.store.defaultGeometrySchema, rendererInfo: r3, filterInfo: s2, obb: this._index.getRenderObb(e2), elevationOffset: this._elevationOffset, inSR: this.layer.spatialReference.toJSON(), outSR: this.view.renderCoordsHelper.spatialReference.toJSON() };
      return this._worker.invoke(w, t$12);
    }, t$12);
  }
  async _loadGeometry(e2, t2) {
    return this._requestData(`${this.baseUrl}/nodes/${e2}/geometries/0`, t2);
  }
  async _loadAttribute(e2, t2, i2) {
    if (!t2?.storageInfo)
      return null;
    const r3 = t2.storageInfo.key;
    return this._requestData(`${this.baseUrl}/nodes/${e2}/attributes/${r3}`, i2);
  }
  _requestNodePage(e2, t2) {
    const i2 = { f: "json", token: this.layer.apiKey };
    return this._indexRequester.request(e2, "json", { query: i2, signal: t2 });
  }
  _requestData(e2, t2) {
    return this._dataRequester.request(e2, "binary", { query: { token: this.layer.apiKey }, signal: t2 });
  }
  _removeFromRenderer(e2) {
    if (this._renderedNodes.has(e2)) {
      const t2 = this._renderer.removeNode(e2);
      this._renderedNodes.delete(e2), this._nodeScales.delete(e2), this._memCache.put(t2.id.toString(), t2, be(t2));
    }
  }
  _addToRenderer(e2) {
    this._renderedNodes.has(e2.id) || (this._renderedNodes.add(e2.id), this._renderer.addNode(e2));
  }
  _setupRendererData(e2, t2) {
    const i2 = this._index.getNode(e2), r3 = Math.sqrt(i2.lodThreshold / i2.vertexCount), s2 = this._index.getRenderObb(e2);
    if (K(t2))
      return t2.splatSize = r3, t2.obb = s2, r$d(t2.origin, t2.obb.center), t2;
    const o2 = 0.01 * Math.max(s2.halfSize[0], s2.halfSize[1], s2.halfSize[2]);
    if (t2.obb.halfSize[0] > s2.halfSize[0] + o2 || t2.obb.halfSize[1] > s2.halfSize[1] + o2 || t2.obb.halfSize[2] > s2.halfSize[2] + o2) {
      if (this._maxLoggedBoxWarnings > 0) {
        const i3 = (e3) => `[${e3.halfSize[0]}, ${e3.halfSize[1]}, ${e3.halfSize[2]}]`;
        s$4.getLogger(this).warn(`Node ${e2} reported bounding box too small. got ${i3(s2)} but points cover ${i3(t2.obb)}`), 0 == --this._maxLoggedBoxWarnings && s$4.getLogger(this).warn("  Too many bounding box errors, stopping reporting for this layer.");
      }
      this._index.setRenderObb(e2, t2.obb);
    }
    return new J(e2, r3, t$7(s2.center), s2, 0 === i2.childCount, t2.points, t2.rgb, t2.attributes, t2.pointIdFilterMap);
  }
  get usedMemory() {
    let e2 = 0;
    return this._renderer.forEachNode((t2) => {
      e2 += Ne, e2 += A$2(t2.coordinates);
      for (const i2 of t2.attributes) {
        const t3 = i2.values;
        t$8(t3.buffer) && (e2 += A$2(t3));
      }
    }), e2;
  }
  get unloadedMemory() {
    const e2 = this._renderedNodes.size;
    if (e2 < 4)
      return 0;
    const t2 = [...this._renderedNodes].reduce((e3, t3) => e3 + this._index.getNode(t3).vertexCount);
    let i2 = this._loadingNodes.size;
    for (let r3 = 0; r3 < this._workQueue.length; r3++)
      i2 += this._workQueue[r3].load.length, i2 -= this._workQueue[r3].remove.length;
    if (i2 < 0)
      return 0;
    return i2 * t2 / e2 * ((this.usedMemory - e2 * Ne) / t2) + i2 * Ne;
  }
  get performanceInfo() {
    return { nodes: this._renderedNodes.size, displayedNumberOfFeatures: [...this._renderedNodes].reduce((e2, t2) => e2 + this._index.getNode(t2).vertexCount, 0), maximumNumberOfFeatures: this.maximumPointCount, totalNumberOfFeatures: -1, core: null, "Loading Nodes": this._loadingNodes.size, "Index Queue": this._indexQueue.length, "Work Queue": this._workQueue.length, "Idle Queue": this._idleQueue.length };
  }
  get test() {
    return { index: this._index, visibleNodes: this._renderedNodes };
  }
};
e$2([y$1()], fe.prototype, "layer", void 0), e$2([y$1()], fe.prototype, "baseUrl", null), e$2([y$1()], fe.prototype, "pointScale", null), e$2([y$1()], fe.prototype, "useRealWorldSymbolSizes", null), e$2([y$1()], fe.prototype, "pointSize", null), e$2([y$1()], fe.prototype, "inverseDensity", null), e$2([y$1()], fe.prototype, "maximumPointCount", void 0), e$2([y$1({ readOnly: true })], fe.prototype, "availableFields", null), e$2([y$1({ readOnly: true })], fe.prototype, "_clippingBox", null), e$2([y$1({ readOnly: true })], fe.prototype, "_elevationOffset", null), e$2([y$1({ type: Boolean })], fe.prototype, "slicePlaneEnabled", void 0), e$2([y$1()], fe.prototype, "updating", void 0), e$2([y$1(t$9)], fe.prototype, "updatingProgress", void 0), e$2([y$1({ readOnly: true })], fe.prototype, "updatingProgressValue", null), fe = e$2([c("esri.views.3d.layers.PointCloudLayerView3D")], fe);
const ye = fe;
function be(e2) {
  return 5 * e2.coordinates.length + 128;
}
const we = u$8(), Ne = 160;
function Pe(e2) {
  return (t2) => e2.immediate.schedule(t2);
}
const PointCloudLayerView3D = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ye
}, Symbol.toStringTag, { value: "Module" }));
export {
  F,
  O,
  PointCloudLayerView3D as P,
  R,
  y
};
