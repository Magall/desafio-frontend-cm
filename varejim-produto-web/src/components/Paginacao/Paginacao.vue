<template>
  <div id="Paginacao">
    <div id="iconesSetas">
      <img
        id="IconeSetaEsquerda"
        src="@/assets/Icones/IconesBrancos/IconeSetaEsquerda.svg"
        @click="paginaAnterior"
      />
      <div id="numeroPaginas" v-for="pagina in numeroDePaginas" :key="pagina">
        <div
          @click="navegarParaPagina(pagina)"
          :class="{ paginaSelecionada: paginaAtual === pagina }"
        >
          {{ pagina }}
        </div>
      </div>
      <img
        id="IconeSetaDireita"
        src="@/assets/Icones/IconesBrancos/IconeSetaDireita.svg"
        @click="paginaPosterior"
      />
    </div>
    <div id="inputSpan">
      <span>Itens por página</span>
      <select
        class="select"
        @change="atualizarPagina()"
        v-model="numeroElementosPagina"
      >
        <option value="10">10</option>
        <option value="30">30</option>
        <option value="50">50</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: ["arrayTabela"],
  data() {
    return {
      inicioPagina: 0,
      finalPagina: 30,
      paginaAtual: 1,
      numeroElementosPagina: 30,
    };
  },
  computed: {
    arrayTabelaEmExibicao() {
      return this.arrayTabela.slice(this.inicioPagina, this.finalPagina);
    },
    numeroDePaginas() {
      this.$emit("devolverArrayParaExibicao", this.arrayTabelaEmExibicao);
      let numeroDePaginas = Math.ceil(
        this.arrayTabela.length / parseInt(this.numeroElementosPagina)
      );
      let resp = [];
      for (let i = 1; i <= numeroDePaginas; i++) {
        resp.push(i);
      }
      return resp;
    },
  },
  methods: {
    paginaAnterior() {
      if (this.inicioPagina !== 0) {
        this.paginaAtual--;
        this.inicioPagina = this.inicioPagina - parseInt(this.numeroElementosPagina);
        this.finalPagina = this.finalPagina - parseInt(this.numeroElementosPagina);
        this.$emit("devolverArrayParaExibicao", this.arrayTabelaEmExibicao);
      }
    },
    paginaPosterior() {
      if (this.finalPagina < this.arrayTabela.length) {
        this.paginaAtual++;
        this.inicioPagina = this.inicioPagina + parseInt(this.numeroElementosPagina);
        this.finalPagina = this.finalPagina + parseInt(this.numeroElementosPagina);
        this.$emit("devolverArrayParaExibicao", this.arrayTabelaEmExibicao);
      }
    },
    navegarParaPagina(pagina) {
      if (this.paginaAtual !== pagina) {
        this.inicioPagina = parseInt(this.numeroElementosPagina) * (pagina - 1);
        this.finalPagina = parseInt(this.numeroElementosPagina) * pagina;
        this.paginaAtual = pagina;
      }
    },
    atualizarPagina() {
      this.paginaAtual = 1;
      this.inicioPagina = 0
      this.finalPagina = parseInt(this.numeroElementosPagina);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "PaginacaoTabela.scss";
</style>