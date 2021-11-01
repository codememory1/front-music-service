import Vue from 'vue'
import router from './router'

// Import plugins
import VueCookies from 'vue-cookies'

// Import components
import InlineSvg from 'vue-inline-svg';

Vue.use(VueCookies)

import SvgFiller from 'vue-svg-filler'

Vue.component('svg-filler', SvgFiller)
Vue.component('inline-svg', InlineSvg);

Vue.productionTip = false

new Vue({
    el: '#app',
    router
})
