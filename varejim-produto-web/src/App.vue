<template>
  <div id="app">
    <Header />
    <Alert
      :msg="this.$store.getters.getMsg"
      :show="this.$store.getters.getShow"
      :sucesso="this.$store.getters.getSucesso"
    />
    <router-view />
  </div>
</template>
<script>
import Header from "@/components/Header";
import Alert from "@/components/Alert";
export default {
  components: { Header, Alert },
  created() {
    try {
      this.$store.dispatch("recuperarProdutosApi");
    } catch (err) {}
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
