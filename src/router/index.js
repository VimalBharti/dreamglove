import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Customize from '../views/Customize.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/customize',
        name: 'customize',
        component: Customize
    }
]

const router = createRouter({ 
    history: createWebHistory(), 
    routes: routes
})
export default router