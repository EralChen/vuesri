import MapImageLayer from 'esri/layers/MapImageLayer'

const imgLoad = (img: HTMLImageElement) => new Promise((resolve) => {
  img.onload = resolve
})

export interface PictureLayerProperties extends __esri.MapImageLayerProperties {
  extent: __esri.Extent
  units: string
}
export class PictureLayer extends MapImageLayer {
  extent: __esri.Extent
  units: string

  /* 实例 */
  canvas = document.createElement('canvas')
  canvasContext = this.canvas.getContext('2d') as CanvasRenderingContext2D
  _picture: HTMLImageElement

  /* 优化项 */
  _lastImageUTag: string
  _lastImage: string // imgurl
  _timer = 0
  debounce = 200
  multiple = 100

  constructor (options: PictureLayerProperties) {
    super(options)
    console.log(options)
    this.maxScale = options.maxScale || 0
    this.minScale = options.minScale || 0
    this.extent = options.extent
    this.url = options.url as string
    this.units = options.units || 'esriMeters'
  }

  private _setupSourceJSON (spatialReference: __esri.SpatialReferenceProperties, extent: __esri.Extent, units: string) {
    const json = {
      currentVersion: '10.7',
      serviceDescription: '',
      mapName: 'Layers',
      description: '',
      copyrightText: '',
      supportsDynamicLayers: true,
      singleFusedMapCache: false,
      minScale: 0,
      maxScale: 0,
      units: units,
      supportedImageFormatTypes: 'PNG32,PNG24,PNG,JPG',
      capabilities: 'Map',
      supportedQueryFormats: 'JSON, AMF, geoJSON',
      exportTilesAllowed: false,
      supportsDatumTransformation: true,
      maxRecordCount: 1000,
      maxImageHeight: 4096,
      maxImageWidth: 4096,
      supportedExtensions: 'KmlServer',
      layers: [
        {
          id: 0,
          name: '' + (new Date()).valueOf() + '',
          parentLayerId: -1,
          subLayerIds: [],
          minScale: 0,
          maxScale: 0,
          type: 'Raster Layer',
        },
      ],
      tables: [],
      spatialReference: spatialReference,
      initialExtent: extent,
      fullExtent: extent,
      documentInfo: {
        Title: '',
        Author: '',
        Comments: '',
        Subject: '',
        Category: '',
        AntialiasingMode: 'None',
        TextAntialiasingMode: 'Force',
        Keywords: '',
      },
      datumTransformations: null,
    }
    return json
  }
  private _generateImageUTag (extent: __esri.Extent, width: number, height: number) {
    const left = Math.ceil(extent.xmin / this.multiple) * this.multiple
    const right = Math.ceil(extent.xmax / this.multiple) * this.multiple
    const top = Math.ceil(extent.ymax / this.multiple) * this.multiple
    const button = Math.ceil(extent.ymin / this.multiple) * this.multiple
    return `${width}_${height}_${left}_${right}_${top}_${button}`
  }

  crossRect (a: number[], c: number[]) {
    const left = Math.max(a[0], c[0])
    const right = Math.min(a[2], c[2])
    const top = Math.min(a[3], c[3])
    const bottom = Math.max(a[1], c[1])
    return [left, bottom, right, top]
  }
  isRectCross (a: number[], c: number[]) {
    return (a[0] > c[2] || a[2] < c[0] || a[1] > c[3] || a[3] < c[1]) ?
      false :
      true
  }

  draw (ctx: CanvasRenderingContext2D, picture: HTMLImageElement, width: number, height: number,
    mapBox: number[],
    pictureBox: number[],
  ) {
    const crossBox = this.crossRect(mapBox, pictureBox)
    const mapDx = width / (mapBox[2] - mapBox[0])
    const mapDy = height / (mapBox[3] - mapBox[1])

    const mapLeft = Math.ceil(mapDx * (crossBox[0] - mapBox[0]))
    const mapRight = Math.ceil(mapDx * (crossBox[2] - mapBox[0]))
    const mapTop = Math.ceil(mapDy * (mapBox[3] - crossBox[3]))
    const mapBottom = Math.ceil(mapDy * (mapBox[3] - crossBox[1]))

    const imgWidth = picture.width
    const imgHeight = picture.height
    const imgDx = imgWidth / (pictureBox[2] - pictureBox[0])
    const imgDy = imgHeight / (pictureBox[3] - pictureBox[1])

    const imgLeft = Math.ceil(imgDx * (crossBox[0] - pictureBox[0]))
    const imgRight = Math.ceil(imgDx * (crossBox[2] - pictureBox[0]))
    const imgTop = Math.ceil(imgDy * (pictureBox[3] - crossBox[3]))
    const imgBottom = Math.ceil(imgDy * (pictureBox[3] - crossBox[1]))
    ctx.clearRect(0, 0, width, height)
    ctx.drawImage(picture, imgLeft, imgTop, imgRight - imgLeft, imgBottom - imgTop, mapLeft, mapTop, mapRight - mapLeft, mapBottom - mapTop)
    return ctx
  }

  async load (signal) {
    this.sourceJSON = this._setupSourceJSON(this.spatialReference, this.extent, this.units)
    const temp = new Image()
    temp.crossOrigin = 'Anonymous'
    temp.alt = 'map-picture'
    temp.src = this.url
    await imgLoad(temp)
    this._picture = temp
    console.log('this._picture', this._picture)

    return super.load(signal)
  }

  async fetchImage (bbox: __esri.Extent, width: number, height: number, d?: __esri.MapImageLayerFetchImageOptions): Promise<HTMLImageElement> {
    const start = new Date().getTime()
    const imageUTag = this._generateImageUTag(bbox, width, height)
    /**
     * 做防抖节流处理，
     * 此处不处理会导致界面卡顿
     */
    if (d?.pixelRatio !== 1 || start - this._timer < this.debounce) {
      return this._picture
    } else {
      this._timer = start
    }

    const data = new Image()
    data.crossOrigin = 'anonymous'
    data.alt = 'map-picture'
    if (imageUTag === this._lastImageUTag) {
      data.src = this._lastImage
      return data
    }

    const overlayCanvas = this.canvas
    let ctx = this.canvasContext
    overlayCanvas.width = width
    overlayCanvas.height = height

    const mapBox = [bbox.xmin, bbox.ymin, bbox.xmax, bbox.ymax]
    const pictureBox = [this.extent.xmin, this.extent.ymin, this.extent.xmax, this.extent.ymax]

    if (this.isRectCross(mapBox, pictureBox)) {

      if (this._picture) {
        ctx = this.draw(ctx, this._picture, width, height, mapBox, pictureBox)
        data.src = overlayCanvas.toDataURL('image/png')


      } else {

        const temp = new Image()
        temp.crossOrigin = 'Anonymous'
        temp.alt = 'map-picture'
        temp.src = this.url
        await imgLoad(temp)

        this._picture = temp
        ctx = this.draw(ctx, this._picture, width, height, mapBox, pictureBox)
        data.src = overlayCanvas.toDataURL('image/png')


      }

    } else {
      ctx.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height)
      data.src = overlayCanvas.toDataURL('image/png')
    }

    this._lastImage = data.src
    this._lastImageUTag = imageUTag



    return data


  }
  
  
}