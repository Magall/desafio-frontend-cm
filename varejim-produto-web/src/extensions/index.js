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
  transformarIdDescParaValueText:(naoTratado)=>{
     const naoTratadoCopy = clone(naoTratado)
      return{value:naoTratadoCopy.secao_id,text:naoTratadoCopy.descricao}
  },
  notificar:(sucesso, msg)=> {
    store.commit("mostrarAlerta", { msg: msg, sucesso: sucesso });
  },
};
export default extensions;
