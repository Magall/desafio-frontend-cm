import repository from "../repository";
import extensions from "../extensions";
import store from "../store";
const secoes = {
  recuperarDadosSelectSecoes: async () => {
    return new Promise(async (resolve, reject) => {
      try {
        const secoes = await repository.secoes.recuperarTodasSecoes();
        resolve(extensions.transformarArrayIdDescParaValueText(secoes.items));
      } catch (err) {
        extensions.notificar(false, "Erro ao recuperar seções");
      }
    });
  },
};
export default secoes;
