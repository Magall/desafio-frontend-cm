<template>
  <div id="detail">
    <b-container>
      <b-row>
        <h1 class="mb-4" v-if="produto">{{ produto.descricao }}</h1>
        
      </b-row>
      <b-row>
        <b-col cols="12">
          <b-form>
            <b-col cols="12" md="5">
              <b-input placeholder="Descrição" maxlength="120" />
            </b-col>
            <!-- <b-col cols="12" md="6"> -->
            <b-form-select
              v-model="selecionado"
              :options="options"
            ></b-form-select>
            <!-- </b-col> -->
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        { value: "d", text: "This one is disabled", disabled: true },
      ],
      selecionado: null,
    };
  },
  computed: {
    produto() {
      if (this.$store.getters.produtos.items.length>0) {
        
        return this.$services.produtos.recuperarProduto(
          this.$route.params.idProduto
        );
      }
      
    },
  },
 
};
</script>
