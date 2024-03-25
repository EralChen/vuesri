import { defineComponent, unref, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VaSceneView } from "./chunk-8WuUWlIZ.js";
import { V as VaVectorTileLayer } from "./chunk-vZEzdEr9.js";
import { _ as _sfc_main$1 } from "./chunk-bIq5xhw6.js";
import { _ as _sfc_main$2 } from "./chunk-uYLXIHjo.js";
import { f as fullExtent, l as lods } from "./chunk-8CFIjXxc.js";
import { as as j$1, cY as x$1 } from "./chunk-ejFG4zJ0.js";
import { V as VaGeojsonLayer } from "./chunk-5WfSdRWZ.js";
import "./chunk-3BageVRQ.js";
import "mitt";
import "./chunk-4l9VVe6n.js";
import "./chunk-oD5XiDYU.js";
import "@vunk/core/shared/utils-class";
import "lodash-es";
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
import "./chunk-ZSpamg93.js";
import "./chunk-RQshD5bR.js";
import "./chunk-AN2pNKfL.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-yCPoYwni.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "4326",
  __ssrInlineRender: true,
  setup(__props) {
    const geojson = {
      type: "FeatureCollection",
      features: [
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [125.6, 10.1]
          },
          "properties": {
            "name": "Dinagat Islands"
          }
        }
      ]
    };
    const blob = new Blob([JSON.stringify(geojson)], {
      type: "application/json"
    });
    const url = URL.createObjectURL(blob);
    const defaultOptions = {
      viewingMode: "local",
      spatialReference: {
        wkid: 4326
      }
    };
    const createVectorTileJson = () => {
      return {
        "currentVersion": 10.81,
        "capabilities": "TilesOnly",
        "tiles": [
          "https://api.maptiler.com/tiles/v3-4326/{z}/{x}/{y}.pbf?key=pSHUA9sSkNny3iqoWG4P"
        ],
        fullExtent: {
          ...fullExtent,
          "spatialReference": {
            "wkid": 4326
          }
        },
        "tileInfo": new j$1({
          origin: new x$1({
            x: -180,
            y: 90,
            spatialReference: {
              wkid: 4326
            }
          }),
          lods: lods.map((item) => {
            return {
              ...item,
              resolution: item.resolution / 4
            };
          }),
          "spatialReference": {
            "wkid": 4326
          }
        })
      };
    };
    const blobUrl = URL.createObjectURL(new Blob([JSON.stringify(createVectorTileJson())], { type: "application/json" }));
    const style = {
      layers: [
        {
          "id": "background",
          "type": "background",
          "layout": {
            "visibility": "visible"
          },
          "paint": {
            "background-color": {
              "stops": [
                [
                  6,
                  "hsl(60,20%,85%)"
                ],
                [
                  20,
                  "hsl(60,24%,90%)"
                ]
              ]
            }
          }
        },
        {
          "id": "residential",
          "type": "fill",
          "source": "openmaptiles",
          "source-layer": "landuse",
          "maxzoom": 14,
          "layout": {
            "visibility": "visible"
          },
          "paint": {
            "fill-color": {
              "stops": [
                [
                  2,
                  "hsl(60,23%,81%)"
                ],
                [
                  14,
                  "hsl(60,21%,85%)"
                ]
              ]
            }
          },
          "filter": [
            "all",
            [
              "in",
              "class",
              "residential",
              "suburb",
              "neighbourhood"
            ]
          ]
        },
        {
          "id": "landcover",
          "type": "fill",
          "source": "openmaptiles",
          "source-layer": "landcover",
          "minzoom": 7,
          "paint": {
            "fill-color": [
              "match",
              [
                "get",
                "class"
              ],
              "wood",
              "hsla(91,40%,70%,0.8)",
              "grass",
              "hsla(89,40%,78%,0.8)",
              "sand",
              "hsla(54,81%,53%,0.3)",
              "ice",
              "hsla(60,4%,95%,1)",
              "hsla(60,20%,85%,0)"
            ],
            "fill-opacity": {
              "stops": [
                [
                  7,
                  0.7
                ],
                [
                  12,
                  1
                ]
              ]
            },
            "fill-antialias": false
          },
          "filter": [
            "all"
          ]
        },
        {
          "id": "water",
          "type": "fill",
          "source": "openmaptiles",
          "source-layer": "water",
          "layout": {
            "visibility": "visible"
          },
          "paint": {
            "fill-color": "hsl(205,56%,73%)",
            "fill-opacity": [
              "match",
              [
                "get",
                "intermittent"
              ],
              1,
              0.7,
              1
            ]
          },
          "filter": [
            "all",
            [
              "!=",
              "brunnel",
              "tunnel"
            ]
          ]
        },
        {
          "id": "waterway",
          "type": "line",
          "source": "openmaptiles",
          "source-layer": "waterway",
          "layout": {
            "visibility": "visible"
          },
          "paint": {
            "line-color": "hsl(205,56%,73%)",
            "line-width": {
              "stops": [
                [
                  9,
                  1
                ],
                [
                  18,
                  3
                ]
              ]
            },
            "line-opacity": [
              "match",
              [
                "get",
                "brunnel"
              ],
              "tunnel",
              0.7,
              1
            ]
          },
          "filter": [
            "all",
            [
              "!=",
              "intermittent",
              1
            ]
          ]
        },
        {
          "id": "waterway_intermittent",
          "type": "line",
          "source": "openmaptiles",
          "source-layer": "waterway",
          "layout": {
            "visibility": "visible"
          },
          "paint": {
            "line-color": "hsl(205,56%,73%)",
            "line-width": {
              "stops": [
                [
                  9,
                  1
                ],
                [
                  18,
                  3
                ]
              ]
            },
            "line-opacity": 1,
            "line-dasharray": [
              2,
              1
            ]
          },
          "filter": [
            "all",
            [
              "==",
              "intermittent",
              1
            ]
          ]
        },
        {
          "id": "railway_transit_tunnel",
          "type": "line",
          "source": "openmaptiles",
          "source-layer": "transportation",
          "minzoom": 0,
          "layout": {
            "line-cap": "butt",
            "line-join": "miter",
            "visibility": "visible"
          },
          "paint": {
            "line-color": "hsl(34, 12%, 66%)",
            "line-width": {
              "stops": [
                [
                  14,
                  0.5
                ],
                [
                  16,
                  1.2
                ],
                [
                  18,
                  2
                ]
              ]
            },
            "line-opacity": 0.5,
            "line-dasharray": [
              3,
              3
            ]
          },
          "filter": [
            "all",
            [
              "==",
              "brunnel",
              "tunnel"
            ],
            [
              "==",
              "class",
              "transit"
            ]
          ]
        },
        {
          "id": "road_bridge",
          "type": "fill",
          "source": "openmaptiles",
          "source-layer": "transportation",
          "layout": {
            "visibility": "visible"
          },
          "paint": {
            "fill-color": "hsl(47, 26%, 88%)",
            "fill-opacity": 0.7
          },
          "filter": [
            "all",
            [
              "==",
              "$type",
              "Polygon"
            ],
            [
              "==",
              "brunnel",
              "bridge"
            ]
          ]
        },
        {
          "id": "road_pier",
          "type": "fill",
          "source": "openmaptiles",
          "source-layer": "transportation",
          "layout": {
            "visibility": "visible"
          },
          "paint": {
            "fill-color": "hsl(60,24%,88%)",
            "fill-opacity": 1,
            "fill-antialias": true
          },
          "metadata": {},
          "filter": [
            "all",
            [
              "==",
              "$type",
              "Polygon"
            ],
            [
              "==",
              "class",
              "pier"
            ]
          ]
        },
        {
          "id": "road_network",
          "type": "line",
          "source": "openmaptiles",
          "source-layer": "transportation",
          "minzoom": 3,
          "layout": {
            "line-cap": "round",
            "line-join": "round",
            "visibility": "visible"
          },
          "paint": {
            "line-color": "hsl(0, 0%, 100%)",
            "line-width": [
              "interpolate",
              [
                "linear",
                2
              ],
              [
                "zoom"
              ],
              3,
              0.5,
              5,
              0.75,
              6,
              1,
              10,
              [
                "match",
                [
                  "get",
                  "class"
                ],
                [
                  "motorway"
                ],
                [
                  "match",
                  [
                    "get",
                    "brunnel"
                  ],
                  [
                    "bridge"
                  ],
                  0,
                  2.5
                ],
                [
                  "trunk"
                ],
                1.5,
                1
              ],
              12,
              [
                "match",
                [
                  "get",
                  "class"
                ],
                [
                  "motorway"
                ],
                [
                  "match",
                  [
                    "get",
                    "ramp"
                  ],
                  1,
                  1,
                  4
                ],
                [
                  "trunk"
                ],
                2,
                [
                  "primary"
                ],
                2.5,
                [
                  "secondary",
                  "tertiary"
                ],
                2,
                [
                  "minor"
                ],
                1,
                [
                  "pier",
                  "service",
                  "track"
                ],
                0.5,
                0.5
              ],
              14,
              [
                "match",
                [
                  "get",
                  "class"
                ],
                [
                  "motorway"
                ],
                [
                  "match",
                  [
                    "get",
                    "ramp"
                  ],
                  1,
                  5,
                  6
                ],
                [
                  "trunk"
                ],
                3,
                [
                  "primary"
                ],
                5,
                [
                  "secondary"
                ],
                4,
                [
                  "tertiary"
                ],
                3,
                [
                  "minor"
                ],
                2,
                [
                  "pier",
                  "service",
                  "track"
                ],
                1,
                2
              ],
              16,
              [
                "match",
                [
                  "get",
                  "class"
                ],
                [
                  "motorway",
                  "trunk",
                  "primary"
                ],
                8,
                [
                  "secondary"
                ],
                7,
                [
                  "tertiary"
                ],
                6,
                [
                  "minor"
                ],
                4,
                [
                  "pier",
                  "service",
                  "track"
                ],
                2,
                4
              ],
              20,
              [
                "match",
                [
                  "get",
                  "class"
                ],
                [
                  "motorway",
                  "trunk",
                  "primary"
                ],
                28,
                [
                  "secondary"
                ],
                24,
                [
                  "tertiary"
                ],
                20,
                [
                  "minor",
                  "service",
                  "track",
                  "pier"
                ],
                16,
                16
              ]
            ],
            "line-offset": 0,
            "line-opacity": [
              "match",
              [
                "get",
                "brunnel"
              ],
              "tunnel",
              0.5,
              1
            ]
          },
          "filter": [
            "all",
            [
              "!in",
              "class",
              "bridge",
              "ferry",
              "path",
              "rail",
              "transit"
            ]
          ]
        },
        {
          "id": "road_path",
          "type": "line",
          "source": "openmaptiles",
          "source-layer": "transportation",
          "minzoom": 15,
          "layout": {
            "line-cap": "square",
            "line-join": "bevel",
            "visibility": "visible"
          },
          "paint": {
            "line-color": "hsl(0, 0%, 100%)",
            "line-width": {
              "base": 1.55,
              "stops": [
                [
                  15,
                  0.5
                ],
                [
                  16,
                  1
                ],
                [
                  18,
                  2
                ],
                [
                  20,
                  3
                ],
                [
                  22,
                  4
                ]
              ]
            },
            "line-dasharray": [
              1,
              1
            ]
          },
          "filter": [
            "any",
            [
              "in",
              "class",
              "path"
            ]
          ]
        },
        {
          "id": "building",
          "type": "fill",
          "source": "openmaptiles",
          "source-layer": "building",
          "layout": {
            "visibility": "visible"
          },
          "paint": {
            "fill-color": {
              "stops": [
                [
                  13,
                  "hsl(48,25%,73%)"
                ],
                [
                  16,
                  "hsl(47,32%,77%)"
                ]
              ]
            },
            "fill-opacity": 1,
            "fill-antialias": true
          }
        },
        {
          "id": "railway",
          "type": "line",
          "source": "openmaptiles",
          "source-layer": "transportation",
          "minzoom": 9,
          "layout": {
            "visibility": "visible"
          },
          "paint": {
            "line-color": [
              "match",
              [
                "get",
                "service"
              ],
              [
                "yard",
                "spur"
              ],
              "hsla(33,12%,67%,0.5)",
              "hsla(33,12%,67%,0.8)"
            ],
            "line-width": {
              "stops": [
                [
                  9,
                  0.5
                ],
                [
                  12,
                  0.6
                ],
                [
                  16,
                  2
                ],
                [
                  22,
                  3
                ]
              ]
            },
            "line-opacity": [
              "match",
              [
                "get",
                "brunnel"
              ],
              "tunnel",
              0.25,
              1
            ]
          },
          "filter": [
            "==",
            "class",
            "rail"
          ]
        },
        {
          "id": "railway_transit",
          "type": "line",
          "source": "openmaptiles",
          "source-layer": "transportation",
          "layout": {
            "visibility": "visible"
          },
          "paint": {
            "line-color": "hsl(34, 12%, 66%)",
            "line-width": {
              "stops": [
                [
                  14,
                  0.5
                ],
                [
                  16,
                  1.2
                ],
                [
                  18,
                  2
                ]
              ]
            },
            "line-opacity": 0.5
          },
          "filter": [
            "all",
            [
              "==",
              "class",
              "transit"
            ],
            [
              "!=",
              "brunnel",
              "tunnel"
            ]
          ]
        },
        {
          "id": "aeroway",
          "type": "line",
          "source": "openmaptiles",
          "source-layer": "aeroway",
          "minzoom": 4,
          "layout": {
            "line-cap": "round",
            "line-join": "round",
            "visibility": "visible"
          },
          "paint": {
            "line-color": "hsl(0, 0%, 100%)",
            "line-width": [
              "interpolate",
              [
                "linear",
                2
              ],
              [
                "zoom"
              ],
              10,
              [
                "match",
                [
                  "get",
                  "class"
                ],
                [
                  "runway"
                ],
                1,
                [
                  "taxiway"
                ],
                0.5,
                0
              ],
              14,
              [
                "match",
                [
                  "get",
                  "class"
                ],
                [
                  "runway"
                ],
                3,
                [
                  "taxiway"
                ],
                2,
                0
              ],
              16,
              [
                "match",
                [
                  "get",
                  "class"
                ],
                [
                  "runway"
                ],
                10,
                [
                  "taxiway"
                ],
                6,
                0
              ]
            ],
            "line-opacity": 1
          },
          "metadata": {
            "mapbox:group": "1444849345966.4436"
          },
          "filter": [
            "all"
          ]
        },
        {
          "id": "airport",
          "type": "symbol",
          "source": "openmaptiles",
          "source-layer": "aerodrome_label",
          "minzoom": 10,
          "layout": {
            "icon-size": 1,
            "text-font": [
              "Noto Sans Regular"
            ],
            "text-size": {
              "stops": [
                [
                  10,
                  10
                ],
                [
                  14,
                  12
                ],
                [
                  16,
                  14
                ]
              ]
            },
            "text-field": "{name:latin}",
            "visibility": "visible",
            "text-anchor": "top",
            "text-offset": [
              0,
              0.5
            ],
            "text-max-width": 8
          },
          "paint": {
            "text-color": "hsl(0,0%,12%)",
            "text-halo-blur": 1,
            "text-halo-color": "hsl(0, 0%, 100%)",
            "text-halo-width": 1.4
          },
          "filter": [
            "all",
            [
              "has",
              "iata"
            ]
          ]
        },
        {
          "id": "station",
          "type": "symbol",
          "source": "openmaptiles",
          "source-layer": "poi",
          "minzoom": 12,
          "layout": {
            "icon-size": 1,
            "text-font": [
              "Noto Sans Regular"
            ],
            "text-size": {
              "stops": [
                [
                  10,
                  10
                ],
                [
                  14,
                  12
                ],
                [
                  16,
                  14
                ]
              ]
            },
            "text-field": "{name:latin}",
            "visibility": "visible",
            "text-anchor": "top",
            "text-offset": [
              0,
              0.5
            ],
            "text-max-width": 8
          },
          "paint": {
            "text-color": "hsl(0,0%,12%)",
            "text-halo-blur": 1,
            "text-halo-color": "hsl(0, 0%, 100%)",
            "text-halo-width": 1.4
          },
          "filter": [
            "all",
            [
              "==",
              "class",
              "railway"
            ],
            [
              "==",
              "subclass",
              "station"
            ]
          ]
        },
        {
          "id": "road",
          "type": "symbol",
          "source": "openmaptiles",
          "source-layer": "transportation_name",
          "minzoom": 14,
          "layout": {
            "text-font": [
              "Noto Sans Regular"
            ],
            "text-size": {
              "base": 1.4,
              "stops": [
                [
                  14,
                  8
                ],
                [
                  17,
                  10
                ],
                [
                  20,
                  12
                ]
              ]
            },
            "text-field": "{name:latin}",
            "visibility": "visible",
            "symbol-spacing": {
              "stops": [
                [
                  13,
                  250
                ],
                [
                  20,
                  350
                ]
              ]
            },
            "text-transform": "uppercase",
            "symbol-placement": "line",
            "text-letter-spacing": 0.1,
            "text-rotation-alignment": "map"
          },
          "paint": {
            "text-color": "hsl(0,0%,5%)",
            "text-halo-color": "hsl(0, 0%, 100%)",
            "text-halo-width": 2
          },
          "filter": [
            "all",
            [
              "==",
              "$type",
              "LineString"
            ],
            [
              "!=",
              "subclass",
              "ferry"
            ],
            [
              "!in",
              "class",
              "service",
              "path"
            ]
          ]
        },
        {
          "id": "border_other",
          "type": "line",
          "source": "openmaptiles",
          "source-layer": "boundary",
          "minzoom": 3,
          "maxzoom": 13,
          "layout": {
            "visibility": "visible"
          },
          "paint": {
            "line-color": [
              "match",
              [
                "get",
                "maritime"
              ],
              1,
              "hsla(210,52%,64%,0)",
              "hsla(0,0%,60%,0.65)"
            ],
            "line-width": {
              "stops": [
                [
                  4,
                  1.25
                ],
                [
                  11,
                  1.75
                ],
                [
                  18,
                  3
                ]
              ]
            },
            "line-dasharray": [
              2,
              1
            ]
          },
          "filter": [
            "all",
            [
              ">=",
              "admin_level",
              3
            ],
            [
              "<",
              "admin_level",
              10
            ],
            [
              "==",
              "maritime",
              0
            ]
          ]
        },
        {
          "id": "border_disputed",
          "type": "line",
          "source": "openmaptiles",
          "source-layer": "boundary",
          "minzoom": 0,
          "layout": {
            "line-cap": "round",
            "line-join": "round",
            "visibility": "visible"
          },
          "paint": {
            "line-color": [
              "match",
              [
                "get",
                "maritime"
              ],
              1,
              "hsla(210,52%,64%,0)",
              "hsla(0,0%,64%,1)"
            ],
            "line-width": 1,
            "line-dasharray": [
              2,
              2
            ]
          },
          "filter": [
            "all",
            [
              "<=",
              "admin_level",
              2
            ],
            [
              "==",
              "$type",
              "LineString"
            ],
            [
              "==",
              "disputed",
              1
            ]
          ]
        },
        {
          "id": "border_country",
          "type": "line",
          "source": "openmaptiles",
          "source-layer": "boundary",
          "minzoom": 0,
          "layout": {
            "line-cap": "round",
            "line-join": "round",
            "visibility": "visible"
          },
          "paint": {
            "line-blur": {
              "stops": [
                [
                  4,
                  0.5
                ],
                [
                  10,
                  0
                ]
              ]
            },
            "line-color": [
              "match",
              [
                "get",
                "maritime"
              ],
              1,
              "hsla(210,52%,64%,0)",
              "hsla(0,0%,64%,1)"
            ],
            "line-width": {
              "stops": [
                [
                  0,
                  0.75
                ],
                [
                  5,
                  1.5
                ],
                [
                  10,
                  2
                ]
              ]
            }
          },
          "filter": [
            "all",
            [
              "<=",
              "admin_level",
              2
            ],
            [
              "==",
              "$type",
              "LineString"
            ],
            [
              "!has",
              "claimed_by"
            ],
            [
              "==",
              "disputed",
              0
            ]
          ]
        },
        {
          "id": "place",
          "type": "symbol",
          "source": "openmaptiles",
          "source-layer": "place",
          "minzoom": 3,
          "maxzoom": 16,
          "layout": {
            "text-font": [
              "Noto Sans Regular"
            ],
            "text-size": [
              "interpolate",
              [
                "linear",
                1
              ],
              [
                "zoom"
              ],
              3,
              11,
              7,
              [
                "match",
                [
                  "get",
                  "class"
                ],
                "city",
                15,
                13
              ],
              10,
              [
                "match",
                [
                  "get",
                  "class"
                ],
                "city",
                16,
                [
                  "suburb",
                  "neighbourhood",
                  "quarter",
                  "hamlet",
                  "isolated_dwelling"
                ],
                10,
                13
              ],
              15,
              [
                "match",
                [
                  "get",
                  "class"
                ],
                "city",
                21,
                [
                  "suburb",
                  "neighbourhood",
                  "quarter",
                  "hamlet",
                  "isolated_dwelling"
                ],
                14,
                16
              ]
            ],
            "text-field": "{name:latin}",
            "visibility": "visible",
            "text-max-width": 10
          },
          "paint": {
            "text-color": "hsl(0, 0%, 0%)",
            "text-halo-blur": 0,
            "text-halo-color": "hsla(0, 0%, 100%, 0.75)",
            "text-halo-width": 2
          },
          "filter": [
            "all",
            [
              "!in",
              "class",
              "state",
              "country",
              "continent",
              "island"
            ]
          ]
        },
        {
          "id": "country",
          "type": "symbol",
          "source": "openmaptiles",
          "source-layer": "place",
          "minzoom": 1,
          "maxzoom": 12,
          "layout": {
            "text-font": [
              "Noto Sans Bold"
            ],
            "text-size": [
              "interpolate",
              [
                "linear",
                1
              ],
              [
                "zoom"
              ],
              0,
              8,
              1,
              10,
              4,
              [
                "case",
                [
                  ">",
                  [
                    "get",
                    "rank"
                  ],
                  2
                ],
                13,
                15
              ],
              8,
              [
                "case",
                [
                  ">",
                  [
                    "get",
                    "rank"
                  ],
                  2
                ],
                18,
                22
              ]
            ],
            "text-field": "{name:latin}",
            "visibility": "visible",
            "text-padding": {
              "stops": [
                [
                  1,
                  0
                ],
                [
                  4,
                  2
                ]
              ]
            },
            "text-max-width": 8
          },
          "paint": {
            "text-color": "hsl(0, 0%, 13%)",
            "text-halo-blur": 1,
            "text-halo-color": "hsla(0, 0%, 100%, 0.75)",
            "text-halo-width": 2
          },
          "filter": [
            "all",
            [
              "==",
              "$type",
              "Point"
            ],
            [
              "==",
              "class",
              "country"
            ]
          ]
        },
        {
          "id": "continent",
          "type": "symbol",
          "source": "openmaptiles",
          "source-layer": "place",
          "maxzoom": 1,
          "layout": {
            "text-font": [
              "Noto Sans Bold"
            ],
            "text-size": {
              "stops": [
                [
                  0,
                  12
                ],
                [
                  2,
                  13
                ]
              ]
            },
            "text-field": "{name:latin}",
            "visibility": "visible",
            "text-justify": "center",
            "text-transform": "uppercase"
          },
          "paint": {
            "text-color": "hsl(0, 0%, 13%)",
            "text-halo-blur": 1,
            "text-halo-color": "hsla(0, 0%, 100%, 0.75)",
            "text-halo-width": 2
          },
          "metadata": {},
          "filter": [
            "all",
            [
              "==",
              "class",
              "continent"
            ]
          ]
        }
      ],
      glyphs: "https://api.maptiler.com/fonts/{fontstack}/{range}.pbf?key=pSHUA9sSkNny3iqoWG4P",
      version: 8,
      sprite: "https://www.arcgis.com/sharing/rest/content/items/7675d44bb1e4428aa2c30a9b68f97822/resources/sprites/sprite",
      sources: {
        openmaptiles: {
          url: blobUrl,
          type: "vector"
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VaSceneView), mergeProps({ "default-options": defaultOptions }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$1), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(VaVectorTileLayer), { style }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$2))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(VaVectorTileLayer), { style }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$2))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VaGeojsonLayer), {
              cursor: "pointer",
              "geometry-type": "point",
              url: unref(url)
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$1), null, {
                default: withCtx(() => [
                  createVNode(unref(VaVectorTileLayer), { style }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$2))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(VaGeojsonLayer), {
                cursor: "pointer",
                "geometry-type": "point",
                url: unref(url)
              }, null, 8, ["url"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/vector-tile-layer/4326.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
