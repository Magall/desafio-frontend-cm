import client from "../config/client";
const produtos = {
  listarTodosProdutos: () => {
    return client.get("/produtos", null);
  },
  apagarProduto: (id) => {
    return client.delete("/produtos", id);
  },
  alterarProduto: (id, params) => {
    return client.put("/produtos/" + id, params);
  },
  paginacao: (params) => {
    return client.get("/produtos", params);
  },
  buscarProdutoPorId: (idProduto) => {
    return client.get("/produtos",idProduto)
  },
  inserirProduto:(params) =>{
    return client.post("/produtos",params)
  }
};
export default produtos;
