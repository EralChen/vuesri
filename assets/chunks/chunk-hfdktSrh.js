import{p as u,u as D,a as y}from"./chunk-gtyL-bMM.js";import{lp as I,ns as v,bA as b,h2 as B,lx as E,sJ as P,he as k,gZ as s,h3 as O,lB as W,lG as G,hc as N}from"./chunk-xdbuWCSg.js";import{u as _}from"./chunk-A28ZiPww.js";import{u as $}from"./chunk-vUrHI-Qa.js";const R={...u,defaultOptions:{type:Object,default:()=>({})},url:{type:String,required:!0},serviceMode:{type:String,default:"RESTful"},customParameters:{type:Object,default:()=>({})},sublayers:{type:Array,default:void 0},activeLayer:{type:Object,default:void 0},overwriteCapabilities:{type:Object,default:void 0},subDomains:{type:Array,default:void 0}},Q=I(R),S={load:i=>i},Y=v(S),V=function(i=new b({xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:{wkid:4326}})){const a=document.createElement("ows:WGS84BoundingBox"),r=document.createElement("ows:LowerCorner");r.textContent=i.xmin+" "+i.ymin;const M=document.createElement("ows:UpperCorner");return M.textContent=i.xmax+" "+i.ymax,a.appendChild(r),a.appendChild(M),a},A=(i="PM")=>`<Capabilities xmlns="http://www.opengis.net/wmts/1.0" xmlns:gml="http://www.opengis.net/gml" xmlns:ows="http://www.opengis.net/ows/1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="1.0.0" xsi:schemaLocation="http://www.opengis.net/wmts/1.0 http://schemas.opengis.net/wmts/1.0/wmtsGetCapabilities_response.xsd">
<TileMatrixSet>
<ows:Identifier>${i}</ows:Identifier>
<ows:SupportedCRS>EPSG:3857</ows:SupportedCRS>
<TileMatrix>
<ows:Identifier>0</ows:Identifier>
<ScaleDenominator>559082264.0287178958533332</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>1</MatrixWidth>
<MatrixHeight>1</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>1</ows:Identifier>
<ScaleDenominator>279541132.0143588959472254</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>2</MatrixWidth>
<MatrixHeight>2</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>2</ows:Identifier>
<ScaleDenominator>139770566.0071793960087234</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>4</MatrixWidth>
<MatrixHeight>4</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>3</ows:Identifier>
<ScaleDenominator>69885283.0035897239868063</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>8</MatrixWidth>
<MatrixHeight>8</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>4</ows:Identifier>
<ScaleDenominator>34942641.5017948619934032</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>16</MatrixWidth>
<MatrixHeight>16</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>5</ows:Identifier>
<ScaleDenominator>17471320.7508974309967016</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>32</MatrixWidth>
<MatrixHeight>32</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>6</ows:Identifier>
<ScaleDenominator>8735660.3754487154983508</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>64</MatrixWidth>
<MatrixHeight>64</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>7</ows:Identifier>
<ScaleDenominator>4367830.1877243577491754</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>128</MatrixWidth>
<MatrixHeight>128</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>8</ows:Identifier>
<ScaleDenominator>2183915.0938621788745877</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>256</MatrixWidth>
<MatrixHeight>256</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>9</ows:Identifier>
<ScaleDenominator>1091957.5469310886252288</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>512</MatrixWidth>
<MatrixHeight>512</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>10</ows:Identifier>
<ScaleDenominator>545978.7734655447186469</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>1024</MatrixWidth>
<MatrixHeight>1024</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>11</ows:Identifier>
<ScaleDenominator>272989.3867327723085907</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>2048</MatrixWidth>
<MatrixHeight>2048</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>12</ows:Identifier>
<ScaleDenominator>136494.6933663861796617</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>4096</MatrixWidth>
<MatrixHeight>4096</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>13</ows:Identifier>
<ScaleDenominator>68247.3466831930771477</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>8192</MatrixWidth>
<MatrixHeight>8192</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>14</ows:Identifier>
<ScaleDenominator>34123.6733415965449154</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>16384</MatrixWidth>
<MatrixHeight>16384</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>15</ows:Identifier>
<ScaleDenominator>17061.8366707982724577</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>32768</MatrixWidth>
<MatrixHeight>32768</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>16</ows:Identifier>
<ScaleDenominator>8530.9183353991362289</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>65536</MatrixWidth>
<MatrixHeight>65536</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>17</ows:Identifier>
<ScaleDenominator>4265.4591676995681144</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>131072</MatrixWidth>
<MatrixHeight>131072</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>18</ows:Identifier>
<ScaleDenominator>2132.7295838497840572</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>262144</MatrixWidth>
<MatrixHeight>262144</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>19</ows:Identifier>
<ScaleDenominator>1066.3647919248918304</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>524288</MatrixWidth>
<MatrixHeight>524288</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>20</ows:Identifier>
<ScaleDenominator>533.1823959624461134</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>1048576</MatrixWidth>
<MatrixHeight>1048576</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>21</ows:Identifier>
<ScaleDenominator>266.5911979812228585</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>2097152</MatrixWidth>
<MatrixHeight>2097152</MatrixHeight>
</TileMatrix>
</TileMatrixSet>
</Capabilities>
`,F=(i="PM")=>`<Capabilities xmlns="http://www.opengis.net/wmts/1.0" xmlns:ows="http://www.opengis.net/ows/1.1" xmlns:gml="http://www.opengis.net/gml" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xlink="http://www.w3.org/1999/xlink" xsi:schemaLocation="http://www.opengis.net/wmts/1.0 http://schemas.opengis.net/wmts/1.0.0/wmtsGetCapabilities_response.xsd" version="1.0.0">
<TileMatrixSetLink>
<TileMatrixSet>${i}</TileMatrixSet>
<TileMatrixSetLimits>
<TileMatrixLimits>
<TileMatrix>0</TileMatrix>
<MinTileRow>0</MinTileRow>
<MaxTileRow>1</MaxTileRow>
<MinTileCol>0</MinTileCol>
<MaxTileCol>1</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>1</TileMatrix>
<MinTileRow>0</MinTileRow>
<MaxTileRow>2</MaxTileRow>
<MinTileCol>0</MinTileCol>
<MaxTileCol>2</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>2</TileMatrix>
<MinTileRow>0</MinTileRow>
<MaxTileRow>4</MaxTileRow>
<MinTileCol>0</MinTileCol>
<MaxTileCol>4</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>3</TileMatrix>
<MinTileRow>0</MinTileRow>
<MaxTileRow>8</MaxTileRow>
<MinTileCol>0</MinTileCol>
<MaxTileCol>8</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>4</TileMatrix>
<MinTileRow>0</MinTileRow>
<MaxTileRow>16</MaxTileRow>
<MinTileCol>0</MinTileCol>
<MaxTileCol>16</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>5</TileMatrix>
<MinTileRow>0</MinTileRow>
<MaxTileRow>32</MaxTileRow>
<MinTileCol>0</MinTileCol>
<MaxTileCol>32</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>6</TileMatrix>
<MinTileRow>0</MinTileRow>
<MaxTileRow>64</MaxTileRow>
<MinTileCol>0</MinTileCol>
<MaxTileCol>64</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>7</TileMatrix>
<MinTileRow>0</MinTileRow>
<MaxTileRow>128</MaxTileRow>
<MinTileCol>0</MinTileCol>
<MaxTileCol>128</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>8</TileMatrix>
<MinTileRow>0</MinTileRow>
<MaxTileRow>256</MaxTileRow>
<MinTileCol>0</MinTileCol>
<MaxTileCol>256</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>9</TileMatrix>
<MinTileRow>0</MinTileRow>
<MaxTileRow>512</MaxTileRow>
<MinTileCol>0</MinTileCol>
<MaxTileCol>512</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>10</TileMatrix>
<MinTileRow>0</MinTileRow>
<MaxTileRow>1024</MaxTileRow>
<MinTileCol>0</MinTileCol>
<MaxTileCol>1024</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>11</TileMatrix>
<MinTileRow>0</MinTileRow>
<MaxTileRow>2048</MaxTileRow>
<MinTileCol>0</MinTileCol>
<MaxTileCol>2048</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>12</TileMatrix>
<MinTileRow>0</MinTileRow>
<MaxTileRow>4096</MaxTileRow>
<MinTileCol>0</MinTileCol>
<MaxTileCol>4096</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>13</TileMatrix>
<MinTileRow>2736</MinTileRow>
<MaxTileRow>4639</MaxTileRow>
<MinTileCol>32</MinTileCol>
<MaxTileCol>7935</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>14</TileMatrix>
<MinTileRow>5472</MinTileRow>
<MaxTileRow>9263</MaxTileRow>
<MinTileCol>80</MinTileCol>
<MaxTileCol>15855</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>15</TileMatrix>
<MinTileRow>10944</MinTileRow>
<MaxTileRow>18527</MaxTileRow>
<MinTileCol>160</MinTileCol>
<MaxTileCol>31695</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>16</TileMatrix>
<MinTileRow>21904</MinTileRow>
<MaxTileRow>37039</MaxTileRow>
<MinTileCol>320</MinTileCol>
<MaxTileCol>63391</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>17</TileMatrix>
<MinTileRow>43808</MinTileRow>
<MaxTileRow>74063</MaxTileRow>
<MinTileCol>656</MinTileCol>
<MaxTileCol>126767</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>18</TileMatrix>
<MinTileRow>87616</MinTileRow>
<MaxTileRow>148111</MaxTileRow>
<MinTileCol>1312</MinTileCol>
<MaxTileCol>253535</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>19</TileMatrix>
<MinTileRow>175248</MinTileRow>
<MaxTileRow>294063</MaxTileRow>
<MinTileCol>170144</MinTileCol>
<MaxTileCol>343487</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>20</TileMatrix>
<MinTileRow>357008</MinTileRow>
<MaxTileRow>384687</MaxTileRow>
<MinTileCol>524400</MinTileCol>
<MaxTileCol>540927</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>21</TileMatrix>
<MinTileRow>714032</MinTileRow>
<MaxTileRow>768783</MaxTileRow>
<MinTileCol>1048816</MinTileCol>
<MaxTileCol>1081775</MaxTileCol>
</TileMatrixLimits>
</TileMatrixSetLimits>
</TileMatrixSetLink>
</Capabilities>
`,j=(i="PM")=>{const a=new DOMParser().parseFromString(A(i),"text/xml").getElementsByTagName("TileMatrixSet")[0],r=new DOMParser().parseFromString(F(i),"text/xml").getElementsByTagName("TileMatrixSetLink")[0];return{TileMatrixSet:a,TileMatrixSetLink:r}},U={PM:j},q=B({name:"VaWmtsLayer",props:R,emits:S,setup(i,{emit:a}){const r=_(),M=r.map,x=E(()=>i.overwriteCapabilities?.replaceTileMatrixSets.reduce((e,l)=>(e[l.find]=U[l.replacement](l.find),e),{})??{}),{interceptorToggle:c}=$({urls:[new RegExp(`${i.url}.*VUESRI=VaWmtsLayer`)],before(e){const l=i.subDomains;l&&(e.url=e.url.replace("{subDomain}",l[Math.floor(Math.random()*l.length)]))},after(e){if(e.url?.includes("request=GetCapabilities")){const l=e.data,m=new DOMParser().parseFromString(l,"application/xml"),H=m.getElementsByTagName("Contents")[0],f=m.getElementsByTagName("Layer");for(let o=0;o<f.length;o++){const n=f[o],T=n.getElementsByTagName("TileMatrixSetLink");for(let w=0;w<T.length;w++){const d=T[w];d.textContent&&x.value[d.textContent]&&d.replaceWith(x.value[d.textContent].TileMatrixSetLink)}const p=n.getElementsByTagName("ows:Identifier")[0];p&&i.activeLayer?.id&&i.overwriteCapabilities?.extend&&i.activeLayer.id===p.textContent&&n.getElementsByTagName("ows:WGS84BoundingBox")[0].replaceWith(V(i.overwriteCapabilities.extend))}const L=H.getElementsByTagName("TileMatrixSet");for(let o=0;o<L.length;o++){const n=L[o],T=n.getElementsByTagName("ows:Identifier")[0];T&&x.value[T.textContent]&&n.replaceWith(x.value[T.textContent].TileMatrixSet)}e.data=m.documentElement.outerHTML}}});c.add();const t=new P({...i.activeLayer?{activeLayer:i.activeLayer}:{},...i.defaultOptions}),g=k({});return t.when(()=>{g.value=t.sublayers.reduce((e,l)=>(e[l.id]=l,e),{})}),s(()=>{t.url=i.url}),s(()=>{t.serviceMode=i.serviceMode}),s(()=>{t.customParameters={...i.customParameters,VUESRI:"VaWmtsLayer"}}),s(()=>{i.sublayers&&(t.sublayers=i.sublayers)}),O(()=>[i.activeLayer?.id,i.activeLayer?.imageFormat],([e,l])=>{e&&t.when().then(()=>{const h=g.value[e];console.warn("sublayers can not find the id: ",e),h&&l&&(h.imageFormat=l),t.activeLayer=h,t.refresh()})},{immediate:!0}),s(()=>{t.title=i.title}),D(t,i),y(M,t,i),W("vaLayer",t),W("vaWmtsLayer",t),a("load",{view:r,layer:t}),{}}});function X(i,a,r,M,x,c){return N(i.$slots,"default")}const C=G(q,[["render",X]]);C.install=i=>{i.component(C.name,C)};export{C as V,Y as a,Q as c,S as e,R as p};