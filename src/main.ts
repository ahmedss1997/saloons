import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueCompositionApi from "@vue/composition-api";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/main.scss";

Vue.config.productionTip = false;

Vue.use(VueCompositionApi);

new Vue({
  router,
  store,
  vuetify,
  // VueCompositionApi,
  render: (h) => h(App),
}).$mount("#app");
