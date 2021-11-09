<template>
  <b-alert
    :show="show"
    class="custom-alert"
    :class="{'bg-success':sucesso , 'bg-danger':!sucesso}"
  >
    <span>
      {{ msg }}
    </span>
    <button @click="fechar">x</button>
  </b-alert>
</template>
<script>
export default {
  props: ["show", "msg", "sucesso"],
  methods: {
    fechar() {
      this.$store.commit("fecharAlerta");
    },
  },
};
</script>
<style lang="scss" scoped>
.custom-alert {
  position: absolute;
  left: 50%;
  top: 5%;
  color:white;
  transform: translate(-50%, 0%);
  border:none;
  z-index: 99999999;
  button {
    background: transparent;
    border: none;
    color: white;
  }
}
</style>
