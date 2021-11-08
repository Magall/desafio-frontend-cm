<template>
  <div class="home">
    <b-container>
      <b-row>
        <h2 class="my-3">Produtos</h2>
      </b-row>
      <b-row>
        <b-col cols="12">
          <b-form-input placeholder="Pesquisa" v-model="filtro" class="my-3" />
        </b-col>
      </b-row>
      <b-row>
        <b-col md="12">
          <b-card
            v-for="produto in produtos.items"
            :key="produto.id"
            align="left"
            class="my-1"
          >
            <b-row align-v="center">
              <b-col md="10" cols="4">
                <b-card-text align="left">
                  {{ produto.descricao }}
                </b-card-text>
              </b-col>
              <b-col md="2" offset-md="" cols="8">
                <b-button @click="goToDetail(produto.id)" variant="info">
                  Editar</b-button
                >

                <b-button
                  class="mx-1"
                  @click="apagarProduto(produto)"
                  variant="danger"
                >
                  Apagar</b-button
                >
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  async mounted() {
    if (this.$store.getters.filtro) {
      this.filtro = this.$store.getters.filtro;
      this.buscarProdutos(this.filtro);
    } else {
      if (this.produtosVuex.items.length > 0) {
        this.buscarProdutos("");
      }
    }
  },
  methods: {
    goToDetail(id) {
      this.$store.commit("atualizarFiltro", this.filtro);
      this.$router.push({ name: "Detail", params: { idProduto: id } });
    },
    async buscarProdutos(val) {
      if (this.$store.getters.produtos.items.length > 0) {
        try {
          this.produtos = await this.$services.produtos.filtrarProdutos(val);
        } catch (err) {
          console.log(err);
          return {};
        }
      }
    },
    async apagarProduto(produto) {
      try {
        await this.$services.produtos.apagarProduto(produto.id);
        this.buscarProdutos(this.filtro);
      } catch (err) {
        console.log(err);
      }
    },
  },
  computed: {
    filtroVuex() {
      return this.$store.getters.filtro;
    },
    produtosVuex() {
      return this.$store.getters.produtos;
    },
  },
  watch: {
    async filtro(newValue) {
      this.buscarProdutos(newValue);
    },
    produtosVuex(loaded) {
      this.buscarProdutos("");
    },
  },
  data() {
    return {
      filtro: "",
      produtos: [],
    };
  },
};
</script>
