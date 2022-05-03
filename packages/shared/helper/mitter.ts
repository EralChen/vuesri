import { Emitter } from 'mitt'
import { EmitterValue } from '../types'
import { ToggleHandler } from 'vunk/shared/utils-class/ToggleHandler'
import { AnyFunc } from 'vunk/shared/types'

export const useMitterToggleHandler =  <
  T extends Emitter<any>,
>(mitter: T) => {
  return class MitterToggleHandler<K extends keyof EmitterValue<T>> extends ToggleHandler {
    name: K
    handler: AnyFunc
    cacheData: any
    constructor (name: K, handler: (e: EmitterValue<T>[K]) => void) {
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
