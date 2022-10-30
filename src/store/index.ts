import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import { Actions, actions } from './auth/action'
import { Getters, getters } from './auth/getters'
import { Mutations, mutations } from './auth/mutation'
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
  getters,
  mutations,
  actions,
})