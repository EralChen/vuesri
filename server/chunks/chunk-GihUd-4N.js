import { hG as n$1 } from "./chunk-ejFG4zJ0.js";
function n() {
  return new Promise((t) => import("./chunk-20YtX8bz.js").then((t2) => t2.l).then(({ default: n2 }) => {
    const e2 = n2({ locateFile: i, onRuntimeInitialized: () => t(e2) });
  })).catch((t) => {
    throw t;
  });
}
function e() {
  return new Promise((t) => import("./chunk-VEiae_xu.js").then((t2) => t2.l).then(({ default: n2 }) => {
    const e2 = n2({ locateFile: i, onRuntimeInitialized: () => t(e2) });
  })).catch((t) => {
    throw t;
  });
}
function i(n2) {
  return n$1(`esri/libs/lyr3d/${n2}`);
}
export {
  e,
  n
};
