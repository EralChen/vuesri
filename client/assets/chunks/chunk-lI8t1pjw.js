import{$ as r,a0 as c,a2 as le,a3 as ce,cU as w,eX as Te,bK as ue,ak as P,as as O,z as xe,w6 as Oe,kE as F,ko as oe,km as N,f2 as Re,Er as Ge,Es as je,Et as Ne,Ej as ge,Eu as He,bU as ke,eY as Ie,eZ as We,Ev as Ue,D2 as Qe,D3 as Be,D9 as q,eb as b,D5 as J,Em as K,Df as Fe,De as X,Dc as de,Dh as qe,Di as Je,Dj as Ke,Ew as Xe,Dk as Ye,nf as Ze,Dn as et,Dp as tt,lW as it,Dg as st,Ex as nt,Ey as at,nd as pe,Da as H,Eo as rt,DD as ot,dy as Y,ew as Z,ev as ee,cH as Ve,eu as lt,cJ as te,kd as ct,hE as dt,kf as j,vA as _e,Ez as me,kv as ve,mL as ht,ae as L,mV as k,wb as ut,A$ as ye,uD as gt,uh as we,AU as pt,wa as be,EA as _t,pO as ie,wy as mt,_ as vt,mW as yt,cI as wt,eM as se,de as bt,Ep as ft,da as Lt,wz as Et,mQ as ne,sz as fe,k2 as Pt,mT as $e,mS as he,Eq as At}from"./chunk-xdbuWCSg.js";import{s as Ct}from"./chunk-J8opwlW7.js";import{t as zt,e as V}from"./chunk-x9910zWu.js";import{r as St,t as Ot,f as I}from"./chunk-b7wP5lso.js";import{h as ae,R as Le,y as Vt,L as Ee,d as $t}from"./chunk-zP4CxfFE.js";import{f as re,_ as Pe,m as G,v as Ae}from"./chunk-h3qTRjdV.js";import{_ as Dt}from"./chunk-t4TbIqUg.js";import"./chunk-b85WE5Iw.js";import"./chunk-7j9k7D1U.js";let M=class extends ce{constructor(t){super(t),this._unitNormalizer=new zt,this._tempStartPosition=w(),this._tempEndPosition=w(),this._tempCornerPosition=w()}initialize(){const t=this.view.spatialReference,e=Te(t),i=e===Ie?We:e;this._sphericalPCPF=i;const s=ue(t,i);this._unitNormalizer.spatialReference=s?i:t,this.addHandles([P(()=>({viewData:this.viewData,startPoint:this.analysis.startPoint}),({viewData:n,startPoint:a})=>{n.elevationAlignedStartPoint=this._applyProjectionAndElevationAlignment(a)},O),P(()=>({viewData:this.viewData,endPoint:this.analysis.endPoint}),({viewData:n,endPoint:a})=>{n.elevationAlignedEndPoint=this._applyProjectionAndElevationAlignment(a)},O),P(()=>({result:this._computedResult,viewData:this.viewData}),({result:n,viewData:a})=>{a.result=n},O)])}_applyProjectionAndElevationAlignment(t){if(t==null)return t;const{spatialReference:e,elevationProvider:i}=this.view;return St(t,e,i)??(Ot(this.analysis,t.spatialReference,xe.getLogger(this)),null)}get _computedResult(){const{elevationAlignedStartPoint:t,elevationAlignedEndPoint:e,measurementMode:i}=this.viewData;if(t==null||e==null)return null;const s=this._euclideanDistances(t,e),n=this._geodesicDistance(t,e);let a,d;switch(i){case V.Auto:d=n!=null?"geodesic":"euclidean",a=n??s.horizontal;break;case V.Geodesic:if(n==null)return null;d="geodesic",a=n;break;case V.Euclidean:d="euclidean",a=s.horizontal}return{mode:d,directDistance:s.direct,horizontalDistance:a,verticalDistance:s.vertical,distance:i===V.Euclidean||s.horizontal.value<=Oe?s.direct:n??s.horizontal}}_euclideanDistances(t,e){const i=t.clone();i.z=e.z;const s=this._tempStartPosition,n=this._tempEndPosition,a=this._tempCornerPosition,d=this.view.spatialReference,u=this._sphericalPCPF,l=ue(d,u)?u:d;F(t,s,l),F(e,n,l),F(i,a,l);const h=oe(s,n),o=oe(a,n),g=Math.abs(e.z-t.z),p=C=>this._unitNormalizer.normalizeDistance(C),_=p(h),A=p(o),T=p(g);return{direct:N(_,"meters"),horizontal:N(A,"meters"),vertical:N(T,"meters")}}_geodesicDistance(t,e){const{spatialReference:i}=t,s=new Re({spatialReference:i});s.addPath([t,e]);const n=i.isGeographic&&Ge(i)?je([s],"meters")[0]:i.isWebMercator?Ne(s,"meters"):null,a=n??this._fallbackGeodesicDistance(t,e);return a!=null?N(a,"meters"):null}_fallbackGeodesicDistance(t,e){if(ge(t,Ce)&&ge(e,ze)){const i=new Ue;return He(i,Ce,ze,ke.WGS84),i.distance}return null}};r([c()],M.prototype,"view",void 0),r([c()],M.prototype,"analysis",void 0),r([c()],M.prototype,"viewData",void 0),r([c()],M.prototype,"_computedResult",null),M=r([le("esri.views.3d.analysis.DirectLineMeasurement.DirectLineMeasurementController")],M);const Ce=w(),ze=w();var y,E;(function(t){t[t.None=0]="None",t[t.Direct=1]="Direct",t[t.Triangle=2]="Triangle",t[t.ProjectedGeodesic=3]="ProjectedGeodesic"})(y||(y={})),function(t){t[t.Auto=0]="Auto",t[t.AboveSegment=1]="AboveSegment",t[t.BelowSegment=2]="BelowSegment"}(E||(E={}));function De(t){const e=new Qe,{vertex:i,fragment:s}=e;Be(i,t),i.uniforms.add(new q("width",a=>a.width)),e.attributes.add(b.POSITION,"vec3"),e.attributes.add(b.NORMAL,"vec3"),e.attributes.add(b.UV0,"vec2"),e.attributes.add(b.LENGTH,"float"),e.varyings.add("vtc","vec2"),e.varyings.add("vlength","float"),e.varyings.add("vradius","float"),i.code.add(J`void main(void) {
vec3 bitangent = normal;
vtc = uv0;
vlength = length;
vradius = 0.5 * width;
vec4 pos = view * vec4(position + vradius * bitangent * uv0.y, 1.0);
gl_Position = proj * pos;
}`),s.uniforms.add(new q("outlineSize",a=>a.outlineSize),new K("outlineColor",a=>a.outlineColor),new q("stripeLength",a=>a.stripeLength),new K("stripeEvenColor",a=>a.stripeEvenColor),new K("stripeOddColor",a=>a.stripeOddColor));const n=1/Math.sqrt(2);return s.code.add(J`
    const float INV_SQRT2 = ${J.float(n)};

    vec4 arrowColor(vec2 tc, float len) {
      float d = INV_SQRT2 * (tc.x - abs(tc.y));
      d = min(d, INV_SQRT2 * (len - tc.x - abs(tc.y)));
      d = min(d, 1.0 - abs(tc.y));

      if (d < 0.0) {
        return vec4(0.0);
      } else if (d < outlineSize) {
        return outlineColor;
      } else {
        return fract(0.5 / stripeLength * tc.x * vradius) >= 0.5 ? stripeOddColor : stripeEvenColor;
      }
    }

    void main(void) {
      vec2 ntc = vec2(vtc.x / vradius, vtc.y);
      vec4 color = arrowColor(ntc, vlength / vradius);
      if (color.a == 0.0) {
        discard;
      }
      fragColor = color;
    }
  `),e}const Mt=Object.freeze(Object.defineProperty({__proto__:null,build:De},Symbol.toStringTag,{value:"Module"}));class U extends qe{constructor(e,i,s){super(e,i,s)}initializeProgram(e){return new Je(e.rctx,U.shader.get().build(this.configuration),Me)}_setPipelineState(e){const i=e===de.NONE,s=this.configuration;return Ke({blending:s.transparent?i?Xe:Ye(e):null,polygonOffset:this.configuration.polygonOffsetEnabled?{factor:0,units:-4}:null,depthTest:{func:Ze.LESS},depthWrite:et,colorWrite:tt})}initializePipeline(){return this._setPipelineState(this.configuration.transparencyPassType)}get primitiveType(){return it.TRIANGLE_STRIP}}U.shader=new Fe(Mt,()=>Dt(()=>Promise.resolve().then(()=>Xt),void 0));let W=class extends st{constructor(){super(...arguments),this.polygonOffsetEnabled=!1,this.transparent=!1,this.transparencyPassType=de.NONE}};r([X()],W.prototype,"polygonOffsetEnabled",void 0),r([X()],W.prototype,"transparent",void 0),r([X({count:de.COUNT})],W.prototype,"transparencyPassType",void 0);const Me=new Map([[b.POSITION,0],[b.NORMAL,1],[b.UV0,2],[b.LENGTH,3]]);class Tt extends at{constructor(e){super(e,new Rt),this._vertexAttributeLocations=Me,this.produces=new Map([[pe.OPAQUE_MATERIAL,i=>!this._transparent&&(i===H.Color||i===H.Alpha)],[pe.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,i=>this._transparent&&(i===H.Color||i===H.Alpha)]]),this._configuration=new W}getConfiguration(e,i){return this._configuration.polygonOffsetEnabled=this.parameters.polygonOffset,this._configuration.transparent=this._transparent,this._configuration.transparencyPassType=i.transparencyPassType,this._configuration}intersect(){}createGLMaterial(e){return new xt(e)}createBufferWriter(){return new Wt}get _transparent(){const{parameters:e}=this;return e.outlineColor[3]<1||e.stripeEvenColor[3]<1||e.stripeOddColor[3]<1}}class xt extends rt{beginSlot(e){return this.ensureTechnique(U,e)}}class Rt extends ot{constructor(){super(...arguments),this.width=32,this.outlineSize=.2,this.outlineColor=Y(1,.5,0,1),this.stripeEvenColor=Y(1,1,1,1),this.stripeOddColor=Y(1,.5,0,1),this.stripeLength=1,this.polygonOffset=!1}}const Gt=nt().vec3f(b.POSITION).vec3f(b.NORMAL).vec2f(b.UV0).f32(b.LENGTH),jt=w(),Nt=w(),Ht=w(),kt=w(),It=w();class Wt{constructor(){this.vertexBufferLayout=Gt}elementCount(e){return 2*(e.attributes.get(b.POSITION).indices.length/2+1)}write(e,i,s,n,a){const{data:d,indices:u}=s.attributes.get(b.POSITION),l=s.attributes.get(b.NORMAL).data,h=d.length/3;u&&u.length!==2*(h-1)&&console.warn("MeasurementArrowMaterial does not support indices");const o=jt,g=Nt,p=Ht,_=kt,A=It,T=n.position,C=n.normal,z=n.uv0;let S=0;for(let f=0;f<h;++f){const R=3*f;if(Z(o,d[R],d[R+1],d[R+2]),f<h-1){const x=3*(f+1);Z(g,d[x],d[x+1],d[x+2]),Z(A,l[x],l[x+1],l[x+2]),ee(A,A),Ve(p,g,o),ee(p,p),lt(_,A,p),ee(_,_)}const B=oe(o,g);e&&i&&(te(o,o,e),te(g,g,e),te(_,_,i));const $=a+2*f,D=$+1;T.setVec($,o),T.setVec(D,o),C.setVec($,_),C.setVec(D,_),z.set($,0,S),z.set($,1,-1),z.set(D,0,S),z.set(D,1,1),f<h-1&&(S+=B)}const Q=n.length;for(let f=0;f<2*h;++f)Q.set(a+f,S)}}let Ut=class extends ct{constructor(e){super(e),this._arrowWidth=16,this._arrowSubdivisions=128,this._origin=w(),this._originTransform=dt(),this._arrowCenter=w(),this._renderOccluded=j.OccludeAndTransparent,this._geometry=null,this._stripeLength=1,this._stripesEnabled=!0,this._color=_e(),this._contrastColor=_e(),this.applyProperties(e)}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._arrowMaterial&&this._arrowMaterial.setParameters({renderOccluded:e}))}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this._geometryChanged()}get stripeLength(){return this._stripeLength}set stripeLength(e){this._stripeLength=e,this.attached&&this._arrowMaterial.setParameters({stripeLength:this._stripeLength})}get stripesEnabled(){return this._stripesEnabled}set stripesEnabled(e){if(this._stripesEnabled=e,this.attached){const i=this._stripesEnabled?this._contrastColor:this._color;this._arrowMaterial.setParameters({stripeEvenColor:i})}}get color(){return this._color}set color(e){me(e,this._color)||(ve(this._color,e),this._updateArrowColor())}get contrastColor(){return this._contrastColor}set contrastColor(e){me(e,this._color)||(ve(this._contrastColor,e),this._updateArrowColor())}createExternalResources(){const e=this._color,i=this._contrastColor,s=this._stripesEnabled?i:e;this._arrowMaterial=new Tt({outlineColor:e,stripeEvenColor:s,stripeOddColor:e,renderOccluded:this.renderOccluded,polygonOffset:!0,isDecoration:this.isDecoration}),this._handles=new ht,this._handles.add(P(()=>this.view.state.camera,()=>{this._viewChanged()}))}destroyExternalResources(){this._arrowMaterial=null,this._handles=L(this._handles)}forEachExternalMaterial(e){e(this._arrowMaterial)}createGeometries(e){if(this._geometry?.startRenderSpace==null||this._geometry.endRenderSpace==null)return;const i=this._createArrowGeometry(this._geometry.startRenderSpace,this._geometry.endRenderSpace,this._origin,this._geometry);i.transformation=this._originTransform,e.addGeometry(i),this._viewChanged()}_createArrowGeometry(e,i,s,n){const a=this.view.renderCoordsHelper,d=[],u=[],l=(h,o)=>{const g=k.get();Ve(g,h,s),d.push(g),u.push(o)};if(n.type==="euclidean"){n.eval(.5,this._arrowCenter);const h=k.get();a.worldUpAtPosition(this._arrowCenter,h),l(e,h),l(i,h)}else{n.eval(.5,this._arrowCenter);const h=this._arrowSubdivisions+1&-2;for(let o=0;o<h;++o){const g=o/(h-1),p=k.get(),_=k.get();n.eval(g,p),a.worldUpAtPosition(p,_),l(p,_)}}return ut(this._arrowMaterial,d,u)}_geometryChanged(){this.recreateGeometry()}_viewChanged(){if(this.view.ready&&this.attached&&this._geometry!=null){const e=this.view.state.camera.computeScreenPixelSizeAt(this._arrowCenter);this._arrowMaterial.setParameters({width:this._arrowWidth*e})}}_updateArrowColor(){if(!this.attached)return;const e=this._color,i=this._contrastColor,s=this._stripesEnabled?i:e,n=e,a=e;this._arrowMaterial.setParameters({stripeEvenColor:s,outlineColor:n,stripeOddColor:a})}},v=class extends ce{get _parameters(){const t=this.view.effectiveTheme,{accentColor:e,textColor:i}=t,s=ye(e),n=gt(e,.75),a=ye(we(e)),d=we(i,pt.Low);return{accentColor:s,contrastColor:a,translucentAccentColor:n,triangleLineWidth:3,geodesicProjectionLineWidth:2,guideLineWidth:2,guideStippleLengthPixels:3,directLabelFontSize:16,horizontalLabelFontSize:12,verticalLabelFontSize:12,textColor:i,textBackgroundColor:be(d,.6),textCalloutColor:be(d,.5)}}get visible(){return this.analysisView.visible}get viewMode(){const{elevationAlignedStartPoint:t,elevationAlignedEndPoint:e}=this.analysisView;if(t==null||e==null||t.equals(e))return y.None;const i=this.analysisView.result;if(i==null)return y.Direct;if(this.actualVisualizedMeasurement==="geodesic")return this._requiresGeodesicGuideAt(this._startPosition)||this._requiresGeodesicGuideAt(this._endPosition)?y.ProjectedGeodesic:y.Direct;const{verticalDistance:s,horizontalDistance:n}=i,a=s.value,d=n.value;return Math.min(a/d,d/a)<this.triangleCollapseRatioThreshold?y.Direct:y.Triangle}get actualVisualizedMeasurement(){const{measurementMode:t,result:e}=this.analysisView;switch(t){case V.Auto:return e!=null&&e.horizontalDistance.value>Oe?"geodesic":"euclidean";case V.Euclidean:return"euclidean";case V.Geodesic:return"geodesic"}}get allowVisualElementsOrientationChange(){return this._triangleOrientationOverride==null}set allowVisualElementsOrientationChange(t){this._triangleOrientationOverride==null!==t&&(this._triangleOrientationOverride==null?this._triangleOrientationOverride=this._actualVisualElementsOrientation:this._triangleOrientationOverride=null)}get labels(){return this.actualVisualizedMeasurement==="geodesic"?{direct:null,horizontal:this._segmentLabel,vertical:this._verticalLabel}:{direct:this._segmentLabel,horizontal:this._horizontalLabel,vertical:this._verticalLabel}}constructor(t){super(t),this._segmentVisualElement=null,this._triangleVisualElement=null,this._rightAngleQuad=null,this._projectedGeodesicLine=null,this._geodesicStartHint=null,this._geodesicEndHint=null,this._segmentLabel=null,this._verticalLabel=null,this._horizontalLabel=null,this._startPosition=w(),this._endPosition=w(),this._cornerPosition=w(),this._startPositionAtSeaLevel=w(),this._endPositionAtSeaLevel=w(),this._triangleOrientationOverride=null,this.messages=null,this.loadingMessages=!0,this.visualElementOrientation=E.Auto,this.triangleCollapseRatioThreshold=.03}initialize(){const t=this._parameters,e={attached:!0,view:this.view,isDecoration:!0},{guideLineWidth:i,guideStippleLengthPixels:s,triangleLineWidth:n,geodesicProjectionLineWidth:a,directLabelFontSize:d,verticalLabelFontSize:u,horizontalLabelFontSize:l}=t;this._segmentVisualElement=new Ut({...e,geometry:null,renderOccluded:j.OccludeAndTransparent}),this._triangleVisualElement=new I({...e,width:n,renderOccluded:j.OccludeAndTransparent}),this._rightAngleQuad=new _t({...e,renderOccluded:j.OccludeAndTransparent});const h={...e,polygonOffset:!0,renderOccluded:j.OccludeAndTransparent};this._projectedGeodesicLine=new I({...h,width:a,stipplePattern:ie(s)}),this._geodesicStartHint=new I({...h,width:i,stipplePattern:ie(s)}),this._geodesicEndHint=new I({...h,width:i,stipplePattern:ie(s)}),this._segmentLabel=new re({...e,fontSize:d}),this._verticalLabel=new re({...e,fontSize:u}),this._horizontalLabel=new re({...e,fontSize:l}),this.addHandles([P(()=>{const{elevationAlignedStartPoint:o,elevationAlignedEndPoint:g}=this.analysisView,p=this.view;return{view:p,camera:p.state.camera,viewMode:this.viewMode,elevationAlignedStartPoint:o,elevationAlignedEndPoint:g,orientation:this._actualVisualElementsOrientation,visualizedMeasurement:this.actualVisualizedMeasurement,stripeLength:this._measurementArrowStripeLength}},o=>this._updateGeometryAndViewMode(o),O),P(()=>({visible:this.visible,viewMode:this.viewMode}),o=>this._updateVisualElementVisibility(o),O),P(()=>({text:this._labelsText,visualizedMeasurement:this.actualVisualizedMeasurement}),o=>this._updateLabelText(o),O),P(()=>({visible:this.visible,viewMode:this.viewMode}),o=>this._updateLabelVisibility(o),O),P(()=>this._measurementArrowStripeLength,o=>this._updateSegmentStripeLength(o),O),mt(async()=>this._updateMessageBundle()),P(()=>this._parameters,({textBackgroundColor:o,textCalloutColor:g,textColor:p,translucentAccentColor:_,accentColor:A,contrastColor:T})=>{const{_segmentLabel:C,_verticalLabel:z,_horizontalLabel:S,_triangleVisualElement:Q,_rightAngleQuad:f,_projectedGeodesicLine:R,_geodesicStartHint:B,_geodesicEndHint:$,_segmentVisualElement:D}=this;C.backgroundColor=o,C.calloutColor=g,C.textColor=p,z.backgroundColor=o,z.calloutColor=g,z.textColor=p,S.backgroundColor=o,S.calloutColor=g,S.textColor=p,Q.color=_,f.color=_,R.color=_,B.color=_,$.color=_,D.color=A,D.contrastColor=T},vt)]),this._updateMessageBundle()}destroy(){this._segmentVisualElement=L(this._segmentVisualElement),this._triangleVisualElement=L(this._triangleVisualElement),this._rightAngleQuad=L(this._rightAngleQuad),this._projectedGeodesicLine=L(this._projectedGeodesicLine),this._geodesicStartHint=L(this._geodesicStartHint),this._geodesicEndHint=L(this._geodesicEndHint),this._segmentLabel=L(this._segmentLabel),this._verticalLabel=L(this._verticalLabel),this._horizontalLabel=L(this._horizontalLabel),this.set("view",null)}_updateVisualElementVisibility({visible:t,viewMode:e}){if(this._segmentVisualElement.visible=!1,this._triangleVisualElement.visible=!1,this._rightAngleQuad.visible=!1,this._projectedGeodesicLine.visible=!1,this._geodesicStartHint.visible=!1,this._geodesicEndHint.visible=!1,t)switch(e){case y.None:break;case y.Direct:this._segmentVisualElement.visible=!0;break;case y.Triangle:this._segmentVisualElement.visible=!0,this._triangleVisualElement.visible=!0,this._rightAngleQuad.visible=!0;break;case y.ProjectedGeodesic:this._segmentVisualElement.visible=!0,this._projectedGeodesicLine.visible=!0,this._geodesicStartHint.visible=!0,this._geodesicEndHint.visible=!0}}_updateGeometryAndViewMode({view:t,camera:e,viewMode:i,elevationAlignedStartPoint:s,elevationAlignedEndPoint:n,orientation:a,visualizedMeasurement:d,stripeLength:u}){const l=t.renderCoordsHelper;if(l==null||s==null||n==null||s.equals(n))return;let h=this._startPosition,o=this._endPosition;l.toRenderCoords(s,h),l.toRenderCoords(n,o);const g=a===E.AboveSegment?1:-1,p=g*(l.getAltitude(o)-l.getAltitude(h));p<0&&(h=this._endPosition,o=this._startPosition);const _=d==="geodesic"?new Pe(this._startPosition,this._endPosition,l.spatialReference):new G(this._startPosition,this._endPosition);switch(this._segmentVisualElement.geometry=_,this._updateSegmentStripeLength(u),i){case y.Direct:this._updateSegment(_,a);break;case y.Triangle:this._updateSegmentAndTriangle({view:t,camera:e,segment:_,orientation:a,startPosition:h,endPosition:o,deltaSign:g,altitudeDelta:p});break;case y.ProjectedGeodesic:this._updateSegmentAndProjection({view:t,orientation:a,startPosition:h,endPosition:o})}}_updateSegment(t,e){this._segmentLabel.anchor=e===E.AboveSegment?"top":"bottom",this._segmentLabel.geometry={type:"segment",segment:t,sampleLocation:"center"}}_updateSegmentAndTriangle({view:{renderCoordsHelper:t},camera:e,segment:i,orientation:s,startPosition:n,endPosition:a,deltaSign:d,altitudeDelta:u}){const l=this._cornerPosition;t.worldUpAtPosition(n,l),yt(l,l,d*Math.abs(u)),wt(l,l,n),this._triangleVisualElement.geometry=[[[n[0],n[1],n[2]],[l[0],l[1],l[2]],[a[0],a[1],a[2]]]],this._rightAngleQuad.geometry={previous:n,center:l,next:a};const h=new G(n,l),o=new G(l,a),g=Qt(n,a,l,s,e);this._segmentLabel.anchor=g.segment,this._segmentLabel.geometry={type:"segment",segment:i,sampleLocation:"center"},this._verticalLabel.geometry={type:"segment",segment:h,sampleLocation:"center"},this._verticalLabel.anchor=g.vertical,this._horizontalLabel.geometry={type:"segment",segment:o,sampleLocation:"center"},this._horizontalLabel.anchor=g.horizontal}_updateSegmentAndProjection({view:{renderCoordsHelper:t},orientation:e,startPosition:i,endPosition:s}){t.setAltitude(this._startPositionAtSeaLevel,0,i),t.setAltitude(this._endPositionAtSeaLevel,0,s);const n=new Pe(this._startPositionAtSeaLevel,this._endPositionAtSeaLevel,t.spatialReference);this._projectedGeodesicLine.setGeometryFromSegment(n),this._geodesicStartHint.setGeometryFromSegment(new G(this._startPositionAtSeaLevel,i)),this._geodesicEndHint.setGeometryFromSegment(new G(this._endPositionAtSeaLevel,s)),this._segmentLabel.geometry={type:"segment",segment:n,sampleLocation:"center"},this._segmentLabel.anchor=e===E.AboveSegment?"top":"bottom"}_updateLabelText({text:t,visualizedMeasurement:e}){t!=null?(this._segmentLabel.text=e==="euclidean"?t.directDistance:t.horizontalDistance,this._horizontalLabel.text=t.horizontalDistance,this._verticalLabel.text=t.verticalDistance):(this._segmentLabel.text=null,this._horizontalLabel.text=null,this._verticalLabel.text=null),this.notifyChange("labels")}_updateLabelVisibility({visible:t,viewMode:e}){const i=this._segmentLabel,s=this._horizontalLabel,n=this._verticalLabel;if(i.visible=!1,s.visible=!1,n.visible=!1,t)switch(e){case y.Direct:i.visible=!0;break;case y.Triangle:i.visible=!0,s.visible=!0,n.visible=!0;break;case y.ProjectedGeodesic:i.visible=!0;case y.None:}}get _labelsText(){if(this.destroyed)return null;const t=this.messages,e=this.analysisView.result;if(e==null||t==null)return null;const{directDistance:i,horizontalDistance:s,verticalDistance:n}=e,a=this.analysisView.unit,d=u=>({directDistance:"",horizontalDistance:"",verticalDistance:"",...u});switch(a){case"metric":return d({directDistance:i&&Ee(t,i),horizontalDistance:s&&Ee(t,s),verticalDistance:n&&$t(t,n)});case"imperial":return d({directDistance:i&&Le(t,i),horizontalDistance:s&&Le(t,s),verticalDistance:n&&Vt(t,n)});default:return d({directDistance:i&&ae(t,i,a),horizontalDistance:s&&ae(t,s,a),verticalDistance:n&&ae(t,n,a)})}}_updateSegmentStripeLength(t){const e=this._segmentVisualElement;t!=null?(e.stripeLength=t,e.stripesEnabled=!0):e.stripesEnabled=!1}get _actualVisualElementsOrientation(){if(this._triangleOrientationOverride!=null)return this._triangleOrientationOverride;const t=this.visualElementOrientation;return t===E.Auto?this.view.state.camera.aboveGround?E.AboveSegment:E.BelowSegment:t}_requiresGeodesicGuideAt(t){const e=this.view;if(!e?.state)return!1;const i=e.state.camera,s=e.renderCoordsHelper;if(!s)return!1;const n=i.computeScreenPixelSizeAt(t);return s.getAltitude(t)/n>=10}get _measurementArrowStripeLength(){const{result:t,unit:e}=this.analysisView;if(t==null)return null;let i=null;const s=t.directDistance;switch(e){case"metric":i=s&&se(s,"meters");break;case"imperial":i=s&&se(s,bt(s.value,s.unit));break;default:i=s&&se(s,e)}return i==null?null:ft(i.value/30)*Lt(1,i.unit,"meters")}_updateMessageBundle(){this.loadingMessages=!0,Et("esri/core/t9n/Units").then(t=>{this.messages=t}).finally(()=>{this.loadingMessages=!1})}get testData(){return{labels:this.labels,stripeLength:this._segmentVisualElement?.stripeLength}}};function Qt(t,e,i,s,n){const a=Bt,d=Ft;n.projectToRenderScreen(i,a),n.projectToRenderScreen(e,d);const u={segment:"bottom",horizontal:"top",vertical:a[0]<d[0]?"left":"right"};{const l=qt,h=Jt;if(ne(t,i,n,l),ne(t,e,n,h),fe(l,h)>=Se){const o=Math.sign(l[1])===Math.sign(h[1]);u.segment=o?Ae(u.vertical):u.vertical}else{const o=Kt;ne(i,e,n,o),fe(o,h)>=Se&&(u.segment=Math.sign(o[0])===Math.sign(h[0])?Ae(u.horizontal):u.horizontal)}}if(s===E.BelowSegment){const l=h=>h==="top"?"bottom":"top";u.segment=l(u.segment),u.horizontal=l(u.horizontal),u.vertical=l(u.vertical)}return u}r([c()],v.prototype,"_parameters",null),r([c()],v.prototype,"_triangleOrientationOverride",void 0),r([c()],v.prototype,"messages",void 0),r([c()],v.prototype,"view",void 0),r([c()],v.prototype,"analysis",void 0),r([c()],v.prototype,"analysisView",void 0),r([c()],v.prototype,"loadingMessages",void 0),r([c()],v.prototype,"visible",null),r([c()],v.prototype,"viewMode",null),r([c()],v.prototype,"actualVisualizedMeasurement",null),r([c()],v.prototype,"visualElementOrientation",void 0),r([c()],v.prototype,"triangleCollapseRatioThreshold",void 0),r([c()],v.prototype,"allowVisualElementsOrientationChange",null),r([c()],v.prototype,"labels",null),r([c()],v.prototype,"_labelsText",null),r([c()],v.prototype,"_actualVisualElementsOrientation",null),r([c()],v.prototype,"_measurementArrowStripeLength",null),v=r([le("esri.views.3d.analysis.DirectLineMeasurement.DirectLineMeasurementVisualization")],v);const Se=Math.cos(Pt(12)),Bt=$e(),Ft=$e(),qt=he(),Jt=he(),Kt=he();let m=class extends Ct(ce){constructor(t){super(t),this.type="direct-line-measurement-view-3d",this.analysis=null,this.result=null,this.measurementMode=V.Auto,this.elevationAlignedStartPoint=null,this.elevationAlignedEndPoint=null}initialize(){const t=this.view,e=this.analysis;this._analysisVisualization=new v({view:t,analysis:e,analysisView:this}),this._analysisController=new M({view:t,analysis:e,viewData:this})}destroy(){this._analysisController=L(this._analysisController),this._analysisVisualization=L(this._analysisVisualization)}get updating(){return!!this._analysisVisualization?.loadingMessages}get viewMode(){return this._analysisVisualization.viewMode}get actualVisualizedMeasurement(){return this._analysisVisualization.actualVisualizedMeasurement}get visualElementOrientation(){return this._analysisVisualization.visualElementOrientation}set visualElementOrientation(t){this._analysisVisualization.visualElementOrientation=t}get allowVisualElementsOrientationChange(){return this._analysisVisualization.allowVisualElementsOrientationChange}set allowVisualElementsOrientationChange(t){this._analysisVisualization.allowVisualElementsOrientationChange=t}get triangleCollapseRatioThreshold(){return this._analysisVisualization.triangleCollapseRatioThreshold}set triangleCollapseRatioThreshold(t){this._analysisVisualization.triangleCollapseRatioThreshold=t}get directLabelText(){return this._analysisVisualization.labels.direct?.text??""}get horizontalLabelText(){return this._analysisVisualization.labels.horizontal?.text??""}get verticalLabelText(){return this._analysisVisualization.labels.vertical?.text??""}get unit(){return this.analysis.unit??this._defaultUnit}get testData(){return this.destroyed?{labels:null,stripeLength:null,visualization:null,controller:null}:{...this._analysisVisualization?.testData,visualization:this._analysisVisualization,controller:this._analysisController}}};r([c()],m.prototype,"updating",null),r([c({readOnly:!0})],m.prototype,"type",void 0),r([c({constructOnly:!0,nonNullable:!0})],m.prototype,"analysis",void 0),r([c()],m.prototype,"result",void 0),r([c()],m.prototype,"measurementMode",void 0),r([c()],m.prototype,"elevationAlignedStartPoint",void 0),r([c()],m.prototype,"elevationAlignedEndPoint",void 0),r([c({readOnly:!0})],m.prototype,"viewMode",null),r([c({readOnly:!0})],m.prototype,"actualVisualizedMeasurement",null),r([c()],m.prototype,"visualElementOrientation",null),r([c()],m.prototype,"allowVisualElementsOrientationChange",null),r([c()],m.prototype,"triangleCollapseRatioThreshold",null),r([c({readOnly:!0})],m.prototype,"directLabelText",null),r([c({readOnly:!0})],m.prototype,"horizontalLabelText",null),r([c({readOnly:!0})],m.prototype,"verticalLabelText",null),r([c()],m.prototype,"_analysisVisualization",void 0),r([c()],m.prototype,"_analysisController",void 0),r([c()],m.prototype,"unit",null),r([c(At)],m.prototype,"_defaultUnit",void 0),m=r([le("esri.views.3d.analysis.DirectLineMeasurementAnalysisView3D")],m);const ci=m,Xt=Object.freeze(Object.defineProperty({__proto__:null,build:De},Symbol.toStringTag,{value:"Module"}));export{ci as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
