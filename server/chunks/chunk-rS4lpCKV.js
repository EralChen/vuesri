import { defineComponent, shallowRef, resolveComponent, unref, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VaClientFeatureLayer } from "./chunk-y4k8oYvv.js";
import { V as VaSceneView } from "./chunk-MFY2zKAf.js";
import { V as VaTdtBasemap } from "./chunk-2_8Nl9Hn.js";
import { RestFetch } from "@vunk/core/shared/utils-fetch";
import { V as VaViewWhen } from "./chunk-FkyJuuRq.js";
import { aM as s$1, oW as p, oX as F, oY as d, oZ as i, o_ as $, o$ as T, p0 as v, p1 as se, p2 as Q, p3 as a, bu as u$1, p4 as N, p5 as j$1, p6 as P, p7 as h, p8 as re, p9 as s, bf as c$1, cy as x$1 } from "./chunk-KFNcxJaF.js";
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
const n = se;
async function u(a2) {
  if (!a2?.layer || !a2.view)
    throw new s$1("heatmap-statistics:missing-parameters", "'layer' and 'view' parameters are required");
  const u2 = [p.CSVLayer, p.FeatureLayer, p.OGCFeatureLayer, p.GeoJSONLayer, p.WFSLayer], { layer: m2, ...d$1 } = a2, f = F(m2, u2);
  if (!f)
    throw new s$1("heatmap-statistics:invalid-parameters", "'layer' must be one of these types: " + d(u2).join(", "));
  const c = { layerAdapter: f, ...d$1 };
  c.radius = null == c.radius ? null == c.blurRadius ? 18 : i(c.blurRadius) : c.radius;
  const y2 = null != c.signal ? { signal: c.signal } : null;
  await f.load(y2);
  const h2 = c.field, w2 = h2 ? f.getField(h2) : null, j2 = await $({ field: h2 }), g2 = T(f, j2, "heatmap-statistics:invalid-parameters");
  if (g2)
    throw g2;
  if (w2) {
    const t = v(f, w2, "heatmap-statistics:invalid-parameters", n);
    if (t)
      throw t;
  }
  return c;
}
async function m(t) {
  const { layerAdapter: a2, ...r } = await u(t);
  return a2.heatmapStatistics(r);
}
const w = 0.01;
async function y(e) {
  if (!e?.layer || !e.view)
    throw new s$1("heatmap-renderer:missing-parameters", "'layer' and 'view' parameters are required");
  const r = { ...e, layer: e.layer, view: e.view };
  r.radius ??= null == r.blurRadius ? 18 : i(r.blurRadius), r.minRatio ??= 0.01, r.maxRatio ??= 1, r.fadeRatio ??= 0.2, r.fadeToTransparent ??= true;
  const t = [p.CSVLayer, p.FeatureLayer, p.OGCFeatureLayer, p.GeoJSONLayer, p.StreamLayer, p.WFSLayer], s2 = F(r.layer, t);
  if (!s2)
    throw new s$1("heatmap-renderer:invalid-parameters", "'layer' must be one of these types: " + d(t).join(", "));
  r.layer = s2;
  const i$1 = null != r.signal ? { signal: r.signal } : null;
  await s2.load(i$1);
  const m2 = await $({ field: r.field }), p$1 = Q(s2, m2, "heatmap-renderer:invalid-parameters");
  if (p$1)
    throw p$1;
  return r;
}
async function b(e) {
  let r = e.scheme, a2 = null, t = null;
  const s$12 = await re(e.basemap, e.view);
  if (a2 = null != s$12.basemapId ? s$12.basemapId : null, t = null != s$12.basemapTheme ? s$12.basemapTheme : null, r)
    return { scheme: h(r), basemapId: a2, basemapTheme: t };
  const o = s({ basemapTheme: t });
  return o && (r = o.primaryScheme, a2 = o.basemapId, t = o.basemapTheme), { scheme: r, basemapId: a2, basemapTheme: t };
}
async function j(a$1, o) {
  const { fieldOffset: n2 } = a$1, { field: m2, basemap: p2, radius: l, fadeToTransparent: d2, heatmapScheme: f, view: u2 } = o, { scheme: h$1, basemapId: y2, basemapTheme: j2 } = await b({ basemap: p2, scheme: f, view: u2 }), g2 = h$1.colors, I = g2.length, T2 = !a$1.count, v2 = T2 ? [0, 0.04] : [a$1.min, a$1.max];
  let S;
  const L = o.fadeRatio ?? 0, x = o.maxRatio ?? 0, C = o.minRatio ?? 0, O = (x - C) / (I - 1), D = g2[0], U = d2 ? C : w, E = [new a({ ratio: 0, color: new u$1([D.r, D.g, D.b, 0]) }), new a({ ratio: w, color: new u$1([D.r, D.g, D.b, 0]) }), new a({ ratio: U, color: new u$1([D.r, D.g, D.b, U]) })];
  N(g2, I).forEach((e, r) => {
    const a$12 = C + O * r;
    E.push(new a({ ratio: a$12, color: e }));
  }), d2 && (R(E, L), S = new j$1({ fadeRatio: L }));
  const F2 = new P({ authoringInfo: S, radius: l, colorStops: E, field: m2, minDensity: v2[0], maxDensity: v2[1] });
  return null != n2 && (F2.fieldOffset = n2), { renderer: F2, statistics: a$1, defaultValuesUsed: T2, scheme: h(h$1), basemapId: y2, basemapTheme: j2 };
}
function R(e, r) {
  const a2 = 10 * (1 - r) + 1, t = e.length - 3, s2 = e[2].color.a;
  e.forEach((e2, o) => {
    if (o <= 2)
      return;
    const { color: n2 } = e2, i2 = (o - 3) / t;
    n2.a = 0 === r ? 1 : Math.min(Math.max(i2 * a2 + i2 + s2, s2), 1);
  });
}
async function g(e) {
  const r = await y(e);
  return j(r.statistics ?? await m({ layer: r.layer, field: r.field, fieldOffset: r.fieldOffset, radius: r.radius, view: r.view, signal: r.signal }), r);
}
const restFetch = new RestFetch({
  baseURL: "/data"
});
const getTestData = () => {
  return restFetch.request({
    method: "GET",
    url: `/point1.json`
  }).then((res) => {
    return res[0];
  });
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const renderer = shallowRef();
    const source = shallowRef([]);
    const setSource = () => {
      getTestData().then((res) => {
        source.value = res.centerPoints.map((item, index) => {
          return new c$1({
            geometry: new x$1({
              longitude: item.centerPoint[0],
              latitude: item.centerPoint[1]
            }),
            attributes: {
              probabilityDensity: item.probabilityDensity,
              ranking: item.ranking,
              ObjectID: index
            }
          });
        });
      });
    };
    setSource();
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
      const res = await g({
        layer,
        view,
        field: "probabilityDensity"
      });
      console.log(res);
      renderer.value = res.renderer;
    };
    const changeData = () => {
      setSource();
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
              onClick: ($event) => changeData()
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`getTestData`);
                } else {
                  return [
                    createTextVNode("getTestData")
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
                  onClick: ($event) => changeData()
                }, {
                  default: withCtx(() => [
                    createTextVNode("getTestData")
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
            _push2(ssrRenderComponent(unref(VaViewWhen), null, {
              default: withCtx(({ spatialReference }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(VaClientFeatureLayer), {
                    spatialReference,
                    renderer: renderer.value,
                    source: source.value,
                    fields: [
                      { name: "ObjectID", type: "oid" },
                      { name: "probabilityDensity", type: "double" },
                      { name: "ranking", type: "double" }
                    ],
                    "geometry-type": "point",
                    "object-id-field": "ObjectID",
                    cursor: "pointer",
                    onClick: layerClick,
                    onChange: layerChange
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(VaClientFeatureLayer), {
                      spatialReference,
                      renderer: renderer.value,
                      source: source.value,
                      fields: [
                        { name: "ObjectID", type: "oid" },
                        { name: "probabilityDensity", type: "double" },
                        { name: "ranking", type: "double" }
                      ],
                      "geometry-type": "point",
                      "object-id-field": "ObjectID",
                      cursor: "pointer",
                      onClick: layerClick,
                      onChange: layerChange
                    }, null, 8, ["spatialReference", "renderer", "source"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(VaTdtBasemap), {
                type: "img_w",
                spatialReference: { wkid: 3857 }
              }),
              createVNode(unref(VaViewWhen), null, {
                default: withCtx(({ spatialReference }) => [
                  createVNode(unref(VaClientFeatureLayer), {
                    spatialReference,
                    renderer: renderer.value,
                    source: source.value,
                    fields: [
                      { name: "ObjectID", type: "oid" },
                      { name: "probabilityDensity", type: "double" },
                      { name: "ranking", type: "double" }
                    ],
                    "geometry-type": "point",
                    "object-id-field": "ObjectID",
                    cursor: "pointer",
                    onClick: layerClick,
                    onChange: layerChange
                  }, null, 8, ["spatialReference", "renderer", "source"])
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/client-feature-layer/heatmap/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
