import Vue from "vue";
import VueRouter from "vue-router"

// Import Views
import NotFound from "./views/service/NotFound"

Vue.use(VueRouter)

export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: "*",
            component: NotFound
        }
    ]
})