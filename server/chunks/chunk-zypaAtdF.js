function e(e2, a) {
  const c = e2.featureReduction;
  return c && "selection" !== c.type && (!("maxScale" in c) || !c.maxScale || c.maxScale < a.scale) ? c : null;
}
export {
  e
};
