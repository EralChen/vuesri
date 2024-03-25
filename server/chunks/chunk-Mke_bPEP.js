import { sd as a$a, ye as e$8, ya as i$b, ct as e$9, Dv as $, Dw as A$5, Dx as s$d, Ab as a$c, Dy as t$8, BM as t$9, md as C$4, Dz as e$a, DA as w$7, b0 as has, b$ as u$9, aO as s$e, aT as s$f, gi as U$1, i_ as e$b, gj as w$8, i$ as n$f, BY as at$1, cx as $$1, id as u$a, DB as l$b, DC as r$8, DD as l$c, DE as r$9, iZ as S$8, DF as a$d, nd as s$g, aV as e$c, r as r$a, ri as t$a, DG as T$4, DH as f$d, o4 as c$9, gP as l$d, BL as t$b, DI as g$a, DJ as O$2, DK as s$h, DL as i$d, es as e$d, DM as g$b, DN as O$3, DO as U$2, DP as a$e, DQ as c$a, DR as r$b, DS as M$5, tM as n$g, DT as i$e, DU as o$c, Aq as i$f, Bg as _$9, DV as S$9, tP as a$f, tO as i$g, tR as s$i, aX as y$5, a_ as c$b, bZ as S$a, bW as h$f, z3 as s$j, ce as d$a } from "./chunk-ejFG4zJ0.js";
import { a as a$b, i as i$c, c as c$8 } from "./chunk-iXn63MLq.js";
import { t as t$c } from "./chunk-9fkEo-9z.js";
function n$e(n6) {
  return n6;
}
function r$7(n6) {
  return n6;
}
function e$7(e4, t3, r4, i6, u4, o8, l5) {
  D$4 = 0;
  const y4 = (i6 - r4) * o8, p7 = u4 && u4.length, c5 = p7 ? (u4[0] - r4) * o8 : y4;
  let v3, s4, h6, d4, Z3, a6 = n$d(t3, r4, i6, 0, c5, o8, true);
  if (a6 && a6.next !== a6.prev) {
    if (p7 && (a6 = f$c(t3, r4, i6, u4, a6, o8)), y4 > 80 * o8) {
      v3 = h6 = t3[0 + r4 * o8], s4 = d4 = t3[1 + r4 * o8];
      for (let e5 = o8; e5 < c5; e5 += o8) {
        const n6 = t3[e5 + r4 * o8], x5 = t3[e5 + 1 + r4 * o8];
        v3 = Math.min(v3, n6), s4 = Math.min(s4, x5), h6 = Math.max(h6, n6), d4 = Math.max(d4, x5);
      }
      Z3 = Math.max(h6 - v3, d4 - s4), Z3 = 0 !== Z3 ? 1 / Z3 : 0;
    }
    x$8(a6, e4, o8, v3, s4, Z3, l5, 0);
  }
}
function n$d(e4, n6, t3, x5, r4, i6, l5) {
  let f5;
  if (l5 === Z$2(e4, n6, t3, x5, r4, i6) > 0)
    for (let o8 = x5; o8 < r4; o8 += i6)
      f5 = u$8(o8 + n6 * i6, e4[o8 + n6 * i6], e4[o8 + 1 + n6 * i6], f5);
  else
    for (let o8 = r4 - i6; o8 >= x5; o8 -= i6)
      f5 = u$8(o8 + n6 * i6, e4[o8 + n6 * i6], e4[o8 + 1 + n6 * i6], f5);
  return f5 && M$4(f5, f5.next) && (o$b(f5), f5 = f5.next), f5;
}
function t$7(e4, n6 = e4) {
  if (!e4)
    return e4;
  let t3, x5 = e4;
  do {
    if (t3 = false, x5.steiner || !M$4(x5, x5.next) && 0 !== s$c(x5.prev, x5, x5.next))
      x5 = x5.next;
    else {
      if (o$b(x5), x5 = n6 = x5.prev, x5 === x5.next)
        break;
      t3 = true;
    }
  } while (t3 || x5 !== n6);
  return n6;
}
function x$8(e4, n6, u4, l5, f5, y4, p7, v3) {
  if (!e4)
    return;
  !v3 && y4 && (e4 = c$7(e4, l5, f5, y4));
  let s4 = e4;
  for (; e4.prev !== e4.next; ) {
    const c5 = e4.prev, h6 = e4.next;
    if (y4 ? i$a(e4, l5, f5, y4) : r$6(e4))
      n6.push(c5.index / u4 + p7), n6.push(e4.index / u4 + p7), n6.push(h6.index / u4 + p7), o$b(e4), e4 = h6.next, s4 = h6.next;
    else if ((e4 = h6) === s4) {
      v3 ? 1 === v3 ? x$8(e4 = b$6(e4, n6, u4, p7), n6, u4, l5, f5, y4, p7, 2) : 2 === v3 && g$9(e4, n6, u4, l5, f5, y4, p7) : x$8(t$7(e4), n6, u4, l5, f5, y4, p7, 1);
      break;
    }
  }
}
function r$6(e4) {
  const n6 = e4.prev, t3 = e4, x5 = e4.next;
  if (s$c(n6, t3, x5) >= 0)
    return false;
  let r4 = e4.next.next;
  const i6 = r4;
  let u4 = 0;
  for (; r4 !== e4.prev && (0 === u4 || r4 !== i6); ) {
    if (u4++, a$9(n6.x, n6.y, t3.x, t3.y, x5.x, x5.y, r4.x, r4.y) && s$c(r4.prev, r4, r4.next) >= 0)
      return false;
    r4 = r4.next;
  }
  return true;
}
function i$a(e4, n6, t3, x5) {
  const r4 = e4.prev, i6 = e4, u4 = e4.next;
  if (s$c(r4, i6, u4) >= 0)
    return false;
  const o8 = r4.x < i6.x ? r4.x < u4.x ? r4.x : u4.x : i6.x < u4.x ? i6.x : u4.x, l5 = r4.y < i6.y ? r4.y < u4.y ? r4.y : u4.y : i6.y < u4.y ? i6.y : u4.y, f5 = r4.x > i6.x ? r4.x > u4.x ? r4.x : u4.x : i6.x > u4.x ? i6.x : u4.x, y4 = r4.y > i6.y ? r4.y > u4.y ? r4.y : u4.y : i6.y > u4.y ? i6.y : u4.y, p7 = z$5(o8, l5, n6, t3, x5), c5 = z$5(f5, y4, n6, t3, x5);
  let v3 = e4.prevZ, h6 = e4.nextZ;
  for (; v3 && v3.z >= p7 && h6 && h6.z <= c5; ) {
    if (v3 !== e4.prev && v3 !== e4.next && a$9(r4.x, r4.y, i6.x, i6.y, u4.x, u4.y, v3.x, v3.y) && s$c(v3.prev, v3, v3.next) >= 0)
      return false;
    if (v3 = v3.prevZ, h6 !== e4.prev && h6 !== e4.next && a$9(r4.x, r4.y, i6.x, i6.y, u4.x, u4.y, h6.x, h6.y) && s$c(h6.prev, h6, h6.next) >= 0)
      return false;
    h6 = h6.nextZ;
  }
  for (; v3 && v3.z >= p7; ) {
    if (v3 !== e4.prev && v3 !== e4.next && a$9(r4.x, r4.y, i6.x, i6.y, u4.x, u4.y, v3.x, v3.y) && s$c(v3.prev, v3, v3.next) >= 0)
      return false;
    v3 = v3.prevZ;
  }
  for (; h6 && h6.z <= c5; ) {
    if (h6 !== e4.prev && h6 !== e4.next && a$9(r4.x, r4.y, i6.x, i6.y, u4.x, u4.y, h6.x, h6.y) && s$c(h6.prev, h6, h6.next) >= 0)
      return false;
    h6 = h6.nextZ;
  }
  return true;
}
function u$8(e4, n6, t3, x5) {
  const r4 = q$6.create(e4, n6, t3);
  return x5 ? (r4.next = x5.next, r4.prev = x5, x5.next.prev = r4, x5.next = r4) : (r4.prev = r4, r4.next = r4), r4;
}
function o$b(e4) {
  e4.next.prev = e4.prev, e4.prev.next = e4.next, e4.prevZ && (e4.prevZ.nextZ = e4.nextZ), e4.nextZ && (e4.nextZ.prevZ = e4.prevZ);
}
function l$a(e4) {
  let n6 = e4, t3 = e4;
  do {
    (n6.x < t3.x || n6.x === t3.x && n6.y < t3.y) && (t3 = n6), n6 = n6.next;
  } while (n6 !== e4);
  return t3;
}
function f$c(e4, t3, x5, r4, i6, u4) {
  const o8 = new Array();
  for (let f5 = 0, y4 = r4.length; f5 < y4; f5++) {
    const i7 = n$d(e4, t3, x5, r4[f5] * u4, f5 < y4 - 1 ? r4[f5 + 1] * u4 : x5 * u4, u4, false);
    i7 === i7.next && (i7.steiner = true), o8.push(l$a(i7));
  }
  o8.sort(m$9);
  for (const n6 of o8)
    i6 = y$4(n6, i6);
  return i6;
}
function y$4(e4, n6) {
  const x5 = p$a(e4, n6);
  if (!x5)
    return n6;
  const r4 = j$6(x5, e4);
  return t$7(r4, r4.next), t$7(x5, x5.next);
}
function p$a(e4, n6) {
  let t3 = n6;
  const x5 = e4.x, r4 = e4.y;
  let i6, u4 = -1 / 0;
  do {
    if (r4 <= t3.y && r4 >= t3.next.y && t3.next.y !== t3.y) {
      const e5 = t3.x + (r4 - t3.y) * (t3.next.x - t3.x) / (t3.next.y - t3.y);
      if (e5 <= x5 && e5 > u4) {
        if (u4 = e5, e5 === x5) {
          if (r4 === t3.y)
            return t3;
          if (r4 === t3.next.y)
            return t3.next;
        }
        i6 = t3.x < t3.next.x ? t3 : t3.next;
      }
    }
    t3 = t3.next;
  } while (t3 !== n6);
  if (!i6)
    return null;
  if (x5 === u4)
    return i6.prev;
  const o8 = i6, l5 = i6.x, f5 = i6.y;
  let y4, p7 = 1 / 0;
  for (t3 = i6.next; t3 !== o8; )
    x5 >= t3.x && t3.x >= l5 && x5 !== t3.x && a$9(r4 < f5 ? x5 : u4, r4, l5, f5, r4 < f5 ? u4 : x5, r4, t3.x, t3.y) && (y4 = Math.abs(r4 - t3.y) / (x5 - t3.x), (y4 < p7 || y4 === p7 && t3.x > i6.x) && w$6(t3, e4) && (i6 = t3, p7 = y4)), t3 = t3.next;
  return i6;
}
function c$7(e4, n6, t3, x5) {
  let r4;
  for (; r4 !== e4; r4 = r4.next) {
    if (r4 = r4 || e4, null === r4.z && (r4.z = z$5(r4.x, r4.y, n6, t3, x5)), r4.prev.next !== r4 || r4.next.prev !== r4)
      return r4.prev.next = r4, r4.next.prev = r4, c$7(e4, n6, t3, x5);
    r4.prevZ = r4.prev, r4.nextZ = r4.next;
  }
  return e4.prevZ.nextZ = null, e4.prevZ = null, v$5(e4);
}
function v$5(e4) {
  let n6, t3 = 1;
  for (; ; ) {
    let x5, r4 = e4;
    e4 = null, n6 = null;
    let i6 = 0;
    for (; r4; ) {
      i6++, x5 = r4;
      let u4 = 0;
      for (; u4 < t3 && x5; u4++)
        x5 = x5.nextZ;
      let o8 = t3;
      for (; u4 > 0 || o8 > 0 && x5; ) {
        let t4;
        0 === u4 ? (t4 = x5, x5 = x5.nextZ, o8--) : 0 !== o8 && x5 ? r4.z <= x5.z ? (t4 = r4, r4 = r4.nextZ, u4--) : (t4 = x5, x5 = x5.nextZ, o8--) : (t4 = r4, r4 = r4.nextZ, u4--), n6 ? n6.nextZ = t4 : e4 = t4, t4.prevZ = n6, n6 = t4;
      }
      r4 = x5;
    }
    if (n6.nextZ = null, t3 *= 2, i6 < 2)
      return e4;
  }
}
function s$c(e4, n6, t3) {
  return (n6.y - e4.y) * (t3.x - n6.x) - (n6.x - e4.x) * (t3.y - n6.y);
}
function h$e(e4, n6, t3, x5) {
  return !!(M$4(e4, n6) && M$4(t3, x5) || M$4(e4, x5) && M$4(t3, n6)) || s$c(e4, n6, t3) > 0 != s$c(e4, n6, x5) > 0 && s$c(t3, x5, e4) > 0 != s$c(t3, x5, n6) > 0;
}
function d$9(e4, n6) {
  let t3 = e4;
  do {
    if (t3.index !== e4.index && t3.next.index !== e4.index && t3.index !== n6.index && t3.next.index !== n6.index && h$e(t3, t3.next, e4, n6))
      return true;
    t3 = t3.next;
  } while (t3 !== e4);
  return false;
}
function Z$2(e4, n6, t3, x5, r4, i6) {
  let u4 = 0;
  for (let o8 = x5, l5 = r4 - i6; o8 < r4; o8 += i6)
    u4 += (e4[l5 + n6 * i6] - e4[o8 + n6 * i6]) * (e4[o8 + 1 + n6 * i6] + e4[l5 + 1 + n6 * i6]), l5 = o8;
  return u4;
}
function a$9(e4, n6, t3, x5, r4, i6, u4, o8) {
  return (r4 - u4) * (n6 - o8) - (e4 - u4) * (i6 - o8) >= 0 && (e4 - u4) * (x5 - o8) - (t3 - u4) * (n6 - o8) >= 0 && (t3 - u4) * (i6 - o8) - (r4 - u4) * (x5 - o8) >= 0;
}
function w$6(e4, n6) {
  return s$c(e4.prev, e4, e4.next) < 0 ? s$c(e4, n6, e4.next) >= 0 && s$c(e4, e4.prev, n6) >= 0 : s$c(e4, n6, e4.prev) < 0 || s$c(e4, e4.next, n6) < 0;
}
function z$5(e4, n6, t3, x5, r4) {
  return (e4 = 1431655765 & ((e4 = 858993459 & ((e4 = 252645135 & ((e4 = 16711935 & ((e4 = 32767 * (e4 - t3) * r4) | e4 << 8)) | e4 << 4)) | e4 << 2)) | e4 << 1)) | (n6 = 1431655765 & ((n6 = 858993459 & ((n6 = 252645135 & ((n6 = 16711935 & ((n6 = 32767 * (n6 - x5) * r4) | n6 << 8)) | n6 << 4)) | n6 << 2)) | n6 << 1)) << 1;
}
function M$4(e4, n6) {
  return e4.x === n6.x && e4.y === n6.y;
}
function m$9(e4, n6) {
  return e4.x - n6.x;
}
function b$6(e4, n6, t3, x5) {
  let r4 = e4;
  do {
    const i6 = r4.prev, u4 = r4.next.next;
    !M$4(i6, u4) && h$e(i6, r4, r4.next, u4) && w$6(i6, u4) && w$6(u4, i6) && (n6.push(i6.index / t3 + x5), n6.push(r4.index / t3 + x5), n6.push(u4.index / t3 + x5), o$b(r4), o$b(r4.next), r4 = e4 = u4), r4 = r4.next;
  } while (r4 !== e4);
  return r4;
}
function g$9(e4, n6, r4, i6, u4, o8, l5) {
  let f5 = e4;
  do {
    let e5 = f5.next.next;
    for (; e5 !== f5.prev; ) {
      if (f5.index !== e5.index && k$5(f5, e5)) {
        let y4 = j$6(f5, e5);
        return f5 = t$7(f5, f5.next), y4 = t$7(y4, y4.next), x$8(f5, n6, r4, i6, u4, o8, l5, 0), void x$8(y4, n6, r4, i6, u4, o8, l5, 0);
      }
      e5 = e5.next;
    }
    f5 = f5.next;
  } while (f5 !== e4);
}
function k$5(e4, n6) {
  return e4.next.index !== n6.index && e4.prev.index !== n6.index && !d$9(e4, n6) && w$6(e4, n6) && w$6(n6, e4) && A$4(e4, n6);
}
function A$4(e4, n6) {
  let t3 = e4, x5 = false;
  const r4 = (e4.x + n6.x) / 2, i6 = (e4.y + n6.y) / 2;
  do {
    t3.y > i6 != t3.next.y > i6 && t3.next.y !== t3.y && r4 < (t3.next.x - t3.x) * (i6 - t3.y) / (t3.next.y - t3.y) + t3.x && (x5 = !x5), t3 = t3.next;
  } while (t3 !== e4);
  return x5;
}
function j$6(e4, n6) {
  const t3 = q$6.create(e4.index, e4.x, e4.y), x5 = q$6.create(n6.index, n6.x, n6.y), r4 = e4.next, i6 = n6.prev;
  return e4.next = n6, n6.prev = e4, t3.next = r4, r4.prev = t3, x5.next = t3, t3.prev = x5, i6.next = x5, x5.prev = i6, x5;
}
let q$6 = class q {
  constructor() {
    this.index = 0, this.x = 0, this.y = 0, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = false;
  }
  static create(e4, n6, t3) {
    const x5 = D$4 < B$5.length ? B$5[D$4++] : new q();
    return x5.index = e4, x5.x = n6, x5.y = t3, x5.prev = null, x5.next = null, x5.z = null, x5.prevZ = null, x5.nextZ = null, x5.steiner = false, x5;
  }
};
const B$5 = [], C$3 = 8096;
let D$4 = 0;
for (let E4 = 0; E4 < C$3; E4++)
  B$5.push(new q$6());
