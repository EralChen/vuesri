import{jA as v,jB as S,jC as U,jD as F,jE as q,jF as W,dt as k,du as M,dv as b,cN as B,af as J,ag as K,di as Y,ai as $,L as y,as as Z,c8 as Q,aM as O,bE as T,jG as X,jH as ee,dl as N,jI as te,dm as ae,jJ as ie,jK as C,A as D,dp as L,dz as se,dA as H,hS as re,jL as x,dw as ne,jM as le,jN as oe,cR as he,_ as w,$ as R,a1 as de,cO as ce}from"./chunk-8J0p1hu6.js";import{n as ue}from"./chunk-4NKVl-EH.js";import{l as ge}from"./chunk-kg86AZUA.js";import{g as me}from"./chunk-xx4gdqG2.js";function fe(a,e,t){const s=v(a)/S(a),i={width:t,height:t};return s>1.0001?i.height=t/s:s<.9999&&(i.width=t*s),i.width=Math.round(i.width/(v(a)/v(e))),i.height=Math.round(i.height/(S(a)/S(e))),i}function z(a,e){return U(a,[[e[0],e[1],-1],[e[2],e[1],-1],[e[2],e[3],-1],[e[0],e[3],-1]])}function pe(a,e,t){if(!F(e,t))return z(a,t);const s=[e[1]-t[1],Math.min(e[3],t[3])-Math.max(e[1],t[1]),t[3]-e[3],123456],i=[e[0]-t[0],Math.min(e[2],t[2])-Math.max(e[0],t[0]),t[2]-e[2],123456],l=t[2]-t[0],o=t[3]-t[1],r=i[0]>0&&i[2]>0?3:2,h=s[0]>0&&s[2]>0?3:2,n=(h+1)*(r+1),c=q(3*n),u=W(2*n),d=new Array(6*(h*r-1));let E=0,A=0,j=0,g=0,f=0;for(let p=0;p<4;p++){const G=s[p];if(G<=0)continue;let I=0;for(let _=0;_<4;_++){const P=i[_];P<=0||(c[A++]=t[0]+I,c[A++]=t[1]+E,c[A++]=-1,u[j++]=I/l,u[j++]=E/o,_<3&&p<3&&(_!==1||p!==1)&&(d[f++]=g,d[f++]=g+1,d[f++]=g+r+1,d[f++]=g+1,d[f++]=g+r+2,d[f++]=g+r+1),g++,I+=P)}E+=G}const V=new Array(d.length);return new k(a,[[M.POSITION,new b(c,d,3,!0)],[M.NORMAL,new b(_e,V,3,!0)],[M.UV0,new b(u,d,2,!0)]])}const _e=[0,0,1];let m=class extends B(ue(ce)){constructor(){super(...arguments),this.drapeSourceType=J.RasterImage,this.updatePolicy=K.SYNC,this.fullExtentInLocalViewSpatialReference=null,this.maximumDataResolution=null,this._images=new Array,this._extents=new Array,this._overlays=new Array,this.updateWhenStationary=!0,this._drapeSourceRenderer=null,this.refreshDebounced=Y(async a=>{this.destroyed||await this._doRefresh(a).catch(e=>{$(e)||y.getLogger(this).error(e)})},2e3)}initialize(){this._drapeSourceRenderer=this.view.basemapTerrain.overlayManager.registerGeometryDrapeSource(this),this.addHandles(Z(()=>this.view.basemapTerrain.overlayManager.unregisterDrapeSource(this))),this.addResolvingPromise(ge(this).then(a=>this._set("fullExtentInLocalViewSpatialReference",a))),this._updatingHandles.add(()=>this.suspended,()=>this._suspendedChangeHandler()),this.addHandles(this.view.resourceController.scheduler.registerIdleStateCallbacks(()=>{this._isScaleRangeActive()&&this.notifyChange("suspended")},()=>{})),this._isScaleRangeLayer()&&this._updatingHandles.add(()=>this.layer.effectiveScaleRange,()=>this.notifyChange("suspended"))}destroy(){this.clear()}setDrapingExtent(a,e){this._spatialReference=e,a.forEach((t,s)=>{this._overlays[s]=t,this._updateImageExtent(t,s)})}_updateImageExtent(a,e){const t=this._clippedExtent(a.extent,we);if(t==null)return;const s=fe(a.extent,t,a.resolution);let i=a.pixelRatio*this.view.state.pixelRatio;const{layer:l}=this;if("imageMaxWidth"in l&&l.imageMaxWidth!=null||"imageMaxHeight"in l&&l.imageMaxHeight!=null){const r=l.imageMaxWidth,h=l.imageMaxHeight;if(s.width>r){const n=r/s.width;s.height=Math.floor(s.height*n),s.width=r,i*=n}if(s.height>h){const n=h/s.height;s.width=Math.floor(s.width*n),s.height=h,i*=n}}const o=this._extents[e];o&&Q(o.extent,t)&&this._imageSizeEquals(t,o.imageSize,s)||(this._extents[e]={extent:O(t),imageSize:s,pixelRatio:i},this.suspended||this._fetch(e).catch(r=>{$(r)||y.getLogger(this).error(r)}))}clear(){for(let a=0;a<this._images.length;a++)this._clearImage(a)}async doRefresh(){return this._doRefresh()}async _doRefresh(a){if(this.suspended)return;const e=[];for(let t=0;t<this._extents.length;t++)this._extents[t]&&e.push(this._fetch(t,a));await Promise.allSettled(e)}canResume(){if(!super.canResume())return!1;const a=this.layer;if(this._isScaleRangeActive()){const{minScale:e,maxScale:t}=a.effectiveScaleRange,s=this.view.scale;if(s<t||e>0&&s>e)return!1}return!0}async processResult(a,e,t){(e instanceof HTMLImageElement||e instanceof HTMLCanvasElement)&&(a.image=e)}findExtentInfoAt(a){for(const e of this._extents){const t=e.extent;if(new T(t[0],t[1],t[2],t[3],this._spatialReference).contains(a))return e}return null}getFetchOptions(){}async redraw(a,e){await X(this._images,async(t,s)=>{t&&(await a(t,e),await this._createStageObjects(s,t.image,e))})}_imageSizeEquals(a,e,t){if(!this.maximumDataResolution)return!1;const s=v(a)/this.maximumDataResolution.x,i=S(a)/this.maximumDataResolution.y,l=s/e.width,o=i/e.height,r=s/t.width,h=i/t.height,n=Math.abs(l-r),c=Math.abs(o-h),u=ee.TESTS_DISABLE_OPTIMIZATIONS?0:1.5;return n<=u&&c<=u}async _fetch(a,e){if(this.suspended)return;const t=this._extents[a],s=t.extent;this._images[a]||(this._images[a]={texture:null,material:null,renderGeometry:null,loadingPromise:null,loadingAbortController:null,image:null,pixelData:null,renderExtent:O(s)});const i=this._images[a];i.loadingAbortController=N(i.loadingAbortController);const l=new T(s[0],s[1],s[2],s[3],this._spatialReference);if(l.width===0||l.height===0)return void this._clearImage(a);const o=new AbortController;i.loadingAbortController=o,te(e,()=>o.abort());const r=o.signal,h=this._waitFetchReady(r).then(async()=>{const n={requestAsImageElement:!0,pixelRatio:this._overlays[a].pixelRatio,...this.getFetchOptions(),signal:r},{height:c,width:u}=t.imageSize;return this.layer.fetchImage(l,u,c,n)}).then(n=>{if(ae(r))throw y.getLogger(this).warnOnce("A call to fetchImage resolved even though the request was aborted. fetchImage should not resolve if options.signal.aborted is true."),ie();return this.processResult(i,n)}).then(()=>{C(i.renderExtent,s)});i.loadingPromise=h,await this._updatingHandles.addPromise(h.then(async()=>{D(r),await this._createStageObjects(a,i.image,r)}).catch(n=>{throw n&&!$(n)&&y.getLogger(this).error(n),n}).finally(()=>{h===i.loadingPromise&&(i.loadingPromise=null,i.loadingAbortController=null)}))}_clearImage(a){const e=this._images[a];if(e){e.renderGeometry!=null&&(this._drapeSourceRenderer.removeGeometries([e.renderGeometry],L.UPDATE),e.renderGeometry=null);const t=this.view._stage,s=e.texture;s?.unload(),t.remove(s),e.texture=null,t.remove(e.material),e.material=null,e.loadingAbortController=N(e.loadingAbortController),e.loadingPromise=null,e.image=null,e.pixelData=null}}async _createStageObjects(a,e,t){const s=this.view._stage,i=this._images[a],l=()=>{i.texture?.unload(),s.remove(i.texture),i.texture=null,i.renderGeometry&&(this._drapeSourceRenderer.removeGeometries([i.renderGeometry],L.UPDATE),i.renderGeometry=null)};if(e){const o=new se(e,{width:e.width,height:e.height,preMultiplyAlpha:!0,wrap:{s:H.CLAMP_TO_EDGE,t:H.CLAMP_TO_EDGE}});let r;if(await re(this._images[a===x.INNER?x.OUTER:x.INNER].loadingPromise),D(t),l(),await s.schedule(()=>o.load(s.renderView.renderingContext),t),s.add(o),i.texture=o,i.material==null?(i.material=new me({transparent:!0,textureId:o.id}),s.add(i.material)):i.material.setParameters({textureId:o.id}),a===x.INNER)r=z(i.material,i.renderExtent);else{const h=this._images[0].renderExtent;if(!h)return void l();r=pe(i.material,h,i.renderExtent)}i.renderGeometry=new ne(r),i.renderGeometry.localOrigin=this._overlays[a].renderLocalOrigin,this._drapeSourceRenderer.addGeometries([i.renderGeometry],L.UPDATE)}else l(),s.remove(i.material),i.material=null}_isScaleRangeLayer(){return"effectiveScaleRange"in this.layer}_isScaleRangeActive(){const a=this.layer;if(!this._isScaleRangeLayer())return!1;const{minScale:e,maxScale:t}=a.effectiveScaleRange;return le(e,t)}_clippedExtent(a,e){if(this.view.viewingMode!=="local")return C(e,a);const t=this.view.basemapTerrain;return t.ready?oe(a,t.extent,e):C(e,a)}_suspendedChangeHandler(){this.suspended?this.clear():this.refreshDebounced()}async _waitFetchReady(a){await he(()=>this.view.stationary,a),D(a)}};w([R()],m.prototype,"layer",void 0),w([R()],m.prototype,"suspended",void 0),w([R({readOnly:!0})],m.prototype,"fullExtentInLocalViewSpatialReference",void 0),w([R()],m.prototype,"updating",void 0),m=w([de("esri.views.3d.layers.DynamicLayerView3D")],m);const Se=m,we=O();export{Se as N};
