import{V as c}from"./chunk-Rpg3QTvn.js";import{V as n}from"./chunk-93_OmANW.js";import{V as m}from"./chunk-NoRKKJwn.js";import{V as l}from"./chunk-6o6tFwA-.js";import{h2 as f,bz as u,h5 as _,h6 as d,h9 as i,ha as r,h7 as t}from"./chunk-xdbuWCSg.js";import"./chunk-elC-BEzW.js";import"./chunk-A28ZiPww.js";import"./chunk-B3AFDltd.js";import"./chunk-s4Wj1llY.js";import"./chunk-PXg3VzVx.js";import"./chunk-1yHvQV-p.js";import"./chunk-SUrPPh2b.js";import"./chunk-63AI7Hpr.js";import"./chunk-gtyL-bMM.js";import"./chunk-X13qFF8j.js";import"./chunk-wJeQeX2q.js";import"./chunk-3xNmT1XT.js";import"./chunk-t4TbIqUg.js";const b="236a6aa367cdbd728c6597e0c179f728",s="f0175927031c1e12cb804b0c3b8cce4d",p="https://utility.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task",C=f({__name:"basic",setup(h){return u.request.interceptors?.push({urls:[p],before(o){const e=o.requestOptions.query,a=e.Web_Map_as_JSON;a&&(e.Web_Map_as_JSON=a.replaceAll(s,b))}}),(o,e)=>(_(),d(t(c),{"default-options":{zoom:7,center:[121.34822492731212,28.95909791842632]}},{default:i(()=>[r(t(l),{type:"vec_w",token:s,"spatial-reference":{wkid:3857}}),r(t(m),null,{default:i(()=>[r(t(n),{"default-options":{printServiceUrl:p}},null,8,["default-options"])]),_:1})]),_:1}))}});export{C as default};