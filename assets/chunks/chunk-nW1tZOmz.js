import{_ as a,$ as r,a1 as D,a2 as k,dQ as _,J as W,kO as ue,lz as je,tG as Ne,z as Be,tH as We,oK as $e,oV as Je,mC as ee,k7 as Ze,oM as qe,oN as Ke,tI as Qe,tJ as Ye,mt as U,tK as ie,tL as Xe,tM as X,tN as et,h2 as T,dO as de,m4 as z,kG as F,oZ as ce,L as he,c0 as Ae,Y as ge,k2 as ve,lU as te,dV as J,ei as tt,tO as it,tP as nt,m2 as B,tQ as x,bu as st,tR as _e,tS as me,dq as Z,c7 as q,Z as S,dl as ye,dk as at,k4 as ot,as as He,c3 as rt,tT as lt,tU as be,tV as ut,a4 as v,tC as dt,tW as ct,pg as De,aj as Me,tX as j,kK as ht,ar as pt,ad as E,kL as gt,tY as ne,mf as fe,iU as Ce,eo as vt,tZ as _t,na as se,t_ as $,h4 as mt,V as yt}from"./chunk-AGUgPSYp.js";import{s as bt}from"./chunk-9V7d4M-P.js";import{t as ae,u as we,f as Oe}from"./chunk-EHXSy6J2.js";import{b as Te,u as oe}from"./chunk-uprgyRYW.js";import{$ as ke,w as xe,e as ze}from"./chunk-OKKo_Ad7.js";import{t as Fe}from"./chunk-Vm3r_8Dz.js";import{c as ft,x as Ie}from"./chunk-a_6m89va.js";import{a as Ct,b as wt,v as Ot}from"./chunk-uzSnj9UL.js";import{d as Pe}from"./chunk-2eP3IFEu.js";import"./chunk-oVLQlo07.js";import"./chunk-BL-93T4Z.js";let A=class extends k{constructor(e){super(e),this.target=null,this.intersectedGraphic=null,this.intersectedLocation=null,this.elevationAlignedTargetLocation=null,this.visible=void 0}};a([r()],A.prototype,"target",void 0),a([r()],A.prototype,"intersectedGraphic",void 0),a([r()],A.prototype,"intersectedLocation",void 0),a([r()],A.prototype,"elevationAlignedTargetLocation",void 0),a([r({type:Boolean})],A.prototype,"visible",void 0),A=a([D("esri.views.3d.analysis.LineOfSightAnalysisResult")],A);let H=class extends k{constructor(e){super(e),this.elevationAlignedTargetLocation=null,this.inputPoints={isValid:!1,observer:_(),observerSurfaceNormal:null,observerFeatureId:null,target:_(),targetSurfaceNormal:null,targetFeatureId:null,observerAdjusted:_(),targetAdjusted:_()},this.computationResult={start:_(),end:_(),intersection:_(),isValid:!1,isTargetVisible:!1},this.result=null}notifyResultChanged(){this.notifyChange("computationResult")}notifyInputPointsChanged(){this.notifyChange("inputPoints")}};a([r()],H.prototype,"target",void 0),a([r()],H.prototype,"elevationAlignedTargetLocation",void 0),a([r()],H.prototype,"inputPoints",void 0),a([r()],H.prototype,"computationResult",void 0),a([r()],H.prototype,"result",void 0),H=a([D("esri.views.3d.analysis.LineOfSight.LineOfSightComputation")],H);var pe;let P=pe=class extends k{constructor(t){super(t)}clone(){return new pe({type:this.type,id:W(this.id),mapPoint:W(this.mapPoint),renderPoint:ue(this.renderPoint),normal:W(this.normal),ray:W(this.ray),graphic:this.graphic})}equals(t){return this.type===t.type&&this.id===t.id&&je(this.mapPoint,t.mapPoint)&&Ne(this.renderPoint,t.renderPoint)&&Be(this.normal,t.normal)&&We(this.ray,t.ray)&&this.graphic===t.graphic}};a([r()],P.prototype,"type",void 0),a([r({constructOnly:!0})],P.prototype,"id",void 0),a([r({constructOnly:!0})],P.prototype,"mapPoint",void 0),a([r({constructOnly:!0})],P.prototype,"renderPoint",void 0),a([r({constructOnly:!0})],P.prototype,"normal",void 0),a([r({constructOnly:!0})],P.prototype,"graphic",void 0),a([r({constructOnly:!0})],P.prototype,"ray",void 0),P=pe=a([D("esri.views.3d.analysis.LineOfSight.LineOfSightIntersectionResult")],P);let G=class extends k{constructor(t){super(t),this._terrainIntersectionOptionsLayerUids=new Set(["terrain"])}initialize(){this.intersector=Je(this.view.state.viewingMode),this.intersector.options.hud=!1,this.intersector.options.store=ee.MIN}getScreenPointIntersection(t){const e=Ze(t,qe.get()),i=Ke(this.view.state.camera,e,re);return this._getRayIntersection(i)}_getRayIntersection(t,e){if(t==null||this.view.sceneIntersectionHelper==null)return null;const{intersector:i}=this;i.options.store=ee.MIN,this.view.sceneIntersectionHelper.intersectToolIntersectorRay(t,i,e);const n=i.results.min,s=_();if(!n.getIntersectionPoint(s)||e?.maxDistance!=null&&Qe(s,t.origin)>e.maxDistance**2)return null;const o=this.view.renderCoordsHelper.fromRenderCoords(s,this.view.spatialReference),l=ue(n.normal);if(Ye(n))return new P({type:U.OBJECT,id:`${n.target.layerUid}/${n.target.nodeIndex}/${n.target.componentIndex}`,mapPoint:o,renderPoint:s,normal:l,ray:ie(t),graphic:null});if(Xe(n))return new P({type:U.TERRAIN,id:n.target.lij.slice(),mapPoint:o,renderPoint:s,normal:l,ray:ie(t),graphic:null});const d=X(n,this.view);if(d!=null){const h=d.layer,c=d.sourceLayer;let u;return c&&c.type==="scene"?u=et(d,c.objectIdField):u=d.uid,new P({type:U.OBJECT,id:`${h?.uid}/${u}`,mapPoint:o,renderPoint:s,normal:l,ray:ie(t),graphic:d})}return null}updateFromGroundIntersection(t,e,i){const n=Tt,s=It,o=Pt,l=Le;T(s,t),this.view.renderCoordsHelper.worldUpAtPosition(s,o),de(o,o);const d=this.view.basemapTerrain.visibleElevationBounds,h=(e>=0?1:-1)*((d?Math.abs(d.max-d.min):100)+Math.abs(e));z(l,o,h),F(n,s,l),ce(n,s,re);const c=this._getRayIntersection(re,{include:this._terrainIntersectionOptionsLayerUids,maxDistance:h});if(c!=null){const u=Le;return z(u,o,e),F(i,c.renderPoint,u),ue(c.normal)}return T(i,t),null}};a([r()],G.prototype,"view",void 0),a([r()],G.prototype,"intersector",void 0),G=a([D("esri.views.3d.analysis.LineOfSight.LineOfSightRayIntersector")],G);const Tt=_(),It=_(),Pt=_(),Le=_(),re=$e(),Ge="esri.views.3d.analysis.LineOfSight.LineOfSightController",Ve=he.getLogger(Ge);let y=class extends Ae.EventedMixin(k){constructor(t){super(t),this.updateOnCameraChange=!0,this._observerGroundOffsetRenderSpace=0,this._effectiveObserverElevationMode="absolute-height",this._observerFeatureId=null,this._updatingHandles=new ge,this._frameTask=ve,this._computationHandles=new te,this._externalObserverUpdate=!0}initialize(){const t=this.view.resourceController?.scheduler;this._frameTask=t?t.registerTask(J.LINE_OF_SIGHT_TOOL):ve,this._intersector=new G({view:this.view}),this.addHandles([this._connectObserver(),this._connectComputations(),this._connectTargets()])}destroy(){this._computationHandles.destroy(),this._computations.removeAll(),this._updatingHandles.destroy()}get updating(){return this._frameTask.updating||this._updatingHandles.updating}get priority(){return this._frameTask.priority}set priority(t){this._frameTask.priority=t}get _computations(){return this.analysisViewData.computations}get _elevationAlignedObserverPositionRenderSpace(){return this.analysisViewData.observerEngineLocation}set _elevationAlignedObserverPositionRenderSpace(t){this.analysisViewData.observerEngineLocation=t}get _screenPixelSize(){return this.view.state.camera.computeScreenPixelSizeAt(this._elevationAlignedObserverPositionRenderSpace)}_computeResult(t){const e=t.computation,{inputPoints:i,computationResult:n}=e,{observerAdjusted:s,targetAdjusted:o}=i,{start:l,end:d}=n;T(l,s),T(d,o),this._canCompute(e)?this._computeIntersection(t):this._interpolateIntersection(t),e.notifyResultChanged(),this.emit("result-changed",{target:t.computation.target,result:e.result})}_updateAdjustedPointsFromFeatures(t){const e=this.view,{sceneIntersectionHelper:i}=e,{inputPoints:n}=t,{observerAdjusted:s,observerFeatureId:o,targetFeatureId:l,targetAdjusted:d}=n;if(o==null&&l==null)return;const h=tt(s,d),c=this._intersector.intersector,u=ce(n.observer,n.target,Se);c.options.store=ee.ALL,i.intersectToolIntersectorRay(u,c);let g=null,p=null,C=null,b=null;for(const w of c.results.all){const m=X(w,this.view);if(m==null||w.distanceInRenderSpace==null)continue;const L=ae(m);L!=null&&(o!=null&&L===o&&(g==null&&(g=this._getFeatureDistanceThreshold(w,e,h)),w.distanceInRenderSpace<g&&(C=w)),l!=null&&L===l&&(p==null&&(p=this._getFeatureDistanceThreshold(w,e,h)),b==null&&w.distanceInRenderSpace<h&&h-w.distanceInRenderSpace<p&&(b=w)))}C!=null&&C.getIntersectionPoint(s)&&(n.observerSurfaceNormal=C.getTransformedNormal(_())),b!=null&&b.getIntersectionPoint(d)&&(n.targetSurfaceNormal=b.getTransformedNormal(_()))}_getFeatureDistanceThreshold(t,e,i){if(it(t)){const n=nt(t,e);if(n!=null)return Math.min(n*Vt,i)}return 1e-5*i}_adjustStartEndPositions(t){const e=this._screenPixelSize,i=this.view,{inputPoints:n}=t,{observer:s,observerSurfaceNormal:o,target:l,targetSurfaceNormal:d,observerAdjusted:h,targetAdjusted:c}=n,u=K;T(h,s),T(c,l),this._updateAdjustedPointsFromFeatures(t),o!=null?T(u,o):B(u,c,h);const g=e;de(u,u),z(u,u,Math.min(g,1)),F(h,h,u),d!=null?T(u,d):B(u,h,c);const p=i.state.camera.computeScreenPixelSizeAt(c);de(u,u),z(u,u,Math.min(p,1)),F(c,c,u)}_computeIntersection({computation:t,interpolationInfo:e}){const{view:i}=this,{sceneIntersectionHelper:n,renderCoordsHelper:s}=i;if(n==null)return;const o=this._intersector.intersector,{computationResult:l,inputPoints:d}=t,{observer:h,target:c}=d,{start:u,end:g}=l,p=ce(u,g,Se);o.options.store=ee.MIN,n.intersectToolIntersectorRay(p,o);const C=o.results.min,b=l.intersection,w=K;let m=!0;if(C!=null&&C.getIntersectionPoint(b)){T(e.originalIntersection,b),T(e.originalObserver,u),T(e.originalTarget,g),s.fromRenderCoords(b,w,i.spatialReference);const I=1-x(g,c)/x(u,c);m=x(h,b)>=I*x(h,c)}const L=new st(w,i.spatialReference);{const{result:I,target:R}=t;I!=null?(I.target=R,I.intersectedGraphic=m?null:X(C,i),I.intersectedLocation=m?null:L,I.visible=m):t.result=new A({target:R,elevationAlignedTargetLocation:t.elevationAlignedTargetLocation,intersectedGraphic:m?null:X(C,i),intersectedLocation:m?null:L,visible:m})}l.isValid=d.isValid=!0,l.isTargetVisible=m}_interpolateIntersection({computation:t,interpolationInfo:e}){const{computationResult:i,inputPoints:n}=t,{start:s,end:o,intersection:l}=i,{originalIntersection:d,originalObserver:h,originalTarget:c}=e;if(T(l,d),n.isValid){const u=K,g=x(h,d)/x(h,c);_e(u,s,h),z(u,u,1-g),F(l,l,u),_e(u,o,c),z(u,u,g),F(l,l,u),i.isValid=!0}else t.result=null,i.isValid=!1,i.isTargetVisible=!1}_canCompute(t){const e=this.analysisViewData.elevationAlignedObserver,i=this.view.frustum;if(e==null||t.elevationAlignedTargetLocation==null||i==null)return!1;const{observerAdjusted:n,targetAdjusted:s}=t.inputPoints,o=i.intersectsPoint(n),l=i.intersectsPoint(s);return o&&l}_onObserverPositionChange(t,e,i,n,s){if(this._externalObserverUpdate=s,t==null)return this.analysisViewData.elevationAlignedObserver=null,void(this._observerFeatureId=null);if(e==null)return Te(this.analysis,t.spatialReference,Ve),void(this.analysisViewData.elevationAlignedObserver=null);const o=this._getEffectiveElevationInfo(e,i),{absoluteZ:l,elevation:d}=me(e.x,e.y,e.z,this.view.spatialReference,this.view,o),h=e.clone();h.z=l,this._effectiveObserverElevationMode=o.mode,this.analysisViewData.elevationAlignedObserver=h;const c=_();this.view.renderCoordsHelper.toRenderCoords(h,c),this._elevationAlignedObserverPositionRenderSpace=c,this._observerGroundOffsetRenderSpace=l-d,this._observerFeatureId=ae(n),this.priority=J.LINE_OF_SIGHT_TOOL_INTERACTIVE}_onObserverRenderSpacePositionChangeForComputation(t,e,i,n,s){const{inputPoints:o}=t;switch(T(o.observer,e),o.observerFeatureId=s,o.observerSurfaceNormal=null,n){case"on-the-ground":case"relative-to-ground":{const l=this._intersector.updateFromGroundIntersection(o.observer,i,o.observer);o.observerFeatureId==null&&(o.observerSurfaceNormal=l)}}this._adjustStartEndPositions(t),t.notifyInputPointsChanged(),this.priority=J.LINE_OF_SIGHT_TOOL_INTERACTIVE}_onTargetPositionChange(t,e,i,n,s,o=!0){const l=t.inputPoints;if(o&&(l.isValid=!1),i==null)return e!=null&&Te(this.analysis,e.spatialReference,Ve),t.elevationAlignedTargetLocation=null,void t.notifyInputPointsChanged();const d=this._getEffectiveElevationInfo(i,n),{absoluteZ:h,elevation:c}=me(i.x,i.y,i.z,this.view.spatialReference,this.view,d),u=i.clone();switch(u.z=h,t.elevationAlignedTargetLocation=u,this.view.renderCoordsHelper.toRenderCoords(t.elevationAlignedTargetLocation,l.target),l.targetFeatureId=ae(s),l.targetSurfaceNormal=null,d.mode){case"on-the-ground":case"relative-to-ground":{const g=this._intersector.updateFromGroundIntersection(l.target,h-c,l.target);l.targetFeatureId==null&&(l.targetSurfaceNormal=g)}}this._adjustStartEndPositions(t),t.notifyInputPointsChanged(),this.priority=J.LINE_OF_SIGHT_TOOL_INTERACTIVE}_connectComputationToTarget(t){return Z([this._updatingHandles.add(()=>({computation:t,targetPosition:t.target.position,targetElevationInfo:t.target.elevationInfo,targetFeatureInfo:t.target.feature,projectedTargetPosition:q(t.target.position,this.view.spatialReference)}),({computation:e,targetPosition:i,targetElevationInfo:n,targetFeatureInfo:s,projectedTargetPosition:o})=>{o.pending==null?this._onTargetPositionChange(e,i,o.geometry,n,s):this._updatingHandles.addPromise(o.pending)},S)])}_connectComputationToObserver(t){return this._updatingHandles.add(()=>({computation:t,observer:this.analysisViewData.elevationAlignedObserver}),({computation:e})=>{this._externalObserverUpdate&&(e.inputPoints.isValid=!1,e.notifyInputPointsChanged())},S)}_connectComputationToRenderSpaceObserver(t){return this._updatingHandles.add(()=>({computation:t,observer:this._elevationAlignedObserverPositionRenderSpace,observerGroundOffset:this._observerGroundOffsetRenderSpace,observerElevationMode:this._effectiveObserverElevationMode,observerFeatureId:this._observerFeatureId}),({computation:e,observer:i,observerGroundOffset:n,observerElevationMode:s,observerFeatureId:o})=>{this._onObserverRenderSpacePositionChangeForComputation(e,i,n,s,o)},S)}_connectComputationToCamera(t){return this._updatingHandles.add(()=>({camera:this.view.state.camera,isDirty:this._isCameraDirty}),({isDirty:e})=>{!this.updateOnCameraChange||t.inputPoints.isValid&&!e||t.notifyInputPointsChanged()})}_connectComputationToSlicePlane(t){return this._updatingHandles.add(()=>this.view.slicePlane,()=>{t.inputPoints.isValid=!1,t.notifyInputPointsChanged()})}_connectComputationToElevation(t){const e=(i,n)=>{const s=this.analysis.observer,o=t.target;let l=null,d=null,h=null,c=null,u=null,g=null;if(s?.position!=null){const p=q(s.position,this.view.spatialReference);if(p.pending!=null)return this._updatingHandles.addPromise(p.pending),void p.pending.finally(()=>e(i,n));l=p.geometry,d=s.elevationInfo,h=s.feature}if(o.position!=null){const p=q(o.position,this.view.spatialReference);if(p.pending!=null)return this._updatingHandles.addPromise(p.pending),void p.pending.finally(()=>e(i,n));c=p.geometry,u=o.elevationInfo,g=o.feature}l==null&&c==null||(lt(i,n,Q,this.view.spatialReference),l!=null&&be(Q,l)&&this._onObserverPositionChange(s!=null?s.position:null,l,d,h,!1),c!=null&&be(Q,c)&&this._onTargetPositionChange(t,o.position,c,u,g,!1),l!=null&&c!=null&&ut(Q,l,c)&&t.notifyInputPointsChanged())};return this.view.elevationProvider.on("elevation-change",i=>e(i.extent,i.spatialReference))}_connectComputationToTask(t){let e=null;const i={computation:t,interpolationInfo:{originalIntersection:_(),originalObserver:_(),originalTarget:_()}};return Z([this._updatingHandles.add(()=>t.inputPoints,()=>{e=ye(e),e=at(async n=>{await ot(this._frameTask.schedule(()=>this._computeResult(i),n))})},{initial:!0,equals:()=>!1}),He(()=>e=ye(e))])}_connectComputation(t){const e=this._computationHandles;e.has(t)||e.add([this._connectComputationToTarget(t),this._connectComputationToObserver(t),this._connectComputationToRenderSpaceObserver(t),this._connectComputationToCamera(t),this._connectComputationToSlicePlane(t),this._connectComputationToElevation(t),this._connectComputationToTask(t)],t)}_disconnectComputation(t){this._computationHandles.remove(t)}_onComputationCollectionChange({added:t,removed:e}){for(const i of e)this._disconnectComputation(i);for(const i of t)this._connectComputation(i)}_onTargetCollectionChange({added:t,removed:e}){for(const i of e)this._removeTarget(i);for(const i of t)this._addTarget(i)}_onCursorTargetChange(t,e){e!=null&&this._removeTarget(e),t!=null&&this._addTarget(t)}_addTarget(t){this._computations.some(e=>e.target===t)||this._computations.add(new H({target:t}))}_removeTarget(t){const e=this._computations.findIndex(i=>i.target===t);this._computations.removeAt(e)}_connectObserver(){return Z([this._updatingHandles.add(()=>({observerPosition:this.analysis.observer!=null?this.analysis.observer.position:null,projectedObserverPosition:q(this.analysis.observer!=null?this.analysis.observer.position:null,this.view.spatialReference),observerElevationInfo:this.analysis.observer!=null?this.analysis.observer.elevationInfo:null,observerFeatureInfo:this.analysis.observer!=null?this.analysis.observer.feature:null}),({observerPosition:t,projectedObserverPosition:e,observerElevationInfo:i,observerFeatureInfo:n})=>{e.pending==null?this._onObserverPositionChange(t,e.geometry,i,n,!0):this._updatingHandles.addPromise(e.pending)},S)])}_connectComputations(){return this._updatingHandles.addOnCollectionChange(()=>this._computations,t=>this._onComputationCollectionChange(t),{initial:!0,final:!0})}_connectTargets(){return Z([this._updatingHandles.addOnCollectionChange(()=>this.analysis.targets,t=>this._onTargetCollectionChange(t),{initial:!0,final:!0}),this._updatingHandles.add(()=>this.analysisViewData.cursorTarget,(t,e)=>{this._onCursorTargetChange(t,e)})])}get _isCameraDirty(){const t=this.analysisViewData.elevationAlignedObserver,{view:e}=this,{renderCoordsHelper:i}=e;if(t==null||i==null)return!1;const n=K;i.toRenderCoords(t,n);const s=e.state.camera.computeScreenPixelSizeAt(n);return Math.abs((s-this._screenPixelSize)/this._screenPixelSize)>Lt}_getEffectiveElevationInfo(t,e){return t.hasZ?e??{mode:"absolute-height",offset:0}:{mode:"on-the-ground",offset:0}}};a([r({constructOnly:!0})],y.prototype,"analysis",void 0),a([r({constructOnly:!0})],y.prototype,"analysisViewData",void 0),a([r({constructOnly:!0})],y.prototype,"view",void 0),a([r()],y.prototype,"updating",null),a([r()],y.prototype,"priority",null),a([r()],y.prototype,"updateOnCameraChange",void 0),a([r()],y.prototype,"_computations",null),a([r()],y.prototype,"_elevationAlignedObserverPositionRenderSpace",null),a([r()],y.prototype,"_observerGroundOffsetRenderSpace",void 0),a([r()],y.prototype,"_effectiveObserverElevationMode",void 0),a([r()],y.prototype,"_observerFeatureId",void 0),a([r()],y.prototype,"_screenPixelSize",null),a([r({readOnly:!0})],y.prototype,"_updatingHandles",void 0),a([r()],y.prototype,"_frameTask",void 0),a([r()],y.prototype,"_isCameraDirty",null),y=a([D(Ge)],y);const Lt=.1,K=_(),Se=$e(),Q=rt(),Vt=.05;let St=class{constructor(){this.glowWidth=8,this.innerWidth=.75}};const Rt=new St;function Et(t){const e=t.accentColor;return{glowColor:e,innerColor:dt(e),globalAlpha:.75*e.a}}class $t{constructor(){this.size=.5}}const At=new $t;function Re(t){return ct(t.accentColor,.75)}class Ht{constructor(){this.size=.5,this.visibleColor=new v([3,252,111,.75]),this.occludedColor=new v([252,3,69,.75]),this.undefinedColor=new v([127,127,127,.75])}}const Dt=new Ht;let Mt=class{constructor(){this.innerWidth=2,this.outerWidth=8,this.visibleInnerColor=new v([3,252,111,1]),this.visibleOuterColor=new v([3,252,111,.15]),this.occludedInnerColor=new v([252,3,69,1]),this.occludedOuterColor=new v([252,3,69,.1]),this.undefinedInnerColor=new v([255,255,255,1]),this.undefinedOuterColor=new v([127,127,127,.2])}};const Y=new Mt;class kt extends ke{constructor(e,i){const n=xe(Re(e.effectiveTheme)),s=De(n,At.size,32,32),o=new ze(s);super({view:e,renderObjects:[o],metadata:i,elevationInfo:{mode:"absolute-height",offset:0}}),Fe(this),this.themeHandle=Me(()=>({color:Re(e.effectiveTheme)}),l=>{n.setParameters(l)})}destroy(){this.themeHandle.remove(),super.destroy()}}let xt=class extends ke{constructor(e,i){const{size:n,visibleColor:s,occludedColor:o,undefinedColor:l}=Dt;super({view:e,renderObjects:[le(n,s,j.Custom1),le(n,o,j.Custom2),le(n,l,j.Custom3)],metadata:i,elevationInfo:{mode:"absolute-height",offset:0}}),Fe(this)}};function le(t,e,i){return new ze(De(xe(v.toUnitRGBA(e)),t,32,32),i)}var M;(function(t){t.Ready="ready",t.Creating="creating",t.Created="created"})(M||(M={}));let O=class extends Ct{constructor(e){super(e),this.removeIncompleteOnCancel=!1,this.analysisViewData=null,this._latestPointerMovePointerType=null,this._laserlineVisualElement=null,this._grabbedManipulator=null,this._analysisHandles=new te,this._updatingHandles=new ge,this._manipulatorHandles=new te,this._targetTrackerManipulator=null}initialize(){this._intersector=new G({view:this.view}),this.addHandles(Me(()=>this.state,e=>{e===M.Created&&this.finishToolCreation()},pt)),this._observerManipulator=this._createObserverManipulator(),this._createLaserLine(),this.addHandles([this._updatingHandles.add(()=>this.analysisViewData?.elevationAlignedObserver,e=>this._onObserverLocationChange(e),S),this._updatingHandles.add(()=>Et(this.view.effectiveTheme),({glowColor:e,innerColor:i,globalAlpha:n})=>this._updateLaserLineStyle(e,i,n),S),this._updatingHandles.add(()=>this._laserLineRendererDependencies(),e=>this._updateLaserLineRenderer(e)),this._connectComputations(),this._updatingHandles.addWhen(()=>!this._shouldRenderTracker,()=>this._clearCursorTracker(),S)])}destroy(){this._updatingHandles=E(this._updatingHandles),this._manipulatorHandles=E(this._manipulatorHandles),this._analysisHandles=E(this._analysisHandles),this._observerManipulator=null,this._clearCursorTracker(),this._removeLaserLine(),this._intersector=null,this._set("analysis",null)}get state(){return this.active?this.hasGrabbedManipulators?M.Created:M.Creating:this.analysis.observer?.position!=null?M.Created:M.Ready}get cursor(){return this.active&&this._showTracker?"crosshair":null}get updating(){return this.analysisViewData!=null&&this.analysisViewData.updating||this._updatingHandles.updating}get _showTracker(){return this.active&&this._latestPointerMovePointerType==="mouse"}get _shouldRenderTracker(){return this._showTracker&&this.analysis.observer?.position!=null&&!this.hasGrabbedManipulators}continue(){this.view.activeTool=this}stop(){this.view.activeTool=null}onEditableChange(){this.analysisViewData.editable=this.internallyEditable}onInputEvent(e){switch(e.type){case"immediate-double-click":this._doubleClickHandler(e);break;case"key-down":this._keyDownHandler(e);break;case"pointer-move":this._pointerMoveHandler(e)}}onInputEventAfter(e){e.type==="immediate-click"&&this._clickHandler(e)}onShow(){}onHide(){}onDeactivate(){this._clearCursorTracker()}_connectComputations(){return this._updatingHandles.addOnCollectionChange(()=>this.analysisViewData.computations,e=>this._onComputationsCollectionChange(e),{initial:!0,final:!0})}_onComputationsCollectionChange({added:e,removed:i}){for(const n of i)this._disconnectComputation(n);for(const n of e)this._connectComputation(n)}_connectComputation(e){if(this.destroyed)return void he.getLogger(this).warn("Attempting to connect an analysis to a destroyed LineOfSight tool. Ignoring.");const i=this._analysisHandles;if(i.has(e))return;const n=this._createTargetManipulator(e.target);this._targetTrackerManipulator==null&&n.metadata.target===this.analysisViewData.cursorTarget&&(this._targetTrackerManipulator=n,this._targetTrackerManipulator.available=!1,this._targetTrackerManipulator.interactive=!1,this._updateLaserLineRenderer()),i.add([this._updatingHandles.add(()=>this._getLineOfSightManipulatorStateDependencies(e),()=>this._updateManipulatorState(n,e),S),this._updatingHandles.add(()=>e.elevationAlignedTargetLocation,s=>this._onTargetLocationChange(s,n),S)],e)}_disconnectComputation(e){if(this.destroyed)return void he.getLogger(this).warn("Attempting to disconnect an analysis from a destroyed LineOfSight tool. Ignoring.");this._analysisHandles.remove(e);const i=this._getTargetManipulator(e.target);i!=null&&(this.manipulators.remove(i),this._manipulatorHandles.remove(i),this._targetTrackerManipulator!=null&&this._targetTrackerManipulator===i&&(this._targetTrackerManipulator=null))}_clearCursorTracker(){this.analysisViewData.cursorTarget=E(this.analysisViewData.cursorTarget)}_createTargetManipulator(e){const i={target:e,type:"target"},n=new xt(this.view,i);return this._manipulatorHandles.add([this._createTargetManipulatorDragPipeline(n),n.events.on("grab-changed",s=>this._manipulatorGrabChanged(n,s)),n.events.on("immediate-click",s=>this._manipulatorClick(n,s))],n),this.manipulators.add(n),e.position!=null?n.elevationAlignedLocation=e.position:n.available=!1,n}_getTargetManipulator(e){let i=null;return this.manipulators.forEach(n=>{const s=n.manipulator;i==null&&s.metadata.type==="target"&&s.metadata.target===e&&(i=s)}),i}_createObserverManipulator(){const e=new kt(this.view,{type:"observer",intersection:null});return this._manipulatorHandles.add([this._createObserverManipulatorDragPipeline(e),e.events.on("grab-changed",i=>this._manipulatorGrabChanged(e,i)),e.events.on("immediate-click",i=>this._manipulatorClick(e,i))],e),this.manipulators.add(e),e}_screenToIntersection(){return e=>{const i=this._intersector.getScreenPointIntersection(e.screenEnd);return i==null?null:{...e,intersection:i}}}_createTargetManipulatorDragPipeline(e){return Pe(e,(i,n,s)=>{n.next(this._screenToIntersection()).next(this._updateTargetDragStep(e)).next(()=>this._updateLaserLineRenderer()),s.next(this._cancelTargetDragStep(e.metadata.target)).next(()=>this._updateLaserLineRenderer())})}_createObserverManipulatorDragPipeline(e){return Pe(e,(i,n,s)=>{n.next(this._screenToIntersection()).next(this._updateObserverDragStep()).next(()=>this._updateLaserLineRenderer()),s.next(this._cancelObserverDragStep()).next(()=>this._updateLaserLineRenderer())})}_updateObserverDragStep(){return e=>(e.intersection.mapPoint!=null?(this.analysis.observer==null&&(this.analysis.observer=new we),this._updateFromIntersection(this.analysis.observer,e.intersection)):this.analysis.observer=null,e)}_cancelObserverDragStep(){const e=this.analysis.observer?.position!=null?this.analysis.observer.clone():null;return i=>(this.analysis.observer=e,i)}_updateTargetDragStep(e){return i=>{this._updateFromIntersection(e.metadata.target,i.intersection);const n=i.intersection.mapPoint;return n!=null&&(e.elevationAlignedLocation=n),i}}_cancelTargetDragStep(e){const i=e.position?.clone();return n=>(e.position=i,n)}_manipulatorGrabChanged(e,i){switch(i.action){case"start":this._grabbedManipulator=e;break;case"end":this._grabbedManipulator===e&&(this._grabbedManipulator=null)}}_updateManipulatorState(e,i){const{isValid:n,isTargetVisible:s}=i.computationResult;e.state=n?s?j.Custom1:j.Custom2:j.Custom3}_getLineOfSightManipulatorStateDependencies(e){const{isValid:i,isTargetVisible:n}=e.computationResult;return{isValid:i,isTargetVisible:n}}_laserLineRendererDependencies(){return{laserlineVisualElement:this._laserlineVisualElement,grabbedManipulator:this._grabbedManipulator,shouldRenderTracker:this._shouldRenderTracker,observerPosition:this.analysis.observer!=null?this.analysis.observer.position:null,visible:this.visible}}_updateLaserLineRenderer(e=this._laserLineRendererDependencies()){const{laserlineVisualElement:i,grabbedManipulator:n,shouldRenderTracker:s,observerPosition:o,visible:l}=e;if(i==null)return;const d=n??(s&&o!=null?this._targetTrackerManipulator:null);d!=null&&l?(i.visible=!0,i.heightManifoldTarget=d.renderLocation,d!==this._observerManipulator?i.lineVerticalPlaneSegment=gt(this._observerManipulator.renderLocation,d.renderLocation,zt):i.lineVerticalPlaneSegment=null):(i.visible=!1,i.heightManifoldTarget=null,i.lineVerticalPlaneSegment=null)}_createLaserLine(){this._removeLaserLine();const{glowWidth:e,innerWidth:i}=Rt;this._laserlineVisualElement=new ft({view:this.view,attached:!0,visible:this.visible,style:{glowWidth:e,innerWidth:i},isDecoration:!0})}_removeLaserLine(){this._laserlineVisualElement!=null&&(this._laserlineVisualElement.destroy(),this._laserlineVisualElement=null)}_updateLaserLineStyle(e,i,n){const s=this._laserlineVisualElement;if(s==null)return;const o=s.style;s.style={...o,glowColor:v.toUnitRGB(e),innerColor:v.toUnitRGB(i),globalAlpha:n}}_onObserverLocationChange(e){e!=null?(this._observerManipulator.metadata.intersection=null,this._observerManipulator.available=!0,this._observerManipulator.elevationAlignedLocation=e):this._observerManipulator.available=!1}_onTargetLocationChange(e,i){e!=null?(i.elevationAlignedLocation=e,i!==this._targetTrackerManipulator&&(i.available=!0)):i.available=!1}_addPointFromClickEvent(e){const i=this._intersector.getScreenPointIntersection(e);if(i?.mapPoint!=null)if(this.analysis.observer?.position!=null){this._clearCursorTracker();const n=new Oe;this._updateFromIntersection(n,i),this.analysis.targets.add(n)}else{const n=new we;this._updateFromIntersection(n,i),this.analysis.observer=n}}_clickHandler(e){this.active&&e.button!==ne.Right&&(this._addPointFromClickEvent(fe(e)),e.stopPropagation())}_doubleClickHandler(e){this.active&&e.button!==ne.Right&&(this.stop(),e.stopPropagation())}_keyDownHandler(e){this.active&&e.key==="Escape"&&(this.stop(),e.stopPropagation())}_pointerMoveHandler(e){if(this.hasGrabbedManipulators||(this._latestPointerMovePointerType=e.pointerType,this._updateLaserLineRenderer(),!this._showTracker||this.analysis.observer?.position==null))return;const i=fe(e),n=this._intersector.getScreenPointIntersection(i);n?.mapPoint!=null&&(this.analysisViewData.cursorTarget==null&&(this.analysisViewData.cursorTarget=new Oe),this._updateFromIntersection(this.analysisViewData.cursorTarget,n),this._updateLaserLineRenderer())}_updateFromIntersection(e,i){if(i.mapPoint==null)return e.position=null,e.elevationInfo=null,void(e.feature=null);switch(i.type){case U.OBJECT:if(i.graphic!=null){const s=i.graphic,o=vt(s);o.mode==="on-the-ground"&&(o.mode="relative-to-ground",o.offset=0),e.elevationInfo=new Ce(o),e.feature=s}else e.elevationInfo=null,e.feature=null;break;case U.TERRAIN:case U.I3S:e.elevationInfo=new Ce({mode:"on-the-ground"}),e.feature=null;break;default:e.elevationInfo=null,e.feature=null}const n=i.mapPoint.clone();n.z=_t(this.view,n,{mode:"absolute-height",offset:0},e.elevationInfo),e.position=n}_manipulatorClick(e,i){if(e.metadata.type==="observer"||e.grabbing||e.dragging||i.button!==ne.Right||this.analysis.targets.length<=1)return;const{target:n}=e.metadata;this.analysis.targets.remove(n),i.stopPropagation()}get testInfo(){return{laserLineVisualElement:this._laserlineVisualElement,getTargetManipulator:e=>this._getTargetManipulator(e)}}};a([r({constructOnly:!0})],O.prototype,"view",void 0),a([r({constructOnly:!0})],O.prototype,"analysis",void 0),a([r({readOnly:!0})],O.prototype,"state",null),a([r({readOnly:!0})],O.prototype,"cursor",null),a([r()],O.prototype,"removeIncompleteOnCancel",void 0),a([r({readOnly:!0})],O.prototype,"updating",null),a([r({constructOnly:!0})],O.prototype,"analysisViewData",void 0),a([r({readOnly:!0})],O.prototype,"_showTracker",null),a([r()],O.prototype,"_latestPointerMovePointerType",void 0),a([r()],O.prototype,"_shouldRenderTracker",null),a([r()],O.prototype,"_laserlineVisualElement",void 0),a([r()],O.prototype,"_grabbedManipulator",void 0),O=a([D("esri.views.3d.interactive.analysisTools.lineOfSight.LineOfSightTool")],O);const zt=ht();class Ft{constructor(e,i,n,s){this.visibleLineVisualElement=e,this.occludedLineVisualElement=i,this.undefinedLineVisualElement=n,this.targetVisualElement=s}destroy(){this.visibleLineVisualElement.destroy(),this.occludedLineVisualElement.destroy(),this.undefinedLineVisualElement.destroy(),this.targetVisualElement.destroy()}}let V=class extends k{constructor(t){super(t),this._lineOfSightVisualElements=new Array,this._computationHandles=new te,this._updatingHandles=new ge}initialize(){this.addHandles(this._connectComputations()),this._createObserverVisualization()}destroy(){this._updatingHandles=E(this._updatingHandles),this._computationHandles=E(this._computationHandles),this._observerVisualElement=E(this._observerVisualElement)}get visible(){return this.analysisViewData.visible}get updating(){return this._updatingHandles.updating}get interactiveAndEditable(){return this.analysisViewData.interactive&&this.analysisViewData.editable}get test(){return{disablePartialOcclusion:()=>{for(const t of this._lineOfSightVisualElements)t.visibleLineVisualElement.renderOccluded=se.Occlude,t.occludedLineVisualElement.renderOccluded=se.Occlude,t.undefinedLineVisualElement.renderOccluded=se.Occlude},visualizations:this._lineOfSightVisualElements}}_createLineOfSightVisualization(){const t=Y,e=this.view,i=this.isDecoration,n={view:e,attached:!0,width:t.outerWidth,innerWidth:t.innerWidth,isDecoration:i},s=v.toUnitRGBA(t.visibleOuterColor),o=v.toUnitRGBA(t.visibleInnerColor),l=v.toUnitRGBA(t.occludedOuterColor),d=v.toUnitRGBA(t.occludedInnerColor),h=v.toUnitRGBA(t.undefinedOuterColor),c=v.toUnitRGBA(t.undefinedInnerColor),u=new oe({...n,color:s,innerColor:o}),g=new oe({...n,color:l,innerColor:d}),p=new oe({...n,color:h,innerColor:c}),C=new Ie({view:e,attached:!0,...Ee,size:8,isDecoration:i}),b=new Ft(u,g,p,C);return this._lineOfSightVisualElements.push(b),b}_destroyLineOfSightVisualization(t){t.destroy(),this._lineOfSightVisualElements.splice(this._lineOfSightVisualElements.indexOf(t),1)}_updateLineOfSightVisualization(t,e,i){const n=Y,{computationResult:s,inputPoints:o}=t,{start:l,end:d,intersection:h,isValid:c,isTargetVisible:u}=s,{observer:g}=o,p=Nt;p[12]=g[0],p[13]=g[1],p[14]=g[2];const C=B(Gt,l,g),b=B(Ut,d,g),w=B(jt,h,g),{visibleLineVisualElement:m,occludedLineVisualElement:L,undefinedLineVisualElement:I,targetVisualElement:R}=e,Ue=this.analysisViewData.elevationAlignedObserver==null||t.elevationAlignedTargetLocation==null,N=this.visible&&!Ue;m.visible=N,L.visible=N,I.visible=N,R.visible=N,R.attached=!i.interactiveAndEditable,N&&(m.geometry=null,L.geometry=null,I.geometry=null,R.geometry=t.elevationAlignedTargetLocation,c?u?(m.geometry=[[$(C),$(b)]],m.transform=p,m.color=v.toUnitRGBA(n.visibleOuterColor),R.color=v.toUnitRGBA(n.visibleInnerColor)):(m.geometry=[[$(C),$(w)]],m.transform=p,m.color=v.toUnitRGBA(n.occludedOuterColor),L.geometry=[[$(w),$(b)]],L.transform=p,R.color=v.toUnitRGBA(n.occludedInnerColor)):(I.geometry=[[$(C),$(b)]],I.transform=p,R.color=v.toUnitRGBA(n.undefinedInnerColor)))}_getLineOfSightVisualizationDependencies(t){const{computationResult:e}=t,{occludedOuterColor:i,visibleOuterColor:n}=Y;return{computationResult:e,occludedOuterColor:i,visibleOuterColor:n,visible:this.visible,interactiveAndEditable:this.interactiveAndEditable}}_connectComputation(t){const e=this._computationHandles;if(e.has(t))return;const i=this._createLineOfSightVisualization();e.add([this._updatingHandles.add(()=>this._getLineOfSightVisualizationDependencies(t),n=>this._updateLineOfSightVisualization(t,i,n),{initial:!0,equals:()=>!1}),He(()=>this._destroyLineOfSightVisualization(i))],t)}_disconnectComputation(t){this._computationHandles.remove(t)}_connectComputations(){return this._updatingHandles.addOnCollectionChange(()=>this.analysisViewData.computations,t=>this._onComputationsCollectionChange(t),{initial:!0,final:!0})}_onComputationsCollectionChange({added:t,removed:e}){for(const i of e)this._disconnectComputation(i);for(const i of t)this._connectComputation(i)}_createObserverVisualization(){const t=v.toUnitRGBA(Y.visibleInnerColor),e=new Ie({view:this.view,color:t,...Ee,isDecoration:this.isDecoration});this._observerVisualElement=e,this.addHandles(this._updatingHandles.add(()=>({observer:this.analysisViewData.elevationAlignedObserver,interactiveAndEditable:this.interactiveAndEditable,visible:this.visible}),({observer:i,interactiveAndEditable:n,visible:s})=>{i!=null&&!n&&s?(e.geometry=i,this._observerVisualElement.attached=!0):e.attached=!1},S))}};a([r({constructOnly:!0})],V.prototype,"analysis",void 0),a([r({constructOnly:!0})],V.prototype,"analysisViewData",void 0),a([r({constructOnly:!0})],V.prototype,"view",void 0),a([r({readOnly:!0})],V.prototype,"visible",null),a([r({constructOnly:!0})],V.prototype,"isDecoration",void 0),a([r()],V.prototype,"updating",null),a([r()],V.prototype,"interactiveAndEditable",null),a([r()],V.prototype,"test",null),V=a([D("esri.views.3d.analysis.LineOfSight.LineOfSightVisualization")],V);const Ee={size:6,pixelSnappingEnabled:!1,primitive:"circle",elevationInfo:{mode:"absolute-height",offset:0},outlineSize:0},Gt=_(),Ut=_(),jt=_(),Nt=mt();let f=class extends bt(Ae.EventedMixin(k)){constructor(t){super(t),this.type="line-of-sight-view-3d",this.analysis=null,this.tool=null,this.computations=new yt,this.elevationAlignedObserver=null,this.observerEngineLocation=_(),this.cursorTarget=null,this.editable=!0}initialize(){const t=this.view,e=this.analysis;this._analysisController=new y({analysis:e,analysisViewData:this,view:t}),this._analysisVisualization=new V({analysis:e,analysisViewData:this,view:t,isDecoration:!this.parent}),this.addHandles([this._analysisController.on("result-changed",i=>{i.target!==this.cursorTarget&&this.emit("result-changed",i)}),wt(this,O)])}destroy(){Ot(this),this._analysisController=E(this._analysisController),this._analysisVisualization=E(this._analysisVisualization)}get results(){return this.computations.map(t=>t.result)}get priority(){return this._analysisController.priority}set priority(t){this._analysisController.priority=t}get updating(){return this._analysisController!=null&&this._analysisController.updating||this._analysisVisualization!=null&&this._analysisVisualization.updating}getResultForTarget(t){return this.computations.find(e=>e.target===t)?.result}get testInfo(){return{visualization:this._analysisVisualization,controller:this._analysisController}}};a([r({readOnly:!0})],f.prototype,"type",void 0),a([r({constructOnly:!0,nonNullable:!0})],f.prototype,"analysis",void 0),a([r()],f.prototype,"tool",void 0),a([r({readOnly:!0})],f.prototype,"results",null),a([r()],f.prototype,"priority",null),a([r()],f.prototype,"computations",void 0),a([r()],f.prototype,"elevationAlignedObserver",void 0),a([r()],f.prototype,"observerEngineLocation",void 0),a([r()],f.prototype,"cursorTarget",void 0),a([r()],f.prototype,"updating",null),a([r()],f.prototype,"editable",void 0),a([r()],f.prototype,"_analysisController",void 0),a([r()],f.prototype,"_analysisVisualization",void 0),f=a([D("esri.views.3d.analysis.LineOfSightAnalysisView3D")],f);const li=f;export{li as default};