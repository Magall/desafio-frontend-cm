import client from "../config/client";
const produtos = {
  listarTodosProdutos: () => {
    return client.get("/produtos", null);
  },
  apagarProduto: (id) => {
    return client.delete("/produtos",  id );
  },
};
export default produtos;
