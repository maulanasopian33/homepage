import { createRouter, createWebHashHistory } from 'vue-router'
import dashboard from '../components/page/dashboard.vue'
import test from '../components/page/HelloWorld.vue'
const routes = [
    {
        path : '/',
        component : dashboard
    },
    {
        path:'/test',
        component: test
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
