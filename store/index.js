import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
// import * as mutations from './mutations'
import { firebaseMutations } from 'vuexfire'

const store = new Vuex.Store({
  state: {
    listplay: [],
    authorized: false,
    profile: {},
    ready: false
  },
  getters,
  mutations: {
    ...firebaseMutations
  },
  actions
})

export default store
