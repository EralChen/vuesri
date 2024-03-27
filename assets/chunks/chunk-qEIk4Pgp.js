import{$ as p,a2 as d,ak as m,_ as u,b1 as l}from"./chunk-gZYsZ36N.js";import{X as g}from"./chunk-m39oVYfr.js";import"./chunk-t4TbIqUg.js";import"./chunk-ojUUCvqn.js";import"./chunk-O81L3uYa.js";import"./chunk-LCQ8NG3J.js";import"./chunk-gJZ7CV2L.js";import"./chunk-iPxuUnvs.js";import"./chunk-pcBJnprf.js";import"./chunk-6nolmh9Y.js";import"./chunk-Z551CZVy.js";import"./chunk-f_w1oLax.js";import"./chunk-rTJVl5ZJ.js";import"./chunk-HudRkU7r.js";import"./chunk-jFB_M7PI.js";let i=class extends g{initialize(){this.addHandles([m(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(n=>n.renderer!=null),e=this._commandsQueue.updateTracking.updating,r=this._updatingRequiredFieldsPromise!=null,s=!this._worker,a=this.dataUpdating,o=t&&(e||r||s||a);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}
  -> hasRenderer ${t}
  -> hasPendingCommand ${e}
  -> updatingRequiredFields ${r}
  -> updatingProxy ${s}
  -> updatingPipeline ${a}
`),o}};i=p([d("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const v=i;export{v as default};
