import store from "../store";
import repository from "../repository";
const produtos = {
  filtrarProdutos: (filtro) => {
    return store.getters.filtrarProdutos(filtro);
  },
  apagarProduto: async (id) => {
    try {
      await repository.produtos.apagarProduto(id);
      await store.dispatch("recuperarProdutosApi");
      alert("Produto " + id + " apagado com sucesso.");
    } catch (err) {
      console.log(err);
      alert("Erro ao apagar produto");
    }
  },
  recuperarProdutosApi: async () => {
    return await store.dispatch("recuperarProdutosApi");
  },
  recuperarProduto: (id) => {
    return store.getters.recuperarProduto(id);
  },
  alterarProduto: async (id, params) => {
    try {
      await repository.produtos.alterarProduto(id, params);
      await store.dispatch("recuperarProdutosApi");
    } catch (err) {
      alert("Erro na alteração");
      console.log("e", err);
    }
  },
};
export default produtos;
