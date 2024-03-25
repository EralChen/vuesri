import { defineComponent, shallowRef, resolveComponent, unref, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { V as VaClientFeatureLayer } from "./chunk-9IwRySYm.js";
import { V as VaSceneView } from "./chunk-8WuUWlIZ.js";
import { V as VaTdtBasemap } from "./chunk-XxvgZNck.js";
import { RestFetch } from "@vunk/core/shared/utils-fetch";
import { V as VaViewWhen } from "./chunk-iZwZ9EU9.js";
import { aO as s, pP as p$1, pQ as F, pR as d, pS as e, pT as $, pU as T, pV as E, pW as se, pX as Q, pY as l, b$ as u$1, pZ as N, p_ as j$1, p$ as S, q0 as h, q1 as re, q2 as s$1, bJ as c$1, cY as x$1 } from "./chunk-ejFG4zJ0.js";
import "./chunk-ZSpamg93.js";
import "@vunk/core/shared/utils-vue";
import "./chunk-3BageVRQ.js";
import "./chunk-RQshD5bR.js";
import "@vunk/core/shared/utils-class";
import "./chunk-wa_PWVge.js";
import "./chunk-oD5XiDYU.js";
import "./chunk-yCPoYwni.js";
import "./chunk-AN2pNKfL.js";
import "mitt";
import "./chunk-x8u7LPTa.js";
import "vike/server";
import "vike-vue/usePageContext";
import "./chunk-vndPU1ZH.js";
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
import "./chunk-4l9VVe6n.js";
import "./chunk-8CFIjXxc.js";
import "./chunk-bIq5xhw6.js";
import "./chunk-VS0cZDQt.js";
import "./chunk-_8aSZzrH.js";
import "./chunk-uYLXIHjo.js";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
const p = se;
async function u(t) {
  if (!t?.layer || !t.view)
    throw new s("heatmap-statistics:missing-parameters", "'layer' and 'view' parameters are required");
  const u2 = [p$1.CSVLayer, p$1.FeatureLayer, p$1.GeoJSONLayer, p$1.OGCFeatureLayer, p$1.OrientedImageryLayer, p$1.WFSLayer], { layer: m2, ...d$1 } = t, f = F(m2, u2);
  if (!f)
    throw new s("heatmap-statistics:invalid-parameters", "'layer' must be one of these types: " + d(u2).join(", "));
  const y2 = { layerAdapter: f, ...d$1 };
  y2.radius = null == y2.radius ? null == y2.blurRadius ? 18 : e(y2.blurRadius) : y2.radius;
  const c = null != y2.signal ? { signal: y2.signal } : null;
  await f.load(c);
  const h2 = y2.field, w2 = h2 ? f.getField(h2) : null, j2 = await $({ field: h2 }), g2 = T(f, j2, "heatmap-statistics:invalid-parameters");
  if (g2)
    throw g2;
  if (w2) {
    const r = E(f, w2, "heatmap-statistics:invalid-parameters", p);
    if (r)
      throw r;
  }
  return y2;
}
async function m(r) {
  const { layerAdapter: t, ...a } = await u(r);
  return t.heatmapStatistics(a);
}
const w = 0.01;
async function y(e$1) {
  if (!e$1?.layer || !e$1.view)
    throw new s("heatmap-renderer:missing-parameters", "'layer' and 'view' parameters are required");
  const r = { ...e$1, layer: e$1.layer, view: e$1.view };
  r.radius ??= null == r.blurRadius ? 18 : e(r.blurRadius), r.minRatio ??= 0.01, r.maxRatio ??= 1, r.fadeRatio ??= 0.2, r.fadeToTransparent ??= true;
  const t = [p$1.CSVLayer, p$1.FeatureLayer, p$1.GeoJSONLayer, p$1.OGCFeatureLayer, p$1.OrientedImageryLayer, p$1.StreamLayer, p$1.WFSLayer], s$12 = F(r.layer, t);
  if (!s$12)
    throw new s("heatmap-renderer:invalid-parameters", "'layer' must be one of these types: " + d(t).join(", "));
  r.layer = s$12;
  const i = null != r.signal ? { signal: r.signal } : null;
  await s$12.load(i);
  const m2 = await $({ field: r.field }), p2 = Q(s$12, m2, "heatmap-renderer:invalid-parameters");
  if (p2)
    throw p2;
  return r;
}
async function b(e2) {
  let r = e2.scheme, a = null, t = null;
  const s2 = await re(e2.basemap, e2.view);
  if (a = null != s2.basemapId ? s2.basemapId : null, t = null != s2.basemapTheme ? s2.basemapTheme : null, r)
    return { scheme: h(r), basemapId: a, basemapTheme: t };
  const o = s$1({ basemapTheme: t });
  return o && (r = o.primaryScheme, a = o.basemapId, t = o.basemapTheme), { scheme: r, basemapId: a, basemapTheme: t };
}
async function j(a, o) {
  const { field: n, basemap: m2, radius: p2, fadeToTransparent: l$1, heatmapScheme: d2, view: u2 } = o, { scheme: c, basemapId: h$1, basemapTheme: y2 } = await b({ basemap: m2, scheme: d2, view: u2 }), j2 = c.colors, R2 = j2.length, I = null == a.min, T2 = I ? [0, 0.04] : [a.min, a.max];
  let v;
  const S$1 = o.fadeRatio ?? 0, L = o.maxRatio ?? 0, x = o.minRatio ?? 0, C = (L - x) / (R2 - 1), D = j2[0], U = l$1 ? x : w, E2 = [new l({ ratio: 0, color: new u$1([D.r, D.g, D.b, 0]) }), new l({ ratio: w, color: new u$1([D.r, D.g, D.b, 0]) }), new l({ ratio: U, color: new u$1([D.r, D.g, D.b, U]) })];
  N(j2, R2).forEach((e2, r) => {
    const a2 = x + C * r;
    E2.push(new l({ ratio: a2, color: e2 }));
  }), l$1 && (g(E2, S$1), v = new j$1({ fadeRatio: S$1 }));
  return { renderer: new S({ authoringInfo: v, radius: p2, colorStops: E2, field: n, minDensity: T2[0], maxDensity: T2[1] }), statistics: a, defaultValuesUsed: I, scheme: h(c), basemapId: h$1, basemapTheme: y2 };
}
function g(e2, r) {
  const a = 10 * (1 - r) + 1, t = e2.length - 3, s2 = e2[2].color.a;
  e2.forEach((e3, o) => {
    if (o <= 2)
      return;
    const { color: n } = e3, i = (o - 3) / t;
    n.a = 0 === r ? 1 : Math.min(Math.max(i * a + i + s2, s2), 1);
  });
}
async function R(e2) {
  const r = await y(e2);
  return j(r.statistics ?? await m({ layer: r.layer, field: r.field, radius: r.radius, view: r.view, signal: r.signal }), r);
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
    const layerClick = (e2) => {
      const { result } = e2;
      if (result) {
        console.log(result);
      }
    };
    const layerChange = async (e2) => {
      const layer = e2.layer;
      const view = e2.view;
      await layer.when();
      view.goTo(source.value);
      const res = await R({
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
