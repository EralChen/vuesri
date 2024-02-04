import{Dn as T,Do as $,Dp as I,dx as p,Dq as c,Dr as O,Ds as A,Dt as S,Du as b,Dv as n,x6 as P,Dw as x,Dx as d,Dy as C,hm as v,$ as r,Dz as o,pl as g,DA as w,DB as N,DC as R,DD as V,DE as L,DF as M,DG as F,DH as U,DI as z,DJ as B,DK as G,DL as W,DM as j,DN as H,DO as Q,DP as q,DQ as k,mx as u,DR as J,DS as K,DT as X,DU as Y,DV as Z,DW as ee,DX as te,DY as se}from"./chunk-ERvgPDZ8.js";import{_ as ae}from"./chunk-cDR98evz.js";function E(t){const e=new T,{vertex:s,fragment:a}=e;return $(s,t),e.include(I,t),e.attributes.add(p.POSITION,"vec3"),e.attributes.add(p.UV0,"vec2"),t.perspectiveInterpolation&&e.attributes.add(p.PERSPECTIVEDIVIDE,"float"),e.varyings.add("vpos","vec3"),t.multipassEnabled&&e.varyings.add("depth","float"),s.code.add(c`
    void main(void) {
      vpos = position;
      ${t.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0;
      gl_Position = transformPosition(proj, view, vpos);

      ${t.perspectiveInterpolation?"gl_Position *= perspectiveDivide;":""}
    }
  `),e.include(O,t),e.include(A,t),a.uniforms.add(new S("tex",l=>l.texture),new b("opacity",l=>l.opacity)),e.varyings.add("vTexCoord","vec2"),t.output===n.Alpha?a.code.add(c`
    void main() {
      discardBySlice(vpos);
      ${t.multipassEnabled?"terrainDepthTest(depth);":""}

      float alpha = texture(tex, vTexCoord).a * opacity;
      if (alpha  < ${c.float(P)}) {
        discard;
      }

      fragColor = vec4(alpha);
    }
    `):(a.include(x),a.code.add(c`
    void main() {
      discardBySlice(vpos);
      ${t.multipassEnabled?"terrainDepthTest(depth);":""}
      fragColor = texture(tex, vTexCoord) * opacity;

      if (fragColor.a < ${c.float(P)}) {
        discard;
      }

      fragColor = highlightSlice(fragColor, vpos);
      ${t.transparencyPassType===d.Color?"fragColor = premultiplyAlpha(fragColor);":""}
    }
    `)),e}const ie=Object.freeze(Object.defineProperty({__proto__:null,build:E},Symbol.toStringTag,{value:"Module"}));class _ extends R{initializeProgram(e){return new V(e.rctx,_.shader.get().build(this.configuration),y)}_setPipelineState(e,s){const a=this.configuration,l=e===d.NONE,h=e===d.FrontFace;return L({blending:a.output!==n.Color&&a.output!==n.Alpha||!a.transparent?null:l?re:M(e),culling:F(a.cullFace),depthTest:{func:U(e)},depthWrite:l?a.writeDepth?z:null:B(e),colorWrite:G,stencilWrite:a.hasOccludees?W:null,stencilTest:a.hasOccludees?s?j:H:null,polygonOffset:l||h?null:Q(a.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}_.shader=new w(ie,()=>ae(()=>Promise.resolve().then(()=>pe),void 0));const re=C(v.ONE,v.ONE_MINUS_SRC_ALPHA);class i extends N{constructor(){super(...arguments),this.output=n.Color,this.cullFace=g.None,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.transparencyPassType=d.NONE,this.multipassEnabled=!1,this.cullAboveGround=!1,this.perspectiveInterpolation=!0}}r([o({count:n.COUNT})],i.prototype,"output",void 0),r([o({count:g.COUNT})],i.prototype,"cullFace",void 0),r([o()],i.prototype,"hasSlicePlane",void 0),r([o()],i.prototype,"transparent",void 0),r([o()],i.prototype,"enableOffset",void 0),r([o()],i.prototype,"writeDepth",void 0),r([o()],i.prototype,"hasOccludees",void 0),r([o({count:d.COUNT})],i.prototype,"transparencyPassType",void 0),r([o()],i.prototype,"multipassEnabled",void 0),r([o()],i.prototype,"cullAboveGround",void 0),r([o()],i.prototype,"perspectiveInterpolation",void 0),r([o({constValue:!1})],i.prototype,"occlusionPass",void 0);const y=new Map([[p.POSITION,0],[p.UV0,2],[p.PERSPECTIVEDIVIDE,3]]);let de=class extends q{constructor(e){super(e,new le),this.supportsEdges=!0,this._vertexAttributeLocations=y,this._configuration=new i}getConfiguration(e,s){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=s.transparencyPassType,this._configuration.enableOffset=s.camera.relativeElevation<k,this._configuration.multipassEnabled=s.multipassEnabled,this._configuration.cullAboveGround=s.multipassTerrain.cullAboveGround,this._configuration.perspectiveInterpolation=this.parameters.perspectiveInterpolation,this._configuration}produces(e,s){return s===n.Color||s===n.Alpha||s===n.Highlight?e===u.DRAPED_MATERIAL?!0:s===n.Highlight?e===u.OPAQUE_MATERIAL:e===(this.parameters.transparent?this.parameters.writeDepth?u.TRANSPARENT_MATERIAL:u.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:u.OPAQUE_MATERIAL):!1}createGLMaterial(e){return new oe(e)}createBufferWriter(){const e=J.clone();return this.parameters.perspectiveInterpolation&&e.f32(p.PERSPECTIVEDIVIDE),new ne(e)}};class oe extends K{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(_,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:e.hasOccludees}),this._updateParameters(e))}beginSlot(e){return this._output!==n.Color&&this._output!==n.Alpha||this._updateOccludeeState(e),this._updateParameters(e)}}class ne extends X{write(e,s,a,l,h){for(const f of this.vertexBufferLayout.fields.keys()){const D=a.attributes.get(f);if(D)if(f===p.PERSPECTIVEDIVIDE){Y(D.size===1);const m=l.getField(f,Z);m&&ee(D,m,h)}else te(f,D,e,s,l,h)}}}class le extends se{constructor(){super(...arguments),this.transparent=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=g.None,this.hasOccludees=!1,this.opacity=1,this.textureId=null,this.initTextureTransparent=!0,this.perspectiveInterpolation=!1}}const pe=Object.freeze(Object.defineProperty({__proto__:null,build:E},Symbol.toStringTag,{value:"Module"}));export{de as g};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
