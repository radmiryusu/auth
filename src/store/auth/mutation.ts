import { MutationTree } from 'vuex'
import { MutationTypes } from './mutation-types'
import { State } from '../index'

export type Mutations<S = State> = {
  [MutationTypes.SET_COUNTER](state: S, payload: number): void
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_COUNTER](state, payload: number) {
    state.count = payload
  },
}