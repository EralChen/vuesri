import{Gp as Q,GB as _,HT as S,HU as X,HV as J,Hm as K,Gq as ee,bq as r,Hj as te,Gs as D,Gr as l,HW as re,zt as V,Hh as ie,Gt as ae,HX as se,GN as ne,GO as oe,GQ as ce,GR as le,GS as pe,HY as k,HZ as de,H_ as he,Hn as ve,Gv as ue,Gw as me,Gx as y,HN as fe,GW as Se,GX as Te,Hp as ge,GY as Pe,Gz as w,GZ as U,G_ as M,G$ as _e,H$ as W,I0 as G,I1 as Oe,I2 as Ae,I3 as Ee,I4 as ye,oU as f,I5 as Re,I6 as we,H5 as I,iB as R,Hq as Ie,I7 as H,I8 as q,qz as xe,bC as ze,H7 as Ne,I9 as Le,b4 as F,xF as Ce,cx as B,a_ as Z}from"./chunk-CNvQLzuQ.js";import{_ as $e}from"./chunk-ByM7454y.js";function j(i){const e=new Q,t=i.terrainDepthTest&&i.output===_.Color,a=i.space===S.World;e.include(X,i),e.include(J,i);const{vertex:s,fragment:u}=e;return u.include(K),ee(s,i),e.attributes.add(r.POSITION,"vec3"),e.attributes.add(r.PREVPOSITION,"vec3"),e.attributes.add(r.UV0,"vec2"),e.varyings.add("vColor","vec4"),e.varyings.add("vpos","vec3"),e.varyings.add("vUV","vec2"),e.varyings.add("vSize","float"),t&&e.varyings.add("depth","float"),i.hasTip&&e.varyings.add("vLineWidth","float"),s.uniforms.add(new te("nearFar",(d,p)=>p.camera.nearFar),new D("viewport",(d,p)=>p.camera.fullViewport)),s.code.add(l`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),s.code.add(l`void clip(vec4 pos, inout vec4 prev) {
float vnp = nearFar[0] * 0.99;
if (prev.z > -nearFar[0]) {
float interpolation = (-vnp - pos.z) / (prev.z - pos.z);
prev = mix(pos, prev, interpolation);
}
}`),a?(e.attributes.add(r.NORMAL,"vec3"),re(s),s.constants.add("tiltThreshold","float",.7),s.code.add(l`vec3 perpendicular(vec3 v) {
vec3 n = (viewNormal * vec4(normal.xyz, 1.0)).xyz;
vec3 n2 = cross(v, n);
vec3 forward = vec3(0.0, 0.0, 1.0);
float tiltDot = dot(forward, n);
return abs(tiltDot) < tiltThreshold ? n : n2;
}`)):s.code.add(l`vec2 perpendicular(vec2 v) {
return vec2(v.y, -v.x);
}`),s.code.add(l`
      #define vecN ${a?"vec3":"vec2"}

      vecN normalizedSegment(vecN pos, vecN prev) {
        vecN segment = pos - prev;
        float segmentLen = length(segment);

        // normalize or zero if too short
        return (segmentLen > 0.001) ? segment / segmentLen : ${a?"vec3(0.0, 0.0, 0.0)":"vec2(0.0, 0.0)"};
      }

      vecN displace(vecN pos, vecN prev, float displacementLen) {
        vecN segment = normalizedSegment(pos, prev);

        vecN displacementDirU = perpendicular(segment);
        vecN displacementDirV = segment;

        ${i.anchor===V.Tip?"pos -= 0.5 * displacementLen * displacementDirV;":""}

        return pos + displacementLen * (uv0.x * displacementDirU + uv0.y * displacementDirV);
      }
    `),i.space===S.Screen&&(s.uniforms.add(new ie("inverseProjectionMatrix",(d,p)=>p.camera.inverseProjectionMatrix)),s.code.add(l`vec3 inverseProject(vec4 posScreen) {
posScreen.xy = (posScreen.xy / viewport.zw) * posScreen.w;
return (inverseProjectionMatrix * posScreen).xyz;
}`),s.code.add(l`bool rayIntersectPlane(vec3 rayDir, vec3 planeOrigin, vec3 planeNormal, out vec3 intersection) {
float cos = dot(rayDir, planeNormal);
float t = dot(planeOrigin, planeNormal) / cos;
intersection = t * rayDir;
return abs(cos) > 0.001 && t > 0.0;
}`),s.uniforms.add(new ae("perScreenPixelRatio",(d,p)=>p.camera.perScreenPixelRatio)),s.code.add(l`
      vec4 toFront(vec4 displacedPosScreen, vec3 posLeft, vec3 posRight, vec3 prev, float lineWidth) {
        // Project displaced position back to camera space
        vec3 displacedPos = inverseProject(displacedPosScreen);

        // Calculate the plane that we want the marker to lie in. Note that this will always be an approximation since ribbon lines are generally
        // not planar and we do not know the actual position of the displaced prev vertices (they are offset in screen space, too).
        vec3 planeNormal = normalize(cross(posLeft - posRight, posLeft - prev));
        vec3 planeOrigin = posLeft;

        ${i.hasCap?`
                if(prev.z > posLeft.z) {
                  vec2 diff = posLeft.xy - posRight.xy;
                  planeOrigin.xy += perpendicular(diff) / 2.0;
                }
              `:""};

        // Move the plane towards the camera by a margin dependent on the line width (approximated in world space). This tolerance corrects for the
        // non-planarity in most cases, but sharp joins can place the prev vertices at arbitrary positions so markers can still clip.
        float offset = lineWidth * perScreenPixelRatio;
        planeOrigin *= (1.0 - offset);

        // Intersect camera ray with the plane and make sure it is within clip space
        vec3 rayDir = normalize(displacedPos);
        vec3 intersection;
        if (rayIntersectPlane(rayDir, planeOrigin, planeNormal, intersection) && intersection.z < -nearFar[0] && intersection.z > -nearFar[1]) {
          return vec4(intersection.xyz, 1.0);
        }

        // Fallback: use depth of pos or prev, whichever is closer to the camera
        float minDepth = planeOrigin.z > prev.z ? length(planeOrigin) : length(prev);
        displacedPos *= minDepth / length(displacedPos);
        return vec4(displacedPos.xyz, 1.0);
      }
  `)),se(s),s.main.add(l`
    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      float lineWidth = getLineWidth();
      float screenMarkerSize = getScreenMarkerSize();

      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(prevPosition, 1.0);
      clip(pos, prev);

      ${a?l`${i.hideOnShortSegments?l`
                  if (areWorldMarkersHidden(pos, prev)) {
                    // Project out of clip space
                    gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
                    return;
                  }`:""}
            pos.xyz = displace(pos.xyz, prev.xyz, getWorldMarkerSize(pos));
            vec4 displacedPosScreen = projectAndScale(pos);`:l`
            vec4 posScreen = projectAndScale(pos);
            vec4 prevScreen = projectAndScale(prev);
            vec4 displacedPosScreen = posScreen;

            displacedPosScreen.xy = displace(posScreen.xy, prevScreen.xy, screenMarkerSize);
            ${i.space===S.Screen?l`
                vec2 displacementDirU = perpendicular(normalizedSegment(posScreen.xy, prevScreen.xy));

                // We need three points of the ribbon line in camera space to calculate the plane it lies in
                // Note that we approximate the third point, since we have no information about the join around prev
                vec3 lineRight = inverseProject(posScreen + lineWidth * vec4(displacementDirU.xy, 0.0, 0.0));
                vec3 lineLeft = pos.xyz + (pos.xyz - lineRight);

                pos = toFront(displacedPosScreen, lineLeft, lineRight, prev.xyz, lineWidth);
                displacedPosScreen = projectAndScale(pos);`:""}`}

      ${t?"depth = pos.z;":""}

      // Convert back into NDC
      displacedPosScreen.xy = (displacedPosScreen.xy / viewport.zw) * displacedPosScreen.w;

      // Convert texture coordinate into [0,1]
      vUV = (uv0 + 1.0) / 2.0;
      ${a?"":"vUV *= displacedPosScreen.w;"}
      ${i.hasTip?"vLineWidth = lineWidth;":""}

      vSize = screenMarkerSize;
      vColor = getColor();

      // Use camera space for slicing
      vpos = pos.xyz;

      gl_Position = displacedPosScreen;
    }`),t&&e.include(ne,i),e.include(oe,i),e.include(ce,i),u.uniforms.add(new D("intrinsicColor",d=>d.color),new le("tex",d=>d.markerTexture)),u.include(pe),u.constants.add("texelSize","float",1/k),u.code.add(l`float markerAlpha(vec2 samplePos) {
samplePos += vec2(0.5, -0.5) * texelSize;
float sdf = rgba2float(texture(tex, samplePos)) - 0.5;
float distance = sdf * vSize;
distance -= 0.5;
return clamp(0.5 - distance, 0.0, 1.0);
}`),i.hasTip&&u.constants.add("relativeMarkerSize","float",de/k).constants.add("relativeTipLineWidth","float",he).code.add(l`
    float tipAlpha(vec2 samplePos) {
      // Convert coordinates s.t. they are in pixels and relative to the tip of an arrow marker
      samplePos -= vec2(0.5, 0.5 + 0.5 * relativeMarkerSize);
      samplePos *= vSize;

      float halfMarkerSize = 0.5 * relativeMarkerSize * vSize;
      float halfTipLineWidth = 0.5 * max(1.0, relativeTipLineWidth * vLineWidth);

      ${a?"halfTipLineWidth *= fwidth(samplePos.y);":""}

      float distance = max(abs(samplePos.x) - halfMarkerSize, abs(samplePos.y) - halfTipLineWidth);
      return clamp(0.5 - distance, 0.0, 1.0);
    }
  `),e.include(ve,i),u.main.add(l`
    discardBySlice(vpos);
    ${t?"terrainDepthTest(depth);":""}

    vec4 finalColor = intrinsicColor * vColor;
    ${a?"vec2 samplePos = vUV;":"vec2 samplePos = vUV * gl_FragCoord.w;"}
    ${i.hasTip?"finalColor.a *= max(markerAlpha(samplePos), tipAlpha(samplePos));":"finalColor.a *= markerAlpha(samplePos);"}
    outputColorHighlightOID(finalColor, vpos);`),e}const be=Object.freeze(Object.defineProperty({__proto__:null,build:j},Symbol.toStringTag,{value:"Module"}));class De extends ue{constructor(e,t,a){super(e,t,new me(be,()=>$e(()=>Promise.resolve().then(()=>He),void 0)),a,Y)}_makePipelineState(e,t){const{output:a,oitPass:s,space:u,hasOccludees:d}=e;return y({blending:a===_.Color?fe(s):null,depthTest:u===S.Draped?null:{func:Se(s)},depthWrite:Te(e),drawBuffers:a===_.Depth?{buffers:[ge.NONE]}:Pe(s,a),colorWrite:w,stencilWrite:d?U:null,stencilTest:d?t?M:_e:null,polygonOffset:{factor:0,units:-10}})}initializePipeline(e){return e.occluder?(this._occluderPipelineTransparent=y({blending:W,depthTest:G,depthWrite:null,colorWrite:w,stencilWrite:null,stencilTest:Oe}),this._occluderPipelineOpaque=y({blending:W,depthTest:G,depthWrite:null,colorWrite:w,stencilWrite:Ae,stencilTest:Ee}),this._occluderPipelineMaskWrite=y({blending:null,depthTest:ye,depthWrite:null,colorWrite:null,stencilWrite:U,stencilTest:M})):this._occluderPipelineTransparent=this._occluderPipelineOpaque=this._occluderPipelineMaskWrite=null,this._occludeePipelineState=this._makePipelineState(e,!0),this._makePipelineState(e,!1)}getPipeline(e,t){return e?this._occludeePipelineState:t===f.TRANSPARENT_OCCLUDER_MATERIAL?this._occluderPipelineTransparent??super.getPipeline():t===f.OCCLUDER_MATERIAL?this._occluderPipelineOpaque??super.getPipeline():this._occluderPipelineMaskWrite??super.getPipeline()}}const Y=new Map([[r.POSITION,0],[r.PREVPOSITION,1],[r.UV0,2],[r.NORMAL,3],[r.COLOR,4],[r.COLORFEATUREATTRIBUTE,4],[r.SIZE,5],[r.SIZEFEATUREATTRIBUTE,5],[r.OPACITYFEATUREATTRIBUTE,6]]);class Ve extends Re{constructor(e){super(e,Ue),this._configuration=new we,this.vertexAttributeLocations=Y,this.produces=new Map([[f.OPAQUE_MATERIAL,t=>t===_.Highlight||I(t)&&this.parameters.renderOccluded===R.OccludeAndTransparentStencil],[f.OPAQUE_MATERIAL_WITHOUT_NORMALS,t=>Ie(t)],[f.OCCLUDER_MATERIAL,t=>H(t)&&this.parameters.renderOccluded===R.OccludeAndTransparentStencil],[f.TRANSPARENT_OCCLUDER_MATERIAL,t=>H(t)&&this.parameters.renderOccluded===R.OccludeAndTransparentStencil],[f.TRANSPARENT_MATERIAL,t=>I(t)&&this.parameters.writeDepth],[f.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,t=>I(t)&&!this.parameters.writeDepth],[f.DRAPED_MATERIAL,t=>t===_.Color||t===_.Highlight]]),this._layout=this.createLayout()}getConfiguration(e,t){return this._configuration.output=e,this._configuration.space=t.slot===f.DRAPED_MATERIAL?S.Draped:this.parameters.worldSpace?S.World:S.Screen,this._configuration.hideOnShortSegments=this.parameters.hideOnShortSegments,this._configuration.hasCap=this.parameters.cap!==q.BUTT,this._configuration.anchor=this.parameters.anchor,this._configuration.hasTip=this.parameters.hasTip,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasOccludees=t.hasOccludees,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.vvOpacity=!!this.parameters.vvOpacity,this._configuration.occluder=this.parameters.renderOccluded===R.OccludeAndTransparentStencil,this._configuration.oitPass=t.oitPass,this._configuration.terrainDepthTest=t.terrainDepthTest,this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration}get visible(){return this.parameters.color[3]>=xe}intersect(){}createLayout(){const e=ze().vec3f(r.POSITION).vec3f(r.PREVPOSITION).vec2f(r.UV0);return this.parameters.worldSpace&&e.vec3f(r.NORMAL),this.parameters.vvSize?e.f32(r.SIZEFEATUREATTRIBUTE):e.f32(r.SIZE),this.parameters.vvColor?e.f32(r.COLORFEATUREATTRIBUTE):e.vec4f(r.COLOR),this.parameters.vvOpacity&&e.f32(r.OPACITYFEATUREATTRIBUTE),e}createBufferWriter(){return new Me(this._layout,this.parameters)}createGLMaterial(e){return new ke(e)}}class ke extends Ne{constructor(){super(...arguments),this._markerPrimitive=null}dispose(){super.dispose(),this._markerTextures.release(this._markerPrimitive),this._markerPrimitive=null}beginSlot(e){const t=this._material.parameters.markerPrimitive;return t!==this._markerPrimitive&&(this._material.setParameters({markerTexture:this._markerTextures.swap(t,this._markerPrimitive)}),this._markerPrimitive=t),this._material.setParameters(this.textureBindParameters),this.acquireTechnique(De,e)}}class Ue extends Le{constructor(){super(...arguments),this.width=0,this.color=[1,1,1,1],this.markerPrimitive="arrow",this.placement="end",this.cap=q.BUTT,this.anchor=V.Center,this.hasTip=!1,this.worldSpace=!1,this.hideOnShortSegments=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.markerTexture=null}}class Me{constructor(e,t){this.vertexBufferLayout=e,this._parameters=t}elementCount(){return this._parameters.placement==="begin-end"?12:6}write(e,t,a,s,u,d){const p=a.get(r.POSITION).data,x=p.length/3;let O=[1,0,0];const z=a.get(r.NORMAL);this._parameters.worldSpace&&z!=null&&(O=z.data);let N=1,L=0;this._parameters.vvSize?L=a.get(r.SIZEFEATUREATTRIBUTE).data[0]:a.has(r.SIZE)&&(N=a.get(r.SIZE).data[0]);let T=[1,1,1,1],C=0;this._parameters.vvColor?C=a.get(r.COLORFEATUREATTRIBUTE).data[0]:a.has(r.COLOR)&&(T=a.get(r.COLOR).data);let $=0;this._parameters.vvOpacity&&($=a.get(r.OPACITYFEATUREATTRIBUTE).data[0]);const n=new Float32Array(u.buffer);let o=d*(this.vertexBufferLayout.stride/4);const g=(c,P,h,v)=>{if(n[o++]=c[0],n[o++]=c[1],n[o++]=c[2],n[o++]=P[0],n[o++]=P[1],n[o++]=P[2],n[o++]=h[0],n[o++]=h[1],this._parameters.worldSpace&&(n[o++]=O[0],n[o++]=O[1],n[o++]=O[2]),this._parameters.vvSize?n[o++]=L:n[o++]=N,this._parameters.vvColor)n[o++]=C;else{const m=Math.min(4*v,T.length-4);n[o++]=T[m],n[o++]=T[m+1],n[o++]=T[m+2],n[o++]=T[m+3]}this._parameters.vvOpacity&&(n[o++]=$)};let A;(function(c){c[c.ASCENDING=1]="ASCENDING",c[c.DESCENDING=-1]="DESCENDING"})(A||(A={}));const b=(c,P)=>{const h=F(We,p[3*c],p[3*c+1],p[3*c+2]),v=Ge;let m=c+P;do F(v,p[3*m],p[3*m+1],p[3*m+2]),m+=P;while(Ce(h,v)&&m>=0&&m<x);e&&(B(h,h,e),B(v,v,e)),g(h,v,[-1,-1],c),g(h,v,[1,-1],c),g(h,v,[1,1],c),g(h,v,[-1,-1],c),g(h,v,[1,1],c),g(h,v,[-1,1],c)},E=this._parameters.placement;E!=="begin"&&E!=="begin-end"||b(0,A.ASCENDING),E!=="end"&&E!=="begin-end"||b(x-1,A.DESCENDING)}}const We=Z(),Ge=Z(),He=Object.freeze(Object.defineProperty({__proto__:null,build:j},Symbol.toStringTag,{value:"Module"}));export{Ve as g};
