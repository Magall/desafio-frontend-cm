import store from "@/store";
import repository from "@/repository";
import extensions from "@/extensions";
const produtos = {
  filtrarProdutos: (filtro) => {
    return store.getters.filtrarProdutos(filtro);
  },
  paginarProdutos: (params)=>{
    return repository.produtos.paginacao(params)
  },
  buscarProdutoPorId:(params)=>{
    return repository.produtos.buscarProdutoPorId(params)
  },
  apagarProduto: async (id) => {
    try {
      await repository.produtos.apagarProduto(id);
      await store.dispatch("recuperarProdutosApi");
      extensions.notificar(true, "Produto apagado com sucesso !");
    } catch (err) {
      console.log(err);
      extensions.notificar(false, "Erro ao apagar produto.");
    }
  },
  recuperarProdutosApi: async () => {
    return new Promise(async (resolve, reject) => {
      try {
        const produtos = await store.dispatch("recuperarProdutosApi");
        resolve(produtos);
      } catch (err) {
        extensions.notificar(false, "Erro ao recuperar produtos");
        reject(err);
      }
    });
  },
  recuperarProduto: (id) => {
    return store.getters.recuperarProduto(id);
  },
  alterarProduto: async (id, params) => {
    try {
      await repository.produtos.alterarProduto(id, params);
      extensions.notificar(true, "Produto Alterado com sucesso !");
      await store.dispatch("recuperarProdutosApi");
    } catch (err) {
      extensions.notificar(false, "Erro ao alterar produto.");
    }
  },
};
export default produtos;
