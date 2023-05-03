import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/home.vue'
import About from './pages/aboutus.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about-us',
            name: 'about',
            component: About
        },
    ],
})

export { router }

