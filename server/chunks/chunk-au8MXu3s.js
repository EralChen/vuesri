import { p as props$1 } from "./chunk-ZSpamg93.js";
import { defineComponent, shallowReactive, ref, nextTick, watch, computed, resolveComponent, mergeProps, withCtx, renderSlot, useSSRContext } from "vue";
import { aQ as U$1, as as j$1 } from "./chunk-ejFG4zJ0.js";
import "@vunk/core/shared/utils-class";
import { f as fullExtent } from "./chunk-8CFIjXxc.js";
import { u as useRequestInterceptor } from "./chunk-0A6HSBpB.js";
import qs from "qs";
import WMTSCapabilities from "ol/format/WMTSCapabilities.js";
import { optionsFromCapabilities } from "ol/source/WMTS.js";
import { V as VaVectorTileLayer } from "./chunk-vZEzdEr9.js";
import { ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./chunk-x8u7LPTa.js";
const props = {
  ...props$1,
  url: {
    type: String,
    required: true
  },
  layerId: {
    type: String,
    required: true
  },
  tileMatrixSetId: {
    type: String,
    default: "EPSG:3857"
  },
  defaultLayerOptions: {
    type: Object,
    default: () => ({})
  },
  /**
   * @description
   * If `true`, the layer will be created from the capabilities of the service.
   */
  optionsFromCapabilities: {
    type: Boolean,
    default: false
  },
  /**
   * @description
   * 边界情况下，可以自定义 tileInfo
   */
  tileInfo: {
    type: Object,
    default: void 0
  },
  /**
   * @description
   * 边界情况下，可以自定义 fullExtent
   */
  fullExtent: {
    type: Object,
    default: void 0
  }
};
const emits = {};
const geoserverStaticParams = {
  REQUEST: "GetTile",
  SERVICE: "WMTS",
  VERSION: "1.0.0",
  FORMAT: "application/vnd.mapbox-vector-tile"
};
const createGeoserverParams = (props2) => ({
  ...geoserverStaticParams,
  TILEROW: "{y}",
  TILECOL: "{x}",
  LAYER: props2.layerId,
  TILEMATRIXSET: props2.tileMatrixSetId,
  TILEMATRIX: `{z}`
});
const createVectorTileJson = (props2, tileInfo, fullExtent$1) => {
  return {
    "currentVersion": 10.81,
    "capabilities": "TilesOnly",
    "tiles": [
      props2.url + "?" + Object.entries(
        createGeoserverParams({
          layerId: props2.layerId,
          tileMatrixSetId: props2.tileMatrixSetId
        })
      ).map(([key, value]) => `${key}=${value}`).join("&")
    ],
    fullExtent: {
      ...fullExtent$1 ?? fullExtent,
      "spatialReference": {
        "wkid": 4326
      }
    },
    "tileInfo": tileInfo
  };
};
const parser = new WMTSCapabilities();
const _sfc_main = defineComponent({
  name: "VaGeoserverVectorTileLayer",
  components: {
    VaVectorTileLayer
  },
  props,
  emits,
  setup(props2) {
    const originOptions = shallowReactive({});
    const ready = ref(true);
    if (props2.optionsFromCapabilities) {
      ready.value = false;
      rCapabilities().then(async () => {
        await nextTick();
        ready.value = true;
      });
      watch(
        () => [props2.url, props2.layerId, props2.tileMatrixSetId],
        rCapabilities
      );
    }
    const { interceptorToggle } = useRequestInterceptor({
      urls: [
        new RegExp(`${props2.url}.*FORMAT=application%2Fvnd.mapbox-vector-tile`)
      ],
      before: (e) => {
        const params = qs.parse(e.url);
        const requestOptions = e.requestOptions;
        if (!requestOptions.query) {
          requestOptions.query = {};
        }
        const query = requestOptions.query;
        query.TILEMATRIX = `${params.TILEMATRIXSET}:${params.TILEMATRIX}`;
      }
    });
    interceptorToggle.add();
    const blobUrl = computed(() => {
      const tileInfo = props2.tileInfo || originOptions.tileInfo;
      if (!tileInfo)
        return "";
      const fullExtent2 = props2.fullExtent;
      const vectorTileJson = createVectorTileJson(
        props2,
        tileInfo,
        fullExtent2
      );
      return URL.createObjectURL(
        new Blob([JSON.stringify(vectorTileJson)], {
          type: "application/json"
        })
      );
    });
    const esriSource = computed(() => {
      const source = {
        type: "vector"
      };
      if (blobUrl.value) {
        source.url = blobUrl.value;
      } else {
        source.tiles = createVectorTileJson(props2).tiles;
      }
      return source;
    });
    const layerStyle = computed(() => {
      return {
        version: 8,
        sources: {
          esri: esriSource.value
        },
        layers: [
          {
            id: "main",
            type: "fill",
            "source-layer": props2.layerId.split(":")[1],
            source: "esri",
            paint: {
              "fill-color": "#088",
              "fill-outline-color": "green"
            },
            ...props2.defaultLayerOptions
          }
        ]
      };
    });
    watch(() => layerStyle.value, async () => {
      ready.value = false;
      await nextTick();
      ready.value = true;
    });
    async function rCapabilities() {
      return U$1(props2.url, {
        responseType: "text",
        query: {
          SERVICE: "WMTS",
          REQUEST: "GetCapabilities"
        }
      }).then((res) => {
        const result = parser.read(res.data);
        const options = optionsFromCapabilities(result, {
          layer: props2.layerId,
          matrixSet: props2.tileMatrixSetId
        });
        return [options, result];
      }).then(([options, result]) => {
        if (!options)
          return console.warn(`No capabilities found for layer ${props2.layerId} in ${props2.url}`);
        const tileMatrixSet = result.Contents.TileMatrixSet.find((item) => item.Identifier === props2.tileMatrixSetId);
        if (!tileMatrixSet)
          return console.warn(`No tileMatrixSet found for layer ${props2.layerId} in ${props2.url}`);
        const wkid = tileMatrixSet.SupportedCRS.split(":").pop();
        const tileMatrix = tileMatrixSet.TileMatrix;
        const tileInfo = new j$1({
          lods: tileMatrix.map((item, i) => {
            return {
              level: i,
              resolution: options.tileGrid.getResolution(i),
              scale: item.ScaleDenominator,
              rows: item.MatrixHeight,
              cols: item.MatrixWidth,
              origin: options.tileGrid.getOrigin(i)
            };
          }),
          size: [
            options.tileGrid.getTileSize(0),
            options.tileGrid.getTileSize(1)
          ],
          spatialReference: {
            wkid
          }
        });
        originOptions.tileInfo = tileInfo;
      });
    }
    return {
      layerStyle,
      ready
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_VaVectorTileLayer = resolveComponent("VaVectorTileLayer");
  if (_ctx.ready) {
    _push(ssrRenderComponent(_component_VaVectorTileLayer, mergeProps({ style: _ctx.layerStyle }, _attrs), {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "default")
          ];
        }
      }),
      _: 3
    }, _parent));
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../packages/components/geoserver-vector-tile-layer/src/index.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
const VaGeoserverVectorTileLayer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
VaGeoserverVectorTileLayer.install = (app) => {
  app.component(VaGeoserverVectorTileLayer.name, VaGeoserverVectorTileLayer);
};
export {
  VaGeoserverVectorTileLayer as V
};
