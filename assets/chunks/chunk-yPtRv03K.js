import{b9 as o}from"./chunk-AGUgPSYp.js";import{glslifyDefineMap as p}from"./chunk-1WFHNDv8.js";const i=e=>{let t="";t+=e[0].toUpperCase();for(let r=1;r<e.length;r++){const s=e[r];s===s.toUpperCase()?(t+="_",t+=s):t+=s.toUpperCase()}return t},l=e=>{const t={};for(const r in e)t[i(r)]=e[r];return p(t)},c=(e,t,r,s)=>{const a=e+e.substring(e.lastIndexOf("/")),f=t+t.substring(t.lastIndexOf("/")),n=l(s);return{attributes:r,shaders:{vertexShader:n+o(`${a}.vert`),fragmentShader:n+o(`${f}.frag`)}}};export{c as o};