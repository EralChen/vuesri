import { defineComponent, shallowRef, computed, resolveComponent, unref, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VaClientFeatureLayer } from "./chunk-y4k8oYvv.js";
import { V as VaSceneView } from "./chunk-MFY2zKAf.js";
import { V as VaTdtBasemap } from "./chunk-2_8Nl9Hn.js";
import { fY as p, hE as h, bf as c$1, bq as j } from "./chunk-KFNcxJaF.js";
import "./chunk-MaQWsU9J.js";
import "@vunk/core/shared/utils-vue";
import "./chunk-cQlS_KkA.js";
import "./chunk-oD5XiDYU.js";
import "./chunk-B7M5Xqd5.js";
import "./chunk-AN2pNKfL.js";
import "./chunk-qHSzybEP.js";
import "@vunk/core/shared/utils-class";
import "mitt";
import "./chunk-rLRIqhK0.js";
import "vike/server";
import "vike-vue/usePageContext";
import "./chunk-8AIdLOXL.js";
import "path";
import "@vunk/core";
import "element-plus";
import "@vueuse/core";
import "deepdash-es/standalone";
import "gsap";
import "@vunk/core/composables";
import "lodash-es";
import "@vunk/core/shared/utils-promise";
import "@vunk/core/components/client-only";
import "@element-plus/icons-vue";
import "./chunk-chuKOP2I.js";
import "./chunk-BSxDNfxQ.js";
import "./chunk-Y9HZwdAu.js";
import "./chunk-jzCtEhR4.js";
import "./chunk-LGmaep6O.js";
import "./chunk-OjvQdFJg.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const type = "Polygon";
const coordinates = [
  [
    [
      121.219170207,
      30.333623489
    ],
    [
      121.21941973,
      30.33365494
    ],
    [
      121.21942607,
      30.33354732
    ],
    [
      121.219174709,
      30.333526471
    ],
    [
      121.219170207,
      30.333623489
    ]
  ],
  [
    [
      121.219097834,
      30.332261397
    ],
    [
      121.219419151,
      30.332306122
    ],
    [
      121.219443773,
      30.332170194
    ],
    [
      121.219121203,
      30.332136833
    ],
    [
      121.219097834,
      30.332261397
    ]
  ],
  [
    [
      121.218911655,
      30.333211622
    ],
    [
      121.219093036,
      30.33322972
    ],
    [
      121.21907867,
      30.333291006
    ],
    [
      121.219396242,
      30.333313918
    ],
    [
      121.219433672,
      30.333097067
    ],
    [
      121.219305652,
      30.333084617
    ],
    [
      121.219328809,
      30.332980656
    ],
    [
      121.219479456,
      30.332975787
    ],
    [
      121.219526006,
      30.332773386
    ],
    [
      121.218982023,
      30.332722773
    ],
    [
      121.218947334,
      30.332904516
    ],
    [
      121.219210608,
      30.332949457
    ],
    [
      121.219183616,
      30.333112521
    ],
    [
      121.218937711,
      30.333076234
    ],
    [
      121.218911655,
      30.333211622
    ]
  ]
];
const geometrySource = {
  type,
  coordinates
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const geometries = [geometrySource];
    const renderer = new p({
      symbol: new h({
        symbolLayers: [
          {
            type: "extrude",
            material: {
              color: "red"
            },
            size: 100
          }
        ]
      })
    });
    const source = shallowRef([]);
    const setSource = (id = "") => {
      source.value = geometries.map((item, index) => {
        return new c$1({
          geometry: new j({
            rings: item.coordinates,
            spatialReference: {
              wkid: 4326
            }
          }),
          attributes: {
            ObjectID: index
          }
        });
      });
    };
    setSource();
    const sourceCpu = computed(() => {
      return geometries.map((item, index) => {
        return new c$1({
          geometry: new j({
            rings: item.coordinates,
            spatialReference: {
              wkid: 4326
            }
          }),
          attributes: {
            ObjectID: index
          }
        });
      });
    });
    const layerClick = (e) => {
      const { result } = e;
      if (result) {
        console.log(result);
      }
    };
    const layerChange = async (e) => {
      const layer = e.layer;
      const view = e.view;
      await layer.when();
      view.goTo(source.value);
    };
    const changeData = (id = "") => {
      setSource(id);
    };
    const clear = () => {
      source.value = [];
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElButton = resolveComponent("ElButton");
      _push(ssrRenderComponent(unref(VaSceneView), _attrs, {
        before: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ElButton, {
              onClick: ($event) => changeData("2")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`getTestData2`);
                } else {
                  return [
                    createTextVNode("getTestData2")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElButton, {
              onClick: ($event) => changeData("3")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`getTestData3`);
                } else {
                  return [
                    createTextVNode("getTestData3")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElButton, { onClick: clear }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`清空`);
                } else {
                  return [
                    createTextVNode("清空")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</p>`);
          } else {
            return [
              createVNode("p", null, [
                createVNode(_component_ElButton, {
                  onClick: ($event) => changeData("2")
                }, {
                  default: withCtx(() => [
                    createTextVNode("getTestData2")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(_component_ElButton, {
                  onClick: ($event) => changeData("3")
                }, {
                  default: withCtx(() => [
                    createTextVNode("getTestData3")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(_component_ElButton, { onClick: clear }, {
                  default: withCtx(() => [
                    createTextVNode("清空")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VaTdtBasemap), {
              type: "img_w",
              spatialReference: { wkid: 3857 }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VaClientFeatureLayer), {
              renderer: unref(renderer),
              source: sourceCpu.value,
              fields: [
                { name: "ObjectID", type: "oid" }
              ],
              "geometry-type": "polygon",
              "object-id-field": "ObjectID",
              cursor: "pointer",
              onClick: layerClick,
              onChange: layerChange,
              onLoad: layerChange
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VaTdtBasemap), {
                type: "img_w",
                spatialReference: { wkid: 3857 }
              }),
              createVNode(unref(VaClientFeatureLayer), {
                renderer: unref(renderer),
                source: sourceCpu.value,
                fields: [
                  { name: "ObjectID", type: "oid" }
                ],
                "geometry-type": "polygon",
                "object-id-field": "ObjectID",
                cursor: "pointer",
                onClick: layerClick,
                onChange: layerChange,
                onLoad: layerChange
              }, null, 8, ["renderer", "source"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/client-feature-layer/geojson/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
