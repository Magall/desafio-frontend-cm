import { required } from "vuelidate/lib/validators";
let secoes = {
  data() {
    return { opcoes: [], selecionado: null, desc: "" };
  },
  methods: {
    async preencherOpcoes() {
      this.opcoes.push({
        value: null,
        text: "Selecione uma categoria",
        disabled: true,
      });
      this.opcoes.push(
        ...(await this.$services.secoes.recuperarDadosSelectSecoes())
      );
    },
    
  },
  validations: {
    desc: { required },
    selecionado: { required },
  },
  
};
export default secoes;
