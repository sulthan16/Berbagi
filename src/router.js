import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import FAQ from './views/FAQ.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(Router)

const router = new Router({
    mode:'history',
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/FAQ', name: 'FAQ', component: FAQ }
    ]
})

router.beforeResolve((to, from, next) => {
    // If this isn't an initial page load.
    if (to.name) {
        // Start the route progress bar.
        NProgress.start()
    }
    next()
})

router.afterEach((to, from) => {
    // Complete the animation of the route progress bar.
    NProgress.done()
})

export default router