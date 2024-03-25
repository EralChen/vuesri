import{i as V}from"./chunk-K3SbiC8A.js";import{gS as P,gT as $,gU as _,gV as k,gW as E}from"./chunk-xdbuWCSg.js";import"./chunk-t4TbIqUg.js";const F=96/72;class q{constructor(y){this._spatialReference=y,this._imageDataCanvas=null,this._cimResourceManager=new V}get _canvas(){return this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas")),this._imageDataCanvas}get resourceManager(){return this._cimResourceManager}async rasterizeCIMSymbolAsync(y,d,b,p,n,a,r,h,M){if(!y)return null;const{data:c}=y;if(!c||c.type!=="CIMSymbolReference"||!c.symbol)return null;const{symbol:C}=c;a||(a=P(C));const i=await $.resolveSymbolOverrides(c,d,this._spatialReference,n,a,r,h),l=this._cimResourceManager,w=[];_.fetchResources(i,l,w),_.fetchFonts(i,l,w),w.length>0&&await Promise.all(w);const{width:t,height:s}=b,R=D(a,t,s,p),e=_.getEnvelope(i,R,l);if(!e)return null;let o=1,S=0,v=0;switch(C.type){case"CIMPointSymbol":case"CIMTextSymbol":{let g=1;e.width>t&&(g=t/e.width);let u=1;e.height>s&&(u=s/e.height),p==="preview"&&(e.width<t&&(g=t/e.width),e.height<s&&(u=s/e.height)),o=Math.min(g,u),S=e.x+e.width/2,v=e.y+e.height/2}break;case"CIMLineSymbol":{(M||e.height>s)&&(o=s/e.height),v=e.y+e.height/2;const g=e.x*o+t/2,u=(e.x+e.width)*o+t/2,{paths:f}=R;f[0][0][0]-=g/o,f[0][2][0]-=(u-t)/o}break;case"CIMPolygonSymbol":{S=e.x+e.width/2,v=e.y+e.height/2;const g=e.x*o+t/2,u=(e.x+e.width)*o+t/2,f=e.y*o+s/2,I=(e.y+e.height)*o+s/2,{rings:m}=R;g<0&&(m[0][0][0]-=g,m[0][3][0]-=g,m[0][4][0]-=g),f<0&&(m[0][0][1]+=f,m[0][1][1]+=f,m[0][4][1]+=f),u>t&&(m[0][1][0]-=u-t,m[0][2][0]-=u-t),I>s&&(m[0][2][1]+=I-s,m[0][3][1]+=I-s)}}const z={type:"cim",data:{type:"CIMSymbolReference",symbol:i}};return this.rasterize(z,t,s,S,v,o,a,1,R)}rasterize(y,d,b,p,n,a,r,h=0,M=null){const{data:c}=y;if(!c||c.type!=="CIMSymbolReference"||!c.symbol)return null;const{symbol:C}=c,i=this._canvas,l=(window.devicePixelRatio||1)*F;i.width=d*l,i.height=b*l,r||(r=P(C)),M||(M=D(r,d,b,"legend")),i.width+=2*h,i.height+=2*h;const w=i.getContext("2d",{willReadFrequently:!0}),t=E.createIdentity();return t.translate(-p,-n),t.scale(a*l,-a*l),t.translate(d*l/2+h,b*l/2+h),w.clearRect(0,0,i.width,i.height),new k(w,this._cimResourceManager,t,!0).drawSymbol(C,M),w.getImageData(0,0,i.width,i.height)}}function D(x,y,d,b){const n=-y/2+1,a=y/2-1,r=d/2-1,h=-d/2+1;switch(x){case"esriGeometryPoint":return{x:0,y:0};case"esriGeometryPolyline":return{paths:[[[n,0],[0,0],[a,0]]]};default:return b==="legend"?{rings:[[[n,r],[a,0],[a,h],[n,h],[n,r]]]}:{rings:[[[n,r],[a,r],[a,h],[n,h],[n,r]]]}}}export{q as CIMSymbolRasterizer};
