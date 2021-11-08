import repository from "../repository";
import extensions from "../extensions";
const secoes = {
  recuperarDadosSelectSecoes: async () => {
    const secoes = await repository.secoes.recuperarTodasSecoes();
    return extensions.tratarDadosApi.transformarArrayIdDescParaValueText(secoes.items);
  },
};
export default secoes;
