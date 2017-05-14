import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
// import * as mutations from './mutations'
import { firebaseMutations } from 'vuexfire'

const store = new Vuex.Store({
  state: {
    listplay: [],
    listbook: []
  },
  getters,
  mutations: {
    ...firebaseMutations
  },
  actions
})

export default store
