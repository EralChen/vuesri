import{_ as m}from"./chunk-ezQvVqJs.js";import{V as l}from"./chunk-2D4Q3Y6C.js";import{_ as f}from"./chunk-76dCxm4a.js";import{_}from"./chunk-BUDQaXaC.js";import{l as u}from"./chunk-xESNvpj7.js";import{gp as d,gs as T,gt as E,gw as o,gu as t,gy as e}from"./chunk-AGUgPSYp.js";import"./chunk-qwIWYVt5.js";import"./chunk-3E9jM2aR.js";import"./chunk-JOajwqOH.js";import"./chunk-r9p3aZnY.js";import"./chunk-R46ESbsY.js";import"./chunk-oVLQlo07.js";const i="vec_c",A=d({__name:"tile-info",setup(I){const s=i.split("_"),n=s[0],r=s[1],c=["t0","t1","t2","t3","t4","t5","t6","t7"],a={wkid:4490},p={subDomains:c,urlTemplate:`https://{subDomain}.tianditu.gov.cn/${i}/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=${n}&STYLE=default&TILEMATRIXSET=${r}&FORMAT=tiles&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}&tk=f0175927031c1e12cb804b0c3b8cce4d`,tileInfo:{lods:u.slice(1,19),origin:{x:-180,y:90},spatialReference:a},spatialReference:a};return(R,g)=>(T(),E(t(l),{defaultOptions:{zoom:1,center:[121,29]}},{default:o(()=>[e(t(f),null,{default:o(()=>[e(t(m),{"default-options":p,orphan:!0},{default:o(()=>[e(t(_))]),_:1})]),_:1})]),_:1}))}});export{A as default};