import { eB as t$2, m5 as h$3, qu as P$1, g4 as a$1, dh as i$1, w1 as b, w2 as z, aV as e$3, aX as y$1, a_ as c, bJ as c$1, cm as e$4, w3 as r$5, cj as t$3, uz as n$2, w4 as v, w5 as u$2, mE as o$4, mM as o$5, mI as P, fk as e$5, w6 as o$6, qF as c$2, l3 as q, w7 as e$6, w8 as o$7, iy as o$8, vt as e$7, w9 as o$9, fF as o$a, wa as j, wb as i$2, wc as n$3, mH as o$b, wd as a$2, we as a$3, im as e$8, aW as n$4, gk as n$5, mS as t$4, mU as r$6, mV as r$7, ux as O$1, mW as S$1, o7 as O$2, m_ as o$c, n0 as _$1, n1 as e$9, n3 as f, mR as r$8, mT as t$5, wf as t$6, md as C$1, wg as d$1, o6 as i$3, n6 as A$1, b2 as l$2, qy as E, aF as e$a, kH as s$1, nQ as g$1, vf as j$1, wh as s$2, wi as Y$1, wj as y$2, f_ as v$1, kL as t$7, vE as l$3, og as G$1, mc as E$1, rK as O$3, dl as B$1, ma as r$9, wk as r$a, h as h$4, ml as F$1, wl as s$3, wm as i$5, eX as x, wn as m$1, o3 as L$1, m7 as r$b, kU as e$b, wo as ae, wp as se, wq as A, bX as P$2, ce as d$2, cf as C$2, fL as I, c8 as u$3, fc as e$c, wr as x$1, kB as u$4, vK as i$6, ws as b$1, j5 as _$2, wt as i$7, wu as p$1, cr as q$1, bQ as V$1, he as O$4, wv as _$3, ww as c$4, cd as b$2, aT as s$4, hV as g$2, cU as s$5, aI as r$c, hf as t$8, nA as A$2, hd as t$9, ez as t$a, b6 as u$6, eu as u$7, id as u$8, kw as a$5, fG as t$b } from "./chunk-ejFG4zJ0.js";
import { n as n$6 } from "./chunk-ZRKw_7qF.js";
import { c as c$3, u as u$5, a as a$4 } from "./chunk-tAdNaROw.js";
import { i as i$4 } from "./chunk-8KqbLGAY.js";
let e$2 = class e extends t$2 {
  constructor(s2, e3, o3, r3, i2) {
    super(s2, e3, -1, o3, r3), this.queue = i2;
  }
};
let o$3 = class o {
  constructor(s2, e3, o3, r3) {
    this.loading = s2, this.indexLoading = e3, this.processing = o3, this.idleProcessing = r3;
  }
};
let r$4 = class r extends h$3 {
  constructor(t2) {
    super("PointCloudWorker", "transform", { transform: (t3) => this._getTransferList(t3) }, t2);
  }
  _getTransferList(t2) {
    const r3 = [t2.geometryBuffer];
    if (null != t2.primaryAttributeData && t2.primaryAttributeData.buffer && r3.push(t2.primaryAttributeData.buffer), null != t2.modulationAttributeData && t2.modulationAttributeData.buffer && r3.push(t2.modulationAttributeData.buffer), null != t2.filterAttributesData)
      for (const e3 of t2.filterAttributesData)
        null != e3 && e3.buffer && r3.push(e3.buffer);
    for (const e3 of t2.userAttributesData)
      e3.buffer && r3.push(e3.buffer);
    return r3;
  }
};
function t$1(e3, t2, g2) {
  for (let n2 = 0; n2 < t2.length; n2++)
    r$3[n2] = false, o$2[n2] = null;
  for (let r3 = 0; r3 < e3.length; r3++)
    n$1[r3] = false, l$1[r3] = null;
  for (let n2 = 0; n2 < t2.length; n2++) {
    const o3 = h$2(t2[n2], e3, g2);
    o3 >= 0 && (r$3[n2] = true, null != l$1[o3] ? l$1[o3].push(t2[n2]) : l$1[o3] = [t2[n2]]);
  }
  for (let l2 = 0; l2 < e3.length; l2++) {
    const r3 = h$2(e3[l2], t2, g2);
    r3 >= 0 && (n$1[l2] = true, null != o$2[r3] ? o$2[r3].push(e3[l2]) : o$2[r3] = [e3[l2]]);
  }
  const u2 = [];
  for (let r3 = 0; r3 < e3.length; r3++)
    null != l$1[r3] || n$1[r3] || u2.push({ load: [], remove: [e3[r3]] });
  for (let n2 = 0; n2 < t2.length; n2++)
    null != o$2[n2] || r$3[n2] || u2.push({ load: [t2[n2]], remove: [] });
  for (let n2 = 0; n2 < t2.length; n2++)
    null != o$2[n2] && (o$2[n2].length > 1 || o$2[n2][0] !== t2[n2]) && u2.push({ load: [t2[n2]], remove: o$2[n2] });
  for (let n2 = 0; n2 < e3.length; n2++)
    null != l$1[n2] && (l$1[n2].length > 1 || l$1[n2][0] !== e3[n2]) && u2.push({ load: l$1[n2], remove: [e3[n2]] });
  return u2;
}
const n$1 = [false], l$1 = [null], r$3 = [false], o$2 = [null];
function h$2(e3, t2, n2) {
  let l2 = e3;
  for (; l2 > 0; ) {
    const e4 = t2.indexOf(l2);
    if (e4 >= 0)
      return e4;
    l2 = n2.getParentId(l2);
  }
  return t2.indexOf(l2);
}
function g(t2, n2, l2) {
  return t2.sort((t3, r3) => {
    if (0 === t3.load.length && 0 === r3.load.length)
      return 0;
    if (0 === t3.load.length)
      return -1;
    if (0 === r3.load.length)
      return 1;
    if (0 === t3.remove.length && 0 === r3.remove.length) {
      const o3 = l2.getRenderObb(t3.load[0]).center, h2 = l2.getRenderObb(r3.load[0]).center;
      return P$1(o3, n2) - P$1(h2, n2);
    }
    if (0 === t3.remove.length)
      return -1;
    if (0 === r3.remove.length)
      return 1;
    if (1 === t3.load.length && 1 === r3.load.length) {
      const o3 = l2.getRenderObb(t3.load[0]).center, h2 = l2.getRenderObb(r3.load[0]).center;
      return P$1(o3, n2) - P$1(h2, n2);
    }
    if (1 === t3.load.length)
      return -1;
    if (1 === r3.load.length)
      return 1;
    {
      const o3 = l2.getRenderObb(t3.remove[0]).center, h2 = l2.getRenderObb(r3.remove[0]).center;
      return P$1(o3, n2) - P$1(h2, n2);
    }
  });
}
function u$1(e3, t2, n2) {
  for (let l2 = 0; l2 < e3.length; ++l2) {
    const r3 = e3[l2];
    r3.load.length > t2 && 1 === r3.remove.length && d(e3, r3, n2);
  }
}
function d(e3, t2, n2) {
  const l2 = [t2.remove[0]], r3 = [];
  for (; 1 === l2.length; ) {
    const e4 = l2.pop();
    r3.length = 0;
    for (let o3 = 0; o3 < t2.load.length; o3++) {
      let h2 = t2.load[o3], g2 = n2.getParentId(h2);
      for (; g2 !== e4; )
        h2 = g2, g2 = n2.getParentId(h2);
      let u2 = l2.indexOf(h2);
      u2 < 0 && (u2 = l2.length, l2.push(h2), r3.push([])), r3[u2].push(t2.load[o3]);
    }
  }
  t2.load = l2;
  for (let o3 = 0; o3 < l2.length; o3++)
    r3[o3].length > 1 ? e3.push({ remove: [l2[o3]], load: r3[o3] }) : l2[o3] = r3[o3][0];
}
class i {
  constructor(t2, s2, n2) {
    this._pages = [], this.pageSize = 0, this._nodeSR = t2, this._renderSR = s2, this._renderSRSphericalPCPF = a$1(s2), this.pageSize = n2;
  }
  addPage(e3, t2, s2 = 0) {
    for (; this._pages.length < e3; )
      this._pages.push(null);
    r$2(t2, this._nodeSR, this._renderSR, s2, this._renderSRSphericalPCPF), this._pages[e3] = { nodes: t2, parents: new Uint32Array(this.pageSize) }, p(this._pages, this.pageSize);
  }
  hasPage(e3) {
    return !!this._pages[e3];
  }
  getNode(e3) {
    const t2 = this.pageSize;
    return this._pages[a(e3, t2)].nodes[h$1(e3, t2)];
  }
  getRenderObb(e3) {
    const t2 = this.pageSize;
    return this._pages[a(e3, t2)].nodes[h$1(e3, t2)].obbInRenderSR;
  }
  setRenderObb(e3, t2) {
    const s2 = this.pageSize;
    this._pages[a(e3, s2)].nodes[h$1(e3, s2)].obbInRenderSR.copy(t2);
  }
  getParentId(e3) {
    const t2 = this.pageSize;
    return this._pages[a(e3, t2)].parents[h$1(e3, t2)];
  }
  hasNodes(e3, t2) {
    const s2 = a(e3, this.pageSize), n2 = a(e3 + t2 - 1, this.pageSize);
    for (let i2 = s2; i2 <= n2; i2++)
      if (null == this._pages[i2])
        return false;
    return true;
  }
  forEachNodeId(e3) {
    for (let t2 = 0; t2 < this._pages.length; t2++) {
      const s2 = this._pages[t2];
      if (s2)
        for (let n2 = 0; n2 < s2.nodes.length; n2++)
          e3(t2 * this.pageSize + n2);
    }
  }
  createVisibilityTraverse() {
    const e3 = { index: this, queue: [], masks: [], tempAabb: i$1() };
    return (t2, s2) => o$1(e3, t2, s2);
  }
}
function o$1(e3, t2, i2) {
  const o3 = e3.index;
  if (!o3.hasNodes(0, 1))
    return;
  const r3 = e3.queue;
  r3.length = 0, r3.push(0);
  const p2 = e3.masks;
  for (p2.length = 0, p2.push(0); r3.length > 0; ) {
    const h2 = r3.pop();
    let g2 = p2.pop();
    const l2 = o3.getNode(h2), c2 = o3.getRenderObb(h2);
    let u2 = true;
    if (null != t2.clippingBox) {
      const i3 = 1 << t2.frustum.length;
      0 == (g2 & i3) && (c2.toAaBoundingBox(e3.tempAabb), b(t2.clippingBox, e3.tempAabb) ? g2 |= i3 : z(t2.clippingBox, e3.tempAabb) || (u2 = false));
    }
    for (let e4 = 0; e4 < t2.frustum.length && u2; e4++) {
      const s2 = 1 << e4;
      if (0 == (g2 & s2)) {
        const n2 = c2.intersectPlane(t2.frustum[e4]);
        n2 > 0 ? u2 = false : n2 < 0 && (g2 |= s2);
      }
    }
    if (i2.predicate(h2, l2, u2)) {
      const e4 = l2.firstChild, t3 = l2.childCount;
      let s2 = false;
      const n2 = a(e4, o3.pageSize), c3 = a(e4 + t3 - 1, o3.pageSize);
      for (let r4 = n2; r4 <= c3; r4++)
        if (!o3.hasPage(r4)) {
          i2.pageMiss(h2, r4), s2 = true;
          break;
        }
      if (!s2)
        for (let i3 = 0; i3 < t3; i3++)
          r3.push(e4 + i3), p2.push(g2);
    }
  }
}
function r$2(e3, t2, s2, n2, i2) {
  for (let o3 = 0; o3 < e3.length; o3++) {
    const r3 = e3[o3];
    r3.obb.transform(r3.obbInRenderSR, t2, s2, n2, i2);
  }
}
function p(e3, t2) {
  const s2 = [0];
  for (; s2.length; ) {
    const n2 = s2.pop(), i2 = e3[a(n2, t2)].nodes[h$1(n2, t2)];
    for (let o3 = 0; o3 < i2.childCount; o3++) {
      const r3 = i2.firstChild + o3;
      null != e3[a(r3, t2)] && (e3[a(r3, t2)].parents[h$1(r3, t2)] = n2, s2.push(r3));
    }
  }
}
function a(e3, t2) {
  return e3 / t2 | 0;
}
function h$1(e3, t2) {
  return e3 % t2;
}
function t(t2) {
  const e3 = t2.renderer, n2 = e3?.type, o3 = e3?.toJSON() ?? null;
  let l2 = null, i2 = false;
  const a2 = t2.attributeStorageInfo;
  "point-cloud-unique-value" === n2 || "point-cloud-stretch" === n2 || "point-cloud-class-breaks" === n2 ? l2 = u(a2, e3.field) : "point-cloud-rgb" === n2 ? (l2 = r$1(a2, e3.field), i2 = null != l2) : (l2 = r$1(a2, "RGB"), i2 = null != l2);
  let s2 = null;
  return e3?.colorModulation && (s2 = u(a2, e3.colorModulation.field)), { rendererJSON: o3, isRGBRenderer: i2, primaryAttribute: l2, modulationAttribute: s2 };
}
function e$1(t2) {
  const e3 = t2.filters;
  return e3 ? e3.map((e4) => ({ filterJSON: e4.toJSON(), attributeInfo: u(t2.attributeStorageInfo, e4.field) })) : [];
}
function n(t2) {
  const e3 = t2?.pointSizeAlgorithm;
  return e3 && "splat" === e3.type ? e3 : null;
}
function o2(t2) {
  const e3 = t2?.pointSizeAlgorithm;
  return e3 && "fixed-size" === e3.type ? e3 : null;
}
function l(t2) {
  const e3 = t2?.pointSizeAlgorithm;
  return !!e3?.type && "fixed-size" === e3.type;
}
function r$1(t2, e3) {
  for (const n2 of t2 ?? [])
    if (n2.name === e3 && null != n2.attributeValues && "UInt8" === n2.attributeValues.valueType && 3 === n2.attributeValues.valuesPerElement)
      return { name: e3, storageInfo: n2, useElevation: false };
  return null;
}
function u(t2, e3) {
  for (const n2 of t2 ?? [])
    if (n2.name === e3) {
      const t3 = "embedded-elevation" === n2.encoding;
      return t3 ? { name: e3, storageInfo: null, useElevation: t3 } : { name: e3, storageInfo: n2, useElevation: t3 };
    }
  return "elevation" === e3?.toLowerCase() ? { name: e3, storageInfo: null, useElevation: true } : null;
}
let e2 = class extends c$1 {
  constructor(o3) {
    super(o3), this.pointCloudMetadata = null;
  }
};
e$3([y$1({ constructOnly: true, clonable: "reference" })], e2.prototype, "pointCloudMetadata", void 0), e2 = e$3([c("esri.views.3d.layers.i3s.PointGraphic")], e2);
class h {
  constructor(e3) {
    this._context = e3, this._highlights = /* @__PURE__ */ new Set();
  }
  get empty() {
    return 0 === this._highlights.size;
  }
  destroy() {
    this._highlights = null;
  }
  add(t2) {
    const i2 = new s(t2);
    return this._highlights.add(i2), this._enableSet(i2), e$4(() => this._removeSet(i2));
  }
  _removeSet(e3) {
    this._disableSet(e3), this._highlights.delete(e3);
  }
  _enableSet(e3) {
    e3.enabled || (e3.enabled = true, this._context.forEachNode((t2) => this._enableSetForNode(e3, t2)));
  }
  _enableSetForNode(e3, t2) {
    if (!e3.enabled)
      return;
    const i2 = e3.ids.get(t2.id);
    i2 && i2.forEach((i3) => this._context.addHighlight(t2, i3, e3.id));
  }
  _disableSet(e3) {
    e3.enabled && (e3.enabled = false, this._context.forEachNode((t2) => this._disableSetForNode(e3, t2)));
  }
  _disableSetForNode(e3, t2) {
    e3.enabled || this._context.removeHighlight(t2, e3.id);
  }
  nodeAdded(e3) {
    this._highlights.forEach((t2) => this._enableSetForNode(t2, e3));
  }
  nodeRemoved(e3) {
    this._highlights.forEach((t2) => this._disableSetForNode(t2, e3));
  }
  removeAll() {
    this._highlights.forEach((e3) => this._disableSet(e3));
  }
}
class s {
  constructor(e3) {
    this.id = new r$5(t$3.Highlight), this.ids = /* @__PURE__ */ new Map(), this.enabled = false;
    for (const t2 of e3)
      null != t2 && this._add(t2.nodeId, t2.pointId);
  }
  _add(e3, t2) {
    const i2 = this.ids.get(e3);
    i2 ? i2.add(t2) : this.ids.set(e3, /* @__PURE__ */ new Set([t2]));
  }
}
class y extends n$2 {
  constructor() {
    super(...arguments), this.clipBox = i$1(v), this.useFixedSizes = false, this.useRealWorldSymbolSizes = false, this.scaleFactor = 1, this.minSizePx = 0, this.size = 0, this.sizePx = 0;
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
class O extends u$2 {
  constructor(e3, i2, o3) {
    super(e3), this.origin = e3, this.isLeaf = i2, this.splatSize = o3;
  }
}
function R(r3) {
  const a2 = new o$4(), n2 = r3.output === o$5.Color, c2 = r3.output === o$5.LinearDepth, l2 = r3.output === o$5.Highlight, { vertex: g2, fragment: w } = a2;
  return a2.include(P, r3), a2.attributes.add(e$5.POSITION, "vec3"), a2.attributes.add(e$5.COLOR, "vec3"), g2.uniforms.add(new o$6("modelView", (e3, r4) => c$2(B, r4.camera.viewMatrix, q(B, e3.origin))), new e$6("proj", (e3, i2) => i2.camera.projectionMatrix), new o$7("screenMinMaxSize", (e3, i2, o3) => o$8(_, o3.useFixedSizes ? 0 : o3.minSizePx * i2.camera.pixelRatio, F(e3.isLeaf) * i2.camera.pixelRatio)), r3.useFixedSizes ? new e$7("pointScale", (e3, i2) => o$8(_, e3.fixedSize * i2.camera.pixelRatio, i2.camera.fullHeight)) : new o$7("pointScale", (e3, i2, o3) => o$8(_, e3.splatSize * o3.scaleFactor * i2.camera.pixelRatio, i2.camera.fullHeight / i2.camera.pixelRatio))), r3.clippingEnabled ? g2.uniforms.add(new o$9("clipMin", (e3, i2, o3) => o$a(L, o3.clipBox[0] - e3.origin[0], o3.clipBox[1] - e3.origin[1], o3.clipBox[2] - e3.origin[2])), new o$9("clipMax", (e3, i2, o3) => o$a(L, o3.clipBox[3] - e3.origin[0], o3.clipBox[4] - e3.origin[1], o3.clipBox[5] - e3.origin[2]))) : (g2.constants.add("clipMin", "vec3", [-j, -j, -j]), g2.constants.add("clipMax", "vec3", [j, j, j])), c2 ? (i$2(a2), n$3(a2), a2.varyings.add("depth", "float")) : r3.output !== o$5.Highlight && a2.varyings.add("vColor", "vec3"), g2.code.add(o$b`
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
     ${r3.drawScreenSize ? o$b`
      float clampedScreenSize = pointSize;` : o$b`
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

     ${c2 ? o$b`depth = calculateLinearDepth(nearFar, camera.z);` : ""}
     ${n2 ? o$b`vColor = color;` : ""}
    }
  `), w.include(a$2, r3), l2 && a2.include(a$3, r3), w.code.add(o$b`
    void main(void) {
      vec2 vOffset = gl_PointCoord - vec2(0.5, 0.5);
      float r2 = dot(vOffset, vOffset);

      if (r2 > 0.25) {
        discard;
      }
      ${c2 ? o$b`fragColor = float2rgba(depth);` : ""}
      ${l2 ? o$b`outputHighlight();` : ""}
      ${n2 ? o$b`fragColor = vec4(vColor, 1.0);` : ""}
    }
  `), a2;
}
function F(e3) {
  return e3 ? 256 : 64;
}
const B = e$8(), L = n$4(), _ = n$5(), C = Object.freeze(Object.defineProperty({ __proto__: null, PointRendererDrawParameters: O, PointRendererPassParameters: y, build: R, getMaxPointSizeScreenspace: F }, Symbol.toStringTag, { value: "Module" }));
class m extends r$6 {
  constructor(e3, r3, i2) {
    super(e3, r3, i2);
  }
  initializeProgram(e3) {
    return new r$7(e3.rctx, m.shader.get().build(this.configuration), O$1);
  }
  initializePipeline() {
    return S$1({ depthTest: { func: O$2.LESS }, depthWrite: o$c, colorWrite: _$1, stencilWrite: this.configuration.hasOccludees ? e$9 : null, stencilTest: this.configuration.hasOccludees ? f : null });
  }
}
m.shader = new t$4(C, () => import("./chunk-W0HHx_Ty.js"));
class r2 extends t$5 {
  constructor() {
    super(...arguments), this.output = o$5.Color, this.hasSlicePlane = false, this.drawScreenSize = false, this.useFixedSizes = false, this.hasOccludees = false, this.clippingEnabled = false;
  }
}
e$3([r$8({ count: o$5.COUNT })], r2.prototype, "output", void 0), e$3([r$8()], r2.prototype, "hasSlicePlane", void 0), e$3([r$8()], r2.prototype, "drawScreenSize", void 0), e$3([r$8()], r2.prototype, "useFixedSizes", void 0), e$3([r$8()], r2.prototype, "hasOccludees", void 0), e$3([r$8()], r2.prototype, "clippingEnabled", void 0), e$3([r$8({ constValue: true })], r2.prototype, "hasSliceInVertexProgram", void 0);
const V = { positions: [new t$6(e$5.POSITION, 3, C$1.FLOAT, 0, 12)], colors: [new t$6(e$5.COLOR, 3, C$1.UNSIGNED_BYTE, 0, 3, true)] };
let W = class extends d$1 {
  constructor(e3) {
    super(e3), this.type = i$3.PCL, this.isGround = false, this._passParameters = new y(), this._highlights = new h({ forEachNode: (e4) => this.forEachNode(e4), addHighlight: (e4, t2, s2) => this._addHighlight(e4, t2, s2), removeHighlight: (e4, t2) => this._removeHighlight(e4, t2) }), this.produces = /* @__PURE__ */ new Map([[A$1.OPAQUE_MATERIAL, (e4) => e4 !== o$5.LinearDepth && (e4 !== o$5.Highlight || !this._highlights.empty)], [A$1.OPAQUE_NO_SSAO_DEPTH, (e4) => e4 === o$5.LinearDepth]]), this.layerUid = "", this._slicePlaneEnabled = false, this._techniqueConfig = new r2(), this._nodes = new l$2();
  }
  initializeRenderContext(e3) {
    this._context = e3, e3.requestRender();
  }
  uninitializeRenderContext() {
  }
  intersect(e3, t2, s2, i2) {
    const r3 = n$4(), f2 = n$4(), P2 = n$4(), b$12 = n$4(), R2 = E(), w = e3.camera.perScreenPixelRatio / 2, A2 = e3.camera.near;
    e$a(f2, i2, s2);
    const j2 = 1 / s$1(f2);
    g$1(f2, f2, j2), j$1(P2, f2), s$2(R2, f2[0], f2[1], f2[2], -P$1(f2, s2));
    const q2 = new $(), E$12 = new $(), I2 = new Array(), L2 = i$1(), v2 = i$1(this._passParameters.clipBox);
    Y$1(v2, -s2[0], -s2[1], -s2[2], v2), this._nodes.forAll((o3) => {
      const a2 = o3.splatSize * this._passParameters.scaleFactor;
      let l2 = o3.obb.minimumDistancePlane(R2), d2 = o3.obb.maximumDistancePlane(R2);
      l2 -= Y(a2, l2 + A2, this._passParameters, w, o3.isLeaf), d2 -= Y(a2, d2 + A2, this._passParameters, w, o3.isLeaf);
      const u2 = d2 < 0, p2 = null != q2.dist && null != E$12.dist && q2.dist < l2 * j2 && E$12.dist > d2 * j2;
      if (u2 || p2)
        return;
      const S = Q(a2, d2 + A2, this._passParameters, w, o3.isLeaf);
      if (!o3.obb.intersectRay(s2, f2, S))
        return;
      const x2 = S * S;
      o3.obb.toAaBoundingBox(L2), Y$1(L2, -s2[0], -s2[1], -s2[2], L2);
      const z2 = !b(v2, L2);
      e$a(b$12, o3.origin, s2);
      const y2 = o3.coordinates.length / 3;
      for (let n2 = 0; n2 < y2; n2++) {
        if (r3[0] = b$12[0] + o3.coordinates[3 * n2], r3[1] = b$12[1] + o3.coordinates[3 * n2 + 1], r3[2] = b$12[2] + o3.coordinates[3 * n2 + 2], z2 && !y$2(v2, r3))
          continue;
        const l3 = P$1(r3, f2), d3 = v$1(r3) - l3 * l3;
        if (d3 > x2)
          continue;
        let u3 = l3 + A2;
        const p3 = Y(a2, u3, this._passParameters, w, o3.isLeaf);
        if (l3 - p3 < 0)
          continue;
        u3 -= p3;
        const m2 = Q(a2, u3, this._passParameters, w, o3.isLeaf);
        if (d3 > m2 * m2)
          continue;
        const g2 = (l3 - p3) * j2, S2 = (e4) => (e4.point = J(o3, n2, e4.point), e4.dist = g2, e4.normal = P2, e4.node = o3, e4.pointId = n2, e4.layerUid = this.layerUid, e4);
        if ((null == q2.dist || g2 < q2.dist) && (null == t2 || t2(s2, i2, g2)) && S2(q2), e3.options.store !== t$7.MIN && (null == E$12.dist || g2 > E$12.dist) && (null == t2 || t2(s2, i2, g2)) && S2(E$12), e3.options.store === t$7.ALL && (null == t2 || t2(s2, i2, g2))) {
          const e4 = new $();
          I2.push(S2(e4));
        }
      }
    });
    const F2 = (e4) => {
      const { layerUid: t3, node: s3, pointId: i3 } = e4;
      return new s$3(e4.point, t3, i3, () => this.createGraphic(s3, i3, e4.point));
    }, N = (e4, t3) => {
      const s3 = F2(t3);
      e4.set(this.type, s3, t3.dist, t3.normal);
    };
    if (ee(q2)) {
      const t3 = e3.results.min;
      (null == t3.dist || q2.dist < t3.dist) && N(t3, q2);
    }
    if (ee(E$12) && e3.options.store !== t$7.MIN) {
      const t3 = e3.results.max;
      (null == t3.dist || E$12.dist > t3.dist) && N(t3, E$12);
    }
    if (e3.options.store === t$7.ALL) {
      const t3 = l$3(s2, i2);
      for (const s3 of I2) {
        const i3 = G$1(t3);
        N(i3, s3), e3.results.all.push(i3);
      }
    }
  }
  prepareTechnique(e3) {
    return 0 === this._nodes.length || e3.output !== o$5.Color && (e3.output !== o$5.LinearDepth || e3.bindParameters.slot !== A$1.OPAQUE_NO_SSAO_DEPTH) && e3.output !== o$5.Highlight ? null : (this._nodes.forAll((t2) => {
      null == t2.vao && this._initNode(e3, t2);
    }), this._techniqueConfig.drawScreenSize = this._passParameters.drawScreenSpace, this._techniqueConfig.useFixedSizes = this._passParameters.useFixedSizes, this._techniqueConfig.hasSlicePlane = this._slicePlaneEnabled, this._techniqueConfig.hasOccludees = e3.bindParameters.hasOccludees, this._techniqueConfig.clippingEnabled = this._clippingEnabled, this._techniqueConfig.output = e3.output, this._context.techniqueRepository.releaseAndAcquire(m, this._techniqueConfig, this._technique));
  }
  renderNode(e3, t2) {
    const s2 = e3.rctx, i2 = s2.bindTechnique(t2, e3.bindParameters, this._passParameters), r3 = e3.output === o$5.Highlight;
    this._nodes.forAll((t3) => {
      0 === t3.coordinates.length || r3 && !t3.highlights || (i2.bindDraw(t3, e3.bindParameters, this._passParameters), s2.bindVAO(t3.vao), r3 ? this._renderHighlightFragments(s2, t3) : s2.drawArrays(E$1.POINTS, 0, t3.coordinates.length / 3));
    });
  }
  _renderHighlightFragments(e3, t2) {
    const s2 = t2.highlights;
    if (null == s2)
      return;
    let i2 = s2[0].component, r3 = i2 + 1;
    for (let o3 = 1; o3 < s2.length; o3++) {
      const t3 = s2[o3].component;
      if (t3 !== r3) {
        const s3 = r3 - i2;
        s3 > 0 && e3.drawArrays(E$1.POINTS, i2, s3), i2 = t3;
      }
      r3 = t3 + 1;
    }
    const n2 = r3 - i2;
    n2 > 0 && e3.drawArrays(E$1.POINTS, i2, n2);
  }
  set useFixedSizes(e3) {
    this._passParameters.useFixedSizes !== e3 && (this._passParameters.useFixedSizes = e3, this._requestRender());
  }
  get useFixedSizes() {
    return this._passParameters.useFixedSizes;
  }
  set scaleFactor(e3) {
    this._passParameters.scaleFactor !== e3 && (this._passParameters.scaleFactor = e3, this._requestRender());
  }
  get scaleFactor() {
    return this._passParameters.scaleFactor;
  }
  set minSizePx(e3) {
    this._passParameters.minSizePx !== e3 && (this._passParameters.minSizePx = e3, this._requestRender());
  }
  get minSizePx() {
    return this._passParameters.minSizePx;
  }
  set useRealWorldSymbolSizes(e3) {
    this._passParameters.useRealWorldSymbolSizes !== e3 && (this._passParameters.useRealWorldSymbolSizes = e3, this._requestRender());
  }
  get useRealWorldSymbolSizes() {
    return this._passParameters.useRealWorldSymbolSizes;
  }
  set size(e3) {
    this._passParameters.size !== e3 && (this._passParameters.size = e3, this._requestRender());
  }
  get size() {
    return this._passParameters.size;
  }
  set sizePx(e3) {
    this._passParameters.sizePx !== e3 && (this._passParameters.sizePx = e3, this._requestRender());
  }
  get sizePx() {
    return this._passParameters.sizePx;
  }
  set clippingBox(e3) {
    O$3(this._passParameters.clipBox, e3 || v);
  }
  get _clippingEnabled() {
    return !B$1(this._passParameters.clipBox, v, (e3, t2) => e3 === t2);
  }
  get slicePlaneEnabled() {
    return this._slicePlaneEnabled;
  }
  set slicePlaneEnabled(e3) {
    this._slicePlaneEnabled !== e3 && (this._slicePlaneEnabled = e3, this._requestRender());
  }
  addNode(e3) {
    this._nodes.push(e3), this._highlights.nodeAdded(e3), this._requestRender();
  }
  removeNode(e3) {
    let s2 = null;
    return this._nodes.filterInPlace((i2) => i2.id !== e3 || (s2 = i2, i2.vao = r$9(i2.vao), this._highlights.nodeRemoved(i2), false)), this._requestRender(), s2;
  }
  forEachNode(e3) {
    this._nodes.forAll(e3);
  }
  removeAll() {
    this._nodes.forAll((e3) => e3.vao = r$9(e3.vao)), this._highlights.removeAll(), this._nodes.clear(), this._requestRender();
  }
  highlight(e3) {
    return this._highlights.add(e3);
  }
  _addHighlight(e3, t2, s2) {
    e3.highlights = X(e3.highlights, t2, s2), this._requestRender();
  }
  _removeHighlight(e3, t2) {
    e3.highlights = Z(e3.highlights, t2), this._requestRender();
  }
  _initNode(e3, t2) {
    const s2 = e3.rctx;
    t2.vao = new r$a(s2, O$1, V, { positions: h$4.createVertex(s2, F$1.STATIC_DRAW, t2.coordinates), colors: h$4.createVertex(s2, F$1.STATIC_DRAW, t2.rgb) });
  }
  _requestRender() {
    this._context && this._context.requestRender();
  }
};
e$3([y$1({ constructOnly: true })], W.prototype, "createGraphic", void 0), W = e$3([c("esri.views.3d.layers.i3s.PointRenderer")], W);
class k extends O {
  constructor(e3, t2, s2, i2, r3, n2, o3, a2, l2 = null, h2 = null) {
    super(s2, r3, t2), this.id = e3, this.obb = i2, this.coordinates = n2, this.rgb = o3, this.attributes = a2, this.pointIdFilterMap = l2, this.highlights = h2;
  }
}
function G(e3) {
  return e3.hasOwnProperty("splatSize");
}
function Q(e3, t2, s2, i2, r3) {
  if (s2.drawScreenSpace)
    return s2.fixedSize * t2 * i2;
  const n2 = F(r3) * t2 * i2;
  return s2.useFixedSizes ? Math.min(s2.fixedSize / 2, n2) : s2.screenMinSize > 0 ? Math.min(Math.max(s2.screenMinSize * t2 * i2, e3 / 2), n2) : Math.min(e3 / 2, n2);
}
function Y(e3, t2, s2, i2, r3) {
  return s2.drawScreenSpace ? 0 : Q(e3, t2, s2, i2, r3);
}
function J(e3, t2, s2) {
  return null == s2 && (s2 = n$4()), s2[0] = e3.origin[0] + e3.coordinates[3 * t2], s2[1] = e3.origin[1] + e3.coordinates[3 * t2 + 1], s2[2] = e3.origin[2] + e3.coordinates[3 * t2 + 2], s2;
}
function K(e3) {
  return null != e3.component ? e3.component : -1;
}
function X(e3, t2, s2) {
  null == e3 && (e3 = []);
  const i2 = { component: t2, id: s2 };
  e3.push(i2);
  const r3 = K(i2);
  let n2 = e3.length - 1;
  for (; n2 > 0 && r3 < K(e3[n2 - 1]); )
    [e3[n2 - 1], e3[n2]] = [e3[n2], e3[n2 - 1]], --n2;
  return e3;
}
function Z(e3, t2) {
  if (null == e3)
    return e3;
  const s2 = e3.filter((e4) => e4.id !== t2);
  return 0 === s2.length ? null : s2;
}
class $ {
  constructor() {
    this.node = null, this.pointId = null, this.point = null, this.dist = null, this.normal = null, this.layerUid = "";
  }
}
function ee(e3) {
  return null != e3.dist && null != e3.point && null != e3.pointId && null != e3.node;
}
const ge = 8, fe = E();
let ye = class extends i$4(n$6(u$7)) {
  constructor() {
    super(...arguments), this.type = "point-cloud-3d", this.maximumPointCount = 4e6, this.slicePlaneEnabled = false, this._renderer = null, this._rendererAdded = false, this._renderedNodes = /* @__PURE__ */ new Set(), this._nodeScales = /* @__PURE__ */ new Map(), this._updateViewNeeded = true, this._lodFactor = 1, this._maxLoggedBoxWarnings = 5, this._pageMultiplier = 1, this._nodeLoadEpoch = 0, this._indexQueue = [], this._workQueue = new Array(), this._idleQueue = new i$5(), this._indexPagesLoading = /* @__PURE__ */ new Map(), this._loadingNodes = /* @__PURE__ */ new Map(), this._recalcWork = true, this._layerIsVisible = false, this._codedDomainPopulationPromise = null, this._codedDomainPopulationAbortController = null, this._totalWork = 0, this._index = null, this._loadingInitNodePage = false, this._nodeIdArray = [], this.ignoresMemoryFactor = false;
  }
  get baseUrl() {
    return this.layer.parsedUrl.path;
  }
  get pointScale() {
    const e3 = n(this.layer?.renderer), t2 = 1;
    return null != e3?.scaleFactor ? e3.scaleFactor : t2;
  }
  get useRealWorldSymbolSizes() {
    const e3 = o2(this.layer?.renderer), t2 = false;
    return null != e3?.useRealWorldSymbolSizes ? e3.useRealWorldSymbolSizes : t2;
  }
  get pointSize() {
    const e3 = o2(this.layer?.renderer), t2 = 0;
    return null != e3?.size ? e3.size : t2;
  }
  get inverseDensity() {
    const e3 = 96;
    return this.layer?.renderer ? 1 * e3 / this.layer.renderer.pointsPerInch : 5;
  }
  get availableFields() {
    const e3 = t(this.layer), t$12 = /* @__PURE__ */ new Set();
    e3.primaryAttribute && t$12.add(e3.primaryAttribute.name), e3.modulationAttribute && t$12.add(e3.modulationAttribute.name);
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
    const e3 = i$1(), t2 = this.view.renderSpatialReference;
    return m$1(this.view.clippingArea, e3, t2) ? e3 : null;
  }
  get _elevationOffset() {
    const e3 = this.layer && this.layer.elevationInfo;
    if (e3 && "absolute-height" === e3.mode) {
      const t2 = L$1(this.layer.spatialReference), i2 = r$b(e3.unit);
      return (e3.offset ?? 0) * i2 / t2;
    }
    return 0;
  }
  initialize() {
    const e3 = this.view.resourceController, t2 = xe(e3);
    this._worker = new r$4(t2), this.addResolvingPromise(this._worker.promise), this._tmpPoint = e$b(0, 0, 0, this.layer.spatialReference), ae(this.layer), se(this.layer, this.view), this._indexRequester = e3.createStreamDataRequester(A.I3S_INDEX), this._dataRequester = e3.createStreamDataRequester(A.I3S_DATA), this._initRenderer();
    const i2 = this._initNodePages(), r3 = this.view.resourceController.memoryController;
    this._memCache = r3.newCache(`pcl-${this.layer.uid}`), this._updatingHandles.add(() => this._clippingBox, () => this._setUpdateViewNeeded(), P$2), this._updatingHandles.add(() => this._elevationOffset, () => this._elevationOffsetChanged(), P$2), this._updatingHandles.add(() => this.layer.renderer, () => this._rendererChanged(), P$2), this._updatingHandles.add(() => this.layer.filters, () => this._reload(), P$2), this._updatingHandles.add(() => this.layer.outFields, () => this._reload(), P$2), this._updatingHandles.add(() => this.layer.effectiveScaleRange, () => this._setUpdateViewNeeded()), this._updatingHandles.add(() => this.view.state.contentCamera, () => this._setUpdateViewNeeded()), this.addHandles([this.view.basemapTerrain.on("scale-change", (e4) => this._scaleUpdateHandler(e4)), d$2(() => this.view.quality, () => this._setUpdateViewNeeded(), C$2)]), this.addResolvingPromise(i2), this.when(() => {
      this.addHandles([e3.scheduler.registerTask(I.POINT_CLOUD_LAYER, this), e3.scheduler.registerIdleStateCallbacks(() => this._idleBegin(), () => this._idleEnd()), this._updatingHandles.add(() => this.suspended, (e4) => {
        e4 ? this._clearNodeState() : this._setUpdateViewNeeded();
      }, P$2)]);
    }, () => {
      this._updatingHandles.removeAll(), this.removeAllHandles();
    });
  }
  _setUpdateViewNeeded() {
    this._updateViewNeeded = true, this._updateLoading();
  }
  destroy() {
    this.cancelLoading(), this._worker = u$3(this._worker), this._destroyRenderer(), this._memCache = u$3(this._memCache), this._codedDomainPopulationAbortController = e$c(this._codedDomainPopulationAbortController), this._codedDomainPopulationPromise = null;
  }
  _initRenderer() {
    this._renderer = new W({ createGraphic: (e3, t2, i2) => this._createGraphic(e3, t2, i2) }), this._renderer.layerUid = this.layer.uid, this._updatingHandles.add(() => this._clippingBox, (e3) => this._renderer.clippingBox = e3, P$2), this._updatingHandles.add(() => this.suspended, (e3) => this._setPointsVisible(!e3), P$2), this._updatingHandles.add(() => this.pointScale, (e3) => this._renderer.scaleFactor = e3, P$2), this._renderer.minSizePx = Math.sqrt(2), this._updatingHandles.add(() => this.useRealWorldSymbolSizes, (e3) => this._renderer.useRealWorldSymbolSizes = e3, P$2), this._updatingHandles.add(() => this.pointSize, (e3) => {
      const t2 = u$8(e3);
      this._renderer.size = e3, this._renderer.sizePx = t2;
    }, P$2), this._updatingHandles.add(() => this.slicePlaneEnabled, (e3) => this._renderer.slicePlaneEnabled = e3, P$2), this._updatingHandles.add(() => this.inverseDensity, () => this._setUpdateViewNeeded(), P$2), this._updatingHandles.add(() => this.maximumPointCount, () => this._setUpdateViewNeeded(), P$2), this._updatingHandles.add(() => this.view.qualitySettings.sceneService.pointCloud.lodFactor, (e3) => {
      this._lodFactor = e3, this._setUpdateViewNeeded();
    }, P$2);
  }
  _destroyRenderer() {
    this._renderer.removeAll(), this._setPointsVisible(false);
  }
  _createGraphic(e$12, t2, i2) {
    const r3 = null != e$12.pointIdFilterMap ? e$12.pointIdFilterMap[t2] : t2, s2 = x$1(this.view, i2), o3 = this._createGraphicAttributes(e$12, r3);
    return new e2({ pointCloudMetadata: { nodeId: e$12.id, pointIndexInNode: t2, attributePointIndexInNode: r3, epoch: this._nodeLoadEpoch }, geometry: s2, attributes: o3, layer: this.layer, sourceLayer: this.layer });
  }
  _createGraphicAttributes(e3, t2) {
    const i2 = {};
    for (const r3 of e3.attributes)
      this._encodeGraphicAttribute(r3.attributeInfo, r3.values, t2, i2);
    return i2;
  }
  _encodeGraphicAttribute(e3, t2, i2, r3) {
    const s2 = e3.storageInfo?.attributeValues, o3 = s2?.valuesPerElement ?? 1;
    if (1 === o3)
      r3[e3.name] = t2[i2];
    else if ("UInt8" === s2?.valueType && o3 <= 4) {
      let s3 = 0;
      const n2 = i2 * o3;
      for (let e4 = n2; e4 < n2 + o3; e4++)
        s3 = (s3 << 8) + t2[e4];
      r3[e3.name] = s3;
    } else
      r3[e3.name] = void 0;
  }
  _setPointsVisible(e3) {
    e3 && !this._rendererAdded ? (this.view._stage.addRenderPlugin(this._renderer), this._rendererAdded = true) : !e3 && this._rendererAdded && (this.view._stage.removeRenderPlugin(this._renderer), this._rendererAdded = false);
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
  _scaleUpdateHandler(e3) {
    const t2 = this.layer.effectiveScaleRange;
    u$4(t2.minScale, t2.maxScale) ? i$6(e3.extent, e3.spatialReference, Pe, this.layer.spatialReference) && (this._nodeScales.forEach((t3, i2) => {
      if (!this._renderedNodes.has(i2))
        return void this._nodeScales.delete(i2);
      const r3 = this._index.getNode(i2);
      b$1(Pe, r3.obb.center) && this._nodeScales.set(i2, e3.scale);
    }), this._setUpdateViewNeeded()) : this._nodeScales.clear();
  }
  _displayNodes(e3) {
    this._workQueue = t$1([...this._renderedNodes], e3, this._index), g(this._workQueue, this.view.state.contentCamera.viewForward, this._index), u$1(this._workQueue, ge, this._index), this._updateQueues(), this._totalWork = this._computeWork(), this._updateLoading(), this._layerIsVisible = e3.length > 0 || this._loadingInitNodePage, this.notifyChange("suspended");
  }
  cancelLoading() {
    this._cancelNodeLoading(), this._cancelIndexLoading();
  }
  _cancelNodeLoading() {
    const e3 = new Array();
    this._loadingNodes.forEach(({ abortController: t2 }) => e3.push(t2)), this._loadingNodes.clear();
    for (const t2 of e3)
      t2.abort();
    this._workQueue = [], this._idleQueue.cancelAll(), this._totalWork = this._computeWork(), this._updateLoading();
  }
  _updateQueues() {
    const e3 = /* @__PURE__ */ new Set();
    this._workQueue.forEach((t3) => t3.load.forEach((t4) => e3.add(t4)));
    const t2 = new Array(), i2 = /* @__PURE__ */ new Map();
    this._loadingNodes.forEach((r3, s2) => {
      e3.has(s2) ? i2.set(s2, r3) : t2.push(r3);
    }), this._loadingNodes = i2;
    for (const { abortController: r3 } of t2)
      r3.abort();
    this._workQueue = this._workQueue.filter((e4) => {
      for (const t3 of e4.load)
        if (this._loadingNodes.has(t3))
          return this._recalcWork = true, false;
      return true;
    }), this._totalWork = this._computeWork(), this._updateLoading();
  }
  _cancelIndexLoading() {
    this._indexQueue = [], this._indexPagesLoading.forEach(({ abortController: e3 }) => e3.abort()), this._indexPagesLoading.clear(), this._totalWork = this._computeWork(), this._updateLoading();
  }
  _clearNodeState() {
    this._nodeLoadEpoch++, this._renderedNodes.forEach((e3) => this._removeFromRenderer(e3)), this._cancelNodeLoading();
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
  runTask(e3) {
    if (this.suspended) {
      if (this._updateViewNeeded) {
        this._updateViewNeeded = false;
        const e4 = this._isRootNodeVisible();
        e4 !== this._layerIsVisible && (this._layerIsVisible = e4, this.notifyChange("suspended")), this._updateLoading();
      }
    } else {
      for (e3.run(() => this._updateWorkQueues()); this._indexQueue.length > 0 && e3.run(() => this._processIndexQueue()); )
        ;
      this._processWorkQueue(e3), this._idleQueue.runTask(e3);
    }
  }
  _processIndexQueue() {
    const e3 = this._indexQueue.shift(), t2 = this._loadNodePage(e3);
    return this._indexPagesLoading.set(e3, t2), t2.promise.then((t3) => {
      this._index.addPage(e3, t3, this._elevationOffset), this._setUpdateViewNeeded();
    }).then(() => {
      this._indexPagesLoading.delete(e3);
    }, () => {
      this._indexPagesLoading.delete(e3);
    }), true;
  }
  _processWorkQueue(e3) {
    for (; !e3.done; ) {
      const t2 = this._scheduleWorkEntry();
      if (null == t2)
        return void e3.madeProgress();
      this._processWorkEntry(t2), e3.madeProgress();
    }
  }
  _scheduleWorkEntry() {
    let e3 = this._workQueue.length;
    for (; e3--; ) {
      const e4 = this._workQueue.shift();
      if (!e4.remove.find((e5) => !this._renderedNodes.has(e5)))
        return e4;
      this._workQueue.push(e4);
    }
    return null;
  }
  _processWorkEntry(e3) {
    if (0 !== e3.load.length)
      Promise.all(e3.load.map((e4) => {
        const t2 = new AbortController(), i2 = this._memCache.pop(e4.toString());
        return null != i2 ? this._loadingNodes.set(e4, { abortController: t2, promise: Promise.resolve(i2) }) : this._loadingNodes.has(e4) || this._loadingNodes.set(e4, { abortController: t2, promise: this._loadNode(e4, t2.signal) }), this._loadingNodes.get(e4).promise;
      })).then((t2) => {
        for (let i2 = 0; i2 < e3.load.length; i2++)
          if (t2[i2]) {
            const r3 = this._setupRendererData(e3.load[i2], t2[i2]);
            this._addToRenderer(r3);
          }
        for (const i2 of e3.remove)
          this._removeFromRenderer(i2);
      }).catch(() => {
      }).then(() => {
        for (const t2 of e3.load)
          this._loadingNodes.delete(t2);
        this._updateLoading(), this._recalcWork && !this._idleQueue.running && 0 === this._indexQueue.length && 0 === this._loadingNodes.size && (this._recalcWork = false, this._setUpdateViewNeeded());
      }), this._updateLoading();
    else
      for (const t2 of e3.remove)
        this._removeFromRenderer(t2);
  }
  async _populateClassCodeCodedDomain(e3, t2) {
    const r3 = "CLASS_CODE", s2 = this.layer.fieldsIndex.get(r3);
    if (!s2 || s2.domain)
      return;
    if (!e3.includes(s2.name))
      return;
    const o3 = await _$2(this.layer.queryCachedStatistics(r3, { signal: t2 }));
    if (false === o3.ok)
      return;
    const n2 = o3.value?.stats?.labels?.labels;
    n2 && Array.isArray(n2) && (s2.domain = new i$7({ name: "CLASS_CODE", codedValues: n2.map((e4) => new p$1({ code: e4.value, name: e4.label })) }));
  }
  async prepareFetchPopupFeatures(e3) {
    return this._codedDomainPopulationPromise || (this._codedDomainPopulationAbortController = new AbortController(), this._codedDomainPopulationPromise = this._populateClassCodeCodedDomain(e3, this._codedDomainPopulationAbortController.signal).then(() => {
      this._codedDomainPopulationAbortController = null;
    })), this._codedDomainPopulationPromise;
  }
  async whenGraphicAttributes(e3, i2) {
    const s2 = this._splitGraphicsPerNode(e3), o3 = this.layer.attributeStorageInfo, n2 = i2.map((e4) => u(o3, e4)).filter(q$1), a2 = async (e4, t2) => {
      const i3 = this._index.getNode(t2);
      await a$5(n2, async (t3) => {
        const r3 = t3.useElevation ? await this._loadElevationAttributeFromGeometry(i3.resourceId) : await this._loadAndParseAttribute(i3, t3);
        if (r3) {
          for (const i4 of e4)
            if (this._isValidPointGraphic(i4)) {
              const e5 = i4.pointCloudMetadata.attributePointIndexInNode;
              this._encodeGraphicAttribute(t3, r3, e5, i4.attributes);
            }
        }
      });
    }, d2 = [];
    return s2.forEach((e4, t2) => {
      d2.push(a2(e4, t2));
    }), await Promise.allSettled(d2), e3;
  }
  _isValidPointGraphic(e$12) {
    return e$12 instanceof e2 && e$12.pointCloudMetadata?.epoch === this._nodeLoadEpoch;
  }
  _splitGraphicsPerNode(e3) {
    const t2 = /* @__PURE__ */ new Map();
    for (const i2 of e3) {
      if (!this._isValidPointGraphic(i2))
        continue;
      const e4 = i2.pointCloudMetadata, r3 = t2.get(e4.nodeId);
      r3 ? r3.push(i2) : t2.set(e4.nodeId, [i2]);
    }
    return t2;
  }
  async _loadAndParseAttribute(e3, t2) {
    const i2 = await this._loadAttribute(e3.resourceId, t2, null);
    return null != i2 ? c$3({ attributeInfo: t2, buffer: i2 }, null, e3.vertexCount) : null;
  }
  async _loadElevationAttributeFromGeometry(e3) {
    const t2 = this.layer.store.defaultGeometrySchema, i2 = u$5(t2, await this._loadGeometry(e3, null));
    return a$4(i2, i2.length / 3);
  }
  highlight(e3) {
    if (!e3)
      return e$4();
    const t2 = V$1.isCollection(e3) ? e3.toArray() : Array.isArray(e3) ? e3 : [e3];
    return this._renderer.highlight(t2.map((e4) => this._graphicToPointDefinition(e4)));
  }
  _graphicToPointDefinition(e3) {
    if (!this._isValidPointGraphic(e3))
      return null;
    const { nodeId: t2, pointIndexInNode: i2 } = e3.pointCloudMetadata;
    return null != t2 && null != i2 ? { nodeId: t2, pointId: i2 } : null;
  }
  _computeWork() {
    let e3 = 0;
    for (const t2 of this._workQueue)
      e3 += t2.load.length + t2.remove.length;
    return e3 += this._loadingNodes.size, e3 += (this._indexQueue.length + this._indexPagesLoading.size) * this._index.pageSize, e3 += this._loadingInitNodePage ? 100 : 0, e3 += this._updateViewNeeded ? 100 : 0, e3;
  }
  get updatingProgressValue() {
    if (this.suspended)
      return this._updateViewNeeded ? 0 : 1;
    const e3 = this._computeWork();
    return 1 - Math.min(this._totalWork, e3) / this._totalWork;
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
    const e3 = this.layer.store.index, t2 = e3.nodesPerPage || e3.nodePerIndexBlock;
    return this._index = new i(this.layer.spatialReference, this.view.renderCoordsHelper.spatialReference, t2), this._cancelIndexLoading(), this._traverseVisible = this._index.createVisibilityTraverse(), this._loadingInitNodePage = true, this._layerIsVisible = true, this.notifyChange("suspended"), this._updateLoading(), this._pageMultiplier = null != e3.nodesPerPage ? 1 : e3.nodePerIndexBlock, this._loadNodePage(0).promise.then((e4) => {
      this._index.addPage(0, e4, this._elevationOffset), this._loadingInitNodePage = false, this._setUpdateViewNeeded();
    });
  }
  _loadNodePage(e3) {
    const t2 = new AbortController(), i2 = `${this.baseUrl}/nodepages/${e3 * this._pageMultiplier}`;
    return { promise: this._requestNodePage(i2, t2.signal).then((t3) => t3.nodes.map((t4, i3) => ({ resourceId: null != t4.resourceId ? t4.resourceId : e3 * this._index.pageSize + i3, obb: O$4.fromJSON(t4.obb), obbInRenderSR: new O$4(), firstChild: t4.firstChild, childCount: t4.childCount, vertexCount: t4.vertexCount ?? t4.pointCount, lodThreshold: t4.lodThreshold ?? t4.effectiveArea }))), abortController: t2 };
  }
  _updateWorkQueues() {
    if (!this._updateViewNeeded)
      return false;
    const e3 = this.view.quality;
    let t2 = this.inverseDensity / this._lodFactor * e3;
    const i2 = this.maximumPointCount * this._lodFactor * e3;
    let r3 = this._computeNodesForMinimumDensity(t2), s2 = this._computePointCount(r3), o3 = Math.sqrt(s2 / (0.75 * i2));
    for (; s2 > i2; )
      t2 *= o3, r3 = this._computeNodesForMinimumDensity(t2), s2 = this._computePointCount(r3), o3 = Math.sqrt(2);
    return this._displayNodes(r3), this._updateViewNeeded = false, this._updateLoading(), true;
  }
  _computePointCount(e3) {
    let t2 = 0;
    for (let i2 = 0; i2 < e3.length; i2++) {
      const r3 = this._index.getNode(e3[i2]);
      r3 && (t2 += r3.vertexCount);
    }
    return t2;
  }
  _isRootNodeVisible() {
    let e3 = false;
    return this._traverseVisible({ frustum: this.view.state.contentCamera.frustum, clippingBox: this._clippingBox }, { predicate: (t2, i2, r3) => (e3 = r3, false), pageMiss: () => {
    } }), e3;
  }
  _computeNodesForMinimumDensity(e3) {
    const t2 = this.view.state.contentCamera, i2 = t2.frustum, r3 = this._clippingBox, s2 = t2.viewForward, o3 = P$1(s2, t2.eye), n2 = _$3(s2, -o3, fe), a2 = t2.perScreenPixelRatio / 2, d2 = e3 * e3, l2 = this._nodeIdArray;
    l2.length = 0;
    const { minScale: h2, maxScale: u2 } = c$4(this.layer), p2 = 0 === h2 && 0 === u2 ? (e4) => l2.push(e4) : (e4) => {
      const t3 = this._getScale(e4);
      t$b(t3, h2, u2) && l2.push(e4);
    };
    return this._traverseVisible({ frustum: i2, clippingBox: r3 }, { predicate: (e4, t3, i3) => {
      if (!i3)
        return false;
      if (0 === t3.childCount)
        return p2(e4), false;
      const r4 = this._index.getRenderObb(e4);
      return !(this._computeAveragePixelArea(r4, t3.lodThreshold, t3.vertexCount, n2, a2) <= d2) || (p2(e4), false);
    }, pageMiss: (e4, t3) => {
      p2(e4), this._indexQueue.includes(t3) || this._indexQueue.push(t3);
    } }), l2;
  }
  _getScale(e3) {
    let t2 = this._nodeScales.get(e3);
    if (null == t2) {
      const i2 = this._index.getNode(e3).obb.center;
      this._tmpPoint.x = i2[0], this._tmpPoint.y = i2[1], this._tmpPoint.z = i2[2], t2 = this.view.basemapTerrain.getScale(this._tmpPoint), this._nodeScales.set(e3, t2);
    }
    return t2;
  }
  _computeAveragePixelArea(e3, t2, i2, r3, s2) {
    const o3 = 1e-7, n2 = Math.max(o3, e3.minimumDistancePlane(r3));
    return t2 / (n2 * n2) / (4 * s2 * s2) / i2;
  }
  _loadNode(e3, t2) {
    try {
      return this._loadNodeAsync(e3, t2);
    } catch (i2) {
      throw b$2(i2) || s$4.getLogger(this).error(i2), i2;
    }
  }
  async _loadAdditionalUserAttributes(e3, i2, r3) {
    const s2 = this.layer.outFields;
    if (!s2)
      return [];
    const o3 = x(this.layer.fieldsIndex, s2), n2 = new Set(e3.map((e4) => null != e4 ? e4.name : null)), a2 = this.layer.attributeStorageInfo, d2 = [];
    for (const t2 of o3) {
      if (n2.has(t2))
        continue;
      const e4 = u(a2, t2);
      e4 && d2.push(i2(e4));
    }
    const l2 = await g$2(d2);
    return s$5(r3), l2.filter(q$1);
  }
  async _loadNodeAsync(e3, t$12) {
    const i2 = this._index.getNode(e3), r3 = t(this.layer), s2 = e$1(this.layer), o3 = i2.resourceId, n2 = async (e4) => {
      if (!e4)
        return null;
      if (e4.useElevation)
        return { attributeInfo: e4, buffer: null };
      const i3 = await this._loadAttribute(o3, e4, t$12);
      return null != i3 ? { attributeInfo: e4, buffer: i3 } : null;
    };
    return this._idleQueue.push(async () => {
      const i3 = this._loadGeometry(o3, t$12), { primaryAttribute: a2, modulationAttribute: d2 } = r3, l2 = n2(a2), h2 = n2(d2), p2 = s2.map((e4) => e4.attributeInfo), c2 = p2.map((e4) => n2(e4)), _2 = this._loadAdditionalUserAttributes([a2, d2, ...p2], n2, t$12), [m2, g2, f2, y2, b2] = await Promise.all([i3, l2, h2, Promise.all(c2), _2]);
      s$5(t$12);
      const w = { geometryBuffer: m2, primaryAttributeData: g2, modulationAttributeData: f2, filterAttributesData: y2, userAttributesData: b2, schema: this.layer.store.defaultGeometrySchema, rendererInfo: r3, filterInfo: s2, obbData: this._index.getRenderObb(e3).data, elevationOffset: this._elevationOffset, inSR: this.layer.spatialReference.toJSON(), outSR: this.view.renderCoordsHelper.spatialReference.toJSON() };
      return this._worker.invoke(w, t$12);
    }, t$12);
  }
  async _loadGeometry(e3, t2) {
    return this._requestData(`${this.baseUrl}/nodes/${e3}/geometries/0`, t2);
  }
  async _loadAttribute(e3, t2, i2) {
    if (!t2?.storageInfo)
      return null;
    const r3 = t2.storageInfo.key;
    return this._requestData(`${this.baseUrl}/nodes/${e3}/attributes/${r3}`, i2);
  }
  _requestNodePage(e3, t2) {
    const i2 = { f: "json", ...this.layer.customParameters, token: this.layer.apiKey };
    return this._indexRequester.request(e3, "json", { query: i2, signal: t2 });
  }
  _requestData(e3, t2) {
    return this._dataRequester.request(e3, "binary", { query: { ...this.layer.customParameters, token: this.layer.apiKey }, signal: t2 });
  }
  _removeFromRenderer(e3) {
    if (this._renderedNodes.has(e3)) {
      const t2 = this._renderer.removeNode(e3);
      this._renderedNodes.delete(e3), this._nodeScales.delete(e3), this._memCache.put(t2.id.toString(), t2, we(t2));
    }
  }
  _addToRenderer(e3) {
    this._renderedNodes.has(e3.id) || (this._renderedNodes.add(e3.id), this._renderer.addNode(e3));
  }
  _setupRendererData(e3, t2) {
    const i2 = this._index.getNode(e3), r3 = Math.sqrt(i2.lodThreshold / i2.vertexCount), s2 = this._index.getRenderObb(e3);
    if (G(t2))
      return t2.splatSize = r3, t2.obb = s2, r$c(t2.origin, t2.obb.center), t2;
    const o3 = O$4.fromData(t2.obbData), a2 = o3.halfSize, d2 = s2.halfSize, l2 = 0.01 * Math.max(d2[0], d2[1], d2[2]);
    if (a2[0] > d2[0] + l2 || a2[1] > d2[1] + l2 || a2[2] > d2[2] + l2) {
      if (this._maxLoggedBoxWarnings > 0) {
        const t3 = (e4) => `[${e4.halfSize[0]}, ${e4.halfSize[1]}, ${e4.halfSize[2]}]`;
        s$4.getLogger(this).warn(`Node ${e3} reported bounding box too small. got ${t3(s2)} but points cover ${t3(o3)}`), 0 == --this._maxLoggedBoxWarnings && s$4.getLogger(this).warn("  Too many bounding box errors, stopping reporting for this layer.");
      }
      this._index.setRenderObb(e3, o3);
    }
    return new k(e3, r3, t$8(s2.center), s2, 0 === i2.childCount, t2.points, t2.rgb, t2.attributes, t2.pointIdFilterMap);
  }
  get usedMemory() {
    let e3 = 0;
    return this._renderer.forEachNode((t2) => {
      e3 += Ne, e3 += A$2(t2.coordinates);
      for (const i2 of t2.attributes) {
        const t3 = i2.values;
        t$9(t3.buffer) && (e3 += A$2(t3));
      }
    }), e3;
  }
  get unloadedMemory() {
    const e3 = this._renderedNodes.size;
    if (e3 < 4)
      return 0;
    const t2 = [...this._renderedNodes].reduce((e4, t3) => e4 + this._index.getNode(t3).vertexCount);
    let i2 = this._loadingNodes.size;
    for (let r3 = 0; r3 < this._workQueue.length; r3++)
      i2 += this._workQueue[r3].load.length, i2 -= this._workQueue[r3].remove.length;
    if (i2 < 0)
      return 0;
    return i2 * t2 / e3 * ((this.usedMemory - e3 * Ne) / t2) + i2 * Ne;
  }
  get performanceInfo() {
    return new e$2(this.usedMemory, this._renderedNodes.size, [...this._renderedNodes].reduce((e3, t2) => e3 + this._index.getNode(t2).vertexCount, 0), this.maximumPointCount, new o$3(this._loadingNodes.size, this._indexQueue.length, this._workQueue.length, this._idleQueue.length));
  }
  get test() {
    return { index: this._index, visibleNodes: this._renderedNodes };
  }
};
e$3([y$1()], ye.prototype, "layer", void 0), e$3([y$1()], ye.prototype, "baseUrl", null), e$3([y$1()], ye.prototype, "pointScale", null), e$3([y$1()], ye.prototype, "useRealWorldSymbolSizes", null), e$3([y$1()], ye.prototype, "pointSize", null), e$3([y$1()], ye.prototype, "inverseDensity", null), e$3([y$1()], ye.prototype, "maximumPointCount", void 0), e$3([y$1({ readOnly: true })], ye.prototype, "availableFields", null), e$3([y$1({ readOnly: true })], ye.prototype, "_clippingBox", null), e$3([y$1({ readOnly: true })], ye.prototype, "_elevationOffset", null), e$3([y$1({ type: Boolean })], ye.prototype, "slicePlaneEnabled", void 0), e$3([y$1()], ye.prototype, "updating", void 0), e$3([y$1(t$a)], ye.prototype, "updatingProgress", void 0), e$3([y$1({ readOnly: true })], ye.prototype, "updatingProgressValue", null), ye = e$3([c("esri.views.3d.layers.PointCloudLayerView3D")], ye);
const be = ye;
function we(e3) {
  return 5 * e3.coordinates.length + 128;
}
const Pe = u$6(), Ne = 160;
function xe(e3) {
  return (t2) => e3.immediate.schedule(t2);
}
const PointCloudLayerView3D = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: be
}, Symbol.toStringTag, { value: "Module" }));
export {
  F,
  O,
  PointCloudLayerView3D as P,
  R,
  y
};
