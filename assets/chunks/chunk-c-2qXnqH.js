import{eU as p,cO as g,ad as o,P as c,V as l,l as n,as as r,_ as a,$ as d,a1 as m}from"./chunk-AGUgPSYp.js";import{i as u}from"./chunk-rs84OZmp.js";import{r as w}from"./chunk-27N3lZwA.js";import"./chunk-oVLQlo07.js";import"./chunk-5oUFvpQx.js";import"./chunk-a7m88wdn.js";import"./chunk-zB3c2-Rc.js";import"./chunk-WdmRKYFo.js";import"./chunk-d5r-dDpw.js";import"./chunk-8z8MVveq.js";import"./chunk-AByDymf6.js";import"./chunk-CEMOhUyj.js";import"./chunk-pT1ASav_.js";import"./chunk-wjGM0_p5.js";import"./chunk-o-SGPu71.js";import"./chunk-ZiqPAPFa.js";import"./chunk-d-2kTk5W.js";import"./chunk-FQ6JeNDJ.js";import"./chunk-v6EOeNTY.js";import"./chunk-r3sgT-Ot.js";import"./chunk-pcBJnprf.js";import"./chunk-6uHVvMOu.js";import"./chunk-grRtyT-i.js";import"./chunk-humpx67F.js";let s=class extends p(g){constructor(){super(...arguments),this._highlightIds=new Map}attach(){this.graphicsView=new w({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new u(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler))}detach(){this.container.removeAllChildren(),this.graphicsView=o(this.graphicsView)}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}async fetchPopupFeatures(i){return this.graphicsView?this.graphicsView.hitTest(i).filter(t=>!!t.popupTemplate):[]}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof c?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(e=>e&&e.uid):l.isCollection(i)&&i.length>0&&(t=i.map(e=>e&&e.uid).toArray());const h=t?.filter(n);return h?.length?(this._addHighlight(h),r(()=>this._removeHighlight(h))):r()}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const h=this._highlightIds.get(t);this._highlightIds.set(t,h+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const h=this._highlightIds.get(t)-1;h===0?this._highlightIds.delete(t):this._highlightIds.set(t,h)}this._updateHighlight()}_updateHighlight(){this.graphicsView?.setHighlight(Array.from(this._highlightIds.keys()))}};a([d()],s.prototype,"graphicsView",void 0),s=a([m("esri.views.2d.layers.GraphicsLayerView2D")],s);const O=s;export{O as default};