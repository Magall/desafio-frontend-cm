<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>
<script>
import Header from "@/components/Header";
export default {
  components: { Header },
   created() {
    try{

      console.log('c1')
      
      this.$store.dispatch('recuperarProdutosApi')
     console.log('c2')
    }
    catch(err){
      console.log('fds')
    }
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
 