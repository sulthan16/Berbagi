import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        { path: '/', name: 'home', component: () => import('./views/Home.vue') },
        { path: '/About', name: 'About', component: () => import('./views/About.vue') },
        { path: '/Blog', name: 'Blog', component: () => import('./views/Blog.vue') },
        { path: '/FAQ', name: 'FAQ', component: () => import('./views/FAQ.vue') },
        { path: '/daftar-umkm', name: 'list merchan', component: () => import('./views/listMerchan.vue') },
        { path: '/auth', name: 'auth', component: () => import('./views/auth/index.vue') }
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