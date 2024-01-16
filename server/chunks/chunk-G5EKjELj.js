import { pl as d, kC as d$1, pm as l$1, pn as t$1, po as g, pp as B$1, eQ as n$2, mO as f, fo as s, pq as s$1, hw as r$1, kG as i$1, pr as I$2, ps as b, eN as _, mJ as e$1, pt as k$1, pu as i, pv as P$1, mL as g$1, l6 as u$1, pw as b$1, ng as t$2, px as A$1, n7 as i$2, ez as N$1 } from "./chunk-KFNcxJaF.js";
import { U as U$1 } from "./chunk-FKMfLf6u.js";
function H(e2, n2) {
  return O(e2, () => n2);
}
function U(e2) {
  return O(e2, (e3) => e3.plane);
}
function O(r2, t2) {
  const o2 = n$2(), l2 = n$2();
  let s2 = false;
  return (c) => {
    const u = t2(c);
    if ("start" === c.action) {
      const t3 = d$1(c.screenStart, l$1(t$1.get())), l3 = g(r2.state.camera, t3, B);
      null != l3 && (s2 = B$1(u, l3, o2));
    }
    if (!s2)
      return null;
    const i2 = d$1(c.screenEnd, l$1(t$1.get())), a2 = g(r2.state.camera, i2, B);
    return null == a2 ? null : B$1(u, a2, l2) ? { ...c, renderStart: o2, renderEnd: l2, plane: u, ray: a2 } : null;
  };
}
function C(e2, n2, t2 = 0, o2 = null, l2 = null) {
  let s2 = null;
  return (c) => {
    if ("start" === c.action && (s2 = e2.sceneIntersectionHelper.intersectElevationFromScreen(i$1(c.screenStart.x, c.screenStart.y), n2, t2, l2), null != s2 && null != o2 && !I$2(s2, s2, o2)))
      return null;
    if (null == s2)
      return null;
    const u = e2.sceneIntersectionHelper.intersectElevationFromScreen(i$1(c.screenEnd.x, c.screenEnd.y), n2, t2, l2);
    return null != u && (null == o2 || I$2(u, u, o2)) ? { ...c, mapStart: s2, mapEnd: u } : null;
  };
}
function T(e2, n2, r2, t2 = null, o2 = null) {
  return C(e2, r2, f(n2, e2, r2), t2, o2);
}
function D(e2, n2, r2, t2 = null, o2 = null) {
  return T(e2, r2, s(n2), t2, o2);
}
function M(e2, n2, r2, t2) {
  const o2 = n2.toMap(e2.screenStart, { include: [r2] });
  return null != o2 ? D(n2, r2, o2, t2) : null;
}
function N(e2, n2) {
  const r2 = q, t2 = z, o2 = b();
  e2.renderCoordsHelper.worldUpAtPosition(n2, r2);
  const c = _(o2, r2, e$1(t2, n2, e2.state.camera.eye));
  return _(c, c, r2), k$1(n2, c, o2);
}
function P(e2, n2, r2) {
  let t2 = null;
  const o2 = new U$1();
  return o2.next(H(e2, N(e2, n2))).next(h(e2, n2)).next(k(e2, r2)).next((e3) => {
    e3.mapEnd.x = e3.mapStart.x, e3.mapEnd.y = e3.mapStart.y, t2 = e3;
  }), (e3) => (t2 = null, o2.execute(e3), t2);
}
function h(e2, n2) {
  const r2 = n$2(), l2 = s$1(n2);
  e2.renderCoordsHelper.worldUpAtPosition(n2, r2);
  const p = n$2(), d2 = n$2(), m = (o2) => {
    if (e$1(o2, o2, n2), i(r2, o2, o2), "global" === e2.viewingMode) {
      s$1(o2) * Math.sign(P$1(r2, o2)) < 1e-3 - l2 && e$1(o2, g$1(o2, r2, 1e-3), n2);
    }
    return u$1(o2, o2, n2), o2;
  };
  return (e3) => (e3.renderStart = m(r$1(p, e3.renderStart)), e3.renderEnd = m(r$1(d2, e3.renderEnd)), e3);
}
function k(e2, n2) {
  const r2 = e2.renderCoordsHelper;
  return (e3) => {
    const t2 = r2.fromRenderCoords(e3.renderStart, n2), o2 = r2.fromRenderCoords(e3.renderEnd, n2);
    return null != t2 && null != o2 ? { ...e3, mapStart: t2, mapEnd: o2 } : null;
  };
}
var G;
function A(e2) {
  let n2 = null;
  return (r2) => {
    switch (r2.action) {
      case "start":
        n2 = e2.disableDisplay();
        break;
      case "end":
      case "cancel":
        null != n2 && (n2.remove(), n2 = null);
    }
    return r2;
  };
}
function F(n2, t2 = null) {
  const o2 = b$1(n2.state.viewingMode);
  o2.options.selectionMode = true, o2.options.store = t$2.MIN, o2.options.hud = false;
  const l2 = i$1(), s2 = { requiresGroundFeedback: true, enableDraped: true, exclude: /* @__PURE__ */ new Set() }, c = n$2(), u = t2 ?? n2.spatialReference, i2 = (r2) => {
    n2.map.ground && n2.map.ground.opacity < 1 ? s2.exclude.add(A$1) : s2.exclude.delete(A$1), n2.sceneIntersectionHelper.intersectIntersectorScreen(d$1(r2, l2), o2, s2);
    const t3 = o2.results.min;
    let i3;
    if (t3.getIntersectionPoint(c))
      i3 = t3.intersector === i$2.TERRAIN ? G.GROUND : G.OTHER;
    else {
      if (!o2.results.ground.getIntersectionPoint(c))
        return null;
      i3 = G.GROUND;
    }
    return { location: n2.renderCoordsHelper.fromRenderCoords(c, u), surfaceType: i3 };
  };
  let p;
  return (e2) => {
    if ("start" === e2.action) {
      const n4 = i2(e2.screenStart);
      p = null != n4 ? n4.location : null;
    }
    if (null == p)
      return null;
    const n3 = i2(e2.screenEnd);
    return null != n3?.location ? { ...e2, mapStart: p, mapEnd: n3.location, surfaceType: n3.surfaceType } : null;
  };
}
!function(e2) {
  e2[e2.GROUND = 0] = "GROUND", e2[e2.OTHER = 1] = "OTHER";
}(G || (G = {}));
const q = n$2(), z = n$2(), B = d();
const t = "theme-style";
function e(t2, e2) {
  return a$1(r(n$1(o(t2), e2)), e2.size);
}
function n$1(e2, { accentColor: n2, contrastColor: o2 }) {
  const r2 = n2.toHex(), a2 = n2.a, s2 = o2.toHex(), i2 = o2.a, c = e2.getElementsByTagNameNS("http://www.w3.org/2000/svg", "style").namedItem(t);
  return c && (c.innerHTML = `
      .contrast-fill { fill: ${s2}; fill-opacity: ${i2}; }
      .contrast-stroke { stroke: ${s2}; stroke-opacity: ${i2};  }
      .accent-fill { fill: ${r2}; fill-opacity: ${a2}; }
      .accent-stroke { stroke: ${r2}; stroke-opacity:  ${a2}; }`), e2;
}
function o(t2) {
  const e2 = t2.split(",")[1], n2 = atob(e2);
  return new DOMParser().parseFromString(n2, "image/svg+xml");
}
function r(t2) {
  const e2 = new XMLSerializer().serializeToString(t2);
  return `data:image/svg+xml;base64,${btoa(e2)}`;
}
function a$1(t2, e2) {
  const n2 = new Image(e2, e2);
  return n2.src = t2, n2;
}
const I$1 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgZmlsbD0ibm9uZSIgdmVyc2lvbj0iMi4wIj48c3R5bGUgaWQ9InRoZW1lLXN0eWxlIj4uY29udHJhc3QtZmlsbHtmaWxsOiNmZmZ9LmNvbnRyYXN0LXN0cm9rZXtzdHJva2U6I2ZmZn0uYWNjZW50LWZpbGx7ZmlsbDojZmY3ZjAwO2ZpbGwtb3BhY2l0eTouNX08L3N0eWxlPjxwYXRoIGQ9Ik0yOCAwYTI4IDI4IDAgMSAxIDAgNTYgMjggMjggMCAwIDEgMC01NnoiIGNsYXNzPSJhY2NlbnQtZmlsbCIvPjxwYXRoIHN0cm9rZS13aWR0aD0iNC45OSIgZD0iTTIwLjA1IDQwLjg2YTE1LjA1IDE1LjA1IDAgMCAwIDE3LjE0LTEuNSAxNS4wNSAxNS4wNSAwIDAgMCA0LjQ3LTE2LjY1IDE1LjA1IDE1LjA1IDAgMCAwLTIyLjcyLTcuMTUgMTUuMDUgMTUuMDUgMCAwIDAtNS41IDcuMTUiIGNsYXNzPSJjb250cmFzdC1zdHJva2UiLz48cGF0aCBkPSJtMTAuOTcgMzUuNTcgNS4zOCAxMi4wNyA3Ljc5LTEzLjQ3LTEzLjE3IDEuNHoiIGNsYXNzPSJjb250cmFzdC1maWxsIi8+PC9zdmc+";
const I = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgZmlsbD0ibm9uZSIgdmVyc2lvbj0iMi4wIj48c3R5bGUgaWQ9InRoZW1lLXN0eWxlIj4uY29udHJhc3QtZmlsbHtmaWxsOiNmZmZ9LmNvbnRyYXN0LXN0cm9rZXtzdHJva2U6I2ZmZn0uYWNjZW50LWZpbGx7ZmlsbDojZmY3ZjAwO2ZpbGwtb3BhY2l0eTouNX08L3N0eWxlPjxjaXJjbGUgY3g9IjM5LjQ3OCIgY3k9IjMuMDc4IiByPSIyOCIgY2xhc3M9ImFjY2VudC1maWxsIiB0cmFuc2Zvcm09InJvdGF0ZSg0MC41NDIpIi8+PHBhdGggc3Ryb2tlLXdpZHRoPSI1IiBkPSJtNy4wNzQgMzAuMDUzIDI5LjM5NyAxMS45ODUtMy42NzMtMzMuNDkzIiBjbGFzcz0iY29udHJhc3Qtc3Ryb2tlIi8+PHBhdGggc3Ryb2tlLXdpZHRoPSIyLjk5NiIgZD0iTTI0LjUwNCAyMy4yMDdhMTEuOTgyIDExLjk4MiAwIDAgMC05LjggNy41MDciIGNsYXNzPSJjb250cmFzdC1zdHJva2UgY29udHJhc3QtZmlsbCIvPjxwYXRoIGQ9Im0yOS44MTggMjIuODA4LTYuMTg0IDQuNi0uNTQxLTguMzY0eiIgY2xhc3M9ImNvbnRyYXN0LWZpbGwiLz48L3N2Zz4=";
const a = 64;
function l(r2, l2) {
  const { accentColor: n2, contrastColor: c, preMultiplyAlpha: i2 } = l2;
  return r2.fromData(`heading-rotate:[accent:${n2},contrast:${c},size:${a}]`, () => new N$1(e(I$1, { accentColor: n2, contrastColor: c, size: a }), { mipmap: true, reloadable: true, preMultiplyAlpha: i2 }));
}
function n(o2, l2) {
  const { accentColor: n2, contrastColor: c, preMultiplyAlpha: i2 } = l2;
  return o2.fromData(`tilt-rotate:[accent:${n2},contrast:${c},size:${a}]`, () => new N$1(e(I, { accentColor: n2, contrastColor: c, size: a }), { mipmap: true, reloadable: true, preMultiplyAlpha: i2 }));
}
export {
  A,
  D,
  F,
  H,
  M,
  P,
  T,
  U,
  k,
  l,
  n
};
