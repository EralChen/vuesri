import{gy as he,fG as F,pV as oe,oa as ce,aP as E,jG as de,dG as ue,pW as ye,pX as _e,pY as U,pZ as pe,p_ as fe,aF as M,ni as D,ng as O,lW as A,p$ as v,q0 as me,cB as ge,q1 as Te,q2 as Q,q3 as we,D as G,dC as be,q4 as ve,fB as Se,dk as Ce,q5 as K,q6 as b,ai as Ie,q7 as Re,ae as P,I as De,aj as Y,z as j,fE as W,y as Le,q8 as Pe,bq as Ee,$ as X,a0 as He,a2 as xe}from"./chunk-gZYsZ36N.js";import{n as Me,e as Ae,l as Fe,t as Z,h as Ve}from"./chunk-fcYQXyIQ.js";import{i as ke}from"./chunk-iPxuUnvs.js";import{s as ze}from"./chunk-vrBP8R9e.js";import{e as J,s as ee}from"./chunk-KlxcllND.js";import"./chunk-t4TbIqUg.js";import"./chunk-rzDF0a4h.js";import"./chunk-gJZ7CV2L.js";const te=512,Ue=1e-6,qe=(l,e)=>l+1/(1<<2*e);let se=class{constructor(e,t){this._tiles=new Map,this._tileCache=new he(40,s=>s.dispose()),this._viewSize=[0,0],this._visibleTiles=new Map,this.acquireTile=e.acquireTile,this.releaseTile=e.releaseTile,this.tileInfoView=e.tileInfoView,this._container=t}destroy(){for(const[e,t]of this._tiles)t.dispose();this._tiles=null,this._tileCache.clear(),this._tileCache=null}update(e){this._updateCacheSize(e);const t=this.tileInfoView,s=t.getTileCoverage(e.state,0,!0,"smallest");if(!s)return!0;const{spans:i,lodInfo:r}=s,{level:n}=r,a=this._tiles,o=new Set,h=new Set;for(const{row:c,colFrom:u,colTo:f}of i)for(let y=u;y<=f;y++){const g=F.getId(n,c,r.normalizeCol(y),r.getWorldForColumn(y)),p=this._getOrAcquireTile(g);o.add(g),p.processed()?this._addToContainer(p):h.add(new F(g))}for(const[c,u]of a)u.isCoverage=o.has(c);for(const c of h)this._findPlaceholdersForMissingTiles(c,o);let d=!1;for(const[c,u]of a)u.neededForCoverage=o.has(c),u.neededForCoverage||u.isHoldingForFade&&t.intersects(s,u.key)&&o.add(c),u.isFading&&(d=!0);for(const[c,u]of this._tiles)o.has(c)||this._releaseTile(c);return oe.pool.release(s),!d}clear(){this._tiles.clear(),this._tileCache.clear(),this._visibleTiles.clear()}clearCache(){this._tileCache.clear()}getIntersectingTiles(e,t,s,i,r){const n=[0,0],a=[0,0];i.toMap(n,e-s,t+s),i.toMap(a,e+s,t-s);const o=Math.min(n[0],a[0]),h=Math.min(n[1],a[1]),d=Math.max(n[0],a[0]),c=Math.max(n[1],a[1]),u=ce(o,h,d,c),f=E(),y=[];for(const[g,p]of this._visibleTiles)this.tileInfoView.getTileBounds(f,p.key),de(u,f)&&y.push(p);if(r!=null&&r.length>0){const g=new Set(y.map(_=>_.id)),p=r.filter(_=>!g.has(_.tileKey.id)).map(_=>this._visibleTiles.get(_.tileKey.id)).filter(_=>_!==void 0);y.push(...p)}return y}_findPlaceholdersForMissingTiles(e,t){const s=[];for(const[r,n]of this._tiles)this._addPlaceholderChild(s,n,e,t);const i=s.reduce(qe,0);Math.abs(1-i)<Ue||this._addPlaceholderParent(e.id,t)}_addPlaceholderChild(e,t,s,i){t.key.level<=s.level||!t.hasData()||Be(s,t.key)&&(this._addToContainer(t),i.add(t.id),e.push(t.key.level-s.level))}_addPlaceholderParent(e,t){const s=this._tiles;let i=e;for(;;){if(i=$e(i),!i||t.has(i))return;const r=s.get(i);if(r&&r.hasData())return this._addToContainer(r),void t.add(r.id)}}_getOrAcquireTile(e){let t=this._tiles.get(e);return t||(t=this._tileCache.pop(e),t||(t=this.acquireTile(new F(e))),this._tiles.set(e,t),t)}_releaseTile(e){const t=this._tiles.get(e);this.releaseTile(t),this._removeFromContainer(t),this._tiles.delete(e),t.hasData()?this._tileCache.put(e,t,1):t.dispose()}_addToContainer(e){let t;const s=[],i=this._container;if(i.contains(e))return;const r=this._visibleTiles;for(const[n,a]of r)this._canConnectDirectly(e,a)&&s.push(a),t==null&&this._canConnectDirectly(a,e)&&(t=a);if(t!=null){for(const n of s)t.childrenTiles.delete(n),e.childrenTiles.add(n),n.parentTile=e;t.childrenTiles.add(e),e.parentTile=t}else for(const n of s)e.childrenTiles.add(n),n.parentTile=e;r.set(e.id,e),i.addChild(e)}_removeFromContainer(e){if(this._visibleTiles.delete(e.id),this._container.removeChild(e),e.parentTile!=null){e.parentTile.childrenTiles.delete(e);for(const t of e.childrenTiles)e.parentTile!=null&&e.parentTile.childrenTiles.add(t)}for(const t of e.childrenTiles)t.parentTile=e.parentTile;e.parentTile=null,e.childrenTiles.clear()}_canConnectDirectly(e,t){const s=e.key;let{level:i,row:r,col:n,world:a}=t.key;const o=this._visibleTiles;for(;i>0;){if(i--,r>>=1,n>>=1,s.level===i&&s.row===r&&s.col===n&&s.world===a)return!0;if(o.has(`${i}/${r}/${n}/${a}`))return!1}return!1}_updateCacheSize(e){const t=e.state.size;if(t[0]===this._viewSize[0]&&t[1]===this._viewSize[1])return;const s=Math.ceil(t[0]/te)+1,i=Math.ceil(t[1]/te)+1;this._viewSize[0]=t[0],this._viewSize[1]=t[1],this._tileCache.maxSize=5*s*i}};function $e(l){const[e,t,s,i]=l.split("/"),r=parseInt(e,10);return r===0?null:`${r-1}/${parseInt(t,10)>>1}/${parseInt(s,10)>>1}/${parseInt(i,10)}`}function Be(l,e){const t=e.level-l.level;return l.row===e.row>>t&&l.col===e.col>>t&&l.world===e.world}const Ne=.5,ie=1e-6;class Oe{constructor(e,t){this.styleRepository=e,this._tileToHandle=new Map,this._viewState={scale:0,rotation:0,center:[0,0],size:[0,0]},this._declutterViewState={scale:0,rotation:0,center:[0,0],size:[0,0]},this._offsetFromScreenCenter=[0,0],this._completed=!1,this._fading=ue(!1),this._symbolRepository=new Me(4096,t,()=>new ye),this._symbolDeclutterer=new Ae(t,this._symbolRepository,(s,i,r)=>this._createCollisionJob(s,i,r),(s,i)=>{s.allSymbolsFadingOut=!0,s.lastOpacityUpdate=i,_e(s,i,!0),s.decluttered=!0,s.requestRender()},(s,i)=>this.styleRepository.getStyleLayerByUID(s.styleLayerUID).z-this.styleRepository.getStyleLayerByUID(i.styleLayerUID).z,s=>{const i=this.styleRepository.getStyleLayerByUID(s);if(this._zoom+ie<i.minzoom||this._zoom-ie>=i.maxzoom)return!1;const r=i.getLayoutProperty("visibility");return!r||r.getValue()!==U.NONE})}get symbolRepository(){return this._symbolRepository}_createCollisionJob(e,t,s){return this.updateDecluttererViewState(),new Fe(e,t,s,this.styleRepository,this._zoom,this._viewState.rotation)}get fading(){return this._fading.value}get decluttererOffset(){return this._offsetFromScreenCenter}addTile(e){e.decluttered=!1,this._tileToHandle.set(e,e.on("symbols-changed",()=>{this._symbolRepository.add(e),this.restartDeclutter()})),this._symbolRepository.add(e),this.restartDeclutter()}removeTile(e){const t=this._tileToHandle.get(e);t&&(this._symbolRepository.removeTile(e),this.restartDeclutter(),t.remove(),this._tileToHandle.delete(e))}update(e,t){this._zoom=e,this._viewState={scale:t.scale,rotation:t.rotation,center:[t.center[0],t.center[1]],size:[t.size[0],t.size[1]]};const s=[0,0];t.toScreen(s,t.center);const i=[0,0];return t.toScreen(i,this._declutterViewState.center),this._offsetFromScreenCenter[0]=s[0]-i[0],this._offsetFromScreenCenter[1]=s[1]-i[1],this._continueDeclutter(),this._completed}restartDeclutter(){this._completed=!1,this._symbolDeclutterer.restart(),this._notifyUnstable()}clear(){this._completed=!1,this._symbolRepository=null,this._symbolDeclutterer.restart(),this._tileToHandle.forEach(e=>e.remove()),this._tileToHandle.clear()}get stale(){return this._zoom!==this._declutterZoom||this._viewState.size[0]!==this._declutterViewState.size[0]||this._viewState.size[1]!==this._declutterViewState.size[1]||this._viewState.scale!==this._declutterViewState.scale||this._viewState.rotation!==this._declutterViewState.rotation}deleteStyleLayers(e){this._symbolRepository.deleteStyleLayers(e)}_continueDeclutter(){this._completed&&!this.stale||(this._symbolDeclutterer.running||(this.updateDecluttererViewState(),this._symbolDeclutterer.restart()),this._symbolDeclutterer.setScreenSize(this._viewState.size[0],this._viewState.size[1]),this._completed=this._symbolDeclutterer.continue(pe),this._completed&&this._scheduleNotifyStable())}_scheduleNotifyStable(){this._stableNotificationHandle!=null&&clearTimeout(this._stableNotificationHandle),this._stableNotificationHandle=setTimeout(()=>{this._stableNotificationHandle=null,this._fading.value=!1},(1+Ne)*fe)}_notifyUnstable(){this._stableNotificationHandle!=null&&(clearTimeout(this._stableNotificationHandle),this._stableNotificationHandle=null),this._fading.value=!0}updateDecluttererViewState(){this._declutterZoom=this._zoom,this._declutterViewState.center[0]=this._viewState.center[0],this._declutterViewState.center[1]=this._viewState.center[1],this._declutterViewState.rotation=this._viewState.rotation,this._declutterViewState.scale=this._viewState.scale,this._declutterViewState.size[0]=this._viewState.size[0],this._declutterViewState.size[1]=this._viewState.size[1],this._offsetFromScreenCenter[0]=0,this._offsetFromScreenCenter[1]=0}}const k=1e-6;function re(l,e){if(l){const t=l.getLayoutProperty("visibility");if(!t||t.getValue()!==U.NONE&&(l.minzoom===void 0||l.minzoom<e+k)&&(l.maxzoom===void 0||l.maxzoom>=e-k))return!0}return!1}let Qe=class extends ke{constructor(e){super(e),this._backgroundTiles=[],this._computeDisplayInfoView(e)}destroy(){this.removeAllChildren(),this._spriteMosaic?.dispose(),this._spriteMosaic=null,this._glyphMosaic?.dispose(),this._glyphMosaic=null,this._symbolFader!=null&&(this._symbolFader.clear(),this._symbolFader=null),this._styleRepository=null,this._backgroundTiles=[]}get fading(){return this._symbolFader?.fading??!1}get symbolFader(){return this._symbolFader}get symbolRepository(){return this._symbolFader?.symbolRepository}setStyleResources(e,t,s,i){this._spriteMosaic=e,this._glyphMosaic=t,this._styleRepository=s,this._tileInfoView=i,this._computeDisplayInfoView(i),this._symbolFader==null&&(this._symbolFader=new Oe(this._styleRepository,this.children)),this._symbolFader.styleRepository=s}setSpriteMosaic(e){this._spriteMosaic?.dispose(),this._spriteMosaic=e}deleteStyleLayers(e){this._symbolFader!=null&&this._symbolFader.deleteStyleLayers(e)}createRenderParams(e){return{...super.createRenderParams(e),renderPass:null,styleLayer:null,styleLayerUID:-1,glyphMosaic:this._glyphMosaic,spriteMosaic:this._spriteMosaic,hasClipping:!!this._clippingInfos}}doRender(e){!this.visible||e.drawPhase!==M.MAP&&e.drawPhase!==M.DEBUG||this._spriteMosaic===void 0||super.doRender(e)}addChild(e){return super.addChild(e),this._symbolFader!=null?this._symbolFader.addTile(e):e.decluttered=!0,this.requestRender(),e}removeChild(e){return this._symbolFader!=null&&this._symbolFader.removeTile(e),this.requestRender(),super.removeChild(e)}renderChildren(e){const{drawPhase:t}=e;t!==M.DEBUG?this._doRender(e):super.renderChildren(e)}removeAllChildren(){for(let e=0;e<this.children.length;e++){const t=this.children[e];this._symbolFader!=null&&this._symbolFader.removeTile(t),t.dispose()}super.removeAllChildren()}getStencilTarget(){return this.children.filter(e=>e.neededForCoverage&&e.hasData())}restartDeclutter(){this._symbolFader!=null&&this._symbolFader.restartDeclutter()}_doRender(e){const{context:t,state:s}=e,i=this._styleRepository;if(!i)return;const r=i.layers,n=this._displayInfo.scaleToZoom(s.scale);i.backgroundBucketIds.length>0&&(e.renderPass="background",this._renderBackgroundLayers(e,i.backgroundBucketIds,n)),super.renderChildren(e),e.drawPhase===M.MAP&&this._fade(n,s);const a=this.children.filter(o=>o.visible&&o.hasData());if(!a||a.length===0)return t.bindVAO(),t.setStencilTestEnabled(!0),void t.setBlendingEnabled(!0);for(const o of a)o.triangleCount=0;t.setStencilWriteMask(0),t.setColorMask(!0,!0,!0,!0),t.setStencilOp(D.KEEP,D.KEEP,D.REPLACE),t.setStencilTestEnabled(!0),t.setBlendingEnabled(!1),t.setDepthTestEnabled(!0),t.setDepthWriteEnabled(!0),t.setDepthFunction(O.LEQUAL),t.setClearDepth(1),t.clear(t.gl.DEPTH_BUFFER_BIT),e.renderPass="opaque";for(let o=r.length-1;o>=0;o--)this._renderStyleLayer(r[o],e,a);t.setDepthWriteEnabled(!1),t.setBlendingEnabled(!0),t.setBlendFunctionSeparate(A.ONE,A.ONE_MINUS_SRC_ALPHA,A.ONE,A.ONE_MINUS_SRC_ALPHA),e.renderPass="translucent";for(let o=0;o<r.length;o++)this._renderStyleLayer(r[o],e,a);t.bindVAO(),t.setStencilTestEnabled(!0),t.setBlendingEnabled(!0);for(const o of a)o.debugInfo.display.triangleCount=o.triangleCount}_fade(e,t){this._symbolFader!=null&&(this._symbolFader.update(e,t)||this.requestRender())}_renderStyleLayer(e,t,s){const{displayLevel:i,painter:r,renderPass:n}=t;if(e===void 0)return;const a=e.getLayoutProperty("visibility");if(a&&a.getValue()===U.NONE)return;let o;switch(e.type){case v.BACKGROUND:return;case v.FILL:if(n!=="opaque"&&t.renderPass!=="translucent")return;o="vtlFill";break;case v.LINE:if(n!=="translucent")return;o="vtlLine";break;case v.CIRCLE:if(n!=="translucent")return;o="vtlCircle";break;case v.SYMBOL:if(n!=="translucent")return;o="vtlSymbol"}if(s=e.type===v.SYMBOL?s.filter(d=>d.decluttered):s.filter(d=>d.neededForCoverage),o!=="vtlSymbol"&&(s.length===0||e.minzoom!==void 0&&e.minzoom>=i+k||e.maxzoom!==void 0&&e.maxzoom<i-k))return;const h=e.uid;t.styleLayerUID=h,t.styleLayer=e;for(const d of s)if(d.layerData.has(h)){r.renderObjects(t,s,o);break}}_renderBackgroundLayers(e,t,s){const{context:i,painter:r,state:n}=e,a=this._styleRepository;let o=!1;for(const T of t)if(a.getLayerById(T).type===v.BACKGROUND&&re(a.getLayerById(T),s)){o=!0;break}if(!o)return;const h=this._tileInfoView,d=h.getTileCoverage(e.state,0,!0,"smallest"),{spans:c,lodInfo:u}=d,{level:f}=u,y=E(),g=[];if(this._renderPasses){const T=this._renderPasses[0];this._clippingInfos!=null&&(T.brushes[0].prepareState(e),T.brushes[0].drawMany(e,this._clippingInfos))}const p=this._backgroundTiles;let _,C=0;for(const{row:T,colFrom:S,colTo:L}of c)for(let m=S;m<=L;m++){if(C<p.length)_=p[C],_.key.set(f,T,u.normalizeCol(m),u.getWorldForColumn(m)),h.getTileBounds(y,_.key,!1),_.x=y[0],_.y=y[3],_.resolution=h.getTileResolution(f);else{const I=new F(f,T,u.normalizeCol(m),u.getWorldForColumn(m)),R=h.getTileBounds(E(),I),H=h.getTileResolution(f);_=new me(I,H,R[0],R[3],512,512,4096,4096),p.push(_)}_.setTransform(n),g.push(_),C++}i.setStencilWriteMask(0),i.setColorMask(!0,!0,!0,!0),i.setStencilOp(D.KEEP,D.KEEP,D.REPLACE),i.setStencilFunction(O.EQUAL,0,255),i.setStencilTestEnabled(!0);for(const T of t){const S=a.getLayerById(T);S.type===v.BACKGROUND&&re(S,s)&&(e.styleLayerUID=S.uid,e.styleLayer=S,r.renderObjects(e,g,"vtlBackground"))}oe.pool.release(d)}_computeDisplayInfoView(e){let t=e.tileInfo.lods[0].scale;const s=Math.max(25,e.tileInfo.lods.length),i=[];for(let r=0;r<=s;r++)i.push(t),t/=2;this._displayInfo=ge.create({scales:i,size:512,spatialReference:e.spatialReference,numLODs:s})}};const Ge=8,Ke=512,le=4096,Ye=(l,e)=>{const t=l.vtlSymbol.sourceTile,s=e.vtlSymbol.sourceTile;return t.level!==s.level?t.level-s.level:t.row!==s.row?t.row-s.row:t.col!==s.col?t.col-s.col:l.styleLayerUID-e.styleLayerUID};class q{constructor(e,t,s,i,r){this.tileKey=e,this._index=null,this._styleRepository=null,this._tileHandler=null,this._tileKeyToPBF=new Map,this._tileLayerData=t,this._styleRepository=s,this._tileHandler=i,this._parentLayer=r}static create(e,t,s,i,r){return new q(e,t,s,i,r)}clear(){this._index?.clear(),this._tileKeyToPBF.clear()}async queryAttributes(e,t,s,i,r){if(this._tileLayerData.size===0||!this._styleRepository||!this._tileHandler)return[];this._index===null&&(this._index=new ze(100,je),await this._indexLayers());const n=[];return this._queryIndex(n,e,t,s,this.tileKey.level,i),r&&r?.length>0&&await this._getSymbolsAttributes(n,r),n}async _indexLayers(){const e=this.tileKey,t=this._styleRepository.layers,s=await this._getTilePayload(e);for(const[i,r]of this._tileLayerData){const n=t[i],a=s.find(d=>d.sourceName===n.source);if(!a)continue;const{protobuff:o,key:h}=a;if(r.type!==Te.SYMBOL){const d=1<<e.level-h.level,c=e.row-h.row*d,u=e.col-h.col*d;this._indexLayer(n,o,e.level,d,c,u)}}}_indexLayer(e,t,s,i,r,n){const a=e.sourceLayer,o=e.getFeatureFilter(),h=s,d=s+1,c=ve(h),u=new Q(new Uint8Array(t),new DataView(t));for(;u.next();)switch(u.tag()){case 3:{const f=u.getMessage(),y=new J(f);if(f.release(),y.name!==a)continue;const g=y.getData(),p=y.extent/i,_=p*n-c,C=p*r-c,T=_+p+2*c,S=C+p+2*c,L=p/Ke,m=le/p,I=p*n,R=p*r;for(;g.nextTag(2);){const H=g.getMessage(),x=new ee(H,y);if(H.release(),o&&!o.filter(x,s))continue;const $=x.values||{},B=$._minzoom,N=$._maxzoom;if(B&&B>=10*d||N&&N<=10*h)continue;const w=e.getFeatureInflatedBounds(x,h,y.extent,L);w==null||w[0]>T||w[1]>S||w[2]<_||w[3]<C||(w[0]=(w[0]-I)*m,w[1]=(w[1]-R)*m,w[2]=(w[2]-I)*m,w[3]=(w[3]-R)*m,this._index.insert(new we(e,x,w,m,I,R)))}break}default:u.skip()}}async _getSymbolsAttributes(e,t){if(!t||t.length===0)return e;const s=[];t.sort(Ye);let i=t[0].styleLayerUID,r=0;for(let h=0;h<t.length;h++)i!==t[h].styleLayerUID&&(s.push({from:r,to:h,styleLayerUID:i,sourceTileKey:t[h].vtlSymbol.sourceTile}),r=h,i=t[h].styleLayerUID);s.push({from:r,to:t.length,styleLayerUID:i,sourceTileKey:t[t.length-1].vtlSymbol.sourceTile});const n=this._styleRepository.layers;let a,o=null;for(const h of s){const d=await this._getTilePayload(h.sourceTileKey);a=n[h.styleLayerUID],o=!!a&&d.find(c=>c.sourceName===a.source),o&&this._addSymbolsAttributes(e,t.slice(h.from,h.to).map(c=>c.vtlSymbol),i,o)}return e}_addSymbolsAttributes(e,t,s,i){const r=this._styleRepository.layers,n=i.key,a=this.tileKey,o=1<<a.level-n.level,h=a.row-n.row*o,d=a.col-n.col*o;this._getSymbolAttributes(i.protobuff,t,s,o,h,d).forEach(c=>{const{attributes:u,tilePoint:f}=c;e.push({layerId:r[s].id,layerIndex:s,graphic:new G({attributes:u,origin:{type:"vector-tile",layerId:r[s].id,layerIndex:s,layer:this._parentLayer}}),tilePoint:f})})}_getSymbolAttributes(e,t,s,i,r,n){const a=[],o=this._styleRepository.layers;let h=0;t.sort((c,u)=>c.featureIndex-u.featureIndex);const d=new Q(new Uint8Array(e),new DataView(e));for(;d.next();)switch(d.tag()){case 3:{const c=d.getMessage(),u=new J(c);if(c.release(),u.name!==o[s].sourceLayer)continue;const f=u.getData(),y=u.extent/i,g=le/y,p=y*n,_=y*r;let C=0;for(;f.nextTag(2);){const T=f.getMessage();if(C++===t[h].featureIndex){const S=new ee(T,u),L=S.values,m=S.getGeometry(),I=m!=null?[g*(m[0][0].x-p),g*(m[0][0].y-_)]:null;a.push({attributes:L,tilePoint:I}),h++}if(T.release(),h===t.length)return a}break}default:d.skip()}return a}_queryIndex(e,t,s,i,r,n){const a=Ge*i*(window.devicePixelRatio||1);return this._index?.search({minX:t-a,minY:s-a,maxX:t+a,maxY:s+a},o=>{const{layer:h,feature:d}=o;h.isIntersectingFeature(t,s,i,d,r,n,o)&&e.push({layerId:h.id,layerIndex:h.uid,tilePoint:null,graphic:new G({attributes:d.values,origin:{type:"vector-tile",layerId:o.layer.id,layerIndex:o.layer.uid,layer:this._parentLayer}})})}),e}async _getTilePayload(e){return be(this._tileKeyToPBF,e.id,()=>this._tileHandler.fetchTilePBFs(e)).then(t=>t)}}const je=l=>({minX:l.bounds[0],minY:l.bounds[1],maxX:l.bounds[2],maxY:l.bounds[3]}),z=2,ae=8,ne=512;let V=class extends Se(Ce){constructor(){super(...arguments),this._styleChanges=[],this._fetchQueue=null,this._parseQueue=null,this._tileHandlerPromise=null,this._isTileHandlerReady=!1}get fading(){return this._vectorTileContainer?.fading??!1}async hitTest(l,e){const t=this._tileHandlerPromise,s=this._vectorTileContainer?.symbolFader;if(!t||!this._isTileHandlerReady||!s)return;await t;let i=null;const r=this._vectorTileContainer?.symbolRepository;r&&(i=r.querySymbols(e,z,s.decluttererOffset,{}));const n=this.view.state,a=this._tileManager.getIntersectingTiles(e.x,e.y,z,n,i);if((!a||a.length===0)&&i?.length===0)return null;l=l.clone().normalize();const o=[],h=[];for(const d of a)o.push(this._queryTile(h,l,z,this.view.state.rotation,d,i?.filter(c=>c.tileKey.id===d.id)));return await Promise.all(o),h}update(l){if(this._tileHandlerPromise&&this._isTileHandlerReady)return l.pixelRatio!==this._tileHandler.devicePixelRatio?(this._start(),void(this._tileHandler.devicePixelRatio=l.pixelRatio)):void(this._styleChanges.length>0?this._tileHandlerPromise=this._applyStyleChanges():(this._fetchQueue.pause(),this._parseQueue.pause(),this._fetchQueue.state=l.state,this._parseQueue.state=l.state,this._tileManager.update(l)||this.requestUpdate(),this._parseQueue.resume(),this._fetchQueue.resume()))}attach(){const{style:l}=this.layer.currentStyleInfo;this._styleRepository=new K(l),this._tileInfoView=new Z(this.layer.tileInfo,this.layer.fullExtent),this._vectorTileContainer=new Qe(this._tileInfoView),this._tileHandler=new Ve(this.layer,this._styleRepository,window.devicePixelRatio||1,this.layer.tileInfo.lods.length-1),this.container.addChild(this._vectorTileContainer),this._start(),this.addAttachHandles([this.layer.on("paint-change",e=>{if(e.isDataDriven)this._styleChanges.push({type:b.PAINTER_CHANGED,data:e}),this.requestUpdate();else{const t=this._styleRepository,s=t.getLayerById(e.layer);if(!s)return;const i=s.type===v.SYMBOL;t.setPaintProperties(e.layer,e.paint),i&&this._vectorTileContainer?.restartDeclutter(),this._vectorTileContainer?.requestRender()}}),this.layer.on("layout-change",e=>{const t=this._styleRepository,s=t.getLayerById(e.layer);if(!s)return;const i=Ie(s.layout,e.layout);if(i!=null){if(Re(i,"visibility")&&We(i)===1)return t.setLayoutProperties(e.layer,e.layout),s.type===v.SYMBOL&&this._vectorTileContainer?.restartDeclutter(),void this._vectorTileContainer?.requestRender();this._styleChanges.push({type:b.LAYOUT_CHANGED,data:e}),this.requestUpdate()}}),this.layer.on("style-layer-visibility-change",e=>{const t=this._styleRepository,s=t.getLayerById(e.layer);s&&(t.setStyleLayerVisibility(e.layer,e.visibility),s.type===v.SYMBOL&&this._vectorTileContainer?.restartDeclutter(),this._vectorTileContainer?.requestRender())}),this.layer.on("style-layer-change",e=>{this._styleChanges.push({type:b.LAYER_CHANGED,data:e}),this.requestUpdate()}),this.layer.on("delete-style-layer",e=>{this._styleChanges.push({type:b.LAYER_REMOVED,data:e}),this.requestUpdate()}),this.layer.on("load-style",()=>this._loadStyle()),this.layer.on("spriteSource-change",e=>{this._styleChanges.push({type:b.SPRITES_CHANGED,data:e});const t=this._styleRepository.layers;for(const s of t)switch(s.type){case v.SYMBOL:s.getLayoutProperty("icon-image")&&this._styleChanges.push({type:b.LAYOUT_CHANGED,data:{layer:s.id,layout:s.layout}});break;case v.LINE:s.getPaintProperty("line-pattern")&&this._styleChanges.push({type:b.PAINTER_CHANGED,data:{layer:s.id,paint:s.paint,isDataDriven:s.isPainterDataDriven()}});break;case v.FILL:s.getLayoutProperty("fill-pattern")&&this._styleChanges.push({type:b.PAINTER_CHANGED,data:{layer:s.id,paint:s.paint,isDataDriven:s.isPainterDataDriven()}})}this.requestUpdate()})])}detach(){this._stop(),this.container.removeAllChildren(),this._vectorTileContainer=P(this._vectorTileContainer),this._tileHandler=P(this._tileHandler)}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(l){return De(this.layer.tileInfo?.spatialReference,l)}canResume(){let l=super.canResume();const{currentStyleInfo:e}=this.layer;if(l&&e?.layerDefinition){const t=this.view.scale,{minScale:s,maxScale:i}=e.layerDefinition;e?.layerDefinition&&(s&&s<t&&(l=!1),i&&i>t&&(l=!1))}return l}isUpdating(){return this.fading}acquireTile(l){const e=this._createVectorTile(l);return this._updatingHandles.addPromise(this._fetchQueue.push(e.key).then(t=>this._parseQueue.push({key:e.key,data:t})).then(t=>{e.once("attach",()=>this.requestUpdate()),e.setData(t),this.requestUpdate()}).catch(t=>{Y(t)||j.getLogger(this).error(t)})),e}releaseTile(l){const e=l.key.id;this._fetchQueue.abort(e),this._parseQueue.abort(e),this.requestUpdate()}_start(){if(this._stop(),this._tileManager=new se({acquireTile:t=>this.acquireTile(t),releaseTile:t=>this.releaseTile(t),tileInfoView:this._tileInfoView},this._vectorTileContainer),!this.layer.currentStyleInfo)return;const l=new AbortController,e=this._tileHandler.start({signal:l.signal}).then(()=>{this._fetchQueue=new W({tileInfoView:this._tileInfoView,process:(t,s)=>this._getTileData(t,s),concurrency:15}),this._parseQueue=new W({tileInfoView:this._tileInfoView,process:(t,s)=>this._parseTileData(t,s),concurrency:8}),this.requestUpdate(),this._isTileHandlerReady=!0});this._tileHandler.spriteMosaic.then(t=>{this._vectorTileContainer.setStyleResources(t,this._tileHandler.glyphMosaic,this._styleRepository,this._tileInfoView),this.requestUpdate()}),this._tileHandlerAbortController=l,this._tileHandlerPromise=e}_stop(){if(!this._tileHandlerAbortController||!this._vectorTileContainer)return;const l=this._tileHandlerAbortController;l&&l.abort(),this._tileHandlerPromise=null,this._isTileHandlerReady=!1,this._fetchQueue=P(this._fetchQueue),this._parseQueue=P(this._parseQueue),this._tileManager=P(this._tileManager),this._vectorTileContainer.removeAllChildren()}async _getTileData(l,e){return this._tileHandler.fetchTileData(l,e)}async _parseTileData(l,e){return this._tileHandler.parseTileData(l,e)}async _applyStyleChanges(){this._isTileHandlerReady=!1,this._fetchQueue.pause(),this._parseQueue.pause(),this._fetchQueue.clear(),this._parseQueue.clear(),this._tileManager.clearCache();const l=this._styleChanges;try{await this._tileHandler.updateStyle(l)}catch(r){j.getLogger(this).error("error applying vector-tiles style update",r.message),this._fetchQueue.resume(),this._parseQueue.resume(),this._isTileHandlerReady=!0}const e=this._styleRepository,t=new Set;l.forEach(r=>{if(r.type!==b.LAYER_REMOVED)return;const n=r.data,a=e.getLayerById(n.layer);a&&t.add(a.uid)});const s=new Set;l.forEach(r=>{let n;switch(r.type){case b.PAINTER_CHANGED:e.setPaintProperties(r.data.layer,r.data.paint),n=r.data.layer;break;case b.LAYOUT_CHANGED:e.setLayoutProperties(r.data.layer,r.data.layout),n=r.data.layer;break;case b.LAYER_REMOVED:return void e.deleteStyleLayer(r.data.layer);case b.LAYER_CHANGED:e.setStyleLayer(r.data.layer,r.data.index),n=r.data.layer.id;break;case b.SPRITES_CHANGED:this._vectorTileContainer.setSpriteMosaic(this._tileHandler.setSpriteSource(r.data.spriteSource))}if(n){const a=e.getLayerById(n);a&&s.add(a.uid)}});const i=this._vectorTileContainer.children;if(t.size>0){const r=Array.from(t);this._vectorTileContainer.deleteStyleLayers(r);for(const n of i)n.deleteLayerData(r)}if(this._fetchQueue.resume(),this._parseQueue.resume(),s.size>0){const r=Array.from(s),n=[];for(const a of i){const o=this._updatingHandles.addPromise(this._fetchQueue.push(a.key).then(h=>this._parseQueue.push({key:a.key,data:h,styleLayerUIDs:r})).then(h=>a.setData(h)));n.push(o)}await Promise.all(n)}this._styleChanges=[],this._isTileHandlerReady=!0,this.requestUpdate()}async _loadStyle(){const{style:l}=this.layer.currentStyleInfo,e=Le(l);this._isTileHandlerReady=!1,this._fetchQueue.pause(),this._parseQueue.pause(),this._fetchQueue.clear(),this._parseQueue.clear(),this._styleRepository=new K(e),this._vectorTileContainer.destroy(),this._tileManager.clear(),this._tileHandlerAbortController.abort(),this._tileHandlerAbortController=new AbortController;const{signal:t}=this._tileHandlerAbortController;try{this._tileHandlerPromise=this._tileHandler.setStyle(this._styleRepository,e,this.layer.tileInfo.lods.length-1),await this._tileHandlerPromise}catch(r){if(!Y(r))throw r}if(t.aborted)return this._fetchQueue.resume(),this._parseQueue.resume(),this._isTileHandlerReady=!0,void this.requestUpdate();const s=await this._tileHandler.spriteMosaic,i=this._vectorTileContainer;this._tileInfoView=new Z(this.layer.tileInfo,this.layer.fullExtent),i.setStyleResources(s,this._tileHandler.glyphMosaic,this._styleRepository,this._tileInfoView),this._tileManager=new se({acquireTile:r=>this.acquireTile(r),releaseTile:r=>this.releaseTile(r),tileInfoView:this._tileInfoView},this._vectorTileContainer),this._fetchQueue.resume(),this._parseQueue.resume(),this._isTileHandlerReady=!0,this.requestUpdate()}_createVectorTile(l){const e=this._tileInfoView.getTileBounds(E(),l),t=this._tileInfoView.getTileResolution(l.level);return new Pe(l,t,e[0],e[3],512,512,this._styleRepository)}async _queryTile(l,e,t,s,i,r){if(i.layerData.size===0)return;const n=this._ensureTileIndex(i),a=this._tileInfoView.getTileBounds(E(),i.key,!0),o=ae*ne*((e.x-a[0])/(a[2]-a[0])),h=ae*ne*(1-(e.y-a[1])/(a[3]-a[1])),d=await n.queryAttributes(o,h,t,s,r);for(const c of d)c.graphic.geometry=this._tileToMapPoint(c.tilePoint,i.transforms.tileUnitsToPixels),l.push({type:"graphic",layer:this.layer,graphic:c.graphic,mapPoint:e.clone()});l.sort((c,u)=>u.graphic.origin.layerIndex-c.graphic.origin.layerIndex)}_tileToMapPoint(l,e){if(!l)return null;const t=l[0]*e[0]+l[1]*e[3]+e[6],s=l[0]*e[1]+l[1]*e[4]+e[7],i=this.view.state,r=[0,0];return i.toMap(r,[t,s]),new Ee({x:r[0],y:r[1],spatialReference:i.spatialReference})}_ensureTileIndex(l){let e=l.featureIndex;return e||(e=q.create(l.key,l.layerData,this._styleRepository,this._tileHandler,this.layer),l.featureIndex=e),e}};function We(l){if(l==null)return 0;switch(l.type){case"partial":return Object.keys(l.diff).length;case"complete":return Math.max(Object.keys(l.oldValue).length,Object.keys(l.newValue).length);case"collection":return Object.keys(l.added).length+Object.keys(l.changed).length+Object.keys(l.removed).length}}X([He()],V.prototype,"_isTileHandlerReady",void 0),V=X([xe("esri.views.2d.layers.VectorTileLayerView2D")],V);const nt=V;export{nt as default};
