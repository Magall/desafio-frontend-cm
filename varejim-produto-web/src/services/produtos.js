import store from "../store";
const produtos = {
  filtrarProdutos:  (filtro) => {
    return store.getters.filtrarProdutos(filtro);
  },
  apagarProduto: (id) => {
    return this.$repository.produtos.apagarProduto(id);
  },
  asyncRecuperarProdutosApi: async() => {
    return await store.dispatch("recuperarProdutosApi");
  },
  recuperarProduto: (id) => {
    return store.getters.recuperarProduto(id);
  },
};
export default produtos;
