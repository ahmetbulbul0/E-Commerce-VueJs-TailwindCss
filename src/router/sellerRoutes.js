import SellerLayout from "@/layouts/SellerLayout.vue";

export default [
    {
        path: "/seller",
        name: "seller",
        component: SellerLayout,
        children: [
            {
                path: "dashboard",
                name: "seller-dashboard",
                component: () => import("@/views/seller/DashboardView.vue"),
            },
            {
                path: "analytics",
                name: "seller-analytics",
                component: () => import("@/views/seller/AnalyticsView.vue"),
            },
            {
                path: "profile",
                name: "seller-settings",
                component: () => import("@/views/seller/SettingsView.vue"),
            },
            {
                path: "products",
                name: "seller-products",
                component: () => import("@/views/seller/products/ProductsView.vue"),
            },
            {
                path: "products/create",
                name: "seller-product-create",
                component: () => import("@/views/seller/products/ProductCreateView.vue"),
            },
            {
                path: "products/:id",
                name: "seller-product-detail",
                component: () => import("@/views/seller/products/ProductDetailView.vue"),
            },
            {
                path: "products/:id/edit",
                name: "seller-product-edit",
                component: () => import("@/views/seller/products/ProductEditView.vue"),
            },
            {
                path: "orders",
                name: "seller-orders",
                component: () => import("@/views/seller/OrdersView.vue"),
            },
            {
                path: "orders/:id",
                name: "seller-order-detail",
                component: () => import("@/views/seller/OrderDetailView.vue"),
            },
        ],
    },
];
