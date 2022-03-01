import { ReturnVoid } from '@vuesium-mars3d/shared'
import { Map, TilesetLayer } from 'mars3d'
export type LoadEvent = {
  map: Map,
  layer: TilesetLayer
}
export type OnLoad = (e:LoadEvent) => ReturnVoid
export type DefaultOptions = ConstructorParameters<typeof TilesetLayer>['0']
