import{$ as n,a0 as r,a2 as _,a3 as dt,s4 as ht,fc as m,km as Q,eM as B,s5 as yt,s6 as H,s7 as W,da as vt,s8 as T,s9 as G,eV as gt,b$ as mt,sa as ft,fd as ct,ce as wt,ak as Ot,sb as J,ae as F,na as K,sc as _t,D as xt,at as z,sd as It,se as q,sf as kt,sg as X,sh as bt,si as Vt,sj as tt,sk as Tt,sl as $t,sm as et,sn as Gt,so as Ct,sp as Et,sq as St,sr as zt,as as Mt,ss as Ut,st as Pt,su as Rt,sv as At,cG as Dt,cI as Ht,sw as P,sx as it,kh as ot,mW as nt,sy as rt,pr as Ft,iL as $,pK as E,sz as st,sA as Lt,sB as Nt,f3 as Zt,mM as L,mN as at}from"./chunk-xdbuWCSg.js";import{r as C,u as jt}from"./chunk-_nFoj7Ih.js";import{u as lt}from"./chunk-AozVAsla.js";import{c as Qt,m as M,R as Bt,v as Yt}from"./chunk-hbj-5HCQ.js";function N(t,e){switch(t){case"point":case"multipoint":return Wt();case"polyline":return Jt(e);case"polygon":return Kt(e);default:return}}function Wt(t){return"point"}function Jt(t){return(t!=null&&t.type==="polyline"&&t.paths.length?t.paths[0].length:0)<2?"polylineZeroVertices":"polylineOneVertex"}function Kt(t){const e=t!=null&&t.type==="polygon"&&t.rings.length?t.rings[0].length:0;return e<3?"polylineZeroVertices":e<4?"polygonOneVertex":"polygonTwoVertices"}let h=class extends dt{constructor(e){super(e),this.actual=null,this.committed=null,this.id=ht(),this.inputValue=null,this.readOnly=!1,this.unlockOnVertexPlacement=!0,this.visible=!0}get dirty(){return this.inputValue!=null}get locked(){return this.committed!=null}lock(e){this.inputValue=null,this.committed=e??this.actual}unlock(){this.committed=null,this.inputValue=null}};n([r()],h.prototype,"actual",void 0),n([r()],h.prototype,"committed",void 0),n([r()],h.prototype,"createQuantity",void 0),n([r()],h.prototype,"dirty",null),n([r()],h.prototype,"format",void 0),n([r()],h.prototype,"id",void 0),n([r()],h.prototype,"inputValue",void 0),n([r()],h.prototype,"locked",null),n([r()],h.prototype,"name",void 0),n([r()],h.prototype,"readOnly",void 0),n([r()],h.prototype,"suffix",void 0),n([r()],h.prototype,"title",void 0),n([r()],h.prototype,"toInputUnits",void 0),n([r()],h.prototype,"unlockOnVertexPlacement",void 0),n([r()],h.prototype,"visible",void 0),h=n([_("esri.views.interactive.tooltip.fields.TooltipField")],h);let U=class extends h{constructor(t){super(t),this.mode="absolute-height"}normalizeCtorArgs(t){const e=i=>i.inputUnitInfos.verticalLength.unit;return{name:"elevation",actual:m,createQuantity:(i,o)=>Q(i,e(o)),toInputUnits:(i,o)=>B(i,e(o)),format:(i,o)=>o.formatters.verticalLength(i),suffix:i=>i.inputUnitInfos.verticalLength.abbreviation,title:i=>i.messages.sketch.elevation,unlockOnVertexPlacement:!1,...t}}};n([r()],U.prototype,"mode",void 0),U=n([_("esri.views.interactive.tooltip.fields.TooltipFieldElevation")],U);const pt=t=>{const e=i=>i.inputUnitInfos.direction.unit;return new h({name:"direction",actual:yt,createQuantity:(i,o)=>H(i,e(o),"geographic"),toInputUnits:({value:i,unit:o,rotationType:s},a)=>{const l=W(H(i,o,s),a.sketchOptions.values.effectiveDirectionMode),d=e(a),p=vt(l.value,"degrees",d);return H(p,d,"geographic")},format:(i,{formatters:o,sketchOptions:s})=>{const a=s.values.effectiveDirectionMode,l=W(i,a);switch(a){case T.Absolute:return o.direction(l);case T.Relative:return o.directionRelative(l);case T.RelativeBilateral:return o.directionRelativeBilateral(l)}},suffix:i=>i.inputUnitInfos.direction.abbreviation,title:({messages:i,sketchOptions:o})=>{switch(o.values.effectiveDirectionMode){case T.Absolute:return i.sketch.direction.absolute;case T.Relative:case T.RelativeBilateral:return i.sketch.direction.relative}},...t})},j=t=>{const e=i=>i.inputUnitInfos.length.unit;return new h({name:"distance",actual:m,createQuantity:(i,o)=>{const s=Math.max(i,0);return Q(s,e(o))},toInputUnits:(i,o)=>B(i,e(o)),format:(i,o)=>o.formatters.length(i),suffix:i=>i.inputUnitInfos.length.abbreviation,title:i=>i.messages.sketch.distance,...t})},R=t=>new U(t),qt=t=>{const e=i=>i.inputUnitInfos.area.unit;return new h({name:"area",actual:G,createQuantity:(i,o)=>gt(i,e(o)),toInputUnits:(i,o)=>B(i,e(o)),format:(i,o)=>o.formatters.area(i),suffix:i=>i.inputUnitInfos.area.abbreviation,title:i=>i.messages.sketch.area,...t})};let b=class extends C{constructor(e){super(e),this.type="draw-point",this.elevation=R()}get allFields(){return[this.elevation]}};n([r()],b.prototype,"type",void 0),n([r()],b.prototype,"elevation",void 0),n([r()],b.prototype,"allFields",null),n([r()],b.prototype,"helpMessage",void 0),b=n([_("esri.views.interactive.tooltip.DrawPointTooltipInfo")],b);let f=class extends C{constructor(t){super(t),this.type="draw-polyline",this.direction=pt(),this.distance=j({title:e=>e.messages.sketch.distance}),this.elevation=R(),this.totalLength=j({format:(e,i)=>i.formatters.totalLength(e),title:e=>e.messages.sketch.totalLength,readOnly:!0})}get allFields(){return[this.direction,this.distance,this.elevation,this.totalLength]}};n([r()],f.prototype,"type",void 0),n([r()],f.prototype,"direction",void 0),n([r()],f.prototype,"distance",void 0),n([r()],f.prototype,"elevation",void 0),n([r()],f.prototype,"totalLength",void 0),n([r()],f.prototype,"allFields",null),n([r()],f.prototype,"helpMessage",void 0),f=n([_("esri.views.interactive.tooltip.DrawPolylineTooltipInfo")],f);let w=class extends C{constructor(t){super(t),this.type="draw-polygon",this.direction=pt(),this.distance=j({title:e=>e.messages.sketch.distance}),this.elevation=R(),this.area=qt({readOnly:!0})}get allFields(){return[this.direction,this.distance,this.elevation,this.area]}};n([r()],w.prototype,"type",void 0),n([r()],w.prototype,"distance",void 0),n([r()],w.prototype,"elevation",void 0),n([r()],w.prototype,"area",void 0),n([r()],w.prototype,"allFields",null),n([r()],w.prototype,"helpMessage",void 0),w=n([_("esri.views.interactive.tooltip.DrawPolygonTooltipInfo")],w);let V=class extends C{constructor(e){super(e),this.type="draw-mesh",this.elevation=R()}get allFields(){return[this.elevation]}};n([r()],V.prototype,"type",void 0),n([r()],V.prototype,"elevation",void 0),n([r()],V.prototype,"allFields",null),n([r()],V.prototype,"helpMessage",void 0),V=n([_("esri.views.interactive.tooltip.DrawMeshTooltipInfo")],V);let I=class extends C{constructor(e){super(e),this.type="draw-rectangle",this.xSize=m,this.ySize=m,this.area=G}get allFields(){return[]}};n([r()],I.prototype,"type",void 0),n([r()],I.prototype,"xSize",void 0),n([r()],I.prototype,"ySize",void 0),n([r()],I.prototype,"area",void 0),n([r()],I.prototype,"allFields",null),I=n([_("esri.views.interactive.tooltip.DrawRectangleTooltipInfo")],I);let O=class extends C{constructor(t){super(t),this.type="draw-circle",this.radius=null,this.xSize=null,this.ySize=null,this.area=G}get allFields(){return[]}};n([r()],O.prototype,"type",void 0),n([r()],O.prototype,"radius",void 0),n([r()],O.prototype,"xSize",void 0),n([r()],O.prototype,"ySize",void 0),n([r()],O.prototype,"area",void 0),n([r()],O.prototype,"allFields",null),O=n([_("esri.views.interactive.tooltip.DrawCircleTooltipInfo")],O);class Xt{constructor(){this.committedVertices=null,this.cursorVertex=null,this.full=null,this.outline=null,this.cursorEdge=null,this.circle=null,this.rectangle=null}}let c=class extends mt.EventedMixin(ft){constructor(t){super(t),this._graphic=null,this._createOperationGeometry=null,this.defaultZ=0,this.directionOptions=null,this.geometryType=null,this.hasZ=!0,this.geometryToPlace=null,this.mode=null,this.snappingManager=null,this.snapToScene=!1,this.sketchOptions=new ct}initialize(){this.internalGraphicsLayer=new wt({listMode:"hide",internal:!0}),this.view.map.layers.add(this.internalGraphicsLayer);const t=this.drawOperation=this.makeDrawOperation(),{sketchOptions:e}=this,i=this.view.type;this.tooltipInfos={point:new b({sketchOptions:e,viewType:i}),polyline:new f({sketchOptions:e,viewType:i}),polygon:new w({sketchOptions:e,viewType:i}),mesh:new V({sketchOptions:e,viewType:i}),rectangle:new I({sketchOptions:e}),circle:new O({sketchOptions:e})},this.tooltip=new jt({view:this.view}),this._initializeConstraints(),this.addHandles([t.on("vertex-add",o=>this.onVertexAdd(o)),t.on("vertex-remove",o=>this.onVertexRemove(o)),t.on("vertex-update",o=>this.onVertexUpdate(o)),t.on("cursor-update",o=>this.onCursorUpdate(o)),t.on("cursor-remove",()=>this._updateGraphic()),t.on("complete",o=>this.onComplete(o)),Ot(()=>this.cursor,o=>t.cursor=o,Mt),J(()=>this._updateTooltipInfo()),J(()=>{t.constraintZ=this._constraintZ})]),this.finishToolCreation()}destroy(){this.drawOperation=F(this.drawOperation),this.tooltip=F(this.tooltip),this._destroyAllVisualizations(),this.view.map.remove(this.internalGraphicsLayer),this.internalGraphicsLayer=F(this.internalGraphicsLayer),this._set("view",null)}get _defaultElevation(){const t=K(this.drawOperation.coordinateHelper.spatialReference);return Q(this.defaultZ*t,"meters")}get _inputModeAvailable(){const{inputEnabled:t,visibleElements:e}=this.sketchOptions.tooltips;return t&&this.activeTooltipInfo?.editableFields.some(i=>e[i.name]===!0)===!0}get canRedo(){return this.drawOperation.canRedo}get canUndo(){return this.drawOperation.canUndo}set centered(t){this._set("centered",t),this._updateGraphic()}get cursor(){return this._get("cursor")}set cursor(t){this._set("cursor",t)}set enabled(t){this.drawOperation.interactive=t,this._set("enabled",t)}set forceUniformSize(t){this._set("forceUniformSize",t),this._updateGraphic()}get graphic(){return this._graphic}set graphicSymbol(t){this._set("graphicSymbol",t),this._graphic!=null&&(this._graphic.symbol=t)}get updating(){return this.drawOperation?.updating??!1}completeCreateOperation(){this.drawOperation.complete()}onInputEvent(t){if(!this.destroyed)return t.type==="key-down"&&t.key===_t.enterInputMode&&this._inputModeAvailable?(this.tooltip.enterInputMode(),void t.stopPropagation()):void this.drawOperation.onInputEvent(t)}redo(){this.drawOperation.redo()}reset(){}undo(){this.drawOperation.undo(),this.drawOperation.numCommittedVertices===0&&this._initializeConstraints()}_destroyAllVisualizations(){this.removeHandles(v.outline),this.removeHandles(v.regularVertices),this.removeHandles(v.activeVertex),this.removeHandles(v.activeEdge),this.removeHandles(Z)}_createOrUpdateGraphic(t){if(this._graphic!=null)return this.updateGraphicGeometry(t),this._graphic;const e=new xt({...this.graphicProperties,symbol:this.graphicSymbol});return this._graphic=e,this.updateGraphicGeometry(t),this.internalGraphicsLayer.add(e),this.addHandles(this.initializeGraphic(e)),this.notifyChange("graphic"),this.addHandles(z(()=>{this.internalGraphicsLayer.remove(e),this._graphic===e&&(this._graphic=null)}),Z),e}updateGraphicGeometry(t){this._graphic.geometry=t}_getCreateOperationGeometry(t={operationComplete:!1}){if(this.drawOperation==null)return;const{coordinateHelper:e,view:i,visualizationCursorVertex:o,lastVertex:s,committedVertices:a,geometryIncludingUncommittedVertices:l,numCommittedVertices:d}=this.drawOperation;if(!(d>0||o!=null))return;const p=t.operationComplete?a:l,y=p.length,x=o!=null?e.pointToArray(o):null,g=i.spatialReference,A=i.type==="3d"&&i.viewingMode==="global",u=new Xt;u.committedVertices=a,u.cursorVertex=x;const{geometryType:D}=this;switch(D){case"point":case"mesh":u.full=e.arrayToPoint(p[0]);break;case"multipoint":u.full=y>0?$t(p,g):null;break;case"polyline":case"polygon":y>0&&(u.full=D==="polygon"?Vt([p],g,A,!0):tt([p],g,A),u.cursorEdge=x!=null&&s&&!Tt(o,s)?tt([[x,e.pointToArray(s)]],g,A):null,u.outline=y>1?u.full:null);break;case"circle":case"rectangle":{if(u.committedVertices=u.cursorVertex=null,!y)break;const k=It(i,p[0]),S=p[0],Y=k.makeMapPoint(S[0]+te*i.resolution,S[1]);D==="circle"?y===1&&t.operationComplete?u.circle=q([S,Y],k,!0):y===2&&(this.forceUniformSize?u.circle=q(p,k,this.centered):u.rectangle=kt(p,k,this.centered)):y===1&&t.operationComplete?u.rectangle=X([S,Y],k,!0):y===2&&(u.rectangle=this.forceUniformSize?X(p,k,this.centered):bt(p,k,this.centered)),u.full=u.circle!=null?u.circle.geometry:u.rectangle?.geometry,u.outline=u.full?.type==="polygon"?u.full:null;break}default:return null}return u}initializeGraphic(t){return z()}onComplete(t){if(!this.drawOperation)return;this._updateGraphic();let e=null;if(this.drawOperation.isCompleted){const i=this._getCreateOperationGeometry({operationComplete:!0});i!=null&&(e=this._createOrUpdateGraphic(i.full))}this._createOperationGeometry=null,this.emit("complete",{graphic:e,...t})}onCursorUpdate(t){this._updateGraphic(),this.emit("cursor-update",t)}onDeactivate(){const{drawOperation:t}=this;t&&(t.isCompleted||t.cancel())}onOutlineChanged(t){return z()}onCursorEdgeChanged(t){return z()}onVertexAdd(t){this._updateGraphic(),this._unlockConstraintsOnVertexAddOrRemove(),this._lockElevationOnVertexAdd(t.vertices.at(0)?.coordinates),this.emit("vertex-add",t)}onVertexRemove(t){this._updateGraphic(),this._unlockConstraintsOnVertexAddOrRemove(),this.emit("vertex-remove",t)}onVertexUpdate(t){this._updateGraphic(),this.emit("vertex-update",t)}_updateGraphic(){const t=this._getCreateOperationGeometry();this._createOperationGeometry=t,t!=null?(t.cursorEdge!=null?this.addHandles(this.onCursorEdgeChanged(t.cursorEdge),v.activeEdge):this.removeHandles(v.activeEdge),t.outline!=null?this.addHandles(this.onOutlineChanged(t.outline),v.outline):this.removeHandles(v.outline),t.committedVertices!=null?this.addHandles(this.onRegularVerticesChanged(t.committedVertices),v.regularVertices):this.removeHandles(v.regularVertices),t.cursorVertex!=null?this.addHandles(this.onActiveVertexChanged(t.cursorVertex),v.activeVertex):this.removeHandles(v.activeVertex),t.full!=null?this._createOrUpdateGraphic(t.full):this.removeHandles(Z)):this._destroyAllVisualizations()}get activeTooltipInfo(){const{drawOperation:t,graphic:e,view:i}=this;if(!t)return null;const o=this.tooltipInfos,s=e?.geometry?.type;switch(this.geometryType){case"point":return i.type==="2d"&&this.defaultZ===0?null:s==="point"?o.point:null;case"polyline":return s==="polyline"?o.polyline:null;case"polygon":return s==="polygon"?o.polygon:null;case"rectangle":return s==="polygon"?o.rectangle:null;case"circle":return s==="polygon"?o.circle:null;case"mesh":return s==="mesh"?o.mesh:null;default:return null}}_updateTooltipInfo(){const{activeTooltipInfo:t,tooltip:e,sketchOptions:i}=this;switch(t?.type){case"draw-point":this._updateDrawPointTooltipInfo(t);break;case"draw-polyline":this._updateDrawPolylineTooltipInfo(t);break;case"draw-polygon":this._updateDrawPolygonTooltipInfo(t);break;case"draw-rectangle":this._updateDrawRectangleTooltipInfo(t);break;case"draw-circle":this._updateDrawCircleTooltipInfo(t);break;case"draw-mesh":this.updateDrawMeshTooltipInfo(t)}e.view=this.view,e.info=i.tooltips.effectiveEnabled?t:null}_updateDrawPointTooltipInfo(t){const{drawOperation:e,graphic:i,view:o,sketchOptions:s}=this,{coordinateHelper:a,cursorVertex:l}=e;if(t.sketchOptions=s,t.viewType=o.type,t.helpMessage=N("point",i?.geometry),this.updateElevation(t.elevation),!l)return void(e.constraintInfo=void 0);const d=et(l,o,a.spatialReference,this._constraintElevationInfo,a.hasZ(),s.values.effectiveDirectionMode);e.constraintInfo={context:d,distance:null,direction:null,elevation:t.elevation.committed}}_updateDrawPolylineTooltipInfo(t){const e=this._createOperationGeometry,i=e!=null?e.full:null;if(i?.type!=="polyline")return;this._updatePolylineOrPolygonCommon(t);const o=Qt(i);t.totalLength.actual=o??m,t.sketchOptions=this.sketchOptions,t.viewType=this.view.type,t.helpMessage=N("polyline",i)}_updateDrawPolygonTooltipInfo(t){const e=this._createOperationGeometry,i=e!=null?e.full:null;if(i?.type!=="polygon")return;this._updatePolylineOrPolygonCommon(t);const o=lt(i);t.area.actual=o??G,t.sketchOptions=this.sketchOptions,t.viewType=this.view.type,t.helpMessage=N("polygon",i)}_updatePolylineOrPolygonCommon(t){const{view:e,drawOperation:i,sketchOptions:o}=this,{coordinateHelper:s,cursorVertex:a,lastVertex:l,secondToLastVertex:d}=i,p=o.values.effectiveDirectionMode,y=l&&a?M(l,a):null;if(t.distance.actual=y??m,t.distance.readOnly=l==null,t.direction.actual=null,t.direction.readOnly=!0,l&&a&&(p==="absolute"||d)){const g=Gt(d,l,a,p);t.direction.actual=g??Ct,t.direction.readOnly=!1}this.updateElevation(t.elevation);const x=a??l;if(x){const g=et(x,e,s.spatialReference,this._constraintElevationInfo,s.hasZ(),p);i.constraintInfo={context:g,distance:t.distance.committed,direction:t.direction.committed,elevation:t.elevation.committed}}else i.constraintInfo=void 0}updateDrawMeshTooltipInfo(t){}_updateDrawRectangleTooltipInfo(t){t.sketchOptions=this.sketchOptions,t.xSize=this._xSize??m,t.ySize=this._ySize??m,t.area=this._fullGeometryArea??G}_updateDrawCircleTooltipInfo(t){const{forceUniformSize:e}=this;t.sketchOptions=this.sketchOptions,t.radius=e?this._circleRadius??m:null,t.xSize=e?null:this._xSize??m,t.ySize=e?null:this._ySize??m,t.area=this._fullGeometryArea??G}get _circleRadius(){const t=this._createOperationGeometry;return t?.circle?.center!=null&&t.circle.edge!=null?M(t.circle.center,t.circle.edge):null}get _xSize(){const t=this._createOperationGeometry?.rectangle?.midpoints;return t!=null?M(t.left,t.right):null}get _ySize(){const t=this._createOperationGeometry?.rectangle?.midpoints;return t!=null?M(t.top,t.bottom):null}get _fullGeometryArea(){const t=this._createOperationGeometry?.full;return t?.type!=="polygon"?null:lt(t)}updateElevation(t){const{drawOperation:e}=this,i=e?.cursorVertex??e?.lastVertex;t.actual=Bt(i)??this._defaultElevation,t.visible=this.view.type==="3d"&&this.hasZ,t.readOnly=!1}get _constraintElevationInfo(){return this.drawOperation?.elevationInfo??Et}get _constraintZ(){const{geometryType:t}=this;switch(t){case"point":case"mesh":case"polyline":case"polygon":{const e=this.tooltipInfos[t].elevation.committed;if(!e)return;const i=this.drawOperation.coordinateHelper.spatialReference;return St(e,"meters")/K(i)}default:return}}_initializeConstraints(){const{directionOptions:t,drawOperation:e,geometryType:i,tooltipInfos:o,sketchOptions:s}=this,a=d=>{const p=e.elevationInfo?.mode,y=o[d].elevation;p==="relative-to-ground"||p==="relative-to-scene"||p==="on-the-ground"?y.lock(this._defaultElevation):y.unlock()},l=d=>{if(t){const p=o[d].direction;p.committed=t.angle,p.unlockOnVertexPlacement=!1,s.values.directionMode=t.mode}};switch(i){case"polygon":case"polyline":a(i),l(i);break;case"point":case"mesh":a(i)}}_lockElevationOnVertexAdd(t){const{activeTooltipInfo:e,drawOperation:i,view:o}=this,s=this._constraintElevationInfo;if(o.type==="2d"||!t||s.mode!=="absolute-height"||i?.numCommittedVertices!==1||!e||e.type!=="draw-polyline"&&e.type!=="draw-polygon"||e.elevation.locked)return;const[a,l,d]=t,p=this._getConvertedVertexElevation(a,l,d,s);p!=null&&e.elevation.lock(p)}_unlockConstraintsOnVertexAddOrRemove(){this.activeTooltipInfo?.allFields.forEach(t=>{t.unlockOnVertexPlacement&&t.unlock()})}_getConvertedVertexElevation(t,e,i,o){const{view:s,drawOperation:a}=this;if(s.type!=="3d"||!a)return;const{spatialReference:l}=a.coordinateHelper;i??=0;const d=a.elevationInfo,p=zt(s,t,e,i,l,d,o);return Yt(p,l)??this._defaultElevation}};n([r()],c.prototype,"_createOperationGeometry",void 0),n([r()],c.prototype,"_defaultElevation",null),n([r()],c.prototype,"_inputModeAvailable",null),n([r({value:!0})],c.prototype,"centered",null),n([r()],c.prototype,"cursor",null),n([r({nonNullable:!0})],c.prototype,"defaultZ",void 0),n([r({constructOnly:!0})],c.prototype,"directionOptions",void 0),n([r()],c.prototype,"drawOperation",void 0),n([r({value:!0})],c.prototype,"enabled",null),n([r({value:!0})],c.prototype,"forceUniformSize",null),n([r({constructOnly:!0})],c.prototype,"geometryType",void 0),n([r()],c.prototype,"graphic",null),n([r({constructOnly:!0})],c.prototype,"graphicProperties",void 0),n([r()],c.prototype,"graphicSymbol",null),n([r({constructOnly:!0})],c.prototype,"hasZ",void 0),n([r({constructOnly:!0})],c.prototype,"geometryToPlace",void 0),n([r({constructOnly:!0})],c.prototype,"mode",void 0),n([r()],c.prototype,"snappingManager",void 0),n([r()],c.prototype,"snapToScene",void 0),n([r()],c.prototype,"tooltip",void 0),n([r()],c.prototype,"tooltipInfos",void 0),n([r({constructOnly:!0,type:ct})],c.prototype,"sketchOptions",void 0),n([r({readOnly:!0})],c.prototype,"updating",null),n([r({constructOnly:!0,nonNullable:!0})],c.prototype,"view",void 0),n([r()],c.prototype,"activeTooltipInfo",null),n([r()],c.prototype,"_circleRadius",null),n([r()],c.prototype,"_xSize",null),n([r()],c.prototype,"_ySize",null),n([r()],c.prototype,"_fullGeometryArea",null),n([r()],c.prototype,"_constraintElevationInfo",null),n([r()],c.prototype,"_constraintZ",null),c=n([_("esri.views.draw.DrawGraphicTool")],c);const Z=Symbol("create-operation-graphic"),v={outline:Symbol("outline-visual"),regularVertices:Symbol("regular-vertices-visual"),activeVertex:Symbol("active-vertex-visual"),activeEdge:Symbol("active-edge-visual")};function de(t){switch(t){case"point":case"polyline":case"polygon":case"multipoint":return t;case"circle":case"rectangle":return"segment";case"mesh":return"point"}}const te=48;function he(t,e){return ut(t,e,!1)}function ye(t,e){return ut(t,e,!0)}function ut(t,e,i){if(t instanceof Ut){if(t.operation instanceof Pt)return ee(t.operation,e,i),!0;if(t.operation instanceof Rt)return ie(t.operation,e,i),!0;if(t.operation instanceof At)return oe(t.operation,e,i),!0}return!1}function ee(t,e,i=!1){const o=i?-1:1,s=Dt(o*t.dx,o*t.dy,o*t.dz);Ht(e.origin,e.origin,s),P(e)}function ie(t,e,i=!1){const o=i?-t.angle:t.angle;it(e.basis1,e.basis1,ot,o),it(e.basis2,e.basis2,ot,o),P(e)}function oe(t,e,i=!1){const o=i?1/t.factor1:t.factor1,s=i?1/t.factor2:t.factor2;nt(e.basis1,e.basis1,o),nt(e.basis2,e.basis2,s),rt(e.origin,e.origin,t.origin,t.axis1,o),rt(e.origin,e.origin,t.origin,t.axis2,s),P(e)}function ve(t,e,i,o){o||(o=Ft());const s=$(E.get(),t[1],-t[0]),a=$(E.get(),Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY),l=$(E.get(),Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY),d=E.get();e.components.forEach(x=>x.vertices.forEach(({pos:g})=>{$(d,st(t,g),st(s,g)),Lt(a,a,d),Nt(l,l,d)}));const p=1e-6,y=$(E.get(),l[0]-a[0]<p?i/2:0,l[1]-a[1]<p?i/2:0);return Zt(a,a,y),L(l,l,y),at(o.basis1,t,(l[0]-a[0])/2),at(o.basis2,s,(l[1]-a[1])/2),$(o.origin,a[0]*t[0]+a[1]*s[0],a[0]*t[1]+a[1]*s[1]),L(o.origin,o.origin,o.basis1),L(o.origin,o.origin,o.basis2),P(o),o}export{ye as E,ve as F,c as J,de as W,he as d,R as v};
