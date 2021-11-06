import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import repository from "@/repository";
import services from "@/services";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
const plugin = {
  install() {
    Vue.prototype.$repository = repository;
    Vue.prototype.$services = services;
  },
};
Vue.use(plugin);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
