import{ad as i,ae as p,$ as s,a0 as t,af as a,a2 as c,a3 as h}from"./chunk-xdbuWCSg.js";import{O as n}from"./chunk-7k4THFxZ.js";import"./chunk-t4TbIqUg.js";import"./chunk-qVxa0YU8.js";import"./chunk-ZHuCNcCR.js";import"./chunk-j8HE-0Dg.js";import"./chunk-47D7e9N5.js";import"./chunk-U8KCBqLL.js";let r=class extends i(h){constructor(e){super(e),this.processor=null,this.slicePlaneEnabled=!1,this.layer=new d,this.suspended=!1}initialize(){this._set("processor",new n({owner:this}))}destroy(){this._set("processor",p(this.processor))}get graphics(){return this.view?.graphics}get loadedGraphics(){return this.graphics}get updating(){return!!this.processor?.updating}get symbolUpdateType(){return this.processor.graphicsCore.symbolUpdateType}getHit(e){return this.processor.getHit(e)}whenGraphicBounds(e,o){return this.processor.whenGraphicBounds(e,o)}graphicChanged(e){this.processor.graphicsCore.graphicUpdateHandler(e)}get updatePolicy(){return this.processor.graphicsCore.effectiveUpdatePolicy}async queryGraphics(){return this.loadedGraphics}highlight(e){return this.processor.highlight(e)}maskOccludee(e){return this.processor.maskOccludee(e)}};s([t({readOnly:!0})],r.prototype,"graphics",null),s([t()],r.prototype,"loadedGraphics",null),s([t({readOnly:!0})],r.prototype,"updating",null),s([t({constructOnly:!0})],r.prototype,"view",void 0),s([t()],r.prototype,"processor",void 0),s([t({type:Boolean})],r.prototype,"slicePlaneEnabled",void 0),s([t()],r.prototype,"layer",void 0),s([t()],r.prototype,"suspended",void 0),r=s([c("esri.views.3d.layers.GraphicsView3D")],r);class d extends a{constructor(){super(),this.type="graphics-view-3d-dummy",this.id=this.uid}}const f=r;export{f as default};