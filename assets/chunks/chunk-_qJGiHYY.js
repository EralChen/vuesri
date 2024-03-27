import{D3 as $,D4 as I,D5 as b,eb as l,D6 as c,D7 as O,D8 as S,D9 as A,Da as x,Db as p,vv as P,Dc as C,Dd as u,De as w,lW as y,$ as i,Df as o,kx as g,Dg as N,Dh as R,Di as V,Dj as L,Dk as M,Dl as F,Dm as z,Dn as B,Do as U,Dp as j,Dq as W,Dr as G,Ds as k,Dt as H,Du as q,Dv as Q,ne as D,Dw as m,Dx as J,Dy as K,Dz as X,DA as Y,DB as Z,CL as ee,DC as te,DD as se,ot as ae,DE as re}from"./chunk-gZYsZ36N.js";import{_ as ie}from"./chunk-t4TbIqUg.js";function E(s){const e=new $,{vertex:t,fragment:a}=e;return I(t,s),e.include(b,s),e.attributes.add(l.POSITION,"vec3"),e.attributes.add(l.UV0,"vec2"),s.perspectiveInterpolation&&e.attributes.add(l.PERSPECTIVEDIVIDE,"float"),e.varyings.add("vpos","vec3"),s.multipassEnabled&&e.varyings.add("depth","float"),t.code.add(c`
    void main(void) {
      vpos = position;
      ${s.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0;
      gl_Position = transformPosition(proj, view, vpos);

      ${s.perspectiveInterpolation?"gl_Position *= perspectiveDivide;":""}
    }
  `),e.include(O,s),e.include(S,s),a.uniforms.add(new A("tex",n=>n.texture),new x("opacity",n=>n.opacity)),e.varyings.add("vTexCoord","vec2"),s.output===p.Alpha?a.code.add(c`
    void main() {
      discardBySlice(vpos);
      ${s.multipassEnabled?"terrainDepthTest(depth);":""}

      float alpha = texture(tex, vTexCoord).a * opacity;
      if (alpha  < ${c.float(P)}) {
        discard;
      }

      fragColor = vec4(alpha);
    }
    `):(a.include(C),a.code.add(c`
    void main() {
      discardBySlice(vpos);
      ${s.multipassEnabled?"terrainDepthTest(depth);":""}
      fragColor = texture(tex, vTexCoord) * opacity;

      if (fragColor.a < ${c.float(P)}) {
        discard;
      }

      fragColor = highlightSlice(fragColor, vpos);
      ${s.transparencyPassType===u.Color?"fragColor = premultiplyAlpha(fragColor);":""}
    }
    `)),e}const oe=Object.freeze(Object.defineProperty({__proto__:null,build:E},Symbol.toStringTag,{value:"Module"}));class _ extends V{initializeProgram(e){return new L(e.rctx,_.shader.get().build(this.configuration),T)}_setPipelineState(e,t){const a=this.configuration,n=e===u.NONE,d=e===u.FrontFace;return M({blending:a.output!==p.Color&&a.output!==p.Alpha||!a.transparent?null:n?ne:F(e),culling:z(a.cullFace),depthTest:{func:B(e)},depthWrite:n?a.writeDepth?U:null:j(e),colorWrite:W,stencilWrite:a.hasOccludees?G:null,stencilTest:a.hasOccludees?t?k:H:null,polygonOffset:n||d?null:q(a.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}_.shader=new N(oe,()=>ie(()=>Promise.resolve().then(()=>ue),void 0));const ne=w(y.ONE,y.ONE_MINUS_SRC_ALPHA);class r extends R{constructor(){super(...arguments),this.output=p.Color,this.cullFace=g.None,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.transparencyPassType=u.NONE,this.multipassEnabled=!1,this.cullAboveGround=!1,this.perspectiveInterpolation=!0}}i([o({count:p.COUNT})],r.prototype,"output",void 0),i([o({count:g.COUNT})],r.prototype,"cullFace",void 0),i([o()],r.prototype,"hasSlicePlane",void 0),i([o()],r.prototype,"transparent",void 0),i([o()],r.prototype,"enableOffset",void 0),i([o()],r.prototype,"writeDepth",void 0),i([o()],r.prototype,"hasOccludees",void 0),i([o({count:u.COUNT})],r.prototype,"transparencyPassType",void 0),i([o()],r.prototype,"multipassEnabled",void 0),i([o()],r.prototype,"cullAboveGround",void 0),i([o()],r.prototype,"perspectiveInterpolation",void 0),i([o({constValue:!1})],r.prototype,"occlusionPass",void 0);const T=new Map([[l.POSITION,0],[l.UV0,2],[l.PERSPECTIVEDIVIDE,3]]);class fe extends Q{constructor(e){super(e,new ce),this.supportsEdges=!0,this.produces=new Map([[D.OPAQUE_MATERIAL,t=>t===p.Highlight||m(t)&&!this.parameters.transparent],[D.TRANSPARENT_MATERIAL,t=>m(t)&&this.parameters.transparent&&this.parameters.writeDepth],[D.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,t=>m(t)&&this.parameters.transparent&&!this.parameters.writeDepth],[D.DRAPED_MATERIAL,t=>J(t)]]),this._vertexAttributeLocations=T,this._configuration=new r}getConfiguration(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<K,this._configuration.multipassEnabled=t.multipassEnabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.perspectiveInterpolation=this.parameters.perspectiveInterpolation,this._configuration}createGLMaterial(e){return new le(e)}createBufferWriter(){const e=X.clone();return this.parameters.perspectiveInterpolation&&e.f32(l.PERSPECTIVEDIVIDE),new pe(e)}}class le extends Y{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(_,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:e.hasOccludees}),this._updateParameters(e))}beginSlot(e){return this._output!==p.Color&&this._output!==p.Alpha||this._updateOccludeeState(e),this._updateParameters(e)}}class pe extends Z{write(e,t,a,n,d){for(const h of this.vertexBufferLayout.fields.keys()){const f=a.attributes.get(h);if(f)if(h===l.PERSPECTIVEDIVIDE){ee(f.size===1);const v=n.getField(h,te);v&&se(f,v,d)}else ae(h,f,e,t,n,d)}}}class ce extends re{constructor(){super(...arguments),this.transparent=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=g.None,this.hasOccludees=!1,this.opacity=1,this.textureId=null,this.initTextureTransparent=!0,this.perspectiveInterpolation=!1}}const ue=Object.freeze(Object.defineProperty({__proto__:null,build:E},Symbol.toStringTag,{value:"Module"}));export{fe as T};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
