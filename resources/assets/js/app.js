import Vue from "vue";
import router from "./routes/router";
import TouchEvents from "vue2-touch-events";
import InlineSvg from "vue-inline-svg";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

// Import plugins
import AxiosInstance from "./plugins/AxiosInstance";
import IsEmpty from "./plugins/IsEmpty";
import Storage from "./plugins/Storage";

Vue.use(AxiosInstance);
Vue.use(TouchEvents);
Vue.use(IsEmpty);
Vue.use(Storage);

Vue.component("InlineSvg", InlineSvg);
Vue.component("CoreSwiper", Swiper);
Vue.component("SlideSwiper", SwiperSlide);

Vue.productionTip = false;

new Vue({
  el: "#app",
  router
});
