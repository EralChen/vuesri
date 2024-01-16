import{h as v,kw as he,px as De,py as U,pz as Be,pA as Ae,pB as F,pC as I,p as pe,H as ve,aF as R,t as j,aB as Oe,eG as Ie,aC as Ne,b as Re,f7 as G,lg as Le}from"./chunk-8J0p1hu6.js";import{g as me}from"./chunk-6vN-YNJI.js";import{i as be}from"./chunk-qdHumIlA.js";import{s as ge,a as Ee,c as ye}from"./chunk-KvBHVT4S.js";import{d as we}from"./chunk-7tcW-Qbd.js";import{d as Pe}from"./chunk-DhKzUMyf.js";import{d as xe}from"./chunk-2d2SLmHB.js";import{f as Me,c as He,d as Se,a as ze,r as Ke,b as Ue,F as Z}from"./chunk-CW68X9vE.js";import{o as ee}from"./chunk-64fAgzwR.js";import{u as $e,c as je,a as Ge,s as _e,d as qe,b as Ye}from"./chunk-Gv288A6i.js";import{c as Ve}from"./chunk-kk5UL6d3.js";import{g as Xe}from"./chunk-dtiBfYiX.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */const We=(t,e)=>{const a=t.level?`h${t.level}`:"div";return delete t.level,v(a,{...t},e)};/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */function te(t,e){return(t+e)%e}/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 *//*!
* focus-trap 7.5.4
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/function ne(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),a.push.apply(a,o)}return a}function ie(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?ne(Object(a),!0).forEach(function(o){Je(t,o,a[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):ne(Object(a)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(a,o))})}return t}function Je(t,e,a){return e=Ze(e),e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function Qe(t,e){if(typeof t!="object"||t===null)return t;var a=t[Symbol.toPrimitive];if(a!==void 0){var o=a.call(t,e||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Ze(t){var e=Qe(t,"string");return typeof e=="symbol"?e:String(e)}var ae={activateTrap:function(e,a){if(e.length>0){var o=e[e.length-1];o!==a&&o.pause()}var r=e.indexOf(a);r===-1||e.splice(r,1),e.push(a)},deactivateTrap:function(e,a){var o=e.indexOf(a);o!==-1&&e.splice(o,1),e.length>0&&e[e.length-1].unpause()}},et=function(e){return e.tagName&&e.tagName.toLowerCase()==="input"&&typeof e.select=="function"},tt=function(e){return e?.key==="Escape"||e?.key==="Esc"||e?.keyCode===27},L=function(e){return e?.key==="Tab"||e?.keyCode===9},nt=function(e){return L(e)&&!e.shiftKey},it=function(e){return L(e)&&e.shiftKey},oe=function(e){return setTimeout(e,0)},se=function(e,a){var o=-1;return e.every(function(r,l){return a(r)?(o=l,!1):!0}),o},N=function(e){for(var a=arguments.length,o=new Array(a>1?a-1:0),r=1;r<a;r++)o[r-1]=arguments[r];return typeof e=="function"?e.apply(void 0,o):e},H=function(e){return e.target.shadowRoot&&typeof e.composedPath=="function"?e.composedPath()[0]:e.target},at=[],ot=function(e,a){var o=a?.document||document,r=a?.trapStack||at,l=ie({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:nt,isKeyBackward:it},a),s={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},b,m=function(i,n,c){return i&&i[n]!==void 0?i[n]:l[c||n]},y=function(i,n){var c=typeof n?.composedPath=="function"?n.composedPath():void 0;return s.containerGroups.findIndex(function(u){var d=u.container,h=u.tabbableNodes;return d.contains(i)||c?.includes(d)||h.find(function(p){return p===i})})},x=function(i){var n=l[i];if(typeof n=="function"){for(var c=arguments.length,u=new Array(c>1?c-1:0),d=1;d<c;d++)u[d-1]=arguments[d];n=n.apply(void 0,u)}if(n===!0&&(n=void 0),!n){if(n===void 0||n===!1)return n;throw new Error("`".concat(i,"` was specified but was not a node, or did not return a node"))}var h=n;if(typeof n=="string"&&(h=o.querySelector(n),!h))throw new Error("`".concat(i,"` as selector refers to no known node"));return h},C=function(){var i=x("initialFocus");if(i===!1)return!1;if(i===void 0||!U(i,l.tabbableOptions))if(y(o.activeElement)>=0)i=o.activeElement;else{var n=s.tabbableGroups[0],c=n&&n.firstTabbableNode;i=c||x("fallbackFocus")}if(!i)throw new Error("Your focus-trap needs to have at least one focusable element");return i},D=function(){if(s.containerGroups=s.containers.map(function(i){var n=Be(i,l.tabbableOptions),c=Ae(i,l.tabbableOptions),u=n.length>0?n[0]:void 0,d=n.length>0?n[n.length-1]:void 0,h=c.find(function(g){return F(g)}),p=c.slice().reverse().find(function(g){return F(g)}),E=!!n.find(function(g){return I(g)>0});return{container:i,tabbableNodes:n,focusableNodes:c,posTabIndexesFound:E,firstTabbableNode:u,lastTabbableNode:d,firstDomTabbableNode:h,lastDomTabbableNode:p,nextTabbableNode:function(T){var A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,P=n.indexOf(T);return P<0?A?c.slice(c.indexOf(T)+1).find(function(O){return F(O)}):c.slice(0,c.indexOf(T)).reverse().find(function(O){return F(O)}):n[P+(A?1:-1)]}}}),s.tabbableGroups=s.containerGroups.filter(function(i){return i.tabbableNodes.length>0}),s.tabbableGroups.length<=0&&!x("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(s.containerGroups.find(function(i){return i.posTabIndexesFound})&&s.containerGroups.length>1)throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},Te=function f(i){var n=i.activeElement;if(n)return n.shadowRoot&&n.shadowRoot.activeElement!==null?f(n.shadowRoot):n},k=function f(i){if(i!==!1&&i!==Te(document)){if(!i||!i.focus){f(C());return}i.focus({preventScroll:!!l.preventScroll}),s.mostRecentlyFocusedNode=i,et(i)&&i.select()}},_=function(i){var n=x("setReturnFocus",i);return n||(n===!1?!1:i)},q=function(i){var n=i.target,c=i.event,u=i.isBackward,d=u===void 0?!1:u;n=n||H(c),D();var h=null;if(s.tabbableGroups.length>0){var p=y(n,c),E=p>=0?s.containerGroups[p]:void 0;if(p<0)d?h=s.tabbableGroups[s.tabbableGroups.length-1].lastTabbableNode:h=s.tabbableGroups[0].firstTabbableNode;else if(d){var g=se(s.tabbableGroups,function(z){var K=z.firstTabbableNode;return n===K});if(g<0&&(E.container===n||U(n,l.tabbableOptions)&&!F(n,l.tabbableOptions)&&!E.nextTabbableNode(n,!1))&&(g=p),g>=0){var T=g===0?s.tabbableGroups.length-1:g-1,A=s.tabbableGroups[T];h=I(n)>=0?A.lastTabbableNode:A.lastDomTabbableNode}else L(c)||(h=E.nextTabbableNode(n,!1))}else{var P=se(s.tabbableGroups,function(z){var K=z.lastTabbableNode;return n===K});if(P<0&&(E.container===n||U(n,l.tabbableOptions)&&!F(n,l.tabbableOptions)&&!E.nextTabbableNode(n))&&(P=p),P>=0){var O=P===s.tabbableGroups.length-1?0:P+1,Q=s.tabbableGroups[O];h=I(n)>=0?Q.firstTabbableNode:Q.firstDomTabbableNode}else L(c)||(h=E.nextTabbableNode(n))}}else h=x("fallbackFocus");return h},M=function(i){var n=H(i);if(!(y(n,i)>=0)){if(N(l.clickOutsideDeactivates,i)){b.deactivate({returnFocus:l.returnFocusOnDeactivate});return}N(l.allowOutsideClick,i)||i.preventDefault()}},Y=function(i){var n=H(i),c=y(n,i)>=0;if(c||n instanceof Document)c&&(s.mostRecentlyFocusedNode=n);else{i.stopImmediatePropagation();var u,d=!0;if(s.mostRecentlyFocusedNode)if(I(s.mostRecentlyFocusedNode)>0){var h=y(s.mostRecentlyFocusedNode),p=s.containerGroups[h].tabbableNodes;if(p.length>0){var E=p.findIndex(function(g){return g===s.mostRecentlyFocusedNode});E>=0&&(l.isKeyForward(s.recentNavEvent)?E+1<p.length&&(u=p[E+1],d=!1):E-1>=0&&(u=p[E-1],d=!1))}}else s.containerGroups.some(function(g){return g.tabbableNodes.some(function(T){return I(T)>0})})||(d=!1);else d=!1;d&&(u=q({target:s.mostRecentlyFocusedNode,isBackward:l.isKeyBackward(s.recentNavEvent)})),k(u||s.mostRecentlyFocusedNode||C())}s.recentNavEvent=void 0},Fe=function(i){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;s.recentNavEvent=i;var c=q({event:i,isBackward:n});c&&(L(i)&&i.preventDefault(),k(c))},V=function(i){if(tt(i)&&N(l.escapeDeactivates,i)!==!1){i.preventDefault(),b.deactivate();return}(l.isKeyForward(i)||l.isKeyBackward(i))&&Fe(i,l.isKeyBackward(i))},X=function(i){var n=H(i);y(n,i)>=0||N(l.clickOutsideDeactivates,i)||N(l.allowOutsideClick,i)||(i.preventDefault(),i.stopImmediatePropagation())},W=function(){if(s.active)return ae.activateTrap(r,b),s.delayInitialFocusTimer=l.delayInitialFocus?oe(function(){k(C())}):k(C()),o.addEventListener("focusin",Y,!0),o.addEventListener("mousedown",M,{capture:!0,passive:!1}),o.addEventListener("touchstart",M,{capture:!0,passive:!1}),o.addEventListener("click",X,{capture:!0,passive:!1}),o.addEventListener("keydown",V,{capture:!0,passive:!1}),b},J=function(){if(s.active)return o.removeEventListener("focusin",Y,!0),o.removeEventListener("mousedown",M,!0),o.removeEventListener("touchstart",M,!0),o.removeEventListener("click",X,!0),o.removeEventListener("keydown",V,!0),b},Ce=function(i){var n=i.some(function(c){var u=Array.from(c.removedNodes);return u.some(function(d){return d===s.mostRecentlyFocusedNode})});n&&k(C())},S=typeof window<"u"&&"MutationObserver"in window?new MutationObserver(Ce):void 0,B=function(){S&&(S.disconnect(),s.active&&!s.paused&&s.containers.map(function(i){S.observe(i,{subtree:!0,childList:!0})}))};return b={get active(){return s.active},get paused(){return s.paused},activate:function(i){if(s.active)return this;var n=m(i,"onActivate"),c=m(i,"onPostActivate"),u=m(i,"checkCanFocusTrap");u||D(),s.active=!0,s.paused=!1,s.nodeFocusedBeforeActivation=o.activeElement,n?.();var d=function(){u&&D(),W(),B(),c?.()};return u?(u(s.containers.concat()).then(d,d),this):(d(),this)},deactivate:function(i){if(!s.active)return this;var n=ie({onDeactivate:l.onDeactivate,onPostDeactivate:l.onPostDeactivate,checkCanReturnFocus:l.checkCanReturnFocus},i);clearTimeout(s.delayInitialFocusTimer),s.delayInitialFocusTimer=void 0,J(),s.active=!1,s.paused=!1,B(),ae.deactivateTrap(r,b);var c=m(n,"onDeactivate"),u=m(n,"onPostDeactivate"),d=m(n,"checkCanReturnFocus"),h=m(n,"returnFocus","returnFocusOnDeactivate");c?.();var p=function(){oe(function(){h&&k(_(s.nodeFocusedBeforeActivation)),u?.()})};return h&&d?(d(_(s.nodeFocusedBeforeActivation)).then(p,p),this):(p(),this)},pause:function(i){if(s.paused||!s.active)return this;var n=m(i,"onPause"),c=m(i,"onPostPause");return s.paused=!0,n?.(),J(),B(),c?.(),this},unpause:function(i){if(!s.paused||!s.active)return this;var n=m(i,"onUnpause"),c=m(i,"onPostUnpause");return s.paused=!1,n?.(),D(),W(),B(),c?.(),this},updateContainerElements:function(i){var n=[].concat(i).filter(Boolean);return s.containers=n.map(function(c){return typeof c=="string"?o.querySelector(c):c}),s.active&&D(),B(),this}},b.updateContainerElements(e),b};const st=globalThis.calciteConfig,rt=st?.focusTrapStack||[];function ct(t,e){const{el:a}=t,o=e?.focusTrapEl||a;if(!o)return;const r={clickOutsideDeactivates:!0,escapeDeactivates:!1,fallbackFocus:o,setReturnFocus:l=>(he(l),!1),...e?.focusTrapOptions,document:a.ownerDocument,tabbableOptions:De,trapStack:rt};t.focusTrap=ot(o,r)}function re(t,e){t.focusTrapDisabled||t.focusTrap?.activate(e)}function $(t,e){t.focusTrap?.deactivate(e)}function lt(t){t.focusTrap?.updateContainerElements(t.el)}/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */const w={container:"container",imageContainer:"image-container",closeButtonContainer:"close-button-container",closeButton:"close-button",content:"content",hasHeader:"has-header",header:"header",headerContent:"header-content",heading:"heading"},ut="auto",ce="aria-controls",le="aria-expanded";class dt{constructor(){this.registeredElements=new Map,this.registeredElementCount=0,this.queryPopover=e=>{const{registeredElements:a}=this,o=e.find(r=>a.has(r));return a.get(o)},this.togglePopovers=e=>{const a=e.composedPath(),o=this.queryPopover(a);o&&!o.triggerDisabled&&(o.open=!o.open),Array.from(this.registeredElements.values()).filter(r=>r!==o&&r.autoClose&&r.open&&!a.includes(r)).forEach(r=>r.open=!1)},this.keyHandler=e=>{e.defaultPrevented||(e.key==="Escape"?this.closeAllPopovers():be(e.key)&&this.togglePopovers(e))},this.clickHandler=e=>{G(e)&&this.togglePopovers(e)}}registerElement(e,a){this.registeredElementCount++,this.registeredElements.set(e,a),this.registeredElementCount===1&&this.addListeners()}unregisterElement(e){this.registeredElements.delete(e)&&this.registeredElementCount--,this.registeredElementCount===0&&this.removeListeners()}closeAllPopovers(){Array.from(this.registeredElements.values()).forEach(e=>e.open=!1)}addListeners(){document.addEventListener("pointerdown",this.clickHandler,{capture:!0}),document.addEventListener("keydown",this.keyHandler,{capture:!0})}removeListeners(){document.removeEventListener("pointerdown",this.clickHandler,{capture:!0}),document.removeEventListener("keydown",this.keyHandler,{capture:!0})}}const ft=":host{--calcite-floating-ui-z-index:var(--calcite-popover-z-index, var(--calcite-app-z-index-popup));display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index)}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-app-z-index);border-radius:0.25rem}:host([data-placement^=bottom]) .calcite-floating-ui-anim{transform:translateY(-5px)}:host([data-placement^=top]) .calcite-floating-ui-anim{transform:translateY(5px)}:host([data-placement^=left]) .calcite-floating-ui-anim{transform:translateX(5px)}:host([data-placement^=right]) .calcite-floating-ui-anim{transform:translateX(-5px)}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.calcite-floating-ui-arrow{pointer-events:none;position:absolute;z-index:calc(var(--calcite-app-z-index) * -1);fill:var(--calcite-ui-foreground-1)}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-ui-border-3)}:host([scale=s]) .heading{padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) .heading{padding-inline:1rem;padding-block:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) .heading{padding-inline:1.25rem;padding-block:1rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host{pointer-events:none}:host([open]){pointer-events:initial}.calcite-floating-ui-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1)}.arrow::before{outline:1px solid var(--calcite-ui-border-3)}.header{display:flex;flex:1 1 auto;align-items:stretch;justify-content:flex-start;border-width:0px;border-block-end-width:1px;border-style:solid;border-block-end-color:var(--calcite-ui-border-3)}.heading{margin:0px;display:block;flex:1 1 auto;align-self:center;white-space:normal;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);word-wrap:break-word;word-break:break-word}.container{position:relative;display:flex;block-size:100%;flex-direction:row;flex-wrap:nowrap;border-radius:0.25rem;color:var(--calcite-ui-text-1)}.container.has-header{flex-direction:column}.content{display:flex;block-size:100%;inline-size:100%;flex-direction:column;flex-wrap:nowrap;align-self:center;word-wrap:break-word;word-break:break-word}.close-button-container{display:flex;overflow:hidden;flex:0 0 auto;border-start-end-radius:0.25rem;border-end-end-radius:0.25rem}::slotted(calcite-panel),::slotted(calcite-flow){block-size:100%}:host([hidden]){display:none}[hidden]{display:none}",ue=new dt,ht=pe(class extends ve{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calcitePopoverBeforeClose=R(this,"calcitePopoverBeforeClose",6),this.calcitePopoverClose=R(this,"calcitePopoverClose",6),this.calcitePopoverBeforeOpen=R(this,"calcitePopoverBeforeOpen",6),this.calcitePopoverOpen=R(this,"calcitePopoverOpen",6),this.mutationObserver=Ve("mutation",()=>this.updateFocusTrapElements()),this.guid=`calcite-popover-${me()}`,this.openTransitionProp="opacity",this.hasLoaded=!1,this.setTransitionEl=t=>{this.transitionEl=t},this.setFilteredPlacements=()=>{const{el:t,flipPlacements:e}=this;this.filteredFlipPlacements=e?Me(e,t):null},this.setUpReferenceElement=(t=!0)=>{this.removeReferences(),this.effectiveReferenceElement=this.getReferenceElement(),He(this,this.effectiveReferenceElement,this.el);const{el:e,referenceElement:a,effectiveReferenceElement:o}=this;t&&a&&!o&&console.warn(`${e.tagName}: reference-element id "${a}" was not found.`,{el:e}),this.addReferences()},this.getId=()=>this.el.id||this.guid,this.setExpandedAttr=()=>{const{effectiveReferenceElement:t,open:e}=this;t&&"setAttribute"in t&&t.setAttribute(le,j(e))},this.addReferences=()=>{const{effectiveReferenceElement:t}=this;if(!t)return;const e=this.getId();"setAttribute"in t&&t.setAttribute(ce,e),ue.registerElement(t,this.el),this.setExpandedAttr()},this.removeReferences=()=>{const{effectiveReferenceElement:t}=this;t&&("removeAttribute"in t&&(t.removeAttribute(ce),t.removeAttribute(le)),ue.unregisterElement(t))},this.hide=()=>{this.open=!1},this.storeArrowEl=t=>{this.arrowEl=t,this.reposition(!0)},this.autoClose=!1,this.closable=!1,this.flipDisabled=!1,this.focusTrapDisabled=!1,this.pointerDisabled=!1,this.flipPlacements=void 0,this.heading=void 0,this.headingLevel=void 0,this.label=void 0,this.messageOverrides=void 0,this.messages=void 0,this.offsetDistance=Se,this.offsetSkidding=0,this.open=!1,this.overlayPositioning="absolute",this.placement=ut,this.referenceElement=void 0,this.scale="m",this.triggerDisabled=!1,this.effectiveLocale="",this.floatingLayout="vertical",this.effectiveReferenceElement=void 0,this.defaultMessages=void 0}handleFocusTrapDisabled(t){this.open&&(t?$(this):re(this))}flipPlacementsHandler(){this.setFilteredPlacements(),this.reposition(!0)}onMessagesChange(){}offsetDistanceOffsetHandler(){this.reposition(!0)}offsetSkiddingHandler(){this.reposition(!0)}openHandler(t){ee(this),t&&this.reposition(!0),this.setExpandedAttr()}overlayPositioningHandler(){this.reposition(!0)}placementHandler(){this.reposition(!0)}referenceElementHandler(){this.setUpReferenceElement(),this.reposition(!0)}effectiveLocaleChange(){$e(this,this.effectiveLocale)}connectedCallback(){this.setFilteredPlacements(),je(this),Ge(this),this.setUpReferenceElement(this.hasLoaded),ct(this),this.open&&ee(this)}async componentWillLoad(){await _e(this),ge(this)}componentDidLoad(){Ee(this),this.referenceElement&&!this.effectiveReferenceElement&&this.setUpReferenceElement(),this.reposition(),this.hasLoaded=!0}disconnectedCallback(){this.removeReferences(),qe(this),Ye(this),ze(this,this.effectiveReferenceElement,this.el),$(this)}async reposition(t=!1){const{el:e,effectiveReferenceElement:a,placement:o,overlayPositioning:r,flipDisabled:l,filteredFlipPlacements:s,offsetDistance:b,offsetSkidding:m,arrowEl:y}=this;return Ke(this,{floatingEl:e,referenceEl:a,overlayPositioning:r,placement:o,flipDisabled:l,flipPlacements:s,offsetDistance:b,offsetSkidding:m,arrowEl:y,type:"popover"},t)}async setFocus(){await ye(this),Oe(this.el),Ie(this.el)}async updateFocusTrapElements(){lt(this)}getReferenceElement(){const{referenceElement:t,el:e}=this;return(typeof t=="string"?Ne(e,{id:t}):t)||null}onBeforeOpen(){this.calcitePopoverBeforeOpen.emit()}onOpen(){this.calcitePopoverOpen.emit(),re(this)}onBeforeClose(){this.calcitePopoverBeforeClose.emit()}onClose(){this.calcitePopoverClose.emit(),$(this)}renderCloseButton(){const{messages:t,closable:e}=this;return e?v("div",{class:w.closeButtonContainer,key:w.closeButtonContainer},v("calcite-action",{appearance:"transparent",class:w.closeButton,onClick:this.hide,scale:this.scale,text:t.close,ref:a=>this.closeButtonEl=a},v("calcite-icon",{icon:"x",scale:Xe(this.scale)}))):null}renderHeader(){const{heading:t,headingLevel:e}=this,a=t?v(We,{class:w.heading,level:e},t):null;return a?v("div",{class:w.header,key:w.header},a,this.renderCloseButton()):null}render(){const{effectiveReferenceElement:t,heading:e,label:a,open:o,pointerDisabled:r,floatingLayout:l}=this,s=t&&o,b=!s,m=r?null:v(Ue,{floatingLayout:l,key:"floating-arrow",ref:this.storeArrowEl});return v(Re,{"aria-hidden":j(b),"aria-label":a,"aria-live":"polite","calcite-hydrated-hidden":b,id:this.getId(),role:"dialog"},v("div",{class:{[Z.animation]:!0,[Z.animationActive]:s},ref:this.setTransitionEl},m,v("div",{class:{[w.hasHeader]:!!e,[w.container]:!0}},this.renderHeader(),v("div",{class:w.content},v("slot",null)),e?null:this.renderCloseButton())))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{focusTrapDisabled:["handleFocusTrapDisabled"],flipPlacements:["flipPlacementsHandler"],messageOverrides:["onMessagesChange"],offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return ft}},[1,"calcite-popover",{autoClose:[516,"auto-close"],closable:[516],flipDisabled:[516,"flip-disabled"],focusTrapDisabled:[516,"focus-trap-disabled"],pointerDisabled:[516,"pointer-disabled"],flipPlacements:[16],heading:[1],headingLevel:[514,"heading-level"],label:[1],messageOverrides:[1040],messages:[1040],offsetDistance:[514,"offset-distance"],offsetSkidding:[514,"offset-skidding"],open:[1540],overlayPositioning:[513,"overlay-positioning"],placement:[513],referenceElement:[1,"reference-element"],scale:[513],triggerDisabled:[516,"trigger-disabled"],effectiveLocale:[32],floatingLayout:[32],effectiveReferenceElement:[32],defaultMessages:[32],reposition:[64],setFocus:[64],updateFocusTrapElements:[64]}]);function ke(){if(typeof customElements>"u")return;["calcite-popover","calcite-action","calcite-icon","calcite-loader"].forEach(e=>{switch(e){case"calcite-popover":customElements.get(e)||customElements.define(e,ht);break;case"calcite-action":customElements.get(e)||we();break;case"calcite-icon":customElements.get(e)||Pe();break;case"calcite-loader":customElements.get(e)||xe();break}})}ke();/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */const de={menu:"menu",defaultTrigger:"default-trigger"},fe={tooltip:"tooltip",trigger:"trigger"},pt={menu:"ellipsis"},vt="data-active",mt=`:host{box-sizing:border-box;display:flex;flex-direction:column;font-size:var(--calcite-font-size-1);color:var(--calcite-ui-text-2)}.menu ::slotted(calcite-action){margin:0.125rem;display:flex;outline-color:transparent}.menu ::slotted(calcite-action[data-active]){outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(
            2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-ui-focus-offset-invert),
                1
              )
            )
          );outline-offset:0px}.default-trigger{position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}slot[name=trigger]::slotted(calcite-action),calcite-action::slotted([slot=trigger]){position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}.menu{flex-direction:column;flex-wrap:nowrap;outline:2px solid transparent;outline-offset:2px}:host([hidden]){display:none}[hidden]{display:none}`,bt=["ArrowUp","ArrowDown","End","Home"],gt=pe(class extends ve{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteActionMenuOpen=R(this,"calciteActionMenuOpen",6),this.actionElements=[],this.guid=`calcite-action-menu-${me()}`,this.menuId=`${this.guid}-menu`,this.menuButtonId=`${this.guid}-menu-button`,this.connectMenuButtonEl=()=>{const{menuButtonId:t,menuId:e,open:a,label:o}=this,r=this.slottedMenuButtonEl||this.defaultMenuButtonEl;this.menuButtonEl!==r&&(this.disconnectMenuButtonEl(),this.menuButtonEl=r,this.setTooltipReferenceElement(),r&&(r.active=a,r.setAttribute("aria-controls",e),r.setAttribute("aria-expanded",j(a)),r.setAttribute("aria-haspopup","true"),r.id||(r.id=t),r.label||(r.label=o),r.text||(r.text=o),r.addEventListener("pointerdown",this.menuButtonClick),r.addEventListener("keydown",this.menuButtonKeyDown)))},this.disconnectMenuButtonEl=()=>{const{menuButtonEl:t}=this;t&&(t.removeEventListener("pointerdown",this.menuButtonClick),t.removeEventListener("keydown",this.menuButtonKeyDown))},this.setMenuButtonEl=t=>{const e=t.target.assignedElements({flatten:!0}).filter(a=>a?.matches("calcite-action"));this.slottedMenuButtonEl=e[0],this.connectMenuButtonEl()},this.setDefaultMenuButtonEl=t=>{this.defaultMenuButtonEl=t,this.connectMenuButtonEl()},this.handleCalciteActionClick=()=>{this.open=!1,this.setFocus()},this.menuButtonClick=t=>{G(t)&&this.toggleOpen()},this.updateTooltip=t=>{const e=t.target.assignedElements({flatten:!0}).filter(a=>a?.matches("calcite-tooltip"));this.tooltipEl=e[0],this.setTooltipReferenceElement()},this.setTooltipReferenceElement=()=>{const{tooltipEl:t,expanded:e,menuButtonEl:a,open:o}=this;t&&(t.referenceElement=!e&&!o?a:null)},this.updateAction=(t,e)=>{const{guid:a,activeMenuItemIndex:o}=this,r=`${a}-action-${e}`;t.tabIndex=-1,t.setAttribute("role","menuitem"),t.id||(t.id=r),t.toggleAttribute(vt,e===o)},this.updateActions=t=>{t?.forEach(this.updateAction)},this.handleDefaultSlotChange=t=>{const e=t.target.assignedElements({flatten:!0}).filter(a=>a?.matches("calcite-action"));this.actionElements=e},this.menuButtonKeyDown=t=>{const{key:e}=t,{actionElements:a,activeMenuItemIndex:o,open:r}=this;if(a.length){if(be(e)){if(t.preventDefault(),!r){this.toggleOpen();return}const l=a[o];l?l.click():this.toggleOpen(!1)}if(e==="Tab"){this.open=!1;return}if(e==="Escape"){this.toggleOpen(!1),t.preventDefault();return}this.handleActionNavigation(t,e,a)}},this.handleActionNavigation=(t,e,a)=>{if(!this.isValidKey(e,bt))return;if(t.preventDefault(),!this.open){this.toggleOpen(),(e==="Home"||e==="ArrowDown")&&(this.activeMenuItemIndex=0),(e==="End"||e==="ArrowUp")&&(this.activeMenuItemIndex=a.length-1);return}e==="Home"&&(this.activeMenuItemIndex=0),e==="End"&&(this.activeMenuItemIndex=a.length-1);const o=this.activeMenuItemIndex;e==="ArrowUp"&&(this.activeMenuItemIndex=te(Math.max(o-1,-1),a.length)),e==="ArrowDown"&&(this.activeMenuItemIndex=te(o+1,a.length))},this.toggleOpenEnd=()=>{this.setFocus(),this.el.removeEventListener("calcitePopoverOpen",this.toggleOpenEnd)},this.toggleOpen=(t=!this.open)=>{this.el.addEventListener("calcitePopoverOpen",this.toggleOpenEnd),this.open=t},this.appearance="solid",this.expanded=!1,this.flipPlacements=void 0,this.label=void 0,this.open=!1,this.overlayPositioning="absolute",this.placement="auto",this.scale=void 0,this.menuButtonEl=void 0,this.activeMenuItemIndex=-1}componentWillLoad(){ge(this)}componentDidLoad(){Ee(this)}disconnectedCallback(){this.disconnectMenuButtonEl()}expandedHandler(){this.open=!1,this.setTooltipReferenceElement()}openHandler(t){this.activeMenuItemIndex=this.open?0:-1,this.menuButtonEl&&(this.menuButtonEl.active=t),this.calciteActionMenuOpen.emit(),this.setTooltipReferenceElement()}closeCalciteActionMenuOnClick(t){!G(t)||t.composedPath().includes(this.el)||(this.open=!1)}activeMenuItemIndexHandler(){this.updateActions(this.actionElements)}async setFocus(){return await ye(this),he(this.menuButtonEl)}renderMenuButton(){const{appearance:t,label:e,scale:a,expanded:o}=this;return v("slot",{name:fe.trigger,onSlotchange:this.setMenuButtonEl},v("calcite-action",{appearance:t,class:de.defaultTrigger,icon:pt.menu,scale:a,text:e,textEnabled:o,ref:this.setDefaultMenuButtonEl}))}renderMenuItems(){const{actionElements:t,activeMenuItemIndex:e,open:a,menuId:o,menuButtonEl:r,label:l,placement:s,overlayPositioning:b,flipPlacements:m}=this,x=t[e]?.id||null;return v("calcite-popover",{flipPlacements:m,focusTrapDisabled:!0,label:l,offsetDistance:0,open:a,overlayPositioning:b,placement:s,pointerDisabled:!0,referenceElement:r},v("div",{"aria-activedescendant":x,"aria-labelledby":r?.id,class:de.menu,id:o,onClick:this.handleCalciteActionClick,role:"menu",tabIndex:-1},v("slot",{onSlotchange:this.handleDefaultSlotChange})))}render(){return v(Le,null,this.renderMenuButton(),this.renderMenuItems(),v("slot",{name:fe.tooltip,onSlotchange:this.updateTooltip}))}isValidKey(t,e){return!!e.find(a=>a===t)}get el(){return this}static get watchers(){return{expanded:["expandedHandler"],open:["openHandler"],activeMenuItemIndex:["activeMenuItemIndexHandler"]}}static get style(){return mt}},[1,"calcite-action-menu",{appearance:[513],expanded:[516],flipPlacements:[16],label:[1],open:[1540],overlayPositioning:[513,"overlay-positioning"],placement:[513],scale:[513],menuButtonEl:[32],activeMenuItemIndex:[32],setFocus:[64]},[[9,"pointerdown","closeCalciteActionMenuOnClick"]]]);function Et(){if(typeof customElements>"u")return;["calcite-action-menu","calcite-action","calcite-icon","calcite-loader","calcite-popover"].forEach(e=>{switch(e){case"calcite-action-menu":customElements.get(e)||customElements.define(e,gt);break;case"calcite-action":customElements.get(e)||we();break;case"calcite-icon":customElements.get(e)||Pe();break;case"calcite-loader":customElements.get(e)||xe();break;case"calcite-popover":customElements.get(e)||ke();break}})}Et();export{We as H,fe as S,Et as a,ke as d};
