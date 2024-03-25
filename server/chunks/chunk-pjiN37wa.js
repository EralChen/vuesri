function o(o2, l, c, r) {
  const e = o2.clone(), n = 1 << e.level, t = e.col + l, w = e.row + c;
  return r && t < 0 ? (e.col = t + n, e.world -= 1) : t >= n ? (e.col = t - n, e.world += 1) : e.col = t, e.row = w, e;
}
export {
  o
};
