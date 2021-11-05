import client from "../config/client";
const produtos = {
    listarTodosProdutos:(params) =>{
        return client.get("/produtos",params);
    }
}
export default produtos