import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const state = {
  mobile: true,
  pc: false,
  width: 0,
  height: 0
}

const actions = {
  setAppDimensions ({ commit }, { height, width }) {
    let view = 'mobile'
    if (width >= 768) view = 'pc'

    commit('setAppDimensions', {
      mobile: view === 'mobile',
      pc: view === 'pc',
      width,
      height
    })
  },
}
const mutations = {
  setAppDimensions (state, props) {
    state.mobile = props.mobile
    state.pc = props.pc
    state.height = props.height
    state.width = props.width
  },
}


export default new Vuex.Store({
	state,
	actions,
	mutations,
	modules: {}
})