import { GetterTree } from 'vuex'
import { State } from '../index'

export type Getters = {
  doubledCounter(state: State): number
}

export const getters: GetterTree<State, State> & Getters = {
  doubledCounter: (state) => {
    return state.count * 2
  },
}