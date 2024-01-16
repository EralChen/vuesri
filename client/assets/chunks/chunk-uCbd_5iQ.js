import{S as I,w as b,v as g,i as c,s as l,x as h,q as S}from"./chunk-8J0p1hu6.js";import{o as m}from"./chunk-BqDkEJ-e.js";function x(t,r,a){const e=a(t);if(!e.isValid)throw new l(`${r}:invalid-parameters`,e.errorMessage,{layer:t})}async function f(t){const{layer:r,errorNamePrefix:a,validateLayer:e}=t;await r.load(),x(r,a,e)}function u(t,r){return`Layer (title: ${t.title}, id: ${t.id}) of type '${t.declaredClass}' ${r}`}function y(t){const{item:r,itemType:a,errorNamePrefix:e,layer:n,validateItem:s}=t;if(h(r),r.type!==a)throw new l(`${e}:portal-item-wrong-type`,`Portal item type should be "${a}"`,{item:r,layer:n});if(s){const i=s(r);if(!i.isValid)throw new l(`${e}:invalid-parameters`,i.errorMessage,{layer:n})}}function N(t){const{layer:r,errorNamePrefix:a}=t,{portalItem:e}=r;if(!e)throw new l(`${a}:portal-item-not-set`,u(r,"requires the portalItem property to be set"));if(!e.loaded)throw new l(`${a}:portal-item-not-loaded`,u(r,"cannot be saved to a portal item that does not exist or is inaccessible"));y({...t,item:e})}function P(t){const{newItem:r,itemType:a}=t;let e=I.from(r);return e.id&&(e=e.clone(),e.id=null),e.type??=a,e.portal??=b.getDefault(),y({...t,item:e}),e}function O(t,r){let a=(t.messages??[]).filter(({type:e})=>e==="error").map(({name:e,message:n,details:s})=>new l(e,n,s));if(t.blockedRelativeUrls&&(a=a.concat(t.blockedRelativeUrls.map(e=>new l("url:unsupported",`Relative url '${e}' is not supported`)))),r?.ignoreUnsupported&&(a=a.filter(({name:e})=>e!=="layer:unsupported"&&e!=="symbol:unsupported"&&e!=="symbol-layer:unsupported"&&e!=="property:unsupported"&&e!=="url:unsupported")),a.length>0)throw new l("layer-write:unsupported","Failed to save layer due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:a})}async function w(t,r,a){"beforeSave"in t&&typeof t.beforeSave=="function"&&await t.beforeSave();const e=t.write({},r);return await Promise.all(r.resources?.pendingOperations??[]),O(r,a),e}function v(t){g(t,S.JSAPI),t.typeKeywords&&(t.typeKeywords=t.typeKeywords.filter((r,a,e)=>e.indexOf(r)===a))}async function J(t,r,a){const e=t.portal;await e.signIn(),await e.user?.addItem({item:t,data:r,folder:a?.folder})}async function D(t,r){const{layer:a,createItemData:e,createJSONContext:n,saveResources:s}=t;await f(t),N(t);const i=a.portalItem,o=n?n(i):m(i),p=await w(a,o,r),d=await e({layer:a,layerJSON:p},i);return v(i),await i.update({data:d}),c(o),await s?.(i,o),i}async function K(t,r){const{layer:a,createItemData:e,createJSONContext:n,setItemProperties:s,saveResources:i}=t;await f(t);const o=P(t),p=n?n(o):m(o),d=await w(a,p,r),$=await e({layer:a,layerJSON:d},o);return await s(a,o),v(o),await J(o,$,r),a.portalItem=o,c(p),await i?.(o,p),o}export{D as I,K as b,N as d,x as l,u as m,P as u,J as v,v as w,w as y};
