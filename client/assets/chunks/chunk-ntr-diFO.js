import{s as c,gM as u,bo as r,gN as b,gO as i,gP as m,w as f,I as g,gQ as p,gR as w,gS as d,gT as h,gU as $}from"./chunk-8J0p1hu6.js";import"./chunk-EUQwHdIv.js";async function R(e,a,t){if(!e.name)throw new c("style-symbol-reference-name-missing","Missing name in style symbol reference");if(e.styleName&&e.styleName==="Esri2DPointSymbolsStyle")return N(e,t);try{return S(await u(e,a,t),e.name,a,t)}catch(n){return r(n),null}}async function N(e,a){const t=b.replaceAll(/\{SymbolName\}/gi,e.name);try{const n=await i(t,a);return m(n.data)}catch(n){return r(n),null}}async function S(e,a,t,n){const y={portal:t?.portal!=null?t.portal:f.getDefault(),url:g(e.baseUrl),origin:"portal-item"},o=p(a,e.data);if(!o)throw new c("symbolstyleutils:symbol-name-not-found",`The symbol name '${a}' could not be found`,{symbolName:a});let s=w(d(o,"cimRef"),y);h()&&(s=$(s));try{const l=await i(s,n);return m(l.data)}catch(l){return r(l),null}}export{R as fetchCIMSymbolReference};
