import{$ as m,j as c}from"./chunk-nmIJnEFW.js";import{l as u,j as y,k as s,m as f}from"./chunk-xdbuWCSg.js";import"./chunk-t4TbIqUg.js";const n="Stream Service",p="Feed",d="stream-layer-save",v="stream-layer-save-as";function i(r){return{isValid:r.type==="stream"&&!!r.url&&!r.webSocketUrl,errorMessage:"Stream layer should be created using a url to a stream service"}}function l(r){const e=r.layerJSON;return Promise.resolve(e&&Object.keys(e).length?e:null)}async function x(r,e){const{parsedUrl:t,title:o,fullExtent:a}=r;e.url=t.path,e.title||=o,e.extent=null,a!=null&&(e.extent=await u(a)),y(e,s.METADATA),f(e,s.SINGLE_LAYER)}async function T(r,e){return m({layer:r,itemType:n,additionalItemType:p,validateLayer:i,createItemData:l,errorNamePrefix:d},e)}async function E(r,e,t){return c({layer:r,itemType:n,validateLayer:i,createItemData:l,errorNamePrefix:v,newItem:e,setItemProperties:x},t)}export{T as save,E as saveAs};