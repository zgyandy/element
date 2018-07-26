import * as types from './type.js'
export default {
  add: (state, data) => {
    state.num++
  },
  rad: (state, data) => {
    state.num--
  },
  loginIn: (state, data) => {
    state.isLogin = 1
  },
  loginOut: (state, data) => {
    state.isLogin = 0
  },
  blNav: (state, data) => {
    state.blNav = data
  },
  blFoo: (state, data) => {
    state.blFoo = data
  },
  [types.AddTest]: (state) => {
    state.test++
  },
  [types.RadTest]: (state) => {
    state.test--
  }
}
