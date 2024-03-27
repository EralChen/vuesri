import{p as B,H as E,aE as l,h as e,a as L}from"./chunk-gZYsZ36N.js";import{c as z,d as I}from"./chunk-eG80bfIs.js";import{f as O,d,t as m}from"./chunk-GA5VOLTe.js";import{c as H,d as S,u as M,I as T}from"./chunk-Hq60R6s4.js";import{u as $,c as A,a as P,d as D,b as F,s as _}from"./chunk-DrUXCe3U.js";import{d as j,a as q,H as U}from"./chunk-3CrqoeZX.js";import{c as R,s as W,a as G}from"./chunk-F2No_yGb.js";import{o as p}from"./chunk-1DEP_2ms.js";import{d as J}from"./chunk-GYstjczo.js";import{d as K}from"./chunk-nh7T737q.js";import{d as Q}from"./chunk-znDZlYa_.js";import{d as V}from"./chunk-bA-0LTLw.js";import{d as X}from"./chunk-3iBivtUX.js";import"./chunk-t4TbIqUg.js";import"./chunk-88EbBREr.js";import"./chunk-B02qx4Xm.js";import"./chunk-oNrzyBmj.js";import"./chunk-A_q-bsQi.js";import"./chunk-xHbiGIm5.js";import"./chunk--2NqSzuT.js";import"./chunk-6ZSkz3NE.js";import"./chunk-e7K0NRnZ.js";import"./chunk-PUA2WN4l.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */const c={content:"content",toggle:"toggle",header:"header"},i={button:"button",container:"container",content:"content",controlContainer:"control-container",description:"description",header:"header",headerContainer:"header-container",heading:"heading",icon:"icon",invalid:"invalid",statusIcon:"status-icon",summary:"summary",title:"title",toggle:"toggle",toggleIcon:"toggle-icon",valid:"valid"},s={icon:"icon",control:"control",headerMenuActions:"header-menu-actions"},h={opened:"chevron-up",closed:"chevron-down",valid:"check-circle",invalid:"exclamation-mark-triangle"},Y=`:host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-eighth:0.125rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-shrink:0;flex-grow:0;flex-direction:column;border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);padding:0px;transition-property:margin;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-timing-function:cubic-bezier(0.215, 0.440, 0.420, 0.880);flex-basis:auto}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-color-text-2);color:var(--calcite-color-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.header{justify-content:flex-start;padding:0px}.header,.toggle{grid-area:header}.header-container{display:grid;align-items:stretch;grid-template:auto/auto 1fr auto auto;grid-template-areas:"handle header control menu";grid-column:header-start/menu-end;grid-row:1/2}.toggle{margin:0px;display:flex;cursor:pointer;flex-wrap:nowrap;align-items:center;justify-content:space-between;border-style:none;padding:0px;font-family:inherit;outline-color:transparent;text-align:initial;background-color:transparent}.toggle:hover{background-color:var(--calcite-color-foreground-2)}.toggle:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite-color-brand)));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}calcite-loader[inline]{grid-area:control;align-self:center}calcite-handle{grid-area:handle}.title{margin:0px;padding:0.75rem}.header .title .heading{padding:0px;font-size:var(--calcite-font-size--1);font-weight:var(--calcite-font-weight-medium);line-height:1.25;color:var(--calcite-color-text-2);transition-property:color;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);word-wrap:break-word;word-break:break-word}.description{margin-block-start:0.125rem;padding:0px;font-size:var(--calcite-font-size--2);line-height:1.375;color:var(--calcite-color-text-3);word-wrap:break-word;word-break:break-word}.icon{display:flex;margin-inline-start:0.75rem;margin-inline-end:0px}.status-icon.valid{color:var(--calcite-color-status-success)}.status-icon.invalid{color:var(--calcite-color-status-danger)}@keyframes spin{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}100%{transform:rotate(360deg)}}.toggle-icon{margin-block:0.75rem;align-self:center;justify-self:end;color:var(--calcite-color-text-3);transition-property:color;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline-end:0.75rem;margin-inline-start:auto}.toggle:hover .toggle-icon{color:var(--calcite-color-text-1)}.container{position:relative;display:flex;block-size:100%;flex-direction:column}.content{position:relative;min-block-size:0px;flex:1 1 0%}@keyframes in{0%{opacity:0}100%{opacity:1}}.content{animation:in var(--calcite-internal-animation-timing-slow) ease-in-out;padding-block:var(--calcite-block-padding, 0.5rem);padding-inline:var(--calcite-block-padding, 0.625rem)}.control-container{margin:0px;display:flex;grid-area:control}calcite-action-menu{grid-area:menu}:host([open]){margin-block:0.5rem}:host([open]) .header .title .heading{color:var(--calcite-color-text-1)}:host([hidden]){display:none}[hidden]{display:none}`,u=B(class extends E{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteBlockBeforeClose=l(this,"calciteBlockBeforeClose",6),this.calciteBlockBeforeOpen=l(this,"calciteBlockBeforeOpen",6),this.calciteBlockClose=l(this,"calciteBlockClose",6),this.calciteBlockOpen=l(this,"calciteBlockOpen",6),this.calciteBlockToggle=l(this,"calciteBlockToggle",6),this.openTransitionProp="opacity",this.onHeaderClick=()=>{this.open=!this.open,this.calciteBlockToggle.emit()},this.setTransitionEl=t=>{this.transitionEl=t},this.collapsible=!1,this.disabled=!1,this.dragHandle=!1,this.heading=void 0,this.headingLevel=void 0,this.loading=!1,this.open=!1,this.status=void 0,this.description=void 0,this.messages=void 0,this.messageOverrides=void 0,this.overlayPositioning="absolute",this.effectiveLocale=void 0,this.defaultMessages=void 0}openHandler(){p(this)}onMessagesChange(){}async setFocus(){await R(this),O(this.el)}onBeforeOpen(){this.calciteBlockBeforeOpen.emit()}onOpen(){this.calciteBlockOpen.emit()}onBeforeClose(){this.calciteBlockBeforeClose.emit()}onClose(){this.calciteBlockClose.emit()}effectiveLocaleChange(){$(this,this.effectiveLocale)}connectedCallback(){z(this),H(this),A(this),P(this)}disconnectedCallback(){S(this),D(this),F(this),I(this)}async componentWillLoad(){await _(this),W(this),this.open&&p(this)}componentDidLoad(){G(this)}componentDidRender(){M(this)}renderScrim(){const{loading:t}=this,n=e("slot",null);return[t?e("calcite-scrim",{loading:t}):null,n]}renderIcon(){const{loading:t,messages:n,status:o}=this,a=!!d(this.el,s.icon);return t?e("div",{class:i.icon,key:"loader"},e("calcite-loader",{inline:!0,label:n.loading})):o?e("div",{class:i.icon,key:"status-icon"},e("calcite-icon",{class:{[i.statusIcon]:!0,[i.valid]:o=="valid",[i.invalid]:o=="invalid"},icon:h[o],scale:"s"})):a?e("div",{class:i.icon,key:"icon-slot"},e("slot",{key:"icon-slot",name:s.icon})):null}renderTitle(){const{heading:t,headingLevel:n,description:o}=this;return t||o?e("div",{class:i.title},e(U,{class:i.heading,level:n},t),o?e("div",{class:i.description},o):null):null}render(){const{collapsible:t,el:n,loading:o,open:a,heading:v,messages:r}=this,k=a?r.collapse:r.expand,g=e("header",{class:i.header,id:c.header},this.renderIcon(),this.renderTitle()),x=!!d(n,s.control),y=!!d(n,s.headerMenuActions),C=a?h.opened:h.closed,w=e("div",{class:i.headerContainer},this.dragHandle?e("calcite-handle",{label:v}):null,t?e("button",{"aria-controls":c.content,"aria-describedby":c.header,"aria-expanded":t?m(a):null,class:i.toggle,id:c.toggle,onClick:this.onHeaderClick,title:k},g,e("calcite-icon",{"aria-hidden":"true",class:i.toggleIcon,icon:C,scale:"s"})):g,x?e("div",{class:i.controlContainer},e("slot",{name:s.control})):null,y?e("calcite-action-menu",{label:r.options,overlayPositioning:this.overlayPositioning},e("slot",{name:s.headerMenuActions})):null);return e(L,null,e(T,{disabled:this.disabled},e("article",{"aria-busy":m(o),class:{[i.container]:!0}},w,e("section",{"aria-labelledby":c.toggle,class:i.content,hidden:!a,id:c.content,ref:this.setTransitionEl},this.renderScrim()))))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{open:["openHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return Y}},[1,"calcite-block",{collapsible:[516],disabled:[516],dragHandle:[516,"drag-handle"],heading:[1],headingLevel:[514,"heading-level"],loading:[516],open:[1540],status:[513],description:[1],messages:[1040],messageOverrides:[1040],overlayPositioning:[513,"overlay-positioning"],effectiveLocale:[32],defaultMessages:[32],setFocus:[64]},void 0,{open:["openHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function f(){if(typeof customElements>"u")return;["calcite-block","calcite-action","calcite-action-menu","calcite-handle","calcite-icon","calcite-loader","calcite-popover","calcite-scrim"].forEach(t=>{switch(t){case"calcite-block":customElements.get(t)||customElements.define(t,u);break;case"calcite-action":customElements.get(t)||J();break;case"calcite-action-menu":customElements.get(t)||q();break;case"calcite-handle":customElements.get(t)||K();break;case"calcite-icon":customElements.get(t)||Q();break;case"calcite-loader":customElements.get(t)||V();break;case"calcite-popover":customElements.get(t)||j();break;case"calcite-scrim":customElements.get(t)||X();break}})}f();const Ce=u,we=f;export{Ce as CalciteBlock,we as defineCustomElement};