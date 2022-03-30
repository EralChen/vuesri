
import { sMitter } from '@vuesri/shared/symbol'
import { Emitter } from 'mitt'
declare global {
  namespace __esri {
    interface MapView {
      [sMitter]: Emitter<any>
    }
  }
}
