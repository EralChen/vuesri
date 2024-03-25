import { cm as e$1, cH as d, cI as n$1 } from "./chunk-ejFG4zJ0.js";
import { e } from "./chunk-xHgk_Pqx.js";
function n(t) {
  return n$1(t.frameDurations.reduce((t2, e2) => t2 + e2, 0));
}
function o(t) {
  const { width: e2, height: r } = t, i = t.frameDurations.reverse(), a = (e3) => {
    const r2 = t.frameDurations.length - 1 - e3;
    return t.getFrame(r2);
  };
  return { frameCount: t.frameCount, duration: t.duration, frameDurations: i, getFrame: a, width: e2, height: r };
}
function s(t, r) {
  const { width: i, height: a, getFrame: n2 } = t, o2 = r / t.duration, s2 = t.frameDurations.map((t2) => n$1(t2 * o2));
  return { frameCount: t.frameCount, duration: t.duration, frameDurations: s2, getFrame: n2, width: i, height: a };
}
function m(t, r) {
  const { width: i, height: a, getFrame: n2 } = t, o2 = t.frameDurations.slice(), s2 = o2.shift();
  return o2.unshift(n$1(s2 + r)), { frameCount: t.frameCount, duration: t.duration + r, frameDurations: o2, getFrame: n2, width: i, height: a };
}
function u(t, r) {
  const { width: i, height: a, getFrame: n2 } = t, o2 = t.frameDurations.slice(), s2 = o2.pop();
  return o2.push(n$1(s2 + r)), { frameCount: t.frameCount, duration: t.duration + r, frameDurations: o2, getFrame: n2, width: i, height: a };
}
class h {
  constructor(t, e2, r, i) {
    this._animation = t, this._repeatType = r, this._onFrameData = i, this._direction = 1, this._currentFrame = 0, this.timeToFrame = this._animation.frameDurations[this._currentFrame];
    let a = 0;
    for (; e2 > a; )
      a += this.timeToFrame, this.nextFrame();
    const n2 = this._animation.getFrame(this._currentFrame);
    this._onFrameData(n2);
  }
  nextFrame() {
    if (this._currentFrame += this._direction, this._direction > 0) {
      if (this._currentFrame === this._animation.frameDurations.length)
        switch (this._repeatType) {
          case d.None:
            this._currentFrame -= this._direction;
            break;
          case d.Loop:
            this._currentFrame = 0;
            break;
          case d.Oscillate:
            this._currentFrame -= this._direction, this._direction = -1;
        }
    } else if (-1 === this._currentFrame)
      switch (this._repeatType) {
        case d.None:
          this._currentFrame -= this._direction;
          break;
        case d.Loop:
          this._currentFrame = this._animation.frameDurations.length - 1;
          break;
        case d.Oscillate:
          this._currentFrame -= this._direction, this._direction = 1;
      }
    this.timeToFrame = this._animation.frameDurations[this._currentFrame];
    const t = this._animation.getFrame(this._currentFrame);
    this._onFrameData(t);
  }
}
function c(t, r, c2, f2) {
  let l, { repeatType: d$1 } = r;
  if (null == d$1 && (d$1 = d.Loop), true === r.reverseAnimation && (t = o(t)), null != r.duration && (t = s(t, n$1(1e3 * r.duration))), null != r.repeatDelay) {
    const a = 1e3 * r.repeatDelay;
    d$1 === d.Loop ? t = u(t, n$1(a)) : d$1 === d.Oscillate && (t = m(u(t, n$1(a / 2)), n$1(a / 2)));
  }
  if (null != r.startTimeOffset)
    l = n$1(1e3 * r.startTimeOffset);
  else if (null != r.randomizeStartTime) {
    const i = 82749913, o2 = null != r.randomizeStartSeed ? r.randomizeStartSeed : i, s2 = e(c2, o2);
    l = n$1(s2 * n(t));
  } else
    l = n$1(0);
  return new h(t, l, d$1, f2);
}
function f(e2, r, i, a) {
  const n2 = null == r.playAnimation || r.playAnimation, o2 = c(e2, r, i, a);
  let s2, m2 = o2.timeToFrame;
  function u2() {
    s2 = n2 ? setTimeout(() => {
      o2.nextFrame(), m2 = o2.timeToFrame, u2();
    }, m2) : void 0;
  }
  return u2(), e$1(() => n2 && clearTimeout(s2));
}
export {
  f
};
