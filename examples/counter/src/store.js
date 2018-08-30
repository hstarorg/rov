import { Store } from '../../../src';
const types = {
  SET_VALUE: 'SET_VALUE'
};

const state = { a: 1 };

const mutations = {
  [types.SET_VALUE](state, payload) {
    state.a = payload.value;
  }
};

const actions = {
  setValue(ctx, value) {
    ctx.commit(types.SET_VALUE, { value });
  }
};

const getters = {
  a(state) {
    return state.a;
  }
};

export const store = new Store({
  state,
  mutations,
  actions,
  getters,
  plugins: []
});
