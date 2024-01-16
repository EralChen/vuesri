import{f as yt,s as bt,m as V,z as Mt,Z as H,x as Lt}from"./chunk-5jV4UYQF.js";import{i as L,k as Ct}from"./chunk-fYOUoC4P.js";import{mb as Et,dP as Vt,dQ as O,ri as Ot,B2 as zt,aP as Dt,vi as at,vf as dt,vj as It,b2 as Rt,B3 as Nt,c0 as Pt,_ as a,$ as c,a1 as f,s2 as s,uP as Ft,s1 as F,s0 as ht,cL as S,vu as N,aj as P,d2 as St,B4 as wt,B5 as At,B6 as Ht,B7 as Ut,B8 as Wt,a2 as Bt,B9 as qt,ar as A,ad as ft,uO as Zt}from"./chunk-8J0p1hu6.js";import{geodesicLength as xt}from"./chunk-S7WB2n_r.js";import{_ as E}from"./chunk-EUQwHdIv.js";import{t as Kt}from"./chunk-uBdPJ80n.js";import{T as lt,k as jt,q as mt,x as Gt,F as Qt,S as Xt,e as vt,U as Yt}from"./chunk-1oUrF1Fd.js";function Jt({hasZ:n,spatialReference:t,paths:e},i,o=0){const l=Et(t);if(l==null)return!1;const r=n?h=>h:h=>Vt(te,h[0],h[1],o);for(const h of e){const M=[];for(const C of h){const x=[0,0,o];l(r(C),0,x,0),M.push(x)}i.push(M)}return!0}const te=O();function kt(n,t,e,i,...o){return Ot(n)&&zt(n)?t.apply(void 0,o):Dt(n)?e.apply(void 0,o):i.apply(void 0,o)}function Tt(n){const{spatialReference:t}=n;return kt(t,se,oe,ae,n)}function rt(n,t){if(!Rt(n.spatialReference,t.spatialReference))return null;const{spatialReference:e}=n;return z[0]=n.x,z[1]=n.y,z[2]=n.hasZ?n.z:0,D[0]=t.x,D[1]=t.y,D[2]=t.hasZ?t.z:0,ct(z,D,e)}function ct(n,t,e){return kt(e,ee,ne,ie,n,t,e)}function ee(n,t,e){return L(at(ut,n,t,e).distance,"meters")}function ne(n,t,e){return L(xt(le(n,t,e),"meters"),"meters")}function ie(n,t,e){return dt(n,e,_t)&&dt(t,e,gt)?L(at(ut,_t,gt).distance,"meters"):null}function se(n){return L(Nt([n],"meters")[0],"meters")}function oe(n){return L(xt(n,"meters"),"meters")}function ae(n){const t=[];if(!Jt(n,t))return null;let e=0;for(const i of t){let o=0;for(let l=1;l<i.length;++l)o+=at(ut,i[l-1],i[l]).distance;e+=o}return L(e,"meters")}function le(n,t,e){return{type:"polyline",spatialReference:e,paths:[[[...n],[...t]]]}}const ut=new It,z=O(),D=O(),_t=O(),gt=O();function He(n,t){return T(bt,Tt,yt,t,n)}function Ue(n,t,e){return T(Mt,rt,V,e,n,t)}function We(n,t,e,i){return T(Lt,ct,H,i,n,t,e)}function Be(n,t,e){return T(V,rt,V,e,n,t)}function qe(n,t,e,i){return T(H,ct,H,i,n,t,e)}function Ze(n){return T(bt,Tt,yt,"on-the-ground",n)}function Ke(n,t){return T(V,rt,V,"on-the-ground",n,t)}function T(n,t,e,i,...o){if(i==="on-the-ground"){const l=t.apply(void 0,o);return l??e.apply(void 0,o)}return n.apply(void 0,o)}let y=class extends Pt.EventedAccessor{constructor(t){super(t),this._mode="feedback",this.helpMessage=void 0,this.viewType=void 0}get mode(){return this._mode}get allFields(){return[]}get editableFields(){return this.allFields.filter(t=>!t.readOnly)}enterInputMode(){this._mode="input",this.emit("focus")}exitInputMode(){this._mode="feedback"}unlockAllFields(){this.allFields.forEach(t=>t.unlock())}};a([c()],y.prototype,"tooltipOptions",void 0),a([c()],y.prototype,"_mode",void 0),a([c()],y.prototype,"mode",null),a([c()],y.prototype,"helpMessage",void 0),a([c()],y.prototype,"viewType",void 0),a([c()],y.prototype,"allFields",null),a([c()],y.prototype,"editableFields",null),y=a([f("esri.views.interactive.tooltip.SketchTooltipInfo")],y);const w="esri-tooltip",p=`${w}-content`,re=`${w}-content--input`,ce=`${w}-content__header`,ue=`${w}-table`,pe=`${w}-help-message`;function m({className:n,helpMessage:t,mode:e,onDiscard:i,onkeydown:o},...l){const r=l.flat(10).filter(h=>!!h);return s("div",{class:Ft(n,p,e==="input"&&re),onkeydown:o},e==="input"?s("div",{class:ce,key:"tooltip-content-header"},s("calcite-button",{appearance:"transparent",iconFlipRtl:"both",iconStart:"chevron-left",kind:"neutral",onclick:i,scale:"s",tabIndex:-1})):null,r.length>0?s("div",{class:ue},...r):null,t?s("div",{class:pe,key:"help-message"},t):null)}const I=`${w}-field`,R={base:I,inputMode:`${I}--input`,title:`${I}__title`,value:`${I}__value`};let u=class extends F{constructor(){super(...arguments),this.hidden=!1,this.mode="feedback"}render(){return s("div",{class:this.classes({[R.base]:!0,[R.inputMode]:this.mode==="input"})},s("div",{class:R.title},this.title),s("div",{class:R.value},this.value))}};a([c()],u.prototype,"hidden",void 0),a([c()],u.prototype,"mode",void 0),a([c()],u.prototype,"title",void 0),a([c()],u.prototype,"value",void 0),u=a([f("esri.views.interactive.tooltip.TooltipField")],u);const de={base:`${w}-value-by-value`};let b=class extends F{constructor(){super(...arguments),this.divider="×"}render(){return s("div",{class:de.base},s("span",null,this.left),s("span",null,this.divider),s("span",null,this.right))}};a([c()],b.prototype,"left",void 0),a([c()],b.prototype,"divider",void 0),a([c()],b.prototype,"right",void 0),b=a([f("esri.views.interactive.tooltip.ValueByValue")],b);let d=class extends F{constructor(){super(...arguments),this._getFormatters=Kt((n,t)=>({angle:e=>lt(e,e.rotationType),area:(e,i)=>jt(n,e,i??t.area),length:(e,i,o)=>mt(n,e,i??t.length,o),relativeLength:(e,i)=>Gt(n,e,i??t.length),totalLength:(e,i)=>mt(n,e,i??t.length),verticalLength:(e,i)=>Qt(n,e,i??t.length),relativeVerticalLength:(e,i)=>Xt(n,e,i??t.verticalLength),relativeOrientation:e=>S(e,{maximumFractionDigits:2,minimumFractionDigits:2,signDisplay:"exceptZero"}),percentage:e=>S(e.value,{style:"percent"}),scale:e=>S(e,{style:"percent",maximumFractionDigits:0})})),this._formatScale=n=>this._formatters.scale(n),this._formatRelativeOrientation=n=>this._formatters.relativeOrientation(n),this._formatLength=(n,t,e)=>this._formatters.length(n,t,e),this._formatRelativeLength=(n,t)=>this._formatters.relativeLength(n,t),this._formatVerticalLength=(n,t)=>this._formatters.verticalLength(n,t),this._formatRelativeVerticalLength=(n,t)=>this._formatters.relativeVerticalLength(n,t),this._formatArea=(n,t)=>this._formatters.area(n,t),this._formatPercentage=n=>this._formatters.percentage(n),this._onDiscard=()=>{this._exitInputMode()},this._onCommit=(n,t)=>{if(t==="commit-and-exit")return this._exitInputMode();const e=this._getFocusableInputs(),i=e.length,o=e.indexOf(n);if(o===-1)return this._exitInputMode();const l=((o+(t==="commit-and-next"?1:-1))%i+i)%i;e.at(l)?.focus()},this._handleTab=n=>{if(n.code!==N.next)return;const t=this._getFocusableInputs();if(t.length===0)return;const e=t.at(0),i=t.at(-1);e&&i&&(n.shiftKey?document.activeElement===e&&(n.preventDefault(),i.focus()):document.activeElement===i&&(n.preventDefault(),e.focus()))}}get _displayUnits(){const n=vt(this.tooltip.view);return{length:n,verticalLength:n,area:n,angle:"degrees"}}get _inputUnitInfos(){const n=this._messagesUnits,t=h=>({unit:h,abbreviation:Ct(n,h,"abbr")}),e=vt(this.tooltip.view),i=At(e),o=Ht(e),l=Ut(e),r="degrees";return{length:t(i),relativeLength:t(i),verticalLength:t(o),relativeVerticalLength:t(o),area:t(l),orientation:t(r),rotation:t(r)}}get _formatters(){return this._getFormatters(this._messagesUnits,this._displayUnits)}get fieldContext(){return{formatters:this._formatters,inputUnitInfos:this._inputUnitInfos,messages:this._messagesTooltip,onCommit:this._onCommit,onDiscard:this._onDiscard}}initialize(){let n=new AbortController;this.addHandles([P(()=>this.info.mode,t=>{this.tooltip.positionMode=t==="input"?"fixed":"follow-cursor"}),St(()=>this.info,"focus",()=>{n?.abort();const{signal:t}=n=new AbortController;requestAnimationFrame(()=>{t.aborted||this._getFocusableInputs().at(0)?.focus()})})])}loadDependencies(){return wt({button:()=>E(()=>import("./chunk-T1QY4g1u.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14])),icon:()=>E(()=>import("./chunk-MZ3tDWIL.js"),__vite__mapDeps([15,12,1,2,3,10])),input:()=>E(()=>import("./chunk-h6xRFwoD.js"),__vite__mapDeps([16,17,1,2,3,4,5,9,6,7,8,10,11,12]))})}_getHelpMessage(n){const{info:t}=this,{tooltipOptions:e,helpMessage:i,viewType:o}=t,l=e?.visibleElements?.helpMessage,r=n??i,h=o==="3d"?"helpMessages3d":"helpMessages2d";return l&&r?this._messagesTooltip?.sketch?.[h]?.[r]:void 0}_exitInputMode(){this.info.exitInputMode(),document.querySelector(".esri-view-surface").focus()}_getFocusableInputs(){return Array.from(this.domNode?.querySelectorAll("input:not([disabled])")??[])}};a([ht("esri/core/t9n/Units"),c()],d.prototype,"_messagesUnits",void 0),a([ht("esri/views/interactive/tooltip/t9n/Tooltip"),c()],d.prototype,"_messagesTooltip",void 0),a([c()],d.prototype,"info",void 0),a([c()],d.prototype,"tooltip",void 0),a([c()],d.prototype,"_displayUnits",null),a([c()],d.prototype,"_inputUnitInfos",null),a([c()],d.prototype,"_formatters",null),a([c()],d.prototype,"fieldContext",null),d=a([f("esri.views.interactive.tooltip.content.TooltipContent")],d);const he={base:`${p} ${`${p}--draw-rectangle`}`};let U=class extends d{render(){const{area:t,radius:e,xSize:i,ySize:o,tooltipOptions:l}=this.info,{visibleElements:r}=l,h=this._messagesTooltip.sketch;return s(m,{className:he.base,helpMessage:this._getHelpMessage()},r.radius&&e!=null?s(u,{title:h.radius,value:this._formatLength(e)}):null,r.size&&i!=null&&o!=null?s(u,{title:h.size,value:s(b,{left:this._formatLength(i),right:this._formatLength(o)})}):null,r.area?s(u,{title:h.area,value:this._formatArea(t)}):null)}};U=a([f("esri.views.interactive.tooltip.content.TooltipContentDrawCircle")],U);const fe={base:`${p}--draw-mesh`};let W=class extends d{render(){const{elevation:t,tooltipOptions:e}=this.info,{visibleElements:i}=e,o=this._messagesTooltip.sketch;return s(m,{className:fe.base,helpMessage:this._getHelpMessage()},i.elevation?s(u,{title:o.elevation,value:this._formatVerticalLength(t.actual)}):null)}};W=a([f("esri.views.interactive.tooltip.content.TooltipContentDrawMesh")],W);const v=`${w}-editable-field`,_={base:v,inputMode:`${v}--input`,locked:`${v}--locked`,title:`${v}__title`,titleContent:`${v}__title__content`,value:`${v}__value`,valueContent:`${v}__value__content`,input:`${v}__input`,inputDisabled:`${v}__input--disabled`,inputReadOnly:`${v}__input--read-only`,inputSuffix:`${v}__input-suffix`,button:`${v}__button`};let g=class extends F{constructor(){super(...arguments),this._input=null,this._afterInputCreate=t=>{this._input=t},this._selectText=()=>{requestAnimationFrame(()=>{this._input?.select()})},this._onKeyDown=t=>{t.key===N.discard&&this._discard()},this._onInputKeyDown=t=>{switch(t.key){case N.commit:return this._commit({type:"commit-and-exit",allowLockingCurrentValue:!0});case N.next:return t.stopPropagation(),this._commit({type:t.shiftKey?"commit-and-previous":"commit-and-next",allowLockingCurrentValue:!1})}},this._onInput=t=>{this.field.inputValue=t.target.value},this._onLockClick=()=>{const{field:t}=this;t.locked?t.unlock():this._lock()}}loadDependencies(){return wt({button:()=>E(()=>import("./chunk-T1QY4g1u.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14])),icon:()=>E(()=>import("./chunk-MZ3tDWIL.js"),__vite__mapDeps([15,12,1,2,3,10]))})}render(){const{mode:t,field:e}=this,i=t==="input",{locked:o}=e;return s("div",{class:this.classes({[_.base]:!0,[_.inputMode]:t==="input",[_.locked]:o})},s("div",{class:_.title,key:"title"},s("div",{class:_.titleContent,key:"title-content"},this._title,o&&!i?s("calcite-icon",{icon:"lock",key:"icon",scale:"s"}):null)),s("div",{class:_.value,key:"value"},i?this._renderInput():s("span",{key:"formatted-value"},this._feedbackValue)))}get _initialValue(){const{field:t}=this;return t.actual!=null?t.toInputUnits(t.actual,this.context).value:null}get _feedbackValue(){const{context:t,field:e}=this,{actual:i,committed:o,format:l}=e;return o!=null?l(o,t):i!=null?l(i,t):""}get _displayValue(){const{field:t}=this,{inputValue:e,committed:i}=t;return e??(i!=null?this._toString(t.toInputUnits(i,this.context).value):this._toString(this._initialValue))}get _suffix(){const{suffix:t}=this.field;return typeof t=="string"?t:t(this.context)}get _title(){const{title:t}=this.field;return typeof t=="string"?t:t(this.context)}_renderInput(){const{disabled:t,locked:e,readOnly:i}=this.field;return s("div",{class:_.valueContent,key:"input-container",onkeydown:this._onKeyDown},s("input",{afterCreate:this._afterInputCreate,class:this.classes({[_.input]:!0,[_.inputDisabled]:t,[_.inputReadOnly]:i}),disabled:t||i,onfocus:this._selectText,oninput:this._onInput,onkeydown:this._onInputKeyDown,readOnly:i,type:"text",value:this._displayValue}),s("div",{class:_.inputSuffix,key:"suffix"},this._suffix),i?void 0:s("calcite-button",{appearance:"transparent",class:_.button,disabled:t,iconStart:e?"lock":"unlock",kind:"neutral",onclick:this._onLockClick,scale:"s",tabIndex:-1}))}_commit({type:t,allowLockingCurrentValue:e}){const{_input:i,field:o}=this;i&&(o.locked&&o.inputValue===""?o.unlock():(e||o.inputValue!=null)&&this._lock(),this.context.onCommit(i,t))}_discard(){this._input&&(this.field.inputValue=null,this.context.onDiscard(this._input))}_lock(){const{field:t}=this,e=this._parseNumber(t.inputValue),i=e!=null?t.createQuantity(e,this.context):null;t.lock(i)}_parseNumber(t){if(t==null)return null;const e=parseFloat(t);return isNaN(e)||!isFinite(e)?null:e}_toString(t){return t!=null?t.toFixed(3):"0"}};a([c()],g.prototype,"field",void 0),a([c()],g.prototype,"context",void 0),a([c()],g.prototype,"mode",void 0),a([c()],g.prototype,"_initialValue",null),a([c()],g.prototype,"_feedbackValue",null),a([c()],g.prototype,"_input",void 0),a([c()],g.prototype,"_displayValue",null),a([c()],g.prototype,"_suffix",null),a([c()],g.prototype,"_title",null),g=a([f("esri.views.interactive.tooltip.TooltipEditableField")],g);function pt(n){const t=n.fields.filter(e=>e!=null&&!e.hidden);return t.length===0?null:s(Wt,null,t.map(e=>s(g,{context:n.context,field:e,key:e.id,mode:n.mode})))}const me={base:`${p}--draw-point`};let B=class extends d{render(){const{fieldContext:t,info:e}=this,{mode:i,elevation:o,tooltipOptions:l}=e,{visibleElements:r}=l;return s(m,{className:me.base,helpMessage:this._getHelpMessage(),mode:i,onkeydown:this._handleTab,onDiscard:this._onDiscard},s(pt,{context:t,fields:[r.elevation?o:void 0],mode:i}))}};B=a([f("esri.views.interactive.tooltip.content.TooltipContentDrawPoint")],B);const ve={base:`${p} ${`${p}--draw-polygon`}`};let q=class extends d{render(){const{fieldContext:t,info:e}=this,{area:i,distance:o,elevation:l,mode:r,orientation:h,tooltipOptions:M,viewType:C}=e,{inputEnabled:x,visibleElements:$}=M;return s(m,{className:ve.base,helpMessage:this._getHelpMessage(),mode:r,onkeydown:this._handleTab,onDiscard:this._onDiscard},s(pt,{context:t,fields:[x&&$.orientation?h:void 0,x&&$.distance?o:void 0,$.elevation&&C!=="2d"?l:void 0,$.area?i:void 0],mode:r}))}};q=a([f("esri.views.interactive.tooltip.content.TooltipContentDrawPolygon")],q);const _e={base:`${p} ${`${p}--draw-polyline`}`};let Z=class extends d{render(){const{fieldContext:t,info:e}=this,{distance:i,elevation:o,mode:l,orientation:r,tooltipOptions:h,totalLength:M,viewType:C}=e,{inputEnabled:x,visibleElements:$}=h;return s(m,{className:_e.base,helpMessage:this._getHelpMessage(),mode:l,onkeydown:this._handleTab,onDiscard:this._onDiscard},s(pt,{context:t,fields:[x&&$.orientation?r:void 0,x&&$.distance?i:void 0,$.elevation&&C!=="2d"?o:void 0,$.totalLength?M:void 0],mode:l}))}};Z=a([f("esri.views.interactive.tooltip.content.TooltipContentDrawPolyline")],Z);const ge={base:`${p} ${`${p}--draw-rectangle`}`};let K=class extends d{render(){const{area:t,xSize:e,ySize:i,tooltipOptions:o}=this.info,{visibleElements:l}=o,r=this._messagesTooltip.sketch;return s(m,{className:ge.base,helpMessage:this._getHelpMessage()},l.size&&e!=null&&i!=null?s(u,{title:r.size,value:s(b,{left:this._formatLength(e),right:this._formatLength(i)})}):null,l.area?s(u,{title:r.area,value:this._formatArea(t)}):null)}};K=a([f("esri.views.interactive.tooltip.content.TooltipContentDrawRectangle")],K);const $e={base:`${p} ${`${p}--extent-rotate`}`};let j=class extends d{render(){const{angle:t,tooltipOptions:e}=this.info,{visibleElements:i}=e,o=this._messagesTooltip.sketch;return s(m,{className:$e.base,helpMessage:this._getHelpMessage()},i.rotation?s(u,{title:o.rotation,value:this._formatRelativeOrientation(t)}):null)}};j=a([f("esri.views.interactive.tooltip.content.TooltipContentExtentRotate")],j);const ye={base:`${p} ${`${p}--extent-scale`}`};let G=class extends d{render(){const t=this.info,{visibleElements:e}=t.tooltipOptions,i=this._messagesTooltip.sketch;return s(m,{className:ye.base,helpMessage:this._getHelpMessage()},e.size?s(u,{title:i.size,value:s(b,{left:this._formatLength(t.xSize),right:this._formatLength(t.ySize)})}):null,e.scale?s(u,{title:i.scale,value:s(b,{left:this._formatScale(t.xScale),right:this._formatScale(t.yScale)})}):null)}};G=a([f("esri.views.interactive.tooltip.content.TooltipContentExtentScale")],G);const be={base:`${p} ${`${p}--reshape-edge-offset`}`};let Q=class extends d{render(){const{area:t,distance:e,totalLength:i,tooltipOptions:o}=this.info,{visibleElements:l}=o,r=this._messagesTooltip.sketch;return s(m,{className:be.base,helpMessage:this._getHelpMessage()},l.distance?s(u,{title:r.distance,value:this._formatRelativeLength(e)}):null,l.area&&t!=null?s(u,{title:r.area,value:this._formatArea(t)}):null,l.totalLength&&i!=null?s(u,{title:r.totalLength,value:this._formatLength(i)}):null)}};Q=a([f("esri.views.interactive.tooltip.content.TooltipContentReshapeEdgeOffset")],Q);const we={base:`${p} ${`${p}--transform-absolute`}`};let X=class extends d{render(){const{info:t}=this,{visibleElements:e}=t.tooltipOptions,i=this._messagesTooltip.sketch;return s(m,{className:we.base,helpMessage:this._getHelpMessage()},e.orientation&&t.orientation!=null?s(u,{key:"orientation",title:i.orientation,value:lt(t.orientation,t.rotationType,t.orientationPrecision)}):null,e.size&&t.size!=null?s(u,{key:"size",title:i.size,value:this._formatLength(t.size,t.sizeUnit,t.sizePrecision)}):null)}};X=a([f("esri.views.interactive.tooltip.content.TooltipContentTransformAbsolute")],X);const xe={base:`${p} ${`${p}--transform-rotate`}`};let Y=class extends d{render(){const{info:t}=this,{visibleElements:e}=t.tooltipOptions,i=this._messagesTooltip.sketch;return s(m,{className:xe.base,helpMessage:this._getHelpMessage()},e.rotation&&t.rotation!=null?s(u,{key:"rotation",title:i.rotation,value:Yt(t.rotation,t.rotationType,t.rotationPrecision)}):null,e.orientation&&t.orientation!=null?s(u,{key:"orientation",title:i.orientation,value:lt(t.orientation,t.rotationType,t.orientationPrecision)}):null)}};Y=a([f("esri.views.interactive.tooltip.content.TooltipContentTransformRotate")],Y);const ke={base:`${p} ${`${p}--transform-scale`}`};let J=class extends d{render(){const{info:t}=this,{visibleElements:e}=t.tooltipOptions,i=this._messagesTooltip.sketch;return s(m,{className:ke.base,helpMessage:this._getHelpMessage()},e.scale&&t.scale!=null?s(u,{key:"scale",title:i.scale,value:this._formatPercentage(t.scale)}):null,e.size&&t.size!=null?s(u,{key:"size",title:i.size,value:this._formatLength(t.size,t.sizeUnit,t.sizePrecision)}):null)}};J=a([f("esri.views.interactive.tooltip.content.TooltipContentTransformScale")],J);const Te={base:`${p} ${`${p}--translate-graphic`}`};let tt=class extends d{render(){const{info:t}=this,{visibleElements:e}=t.tooltipOptions,i=this._messagesTooltip.sketch;return s(m,{className:Te.base,helpMessage:this._getHelpMessage()},e.distance?s(u,{title:i.distance,value:this._formatLength(t.distance)}):null)}};tt=a([f("esri.views.interactive.tooltip.content.TooltipContentTranslateGraphic")],tt);const Me={base:`${p} ${`${p}--translate-graphic-xy`}`};let et=class extends d{render(){const{info:t}=this,{visibleElements:e}=t.tooltipOptions,i=this._messagesTooltip.sketch;return s(m,{className:Me.base,helpMessage:this._getHelpMessage()},e.distance?s(u,{title:i.distance,value:this._formatRelativeLength(t.distance)}):null)}};et=a([f("esri.views.interactive.tooltip.content.TooltipContentTranslateGraphicXY")],et);const Le={base:`${p} ${`${p}--translate-graphic-z`}`};let nt=class extends d{render(){const{info:n}=this,{visibleElements:t}=n.tooltipOptions,e=this._messagesTooltip.sketch;return s(m,{className:Le.base,helpMessage:this._getHelpMessage()},t.distance?s(u,{title:e.distance,value:this._formatRelativeVerticalLength(n.distance)}):null)}};nt=a([f("esri.views.interactive.tooltip.content.TooltipContentTranslateGraphicZ")],nt);const Ce={base:`${p} ${`${p}--translate-vertex`}`};let it=class extends d{render(){const{distance:t,elevation:e,area:i,totalLength:o,tooltipOptions:l}=this.info,{visibleElements:r}=l,h=this._messagesTooltip.sketch;return s(m,{className:Ce.base,helpMessage:this._getHelpMessage()},r.distance?s(u,{title:h.distance,value:this._formatLength(t)}):null,r.elevation&&e!=null?s(u,{title:h.elevation,value:this._formatVerticalLength(e.actual)}):null,r.area&&i!=null?s(u,{title:h.area,value:this._formatArea(i)}):null,r.totalLength&&o!=null?s(u,{title:h.totalLength,value:this._formatLength(o)}):null)}};it=a([f("esri.views.interactive.tooltip.content.TooltipContentTranslateVertex")],it);const Ee={base:`${p} ${`${p}--translate-vertex`}`};let st=class extends d{render(){const{area:n,distance:t,elevation:e,totalLength:i,tooltipOptions:o}=this.info,{visibleElements:l}=o,r=this._messagesTooltip.sketch;return s(m,{className:Ee.base,helpMessage:this._getHelpMessage()},l.distance?s(u,{title:r.distance,value:this._formatRelativeLength(t)}):null,l.elevation&&e!=null?s(u,{title:r.elevation,value:this._formatVerticalLength(e.actual)}):null,l.area&&n!=null?s(u,{title:r.area,value:this._formatArea(n)}):null,l.totalLength&&i!=null?s(u,{title:r.totalLength,value:this._formatLength(i)}):null)}};st=a([f("esri.views.interactive.tooltip.content.TooltipContentTranslateVertexXY")],st);const Ve={base:`${p} ${`${p}--translate-vertex`}`};let ot=class extends d{render(){const{distance:n,elevation:t,tooltipOptions:e}=this.info,{visibleElements:i}=e,o=this._messagesTooltip.sketch;return s(m,{className:Ve.base,helpMessage:this._getHelpMessage()},i.distance?s(u,{title:o.distance,value:this._formatRelativeVerticalLength(n)}):null,i.elevation&&t!=null?s(u,{title:o.elevation,value:this._formatVerticalLength(t.actual)}):null)}};ot=a([f("esri.views.interactive.tooltip.content.TooltipContentTranslateVertexZ")],ot);function Oe(n,t){if(t==null)return null;const e=document.createElement("div");switch(t.type){case"draw-point":return new B({tooltip:n,info:t,container:e});case"draw-polygon":return new q({tooltip:n,info:t,container:e});case"draw-polyline":return new Z({tooltip:n,info:t,container:e});case"draw-mesh":return new W({tooltip:n,info:t,container:e});case"draw-rectangle":return new K({tooltip:n,info:t,container:e});case"draw-circle":return new U({tooltip:n,info:t,container:e});case"extent-rotate":return new j({tooltip:n,info:t,container:e});case"extent-scale":return new G({tooltip:n,info:t,container:e});case"transform-absolute":return new X({tooltip:n,info:t,container:e});case"transform-rotate":return new Y({tooltip:n,info:t,container:e});case"transform-scale":return new J({tooltip:n,info:t,container:e});case"translate-graphic":return new tt({tooltip:n,info:t,container:e});case"translate-graphic-z":return new nt({tooltip:n,info:t,container:e});case"translate-graphic-xy":return new et({tooltip:n,info:t,container:e});case"translate-vertex":return new it({tooltip:n,info:t,container:e});case"translate-vertex-z":return new ot({tooltip:n,info:t,container:e});case"translate-vertex-xy":return new st({tooltip:n,info:t,container:e});case"reshape-edge-offset":return new Q({tooltip:n,info:t,container:e})}}const ze={base:`${w}`};let k=class extends Bt{constructor(n){super(n),this.info=null,this.positionMode="follow-cursor",this._contentContainer=(()=>{const t=document.createElement("div");return t.classList.add(ze.base),qt(t),t})(),this._contentWidget=null}initialize(){const n=this._contentContainer;this.addHandles([P(()=>this.view.overlay?.surface,t=>{n.remove(),t?.appendChild(n)},A),P(()=>this.info,(t,e)=>{if(this._contentWidget!=null&&t!=null&&e!=null&&t.type===e.type)this._contentWidget.info=t;else{this._contentWidget=ft(this._contentWidget);const i=Oe(this,t);i&&(this._contentWidget=i,i.container&&n.appendChild(i.container))}},A),P(()=>({container:this._contentContainer,contentWidget:this._contentWidget,screenPoint:this._screenPoint,positionMode:this.positionMode}),De,A)])}destroy(){this._contentWidget=ft(this._contentWidget),this._contentContainer.remove()}clear(){this.info=null}get _screenPoint(){const n=this.view.inputManager;return n?.multiTouchActive?null:n?.latestPointerLocation}get test(){return{contentContainer:this._contentContainer,visible:this._contentContainer?.style.display!=="none"}}};function De({container:n,contentWidget:t,screenPoint:e,positionMode:i}){const{style:o}=n;if(i==="docked")return o.display="block",void(o.transform="none");if(i!=="fixed")if(e!=null&&t!=null){o.display="block";const l=Zt(n),r=`translate(${Math.round(e.x)+$t[0]*(l?-1:1)}px, ${Math.round(e.y)+$t[1]}px)`;o.transform=l?`translate(-100%, 0) ${r}`:r}else o.display="none"}a([c({nonNullable:!0})],k.prototype,"view",void 0),a([c()],k.prototype,"info",void 0),a([c()],k.prototype,"positionMode",void 0),a([c()],k.prototype,"_contentContainer",void 0),a([c()],k.prototype,"_contentWidget",void 0),a([c()],k.prototype,"_screenPoint",null),k=a([f("esri.views.interactive.tooltip.Tooltip")],k);const $t=[20,20];export{Be as a,ct as b,qe as c,Ue as d,Ze as g,We as l,Ke as m,He as p,kt as r,y as s,k as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/chunk-T1QY4g1u.js","assets/chunks/chunk-8J0p1hu6.js","assets/chunks/chunk-EUQwHdIv.js","assets/static/EdgeShader._x1C5tJF.css","assets/chunks/chunk-2xwISx0Q.js","assets/chunks/chunk-uiS_SWds.js","assets/chunks/chunk-oNA4QMZz.js","assets/chunks/chunk-KvBHVT4S.js","assets/chunks/chunk-Gv288A6i.js","assets/chunks/chunk-qdHumIlA.js","assets/chunks/chunk-kk5UL6d3.js","assets/chunks/chunk-dtiBfYiX.js","assets/chunks/chunk-DhKzUMyf.js","assets/chunks/chunk-2d2SLmHB.js","assets/chunks/chunk-6vN-YNJI.js","assets/chunks/chunk-MZ3tDWIL.js","assets/chunks/chunk-h6xRFwoD.js","assets/chunks/chunk-IgOZlwVj.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