const i$9 = 1e-5, f$b = new e$8(0, 0, 0, 1, 0), c$6 = new e$8(0, 0, 0, 1, 0);
function u$7(t3, e4, n6) {
  let o8 = 0;
  for (let r4 = 1; r4 < n6; r4++) {
    const n7 = t3[2 * (e4 + r4 - 1)], s4 = t3[2 * (e4 + r4 - 1) + 1];
    o8 += (t3[2 * (e4 + r4)] - n7) * (t3[2 * (e4 + r4) + 1] + s4);
  }
  return o8;
}
function h$d(t3, e4, n6, o8, r4) {
  let s4 = 0;
  const l5 = 2;
  for (let i6 = n6; i6 < o8; i6 += 3) {
    const n7 = (t3[i6] - r4) * l5, o9 = (t3[i6 + 1] - r4) * l5, f5 = (t3[i6 + 2] - r4) * l5;
    s4 += Math.abs((e4[n7] - e4[f5]) * (e4[o9 + 1] - e4[n7 + 1]) - (e4[n7] - e4[o9]) * (e4[f5 + 1] - e4[n7 + 1]));
  }
  return s4;
}
function a$8(t3, e4) {
  const { coords: n6, lengths: o8, hasIndeterminateRingOrder: r4 } = e4, s4 = 0, f5 = t3;
  if (r4)
    return false;
  let c5 = 0;
  for (let a6 = 0; a6 < o8.length; ) {
    let t4 = a6, e5 = o8[a6], r5 = u$7(n6, c5, e5);
    const g4 = [];
    for (; ++t4 < o8.length; ) {
      const s5 = o8[t4], l5 = u$7(n6, c5 + e5, s5);
      if (!(l5 > 0))
        break;
      r5 += l5, g4.push(c5 + e5), e5 += s5;
    }
    const p7 = f5.length;
    e$7(f5, n6, c5, c5 + e5, g4, 2, s4);
    const m4 = h$d(f5, n6, p7, f5.length, s4), d4 = Math.abs(r5);
    if (Math.abs((m4 - d4) / Math.max(1e-7, d4)) > i$9)
      return f5.length = 0, false;
    a6 = t4, c5 += e5;
  }
  return true;
}
function p$9(t3) {
  const { coords: n6, lengths: o8 } = t3, { buffer: r4 } = a$b(n6, o8);
  return r4;
}
function m$8(t3, e4, n6) {
  let o8 = 0;
  for (let r4 = 0; r4 < t3.lengths.length; r4++) {
    const s4 = t3.lengths[r4];
    for (let r5 = 0; r5 < s4; r5++) {
      const s5 = t3.coords[2 * (r5 + o8)], l5 = t3.coords[2 * (r5 + o8) + 1];
      if (s5 < e4 || s5 > n6 || l5 < e4 || l5 > n6)
        return true;
    }
    o8 += s4;
  }
  return false;
}
function d$8(t3, e4) {
  if (null == t3)
    return null;
  if (!m$8(t3, -128, a$a + 128))
    return t3;
  f$b.setPixelMargin(e4), f$b.reset(i$b.Polygon);
  let n6 = 0;
  for (let o8 = 0; o8 < t3.lengths.length; o8++) {
    const e5 = t3.lengths[o8];
    let r4 = t3.coords[2 * (0 + n6)], s4 = t3.coords[2 * (0 + n6) + 1];
    f$b.moveTo(r4, s4);
    for (let o9 = 1; o9 < e5; o9++)
      r4 = t3.coords[2 * (o9 + n6)], s4 = t3.coords[2 * (o9 + n6) + 1], f$b.lineTo(r4, s4);
    f$b.close(), n6 += e5;
  }
  const l5 = f$b.result(false);
  if (!l5)
    return null;
  const i6 = [], c5 = [];
  for (const o8 of l5) {
    let t4 = 0;
    for (const e5 of o8)
      c5.push(e5.x), c5.push(e5.y), t4++;
    i6.push(t4);
  }
  return new e$9(i6, c5);
}
function x$7(t3, e4) {
  c$6.setPixelMargin(e4);
  const n6 = c$6, r4 = -e4, l5 = a$a + e4;
  let i6 = [], f5 = false;
  if (!t3.nextPath())
    return null;
  let u4 = true;
  for (; u4; ) {
    t3.seekPathStart();
    const e5 = [];
    if (!t3.pathSize)
      return null;
    n6.reset(i$b.LineString), t3.nextPoint();
    let s4 = t3.x, c5 = t3.y;
    if (f5)
      n6.moveTo(s4, c5);
    else {
      if (s4 < r4 || s4 > l5 || c5 < r4 || c5 > l5) {
        f5 = true;
        continue;
      }
      e5.push({ x: s4, y: c5 });
    }
    let h6 = false;
    for (; t3.nextPoint(); )
      if (s4 = t3.x, c5 = t3.y, f5)
        n6.lineTo(s4, c5);
      else {
        if (s4 < r4 || s4 > l5 || c5 < r4 || c5 > l5) {
          h6 = true;
          break;
        }
        e5.push({ x: s4, y: c5 });
      }
    if (h6)
      f5 = true;
    else {
      if (f5) {
        const t4 = n6.resultWithStarts();
        if (t4)
          for (const e6 of t4)
            i6.push(e6);
      } else
        i6.push({ line: e5, start: 0 });
      u4 = t3.nextPath(), f5 = false;
    }
  }
  return i6 = i6.filter((t4) => t4.line.length > 1), 0 === i6.length ? null : i6;
}
f$b.setExtent(a$a), c$6.setExtent(a$a);
const n$c = 96 / 72;
let l$9 = class l {
  static executeEffects(t3, e4, l5, c5) {
    const f5 = n$c, m4 = $(t3);
    let p7 = new s$d(e4);
    for (const o8 of t3) {
      const t4 = A$5(o8);
      t4 && (p7 = t4.execute(p7, o8, f5, l5, c5, m4));
    }
    return p7;
  }
  static applyEffects(n6, l5, c5) {
    if (!n6)
      return l5;
    const f5 = $(n6);
    let m4, p7 = new s$d(a$c.fromJSONCIM(l5));
    for (const t3 of n6) {
      const e4 = A$5(t3);
      e4 && (p7 = e4.execute(p7, t3, 1, null, c5, f5));
    }
    const u4 = [];
    let i6 = null;
    for (; m4 = p7.next(); )
      u4.push(...t$8(m4)), i6 = m4.geometryType;
    return 0 === u4.length || null === i6 ? null : "esriGeometryPolygon" === i6 ? { rings: u4 } : { paths: u4 };
  }
};
let n$b = null;
function t$6() {
  return n$b;
}
async function e$6() {
  n$b = await import("./chunk-7UKjY7OO.js");
}
function s$b(t3) {
  switch (t3) {
    case C$4.BYTE:
    case C$4.UNSIGNED_BYTE:
      return 1;
    case C$4.SHORT:
    case C$4.UNSIGNED_SHORT:
      return 2;
    case C$4.FLOAT:
    case C$4.INT:
    case C$4.UNSIGNED_INT:
      return 4;
  }
}
function o$a(t3) {
  const e4 = [], o8 = [], n6 = [];
  for (const i6 of t3) {
    const t4 = s$b(i6.type) * i6.count;
    switch (t4 % 2 || t4 % 4 || 4) {
      case 4:
        e4.push(i6);
        continue;
      case 2:
        o8.push(i6);
        continue;
      case 1:
        n6.push(i6);
        continue;
      default:
        throw new Error("Found unexpected dataType byte count");
    }
  }
  return e4.push(...o8), e4.push(...n6), e4;
}
let n$a = class n {
  static fromVertexSpec({ attributes: t3 }, e4) {
    let i6, a6, r4;
    const c5 = [];
    for (const s4 in t3) {
      const o8 = t3[s4];
      false !== e4?.[s4] && ("position" === o8.pack ? i6 = { ...o8, name: s4, offset: 0 } : "id" === o8.pack ? a6 = { ...o8, name: s4, offset: 4 } : "bitset" === s4 ? r4 = { ...o8, name: s4, offset: 7 } : c5.push({ ...o8, name: s4 }));
    }
    const u4 = o$a(c5), p7 = [];
    let h6 = 8, f5 = 1;
    for (const o8 of u4)
      p7.push({ ...o8, offset: h6 }), h6 += s$b(o8.type) * o8.count, o8.packAlternating && (f5 = Math.max(o8.packAlternating.count, f5));
    const m4 = Uint32Array.BYTES_PER_ELEMENT, b3 = h6 % m4;
    return new n(i6, a6, r4, p7, h6 + (b3 ? m4 - b3 : 0), f5);
  }
  constructor(t3, e4, s4, o8, n6, i6) {
    this.position = t3, this.id = e4, this.bitset = s4, this.standardAttributes = o8, this.stride = n6, this.packVertexCount = i6, o8.push(s4), this._attributes = [t3, e4, s4, ...o8];
  }
  get attributeLayout() {
    if (!this._attributeLayout) {
      const e4 = t$9(this._attributes), s4 = this._attributes.map((t3) => ({ name: t3.name, count: t3.count, offset: t3.offset, type: t3.type, packPrecisionFactor: t3.packPrecisionFactor, normalized: t3.normalized ?? false }));
      this._attributeLayout = { attributes: s4, hash: e4, stride: this.stride };
    }
    return this._attributeLayout;
  }
};
let i$8 = class i {
  static fromVertexSpec(t3, s4) {
    const c5 = n$a.fromVertexSpec(t3, s4);
    return new i(c5);
  }
  constructor(t3) {
    this._spec = t3, this._packed = new Uint8Array(this._spec.stride * this._spec.packVertexCount), this._packedU32View = new Uint32Array(this._packed.buffer), this._dataView = new DataView(this._packed.buffer);
  }
  get attributeLayout() {
    return this._spec.attributeLayout;
  }
  get stride() {
    return this._spec.stride;
  }
  writeVertex(t3, e4, s4, i6, c5, a6) {
    for (let p7 = 0; p7 < this._spec.packVertexCount; p7++) {
      const t4 = p7 * this._spec.stride;
      this._packPosition(s4, i6, t4), this._packId(e4, t4);
      const r4 = this._spec.bitset;
      if (a6) {
        if (r4.packTessellation) {
          const e5 = r4.packTessellation(a6, c5);
          this._pack(e5, r4, t4);
        }
        for (const e5 of this._spec.standardAttributes)
          if (null != e5.packTessellation) {
            const s5 = e5.packTessellation(a6, c5);
            this._pack(s5, e5, t4);
          } else if (e5.packAlternating?.packTessellation) {
            const t5 = e5.packAlternating.packTessellation(a6, c5);
            for (let s5 = 0; s5 < this._spec.packVertexCount; s5++) {
              const i7 = t5[s5];
              this._pack(i7, e5, s5 * this._spec.stride);
            }
          }
      }
    }
    t3.vertexWriteRegion(this._packedU32View);
  }
  pack(t3, e4) {
    for (const s4 of this._spec.standardAttributes)
      if (s4.pack && "string" != typeof s4.pack) {
        const i6 = s4.pack(t3, e4);
        for (let t4 = 0; t4 < this._spec.packVertexCount; t4++)
          this._pack(i6, s4, t4 * this._spec.stride);
      } else if (s4.packAlternating?.pack) {
        const i6 = s4.packAlternating.pack(t3, e4);
        for (let t4 = 0; t4 < this._spec.packVertexCount; t4++) {
          const e5 = i6[t4];
          this._pack(e5, s4, t4 * this._spec.stride);
        }
      }
  }
  _packPosition(e4, s4, i6) {
    const { offset: c5 } = this._spec.position, a6 = this._spec.position.packPrecisionFactor ?? 1, p7 = w$7(e4 * a6, s4 * a6);
    this._dataView.setUint32(i6 + c5, p7, true);
  }
  _packId(t3, e4) {
    const s4 = t3 * (this._spec.id.packPrecisionFactor ?? 1), i6 = 4278190080 & this._dataView.getUint32(e4 + this._spec.id.offset, true);
    this._dataView.setUint32(e4 + this._spec.id.offset, s4 | i6, true);
  }
  _pack(t3, e4, i6) {
    e$a(this._dataView, t3, e4, i6);
  }
};
function i$7(e4) {
  if (!e4)
    return false;
  for (const t3 of e4)
    switch (t3.effect.type) {
      case "CIMGeometricEffectBuffer":
      case "CIMGeometricEffectOffset":
      case "CIMGeometricEffectDonut":
        return true;
    }
  return false;
}
let o$9 = class o {
  constructor(e4, t3, r4, s4) {
    this._instanceId = e4, this._evaluator = t3, this._viewParams = r4, this._optionalAttributes = s4, this._evaluator.evaluator = (e5) => this.vertexSpec.createComputedParams(e5);
  }
  get _vertexPack() {
    if (!this._cachedVertexPack) {
      const e4 = i$8.fromVertexSpec(this.vertexSpec, this._optionalAttributes);
      this._evaluator.hasDynamicProperties || e4.pack(this._evaluator.evaluatedMeshParams, this._viewParams), this._cachedVertexPack = e4;
    }
    return this._cachedVertexPack;
  }
  get evaluatedMeshParams() {
    return this._evaluator.evaluatedMeshParams;
  }
  get hasEffects() {
    return !!this.evaluatedMeshParams.effects;
  }
  get instanceId() {
    return this._instanceId;
  }
  get attributeLayout() {
    return this._vertexPack.attributeLayout;
  }
  setReferences(e4) {
    this._references = e4;
  }
  getBoundsInfo() {
    return null;
  }
  getTileInfo() {
    return this._viewParams.tileInfo;
  }
  async loadDependencies() {
    i$7(this._evaluator.inputMeshParams.params.effects?.effectInfos) && await e$6();
  }
  enqueueRequest(e4, t3, r4) {
    this._evaluator.hasDynamicProperties && this._evaluator.enqueueRequest(e4, t3, r4);
  }
  write(r4, a6, i6, o8, c5) {
    this.ensurePacked(a6, i6, o8);
    const n6 = this.evaluatedMeshParams.effects;
    if (!n6 || 0 === n6.length)
      return void this._write(r4, i6, void 0, c5);
    const u4 = i6.readGeometryForDisplay()?.clone();
    if (!u4)
      return;
    const h6 = a$c.fromOptimizedCIM(u4, i6.geometryType), f5 = t$6();
    h6.invertY();
    const m4 = r4.id || "", l5 = l$9.executeEffects(n6, h6, m4, f5);
    let v3;
    for (; v3 = l5.next(); )
      v3.invertY(), this._write(r4, i6, v3, c5);
  }
  ensurePacked(e4, t3, r4) {
    if (!this._evaluator.hasDynamicProperties)
      return;
    const s4 = this._evaluator.evaluateMeshParams(e4, t3, r4);
    this._vertexPack.pack(s4, this._viewParams);
  }
  _writeVertex(e4, t3, r4, s4, a6) {
    const i6 = this.evaluatedMeshParams;
    this._vertexPack.writeVertex(e4, t3, r4, s4, i6, a6);
  }
};
const o$8 = 100, n$9 = has("featurelayer-fast-triangulation-enabled");
let a$7 = class a extends o$9 {
  async loadDependencies() {
    await Promise.all([super.loadDependencies(), i$c()]);
  }
  _write(e4, t3, r4) {
    const s4 = r4?.asOptimized() ?? t3.readGeometryForDisplay(), i6 = this._clip(s4);
    i6 && (e4.recordStart(this.instanceId, this.attributeLayout), this._writeGeometry(e4, t3, i6), e4.recordEnd());
  }
  _clip(e4) {
    if (!e4)
      return null;
    const r4 = this.hasEffects;
    return d$8(e4, r4 ? 256 : 8);
  }
  _writeGeometry(e4, t3, i6) {
    const a6 = i6.maxLength > o$8, c5 = [], l5 = this.createTesselationParams(t3);
    if (!a6 && n$9 && a$8(c5, i6))
      return void (c5.length && this._writeVertices(e4, t3, i6.coords, l5, c5));
    const d4 = p$9(i6);
    this._writeVertices(e4, t3, d4, l5);
  }
  _writeVertices(e4, t3, r4, s4, i6) {
    const o8 = t3.getDisplayId(), n6 = e4.vertexCount(), a6 = this.hasEffects;
    let c5 = 0;
    if (i6)
      for (const l5 of i6) {
        const t4 = r4[2 * l5], i7 = r4[2 * l5 + 1];
        a6 && e4.recordBounds(t4, i7, 0, 0), this._writeVertex(e4, o8, t4, i7, s4), c5++;
      }
    else
      for (let l5 = 0; l5 < r4.length; l5 += 2) {
        const t4 = Math.round(r4[l5]), i7 = Math.round(r4[l5 + 1]);
        a6 && e4.recordBounds(t4, i7, 0, 0), this._writeVertex(e4, o8, t4, i7, s4), c5++;
      }
    e4.indexEnsureSize(c5);
    for (let l5 = 0; l5 < c5; l5++)
      e4.indexWrite(l5 + n6);
  }
};
const r$5 = { createComputedParams: (e4) => e4, attributes: { id: { type: C$4.UNSIGNED_BYTE, count: 3, pack: "id" }, bitset: { type: C$4.UNSIGNED_BYTE, count: 1 }, pos: { type: C$4.SHORT, count: 2, pack: "position", packPrecisionFactor: 10 }, inverseArea: { type: C$4.FLOAT, count: 1, packTessellation: ({ inverseArea: e4 }) => e4 } } };
let s$a = class s extends a$7 {
  constructor() {
    super(...arguments), this.vertexSpec = r$5;
  }
  createTesselationParams(e4) {
    return { inverseArea: 1 / e4.readGeometryArea() };
  }
};
const i$6 = () => s$f.getLogger("esri.views.2d.engine.webgl.shaderGraph.techniques.meshWriterUtils"), u$6 = 0, a$6 = 100;
function m$7(r4, e4) {
  return [!!r4?.minScale && e4.scaleToZoom(r4.minScale) || u$6, !!r4?.maxScale && e4.scaleToZoom(r4.maxScale) || a$6];
}
function f$a(r4) {
  return 1 << r4;
}
function l$8(r4) {
  let e4 = 0;
  for (const [t3, n6] of r4)
    n6 && (e4 |= 1 << t3);
  return e4;
}
function h$c(t3) {
  let n6;
  if (!t3)
    return [0, 0, 0, 0];
  if ("string" == typeof t3) {
    const o9 = u$9.fromString(t3);
    if (!o9)
      return i$6().errorOnce(new s$e("mapview:mesh-processing", "Unable to parse string into color", { color: t3 })), [0, 0, 0, 0];
    n6 = o9.toArray();
  } else
    n6 = t3;
  const [o8, c5, s4, u4] = n6;
  return [o8 * (u4 / 255), c5 * (u4 / 255), s4 * (u4 / 255), u4];
}
function g$8(r4) {
  switch (r4) {
    case "butt":
    case U$1.Butt:
      return e$b.BUTT;
    case "round":
    case U$1.Round:
      return e$b.ROUND;
    case "square":
    case U$1.Square:
      return e$b.SQUARE;
  }
}
function p$8(r4) {
  switch (r4) {
    case "bevel":
    case w$8.Bevel:
      return n$f.BEVEL;
    case "miter":
    case w$8.Miter:
      return n$f.MITER;
    case "round":
    case w$8.Round:
      return n$f.ROUND;
  }
}
function d$7(r4, e4) {
  return Math.round(Math.min(Math.sqrt(r4 * e4), 255));
}
function M$3(r4, e4) {
  return Math.round(r4 * e4) / e4;
}
function S$7(r4, e4) {
  return Math.ceil(r4 * e4) / e4;
}
const c$5 = { createComputedParams: (t3) => t3, attributes: { id: { type: C$4.UNSIGNED_BYTE, count: 3, pack: "id" }, bitset: { type: C$4.UNSIGNED_BYTE, count: 1 }, pos: { type: C$4.SHORT, count: 2, pack: "position", packPrecisionFactor: 10 }, zoomRange: { type: C$4.SHORT, count: 2, packPrecisionFactor: at$1, pack: ({ scaleInfo: t3 }, { tileInfo: o8 }) => m$7(t3, o8) }, color: { type: C$4.UNSIGNED_BYTE, count: 4, normalized: true, pack: ({ color: t3 }) => h$c(t3) } } };
let i$5 = class i2 extends a$7 {
  constructor() {
    super(...arguments), this.vertexSpec = c$5;
  }
  createTesselationParams(t3) {
    return null;
  }
};
const s$9 = { createComputedParams: (t3) => t3, attributes: { ...c$5.attributes, tlbr: { count: 4, type: C$4.UNSIGNED_SHORT, pack: ({ sprite: e4 }) => {
  const { rect: r4, width: i6, height: s4 } = e4, a6 = r4.x + $$1, o8 = r4.y + $$1;
  return [a6, o8, a6 + i6, o8 + s4];
} }, inverseRasterizationScale: { count: 1, type: C$4.BYTE, packPrecisionFactor: 16, pack: ({ sprite: t3 }) => 1 / t3.rasterizationScale } } };
let a$5 = class a2 extends i$5 {
  constructor() {
    super(...arguments), this.vertexSpec = s$9;
  }
  _write(t3, e4, r4) {
    const i6 = r4?.asOptimized() ?? e4.readGeometryForDisplay(), s4 = this._clip(i6);
    if (!s4)
      return;
    const a6 = this.evaluatedMeshParams.sprite?.textureBinding;
    t3.recordStart(this.instanceId, this.attributeLayout, a6), this._writeGeometry(t3, e4, s4), t3.recordEnd();
  }
};
var i$4;
!function(i6) {
  i6[i6.Geographic = 0] = "Geographic", i6[i6.Arithmatic = 1] = "Arithmatic";
}(i$4 || (i$4 = {}));
const t$5 = 3.14159265359 / 180, c$4 = 3.14159265359 / 128, o$7 = 1, h$b = 1.1, n$8 = 1, A$3 = 24, G$3 = 8, s$8 = 1e-5, u$5 = 0.05, k$4 = 1e-30, q$5 = 4, B$4 = 0, C$2 = 2, D$3 = 5, E$3 = 6, F$5 = 2, H$2 = 3, I$4 = 0, J$1 = 3, K$2 = 16777216;
function l$7(e4) {
  const { sprite: o8, aspectRatio: r4, scaleProportionally: s4 } = e4, i6 = u$a(e4.height), n6 = i6 > 0 ? i6 : o8.height;
  let c5 = i6 * r4;
  return c5 <= 0 ? c5 = o8.width : s4 && (c5 *= o8.width / o8.height), { width: c5, height: n6 };
}
function m$6(t3) {
  const { applyRandomOffset: e4, sampleAlphaOnly: r4 } = t3, { width: i6, height: n6 } = l$7(t3);
  return l$8([[C$2, e4], [q$5, r4], [E$3, i6 < r$8], [D$3, n6 < r$8]]);
}
function f$9(t3) {
  const { width: e4 } = l$7(t3);
  return Math.round(e4 < r$8 ? e4 * l$c : e4);
}
function d$6(t3) {
  const { height: e4 } = l$7(t3);
  return Math.round(e4 < r$8 ? e4 * l$c : e4);
}
const g$7 = { createComputedParams: (t3) => t3, attributes: { ...s$9.attributes, bitset: { count: 1, type: C$4.UNSIGNED_BYTE, pack: m$6 }, width: { count: 1, type: C$4.UNSIGNED_SHORT, pack: f$9 }, height: { count: 1, type: C$4.UNSIGNED_SHORT, pack: d$6 }, offset: { count: 2, type: C$4.SHORT, pack: ({ offsetX: e4, offsetY: o8 }) => [u$a(e4), -u$a(o8)] }, scale: { count: 2, type: C$4.UNSIGNED_BYTE, packPrecisionFactor: 16, pack: ({ scaleX: t3, scaleY: e4 }) => [t3, e4] }, angle: { count: 1, type: C$4.UNSIGNED_BYTE, pack: ({ angle: t3 }) => l$b(t3) } } };
let y$3 = class y extends a$5 {
  constructor() {
    super(...arguments), this.vertexSpec = g$7;
  }
};
let f$8 = class f {
  constructor() {
    this.extrusionOffsetX = 0, this.extrusionOffsetY = 0, this.normalX = 0, this.normalY = 0, this.directionX = 0, this.directionY = 0, this.distance = 0;
  }
};
const _$8 = { createComputedParams: (t3) => t3, attributes: { id: { type: C$4.UNSIGNED_BYTE, count: 3, pack: "id" }, pos: { type: C$4.SHORT, count: 2, pack: "position", packPrecisionFactor: 10 }, bitset: { type: C$4.UNSIGNED_BYTE, count: 1 }, zoomRange: { type: C$4.SHORT, count: 2, packPrecisionFactor: at$1, pack: ({ scaleInfo: t3 }, { tileInfo: e4 }) => m$7(t3, e4) }, color: { type: C$4.UNSIGNED_BYTE, count: 4, normalized: true, pack: ({ color: t3 }) => h$c(t3) }, offset: { type: C$4.BYTE, count: 2, packPrecisionFactor: 16, packTessellation: ({ extrusionOffsetX: t3, extrusionOffsetY: e4 }) => [M$3(t3, 16), M$3(e4, 16)] }, normal: { type: C$4.BYTE, count: 2, packPrecisionFactor: 16, packTessellation: ({ normalX: t3, normalY: e4 }) => [M$3(t3, 16), M$3(e4, 16)] }, halfWidth: { type: C$4.UNSIGNED_SHORT, count: 1, packPrecisionFactor: 16, pack: ({ width: e4 }) => S$7(u$a(0.5 * e4), 16) }, referenceHalfWidth: { type: C$4.UNSIGNED_SHORT, count: 1, packPrecisionFactor: 16, pack: ({ referenceWidth: e4 }) => S$7(u$a(0.5 * e4), 16) } } };
let x$6 = class x {
  constructor() {
    this.id = 0, this.bitset = 0, this.indexCount = 0, this.vertexCount = 0, this.vertexFrom = 0, this.vertexBounds = 0;
  }
};
const T$3 = 65535;
let w$5 = class w extends o$9 {
  constructor(t3, e4, s4, i6) {
    super(t3, e4, s4, i6), this.vertexSpec = _$8, this._currentWrite = new x$6(), this._tessellationOptions = { halfWidth: 0, pixelCoordRatio: 1, offset: 0, wrapDistance: T$3, textured: false }, this._tessParams = new f$8(), this._initializeTessellator();
  }
  writeLineVertices(t3, e4, s4) {
    const i6 = this._getLines(e4);
    null != i6 && this._writeVertices(t3, s4, i6);
  }
  _initializeTessellator() {
    this._lineTessellator = new c$8(this._writeTesselatedVertex.bind(this), this._writeTriangle.bind(this), true);
  }
  _write(t3, s4, i6) {
    const r4 = i6 ?? a$c.fromFeatureSetReaderCIM(s4);
    r4 && this._writeGeometry(t3, s4, r4);
  }
  _writeGeometry(t3, e4, s4, i6) {
    t3.recordStart(this.instanceId, this.attributeLayout, i6), this.writeLineVertices(t3, s4, e4), t3.recordEnd();
  }
  _getLines(t3) {
    return x$7(t3, r$9(this.evaluatedMeshParams));
  }
  _writeVertices(e4, s4, r4) {
    const { _currentWrite: o8, _tessellationOptions: n6, evaluatedMeshParams: a6 } = this, { width: c5, capType: h6, joinType: u4, miterLimit: p7, hasSizeVV: d4 } = a6, f5 = u$a(0.5 * c5);
    n6.halfWidth = f5, n6.capType = g$8(h6), n6.joinType = p$8(u4), n6.miterLimit = p7;
    const _2 = !d4;
    o8.out = e4, o8.id = s4.getDisplayId(), o8.vertexCount = 0, o8.indexCount = 0, o8.vertexFrom = e4.vertexCount(), o8.vertexBounds = _2 && f5 < S$8 ? 0 : 1;
    for (const { line: t3, start: i6 } of r4)
      n6.initialDistance = i6 % T$3, this._lineTessellator.tessellate(t3, n6, _2);
  }
  _writeTesselatedVertex(t3, e4, s4, i6, r4, o8, n6, a6, c5, h6, l5) {
    const { out: m4, id: u4, vertexBounds: p7 } = this._currentWrite;
    return this.hasEffects && m4.recordBounds(t3, e4, p7, p7), this._tessParams.extrusionOffsetX = n6, this._tessParams.extrusionOffsetY = a6, this._tessParams.normalX = c5, this._tessParams.normalY = h6, this._tessParams.directionX = r4, this._tessParams.directionY = o8, this._tessParams.distance = l5, this._writeVertex(m4, u4, t3, e4, this._tessParams), this._currentWrite.vertexFrom + this._currentWrite.vertexCount++;
  }
  _writeTriangle(t3, e4, s4) {
    const { out: i6 } = this._currentWrite;
    i6.indexEnsureSize(3), i6.indexWrite(t3), i6.indexWrite(e4), i6.indexWrite(s4), this._currentWrite.indexCount += 3;
  }
};
const l$6 = { createComputedParams: (e4) => e4, attributes: { ..._$8.attributes, bitset: { type: C$4.UNSIGNED_BYTE, count: 1, pack: (e4) => 0 }, color: { type: C$4.UNSIGNED_BYTE, count: 4, normalized: true, pack: ({ color: e4 }) => h$c(e4) } } }, m$5 = { createComputedParams: (e4) => e4, attributes: { ..._$8.attributes, bitset: { type: C$4.UNSIGNED_BYTE, count: 1, pack: (e4) => l$8([[B$4, true]]) }, color: { type: C$4.UNSIGNED_BYTE, count: 4, normalized: true, pack: ({ outlineColor: e4 }) => h$c(e4) } } };
let p$7 = class p extends w$5 {
  constructor() {
    super(...arguments), this.vertexSpec = m$5;
  }
};
let h$a = class h extends i$5 {
  constructor(e4, t3, r4, s4) {
    super(e4, t3, r4, s4), this.vertexSpec = l$6, this._lineMeshWriter = this._createOutlineWriter(e4, t3, r4, s4);
  }
  _createOutlineWriter(e4, t3, r4, s4) {
    return new p$7(e4, t3, r4, s4);
  }
  _write(t3, r4, s4) {
    const i6 = s4?.asOptimized() ?? r4.readGeometryForDisplay(), o8 = this._clip(i6);
    o8 && (t3.recordStart(this.instanceId, this.attributeLayout), this._writeGeometry(t3, r4, o8), this._lineMeshWriter.writeLineVertices(t3, a$c.fromOptimizedCIM(o8, "esriGeometryPolyline"), r4), t3.recordEnd());
  }
  _clip(e4) {
    return e4 ? d$8(e4, r$9(this.evaluatedMeshParams)) : null;
  }
  ensurePacked(e4, t3, r4) {
    super.ensurePacked(e4, t3, r4), this._lineMeshWriter.ensurePacked(e4, t3, r4);
  }
  enqueueRequest(e4, t3, r4) {
    super.enqueueRequest(e4, t3, r4), this._lineMeshWriter.enqueueRequest(e4, t3, r4);
  }
  async loadDependencies() {
    await Promise.all([super.loadDependencies(), this._lineMeshWriter.loadDependencies()]);
  }
};
const s$7 = () => s$f.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");
let i$3 = class i3 {
  constructor() {
    this._includedModules = /* @__PURE__ */ new Map();
  }
  include(e4, r4) {
    if (this._includedModules.has(e4)) {
      const t3 = this._includedModules.get(e4);
      if (t3 !== r4) {
        s$7().error("Trying to include shader module multiple times with different sets of options.");
        const r5 = /* @__PURE__ */ new Set();
        for (const n6 of Object.keys(t3))
          t3[n6] !== e4[n6] && r5.add(n6);
        for (const n6 of Object.keys(e4))
          t3[n6] !== e4[n6] && r5.add(n6);
        r5.forEach((r6) => console.error(`  ${r6}: current ${t3[r6]} new ${e4[r6]}`));
      }
    } else
      this._includedModules.set(e4, r4), e4(this.builder, r4);
  }
};
let o$6 = class o2 extends i$3 {
  constructor() {
    super(...arguments), this.vertex = new u$4(), this.fragment = new u$4(), this.attributes = new m$4(), this.varyings = new h$9(), this.extensions = new l$5(), this.constants = new d$5();
  }
  get fragmentUniforms() {
    return this.fragment.uniforms.entries;
  }
  get builder() {
    return this;
  }
  generate(e4, r4 = true) {
    const t3 = this.extensions.generateSource(e4), n6 = this.attributes.generateSource(e4), s4 = this.varyings.generateSource(e4), i6 = "vertex" === e4 ? this.vertex : this.fragment, o8 = i6.uniforms.generateSource(), a6 = i6.code.generateSource(), c5 = "vertex" === e4 ? f$7 : _$7(r4), u4 = this.constants.generateSource().concat(i6.constants.generateSource());
    return `${r4 ? "#version 300 es" : ""}
${t3.join("\n")}
${c5}
${u4.join("\n")}
${o8.join("\n")}
${n6.join("\n")}
${s4.join("\n")}
${a6.join("\n")}`;
  }
  generateBindPass(e4) {
    const r4 = /* @__PURE__ */ new Map();
    this.vertex.uniforms.entries.forEach((e5) => {
      const n7 = e5.bind[a$d.Pass];
      n7 && r4.set(e5.name, n7);
    }), this.fragment.uniforms.entries.forEach((e5) => {
      const n7 = e5.bind[a$d.Pass];
      n7 && r4.set(e5.name, n7);
    });
    const n6 = Array.from(r4.values()), s4 = n6.length;
    return (r5, t3) => {
      for (let i6 = 0; i6 < s4; ++i6)
        n6[i6](e4, r5, t3);
    };
  }
  generateBindDraw(e4) {
    const r4 = /* @__PURE__ */ new Map();
    this.vertex.uniforms.entries.forEach((e5) => {
      const n7 = e5.bind[a$d.Draw];
      n7 && r4.set(e5.name, n7);
    }), this.fragment.uniforms.entries.forEach((e5) => {
      const n7 = e5.bind[a$d.Draw];
      n7 && r4.set(e5.name, n7);
    });
    const n6 = Array.from(r4.values()), s4 = n6.length;
    return (r5, t3, i6) => {
      for (let o8 = 0; o8 < s4; ++o8)
        n6[o8](e4, r5, t3, i6);
    };
  }
};
let a$4 = class a3 {
  constructor() {
    this._entries = /* @__PURE__ */ new Map();
  }
  add(...e4) {
    for (const r4 of e4)
      this._add(r4);
  }
  get(e4) {
    return this._entries.get(e4);
  }
  _add(r4) {
    if (null != r4) {
      if (this._entries.has(r4.name) && !this._entries.get(r4.name).equals(r4))
        throw new s$e(`Duplicate uniform name ${r4.name} for different uniform type`);
      this._entries.set(r4.name, r4);
    } else
      s$7().error(`Trying to add null Uniform from ${new Error().stack}.`);
  }
  generateSource() {
    return Array.from(this._entries.values()).map((e4) => null != e4.arraySize ? `uniform ${e4.type} ${e4.name}[${e4.arraySize}];` : `uniform ${e4.type} ${e4.name};`);
  }
  get entries() {
    return Array.from(this._entries.values());
  }
};
let c$3 = class c {
  constructor() {
    this._entries = new Array();
  }
  add(e4) {
    this._entries.push(e4);
  }
  generateSource() {
    return this._entries;
  }
};
let u$4 = class u extends i$3 {
  constructor() {
    super(...arguments), this.uniforms = new a$4(), this.code = new c$3(), this.constants = new d$5();
  }
  get builder() {
    return this;
  }
};
let m$4 = class m {
  constructor() {
    this._entries = new Array();
  }
  add(e4, r4) {
    this._entries.push([e4, r4]);
  }
  generateSource(e4) {
    return "fragment" === e4 ? [] : this._entries.map((e5) => `in ${e5[1]} ${e5[0]};`);
  }
};
let h$9 = class h2 {
  constructor() {
    this._entries = /* @__PURE__ */ new Map();
  }
  add(e4, r4) {
    this._entries.has(e4) && s$g(this._entries.get(e4) === r4), this._entries.set(e4, r4);
  }
  generateSource(e4) {
    const r4 = new Array();
    return this._entries.forEach((t3, n6) => r4.push("vertex" === e4 ? `out ${t3} ${n6};` : `in ${t3} ${n6};`)), r4;
  }
};
let l$5 = class l2 {
  constructor() {
    this._entries = /* @__PURE__ */ new Set();
  }
  add(e4) {
    this._entries.add(e4);
  }
  generateSource(e4) {
    const r4 = "vertex" === e4 ? l2.ALLOWLIST_VERTEX : l2.ALLOWLIST_FRAGMENT;
    return Array.from(this._entries).filter((e5) => r4.includes(e5)).map((e5) => `#extension ${e5} : enable`);
  }
};
l$5.ALLOWLIST_FRAGMENT = ["GL_EXT_shader_texture_lod", "GL_OES_standard_derivatives"], l$5.ALLOWLIST_VERTEX = [];
let d$5 = class d {
  constructor() {
    this._entries = /* @__PURE__ */ new Set();
  }
  add(e4, r4, t3) {
    let n6 = "ERROR_CONSTRUCTOR_STRING";
    switch (r4) {
      case "float":
        n6 = d._numberToFloatStr(t3);
        break;
      case "int":
        n6 = d._numberToIntStr(t3);
        break;
      case "bool":
        n6 = t3.toString();
        break;
      case "vec2":
        n6 = `vec2(${d._numberToFloatStr(t3[0])},                            ${d._numberToFloatStr(t3[1])})`;
        break;
      case "vec3":
        n6 = `vec3(${d._numberToFloatStr(t3[0])},                            ${d._numberToFloatStr(t3[1])},                            ${d._numberToFloatStr(t3[2])})`;
        break;
      case "vec4":
        n6 = `vec4(${d._numberToFloatStr(t3[0])},                            ${d._numberToFloatStr(t3[1])},                            ${d._numberToFloatStr(t3[2])},                            ${d._numberToFloatStr(t3[3])})`;
        break;
      case "ivec2":
        n6 = `ivec2(${d._numberToIntStr(t3[0])},                             ${d._numberToIntStr(t3[1])})`;
        break;
      case "ivec3":
        n6 = `ivec3(${d._numberToIntStr(t3[0])},                             ${d._numberToIntStr(t3[1])},                             ${d._numberToIntStr(t3[2])})`;
        break;
      case "ivec4":
        n6 = `ivec4(${d._numberToIntStr(t3[0])},                             ${d._numberToIntStr(t3[1])},                             ${d._numberToIntStr(t3[2])},                             ${d._numberToIntStr(t3[3])})`;
        break;
      case "mat2":
      case "mat3":
      case "mat4":
        n6 = `${r4}(${Array.prototype.map.call(t3, (e5) => d._numberToFloatStr(e5)).join(", ")})`;
    }
    return this._entries.add(`const ${r4} ${e4} = ${n6};`), this;
  }
  static _numberToIntStr(e4) {
    return e4.toFixed(0);
  }
  static _numberToFloatStr(e4) {
    return Number.isInteger(e4) ? e4.toFixed(1) : e4.toString();
  }
  generateSource() {
    return Array.from(this._entries);
  }
};
function _$7(e4 = true) {
  return `#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp sampler2D;
#else
  precision mediump float;
  precision mediump sampler2D;
#endif
${e4 ? "out vec4 fragColor;" : ""}
`;
}
const f$7 = "precision highp float;\nprecision highp sampler2D;";
function t$4(t3) {
  return t3.split(" ").map((t4, e4) => e4 > 0 ? t4.charAt(0).toUpperCase() + t4.slice(1) : t4).join("");
}
function e$5(t3, e4) {
  const s4 = [];
  for (s4.push(e4); s4.length; ) {
    const e5 = s4.pop();
    if ("object" == typeof e5 && !t3.has(e5.uid)) {
      t3.add(e5.uid);
      for (const t4 of e5.children)
        s4.push(t4);
    }
  }
}
let s$6 = class s2 {
  constructor() {
    this.uid = s2.NodeCount++, this._debugName = null, this._isMutable = false, this.isImplicit = false;
  }
  get isMutable() {
    return this._isMutable;
  }
  setMutable() {
    return this._isMutable = true, this;
  }
  setDebugName(e4) {
    return e4 = t$4(e4), this._debugName = e4, this.isImplicit && this.children[0] instanceof s2 && this.children[0].setDebugName(e4), this;
  }
  get debugInfo() {
    return { name: this._debugName ?? "" };
  }
  cloneInto(t3) {
    t3._debugName = this._debugName, t3._isMutable = this._isMutable, t3.isImplicit = this.isImplicit, t3.uid = this.uid;
  }
};
function i$2(t3) {
  return "object" == typeof t3 ? t3.clone() : t3;
}
s$6.NodeCount = 0;
let r$4 = class r extends s$6 {
  constructor() {
    super(...arguments), this.shaderType = "primitive-node";
  }
};
let n$7 = class n2 extends s$6 {
  constructor(t3) {
    super(), this.child = t3, this.shaderType = "scope-node";
  }
  get children() {
    return [this.child];
  }
  clone() {
    const t3 = new n2(i$2(this.child));
    return this.cloneInto(t3), t3;
  }
};
let o$5 = class o3 extends s$6 {
  constructor(t3, e4, s4) {
    super(), this.property = t3, this.target = e4, this.returnType = s4, this.shaderType = "property-access-node";
  }
  get children() {
    const t3 = [this.target];
    return "string" != typeof this.property && t3.push(this.property), t3;
  }
  clone() {
    const t3 = new o3(this.property, i$2(this.target), this.returnType);
    return this.cloneInto(t3), t3;
  }
};
let c$2 = class c2 extends s$6 {
  constructor(t3, e4, s4) {
    super(), this.condition = t3, this.ifTrue = e4, this.ifFalse = s4, this.shaderType = "condition-node";
  }
  get children() {
    return [this.condition, this.ifTrue, this.ifFalse];
  }
  clone() {
    const t3 = i$2(this.ifTrue), e4 = this.ifFalse ? i$2(this.ifFalse) : null, s4 = new c2(this.condition, t3, e4);
    return this.cloneInto(s4), s4;
  }
};
let u$3 = class u2 extends s$6 {
  constructor(t3, e4, s4, i6) {
    super(), this.captureList = t3, this.returnType = e4, this.generator = i6, this.shaderType = "block-node", s4 && (this.subgraph = new n$7(s4));
  }
  get children() {
    return Object.keys(this.captureList).map((t3) => this.captureList[t3]).concat(this.subgraph ?? []);
  }
  clone() {
    const t3 = {};
    for (const s4 in this.captureList)
      t3[s4] = i$2(this.captureList[s4]);
    const e4 = new u2(t3, this.returnType, this.subgraph ? i$2(this.subgraph.child) : this.subgraph, this.generator);
    return this.cloneInto(e4), e4;
  }
};
let p$6 = class p2 extends s$6 {
  constructor(t3, e4, s4, i6, r4, n6 = false) {
    super(), this.token = t3, this._children = e4, this.isInfix = s4, this.isPropertyAccess = i6, this.returnType = r4, this.isTernary = n6, this.shaderType = "function-node";
  }
  get children() {
    return this._children;
  }
  clone() {
    const t3 = new p2(this.token, this._children.map(i$2), this.isInfix, this.isPropertyAccess, this.returnType, this.isTernary);
    return this.cloneInto(t3), t3;
  }
};
var s$5, l$4, h$8, f$6, a$3, p$5, d$4, w$4, y$2, m$3, v$4, b$5, I$3, x$5;
function z$4(t3) {
  const n6 = [["float", "vec2", "vec3", "vec4"], ["int", "ivec2", "ivec3", "ivec4"], ["uint", "uvec2", "uvec3", "uvec4"], ["bool", "bvec2", "bvec3", "bvec4"]];
  for (const e4 of n6)
    if (e4.includes(t3))
      return e4.map((t4) => et[t4]);
  throw new Error("Unable to find type family");
}
function D$2(t3) {
  return new Proxy(t3, { get(n6, e4) {
    if ("constructor" === e4)
      return new Proxy(n6.constructor, { construct: (t4, n7, e5) => D$2(new t4(...n7)) });
    if (e4 in n6)
      return n6[e4];
    if ("string" == typeof e4) {
      const n7 = z$4(t3.type);
      return ft(t3, e4, n7[e4.length - 1]);
    }
  } });
}
function N$1(t3) {
  return new Proxy(t3, { construct: (t4, n6, e4) => D$2(new t4(...n6)) });
}
function P$5(t3) {
  return new Proxy(t3, { get(n6, e4) {
    if (e4 in n6)
      return n6[e4];
    if ("string" == typeof e4) {
      const n7 = parseInt(e4, 10);
      if (!isNaN(n7))
        return ft(t3, `[${n7}]`, t3.elementType.constructor);
    }
  } });
}
function q$4(t3) {
  return new Proxy(t3, { construct: (t4, n6, e4) => P$5(new t4(...n6)) });
}
let B$3 = class B extends Error {
};
let U = s$5 = class extends r$4 {
  constructor(t3, n6) {
    super(), this.elementType = t3, this.size = n6, this.children = [], this.type = "array";
  }
  clone() {
    const t3 = new s$5(this.elementType, this.size);
    return super.cloneInto(t3), t3;
  }
  get(t3) {
    if ("number" == typeof t3) {
      const n6 = new O$1(t3);
      return n6.isImplicit = true, ft(this, n6, this.elementType.constructor);
    }
    return ft(this, t3, this.elementType.constructor);
  }
  last() {
    return this.get(this.size - 1);
  }
  first() {
    return this.get(0);
  }
  findIndex(t3, n6, e4) {
    return bt(this, t3, n6, e4);
  }
  glslFindIndex(t3, n6, e4) {
    return It(this, t3, n6, e4);
  }
  static ofType(t3, n6) {
    const e4 = { construct: (e5, r4) => new s$5(new t3(), n6) };
    return new Proxy(s$5, e4);
  }
};
U.type = "array", U = s$5 = e$c([q$4], U);
let S$6 = class S extends r$4 {
  constructor() {
    super(...arguments), this.type = "sampler2D", this.children = [];
  }
  clone() {
    const t3 = new S();
    return t3.children = this.children.map(i$2), super.cloneInto(t3), t3;
  }
};
S$6.type = "sampler2D";
let j$5 = class j extends r$4 {
  constructor(t3) {
    super(), this.type = "float", this.children = [t3];
  }
  clone() {
    const t3 = new j(i$2(this.children[0]));
    return super.cloneInto(t3), t3;
  }
  multiply(t3) {
    return Tt(this, "number" == typeof t3 ? K$1(t3, j) : t3);
  }
  divide(t3) {
    return $t(this, "number" == typeof t3 ? K$1(t3, j) : t3);
  }
  add(t3) {
    return Ft(this, "number" == typeof t3 ? K$1(t3, j) : t3);
  }
  subtract(t3) {
    return kt(this, "number" == typeof t3 ? K$1(t3, j) : t3);
  }
};
j$5.type = "float";
let C$1 = l$4 = class extends r$4 {
  constructor(t3, n6) {
    super(), this.type = "vec2", this.children = [t3, n6].filter((t4) => null != t4);
  }
  clone() {
    const t3 = new l$4(i$2(this.children[0]), i$2(this.children[1]));
    return super.cloneInto(t3), t3;
  }
  get 0() {
    return ft(this, "[0]", j$5);
  }
  get 1() {
    return ft(this, "[1]", j$5);
  }
  get 2() {
    throw new B$3();
  }
  get 3() {
    throw new B$3();
  }
  multiply(t3) {
    return Tt(this, "number" == typeof t3 ? K$1(t3, j$5) : t3);
  }
  divide(t3) {
    return $t(this, "number" == typeof t3 ? K$1(t3, j$5) : t3);
  }
  add(t3) {
    return Ft(this, "number" == typeof t3 ? K$1(t3, j$5) : t3);
  }
  subtract(t3) {
    return kt(this, "number" == typeof t3 ? K$1(t3, j$5) : t3);
  }
};
C$1.type = "vec2", C$1 = l$4 = e$c([N$1], C$1);
let G$2 = h$8 = class extends r$4 {
  constructor(t3, n6, e4) {
    super(), this.type = "vec3", this.children = [t3, n6, e4].filter((t4) => null != t4);
  }
  get 0() {
    return ft(this, "[0]", j$5);
  }
  get 1() {
    return ft(this, "[1]", j$5);
  }
  get 2() {
    return ft(this, "[2]", j$5);
  }
  get 3() {
    throw new B$3();
  }
  clone() {
    const t3 = new h$8(i$2(this.children[0]), i$2(this.children[1]), i$2(this.children[2]));
    return super.cloneInto(t3), t3;
  }
  multiply(t3) {
    return Tt(this, "number" == typeof t3 ? K$1(t3, j$5) : t3);
  }
  divide(t3) {
    return $t(this, "number" == typeof t3 ? K$1(t3, j$5) : t3);
  }
  add(t3) {
    return Ft(this, "number" == typeof t3 ? K$1(t3, j$5) : t3);
  }
  subtract(t3) {
    return kt(this, "number" == typeof t3 ? K$1(t3, j$5) : t3);
  }
};
G$2.type = "vec3", G$2 = h$8 = e$c([N$1], G$2);
let H$1 = f$6 = class extends r$4 {
  constructor(t3, n6, e4, r4) {
    super(), this.type = "vec4", this.children = [t3, n6, e4, r4].filter((t4) => null != t4);
  }
  clone() {
    const t3 = new f$6(i$2(this.children[0]), i$2(this.children[1]), i$2(this.children[2]), i$2(this.children[3]));
    return super.cloneInto(t3), t3;
  }
  get 0() {
    return ft(this, "[0]", j$5);
  }
  get 1() {
    return ft(this, "[1]", j$5);
  }
  get 2() {
    return ft(this, "[2]", j$5);
  }
  get 3() {
    return ft(this, "[3]", j$5);
  }
  multiply(t3) {
    return Tt(this, "number" == typeof t3 ? K$1(t3, j$5) : t3);
  }
  divide(t3) {
    return $t(this, "number" == typeof t3 ? K$1(t3, j$5) : t3);
  }
  add(t3) {
    return Ft(this, "number" == typeof t3 ? K$1(t3, j$5) : t3);
  }
  subtract(t3) {
    return kt(this, "number" == typeof t3 ? K$1(t3, j$5) : t3);
  }
};
H$1.type = "vec4", H$1 = f$6 = e$c([N$1], H$1);
let M$2 = a$3 = class extends r$4 {
  constructor(t3) {
    super(), this.type = "uint", this.children = [t3];
  }
  clone() {
    const t3 = new a$3(i$2(this.children[0]));
    return super.cloneInto(t3), t3;
  }
};
M$2.type = "uint", M$2 = a$3 = e$c([N$1], M$2);
let R$5 = p$5 = class extends r$4 {
  constructor(t3, n6) {
    super(), this.type = "uvec2", this.children = [t3, n6].filter((t4) => null != t4);
  }
  clone() {
    const t3 = new p$5(i$2(this.children[0]), i$2(this.children[1]));
    return super.cloneInto(t3), t3;
  }
};
R$5.type = "uvec2", R$5 = p$5 = e$c([N$1], R$5);
let A$2 = d$4 = class extends r$4 {
  constructor(t3, n6, e4) {
    super(), this.type = "uvec3", this.children = [t3, n6, e4].filter((t4) => null != t4);
  }
  clone() {
    const t3 = new d$4(i$2(this.children[0]), i$2(this.children[1]), i$2(this.children[2]));
    return super.cloneInto(t3), t3;
  }
};
A$2.type = "uvec3", A$2 = d$4 = e$c([N$1], A$2);
let X = w$4 = class extends r$4 {
  constructor(t3, n6, e4, r4) {
    super(), this.type = "uvec4", this.children = [t3, n6, e4, r4].filter((t4) => null != t4);
  }
  clone() {
    const t3 = new w$4(i$2(this.children[0]), i$2(this.children[1]), i$2(this.children[2]), i$2(this.children[3]));
    return super.cloneInto(t3), t3;
  }
};
X.type = "uvec4", X = w$4 = e$c([N$1], X);
class Y extends r$4 {
  constructor(t3) {
    super(), this.type = "bool", this.children = [t3];
  }
  and(t3) {
    return Rt(this, t3);
  }
  or(t3) {
    return Ht(this, t3);
  }
  clone() {
    const t3 = new Y(i$2(this.children[0]));
    return super.cloneInto(t3), t3;
  }
}
Y.type = "bool";
let _$6 = y$2 = class extends r$4 {
  constructor(t3, n6) {
    super(), this.type = "bvec2", this.children = [t3, n6].filter((t4) => null != t4);
  }
  all() {
    return Jt(this);
  }
  any() {
    return Kt(this);
  }
  clone() {
    const t3 = new y$2(i$2(this.children[0]), i$2(this.children[1]));
    return super.cloneInto(t3), t3;
  }
};
_$6.type = "bvec2", _$6 = y$2 = e$c([N$1], _$6);
let J = m$3 = class extends r$4 {
  constructor(t3, n6, e4) {
    super(), this.type = "bvec3", this.children = [t3, n6, e4].filter((t4) => null != t4);
  }
  all() {
    return Jt(this);
  }
  any() {
    return Kt(this);
  }
  clone() {
    const t3 = new m$3(i$2(this.children[0]), i$2(this.children[1]), i$2(this.children[2]));
    return super.cloneInto(t3), t3;
  }
};
function K$1(t3, n6) {
  if ("number" == typeof t3) {
    return new n6(t3);
  }
  return t3;
}
J.type = "bvec3", J = m$3 = e$c([N$1], J);
let L$1 = v$4 = class extends r$4 {
  constructor(t3, n6, e4, r4) {
    super(), this.type = "bvec4", this.children = [t3, n6, e4, r4].filter((t4) => null != t4);
  }
  all() {
    return Jt(this);
  }
  any() {
    return Kt(this);
  }
  clone() {
    const t3 = new v$4(i$2(this.children[0]), i$2(this.children[1]), i$2(this.children[2]), i$2(this.children[3]));
    return super.cloneInto(t3), t3;
  }
};
L$1.type = "bvec4", L$1 = v$4 = e$c([N$1], L$1);
let O$1 = class O extends r$4 {
  constructor(t3) {
    super(), this.type = "int", this.children = [t3];
  }
  multiply(t3) {
    return Tt(this, K$1(t3, O));
  }
  add(t3) {
    return Ft(this, K$1(t3, O));
  }
  subtract(t3) {
    return kt(this, K$1(t3, O));
  }
  divide(t3) {
    return $t(this, K$1(t3, O));
  }
  clone() {
    const t3 = new O(i$2(this.children[0]));
    return super.cloneInto(t3), t3;
  }
};
O$1.type = "int";
let Q = b$5 = class extends r$4 {
  constructor(t3, n6) {
    super(), this.type = "ivec2", this.children = [t3, n6].filter((t4) => null != t4);
  }
  clone() {
    const t3 = new b$5(i$2(this.children[0]), i$2(this.children[1]));
    return super.cloneInto(t3), t3;
  }
};
Q.type = "ivec2", Q = b$5 = e$c([N$1], Q);
let V = I$3 = class extends r$4 {
  constructor(t3, n6, e4) {
    super(), this.type = "ivec3", this.children = [t3, n6, e4].filter((t4) => null != t4);
  }
  clone() {
    const t3 = new I$3(i$2(this.children[0]), i$2(this.children[1]), i$2(this.children[2]));
    return super.cloneInto(t3), t3;
  }
};
V.type = "ivec3", V = I$3 = e$c([N$1], V);
let W$1 = x$5 = class extends r$4 {
  constructor(t3, n6, e4, r4) {
    super(), this.type = "ivec4", this.children = [t3, n6, e4, r4].filter((t4) => null != t4);
  }
  clone() {
    const t3 = new x$5(i$2(this.children[0]), i$2(this.children[1]), i$2(this.children[2]), i$2(this.children[3]));
    return super.cloneInto(t3), t3;
  }
};
W$1.type = "ivec4", W$1 = x$5 = e$c([N$1], W$1);
let Z$1 = class Z extends r$4 {
  constructor(t3, n6, e4, r4) {
    super(), this.type = "mat2", this.children = [t3, n6, e4, r4];
  }
  clone() {
    const t3 = new Z(i$2(this.children[0]), i$2(this.children[1]), i$2(this.children[2]), i$2(this.children[3]));
    return super.cloneInto(t3), t3;
  }
};
Z$1.type = "mat2";
class tt extends r$4 {
  static identity() {
    return new tt(1, 0, 0, 0, 1, 0, 0, 0, 1);
  }
  static fromRotation(t3) {
    const n6 = Wn(t3), e4 = tn(t3);
    return new tt(e4, n6, 0, yt(n6), e4, 0, 0, 0, 1);
  }
  constructor(t3, n6, e4, r4, c5, i6, u4, o8, s4) {
    super(), this.type = "mat3", this.children = [t3, n6, e4, r4, c5, i6, u4, o8, s4];
  }
  add(t3) {
    return Ft(this, t3);
  }
  multiply(t3) {
    return Tt(this, t3);
  }
  clone() {
    const t3 = new tt(i$2(this.children[0]), i$2(this.children[1]), i$2(this.children[2]), i$2(this.children[3]), i$2(this.children[4]), i$2(this.children[5]), i$2(this.children[6]), i$2(this.children[7]), i$2(this.children[8]));
    return super.cloneInto(t3), t3;
  }
}
tt.type = "mat3";
class nt extends r$4 {
  static identity() {
    return new nt(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  constructor(t3, n6, e4, r4, c5, i6, u4, o8, s4, l5, h6, f5, a6, p7, d4, w4) {
    super(), this.type = "mat4", this.children = [t3, n6, e4, r4, c5, i6, u4, o8, s4, l5, h6, f5, a6, p7, d4, w4];
  }
  static fromColumns(t3, n6, e4, r4) {
    return new nt(t3.x, t3.y, t3.z, t3.w, n6.x, n6.y, n6.z, n6.w, e4.x, e4.y, e4.z, e4.w, r4.x, r4.y, r4.z, r4.w);
  }
  multiply(t3) {
    return Tt(this, t3);
  }
  clone() {
    const t3 = new nt(i$2(this.children[0]), i$2(this.children[1]), i$2(this.children[2]), i$2(this.children[3]), i$2(this.children[4]), i$2(this.children[5]), i$2(this.children[6]), i$2(this.children[7]), i$2(this.children[8]), i$2(this.children[9]), i$2(this.children[10]), i$2(this.children[11]), i$2(this.children[12]), i$2(this.children[13]), i$2(this.children[14]), i$2(this.children[15]));
    return super.cloneInto(t3), t3;
  }
}
nt.type = "mat4";
const et = { float: j$5, vec2: C$1, vec3: G$2, vec4: H$1, int: O$1, ivec2: Q, ivec3: V, ivec4: W$1, uint: M$2, uvec2: R$5, uvec3: A$2, uvec4: X, bool: Y, bvec2: _$6, bvec3: J, bvec4: L$1 }, rt = (...t3) => new O$1(...t3), ct = (...t3) => new j$5(...t3), it = (...t3) => new C$1(...t3), ut = (...t3) => new G$2(...t3), ot = (...t3) => new H$1(...t3), lt = (...t3) => new tt(...t3);
function ft(t3, n6, e4) {
  const c5 = new e4(new o$5(n6, t3, e4));
  return c5.isImplicit = true, c5;
}
function at(t3, n6, e4, r4 = null) {
  if (r4) {
    const c6 = new r4(), i6 = new r4(new p$6(t3, [n6, e4], true, false, c6));
    return i6.isImplicit = true, i6;
  }
  if ("float" === n6.type || "int" === n6.type) {
    const r5 = new e4.constructor(new p$6(t3, [n6, e4], true, false, e4.constructor));
    return r5.isImplicit = true, r5;
  }
  if (("mat2" === n6.type || "mat3" === n6.type || "mat4" === n6.type) && "float" !== e4.type) {
    const r5 = new e4.constructor(new p$6(t3, [n6, e4], true, false, e4.constructor));
    return r5.isImplicit = true, r5;
  }
  const c5 = new n6.constructor(new p$6(t3, [n6, e4], true, false, n6.constructor));
  return c5.isImplicit = true, c5;
}
function pt(t3, n6, e4 = n6.constructor) {
  const r4 = new e4(new p$6(t3, [n6], false, false, e4));
  return r4.isImplicit = true, r4;
}
function dt(t3, n6, e4, r4 = n6.constructor) {
  const c5 = new r4(new p$6(t3, [n6, e4], false, false, r4));
  return c5.isImplicit = true, c5;
}
function wt(t3, n6, e4, r4, c5 = n6.constructor) {
  const i6 = new c5(new p$6(t3, [n6, e4, r4], false, false, c5));
  return i6.isImplicit = true, i6;
}
function yt(t3) {
  return Tt(t3, ct(-1));
}
function mt(t3, n6, e4, r4) {
  return new n6(new u$3(t3, n6, e4, r4));
}
function bt(t3, n6, e4 = 0, r4 = t3.size) {
  const c5 = new O$1(e4).setMutable().setDebugName("FindIndexIterator"), i6 = n6(t3.get(c5)).setDebugName("FindIndexPredicate"), u4 = mt({ iter: c5 }, O$1, i6, ({ out: t4, iter: n7, subgraph: e5 }) => `
${t4} = -1;

for (; ${n7} < ${r4}; ${n7}++) {

${e5.body}

  if (${e5.varName}) {
    ${t4} = ${n7};
    break;
  }

}
`).setDebugName("FindIndexBlock");
  return u4;
}
function It(t3, n6, e4 = 0, r4 = t3.size) {
  const c5 = mt({ array: t3 }, O$1, null, ({ out: t4, array: c6 }) => `
${t4} = -1;
for (int i = ${e4}; i < ${r4}; i++) {
  bool condition;
  ${n6({ array: c6, i: "i", out: "condition" })}
  if (condition) {
    ${t4} = i;
    break;
  }
}
`).setDebugName("GlslFindIndexBlock");
  return c5;
}
function xt(t3, n6, e4) {
  const r4 = "function" == typeof n6 ? n6() : n6, c5 = "function" == typeof e4 ? e4() : e4, i6 = new r4.constructor(new c$2(t3, r4, c5));
  return i6.isImplicit = true, i6;
}
function gt(...t3) {
  const n6 = t3.map(([t4, n7]) => "function" == typeof n7 ? [t4, n7()] : [t4, n7]), e4 = n6[0][1].constructor, r4 = n6.findIndex((t4) => true === t4[0]);
  if (-1 === r4)
    throw new Error("A cond must have a fallthrough case with `true`/; ");
  const c5 = n6.slice(0, r4), i6 = n6[r4][1], u4 = new e4(c5.reduceRight((t4, n7) => xt(n7[0], n7[1], t4), i6));
  return u4.isImplicit = true, u4;
}
function Tt(t3, n6) {
  return at("*", t3, n6);
}
function $t(t3, n6) {
  return at("/", t3, n6);
}
function Ft(t3, n6) {
  return at("+", t3, n6);
}
function kt(t3, n6) {
  return at("-", t3, n6);
}
function Dt(t3, n6) {
  return at(">>", t3, n6);
}
function Nt(t3, n6) {
  return at("&", t3, n6);
}
function Bt(t3, n6) {
  return at("==", t3, n6, Y);
}
function St(t3, n6) {
  return at("<", t3, n6, Y);
}
function jt(t3, n6) {
  return at("<=", t3, n6, Y);
}
function Ct(t3, n6) {
  return at(">", t3, n6, Y);
}
function Gt(t3, n6) {
  return at(">=", t3, n6, Y);
}
function Ht(...t3) {
  return t3.length <= 1 ? t3[0] : t3.slice(1).reduce((t4, n6) => Mt(t4, n6), t3[0]);
}
function Mt(t3, n6) {
  return at("||", t3, n6, Y);
}
function Rt(...t3) {
  return t3.length <= 1 ? t3[0] : t3.slice(1).reduce((t4, n6) => At(t4, n6), t3[0]);
}
function At(t3, n6) {
  return at("&&", t3, n6, Y);
}
function Xt(t3) {
  return pt("abs", t3);
}
function Jt(t3) {
  return pt("all", t3, Y);
}
function Kt(t3) {
  return pt("any", t3, Y);
}
function Wt(t3) {
  return pt("ceil", t3);
}
function Zt(t3, n6, e4) {
  return wt("clamp", t3, n6, e4, t3.constructor);
}
function tn(t3) {
  return pt("cos", t3);
}
function sn(t3, n6) {
  return dt("distance", t3, n6, j$5);
}
function ln(t3, n6) {
  return dt("dot", t3, n6, j$5);
}
function vn(t3) {
  return pt("floor", t3);
}
function bn(t3) {
  return pt("fract", t3);
}
function kn(t3) {
  return pt("length", t3, j$5);
}
function Bn(t3, n6) {
  return dt("max", t3, n6);
}
function Un(t3, n6) {
  return dt("min", t3, n6);
}
function Sn(t3, n6, e4) {
  return wt("mix", t3, n6, e4);
}
function jn(t3, n6) {
  return dt("mod", t3, n6);
}
function Gn(t3) {
  return pt("normalize", t3);
}
function Hn(t3) {
  return "bool" === t3.type ? pt("!", t3) : pt("not", t3);
}
function Wn(t3) {
  return pt("sin", t3);
}
function te(t3, n6, e4) {
  return wt("smoothstep", t3, n6, e4);
}
function ee(t3, n6) {
  return dt("step", t3, n6, n6.constructor);
}
function se(t3, n6) {
  return dt("texture2D", t3, n6, H$1);
}
const e$4 = 5;
function t$3(e4, t3, r4) {
  const n6 = t3.split("\n");
  for (const i6 of n6)
    if (i6.trim().length) {
      {
        let t4 = "";
        null != r4 && (t4 += `/*id:${r4 ?? "000"}*/   `), e4.body += t4.padEnd(14);
      }
      e4.body += " ".repeat(e4.indent) + i6 + "\n";
    }
}
let r$3 = class r2 {
  write(e4) {
    for (const t3 of e4.rootOutputNodes())
      e4.shouldPruneOutputNode(t3) || (t3.variableName = this._write(e4, t3.node));
    return e4;
  }
  _createVarName(e4, t3) {
    let r4 = "";
    return "boolean" != typeof t3 && "number" != typeof t3 && t3.debugInfo.name && (r4 = `${t3.debugInfo.name}_`), `${r4}v${e4.varCount++}`;
  }
  _write(e4, t3, r4 = false) {
    if ("number" == typeof t3)
      return t3.toString();
    if ("boolean" == typeof t3)
      return t3.toString();
    let n6 = e4.getEmit(t3);
    if (n6)
      return n6;
    switch (t3.shaderType) {
      case "scope-node":
        n6 = this._writeScopeNode(e4, t3);
        break;
      case "primitive-node":
        n6 = this._writePrimitveNode(e4, t3, r4);
        break;
      case "function-node":
        n6 = this._writeFunctionNode(e4, t3);
        break;
      case "property-access-node":
        n6 = this._writePropertyAccessNode(e4, t3);
        break;
      case "text-node":
        n6 = t3.text;
        break;
      case "block-node":
        n6 = this._writeBlockNode(e4, t3);
        break;
      case "condition-node":
        n6 = this._writeConditionNode(e4, t3);
    }
    return e4.setEmit(t3, n6), n6;
  }
  _writeScopeNode(e4, r4) {
    const n6 = new r4.child.constructor();
    n6.setDebugName(r4.debugInfo.name);
    const i6 = this._write(e4, n6, true);
    t$3(e4, `{ /*ScopeStart: ${r4.uid} ${r4.debugInfo.name}*/`), e4.indent += 2;
    return t$3(e4, `${i6} = ${this._write(e4, r4.child)};`), e4.indent -= 2, t$3(e4, `} /*ScopeEnd: ${r4.uid} ${r4.debugInfo.name}*/`), i6;
  }
  _writeConditionNode(e4, r4) {
    const n6 = new r4.ifTrue.constructor(), i6 = this._write(e4, n6, true);
    t$3(e4, `if (${this._write(e4, r4.condition)}) {`), e4.indent += 2;
    const o8 = e4.createSubgraphContext(), d4 = this._write(o8, r4.ifTrue);
    if (e4.body += o8.body, d4 && t$3(e4, `${i6} = ${d4};`), e4.indent -= 2, t$3(e4, "}"), r4.ifFalse) {
      t$3(e4, "else {"), e4.indent += 2;
      const n7 = e4.createSubgraphContext(), o9 = this._write(n7, r4.ifFalse);
      e4.body += n7.body, o9 && t$3(e4, `${i6} = ${o9};`), e4.indent -= 2, t$3(e4, "}");
    }
    return i6;
  }
  _writeBlockNode(e4, r4) {
    const { captureList: n6, generator: i6, returnType: o8 } = r4, d4 = {};
    for (const t3 in n6) {
      if (!n6[t3])
        continue;
      const r5 = this._write(e4, n6[t3]);
      d4[t3] = r5;
    }
    const s4 = new o8(), c5 = this._write(e4, s4, true);
    if (d4.out = c5, r4.subgraph) {
      const t3 = e4.createSubgraphContext(), n7 = this._write(t3, r4.subgraph.child), i7 = t3.body;
      d4.subgraph = { varName: n7, body: i7 };
    }
    const a6 = i6(d4);
    return t$3(e4, "{\n"), e4.indent += 2, t$3(e4, a6), e4.indent -= 2, t$3(e4, "}\n"), c5;
  }
  _writePropertyAccessNode(e4, t3) {
    const r4 = this._write(e4, t3.target);
    if ("string" == typeof t3.property && t3.property.includes("["))
      return `${r4}${t3.property}`;
    if ("string" != typeof t3.property) {
      return `${r4}[${this._write(e4, t3.property)}]`;
    }
    return `${r4}.${t3.property}`;
  }
  _writeFunctionNode(r4, n6) {
    const i6 = n6.returnType.type;
    if (n6.isInfix) {
      const [o9, d5] = n6.children.map((e4) => this._write(r4, e4)), s4 = this._createVarName(r4, n6);
      return t$3(r4, `${i6.padEnd(e$4)} ${s4} = ${o9} ${n6.token} ${d5};`, n6.uid), s4;
    }
    const o8 = n6.children.map((e4) => this._write(r4, e4)).join(", "), d4 = this._createVarName(r4, n6);
    return t$3(r4, `${i6.padEnd(e$4)} ${d4} = ${n6.token}(${o8});`, n6.uid), d4;
  }
  _writePrimitveNode(r4, n6, i6 = false) {
    const o8 = r4.getInput(n6);
    if (o8)
      return o8.isUsed = true, o8.variableName;
    const d4 = 1 === n6.children.length && n6.children[0]?.type === n6.type;
    if (n6.isImplicit || d4)
      return this._write(r4, n6.children[0]);
    const s4 = this._createVarName(r4, n6);
    if (i6)
      return t$3(r4, `${n6.type.padEnd(e$4)} ${s4};`, n6.uid), s4;
    const c5 = !n6.debugInfo.name && !n6.isMutable;
    if (c5 && "float" === n6.type && "number" == typeof n6.children[0])
      return Number.isInteger(n6.children[0]) ? n6.children[0].toFixed(1) : n6.children[0].toString();
    if (c5 && "int" === n6.type && "number" == typeof n6.children[0] && Number.isInteger(n6.children[0]))
      return n6.children[0].toString();
    const a6 = n6.children.map((e4) => this._write(r4, e4)).join(", ");
    return "array" === n6.type ? (t$3(r4, `${n6.type.padEnd(e$4)} ${s4} = [${a6}];`, n6.uid), s4) : c5 ? `${n6.type}(${a6})` : (t$3(r4, `${n6.type.padEnd(e$4)} ${s4} = ${n6.type}(${a6});`, n6.uid), s4);
  }
};
let t$2 = class t {
  constructor(e4, t3, n6) {
    this.variableName = e4, this.variableInputType = t3, this.node = n6, this.type = "shader-input", this.isUsed = false;
  }
  clone() {
    return new t(this.variableName, this.variableInputType, i$2(this.node));
  }
};
let n$6 = class n3 {
  constructor(e4, t3, n6) {
    this.outVariableName = e4, this.outVariableType = t3, this.node = n6, this.type = "shader-output";
  }
  clone() {
    const t3 = new n3(this.outVariableName, this.outVariableType, i$2(this.node));
    return t3.variableName = this.variableName, t3;
  }
};
let o$4 = class o4 {
  static createVertex(e4, a6, d4, i6, r4, s4) {
    const u4 = [];
    for (const n6 in e4) {
      const o8 = e4[n6], a7 = d4.get(n6);
      a7 ? u4.push(new t$2(a7, "builtin", o8)) : u4.push(new t$2("a_" + n6, "attribute", o8));
    }
    for (const n6 of i6) {
      const e5 = n6.uniformHydrated;
      u4.push(new t$2(n6.uniformName, "uniform", e5));
    }
    const p7 = [];
    for (const t3 in a6) {
      const e5 = a6[t3];
      "glPosition" === t3 ? p7.push(new n$6("gl_Position", "builtin", e5)) : "glPointSize" === t3 ? p7.push(new n$6("gl_PointSize", "builtin", e5)) : p7.push(new n$6("v_" + t3, "varying", e5));
    }
    return new o4(u4, p7, r4, s4);
  }
  static createFragment(e4, a6, d4, i6, r4, s4) {
    const u4 = [], p7 = Array.from(r4.rootOutputNodes());
    for (const n6 in e4) {
      const o8 = e4[n6], a7 = d4.get(n6);
      if (a7) {
        u4.push(new t$2(a7, "builtin", o8));
        continue;
      }
      const i7 = p7.find((e5) => e5.node === o8);
      i7 && u4.push(new t$2(i7.outVariableName, i7.outVariableType, o8));
    }
    for (const n6 of i6) {
      const e5 = n6.uniformHydrated;
      u4.push(new t$2(n6.uniformName, "uniform", e5));
    }
    const h6 = [];
    for (const t3 in a6) {
      const e5 = a6[t3], o8 = d4.get(t3);
      if ("discard" === t3)
        h6.push(new n$6(null, "discard", e5));
      else {
        if (!o8)
          throw new Error(`Member ${t3} in shader fragment output shoule be tagged as builtin`);
        h6.push(new n$6(o8, "builtin", e5));
      }
    }
    return new o4(u4, h6, s4);
  }
  constructor(e4, t3, n6, o8) {
    this.type = "shader-graph-context", this.indent = 0, this.body = "", this.varCount = 0, this._inputShaderTypesByNodeUid = /* @__PURE__ */ new Map(), this._nodeEmitMap = /* @__PURE__ */ new Map();
    for (const a6 of e4)
      this._inputShaderTypesByNodeUid.set(a6.node.uid, a6);
    this._outputShaderTypes = t3, this._transformFeedbackBindings = n6, this._transformFeedbackNames = new Set(n6.map((e5) => "v_" + e5.propertyKey)), this._usedInFragmentShader = o8;
  }
  shouldPruneOutputNode(e4) {
    return !!this._usedInFragmentShader && ("builtin" !== e4.outVariableType && (!this._transformFeedbackNames.has(e4.outVariableName) && !this._usedInFragmentShader.has(e4.node.uid)));
  }
  setEmit(e4, t3) {
    this._nodeEmitMap.set(e4.uid, t3);
  }
  getEmit(e4) {
    return this._nodeEmitMap.get(e4.uid);
  }
  inputs() {
    return this._inputShaderTypesByNodeUid.values();
  }
  getInput(e4) {
    return this._inputShaderTypesByNodeUid.get(e4.uid);
  }
  *rootOutputNodes() {
    for (const e4 of this._outputShaderTypes)
      yield e4;
  }
  *nodes() {
    const e4 = [];
    for (const t3 of this._outputShaderTypes.values())
      e4.push(t3.node);
    for (; e4.length; ) {
      const t3 = e4.pop();
      "number" != typeof t3 && "boolean" != typeof t3 && e4.push(...t3.children.filter(Boolean)), yield t3;
    }
  }
  *nodesOfTypeOrFunction() {
    for (const e4 of this.nodes())
      "number" != typeof e4 && "boolean" != typeof e4 && (yield e4);
  }
  createSubgraphContext() {
    const e4 = this.clone();
    return e4.body = "", e4.indent = this.indent + 2, e4._nodeEmitMap = new Map(this._nodeEmitMap), e4;
  }
  clone() {
    const e4 = new o4([], this._outputShaderTypes, this._transformFeedbackBindings, this._usedInFragmentShader);
    return e4._inputShaderTypesByNodeUid = this._inputShaderTypesByNodeUid, e4.indent = this.indent, e4.body = this.body, e4.varCount = this.varCount, e4._nodeEmitMap = this._nodeEmitMap, e4;
  }
  insertVertexShader(e4) {
    e4.vertex.code.add(""), this._insertInputs(e4, "vertex"), e4.vertex.code.add(""), e4.vertex.code.add("// OUTPUTS: "), e4.vertex.code.add("// --------------------------------------------------------- ");
    for (const t3 of this.rootOutputNodes()) {
      const n6 = "builtin" === t3.outVariableType;
      this.shouldPruneOutputNode(t3) || (n6 ? e4.vertex.code.add(`// ${t3.outVariableType.padEnd(7)} ${t3.node.type.padEnd(9)} ${t3.outVariableName};`) : e4.vertex.code.add(`${t3.outVariableType.padEnd(10)} ${t3.node.type.padEnd(9)} ${t3.outVariableName};`));
    }
    e4.vertex.code.add(""), e4.vertex.code.add("void main() {"), e4.vertex.code.add("  " + this.body.split("\n").join("\n  "));
    for (const t3 of this.rootOutputNodes())
      this.shouldPruneOutputNode(t3) || e4.vertex.code.add(`  ${t3.outVariableName} = ${t3.variableName};`);
    e4.vertex.code.add("}");
  }
  insertFragmentShader(e4) {
    this._insertInputs(e4, "fragment"), e4.fragment.code.add(""), e4.fragment.code.add("void main() {"), e4.fragment.code.add("  " + this.body.split("\n").join("\n  "));
    for (const t3 of this.rootOutputNodes())
      "discard" === t3.outVariableType ? (e4.fragment.code.add("  // TODO: Should ensure codegen for discard appears first in fragment shader"), e4.fragment.code.add(`  if (${t3.variableName}) {`), e4.fragment.code.add("    discard;"), e4.fragment.code.add("  }"), e4.fragment.code.add("  ")) : e4.fragment.code.add(`  ${t3.outVariableName} = ${t3.variableName};`);
    e4.fragment.code.add("}");
  }
  _insertInputs(e4, t3) {
    e4[t3].code.add("// INPUTS: "), e4[t3].code.add("// --------------------------------------------------------- ");
    for (const n6 of this.inputs())
      n6.isUsed && "builtin" !== n6.variableInputType && ("array" === n6.node.type ? e4[t3].code.add(`${n6.variableInputType.padEnd(10)} ${n6.node.elementType.type.padEnd(9)} ${n6.variableName}[${n6.node.size}];`) : e4[t3].code.add(`${n6.variableInputType.padEnd(10)} ${n6.node.type.padEnd(9)} ${n6.variableName};`));
  }
};
const s$4 = () => s$f.getLogger("esri.views.2d.engine.webgl.shaderGraph.typed.TypedShaderProgram");
function n$5(e4, t3, o8) {
  const i6 = t3.length;
  if (i6 !== o8) {
    const n6 = new s$e("Invalid Uniform", `Invalid length, expected ${o8} but got ${i6}`, { uniformName: e4, values: t3 });
    s$4().errorOnce(n6);
  }
}
let a$2 = class a4 {
  constructor(r4, e4, t3, o8, i6, s4) {
    this._program = null, this._vao = null, this._temporaryTextures = [], this.vertexShader = r4, this.fragmentShader = e4, this._locations = t3, this._locationInfo = o8, this._uniformBindings = i6, this._transformFeedbackBindings = s4;
  }
  destroy() {
    this._program && this._program.dispose(), this.cleanupTemporaryTextures();
  }
  get locations() {
    return this._locations;
  }
  get locationInfo() {
    return this._locationInfo;
  }
  setUniforms(r4) {
    this._uniforms = r4;
  }
  cleanupTemporaryTextures() {
    for (const r4 of this._temporaryTextures)
      r4.dispose();
    this._temporaryTextures = [];
  }
  bind(r4) {
    const e4 = this._uniforms;
    if (!this._program) {
      const e5 = /* @__PURE__ */ new Map();
      for (const [r5, o8] of this._locations)
        e5.set(r5, o8);
      const t3 = [];
      for (const r5 of this._transformFeedbackBindings ?? []) {
        const { index: e6, propertyKey: o8 } = r5;
        t3[e6] = `v_${o8}`;
      }
      this._program = new r$a(r4, this.vertexShader, this.fragmentShader, e5, /* @__PURE__ */ new Map(), t3);
    }
    const s4 = this._program;
    r4.useProgram(s4);
    for (const o8 of this._uniformBindings) {
      const { shaderModulePath: a6, uniformName: f5, uniformType: m4, uniformArrayLength: c5 } = o8, l5 = t$a(a6, e4);
      if (null == l5) {
        if ("sampler2D" === m4)
          continue;
        throw new Error(`Failed to find uniform value for ${a6}`);
      }
      switch ("array" === m4 ? o8.uniformArrayElementType : m4) {
        case "sampler2D": {
          const { unit: e5, texture: t3 } = l5;
          if (s4.setUniform1i(f5, e5), "type" in t3)
            r4.bindTexture(t3, e5);
          else {
            const o9 = T$4(r4, t3.descriptor, t3.data);
            r4.bindTexture(o9, e5);
          }
          break;
        }
        case "int":
          if (!c5) {
            s4.setUniform1i(f5, l5);
            break;
          }
          n$5(o8.uniformName, l5, c5), s4.setUniform1iv(f5, l5);
          break;
        case "float":
          if (!c5) {
            s4.setUniform1f(f5, l5);
            break;
          }
          n$5(o8.uniformName, l5, c5), s4.setUniform1fv(f5, l5);
          break;
        case "vec2":
          if (!c5) {
            s4.setUniform2f(f5, l5[0], l5[1]);
            break;
          }
          n$5(o8.uniformName, l5, c5), s4.setUniform2fv(f5, l5.flat());
          break;
        case "vec3":
          if (!c5) {
            s4.setUniform3f(f5, l5[0], l5[1], l5[2]);
            break;
          }
          n$5(o8.uniformName, l5, c5), s4.setUniform3fv(f5, l5.flat());
          break;
        case "vec4":
          if (!c5) {
            s4.setUniform4f(f5, l5[0], l5[1], l5[2], l5[3]);
            break;
          }
          n$5(o8.uniformName, l5, c5), s4.setUniform4fv(f5, l5.flat());
          break;
        case "mat3":
          s4.setUniformMatrix3fv(f5, l5.flat());
          break;
        case "mat4":
          s4.setUniformMatrix4fv(f5, l5.flat());
          break;
        default:
          throw new Error(`Unable to set uniform for type ${m4}`);
      }
    }
  }
};
function h$7(t3) {
  return new t3();
}
function f$5(t3, e4, r4) {
  const o8 = t3.constructor[e4] ?? [];
  t3.constructor.hasOwnProperty(e4) || Object.defineProperty(t3.constructor, e4, { value: o8.slice() }), t3.constructor[e4].push(r4);
}
function l$3(t3, e4) {
  return (r4, o8) => {
    f$5(r4, "locations", { typeCtor: e4, propertyKey: o8, parameterIndex: null, index: t3 });
  };
}
const m$2 = (t3) => (e4, r4) => {
  f$5(e4, "builtins", { builtin: t3, propertyKey: r4 });
}, g$6 = (t3) => (e4, r4, o8) => {
  f$5(e4, "inputs", { inputCtor: t3, propertyKey: r4, parameterIndex: o8 });
}, _$5 = (t3) => (e4, r4) => {
  f$5(e4, "uniforms", { typeCtor: t3, propertyKey: r4 });
}, K = (t3) => (e4, r4) => {
  f$5(e4, "options", { typeCtor: t3, propertyKey: r4 });
}, x$4 = (t3, e4) => {
  f$5(t3, "defines", { propertyKey: e4 });
};
const I$2 = (t3, e4) => (r4, o8) => {
  r4.constructor.builtins.push({ builtin: t3, propertyKey: o8, typeCtor: e4 });
};
let b$4 = class b {
};
b$4.builtins = [], e$c([I$2("gl_VertexID", O$1)], b$4.prototype, "glVertexID", void 0);
let v$3 = class v {
};
let w$3 = class w2 {
};
w$3.builtins = [], e$c([I$2("gl_FragCoord", H$1)], w$3.prototype, "glFragCoord", void 0), e$c([I$2("gl_PointCoord", C$1)], w$3.prototype, "glPointCoord", void 0);
let F$4 = class F {
};
e$c([m$2("gl_FragColor")], F$4.prototype, "glFragColor", void 0);
let P$4 = class P {
  constructor() {
    this.type = "uniform-group";
  }
  get _uniforms() {
    return this.constructor.uniforms ?? [];
  }
};
let j$4 = class j2 {
  constructor() {
    this.logShader = false, this.computeAttributes = {};
  }
  get vertexInput() {
    const t3 = f$d(this._shaderModuleClass.inputs, (t4) => "vertex" === t4.propertyKey && 0 === t4.parameterIndex);
    if (!t3)
      throw new Error("Unable to find vertex input parameter");
    return t3;
  }
  get computeInput() {
    return f$d(this._shaderModuleClass.inputs, (t3) => "vertex" === t3.propertyKey && 1 === t3.parameterIndex);
  }
  get fragmentInput() {
    const t3 = f$d(this._shaderModuleClass.inputs, (t4) => "fragment" === t4.propertyKey);
    if (!t3)
      throw new Error("Unable to find fragment input parameter");
    return t3;
  }
  get transformFeedbackBindings() {
    return this.fragmentInput.inputCtor.transformFeedbackBindings ?? [];
  }
  get locations() {
    return [...this.vertexInput.inputCtor.locations, ...this.computeInput?.inputCtor.locations ?? []];
  }
  get locationsMap() {
    const t3 = /* @__PURE__ */ new Map(), e4 = /* @__PURE__ */ new Set();
    for (const o8 of this.locations)
      e4.has(o8.index) ? s$f.getLogger("esri.views.2d.engine.webgl.shaderGraph.GraphShaderModule").warnOnce("mapview-rendering", `Unable to assigned attribute ${o8.propertyKey} to ${o8.index}. Index already in use`, { locationsMap: t3 }) : (t3.set(o8.propertyKey, o8.index), e4.add(o8.index));
    return t3;
  }
  get locationInfo() {
    if (!this._locationInfo) {
      const t3 = this.locationsMap, e4 = Array.from(t3.entries()).map(([t4, e5]) => `${t4}.${e5}`).join("."), r4 = c$9(e4);
      this._locationInfo = { hash: r4, locations: t3 };
    }
    return this._locationInfo;
  }
  get renamedLocationsMap() {
    const t3 = /* @__PURE__ */ new Map();
    for (const e4 of this.locations)
      t3.set("a_" + e4.propertyKey, e4.index);
    return t3;
  }
  get optionPropertyKeys() {
    if (!this._optionPropertyKeys) {
      const t3 = /* @__PURE__ */ new Set();
      for (const e4 of this._options)
        t3.add(e4.propertyKey);
      this._optionPropertyKeys = t3;
    }
    return this._optionPropertyKeys;
  }
  get _shaderModuleClass() {
    return this.constructor;
  }
  get _defines() {
    return this._shaderModuleClass.defines ?? [];
  }
  get _options() {
    return this._shaderModuleClass.options ?? [];
  }
  get _uniforms() {
    return this._shaderModuleClass.uniforms ?? [];
  }
  getProgram(t3, e4, r4, o8) {
    try {
      const { vertex: n6, fragment: s4, uniformBindings: i6 } = this._generateShaders(t3, e4, r4, o8);
      return new a$2(n6, s4, this.renamedLocationsMap, this.locationInfo, i6, this.transformFeedbackBindings);
    } catch (n6) {
      return console.error("Failed to create program", { error: n6 }), new a$2("", "", this.renamedLocationsMap, this.locationInfo, [], this.transformFeedbackBindings);
    }
  }
  getDebugUniformClassInfo(t3) {
    const e4 = this._options.find((e5) => e5.propertyKey === t3);
    if (e4)
      return { type: "option", className: e4.typeCtor };
    const r4 = this._uniforms.find((e5) => e5.propertyKey === t3);
    if (!r4)
      throw new Error(`Unable to find uniform class type for property: ${t3}`);
    return { type: "required", className: r4.typeCtor };
  }
  getShaderKey(t3, e4, r4, o8) {
    const n6 = Object.keys(r4).map((t4) => `${t4}.${r4[t4]}`).join("."), s4 = Object.keys(o8).map((t4) => `${t4}.${o8[t4]}`).join("."), i6 = Object.keys(e4).filter((t4) => this.optionPropertyKeys.has(t4) && e4[t4]).join(".");
    return `${this.constructor.name}.${t3.hash}.${n6}.${s4}.${i6}`;
  }
  _generateShaders(t3, e4, r4, o8) {
    const n6 = [];
    this._setDefines(r4), this._setOptionalUniforms(n6, e4), this._setRequiredUniforms(n6);
    const s4 = this._hydrateVertexInput(o8), i6 = this._injectPackPrecisionFactor(s4, t3), p7 = this._hydrateComputeInput(), a6 = p7 && this._injectPackPrecisionFactor(p7, t3), d4 = this.vertex(i6, a6), h6 = this._hydrateFragmentInput(d4), f5 = this.fragment(h6), l5 = /* @__PURE__ */ new Set();
    for (const c5 in f5) {
      const t4 = f5[c5];
      e$5(l5, t4);
    }
    const m4 = this._getVertexInputBuiltins(), g4 = o$4.createVertex({ ...s4, ...p7 }, d4, m4, n6, this.transformFeedbackBindings, l5);
    new r$3().write(g4);
    const _2 = this._getFragmentInputBuiltins(f5);
    _2.set("glPointCoord", "gl_PointCoord");
    const K2 = o$4.createFragment(h6, f5, _2, n6, g4, this.transformFeedbackBindings);
    new r$3().write(K2);
    const x5 = this._createShaderBuilder(g4, K2), C2 = x5.generate("vertex", false), I2 = x5.generate("fragment", false);
    return this.logShader && (console.log(C2), console.log(I2)), { vertex: C2, fragment: I2, uniformBindings: n6 };
  }
  _setDefines(t3) {
    for (const e4 in t3)
      this[e4] = t3[e4];
  }
  _setOptionalUniforms(t3, e4) {
    for (const r4 of this._options) {
      e4[r4.propertyKey] ? this[r4.propertyKey] = this._hydrateUniformGroup(t3, r4) : this[r4.propertyKey] = null;
    }
  }
  _setRequiredUniforms(t3) {
    for (const e4 of this._uniforms)
      this[e4.propertyKey] = this._hydrateUniformGroup(t3, e4);
  }
  _hydrateUniformGroup(t3, e4) {
    const r4 = new e4.typeCtor();
    for (const o8 of r4._uniforms ?? []) {
      const n6 = h$7(o8.typeCtor), s4 = `u_${e4.propertyKey}_${o8.propertyKey}`, i6 = n6.type, p7 = [e4.propertyKey, o8.propertyKey].join(".");
      if ("type" in o8.typeCtor && "array" === o8.typeCtor.type) {
        const e5 = n6;
        t3.push({ shaderModulePath: p7, uniformName: s4, uniformType: i6, uniformArrayLength: e5.size, uniformArrayElementType: e5.elementType.type, uniformHydrated: n6 });
      } else
        t3.push({ shaderModulePath: p7, uniformName: s4, uniformType: i6, uniformHydrated: n6 });
      r4[o8.propertyKey] = n6;
    }
    return r4;
  }
  _hydrateVertexInput(t3) {
    const e4 = this.vertexInput.inputCtor, r4 = e4.locations.reduce((e5, r5) => false === t3[r5.propertyKey] ? e5 : { ...e5, [r5.propertyKey]: h$7(r5.typeCtor) }, {});
    for (const { propertyKey: o8, typeCtor: n6 } of e4.builtins) {
      const t4 = h$7(n6);
      r4[o8] = t4;
    }
    return r4;
  }
  _hydrateComputeInput() {
    if (null == this.computeInput)
      return null;
    return this.computeInput.inputCtor.locations.reduce((t3, e4) => ({ ...t3, [e4.propertyKey]: h$7(e4.typeCtor) }), {});
  }
  _injectPackPrecisionFactor(t3, e4) {
    const r4 = {};
    for (const o8 in t3) {
      const n6 = t3[o8], i6 = e4.attributes.find((t4) => t4.name === o8);
      if (i6?.packPrecisionFactor) {
        if ("float" !== n6.type && "vec2" !== n6.type && "vec3" !== n6.type && "vec4" !== n6.type)
          throw new Error(`InternalError: packPrecisionFactor requires GenType, but found ${n6.type}`);
        r4[o8] = n6.divide(new j$5(i6.packPrecisionFactor));
      } else
        r4[o8] = n6;
    }
    return r4;
  }
  _hydrateFragmentInput(t3) {
    const e4 = {};
    for (const r4 in t3)
      e4[r4] = t3[r4];
    for (const { propertyKey: r4, typeCtor: o8 } of w$3.builtins) {
      const t4 = h$7(o8);
      e4[r4] = t4;
    }
    return e4;
  }
  _getVertexInputBuiltins() {
    const t3 = this.vertexInput.inputCtor, e4 = /* @__PURE__ */ new Map();
    for (const { builtin: r4, propertyKey: o8 } of t3.builtins)
      e4.set(o8, r4);
    return e4;
  }
  _getFragmentInputBuiltins(t3) {
    const e4 = t3.constructor, r4 = /* @__PURE__ */ new Map();
    for (const o8 of e4.builtins ?? [])
      r4.set(o8.propertyKey, o8.builtin);
    return r4;
  }
  _createShaderBuilder(t3, e4) {
    const r4 = new o$6();
    return this._insertDebugInfo(r4), t3.insertVertexShader(r4), e4.insertFragmentShader(r4), r4;
  }
  _insertDebugInfo(t3) {
    t3.vertex.code.add("// DEFINES: "), t3.vertex.code.add("// --------------------------------------------------------- ");
    for (const e4 of this._defines)
      this[e4.propertyKey] ? t3.vertex.code.add(`//   ${e4.propertyKey}: true`) : t3.vertex.code.add(`//   ${e4.propertyKey}: false`);
    t3.vertex.code.add(""), t3.vertex.code.add("// OPTIONS: "), t3.vertex.code.add("// --------------------------------------------------------- ");
    for (const e4 of this._options)
      this[e4.propertyKey] ? t3.vertex.code.add(`//   ${e4.propertyKey}: true`) : t3.vertex.code.add(`//   ${e4.propertyKey}: false`);
  }
};
function g$5(t3) {
  const e4 = ct(12.9898), l5 = ct(78.233), s4 = ct(43758.5453), f5 = ln(t3, it(e4, l5)), m4 = jn(f5, ct(3.14));
  return bn(Wn(m4).multiply(s4));
}
function h$6(t3) {
  return Bt(t3, ct(k$4));
}
function b$3(t3, n6) {
  return t3.x.multiply(n6.y).subtract(n6.x.multiply(t3.y));
}
function d$3(t3) {
  return t3.multiply(2).subtract(1);
}
function j$3(t3, r4) {
  const u4 = ct(2 ** r4);
  return jn(vn(t3.divide(u4)), ct(2));
}
function z$3(t3, r4) {
  return Ct(j$3(t3, r4), ct(0.5));
}
function v$2(n6, r4) {
  return j$3(n6, r4 + l$d.length);
}
function w$2(t3, n6) {
  return j$3(t3, n6);
}
function R$4(t3) {
  const r4 = j$3(t3.z, 7), u4 = ct(1).subtract(r4), i6 = t3.xyz.subtract(ut(0, 0, ct(128)));
  return u4.multiply(t3).add(r4.multiply(i6));
}
function k$3(t3) {
  const n6 = ot(255 / 256, 255 / 65536, 255 / 16777216, 255 / 4294967296);
  return ln(t3, n6);
}
function q$3(t3) {
  return Bn(Bn(Bn(t3.x, t3.y), t3.z), t3.w);
}
let p$4 = class p3 extends P$4 {
  getVisualVariableData(t3) {
    if (!this._vvData) {
      const a6 = this.getAttributeDataCoords(t3);
      this._vvData = se(this.visualVariableData, a6).setDebugName("storage2");
    }
    return this._vvData;
  }
  getAttributeDataCoords(t3) {
    if (!this._uv) {
      const a6 = R$4(t3), e4 = this.size, i6 = rt(a6.x), g4 = rt(a6.y).multiply(rt(256)), l5 = rt(a6.z).multiply(rt(256)).multiply(rt(256)), n6 = ct(i6.add(g4).add(l5)), p7 = jn(n6, e4), d4 = n6.subtract(p7).divide(e4);
      this._uv = new C$1(p7, d4).add(0.5).divide(e4);
    }
    return this._uv;
  }
  getFilterData(t3) {
    const a6 = this.getAttributeDataCoords(t3);
    return se(this.filterFlags, a6).setDebugName("storage0");
  }
  getAnimationData(t3) {
    const a6 = this.getAttributeDataCoords(t3);
    return se(this.animation, a6).setDebugName("storage1");
  }
  getVVData(t3) {
    return this.getVisualVariableData(t3);
  }
  getDataDrivenData0(t3) {
    const a6 = this.getAttributeDataCoords(t3);
    return se(this.dataDriven0, a6).setDebugName("storage30");
  }
  getDataDrivenData1(t3) {
    const a6 = this.getAttributeDataCoords(t3);
    return se(this.dataDriven1, a6).setDebugName("storage31");
  }
  getDataDrivenData2(t3) {
    const a6 = this.getAttributeDataCoords(t3);
    return se(this.dataDriven2, a6).setDebugName("storage32");
  }
  getGPGPUData(t3) {
    const a6 = this.getAttributeDataCoords(t3);
    return se(this.gpgpu, a6).setDebugName("storage4");
  }
  getFilterFlags(t3) {
    return has("webgl-ignores-sampler-precision") ? Wt(this.getFilterData(t3).x.multiply(ct(255))) : this.getFilterData(t3).x.multiply(ct(255));
  }
  getAnimationValue(t3) {
    return this.getAnimationData(t3).x;
  }
  getSizeValue(t3) {
    return this.getVisualVariableData(t3).x;
  }
  getColorValue(t3) {
    return this.getVisualVariableData(t3).y;
  }
  getOpacityValue(t3) {
    return this.getVisualVariableData(t3).z;
  }
  getRotationValue(t3) {
    return this.getVisualVariableData(t3).w;
  }
};
e$c([_$5(S$6)], p$4.prototype, "filterFlags", void 0), e$c([_$5(S$6)], p$4.prototype, "animation", void 0), e$c([_$5(S$6)], p$4.prototype, "gpgpu", void 0), e$c([_$5(S$6)], p$4.prototype, "visualVariableData", void 0), e$c([_$5(S$6)], p$4.prototype, "dataDriven0", void 0), e$c([_$5(S$6)], p$4.prototype, "dataDriven1", void 0), e$c([_$5(S$6)], p$4.prototype, "dataDriven2", void 0), e$c([_$5(j$5)], p$4.prototype, "size", void 0);
let e$3 = class e extends P$4 {
};
e$c([_$5(j$5)], e$3.prototype, "activeReasons", void 0), e$c([_$5(j$5)], e$3.prototype, "highlightAll", void 0);
let e$2 = class e2 extends P$4 {
};
e$c([_$5(C$1)], e$2.prototype, "position", void 0), e$c([_$5(j$5)], e$2.prototype, "distance", void 0), e$c([_$5(j$5)], e$2.prototype, "smallSymbolDistance", void 0), e$c([_$5(j$5)], e$2.prototype, "smallSymbolSizeThreshold", void 0);
let d$2 = class d2 extends P$4 {
};
e$c([_$5(tt)], d$2.prototype, "displayViewScreenMat3", void 0), e$c([_$5(tt)], d$2.prototype, "displayViewMat3", void 0), e$c([_$5(tt)], d$2.prototype, "displayMat3", void 0), e$c([_$5(tt)], d$2.prototype, "viewMat3", void 0), e$c([_$5(tt)], d$2.prototype, "tileMat3", void 0), e$c([_$5(j$5)], d$2.prototype, "displayZoomFactor", void 0), e$c([_$5(j$5)], d$2.prototype, "requiredZoomFactor", void 0), e$c([_$5(C$1)], d$2.prototype, "tileOffset", void 0), e$c([_$5(j$5)], d$2.prototype, "currentScale", void 0), e$c([_$5(j$5)], d$2.prototype, "currentZoom", void 0), e$c([_$5(j$5)], d$2.prototype, "metersPerSRUnit", void 0), e$c([_$5(j$5)], d$2.prototype, "rotation", void 0), e$c([_$5(j$5)], d$2.prototype, "pixelRatio", void 0);
let S$5 = class S2 extends b$4 {
};
e$c([l$3(0, G$2)], S$5.prototype, "id", void 0), e$c([l$3(1, j$5)], S$5.prototype, "bitset", void 0), e$c([l$3(2, C$1)], S$5.prototype, "pos", void 0);
let q$2 = class q2 extends v$3 {
};
e$c([l$3(14, C$1)], q$2.prototype, "nextPos1", void 0), e$c([l$3(15, C$1)], q$2.prototype, "nextPos2", void 0);
let F$3 = class F2 extends w$3 {
};
let P$3 = class P2 extends j$4 {
  clip(t3, i6) {
    let e4 = new j$5(0);
    const o8 = this.storage.getFilterFlags(t3);
    if (e4 = e4.add(ct(2).multiply(ct(1).subtract(v$2(o8, 0)))), this.inside ? e4 = e4.add(ct(2).multiply(ct(1).subtract(v$2(o8, 1)))) : this.outside ? e4 = e4.add(ct(2).multiply(v$2(o8, 1))) : this.highlight && (e4 = e4.add(ct(2).multiply(ct(1).subtract(this._checkHighlight(o8))))), null != i6) {
      const t4 = new j$5(1).subtract(ee(i6.x, this.view.currentZoom)), o9 = ee(i6.y, this.view.currentZoom);
      e4 = e4.add(new j$5(2).multiply(t4.add(o9)));
    }
    return e4;
  }
  getFragmentOutput(t3, i6, e4 = new j$5(1 / 255)) {
    const o8 = new F$4();
    return o8.glFragColor = this._maybeWriteHittest(i6) ?? this._maybeHighlight(t3, e4) ?? t3, o8;
  }
  _maybeHighlight(t3, i6) {
    return this.highlight ? new H$1(t3.rgb, ee(i6, t3.a)) : null;
  }
  _checkHighlight(t3) {
    let e4 = this._checkHighlightBit(t3, 0);
    for (let o8 = 1; o8 < l$d.length; o8++)
      e4 = e4.add(this._checkHighlightBit(t3, o8));
    return ee(new j$5(0.1), e4.add(this.highlight.highlightAll));
  }
  _checkHighlightBit(t3, i6) {
    return w$2(t3, i6).multiply(j$3(this.highlight.activeReasons, i6));
  }
  maybeRunHittest(t3, i6, e4) {
    if (null == this.hittestRequest)
      return null;
    const o8 = this.hittest(t3, i6, e4);
    let s4 = xt(Ct(o8, this.hittestRequest.distance), new j$5(2), new j$5(0));
    const r4 = this.storage.getAttributeDataCoords(t3.id), h6 = d$3(r4);
    s4 = s4.add(this.clip(t3.id, t3.zoomRange));
    const l5 = new H$1(new j$5(1 / 255), 0, 0, 0);
    return { glPointSize: new j$5(1), glPosition: new H$1(h6, s4, 1), color: l5 };
  }
  _maybeWriteHittest(t3) {
    return null != this.hittestRequest ? t3.color : null;
  }
};
e$c([x$4], P$3.prototype, "inside", void 0), e$c([x$4], P$3.prototype, "outside", void 0), e$c([K(e$3)], P$3.prototype, "highlight", void 0), e$c([_$5(p$4)], P$3.prototype, "storage", void 0), e$c([_$5(d$2)], P$3.prototype, "view", void 0), e$c([K(e$2)], P$3.prototype, "hittestRequest", void 0);
function v$1(n6, r4) {
  return ln(n6, Gn(r4));
}
function j$2(t3, u4, s4) {
  const l5 = s4.subtract(u4), c5 = v$1(t3.subtract(u4), l5), e4 = Zt(c5.divide(kn(l5)), new j$5(0), new j$5(1));
  return sn(t3, u4.add(e4.multiply(s4.subtract(u4))));
}
function g$4(t3) {
  const u4 = Xt(t3);
  return ee(u4.x.add(u4.y).add(u4.z), new j$5(1.05));
}
function h$5(t3, u4, n6, i6) {
  const y4 = new tt(n6.x.multiply(i6.y).subtract(i6.x.multiply(n6.y)), i6.x.multiply(u4.y).subtract(u4.x.multiply(i6.y)), u4.x.multiply(n6.y).subtract(n6.x.multiply(u4.y)), n6.y.subtract(i6.y), i6.y.subtract(u4.y), u4.y.subtract(n6.y), i6.x.subtract(n6.x), u4.x.subtract(i6.x), n6.x.subtract(u4.x)), s4 = u4.x.multiply(n6.y.subtract(i6.y)), l5 = n6.x.multiply(i6.y.subtract(u4.y)), a6 = i6.x.multiply(u4.y.subtract(n6.y)), o8 = s4.add(l5).add(a6);
  return new j$5(1).divide(o8).multiply(y4.multiply(new G$2(1, t3)));
}
function M$1(t3, u4, n6, i6) {
  return Bt(g$4(h$5(t3, u4, n6, i6)), new j$5(1));
}
function P$2(t3, u4, n6, i6) {
  const y4 = n6.subtract(u4), s4 = i6.subtract(u4), l5 = b$3(y4, s4), c5 = Rt(St(l5, new j$5(u$5)), Ct(l5, new j$5(-u$5)));
  return gt([Rt(Hn(c5), M$1(t3.xy, u4, n6, i6)), new j$5(-1)], [true, () => {
    const r4 = j$2(t3, u4, n6), y5 = j$2(t3, n6, i6), s5 = j$2(t3, i6, u4);
    return Un(Un(r4, y5), s5);
  }]);
}
function q$1(t3) {
  return t3.distance.add(1);
}
function z$2(t3, u4, n6) {
  const { viewMat3: r4, tileMat3: i6 } = t3.view, y4 = r4.multiply(i6), s4 = y4.multiply(new G$2(u4.pos, 1)), l5 = y4.multiply(new G$2(n6.nextPos1, 1)), c5 = y4.multiply(new G$2(n6.nextPos2, 1));
  return P$2(t3.hittestRequest.position, s4.xy, l5.xy, c5.xy);
}
function R$3(t3, u4, n6) {
  return sn(t3, n6).subtract(u4);
}
let f$4 = class f2 extends P$4 {
  getColor(s4, t3, o8) {
    return gt([Ht(h$6(s4), o8), t3], [jt(s4, this.values.first()), this.colors.first()], [Gt(s4, this.values.last()), this.colors.last()], [true, () => {
      const t4 = this.values.findIndex((t5) => Ct(t5, s4)), o9 = this.values.get(t4), r4 = t4.subtract(1), e4 = this.values.get(r4), i6 = s4.subtract(e4).divide(o9.subtract(e4));
      return Sn(this.colors.get(r4), this.colors.get(t4), i6);
    }]);
  }
};
e$c([_$5(U.ofType(H$1, 8))], f$4.prototype, "colors", void 0), e$c([_$5(U.ofType(j$5, 8))], f$4.prototype, "values", void 0);
let h$4 = class h3 extends P$4 {
  getOpacity(t3) {
    return gt([h$6(t3), new j$5(1)], [jt(t3, this.opacityValues.first()), this.opacities.first()], [Gt(t3, this.opacityValues.last()), this.opacities.last()], [true, () => {
      const s4 = this.opacityValues.findIndex((s5) => Ct(s5, t3)), i6 = this.opacityValues.get(s4), e4 = s4.subtract(1), o8 = this.opacityValues.get(e4), a6 = t3.subtract(o8).divide(i6.subtract(o8));
      return Sn(this.opacities.get(e4), this.opacities.get(s4), a6);
    }]);
  }
};
e$c([_$5(U.ofType(j$5, 8))], h$4.prototype, "opacities", void 0), e$c([_$5(U.ofType(j$5, 8))], h$4.prototype, "opacityValues", void 0);
function l$2(a6) {
  return null != a6.visualVariableSizeMinMaxValue || null != a6.visualVariableSizeScaleStops || null != a6.visualVariableSizeStops || null != a6.visualVariableSizeUnitValue;
}
function t$1(a6, e4, i6) {
  if (l$2(a6)) {
    const l5 = a6.storage.getSizeValue(e4);
    return a6.visualVariableSizeMinMaxValue?.getSize(l5, i6) ?? a6.visualVariableSizeScaleStops?.getSizeForViewScale(a6.view.currentScale) ?? a6.visualVariableSizeStops?.getSize(l5, i6) ?? a6.visualVariableSizeUnitValue?.getSize(l5, i6);
  }
  return i6;
}
function r$2(e4, i6, l5, t3 = new Y(false)) {
  if (null == e4.visualVariableColor)
    return l5;
  const r4 = e4.storage.getColorValue(i6);
  return e4.visualVariableColor.getColor(r4, l5, t3);
}
function u$2(a6, i6) {
  if (null == a6.visualVariableOpacity)
    return new j$5(1);
  const l5 = a6.storage.getOpacityValue(i6);
  return a6.visualVariableOpacity.getOpacity(l5);
}
function n$4(a6, e4) {
  if (null == a6.visualVariableRotation)
    return tt.identity();
  const l5 = a6.storage.getRotationValue(e4);
  return a6.visualVariableRotation.getVVRotationMat3(l5);
}
let g$3 = class g extends S$5 {
};
e$c([l$3(3, H$1)], g$3.prototype, "color", void 0), e$c([l$3(4, C$1)], g$3.prototype, "zoomRange", void 0);
let x$3 = class x2 extends P$3 {
  constructor() {
    super(...arguments), this.computeAttributes = { pos: ["nextPos1", "nextPos2"] };
  }
  vertex(t3, o8) {
    const r4 = u$2(this, t3.id), e4 = r$2(this, t3.id, t3.color).multiply(r4), i6 = this.view.displayViewScreenMat3.multiply(new G$2(t3.pos.xy, 1)), p7 = this.clip(t3.id, t3.zoomRange);
    return { glPosition: new H$1(i6.xy, p7, 1), color: e4, ...this.maybeRunHittest(t3, o8, null) };
  }
  fragment(t3) {
    return this.getFragmentOutput(t3.color, t3, new j$5(0));
  }
  hittest(t3, o8) {
    return z$2(this, t3, o8);
  }
};
e$c([K(f$4)], x$3.prototype, "visualVariableColor", void 0), e$c([K(h$4)], x$3.prototype, "visualVariableOpacity", void 0), e$c([t$b(0, g$6(g$3)), t$b(1, g$6(q$2))], x$3.prototype, "vertex", null), e$c([t$b(0, g$6(F$3))], x$3.prototype, "fragment", null);
let n$3 = class n4 extends P$4 {
  getPatternOffsetAtTileOrigin(t3, i6 = new j$5(0), l5 = new j$5(1)) {
    const n6 = new C$1(K$2).divide(t3);
    let p7 = t3.multiply(bn(this.maxIntsToLocalOrigin.multiply(n6))).add(this.tileOffsetFromLocalOrigin).subtract(new j$5(0.5).multiply(t3));
    return p7 = new C$1(p7.x.multiply(l5).subtract(p7.y.multiply(i6)), p7.x.multiply(i6).add(p7.y.multiply(l5))), jn(p7, t3);
  }
};
e$c([_$5(C$1)], n$3.prototype, "tileOffsetFromLocalOrigin", void 0), e$c([_$5(C$1)], n$3.prototype, "maxIntsToLocalOrigin", void 0);
let p$3 = class p4 extends P$4 {
};
e$c([_$5(C$1)], p$3.prototype, "size", void 0), e$c([_$5(S$6)], p$3.prototype, "texture", void 0);
let P$1 = class P3 extends g$3 {
};
e$c([l$3(5, H$1)], P$1.prototype, "tlbr", void 0), e$c([l$3(6, j$5)], P$1.prototype, "width", void 0), e$c([l$3(7, j$5)], P$1.prototype, "height", void 0), e$c([l$3(8, C$1)], P$1.prototype, "offset", void 0), e$c([l$3(9, C$1)], P$1.prototype, "scale", void 0), e$c([l$3(10, j$5)], P$1.prototype, "angle", void 0);
class Z2 extends F$3 {
}
function _$4(t3, e4, o8, i6, r4) {
  const l5 = Bt(j$3(r4, C$2), ct(1)), s4 = k$3(new H$1(t3, 0));
  return xt(l5, lt(i6.divide(e4.x), o8.divide(e4.y), 0, yt(o8.divide(e4.x)), i6.divide(e4.y), 0, g$5(it(s4, 0)), g$5(it(0, s4)), 1), lt(i6.divide(e4.x), o8.divide(e4.y), 0, yt(o8.divide(e4.x)), i6.divide(e4.y), 0, 0, 0, 1));
}
function B$2(t3, e4) {
  const i6 = Sn(new C$1(1), new C$1(1 / l$c), new C$1(j$3(e4.bitset, E$3), j$3(e4.bitset, D$3))), r4 = t3.view.requiredZoomFactor, l5 = new C$1(e4.width, e4.height).multiply(i6), f5 = l5.multiply(e4.scale).multiply(r4), y4 = e4.angle.multiply(c$4), c5 = Wn(y4), v3 = tn(y4), x5 = _$4(e4.id, f5, c5, v3, e4.bitset), h6 = t3.localTileOffset.getPatternOffsetAtTileOrigin(l5, c5, v3), g4 = r4.multiply(e4.scale).multiply(e4.offset.subtract(h6)).divide(f5), w4 = new G$2(e4.pos, 1), b3 = x5.multiply(w4).xy.subtract(g4), j4 = e4.tlbr.divide(t3.mosaicInfo.size.xyxy);
  let O3 = j$3(e4.bitset, q$5);
  return null != t3.visualVariableColor && (O3 = xt(h$6(t3.storage.getColorValue(e4.id)), new j$5(0), O3)), { tileTextureCoord: b3, tlbr: j4, sampleAlphaOnly: O3 };
}
function D$1(t3, e4) {
  const o8 = jn(e4.tileTextureCoord, new j$5(1)), i6 = Sn(e4.tlbr.xy, e4.tlbr.zw, o8);
  let r4 = se(t3.mosaicInfo.texture, i6);
  return r4 = xt(Ct(e4.sampleAlphaOnly, new j$5(0.5)), r4.aaaa, r4), e4.color.multiply(r4);
}
let E$2 = class E extends x$3 {
  vertex(t3, e4) {
    return { ...super.vertex(t3, e4), ...B$2(this, t3) };
  }
  fragment(t3) {
    const e4 = D$1(this, t3);
    return this.getFragmentOutput(e4, t3, new j$5(0));
  }
};
e$c([_$5(p$3)], E$2.prototype, "mosaicInfo", void 0), e$c([_$5(n$3)], E$2.prototype, "localTileOffset", void 0), e$c([t$b(0, g$6(P$1)), t$b(1, g$6(q$2))], E$2.prototype, "vertex", null), e$c([t$b(0, g$6(Z2))], E$2.prototype, "fragment", null);
let m$1 = class m2 extends P$4 {
  getSize(t3, e4) {
    const r4 = this.minMaxValueAndSize.xy, o8 = this.minMaxValueAndSize.zw;
    return xt(h$6(t3), e4, () => {
      const e5 = t3.subtract(r4.x).divide(r4.y.subtract(r4.x)), s4 = Zt(e5, new j$5(0), new j$5(1));
      return o8.x.add(s4.multiply(o8.y.subtract(o8.x)));
    });
  }
};
e$c([_$5(H$1)], m$1.prototype, "minMaxValueAndSize", void 0);
let p$2 = class p5 extends P$4 {
  getSizeForViewScale(s4) {
    return gt([jt(s4, this.values.first()), this.sizes.first()], [Gt(s4, this.values.last()), this.sizes.last()], [true, () => {
      const t3 = this.values.findIndex((t4) => Ct(t4, s4)), e4 = this.values.get(t3), i6 = t3.subtract(1), r4 = this.values.get(i6), o8 = s4.subtract(r4).divide(e4.subtract(r4));
      return Sn(this.sizes.get(i6), this.sizes.get(t3), o8);
    }]);
  }
};
e$c([_$5(U.ofType(j$5, 8))], p$2.prototype, "sizes", void 0), e$c([_$5(U.ofType(j$5, 8))], p$2.prototype, "values", void 0);
let f$3 = class f3 extends P$4 {
  getSize(s4, t3) {
    const e4 = gt([h$6(s4), t3], [jt(s4, this.values.first()), this.sizes.first()], [Gt(s4, this.values.last()), this.sizes.last()], [true, () => {
      const t4 = this.values.findIndex((t5) => Ct(t5, s4)), e5 = this.values.get(t4), i6 = t4.subtract(1), r4 = this.values.get(i6), o8 = s4.subtract(r4).divide(e5.subtract(r4));
      return Sn(this.sizes.get(i6), this.sizes.get(t4), o8);
    }]);
    return xt(h$6(e4), t3, e4);
  }
};
e$c([_$5(U.ofType(j$5, 8))], f$3.prototype, "sizes", void 0), e$c([_$5(U.ofType(j$5, 8))], f$3.prototype, "values", void 0);
let l$1 = class l3 extends P$4 {
  getSize(t3, o8) {
    return xt(h$6(t3), o8, t3.multiply(this.unitValueToPixelsRatio));
  }
};
e$c([_$5(j$5)], l$1.prototype, "unitValueToPixelsRatio", void 0);
class q3 extends S$5 {
}
e$c([l$3(3, H$1)], q3.prototype, "color", void 0), e$c([l$3(4, C$1)], q3.prototype, "offset", void 0), e$c([l$3(5, C$1)], q3.prototype, "normal", void 0), e$c([l$3(6, j$5)], q3.prototype, "halfWidth", void 0), e$c([l$3(7, j$5)], q3.prototype, "referenceHalfWidth", void 0), e$c([l$3(8, C$1)], q3.prototype, "zoomRange", void 0);
let A$1 = class A extends F$3 {
};
let F$2 = class F3 extends P$4 {
};
function k$2(t3) {
  return Bn(new j$5(h$b).multiply(ee(t3, new j$5(n$8))), new j$5(1));
}
function D(t3, i6) {
  const { halfWidth: e4, normal: o8 } = t3, l5 = k$2(e4), a6 = kn(o8).multiply(e4);
  return Zt(l5.multiply(e4.subtract(a6)).divide(i6.add(l5).subtract(new j$5(1))), new j$5(0), new j$5(1));
}
function G$1(t3, i6) {
  const { id: e4, halfWidth: o8, referenceHalfWidth: l5 } = i6;
  if (l$2(t3)) {
    const i7 = new j$5(2).multiply(l5), a6 = t$1(t3, e4, i7);
    return new j$5(0.5).multiply(o8.divide(Bn(l5, new j$5(s$8)))).multiply(a6);
  }
  return o8;
}
function T$2(t3, i6) {
  const { id: e4, offset: o8, pos: l5, normal: a6, zoomRange: r4 } = i6, { displayViewScreenMat3: s4, displayViewMat3: n6 } = t3.view, c5 = r$2(t3, e4, i6.color), f5 = u$2(t3, e4), h6 = G$1(t3, i6), v3 = new j$5(0.5).multiply(t3.antialiasingControls.antialiasing), w4 = Bn(h6.add(v3), new j$5(0.45)).add(new j$5(0.1).multiply(v3)), V2 = k$2(w4).multiply(w4).multiply(o8), b3 = n6.multiply(new G$2(V2, new j$5(0))), S6 = s4.multiply(new G$2(l5, new j$5(1))).add(b3), x5 = new j$5(2).multiply(ee(h6, new j$5(0))).add(t3.clip(e4, r4)), g4 = new H$1(S6.xy, x5, 1);
  return { color: c5, opacity: f5, halfWidth: w4, normal: a6, scaledOffset: V2, scaledHalfWidth: h6, glPosition: new H$1(g4.xy, x5, 1) };
}
function _$3(t3, i6) {
  const { opacity: e4, color: o8 } = t3, l5 = D(t3, i6);
  return e4.multiply(o8).multiply(l5);
}
e$c([_$5(j$5)], F$2.prototype, "antialiasing", void 0), e$c([_$5(j$5)], F$2.prototype, "blur", void 0);
let B$1 = class B2 extends P$3 {
  constructor() {
    super(...arguments), this.computeAttributes = { pos: ["nextPos1", "nextPos2"] };
  }
  vertex(t3, i6) {
    const e4 = T$2(this, t3);
    return { ...e4, ...this.maybeRunHittest(t3, i6, e4.halfWidth) };
  }
  fragment(t3) {
    const i6 = _$3(t3, this.antialiasingControls.blur);
    return this.getFragmentOutput(i6, t3);
  }
  hittest(t3, i6, e4) {
    const { viewMat3: o8, tileMat3: l5 } = this.view, a6 = o8.multiply(l5), r4 = a6.multiply(new G$2(t3.pos, 1)), s4 = a6.multiply(new G$2(i6.nextPos1, 1)), n6 = a6.multiply(new G$2(i6.nextPos2, 1)), { distance: p7, smallSymbolDistance: u4, smallSymbolSizeThreshold: y4 } = this.hittestRequest, f5 = ee(e4, y4.multiply(0.5)).multiply(p7.subtract(u4)), h6 = this.hittestRequest.position;
    return Un(j$2(h6, r4.xy, s4.xy), j$2(h6, r4.xy, n6.xy)).subtract(e4).add(f5);
  }
};
e$c([_$5(F$2)], B$1.prototype, "antialiasingControls", void 0), e$c([K(f$4)], B$1.prototype, "visualVariableColor", void 0), e$c([K(h$4)], B$1.prototype, "visualVariableOpacity", void 0), e$c([K(m$1)], B$1.prototype, "visualVariableSizeMinMaxValue", void 0), e$c([K(p$2)], B$1.prototype, "visualVariableSizeScaleStops", void 0), e$c([K(f$3)], B$1.prototype, "visualVariableSizeStops", void 0), e$c([K(l$1)], B$1.prototype, "visualVariableSizeUnitValue", void 0), e$c([t$b(0, g$6(q3)), t$b(1, g$6(q$2))], B$1.prototype, "vertex", null), e$c([t$b(0, g$6(A$1))], B$1.prototype, "fragment", null);
class W extends S$5 {
}
e$c([l$3(3, C$1)], W.prototype, "offset", void 0), e$c([l$3(4, H$1)], W.prototype, "color", void 0), e$c([l$3(5, C$1)], W.prototype, "normal", void 0), e$c([l$3(6, j$5)], W.prototype, "halfWidth", void 0), e$c([l$3(7, j$5)], W.prototype, "referenceHalfWidth", void 0), e$c([l$3(8, C$1)], W.prototype, "zoomRange", void 0);
let R$2 = class R extends A$1 {
};
function A2(t3, o8, i6) {
  const { id: e4, bitset: r4 } = o8, s4 = j$3(r4, B$4), u4 = Ct(s4, new j$5(0.5)), d4 = T$2(t3, o8), c5 = xt(u4, d4.halfWidth, new j$5(0)), f5 = u$2(t3, e4), y4 = r$2(t3, e4, o8.color), V2 = xt(u4, o8.color, y4.multiply(f5)), h6 = t3.view.displayViewScreenMat3.multiply(new G$2(o8.pos.xy, 1)), b3 = t3.clip(o8.id), j4 = new H$1(h6.xy, b3, 1), g4 = xt(u4, d4.glPosition, j4), w4 = i6 && t3.maybeRunHittest(o8, i6, u4);
  return { isOutline: s4, color: V2, opacity: new j$5(1), halfWidth: c5, normal: d4.normal, glPosition: g4, ...w4 };
}
let F$1 = class F4 extends P$3 {
  constructor() {
    super(...arguments), this.computeAttributes = { pos: ["nextPos1", "nextPos2"] };
  }
};
e$c([_$5(F$2)], F$1.prototype, "antialiasingControls", void 0), e$c([K(f$4)], F$1.prototype, "visualVariableColor", void 0), e$c([K(h$4)], F$1.prototype, "visualVariableOpacity", void 0), e$c([K(m$1)], F$1.prototype, "visualVariableSizeMinMaxValue", void 0), e$c([K(p$2)], F$1.prototype, "visualVariableSizeScaleStops", void 0), e$c([K(f$3)], F$1.prototype, "visualVariableSizeStops", void 0), e$c([K(l$1)], F$1.prototype, "visualVariableSizeUnitValue", void 0);
class H extends F$1 {
  vertex(t3, o8) {
    return A2(this, t3, o8);
  }
  fragment(t3) {
    const { color: o8, isOutline: i6 } = t3, e4 = Ct(i6, new j$5(0.5)), r4 = _$3(t3, this.antialiasingControls.blur), s4 = xt(e4, r4, o8), n6 = xt(e4, new j$5(1 / 255), new j$5(0));
    return this.getFragmentOutput(s4, t3, n6);
  }
  hittest(t3, o8, i6) {
    return xt(i6, q$1(this.hittestRequest), z$2(this, t3, o8));
  }
}
e$c([t$b(0, g$6(W)), t$b(1, g$6(q$2))], H.prototype, "vertex", null), e$c([t$b(0, g$6(R$2))], H.prototype, "fragment", null);
let h$3 = class h4 extends g$3 {
};
e$c([l$3(5, H$1)], h$3.prototype, "tlbr", void 0), e$c([l$3(6, j$5)], h$3.prototype, "inverseRasterizationScale", void 0);
let g$2 = class g2 extends F$3 {
};
function j$1(t3) {
  const e4 = new j$5(1), r4 = new j$5(0);
  return new tt(e4.divide(t3.x), r4.divide(t3.y), 0, yt(r4.divide(t3.x)), e4.divide(t3.y), 0, 0, 0, 1);
}
function O2(t3, e4) {
  const r4 = e4.tlbr.xy, o8 = e4.tlbr.zw, i6 = o8.x.subtract(r4.x), n6 = r4.y.subtract(o8.y), a6 = new C$1(i6, n6).multiply(e4.inverseRasterizationScale), p7 = a6.multiply(t3.view.requiredZoomFactor), u4 = j$1(p7), d4 = t3.localTileOffset.getPatternOffsetAtTileOrigin(a6).divide(p7), c5 = new G$2(e4.pos, 1);
  return { tileTextureCoord: u4.multiply(c5).xy.subtract(d4), tlbr: e4.tlbr.divide(t3.mosaicInfo.size.xyxy) };
}
function T$1(t3, e4) {
  const r4 = jn(t3.tileTextureCoord, new j$5(1)), o8 = Sn(t3.tlbr.xy, t3.tlbr.zw, r4), i6 = se(e4.texture, o8);
  return t3.color.multiply(i6);
}
let z$1 = class z extends x$3 {
  vertex(t3, e4) {
    return { ...super.vertex(t3, e4), ...O2(this, t3) };
  }
  fragment(t3) {
    const e4 = T$1(t3, this.mosaicInfo);
    return this.getFragmentOutput(e4, t3, new j$5(0));
  }
};
e$c([_$5(p$3)], z$1.prototype, "mosaicInfo", void 0), e$c([_$5(n$3)], z$1.prototype, "localTileOffset", void 0), e$c([t$b(0, g$6(h$3)), t$b(1, g$6(q$2))], z$1.prototype, "vertex", null), e$c([t$b(0, g$6(g$2))], z$1.prototype, "fragment", null);
let x$2 = class x3 extends W {
};
e$c([l$3(9, H$1)], x$2.prototype, "tlbr", void 0), e$c([l$3(10, j$5)], x$2.prototype, "inverseRasterizationScale", void 0);
let y$1 = class y2 extends R$2 {
};
let S$4 = class S3 extends H {
  vertex(t3, o8) {
    return { ...A2(this, t3, o8), ...O2(this, t3) };
  }
  fragment(t3) {
    const { isOutline: o8 } = t3, r4 = Ct(o8, new j$5(0.5)), e4 = _$3(t3, this.antialiasingControls.blur), s4 = T$1(t3, this.mosaicInfo), n6 = xt(r4, e4, s4), p7 = xt(r4, new j$5(1 / 255), new j$5(0));
    return this.getFragmentOutput(n6, t3, p7);
  }
};
e$c([_$5(p$3)], S$4.prototype, "mosaicInfo", void 0), e$c([_$5(n$3)], S$4.prototype, "localTileOffset", void 0), e$c([t$b(0, g$6(x$2)), t$b(1, g$6(q$2))], S$4.prototype, "vertex", null), e$c([t$b(0, g$6(y$1))], S$4.prototype, "fragment", null);
const S$3 = 16, b$2 = 1 / S$3, w$1 = 128;
class F5 extends S$5 {
}
e$c([l$3(3, H$1)], F5.prototype, "color", void 0), e$c([l$3(4, H$1)], F5.prototype, "tlbr", void 0), e$c([l$3(5, j$5)], F5.prototype, "angle", void 0), e$c([l$3(6, j$5)], F5.prototype, "aux1", void 0), e$c([l$3(7, j$5)], F5.prototype, "aux2", void 0), e$c([l$3(8, C$1)], F5.prototype, "aux3", void 0), e$c([l$3(9, C$1)], F5.prototype, "aux4", void 0), e$c([l$3(10, C$1)], F5.prototype, "zoomRange", void 0);
let R$1 = class R2 extends y$1 {
};
class C extends F$1 {
  vertex(t3, o8) {
    const { aux1: e4, aux2: r4, aux3: i6, aux4: p7 } = t3, a6 = { ...t3, width: e4, height: r4, offset: i6, scale: p7.multiply(b$2) }, m4 = { ...t3, halfWidth: e4.multiply(b$2), referenceHalfWidth: r4.multiply(b$2), offset: i6.multiply(b$2), normal: p7.subtract(w$1).multiply(b$2) }, n6 = A2(this, m4), u4 = B$2(this, a6), h6 = Ct(n6.isOutline, new j$5(0.5));
    return { ...n6, ...u4, ...this.maybeRunHittest(t3, o8, h6) };
  }
  fragment(t3) {
    const { isOutline: o8 } = t3, e4 = Ct(o8, new j$5(0.5)), r4 = _$3(t3, this.antialiasingControls.blur), i6 = D$1(this, t3), a6 = xt(e4, r4, i6), m4 = xt(e4, new j$5(1 / 255), new j$5(0));
    return this.getFragmentOutput(a6, t3, m4);
  }
  hittest(t3, o8, e4) {
    return xt(e4, q$1(this.hittestRequest), z$2(this, t3, o8));
  }
}
e$c([_$5(p$3)], C.prototype, "mosaicInfo", void 0), e$c([_$5(n$3)], C.prototype, "localTileOffset", void 0), e$c([t$b(0, g$6(F5)), t$b(1, g$6(q$2))], C.prototype, "vertex", null), e$c([t$b(0, g$6(R$1))], C.prototype, "fragment", null);
const h$2 = g$7.attributes, f$2 = m$5.attributes, y3 = { createComputedParams: (e4) => e4, attributes: { id: h$2.id, pos: h$2.pos, zoomRange: h$2.zoomRange, tlbr: h$2.tlbr, angle: h$2.angle, color: h$2.color, bitset: { type: C$4.UNSIGNED_BYTE, count: 1, pack: (e4) => m$6(e4) }, aux1: { count: 1, type: C$4.UNSIGNED_SHORT, pack: (e4) => f$9(e4) }, aux2: { count: 1, type: C$4.UNSIGNED_SHORT, pack: (e4) => d$6(e4) }, aux3: { count: 2, type: C$4.SHORT, pack: ({ offsetX: t3, offsetY: r4 }) => [u$a(t3), u$a(r4)] }, aux4: { count: 2, type: C$4.UNSIGNED_BYTE, pack: ({ scaleX: e4, scaleY: t3 }) => [e4 * S$3, t3 * S$3] } } }, x$1 = { createComputedParams: (e4) => e4, attributes: { id: h$2.id, pos: h$2.pos, zoomRange: h$2.zoomRange, tlbr: h$2.tlbr, angle: h$2.angle, color: f$2.color, bitset: { type: C$4.UNSIGNED_BYTE, count: 1, pack: (e4) => l$8([[B$4, true]]) }, aux1: { count: 1, type: C$4.UNSIGNED_SHORT, pack: (t3) => u$a(0.5 * t3.width) * S$3 }, aux2: { count: 1, type: C$4.UNSIGNED_SHORT, pack: (t3) => u$a(0.5 * t3.referenceWidth) * S$3 }, aux3: { count: 2, type: C$4.SHORT, packTessellation: ({ extrusionOffsetX: e4, extrusionOffsetY: t3 }) => [e4 * S$3, t3 * S$3] }, aux4: { count: 2, type: C$4.UNSIGNED_BYTE, packTessellation: ({ normalX: e4, normalY: t3 }) => [e4 * S$3 + w$1, t3 * S$3 + w$1] } } };
let S$2 = class S4 extends p$7 {
  constructor() {
    super(...arguments), this.vertexSpec = x$1;
  }
};
class N extends h$a {
  constructor() {
    super(...arguments), this.vertexSpec = y3;
  }
  _createOutlineWriter(e4, t3, r4, s4) {
    return new S$2(e4, t3, r4, s4);
  }
  _write(e4, r4, s4) {
    const o8 = s4?.asOptimized() ?? r4.readGeometryForDisplay(), i6 = this._clip(o8);
    if (!i6)
      return;
    const a6 = this.evaluatedMeshParams.sprite?.textureBinding;
    e4.recordStart(this.instanceId, this.attributeLayout, a6), this._writeGeometry(e4, r4, i6), this._lineMeshWriter.writeLineVertices(e4, a$c.fromOptimizedCIM(i6, "esriGeometryPolyline"), r4), e4.recordEnd();
  }
  ensurePacked(e4, t3, r4) {
    super.ensurePacked(e4, t3, r4), this._lineMeshWriter.ensurePacked(e4, t3, r4);
  }
  enqueueRequest(e4, t3, r4) {
    super.enqueueRequest(e4, t3, r4), this._lineMeshWriter.enqueueRequest(e4, t3, r4);
  }
  async loadDependencies() {
    await Promise.all([super.loadDependencies(), this._lineMeshWriter.loadDependencies()]);
  }
}
const n$2 = { createComputedParams: (e4) => e4, attributes: { ...s$9.attributes, ...l$6.attributes } }, u$1 = { createComputedParams: (e4) => e4, attributes: { ...s$9.attributes, ...m$5.attributes } };
let o$3 = class o5 extends p$7 {
  constructor() {
    super(...arguments), this.vertexSpec = u$1;
  }
};
let c$1 = class c3 extends h$a {
  constructor() {
    super(...arguments), this.vertexSpec = n$2;
  }
  _createOutlineWriter(e4, t3, r4, s4) {
    return new o$3(e4, t3, r4, s4);
  }
  _write(t3, r4, s4) {
    const i6 = s4?.asOptimized() ?? r4.readGeometryForDisplay(), a6 = this._clip(i6);
    if (!a6)
      return;
    const n6 = this.evaluatedMeshParams.sprite?.textureBinding;
    t3.recordStart(this.instanceId, this.attributeLayout, n6), this._writeGeometry(t3, r4, a6), this._lineMeshWriter.writeLineVertices(t3, a$c.fromOptimizedCIM(a6, "esriGeometryPolyline"), r4), t3.recordEnd();
  }
  ensurePacked(e4, t3, r4) {
    super.ensurePacked(e4, t3, r4), this._lineMeshWriter.ensurePacked(e4, t3, r4);
  }
  enqueueRequest(e4, t3, r4) {
    super.enqueueRequest(e4, t3, r4), this._lineMeshWriter.enqueueRequest(e4, t3, r4);
  }
  async loadDependencies() {
    await Promise.all([super.loadDependencies(), this._lineMeshWriter.loadDependencies()]);
  }
};
const r$1 = { createComputedParams: (e4) => e4, attributes: { pos: { type: C$4.SHORT, count: 2, pack: "position", packPrecisionFactor: 10 }, id: { type: C$4.UNSIGNED_BYTE, count: 3, pack: "id" }, bitset: { type: C$4.UNSIGNED_BYTE, count: 1 }, offset: { type: C$4.BYTE, count: 2, packAlternating: { count: 4, pack: () => [[-1, -1], [1, -1], [-1, 1], [1, 1]] } } } };
let i$1 = class i4 extends o$9 {
  constructor() {
    super(...arguments), this.vertexSpec = r$1;
  }
  _write(e4, t3) {
    e4.recordStart(this.instanceId, this.attributeLayout);
    const r4 = t3.getDisplayId();
    if ("esriGeometryPoint" === t3.geometryType) {
      const i6 = t3.readXForDisplay(), o8 = t3.readYForDisplay();
      this._writeQuad(e4, r4, i6, o8);
    } else if ("esriGeometryMultipoint" === t3.geometryType) {
      const i6 = t3.readGeometryForDisplay();
      i6?.forEachVertex((t4, i7) => {
        t4 >= 0 && t4 <= 512 && i7 >= 0 && i7 <= 512 && this._writeQuad(e4, r4, t4, i7);
      });
    }
    e4.recordEnd();
  }
  _writeQuad(e4, t3, r4, i6) {
    const o8 = e4.vertexCount();
    this._writeVertex(e4, t3, r4, i6), e4.indexWrite(o8 + 0), e4.indexWrite(o8 + 1), e4.indexWrite(o8 + 2), e4.indexWrite(o8 + 1), e4.indexWrite(o8 + 3), e4.indexWrite(o8 + 2);
  }
};
const n$1 = 8388607, t2 = 8388608, f$1 = (t3) => t3 & n$1;
function s$3(n6, r4) {
  return ((r4 ? t2 : 0) | n6) >>> 0;
}
function e$1(t3, e4, n6) {
  return t3[0] = e4[0] - n6[0], t3[1] = e4[1] - n6[1], t3;
}
function n5(t3, e4) {
  return Math.sqrt(t3 * t3 + e4 * e4);
}
function s$2(t3) {
  const e4 = n5(t3[0], t3[1]);
  t3[0] /= e4, t3[1] /= e4;
}
function i5(t3, e4) {
  return n5(t3[0] - e4[0], t3[1] - e4[1]);
}
function r3(t3, e4) {
  return t3[e4 + 1];
}
function h$1(t3) {
  return t3.length - 1;
}
function a$1(t3) {
  let e4 = 0;
  for (let n6 = 0; n6 < h$1(t3); n6++)
    e4 += c4(t3, n6);
  return e4;
}
function c4(t3, e4, n6 = 1) {
  let [s4, i6] = r3(t3, e4);
  return [s4, i6] = [Math.round(s4), Math.round(i6)], Math.sqrt(s4 * s4 + i6 * i6) * n6;
}
class u3 {
  constructor(t3, e4, n6, s4, i6) {
    this._segments = t3, this._index = e4, this._distance = n6, this._xStart = s4, this._yStart = i6, this._done = false;
  }
  static create(t3) {
    return new u3(t3, 0, 0, t3[0][0], t3[0][1]);
  }
  clone() {
    return new u3(this._segments, this._index, this._distance, this.xStart, this.yStart);
  }
  equals(t3) {
    return this._index === t3._index || t3._index === this._index - 1 && (0 === this._distance || 1 === t3._distance) || t3._index === this._index + 1 && (1 === this._distance || 0 === t3._distance);
  }
  leq(t3) {
    return this._index < t3._index || this._index === t3._index && this._distance <= t3._distance;
  }
  geq(t3) {
    return this._index > t3._index || this._index === t3._index && this._distance >= t3._distance;
  }
  get _segment() {
    return this._segments[this._index + 1];
  }
  get angle() {
    const t3 = this.dy, e4 = (0 * t3 + -1 * -this.dx) / (1 * this.length);
    let n6 = Math.acos(e4);
    return t3 > 0 && (n6 = 2 * Math.PI - n6), n6;
  }
  get xStart() {
    return this._xStart;
  }
  get yStart() {
    return this._yStart;
  }
  get x() {
    return this.xStart + this.distance * this.dx;
  }
  get y() {
    return this.yStart + this.distance * this.dy;
  }
  get dx() {
    return this._segment[0];
  }
  get dy() {
    return this._segment[1];
  }
  get xMidpoint() {
    return this.xStart + 0.5 * this.dx;
  }
  get yMidpoint() {
    return this.yStart + 0.5 * this.dy;
  }
  get xEnd() {
    return this.xStart + this.dx;
  }
  get yEnd() {
    return this.yStart + this.dy;
  }
  get length() {
    const { dx: t3, dy: e4 } = this;
    return Math.sqrt(t3 * t3 + e4 * e4);
  }
  get remainingLength() {
    return this.length * (1 - this._distance);
  }
  get backwardLength() {
    return this.length * this._distance;
  }
  get distance() {
    return this._distance;
  }
  get done() {
    return this._done;
  }
  hasPrev() {
    return this._index - 1 >= 0;
  }
  hasNext() {
    return this._index + 1 < h$1(this._segments);
  }
  next() {
    return this.hasNext() ? (this._xStart += this.dx, this._yStart += this.dy, this._distance = 0, this._index += 1, this) : null;
  }
  prev() {
    return this.hasPrev() ? (this._index -= 1, this._xStart -= this.dx, this._yStart -= this.dy, this._distance = 1, this) : (this._done = true, null);
  }
  _seekBackwards(t3, e4) {
    const n6 = this.backwardLength;
    if (t3 <= n6)
      return this._distance = (n6 - t3) / this.length, this;
    let s4 = this.backwardLength;
    for (; this.prev(); ) {
      if (s4 + this.length > t3)
        return this._seekBackwards(t3 - s4);
      s4 += this.length;
    }
    return this._distance = 0, e4 ? this : null;
  }
  seek(t3, e4 = false) {
    if (t3 < 0)
      return this._seekBackwards(Math.abs(t3), e4);
    if (t3 <= this.remainingLength)
      return this._distance = (this.backwardLength + t3) / this.length, this;
    let n6 = this.remainingLength;
    for (; this.next(); ) {
      if (n6 + this.length > t3)
        return this.seek(t3 - n6, e4);
      n6 += this.length;
    }
    return this._distance = 1, e4 ? this : null;
  }
}
function d$1(e4, n6, s4, i6 = true) {
  const r4 = a$1(e4), h6 = u3.create(e4), c5 = r4 / 2;
  if (!i6)
    return h6.seek(c5), void (Math.abs(h6.x) < t$c && Math.abs(h6.y) < t$c && s4(h6.clone(), 0, c5 + 0 * n6, r4));
  const d4 = Math.max((r4 - n6) / 2, 0), o8 = Math.floor(d4 / n6), _2 = c5 - o8 * n6;
  h6.seek(_2);
  for (let a6 = -o8; a6 <= o8; a6++)
    Math.abs(h6.x) < t$c && Math.abs(h6.y) < t$c && s4(h6.clone(), a6, c5 + a6 * n6, r4), h6.seek(n6);
}
function l4(t3, e4) {
  const n6 = e4;
  for (let s4 = 0; s4 < t3.length; s4++) {
    let e5 = t3[s4];
    g$1(e5, n6);
    const i6 = [];
    i6.push(e5[0]);
    for (let t4 = 1; t4 < e5.length; t4++) {
      const [n7, s5] = e5[t4 - 1], [r4, h6] = e5[t4], a6 = r4 - n7, c5 = h6 - s5;
      i6.push([a6, c5]);
    }
    t3[s4] = i6, e5 = i6;
  }
  return t3;
}
function g$1(t3, n6) {
  const r4 = 1e-6;
  if (n6 <= 0)
    return;
  const h6 = t3.length;
  if (h6 < 3)
    return;
  const a6 = [];
  let c5 = 0;
  a6.push(0);
  for (let e4 = 1; e4 < h6; e4++)
    c5 += i5(t3[e4], t3[e4 - 1]), a6.push(c5);
  n6 = Math.min(n6, 0.2 * c5);
  const u4 = [];
  u4.push(t3[0][0]), u4.push(t3[0][1]);
  const d4 = t3[h6 - 1][0], o8 = t3[h6 - 1][1], _2 = e$1([0, 0], t3[0], t3[1]);
  s$2(_2), t3[0][0] += n6 * _2[0], t3[0][1] += n6 * _2[1], e$1(_2, t3[h6 - 1], t3[h6 - 2]), s$2(_2), t3[h6 - 1][0] += n6 * _2[0], t3[h6 - 1][1] += n6 * _2[1];
  for (let e4 = 1; e4 < h6; e4++)
    a6[e4] += n6;
  a6[h6 - 1] += n6;
  const l5 = 0.5 * n6;
  for (let e4 = 1; e4 < h6 - 1; e4++) {
    let s4 = 0, i6 = 0, c6 = 0;
    for (let h7 = e4 - 1; h7 >= 0 && !(a6[h7 + 1] < a6[e4] - l5); h7--) {
      const u5 = l5 + a6[h7 + 1] - a6[e4], d5 = a6[h7 + 1] - a6[h7], o9 = a6[e4] - a6[h7] < l5 ? 1 : u5 / d5;
      if (Math.abs(o9) < r4)
        break;
      const _3 = o9 * o9, g4 = o9 * u5 - 0.5 * _3 * d5, x5 = o9 * d5 / n6, f5 = t3[h7 + 1], y4 = t3[h7][0] - f5[0], k2 = t3[h7][1] - f5[1];
      s4 += x5 / g4 * (f5[0] * o9 * u5 + 0.5 * _3 * (u5 * y4 - d5 * f5[0]) - _3 * o9 * d5 * y4 / 3), i6 += x5 / g4 * (f5[1] * o9 * u5 + 0.5 * _3 * (u5 * k2 - d5 * f5[1]) - _3 * o9 * d5 * k2 / 3), c6 += x5;
    }
    for (let u5 = e4 + 1; u5 < h6 && !(a6[u5 - 1] > a6[e4] + l5); u5++) {
      const h7 = l5 - a6[u5 - 1] + a6[e4], d5 = a6[u5] - a6[u5 - 1], o9 = a6[u5] - a6[e4] < l5 ? 1 : h7 / d5;
      if (Math.abs(o9) < r4)
        break;
      const _3 = o9 * o9, g4 = o9 * h7 - 0.5 * _3 * d5, x5 = o9 * d5 / n6, f5 = t3[u5 - 1], y4 = t3[u5][0] - f5[0], k2 = t3[u5][1] - f5[1];
      s4 += x5 / g4 * (f5[0] * o9 * h7 + 0.5 * _3 * (h7 * y4 - d5 * f5[0]) - _3 * o9 * d5 * y4 / 3), i6 += x5 / g4 * (f5[1] * o9 * h7 + 0.5 * _3 * (h7 * k2 - d5 * f5[1]) - _3 * o9 * d5 * k2 / 3), c6 += x5;
    }
    u4.push(s4 / c6), u4.push(i6 / c6);
  }
  u4.push(d4), u4.push(o8);
  for (let e4 = 0, s4 = 0; e4 < h6; e4++)
    t3[e4][0] = u4[s4++], t3[e4][1] = u4[s4++];
}
class e3 {
  static getPlacement(e4, r4, n6, s4, c5, o8) {
    const a6 = g$a(n6);
    if (!a6)
      return null;
    -1 === r4 && e4.invertY();
    return a6.execute(e4, n6, s4, c5, o8);
  }
}
const s$1 = 96;
let o$2 = class o6 {
  constructor(o8) {
    const { offsetX: f5, offsetY: i6, postAngle: e4, fontSize: n6, scaleFactor: h6, transforms: r4 } = o8;
    if (this.offsetX = f5, this.offsetY = i6, this.postAngle = e4, this.fontSize = Math.min(n6, s$1), this.transforms = r4, r4 && r4.infos.length > 1) {
      const o9 = O$2(n6, e4, false, f5, i6, r4);
      this.fontSize = Math.min(o9.size, s$1), this.postAngle = o9.rotation, this.offsetX = o9.offsetX, this.offsetY = o9.offsetY;
    }
    h6 && (this.fontSize *= h6, this.offsetX *= h6, this.offsetY *= h6);
  }
};
const _$2 = 28, P4 = [4, 4], S$1 = [16, 4], k$1 = { topLeft: S$1, topRight: S$1, bottomLeft: S$1, bottomRight: S$1 }, T = [4, 2], b$1 = [4, 6], B3 = { topLeft: T, topRight: T, bottomLeft: b$1, bottomRight: b$1 }, R3 = { topLeft: T, topRight: b$1, bottomLeft: T, bottomRight: b$1 }, w3 = { topLeft: b$1, topRight: b$1, bottomLeft: P4, bottomRight: P4 }, M = { topLeft: P4, topRight: P4, bottomLeft: b$1, bottomRight: b$1 }, z2 = { topLeft: b$1, topRight: P4, bottomLeft: b$1, bottomRight: P4 }, L = { topLeft: P4, topRight: b$1, bottomLeft: P4, bottomRight: b$1 }, I$1 = { createComputedParams: (t3) => t3, attributes: { pos: { type: C$4.SHORT, count: 2, pack: "position", packPrecisionFactor: 10 }, id: { type: C$4.UNSIGNED_BYTE, count: 3, pack: "id" }, bitset: { type: C$4.UNSIGNED_BYTE, count: 1, packTessellation: ({ isBackground: t3, mapAligned: e4 }) => l$8([[I$4, t3], [J$1, !!e4]]) }, zoomRange: { type: C$4.UNSIGNED_SHORT, count: 2, packPrecisionFactor: at$1, packTessellation: ({ minZoom: t3, maxZoom: e4 }) => [t3 || 0, e4 || _$2] }, offset: { type: C$4.SHORT, count: 2, packPrecisionFactor: 8, packAlternating: { count: 4, packTessellation: ({ offsets: t3 }) => {
  const { bottomLeft: e4, bottomRight: o8, topLeft: r4, topRight: i6 } = t3;
  return [r4, i6, e4, o8];
} } }, textureUV: { type: C$4.SHORT, count: 2, packPrecisionFactor: 4, packAlternating: { count: 4, packTessellation: ({ texcoords: t3 }) => {
  const { bottomLeft: e4, bottomRight: o8, topLeft: r4, topRight: i6 } = t3;
  return [r4, i6, e4, o8];
} } }, color: { type: C$4.UNSIGNED_BYTE, count: 4, normalized: true, packTessellation: ({ color: t3 }) => t3 }, fontSize: { type: C$4.UNSIGNED_SHORT, count: 1, packPrecisionFactor: 4, packTessellation: ({ fontSize: t3 }) => u$a(t3) }, referenceSize: { type: C$4.UNSIGNED_BYTE, count: 1, packPrecisionFactor: 4, packTessellation: ({ fontSize: t3 }, { referenceSize: o8 }) => u$a(o8 ?? t3) }, haloColor: { type: C$4.UNSIGNED_BYTE, count: 4, normalized: true, pack: ({ haloColor: t3 }) => h$c(t3) }, haloFontSize: { type: C$4.UNSIGNED_SHORT, count: 1, packPrecisionFactor: 4, pack: ({ haloFontSize: t3 }) => u$a(t3) }, clipAngle: { type: C$4.UNSIGNED_BYTE, count: 1, packTessellation: ({ clipAngle: t3 }) => G(t3 || 0) }, referenceSymbol: { type: C$4.BYTE, count: 4, packPrecisionFactor: 1, packTessellation: (t3, o8) => {
  if (!t3.referenceBounds)
    return [0, 0, 0, 0];
  const r4 = s$h(o8.horizontalAlignment), n6 = i$d(o8.verticalAlignment), { offsetX: a6, offsetY: c5, size: l5 } = t3.referenceBounds;
  return [u$a(a6), -u$a(c5), u$a(l5), r4 + 1 << 2 | n6 + 1];
} } } };
let E$1 = class E2 extends o$9 {
  constructor() {
    super(...arguments), this.vertexSpec = I$1, this._textMeshParamsPropsInitialized = false;
  }
  ensurePacked(t3, e4, o8) {
    super.ensurePacked(t3, e4, o8), this._textMeshParamsPropsInitialized && !this._evaluator.hasDynamicProperties || (this._textMeshTransformProps = new o$2(this.evaluatedMeshParams), this._textMeshParamsPropsInitialized = true);
  }
  _write(t3, e4, o8) {
    const r4 = this._getShaping();
    if (!r4)
      return;
    const i6 = e4.getDisplayId();
    if (null != this.evaluatedMeshParams.placement)
      return this._writePlacedTextMarkers(t3, e4, r4, o8);
    if (o8 && o8.nextPath())
      return o8.nextPoint(), this._writeGlyphs(t3, i6, o8.x, o8.y, r4, 0);
    if ("esriGeometryPolygon" === e4.geometryType) {
      const o9 = e4.readCentroidForDisplay();
      if (!o9)
        return;
      const [s5, n7] = o9.coords;
      return this._writeGlyphs(t3, i6, s5, n7, r4, 0);
    }
    if ("esriGeometryMultipoint" === e4.geometryType) {
      const o9 = e4.readGeometryForDisplay();
      return void o9?.forEachVertex((e5, o10) => this._writeGlyphs(t3, i6, e5, o10, r4, 0));
    }
    const s4 = e4.readXForDisplay(), n6 = e4.readYForDisplay();
    return this._writeGlyphs(t3, i6, s4, n6, r4, 0);
  }
  _writePlacedTextMarkers(t3, i6, s4, n6) {
    const a6 = n6 ?? a$c.fromFeatureSetReaderCIM(i6);
    if (!a6)
      return;
    const c5 = -1, l5 = e3.getPlacement(a6, c5, this.evaluatedMeshParams.placement, u$a(1), t3.id, t$6());
    if (!l5)
      return;
    const f5 = i6.getDisplayId();
    let h6 = l5.next();
    for (; null != h6; ) {
      const e4 = h6.tx, o8 = -h6.ty, r4 = -h6.getAngle();
      this._writeGlyphs(t3, f5, e4, o8, s4, r4), h6 = l5.next();
    }
  }
  _getShaping() {
    const o8 = this._textMeshTransformProps, r4 = this.evaluatedMeshParams;
    if (!r4.glyphs?.glyphs.length)
      return null;
    const i6 = Math.round(u$a(o8.fontSize)), s4 = u$a(o8.offsetX), n6 = u$a(o8.offsetY), f5 = e$d(u$a(r4.lineWidth), 32, 512), h6 = g$b * e$d(r4.lineHeightRatio, 0.25, 4);
    return O$3(r4.glyphs, { scale: i6 / U$2, angle: o8.postAngle, xOffset: s4, yOffset: n6, horizontalAlignment: r4.horizontalAlignment, verticalAlignment: r4.verticalAlignment, maxLineWidth: f5, lineHeight: h6, decoration: r4.decoration, borderLineSizePx: u$a(r4.boxBorderLineSize), hasBackground: !!r4.boxBackgroundColor, useCIMAngleBehavior: r4.useCIMAngleBehavior });
  }
  _writeGlyphs(t3, o8, r4, i6, s4, n6, a6, c5) {
    const l5 = this.evaluatedMeshParams, f5 = this._textMeshTransformProps, m4 = f5.fontSize, d4 = u$a(f5.offsetX), u4 = u$a(f5.offsetY), [g4, x5] = m$7(l5.scaleInfo, this.getTileInfo());
    0 !== n6 && s4.setRotation(n6);
    const y4 = s4.bounds, _2 = r4 + y4.x + d4, P5 = i6 + y4.y - u4, S6 = 2 * (l5.minPixelBuffer ? l5.minPixelBuffer / m4 : 1), k2 = Math.max(y4.width, y4.height) * S6;
    s4.textBox && (t3.recordStart(this.instanceId, this.attributeLayout, s4.glyphs[0].textureBinding), t3.recordBounds(_2, P5, k2, k2), this._writeTextBox(t3, o8, r4, i6, s4.textBox, a6, c5), t3.recordEnd());
    for (const e4 of s4.glyphs) {
      t3.recordStart(this.instanceId, this.attributeLayout, e4.textureBinding), t3.recordBounds(_2, P5, k2, k2);
      const { texcoords: s5, offsets: n7 } = e4;
      this._writeQuad(t3, o8, r4, i6, { texcoords: s5, offsets: n7, fontSize: m4, color: h$c(l5.color), isBackground: false, referenceBounds: a6, minZoom: g4, maxZoom: x5, ...c5 }), t3.recordEnd();
    }
    0 !== n6 && s4.setRotation(-n6);
  }
  _writeTextBox(t3, e4, o8, r4, i6, s4, n6) {
    const a6 = this.evaluatedMeshParams, { fontSize: c5 } = this._textMeshTransformProps, { boxBackgroundColor: l5, boxBorderLineColor: f5 } = a6, p7 = { isBackground: true, fontSize: c5, referenceBounds: s4, ...n6 };
    l5 && (this._writeQuad(t3, e4, o8, r4, { texcoords: k$1, offsets: i6.main, color: h$c(l5), ...p7 }), f5 || (this._writeQuad(t3, e4, o8, r4, { texcoords: w3, offsets: i6.top, color: h$c(l5), ...p7 }), this._writeQuad(t3, e4, o8, r4, { texcoords: M, offsets: i6.bot, color: h$c(l5), ...p7 }), this._writeQuad(t3, e4, o8, r4, { texcoords: z2, offsets: i6.left, color: h$c(l5), ...p7 }), this._writeQuad(t3, e4, o8, r4, { texcoords: L, offsets: i6.right, color: h$c(l5), ...p7 }))), f5 && (this._writeQuad(t3, e4, o8, r4, { texcoords: B3, offsets: i6.top, color: h$c(f5), ...p7 }), this._writeQuad(t3, e4, o8, r4, { texcoords: B3, offsets: i6.bot, color: h$c(f5), ...p7 }), this._writeQuad(t3, e4, o8, r4, { texcoords: R3, offsets: i6.left, color: h$c(f5), ...p7 }), this._writeQuad(t3, e4, o8, r4, { texcoords: R3, offsets: i6.right, color: h$c(f5), ...p7 }));
  }
  _writeQuad(t3, e4, o8, r4, i6) {
    const s4 = t3.vertexCount();
    this._writeVertex(t3, e4, o8, r4, i6), t3.indexWrite(s4 + 0), t3.indexWrite(s4 + 1), t3.indexWrite(s4 + 2), t3.indexWrite(s4 + 1), t3.indexWrite(s4 + 3), t3.indexWrite(s4 + 2);
  }
};
const G = (t3) => Math.round(t3 * (254 / 360));
const g3 = 1, p$1 = 0, f4 = 128, _$1 = o$c((e4) => {
  let t3 = 0;
  if (0 === e4)
    return 1 / 0;
  for (; !(e4 % 2); )
    t3++, e4 /= 2;
  return t3;
});
class x4 extends E$1 {
  constructor() {
    super(...arguments), this._zoomLevel = 0;
  }
  _write(e4, t3, i6, s4) {
    if (this._zoomLevel = s4 || 0, null != i6)
      throw new Error("InternalError: EffectGeometry not support for LabelMeshWriter");
    switch (t3.geometryType) {
      case "esriGeometryPoint": {
        const i7 = t3.readXForDisplay(), s5 = t3.readYForDisplay();
        return this._writePoint(e4, i7, s5, t3);
      }
      case "esriGeometryEnvelope":
      case "esriGeometryPolygon":
      case "esriGeometryMultipoint": {
        const i7 = t3.readCentroidForDisplay();
        if (!i7)
          return;
        const [s5, a6] = i7.coords;
        return this._writePoint(e4, s5, a6, t3);
      }
      case "esriGeometryPolyline": {
        const i7 = t3.readLegacyGeometryForDisplay();
        this._writeLines(e4, t3, i7);
      }
    }
  }
  _writePoint(e4, t3, i6, n6) {
    const l5 = this._getShaping();
    if (!l5)
      return;
    let h6 = this._getPointReferenceBounds();
    h6 || (h6 = { offsetX: 0, offsetY: 0, size: 0 });
    const c5 = l5.boundsT, m4 = a$e(this.evaluatedMeshParams.horizontalAlignment), d4 = c$a(this.evaluatedMeshParams.verticalAlignment), u4 = this.evaluatedMeshParams.scaleInfo?.maxScale ?? 0, g4 = this.evaluatedMeshParams.scaleInfo?.minScale ?? 0, p7 = f$1(n6.getDisplayId());
    e4.metricStart(new r$b(p7, t3, i6, m4, d4, u4, g4, h6)), e4.metricBoxWrite(c5), this._writeGlyphs(e4, n6.getDisplayId(), t3, i6, l5, 0, h6), e4.metricEnd();
  }
  _getPointReferenceBounds() {
    if (!this._references)
      return null;
    for (const e4 of this._references) {
      const t3 = e4.getBoundsInfo();
      if (t3)
        return t3;
    }
    return null;
  }
  _writeLines(e4, t3, i6) {
    const { repeatLabel: s4, scaleInfo: a6 } = this.evaluatedMeshParams, o8 = this.evaluatedMeshParams.repeatLabelDistance || 128, n6 = this._getShaping();
    if (!n6)
      return;
    this._current = { out: e4, id: t3.getDisplayId(), shaping: n6, zoomRange: m$7(a6, this.getTileInfo()), referenceBounds: this._getPointReferenceBounds() || { offsetX: 0, offsetY: 0, size: 0 } };
    const r4 = l4(i6.paths, n6.bounds.width), m4 = this._placeSubdivGlyphs.bind(this), d4 = (n6.bounds.width + o8) / (1 << g3);
    for (const l5 of r4)
      d$1(l5, d4, m4, !!s4);
  }
  _placeSubdivGlyphs(e4, t3, i6, s4) {
    const { allowOverrun: a6, labelPosition: o8, repeatLabelDistance: n6 } = this.evaluatedMeshParams, r4 = this._current.zoomRange[0], l5 = _$1(t3), h6 = this._current.shaping.bounds.width / (1 << g3), c5 = Math.sqrt(n6 || f4) / (1 << g3), m4 = Math.min(i6, s4 - i6), d4 = this._current.shaping.isMultiline ? _$2 : Math.log2(m4 / (c5 + h6 / 2)), p7 = 0 === t3 ? d4 : Math.min(l5, d4), x5 = Math.max(r4, this._zoomLevel + g3 - p7), M2 = this._zoomLevel - x5, y4 = this._current.shaping.bounds.width / 2 * 2 ** M2;
    this._current.shaping.isMultiline ? 0 === t3 && this._placeStraight(e4, x5) : a6 && M2 < 0 ? this._placeStraightAlong(e4, r4) : "parallel" === o8 ? this._placeStraightAlong(e4, x5) : "curved" === o8 && this._placeCurved(e4, x5, y4);
  }
  _placeStraight(e4, t3) {
    const { out: i6, id: s4, shaping: a6, referenceBounds: n6 } = this._current, { x: l5, y: h6 } = e4, c5 = f$1(s4), m4 = this.evaluatedMeshParams.scaleInfo?.maxScale ?? 0, d4 = this.evaluatedMeshParams.scaleInfo?.minScale ?? 0;
    i6.metricStart(new r$b(c5, e4.x, e4.y, 0, 0, m4, d4, null)), i6.metricBoxWrite(a6.boundsT);
    const u4 = e4.angle * (180 / Math.PI) % 360, g4 = (e4.angle * (180 / Math.PI) + 180) % 360;
    this._writeGlyphs(i6, s4, l5, h6, a6, 0, n6, { clipAngle: u4, mapAligned: true, isLineLabel: true, minZoom: t3 }), this._writeGlyphs(i6, s4, l5, h6, a6, 0, n6, { clipAngle: g4, mapAligned: true, isLineLabel: true, minZoom: t3 }), i6.metricEnd();
  }
  _placeCurved(e4, t3, i6) {
    const { out: s4, id: a6 } = this._current, n6 = e4.clone(), l5 = e4.angle * (180 / Math.PI) % 360, h6 = (e4.angle * (180 / Math.PI) + 180) % 360, c5 = f$1(a6), m4 = this.evaluatedMeshParams.scaleInfo?.maxScale ?? 0, d4 = this.evaluatedMeshParams.scaleInfo?.minScale ?? 0;
    s4.metricStart(new r$b(c5, e4.x, e4.y, 0, 0, m4, d4, null)), this._placeFirst(n6, t3, 1, l5), this._placeBack(e4, n6, t3, i6, 1, l5), this._placeForward(e4, n6, t3, i6, 1, l5), this._placeFirst(n6, t3, 0, h6), this._placeBack(e4, n6, t3, i6, 0, h6), this._placeForward(e4, n6, t3, i6, 0, h6), s4.metricEnd();
  }
  _placeStraightAlong(e4, s4) {
    const { out: a6, id: n6, shaping: l5, zoomRange: h6, referenceBounds: c5 } = this._current, { boxBorderLineColor: m4, boxBackgroundColor: d4 } = this.evaluatedMeshParams, g4 = e4.clone(), p7 = e4.angle * (180 / Math.PI) % 360, f5 = (e4.angle * (180 / Math.PI) + 180) % 360;
    if (l5.glyphs.length > 0 && (m4 || d4)) {
      const o8 = Math.max(s4, h6[0], 0), r4 = Math.min(_$2, h6[1]), m5 = M$5(n$g(), -e4.angle), [d5, g5] = l5.shapeBackground(m5), _3 = { minZoom: o8, maxZoom: r4, clipAngle: p7, mapAligned: true, isLineLabel: true };
      a6.recordStart(this.instanceId, this.attributeLayout, l5.glyphs[0].textureBinding), this._writeTextBox(a6, n6, e4.x, e4.y, g5, c5, _3), a6.recordEnd(), _3.clipAngle = f5, a6.recordStart(this.instanceId, this.attributeLayout, l5.glyphs[0].textureBinding), this._writeTextBox(a6, n6, e4.x, e4.y, g5, c5, _3), a6.recordEnd();
    }
    const _2 = f$1(n6), x5 = this.evaluatedMeshParams.scaleInfo?.maxScale ?? 0, M2 = this.evaluatedMeshParams.scaleInfo?.minScale ?? 0;
    a6.metricStart(new r$b(_2, e4.x, e4.y, 0, 0, x5, M2, null)), this._placeFirst(g4, s4, 1, p7, true), this._placeFirst(g4, s4, 0, f5, true), a6.metricEnd();
  }
  _placeBack(e4, t3, i6, s4, a6, o8) {
    const n6 = e4.clone();
    let r4 = e4.backwardLength + p$1;
    for (; n6.prev() && !(r4 >= s4); )
      this._placeOnSegment(n6, t3, r4, i6, -1, a6, o8), r4 += n6.length + p$1;
  }
  _placeForward(e4, t3, i6, s4, a6, o8) {
    const n6 = e4.clone();
    let r4 = e4.remainingLength + p$1;
    for (; n6.next() && !(r4 >= s4); )
      this._placeOnSegment(n6, t3, r4, i6, 1, a6, o8), r4 += n6.length + p$1;
  }
  _placeFirst(e4, t3, i6, s4, a6 = false) {
    const o8 = e4, { out: n6, id: r4, shaping: l5, zoomRange: h6, referenceBounds: c5 } = this._current, m4 = l5.glyphs;
    for (const d4 of m4) {
      const m5 = d4.x > l5.bounds.x ? i6 : 1 - i6, g4 = m5 * e4.remainingLength + (1 - m5) * e4.backwardLength, f5 = Math.abs(d4.x + d4.width / 2 - l5.bounds.x), _2 = Math.max(0, this._zoomLevel + Math.log2(f5 / (g4 + p$1))), x5 = Math.max(t3, a6 ? 0 : _2);
      d4.maxZoom = Math.min(h6[1], _$2), d4.angle = e4.angle + (1 - i6) * Math.PI, d4.minZoom = Math.max(h6[0], x5), this._writeLineGlyph(n6, r4, o8.x, o8.y, l5.bounds, d4, s4, c5, true), i6 && this._isVisible(d4.minZoom, d4.maxZoom) && n6.metricBoxWrite(d4.bounds);
    }
  }
  _placeOnSegment(e4, t3, i6, s4, a6, o8, r4) {
    const { out: l5, id: h6, shaping: c5, referenceBounds: m4 } = this._current, d4 = c5.glyphs, u4 = e4.dx / e4.length, g4 = e4.dy / e4.length, f5 = { x: e4.x + i6 * -a6 * u4, y: e4.y + i6 * -a6 * g4 };
    for (const _2 of d4) {
      const d5 = _2.x > c5.bounds.x ? o8 : 1 - o8;
      if (!(d5 && 1 === a6 || !d5 && -1 === a6))
        continue;
      const u5 = Math.abs(_2.x + _2.width / 2 - c5.bounds.x), g5 = Math.max(0, this._zoomLevel + Math.log2(u5 / i6) - 0.1), x5 = Math.max(s4, this._zoomLevel + Math.log2(u5 / (i6 + e4.length + p$1)));
      if (0 !== g5 && (_2.angle = e4.angle + (1 - o8) * Math.PI, _2.minZoom = x5, _2.maxZoom = g5, this._writeLineGlyph(l5, h6, f5.x, f5.y, c5.bounds, _2, r4, m4, true), o8 && this._isVisible(_2.minZoom, _2.maxZoom))) {
        const i7 = _2.bounds, s5 = e4.x - t3.x, a7 = e4.y - t3.y, o9 = new i$e(i7.center[0] + s5, i7.center[1] + a7, i7.width, i7.height);
        l5.metricBoxWrite(o9);
      }
    }
  }
  _writeLineGlyph(e4, t3, i6, s4, a6, o8, n6, r4, l5) {
    const h6 = i6 + a6.x, c5 = s4 + a6.y, d4 = 2 * (this.evaluatedMeshParams.minPixelBuffer ? this.evaluatedMeshParams.minPixelBuffer / this._textMeshTransformProps.fontSize : 1), u4 = Math.max(a6.width, a6.height) * d4;
    e4.recordStart(this.instanceId, this.attributeLayout, o8.textureBinding), e4.recordBounds(h6, c5, u4, u4);
    const { texcoords: g4, offsets: p7 } = o8, f5 = this._textMeshTransformProps.fontSize;
    this._writeQuad(e4, t3, i6, s4, { texcoords: g4, offsets: p7, fontSize: f5, color: h$c(this.evaluatedMeshParams.color), isBackground: false, referenceBounds: r4, minZoom: Math.max(this._current.zoomRange[0], o8.minZoom), maxZoom: Math.min(this._current.zoomRange[1], o8.maxZoom), clipAngle: n6, mapAligned: l5, isLineLabel: true }), e4.recordEnd();
  }
  _isVisible(e4, t3) {
    const i6 = this._zoomLevel;
    return e4 <= i6 && i6 <= t3;
  }
}
const m3 = { createComputedParams: (t3) => t3, attributes: { ..._$8.attributes, bitset: { type: C$4.UNSIGNED_BYTE, count: 1, pack: ({ shouldSampleAlphaOnly: t3, shouldScaleDash: e4, isSDF: s4 }) => l$8([[q$5, t3], [F$5, e4], [H$2, s4]]) }, tlbr: { type: C$4.UNSIGNED_SHORT, count: 4, pack: ({ sprite: t3 }) => {
  const { rect: r4, width: s4, height: i6 } = t3, o8 = r4.x + $$1, n6 = r4.y + $$1;
  return [o8, n6, o8 + s4, n6 + i6];
} }, accumulatedDistance: { type: C$4.UNSIGNED_SHORT, count: 1, packTessellation: ({ distance: t3 }) => t3 }, segmentDirection: { type: C$4.BYTE, count: 2, packPrecisionFactor: 16, packTessellation: ({ directionX: t3, directionY: e4 }) => [t3, e4] } } };
class p6 extends w$5 {
  constructor(t3, e4, r4, s4) {
    super(t3, e4, r4, s4), this.vertexSpec = m3, this._tessellationOptions.textured = true;
  }
  _write(e4, r4, s4) {
    const i6 = s4 ?? a$c.fromFeatureSetReaderCIM(r4);
    if (!i6)
      return;
    const { sprite: o8 } = this.evaluatedMeshParams;
    this._writeGeometry(e4, r4, i6, o8?.textureBinding);
  }
}
class h5 {
  static from(t3) {
    return "width" in t3 ? this.fromSimpleMeshParams(t3) : this.fromComplexMeshParams(t3);
  }
  static fromSimpleMeshParams(e4) {
    const i6 = new h5(e4.sprite, e4.color, e4.outlineColor, e4.minPixelBuffer, e4.placement, e4.scaleInfo, e4.effects), { type: o8, width: s4, height: r4, angle: n6, alignment: a6, outlineSize: c5, referenceSize: l5, sprite: m4, overrideOutlineColor: f5 } = e4;
    i6.rawWidth = u$a(s4), i6.rawHeight = u$a(r4), i6.angle = n6, i6.alignment = a6, i6.outlineSize = u$a(c5), i6.referenceSize = u$a(l5), i6.overrideOutlineColor = f5, i6.offsetX = u$a(e4.offsetX), i6.offsetY = u$a(e4.offsetY), "simple" !== o8 || m4.sdf || (i6.rawWidth = m4.width, i6.rawHeight = m4.height);
    const d4 = 2;
    return i6.sizeRatio = m4.sdf ? d4 : 1, i6._computeSize(e4, false), i6;
  }
  static fromComplexMeshParams(e4) {
    const o8 = new h5(e4.sprite, e4.color, e4.outlineColor, e4.minPixelBuffer, e4.placement, e4.scaleInfo, e4.effects);
    let { alignment: s4, transforms: r4, size: n6, scaleX: a6, anchorX: c5, anchorY: l5, angle: m4, colorLocked: f5, frameHeight: d4, widthRatio: u4, offsetX: p7, offsetY: g4, outlineSize: x5, referenceSize: z3, scaleFactor: w4, sizeRatio: S6, isAbsoluteAnchorPoint: X2, rotateClockwise: Y2, scaleSymbolsProportionally: H2, sprite: C2 } = e4;
    if (r4 && r4.infos.length > 0) {
      const t3 = O$2(n6, m4, Y2, p7, g4, r4);
      n6 = t3.size, m4 = t3.rotation, p7 = t3.offsetX, g4 = t3.offsetY, Y2 = false;
    }
    w4 && (n6 *= w4, p7 *= w4, g4 *= w4);
    const M2 = a6 * (C2.width / C2.height);
    o8.alignment = s4, o8.rawHeight = u$a(n6), o8.rawWidth = o8.rawHeight * M2, o8.referenceSize = u$a(z3), o8.sizeRatio = S6, o8.angle = m4, o8.rotateClockwise = Y2, o8.anchorX = c5, o8.anchorY = l5, o8.offsetX = u$a(p7), o8.offsetY = u$a(g4), X2 && n6 && (C2.sdf ? o8.anchorX = c5 / (n6 * u4) : o8.anchorX = c5 / (n6 * M2), o8.anchorY = l5 / n6);
    const W2 = H2 && d4 ? n6 / d4 : 1;
    return o8.outlineSize = 0 === x5 || isNaN(x5) ? 0 : u$a(x5) * W2, o8.scaleSymbolsProportionally = H2, o8.colorLocked = f5, o8._computeSize(e4, true), o8;
  }
  constructor(t3, i6, o8, s4, h6, r4, n6) {
    this.sprite = t3, this.color = i6, this.outlineColor = o8, this.minPixelBuffer = s4, this.placement = h6, this.scaleInfo = r4, this.effects = n6, this.rawWidth = 0, this.rawHeight = 0, this.angle = 0, this.outlineSize = 0, this.referenceSize = 0, this.sizeRatio = 1, this.alignment = i$f.SCREEN, this.scaleSymbolsProportionally = false, this.overrideOutlineColor = false, this.colorLocked = false, this.anchorX = 0, this.anchorY = 0, this.computedWidth = 0, this.computedHeight = 0, this.texXmin = 0, this.texYmin = 0, this.texXmax = 0, this.texYmax = 0, this.offsetX = 0, this.offsetY = 0, this.rotateClockwise = true;
  }
  get boundsInfo() {
    return { size: Math.max(this.computedHeight, this.computedWidth), offsetX: this.offsetX, offsetY: this.offsetY };
  }
  _computeSize(t3, e4) {
    const { sprite: i6, hasSizeVV: h6 } = t3, r4 = !!i6.sdf, { rawWidth: n6, rawHeight: a6, sizeRatio: c5, outlineSize: l5 } = this, m4 = n6 * c5, f5 = a6 * c5;
    if (r4 && !h6) {
      const t4 = e4 && n6 > a6 ? m4 : n6, i7 = a6, o8 = l5 + 2 * 1;
      this.computedWidth = Math.min(t4 + o8, m4), this.computedHeight = Math.min(i7 + o8, f5);
    } else
      this.computedWidth = m4, this.computedHeight = f5;
    const d4 = r4 ? _$9 / Math.max(m4, f5) : 1, u4 = 0.5 * (m4 - this.computedWidth) * d4, p7 = 0.5 * (f5 - this.computedHeight) * d4, g4 = i6.rect.x + $$1 + u4, x5 = i6.rect.y + $$1 + p7, z3 = g4 + i6.width - 2 * u4, w4 = x5 + i6.height - 2 * p7;
    this.texXmin = Math.floor(g4), this.texYmin = Math.floor(x5), this.texXmax = Math.ceil(z3), this.texYmax = Math.ceil(w4), this.computedWidth *= (this.texXmax - this.texXmin) / (z3 - g4), this.computedHeight *= (this.texYmax - this.texYmin) / (w4 - x5), this.anchorX *= m4 / this.computedWidth, this.anchorY *= f5 / this.computedHeight;
  }
}
const o$1 = { bitset: { isSDF: 0, isMapAligned: 1, scaleSymbolsProportionally: 2, overrideOutlineColor: 3, colorLocked: 4 } };
const k = 3.14159265359 / 180, b2 = 128 / Math.PI;
function S5(e4, t3) {
  return e4 %= t3, Math.abs(e4 >= 0 ? e4 : e4 + t3);
}
function I(e4) {
  return S5(e4 * b2, 256);
}
function _(e4, a6, n6, c5, m4 = false) {
  const l5 = n$g(), u4 = m4 ? 1 : -1;
  return e4 ? M$5(l5, u4 * k * e4) : a$f(l5), (a6 || n6) && i$g(l5, l5, [a6, -n6]), c5 && s$i(l5, l5, u4 * k * -c5), l5;
}
const v2 = { createComputedParams: (e4) => h5.from(e4), attributes: { pos: { type: C$4.SHORT, count: 2, pack: "position", packPrecisionFactor: 10 }, id: { type: C$4.UNSIGNED_BYTE, count: 3, pack: "id" }, bitset: { type: C$4.UNSIGNED_BYTE, count: 1, pack: ({ sprite: e4, alignment: t3, scaleSymbolsProportionally: r4, overrideOutlineColor: o8, colorLocked: s4 }) => {
  let i6 = 0;
  return e4.sdf && (i6 |= f$a(o$1.bitset.isSDF)), t3 === i$f.MAP && (i6 |= f$a(o$1.bitset.isMapAligned)), r4 && (i6 |= f$a(o$1.bitset.scaleSymbolsProportionally)), o8 && (i6 |= f$a(o$1.bitset.overrideOutlineColor)), s4 && (i6 |= f$a(o$1.bitset.colorLocked)), i6;
} }, zoomRange: { type: C$4.SHORT, count: 2, packPrecisionFactor: at$1, pack: ({ scaleInfo: e4 }, { tileInfo: t3 }) => m$7(e4, t3) }, offset: { type: C$4.SHORT, count: 2, packPrecisionFactor: 4, packAlternating: { count: 4, pack: ({ angle: e4, computedWidth: t3, computedHeight: r4, anchorX: o8, anchorY: s4, offsetX: i6, offsetY: n6, rotateClockwise: c5 }) => {
  const m4 = _(0, i6, n6, -e4, c5), l5 = -(0.5 + o8) * t3, u4 = -(0.5 - s4) * r4, d4 = [l5, u4], p7 = [l5 + t3, u4], h6 = [l5, u4 + r4], f5 = [l5 + t3, u4 + r4];
  return S$9(d4, d4, m4), S$9(p7, p7, m4), S$9(h6, h6, m4), S$9(f5, f5, m4), [d4, p7, h6, f5];
} } }, textureUV: { type: C$4.SHORT, count: 2, packPrecisionFactor: 4, packAlternating: { count: 4, pack: ({ texXmax: e4, texXmin: t3, texYmax: r4, texYmin: o8 }) => [[t3, o8], [e4, o8], [t3, r4], [e4, r4]] } }, color: { type: C$4.UNSIGNED_BYTE, count: 4, normalized: true, pack: ({ color: e4 }) => h$c(e4) }, outlineColor: { type: C$4.UNSIGNED_BYTE, count: 4, normalized: true, pack: ({ outlineColor: e4 }) => h$c(e4) }, sizing: { type: C$4.UNSIGNED_BYTE, count: 4, pack: ({ rawWidth: e4, rawHeight: t3, outlineSize: r4, referenceSize: o8 }) => {
  const s4 = Math.max(e4, t3);
  return [d$7(s4, 128), d$7(r4, 128), d$7(o8, 128), 0];
} }, placementAngle: { type: C$4.UNSIGNED_BYTE, count: 1, packTessellation: ({ placementAngle: e4 }) => I(e4) }, sizeRatio: { type: C$4.UNSIGNED_SHORT, count: 1, packPrecisionFactor: 64, pack: ({ sizeRatio: e4 }) => e4 } } };
class E3 extends o$9 {
  constructor() {
    super(...arguments), this.vertexSpec = v2;
  }
  getBoundsInfo() {
    return this.evaluatedMeshParams.boundsInfo;
  }
  _write(e4, t3, r4) {
    const o8 = this.evaluatedMeshParams.sprite?.textureBinding, s4 = t3.getDisplayId();
    e4.recordStart(this.instanceId, this.attributeLayout, o8);
    const i6 = this.evaluatedMeshParams.minPixelBuffer, a6 = Math.max(this.evaluatedMeshParams.computedWidth, i6), n6 = Math.max(this.evaluatedMeshParams.computedHeight, i6), m4 = this.evaluatedMeshParams.offsetX, l5 = -this.evaluatedMeshParams.offsetY;
    if (null != this.evaluatedMeshParams.placement)
      this._writePlacedMarkers(e4, t3, r4, a6, n6);
    else if (r4 && r4.nextPath()) {
      r4.nextPoint();
      const t4 = r4.x, o9 = r4.y;
      e4.recordBounds(t4 + m4, o9 + l5, a6, n6), this._writeQuad(e4, s4, t4, o9);
    } else if ("esriGeometryPolygon" === t3.geometryType) {
      const r5 = t3.readCentroidForDisplay();
      if (!r5)
        return;
      const [o9, i7] = r5.coords;
      e4.recordBounds(o9 + m4, i7 + l5, a6, n6), this._writeQuad(e4, s4, o9, i7);
    } else if ("esriGeometryPoint" === t3.geometryType) {
      const r5 = t3.readXForDisplay(), o9 = t3.readYForDisplay();
      e4.recordBounds(r5 + m4, o9 + l5, a6, n6), this._writeQuad(e4, s4, r5, o9);
    } else {
      const r5 = t3.readGeometryForDisplay();
      r5?.forEachVertex((t4, r6) => {
        e4.recordBounds(t4 + m4, r6 + l5, a6, n6), Math.abs(t4) > t$c || Math.abs(r6) > t$c || this._writeQuad(e4, s4, t4, r6);
      });
    }
    e4.recordEnd();
  }
  _writePlacedMarkers(t3, r4, o8, s4, i6) {
    const a6 = o8 ?? a$c.fromFeatureSetReaderCIM(r4)?.clone();
    if (!a6)
      return;
    const m4 = -1, u4 = e3.getPlacement(a6, m4, this.evaluatedMeshParams.placement, u$a(1), t3.id, t$6());
    if (!u4)
      return;
    const d4 = r4.getDisplayId();
    let p7 = u4.next();
    const h6 = this.evaluatedMeshParams.offsetX, f5 = -this.evaluatedMeshParams.offsetY;
    for (; null != p7; ) {
      const e4 = p7.tx, r5 = -p7.ty;
      if (Math.abs(e4) > t$c || Math.abs(r5) > t$c) {
        p7 = u4.next();
        continue;
      }
      const o9 = -p7.getAngle();
      t3.recordBounds(e4 + h6, r5 + f5, s4, i6), this._writeQuad(t3, d4, e4, r5, o9), p7 = u4.next();
    }
  }
  _writeQuad(e4, t3, r4, o8, s4) {
    const i6 = e4.vertexCount(), a6 = null == s4 ? null : { placementAngle: s4 };
    this._writeVertex(e4, t3, r4, o8, a6), e4.indexWrite(i6 + 0), e4.indexWrite(i6 + 1), e4.indexWrite(i6 + 2), e4.indexWrite(i6 + 1), e4.indexWrite(i6 + 3), e4.indexWrite(i6 + 2);
  }
}
const o7 = { createComputedParams: (e4) => e4, attributes: { pos: { type: C$4.SHORT, count: 2, packPrecisionFactor: 10, pack: "position" }, id: { type: C$4.UNSIGNED_BYTE, count: 3, pack: "id" }, bitset: { type: C$4.UNSIGNED_BYTE, count: 1, pack: (e4) => 0 }, offset: { type: C$4.SHORT, count: 2, packPrecisionFactor: 16, packAlternating: { count: 4, pack: ({ size: t3 }) => {
  const r4 = u$a(t3), i6 = -r4 / 2, o8 = -r4 / 2;
  return [[i6, o8], [i6 + r4, o8], [i6, o8 + r4], [i6 + r4, o8 + r4]];
} } }, texCoords: { type: C$4.SHORT, count: 2, packPrecisionFactor: 4, packAlternating: { count: 4, pack: () => [[0, 1], [1, 1], [0, 0], [1, 0]] } }, size: { type: C$4.UNSIGNED_BYTE, count: 2, pack: ({ size: e4 }) => [e4, e4] }, referenceSize: { type: C$4.UNSIGNED_BYTE, count: 1, pack: ({ size: t3 }) => u$a(t3) }, zoomRange: { type: C$4.UNSIGNED_BYTE, count: 2, pack: ({ scaleInfo: e4 }, { tileInfo: r4 }) => m$7(e4, r4) } } };
class s3 extends o$9 {
  constructor() {
    super(...arguments), this.vertexSpec = o7;
  }
  _write(t3, r4) {
    const i6 = r4.getDisplayId(), o8 = this.evaluatedMeshParams.minPixelBuffer, s4 = Math.max(u$a(this.evaluatedMeshParams.size), o8);
    let c5, n6;
    if ("esriGeometryPoint" === r4.geometryType)
      c5 = r4.readXForDisplay(), n6 = r4.readYForDisplay();
    else {
      const e4 = r4.readCentroidForDisplay();
      if (!e4)
        return;
      c5 = e4?.coords[0], n6 = e4?.coords[1];
    }
    t3.recordStart(this.instanceId, this.attributeLayout), t3.recordBounds(c5, n6, s4, s4);
    const a6 = t3.vertexCount();
    this._writeVertex(t3, i6, c5, n6), t3.indexWrite(a6 + 0), t3.indexWrite(a6 + 1), t3.indexWrite(a6 + 2), t3.indexWrite(a6 + 1), t3.indexWrite(a6 + 3), t3.indexWrite(a6 + 2), t3.recordEnd();
  }
}
const a5 = j3({ FillMeshWriter: i$5, DotDensityMeshWriter: s$a, ComplexFillMeshWriter: y$3, PatternFillMeshWriter: a$5, OutlineFillMeshWriter: h$a, PatternOutlineFillMeshWriter: c$1, ComplexOutlineFillMeshWriter: N, MarkerMeshWriter: E3, PieChartMeshWriter: s3, TextMeshWriter: E$1, LineMeshWriter: w$5, TexturedLineMeshWriter: p6, HeatmapMeshWriter: i$1, LabelMeshWriter: x4 });
function j3(r4) {
  const e4 = {};
  for (const t3 in r4) {
    const i6 = { name: t3, constructor: r4[t3] };
    e4[t3] = i6;
  }
  return e4;
}
let d3 = class extends S$a {
  constructor(t3) {
    super(t3), this.debugName = "", this._updatingHandles = new h$f(), this._idToUpdatingState = new s$j();
  }
  get updating() {
    const t3 = this._updatingHandles.updating || Array.from(this._idToUpdatingState.values()).some((t4) => t4);
    if (has("esri-2d-log-updating")) {
      const r4 = Array.from(this._idToUpdatingState.entries()).map(([t4, r5]) => `-> ${t4}: ${r5}`).join("\n");
      console.log(`${this.debugName}: Updating: ${t3}
-> Handles: ${this._updatingHandles.updating}
${r4}`);
    }
    return t3;
  }
  addUpdateTracking(t3, r4) {
    const o8 = d$a(() => r4.updating, (r5) => this._idToUpdatingState.set(t3, r5), { sync: true });
    this.addHandles(o8);
  }
  addPromise(t3) {
    return this._updatingHandles.addPromise(t3);
  }
};
e$c([y$5({ constructOnly: true })], d3.prototype, "debugName", void 0), e$c([y$5({ readOnly: true })], d3.prototype, "updating", null), d3 = e$c([c$b("esri.view.2d.layers.support.UpdateTracking2D")], d3);
export {
  v$3 as $,
  q$3 as A,
  Bn as B,
  C$1 as C,
  q$1 as D,
  x$3 as E,
  F$4 as F,
  G$2 as G,
  H$1 as H,
  E$2 as I,
  C as J,
  H as K,
  z$1 as L,
  S$4 as M,
  w$3 as N,
  xt as O,
  P$4 as P,
  h$6 as Q,
  R$3 as R,
  S$6 as S,
  Bt as T,
  U,
  i$4 as V,
  t$5 as W,
  Wn as X,
  tn as Y,
  K as Z,
  _$5 as _,
  a5 as a,
  Xt as a0,
  Un as a1,
  vn as a2,
  j$3 as a3,
  A$3 as a4,
  t$1 as a5,
  n$4 as a6,
  G$3 as a7,
  P$2 as a8,
  O$1 as a9,
  u$2 as aA,
  r$2 as aB,
  c$4 as aC,
  St as aD,
  o$7 as aE,
  sn as aF,
  h$5 as aG,
  yt as aH,
  g$4 as aI,
  o$1 as aJ,
  a$2 as aK,
  Dt as aa,
  Nt as ab,
  Y as ac,
  I$4 as ad,
  J$1 as ae,
  f$4 as af,
  h$4 as ag,
  m$1 as ah,
  p$2 as ai,
  f$3 as aj,
  l$1 as ak,
  p$3 as al,
  B$1 as am,
  q3 as an,
  bn as ao,
  Sn as ap,
  k$3 as aq,
  Zt as ar,
  Ct as as,
  T$2 as at,
  D as au,
  F$5 as av,
  H$2 as aw,
  q$5 as ax,
  q$2 as ay,
  z$3 as az,
  n$1 as b,
  l$3 as c,
  d3 as d,
  b$4 as e,
  f$1 as f,
  se as g,
  j$5 as h,
  ee as i,
  j$4 as j,
  k$4 as k,
  l$9 as l,
  kn as m,
  n$e as n,
  te as o,
  g$6 as p,
  d$2 as q,
  r$7 as r,
  s$3 as s,
  tt as t,
  F$3 as u,
  S$5 as v,
  P$3 as w,
  x$4 as x,
  nt as y,
  ln as z
};
