
import { sCursor, sMitter } from '@vuesri/shared/symbol'
import { Emitter } from 'mitt'
import { MitterEvents } from '@vuesri/components/map-view/src/events/types'
declare global {
  namespace __esri {
    interface MapView {
      [sMitter]: Emitter<MitterEvents>
    }
    interface Layer {
      [sCursor]: string
    }
  }
}
