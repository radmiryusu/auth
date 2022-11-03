import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import auth from './auth/index'
// define your typings for the store state
export interface State {
  count: number
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    count: 0,
  },
  modules: {
    auth
  }
})