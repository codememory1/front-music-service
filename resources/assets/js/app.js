import Vue from 'vue'
import router from './router'

// Import plugins
import VueCookies from 'vue-cookies'
import TouchEvents from 'vue2-touch-events'

// Import components
import InlineSvg from 'vue-inline-svg'

Vue.use(VueCookies);
Vue.use(TouchEvents);

Vue.component('inline-svg', InlineSvg);

Vue.productionTip = false

new Vue({
    el: '#app',
    router
})
