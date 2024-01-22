import{_ as o,$ as a,a1 as p,L as t,jO as d}from"./chunk-AGUgPSYp.js";import{x as l}from"./chunk-UUVz3sVw.js";const E="updating";function h(s){return s==="updating"?null:s}function x(s){return s==="updating"}const g=s=>{let n=class extends s{constructor(){super(...arguments),this._definitionExpressionErrors=0,this._maxDefinitionExpressionErrors=20,this.logError=i=>{this._definitionExpressionErrors<this._maxDefinitionExpressionErrors&&t.getLogger(this).error("Error while evaluating definitionExpression: "+i),this._definitionExpressionErrors++,this._definitionExpressionErrors===this._maxDefinitionExpressionErrors&&t.getLogger(this).error("Further errors are ignored")}}get parsedDefinitionExpression(){if(!this.i3slayer?.definitionExpression)return null;try{const i=l.create(this.i3slayer.definitionExpression,this.i3slayer.fieldsIndex);if(!i.isStandardized)return t.getLogger(this).error("definitionExpression is using non standard function"),null;const r=[],e=i.fieldNames;return d(e,this.i3slayer.fields,{missingFields:r}),r.length>0?(t.getLogger(this).error(`definitionExpression references unknown fields: ${r.join(", ")}`),null):(this._definitionExpressionErrors=0,i)}catch(i){return t.getLogger(this).error("Failed to parse definitionExpression: "+i),null}}get definitionExpressionFields(){return this.parsedDefinitionExpression?this.parsedDefinitionExpression.fieldNames:[]}_evaluateClause(i,r){try{return i.testFeature(r)}catch(e){return this.logError(e),!1}}_addDefinitionExpressionToQuery(i){if(!this.parsedDefinitionExpression)return i;const r=this.i3slayer.definitionExpression,e=i.clone();return e.where?e.where=`(${r}) AND (${e.where})`:e.where=r,e}};return o([a()],n.prototype,"i3slayer",void 0),o([a({readOnly:!0})],n.prototype,"parsedDefinitionExpression",null),o([a({readOnly:!0})],n.prototype,"definitionExpressionFields",null),n=o([p("esri.views.3d.layers.support.DefinitionExpressionSceneLayerView")],n),n};export{h as a,E as n,g as t,x as u};