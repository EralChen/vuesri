
import { sCursor, sMitter } from '@vuesri/shared/symbol'
import { MitterEvents } from '@vuesri/components/view/src/type'
import { Emitter } from 'mitt'
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
