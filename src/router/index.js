import { createRouter, createWebHistory } from 'vue-router'
import publicRoutes from './publicRoutes';
import customerRoutes from './customerRoutes';
import sellerRoutes from './sellerRoutes';
import authRoutes from './authRoutes';


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        ...publicRoutes,
        ...customerRoutes,
        ...sellerRoutes,
        ...authRoutes
    ],
})

export default router
