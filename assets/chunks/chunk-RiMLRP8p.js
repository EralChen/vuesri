import{h2 as le,qu as ct,lP as ft,qv as dt,qw as pt,qc as ht,h8 as Me,h3 as Le,hf as R,h5 as Y,h6 as ue,h9 as m,hc as j,ha as E,hn as gt,lJ as Ve,oE as Fe,qx as ze,oL as I,oM as M,lp as Ue,nt as Ge,hg as yt,hh as He,hd as _t,ly as vt,hi as mt,h7 as k,qy as bt}from"./chunk-gZYsZ36N.js";import{V as $t}from"./chunk-jHUwkOTJ.js";import{V as wt}from"./chunk-eL7rTImP.js";import{V as Tt}from"./chunk-9FkaBJ-M.js";import"./chunk-t4TbIqUg.js";import"./chunk-B3AFDltd.js";import"./chunk-pR8IN3Kg.js";import"./chunk-5yhB8Y-n.js";import"./chunk-AKBpUdIm.js";import"./chunk-8dd3L-WV.js";import"./chunk-GWlnAQeV.js";import"./chunk-80lo0Aq7.js";import"./chunk-jDrT5IC_.js";import"./chunk-u9gmVhyK.js";import"./chunk-2bs7e3B8.js";import"./chunk-MEWVNnB1.js";import"./chunk-_piOf1Cc.js";import"./chunk-ynt3b8_I.js";const Ke=()=>{};var de;const Ot=typeof window<"u";Ot&&((de=window?.navigator)!=null&&de.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);/*! Element Plus Icons Vue v2.1.0 */var Pt=(e,t)=>{let r=e.__vccOpts||e;for(let[n,o]of t)r[n]=o;return r},St={name:"Search"},At={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},jt=He("path",{fill:"currentColor",d:"m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"},null,-1),Et=[jt];function Ct(e,t,r,n,o,a){return Y(),yt("svg",At,Et)}var xt=Pt(St,[["render",Ct],["__file","search.vue"]]);const Dt=e=>e,Bt=Dt([String,Object,Function]),ke={data:{type:Array,default:()=>[]},emptyText:{type:String},renderAfterExpand:{type:Boolean,default:!0},nodeKey:String,checkStrictly:Boolean,defaultExpandAll:Boolean,expandOnClickNode:{type:Boolean,default:!0},checkOnClickNode:Boolean,checkDescendants:{type:Boolean,default:!1},autoExpandParent:{type:Boolean,default:!0},defaultCheckedKeys:Array,defaultExpandedKeys:Array,currentNodeKey:[String,Number],renderContent:Function,showCheckbox:{type:Boolean,default:!1},draggable:{type:Boolean,default:!1},allowDrag:Function,allowDrop:Function,props:{type:Object,default:()=>({children:"children",label:"label",disabled:"disabled",isLeaf:"isLeaf"})},lazy:{type:Boolean,default:!1},highlightCurrent:Boolean,load:Function,filterNodeMethod:Function,accordion:Boolean,indent:{type:Number,default:18},icon:{type:Bt}},Nt=Ue(ke),qe={checkChange:null,currentChange:null,nodeClick:null,nodeContextmenu:null,nodeCollapse:null,nodeExpand:null,check:null,nodeDragStart:null,nodeDragEnd:null,nodeDrop:null,nodeDragLeave:null,nodeDragEnter:null,nodeDragOver:null},Rt=Ge(qe);var It=Object.defineProperty,Mt=Object.defineProperties,Lt=Object.getOwnPropertyDescriptors,pe=Object.getOwnPropertySymbols,Vt=Object.prototype.hasOwnProperty,Ft=Object.prototype.propertyIsEnumerable,he=(e,t,r)=>t in e?It(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,We=(e,t)=>{for(var r in t||(t={}))Vt.call(t,r)&&he(e,r,t[r]);if(pe)for(var r of pe(t))Ft.call(t,r)&&he(e,r,t[r]);return e},Je=(e,t)=>Mt(e,Lt(t));const ce=Je(We({},ke),{elRef:{type:Function,default:Ke},modules:{type:Array,default:()=>["filter"]},filterNodeMethod:{type:Function,default:void 0},filterText:{type:String,default:void 0}}),zt=Ue(ce),fe=Je(We({},qe),{"update:filterText":null}),Ut=Ge(fe);var W=Object.freeze({__proto__:null,props:ce,createBindProps:zt,emits:fe,createOnEmits:Ut}),C=le({name:"VkTree",components:{VkDuplexCalc:ct,ElTree:ft,VkWrapper:dt,ElScrollbar:pt},emits:fe,props:ce,setup(e,t){const r=Nt(e),n=Rt(t.emit),o=ht({default:"",key:"filterText"},e,t.emit),a=Me(),l=(i,h)=>i?h.label.toLowerCase().includes(i.toLowerCase()):!0;return Le(o,i=>{var h;(h=a.value)==null||h.filter(i)}),{treeRef:a,coreProps:r,coreEmits:n,Search:xt,filterText:o,filterNode:l,setRef:i=>{a.value=i,e.elRef(i)},hasSlot:i=>!!t.slots[i]}}});function Gt(e,t,r,n,o,a){const l=R("el-input"),s=R("ElTree"),g=R("VkWrapper"),i=R("VkDuplexCalc");return Y(),ue(i,null,{one:m(()=>[e.modules.includes("filter")?j(e.$slots,"filter",{key:0,modelValue:e.filterText},()=>[E(l,{size:"large","prefix-icon":e.Search,modelValue:e.filterText,"onUpdate:modelValue":t[0]||(t[0]=h=>e.filterText=h),placeholder:"请输入搜索内容"},null,8,["prefix-icon","modelValue"])]):gt("v-if",!0)]),default:m(()=>[E(g,{is:"ElScrollbar",show:e.modules.includes("srcollbar")},{default:m(()=>[E(s,Ve({class:"vk-tree",ref:e.setRef},e.coreProps,Fe(e.coreEmits),{filterNodeMethod:e.coreProps.filterNodeMethod||e.filterNode}),ze({_:2},[e.hasSlot("default")?{name:"default",fn:m(h=>[j(e.$slots,"default",I(M(h)))]),key:"0"}:void 0,e.hasSlot("empty")?{name:"empty",fn:m(h=>[j(e.$slots,"empty",I(M(h)))]),key:"1"}:void 0]),1040,["filterNodeMethod"])]),_:3},8,["show"])]),_:3})}C.render=Gt;C.__file="tree/src/index.vue";C.install=e=>{e.component(C.name,C)};var Ht=Object.defineProperty,Kt=Object.defineProperties,kt=Object.getOwnPropertyDescriptors,ge=Object.getOwnPropertySymbols,qt=Object.prototype.hasOwnProperty,Wt=Object.prototype.propertyIsEnumerable,ye=(e,t,r)=>t in e?Ht(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Xe=(e,t)=>{for(var r in t||(t={}))qt.call(t,r)&&ye(e,r,t[r]);if(ge)for(var r of ge(t))Wt.call(t,r)&&ye(e,r,t[r]);return e},Ye=(e,t)=>Kt(e,kt(t));const Jt=Ye(Xe({},W.props),{data:{type:Array,default:()=>[]},modelValue:{type:Array,default:()=>[]},clearModelValue:{type:Boolean,default:!1},getChildren:{type:Function,default:Ke},single:{type:Boolean,default:!1}}),Xt=Ye(Xe({},W.emits),{"update:modelValue":null});var Yt=typeof global=="object"&&global&&global.Object===Object&&global,Ze=Yt,Zt=typeof self=="object"&&self&&self.Object===Object&&self,Qt=Ze||Zt||Function("return this")(),$=Qt,er=$.Symbol,D=er,Qe=Object.prototype,tr=Qe.hasOwnProperty,rr=Qe.toString,N=D?D.toStringTag:void 0;function nr(e){var t=tr.call(e,N),r=e[N];try{e[N]=void 0;var n=!0}catch{}var o=rr.call(e);return n&&(t?e[N]=r:delete e[N]),o}var ar=Object.prototype,or=ar.toString;function ir(e){return or.call(e)}var sr="[object Null]",lr="[object Undefined]",_e=D?D.toStringTag:void 0;function U(e){return e==null?e===void 0?lr:sr:_e&&_e in Object(e)?nr(e):ir(e)}function V(e){return e!=null&&typeof e=="object"}var ur=Array.isArray,J=ur;function et(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var cr="[object AsyncFunction]",fr="[object Function]",dr="[object GeneratorFunction]",pr="[object Proxy]";function tt(e){if(!et(e))return!1;var t=U(e);return t==fr||t==dr||t==cr||t==pr}var hr=$["__core-js_shared__"],ee=hr,ve=function(){var e=/[^.]+$/.exec(ee&&ee.keys&&ee.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function gr(e){return!!ve&&ve in e}var yr=Function.prototype,_r=yr.toString;function S(e){if(e!=null){try{return _r.call(e)}catch{}try{return e+""}catch{}}return""}var vr=/[\\^$.*+?()[\]{}|]/g,mr=/^\[object .+?Constructor\]$/,br=Function.prototype,$r=Object.prototype,wr=br.toString,Tr=$r.hasOwnProperty,Or=RegExp("^"+wr.call(Tr).replace(vr,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Pr(e){if(!et(e)||gr(e))return!1;var t=tt(e)?Or:mr;return t.test(S(e))}function Sr(e,t){return e?.[t]}function B(e,t){var r=Sr(e,t);return Pr(r)?r:void 0}var Ar=B($,"WeakMap"),ne=Ar,jr=9007199254740991,Er=/^(?:0|[1-9]\d*)$/;function Cr(e,t){var r=typeof e;return t=t??jr,!!t&&(r=="number"||r!="symbol"&&Er.test(e))&&e>-1&&e%1==0&&e<t}function rt(e,t){return e===t||e!==e&&t!==t}var xr=9007199254740991;function nt(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=xr}function Dr(e){return e!=null&&nt(e.length)&&!tt(e)}var Br=Object.prototype;function Nr(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||Br;return e===r}function Rr(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}var Ir="[object Arguments]";function me(e){return V(e)&&U(e)==Ir}var at=Object.prototype,Mr=at.hasOwnProperty,Lr=at.propertyIsEnumerable,Vr=me(function(){return arguments}())?me:function(e){return V(e)&&Mr.call(e,"callee")&&!Lr.call(e,"callee")},Fr=Vr;function zr(){return!1}var ot=typeof exports=="object"&&exports&&!exports.nodeType&&exports,be=ot&&typeof module=="object"&&module&&!module.nodeType&&module,Ur=be&&be.exports===ot,$e=Ur?$.Buffer:void 0,Gr=$e?$e.isBuffer:void 0,Hr=Gr||zr,ae=Hr,Kr="[object Arguments]",kr="[object Array]",qr="[object Boolean]",Wr="[object Date]",Jr="[object Error]",Xr="[object Function]",Yr="[object Map]",Zr="[object Number]",Qr="[object Object]",en="[object RegExp]",tn="[object Set]",rn="[object String]",nn="[object WeakMap]",an="[object ArrayBuffer]",on="[object DataView]",sn="[object Float32Array]",ln="[object Float64Array]",un="[object Int8Array]",cn="[object Int16Array]",fn="[object Int32Array]",dn="[object Uint8Array]",pn="[object Uint8ClampedArray]",hn="[object Uint16Array]",gn="[object Uint32Array]",f={};f[sn]=f[ln]=f[un]=f[cn]=f[fn]=f[dn]=f[pn]=f[hn]=f[gn]=!0;f[Kr]=f[kr]=f[an]=f[qr]=f[on]=f[Wr]=f[Jr]=f[Xr]=f[Yr]=f[Zr]=f[Qr]=f[en]=f[tn]=f[rn]=f[nn]=!1;function yn(e){return V(e)&&nt(e.length)&&!!f[U(e)]}function _n(e){return function(t){return e(t)}}var it=typeof exports=="object"&&exports&&!exports.nodeType&&exports,L=it&&typeof module=="object"&&module&&!module.nodeType&&module,vn=L&&L.exports===it,te=vn&&Ze.process,mn=function(){try{var e=L&&L.require&&L.require("util").types;return e||te&&te.binding&&te.binding("util")}catch{}}(),we=mn,Te=we&&we.isTypedArray,bn=Te?_n(Te):yn,st=bn,$n=Object.prototype,wn=$n.hasOwnProperty;function Tn(e,t){var r=J(e),n=!r&&Fr(e),o=!r&&!n&&ae(e),a=!r&&!n&&!o&&st(e),l=r||n||o||a,s=l?Rr(e.length,String):[],g=s.length;for(var i in e)(t||wn.call(e,i))&&!(l&&(i=="length"||o&&(i=="offset"||i=="parent")||a&&(i=="buffer"||i=="byteLength"||i=="byteOffset")||Cr(i,g)))&&s.push(i);return s}function On(e,t){return function(r){return e(t(r))}}var Pn=On(Object.keys,Object),Sn=Pn,An=Object.prototype,jn=An.hasOwnProperty;function En(e){if(!Nr(e))return Sn(e);var t=[];for(var r in Object(e))jn.call(e,r)&&r!="constructor"&&t.push(r);return t}function Cn(e){return Dr(e)?Tn(e):En(e)}var xn=B(Object,"create"),F=xn;function Dn(){this.__data__=F?F(null):{},this.size=0}function Bn(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Nn="__lodash_hash_undefined__",Rn=Object.prototype,In=Rn.hasOwnProperty;function Mn(e){var t=this.__data__;if(F){var r=t[e];return r===Nn?void 0:r}return In.call(t,e)?t[e]:void 0}var Ln=Object.prototype,Vn=Ln.hasOwnProperty;function Fn(e){var t=this.__data__;return F?t[e]!==void 0:Vn.call(t,e)}var zn="__lodash_hash_undefined__";function Un(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=F&&t===void 0?zn:t,this}function P(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}P.prototype.clear=Dn;P.prototype.delete=Bn;P.prototype.get=Mn;P.prototype.has=Fn;P.prototype.set=Un;function Gn(){this.__data__=[],this.size=0}function Z(e,t){for(var r=e.length;r--;)if(rt(e[r][0],t))return r;return-1}var Hn=Array.prototype,Kn=Hn.splice;function kn(e){var t=this.__data__,r=Z(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():Kn.call(t,r,1),--this.size,!0}function qn(e){var t=this.__data__,r=Z(t,e);return r<0?void 0:t[r][1]}function Wn(e){return Z(this.__data__,e)>-1}function Jn(e,t){var r=this.__data__,n=Z(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this}function w(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}w.prototype.clear=Gn;w.prototype.delete=kn;w.prototype.get=qn;w.prototype.has=Wn;w.prototype.set=Jn;var Xn=B($,"Map"),z=Xn;function Yn(){this.size=0,this.__data__={hash:new P,map:new(z||w),string:new P}}function Zn(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Q(e,t){var r=e.__data__;return Zn(t)?r[typeof t=="string"?"string":"hash"]:r.map}function Qn(e){var t=Q(this,e).delete(e);return this.size-=t?1:0,t}function ea(e){return Q(this,e).get(e)}function ta(e){return Q(this,e).has(e)}function ra(e,t){var r=Q(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this}function A(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}A.prototype.clear=Yn;A.prototype.delete=Qn;A.prototype.get=ea;A.prototype.has=ta;A.prototype.set=ra;function na(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}function aa(){this.__data__=new w,this.size=0}function oa(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}function ia(e){return this.__data__.get(e)}function sa(e){return this.__data__.has(e)}var la=200;function ua(e,t){var r=this.__data__;if(r instanceof w){var n=r.__data__;if(!z||n.length<la-1)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new A(n)}return r.set(e,t),this.size=r.size,this}function T(e){var t=this.__data__=new w(e);this.size=t.size}T.prototype.clear=aa;T.prototype.delete=oa;T.prototype.get=ia;T.prototype.has=sa;T.prototype.set=ua;function ca(e,t){for(var r=-1,n=e==null?0:e.length,o=0,a=[];++r<n;){var l=e[r];t(l,r,e)&&(a[o++]=l)}return a}function fa(){return[]}var da=Object.prototype,pa=da.propertyIsEnumerable,Oe=Object.getOwnPropertySymbols,ha=Oe?function(e){return e==null?[]:(e=Object(e),ca(Oe(e),function(t){return pa.call(e,t)}))}:fa,ga=ha;function ya(e,t,r){var n=t(e);return J(e)?n:na(n,r(e))}function Pe(e){return ya(e,Cn,ga)}var _a=B($,"DataView"),oe=_a,va=B($,"Promise"),ie=va,ma=B($,"Set"),se=ma,Se="[object Map]",ba="[object Object]",Ae="[object Promise]",je="[object Set]",Ee="[object WeakMap]",Ce="[object DataView]",$a=S(oe),wa=S(z),Ta=S(ie),Oa=S(se),Pa=S(ne),O=U;(oe&&O(new oe(new ArrayBuffer(1)))!=Ce||z&&O(new z)!=Se||ie&&O(ie.resolve())!=Ae||se&&O(new se)!=je||ne&&O(new ne)!=Ee)&&(O=function(e){var t=U(e),r=t==ba?e.constructor:void 0,n=r?S(r):"";if(n)switch(n){case $a:return Ce;case wa:return Se;case Ta:return Ae;case Oa:return je;case Pa:return Ee}return t});var xe=O,Sa=$.Uint8Array,De=Sa,Aa="__lodash_hash_undefined__";function ja(e){return this.__data__.set(e,Aa),this}function Ea(e){return this.__data__.has(e)}function X(e){var t=-1,r=e==null?0:e.length;for(this.__data__=new A;++t<r;)this.add(e[t])}X.prototype.add=X.prototype.push=ja;X.prototype.has=Ea;function Ca(e,t){for(var r=-1,n=e==null?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}function xa(e,t){return e.has(t)}var Da=1,Ba=2;function lt(e,t,r,n,o,a){var l=r&Da,s=e.length,g=t.length;if(s!=g&&!(l&&g>s))return!1;var i=a.get(e),h=a.get(t);if(i&&h)return i==t&&h==e;var p=-1,u=!0,_=r&Ba?new X:void 0;for(a.set(e,t),a.set(t,e);++p<s;){var d=e[p],c=t[p];if(n)var y=l?n(c,d,p,t,e,a):n(d,c,p,e,t,a);if(y!==void 0){if(y)continue;u=!1;break}if(_){if(!Ca(t,function(v,b){if(!xa(_,b)&&(d===v||o(d,v,r,n,a)))return _.push(b)})){u=!1;break}}else if(!(d===c||o(d,c,r,n,a))){u=!1;break}}return a.delete(e),a.delete(t),u}function Na(e){var t=-1,r=Array(e.size);return e.forEach(function(n,o){r[++t]=[o,n]}),r}function Ra(e){var t=-1,r=Array(e.size);return e.forEach(function(n){r[++t]=n}),r}var Ia=1,Ma=2,La="[object Boolean]",Va="[object Date]",Fa="[object Error]",za="[object Map]",Ua="[object Number]",Ga="[object RegExp]",Ha="[object Set]",Ka="[object String]",ka="[object Symbol]",qa="[object ArrayBuffer]",Wa="[object DataView]",Be=D?D.prototype:void 0,re=Be?Be.valueOf:void 0;function Ja(e,t,r,n,o,a,l){switch(r){case Wa:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case qa:return!(e.byteLength!=t.byteLength||!a(new De(e),new De(t)));case La:case Va:case Ua:return rt(+e,+t);case Fa:return e.name==t.name&&e.message==t.message;case Ga:case Ka:return e==t+"";case za:var s=Na;case Ha:var g=n&Ia;if(s||(s=Ra),e.size!=t.size&&!g)return!1;var i=l.get(e);if(i)return i==t;n|=Ma,l.set(e,t);var h=lt(s(e),s(t),n,o,a,l);return l.delete(e),h;case ka:if(re)return re.call(e)==re.call(t)}return!1}var Xa=1,Ya=Object.prototype,Za=Ya.hasOwnProperty;function Qa(e,t,r,n,o,a){var l=r&Xa,s=Pe(e),g=s.length,i=Pe(t),h=i.length;if(g!=h&&!l)return!1;for(var p=g;p--;){var u=s[p];if(!(l?u in t:Za.call(t,u)))return!1}var _=a.get(e),d=a.get(t);if(_&&d)return _==t&&d==e;var c=!0;a.set(e,t),a.set(t,e);for(var y=l;++p<g;){u=s[p];var v=e[u],b=t[u];if(n)var G=l?n(b,v,u,t,e,a):n(v,b,u,e,t,a);if(!(G===void 0?v===b||o(v,b,r,n,a):G)){c=!1;break}y||(y=u=="constructor")}if(c&&!y){var H=e.constructor,K=t.constructor;H!=K&&"constructor"in e&&"constructor"in t&&!(typeof H=="function"&&H instanceof H&&typeof K=="function"&&K instanceof K)&&(c=!1)}return a.delete(e),a.delete(t),c}var eo=1,Ne="[object Arguments]",Re="[object Array]",q="[object Object]",to=Object.prototype,Ie=to.hasOwnProperty;function ro(e,t,r,n,o,a){var l=J(e),s=J(t),g=l?Re:xe(e),i=s?Re:xe(t);g=g==Ne?q:g,i=i==Ne?q:i;var h=g==q,p=i==q,u=g==i;if(u&&ae(e)){if(!ae(t))return!1;l=!0,h=!1}if(u&&!h)return a||(a=new T),l||st(e)?lt(e,t,r,n,o,a):Ja(e,t,g,r,n,o,a);if(!(r&eo)){var _=h&&Ie.call(e,"__wrapped__"),d=p&&Ie.call(t,"__wrapped__");if(_||d){var c=_?e.value():e,y=d?t.value():t;return a||(a=new T),o(c,y,r,n,a)}}return u?(a||(a=new T),Qa(e,t,r,n,o,a)):!1}function ut(e,t,r,n,o){return e===t?!0:e==null||t==null||!V(e)&&!V(t)?e!==e&&t!==t:ro(e,t,r,n,ut,o)}function no(e,t){return ut(e,t)}var x=le({name:"VkCheckboxTree",components:{VkTree:C},emits:Xt,props:Jt,setup(e,{emit:t,slots:r}){const n=W.createBindProps(e,["load","elRef"]),o=W.createOnEmits(t),a=new _t;a.promise.then(p=>{var u;(u=e.elRef)==null||u.call(e,p)});const l=vt(()=>e.single?!0:e.checkStrictly),s=e.nodeKey||"id";return Le(()=>[...e.modelValue],(p,u)=>{const _=p.reduce((c,y)=>(y&&c.push(y[s]),c),[]),d=u?.reduce((c,y)=>(y&&c.push(y[s]),c),[])||[];no(_,d)||a.promise.then(c=>{c.setCheckedKeys(_)})},{immediate:!0}),{treeDef:a,coreBindProps:n,coreOnEmits:o,checkHandler:async(p,u)=>{let d=(await a.promise).getCheckedNodes();if(e.clearModelValue){const c=new Set;d=d.reduce((y,v)=>{var b;return(b=v.children)!=null&&b.length&&v.children.forEach(G=>{c.add(G[s])}),c.has(v[s])||y.push(v),y},[])}e.single&&u.checkedNodes.length>1&&(d=[p]),t("update:modelValue",d||[])},loadNode:async(p,u)=>{var _;p.level===0&&u(e.data);const d=p.data;if((_=d.children)!=null&&_.length)u(d.children);else{const c=await e.getChildren(d);c&&(d.children=c),u(c??[])}},idKey:s,checkStrictly:l,hasSlot:p=>!!r[p]}}});function ao(e,t,r,n,o,a){const l=R("VkTree");return Y(),ue(l,Ve(e.coreBindProps,Fe(e.coreOnEmits),{checkStrictly:e.checkStrictly,showCheckbox:!0,nodeKey:e.idKey,elRef:e.treeDef.resolve,onCheck:e.checkHandler,load:e.coreBindProps.lazy?e.loadNode:void 0}),ze({_:2},[e.hasSlot("filter")?{name:"filter",fn:m(s=>[j(e.$slots,"filter",I(M(s)))]),key:"0"}:void 0,e.hasSlot("default")?{name:"default",fn:m(s=>[j(e.$slots,"default",I(M(s)))]),key:"1"}:void 0,e.hasSlot("empty")?{name:"empty",fn:m(s=>[j(e.$slots,"empty",I(M(s)))]),key:"2"}:void 0]),1040,["checkStrictly","nodeKey","elRef","onCheck","load"])}x.render=ao;x.__file="checkbox-tree/src/index.vue";x.install=e=>{e.component(x.name,x)};const Oo=le({__name:"index",setup(e){const t=Me([]),r=[{label:"Root1",id:"1",isLeaf:!1,children:[{label:"1-1",id:"1-1",isLeaf:!0}]},{label:"Root2",id:"2",isLeaf:!1}],n=async o=>{if(await bt(500),o.id==="2")return[{label:`${o.label}-1`,id:`${o.id}-1`,isLeaf:!0},{label:`${o.label}-2`,id:`${o.id}-2`,isLeaf:!0}]};return(o,a)=>(Y(),ue(k($t),null,{before:m(()=>[He("p",null,"checked: "+mt(t.value),1)]),default:m(()=>[E(k(wt),{type:"vec_c",spatialReference:{wkid:4326}}),E(k(Tt),null,{default:m(()=>[E(k(x),{lazy:!0,data:r,getChildren:n,clearModelValue:!0,modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=l=>t.value=l)},null,8,["modelValue"])]),_:1})]),_:1}))}});export{Oo as default};