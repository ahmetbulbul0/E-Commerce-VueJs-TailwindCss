import SuperAdminLayout from "@/layouts/SuperAdminLayout.vue";

export default [
    {
        path: "/superadmin",
        component: SuperAdminLayout,
        children: [
            {
                path: "",
                name: "superadmin-dashboard",
                component: () => import("@/views/superadmin/DashboardView.vue"),
            },
            {
                path: "users",
                name: "superadmin-users",
                component: () => import("@/views/superadmin/UsersView.vue"),
            },
            {
                path: "sellers",
                name: "superadmin-sellers",
                component: () => import("@/views/superadmin/SellersView.vue"),
            },
            {
                path: "products",
                name: "superadmin-products",
                component: () => import("@/views/superadmin/ProductsView.vue"),
            },
            {
                path: "categories",
                name: "superadmin-categories",
                component: () => import("@/views/superadmin/CategoriesView.vue"),
            },
            {
                path: "orders",
                name: "superadmin-orders",
                component: () => import("@/views/superadmin/OrdersView.vue"),
            },
            {
                path: "discounts",
                name: "superadmin-discounts",
                component: () => import("@/views/superadmin/DiscountsView.vue"),
            },
            {
                path: "analytics",
                name: "superadmin-analytics",
                component: () => import("@/views/superadmin/AnalyticsView.vue"),
            },
            {
                path: "settings",
                name: "superadmin-settings",
                component: () => import("@/views/superadmin/SettingsView.vue"),
            },
            {
                path: "profile",
                name: "superadmin-profile",
                component: () => import("@/views/superadmin/ProfileView.vue"),
            },
        ],
    },
]; 