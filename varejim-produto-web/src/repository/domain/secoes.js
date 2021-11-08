import client from "../config/client";
const secoes = {
  recuperarTodasSecoes: () => {
    return client.get("/secoes");
  },
};
export default secoes;
