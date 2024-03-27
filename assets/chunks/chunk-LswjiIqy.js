import{p as E,H as D,aE as r,h as o,a as y}from"./chunk-gZYsZ36N.js";import{t as p,o as C,y as a,e as h}from"./chunk-GA5VOLTe.js";import{f as I,c,b as x,a as O,F as m,r as H}from"./chunk-xHbiGIm5.js";import{g as P}from"./chunk-B02qx4Xm.js";import{c as S,u as k,d as F,I as T}from"./chunk-Hq60R6s4.js";import{i as z}from"./chunk-oNrzyBmj.js";import{c as A,s as B,a as L}from"./chunk-F2No_yGb.js";import{c as f}from"./chunk-88EbBREr.js";import{o as u}from"./chunk-1DEP_2ms.js";import"./chunk-t4TbIqUg.js";import"./chunk--2NqSzuT.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */const $={dropdownTrigger:"trigger"},M=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline-block}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host .calcite-dropdown-wrapper{--calcite-floating-ui-z-index:var(--calcite-z-index-dropdown);display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index);visibility:hidden}.calcite-dropdown-wrapper .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-z-index);border-radius:0.25rem}.calcite-dropdown-wrapper[data-placement^=bottom] .calcite-floating-ui-anim{transform:translateY(-5px)}.calcite-dropdown-wrapper[data-placement^=top] .calcite-floating-ui-anim{transform:translateY(5px)}.calcite-dropdown-wrapper[data-placement^=left] .calcite-floating-ui-anim{transform:translateX(5px)}.calcite-dropdown-wrapper[data-placement^=right] .calcite-floating-ui-anim{transform:translateX(-5px)}.calcite-dropdown-wrapper[data-placement] .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([open]) .calcite-dropdown-wrapper{visibility:visible}:host .calcite-dropdown-content{max-block-size:45vh;inline-size:auto;overflow-y:auto;overflow-x:hidden;background-color:var(--calcite-color-foreground-1);inline-size:var(--calcite-dropdown-width)}.calcite-trigger-container{position:relative;display:flex;block-size:100%;flex:1 1 auto;word-wrap:break-word;word-break:break-word}@media (forced-colors: active){:host([open]) .calcite-dropdown-wrapper{border:1px solid canvasText}}:host([width-scale=s]){--calcite-dropdown-width:12rem}:host([width-scale=m]){--calcite-dropdown-width:14rem}:host([width-scale=l]){--calcite-dropdown-width:16rem}:host([hidden]){display:none}[hidden]{display:none}",g=E(class extends D{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteDropdownSelect=r(this,"calciteDropdownSelect",6),this.calciteDropdownBeforeClose=r(this,"calciteDropdownBeforeClose",6),this.calciteDropdownClose=r(this,"calciteDropdownClose",6),this.calciteDropdownBeforeOpen=r(this,"calciteDropdownBeforeOpen",6),this.calciteDropdownOpen=r(this,"calciteDropdownOpen",6),this.items=[],this.groups=[],this.mutationObserver=f("mutation",()=>this.updateItems()),this.resizeObserver=f("resize",e=>this.resizeObserverCallback(e)),this.openTransitionProp="opacity",this.guid=`calcite-dropdown-${P()}`,this.defaultAssignedElements=[],this.slotChangeHandler=e=>{this.defaultAssignedElements=e.target.assignedElements({flatten:!0}),this.updateItems()},this.setFilteredPlacements=()=>{const{el:e,flipPlacements:t}=this;this.filteredFlipPlacements=t?I(t,e):null},this.updateTriggers=e=>{this.triggers=e.target.assignedElements({flatten:!0}),this.reposition(!0)},this.updateItems=()=>{this.items=this.groups.map(e=>Array.from(e?.querySelectorAll("calcite-dropdown-item"))).reduce((e,t)=>[...e,...t],[]),this.updateSelectedItems(),this.reposition(!0),this.items.forEach(e=>e.scale=this.scale)},this.updateGroups=e=>{const t=e.target.assignedElements({flatten:!0}).filter(i=>i?.matches("calcite-dropdown-group"));this.groups=t,this.updateItems()},this.resizeObserverCallback=e=>{e.forEach(t=>{const{target:i}=t;i===this.referenceEl?this.setDropdownWidth():i===this.scrollerEl&&this.setMaxScrollerHeight()})},this.setDropdownWidth=()=>{const{referenceEl:e,scrollerEl:t}=this,i=e?.clientWidth;!i||!t||(t.style.minWidth=`${i}px`)},this.setMaxScrollerHeight=()=>{const{scrollerEl:e}=this;if(!e)return;this.reposition(!0);const t=this.getMaxScrollerHeight();e.style.maxHeight=t>0?`${t}px`:"",this.reposition(!0)},this.setScrollerAndTransitionEl=e=>{this.resizeObserver.observe(e),this.scrollerEl=e,this.transitionEl=e},this.setReferenceEl=e=>{this.referenceEl=e,c(this,this.referenceEl,this.floatingEl),this.resizeObserver.observe(e)},this.setFloatingEl=e=>{this.floatingEl=e,c(this,this.referenceEl,this.floatingEl)},this.keyDownHandler=e=>{if(!e.composedPath().includes(this.referenceEl))return;const{defaultPrevented:t,key:i}=e;if(!t){if(this.open){if(i==="Escape"){this.closeCalciteDropdown(),e.preventDefault();return}else if(e.shiftKey&&i==="Tab"){this.closeCalciteDropdown(),e.preventDefault();return}}z(i)?(this.openCalciteDropdown(),e.preventDefault()):i==="Escape"&&(this.closeCalciteDropdown(),e.preventDefault())}},this.focusOnFirstActiveOrFirstItem=()=>{this.getFocusableElement(this.getTraversableItems().find(e=>e.selected)||this.items[0])},this.toggleOpenEnd=()=>{this.focusOnFirstActiveOrFirstItem(),this.el.removeEventListener("calciteDropdownOpen",this.toggleOpenEnd)},this.openCalciteDropdown=()=>{this.open=!this.open,this.open&&this.el.addEventListener("calciteDropdownOpen",this.toggleOpenEnd)},this.open=!1,this.closeOnSelectDisabled=!1,this.disabled=!1,this.flipPlacements=void 0,this.maxItems=0,this.overlayPositioning="absolute",this.placement=x,this.selectedItems=[],this.type="click",this.widthScale=void 0,this.scale="m"}openHandler(){if(u(this),this.disabled){this.open=!1;return}this.reposition(!0)}handleDisabledChange(e){e||(this.open=!1)}flipPlacementsHandler(){this.setFilteredPlacements(),this.reposition(!0)}maxItemsHandler(){this.setMaxScrollerHeight()}overlayPositioningHandler(){this.reposition(!0)}placementHandler(){this.reposition(!0)}handlePropsChange(){this.updateItems()}async setFocus(){await A(this),this.el.focus()}connectedCallback(){this.mutationObserver?.observe(this.el,{childList:!0,subtree:!0}),this.setFilteredPlacements(),this.reposition(!0),this.open&&(this.openHandler(),u(this)),S(this),this.updateItems(),c(this,this.referenceEl,this.floatingEl)}componentWillLoad(){B(this)}componentDidLoad(){L(this),this.reposition(!0)}componentDidRender(){k(this)}disconnectedCallback(){this.mutationObserver?.disconnect(),this.resizeObserver?.disconnect(),F(this),O(this,this.referenceEl,this.floatingEl)}render(){const{open:e,guid:t}=this;return o(y,null,o(T,{disabled:this.disabled},o("div",{class:"calcite-trigger-container",id:`${t}-menubutton`,onClick:this.openCalciteDropdown,onKeyDown:this.keyDownHandler,ref:this.setReferenceEl},o("slot",{"aria-controls":`${t}-menu`,"aria-expanded":p(e),"aria-haspopup":"menu",name:$.dropdownTrigger,onSlotchange:this.updateTriggers})),o("div",{"aria-hidden":p(!e),class:"calcite-dropdown-wrapper",ref:this.setFloatingEl},o("div",{"aria-labelledby":`${t}-menubutton`,class:{"calcite-dropdown-content":!0,[m.animation]:!0,[m.animationActive]:e},id:`${t}-menu`,role:"menu",ref:this.setScrollerAndTransitionEl},o("slot",{onSlotchange:this.updateGroups})))))}async reposition(e=!1){const{floatingEl:t,referenceEl:i,placement:s,overlayPositioning:n,filteredFlipPlacements:l}=this;return H(this,{floatingEl:t,referenceEl:i,overlayPositioning:n,placement:s,flipPlacements:l,type:"menu"},e)}closeCalciteDropdownOnClick(e){this.disabled||!C(e)||!this.open||e.composedPath().includes(this.el)||this.closeCalciteDropdown(!1)}closeCalciteDropdownOnEvent(e){this.closeCalciteDropdown(),e.stopPropagation()}closeCalciteDropdownOnOpenEvent(e){e.composedPath().includes(this.el)||(this.open=!1)}pointerEnterHandler(){this.disabled||this.type!=="hover"||this.openCalciteDropdown()}pointerLeaveHandler(){this.disabled||this.type!=="hover"||this.closeCalciteDropdown()}getTraversableItems(){return this.items.filter(e=>!e.disabled&&!e.hidden)}calciteInternalDropdownItemKeyEvent(e){const{keyboardEvent:t}=e.detail,i=t.target,s=this.getTraversableItems();switch(t.key){case"Tab":this.open=!1,this.updateTabIndexOfItems(i);break;case"ArrowDown":a(s,i,"next");break;case"ArrowUp":a(s,i,"previous");break;case"Home":a(s,i,"first");break;case"End":a(s,i,"last");break}e.stopPropagation()}handleItemSelect(e){this.updateSelectedItems(),e.stopPropagation(),this.calciteDropdownSelect.emit(),(!this.closeOnSelectDisabled||e.detail.requestedDropdownGroup.selectionMode==="none")&&this.closeCalciteDropdown(),e.stopPropagation()}onBeforeOpen(){this.calciteDropdownBeforeOpen.emit()}onOpen(){this.calciteDropdownOpen.emit()}onBeforeClose(){this.calciteDropdownBeforeClose.emit()}onClose(){this.calciteDropdownClose.emit()}updateSelectedItems(){this.selectedItems=this.items.filter(e=>e.selected)}getMaxScrollerHeight(){const{maxItems:e,items:t}=this;let i=0,s=0,n;return this.groups.forEach(l=>{e>0&&i<e&&Array.from(l.children).forEach((d,v)=>{v===0&&(isNaN(n)&&(n=d.offsetTop),s+=n),i<e&&(s+=d.offsetHeight,i+=1)})}),t.length>e?s:0}closeCalciteDropdown(e=!0){this.open=!1,e&&h(this.triggers[0])}getFocusableElement(e){e&&h(e)}updateTabIndexOfItems(e){this.items.forEach(t=>{t.tabIndex=e!==t?-1:0})}static get delegatesFocus(){return!0}get el(){return this}static get watchers(){return{open:["openHandler"],disabled:["handleDisabledChange"],flipPlacements:["flipPlacementsHandler"],maxItems:["maxItemsHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],scale:["handlePropsChange"]}}static get style(){return M}},[17,"calcite-dropdown",{open:[1540],closeOnSelectDisabled:[516,"close-on-select-disabled"],disabled:[516],flipPlacements:[16],maxItems:[514,"max-items"],overlayPositioning:[513,"overlay-positioning"],placement:[513],selectedItems:[1040],type:[513],widthScale:[513,"width-scale"],scale:[513],setFocus:[64],reposition:[64]},[[9,"pointerdown","closeCalciteDropdownOnClick"],[0,"calciteInternalDropdownCloseRequest","closeCalciteDropdownOnEvent"],[8,"calciteDropdownOpen","closeCalciteDropdownOnOpenEvent"],[1,"pointerenter","pointerEnterHandler"],[1,"pointerleave","pointerLeaveHandler"],[0,"calciteInternalDropdownItemKeyEvent","calciteInternalDropdownItemKeyEvent"],[0,"calciteInternalDropdownItemSelect","handleItemSelect"]],{open:["openHandler"],disabled:["handleDisabledChange"],flipPlacements:["flipPlacementsHandler"],maxItems:["maxItemsHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],scale:["handlePropsChange"]}]);function w(){if(typeof customElements>"u")return;["calcite-dropdown"].forEach(e=>{switch(e){case"calcite-dropdown":customElements.get(e)||customElements.define(e,g);break}})}w();/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */const Q=g,V=w;export{Q as CalciteDropdown,V as defineCustomElement};