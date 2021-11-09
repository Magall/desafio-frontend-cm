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
      <b-button @click="paginaAnterior" variant="primary" class="my-1">
        <img
        id="IconeSetaEsquerda"
        src="@/assets/icones/IconeSetaEsquerda.svg"
        @click="paginaAnterior"
      />
      </b-button>
      <span v-if="paginas">
        <span
          v-for="pag in paginas"
          :key="pag"
          :class="{ bold: pag === paginaAtual }"
          @click="paginaAtual = pag"
          class="mx-2 pagina"
        >
          {{ pag }}
        </span>
      </span>
      <b-button variant="primary" @click="proximaPagina"
        ><img
          id="IconeSetaDireita"
          src="@/assets/icones/IconeSetaDireita.svg"
         
      /></b-button>
    </b-container>
  </div>
</template>

<script>
export default {
  async mounted() {
    if (this.$store.getters.filtro) {
      this.filtro = this.$store.getters.filtro;
      this.buscarProdutos();
    } else {
      if (this.produtosVuex.items.length > 0) {
        this.buscarProdutos();
      }
    }
  },
  methods: {
    proximaPagina() {
      if (
        this.paginaAtual < Math.ceil(this.produtos.total / this.produtos.limit)
      )
        ++this.paginaAtual;
      this.buscarProdutos();
    },
    paginaAnterior() {
      if (this.paginaAtual > 1) {
        --this.paginaAtual;
        this.buscarProdutos();
      }
    },

    goToDetail(id) {
      this.$store.commit("atualizarFiltro", this.filtro);
      this.$router.push({ name: "Detail", params: { idProduto: id } });
    },
    async buscarProdutos() {
      if (this.$store.getters.produtos.items.length > 0) {
        try {
          let params = {};
          // this.produtos = await this.$services.produtos.filtrarProdutos(val);

          if (
            this.filtro.length === 3 &&
            this.$extensions.isNumeric(this.filtro)
          ) {
            params.secao_id = this.filtro;
          } else if (
            this.filtro.length === 4 &&
            this.$extensions.isNumeric(this.filtro)
          ) {
            params.id = this.filtro;
          } else {
            params.descricao = this.filtro;
          }

          params.start = this.primeiroDaLista;
          params.limit = 5;
          this.produtos = await this.$services.produtos.paginarProdutos(params);
        } catch (err) {
          console.log(err);
          return {};
        }
      }
    },
    async apagarProduto(produto) {
      try {
        await this.$services.produtos.apagarProduto(produto.id);
        this.buscarProdutos();
      } catch (err) {
        console.log(err);
      }
    },
  },

  computed: {
    produtosVuex() {
      return this.$store.getters.produtos;
    },

    primeiroDaLista() {
      return (this.paginaAtual - 1) * parseInt(this.produtos.limit);
    },
    paginas() {
      return Math.ceil(this.produtos.total / this.produtos.limit);
    },
  },

  watch: {
    async filtro(newValue) {
      this.buscarProdutos();
      this.paginaAtual = 1;
    },
    produtosVuex(loaded) {
      this.buscarProdutos("");
    },
    primeiroDaLista() {
      this.buscarProdutos();
    },
  },
  data() {
    return {
      filtro: "",
      produtos: [],
      paginaAtual: 1,
    };
  },
};
</script>
<style lang="scss" scoped>
.bold {
  font-weight: bolder;
}
.pagina {
  cursor: pointer;
}
img{
  width: 24px;
}
</style>
