"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[8758],{48758:(e,t,n)=>{n.r(t),n.d(t,{registerFunctions:()=>v});var a=n(48853),i=n(28228),r=n(33586),s=n(27535),l=n(15274),o=n(28924),u=n(67651),f=n(12384),c=n(61363),d=n(26520),m=n(70409),y=n(84328),h=n(85065),p=n(63991),w=n(75148),g=n(17805),F=n(3823),I=n(90658),D=n(36515),E=n(24240),T=n(95330),C=n(8968),b=n(19238),N=n(1231),x=n(48522);async function S(e,t,n){const a=e.getVariables();if(a.length>0){const i=[];for(let e=0;e<a.length;e++){const r={name:a[e]};i.push(await t.evaluateIdentifier(n,r))}const r={};for(let e=0;e<a.length;e++)r[a[e]]=i[e];return e.parameters=r,e}return e}function A(e,t,n=null){for(const n in e)if(n.toLowerCase()===t.toLowerCase())return e[n];return n}function H(e){if(null===e)return null;const t={type:A(e,"type",""),name:A(e,"name","")};if("range"===t.type)t.range=A(e,"range",[]);else{t.codedValues=[];for(const n of A(e,"codedValues",[]))t.codedValues.push({name:A(n,"name",""),code:A(n,"code",null)})}return t}function L(e){if(null===e)return null;const t={},n=A(e,"wkt",null);null!==n&&(t.wkt=n);const a=A(e,"wkid",null);return null!==a&&(t.wkid=a),t}function Z(e){if(null===e)return null;const t={hasZ:A(e,"hasz",!1),hasM:A(e,"hasm",!1)},n=A(e,"spatialreference",null);n&&(t.spatialReference=L(n));const a=A(e,"x",null);if(null!==a)return t.x=a,t.y=A(e,"y",null),t;const i=A(e,"rings",null);if(null!==i)return t.rings=i,t;const r=A(e,"paths",null);if(null!==r)return t.paths=r,t;const s=A(e,"points",null);if(null!==s)return t.points=s,t;for(const n of["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"]){const a=A(e,n,null);null!==a&&(t[n]=a)}return t}function $(e){return"utc"===e?.toLowerCase()?"UTC":"unknown"===e?.toLowerCase()?"Unknown":e}function v(e){"async"===e.mode&&(e.functions.timezone=function(t,n){return e.standardFunctionAsync(t,n,(async(e,i,l)=>{if((0,c.E)(l,1,2,t,n),(0,c.n)(l[0]))return"Unknown";if((0,c.m)(l[0]))return"Unknown";if((0,c.u)(l[0])){if(await l[0].load(),1===l.length||null===l[1])return l[0].datesInUnknownTimezone?$("unknown"):$(l[0].dateFieldsTimeZone);if(!(l[1]instanceof r.Z)||!1===l[1].hasField("type"))throw new s.aV(t,s.rH.InvalidParameter,n);const e=l[1].field("type");if(!1===(0,c.c)(e))throw new s.aV(t,s.rH.InvalidParameter,n);switch((0,c.j)(e).toLowerCase()){case"preferredtimezone":return $(l[0].preferredTimeZone);case"editfieldsinfo":return $(l[0].editFieldsInfo?.timeZone??null);case"timeinfo":return $(l[0].timeInfo?.timeZone??null);case"field":if(l[1].hasField("fieldname")&&(0,c.c)(l[1].field("fieldname")))return $(l[0].fieldTimeZone((0,c.j)(l[1].field("fieldname"))))}throw new s.aV(t,s.rH.InvalidParameter,n)}const o=(0,c.l)(l[0],(0,c.L)(t));if(null===o)return null;const u=o.timeZone;return"system"===u?a.iG.systemTimeZoneCanonicalName:"utc"===u.toLowerCase()?"UTC":"unknown"===u.toLowerCase()?"Unknown":u}))},e.functions.sqltimestamp=function(t,n){return e.standardFunctionAsync(t,n,(async(e,a,i)=>{(0,c.E)(i,1,3,t,n);const r=i[0];if((0,c.k)(r)){if(1===i.length)return r.toSQLWithKeyword();if(2===i.length)return r.changeTimeZone((0,c.j)(i[1])).toSQLWithKeyword();throw new s.aV(t,s.rH.InvalidParameter,n)}if((0,c.m)(r))return r.toSQLWithKeyword();if((0,c.u)(r)){if(3!==i.length)throw new s.aV(t,s.rH.InvalidParameter,n);await r.load();const e=(0,c.j)(i[1]);if((0,c.m)(i[2]))return i[2].toSQLWithKeyword();if(!1===(0,c.k)(i[2]))throw new s.aV(t,s.rH.InvalidParameter,n);const a=r.fieldTimeZone(e);return null===a?i[2].toSQLWithKeyword():i[2].changeTimeZone(a).toSQLWithKeyword()}throw new s.aV(t,s.rH.InvalidParameter,n)}))},e.signatures.push({name:"sqltimestamp",min:2,max:4}),e.functions.featuresetbyid=function(t,n){return e.standardFunctionAsync(t,n,((e,a,i)=>{if((0,c.E)(i,2,4,t,n),i[0]instanceof o.Z){const e=(0,c.j)(i[1]);let a=(0,c.H)(i[2],null);const r=(0,c.h)((0,c.H)(i[3],!0));if(null===a&&(a=["*"]),!1===(0,c.o)(a))throw new s.aV(t,s.rH.InvalidParameter,n);return i[0].featureSetById(e,r,a)}throw new s.aV(t,s.rH.InvalidParameter,n)}))},e.signatures.push({name:"featuresetbyid",min:2,max:4}),e.functions.getfeatureset=function(t,n){return e.standardFunctionAsync(t,n,((e,a,i)=>{if((0,c.E)(i,1,2,t,n),(0,c.r)(i[0])){let e=(0,c.H)(i[1],"datasource");return null===e&&(e="datasource"),e=(0,c.j)(e).toLowerCase(),(0,u.convertToFeatureSet)(i[0].fullSchema(),e,t.lrucache,t.interceptor,t.spatialReference)}throw new s.aV(t,s.rH.InvalidParameter,n)}))},e.signatures.push({name:"getfeatureset",min:1,max:2}),e.functions.featuresetbyportalitem=function(t,n){return e.standardFunctionAsync(t,n,((e,a,r)=>{if((0,c.E)(r,2,5,t,n),null===r[0])throw new s.aV(t,s.rH.PortalRequired,n);if(r[0]instanceof i.Z){const e=(0,c.j)(r[1]),a=(0,c.j)(r[2]);let i=(0,c.H)(r[3],null);const l=(0,c.h)((0,c.H)(r[4],!0));if(null===i&&(i=["*"]),!1===(0,c.o)(i))throw new s.aV(t,s.rH.InvalidParameter,n);let o=null;return o=t.services?.portal?t.services.portal:x.Z.getDefault(),o=(0,d._)(r[0],o),(0,u.constructFeatureSetFromPortalItem)(e,a,t.spatialReference,i,l,o,t.lrucache,t.interceptor)}if(!1===(0,c.c)(r[0]))throw new s.aV(t,s.rH.PortalRequired,n);const l=(0,c.j)(r[0]),o=(0,c.j)(r[1]);let f=(0,c.H)(r[2],null);const m=(0,c.h)((0,c.H)(r[3],!0));if(null===f&&(f=["*"]),!1===(0,c.o)(f))throw new s.aV(t,s.rH.InvalidParameter,n);return(0,u.constructFeatureSetFromPortalItem)(l,o,t.spatialReference,f,m,t.services?.portal??x.Z.getDefault(),t.lrucache,t.interceptor)}))},e.signatures.push({name:"featuresetbyportalitem",min:2,max:5}),e.functions.featuresetbyname=function(t,n){return e.standardFunctionAsync(t,n,((e,a,i)=>{if((0,c.E)(i,2,4,t,n),i[0]instanceof o.Z){const e=(0,c.j)(i[1]);let a=(0,c.H)(i[2],null);const r=(0,c.h)((0,c.H)(i[3],!0));if(null===a&&(a=["*"]),!1===(0,c.o)(a))throw new s.aV(t,s.rH.InvalidParameter,n);return i[0].featureSetByName(e,r,a)}throw new s.aV(t,s.rH.InvalidParameter,n)}))},e.signatures.push({name:"featuresetbyname",min:2,max:4}),e.functions.featureset=function(t,n){return e.standardFunction(t,n,((e,a,i)=>{(0,c.E)(i,1,1,t,n);let l=i[0];const o={layerDefinition:{geometryType:"",objectIdField:"",hasM:!1,hasZ:!1,globalIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if((0,c.c)(l))l=JSON.parse(l),void 0!==l.layerDefinition?(o.layerDefinition=l.layerDefinition,o.featureSet=l.featureSet,l.layerDefinition.spatialReference&&(o.layerDefinition.spatialReference=l.layerDefinition.spatialReference)):(o.featureSet.features=l.features,o.featureSet.geometryType=l.geometryType,o.layerDefinition.geometryType=o.featureSet.geometryType,o.layerDefinition.objectIdField=l.objectIdFieldName??"",o.layerDefinition.typeIdField=l.typeIdFieldName,o.layerDefinition.globalIdField=l.globalIdFieldName,o.layerDefinition.fields=l.fields,l.spatialReference&&(o.layerDefinition.spatialReference=l.spatialReference));else{if(!(i[0]instanceof r.Z))throw new s.aV(t,s.rH.InvalidParameter,n);{l=JSON.parse(i[0].castToText(!0));const e=A(l,"layerdefinition");if(null!==e){o.layerDefinition.geometryType=A(e,"geometrytype",""),o.featureSet.geometryType=o.layerDefinition.geometryType,o.layerDefinition.globalIdField=A(e,"globalidfield",""),o.layerDefinition.objectIdField=A(e,"objectidfield",""),o.layerDefinition.typeIdField=A(e,"typeidfield",""),o.layerDefinition.hasZ=!0===A(e,"hasz",!1),o.layerDefinition.hasM=!0===A(e,"hasm",!1);const t=A(e,"spatialreference",null);t&&(o.layerDefinition.spatialReference=L(t));for(const t of A(e,"fields",[])){const e={name:A(t,"name",""),alias:A(t,"alias",""),type:A(t,"type",""),nullable:A(t,"nullable",!0),editable:A(t,"editable",!0),length:A(t,"length",null),domain:H(A(t,"domain"))};o.layerDefinition.fields.push(e)}const n=A(l,"featureset",null);if(n){const e={};for(const t of o.layerDefinition.fields)e[t.name.toLowerCase()]=t.name;for(const t of A(n,"features",[])){const n={},a=A(t,"attributes",{});for(const t in a)n[e[t.toLowerCase()]]=a[t];o.featureSet.features.push({attributes:n,geometry:Z(A(t,"geometry",null))})}}}else{o.layerDefinition.hasZ=!0===A(l,"hasz",!1),o.layerDefinition.hasM=!0===A(l,"hasm",!1),o.layerDefinition.geometryType=A(l,"geometrytype",""),o.featureSet.geometryType=o.layerDefinition.geometryType,o.layerDefinition.objectIdField=A(l,"objectidfieldname",""),o.layerDefinition.typeIdField=A(l,"typeidfieldname","");const e=A(l,"spatialreference",null);e&&(o.layerDefinition.spatialReference=L(e));let t=A(l,"fields",null);if((0,c.o)(t))for(const e of t){const t={name:A(e,"name",""),alias:A(e,"alias",""),type:A(e,"type",""),nullable:A(e,"nullable",!0),editable:A(e,"editable",!0),length:A(e,"length",null),domain:H(A(e,"domain"))};o.layerDefinition.fields.push(t)}else t=null,o.layerDefinition.fields=t;const n={};for(const e of o.layerDefinition.fields)n[e.name.toLowerCase()]=e.name;let a=A(l,"features",null);if((0,c.o)(a))for(const e of a){const t={},a=A(e,"attributes",{});for(const e in a)t[n[e.toLowerCase()]]=a[e];o.featureSet.features.push({attributes:t,geometry:Z(A(e,"geometry",null))})}else a=null,o.featureSet.features=a}}}if(!1===function(e){return!!e.layerDefinition&&!!e.featureSet&&!1!==function(e,t){for(const t of["",null,"esriGeometryNull","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])if(t===e)return!0;return!1}(e.layerDefinition.geometryType)&&!1!==(0,c.o)(e.layerDefinition.fields)&&!1!==(0,c.o)(e.featureSet.features)}(o))throw new s.aV(t,s.rH.InvalidParameter,n);return o.layerDefinition.geometryType||(o.layerDefinition.geometryType="esriGeometryNull"),g.Z.create(o,t.spatialReference)}))},e.signatures.push({name:"featureset",min:1,max:1}),e.functions.filter=function(t,n){return e.standardFunctionAsync(t,n,(async(a,i,r)=>{if((0,c.E)(r,2,2,t,n),(0,c.o)(r[0])||(0,c.q)(r[0])){const e=[];let a=r[0];a instanceof f.Z&&(a=a.toArray());let i=null;if(!(0,c.i)(r[1]))throw new s.aV(t,s.rH.InvalidParameter,n);i=r[1].createFunction(t);for(const t of a){const n=i(t);(0,T.y8)(n)?!0===await n&&e.push(t):!0===n&&e.push(t)}return e}if((0,c.u)(r[0])){const n=await r[0].load(),a=C.WhereClause.create(r[1],n.getFieldsIndex(),n.dateFieldsTimeZoneDefaultUTC),i=a.getVariables();if(i.length>0){const n=[];for(let a=0;a<i.length;a++){const r={name:i[a]};n.push(await e.evaluateIdentifier(t,r))}const s={};for(let e=0;e<i.length;e++)s[i[e]]=n[e];return a.parameters=s,new y.Z({parentfeatureset:r[0],whereclause:a})}return new y.Z({parentfeatureset:r[0],whereclause:a})}throw new s.aV(t,s.rH.InvalidParameter,n)}))},e.signatures.push({name:"filter",min:2,max:2}),e.functions.orderby=function(t,n){return e.standardFunctionAsync(t,n,(async(e,a,i)=>{if((0,c.E)(i,2,2,t,n),(0,c.u)(i[0])){const e=new F.Z(i[1]);return new h.Z({parentfeatureset:i[0],orderbyclause:e})}throw new s.aV(t,s.rH.InvalidParameter,n)}))},e.signatures.push({name:"orderby",min:2,max:2}),e.functions.top=function(t,n){return e.standardFunctionAsync(t,n,(async(e,a,i)=>{if((0,c.E)(i,2,2,t,n),(0,c.u)(i[0]))return new p.Z({parentfeatureset:i[0],topnum:i[1]});if((0,c.o)(i[0]))return(0,c.g)(i[1])>=i[0].length?i[0].slice(0):i[0].slice(0,(0,c.g)(i[1]));if((0,c.q)(i[0]))return(0,c.g)(i[1])>=i[0].length()?i[0].slice(0):i[0].slice(0,(0,c.g)(i[1]));throw new s.aV(t,s.rH.InvalidParameter,n)}))},e.signatures.push({name:"top",min:2,max:2}),e.functions.first=function(t,n){return e.standardFunctionAsync(t,n,(async(e,a,i)=>{if((0,c.E)(i,1,1,t,n),(0,c.u)(i[0])){const n=await i[0].first(e.abortSignal);if(null!==n){const e=l.Z.createFromGraphicLikeObject(n.geometry,n.attributes,i[0],t.timeZone);return e._underlyingGraphic=n,e}return n}return(0,c.o)(i[0])?0===i[0].length?null:i[0][0]:(0,c.q)(i[0])?0===i[0].length()?null:i[0].get(0):null}))},e.signatures.push({name:"first",min:1,max:1}),e.functions.attachments=function(t,n){return e.standardFunctionAsync(t,n,(async(e,a,i)=>{(0,c.E)(i,1,2,t,n);const l={minsize:-1,maxsize:-1,types:null,returnMetadata:!1};if(i.length>1)if(i[1]instanceof r.Z){if(i[1].hasField("minsize")&&(l.minsize=(0,c.g)(i[1].field("minsize"))),i[1].hasField("metadata")&&(l.returnMetadata=(0,c.h)(i[1].field("metadata"))),i[1].hasField("maxsize")&&(l.maxsize=(0,c.g)(i[1].field("maxsize"))),i[1].hasField("types")){const e=(0,c.a2)(i[1].field("types"),!1);e.length>0&&(l.types=e)}}else if(null!==i[1])throw new s.aV(t,s.rH.InvalidParameter,n);if((0,c.r)(i[0])){let e=i[0]._layer;return e instanceof b.default&&(e=(0,u.constructFeatureSet)(e,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),null===e||!1===(0,c.u)(e)?[]:(await e.load(),e.queryAttachments(i[0].field(e.objectIdField),l.minsize,l.maxsize,l.types,l.returnMetadata))}if(null===i[0])return[];throw new s.aV(t,s.rH.InvalidParameter,n)}))},e.signatures.push({name:"attachments",min:1,max:2}),e.functions.featuresetbyrelationshipname=function(t,n){return e.standardFunctionAsync(t,n,(async(e,a,i)=>{(0,c.E)(i,2,4,t,n);const r=i[0],l=(0,c.j)(i[1]);let o=(0,c.H)(i[2],null);const f=(0,c.h)((0,c.H)(i[3],!0));if(null===o&&(o=["*"]),!1===(0,c.o)(o))throw new s.aV(t,s.rH.InvalidParameter,n);if(null===i[0])return null;if(!(0,c.r)(i[0]))throw new s.aV(t,s.rH.InvalidParameter,n);let d=r._layer;if(d instanceof b.default&&(d=(0,u.constructFeatureSet)(d,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),null===d)return null;if(!1===(0,c.u)(d))return null;d=await d.load();const m=d.relationshipMetaData().filter((e=>e.name===l));if(0===m.length)return null;if(void 0!==m[0].relationshipTableId&&null!==m[0].relationshipTableId&&m[0].relationshipTableId>-1)return(0,u.constructFeatureSetFromRelationship)(d,m[0],r.field(d.objectIdField),d.spatialReference,o,f,t.lrucache,t.interceptor);let y=d.serviceUrl();if(!y)return null;y="/"===y.charAt(y.length-1)?y+m[0].relatedTableId.toString():y+"/"+m[0].relatedTableId.toString();const h=await(0,u.constructFeatureSetFromUrl)(y,d.spatialReference,o,f,t.lrucache,t.interceptor);await h.load();let p=h.relationshipMetaData();if(p=p.filter((e=>e.id===m[0].id)),!1===r.hasField(m[0].keyField)||null===r.field(m[0].keyField)){const e=await d.getFeatureByObjectId(r.field(d.objectIdField),[m[0].keyField]);if(e){const t=C.WhereClause.create(p[0].keyField+"= @id",h.getFieldsIndex(),h.dateFieldsTimeZoneDefaultUTC);return t.parameters={id:e.attributes[m[0].keyField]},h.filter(t)}return new w.Z({parentfeatureset:h})}const g=C.WhereClause.create(p[0].keyField+"= @id",h.getFieldsIndex(),h.dateFieldsTimeZoneDefaultUTC);return g.parameters={id:r.field(m[0].keyField)},h.filter(g)}))},e.signatures.push({name:"featuresetbyrelationshipname",min:2,max:4}),e.functions.featuresetbyassociation=function(t,n){return e.standardFunctionAsync(t,n,(async(e,a,i)=>{(0,c.E)(i,2,3,t,n);const r=i[0],l=(0,c.j)((0,c.H)(i[1],"")).toLowerCase(),o=(0,c.c)(i[2])?(0,c.j)(i[2]):null;if(null===i[0])return null;if(!(0,c.r)(i[0]))throw new s.aV(t,s.rH.InvalidParameter,n);let f=r._layer;if(f instanceof b.default&&(f=(0,u.constructFeatureSet)(f,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),null===f)return null;if(!1===(0,c.u)(f))return null;await f.load();const d=f.serviceUrl(),y=await(0,u.constructAssociationMetaDataFeatureSetFromUrl)(d,t.spatialReference);let h=null,p=null,w=!1;if(null!==o&&""!==o&&void 0!==o){for(const e of y.terminals)e.terminalName===o&&(p=e.terminalId);null===p&&(w=!0)}const g=y.associations.getFieldsIndex(),F=g.get("TOGLOBALID").name,D=g.get("FROMGLOBALID").name,E=g.get("TOTERMINALID").name,T=g.get("FROMTERMINALID").name,x=g.get("FROMNETWORKSOURCEID").name,S=g.get("TONETWORKSOURCEID").name,A=g.get("ASSOCIATIONTYPE").name,H=g.get("ISCONTENTVISIBLE").name,L=g.get("OBJECTID").name;for(const e of f.fields)if("global-id"===e.type){h=r.field(e.name);break}let Z=null,$=new m.yN(new N.Z({name:"percentalong",alias:"percentalong",type:"double"}),C.WhereClause.create("0",y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC)),v=new m.yN(new N.Z({name:"side",alias:"side",type:"string"}),C.WhereClause.create("''",y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC));const P="globalid",V="globalId",R={};for(const e in y.lkp)R[e]=y.lkp[e].sourceId;const W=new m.TO(new N.Z({name:"classname",alias:"classname",type:"string"}),null,R);let k="";switch(l){case"midspan":{k=`((${F}='${h}') OR ( ${D}='${h}')) AND (${A} IN (5))`,W.codefield=C.WhereClause.create(`CASE WHEN (${F}='${h}') THEN ${x} ELSE ${S} END`,y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC);const e=(0,I.JW)(m.Xx.findField(y.associations.fields,D));e.name=P,e.alias=P,Z=new m.yN(e,C.WhereClause.create(`CASE WHEN (${D}='${h}') THEN ${F} ELSE ${D} END`,y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC)),$=y.unVersion>=4?new m.$X(m.Xx.findField(y.associations.fields,g.get("PERCENTALONG").name)):new m.yN(new N.Z({name:"percentalong",alias:"percentalong",type:"double"}),C.WhereClause.create("0",y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC));break}case"junctionedge":{k=`((${F}='${h}') OR ( ${D}='${h}')) AND (${A} IN (4,6))`,W.codefield=C.WhereClause.create(`CASE WHEN (${F}='${h}') THEN ${x} ELSE ${S} END`,y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC);const e=(0,I.JW)(m.Xx.findField(y.associations.fields,D));e.name=P,e.alias=P,Z=new m.yN(e,C.WhereClause.create(`CASE WHEN (${D}='${h}') THEN ${F} ELSE ${D} END`,y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC)),v=new m.yN(new N.Z({name:"side",alias:"side",type:"string"}),C.WhereClause.create(`CASE WHEN (${A}=4) THEN 'from' ELSE 'to' END`,y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC));break}case"connected":{let e=`${F}='@T'`,t=`${D}='@T'`;null!==p&&(e+=` AND ${E}=@A`,t+=` AND ${T}=@A`),k="(("+e+") OR ("+t+"))",k=(0,c.S)(k,"@T",h??""),e=(0,c.S)(e,"@T",h??""),null!==p&&(e=(0,c.S)(e,"@A",p.toString()),k=(0,c.S)(k,"@A",p.toString())),W.codefield=C.WhereClause.create("CASE WHEN "+e+` THEN ${x} ELSE ${S} END`,y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC);const n=(0,I.JW)(m.Xx.findField(y.associations.fields,D));n.name=P,n.alias=P,Z=new m.yN(n,C.WhereClause.create("CASE WHEN "+e+` THEN ${D} ELSE ${F} END`,y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC));break}case"container":k=`${F}='${h}' AND ${A} = 2`,null!==p&&(k+=` AND ${E} = `+p.toString()),W.codefield=x,k="( "+k+" )",Z=new m.QP(m.Xx.findField(y.associations.fields,D),P,P);break;case"content":k=`(${D}='${h}' AND ${A} = 2)`,null!==p&&(k+=` AND ${T} = `+p.toString()),W.codefield=S,k="( "+k+" )",Z=new m.QP(m.Xx.findField(y.associations.fields,F),P,P);break;case"structure":k=`(${F}='${h}' AND ${A} = 3)`,null!==p&&(k+=` AND ${E} = `+p.toString()),W.codefield=x,k="( "+k+" )",Z=new m.QP(m.Xx.findField(y.associations.fields,D),P,V);break;case"attached":k=`(${D}='${h}' AND ${A} = 3)`,null!==p&&(k+=` AND ${T} = `+p.toString()),W.codefield=S,k="( "+k+" )",Z=new m.QP(m.Xx.findField(y.associations.fields,F),P,V);break;default:throw new s.aV(t,s.rH.InvalidParameter,n)}return w&&(k="1 <> 1"),new m.Xx({parentfeatureset:y.associations,adaptedFields:[new m.$X(m.Xx.findField(y.associations.fields,L)),new m.$X(m.Xx.findField(y.associations.fields,H)),Z,v,W,$],extraFilter:k?C.WhereClause.create(k,y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC):null})}))},e.signatures.push({name:"featuresetbyassociation",min:2,max:6}),e.functions.groupby=function(t,n){return e.standardFunctionAsync(t,n,(async(a,i,l)=>{if((0,c.E)(l,3,3,t,n),!(0,c.u)(l[0]))throw new s.aV(t,s.rH.InvalidParameter,n);const o=await l[0].load(),u=[],f=[];let d=!1,m=[];if((0,c.c)(l[1]))m.push(l[1]);else if(l[1]instanceof r.Z)m.push(l[1]);else if((0,c.o)(l[1]))m=l[1];else{if(!(0,c.q)(l[1]))throw new s.aV(t,s.rH.InvalidParameter,n);m=l[1].toArray()}for(const e of m)if((0,c.c)(e)){const t=C.WhereClause.create((0,c.j)(e),o.getFieldsIndex(),o.dateFieldsTimeZoneDefaultUTC),n=!0===(0,D.y5)(t)?(0,c.j)(e):"%%%%FIELDNAME";u.push({name:n,expression:t}),"%%%%FIELDNAME"===n&&(d=!0)}else{if(!(e instanceof r.Z))throw new s.aV(t,s.rH.InvalidParameter,n);{const a=e.hasField("name")?e.field("name"):"%%%%FIELDNAME",i=e.hasField("expression")?e.field("expression"):"";if("%%%%FIELDNAME"===a&&(d=!0),!a)throw new s.aV(t,s.rH.InvalidParameter,n);u.push({name:a,expression:C.WhereClause.create(i||a,o.getFieldsIndex(),o.dateFieldsTimeZoneDefaultUTC)})}}if(m=[],(0,c.c)(l[2]))m.push(l[2]);else if((0,c.o)(l[2]))m=l[2];else if((0,c.q)(l[2]))m=l[2].toArray();else{if(!(l[2]instanceof r.Z))throw new s.aV(t,s.rH.InvalidParameter,n);m.push(l[2])}for(const e of m){if(!(e instanceof r.Z))throw new s.aV(t,s.rH.InvalidParameter,n);{const a=e.hasField("name")?e.field("name"):"",i=e.hasField("statistic")?e.field("statistic"):"",r=e.hasField("expression")?e.field("expression"):"";if(!a||!i||!r)throw new s.aV(t,s.rH.InvalidParameter,n);f.push({name:a,statistic:i.toLowerCase(),expression:C.WhereClause.create(r,o.getFieldsIndex(),o.dateFieldsTimeZoneDefaultUTC)})}}if(d){const e={};for(const t of o.fields)e[t.name.toLowerCase()]=1;for(const t of u)"%%%%FIELDNAME"!==t.name&&(e[t.name.toLowerCase()]=1);for(const t of f)"%%%%FIELDNAME"!==t.name&&(e[t.name.toLowerCase()]=1);let t=0;for(const n of u)if("%%%%FIELDNAME"===n.name){for(;1===e["field_"+t.toString()];)t++;e["field_"+t.toString()]=1,n.name="FIELD_"+t.toString()}}for(const n of u)await S(n.expression,e,t);for(const n of f)await S(n.expression,e,t);return l[0].groupby(u,f)}))},e.signatures.push({name:"groupby",min:3,max:3}),e.functions.distinct=function(t,n){return e.standardFunctionAsync(t,n,(async(a,i,l)=>{if((0,c.u)(l[0])){(0,c.E)(l,2,2,t,n);const a=await l[0].load(),i=[];let o=[];if((0,c.c)(l[1]))o.push(l[1]);else if(l[1]instanceof r.Z)o.push(l[1]);else if((0,c.o)(l[1]))o=l[1];else{if(!(0,c.q)(l[1]))throw new s.aV(t,s.rH.InvalidParameter,n);o=l[1].toArray()}let u=!1;for(const e of o)if((0,c.c)(e)){const t=C.WhereClause.create((0,c.j)(e),a.getFieldsIndex(),a.dateFieldsTimeZoneDefaultUTC),n=!0===(0,D.y5)(t)?(0,c.j)(e):"%%%%FIELDNAME";i.push({name:n,expression:t}),"%%%%FIELDNAME"===n&&(u=!0)}else{if(!(e instanceof r.Z))throw new s.aV(t,s.rH.InvalidParameter,n);{const r=e.hasField("name")?e.field("name"):"%%%%FIELDNAME",l=e.hasField("expression")?e.field("expression"):"";if("%%%%FIELDNAME"===r&&(u=!0),!r)throw new s.aV(t,s.rH.InvalidParameter,n);i.push({name:r,expression:C.WhereClause.create(l||r,a.getFieldsIndex(),a.dateFieldsTimeZoneDefaultUTC)})}}if(u){const e={};for(const t of a.fields)e[t.name.toLowerCase()]=1;for(const t of i)"%%%%FIELDNAME"!==t.name&&(e[t.name.toLowerCase()]=1);let t=0;for(const n of i)if("%%%%FIELDNAME"===n.name){for(;1===e["field_"+t.toString()];)t++;e["field_"+t.toString()]=1,n.name="FIELD_"+t.toString()}}for(const n of i)await S(n.expression,e,t);return l[0].groupby(i,[])}return function(e,t,n,a){if(1===a.length){if((0,c.o)(a[0]))return(0,E.t)(e,a[0],-1);if((0,c.q)(a[0]))return(0,E.t)(e,a[0].toArray(),-1)}return(0,E.t)(e,a,-1)}("distinct",0,0,l)}))}),e.functions.getfeaturesetinfo=function(t,n){return e.standardFunctionAsync(t,n,(async(e,a,i)=>{if((0,c.E)(i,1,1,t,n),!(0,c.u)(i[0]))return null;const s=await i[0].getFeatureSetInfo();return s?r.Z.convertObjectToArcadeDictionary({layerId:s.layerId,layerName:s.layerName,itemId:s.itemId,serviceLayerUrl:s.serviceLayerUrl,webMapLayerId:s.webMapLayerId??null,webMapLayerTitle:s.webMapLayerTitle??null,className:null,objectClassId:null},(0,c.L)(t),!1,!1):null}))},e.signatures.push({name:"getfeaturesetinfo",min:1,max:1})}},26520:(e,t,n)=>{n.d(t,{_:()=>i});var a=n(48522);function i(e,t){return null===e?t:new a.Z({url:e.field("url")})}}}]);