function t(t2) {
  let r, e, i = [], u = false;
  function f(...f2) {
    return u && r === this && n(f2, i) || (e = t2.apply(this, f2), r = this, i = f2, u = true), e;
  }
  return f;
}
function n(t2, n2) {
  if (t2.length !== n2.length)
    return false;
  for (let r = 0; r < t2.length; ++r)
    if (t2[r] !== n2[r])
      return false;
  return true;
}
export {
  t
};
