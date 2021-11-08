import clone from "just-clone";
const tratar = {
  transformarArrayIdDescParaValueText: (naoTratado) => {
    const naoTratadoCopy = clone(naoTratado)
    const tratado = naoTratadoCopy.map((el) => {
      return { value: el.id, text: el.descricao };
    });

    return tratado;
  },
  transformarIdDescParaValueText(naoTratado){
      console.log('op1',naoTratado)
     const naoTratadoCopy = clone(naoTratado)
      return{value:naoTratadoCopy.secao_id,text:naoTratadoCopy.descricao}
  }
};
export default tratar;
