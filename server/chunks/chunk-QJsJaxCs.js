import { ap as M$1 } from "./chunk-KFNcxJaF.js";
const isWithinScale = (value, scale) => {
  if (scale.maxScale && value < scale.maxScale) {
    return false;
  }
  if (scale.minScale && value >= scale.minScale) {
    return false;
  }
  return true;
};
function extentFormScreenPoint(view, screenPoint, tolerance = 10) {
  const screenExtent = {
    xmin: screenPoint.x - tolerance,
    ymin: screenPoint.y - tolerance,
    xmax: screenPoint.x + tolerance,
    ymax: screenPoint.y + tolerance
  };
  const topLeft = {
    x: screenExtent.xmin,
    y: screenExtent.ymin
  };
  const bottomRight = {
    x: screenExtent.xmax,
    y: screenExtent.ymax
  };
  const mapTopLeft = view.toMap(topLeft);
  const mapBottomRight = view.toMap(bottomRight);
  const mapExtent = new M$1({
    xmin: mapTopLeft.x,
    ymin: mapBottomRight.y,
    xmax: mapBottomRight.x,
    ymax: mapTopLeft.y,
    spatialReference: view.spatialReference
  });
  return mapExtent;
}
export {
  extentFormScreenPoint as e,
  isWithinScale as i
};
