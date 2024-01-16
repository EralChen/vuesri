import{E as A,F as I,G as v,J as $,s as i,O as E,K as b,L as S,M as R,N as O,R as k,V as L,P as U,C as G,D as T,T as j}from"./chunk-m3jlTyOz.js";import"./chunk-bntHIBZM.js";function F(e){return e?.applyEdits!=null}function V(e){return typeof e=="object"&&e!=null&&"objectId"in e&&!!e.objectId}function X(e){return e.every(V)}function B(e){return typeof e=="object"&&e!=null&&"globalId"in e&&!!e.globalId}function H(e){return e.every(B)}async function Q(e,t,r,a={}){let s;const o="gdbVersion"in e?e.gdbVersion:null,p=a.gdbVersion??o;if(A(e)&&e.url)s=I(e.url,e.layerId,p,a.returnServiceEditsOption==="original-and-current-features");else{s=v(),s.promise.then(d=>{(d.addedFeatures.length||d.updatedFeatures.length||d.deletedFeatures.length||d.addedAttachments.length||d.updatedAttachments.length||d.deletedAttachments.length)&&e.emit("edits",d)});const n={result:s.promise};e.emit("apply-edits",n)}try{const{results:n,edits:d}=await D(e,t,r,a),u=l=>l.filter(h=>!h.error).map($),c={edits:d,addedFeatures:u(n.addFeatureResults),updatedFeatures:u(n.updateFeatureResults),deletedFeatures:u(n.deleteFeatureResults),addedAttachments:u(n.addAttachmentResults),updatedAttachments:u(n.updateAttachmentResults),deletedAttachments:u(n.deleteAttachmentResults),exceededTransferLimit:!1,historicMoment:n.editMoment?new Date(n.editMoment):null,globalIdToObjectId:a.globalIdToObjectId};return n.editedFeatureResults?.length&&(c.editedFeatures=n.editedFeatureResults),s.resolve(c),n}catch(n){throw s.reject(n),n}}async function D(e,t,r,a){if(await e.load(),!F(t))throw new i(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!E(e))throw new i(`${e.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:e});const{edits:s,options:o}=await M(e,r,a);return s.addFeatures?.length||s.updateFeatures?.length||s.deleteFeatures?.length||s.addAttachments?.length||s.updateAttachments?.length||s.deleteAttachments?.length?{edits:s,results:await t.applyEdits(s,o)}:{edits:s,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}async function M(e,t,r){const a=b(e),s=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),o=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments),p=e.infoFor3D!=null;if(_(t,a,r,!!s,!!o,`${e.type}-layer`),!a.data.isVersioned&&r?.gdbVersion)throw new i(`${e.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!a.editing.supportsRollbackOnFailure&&r?.rollbackOnFailureEnabled)throw new i(`${e.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");const n={...r};if(n.rollbackOnFailureEnabled!=null||a.editing.supportsRollbackOnFailure||(n.rollbackOnFailureEnabled=!0),n.rollbackOnFailureEnabled||n.returnServiceEditsOption!=="original-and-current-features"||(n.rollbackOnFailureEnabled===!1&&S.getLogger("esri.layers.graphics.editingSupport").warn(`${e.type}-layer:invalid-parameter`,"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true, but 'rollBackOnFailure' was set to false. 'rollBackOnFailure' has been overwrritten and set to true."),n.rollbackOnFailureEnabled=!0),!a.editing.supportsReturnServiceEditsInSourceSpatialReference&&n.returnServiceEditsInSourceSR)throw new i(`${e.type}-layer:invalid-parameter`,"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(n.returnServiceEditsInSourceSR&&n.returnServiceEditsOption!=="original-and-current-features")throw new i(`${e.type}-layer:invalid-parameter`,"'returnServiceEditsInSourceSR' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const d=Z(t,a,`${e.type}-layer`),u=r?.globalIdUsed||p,c=e.fields.filter(l=>l.type==="big-integer"||l.type==="oid"&&(l.length||0)>=8);if(u){const{globalIdField:l}=e;if(l==null)throw new i(`${e.type}-layer:invalid-parameter`,"Layer does not specify a global id field.");d.addFeatures.forEach(h=>x(h,l))}return d.addFeatures.forEach(l=>W(l,e,u,c)),d.updateFeatures.forEach(l=>C(l,e,u,c)),d.deleteFeatures.forEach(l=>z(l,e,u,c)),d.addAttachments.forEach(l=>f(l,e)),d.updateAttachments.forEach(l=>f(l,e)),p&&await J(d,e),{edits:await q(d),options:n}}function y(e,t,r,a){if(r){if("attributes"in e&&!e.attributes[t.globalIdField])throw new i(`${t.type}-layer:invalid-parameter`,`Feature should have '${t.globalIdField}' when 'globalIdUsed' is true`);if(!("attributes"in e)&&!e.globalId)throw new i(`${t.type}-layer:invalid-parameter`,"`'globalId' of the feature should be passed when 'globalIdUsed' is true")}if(a.length&&"attributes"in e)for(const s of a){const o=e.attributes[s.name];if(o!==void 0&&!j(s,o))throw new i(`${t.type}-layer:invalid-parameter`,`Big-integer field '${s.name}' of the feature must be less than ${Number.MAX_SAFE_INTEGER}`,{feature:e})}if("geometry"in e&&e.geometry!=null){if(e.geometry.hasZ&&t.capabilities?.data.supportsZ===!1)throw new i(`${t.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&t.capabilities?.data.supportsM===!1)throw new i(`${t.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function w(e,t){if("geometry"in e&&e.geometry?.type==="mesh"&&t.infoFor3D!=null){const{geometry:r}=e;if(r.vertexSpace.isGeoreferenced)throw new i(`${t.type}-layer:georeferenced-mesh-unsupported`,"Uploading georeferenced meshes to a layer is not supported.")}}function W(e,t,r,a){y(e,t,r,a),w(e,t)}function z(e,t,r,a){y(e,t,r,a)}function C(e,t,r,a){y(e,t,r,a),w(e,t);const s=b(t);if("geometry"in e&&e.geometry!=null&&!s?.editing.supportsGeometryUpdate)throw new i(`${t.type}-layer:unsupported-operation`,"Layer does not support geometry updates.")}function f(e,t){const{feature:r,attachment:a}=e;if(!r||"attributes"in r&&!r.attributes[t.globalIdField])throw new i(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in r)&&!r.globalId)throw new i(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!a.globalId)throw new i(`${t.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!a.data&&!a.uploadId)throw new i(`${t.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(a.data instanceof File&&a.data.name)&&!a.name)throw new i(`${t.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!t.capabilities?.editing.supportsUploadWithItemId&&a.uploadId)throw new i(`${t.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if(typeof a.data=="string"){const s=R(a.data);if(s&&!s.isBase64)throw new i(`${t.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}function x(e,t){const{attributes:r}=e;r[t]==null&&(r[t]=O())}async function q(e){const t=e.addFeatures??[],r=e.updateFeatures??[],a=t.concat(r).map(n=>n.geometry),s=await k(a),o=t.length,p=r.length;return s.slice(0,o).forEach((n,d)=>t[d].geometry=n),s.slice(o,o+p).forEach((n,d)=>r[d].geometry=n),e}function N(e){return{addFeatures:Array.from(e?.addFeatures??[]),updateFeatures:Array.from(e?.updateFeatures??[]),deleteFeatures:e&&L.isCollection(e.deleteFeatures)?e.deleteFeatures.toArray():e.deleteFeatures||[],addAttachments:e.addAttachments||[],updateAttachments:e.updateAttachments||[],deleteAttachments:e.deleteAttachments||[]}}function Z(e,t,r){const a=N(e);if(a.addFeatures?.length&&!t.operations.supportsAdd)throw new i(`${r}:unsupported-operation`,"Layer does not support adding features.");if(a.updateFeatures?.length&&!t.operations.supportsUpdate)throw new i(`${r}:unsupported-operation`,"Layer does not support updating features.");if(a.deleteFeatures?.length&&!t.operations.supportsDelete)throw new i(`${r}:unsupported-operation`,"Layer does not support deleting features.");return a.addFeatures=a.addFeatures.map(m),a.updateFeatures=a.updateFeatures.map(m),a.addAssetFeatures=[],a}function _(e,t,r,a,s,o){if(!e||!a&&!s)throw new i(`${o}:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!t.editing.supportsGlobalId&&r?.globalIdUsed)throw new i(`${o}:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!t.editing.supportsGlobalId&&s)throw new i(`${o}:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if(!r?.globalIdUsed&&s)throw new i(`${o}:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true")}function m(e){const t=new U;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}async function J(e,t){if(t.infoFor3D==null)return;const{infoFor3D:r}=t,a=G("model/gltf-binary",r.supportedFormats)??T("glb",r.supportedFormats);if(!(a&&r.editFormats.includes(a)))throw new i(`${t.type}-layer:binary-gltf-asset-not-supported`,"3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");e.addAssetFeatures??=[];const{addAssetFeatures:s}=e;for(const o of e.addFeatures??[])g(o)&&s.push(o);for(const o of e.updateFeatures??[])g(o)&&s.push(o)}function g(e){return e?.geometry?.type==="mesh"}function Y(e,t,r,a){if(!F(t))throw new i(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!t.uploadAssets)throw new i(`${e.type}-layer:no-asset-upload-support`,"Layer source does not support uploadAssets capability",{layer:e});return t.uploadAssets(r,a)}export{Q as applyEdits,_ as checkEditingCapabilities,H as isFeatureIdentifierArrayWithGlobalId,X as isFeatureIdentifierArrayWithObjectId,B as isFeatureIdentifierWithGlobalId,V as isFeatureIdentifierWithObjectId,N as normalizeCollections,Z as normalizeEdits,q as normalizeGeometries,m as shallowCloneFeature,Y as uploadAssets};