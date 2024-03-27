import{p as b,H as h,aE as u,h as o,a as p}from"./chunk-gZYsZ36N.js";import{c as f,d as g}from"./chunk-eG80bfIs.js";import{v as r,d as x}from"./chunk-GA5VOLTe.js";import{g as v}from"./chunk-B02qx4Xm.js";import{c as C,d as w,u as I,I as y}from"./chunk-Hq60R6s4.js";import{g as l}from"./chunk-PUA2WN4l.js";import{d as S}from"./chunk-znDZlYa_.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */const E="CALCITE-COMBOBOX-ITEM",k="CALCITE-COMBOBOX-ITEM-GROUP",a=`${E}, ${k}`,X={chipInvisible:"chip--invisible",selectionDisplayFit:"selection-display-fit",selectionDisplaySingle:"selection-display-single",listContainer:"list-container"};function z(t){const e=t.parentElement?.closest(a),c=e?.parentElement?.closest(a);return[e,c].filter(n=>n)}function U(t){return t.ancestors?.filter(e=>e.nodeName==="CALCITE-COMBOBOX-ITEM")||[]}function W(t){return r(t.querySelectorAll("calcite-combobox-item"))}function q(t){return r(t.querySelectorAll("calcite-combobox-item")).filter(c=>c.selected).length>0}function A(t){return document.evaluate("ancestor::calcite-combobox-item | ancestor::calcite-combobox-item-group",t,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null).snapshotLength}function O(t){return t.includes("single")}/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */const i={icon:"icon",iconActive:"icon--active",iconIndent:"icon--indent",custom:"icon--custom",dot:"icon--dot",single:"label--single",label:"label",active:"label--active",selected:"label--selected",title:"title",textContainer:"text-container"},R=`@charset "UTF-8";:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host([hidden]){display:none}[hidden]{display:none}.scale--s{font-size:var(--calcite-font-size--2);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.5rem;--calcite-combobox-item-spacing-unit-s:0.25rem;--calcite-combobox-item-spacing-indent:0.5rem;--calcite-combobox-item-selector-icon-size:1rem}.scale--m{font-size:var(--calcite-font-size--1);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-item-spacing-indent:0.75rem;--calcite-combobox-item-selector-icon-size:1rem}.scale--l{font-size:var(--calcite-font-size-0);line-height:1.25rem;--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-s:0.625rem;--calcite-combobox-item-spacing-indent:1rem;--calcite-combobox-item-selector-icon-size:1.5rem}.container{--calcite-combobox-item-indent-value:calc(
    var(--calcite-combobox-item-spacing-indent) * var(--calcite-combobox-item-spacing-indent-multiplier)
  )}:host(:focus){--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host,ul{margin:0px;display:flex;flex-direction:column;padding:0px}:host(:focus),ul:focus{outline:2px solid transparent;outline-offset:2px}.label{position:relative;box-sizing:border-box;display:flex;inline-size:100%;min-inline-size:100%;cursor:pointer;align-items:center;color:var(--calcite-color-text-3);text-decoration-line:none;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);outline-color:transparent;word-wrap:break-word;word-break:break-word;padding-block:var(--calcite-combobox-item-spacing-unit-s);padding-inline:var(--calcite-combobox-item-spacing-unit-l)}:host([disabled]) .label{cursor:default}.label--selected{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1)}.label--active{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite-color-brand)));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.label:hover,.label:active{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1);text-decoration-line:none;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.title{padding-block:0;padding-inline:var(--calcite-combobox-item-spacing-unit-l)}.icon{display:inline-flex;opacity:0;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);color:var(--calcite-color-border-1)}.icon--indent{padding-inline-start:var(--calcite-combobox-item-indent-value)}.icon--custom{margin-block-start:-1px;padding-inline-start:var(--calcite-combobox-item-spacing-unit-l);color:var(--calcite-color-text-3)}.icon--active{color:var(--calcite-color-text-1)}.icon--dot{display:flex;justify-content:center;min-inline-size:var(--calcite-combobox-item-selector-icon-size)}.icon--dot:before{text-align:start;content:"•"}.label--active .icon{opacity:1}.label--selected .icon{opacity:1;color:var(--calcite-color-brand)}:host(:hover[disabled]) .icon{opacity:1}`,D=b(class extends h{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteComboboxItemChange=u(this,"calciteComboboxItemChange",6),this.itemClickHandler=()=>{this.toggleSelected()},this.disabled=!1,this.selected=!1,this.active=!1,this.ancestors=void 0,this.guid=v(),this.icon=void 0,this.iconFlipRtl=!1,this.textLabel=void 0,this.value=void 0,this.filterDisabled=void 0,this.selectionMode="multiple",this.scale="m"}selectedWatchHandler(){this.calciteComboboxItemChange.emit()}connectedCallback(){this.ancestors=z(this.el),f(this),C(this)}disconnectedCallback(){g(this),w(this)}componentDidRender(){I(this)}toggleSelected(){const e=this.selectionMode==="single-persist";this.disabled||e&&this.selected||(this.selected=!this.selected)}renderIcon(e){return this.icon?o("calcite-icon",{class:{[i.custom]:!!this.icon,[i.iconActive]:this.icon&&this.selected,[i.iconIndent]:!0},flipRtl:this.iconFlipRtl,icon:this.icon||e,key:"icon",scale:l(this.scale)}):null}renderSelectIndicator(e,c){return e?o("span",{class:{[i.icon]:!0,[i.dot]:!0,[i.iconIndent]:!0}}):o("calcite-icon",{class:{[i.icon]:!0,[i.iconActive]:this.selected,[i.iconIndent]:!0},flipRtl:this.iconFlipRtl,icon:c,key:"indicator",scale:l(this.scale)})}renderChildren(){return x(this.el)?o("ul",{key:"default-slot-container"},o("slot",null)):null}render(){const{disabled:e}=this,c=O(this.selectionMode),n=c&&!e,s=e?"":c?"dot":"check",d={[i.label]:!0,[i.selected]:this.selected,[i.active]:this.active,[i.single]:c},m=A(this.el);return o(p,{"aria-hidden":"true"},o(y,{disabled:e},o("div",{class:`container scale--${this.scale}`,style:{"--calcite-combobox-item-spacing-indent-multiplier":`${m}`}},o("li",{class:d,id:this.guid,onClick:this.itemClickHandler},this.renderSelectIndicator(n,s),this.renderIcon(s),o("span",{class:"title"},this.textLabel)),this.renderChildren())))}get el(){return this}static get watchers(){return{selected:["selectedWatchHandler"]}}static get style(){return R}},[1,"calcite-combobox-item",{disabled:[516],selected:[1540],active:[516],ancestors:[1040],guid:[513],icon:[513],iconFlipRtl:[516,"icon-flip-rtl"],textLabel:[513,"text-label"],value:[8],filterDisabled:[516,"filter-disabled"],selectionMode:[513,"selection-mode"],scale:[1]},void 0,{selected:["selectedWatchHandler"]}]);function H(){if(typeof customElements>"u")return;["calcite-combobox-item","calcite-icon"].forEach(e=>{switch(e){case"calcite-combobox-item":customElements.get(e)||customElements.define(e,D);break;case"calcite-icon":customElements.get(e)||S();break}})}H();export{D as C,X as a,a as b,W as c,H as d,E as e,k as f,U as g,q as h,O as i};