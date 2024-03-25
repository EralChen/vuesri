import { mE as o, mF as d, mG as o$1, fk as e, mH as o$2, mI as P, mJ as o$3, mK as s, mL as o$4, mM as o$5, mN as o$6, mO as e$1, mP as o$7, mQ as s$1, mb as R, aV as e$2, mR as r, lk as e$3, mS as t, mT as t$1, mU as r$1, mV as r$2, mW as S$1, mX as A$1, mY as h, mZ as l, m_ as o$8, m$ as E$1, n0 as _$1, n1 as e$4, n2 as o$9, n3 as f, n4 as a, n5 as e$5, n6 as A$2, n7 as i, n8 as a$1, n9 as S, na as c, nb as u, nc as r$3, nd as s$2, ne as y, nf as d$1, ng as A$3, nh as u$1 } from "./chunk-ejFG4zJ0.js";
function v(v2) {
  const m2 = new o(), { vertex: f2, fragment: u2 } = m2;
  return d(f2, v2), m2.include(o$1, v2), m2.attributes.add(e.POSITION, "vec3"), m2.attributes.add(e.UV0, "vec2"), v2.perspectiveInterpolation && m2.attributes.add(e.PERSPECTIVEDIVIDE, "float"), m2.varyings.add("vpos", "vec3"), v2.multipassEnabled && m2.varyings.add("depth", "float"), f2.code.add(o$2`
    void main(void) {
      vpos = position;
      ${v2.multipassEnabled ? "depth = (view * vec4(vpos, 1.0)).z;" : ""}
      vTexCoord = uv0;
      gl_Position = transformPosition(proj, view, vpos);

      ${v2.perspectiveInterpolation ? "gl_Position *= perspectiveDivide;" : ""}
    }
  `), m2.include(P, v2), m2.include(o$3, v2), u2.uniforms.add(new s("tex", (e2) => e2.texture), new o$4("opacity", (e2) => e2.opacity)), m2.varyings.add("vTexCoord", "vec2"), v2.output === o$5.Alpha ? u2.code.add(o$2`
    void main() {
      discardBySlice(vpos);
      ${v2.multipassEnabled ? "terrainDepthTest(depth);" : ""}

      float alpha = texture(tex, vTexCoord).a * opacity;
      if (alpha  < ${o$2.float(o$6)}) {
        discard;
      }

      fragColor = vec4(alpha);
    }
    `) : (u2.include(e$1), u2.code.add(o$2`
    void main() {
      discardBySlice(vpos);
      ${v2.multipassEnabled ? "terrainDepthTest(depth);" : ""}
      fragColor = texture(tex, vTexCoord) * opacity;

      if (fragColor.a < ${o$2.float(o$6)}) {
        discard;
      }

      fragColor = highlightSlice(fragColor, vpos);
      ${v2.transparencyPassType === o$7.Color ? "fragColor = premultiplyAlpha(fragColor);" : ""}
    }
    `)), m2;
}
const m = Object.freeze(Object.defineProperty({ __proto__: null, build: v }, Symbol.toStringTag, { value: "Module" }));
class N extends r$1 {
  initializeProgram(e2) {
    return new r$2(e2.rctx, N.shader.get().build(this.configuration), _);
  }
  _setPipelineState(e2, r2) {
    const o2 = this.configuration, i2 = e2 === o$7.NONE, s2 = e2 === o$7.FrontFace;
    return S$1({ blending: o2.output !== o$5.Color && o2.output !== o$5.Alpha || !o2.transparent ? null : i2 ? E : A$1(e2), culling: h(o2.cullFace), depthTest: { func: l(e2) }, depthWrite: i2 ? o2.writeDepth ? o$8 : null : E$1(e2), colorWrite: _$1, stencilWrite: o2.hasOccludees ? e$4 : null, stencilTest: o2.hasOccludees ? r2 ? o$9 : f : null, polygonOffset: i2 || s2 ? null : a(o2.enableOffset) });
  }
  initializePipeline() {
    return this._occludeePipelineState = this._setPipelineState(this.configuration.transparencyPassType, true), this._setPipelineState(this.configuration.transparencyPassType, false);
  }
  getPipeline(e2) {
    return e2 ? this._occludeePipelineState : super.getPipeline();
  }
}
N.shader = new t(m, () => import("./chunk-u-26OoyI.js"));
const E = s$1(R.ONE, R.ONE_MINUS_SRC_ALPHA);
class C extends t$1 {
  constructor() {
    super(...arguments), this.output = o$5.Color, this.cullFace = e$3.None, this.hasSlicePlane = false, this.transparent = false, this.enableOffset = true, this.writeDepth = true, this.hasOccludees = false, this.transparencyPassType = o$7.NONE, this.multipassEnabled = false, this.cullAboveGround = false, this.perspectiveInterpolation = true;
  }
}
e$2([r({ count: o$5.COUNT })], C.prototype, "output", void 0), e$2([r({ count: e$3.COUNT })], C.prototype, "cullFace", void 0), e$2([r()], C.prototype, "hasSlicePlane", void 0), e$2([r()], C.prototype, "transparent", void 0), e$2([r()], C.prototype, "enableOffset", void 0), e$2([r()], C.prototype, "writeDepth", void 0), e$2([r()], C.prototype, "hasOccludees", void 0), e$2([r({ count: o$7.COUNT })], C.prototype, "transparencyPassType", void 0), e$2([r()], C.prototype, "multipassEnabled", void 0), e$2([r()], C.prototype, "cullAboveGround", void 0), e$2([r()], C.prototype, "perspectiveInterpolation", void 0), e$2([r({ constValue: false })], C.prototype, "occlusionPass", void 0);
const _ = /* @__PURE__ */ new Map([[e.POSITION, 0], [e.UV0, 2], [e.PERSPECTIVEDIVIDE, 3]]);
class T extends e$5 {
  constructor(t2) {
    super(t2, new A()), this.supportsEdges = true, this.produces = /* @__PURE__ */ new Map([[A$2.OPAQUE_MATERIAL, (t3) => t3 === o$5.Highlight || i(t3) && !this.parameters.transparent], [A$2.TRANSPARENT_MATERIAL, (t3) => i(t3) && this.parameters.transparent && this.parameters.writeDepth], [A$2.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL, (t3) => i(t3) && this.parameters.transparent && !this.parameters.writeDepth], [A$2.DRAPED_MATERIAL, (t3) => a$1(t3)]]), this._vertexAttributeLocations = _, this._configuration = new C();
  }
  getConfiguration(t2, e2) {
    return this._configuration.output = t2, this._configuration.cullFace = this.parameters.cullFace, this._configuration.hasSlicePlane = this.parameters.hasSlicePlane, this._configuration.transparent = this.parameters.transparent, this._configuration.writeDepth = this.parameters.writeDepth, this._configuration.hasOccludees = this.parameters.hasOccludees, this._configuration.transparencyPassType = e2.transparencyPassType, this._configuration.enableOffset = e2.camera.relativeElevation < S, this._configuration.multipassEnabled = e2.multipassEnabled, this._configuration.cullAboveGround = e2.multipassTerrain.cullAboveGround, this._configuration.perspectiveInterpolation = this.parameters.perspectiveInterpolation, this._configuration;
  }
  createGLMaterial(t2) {
    return new I(t2);
  }
  createBufferWriter() {
    const t2 = c.clone();
    return this.parameters.perspectiveInterpolation && t2.f32(e.PERSPECTIVEDIVIDE), new b(t2);
  }
}
class I extends u {
  constructor(t2) {
    super({ ...t2, ...t2.material.parameters });
  }
  _updateParameters(t2) {
    return this.updateTexture(this._material.parameters.textureId), this._material.setParameters(this.textureBindParameters), this.ensureTechnique(N, t2);
  }
  _updateOccludeeState(t2) {
    t2.hasOccludees !== this._material.parameters.hasOccludees && (this._material.setParameters({ hasOccludees: t2.hasOccludees }), this._updateParameters(t2));
  }
  beginSlot(t2) {
    return this._output !== o$5.Color && this._output !== o$5.Alpha || this._updateOccludeeState(t2), this._updateParameters(t2);
  }
}
class b extends r$3 {
  write(e$12, r2, s2, a2, i2) {
    for (const n of this.vertexBufferLayout.fields.keys()) {
      const o2 = s2.attributes.get(n);
      if (o2)
        if (n === e.PERSPECTIVEDIVIDE) {
          s$2(1 === o2.size);
          const e2 = a2.getField(n, y);
          e2 && d$1(o2, e2, i2);
        } else
          A$3(n, o2, e$12, r2, a2, i2);
    }
  }
}
class A extends u$1 {
  constructor() {
    super(...arguments), this.transparent = false, this.writeDepth = true, this.hasSlicePlane = false, this.cullFace = e$3.None, this.hasOccludees = false, this.opacity = 1, this.textureId = null, this.initTextureTransparent = true, this.perspectiveInterpolation = false;
  }
}
export {
  T,
  v
};
