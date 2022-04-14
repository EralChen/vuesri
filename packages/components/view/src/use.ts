import { AnyFunc } from 'vunk/shared/types'
import { MitterEvents } from './types'
import { ToggleHandler } from 'vunk/shared/utils-class/ToggleHandler'
import { Emitter } from 'mitt'
 
export const useMitterToggleHandler = (mitter: Emitter<MitterEvents>) => {
  return class MitterToggleHandler<T extends keyof MitterEvents> extends ToggleHandler {
    name: T
    handler: AnyFunc
    cacheData: any
    constructor (name: T, handler: (e: MitterEvents[T]) => void) {
      super()
      this.name = name
      this.handler = handler
    }
    add () {
      mitter.on(this.name, this.handler)
      this.removeHandler = () => mitter.off(this.name, this.handler)
    }
  }
}
