import { mergeImport } from '../string'

describe('utils-string', () => {
  const str = `<script lang="ts" setup>
import { VaMapView } from 'vuesri'
import { VaSkyBasemap } from 'vuesri'
import { VaBasemap } from 'vuesri'
import { VaBasemapToggle } from 'vuesri'
import { VaBasemapToggleNextBasemap } from 'vuesri'
import TileLayer from 'esri/layers/TileLayer'
const baseLayers: __esri.LayerProperties[] = [
  new TileLayer({
    url: 'http://116.63.63.191:6080/arcgis/rest/services/SBWB/NB_DT3857/MapServer',
  }),
]
</script>
<template>
`
  const nStr = `<script lang="ts" setup>
import { VaMapView, VaSkyBasemap, VaBasemap, VaBasemapToggle, VaBasemapToggleNextBasemap } from 'vuesri'
import TileLayer from 'esri/layers/TileLayer'
const baseLayers: __esri.LayerProperties[] = [
  new TileLayer({
    url: 'http://116.63.63.191:6080/arcgis/rest/services/SBWB/NB_DT3857/MapServer',
  }),
]
</script>
<template>
`
  test('mergeImport', () => {
    expect(mergeImport(str)).toBe(nStr)
  })
})
