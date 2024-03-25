import{bG as G,b$ as z,V as k,fd as $,dZ as F,fe as M,ak as E,ae as S,ff as U,f2 as D,fg as L,fh as P,ce as j,fi as q,e3 as I,fj as b,D as x,bq as f,fk as O,e2 as K,fl as N,fm as Z,fn as T,fc as C,z as B,s as J,$ as v,a0 as m,fo as Q,fp as W,as as X,_ as Y,a2 as tt}from"./chunk-xdbuWCSg.js";import{f as et}from"./chunk-xUlXUMCQ.js";import{h as it,j as st}from"./chunk-5pLQLYGP.js";import{h as ot}from"./chunk-OpEh23xu.js";import{u as rt}from"./chunk-_nFoj7Ih.js";import{r as nt,p as ht}from"./chunk-xwDo9nIo.js";import{u as at}from"./chunk-AozVAsla.js";import{m as R,c as ct}from"./chunk-hbj-5HCQ.js";import"./chunk-t4TbIqUg.js";import"./chunk-G_R2JkGV.js";import"./chunk-UNe91zLl.js";import"./chunk-dKJxsAmi.js";import"./chunk-zP4CxfFE.js";import"./chunk-b85WE5Iw.js";import"./chunk-uWwJCq9p.js";import"./chunk-A1x0uTjV.js";class pt{constructor(e,i,s){this.graphic=e,this.mover=i,this.selected=s,this.type="reshape-start"}}class lt{constructor(e,i,s){this.graphic=e,this.mover=i,this.selected=s,this.type="reshape"}}class dt{constructor(e,i,s){this.graphic=e,this.mover=i,this.selected=s,this.type="reshape-stop"}}class vt{constructor(e,i,s){this.mover=e,this.dx=i,this.dy=s,this.type="move-start"}}class mt{constructor(e,i,s){this.mover=e,this.dx=i,this.dy=s,this.type="move"}}class yt{constructor(e,i,s){this.mover=e,this.dx=i,this.dy=s,this.type="move-stop"}}class _t{constructor(e){this.added=e,this.type="vertex-select"}}class gt{constructor(e){this.removed=e,this.type="vertex-deselect"}}class ut{constructor(e,i,s,o){this.added=e,this.graphic=i,this.oldGraphic=s,this.vertices=o,this.type="vertex-add"}}class ft{constructor(e,i,s,o){this.removed=e,this.graphic=i,this.oldGraphic=s,this.vertices=o,this.type="vertex-remove"}}const g=ot.reshapeGraphics,xt={vertices:{default:new G({style:"circle",size:g.vertex.size,color:g.vertex.color,outline:{color:g.vertex.outlineColor,width:1}}),hover:new G({style:"circle",size:g.vertex.hoverSize,color:g.vertex.hoverColor,outline:{color:g.vertex.hoverOutlineColor,width:1}}),selected:new G({style:"circle",size:g.selected.size,color:g.selected.color,outline:{color:g.selected.outlineColor,width:1}})},midpoints:{default:new G({style:"circle",size:g.midpoint.size,color:g.midpoint.color,outline:{color:g.midpoint.outlineColor,width:1}}),hover:new G({style:"circle",size:g.midpoint.size,color:g.midpoint.color,outline:{color:g.midpoint.outlineColor,width:1}})}};let d=class extends z.EventedAccessor{constructor(t){super(t),this._activeOperationInfo=null,this._editGeometryOperations=null,this._graphicAttributes={esriSketchTool:"box"},this._mover=null,this._snappingContext=null,this._hoverGraphic=null,this._snappingTask=null,this._stagedVertex=null,this.tooltip=null,this._translateGraphicTooltipInfo=null,this._translateVertexTooltipInfo=null,this.callbacks={onReshapeStart(){},onReshape(){},onReshapeStop(){},onMoveStart(){},onMove(){},onMoveStop(){},onGraphicClick(){}},this.enableMidpoints=!0,this.enableMovement=!0,this.enableVertices=!0,this.graphic=null,this.layer=null,this.midpointGraphics=new k,this.midpointSymbol=new G({style:"circle",size:6,color:[200,200,200],outline:{color:[100,100,100],width:1}}),this.selectedVertices=[],this.snappingManager=null,this.symbols=xt,this.sketchOptions=new $,this.type="reshape",this.vertexGraphics=new k,this.view=null}initialize(){const t=this.view;this._highlightHelper=new it({view:t}),this._setup(),this.addHandles([F(()=>t?.ready,()=>{const{layer:e,view:i}=this;Q(i,e),this.addHandles(i.on("key-down",s=>this._keyDownHandler(s),W.TOOL))},{once:!0,initial:!0}),M(()=>this.graphic,()=>this.refresh()),M(()=>this.layer,(e,i)=>{i&&(this._clearSelection(),this._resetGraphics(i)),this.refresh()}),M(()=>this.enableMidpoints,()=>this.refresh()),E(()=>this.sketchOptions.tooltips.effectiveEnabled,e=>{this.tooltip=e?new rt({view:this.view}):S(this.tooltip)},X),E(()=>this.view.effectiveTheme.accentColor,()=>this._updateSymbolsForTheme(),Y)])}destroy(){this._reset(),this._mover?.destroy(),this._mover=null,this.tooltip=S(this.tooltip)}set highlightsEnabled(t){this._highlightHelper?.removeAll(),this._set("highlightsEnabled",t),this._setUpHighlights()}get state(){const t=this.view.ready,e=!(!this.graphic||!this.layer);return t&&e?"active":t?"ready":"disabled"}isUIGraphic(t){const e=[];return this.graphic&&e.push(this.graphic),e.concat(this.vertexGraphics.items,this.midpointGraphics.items),e.length>0&&e.includes(t)}refresh(){this._reset(),this._setup()}reset(){this.graphic=null}clearSelection(){this._clearSelection()}removeSelectedVertices(){this.selectedVertices.length&&this._removeVertices(this.selectedVertices)}_setup(){const{graphic:t,layer:e}=this;if(!e||t?.geometry==null)return;const i=t.geometry;i.type!=="mesh"&&i.type!=="extent"?(i.type==="polygon"&&U(i),this._setUpHighlights(),this._setupGraphics(),this._setupMover()):this._logGeometryTypeError()}_setUpHighlights(){this.highlightsEnabled&&this.graphic&&this._highlightHelper?.add(this.graphic)}_setUpGeometryHelper(){const t=this.graphic.geometry;if(t==null||t.type==="mesh"||t.type==="extent")return void this._logGeometryTypeError();const e=t.type==="multipoint"?new D({paths:t.points,spatialReference:t.spatialReference}):t;this._editGeometryOperations=L.fromGeometry(e,P.Local)}_saveSnappingContextForHandle(t,e){this._snappingGraphicsLayer=new j({listMode:"hide",internal:!0,title:"Reshape snapping layer"}),this.view.map.layers.add(this._snappingGraphicsLayer),this._snappingContext=new q({editGeometryOperations:this._editGeometryOperations,elevationInfo:{mode:"on-the-ground",offset:0},pointer:e.viewEvent?.pointerType||"mouse",excludeFeature:this.graphic,feature:this.graphic,visualizer:new et(this._snappingGraphicsLayer),vertexHandle:this._getVertexFromEditGeometry(t)})}_reset(){this._clearSelection(),this._highlightHelper?.removeAll(),this._updateTooltip(),this._resetGraphics(),this._resetSnappingStateVars(),this._activeOperationInfo=null,this._mover&&this._mover.destroy(),this._mover=null,this.view.cursor="default"}_resetSnappingStateVars(){this.snappingManager!=null&&this.snappingManager.doneSnapping(),this._snappingGraphicsLayer!=null&&(this.view?.map&&this.view.map.layers.remove(this._snappingGraphicsLayer),this._snappingGraphicsLayer.destroy()),this._editGeometryOperations=S(this._editGeometryOperations),this._snappingTask=I(this._snappingTask),this._snappingTask=null,this._snappingContext=null,this._stagedVertex=null}_resetGraphics(t){this._removeMidpointGraphics(t),this._removeVertexGraphics(t),this._set("selectedVertices",[])}_removeMidpointGraphics(t){const e=t||this.layer;e&&e.removeMany(this.midpointGraphics.items),this.midpointGraphics.items.forEach(i=>i.destroy()),this.midpointGraphics.removeAll()}_removeVertexGraphics(t){const e=t||this.layer;e&&e.removeMany(this.vertexGraphics.items),this.vertexGraphics.items.forEach(i=>i.destroy()),this.vertexGraphics.removeAll()}_getCoordinatesForUI(t){const e=b(t.clone());if(t.type==="polygon")for(const i of e){const s=i[i.length-1];i[0][0]===s[0]&&i[0][1]===s[1]&&i.length>2&&i.pop()}return e}_setupGraphics(){const t=this.graphic.geometry;if(t!=null&&(t.type==="polyline"||t.type==="polygon")){const e=this._getCoordinatesForUI(t);this.enableMidpoints&&this._setUpMidpointGraphics(e),this.enableVertices&&this._setUpVertexGraphics(e)}}_setUpMidpointGraphics(t){this._removeMidpointGraphics();const e=this._createMidpointGraphics(t);this.midpointGraphics.addMany(e),this.layer.addMany(e)}_setUpVertexGraphics(t){this._removeVertexGraphics();const e=this._createVertexGraphics(t);this.vertexGraphics.addMany(e),this._storeRelatedVertexIndices(),this.layer.addMany(e)}_createVertexGraphics(t){const{_graphicAttributes:e,symbols:i,view:{spatialReference:s}}=this,o=[];return t?.forEach((n,r)=>{n.forEach((a,c)=>{const[h,p,l]=a;o.push(new x({geometry:new f({x:h,y:p,z:l,spatialReference:s}),symbol:i?.vertices?.default,attributes:{...e,pathIndex:r,pointIndex:c}}))})}),o}_createMidpointGraphics(t){const{_graphicAttributes:e,symbols:i,view:{spatialReference:s}}=this,o=[];return t?.forEach((n,r)=>{n.forEach((a,c)=>{const[h,p,l]=a,y=n[c+1]?c+1:0;if(this.graphic.geometry?.type==="polygon"||y!==0){const[_,u,V]=n[y],[w,H,A]=O([h,p,l],[_,u,V]);o.push(new x({geometry:new f({x:w,y:H,z:A,spatialReference:s}),symbol:i.midpoints.default,attributes:{...e,pathIndex:r,pointIndexStart:c,pointIndexEnd:y}}))}})}),o}_updateSymbolsForTheme(){const t=this.view.effectiveTheme.accentColor;this.symbols={vertices:{...this.symbols.vertices,default:this.symbols.vertices.default.clone().set("color",t),hover:this.symbols.vertices.hover?.clone().set("color",t)},midpoints:{...this.symbols.midpoints}};for(const e of this.vertexGraphics)this._isSelected(e)?e.symbol=this.symbols.vertices.selected:this._hoverGraphic===e?e.symbol=this.symbols.vertices.hover:e.symbol=this.symbols.vertices.default}_storeRelatedVertexIndices(){const t=this.vertexGraphics.items;if(!t)return;const e=t.map(({geometry:i})=>({x:i.x,y:i.y}));for(let i=0;i<e.length;i++){const s=[];for(let o=0;o<e.length;o++){if(i===o)continue;const n=e[i],r=e[o];n.x===r.x&&n.y===r.y&&s.push(o)}t[i].attributes.relatedGraphicIndices=s}}_setupMover(){const{enableMovement:t,graphic:e,midpointGraphics:i,vertexGraphics:s,view:o}=this,n=s.concat(i).items;t&&n.push(e),this._mover=new st({enableMoveAllGraphics:!1,highlightsEnabled:!1,indicatorsEnabled:!1,graphics:n,view:o,callbacks:{onGraphicClick:r=>this._onGraphicClickCallback(r),onGraphicMoveStart:r=>this._onGraphicMoveStartCallback(r),onGraphicMove:r=>this._onGraphicMoveCallback(r),onGraphicMoveStop:r=>this._onGraphicMoveStopCallback(r),onGraphicPointerOver:r=>this._onGraphicPointerOverCallback(r),onGraphicPointerOut:r=>this._onGraphicPointerOutCallback(r)}})}_onGraphicClickCallback(t){t.viewEvent.stopPropagation();const e=t.graphic;if(e===this.graphic)this.clearSelection(),this.emit("graphic-click",t),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(t);else if(this._isMidpoint(e)){if(t.viewEvent.button===2)return;const i=this.graphic.clone(),s=this._createVertexFromMidpoint(e);this.refresh(),this._emitVertexAddEvent([e],i,s)}else this._isVertex(e)&&(t.viewEvent.stopPropagation(),t.viewEvent.button===2?this._removeVertices(e):(t.viewEvent.native.shiftKey||this._clearSelection(),this.selectedVertices.includes(e)?this._removeFromSelection(e,!0):this._addToSelection(e)))}_setUpOperation(t){const{graphic:e,dx:i,dy:s}=t,o=e===this.graphic;this._resetSnappingStateVars(),this._setUpGeometryHelper(),this._saveSnappingContextForHandle(e,t),this._activeOperationInfo={target:this.graphic,mover:e,operationType:o?"move":"reshape",totalDx:i,totalDy:s}}_onGraphicMoveStartCallback(t){const{dx:e,dy:i,graphic:s}=t;if(s===this.graphic){const{geometry:o}=s;return this._setUpOperation(t),this._emitMoveStartEvent(e,i),void(o!=null&&o.type==="point"&&this._onHandleMove(s,e,i,t,()=>{this._updateTooltip(this.graphic,t.viewEvent),this._emitMoveEvent(e,i)}))}if(!this.selectedVertices.includes(s)){if(this._clearSelection(),this._isMidpoint(s)){const o=this.graphic.clone(),n=this._createVertexFromMidpoint(s);this._emitVertexAddEvent([s],o,n)}this._addToSelection(s)}this._setUpOperation(t),this._emitReshapeStartEvent(s),this._onHandleMove(s,e,i,t,()=>{this._updateTooltip(s,t.viewEvent),this._emitReshapeEvent(s)})}_onGraphicMoveCallback(t){const e=this._activeOperationInfo;if(!e)return;const{dx:i,dy:s,graphic:o}=t;e.totalDx+=i,e.totalDy+=s;const{operationType:n}=e,{geometry:r}=o;if(r!=null){if(n!=="move")this._onHandleMove(o,i,s,t,()=>{this._updateTooltip(o,t.viewEvent),this._emitReshapeEvent(o)});else if(r.type==="point")this._onHandleMove(o,i,s,t,()=>{this._updateTooltip(this.graphic,t.viewEvent),this._emitMoveEvent(i,s)});else if(r.type==="polyline"||r.type==="polygon"){const a=this._getCoordinatesForUI(r);this._updateVertexGraphicLocations(a),this._updateTooltip(this.graphic,t.viewEvent),this._emitMoveEvent(i,s)}}}_onGraphicMoveStopCallback(t){const e=this._activeOperationInfo;if(!e)return;const{dx:i,dy:s,graphic:o}=t,{operationType:n}=e;e.totalDx+=i,e.totalDy+=s,this._onHandleMove(o,i,s,t,()=>n==="move"?this._emitMoveStopEvent():this._emitReshapeStopEvent(o)),this._isMidpoint(o)?this.refresh():(this._updateTooltip(this._isVertex(o)?o:null),this._resetSnappingStateVars(),this._activeOperationInfo=null)}_updateVertexGraphicLocations(t){const e=this.view.spatialReference;for(const i of this.vertexGraphics){const{pathIndex:s,pointIndex:o}=i.attributes,[n,r,a]=t[s][o];i.geometry=new f({x:n,y:r,z:a,spatialReference:e})}this._updateMidpointGraphicLocations(t)}_updateMidpointGraphicLocations(t){for(const e of this.midpointGraphics){const{pathIndex:i,pointIndexStart:s,pointIndexEnd:o}=e.attributes,[n,r,a]=t[i][s],[c,h,p]=t[i][o],[l,y,_]=O([n,r,a],[c,h,p]);e.geometry=new f({x:l,y,z:_,spatialReference:this.view.spatialReference})}}_getIndicesForVertexGraphic({attributes:t}){return[t?.pathIndex||0,t?.pointIndex||0]}_getVertexFromEditGeometry(t){const[e,i]=this._getIndicesForVertexGraphic(t);return this._editGeometryOperations.data.components[e].vertices[i]}_onHandleMove(t,e,i,s,o){I(this._snappingTask);const n=this._snappingContext;if(!n)return;const r=t.geometry,a=s.type==="graphic-move-stop";if(this.snappingManager!=null&&this.selectedVertices.length<2&&!a){const c=this.snappingManager;this._stagedVertex=c.update({point:r,context:n}),this._syncGeometryAfterVertexMove(t,new f(this._stagedVertex),e,i,a),o(),this._snappingTask=K(async h=>{const p=await c.snap({point:r,context:n,signal:h});p.valid&&(this._stagedVertex=p.apply(),this._syncGeometryAfterVertexMove(t,new f(this._stagedVertex),e,i,a),o())})}else{const c=this._stagedVertex!=null?new f(this._stagedVertex):r;this._syncGeometryAfterVertexMove(t,c,e,i,a),o()}}async _syncGeometryAfterVertexMove(t,e,i,s,o=!1){const n=this._editGeometryOperations.data.geometry;if(n.type==="point")t.geometry=e;else if(n.type==="mesh")t.geometry=n.centerAt(e),t.notifyGeometryChanged();else{const{x:r,y:a,z:c}=e,[h,p]=this._getIndicesForVertexGraphic(t);let l=b(n);const y=l[h].length-1,_=c!=null?[r,a,c]:[r,a];l[h][p]=_,n.type==="polygon"&&(p===0?l[h][y]=_:p===y&&(l[h][0]=_)),this._isVertex(t)&&(l=this._moveRelatedCoordinates(l,t,_),l=this._moveSelectedHandleCoordinates(l,t,i,s,n.type==="polygon"),this._updateMidpointGraphicLocations(l)),this.graphic.geometry=n.clone();const u=this._getVertexFromEditGeometry(t),V=r-u.pos[0],w=a-u.pos[1];this._editGeometryOperations.moveVertices([u],V,w,0),o&&(this._mover?this._mover.updateGeometry(this._mover.graphics.indexOf(t),e):t.geometry=e)}}_moveRelatedCoordinates(t,e,i){const{relatedGraphicIndices:s}=e.attributes;for(const o of s){const n=this.vertexGraphics.at(o),{pathIndex:r,pointIndex:a}=n.attributes;t[r][a]=i,n.geometry=e.geometry}return t}_moveSelectedHandleCoordinates(t,e,i,s,o){for(const n of this.selectedVertices)if(n!==e){const{pathIndex:r,pointIndex:a,relatedGraphicIndices:c}=n.attributes,h=N(n.geometry,i,s,this.view),p=t[r].length-1;t[r][a]=[h.x,h.y],n.geometry=h,o&&(a===0?t[r][p]=[h.x,h.y]:a===p&&(t[r][0]=[h.x,h.y]));for(const l of c){const y=this.vertexGraphics.at(l),{pathIndex:_,pointIndex:u}=y.attributes;t[_][u]=[h.x,h.y],y.geometry=h}}return t}_onGraphicPointerOverCallback(t){const e=t.graphic;this._hoverGraphic=e;const i=this._isVertex(e);i&&!this._isSelected(e)&&(e.symbol=this.symbols.vertices.hover),this._updateTooltip(i?e:null),this._updateHoverCursor(e)}_onGraphicPointerOutCallback(t){const e=t.graphic;this._hoverGraphic=null,this._isVertex(e)&&!this._isSelected(e)&&(e.symbol=this.symbols.vertices.default),this.view.cursor="default",this._updateTooltip()}_createVertexFromMidpoint(t){const{_graphicAttributes:e,graphic:i}=this,s=i.geometry;if(s==null||s.type!=="polygon"&&s.type!=="polyline")return[];const o=s.clone(),n=[],{pathIndex:r,pointIndexStart:a,pointIndexEnd:c}=t.attributes,{x:h,y:p,z:l}=t.geometry,y=c===0?a+1:c,_=b(o);return _[r].splice(y,0,l!=null?[h,p,l]:[h,p]),t.attributes={...e,pathIndex:r,pointIndex:y,relatedGraphicIndices:[]},n.push({coordinates:_[r][y],componentIndex:r,vertexIndex:y}),this.graphic.geometry=o,n}_addToSelection(t){t instanceof x&&(t=[t]);for(const e of t)e.symbol=this.symbols.vertices.selected;this._set("selectedVertices",this.selectedVertices.concat(t)),this._emitSelectEvent(t)}_removeFromSelection(t,e){const{vertices:i}=this.symbols,s=e?i.hover:i.default;t instanceof x&&(t=[t]);for(const o of t)this.selectedVertices.splice(this.selectedVertices.indexOf(o),1),this._set("selectedVertices",this.selectedVertices),o.set("symbol",s);this._emitDeselectEvent(t)}_clearSelection(){if(this.selectedVertices.length){const t=this.selectedVertices;for(const e of this.selectedVertices)e.set("symbol",this.symbols.vertices.default);this._set("selectedVertices",[]),this._emitDeselectEvent(t)}}_keyDownHandler(t){Z.delete.includes(t.key)&&!t.repeat&&this.selectedVertices.length&&this._removeVertices(this.selectedVertices)}_removeVertices(t){const e=this.graphic.geometry;if(e==null||e.type!=="polygon"&&e.type!=="polyline"||e.type==="polygon"&&this.vertexGraphics.length<4||this.vertexGraphics.length<3)return;t instanceof x&&(t=[t]);const i=this.graphic.clone(),s=e.clone();let o=b(s);const n=[];t instanceof x&&(t=[t]);for(const r of t){const{x:a,y:c}=r.geometry;for(let h=0;h<o.length;h++){const p=o[h];for(let l=0;l<p.length;l++){const[y,_]=p[l];a===y&&c===_&&(n.push({coordinates:o[h][l],componentIndex:h,vertexIndex:l}),o[h].splice(Number(l),1))}}}if(s.type==="polygon")o=o.filter(r=>{if(r.length<2)return!1;const[a,c]=r[0],[h,p]=r[r.length-1];return(r.length!==2||a!==h||c!==p)&&(a===h&&c===p||r.push(r[0]),!0)}),s.rings=o;else{for(const r of o)r.length===1&&o.splice(o.indexOf(r),1);s.paths=o}this.graphic.geometry=s,this.refresh(),this._emitVertexRemoveEvent(t,i,n)}_isVertex(t){return this.vertexGraphics.includes(t)}_isSelected(t){return this._isVertex(t)&&this.selectedVertices.includes(t)}_isMidpoint(t){return this.midpointGraphics.includes(t)}_updateHoverCursor(t){this.view.cursor=this._isMidpoint(t)?"copy":"move"}_updateTooltip(t,e){this.tooltip!=null&&(t?t===this.graphic?this._updateMoveGraphicTooltip(e):this._updateMoveVertexTooltip(e):this.tooltip.clear())}_updateMoveGraphicTooltip(t){const{tooltip:e,sketchOptions:i,view:s}=this;if(e==null)return;const o=this._translateGraphicTooltipInfo??=new nt({sketchOptions:i});if(o.clear(),o.sketchOptions=i,t){const{x:n,y:r}=t.origin,a=s.toMap(t),c=s.toMap(T(n,r)),h=R(c,a);o.distance=h??C}e.info=o}_updateMoveVertexTooltip(t){const{tooltip:e,graphic:{geometry:i},sketchOptions:s,view:o}=this;if(e==null)return;const n=this._translateVertexTooltipInfo??=new ht({sketchOptions:s});if(n.clear(),n.sketchOptions=s,i?.type==="polygon"?n.area=at(i):i?.type==="polyline"&&(n.totalLength=ct(i)),t){const{x:r,y:a}=t.origin,c=o.toMap(t),h=o.toMap(T(r,a)),p=R(h,c);n.distance=p??C}e.info=n}_emitMoveStartEvent(t,e){const i=new vt(this.graphic,t,e);this.emit("move-start",i),this.callbacks.onMoveStart&&this.callbacks.onMoveStart(i)}_emitMoveEvent(t,e){const i=new mt(this.graphic,t,e);this.emit("move",i),this.callbacks.onMove&&this.callbacks.onMove(i)}_emitMoveStopEvent(){const t=this._activeOperationInfo;if(!t)return;const{totalDx:e,totalDy:i}=t,s=new yt(this.graphic,e,i);this.emit("move-stop",s),this.callbacks.onMoveStop&&this.callbacks.onMoveStop(s)}_emitReshapeStartEvent(t){const e=new pt(this.graphic,t,this.selectedVertices);this.emit("reshape-start",e),this.callbacks.onReshapeStart&&this.callbacks.onReshapeStart(e)}_emitReshapeEvent(t){const e=new lt(this.graphic,t,this.selectedVertices);this.emit("reshape",e),this.callbacks.onReshape&&this.callbacks.onReshape(e)}_emitReshapeStopEvent(t){const e=new dt(this.graphic,t,this.selectedVertices);this.emit("reshape-stop",e),this.callbacks.onReshapeStop&&this.callbacks.onReshapeStop(e)}_emitSelectEvent(t){const e=new _t(t);this.emit("select",e),this.callbacks.onVertexSelect&&this.callbacks.onVertexSelect(e)}_emitDeselectEvent(t){const e=new gt(t);this.emit("deselect",e),this.callbacks.onVertexDeselect&&this.callbacks.onVertexDeselect(e)}_emitVertexAddEvent(t,e,i){const s=new ut(t,this.graphic,e,i);this.emit("vertex-add",s),this.callbacks.onVertexAdd&&this.callbacks.onVertexAdd(s)}_emitVertexRemoveEvent(t,e,i){const s=new ft(t,this.graphic,e,i);this.emit("vertex-remove",s),this.callbacks.onVertexRemove&&this.callbacks.onVertexRemove(s)}_logGeometryTypeError(){B.getLogger(this).error(new J("reshape:invalid-geometry","Reshape operation not supported for the provided graphic. The geometry type is not supported."))}};v([m()],d.prototype,"tooltip",void 0),v([m()],d.prototype,"_translateGraphicTooltipInfo",void 0),v([m()],d.prototype,"_translateVertexTooltipInfo",void 0),v([m()],d.prototype,"callbacks",void 0),v([m()],d.prototype,"enableMidpoints",void 0),v([m()],d.prototype,"enableMovement",void 0),v([m()],d.prototype,"enableVertices",void 0),v([m()],d.prototype,"graphic",void 0),v([m({value:!0})],d.prototype,"highlightsEnabled",null),v([m()],d.prototype,"layer",void 0),v([m({readOnly:!0})],d.prototype,"midpointGraphics",void 0),v([m()],d.prototype,"midpointSymbol",void 0),v([m({readOnly:!0})],d.prototype,"selectedVertices",void 0),v([m()],d.prototype,"snappingManager",void 0),v([m({readOnly:!0})],d.prototype,"state",null),v([m()],d.prototype,"symbols",void 0),v([m({type:$})],d.prototype,"sketchOptions",void 0),v([m({readOnly:!0})],d.prototype,"type",void 0),v([m({readOnly:!0})],d.prototype,"vertexGraphics",void 0),v([m()],d.prototype,"view",void 0),d=v([tt("esri.views.draw.support.Reshape")],d);const zt=d;export{zt as default};
