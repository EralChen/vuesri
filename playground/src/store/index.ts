import { createStore, useStore as baseUseStore } from 'vuex'
import * as User from './user/index'
import type { InjectionKey } from 'vue'
import type { Store } from 'vuex'
type State = User.State
export const store = createStore<State>({
  state: {
    ...User.state,
  },

  actions: {
    ...User.actions,
  },
})

export const key: InjectionKey<Store<State>> = Symbol('store')
export function useStore () {
  return baseUseStore(key)
}
