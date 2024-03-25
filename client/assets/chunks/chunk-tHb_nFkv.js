import{l9 as Ve,$ as r,a0 as o,a2 as k,a3 as q,ao as W,pq as fe,z,ak as v,pr as d,ps as le,pt as be,pu as Me,pv as De,fn as Ee,pw as Ce,al as Te,as as F,ae as V,n3 as f,px as u,py as b,pz as C,pA as T,pB as S,pC as K,jU as D,pD as Z,cK as J,mV as p,mW as O,cI as Q,pE as X,pF as U,pG as $,eS as G,pH as Se,pI as xe,pJ as E,cJ as Y,lk as $e,ev as ee,lm as ke,e$ as te,kB as Le,pK as He,ew as re,pL as oe,pM as he,ki as ze,pN as ue,cU as j,pO as Oe}from"./chunk-xdbuWCSg.js";import{s as Ge}from"./chunk-J8opwlW7.js";import{x as Re,L as Ie,V as Ae,R as pe,m as Be,I as Fe,H as Ke,g as ie,v as Ue,j as ce,A as de,M as ye,r as R,t as I,l as ae,_ as se,a as je,p as Ne,s as qe,b as x,e as We,C as m,c as ve,u as Ze,d as Je,f as Qe,h as Xe,i as we,k as _e,n as Ye,o as et,q as tt,w as it,y as at}from"./chunk-ywCDB325.js";import{t as st}from"./chunk-b7wP5lso.js";import{l as nt,n as lt}from"./chunk-pV6VSnOa.js";import{a as rt,v as ot}from"./chunk-9-o-azur.js";import"./chunk-t4TbIqUg.js";import"./chunk-6cVeal0h.js";function ht(e){switch(e.type){case"building-scene":case"catalog":case"catalog-dynamic-group":case"catalog-footprint":case"csv":case"dimension":case"feature":case"geo-rss":case"geojson":case"graphics":case"group":case"integrated-mesh":case"integrated-mesh-3dtiles":case"kml":case"knowledge-graph":case"link-chart":case"knowledge-graph-sublayer":case"line-of-sight":case"map-notes":case"ogc-feature":case"oriented-imagery":case"point-cloud":case"route":case"scene":case"stream":case"voxel":case"subtype-group":case"unknown":case"unsupported":case"wfs":case null:return!1;case"base-dynamic":case"base-elevation":case"base-tile":case"bing-maps":case"elevation":case"imagery":case"imagery-tile":case"map-image":case"media":case"open-street-map":case"tile":case"vector-tile":case"video":case"wcs":case"web-tile":case"wms":case"wmts":return!0;default:return Ve(e.type),!1}}let g=class extends q{constructor(e){super(e),this._internalChange=!1,this._currentSlicePlane=null}initialize(){this.addHandles(this.analysis.excludedLayers.on("before-add",e=>{const t=e.item;t!=null&&(t instanceof W||t instanceof fe)?t instanceof W&&ht(t)?(z.getLogger(this).error("excludedLayers",`Layer '${t.title}, id:${t.id}' of type '${t.type}' can not be individually excluded from slicing. Use 'excludeGroundSurface' instead.`),e.preventDefault()):this.analysis.excludedLayers.includes(t)&&e.preventDefault():(z.getLogger(this).error("excludedLayers","Invalid layer type, layer must derive from Layer or BuildingComponentSublayer"),e.preventDefault())})),pt(this.view,this),this.addHandles([v(()=>this.analysisViewData.plane,()=>{this._internalChange||this._updateSlicePlaneFromBoundedPlane(),this._updateLayerViews()},{sync:!0}),v(()=>this.analysis.excludeGroundSurface,()=>this._updateLayerViews(),{sync:!0}),this.analysis.excludedLayers.on("change",()=>this._updateLayerViews()),v(()=>[this.analysisViewData.active,this.analysisViewData.visible],()=>{this._updateActiveController(),this._updateViewSlicePlane()},{sync:!0}),v(()=>this._allLayerAndSubLayerViews,()=>this._updateLayerViews())]),this.addHandles([v(()=>this.analysis.shape,()=>{this._internalChange||(this._updateBoundedPlaneFromSlicePlane(),this._updateViewSlicePlane())},{sync:!0})],"analysis"),this._updateActiveController(),this._updateBoundedPlaneFromSlicePlane(),this._updateViewSlicePlane()}destroy(){this.analysisViewData.active&&(this.analysisViewData.active=!1,this.view.slicePlane=null,this._updateActiveController(),this._updateViewSlicePlane()),ct(this.view,this),this.set("view",null)}get _allLayerAndSubLayerViews(){const e=this.view.allLayerViews.items;return e.concat(e.filter(Re).flatMap(({sublayerViews:t})=>t.items))}_updateBoundedPlaneFromSlicePlane(){const e=this.analysis.shape,t=this._currentSlicePlane;if(t==null&&e==null||t!=null&&e!=null&&e.equals(t))return;let i=null,a=null;if(e?.position!=null){const s=e.position.spatialReference,n=Ie(e,this.view);n==null&&st(this.analysis,s,z.getLogger(this)),i=Ae(n,this.view,{tiltEnabled:this.analysis.tiltEnabled},d()),i!=null&&(a={heading:e.heading,tilt:e.tilt,position:e.position,width:e.width,height:e.height})}this._currentSlicePlane=a,this._internalChange=!0,this.analysisViewData.plane=i,this._internalChange=!1}_updateSlicePlaneFromBoundedPlane(){const e=this.analysisViewData.plane,t=pe(e,this.view,this.view.spatialReference,new le);let i=null;t!=null&&(i={heading:t.heading,tilt:t.tilt,position:t.position,width:t.width,height:t.height}),this._currentSlicePlane=i,this._internalChange=!0,this.analysis.shape=t,this._internalChange=!1,this._updateViewSlicePlane()}_updateActiveController(){if(A)return;const e=ge(this.view);if(e)if(this.analysisViewData.active)e.activeController!=null&&e.activeController!==this?(A=!0,e.activeController.analysisViewData.active=!1,A=!1):e.activeController!=null&&e.activeController,this._updateLayerViews(),e.activeController=this;else{if(e.activeController!=null&&e.activeController!==this)return;e.activeController!=null&&e.activeController===this&&(e.activeController=null,this._updateLayerViews())}}_updateViewSlicePlane(){ut(this.view)}_updateLayerViews(){const e=this.analysisViewData.plane!=null&&this.analysisViewData.visible&&this.analysisViewData.active,t=[],i=a=>{"layers"in a?a.layers.forEach(i):t.push(a)};this.analysis.excludedLayers.forEach(i),this.view.allLayerViews.forEach(a=>{a.destroyed||("slicePlaneEnabled"in a&&(a.slicePlaneEnabled=e&&!t.includes(a.layer)),"sublayerViews"in a&&a.sublayerViews.forEach(s=>{s.slicePlaneEnabled=e&&!t.includes(s.sublayer)}))}),this.view.basemapTerrain!=null&&(this.view.basemapTerrain.slicePlaneEnabled=e&&!this.analysis.excludeGroundSurface)}};r([o()],g.prototype,"view",void 0),r([o()],g.prototype,"analysis",void 0),r([o()],g.prototype,"analysisViewData",void 0),r([o()],g.prototype,"_allLayerAndSubLayerViews",null),g=r([k("esri.views.3d.analysis.Slice.SliceController")],g);const P=new Map;let A=!1;function ut(e){const t=ge(e),i=t?.activeController;i?.analysisViewData.plane!=null&&i.analysisViewData.visible?e.slicePlane=i.analysisViewData.plane:e.slicePlane=null}function pt(e,t){P.has(e)||P.set(e,{all:[],activeController:null}),P.get(e)?.all.push(t)}function ge(e){return P.get(e)}function ct(e,t){if(!P.has(e))throw new Error("view expected in global slice register");const i=P.get(e),a=i?.all.lastIndexOf(t)??-1;if(!i||a===-1)throw new Error("controller expected in global slice register");i.all.splice(a,1),i.all.length===0&&P.delete(e)}var N;let h=N=class extends Me{constructor(e){super(e),this._clock=De,this._previewPlaneOpacity=1,this.removeIncompleteOnCancel=!1,this._layersMode="none",this.shiftManipulator=null,this.rotateHeadingManipulator=null,this.rotateTiltManipulator=null,this.resizeManipulators=null,this._frameTask=null,this._pointerMoveTimerMs=Be,this._prevPointerMoveTimeout=null,this._previewPlaneGridVisualElement=null,this._previewPlaneOutlineVisualElement=null,this._startPlane=d(),this._previewPlane=null,this._activeKeyModifiers={},this._lastCursorPosition=Ee(),this._resizeHandles=[{direction:[1,0]},{direction:[1,1]},{direction:[0,1]},{direction:[-1,1]},{direction:[-1,0]},{direction:[-1,-1]},{direction:[0,-1]},{direction:[1,-1]}],this._intersector=Ce(e.view.state.viewingMode)}initialize(){if(this.analysis==null)throw new Error("SliceTool requires valid analysis, but null was provided.");const e=l=>{this._updateManipulatorsInteractive(l),l.grabbing||(this.analysisViewData.plane!=null&&u(this.analysisViewData.plane,this._startPlane),this.inputState=null)},t=new Fe(this.view,Ke.CENTER_ON_ARROW);this.shiftManipulator=t,this.manipulators.add(t),this.addHandles([this._createShiftDragPipeline(t),t.events.on("grab-changed",l=>{this._onShiftGrab(l),e(t)})]);const i=!this.view._stage?.renderView.renderingContext.driverTest.svgPremultipliesAlpha.result,a=new ie(this.view,(l,c)=>nt(this.view.textures,{accentColor:l,contrastColor:c,preMultiplyAlpha:i}));this.rotateHeadingManipulator=a,this.manipulators.add(a),this.addHandles([this._createRotateHeadingDragPipeline(a),a.events.on("grab-changed",l=>{this._onRotateHeadingGrab(l),e(a)})]);const s=new ie(this.view,(l,c)=>lt(this.view.textures,{accentColor:l,contrastColor:c,preMultiplyAlpha:i}));this.rotateTiltManipulator=s,this.manipulators.add(s),this.addHandles([this._createRotateTiltDragPipeline(s),s.events.on("grab-changed",l=>{this._onRotateTiltGrab(l),e(s)})]),this.resizeManipulators=this._resizeHandles.map((l,c)=>{const w=new Ue(this.view,l);return this.addHandles([this._createResizeDragPipeline(w),w.events.on("grab-changed",L=>{this._onResizeGrab(L,c),e(w)})]),w}),this.manipulators.addMany(this.resizeManipulators),this._previewPlaneGridVisualElement=ce(this.view),this._previewPlaneOutlineVisualElement=de(this.view),this._previewPlaneOutlineVisualElement.width=ye,this.addHandles(v(()=>[this.analysisViewData.plane,this.analysis.tiltEnabled],()=>this._updateManipulators(),Te));const n=v(()=>this.state,l=>{l==="sliced"&&this.finishToolCreation()},F);this.addHandles([n,v(()=>this.view.state.camera,()=>this._onCameraChange())])}destroy(){this._removeFrameTask(),this._clearPointerMoveTimeout(),this._previewPlaneOutlineVisualElement=V(this._previewPlaneOutlineVisualElement),this._previewPlaneGridVisualElement=V(this._previewPlaneGridVisualElement)}get state(){const e=!!this.analysisViewData.plane,t=!!this.inputState;return e?e&&t?"slicing":e&&!t?"sliced":"ready":"ready"}get cursor(){return this._isPlacingSlicePlane||this.layersMode==="exclude"?"crosshair":this._creatingPointerId!=null?"grabbing":null}set analysis(e){if(e==null)throw new Error("SliceTool requires valid analysis, but null was provided.");this.removeHandles("analysis"),this._set("analysis",e)}get layersMode(){return this._layersMode}get inputState(){return this._get("inputState")}set inputState(e){this._set("inputState",e),this.analysisViewData.showGrid=e!=null&&e.type==="resize",this._updateMaterials()}get _isPlacingSlicePlane(){return!this.inputState&&!this.analysisViewData.plane&&this.active}get _creatingPointerId(){return this.inputState!=null&&this.inputState.type==="shift"?this.inputState.creatingPointerId:null}enterExcludeLayerMode(){this.analysisViewData.plane!=null&&(this._layersMode="exclude",this.active||(this.view.activeTool=this))}exitExcludeLayerMode(){this.analysisViewData.plane!=null&&(this._layersMode="none",this.active&&(this.view.activeTool=null))}onDeactivate(){this._updatePreviewPlane(null)}onShow(){this._updateVisibility(!0)}onHide(){this._updateVisibility(!1)}_updateVisibility(e){this._updateManipulators(),e||this._clearPointerMoveTimeout()}onInputEvent(e){switch(e.type){case"pointer-drag":if(!B(e))return;this._isPlacingSlicePlane?this._onClickPlacePlane(e)&&e.stopPropagation():this._onPointerDrag(e)&&e.stopPropagation();break;case"pointer-move":this._onPointerMove(e);break;case"pointer-up":this._onPointerUp(e)&&e.stopPropagation();break;case"immediate-click":if(!B(e))return;this._onClickPlacePlane(e)&&e.stopPropagation();break;case"click":if(!B(e))return;this._onClickExcludeLayer(e)&&e.stopPropagation();break;case"drag":this.inputState&&e.stopPropagation();break;case"key-down":this._onKeyDown(e)&&e.stopPropagation();break;case"key-up":this._onKeyUp(e)&&e.stopPropagation()}}onEditableChange(){this.analysisViewData.editable=this.internallyEditable}_onPointerDrag(e){const t=this.inputState;if(e.pointerId===this._creatingPointerId&&t!=null&&t.type==="shift"){const i=f(e);return this.shiftManipulator.events.emit("drag",{action:t.hasBeenDragged?"update":"start",pointerType:e.pointerType,start:i,screenPoint:i}),t.hasBeenDragged=!0,!0}return!1}_onPointerMove(e){this._lastCursorPosition.x=e.x,this._lastCursorPosition.y=e.y,this._resetPointerMoveTimeout(),e.pointerType!=="touch"&&this._updatePreviewPlane(f(e),this._activeKeyModifiers)}_onCameraChange(){this._updatePreviewPlane(this._lastCursorPosition,this._activeKeyModifiers),this._updateManipulators()}_onPointerUp(e){if(e.pointerId===this._creatingPointerId&&this.analysisViewData.plane!=null){const t=f(e);return this.shiftManipulator.events.emit("drag",{action:"end",start:t,screenPoint:t}),u(this.analysisViewData.plane,this._startPlane),this.inputState=null,!0}return!1}_onClickPlacePlane(e){if(this.layersMode==="exclude")return!1;if(this._isPlacingSlicePlane){const t=f(e),i=d();if(this._pickPlane(t,!1,this._activeKeyModifiers,i)){if(e.type==="pointer-drag"){const a=b(this.view.state.camera,t,M);this.inputState=ne(a,e.pointerId,i.origin,i)}return u(i,this._startPlane),this.analysis.shape=pe(i,this.view,this.view.spatialReference,new le),!0}}return!1}_onClickExcludeLayer(e){return!(this.layersMode!=="exclude"||!this.created)&&(this.view.hitTest(f(e)).then(t=>{if(t.results.length){const i=t.results[0],a=i?.type==="graphic"&&i.graphic;if(a){const s=a.sourceLayer||a.layer;s&&this.analysis.excludedLayers.push(s)}}else t.ground.layer?this.analysis.excludedLayers.push(t.ground.layer):this.analysis.excludeGroundSurface=!0}),this.exitExcludeLayerMode(),!0)}_onKeyDown(e){return(e.key===R||e.key===I)&&(this._activeKeyModifiers[e.key]=!0,this._previewPlane!=null&&this._updatePreviewPlane(this._lastCursorPosition,this._activeKeyModifiers),!0)}_onKeyUp(e){return!(e.key!==R&&e.key!==I||!this._activeKeyModifiers[e.key])&&(delete this._activeKeyModifiers[e.key],this._previewPlane!=null&&this._updatePreviewPlane(this._lastCursorPosition,this._activeKeyModifiers),!0)}_onShiftGrab(e){if(e.action!=="start"||this.analysisViewData.plane==null||!e.screenPoint)return;const t=b(this.view.state.camera,e.screenPoint,M);u(this.analysisViewData.plane,this._startPlane),this.inputState=ne(t,null,this.shiftManipulator.renderLocation,this.analysisViewData.plane)}_createShiftDragPipeline(e){return C(e,(t,i,a)=>{const s=this.inputState;if(s==null||s.type!=="shift")return;const n=this.analysisViewData.plane!=null?u(this.analysisViewData.plane,d()):null;i.next(T(this.view,s.shiftPlane)).next(this._shiftDragAdjustSensitivity(s)).next(this._shiftDragUpdatePlane(s)),a.next(()=>{n!=null&&this._updateBoundedPlane(n)})})}_shiftDragAdjustSensitivity(e){return t=>{if(this.analysisViewData.plane==null)return null;const i=.001,a=Math.min((1-Math.abs(S(K(this.analysisViewData.plane),t.ray.direction)/D(t.ray.direction)))/i,1),s=-Z(this._startPlane.plane,t.renderEnd),n=-Z(this._startPlane.plane,e.startPoint);return e.depth=e.depth*(1-a)+s*a-n,t}}_shiftDragUpdatePlane(e){return()=>{if(this.analysisViewData.plane==null)return;const t=J(p.get(),this._startPlane.origin),i=J(p.get(),K(this._startPlane));O(i,i,-e.depth),Q(i,i,t);const a=X(i,this.analysisViewData.plane.basis1,this.analysisViewData.plane.basis2,d());this._updateBoundedPlane(a)}}_onRotateHeadingGrab(e){if(e.action!=="start"||this.analysisViewData.plane==null||!e.screenPoint)return;const t=ae(this.analysisViewData.plane,this.view.renderCoordsHelper,se.HEADING,U()),i=b(this.view.state.camera,e.screenPoint,M),a=j();$(t,i,a)&&(u(this.analysisViewData.plane,this._startPlane),this.inputState={type:"rotate",rotatePlane:t,startPoint:a})}_createRotateHeadingDragPipeline(e){return C(e,(t,i,a)=>{const s=this.inputState;if(s==null||s.type!=="rotate")return;const n=this.analysisViewData.plane!=null?u(this.analysisViewData.plane,d()):null;i.next(T(this.view,s.rotatePlane)).next(this._rotateDragRenderPlaneToRotate(s)).next(this._rotateDragUpdatePlaneFromRotate()),a.next(()=>{n!=null&&this._updateBoundedPlane(n)})})}_onRotateTiltGrab(e){if(e.action!=="start"||this.analysisViewData.plane==null||!e.screenPoint)return;const t=ae(this.analysisViewData.plane,this.view.renderCoordsHelper,se.TILT,U()),i=b(this.view.state.camera,e.screenPoint,M),a=j();$(t,i,a)&&(u(this.analysisViewData.plane,this._startPlane),this.inputState={type:"rotate",rotatePlane:t,startPoint:a})}_createRotateTiltDragPipeline(e){return C(e,(t,i,a)=>{const s=this.inputState;if(s==null||s.type!=="rotate")return;const n=this.analysisViewData.plane!=null?u(this.analysisViewData.plane,d()):null;i.next(T(this.view,s.rotatePlane)).next(this._rotateDragRenderPlaneToRotate(s)).next(this._rotateDragUpdatePlaneFromRotate()),a.next(()=>{n!=null&&this._updateBoundedPlane(n)})})}_rotateDragRenderPlaneToRotate(e){return t=>{if(this.analysisViewData.plane==null)return null;const i=G(e.rotatePlane),a=Se(e.startPoint,t.renderEnd,this.analysisViewData.plane.origin,i);return{...t,rotateAxis:i,rotateAngle:a}}}_rotateDragUpdatePlaneFromRotate(){return e=>{if(this.analysisViewData.plane==null)return;const t=xe(E.get(),e.rotateAngle,e.rotateAxis);if(t==null)return;const i=Y(p.get(),this._startPlane.basis1,t),a=Y(p.get(),this._startPlane.basis2,t),s=X(this.analysisViewData.plane.origin,i,a,d());this._updateBoundedPlane(s)}}_onResizeGrab(e,t){if(e.action!=="start"||this.analysisViewData.plane==null||!e.screenPoint)return;const i=b(this.view.state.camera,e.screenPoint,M),a=p.get();$(this.analysisViewData.plane.plane,i,a)&&(u(this.analysisViewData.plane,this._startPlane),this.inputState={type:"resize",activeHandleIdx:t,startPoint:$e(a)})}_createResizeDragPipeline(e){return C(e,(t,i,a)=>{const s=this.inputState;if(s==null||s.type!=="resize"||this.analysisViewData.plane==null)return;const n=u(this.analysisViewData.plane,d());i.next(T(this.view,this.analysisViewData.plane.plane)).next(this._resizeDragUpdatePlane(s)),a.next(()=>{this._updateBoundedPlane(n)})})}_resizeDragUpdatePlane(e){return t=>{if(this.analysisViewData.plane==null)return;const i=this._resizeHandles[e.activeHandleIdx],a=je(i,e.startPoint,t.renderEnd,this.view.state.camera,this._startPlane,u(this.analysisViewData.plane));this._updateBoundedPlane(a)}}_updateBoundedPlane(e){const t=this.analysisViewData;if(t==null)throw new Error("valid internal object expected");t.plane=e}_updatePreviewPlane(e,t={}){let i=this._previewPlane;if(this._previewPlane=null,e==null)return this._removeFrameTask(),void this._updateManipulators();if(!this.analysisViewData.plane&&this.active){const a=i??d();if(i=i!=null?u(i,dt):null,this._pickPlane(e,!0,t,a)){const s=et;let n=!1;i!=null&&(n=S(G(i.plane),G(a.plane))<s||S(ee(p.get(),i.basis1),ee(p.get(),a.basis1))<s),n&&(this._previewPlaneOpacity=0),this._previewPlane=a}}this._previewPlane!=null&&this._frameTask==null&&this._previewPlaneOpacity===0?this._frameTask=ke({update:({deltaTime:a})=>{this._previewPlaneOpacity=Math.min(this._previewPlaneOpacity+a/(1e3*Ne),1),this._updateManipulators(),this._previewPlaneOpacity===1&&this._removeFrameTask()}}):this._previewPlane==null&&this._frameTask!=null?this._removeFrameTask():this._previewPlane!=null&&this._updateManipulators()}_removeFrameTask(){this._frameTask=te(this._frameTask)}_pickMinResult(e){const t=Le(e,He.get());return this.view.sceneIntersectionHelper.intersectToolIntersectorScreen(t,this._intersector),this._intersector.results.min}_pickPlane(e,t,i,a){const s=this._pickMinResult(e),n=p.get();if(!s.getIntersectionPoint(n))return!1;const l=s.getTransformedNormal(p.get()),c=this.view.state.camera;S(l,c.viewForward)>0&&O(l,l,-1);const w=qe(n,c),L=(t?1:-1)*w*tt,H=O(p.get(),l,L);Q(H,H,n);const Pe=this.analysis.tiltEnabled?x.TILTED:x.HORIZONTAL_OR_VERTICAL,me=i[R]?x.VERTICAL:i[I]?x.HORIZONTAL:Pe;return We(H,l,w,w,c,me,this.view.renderCoordsHelper,a),!0}_clearPointerMoveTimeout(){this._prevPointerMoveTimeout=te(this._prevPointerMoveTimeout)}_resetPointerMoveTimeout(){this._clearPointerMoveTimeout(),this.shiftManipulator.state|=m,this.rotateHeadingManipulator.state|=m,this.rotateTiltManipulator.state|=m,this._prevPointerMoveTimeout=this._clock.setTimeout(()=>{this.shiftManipulator.state&=~m,this.rotateHeadingManipulator.state&=~m,this.rotateTiltManipulator.state&=~m},this._pointerMoveTimerMs)}_updateManipulators(){if(N.disableEngineLayers)return;let e,t=!1;if(this.analysisViewData.plane!=null)e=this.analysisViewData.plane,t=!1;else{if(this._previewPlane==null)return this.shiftManipulator.available=!1,this.rotateHeadingManipulator.available=!1,this.rotateTiltManipulator.available=!1,this.resizeManipulators.forEach(l=>l.available=!1),this._previewPlaneOutlineVisualElement.visible=!1,void(this._previewPlaneGridVisualElement.visible=!1);e=this._previewPlane,t=!0}const i=ve(e,E.get());t?(this.shiftManipulator.available=!1,this.rotateHeadingManipulator.available=!1,this.rotateTiltManipulator.available=!1,this.resizeManipulators.forEach(l=>l.available=!1),this._previewPlaneOutlineVisualElement.attached=!0,this._previewPlaneGridVisualElement.attached=!0,this._previewPlaneOutlineVisualElement.visible=!0,this._previewPlaneGridVisualElement.visible=!0):(this.shiftManipulator.available=!0,this.rotateHeadingManipulator.available=!0,this.rotateTiltManipulator.available=this.analysis.tiltEnabled,this.resizeManipulators.forEach(l=>l.available=!0),Ze(this.shiftManipulator,i,e,this.view.state.camera),Je(this.rotateHeadingManipulator,i,e,this.view.renderCoordsHelper),Qe(this.rotateTiltManipulator,i,e),this.resizeManipulators.forEach((l,c)=>Xe(l,this._resizeHandles[c],i,e)),this._previewPlaneOutlineVisualElement.visible=!1,this._previewPlaneGridVisualElement.visible=!1);const a=re(p.get(),D(e.basis1),D(e.basis2),1),s=oe(E.get(),a),n=he(s,i,s);this._previewPlaneOutlineVisualElement.transform=n,this._previewPlaneGridVisualElement.transform=n,this._updateMaterials()}_updateMaterials(){const e=we(this.view.effectiveTheme);e[3]*=this._previewPlaneOpacity;const t=ze(_e);t[3]*=this._previewPlaneOpacity,this._previewPlaneOutlineVisualElement.color=e,this._previewPlaneGridVisualElement.backgroundColor=t,this._previewPlaneGridVisualElement.gridColor=ue}_updateManipulatorsInteractive(e){if(!e.grabbing)return this.shiftManipulator.interactive=!0,this.rotateHeadingManipulator.interactive=!0,this.rotateTiltManipulator.interactive=!0,void this.resizeManipulators.forEach(t=>{t.interactive=!0});this.shiftManipulator.interactive=this.shiftManipulator===e,this.rotateHeadingManipulator.interactive=this.rotateHeadingManipulator===e,this.rotateTiltManipulator.interactive=this.rotateTiltManipulator===e,this.resizeManipulators.forEach(t=>{t.interactive=t===e})}testData(){return{plane:this.analysisViewData.plane,setPointerMoveTimerMs:e=>{this._pointerMoveTimerMs=e}}}};function ne(e,t,i,a){const s=Ye(i,K(a),e.direction,U()),n=j();return $(s,e,n)?{type:"shift",creatingPointerId:t,hasBeenDragged:!1,shiftPlane:s,depth:0,startPoint:n}:null}function B(e){return e.pointerType!=="mouse"||e.button===0}h.disableEngineLayers=!1,r([o()],h.prototype,"_clock",void 0),r([o({constructOnly:!0})],h.prototype,"view",void 0),r([o()],h.prototype,"analysisViewData",void 0),r([o({readOnly:!0})],h.prototype,"state",null),r([o({readOnly:!0})],h.prototype,"cursor",null),r([o()],h.prototype,"analysis",null),r([o()],h.prototype,"removeIncompleteOnCancel",void 0),r([o()],h.prototype,"_layersMode",void 0),r([o()],h.prototype,"layersMode",null),r([o({value:null})],h.prototype,"inputState",null),r([o()],h.prototype,"_isPlacingSlicePlane",null),r([o()],h.prototype,"_creatingPointerId",null),h=N=r([k("esri.views.3d.analysis.Slice.SliceTool")],h);const dt=d(),M=be(),yt=h;let _=class extends q{constructor(e){super(e),this._gridVisualElement=null,this._outlineVisualElement=null,this.showGrid=!1,this.preview=!0}initialize(){const e=this.analysisViewData;if(e==null)throw new Error("expected internal object to be valid");this._gridVisualElement=ce(this.view),this._outlineVisualElement=de(this.view),this.addHandles([v(()=>{const t=e.plane!=null&&this.analysisViewData.visible,{active:i}=this.analysisViewData,{preview:a,showGrid:s,view:n}=this,{effectiveTheme:l}=n;return{visible:t,active:i,preview:a,showGrid:s,gridColor:it(l),outlineColor:we(l)}},t=>this._updateMaterials(t),F),v(()=>e.plane,t=>this._updatePlane(t),F)],"internal")}destroy(){this._gridVisualElement=V(this._gridVisualElement),this._outlineVisualElement=V(this._outlineVisualElement),this.set("view",null)}_updatePlane(e){if(e==null)return;this._gridVisualElement.attached=!0,this._outlineVisualElement.attached=!0;const t=re(p.get(),D(e.basis1),D(e.basis2),1),i=oe(E.get(),t),a=ve(e,E.get()),s=he(i,a,i);this._outlineVisualElement.transform=s,this._gridVisualElement.transform=s}_updateMaterials({visible:e,active:t,preview:i,showGrid:a,gridColor:s,outlineColor:n}){this._outlineVisualElement.color=n,this._outlineVisualElement.width=i?ye:at,this._outlineVisualElement.stipplePattern=t?null:Oe(5),this._gridVisualElement.backgroundColor=_e,this._gridVisualElement.gridColor=a?s:ue,this._gridVisualElement.visible=e,this._outlineVisualElement.visible=e}};r([o()],_.prototype,"view",void 0),r([o()],_.prototype,"analysis",void 0),r([o()],_.prototype,"analysisViewData",void 0),r([o()],_.prototype,"showGrid",void 0),r([o()],_.prototype,"preview",void 0),_=r([k("esri.views.3d.analysis.Slice.SliceVisualization")],_);let y=class extends Ge(q){constructor(e){super(e),this.type="slice-view-3d",this.analysis=null,this.tool=null,this.analysisVisualization=null,this.analysisController=null,this.plane=null,this.active=!0}initialize(){this.analysisVisualization=new _({view:this.view,analysis:this.analysis,analysisViewData:this}),this.analysisController=new g({view:this.view,analysis:this.analysis,analysisViewData:this}),this.addHandles(rt(this,yt))}destroy(){ot(this),this.analysisVisualization=V(this.analysisVisualization),this.analysisController=V(this.analysisController)}get showGrid(){return this.analysisVisualization?.showGrid??!1}set showGrid(e){this.analysisVisualization&&(this.analysisVisualization.showGrid=e)}get editable(){return!this.analysisVisualization.preview}set editable(e){this.analysisVisualization.preview=!e}get testData(){return{visualization:this.analysisVisualization,controller:this.analysisController,tool:this.tool}}};r([o({readOnly:!0})],y.prototype,"type",void 0),r([o({constructOnly:!0,nonNullable:!0})],y.prototype,"analysis",void 0),r([o()],y.prototype,"tool",void 0),r([o()],y.prototype,"plane",void 0),r([o()],y.prototype,"active",void 0),r([o()],y.prototype,"showGrid",null),r([o()],y.prototype,"editable",null),y=r([k("esri.views.3d.analysis.SliceAnalysisView3D")],y);const bt=y;export{bt as default};
