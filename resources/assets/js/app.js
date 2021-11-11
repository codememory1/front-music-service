import Vue from "vue";
import TouchEvents from "vue2-touch-events";
import InlineSvg from "vue-inline-svg";
import router from "./routes/router";

// Import plugins
import AxiosInstance from "./plugins/AxiosInstance";
import IsEmpty from "./plugins/IsEmpty";
import Storage from "./plugins/Storage";

Vue.use(AxiosInstance);
Vue.use(TouchEvents);
Vue.use(IsEmpty);
Vue.use(Storage);

Vue.component("InlineSvg", InlineSvg);

Vue.productionTip = false;

new Vue({
  el: "#app",
  router,
});
