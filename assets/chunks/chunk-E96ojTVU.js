import{hs as d,kn as m,D6 as b,D7 as x,zf as y,mO as g,kt as h,hu as j,D8 as D,z1 as F}from"./chunk-217NDGZJ.js";import"./chunk-oVLQlo07.js";function c(r){const{options:e,value:t}=r;return typeof e[t]=="number"}function $(r){let e="";for(const t in r){const n=r[t];if(typeof n=="boolean")n&&(e+=`#define ${t}
`);else if(typeof n=="number")e+=`#define ${t} ${n.toFixed()}
`;else if(typeof n=="object")if(c(n)){const{value:o,options:f,namespace:s}=n,a=s?`${s}_`:"";for(const i in f)e+=`#define ${a}${i} ${f[i].toFixed()}
`;e+=`#define ${t} ${a}${o}
`}else{const o=n.options;let f=0;for(const s in o)e+=`#define ${o[s]} ${(f++).toFixed()}
`;e+=`#define ${t} ${o[n.value]}
`}}return e}export{d as BufferObject,m as FramebufferObject,b as Program,x as ProgramCache,y as Renderbuffer,g as ShaderCompiler,h as Texture,j as VertexArrayObject,D as createContext,F as createProgram,$ as glslifyDefineMap};
