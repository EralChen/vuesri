import { mergeImport } from '../string'

describe('utils-string', () => {
  const str = `<script lang="ts" setup>
import { VaSkyBasemap,VaMapView } from 'vuesri'
import { VaBasemap } from 'vuesri'
import { VaBasemapToggle } from 'vuesri'
import TileLayer from 'esri/layers/TileLayer'
import { VaBasemapToggleNextBasemap } from 'vuesri'
import { a } from 'b'
const baseLayers: __esri.LayerProperties[] = [
  new TileLayer({
    url: 'http://116.63.63.191:6080/arcgis/rest/services/SBWB/NB_DT3857/MapServer',
  }),
]
</script>
`
  const nStr = `<script lang="ts" setup>
import { VaSkyBasemap, VaMapView, VaBasemap, VaBasemapToggle, VaBasemapToggleNextBasemap } from 'vuesri'
import TileLayer from 'esri/layers/TileLayer'
import { a } from 'b'
const baseLayers: __esri.LayerProperties[] = [
  new TileLayer({
    url: 'http://116.63.63.191:6080/arcgis/rest/services/SBWB/NB_DT3857/MapServer',
  }),
]
</script>
`
  test('toFirstUpperCase', () => {
    expect(mergeImport(str)).toBe(nStr)
  })
})
