import { createRouter, createWebHistory } from 'vue-router'
import PublicLayout from '../views/layouts/PublicLayout.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/docs/form-components',
            name: 'docs-form-components',
            component: () => import('@/views/docs/FormComponentsView.vue'),
        },
        {
            path: '/docs/layout-components',
            name: 'docs-layout-components',
            component: () => import('@/views/docs/LayoutComponentsView.vue'),
        },
        // Public Sayfalar
        {
            path: '/',
            component: PublicLayout,
            children: [
                {
                    path: '',
                    name: 'home',
                    component: () => import('@/views/public/HomeView.vue'),
                },
                {
                    path: 'about',
                    name: 'about',
                    component: () => import('@/views/public/AboutView.vue'),
                },
                {
                    path: 'products',
                    name: 'products',
                    component: () => import('@/views/public/ProductsView.vue'),
                },
                {
                    path: 'products/:id',
                    name: 'product-detail',
                    component: () => import('@/views/public/ProductDetailView.vue'),
                },
                {
                    path: 'categories',
                    name: 'categories',
                    component: () => import('@/views/public/CategoriesView.vue'),
                },
                {
                    path: 'categories/:slug',
                    name: 'category-products',
                    component: () => import('@/views/public/CategoryProductsView.vue'),
                },
                {
                    path: 'contact',
                    name: 'contact',
                    component: () => import('@/views/public/ContactView.vue'),
                },
                {
                    path: 'careers',
                    name: 'careers',
                    component: () => import('@/views/public/CareersView.vue'),
                },
                {
                    path: 'careers/:id',
                    name: 'career-detail',
                    component: () => import('@/views/public/CareerDetailView.vue'),
                },
                {
                    path: 'blog',
                    name: 'blog',
                    component: () => import('@/views/public/BlogView.vue'),
                },
                {
                    path: 'blog/:slug',
                    name: 'blog-detail',
                    component: () => import('@/views/public/BlogDetailView.vue'),
                },
                {
                    path: 'faq',
                    name: 'faq',
                    component: () => import('@/views/public/FAQView.vue'),
                },
                {
                    path: 'shipping',
                    name: 'shipping',
                    component: () => import('@/views/public/ShippingView.vue'),
                },
                {
                    path: 'cart',
                    name: 'cart',
                    component: () => import('@/views/public/CartView.vue'),
                },
                {
                    path: 'checkout',
                    name: 'checkout',
                    component: () => import('@/views/public/CheckoutView.vue'),
                },
                // Auth Sayfaları
                {
                    path: '/login',
                    name: 'login',
                    component: () => import('@/views/auth/LoginView.vue'),
                },
                {
                    path: '/register',
                    name: 'register',
                    component: () => import('@/views/auth/RegisterView.vue'),
                },
            ],
        },
        // Müşteri Paneli
        {
            path: '/customer',
            name: 'customer',
            component: () => import('@/views/layouts/CustomerLayout.vue'),
            children: [
                {
                    path: 'dashboard',
                    name: 'customer-dashboard',
                    component: () => import('@/views/customer/DashboardView.vue'),
                },
                {
                    path: 'profile',
                    name: 'customer-profile',
                    component: () => import('@/views/customer/ProfileView.vue'),
                },
                {
                    path: 'orders',
                    name: 'customer-orders',
                    component: () => import('@/views/customer/orders/OrdersView.vue'),
                },
                {
                    path: 'orders/:id',
                    name: 'customer-order-detail',
                    component: () => import('@/views/customer/orders/OrderDetailView.vue'),
                },
                {
                    path: 'orders/:id/track',
                    name: 'customer-order-track',
                    component: () => import('@/views/customer/orders/OrderTrackView.vue'),
                },
                {
                    path: 'orders/:id/return',
                    name: 'customer-order-return',
                    component: () => import('@/views/customer/orders/OrderReturnView.vue'),
                },
            ],
        },
        // Satıcı Paneli
        {
            path: '/seller',
            name: 'seller',
            component: () => import('@/views/layouts/SellerLayout.vue'),
            children: [
                {
                    path: 'dashboard',
                    name: 'seller-dashboard',
                    component: () => import('@/views/seller/DashboardView.vue'),
                },
                {
                    path: 'profile',
                    name: 'seller-settings',
                    component: () => import('@/views/seller/SettingsView.vue'),
                },
                {
                    path: 'products',
                    name: 'seller-products',
                    component: () => import('@/views/seller/products/ProductsView.vue'),
                },
                {
                    path: 'products/create',
                    name: 'seller-product-create',
                    component: () => import('@/views/seller/products/ProductCreateView.vue'),
                },
                {
                    path: 'products/:id',
                    name: 'seller-product-detail',
                    component: () => import('@/views/seller/products/ProductDetailView.vue'),
                },
                {
                    path: 'products/:id/edit',
                    name: 'seller-product-edit',
                    component: () => import('@/views/seller/products/ProductEditView.vue'),
                },
                {
                    path: 'orders',
                    name: 'seller-orders',
                    component: () => import('@/views/seller/OrdersView.vue'),
                },
                {
                    path: 'orders/:id',
                    name: 'seller-order-detail',
                    component: () => import('@/views/seller/OrderDetailView.vue'),
                },
            ],
        },
    ],
})

export default router
