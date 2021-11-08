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
  },
  computed: {
    invalidos() {
      if (this.$v) {
        const keys = Object.keys(this.$v).filter((el) => {
          return !el.includes("$");
        });
        let invalidos = [];
        keys.forEach((el) => {
          if (this.$v[el].$invalid) {
            invalidos.push(el);
          }
        });
        return invalidos;
      }
      return null
    },
  },
};
export default validacaoMixin;
