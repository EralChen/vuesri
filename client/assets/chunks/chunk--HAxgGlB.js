import{fx as p,P as m,R as f,fu as F,U as x,fy as E,fz as j,fA as d}from"./chunk-xdbuWCSg.js";const a="Layer does not support extent calculation.";function O(o,n){const r=o.geometry,t=o.toJSON(),e=t;if(r!=null&&(e.geometry=JSON.stringify(r),e.geometryType=j(r),e.inSR=d(r.spatialReference)),t.topFilter?.groupByFields&&(e.topFilter.groupByFields=t.topFilter.groupByFields.join(",")),t.topFilter?.orderByFields&&(e.topFilter.orderByFields=t.topFilter.orderByFields.join(",")),t.topFilter&&(e.topFilter=JSON.stringify(e.topFilter)),t.objectIds&&(e.objectIds=t.objectIds.join(",")),t.orderByFields&&(e.orderByFields=t.orderByFields.join(",")),t.outFields&&!(n?.returnCountOnly||n?.returnExtentOnly||n?.returnIdsOnly)?t.outFields.includes("*")?e.outFields="*":e.outFields=t.outFields.join(","):delete e.outFields,t.outSR?e.outSR=d(t.outSR):r&&t.returnGeometry&&(e.outSR=e.inSR),t.returnGeometry&&delete t.returnGeometry,t.timeExtent){const l=t.timeExtent,{start:s,end:u}=l;s==null&&u==null||(e.time=s===u?s:`${s??"null"},${u??"null"}`),delete t.timeExtent}return e}async function B(o,n,r,t){const e=await i(o,n,"json",t);return p(n,r,e.data),e}async function S(o,n,r){return n.timeExtent!=null&&n.timeExtent.isEmpty?{data:{objectIds:[]}}:i(o,n,"json",r,{returnIdsOnly:!0})}async function I(o,n,r){return n.timeExtent!=null&&n.timeExtent.isEmpty?{data:{count:0,extent:null}}:i(o,n,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then(t=>{const e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(a);if(e.hasOwnProperty("count"))throw new Error(a);return t})}function R(o,n,r){return n.timeExtent!=null&&n.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):i(o,n,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}function i(o,n,r,t={},e={}){const l=typeof o=="string"?m(o):o,s=n.geometry?[n.geometry]:[];return t.responseType=r==="pbf"?"array-buffer":"json",f(s,null,t).then(u=>{const y=u?.[0];y!=null&&((n=n.clone()).geometry=y);const c=F({...l.query,f:r,...e,...O(n,e)});return x(E(l.path,"queryTopFeatures"),{...t,query:{...c,...t.query}})})}export{R as a,I as d,S as m,B as p};
