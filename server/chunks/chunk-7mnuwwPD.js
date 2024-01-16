import { cz as t$1, aX as S$1, aQ as a, bh as V } from "./chunk-KFNcxJaF.js";
import { L, e as e$1 } from "./chunk--tEXwTLn.js";
import "@popperjs/core";
import "luxon";
import "@esri/arcgis-html-sanitizer";
import "@esri/calcite-components/dist/components/index.js";
import "./chunk-rOxUIHGZ.js";
function e(e2) {
  return t(e2, "notes");
}
function r(e2) {
  return t(e2, "markup");
}
function n(e2) {
  return t(e2, "route");
}
function t(e2, r2) {
  return !(!e2.layerType || "ArcGISFeatureLayer" !== e2.layerType) && e2.featureCollectionType === r2;
}
async function c(e2, r2, a2) {
  if (!r2)
    return;
  const t2 = [];
  for (const i of r2)
    t2.push(g(i, a2));
  const y = await Promise.allSettled(t2);
  for (const i of y)
    "rejected" === i.status || i.value && e2.add(i.value);
}
const l = { ArcGISDimensionLayer: "DimensionLayer", ArcGISFeatureLayer: "FeatureLayer", ArcGISImageServiceLayer: "ImageryLayer", ArcGISMapServiceLayer: "MapImageLayer", PointCloudLayer: "PointCloudLayer", ArcGISSceneServiceLayer: "SceneLayer", IntegratedMeshLayer: "IntegratedMeshLayer", OGCFeatureLayer: "OGCFeatureLayer", BuildingSceneLayer: "BuildingSceneLayer", ArcGISTiledElevationServiceLayer: "ElevationLayer", ArcGISTiledImageServiceLayer: "ImageryTileLayer", ArcGISTiledMapServiceLayer: "TileLayer", GroupLayer: "GroupLayer", GeoJSON: "GeoJSONLayer", WebTiledLayer: "WebTileLayer", CSV: "CSVLayer", VectorTileLayer: "VectorTileLayer", WFS: "WFSLayer", WMS: "WMSLayer", DefaultTileLayer: "TileLayer", KML: "KMLLayer", RasterDataLayer: "UnsupportedLayer", Voxel: "VoxelLayer", LineOfSightLayer: "LineOfSightLayer" }, s = { ArcGISTiledElevationServiceLayer: "ElevationLayer", DefaultTileLayer: "ElevationLayer", RasterDataElevationLayer: "UnsupportedLayer" }, p = { ArcGISFeatureLayer: "FeatureLayer" }, S = { ArcGISTiledMapServiceLayer: "TileLayer", ArcGISTiledImageServiceLayer: "ImageryTileLayer", OpenStreetMap: "OpenStreetMapLayer", WebTiledLayer: "WebTileLayer", VectorTileLayer: "VectorTileLayer", ArcGISImageServiceLayer: "UnsupportedLayer", WMS: "UnsupportedLayer", ArcGISMapServiceLayer: "UnsupportedLayer", ArcGISSceneServiceLayer: "SceneLayer", DefaultTileLayer: "TileLayer" }, u = { ArcGISAnnotationLayer: "UnsupportedLayer", ArcGISDimensionLayer: "UnsupportedLayer", ArcGISFeatureLayer: "FeatureLayer", ArcGISImageServiceLayer: "ImageryLayer", ArcGISImageServiceVectorLayer: "ImageryLayer", ArcGISMapServiceLayer: "MapImageLayer", ArcGISStreamLayer: "StreamLayer", ArcGISTiledImageServiceLayer: "ImageryTileLayer", ArcGISTiledMapServiceLayer: "TileLayer", BingMapsAerial: "BingMapsLayer", BingMapsRoad: "BingMapsLayer", BingMapsHybrid: "BingMapsLayer", CSV: "CSVLayer", DefaultTileLayer: "TileLayer", GeoRSS: "GeoRSSLayer", GeoJSON: "GeoJSONLayer", GroupLayer: "GroupLayer", KML: "KMLLayer", MediaLayer: "MediaLayer", OGCFeatureLayer: "OGCFeatureLayer", OrientedImageryLayer: "OrientedImageryLayer", SubtypeGroupLayer: "SubtypeGroupLayer", VectorTileLayer: "VectorTileLayer", WFS: "WFSLayer", WMS: "WMSLayer", WebTiledLayer: "WebTileLayer" }, d = { ArcGISFeatureLayer: "FeatureLayer" }, I = { ArcGISImageServiceLayer: "ImageryLayer", ArcGISImageServiceVectorLayer: "ImageryLayer", ArcGISMapServiceLayer: "MapImageLayer", ArcGISTiledImageServiceLayer: "ImageryTileLayer", ArcGISTiledMapServiceLayer: "TileLayer", OpenStreetMap: "OpenStreetMapLayer", VectorTileLayer: "VectorTileLayer", WebTiledLayer: "WebTileLayer", BingMapsAerial: "BingMapsLayer", BingMapsRoad: "BingMapsLayer", BingMapsHybrid: "BingMapsLayer", WMS: "WMSLayer", DefaultTileLayer: "TileLayer" }, m = { ...u, LinkChartLayer: "LinkChartLayer" }, f = { ...d }, T = { ...I };
async function g(e2, r2) {
  return G(await M(e2, r2), e2, r2);
}
async function G(e2, r2, a2) {
  const t2 = new e2();
  return t2.read(r2, a2.context), "group" === t2.type && ("GroupLayer" === r2.layerType ? await w(t2, r2, a2) : v(r2) ? h(t2, r2, a2.context) : A(r2) && await C(t2, r2, a2.context)), await t$1(t2, a2.context), t2;
}
async function M(e$2, n$1) {
  const c2 = n$1.context, l2 = b(c2);
  let s2 = e$2.layerType || e$2.type;
  !s2 && n$1?.defaultLayerType && (s2 = n$1.defaultLayerType);
  const p2 = l2[s2];
  let S2 = p2 ? a[p2] : a.UnknownLayer;
  if (v(e$2)) {
    const y = c2?.portal;
    if (e$2.itemId) {
      const i = new S$1({ id: e$2.itemId, portal: y });
      await i.load();
      const L$1 = (await L(i, new e$1())).className || "UnknownLayer";
      S2 = a[L$1];
    }
  } else
    "ArcGISFeatureLayer" === s2 ? e(e$2) || r(e$2) ? S2 = a.MapNotesLayer : n(e$2) ? S2 = a.RouteLayer : A(e$2) && (S2 = a.GroupLayer) : e$2.wmtsInfo?.url && e$2.wmtsInfo.layerIdentifier ? S2 = a.WMTSLayer : "WFS" === s2 && "2.0.0" !== e$2.wfsInfo?.version && (S2 = a.UnsupportedLayer);
  return S2();
}
function A(e2) {
  if ("ArcGISFeatureLayer" !== e2.layerType || v(e2))
    return false;
  return (e2.featureCollection?.layers?.length ?? 0) > 1;
}
function v(e2) {
  return "Feature Collection" === e2.type;
}
function b(e2) {
  let r2;
  switch (e2.origin) {
    case "web-scene":
      switch (e2.layerContainerType) {
        case "basemap":
          r2 = S;
          break;
        case "ground":
          r2 = s;
          break;
        case "tables":
          r2 = p;
          break;
        default:
          r2 = l;
      }
      break;
    case "link-chart":
      switch (e2.layerContainerType) {
        case "basemap":
          r2 = T;
          break;
        case "tables":
          r2 = f;
          break;
        default:
          r2 = m;
      }
      break;
    default:
      switch (e2.layerContainerType) {
        case "basemap":
          r2 = I;
          break;
        case "tables":
          r2 = d;
          break;
        default:
          r2 = u;
      }
  }
  return r2;
}
async function w(r2, a2, t2) {
  const y = new V(), i = c(y, Array.isArray(a2.layers) ? a2.layers : [], t2);
  try {
    try {
      if (await i, "group" === r2.type)
        return r2.layers.addMany(y), r2;
    } catch (L2) {
      r2.destroy();
      for (const e2 of y)
        e2.destroy();
      throw L2;
    }
  } catch (L2) {
    throw L2;
  }
}
function h(e2, r2, a2) {
  r2.itemId && (e2.portalItem = new S$1({ id: r2.itemId, portal: a2?.portal }), e2.when(() => {
    const t2 = (t3) => {
      const y = t3.layerId;
      F(t3, e2, r2, y, a2);
      const i = r2.featureCollection?.layers?.[y];
      i && t3.read(i, a2);
    };
    e2.layers?.forEach(t2), e2.tables?.forEach(t2);
  }));
}
async function C(e2, r2, t2) {
  const y = a.FeatureLayer, i = await y(), L2 = r2.featureCollection, o = L2?.showLegend, n2 = L2?.layers?.map((a2, y2) => {
    const L3 = new i();
    L3.read(a2, t2);
    const n3 = { ...t2, ignoreDefaults: true };
    return F(L3, e2, r2, y2, n3), null != o && L3.read({ showLegend: o }, n3), L3;
  });
  e2.layers.addMany(n2 ?? []);
}
function F(e2, r2, a2, t2, y) {
  e2.read({ id: `${r2.id}-sublayer-${t2}`, visibility: a2.visibleLayers?.includes(t2) ?? true }, y);
}
export {
  w as populateGroupLayer,
  c as populateOperationalLayers
};
