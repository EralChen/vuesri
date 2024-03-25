import { defineComponent, unref, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { gS as m, gf as d } from "./chunk-ejFG4zJ0.js";
import { V as VaMapView } from "./chunk-6fAe7ZtF.js";
import { V as VaTdtBasemap } from "./chunk-XxvgZNck.js";
import { V as VaServerFeatureLayer } from "./chunk-LrwsxPyy.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-4l9VVe6n.js";
import "./chunk-oD5XiDYU.js";
import "@vunk/core/shared/utils-class";
import "./chunk-3BageVRQ.js";
import "lodash-es";
import "mitt";
import "./chunk-x8u7LPTa.js";
import "vike/server";
import "vike-vue/usePageContext";
import "./chunk-vndPU1ZH.js";
import "path";
import "@vunk/core";
import "element-plus";
import "@vueuse/core";
import "@vunk/core/shared/utils-vue";
import "deepdash-es/standalone";
import "gsap";
import "@vunk/core/composables";
import "@vunk/core/shared/utils-promise";
import "@vunk/core/components/client-only";
import "@element-plus/icons-vue";
import "./chunk-8CFIjXxc.js";
import "./chunk-bIq5xhw6.js";
import "./chunk-VS0cZDQt.js";
import "./chunk-_8aSZzrH.js";
import "./chunk-ZSpamg93.js";
import "./chunk-RQshD5bR.js";
import "./chunk-uYLXIHjo.js";
import "./chunk-AN2pNKfL.js";
import "./chunk-wa_PWVge.js";
import "./chunk-yCPoYwni.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "cim-symbol",
  __ssrInlineRender: true,
  setup(__props) {
    const renderer = new m({
      symbol: new d({
        data: {
          type: "CIMSymbolReference",
          symbol: {
            type: "CIMPointSymbol",
            symbolLayers: [
              {
                type: "CIMPictureMarker",
                enable: true,
                anchorPoint: {
                  x: 0,
                  y: 0
                },
                primitiveName: "picture",
                size: 10,
                scaleX: 1,
                tintColor: [255, 255, 255, 255],
                url: "/vuesri/images/demo/fx.png",
                rotation: 50,
                anchorPointUnits: "Relative"
              },
              {
                type: "CIMVectorMarker",
                enable: true,
                size: 7,
                colorLocked: false,
                anchorPointUnits: "Relative",
                frame: {
                  xmin: -5,
                  ymin: -5,
                  xmax: 5,
                  ymax: 5
                },
                markerGraphics: [
                  {
                    type: "CIMMarkerGraphic",
                    geometry: {
                      x: 15,
                      y: 0
                    },
                    symbol: {
                      type: "CIMTextSymbol",
                      fontFamilyName: "Arial",
                      // fontStyleName: 'Regular',
                      height: 15,
                      horizontalAlignment: "Center",
                      offsetX: 0,
                      offsetY: 0,
                      symbol: {
                        type: "CIMPolygonSymbol",
                        symbolLayers: [
                          {
                            type: "CIMSolidFill",
                            enable: true,
                            color: [255, 255, 255, 255]
                          }
                        ]
                      },
                      verticalAlignment: "Center"
                    },
                    primitiveName: "textStringTest",
                    textString: "10"
                  }
                ],
                scaleSymbolsProportionally: true,
                respectFrame: true
              },
              {
                type: "CIMVectorMarker",
                enable: true,
                size: 14,
                frame: {
                  xmin: 0,
                  ymin: 0,
                  xmax: 10,
                  ymax: 10
                },
                anchorPointUnits: "Absolute",
                markerGraphics: [
                  {
                    type: "CIMMarkerGraphic",
                    geometry: {
                      rings: [
                        [
                          [0, 0],
                          [0, 10],
                          [18, 10],
                          [18, 0],
                          [0, 0]
                        ]
                      ]
                    },
                    symbol: {
                      type: "CIMPolygonSymbol",
                      symbolLayers: [
                        {
                          type: "CIMSolidFill",
                          enable: true,
                          color: [70, 126, 151, 200]
                        }
                      ]
                    }
                  }
                ],
                scaleSymbolsProportionally: true,
                respectFrame: true
              }
            ]
          },
          primitiveOverrides: [
            {
              type: "CIMPrimitiveOverride",
              primitiveName: "picture",
              propertyName: "Rotation",
              valueExpressionInfo: {
                type: "CIMExpressionInfo",
                expression: `
                        return $feature.winddir;
                      `,
                returnType: "Default"
              }
            },
            {
              type: "CIMPrimitiveOverride",
              primitiveName: "textStringTest",
              propertyName: "TextString",
              valueExpressionInfo: {
                type: "CIMExpressionInfo",
                expression: `
                        return $feature.windsp;
                      `,
                returnType: "Default"
              }
            }
          ]
        }
      })
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VaMapView), mergeProps({ "default-options": {
        zoom: 8,
        center: [120.00260299096858, 29.27230368675745]
      } }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(VaTdtBasemap), {
              type: "vec_w",
              anno: false,
              "spatial-reference": {
                wkid: 3857
              }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VaServerFeatureLayer), {
              url: "https://jiegan.zjsophon.com/arcgis/rest/services/fcsj/MapServer/0",
              renderer: unref(renderer)
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VaTdtBasemap), {
                type: "vec_w",
                anno: false,
                "spatial-reference": {
                  wkid: 3857
                }
              }),
              createVNode(unref(VaServerFeatureLayer), {
                url: "https://jiegan.zjsophon.com/arcgis/rest/services/fcsj/MapServer/0",
                renderer: unref(renderer)
              }, null, 8, ["renderer"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/server-feature-layer/cim-symbol.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
