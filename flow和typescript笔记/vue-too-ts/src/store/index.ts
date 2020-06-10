import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
Vue.use(Vuex)

import { state, State } from './state'
import { mutations } from './mutations'
import { getters } from './getters'

const vuexLocal = new VuexPersistence<RootState>({
  storage: window.localStorage
})

export default new Vuex.Store<State>({
  state,
  mutations,
  getters,
  plugins: [vuexLocal.plugin]
})
