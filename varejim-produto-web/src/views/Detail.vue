<template>
  <div id="detail">
    <b-container>
      <b-row class="my-2">
        <div class="center">
          <span class="mx-2" v-if="produto">{{ produto.descricao }}</span>

          <b-button
            class="mx-1"
            @click="apagarProduto(produto)"
            variant="danger"
          >
            Apagar</b-button
          >
        </div>
      </b-row>
      <b-row>
        <b-col md="5" cols="12">
          <b-input placeholder="Descrição" maxlength="120" />
        </b-col>
        <b-col md="4" cols="12">
          <b-form-select
            v-model="selecionado"
            :options="opcoes"
            class="form-select"
          ></b-form-select>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  async mounted() {
    this.opcoes.push({ value: null, text: 'Selecione uma categoria',disabled:true },)
    this.opcoes.push(... await this.$services.secoes.recuperarDadosSelectSecoes());
  },
  data() {
    return {
      opcoes: [],
      selecionado: null,
    };
  },
  computed: {
    produto() {
      if (this.$store.getters.produtos.items.length > 0) {
        return this.$services.produtos.recuperarProduto(
          this.$route.params.idProduto
        );
      } else return false;
    },
  },
};
</script>
<style lang="scss" scoped>
.center {
  display: flex;
  justify-content: center;
}
</style>
