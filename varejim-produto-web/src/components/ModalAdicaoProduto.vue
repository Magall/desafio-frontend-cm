<template>
  <b-modal
    id="modal-add"
    title="Cadastro de Produtos"
    hide-footer
    @hidden="fechei"
  >
    <b-form class="my-4" @submit.prevent="enviarDados">
      <b-row align-v="center">
        <b-col md="5" cols="12">
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
  </b-modal>
</template>
<script>
import validacao from "@/mixins/validacao";
import formProduto from "@/mixins/formProduto";
export default {
  mixins: [validacao, formProduto],
  async mounted() {
    this.preencherOpcoes();
  },
  methods: {
    async enviarDados() {
      this.checkData();
      if (this.valido) {
        await this.$services.produtos.inserirProduto({
          descricao: this.desc,
          secao_id: this.selecionado,
        });
      }
    },
    fechei() {
      this.$emit("fechei");
    },
  },
};
</script>
