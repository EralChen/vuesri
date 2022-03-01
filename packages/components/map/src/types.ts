import {__VumViewer} from 'vuesium'
import { Map } from 'mars3d'
export type LoadEvent = {
  viewer:__VumViewer.VumViewer
  map: Map
}
export type DefaultOptions = ConstructorParameters<typeof Map>['1']
export {
  Map,
}