import Vue from "vue";
import Vuex from "vuex";
import Repository from "@/repository";
import clone from "just-clone";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {

    filtro: "",
    mostrarAlerta: false,
    msg: "",
    sucesso: false,
  },
  mutations: {
    
    atualizarFiltro(state, novoFiltro) {
      state.filtro = novoFiltro;
    },
    mostrarAlerta(state, payload) {
      state.msg = payload.msg;
      state.sucesso = payload.sucesso;
      state.mostrarAlerta = true;
    },
    fecharAlerta(state) {
      state.mostrarAlerta = false;
    },
  },
  actions: {
   
  },
  getters: {
    
    
    

    filtro: (state) => {
      return state.filtro;
    },
    getMsg: (state) => {
      return state.msg;
    },
    getShow: (state) => {
      return state.mostrarAlerta;
    },
    getSucesso: (state) => {
      return state.sucesso;
    },
  },
  modules: {},
});
