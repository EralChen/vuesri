import{fw as A,l as v,bY as c,fx as y,fy as d,fz as S,fA as D,fB as M,fC as h}from"./chunk-AGUgPSYp.js";import{u as w,c as b,i as g,f as z}from"./chunk-7_P6CE1i.js";import"./chunk-oVLQlo07.js";import"./chunk-zH8x0uzX.js";class O{transform(t){const a=this._transform(t),e=[a.points.buffer,a.rgb.buffer];a.pointIdFilterMap!=null&&e.push(a.pointIdFilterMap.buffer);for(const r of a.attributes)"buffer"in r.values&&A(r.values.buffer)&&r.values.buffer!==a.rgb.buffer&&e.push(r.values.buffer);return Promise.resolve({result:a,transferList:e})}_transform(t){const a=w(t.schema,t.geometryBuffer);let e=a.length/3,r=null;const s=new Array,i=b(t.primaryAttributeData,a,e);t.primaryAttributeData!=null&&i&&s.push({attributeInfo:t.primaryAttributeData.attributeInfo,values:i});const n=b(t.modulationAttributeData,a,e);t.modulationAttributeData!=null&&n&&s.push({attributeInfo:t.modulationAttributeData.attributeInfo,values:n});let o=g(t.rendererInfo,i,n,e);if(t.filterInfo&&t.filterInfo.length>0&&t.filterAttributesData!=null){const f=t.filterAttributesData.filter(v).map(l=>{const I=b(l,a,e),p={attributeInfo:l.attributeInfo,values:I};return s.push(p),p});r=new Uint32Array(e),e=z(a,o,r,t.filterInfo,f)}for(const f of t.userAttributesData){const l=b(f,a,e);s.push({attributeInfo:f.attributeInfo,values:l})}3*e<o.length&&(o=new Uint8Array(o.buffer.slice(0,3*e))),this._applyElevationOffsetInPlace(a,e,t.elevationOffset);const u=this._transformCoordinates(a,e,t.obb,c.fromJSON(t.inSR),c.fromJSON(t.outSR));return{obb:t.obb,points:u,rgb:o,attributes:s,pointIdFilterMap:r}}_transformCoordinates(t,a,e,r,s){if(!y(t,r,0,t,s,0,a))throw new Error("Can't reproject");const i=d(e.center[0],e.center[1],e.center[2]),n=h(),o=h();S(m,e.quaternion);const u=new Float32Array(3*a);for(let f=0;f<a;f++)n[0]=t[3*f]-i[0],n[1]=t[3*f+1]-i[1],n[2]=t[3*f+2]-i[2],D(o,n,m),e.halfSize[0]=Math.max(e.halfSize[0],Math.abs(o[0])),e.halfSize[1]=Math.max(e.halfSize[1],Math.abs(o[1])),e.halfSize[2]=Math.max(e.halfSize[2],Math.abs(o[2])),u[3*f]=n[0],u[3*f+1]=n[1],u[3*f+2]=n[2];return u}_applyElevationOffsetInPlace(t,a,e){if(e!==0)for(let r=0;r<a;r++)t[3*r+2]+=e}}const m=M();function $(){return new O}export{$ as default};