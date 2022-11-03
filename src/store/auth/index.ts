import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import { Actions, actions } from './action'
import { Getters, getters } from './getters'
import { Mutations, mutations } from './mutation'

export const store = createStore<any>({
  state: {
    count: 0,
  },
  getters,
  mutations,
  actions,
})

export default store