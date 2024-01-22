import{cN as p,s as c,cR as u,dZ as g,d_ as f,cP as b,d$ as I,_ as o,$ as m,a1 as R,cO as w}from"./chunk-AGUgPSYp.js";import{n as z}from"./chunk-tn991xeW.js";import{o as T}from"./chunk-OFlNQH78.js";import{p as x}from"./chunk-jISWNHUi.js";import"./chunk-oVLQlo07.js";let s=class extends x(p(T(z(w)))){constructor(){super(...arguments),this.type="imagery-tile-3d",this.isAlignedMapTile=!0}initialize(){this.layer.increaseRasterJobHandlerUsage(),this.fullExtent==null&&this.addResolvingPromise(Promise.reject(new c("layerview:spatial-reference-incompatible","The layer extent cannot be projected to the view's spatial reference",{layer:this.layer})));const e=u(()=>this.view?.basemapTerrain?.tilingSchemeLocked).then(()=>{const t=this.view.basemapTerrain.tilingScheme,i=this.layer.tileInfo,r=["png","png24","png32","jpg","mixed"].includes(i.format)&&t.compatibleWith(i);this.isAlignedMapTile=r;const n=r?i:t.toTileInfo();this.tileInfo=n,this._updatingHandles.add(()=>[this.layer.renderer,this.layer.interpolation,this.layer.bandIds,this.layer.multidimensionalDefinition,this.layer.multidimensionalSubset,this.layer.rasterFunction,this.timeExtent],()=>this.refresh())});this.addResolvingPromise(e)}destroy(){this.layer.decreaseRasterJobHandlerUsage(),this.view=null}get _blankTile(){const e=document.createElement("canvas"),t=e.getContext("2d"),[i,r]=this.tileInfo.size;return e.width=i,e.height=r,t.clearRect(0,0,i,r),t.getImageData(0,0,i,r)}get imageFormatIsOpaque(){return this.layer.tileInfo.format==="jpg"}get hasMixedImageFormats(){return this.layer.tileInfo.format==="mixed"}get dataLevelRange(){const e=this.layer.tileInfo,t=this.tileInfo.lodAt(0)?.scale,i=this.layer.tileInfo.lodAt(e.lods.length-1)?.scale;return this.levelRangeFromScaleRange(t,i)}_getfullExtent(){return g(this.layer.rasterInfo,this.view.basemapTerrain?.spatialReference!=null?this.view.basemapTerrain.spatialReference:this.view.spatialReference)}async fetchTile(e,t,i,r){const n=this.tileInfo,d=this._canSymbolizeInWebGL(),y={tileInfo:n,requestRawData:d,signal:r.signal,timeExtent:this.timeExtent,requestAsImageElement:this.isAlignedMapTile},l=await this.layer.fetchTile(e,t,i,y);if(l instanceof HTMLImageElement)return l;let h=l?.pixelBlock;if(h==null)return this._blankTile;if(!d&&(h=await this.layer.applyRenderer(l),h==null))return this._blankTile;const a=new f([e,t,i],h,n.size[0],n.size[1]);return d?(a.symbolizerRenderer=this.layer.symbolizer.rendererJSON,a.symbolizerParameters=this.layer.symbolizer.generateWebGLParameters(this._getSymbolizerOptions(e)),a.transformGrid=l.transformGrid):a.isRendereredSource=!0,a.interpolation=this.layer.interpolation,a.bandIds=this.layer.bandIds,a}_getSymbolizerOptions(e){const t=this.tileInfo.lodAt(e).resolution;return{pixelBlock:null,isGCS:this.view.basemapTerrain?.spatialReference!=null?this.view.basemapTerrain.spatialReference.isGeographic:this.view.spatialReference.isGeographic,resolution:{x:t,y:t},bandIds:this.layer.bandIds}}ensureSymbolizerParameters(e){this._canSymbolizeInWebGL()&&JSON.stringify(e.symbolizerRenderer)!==JSON.stringify(this.layer.symbolizer.rendererJSON)&&(e.symbolizerParameters=this.layer.symbolizer.generateWebGLParameters(this._getSymbolizerOptions(e.lij[0])))}createFetchPopupFeaturesQueryGeometry(e,t){return b(e,t,this.view)}refresh(){this.emit("data-changed")}async doRefresh(){this.suspended||this.emit("data-changed")}_canSymbolizeInWebGL(){const e=I("3d"),{symbolizer:t}=this.layer,i=t.lookup?.colormapLut?.indexedColormap,r=i&&i.length>4*(e.maxTextureSize||4906);return e.supportsTextureFloat&&t.canRenderInWebGL&&!r}};o([m({readOnly:!0})],s.prototype,"_blankTile",null),o([m({readOnly:!0})],s.prototype,"imageFormatIsOpaque",null),o([m({readOnly:!0})],s.prototype,"hasMixedImageFormats",null),o([m({readOnly:!0})],s.prototype,"dataLevelRange",null),s=o([R("esri.views.3d.layers.ImageryTileLayerView3D")],s);const L=s;export{L as default};