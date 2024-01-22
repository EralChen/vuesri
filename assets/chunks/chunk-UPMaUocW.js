import{_ as r,a1 as v,i1 as $e,c7 as F,L as B,$ as l,bu as m,hZ as me,bY as fe,sg as be,iw as T,s as k,eD as H,sh as _e,dB as Q,br as Y,bM as ne,si as A,sj as le,a0 as oe,ew as R,a2 as Ie,sk as q,bE as se,el as Me,sl as ae,sm as Se,sn as Le,hV as ye,aI as je,gR as Ee,so as ce,bg as ge,sp as Oe,sq as He,sr as Te,ss as Ce,st as We,y as Ve,su as ze,eR as Ne,sv as Ae,sw as Be,V as K,e3 as Ue,c0 as Ge,aj as Fe,A as ke,dh as qe,b0 as De,b2 as Je,ce as Ke,hQ as Qe,mn as Ye,bz as Ze,bB as Xe,bj as et,bl as tt,h_ as nt,an as ot}from"./chunk-AGUgPSYp.js";import{h as $,j as xe,i as st}from"./chunk-QfOWZgm3.js";import{o as rt}from"./chunk-2Rydd198.js";let te=class extends $e{projectOrWarn(e,t){if(e==null)return e;const{geometry:n,pending:o}=F(e,t);return o?null:o||n?n:(B.getLogger(this).warn("geometry could not be projected to the spatial reference",{georeference:this,geometry:e,sourceSpatialReference:e.spatialReference,targetSpatialReference:t}),null)}};te=r([v("esri.layers.support.GeoreferenceBase")],te);const Z=te,X=Q(),p=R();let G=class extends Ie{constructor(){super(...arguments),this.sourcePoint=null,this.mapPoint=null}};r([l()],G.prototype,"sourcePoint",void 0),r([l({type:m})],G.prototype,"mapPoint",void 0),G=r([v("esri.layers.support.ControlPoint")],G);let x=class extends me(Z){constructor(e){super(e),this.controlPoints=null,this.height=0,this.type="control-points",this.width=0}readControlPoints(e,t){const n=fe.fromJSON(t.spatialReference),o=be(...t.coefficients,1);return e.map(s=>(T(p,s.x,s.y),$(p,p,o),{sourcePoint:s,mapPoint:new m({x:p[0],y:p[1],spatialReference:n})}))}writeControlPoints(e,t,n,o){if(this.transform!=null)e!=null&&f(e[0])&&(t.controlPoints=e.map(s=>{const i=s.sourcePoint;return{x:i.x,y:i.y}}),t.spatialReference=e[0].mapPoint.spatialReference.toJSON(),t.coefficients=this.transform.slice(0,8));else{const s=new k("web-document-write:invalid-georeference","Invalid 'controlPoints', 'width', 'height' configuration.",{layer:o?.layer,georeference:this});o?.messages?o.messages.push(s):B.getLogger(this).error(s.name,s.message)}}get coords(){if(this.controlPoints==null)return null;const e=this._updateTransform(X);if(e==null||!f(this.controlPoints[0]))return null;const t=this.controlPoints[0].mapPoint.spatialReference;return ut(e,this.width,this.height,t)}set coords(e){if(this.controlPoints==null||!f(this.controlPoints[0]))return;const t=this.controlPoints[0].mapPoint.spatialReference;if((e=this.projectOrWarn(e,t))==null)return;const{width:n,height:o}=this,{rings:[[s,i,a,c]]}=e,u={sourcePoint:H(0,o),mapPoint:new m({x:s[0],y:s[1],spatialReference:t})},h={sourcePoint:H(0,0),mapPoint:new m({x:i[0],y:i[1],spatialReference:t})},d={sourcePoint:H(n,0),mapPoint:new m({x:a[0],y:a[1],spatialReference:t})},g={sourcePoint:H(n,o),mapPoint:new m({x:c[0],y:c[1],spatialReference:t})};f(u)&&f(h)&&f(d)&&f(g)&&(ue(X,u,h,d,g),this.controlPoints=this.controlPoints.map(({sourcePoint:w})=>(T(p,w.x,w.y),$(p,p,X),{sourcePoint:w,mapPoint:new m({x:p[0],y:p[1],spatialReference:t})})))}get inverseTransform(){return this.transform==null?null:_e(Q(),this.transform)}get transform(){return this._updateTransform()}toMap(e){if(e==null||this.transform==null||this.controlPoints==null||!f(this.controlPoints[0]))return null;T(p,e.x,e.y);const t=this.controlPoints[0].mapPoint.spatialReference;return $(p,p,this.transform),new m({x:p[0],y:p[1],spatialReference:t})}toSource(e){if(e==null||this.inverseTransform==null||this.controlPoints==null||!f(this.controlPoints[0]))return null;const t=this.controlPoints[0].mapPoint.spatialReference;return e=e.normalize(),(e=F(e,t).geometry)==null?null:(T(p,e.x,e.y),$(p,p,this.inverseTransform),H(p[0],p[1]))}toSourceNormalized(e){const t=this.toSource(e);return t!=null&&(t.x/=this.width,t.y/=this.height),t}_updateTransform(e){const{controlPoints:t,width:n,height:o}=this;if(!(t!=null&&n>0&&o>0))return null;const[s,i,a,c]=t;if(!f(s))return null;const u=s.mapPoint.spatialReference,h=this._projectControlPoint(i,u),d=this._projectControlPoint(a,u),g=this._projectControlPoint(c,u);if(!h.valid||!d.valid||!g.valid||!f(h.controlPoint))return null;e==null&&(e=Q());let w=null;return w=f(d.controlPoint)&&f(g.controlPoint)?ue(e,s,h.controlPoint,d.controlPoint,g.controlPoint):f(d.controlPoint)?lt(e,s,h.controlPoint,d.controlPoint):it(e,s,h.controlPoint),w.every(we=>we===0)?null:w}_projectControlPoint(e,t){if(!f(e))return{valid:!0,controlPoint:e};const{sourcePoint:n,mapPoint:o}=e,{geometry:s,pending:i}=F(o,t);return i?{valid:!1,controlPoint:null}:i||s?{valid:!0,controlPoint:{sourcePoint:n,mapPoint:s}}:(B.getLogger(this).warn("map point could not be projected to the spatial reference",{georeference:this,controlPoint:e,sourceSpatialReference:o.spatialReference,targetSpatialReference:t}),{valid:!1,controlPoint:null})}};function f(e){return e?.sourcePoint!=null&&e.mapPoint!=null}r([l({type:[G],json:{write:{allowNull:!1,isRequired:!0}}})],x.prototype,"controlPoints",void 0),r([Y("controlPoints")],x.prototype,"readControlPoints",null),r([ne("controlPoints")],x.prototype,"writeControlPoints",null),r([l()],x.prototype,"coords",null),r([l({json:{write:!0}})],x.prototype,"height",void 0),r([l({readOnly:!0})],x.prototype,"inverseTransform",null),r([l({readOnly:!0})],x.prototype,"transform",null),r([l({json:{write:!0}})],x.prototype,"width",void 0),x=r([v("esri.layers.support.ControlPointsGeoreference")],x);const b=R(),_=R(),C=R(),E=R(),I=R(),M=R(),W=R(),O=R(),D=Math.PI/2;function S(e,t,n){T(e,n.sourcePoint.x,n.sourcePoint.y),T(t,n.mapPoint.x,n.mapPoint.y)}function it(e,t,n){return S(b,I,t),S(_,M,n),A(C,_,b,D),A(E,b,_,D),A(W,M,I,-D),A(O,I,M,-D),re(e,b,_,C,E,I,M,W,O)}function lt(e,t,n,o){return S(b,I,t),S(_,M,n),S(C,W,o),le(E,b,_,.5),A(E,C,E,Math.PI),le(O,I,M,.5),A(O,W,O,Math.PI),re(e,b,_,C,E,I,M,W,O)}function ue(e,t,n,o,s){return S(b,I,t),S(_,M,n),S(C,W,o),S(E,O,s),re(e,b,_,C,E,I,M,W,O)}const at=new Array(8).fill(0),ct=new Array(8).fill(0);function pe(e,t,n,o,s){return e[0]=t[0],e[1]=t[1],e[2]=n[0],e[3]=n[1],e[4]=o[0],e[5]=o[1],e[6]=s[0],e[7]=s[1],e}function re(e,t,n,o,s,i,a,c,u){return xe(e,pe(at,t,n,o,s),pe(ct,i,a,c,u))}function ut(e,t,n,o){const s=q(0,n),i=q(0,0),a=q(t,0),c=q(t,n);return $(s,s,e),$(i,i,e),$(a,a,e),$(c,c,e),new oe({rings:[[s,i,a,c,s]],spatialReference:o})}const Pe=x,U=R();let L=class extends Z{constructor(e){super(e),this.bottomLeft=null,this.bottomRight=null,this.topLeft=null,this.topRight=null,this.type="corners"}get coords(){let{topLeft:e,topRight:t,bottomLeft:n,bottomRight:o}=this;if(e==null||t==null||n==null||o==null)return null;const s=e.spatialReference;return t=this.projectOrWarn(t,s),n=this.projectOrWarn(n,s),o=this.projectOrWarn(o,s),t==null||n==null||o==null?null:new oe({rings:[[[n.x,n.y],[e.x,e.y],[t.x,t.y],[o.x,o.y],[n.x,n.y]]],spatialReference:s})}set coords(e){const{topLeft:t}=this;if(t==null)return;const n=t.spatialReference;if((e=this.projectOrWarn(e,n))==null)return;const{rings:[[o,s,i,a]]}=e;this.bottomLeft=new m({x:o[0],y:o[1],spatialReference:n}),this.topLeft=new m({x:s[0],y:s[1],spatialReference:n}),this.topRight=new m({x:i[0],y:i[1],spatialReference:n}),this.bottomRight=new m({x:a[0],y:a[1],spatialReference:n})}toSourceNormalized(e){const{topLeft:t,topRight:n,bottomRight:o,bottomLeft:s}=this;if(e==null||t==null||n==null||o==null||s==null)return null;const i=t.spatialReference;e=e.normalize();const a=F(e,i).geometry;if(a==null)return null;T(U,a.x,a.y);const c=xe(Q(),[t.x,t.y,s.x,s.y,n.x,n.y,o.x,o.y],[0,0,0,1,1,0,1,1]);return $(U,U,c),H(U[0],U[1])}};r([l()],L.prototype,"coords",null),r([l({type:m})],L.prototype,"bottomLeft",void 0),r([l({type:m})],L.prototype,"bottomRight",void 0),r([l({type:m})],L.prototype,"topLeft",void 0),r([l({type:m})],L.prototype,"topRight",void 0),L=r([v("esri.layers.support.CornersGeoreference")],L);const pt=L;let V=class extends Z{constructor(e){super(e),this.extent=null,this.rotation=0,this.type="extent-and-rotation"}get coords(){if(this.extent==null)return null;const{xmin:e,ymin:t,xmax:n,ymax:o,spatialReference:s}=this.extent;let i;if(this.rotation){const{x:a,y:c}=this.extent.center,u=ee(a,c,this.rotation);i=[u(e,t),u(e,o),u(n,o),u(n,t)],i.push(i[0])}else i=[[e,t],[e,o],[n,o],[n,t],[e,t]];return new oe({rings:[i],spatialReference:s})}set coords(e){if(e==null||this.extent==null)return;const t=this.extent.spatialReference;if(e=this.projectOrWarn(e,t),e?.extent==null)return;const{rings:[[n,o,s]],extent:{center:{x:i,y:a}}}=e,c=Me(Math.PI/2-Math.atan2(o[1]-n[1],o[0]-n[0])),u=ee(i,a,-c),[h,d]=u(n[0],n[1]),[g,w]=u(s[0],s[1]);this.extent=new se({xmin:h,ymin:d,xmax:g,ymax:w,spatialReference:t}),this.rotation=c}toSourceNormalized(e){const{extent:t,rotation:n}=this;if(e==null||t==null)return null;const{xmin:o,ymin:s,xmax:i,ymax:a,center:c,spatialReference:u}=t;e=e.normalize();const h=F(e,u).geometry;if(h==null)return null;let d=h.x,g=h.y;return n&&([d,g]=ee(c.x,c.y,-n)(d,g)),H(ae(d,o,i,0,1),ae(g,a,s,0,1))}};function ee(e,t,n){const o=Se(n),s=Math.cos(o),i=Math.sin(o);return(a,c)=>[s*(a-e)+i*(c-t)+e,s*(c-t)-i*(a-e)+t]}r([l()],V.prototype,"coords",null),r([l({type:se})],V.prototype,"extent",void 0),r([l({type:Number})],V.prototype,"rotation",void 0),V=r([v("esri.layers.support.ExtentAndRotationGeoreference")],V);const ht=V,dt={key:"type",base:Z,typeMap:{"control-points":Pe,corners:pt,"extent-and-rotation":ht}};let z=class extends Le(me(ye)){constructor(e){super(e),this.georeference=null,this.opacity=1}readGeoreference(e){return Pe.fromJSON(e)}get contentWidth(){return 0}get contentHeight(){return 0}toSource(e){const{georeference:t,contentWidth:n,contentHeight:o}=this;if(e==null||t==null||n===0||o===0)return null;const s=t.toSourceNormalized(e);return s==null?null:(s.x*=n,s.y*=o,s)}};r([l({types:dt,json:{write:!0}})],z.prototype,"georeference",void 0),r([Y("georeference")],z.prototype,"readGeoreference",null),r([l()],z.prototype,"opacity",void 0),z=r([v("esri.layers.support.MediaElementBase")],z);const ie=z;let P=class extends ie{constructor(t){super(t),this.animationOptions=null,this.content=null,this.image=null,this.type="image",this.image=null}load(){const t=this.image;if(typeof t=="string"){const n=je(t).then(o=>{this._set("content",o)});this.addResolvingPromise(n)}else if(t instanceof HTMLImageElement){const n=t.decode().then(()=>{this._set("content",t)});this.addResolvingPromise(n)}else t?this._set("content",t):this.addResolvingPromise(Promise.reject(new k("image-element:invalid-image-type","Invalid image type",{image:t})));return Promise.resolve(this)}get contentWidth(){return this.content==null?0:this.content instanceof HTMLImageElement?this.content.naturalWidth:this.content.width}get contentHeight(){return this.content==null?0:this.content instanceof HTMLImageElement?this.content.naturalHeight:this.content.height}readImage(t,n,o){return Ee(n.url,o)}writeImage(t,n,o,s){if(t==null)return;const i=s?.portalItem,a=s?.resources;if(!i||!a)return void(typeof t=="string"&&(n[o]=ce(t,s)));const c=typeof t!="string"||ge(t)||Oe(t)?null:t;if(c){if(He(c)==null)return void(n[o]=c);const u=ce(c,{...s,verifyItemRelativeUrls:s?.verifyItemRelativeUrls?{writtenUrls:s.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},Te.NO);if(i&&u&&!Ce(u))return a.toKeep.push({resource:i.resourceFromPath(u),compress:!1}),void(n[o]=u)}n[o]="<pending>",a.pendingOperations.push(mt(t).then(u=>{const h=yt(u,i);n[o]=h.itemRelativeUrl,a.toAdd.push({resource:h,content:{type:"blob",blob:u},compress:!1,finish:d=>{this.image=d.url}})}))}};r([l()],P.prototype,"animationOptions",void 0),r([l({readOnly:!0})],P.prototype,"content",void 0),r([l({readOnly:!0})],P.prototype,"contentWidth",null),r([l({readOnly:!0})],P.prototype,"contentHeight",null),r([l({json:{name:"url",type:String}})],P.prototype,"image",void 0),r([Y("image",["url"])],P.prototype,"readImage",null),r([ne("image")],P.prototype,"writeImage",null),r([l({readOnly:!0,json:{name:"mediaType"}})],P.prototype,"type",void 0),P=r([v("esri.layers.support.ImageElement")],P);const ve=P;async function mt(e){return typeof e=="string"?ge(e)?We(e):(await Ve(e,{responseType:"blob"})).data:new Promise(t=>ft(e).toBlob(t))}function ft(e){if(e instanceof HTMLCanvasElement)return e;const t=e instanceof HTMLImageElement?e.naturalWidth:e.width,n=e instanceof HTMLImageElement?e.naturalHeight:e.height,o=document.createElement("canvas"),s=o.getContext("2d");return o.width=t,o.height=n,e instanceof HTMLImageElement?s.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&s.putImageData(e,0,0),o}function yt(e,t){const n=ze(),o=`${Ne("media",n)}.${Ae({type:"blob",blob:e})}`;return t.resourceFromPath(o)}let j=class extends ie{constructor(e){super(e),this.autoplay=!0,this.content=null,this.type="video"}load(){const e=this.video;if(typeof e=="string"){const t=document.createElement("video");t.src=e,t.crossOrigin="anonymous",t.autoplay=!0,t.muted=!0,t.loop=!0,this.addResolvingPromise(this._loadVideo(t).then(()=>{this._set("content",t)}))}else e instanceof HTMLVideoElement?this.addResolvingPromise(this._loadVideo(e).then(()=>{this._set("content",e)})):this.addResolvingPromise(Promise.reject(new k("video-element:invalid-video-type","Invalid video type",{video:e})));return Promise.resolve(this)}get contentWidth(){return this.content?.videoWidth??0}get contentHeight(){return this.content?.videoHeight??0}set video(e){this.loadStatus==="not-loaded"?this._set("video",e):B.getLogger(this).error("#video","video cannot be changed after the element is loaded.")}_loadVideo(e){return new Promise((t,n)=>{const o=Be(e,"canplay",()=>{this.removeHandles("canplay"),this.autoplay?e.play().then(t,n):t()});this.addHandles(o,"canplay"),e.crossOrigin!=="anonymous"&&(e.crossOrigin="anonymous",e.src?.includes("blob:")||(e.src=e.src))})}};r([l()],j.prototype,"autoplay",void 0),r([l({readOnly:!0})],j.prototype,"content",void 0),r([l({readOnly:!0})],j.prototype,"contentWidth",null),r([l({readOnly:!0})],j.prototype,"contentHeight",null),r([l()],j.prototype,"video",null),j=r([v("esri.layers.support.VideoElement")],j);const Re=j,gt={key:"type",defaultKeyValue:"image",base:ie,typeMap:{image:ve,video:Re}},he=K.ofType(gt);let N=class extends ye.LoadableMixin(Ue(Ge.EventedAccessor)){constructor(e){super(e),this._index=new rt,this._elementViewsMap=new Map,this._elementsIndexes=new Map,this._elementsChangedHandler=t=>{for(const o of t.removed){const s=this._elementViewsMap.get(o);this._elementViewsMap.delete(o),this._index.delete(s),this.removeHandles(s),s.destroy(),this.notifyChange("fullExtent")}const{spatialReference:n}=this;for(const o of t.added){if(this._elementViewsMap.get(o))continue;const s=new st({spatialReference:n,element:o});this._elementViewsMap.set(o,s);const i=Fe(()=>s.coords,()=>this._updateIndexForElement(s,!1));this._updateIndexForElement(s,!0),this.addHandles(i,s)}this._elementsIndexes.clear(),this.elements.forEach((o,s)=>this._elementsIndexes.set(o,s)),this.emit("refresh")},this.elements=new he}async load(e){if(ke(e),!this.spatialReference){const t=this.elements.find(n=>n.georeference?.coords!=null);this._set("spatialReference",t?t.georeference.coords.spatialReference:fe.WGS84)}return this._elementsChangedHandler({added:this.elements.items,removed:[]}),this.addHandles(this.elements.on("change",this._elementsChangedHandler)),this}destroy(){this._index.clear(),this._elementViewsMap.clear(),this._elementsIndexes.clear()}set elements(e){this._set("elements",qe(e,this._get("elements"),he))}get fullExtent(){if(this.loadStatus==="not-loaded")return null;const e=this._index.fullBounds;return e==null?null:new se({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:this.spatialReference})}set spatialReference(e){this.loadStatus==="not-loaded"?this._set("spatialReference",e):B.getLogger(this).error("#spatialReference","spatialReference cannot be changed after the source is loaded.")}async queryElements(e,t){await this.load(),await De(e.spatialReference,this.spatialReference,null,t);const n=Je(e.spatialReference,this.spatialReference)?e:Ke(e,this.spatialReference);if(!n)return[];const o=n.normalize(),s=[];for(const i of o)this._index.forEachInBounds(Qe(i),({normalizedCoords:a,element:c})=>{a!=null&&Ye(i,a)&&s.push(c)});return s.sort((i,a)=>this._elementsIndexes.get(i)-this._elementsIndexes.get(a)),s}_updateIndexForElement(e,t){const n=e.normalizedBounds,o=this._index.has(e),s=n!=null;this._index.delete(e),s&&this._index.set(e,n),this.notifyChange("fullExtent"),t||(o!==s?this.emit("refresh"):this.emit("change",{element:e.element}))}};r([l()],N.prototype,"elements",null),r([l({readOnly:!0})],N.prototype,"fullExtent",null),r([l()],N.prototype,"spatialReference",null),N=r([v("esri.layers.support.LocalMediaElementSource")],N);const J=N;function de(e){return typeof e=="object"&&e!=null&&"type"in e}let y=class extends Ze(Xe(et(tt(ot)))){constructor(e){super(e),this.effectiveSource=null,this.copyright=null,this.operationalLayerType="MediaLayer",this.spatialReference=null,this.type="media",this.source=new J}load(e){const t=this.source;if(!t)return this.addResolvingPromise(Promise.reject(new k("media-layer:source-missing","Set 'MediaLayer.source' before loading the layer."))),Promise.resolve(this);const n=de(t)?new J({elements:new K([t])}):t;this._set("effectiveSource",n),this.spatialReference&&(n.spatialReference=this.spatialReference);const o=n.load(e).then(()=>{this.spatialReference=n.spatialReference});return this.addResolvingPromise(o),Promise.resolve(this)}destroy(){this.effectiveSource?.destroy(),this.source?.destroy()}get fullExtent(){return this.loaded?this.effectiveSource.fullExtent:null}set source(e){this.loadStatus==="not-loaded"?this._set("source",e):B.getLogger(this).error("#source","source cannot be changed after the layer is loaded.")}castSource(e){return e?Array.isArray(e)?new J({elements:new K(e)}):e instanceof K?new J({elements:e}):e:null}readSource(e,t,n){const o=t.mediaType==="image"?new ve:t.mediaType==="video"?new Re:null;return o?.read(t,n),o}writeSource(e,t,n,o){e&&de(e)&&e.type==="image"?e.write(t,o):o?.messages&&o?.messages?.push(new k("media-layer:unsupported-source","source must be an 'ImageElement'"))}};r([l({readOnly:!0})],y.prototype,"effectiveSource",void 0),r([l({type:String})],y.prototype,"copyright",void 0),r([l({readOnly:!0})],y.prototype,"fullExtent",null),r([l({type:["MediaLayer"]})],y.prototype,"operationalLayerType",void 0),r([l({type:["show","hide"]})],y.prototype,"listMode",void 0),r([l({nonNullable:!0,json:{write:{enabled:!0,allowNull:!1}}})],y.prototype,"source",null),r([nt("source")],y.prototype,"castSource",null),r([Y("source",["url"])],y.prototype,"readSource",null),r([ne("source")],y.prototype,"writeSource",null),r([l()],y.prototype,"spatialReference",void 0),r([l({readOnly:!0})],y.prototype,"type",void 0),y=r([v("esri.layers.MediaLayer")],y);const xt=y,$t=Object.freeze(Object.defineProperty({__proto__:null,default:xt},Symbol.toStringTag,{value:"Module"}));export{$t as M,J as S,ve as b,Re as d,xt as j,ht as x};