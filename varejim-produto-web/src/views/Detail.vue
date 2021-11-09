<template>
  <div id="detail">
    <b-container>
      <b-row class="my-2">
        <div class="center">
          <h1 class="mx-2">{{ produto.descricao }}</h1>
          <b-button
            class="mx-1"
            @click="apagarProduto(produto)"
            variant="danger"
          >
            Apagar</b-button
          >
        </div>
      </b-row>
      <b-form class="my-4" @submit.prevent="enviarDados">
        <b-row>
          <b-col offset-md="1" md="5" cols="12">
            <b-input v-model="desc" placeholder="Descrição" maxlength="120" />
          </b-col>
          <b-col md="4" cols="12">
            <b-form-select
              v-model="selecionado"
              :options="opcoes"
              class="form-select"
            ></b-form-select>
          </b-col>
          <b-col md="1" cols="12">
            <b-button class="my-2" type="submit" variant="primary"
              >Enviar</b-button
            >
          </b-col>
        </b-row>
      </b-form>
      <b-badge
        pill
        variant="danger"
        class="bg-danger mx-1"
        v-if="!valido && $v.desc.$invalid"
        >Erro ! informe uma descrição</b-badge
      >
      <b-badge
        variant="danger"
        class="bg-danger"
        v-if="!valido && $v.selecionado.$invalid"
        >Erro ! informe uma categoria</b-badge
      >
    </b-container>
  </div>
</template>
<script>
import validacao from "@/mixins/validacao";
import formProduto from "@/mixins/formProduto";
export default {
  mixins: [validacao, formProduto],
  async mounted() {
    this.produto = await this.$services.produtos.buscarProdutoPorId({
      id: this.$route.params.idProduto,
    });
    this.produto = this.produto.items[0];
    this.preencherOpcoes();
  },
  data() {
    return {
      produto: [],
    };
  },
  methods: {
    enviarDados() {
      this.checkData();
      if (this.valido) {
        this.$services.produtos.alterarProduto(this.$route.params.idProduto, {
          descricao: this.desc,
          secao_id: this.selecionado,
        });
      }
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
