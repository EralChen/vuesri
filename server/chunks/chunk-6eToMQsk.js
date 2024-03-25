import { aV as e, aX as y, a_ as c, gl as m, lt as p$1 } from "./chunk-ejFG4zJ0.js";
import { r as r$1 } from "./chunk-IhjTEMBX.js";
import { u } from "./chunk-MIHgBujt.js";
let i = class extends r$1 {
  constructor(t) {
    super(t), this.type = "extent-rotate", this.angle = 0;
  }
};
e([y()], i.prototype, "type", void 0), e([y()], i.prototype, "angle", void 0), i = e([c("esri.views.interactive.tooltip.ExtentRotateTooltipInfo")], i);
let p = class extends r$1 {
  constructor(t) {
    super(t), this.type = "extent-scale", this.xScale = 0, this.yScale = 0, this.xSize = m, this.ySize = m;
  }
};
e([y()], p.prototype, "type", void 0), e([y()], p.prototype, "xScale", void 0), e([y()], p.prototype, "yScale", void 0), e([y()], p.prototype, "xSize", void 0), e([y()], p.prototype, "ySize", void 0), p = e([c("esri.views.interactive.tooltip.ExtentScaleTooltipInfo")], p);
function o({ topLeft: o2, topRight: n, bottomRight: i2, bottomLeft: r, spatialReference: l }) {
  const u$1 = p$1(u(r, i2, l), u(o2, n, l));
  if (null == u$1)
    return null;
  const m2 = p$1(u(i2, n, l), u(r, o2, l));
  return null == m2 ? null : { xSize: u$1, ySize: m2 };
}
export {
  i,
  o,
  p
};
