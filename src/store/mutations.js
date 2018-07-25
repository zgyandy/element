import * as types from './type.js'
export default {
  add: (state, data) => {
    state.num++
  },
  rad: (state, data) => {
    state.num--
  },
  [types.AddTest]: (state) => {
    state.test++
  },
  [types.RadTest]: (state) => {
    state.test--
  }
}
