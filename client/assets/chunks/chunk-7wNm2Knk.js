import{p as m,e as i,V as p,c as d,a as l}from"./chunk-hfdktSrh.js";import{oX as u,h2 as f,lx as y,h8 as h,h3 as b,oG as V,lG as $,hf as k,h5 as v,h6 as w,h9 as P,hc as g,lI as L,oD as W,hn as _}from"./chunk-xdbuWCSg.js";const B={...u(m,{excludes:["url"]}),type:{type:String,default:"img_c"},token:{type:String,default:"f0175927031c1e12cb804b0c3b8cce4d"}},C={...i},D="https://{subDomain}.tianditu.gov.cn",S=["t0","t1","t2","t3","t4","t5","t6","t7"],T=f({name:"VaTdtWmtsLayer",components:{VaWmtsLayer:p},props:B,emits:C,setup(t,{emit:a}){const o=d(t),n=l(a),r=y(()=>`${D}/${t.type}/wmts`),e=h(!0);return b(()=>t.type,async()=>{e.value=!1,await V(),e.value=!0}),{ready:e,bindProps:o,onEmits:n,tdtUrl:r,subDomains:S}}});function E(t,a,o,n,r,e){const c=k("VaWmtsLayer");return t.ready?(v(),w(c,L({key:0},t.bindProps,{url:t.tdtUrl,"service-mode":"KVP","custom-parameters":{tk:t.token},"sub-domains":t.subDomains,"overwrite-capabilities":{replaceTileMatrixSets:[{find:"w",replacement:"PM"}]}},W(t.onEmits)),{default:P(()=>[g(t.$slots,"default")]),_:3},16,["url","custom-parameters","sub-domains"])):_("",!0)}const s=$(T,[["render",E]]);s.install=t=>{t.component(s.name,s)};export{s as V};
