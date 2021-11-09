let global = {
  methods: {
    notificar(sucesso, msg) {
      this.$store.commit("mostrarAlerta", { msg: msg, sucesso: sucesso });
    },
  },
};
export default global;
