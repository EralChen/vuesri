import BaseDynamicLayer from '@arcgis/core/layers/BaseDynamicLayer'
import { Point } from 'esri/geometry'

const Layer = BaseDynamicLayer.createSubclass({
  properties: {
    url: '',
    view: (window as any).__VA_MAP_VIEW__ as __esri.MapView | __esri.SceneView,
    extent: null as unknown as __esri.Extent,
    image: null as unknown as HTMLImageElement,
    canvas: null as unknown as HTMLCanvasElement,
    spatialReference: {
      wkid: 4326,
    } as __esri.SpatialReferenceProperties,
  },
  getImageUrl () {
    if (!this.image) {
      this.image = new Image()
    }
    this.image.src = this.url

    if (!this.canvas) {
      this.canvas = document.createElement('canvas')
    }
    this.canvas.width = 1781
    this.canvas.height = 950

    //左上角坐标转换屏幕坐标,为了获取canvas绘制图片的起点
    const leftTop = new Point({
      x: this.extent.xmin,
      y: this.extent.ymax,
      spatialReference: this.spatialReference,
    }) 
    const screenLeftTop = this.view.toScreen(leftTop)

    const leftBottom = new Point({
      x: this.extent.xmin,
      y: this.extent.ymin,
      spatialReference: this.spatialReference,
    })
    const screenLeftBottom = this.view.toScreen(leftBottom)


    const rightTop = new Point({
      x: this.extent.xmax,
      y: this.extent.ymax,
      spatialReference: this.spatialReference,
    }) 
    const screenRightTop = this.view.toScreen(rightTop)


    this.canvas.getContext('2d')?.drawImage(
      this.image, 
      screenLeftTop.x, screenLeftTop.y, 
      Math.abs(screenRightTop.x - screenLeftBottom.x),
      Math.abs(screenRightTop.y - screenLeftBottom.y),
    )

    return this.canvas.toDataURL('image/png')
  },
}) 

export const PictureLayer = Layer as unknown as new (options: __esri.PictureLayerProperties) => __esri.PictureLayer
