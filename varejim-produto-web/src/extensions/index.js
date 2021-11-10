import clone from "just-clone";
import store from "../store";
const extensions = {
  transformarArrayIdDescParaValueText: (naoTratado) => {
    const naoTratadoCopy = clone(naoTratado)
    const tratado = naoTratadoCopy.map((el) => {
      return { value: el.id, text: el.descricao };
    });

    return tratado;
  },
  isNumeric:(num)=>{
    return !isNaN(parseFloat(num)) && isFinite(num)
  },
  notificar:(sucesso, msg)=> {
    store.commit("mostrarAlerta", { msg: msg, sucesso: sucesso });
  },
};
export default extensions;
