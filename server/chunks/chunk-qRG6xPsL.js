const view = {
  text: "View 视图",
  children: [
    {
      link: "/map-view",
      text: "MapView"
    },
    {
      link: "/scene-view",
      text: "SceneView"
    },
    {
      link: "/view",
      text: "View"
    },
    {
      link: "/view-when",
      text: "ViewWhen"
    }
  ]
};
const basic = {
  text: "Basic 基础",
  children: [
    {
      link: "/graphic",
      text: "Graphic"
    }
  ]
};
const basemap = {
  text: "Basemap 底图",
  children: [
    {
      link: "/basemap",
      text: "Basemap"
    },
    {
      link: "/tdt-basemap",
      text: "TdtBasemap"
    }
  ]
};
const layer = {
  text: "Layer 图层",
  children: [
    {
      link: "/layer",
      text: "Layer"
    },
    {
      link: "/tile-layer",
      text: "TileLayer"
    },
    {
      link: "/web-tile-layer",
      text: "WebTileLayer"
    },
    {
      link: "/feature-layer",
      text: "FeatureLayer"
    },
    {
      link: "/server-feature-layer",
      text: "ServerFeatureLayer"
    },
    {
      link: "/client-feature-layer",
      text: "ClientFeatureLayer"
    },
    {
      link: "/derived-feature-layer",
      text: "DerivedFeatureLayer"
    },
    {
      link: "/layer-when",
      text: "LayerWhen"
    },
    {
      link: "/graphics-layer",
      text: "GraphicsLayer"
    },
    {
      link: "/imagery-layer",
      text: "ImageryLayer"
    },
    {
      link: "/scene-layer",
      text: "SceneLayer"
    },
    {
      link: "/geojson-layer",
      text: "GeojsonLayer"
    },
    {
      link: "/imagery-tile-layer",
      text: "ImageryTileLayer"
    },
    {
      link: "/media-layer",
      text: "MediaLayer"
    },
    {
      link: "/map-image-layer",
      text: "MapImageLayer"
    },
    {
      link: "/wmts-layer",
      text: "WmtsLayer"
    },
    {
      link: "/building-scene-layer",
      text: "BuildingSceneLayer"
    },
    {
      link: "/wms-layer",
      text: "WmsLayer"
    },
    {
      link: "/wfs-layer",
      text: "WfsLayer"
    }
  ]
};
const customLayer = {
  text: "CustomLayer 自定义图层",
  children: [
    {
      link: "/feature-popup-layer",
      text: "FeaturePopupLayer"
    },
    {
      link: "/masking-layer",
      text: "MaskingLayer"
    }
  ]
};
const sourceLayer = {
  text: "SourceLayer 源图层",
  children: [
    {
      link: "/tdt-web-tile-layer",
      text: "TdtWebTileLayer"
    },
    {
      link: "/tdt-wmts-layer",
      text: "TdtWmtsLayer"
    }
  ]
};
const widgets = {
  text: "Widgets 小部件",
  children: [
    {
      link: "/basemap-toggle",
      text: "BasemapToggle"
    },
    {
      link: "/sketch",
      text: "Sketch"
    },
    {
      link: "/popup-template",
      text: "PopupTemplate"
    },
    {
      link: "/print",
      text: "Print"
    },
    {
      link: "/view-ui",
      text: "ViewUi"
    },
    {
      link: "/geo-view-ui",
      text: "GeoViewUi"
    },
    {
      link: "/zoom",
      text: "Zoom"
    },
    {
      link: "/slice",
      text: "Slice"
    },
    {
      link: "/building-explorer",
      text: "BuildingExplorer"
    }
  ]
};
const logic = {
  text: "Logic 逻辑",
  children: [
    {
      link: "/tree-layer-group",
      text: "TreeLayerGroup"
    },
    {
      link: "/wms-layer-on-click",
      text: "WmsLayerOnClick"
    },
    {
      link: "/wms-layer-popup-template",
      text: "WmsLayerPopupTemplate"
    },
    {
      link: "/layer-renderer",
      text: "LayerRenderer"
    },
    {
      link: "/wmts-layer-on-click",
      text: "WmtsLayerOnClick"
    }
  ]
};
const component = {
  view,
  basic,
  basemap,
  layer,
  customLayer,
  sourceLayer,
  widgets,
  logic
};
export {
  basemap,
  basic,
  customLayer,
  component as default,
  layer,
  logic,
  sourceLayer,
  view,
  widgets
};
