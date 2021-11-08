import store from "../store";
import repository from "../repository";
const produtos = {
  filtrarProdutos:  (filtro) => {
    return store.getters.filtrarProdutos(filtro);
  },
  apagarProduto: async (id) => {
    try{
      await repository.produtos.apagarProduto(id);
      alert("Produto " + produto.id + " apagado com sucesso.");
    }
    catch (err){
      alert("Erro ao apagar produto")
    }
  },
  RecuperarProdutosApi: async() => {
    return await store.dispatch("recuperarProdutosApi");
  },
  recuperarProduto: (id) => {
    return store.getters.recuperarProduto(id);
  },
};
export default produtos;
