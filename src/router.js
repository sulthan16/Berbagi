import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(Router)

const router = new Router({
    mode:'history',
    routes: [
        { path: '/', name: 'home', component: () => import('./views/Home.vue')},
        { path: '/FAQ', name: 'FAQ', component: () => import('./views/FAQ.vue')}
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