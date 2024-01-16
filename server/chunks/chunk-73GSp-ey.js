import { gV as n, gW as rt } from "./chunk-KFNcxJaF.js";
import { n as n$1 } from "./chunk-x5arQHJi.js";
class r extends n {
  constructor(n2) {
    super({ ...n2, constraint: new rt(n2.targetPoint) });
  }
  get hints() {
    return [new n$1(this.targetPoint, this.isDraped, this.domain)];
  }
}
export {
  r
};
