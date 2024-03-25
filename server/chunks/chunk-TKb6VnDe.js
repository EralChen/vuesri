import { p as props$1, u as useSetLayerOptions, a as useAddLayer } from "./chunk-ZSpamg93.js";
import { defineComponent, computed, shallowRef, watchEffect, watch, provide, useSSRContext } from "vue";
import { aC as M, sa as K } from "./chunk-ejFG4zJ0.js";
import "@vunk/core/shared/utils-class";
import { bindPropsFactory, onEmitsFactory } from "@vunk/core/shared/utils-vue";
import { u as useView } from "./chunk-oD5XiDYU.js";
import { u as useRequestInterceptor } from "./chunk-0A6HSBpB.js";
import { ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./chunk-x8u7LPTa.js";
const props = {
  ...props$1,
  defaultOptions: {
    type: Object,
    default: () => ({})
  },
  url: {
    type: String,
    required: true
  },
  serviceMode: {
    type: String,
    default: "RESTful"
  },
  customParameters: {
    type: Object,
    default: () => ({})
  },
  sublayers: {
    type: Array,
    default: void 0
  },
  activeLayer: {
    type: Object,
    default: void 0
  },
  /**
   * @description
   * 重写 Capabilities
   */
  overwriteCapabilities: {
    type: Object,
    default: void 0
  },
  subDomains: {
    type: Array,
    default: void 0
  }
};
const createBindProps = bindPropsFactory(props);
const emits = {
  load: (e) => e
};
const createOnEmits = onEmitsFactory(emits);
const createWGS84BoundingBoxDOM = function(bbox = new M({
  xmin: -180,
  ymin: -90,
  xmax: 180,
  ymax: 90,
  spatialReference: {
    wkid: 4326
  }
})) {
  const dom = document.createElement("ows:WGS84BoundingBox");
  const lowerCorner = document.createElement("ows:LowerCorner");
  lowerCorner.textContent = bbox.xmin + " " + bbox.ymin;
  const upperCorner = document.createElement("ows:UpperCorner");
  upperCorner.textContent = bbox.xmax + " " + bbox.ymax;
  dom.appendChild(lowerCorner);
  dom.appendChild(upperCorner);
  return dom;
};
const createPMString = (tileMatrixSetId = "PM") => `<Capabilities xmlns="http://www.opengis.net/wmts/1.0" xmlns:gml="http://www.opengis.net/gml" xmlns:ows="http://www.opengis.net/ows/1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="1.0.0" xsi:schemaLocation="http://www.opengis.net/wmts/1.0 http://schemas.opengis.net/wmts/1.0/wmtsGetCapabilities_response.xsd">
<TileMatrixSet>
<ows:Identifier>${tileMatrixSetId}</ows:Identifier>
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
`;
const createPMTileMatrixSetLinkString = (tileMatrixSetId = "PM") => `<Capabilities xmlns="http://www.opengis.net/wmts/1.0" xmlns:ows="http://www.opengis.net/ows/1.1" xmlns:gml="http://www.opengis.net/gml" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xlink="http://www.w3.org/1999/xlink" xsi:schemaLocation="http://www.opengis.net/wmts/1.0 http://schemas.opengis.net/wmts/1.0.0/wmtsGetCapabilities_response.xsd" version="1.0.0">
<TileMatrixSetLink>
<TileMatrixSet>${tileMatrixSetId}</TileMatrixSet>
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
`;
const createPMTileMatrix = (tileMatrixSetId = "PM") => {
  const PMDOM = new DOMParser().parseFromString(
    createPMString(tileMatrixSetId),
    "text/xml"
  ).getElementsByTagName("TileMatrixSet")[0];
  const PMTileMatrixSetLinkDOM = new DOMParser().parseFromString(
    createPMTileMatrixSetLinkString(tileMatrixSetId),
    "text/xml"
  ).getElementsByTagName("TileMatrixSetLink")[0];
  return {
    /**
       * <TileMatrixSet>
          <ows:Identifier>${tileMatrixSetId}</ows:Identifier>
          <ows:SupportedCRS>EPSG:3857</ows:SupportedCRS>
          <TileMatrix>
       */
    TileMatrixSet: PMDOM,
    /**
       * <TileMatrixSetLink>
       *  <TileMatrixSet>PM</TileMatrixSet>
       */
    TileMatrixSetLink: PMTileMatrixSetLinkDOM
  };
};
const overwriteAction = {
  PM: createPMTileMatrix
};
const _sfc_main = defineComponent({
  name: "VaWmtsLayer",
  props,
  emits,
  setup(props2, { emit }) {
    const view = useView();
    const map = view.map;
    const overwriteTileMatrixInfo = computed(() => {
      return props2.overwriteCapabilities?.replaceTileMatrixSets.reduce((prev, cur) => {
        prev[cur.find] = overwriteAction[cur.replacement](cur.find);
        return prev;
      }, {}) ?? {};
    });
    const { interceptorToggle } = useRequestInterceptor({
      urls: [
        new RegExp(`${props2.url}.*VUESRI=VaWmtsLayer`)
      ],
      before(request) {
        const subDomains = props2.subDomains;
        if (subDomains) {
          request.url = request.url.replace(
            "{subDomain}",
            subDomains[Math.floor(Math.random() * subDomains.length)]
          );
        }
      },
      after(e) {
        if (e.url?.includes("request=GetCapabilities")) {
          const xmlString = e.data;
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(xmlString, "application/xml");
          const Contents = xmlDoc.getElementsByTagName("Contents")[0];
          const Layers = xmlDoc.getElementsByTagName("Layer");
          for (let i = 0; i < Layers.length; i++) {
            const Layer = Layers[i];
            const TileMatrixSetLinks = Layer.getElementsByTagName("TileMatrixSetLink");
            for (let j = 0; j < TileMatrixSetLinks.length; j++) {
              const TileMatrixSetLink = TileMatrixSetLinks[j];
              if (TileMatrixSetLink.textContent && overwriteTileMatrixInfo.value[TileMatrixSetLink.textContent]) {
                TileMatrixSetLink.replaceWith(
                  overwriteTileMatrixInfo.value[TileMatrixSetLink.textContent].TileMatrixSetLink
                );
              }
            }
            const Identifier = Layer.getElementsByTagName("ows:Identifier")[0];
            if (Identifier && props2.activeLayer?.id && props2.overwriteCapabilities?.extend) {
              if (props2.activeLayer.id === Identifier.textContent) {
                const WGS84BoundingBox = Layer.getElementsByTagName("ows:WGS84BoundingBox")[0];
                WGS84BoundingBox.replaceWith(
                  createWGS84BoundingBoxDOM(
                    props2.overwriteCapabilities.extend
                  )
                );
              }
            }
          }
          const TileMatrixSets = Contents.getElementsByTagName("TileMatrixSet");
          for (let i = 0; i < TileMatrixSets.length; i++) {
            const TileMatrixSet = TileMatrixSets[i];
            const Identifier = TileMatrixSet.getElementsByTagName("ows:Identifier")[0];
            if (Identifier) {
              if (overwriteTileMatrixInfo.value[Identifier.textContent]) {
                TileMatrixSet.replaceWith(
                  overwriteTileMatrixInfo.value[Identifier.textContent].TileMatrixSet
                );
              }
            }
          }
          e.data = xmlDoc.documentElement.outerHTML;
        }
      }
    });
    interceptorToggle.add();
    const layer = new K({
      ...props2.activeLayer ? { activeLayer: props2.activeLayer } : {},
      ...props2.defaultOptions
    });
    const sublayerReflect = shallowRef({});
    layer.when(() => {
      sublayerReflect.value = layer.sublayers.reduce((prev, cur) => {
        prev[cur.id] = cur;
        return prev;
      }, {});
    });
    watchEffect(() => {
      layer.url = props2.url;
    });
    watchEffect(() => {
      layer.serviceMode = props2.serviceMode;
    });
    watchEffect(() => {
      layer.customParameters = {
        ...props2.customParameters,
        // for RequestInterceptor
        "VUESRI": "VaWmtsLayer"
      };
    });
    watchEffect(() => {
      if (!props2.sublayers)
        return;
      layer.sublayers = props2.sublayers;
    });
    watch(() => [
      props2.activeLayer?.id,
      props2.activeLayer?.imageFormat
    ], ([id, imageFormat]) => {
      if (!id)
        return;
      layer.when().then(() => {
        const beActiveLayer = sublayerReflect.value[id];
        console.warn("sublayers can not find the id: ", id);
        if (beActiveLayer && imageFormat) {
          beActiveLayer.imageFormat = imageFormat;
        }
        layer.activeLayer = beActiveLayer;
        layer.refresh();
      });
    }, { immediate: true });
    watchEffect(() => {
      layer.title = props2.title;
    });
    useSetLayerOptions(layer, props2);
    useAddLayer(map, layer, props2);
    provide("vaLayer", layer);
    provide("vaWmtsLayer", layer);
    emit("load", { view, layer });
    return {};
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/wmts-layer/src/index.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
const VaWmtsLayer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
VaWmtsLayer.install = (app) => {
  app.component(VaWmtsLayer.name, VaWmtsLayer);
};
export {
  VaWmtsLayer as V,
  createOnEmits as a,
  createBindProps as c,
  emits as e,
  props as p
};
