import{oX as me,kK as fe,oK as ge,dQ as h,ou as oe,oY as L,na as _,h2 as S,m2 as le,oZ as z,en as T,o_ as R,nh as A,o$ as ye,n8 as V,dw as ce,nj as N,kL as k,p0 as Oe,p1 as De,p2 as ve,p3 as we,p4 as be,du as E,dy as W,p5 as b,dO as xe,aj as Re,kG as Ee,lY as Ge,ep as Pe,oL as Y,lW as I,iw as Se,lV as C,ew as U,kb as de,jP as Ae,j_ as B,dr as G,p6 as q,p7 as he,k1 as ue,m1 as Ce,et as m,nf as F,p8 as H,a4 as Z,p9 as Me,pa as $e,pb as je,dL as Te,pc as Ve,jE as X,pd as ze,pe as K,jV as Ie,dP as Fe,pf as Q,pg as He}from"./chunk-m3jlTyOz.js";import{t as _e,z as Le}from"./chunk-6v8PCjiQ.js";import{c as Ne,x as J}from"./chunk-dIGP5LJv.js";import{r as We}from"./chunk-37b8X91K.js";import{a as Ue}from"./chunk-w-EnsVpf.js";import{j as ee}from"./chunk-iXXksEGT.js";class ke extends _e{constructor(e){super(e),this._ray=ge(),this._isWorldDown=!1,this._start=h(),this._end=oe(1,0,0),this._width=1,this._color=L(1,0,1,1),this._polygonOffset=!1,this._writeDepthEnabled=!0,this._innerWidth=0,this._innerColor=L(1,1,1,1),this._stipplePattern=null,this._stippleOffColor=null,this._stipplePreferContinuous=!0,this._falloff=0,this._extensionType=f.LINE,this._laserlineStyle=null,this._laserlineEnabled=!1,this._renderOccluded=_.OccludeAndTransparent,this._fadedExtensions=ie,this._laserline=new Ne({view:this.view,isDecoration:e.isDecoration}),this.applyProperties(e)}destroy(){this._laserline.destroy(),super.destroy()}createObject3DResourceFactory(e){return{view:e,createResources:t=>this._createObject3DResources(t),destroyResources:t=>this._destroyExternalResources(t),recreateGeometry:(t,r)=>this._recreateObject3DGeometry(t,r),cameraChanged:()=>this._updateGeometry()}}createDrapedResourceFactory(e){return{view:e,createResources:()=>this._createDrapedResources(),destroyResources:t=>this._destroyExternalResources(t),recreateGeometry:t=>this._recreateDrapedGeometry(t)}}updateVisibility(e){super.updateVisibility(e),this._laserline.visible=e}onAttachedChange(){this._laserline.attached=this._laserlineAttached}setStartEndFromWorldDownAtLocation(e){this._isWorldDown=!0,S(this._start,e),this.view.renderCoordsHelper.worldUpAtPosition(e,this._end),le(this._end,e,this._end),z(this._start,this._end,this._ray),this._updateGeometry()}get start(){return this._start}set start(e){this._isWorldDown=!1,T(this._start,e)||(S(this._start,e),z(this._start,this._end,this._ray),this._updateGeometry())}get end(){return this._end}set end(e){this._isWorldDown=!1,T(this._end,e)||(S(this._end,e),z(this._start,this._end,this._ray),this._updateGeometry())}get width(){return this._width}set width(e){e!==this._width&&(this._width=e,this._updateMaterial())}get color(){return this._color}set color(e){R(e,this._color)||(A(this._color,e),this._updateMaterial())}get polygonOffset(){return this._polygonOffset}set polygonOffset(e){e!==this._polygonOffset&&(this._polygonOffset=e,this._updateMaterial())}get writeDepthEnabled(){return this._writeDepthEnabled}set writeDepthEnabled(e){this._writeDepthEnabled!==e&&(this._writeDepthEnabled=e,this._updateMaterial())}get innerWidth(){return this._innerWidth}set innerWidth(e){e!==this._innerWidth&&(this._innerWidth=e,this._updateMaterial())}get innerColor(){return this._innerColor}set innerColor(e){R(e,this._innerColor)||(A(this._innerColor,e),this._updateMaterial())}get stipplePattern(){return this._stipplePattern}set stipplePattern(e){const t=e!=null!=(this._stipplePattern!=null);this._stipplePattern=e,t?this.recreate():this._updateMaterial()}get stippleOffColor(){return this._stippleOffColor}set stippleOffColor(e){e!=null&&this._stippleOffColor!=null&&R(e,this._stippleOffColor)||(this._stippleOffColor=e!=null?ye(e):null,this._updateMaterial())}get stipplePreferContinuous(){return this._stipplePreferContinuous}set stipplePreferContinuous(e){e!==this._stipplePreferContinuous&&(this._stipplePreferContinuous=e,this._updateMaterial())}get falloff(){return this._falloff}set falloff(e){e!==this._falloff&&(this._falloff=e,this._updateMaterial())}get extensionType(){return this._extensionType}set extensionType(e){e!==this._extensionType&&(this._extensionType=e,this.recreateGeometry())}get _laserlineAttached(){return this._laserlineEnabled&&this._laserlineStyle!=null&&this.attached&&!this.isDraped}get laserlineStyle(){return this._laserlineStyle}set laserlineStyle(e){this._laserlineStyle=e,this._laserline.attached=this._laserlineAttached,e!=null&&(this._laserline.style=e)}get laserlineEnabled(){return this._laserlineEnabled}set laserlineEnabled(e){this._laserlineEnabled!==e&&(this._laserlineEnabled=e,this._laserline.attached=this._laserlineAttached)}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateMaterial())}get _normalizedRenderOccluded(){return this.isDraped&&this._renderOccluded===_.OccludeAndTransparentStencil?_.OccludeAndTransparent:this._renderOccluded}get fadedExtensions(){return this._fadedExtensions}set fadedExtensions(e){this._fadedExtensions=e??ie,this.recreateGeometry()}_updateMaterial(){const{materialParameters:e}=this;this.object3dResources.resources?.material.setParameters(e),this.drapedResources.resources?.material.setParameters(e)}get materialParameters(){return{width:this._width,color:this._color,stippleOffColor:this._stippleOffColor,stipplePattern:this._stipplePattern,stipplePreferContinuous:this._stipplePreferContinuous,innerWidth:this._innerWidth,innerColor:this._innerColor,falloff:this._falloff,hasPolygonOffset:this._polygonOffset,renderOccluded:this._normalizedRenderOccluded,isDecoration:this.isDecoration,writeDepth:this._writeDepthEnabled}}_createObject3DResources(e){const t=new V(this.materialParameters),r=new Array;return this._createObject3DGeometry(t,e,r),{material:t,geometries:r,forEach:i=>{i(t),r.forEach(i)}}}_destroyExternalResources(e){e.geometries=[]}_recreateObject3DGeometry(e,t){e.geometries.length=0,this._createObject3DGeometry(e.material,t,e.geometries)}_createObject3DGeometry(e,t,r){const i=this._createGeometry(e);r.push(i),t.addGeometry(i),this._updateVerticesObject3D(t)}_createDrapedResources(){const e=new V(this.materialParameters);return{material:e,geometries:[this._createDrapedGeometry(e)]}}_recreateDrapedGeometry(e){e.geometries=[this._createDrapedGeometry(e.material)]}_createDrapedGeometry(e){const t=this._createGeometry(e);return this._updateVerticesDraped(t),new ce(t)}_createGeometry(e){const t=this.extensionType===f.FADED,r=t?[h(),h(),h(),h()]:[h(),h()];return N(e,r,null,t?[1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0]:null)}_updateGeometry(){if(this.isDraped)this.drapedResources.recreateGeometry();else{const e=this.object3dResources.object;e&&this._updateVerticesObject3D(e)}}_updateVerticesObject3D(e){const t=this._lineSegment;this._updateVertexAttributesObject3D(e,t),this._laserline.intersectsLine=t}_updateVerticesDraped(e){this._updateVertexAttributesDraped(e,this._lineSegment)}get _lineSegment(){return this._extensionType===f.FADED?this._updateLineSegmentFinite(te):this._updateLineSegmentInfinite(this._extensionType,te)}_updateLineSegmentFinite(e){return k(this._start,this._end,e)}_updateLineSegmentInfinite(e,t){const r=this.view.state.camera;switch(Oe(this._ray,O),e){case f.LINE:O.c0=-Number.MAX_VALUE;break;case f.RAY:case f.GROUND_RAY:{const a=this._ray.origin,o=this.view.elevationProvider.getElevation(a[0],a[1],a[2],this.view.renderCoordsHelper.spatialReference,"ground")??0,n=this.view.renderCoordsHelper.getAltitude(a);this._isWorldDown&&n<o&&De(O.ray.direction,O.ray.direction),this._extensionType===f.GROUND_RAY&&o!=null&&(O.c1=Math.abs(n-o));break}}if(!ve(r.frustum,O))return this._updateLineSegmentFinite(t);const i=we(O,v),s=be(O,Ye);return k(i,s,t)}_updateVertexAttributesObject3D(e,t){const r=e.geometries[0].getMutableAttribute(E.POSITION)?.data;if(!r)return;let i=0;for(const s of this._lineVertices(t))r[i++]=s[0],r[i++]=s[1],r[i++]=s[2];e.geometryVertexAttributeUpdated(e.geometries[0],E.POSITION)}_updateVertexAttributesDraped(e,t){const r=e.getMutableAttribute(E.POSITION)?.data;if(!r)return;let i=0;for(const s of this._lineVertices(t))r[i++]=s[0],r[i++]=s[1],r[i++]=W;e.invalidateBoundingInfo()}*_lineVertices(e){this.extensionType===f.FADED?(yield b(e,-this.fadedExtensions.start,v),yield b(e,0,v),yield b(e,1,v),yield b(e,1+this.fadedExtensions.end,v)):(yield b(e,0,v),yield b(e,1,v))}}const O=me(),v=h(),Ye=h(),te=fe();var f;(function(l){l[l.LINE=0]="LINE",l[l.RAY=1]="RAY",l[l.GROUND_RAY=2]="GROUND_RAY",l[l.FADED=3]="FADED"})(f||(f={}));const re=1/3,ie={start:re,end:re};let Be=class extends _e{constructor(e){super(e),this._location=h(),this._direction=oe(1,0,0),this._width=1,this._offset=1,this._length=18,this._color=L(1,0,1,1),this._renderOccluded=_.OccludeAndTransparent,this.applyProperties(e)}createObject3DResourceFactory(e){return{view:e,createResources:t=>this._createObject3DResources(t),destroyResources:t=>this._destroyObject3DResources(t),recreateGeometry:(t,r)=>this._recreateObject3DGeometry(t,r),cameraChanged:()=>this._updateGeometry()}}createDrapedResourceFactory(e){return{view:e,createResources:()=>this._createDrapedResources(),destroyResources:t=>this._destroyDrapedResources(t),recreateGeometry:t=>this._recreateDrapedGeometry(t)}}get location(){return this._location}set location(e){T(this._location,e)||(S(this._location,e),this._updateGeometry())}get direction(){return this._direction}set direction(e){T(this._direction,e)||(S(this._direction,e),this._updateGeometry())}setDirectionFromPoints(e,t){xe(this._direction,le(this._direction,t,e)),this._updateGeometry()}get width(){return this._width}set width(e){e!==this._width&&(this._width=e,this._updateMaterial())}get offset(){return this._offset}set offset(e){e!==this._offset&&(this._offset=e,this._updateGeometry())}get length(){return this._length}set length(e){e!==this._length&&(this._length=e,this._updateGeometry())}get color(){return this._color}set color(e){R(e,this._color)||(A(this._color,e),this._updateMaterial())}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateMaterial())}_createObject3DResources(e){const t=new V(this.materialParameters),r=new Array;return this._createObject3DGeometry(t,e,r),{material:t,geometries:r,forEach:i=>{i(t),r.forEach(i)}}}_destroyObject3DResources(e){e.geometries.length=0}_recreateObject3DGeometry(e,t){e.geometries.length=0,this._createObject3DGeometry(e.material,t,e.geometries)}_createObject3DGeometry(e,t,r){const[i,s]=this._createGeometries(e);t.addGeometry(i),t.addGeometry(s),r.push(i),r.push(s),this._updateVerticesObject3D(t)}_createDrapedResources(){const e=new V(this.materialParameters),t=Re(()=>this.view.state.contentPixelRatio,()=>{this.drapedResources.recreateGeometry()});return{material:e,geometries:this._createDrapedGeometry(e),pixelRatioHandle:t}}_destroyDrapedResources(e){e.pixelRatioHandle.remove(),e.geometries=[]}_recreateDrapedGeometry(e){e.geometries=this._createDrapedGeometry(e.material)}_createDrapedGeometry(e){const t=this._createGeometries(e);return this._updateVerticesDraped(t),t.map(r=>new ce(r))}_createGeometries(e){return[N(e,[h(),h()]),N(e,[h(),h()])]}_updateMaterial(){const{materialParameters:e}=this;this.object3dResources.resources?.material.setParameters(e),this.drapedResources.resources?.material.setParameters(e)}get materialParameters(){return{width:this._width,color:this._color,renderOccluded:this._renderOccluded,isDecoration:this.isDecoration}}_updateGeometry(){if(this.isDraped)this.drapedResources.recreateGeometry();else{const e=this.object3dResources.object;e&&this._updateVerticesObject3D(e)}}_updateVerticesObject3D(e){const t=this.view.state.camera;t.projectToScreen(this.location,$),Ee(g,this.location,this.direction),t.projectToScreen(g,x),Ge(x,Pe(x,x,$)),this._updateVertexAttributesObject3D(t,e,0,$,x,1),this._updateVertexAttributesObject3D(t,e,1,$,x,-1)}_updateVertexAttributesObject3D(e,t,r,i,s,a){const o=t.geometries[r],n=o.getMutableAttribute(E.POSITION)?.data;if(!n)return;const{start:c,end:d}=this._computeStartEnd(s,i,a,this.offset,this.width,this.length);e.unprojectFromScreen(Y(c),g),n[0]=g[0],n[1]=g[1],n[2]=g[2],e.unprojectFromScreen(Y(d),g),n[3]=g[0],n[4]=g[1],n[5]=g[2],t.geometryVertexAttributeUpdated(o,E.POSITION)}_updateVerticesDraped(e){const{view:{basemapTerrain:{overlayManager:t},state:{contentPixelRatio:r}}}=this,{location:i,width:s,length:a,offset:o}=this,n=qe;n.spatialReference=t.renderer.spatialReference,n.x=i[0],n.y=i[1];const c=this.view.overlayPixelSizeInMapUnits(n)*r,d=s*c,p=a*c,y=o*c;this._updateVertexAttributesDraped(e[0],d,p,y,-1),this._updateVertexAttributesDraped(e[1],d,p,y,1)}_updateVertexAttributesDraped(e,t,r,i,s){const a=e.getMutableAttribute(E.POSITION)?.data;if(!a)return;const{location:o,direction:n}=this,{start:c,end:d}=this._computeStartEnd(n,o,s,i,t,r);a[0]=c[0],a[1]=c[1],a[2]=W,a[3]=d[0],a[4]=d[1],a[5]=W,e.invalidateBoundingInfo()}_computeStartEnd(e,t,r,i,s,a){const o=I(se,Se(se,e[1]*r,e[0]*-r),i+s/2),n=C(M,C(M,C(M,t,I(M,e,a/2)),o),o);return{start:n,end:C(ae,n,I(ae,e,-a))}}};const g=h(),se=U(),M=U(),ae=U(),$=de(),x=de(),qe=Ae(0,0,void 0,null);class st extends We{sortUniqueHints(e){return e.sort((t,r)=>(r instanceof B?r.length:0)-(t instanceof B?t.length:0))}visualizeIntersectionPoint(e,t){const{spatialReference:r,view:i}=t,s=P(t);return G(new J({view:i,primitive:"circle",geometry:q(e.intersectionPoint,r),elevationInfo:e.isDraped?he:ue,size:20,outlineSize:2,color:s.intersectionPointColor,outlineColor:s.intersectionPointOutlineColor,pixelSnappingEnabled:!1,isDecoration:!0,attached:!0}))}visualizePoint(e,t){const{view:r,spatialReference:i}=t,s=P(t),a=D(e.point,e.domain,t);return G(new J({view:r,primitive:"circle",geometry:q(a,i),elevationInfo:j(e,t),size:20,outlineSize:2,color:s.pointColor,outlineColor:s.pointOutlineColor,pixelSnappingEnabled:!1,isDecoration:!0,attached:!0}))}visualizeLine(e,t){const{view:r,spatialReference:i}=t,s=P(t),a=D(e.lineStart,e.domain,t),o=D(e.lineEnd,e.domain,t);return G(this._createLineSegmentHint(e.type,a,o,i,j(e,t),r,s,e.isDraped,e.fadeLeft,e.fadeRight))}visualizeParallelSign(e,t){const{view:r,spatialReference:i}=t,s=P(t),{isDraped:a}=e,o=j(e,t),n=D(e.lineStart,e.domain,t),c=D(e.lineEnd,e.domain,t),d=w(n,i,o,r,a),p=w(c,i,o,r,a),y=Ce(p,d,p,.5),u=new Be({view:r,attached:!1,offset:m.parallelLineHintOffset,length:m.parallelLineHintLength,width:m.parallelLineHintWidth,color:s.parallelSignColor,location:y,renderOccluded:a?_.OccludeAndTransparent:_.Opaque,isDraped:a,renderGroup:F.SnappingHint,isDecoration:!0});return u.setDirectionFromPoints(d,y),u.attached=!0,G(u)}visualizeRightAngleQuad(e,t){const{view:r,spatialReference:i}=t,s=P(t),a=j(e,t),{isDraped:o}=e,n=D(e.previousVertex,e.domain,t),c=D(e.centerVertex,e.domain,t),d=D(e.nextVertex,e.domain,t),p=w(n,i,a,r,o),y=w(c,i,a,r,o),u=w(d,i,a,r,o);return G(new Le({view:r,attached:!0,color:o?s.rightAngleColorDraped:s.rightAngleColor,renderOccluded:o?_.OccludeAndTransparent:_.Transparent,outlineRenderOccluded:o?_.OccludeAndTransparent:_.Opaque,outlineColor:s.rightAngleOutlineColor,outlineSize:m.rightAngleHintOutlineSize,size:m.rightAngleHintSize,isDraped:o,geometry:{previous:p,center:y,next:u},renderGroup:F.SnappingHint,isDecoration:!0}))}_createLineSegmentHint(e,t,r,i,s,a,o,n=!1,c=!0,d=!0){const p=w(t,i,s,a,n),y=w(r,i,s,a,n),u=new ke({view:a,extensionType:f.FADED,start:p,end:y,isDraped:n,color:o.lineColor,renderOccluded:n?_.OccludeAndTransparent:_.Opaque,renderGroup:F.SnappingHint,isDecoration:!0});switch(e){case H.TARGET:u.width=m.lineHintWidthTarget,u.fadedExtensions={start:0,end:m.lineHintFadedExtensions};break;case H.REFERENCE_EXTENSION:u.width=m.lineHintWidthReference,u.fadedExtensions={start:0,end:0};break;case H.REFERENCE:u.width=m.lineHintWidthReference,u.fadedExtensions={start:c?m.lineHintFadedExtensions:0,end:d?m.lineHintFadedExtensions:0}}return u.attached=!0,u}}function P(l){const{effectiveTheme:e}=l.view,t=Z.toUnitRGBA(e.accentColor),r=[0,0,0,0];return{intersectionPointColor:r,intersectionPointOutlineColor:t,pointColor:r,pointOutlineColor:t,lineColor:t,lineOutlineColor:void 0,parallelSignColor:t,rightAngleColor:t,rightAngleColorDraped:Z.toUnitRGBA(Me(e.accentColor,.5)),rightAngleOutlineColor:t}}function D(l,e,t){const r=pe(e,t);return r==null?l:$e(l[0],l[1],r)}function j(l,e){return pe(l.domain,e)!=null?e.selfSnappingZ.elevationInfo:l.isDraped?he:ue}function pe(l,{selfSnappingZ:e}){return l===je.SELF&&e!=null?e.value:null}function w(l,e,t,r,i,s=h()){if(i){const a=r.basemapTerrain.overlayManager.renderer.spatialReference;Te(l,e,s,a)}else Ve(l,e,t,r,s);return s}function Ze(l,e,t,r,i){const s=X(3*l.length),a=X(s.length);l.forEach((c,d)=>{s[3*d]=c[0],s[3*d+1]=c[1],s[3*d+2]=c.length>2?c[2]:0});const o=ze(s,e,0,a,0,s,0,s.length/3,t,r,i),n=o!=null;return{numVertices:l.length,position:s,mapPositions:a,projectionSuccess:n,sampledElevation:o}}class at extends Ue{constructor(e){super(e),this.view=null,this._renderOccluded=_.OccludeAndTransparent,this._vertices=null,this._spatialReference=null,this._color=K([1,127/255,0,1]),this._size=11,this._outlineColor=K([0,0,0,.5]),this._outlineSize=1,this._elevationInfo=null,this.applyProperties(e)}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateMaterial(),this._updateOutlineMaterial())}get vertices(){return this._vertices}set vertices(e){this._vertices=e,this.recreateGeometry()}get spatialReference(){return this._spatialReference}set spatialReference(e){this._spatialReference=e,this.recreateGeometry()}get color(){return this._color}set color(e){R(e,this._color)||(A(this._color,e),this._updateMaterial())}get size(){return this._size}set size(e){e!==this._size&&(this._size=e,this._updateMaterial())}get outlineColor(){return this._outlineColor}set outlineColor(e){R(e,this._outlineColor)||(A(this._outlineColor,e),this._updateOutlineMaterial())}get outlineSize(){return this._outlineSize}set outlineSize(e){e!==this._outlineSize&&(this._outlineSize=e,this._updateOutlineMaterial())}get elevationInfo(){return this._elevationInfo}set elevationInfo(e){this._elevationInfo=e,this.recreateGeometry()}get _vertexMaterialParameters(){return{color:this._color,screenSizeScale:this.size,renderOccluded:this._renderOccluded,isDecoration:this.isDecoration}}get _vertexOutlineMaterialParameters(){return{color:this._outlineColor,screenSizeScale:this.size+2*this.outlineSize,renderOccluded:this._renderOccluded,isDecoration:this.isDecoration}}_updateMaterial(){this.attached&&this._vertexMaterial.setParameters(this._vertexMaterialParameters)}_updateOutlineMaterial(){this.attached&&this._vertexOutlineMaterial.setParameters(this._vertexOutlineMaterialParameters)}_createRenderGeometries(){const e=this.vertices;if(e==null||e.length===0)return[];const t=.5,r=.5,i=Ze(e,this.spatialReference,this.view.elevationProvider,this.view.renderCoordsHelper,Ie.fromElevationInfo(this.elevationInfo)),s=[],a=i.numVertices,o=i.position;for(let n=0;n<a;++n){const c=Fe(Xe,o[3*n],o[3*n+1],o[3*n+2]),d=ne(this._vertexMaterial,t,c),p=ne(this._vertexOutlineMaterial,r,c);s.push({vertexGeometry:d,vertexOutlineGeometry:p})}return s}createGeometries(e){const t=this._createRenderGeometries();for(const{vertexGeometry:r,vertexOutlineGeometry:i}of t)e.addGeometry(r),e.addGeometry(i)}createExternalResources(){this._vertexMaterial=new ee({...this._vertexMaterialParameters,writeDepth:!0,cullFace:Q.Back,screenSizeEnabled:!0}),this._vertexOutlineMaterial=new ee({...this._vertexOutlineMaterialParameters,forceTransparentMode:!0,writeDepth:!0,cullFace:Q.Front,screenSizeEnabled:!0,shadingEnabled:!1})}destroyExternalResources(){this._vertexMaterial=null,this._vertexOutlineMaterial=null}forEachExternalMaterial(e){e(this._vertexMaterial),e(this._vertexOutlineMaterial)}}const Xe=h();function ne(l,e,t){return He(l,e,16,16,{offset:t})}export{ke as G,st as O,f as V,at as d};