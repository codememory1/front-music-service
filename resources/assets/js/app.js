import Vue from "vue";
import TouchEvents from "vue2-touch-events";
import InlineSvg from "vue-inline-svg";
import router from "./routes/router";

// Import plugins
import AxiosInstance from "./plugins/AxiosInstance";

// Import components

Vue.use(AxiosInstance);
Vue.use(TouchEvents);

Vue.component("InlineSvg", InlineSvg);

Vue.productionTip = false;

new Vue({
  el: "#app",
  router,
});
