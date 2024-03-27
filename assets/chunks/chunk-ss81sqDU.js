import{m4 as m,kV as d,CM as b,D1 as x,Aq as y,nv as v,kZ as g,m6 as j,kP as C,vi as F}from"./chunk-gZYsZ36N.js";import"./chunk-t4TbIqUg.js";function c(r){const{options:e,value:o}=r;return typeof e[o]=="number"}function p(r){let e="";for(const o in r){const n=r[o];if(typeof n=="boolean")n&&(e+=`#define ${o}
`);else if(typeof n=="number")e+=`#define ${o} ${n.toFixed()}
`;else if(typeof n=="object")if(c(n)){const{value:t,options:f,namespace:a}=n,i=a?`${a}_`:"";for(const s in f)e+=`#define ${i}${s} ${f[s].toFixed()}
`;e+=`#define ${o} ${i}${t}
`}else{const t=n.options;let f=0;for(const a in t)e+=`#define ${t[a]} ${(f++).toFixed()}
`;e+=`#define ${o} ${t[n.value]}
`}}return e}export{m as BufferObject,d as FramebufferObject,b as Program,x as ProgramCache,y as Renderbuffer,v as ShaderCompiler,g as Texture,j as VertexArrayObject,C as createContext,F as createProgram,p as glslifyDefineMap};
