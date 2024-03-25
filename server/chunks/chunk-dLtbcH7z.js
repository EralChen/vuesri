import { fp as N } from "./chunk-ejFG4zJ0.js";
const t = "theme-style";
function e(t2, e2) {
  return a$1(r(n$1(o(t2), e2)), e2.size);
}
function n$1(e2, { accentColor: n2, contrastColor: o2 }) {
  const r2 = n2.toHex(), a2 = n2.a, s = o2.toHex(), i = o2.a, c = e2.getElementsByTagNameNS("http://www.w3.org/2000/svg", "style").namedItem(t);
  return c && (c.innerHTML = `
      .contrast-fill { fill: ${s}; fill-opacity: ${i}; }
      .contrast-stroke { stroke: ${s}; stroke-opacity: ${i};  }
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
const I$1 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgZmlsbD0ibm9uZSIgdmVyc2lvbj0iMi4wIj48c3R5bGUgaWQ9InRoZW1lLXN0eWxlIj4uY29udHJhc3QtZmlsbHtmaWxsOiNmZmZ9LmNvbnRyYXN0LXN0cm9rZXtzdHJva2U6I2ZmZn0uYWNjZW50LWZpbGx7ZmlsbDojZmY3ZjAwO2ZpbGwtb3BhY2l0eTouNX08L3N0eWxlPjxwYXRoIGQ9Ik0yOCAwYTI4IDI4IDAgMSAxIDAgNTYgMjggMjggMCAwIDEgMC01NiIgY2xhc3M9ImFjY2VudC1maWxsIi8+PHBhdGggc3Ryb2tlLXdpZHRoPSI0Ljk5IiBkPSJNMjAuMDUgNDAuODZhMTUuMDUgMTUuMDUgMCAwIDAgMTcuMTQtMS41IDE1LjA1IDE1LjA1IDAgMCAwIDQuNDctMTYuNjUgMTUuMDUgMTUuMDUgMCAwIDAtMjIuNzItNy4xNSAxNS4wNSAxNS4wNSAwIDAgMC01LjUgNy4xNSIgY2xhc3M9ImNvbnRyYXN0LXN0cm9rZSIvPjxwYXRoIGQ9Im0xMC45NyAzNS41NyA1LjM4IDEyLjA3IDcuNzktMTMuNDd6IiBjbGFzcz0iY29udHJhc3QtZmlsbCIvPjwvc3ZnPg==";
const I = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgZmlsbD0ibm9uZSIgdmVyc2lvbj0iMi4wIj48c3R5bGUgaWQ9InRoZW1lLXN0eWxlIj4uY29udHJhc3QtZmlsbHtmaWxsOiNmZmZ9LmNvbnRyYXN0LXN0cm9rZXtzdHJva2U6I2ZmZn0uYWNjZW50LWZpbGx7ZmlsbDojZmY3ZjAwO2ZpbGwtb3BhY2l0eTouNX08L3N0eWxlPjxjaXJjbGUgY3g9IjM5LjQ3OCIgY3k9IjMuMDc4IiByPSIyOCIgY2xhc3M9ImFjY2VudC1maWxsIiB0cmFuc2Zvcm09InJvdGF0ZSg0MC41NDIpIi8+PHBhdGggc3Ryb2tlLXdpZHRoPSI1IiBkPSJtNy4wNzQgMzAuMDUzIDI5LjM5NyAxMS45ODUtMy42NzMtMzMuNDkzIiBjbGFzcz0iY29udHJhc3Qtc3Ryb2tlIi8+PHBhdGggc3Ryb2tlLXdpZHRoPSIyLjk5NiIgZD0iTTI0LjUwNCAyMy4yMDdhMTEuOTggMTEuOTggMCAwIDAtOS44IDcuNTA3IiBjbGFzcz0iY29udHJhc3Qtc3Ryb2tlIGNvbnRyYXN0LWZpbGwiLz48cGF0aCBkPSJtMjkuODE4IDIyLjgwOC02LjE4NCA0LjYtLjU0MS04LjM2NHoiIGNsYXNzPSJjb250cmFzdC1maWxsIi8+PC9zdmc+";
const a = 64;
function l(r2, l2) {
  const { accentColor: n2, contrastColor: c, preMultiplyAlpha: i } = l2;
  return r2.fromData(`heading-rotate:[accent:${n2},contrast:${c},size:${a}]`, () => new N(e(I$1, { accentColor: n2, contrastColor: c, size: a }), { mipmap: true, reloadable: true, preMultiplyAlpha: i }));
}
function n(o2, l2) {
  const { accentColor: n2, contrastColor: c, preMultiplyAlpha: i } = l2;
  return o2.fromData(`tilt-rotate:[accent:${n2},contrast:${c},size:${a}]`, () => new N(e(I, { accentColor: n2, contrastColor: c, size: a }), { mipmap: true, reloadable: true, preMultiplyAlpha: i }));
}
export {
  l,
  n
};
