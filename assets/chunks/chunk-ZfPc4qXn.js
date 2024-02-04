import{hw as m,kr as d,Dk as b,Dl as x,zp as y,mT as g,kx as h,hy as j,Dm as D,zb as F}from"./chunk-ERvgPDZ8.js";import"./chunk-cDR98evz.js";function c(r){const{options:e,value:o}=r;return typeof e[o]=="number"}function $(r){let e="";for(const o in r){const n=r[o];if(typeof n=="boolean")n&&(e+=`#define ${o}
`);else if(typeof n=="number")e+=`#define ${o} ${n.toFixed()}
`;else if(typeof n=="object")if(c(n)){const{value:t,options:f,namespace:a}=n,s=a?`${a}_`:"";for(const i in f)e+=`#define ${s}${i} ${f[i].toFixed()}
`;e+=`#define ${o} ${s}${t}
`}else{const t=n.options;let f=0;for(const a in t)e+=`#define ${t[a]} ${(f++).toFixed()}
`;e+=`#define ${o} ${t[n.value]}
`}}return e}export{m as BufferObject,d as FramebufferObject,b as Program,x as ProgramCache,y as Renderbuffer,g as ShaderCompiler,h as Texture,j as VertexArrayObject,D as createContext,F as createProgram,$ as glslifyDefineMap};
