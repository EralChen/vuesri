function e(e2, t, l, n) {
  let o = null, p = 1e3;
  "number" == typeof t ? (p = t, n = l) : (o = t ?? null, p = l);
  let r, u = 0;
  const a = () => {
    u = 0, e2.apply(n, r);
  }, c = (...e3) => {
    o && o.apply(n, e3), r = e3, p ? u || (u = setTimeout(a, p)) : a();
  };
  return c.remove = () => {
    u && (clearTimeout(u), u = 0);
  }, c.forceUpdate = () => {
    u && (clearTimeout(u), a());
  }, c.hasPendingUpdates = () => !!u, c;
}
export {
  e
};
