import{h2 as U,kG as q,dL as J,m2 as F,dO as K,dQ as u,a0 as He,bY as Oe,dP as Ie,m4 as Z,tI as Be,Eh as Xe,oU as V,ka as k,ei as Te,Ei as ne,vi as je,vf as re,dN as We,vj as Ue,rT as Qe,ed as oe,bO as ke,Ej as Ze,ew as pe,v9 as Je,Ek as ge,p1 as Ke,iw as me,El as Ye,mW as et,xH as tt,hN as _e,wG as fe,eb as st,tB as it,n4 as rt,_ as a,$ as d,a1 as se,a2 as ce,aj as I,ak as ye,ee as nt,ef as ot,L as at,c0 as lt,c3 as ve,Cq as ht,ar as ae,n3 as dt,bu as ct,D9 as ut,Da as pt,du as Y,Dc as Le,De as gt,DX as mt,Em as we,Di as _t,Dj as N,Dm as ft,En as yt,hi as H,Do as vt,Dp as Lt,E2 as wt,Dq as Ct,Dr as St,Dt as Pt,Du as $t,Dv as At,Dw as Mt,Dl as R,Dn as bt,DB as Dt,Dh as Ce,ms as B,DF as Vt,DD as Gt,Eo as xt,DK as Rt,sk as qe,n9 as ee,na as z,xJ as zt,o_ as Se,nh as Pe,wI as Et,dt as Ot,dv as $e,CC as It,tW as Ae,tC as Me,CA as Tt,p9 as be,h4 as jt,pw as Wt,u$ as Ut,Z as kt,ad as $,Ep as qt,js as Ft,li as Nt,jz as Ht,jy as Bt,jw as Xt,ju as Qt,u_ as Zt}from"./chunk-8J0p1hu6.js";import{t as le,e as he,a as Jt,b as Kt}from"./chunk-1ziYIXO4.js";import{s as Yt}from"./chunk-rgEee4Zw.js";import{i as j,l as De,f as es}from"./chunk-fYOUoC4P.js";import{geodesicArea as ts}from"./chunk-S7WB2n_r.js";import{U as Ve}from"./chunk-6-Nb4V2Y.js";import{b as ss,a as is,u as W}from"./chunk-UFNAsOXv.js";import{V as Ge,p as rs,w as ns,l as os}from"./chunk-ZBxQhTnx.js";import{h as xe}from"./chunk-1oUrF1Fd.js";import{g as Re,_ as as,m as ls}from"./chunk-w-XG7Vb9.js";import{_ as hs}from"./chunk-EUQwHdIv.js";import"./chunk-x2EARIDc.js";import"./chunk-MCxy10OK.js";import"./chunk-VfIefhEF.js";import"./chunk-5foVPmTG.js";function ze(t,e,s,i,r){U(X,t),q(Q,t,e),J(X,s,X,r),J(Q,s,Q,r),F(i,Q,X),K(i,i)}const X=u(),Q=u();function ds(t,e){const s=e.center;Ie(s,0,0,0);for(let r=0;r<t.length;++r)q(s,s,t[r]);Z(s,s,1/t.length);let i=0;for(let r=0;r<t.length;++r)i=Math.max(i,Be(s,t[r]));e.radius=Math.sqrt(i)}function cs(t,e){if(t.length<3)throw new Error("need at least 3 points to fit a plane");Xe(t[0],t[1],t[2],e)}function us(t,e){return V(t,e)+t[3]}function ps(t,e,s){return k(t,G,s)&&k(e,x,s)?Te(G,x):0}function gs(t,e){if(!ne(t,G)||!ne(e,x))return 0;const s=new Ue;return je(s,[G[0],G[1]],[x[0],x[1]]),s.distance}function ms(t,e,s){const i=new Ue;return je(i,[t[0],t[1]],[e[0],e[1]],s),i.distance}function _s(t,e,s,i){const r=ys;return re(t,i,G)&&re(e,i,x)&&re(s,i,de)?(r.setPoint(0,0,G),r.setPoint(0,1,x),r.setPoint(0,2,de),Math.abs(ts(r,"square-meters"))):0}function fs(t,e=null,s=!0){const r=(n,o)=>{if(o[0]===0&&o[1]===0&&o[2]===0)return!1;for(let l=0;l<n.length;++l)if(V(o,n[l])<-1e-6)return!1;return!0};if(t.length===0)return!1;if(t.length===1)return e&&U(e,t[0]),!0;Ie(w,0,0,0);for(let n=0;n<t.length;++n)q(w,w,t[n]);if(K(w,w),r(t,w))return e&&U(e,w),!0;if(!s)return!1;for(let n=0;n<t.length;++n)for(let o=0;o<t.length;++o)if(n!==o&&(We(w,t[n],t[o]),K(w,w),r(t,w)))return e&&U(e,w),!0;return!1}const G=u(),x=u(),de=u(),ys=new He({rings:[[G,x,de]],spatialReference:Oe.WGS84}),w=u();class vs{get numVertices(){return this._length}get hasStagedVertex(){return this._hasCursorPoint}constructor(e,s){this.validMeasurement=!1,this.positionsWorldCoords=[],this.positionsRenderCoords=[],this.positionsProjectedWorldCoords=[],this.positionsFittedRenderCoords=[],this.positionsGeographic=[],this.positionsSpherical=[],this.positionsStereographic=[],this.pathSegmentLengths=[],this.geodesicPathSegmentLengths=[],this.perimeterSegmentLengths=[],this.intersectingSegments=new Set,this.geodesicIntersectingSegments=new Set,this.triangleIndices=null,this.geodesicTriangleIndices=null,this.areaCentroidWorldCoords=u(),this.areaCentroidRenderCoords=u(),this.geodesicAreaCentroidRenderCoords=u(),this.area=null,this.geodesicArea=null,this.pathLength=null,this.geodesicPathLength=null,this.perimeterLength=null,this._length=0,this._centroidRenderCoords=u(),this._planeWorldCoords=Qe(),this._worldUp=u(),this._worldTangent=u(),this._frame=[u(),u(),u()],this._pathVersion=-1,this._hasCursorPoint=!1,this._mode=null,this._tempU=u(),this._tempV=u(),this._tempVec3=u(),this._tempSphere={center:u(),radius:0},this._sceneView=e,this.unitNormalizer=s}update(e,s,i,r,n,o){const l=s!=null,h=this._pathVersion===e.version,p=this._hasCursorPoint===l,c=this._mode===n;return!(h&&!o&&p&&c&&e.isValidPolygon)&&(this._pathVersion=e.version,this._hasCursorPoint=l,this._updateCursorSegmentLength(e,s),this._update(e,s,i,r,n),!0)}_update(e,s,i,r,n){const o=this.unitNormalizer,l=this._sceneView.renderSpatialReference,h=this.unitNormalizer.spatialReference;let p=e.numVertices;const c=!(s==null||s.equals(e.lastPoint)||p>2&&s.equals(e.firstPoint));c&&(p+=1);const g=!e.polygonIsClosed&&p>2,m=e.polygonIsClosed||g;this._resize(p);const f=oe(i.spatialReference),A=ke(i.spatialReference,f)&&Ze(i.spatialReference),{positionsGeographic:C,positionsWorldCoords:b,positionsRenderCoords:M,positionsSpherical:E}=this,T=(y,v)=>{Ls(i.elevationProvider,y),k(y,b[v],h),k(y,M[v],l),A&&(ne(y,C[v]),k(y,E[v],f),K(E[v],E[v]))};e.forEachVertexPosition((y,v)=>T(y,v)),c&&T(s,p-1);const P=this._updatePathLengths(m);if(this.pathLength=this._length>1?j(o.normalizeDistance(P),"meters"):null,A){const y=this._updateGeodesicPathLengths(m,h);this.geodesicPathLength=this._length>1?j(y,"meters"):null}else this.geodesicPathLength=null;if(this._updateMode(n),!m)return this.area=null,this.geodesicArea=null,this.perimeterLength=null,this.triangleIndices=null,this.geodesicTriangleIndices=null,this.intersectingSegments.clear(),this.geodesicIntersectingSegments.clear(),void(this.validMeasurement=!1);this._updateAreaAndPerimeterLength(i,o,l,h,r),A&&this._updateGeodesicArea(i),this.validMeasurement=!0}getData(){return{validMeasurement:this.validMeasurement,numVertices:this.numVertices,hasStagedVertex:this.hasStagedVertex,positionsWorldCoords:this.positionsWorldCoords,positionsRenderCoords:this.positionsRenderCoords,positionsProjectedWorldCoords:this.positionsProjectedWorldCoords,positionsFittedRenderCoords:this.positionsFittedRenderCoords,positionsGeographic:this.positionsGeographic,positionsSpherical:this.positionsSpherical,positionsStereographic:this.positionsStereographic,pathSegmentLengths:this.pathSegmentLengths,geodesicPathSegmentLengths:this.geodesicPathSegmentLengths,perimeterSegmentLengths:this.perimeterSegmentLengths,intersectingSegments:this.intersectingSegments,geodesicIntersectingSegments:this.geodesicIntersectingSegments,triangleIndices:this.triangleIndices,geodesicTriangleIndices:this.geodesicTriangleIndices,areaCentroidWorldCoords:this.areaCentroidWorldCoords,areaCentroidRenderCoords:this.areaCentroidRenderCoords,geodesicAreaCentroidRenderCoords:this.geodesicAreaCentroidRenderCoords,fittingMode:this.fittingMode,area:this.area,geodesicArea:this.geodesicArea,pathLength:this.pathLength,geodesicPathLength:this.geodesicPathLength,perimeterLength:this.perimeterLength,unitNormalizer:this.unitNormalizer,actualMeasurementMode:this.actualMeasurementMode}}_resize(e){for(e<this._length&&(this.positionsWorldCoords.length=e,this.positionsRenderCoords.length=e,this.positionsProjectedWorldCoords.length=e,this.positionsFittedRenderCoords.length=e,this.positionsGeographic.length=e,this.positionsSpherical.length=e,this.positionsStereographic.length=e,this.pathSegmentLengths.length=e,this.geodesicPathSegmentLengths.length=e,this.perimeterSegmentLengths.length=e,this._length=e);this._length<e;)this.positionsWorldCoords.push(u()),this.positionsRenderCoords.push(u()),this.positionsProjectedWorldCoords.push(pe()),this.positionsFittedRenderCoords.push(u()),this.positionsGeographic.push(u()),this.positionsSpherical.push(u()),this.positionsStereographic.push(pe()),this.pathSegmentLengths.push(0),this.geodesicPathSegmentLengths.push(0),this.perimeterSegmentLengths.push(0),++this._length}_updatePathLengths(e){const s=this.positionsWorldCoords,i=this.pathSegmentLengths;let r=0;for(let n=0;n<this._length;++n){const o=i[n]=Te(s[n],s[(n+1)%this._length]);(n<this._length-1||e)&&(r+=o)}return r}_updateGeodesicPathLengths(e,s){const i=this.positionsGeographic,r=this.geodesicPathSegmentLengths;let n=0;for(let o=0;o<this._length;++o){const l=r[o]=ms(i[o],i[(o+1)%this._length],s??void 0);(o<this._length-1||e)&&(n+=l)}return n}_updateAreaAndPerimeterLength(e,s,i,r,n){const o=e.renderCoordsHelper,l=this.positionsWorldCoords,h=this.positionsRenderCoords,p=this.positionsProjectedWorldCoords,c=this.positionsFittedRenderCoords,g=this._planeWorldCoords,m=this._centroidRenderCoords;le(h,m),o.worldUpAtPosition(m,this._worldUp),o.worldBasisAtPosition(m,Je.X,this._worldTangent),ze(m,this._worldUp,i,this._worldUp,r),ze(m,this._worldTangent,i,this._worldTangent,r),l.length>2&&cs(l,g),this.fittingMode=this._selectFittingMode(g,l,this._worldUp,n);let f=0;if(this.fittingMode==="horizontal"){let P=-1/0;h.forEach((y,v)=>{const ue=o.getAltitude(h[v]);ue>P&&(P=ue,f=v)})}const A=l[f];let C=g,b=this._worldTangent;this.fittingMode==="horizontal"?C=this._worldUp:this.fittingMode==="vertical"&&(C=this._tempVec3,b=this._worldUp,ge(g,this._worldUp,C)),U(this._frame[2],C),ge(b,C,this._frame[0]),We(this._frame[1],this._frame[0],this._frame[2]),Ke(this._frame[1],this._frame[1]);const M=this._tempVec3,E=this._tempU,T=this._tempV;for(let P=0;P<this._length;++P){const y=p[P],v=c[P];F(M,l[P],A),me(y,V(this._frame[0],M),V(this._frame[1],M)),Z(E,this._frame[0],y[0]),Z(T,this._frame[1],y[1]),q(M,E,T),q(M,M,A),J(M,r,v,i)}this.perimeterLength=this._length>0?j(s.normalizeDistance(this._updatePerimeterLengths()),"meters"):null,le(c,this.areaCentroidRenderCoords),J(this.areaCentroidRenderCoords,i,this.areaCentroidWorldCoords,r),this._updateIntersectingSegments(),this.area=this.intersectingSegments.size===0?De(s.normalizeArea(this._computeArea()),"square-meters"):null}_updateGeodesicArea(e){const{renderCoordsHelper:s,spatialReference:i}=e,{positionsSpherical:r,positionsStereographic:n}=this,o=this._tempVec3,l=fs(r,o);if(!l)return void(this.geodesicArea=null);const h=this._tempU,p=this._tempV;Ye(o,h,p);for(let c=0;c<this._length;++c){const g=V(r[c],h),m=V(r[c],p),f=V(r[c],o);me(n[c],g/f,m/f)}Z(o,o,et(i).radius),s.toRenderCoords(o,oe(i),this.geodesicAreaCentroidRenderCoords),this._updateGeodesicIntersectingSegments(),this.geodesicArea=l&&this.geodesicIntersectingSegments.size===0?De(this._computeGeodesicArea(),"square-meters"):null}_updatePerimeterLengths(){const e=this.positionsProjectedWorldCoords,s=this.perimeterSegmentLengths;let i=0;for(let r=0;r<this._length;++r)i+=s[r]=tt(e[r],e[(r+1)%this._length]);return i}_updateIntersectingSegments(){const e=this.positionsProjectedWorldCoords,s=this.intersectingSegments;s.clear();for(let i=0;i<this._length;++i)for(let r=i+2;r<this._length;++r){if((r+1)%this._length===i)continue;const n=e[i],o=e[(i+1)%this._length],l=e[r],h=e[(r+1)%this._length];_e(n,o,l,h)&&(s.add(i),s.add(r))}}_computeArea(){const e=this.positionsProjectedWorldCoords,s=this.triangleIndices=fe(Ve(e));let i=0;for(let r=0;r<s.length;r+=3)i+=st(e[s[r]],e[s[r+1]],e[s[r+2]]);return i}_updateGeodesicIntersectingSegments(){const e=this.positionsStereographic,s=this.geodesicIntersectingSegments;s.clear();for(let i=0;i<this._length;++i)for(let r=i+2;r<this._length;++r){if((r+1)%this._length===i)continue;const n=e[i],o=e[(i+1)%this._length],l=e[r],h=e[(r+1)%this._length];_e(n,o,l,h)&&(s.add(i),s.add(r))}}_computeGeodesicArea(){const e=this.positionsGeographic,s=this.positionsStereographic,i=this.geodesicTriangleIndices=fe(Ve(s));let r=0;for(let n=0;n<i.length;n+=3)r+=_s(e[i[n]],e[i[n+1]],e[i[n+2]],Oe.WGS84);return r}_selectFittingMode(e,s,i,r){const n=s.map(c=>Math.abs(us(e,c))).reduce((c,g)=>Math.max(c,g),0);ds(s,this._tempSphere);const o=n/(2*this._tempSphere.radius),l=o<r.maxRelativeErrorCoplanar,h=o<r.maxRelativeErrorAlmostCoplanar;let p="horizontal";return l?p="oblique":h&&(p=Math.abs(V(i,e))>Math.cos(it(r.verticalAngleThreshold))?"horizontal":"vertical"),p}_updateCursorSegmentLength(e,s){const i=e.lastPoint;e.isValidPolygon||i==null||s==null?(this.geodesicStagedSegmentLength=null,this.stagedSegmentLength=null):(this.geodesicStagedSegmentLength=j(gs(i,s),"meters"),this.stagedSegmentLength=j(this.unitNormalizer.normalizeDistance(ps(i,s,this.unitNormalizer.spatialReference)),"meters"))}_updateMode(e){if(e===he.Auto){this.actualMeasurementMode="euclidean";let s=0;this.geodesicPathLength!=null&&(s+=this.geodesicPathLength.value),s>ws&&(this.actualMeasurementMode="geodesic")}else this.actualMeasurementMode=e===he.Euclidean?"euclidean":"geodesic";this.geodesicPathLength==null&&(this.actualMeasurementMode="euclidean"),this._mode=e}}function Ls(t,e){e.hasZ||(e.z=rt(t,e,"ground")??0)}const ws=1e5;let O=class extends ce{constructor(t){super(t)}initialize(){const t=this.view.spatialReference,e=oe(t),s=e===nt?ot:e,i=!t||ke(t,s)?s:t,r=new Jt(i);this._measurementDataManager=new vs(this.view,r),this.addHandles([this.analysisViewData.path.on("change",()=>this._update()),I(()=>this.analysisViewData.stagedPoint,()=>this._update(),ye),I(()=>this.analysisViewData.mode,()=>this._update(),ye)]),this._update()}_update(t=!1){const{analysisViewData:e,view:s}=this,i={maxRelativeErrorCoplanar:.005,maxRelativeErrorAlmostCoplanar:.01,verticalAngleThreshold:80};this._measurementDataManager.update(e.path,e.stagedPoint,s,i,e.mode,t)&&(e.measurementData=this._measurementDataManager.getData())}};a([d({constructOnly:!0})],O.prototype,"view",void 0),a([d({constructOnly:!0})],O.prototype,"analysis",void 0),a([d({constructOnly:!0})],O.prototype,"analysisViewData",void 0),O=a([se("esri.views.3d.analysis.AreaMeasurement.support.AreaMeasurementController")],O);const Fe="esri.views.3d.analysis.AreaMeasurement.support.AreaMeasurement3DPathHelper",Cs=at.getLogger(Fe);let S=class extends lt.EventedAccessor{constructor(t={}){super(t),this._version=0,this._internalGeometryChange=!1,this._extent=ve()}set areaMeasurement(t){this._set("areaMeasurement",t),t!=null&&this.view!=null&&this._initialize(t,this.view)}set view(t){this._set("view",t),t!=null&&this.areaMeasurement!=null&&this._initialize(this.areaMeasurement,t)}get constructed(){return this.areaMeasurement!=null&&this.view!=null}get version(){return this._version}get isEmptyPolygon(){return!this.constructed||this._editGeometry.components.length===0}get isValidPolygon(){return this.constructed&&this.polygonIsClosed}get extent(){if(this.constructed&&this._editGeometry.components.length>0&&this._editGeometry.components[0].vertices.length>0){const t=ve(this._extent);return this.forEachVertex(e=>{ht(t,e.pos)}),t}return null}get spatialReference(){return this.constructed?this._editGeometry.coordinateHelper.spatialReference:null}_initialize(t,e){this.removeAllHandles(),this.addHandles(I(()=>t.geometry,()=>{this._updateEditGeometryFromModelGeometry(t,e)},ae)),this._makeDirty(!0)}_makeDirty(t=!1){this.notifyChange("polygonIsClosed"),this.notifyChange("isValidPolygon"),this.notifyChange("initialized"),this.notifyChange("extent"),t&&this.notifyChange("numVertices")}_updateEditGeometryFromModelGeometry(t,e){if(this._version++,this._internalGeometryChange)return;this.removeHandles("EditGeometry");let s=t.geometry;if(s!=null){const i=dt(s,e.spatialReference);i==null&&ss(t,s.spatialReference,Cs),s=i}this._editGeometryOperations=s!=null?Ge.fromGeometry(s,e.state.viewingMode):new Ge(new rs("polygon",ns(!0,!1,e.spatialReference))),this._makeDirty(!0),this.emit("change"),this.addHandles(this._editGeometry.on("change",i=>{this._makeDirty(i.addedVertices!=null||i.removedVertices!=null),this._internalGeometryChange=!0,t.geometry=this.numVertices>0?this._editGeometry.geometry:null,this._internalGeometryChange=!1}),"EditGeometry")}get _editGeometry(){return this._editGeometryOperations.data}get vertices(){const t=[];return this.forEachVertex(e=>{t.push(e)}),t}get numVertices(){return this.constructed&&this._editGeometry.components.length>0?this._editGeometry.components[0].vertices.length:0}get polygonIsClosed(){return this._editGeometry.components.length>0&&this._editGeometry.components[0].isClosed()}get firstPoint(){if(this.constructed&&this._editGeometry.components.length>0){const t=this._editGeometry.components[0].getFirstVertex();if(t!=null)return this._editGeometry.coordinateHelper.vectorToPoint(t.pos)}return null}get lastPoint(){if(this.constructed&&this._editGeometry.components.length>0){const t=this._editGeometry.components[0].getLastVertex();if(t!=null)return this._editGeometry.coordinateHelper.vectorToPoint(t.pos)}return null}getVertex(t){if(!this.constructed||this._editGeometry.components.length===0||this._editGeometry.components[0].vertices.length===0)return null;const e=this._editGeometry.components[0].vertices[0];let s=e;do{if(s.index===t)return s;s=s.rightEdge.rightVertex}while(s!==e&&s!=null);return null}getVertexPositionAsPoint(t){return this._editGeometry.coordinateHelper.vectorToPoint(t.pos)}getVertexPositionAsPointFromIndex(t){return this._editGeometry.coordinateHelper.vectorToPoint(this.getVertex(t).pos)}forEachVertex(t){this.constructed&&this._editGeometry.components.length>0&&this._editGeometry.components[0].iterateVertices(t)}forEachVertexPosition(t){const e=this._editGeometry.coordinateHelper;this.forEachVertex((s,i)=>{e.vectorToPoint(s.pos,Ee),t(Ee,i)})}clear(){this.areaMeasurement!=null&&(this.areaMeasurement.geometry=null)}add(t){if(!this.constructed)return null;if(this._editGeometry.components.length===0){const s=this.view;this._editGeometry.components.push(new os(s.spatialReference,s.state.viewingMode))}const e=this._editGeometryOperations.appendVertex(this._editGeometry.coordinateHelper.pointToVector(t));return this.emit("change"),e}close(){if(!this.constructed||this._editGeometry.components.length===0)return null;const t=this._editGeometryOperations.closeComponent(this._editGeometry.components[0]);return this.emit("change"),t}ensureContains(t,e=""){let s=!1;if(this._editGeometry.components.forEach(i=>{i.iterateVertices(r=>{r===t&&(s=!0)})}),!s)throw new Error(`vertex doesnt exist ${e}`);return s}setVertexPosition(t,e){if(!this.constructed)return null;const s=this._editGeometryOperations.setVertexPosition(t,this._editGeometry.coordinateHelper.pointToVector(e));return this.emit("change"),s}equals(t){if(this.numVertices!==t.numVertices)return!1;let e=!0;return this.forEachVertexPosition((s,i)=>{const r=t.getVertexPositionAsPointFromIndex(i);s.equals(r)||(e=!1)}),!!e}};a([d({value:null})],S.prototype,"areaMeasurement",null),a([d({value:null})],S.prototype,"view",null),a([d()],S.prototype,"isEmptyPolygon",null),a([d()],S.prototype,"isValidPolygon",null),a([d()],S.prototype,"extent",null),a([d()],S.prototype,"spatialReference",null),a([d()],S.prototype,"numVertices",null),a([d()],S.prototype,"polygonIsClosed",null),S=a([se(Fe)],S);const Ee=new ct;function Ne(t){const e=new ut,{vertex:s,fragment:i}=e;return pt(s,t),e.attributes.add(Y.POSITION,"vec3"),e.attributes.add(Y.UV0,"vec2"),e.varyings.add("vUV","vec2"),t.multipassEnabled&&e.varyings.add("depth","float"),s.code.add(Le`
    void main(void) {
      vUV = uv0;
      ${t.multipassEnabled?"depth = (view * vec4(position, 1.0)).z;":""}
      gl_Position = proj * view * vec4(position, 1.0);
    }
  `),e.include(gt,t),i.uniforms.add(new mt("size",r=>r.size)),i.uniforms.add(new we("color1",r=>r.color1)),i.uniforms.add(new we("color2",r=>r.color2)),i.include(_t),i.code.add(Le`
    void main() {
      ${t.multipassEnabled?"terrainDepthTest(depth);":""}
      vec2 uvScaled = vUV / (2.0 * size);

      vec2 uv = fract(uvScaled - 0.25);
      vec2 ab = clamp((abs(uv - 0.5) - 0.25) / fwidth(uvScaled), -0.5, 0.5);
      float fade = smoothstep(0.25, 0.5, max(fwidth(uvScaled.x), fwidth(uvScaled.y)));
      float t = mix(abs(ab.x + ab.y), 0.5, fade);

      fragColor = mix(color2, color1, t);
      ${t.transparencyPassType===N.Color?"fragColor = premultiplyAlpha(fragColor);":""}
    }
  `),e}const Ss=Object.freeze(Object.defineProperty({__proto__:null,build:Ne},Symbol.toStringTag,{value:"Module"}));class ie extends vt{initializeProgram(e){return new Lt(e.rctx,ie.shader.get().build(this.configuration),wt)}_setPipelineState(e){const s=this.configuration,i=e===N.NONE,r=e===N.FrontFace;return Ct({blending:s.transparent?i?$s:St(e):null,depthTest:{func:Pt(e)},depthWrite:i?s.writeDepth?$t:null:At(e),colorWrite:Mt,polygonOffset:i||r?s.polygonOffset?Ps:null:{factor:-1,units:-25}})}initializePipeline(){return this._setPipelineState(this.configuration.transparencyPassType)}}ie.shader=new ft(Ss,()=>hs(()=>Promise.resolve().then(()=>xs),void 0));const Ps={factor:0,units:-25},$s=yt(H.SRC_ALPHA,H.ONE,H.ONE_MINUS_SRC_ALPHA,H.ONE_MINUS_SRC_ALPHA);class D extends bt{constructor(){super(...arguments),this.transparencyPassType=N.NONE,this.transparent=!1,this.writeDepth=!0,this.polygonOffset=!1,this.multipassEnabled=!1,this.cullAboveGround=!1}}a([R({count:N.COUNT})],D.prototype,"transparencyPassType",void 0),a([R()],D.prototype,"transparent",void 0),a([R()],D.prototype,"writeDepth",void 0),a([R()],D.prototype,"polygonOffset",void 0),a([R()],D.prototype,"multipassEnabled",void 0),a([R()],D.prototype,"cullAboveGround",void 0),a([R({constValue:!1})],D.prototype,"occlusionPass",void 0);class As extends Dt{constructor(e){super(e,new bs),this._configuration=new D}getConfiguration(e,s){return this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.polygonOffset=this.parameters.polygonOffset,this._configuration.transparencyPassType=s.transparencyPassType,this._configuration.multipassEnabled=s.multipassEnabled,this._configuration.cullAboveGround=s.multipassTerrain.cullAboveGround,this._configuration}produces(e,s){return s===Ce.Color||s===Ce.Alpha?e===(this.parameters.transparent?this.parameters.writeDepth?B.TRANSPARENT_MATERIAL:B.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:B.OPAQUE_MATERIAL)||e===B.DRAPED_MATERIAL:!1}createGLMaterial(e){return new Ms(e)}createBufferWriter(){return new Vt(Gt)}}class Ms extends xt{beginSlot(e){return this.ensureTechnique(ie,e)}}class bs extends Rt{constructor(){super(...arguments),this.size=qe(1,1),this.color1=ee(.75,.75,.75,1),this.color2=ee(.5,.5,.5,1),this.transparent=!1,this.writeDepth=!0,this.polygonOffset=!1}}class Ds extends is{constructor(e){super(e),this._checkerBoardMaterial=null,this._renderOccluded=z.OccludeAndTransparent,this._geometry=null,this._size=qe(1,1),this._color1=ee(1,.5,0,.5),this._color2=ee(1,1,1,.5),this.applyProperties(e)}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateMaterial())}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this.recreateGeometry()}get size(){return this._size}set size(e){zt(this._size,e),this._updateMaterial()}get color1(){return this._color1}set color1(e){Se(e,this._color1)||(Pe(this._color1,e),this._updateMaterial())}get color2(){return this._color2}set color2(e){Se(e,this._color2)||(Pe(this._color2,e),this._updateMaterial())}_updateMaterial(){this._checkerBoardMaterial!=null&&this._checkerBoardMaterial.setParameters({size:this._size,color1:this._color1,color2:this._color2,renderOccluded:this._renderOccluded})}createExternalResources(){this._checkerBoardMaterial=new As({size:this._size,color1:this._color1,color2:this._color2,transparent:!0,writeDepth:!1,polygonOffset:!0,renderOccluded:z.OccludeAndTransparent,isDecoration:this.isDecoration})}destroyExternalResources(){this._checkerBoardMaterial=null}forEachExternalMaterial(e){this._checkerBoardMaterial!=null&&e(this._checkerBoardMaterial)}createGeometries(e){if(this._geometry==null||this._checkerBoardMaterial==null)return;const s=Vs;Et(s,this.transform);const i=this._geometry,r=[],n=u();i.position.forEach(h=>{F(n,h,s),r.push(n[0],n[1],n[2])});const o=[];i.uv.forEach(h=>{o.push(h[0],h[1])});const l=new Ot(this._checkerBoardMaterial,[[Y.POSITION,new $e(r,i.triangleIndices,3,!0)],[Y.UV0,new $e(o,i.triangleIndices,2,!0)]]);e.addGeometry(l)}}const Vs=u();let L=class extends ce{get _parameters(){const{accentColor:t,textColor:e}=this.view.effectiveTheme,s=It(t),i=Ae(t,.5),r=Ae(Me(t),.5),n=Me(e,Tt.Low);return{accentColor:s,transparentAccentColor:i,transparentContrastColor:r,intersectingLineColor:[1,.2,0,1],textColor:e,textBackgroundColor:be(n,.6),textCalloutColor:be(n,.5),pathLineWidth:3,perimeterLineWidth:2,projectionLineWidth:2,projectionLineStippleSize:5,labelDistance:25}}get visible(){return this.analysisViewData.visible}get testData(){return{labels:{area:this._areaLabel,perimeterLength:this._perimeterLengthLabel}}}constructor(t){super(t),this._path=null,this._intersectedPath=null,this._perimeter=null,this._intersectedPerimeter=null,this._projectionLines=null,this._measurementArea=null,this._areaLabel=null,this._perimeterLengthLabel=null,this._pathSegments=[],this._perimeterSegments=[],this._origin=u(),this._originTransform=jt(),this.messages=null,this.viewData=Gs,this.areaLabel=null,this.perimeterLengthLabel=null,this.loadingMessages=!0}initialize(){const{analysisViewData:t,_parameters:e,view:s}=this;this._path=new W({view:s,attached:!0,width:e.pathLineWidth,polygonOffset:!0,renderOccluded:z.OccludeAndTransparent,isDecoration:!0}),this._intersectedPath=new W({view:s,attached:!0,width:e.pathLineWidth,polygonOffset:!0,renderOccluded:z.OccludeAndTransparent,isDecoration:!0}),this._perimeter=new W({view:s,attached:!0,width:e.perimeterLineWidth,polygonOffset:!0,renderOccluded:z.OccludeAndTransparent,isDecoration:!0}),this._intersectedPerimeter=new W({view:s,attached:!0,width:e.perimeterLineWidth,color:e.intersectingLineColor,polygonOffset:!0,renderOccluded:z.OccludeAndTransparent,isDecoration:!0}),this._projectionLines=new W({view:s,attached:!0,width:e.projectionLineWidth,stipplePattern:Wt(e.projectionLineStippleSize),polygonOffset:!0,renderOccluded:z.OccludeAndTransparent,isDecoration:!0}),this._measurementArea=new Ds({view:s,attached:!0,isDecoration:!0});const i={attached:!0,view:s,isDecoration:!0};this._areaLabel=new Re({...i,fontSize:te.Large}),this._perimeterLengthLabel=new Re({...i,fontSize:te.Small}),this.addHandles([I(()=>[t.mode,this.visible,t.unit,t.measurementData,t.stagedPoint],()=>this._update(),ae),I(()=>s.state?.camera,()=>this._updateLabels(),ae),Ut(()=>this._updateMessageBundle()),I(()=>this._parameters,({accentColor:r,transparentAccentColor:n,transparentContrastColor:o,textColor:l,textBackgroundColor:h,textCalloutColor:p})=>{const{_path:c,_intersectedPath:g,_perimeter:m,_projectionLines:f,_measurementArea:A,_areaLabel:C,_perimeterLengthLabel:b}=this;c.color=r,g.color=r,m.color=r,f.color=r,A.color1=n,A.color2=o,C.textColor=l,C.backgroundColor=h,C.calloutColor=p,b.textColor=l,b.backgroundColor=h,b.calloutColor=p},kt)]),this._updateMessageBundle()}destroy(){this._measurementArea=$(this._measurementArea),this._path=$(this._path),this._intersectedPath=$(this._intersectedPath),this._perimeter=$(this._perimeter),this._intersectedPerimeter=$(this._intersectedPerimeter),this._areaLabel=$(this._areaLabel),this._perimeterLengthLabel=$(this._perimeterLengthLabel),this._projectionLines=$(this._projectionLines),this.set("view",null)}_update(){if(this.destroyed||!this.view.ready||!this.view.renderCoordsHelper)return;const{analysisViewData:{measurementData:t},analysisViewData:e}=this;t!=null&&(this._updateViewData(t,e.path,e.stagedPoint),this._updateOrigin(),this._updatePathSegments(),this._updatePerimeterSegments(),this._updateArea(),this._updateProjectionLines(),this._updateLabels())}_updateViewData(t,e,s){const i=t.validMeasurement,r=t.actualMeasurementMode==="geodesic",n=r?t.geodesicArea:t.area;let o=1;if(n){const h=this._toPreferredAreaUnit(n,this.analysisViewData.unit);o=qt(Math.sqrt(h.value)/Math.sqrt(300)),o*=Math.sqrt(Ft(1,h.unit,"square-meters")),o/=t.unitNormalizer.normalizeDistance(1)}const l={validMeasurement:i,numVertices:t.numVertices,hasStagedVertex:t.hasStagedVertex,path:e,pathVersion:e.version,stagedPoint:s,measurementData:t,mode:t.actualMeasurementMode,positionsGeographic:t.positionsGeographic,positionsRenderCoords:t.positionsRenderCoords,positionsProjected:t.positionsProjectedWorldCoords,positionsFittedRenderCoords:t.positionsFittedRenderCoords,intersectingSegments:r?t.geodesicIntersectingSegments:t.intersectingSegments,triangleIndices:r?t.geodesicTriangleIndices:t.triangleIndices,fittingMode:t.fittingMode,areaCentroid:r?t.geodesicAreaCentroidRenderCoords:t.areaCentroidRenderCoords,pathLengthLabelSegmentIndex:i?0:e.numVertices-2,perimeterLengthLabelSegmentIndex:0,checkerSize:o};this._set("viewData",l)}_updateOrigin(){const t=this.viewData;le(t.positionsRenderCoords,this._origin),Nt(this._originTransform,this._origin),this._measurementArea.transform=this._originTransform,this._projectionLines.transform=this._originTransform}_createSegments(t){const e=this.viewData,s=this.view.renderCoordsHelper.spatialReference,i=e.mode,r=[],n=[],o=[],l=e.numVertices,h=e.validMeasurement?l:l-1;for(let c=0;c<h;++c){const g=e[t][c],m=e[t][(c+1)%l];let f=null;switch(i){case"euclidean":f=new ls(g,m);break;case"geodesic":f=new as(g,m,s)}e.intersectingSegments.has(c)?o.push(f):n.push(f),r.push(f)}let p=null;return e.validMeasurement&&e.hasStagedVertex&&h>=2?p=r[r.length-2]:e.hasStagedVertex&&h>=1&&(p=r[r.length-1]),{all:r,nonIntersecting:n,intersecting:o,stagedSegment:p}}_updatePathSegments(){const{visible:t}=this,e=this._createSegments("positionsRenderCoords");this._path.setGeometryFromSegments(e.nonIntersecting,this._origin),this._path.visible=t,this._intersectedPath.setGeometryFromSegments(e.intersecting,this._origin),this._intersectedPath.visible=t,this._pathSegments=e.all}_updatePerimeterSegments(){const t=this.visible&&this.viewData.mode==="euclidean",e=this._createSegments("positionsFittedRenderCoords");this._perimeter.setGeometryFromSegments(e.nonIntersecting,this._origin),this._perimeter.visible=t,this._intersectedPerimeter.setGeometryFromSegments(e.intersecting,this._origin),this._intersectedPerimeter.visible=t,this._perimeterSegments=e.all}_updateArea(){const t=this.viewData;switch(t.mode){case"euclidean":this._updateAreaEuclidean(t);break;case"geodesic":this._updateAreaGeodesic()}}_updateAreaEuclidean(t){const e=this.visible;t.validMeasurement&&t.intersectingSegments.size===0&&t.triangleIndices?(this._measurementArea.geometry={uv:t.positionsProjected,position:t.positionsFittedRenderCoords,triangleIndices:t.triangleIndices},this._measurementArea.size=[t.checkerSize,t.checkerSize],this._measurementArea.visible=e):this._measurementArea.visible=!1}_updateAreaGeodesic(){this._measurementArea.visible=!1}_updateProjectionLines(){const t=this.viewData,e=this.visible,s=t.mode,i=t.numVertices;if(i>0&&t.validMeasurement&&s==="euclidean"){const r=[];for(let n=0;n<i;++n){const o=u();F(o,t.positionsRenderCoords[n],this._origin);const l=u();F(l,t.positionsFittedRenderCoords[n],this._origin),r.push([o,l])}this._projectionLines.geometry=r,this._projectionLines.visible=e}else this._projectionLines.geometry=null,this._projectionLines.visible=!1}_updateLabels(){if(this.destroyed)return;const{viewData:t}=this,{measurementData:e,mode:s,path:i}=t;if(!i)return;const r=this.visible,n=this._formatAreaLabel(this.messages,s==="geodesic"?e.geodesicArea:e.area,this.analysisViewData.unit);if(n!=null?(this._areaLabel.geometry={type:"point",point:t.areaCentroid},this._areaLabel.text=n,this._areaLabel.visible=t.validMeasurement&&t.intersectingSegments.size===0&&r):this._areaLabel.visible=!1,this._set("areaLabel",n),t.validMeasurement&&t.intersectingSegments.size===0){const o=t.mode==="geodesic",l=o?e.geodesicPathLength:e.validMeasurement?e.perimeterLength:e.pathLength,h=this._formatLengthLabel(this.messages,l,this.analysisViewData.unit);this._set("perimeterLengthLabel",h),this._perimeterLengthLabel.distance=this._parameters.labelDistance,this._perimeterLengthLabel.anchor="top",this._perimeterLengthLabel.text=h,this._perimeterLengthLabel.visible=!0;let p=!0;for(let c=0;c<t.numVertices;++c){const g=(t.perimeterLengthLabelSegmentIndex+c)%t.numVertices,m=o||!e.validMeasurement?this._pathSegments[g]:this._perimeterSegments[g];if(p=!0,this._perimeterLengthLabel.geometry={type:"segment",segment:m,sampleLocation:"center"},!this._perimeterLengthLabel.overlaps(this._areaLabel))break;p=!1}this._perimeterLengthLabel.visible=p&&r}else this._perimeterLengthLabel.visible=!1}_toPreferredAreaUnit(t,e){return es(t,this._preferredAreaUnit(t,e))}_preferredAreaUnit(t,e){switch(e){case"metric":return Bt(t.value,t.unit);case"imperial":return Ht(t.value,t.unit);default:return e}}_preferredLengthUnit(t,e){const s=this._deriveLengthUnitFromAreaUnit(e);switch(s){case"metric":return Qt(t.value,t.unit);case"imperial":return Xt(t.value,t.unit);default:return s}}_deriveLengthUnitFromAreaUnit(t){switch(t){case"metric":case"ares":case"hectares":return"metric";case"imperial":case"acres":return"imperial";case"square-inches":return"inches";case"square-feet":return"feet";case"square-yards":return"yards";case"square-miles":return"miles";case"square-us-feet":return"us-feet";case"square-millimeters":return"millimeters";case"square-centimeters":return"centimeters";case"square-decimeters":return"decimeters";case"square-meters":return"meters";case"square-kilometers":return"kilometers"}throw new Error("unhandled area unit")}_formatAreaLabel(t,e,s){return t&&e&&xe(t,e,this._preferredAreaUnit(e,s))}_formatLengthLabel(t,e,s){return t&&e&&xe(t,e,this._preferredLengthUnit(e,s))}_updateMessageBundle(){this.loadingMessages=!0,Zt("esri/core/t9n/Units").then(t=>{this.messages=t,this.view&&this._update()}).finally(()=>{this.loadingMessages=!1})}};var te;a([d()],L.prototype,"_parameters",null),a([d()],L.prototype,"view",void 0),a([d()],L.prototype,"messages",void 0),a([d()],L.prototype,"analysis",void 0),a([d()],L.prototype,"viewData",void 0),a([d()],L.prototype,"analysisViewData",void 0),a([d({readOnly:!0})],L.prototype,"areaLabel",void 0),a([d({readOnly:!0})],L.prototype,"perimeterLengthLabel",void 0),a([d()],L.prototype,"loadingMessages",void 0),a([d()],L.prototype,"visible",null),L=a([se("esri.views.3d.analysis.AreaMeasurement.support.AreaMeasurementVisualization")],L),function(t){t[t.Small=12]="Small",t[t.Large=16]="Large"}(te||(te={}));const Gs={validMeasurement:!1,numVertices:0,hasStagedVertex:!1,path:null,pathVersion:-1,stagedPoint:null,measurementData:null,mode:null,positionsGeographic:null,positionsRenderCoords:null,positionsProjected:null,positionsFittedRenderCoords:null,intersectingSegments:null,triangleIndices:null,fittingMode:null,areaCentroid:null,pathLengthLabelSegmentIndex:null,perimeterLengthLabelSegmentIndex:null,checkerSize:null};let _=class extends Yt(ce){constructor(t){super(t),this.type="area-measurement-view-3d",this.analysis=null,this.measurementData=null,this.lastDraggedVertex=null,this.stagedPoint=null,this.mode=he.Auto}initialize(){const{analysis:t,view:e}=this;this.path=new S({view:e,areaMeasurement:t}),this.analysisVisualization=new L({view:e,analysis:t,analysisViewData:this}),this.analysisController=new O({view:e,analysis:t,analysisViewData:this})}destroy(){this.analysisController=$(this.analysisController),this.analysisVisualization=$(this.analysisVisualization),this.path.destroy()}get updating(){return!!this.analysisVisualization?.loadingMessages}get result(){const{measurementData:t}=this;return t==null?{area:null,mode:null,perimeter:null}:t.actualMeasurementMode==="euclidean"?{area:t.area,perimeter:t.perimeterLength,mode:"euclidean"}:{area:t.geodesicArea,perimeter:t.pathLength,mode:"geodesic"}}get viewData(){return this.analysisVisualization.viewData}get validMeasurement(){return this.path.isValidPolygon}get unit(){return this.analysis.unit??this._defaultUnit}get testData(){return{visualization:this.analysisVisualization,controller:this.analysisController}}};a([d({readOnly:!0})],_.prototype,"type",void 0),a([d({constructOnly:!0,nonNullable:!0})],_.prototype,"analysis",void 0),a([d()],_.prototype,"updating",null),a([d()],_.prototype,"analysisVisualization",void 0),a([d()],_.prototype,"analysisController",void 0),a([d()],_.prototype,"result",null),a([d()],_.prototype,"measurementData",void 0),a([d()],_.prototype,"viewData",null),a([d()],_.prototype,"validMeasurement",null),a([d()],_.prototype,"path",void 0),a([d()],_.prototype,"lastDraggedVertex",void 0),a([d()],_.prototype,"stagedPoint",void 0),a([d()],_.prototype,"mode",void 0),a([d()],_.prototype,"unit",null),a([d(Kt)],_.prototype,"_defaultUnit",void 0),_=a([se("esri.views.3d.analysis.AreaMeasurementAnalysisView3D")],_);const Xs=_,xs=Object.freeze(Object.defineProperty({__proto__:null,build:Ne},Symbol.toStringTag,{value:"Module"}));export{Xs as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
