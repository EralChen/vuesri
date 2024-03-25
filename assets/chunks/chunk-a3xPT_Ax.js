import{$ as p,a2 as d,ak as m,_ as u,b1 as l}from"./chunk-xdbuWCSg.js";import{X as g}from"./chunk-VCr7DBDy.js";import"./chunk-t4TbIqUg.js";import"./chunk-r24-WWai.js";import"./chunk-7J2J9-8u.js";import"./chunk-cs4mbaAm.js";import"./chunk-gJZ7CV2L.js";import"./chunk-20MX182K.js";import"./chunk-pcBJnprf.js";import"./chunk-6nolmh9Y.js";import"./chunk-BE7Z7i9m.js";import"./chunk-6sb0pSoc.js";import"./chunk-dj2FqAQs.js";import"./chunk-T3OndTZG.js";import"./chunk-plFRDLZL.js";let i=class extends g{initialize(){this.addHandles([m(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(n=>n.renderer!=null),e=this._commandsQueue.updateTracking.updating,r=this._updatingRequiredFieldsPromise!=null,s=!this._worker,a=this.dataUpdating,o=t&&(e||r||s||a);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}
  -> hasRenderer ${t}
  -> hasPendingCommand ${e}
  -> updatingRequiredFields ${r}
  -> updatingProxy ${s}
  -> updatingPipeline ${a}
`),o}};i=p([d("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const v=i;export{v as default};
