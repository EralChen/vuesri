import { fm as s$1, fn as F } from "./chunk-KFNcxJaF.js";
class n extends s$1 {
  constructor(t, s, n2) {
    super(s, n2), this.point = t;
  }
  equals(s) {
    return s instanceof n && F(this.point, s.point);
  }
}
export {
  n
};
