let validacaoMixin = {
  data() {
    return {
      valido: true,
    };
  },
  methods: {
    checkData() {
      if (this.$v.$invalid) {
        this.valido = false;
      } else {
        this.valido = true;
      }
    },
  }
};
export default validacaoMixin;
