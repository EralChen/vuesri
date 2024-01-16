import { defineComponent, shallowRef, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VaTileLayer } from "./chunk-IymnPBZM.js";
import { V as VaSceneView } from "./chunk-MFY2zKAf.js";
import { V as VaTdtBasemap } from "./chunk-2_8Nl9Hn.js";
import "./chunk-MaQWsU9J.js";
import "@vunk/core/shared/utils-vue";
import "./chunk-KFNcxJaF.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-oD5XiDYU.js";
import "./chunk-5WMxrbI6.js";
import "./chunk-AN2pNKfL.js";
import "./chunk-rLRIqhK0.js";
import "vike/server";
import "vike-vue/usePageContext";
import "./chunk-8AIdLOXL.js";
import "path";
import "@vunk/core";
import "element-plus";
import "@vueuse/core";
import "@vunk/core/shared/utils-class";
import "deepdash-es/standalone";
import "gsap";
import "@vunk/core/composables";
import "lodash-es";
import "@vunk/core/shared/utils-promise";
import "@vunk/core/components/client-only";
import "@element-plus/icons-vue";
import "./chunk-gcnOZdJc.js";
import "mitt";
import "./chunk-chuKOP2I.js";
import "./chunk-BSxDNfxQ.js";
import "./chunk-Y9HZwdAu.js";
import "./chunk-jzCtEhR4.js";
import "./chunk-LGmaep6O.js";
import "./chunk-OjvQdFJg.js";
const lods = [
  {
    "level": 0,
    "resolution": 0.7039130078552128,
    "scale": 2958287637958547e-7
  },
  {
    "level": 1,
    "resolution": 0.3519565039276064,
    "scale": 14791438189792734e-8
  },
  {
    "level": 2,
    "resolution": 0.1759782519638032,
    "scale": 7395719094896367e-8
  },
  {
    "level": 3,
    "resolution": 0.0879891259819016,
    "scale": 36978595474481836e-9
  },
  {
    "level": 4,
    "resolution": 0.0439945629909508,
    "scale": 18489297737240918e-9
  },
  {
    "level": 5,
    "resolution": 0.0219972814954754,
    "scale": 9244648868620459e-9
  },
  {
    "level": 6,
    "resolution": 0.0109986407477377,
    "scale": 4.6223244343102295e6
  },
  {
    "level": 7,
    "resolution": 0.00549932037386885,
    "scale": 2.3111622171551147e6
  },
  {
    "level": 8,
    "resolution": 0.002749660186934425,
    "scale": 1.1555811085775574e6
  },
  {
    "level": 9,
    "resolution": 0.0013748300934672125,
    "scale": 577790.5542887787
  },
  {
    "level": 10,
    "resolution": 6874150467336063e-19,
    "scale": 288895.27714438934
  },
  {
    "level": 11,
    "resolution": 34370752336680314e-20,
    "scale": 144447.63857219467
  },
  {
    "level": 12,
    "resolution": 17185376168340157e-20,
    "scale": 72223.81928609734
  },
  {
    "level": 13,
    "resolution": 8592688084170078e-20,
    "scale": 36111.90964304867
  },
  {
    "level": 14,
    "resolution": 4296344042085039e-20,
    "scale": 18055.954821524334
  },
  {
    "level": 15,
    "resolution": 21481720210425196e-21,
    "scale": 9027.977410762167
  },
  {
    "level": 16,
    "resolution": 10740860105212598e-21,
    "scale": 4513.9887053810835
  },
  {
    "level": 17,
    "resolution": 5370430052606299e-21,
    "scale": 2256.9943526905417
  },
  {
    "level": 18,
    "resolution": 26852150263031495e-22,
    "scale": 1128.4971763452709
  },
  {
    "level": 19,
    "resolution": 13426075131515748e-22,
    "scale": 564.2485881726354
  },
  {
    "level": 20,
    "resolution": 6713037565757874e-22,
    "scale": 282.1242940863177
  },
  {
    "level": 21,
    "resolution": 3356518782878937e-22,
    "scale": 141.06214704315886
  },
  {
    "level": 22,
    "resolution": 16782593914394684e-23,
    "scale": 70.53107352157943
  },
  {
    "level": 23,
    "resolution": 8391296957197342e-23,
    "scale": 35.265536760789715
  },
  {
    "level": 24,
    "resolution": 4195648478598671e-23,
    "scale": 17.632768380394857
  },
  {
    "level": 25,
    "resolution": 20978242392993356e-24,
    "scale": 8.816384190197429
  }
].map((item) => {
  const newItem = {
    ...item,
    levelValue: (item.level + 1).toString()
  };
  return newItem;
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const tileInfo = shallowRef({
      lods,
      origin: {
        x: -180,
        y: 90
      },
      spatialReference: {
        wkid: 4326
      },
      size: [256, 256],
      dpi: 96
    });
    const layerLoad = async (e) => {
      const view = e.view;
      const layer = e.layer;
      await layer.when();
      view.goTo(layer.fullExtent);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VaSceneView), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VaTdtBasemap), {
              type: "vec_c",
              "spatial-reference": tileInfo.value.spatialReference,
              "web-tile-layer-options": {
                tileInfo: tileInfo.value
              }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VaTileLayer), {
              url: "http://t1.zjsophon.com:14000/arcgis/rest/services/ZHNLW/ZHNLWYX_20231020/MapServer",
              onLoad: layerLoad,
              defaultOptions: {
                tileInfo: tileInfo.value
              }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VaTdtBasemap), {
                type: "vec_c",
                "spatial-reference": tileInfo.value.spatialReference,
                "web-tile-layer-options": {
                  tileInfo: tileInfo.value
                }
              }, null, 8, ["spatial-reference", "web-tile-layer-options"]),
              createVNode(unref(VaTileLayer), {
                url: "http://t1.zjsophon.com:14000/arcgis/rest/services/ZHNLW/ZHNLWYX_20231020/MapServer",
                onLoad: layerLoad,
                defaultOptions: {
                  tileInfo: tileInfo.value
                }
              }, null, 8, ["url", "defaultOptions"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/tile-layer/local/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
