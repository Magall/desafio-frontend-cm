import Vue from "vue";
import Vuex from "vuex";
import Repository from "@/repository";
import clone from "just-clone";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    produtos: {items:[]},
    filtro:''
  },
  mutations: {
    atualizarProduto(state, novosProdutos) {
      state.produtos = novosProdutos;
    },
    atualizarFiltro(state,novoFiltro){
      state.filtro = novoFiltro
    }
  },
  actions: {
    async recuperarProdutosApi({ commit }) {
      try {
        const produtos = await Repository.produtos.listarTodosProdutos();
        commit("atualizarProduto", produtos);
      } catch (err) {
        console.log(err);
      }
    },
  },
  getters: {
    filtrarProdutos: (state) => (filtro) => {
  
        
        const produtos = clone(state.produtos);
        const produtosFiltrados = produtos.items.filter((el) => {
          if (
            el.descricao
              .trim()
              .toLowerCase()
              .includes(filtro.trim().toLowerCase()) ||
            el.id.toString().includes(filtro)
          ) {
            return el;
          }
        });
        const resp = {
          start: produtos.start,
          limit: produtos.limit,
          items: produtosFiltrados,
        };
        return resp;
      
    },
    recuperarProduto: (state) => (id) => {
     
      const pos  = state.produtos.items.findIndex(el =>{return el.id==id})
      return state.produtos.items[pos];
      // return state.produtos
    },
    produtos:(state) =>{
      return state.produtos
    },
    filtro:(state) =>{
      return state.filtro
    }
  },
  modules: {},
});
