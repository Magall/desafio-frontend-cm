import client from "../config/client";
const produtos = {
  listarTodosProdutos: () => {
    return client.get("/produtos", null);
  },
  apagarProduto: (id) => {
    return client.delete("/produtos",  id );
  },
  alterarProduto(id,params){
    return client.put("/produtos/"+id , params)
  }
};
export default produtos;
