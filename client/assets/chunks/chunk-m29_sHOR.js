import{_ as d}from"./chunk-EUQwHdIv.js";import{f1 as v,s as t,y,f2 as u,bT as p,f3 as b,dQ as c}from"./chunk-8J0p1hu6.js";let n=l();function l(){return new v(50)}function T(){n=l()}async function x(e,r){if(e.resource?.href)return w(e.resource.href).then(i=>[i.width,i.height]);if(e.resource?.primitive)return r!=null?[r,r]:[256,256];throw new t("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function w(e){return y(e,{responseType:"image"}).then(r=>r.data)}async function B(e,r=null){if(!e.isPrimitive){const o=e.resource.href;if(!o)throw new t("symbol:invalid-resource","The symbol does not have a valid resource");const s=n.get(o);if(s!==void 0)return s;const{fetch:f}=await d(()=>import("./chunk-8J0p1hu6.js").then(m=>m.Fs),__vite__mapDeps([0,1,2])),h=await f(o,{disableTextures:!0}),a=u(h.referenceBoundingBox,c());return n.put(o,a),a}if(!e.resource?.primitive)throw new t("symbol:invalid-resource","The symbol does not have a valid resource");const i=p(b(e.resource.primitive));if(r!=null)for(let o=0;o<i.length;o++)i[o]*=r;return u(i,c())}export{T as clearBoundingBoxCache,x as computeIconLayerResourceSize,B as computeObjectLayerResourceSize};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/chunk-8J0p1hu6.js","assets/chunks/chunk-EUQwHdIv.js","assets/static/EdgeShader._x1C5tJF.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
