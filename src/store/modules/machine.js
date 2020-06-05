export default {
  namespaced: true,
  state() {
    return {
      timesServiced: 0
    };
  },
  actions: {
    serviceMachine({ commit }) {
      commit("completeServiceRequest");
    }
  },
  getters: {},
  mutations: {
    completeServiceRequest(state) {
      state.timesServiced++;
    }
  }
};
