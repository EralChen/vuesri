import{fP as f,fQ as c,fR as l,fS as r,fT as d,fU as g,fV as p}from"./chunk-xdbuWCSg.js";import"./chunk-t4TbIqUg.js";class x{async extract(e){const t=o(e),n=f(t),i=[t.data.buffer];return{result:h(n,i),transferList:i}}async extractComponentsEdgeLocations(e){const t=o(e),n=c(t.data,t.skipDeduplicate,t.indices,t.indicesLength),i=l(n,D,u),a=[];return{result:r(i.regular.instancesData,a),transferList:a}}async extractEdgeLocations(e){const t=o(e),n=c(t.data,t.skipDeduplicate,t.indices,t.indicesLength),i=l(n,w,u),a=[];return{result:r(i.regular.instancesData,a),transferList:a}}}function o(s){return{data:d.createView(s.dataBuffer),indices:s.indicesType==="Uint32Array"?new Uint32Array(s.indices):s.indicesType==="Uint16Array"?new Uint16Array(s.indices):s.indices,indicesLength:s.indicesLength,writerSettings:s.writerSettings,skipDeduplicate:s.skipDeduplicate}}function h(s,e){return e.push(s.regular.lodInfo.lengths.buffer),e.push(s.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:r(s.regular.instancesData,e),lodInfo:{lengths:s.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:r(s.silhouette.instancesData,e),lodInfo:{lengths:s.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:s.averageEdgeLength}}class L{allocate(e){return g.createBuffer(e)}trim(e,t){return e.slice(0,t)}write(e,t,n){e.position0.setVec(t,n.position0),e.position1.setVec(t,n.position1)}}class m{allocate(e){return p.createBuffer(e)}trim(e,t){return e.slice(0,t)}write(e,t,n){e.position0.setVec(t,n.position0),e.position1.setVec(t,n.position1),e.componentIndex.set(t,n.componentIndex)}}const w=new L,D=new m,u={allocate:()=>null,write:()=>{},trim:()=>null};export{x as default};
