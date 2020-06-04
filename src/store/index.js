import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    machine: {
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
    }
  }
});

export default store;
