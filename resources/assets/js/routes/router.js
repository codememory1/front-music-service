const UrlParser = require('tldts');
const subdomain = UrlParser.getSubdomain(window.location.href) || 'home';
const {routes} = require('./' + subdomain);

import Vue from "vue";
import VueRouter from "vue-router"

Vue.use(VueRouter)

export default new VueRouter({
    mode: "history",
    routes
})