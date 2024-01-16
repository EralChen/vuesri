import{_,$ as p,a1 as E,a2 as H,lU as J,a4 as C,lV as v,iw as D,lW as I,lX as $,lY as U,lZ as K,l_ as N,aj as tt,kG as L,ep as et,dQ as u,l$ as X,m0 as Y,kb as W,m1 as q,m2 as w,dO as R,m3 as st,m4 as it,kO as M,dL as S,h2 as ot,ed as rt,bO as at,m5 as ht,m6 as nt}from"./chunk-8J0p1hu6.js";import{t as lt}from"./chunk-UFNAsOXv.js";import{t as k,x as ct}from"./chunk-5foVPmTG.js";let c=class extends H{get startPosition(){return[this.startX,this.startY]}set startPosition(i){this._set("startX",i[0]),this._set("startY",i[1])}get endPosition(){return[this.endX,this.endY]}set endPosition(i){this._set("endX",i[0]),this._set("endY",i[1])}constructor(i){super(i),this.startX=0,this.startY=0,this.endX=0,this.endY=0,this.width=1,this.color=[0,0,0,.5],this.visible=!0,this.isDecoration=!0}get _strokeStyle(){const i=this.color;return`rgba(${i[0]}, ${i[1]}, ${i[2]}, ${i[3]})`}get _lineCap(){return"round"}render(){const{height:i,left:t,top:e,width:s,x1:a,x2:r,y1:m,y2:l}=this._calculateCoordinates(z),n=`stroke: ${this._strokeStyle}; stroke-width: ${this.width}; stroke-linecap: ${this._lineCap};`;return k("div",{classes:{"esri-line-overlay-item":!0},styles:{left:t+"px",top:e+"px",width:s+"px",height:i+"px",visibility:this.visible?"visible":"hidden"}},[k("svg",{width:s,height:i},[k("line",{x1:a,y1:m,x2:r,y2:l,style:n})])])}renderCanvas(i){if(!this.visible)return;i.strokeStyle=this._strokeStyle,i.lineWidth=this.width,i.lineCap=this._lineCap;const t=this._calculateCoordinates(z);i.beginPath(),i.moveTo(t.left+t.x1,t.top+t.y1),i.lineTo(t.left+t.x2,t.top+t.y2),i.stroke()}_calculateCoordinates(i){const t=Math.min(this.startX,this.endX),e=Math.max(this.startX,this.endX),s=Math.min(this.startY,this.endY),a=Math.max(this.startY,this.endY),r=this.width;return i.left=t-r,i.top=s-r,i.width=e-t+2*r,i.height=Math.max(20,a-s+2*r),i.x1=this.startX-t+r,i.y1=this.startY-s+r,i.x2=this.endX-t+r,i.y2=this.endY-s+r,i}};_([p()],c.prototype,"startX",void 0),_([p()],c.prototype,"startY",void 0),_([p()],c.prototype,"endX",void 0),_([p()],c.prototype,"endY",void 0),_([p()],c.prototype,"startPosition",null),_([p()],c.prototype,"endPosition",null),_([p()],c.prototype,"width",void 0),_([p()],c.prototype,"color",void 0),_([p()],c.prototype,"visible",void 0),_([p()],c.prototype,"isDecoration",void 0),_([p({readOnly:!0})],c.prototype,"_strokeStyle",null),c=_([E("esri.views.overlay.LineOverlayItem")],c);const z={left:0,top:0,width:0,height:0,x1:0,y1:0,x2:0,y2:0},dt=c;class gt extends lt{constructor(t){super(t),this._handles=new J,this._textItem=null,this._calloutItem=null,this._showCallout=!0,this._showText=!0,this._geometry=null,this._text="-",this._fontSize=14,this._backgroundColor=new C([0,0,0,.6]),this._calloutColor=new C([0,0,0,.5]),this._textColor=new C([255,255,255]),this._distance=25,this._anchor="right",this.updatePositionOnCameraMove=!0,this.applyProperties(t)}get geometry(){return this._geometry}set geometry(t){this._geometry=t,this.updateLabelPosition()}get isDecoration(){return this._isDecoration}set isDecoration(t){this._isDecoration=t,this._textItem&&(this._textItem.isDecoration=t),this._calloutItem&&(this._calloutItem.isDecoration=t)}get textItem(){return this._textItem}get text(){return this._text}set text(t){this._text=t,this.attached&&(this._textItem.text=this._text)}get fontSize(){return this._fontSize}set fontSize(t){this._fontSize=t,this.attached&&(this._textItem.fontSize=this._fontSize)}get backgroundColor(){return this._backgroundColor}set backgroundColor(t){this._backgroundColor=t,this.attached&&(this._textItem.backgroundColor=this._backgroundColor)}get calloutColor(){return this._calloutColor}set calloutColor(t){this._calloutColor=t,this.attached&&(this._calloutItem.color=this._calloutColor.toRgba())}get textColor(){return this._textColor}set textColor(t){this._textColor=t,this.attached&&(this._textItem.textColor=this._textColor)}get distance(){return this._distance}set distance(t){this._distance!==t&&(this._distance=t,this.updateLabelPosition())}get anchor(){return this._anchor}set anchor(t){this._anchor!==t&&(this._anchor=t,this.updateLabelPosition())}get _camera(){return this.view.state.cssCamera}overlaps(t){return!!this.attached&&this.textItem.visible&&t.textItem.visible&&!!this.view.overlay?.overlaps(this._textItem,t.textItem)}updateLabelPosition(){if(!this.attached)return;this._showText=!1,this._showCallout=!1;const{geometry:t,view:e,visible:s}=this;if(t!=null&&e._stage)switch(t.type){case"point":if(!this._computeLabelPositionFromPoint(t.point,x))break;if(t.callout){const a=this._camera,r=t.callout.distance;v(h,h,[0,t.callout.offset]),a.renderToScreen(h,x),D(o,0,1),I(o,o,r),v(o,o,h),a.renderToScreen(o,g),this._showCallout=this._updatePosition(x,g)}else this._textItem.position=[x[0],x[1]],this._textItem.anchor="center";this._showText=!0;break;case"corner":if(!this._computeLabelPositionFromCorner(t,this._distance,x,g))break;this._showCallout=this._updatePosition(x,g),this._showText=!0;break;case"segment":{if(!this._computeLabelPositionFromSegment(t,this._distance,this._anchor,x,g))break;this._showText=!0;const a=this._updatePosition(x,g);this._showCallout=t.callout!==!1&&a,this._showCallout||(this._textItem.anchor="center")}}this.updateVisibility(s)}_computeLabelPositionFromPoint(t,e){const s=this._camera;return s.projectToRenderScreen(t,h),!(h[2]<0||h[2]>1)&&(s.renderToScreen(h,e),!0)}_computeLabelPositionFromCorner(t,e,s,a){if(!t)return!1;const r=this._camera;return O(t.left,1,r,b),$(b,b),O(t.right,0,r,V),v(o,b,V),$(o,o),U(o,o),r.projectToRenderScreen(t.left.endRenderSpace,h),!(h[2]<0||h[2]>1)&&(r.renderToScreen(h,s),I(o,o,e),v(o,o,h),r.renderToScreen(o,a),!0)}_computeLabelPositionFromSegment(t,e,s,a,r){if(!t)return!1;const m=t.segment,l=this._camera;K(m.startRenderSpace,m.endRenderSpace,l,b),D(o,-b[1],b[0]);let n=!1;switch(s){case"top":n=o[1]<0;break;case"bottom":n=o[1]>0;break;case"left":n=o[0]>0;break;case"right":n=o[0]<0}if(n&&$(o,o),N(o)===0)switch(s){case"top":o[1]=1;break;case"bottom":o[1]=-1;break;case"left":o[0]=-1;break;case"right":o[0]=1}return m.eval(ut[t.sampleLocation],G),l.projectToRenderScreen(G,h),!(h[2]<0||h[2]>1)&&(l.renderToScreen(h,a),I(o,o,e),v(o,o,h),l.renderToScreen(o,r),!0)}_updatePosition(t,e){if(e){const s=e[0]-t[0],a=e[1]-t[1];return this._textItem.position=[e[0],e[1]],this._textItem.anchor=Math.abs(s)>Math.abs(a)?s>0?"left":"right":a>0?"top":"bottom",this._calloutItem.startPosition=[t[0],t[1]],this._calloutItem.endPosition=[e[0],e[1]],!0}return this._textItem.position=[t[0],t[1]],this._textItem.anchor="center",!1}createResources(){this._textItem=new ct({visible:!0,text:this._text,fontSize:this._fontSize,backgroundColor:this._backgroundColor,textColor:this._textColor,isDecoration:this._isDecoration}),this._calloutItem=new dt({color:this._calloutColor.toRgba(),visible:!0,width:2,isDecoration:this._isDecoration}),this.updateLabelPosition(),this.view.overlay?.items.addMany([this._textItem,this._calloutItem]),this.updatePositionOnCameraMove&&this._handles.add(tt(()=>this.view.state.camera,()=>this.updateLabelPosition()))}destroyResources(){this.view.overlay&&!this.view.overlay.destroyed&&this.view.overlay.items.removeMany([this._textItem,this._calloutItem]),this._handles.removeAll()}updateVisibility(t){this._textItem.visible=this._showText&&t,this._calloutItem.visible=this._showCallout&&t}}function O(i,t,e,s){i.eval(t,P,A),L(F,P,A),e.projectToRenderScreen(P,Q),e.projectToRenderScreen(F,Z),et(s,pt,_t),U(s,s)}function yt(i){switch(i){case"top":return"bottom";case"right":return"left";case"bottom":return"top";case"left":return"right"}}const P=u(),F=u(),A=u(),b=X(),V=X(),o=X(),G=u(),h=Y(),x=W(),g=W(),Q=Y(),_t=Q,Z=Y(),pt=Z,ut={start:0,center:.5,end:1};class B{constructor(t=u(),e=u()){this.startRenderSpace=t,this.endRenderSpace=e,this.type="euclidean"}eval(t,e,s){return q(e,this.startRenderSpace,this.endRenderSpace,t),s&&(w(s,this.endRenderSpace,this.startRenderSpace),R(s,s)),e}createRenderGeometry(t,e){const s=[],a=[],r=(l,n)=>{const d=T;w(d,l,t),s.push([d[0],d[1],d[2]]),a.push([n[0],n[1],n[2]])},m=e.worldUpAtPosition(this.eval(.5,y),st.get());return r(this.startRenderSpace,m),r(this.endRenderSpace,m),{points:s,normals:a}}static fromPositionAndVector(t,e,s=1){return it(y,e,s),L(y,t,y),new B(M(t),M(y))}}class vt{_projectIn(t,e){this._project?S(t,this.renderSpatialReference,e,this._pcpf):ot(e,t)}constructor(t,e,s){this.startRenderSpace=t,this.endRenderSpace=e,this.renderSpatialReference=s,this.type="geodesic",this._start=u(),this._end=u(),this._pcpf=rt(s),this._project=at(s,this._pcpf),this._projectIn(t,this._start),this._projectIn(e,this._end)}eval(t,e,s){if(this._project)if(s){const a=T;ht(this._start,this._end,t,e,a),L(f,e,a),S(e,this._pcpf,e,this.renderSpatialReference),S(f,this._pcpf,f,this.renderSpatialReference),w(s,f,e),R(s,s)}else nt(this._start,this._end,t,e),S(e,this._pcpf,e,this.renderSpatialReference);else q(e,this._start,this._end,t),s&&(w(s,this._end,this._start),R(s,s));return e}createRenderGeometry(t,e){const s=[],a=[],r=(l,n)=>{const d=f;w(d,l,t),s.push([d[0],d[1],d[2]]),a.push([n[0],n[1],n[2]])};for(let l=0;l<128;++l){const n=l/127,d=y,j=T;this.eval(n,d),e.worldUpAtPosition(d,j),r(d,j)}return{points:s,normals:a}}}const y=u(),T=u(),f=u();export{yt as C,vt as _,gt as g,B as m};
