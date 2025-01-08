import PublicLayout from "@/layouts/PublicLayout.vue";

export default [
    {
        path: "/",
        component: PublicLayout,
        children: [
            {
                path: "",
                name: "home",
                component: () => import("@/views/public/HomeView.vue"),
            },
            {
                path: "about",
                name: "about",
                component: () => import("@/views/public/AboutView.vue"),
            },
            {
                path: "products",
                name: "products",
                component: () => import("@/views/public/ProductsView.vue"),
            },
            {
                path: "products/:id",
                name: "product-detail",
                component: () => import("@/views/public/ProductDetailView.vue"),
            },
            {
                path: "categories",
                name: "categories",
                component: () => import("@/views/public/CategoriesView.vue"),
            },
            {
                path: "categories/:slug",
                name: "category-products",
                component: () => import("@/views/public/CategoryProductsView.vue"),
            },
            {
                path: "contact",
                name: "contact",
                component: () => import("@/views/public/ContactView.vue"),
            },
            {
                path: "careers",
                name: "careers",
                component: () => import("@/views/public/CareersView.vue"),
            },
            {
                path: "careers/:id",
                name: "career-detail",
                component: () => import("@/views/public/CareerDetailView.vue"),
            },
            {
                path: "blog",
                name: "blog",
                component: () => import("@/views/public/BlogView.vue"),
            },
            {
                path: "blog/:slug",
                name: "blog-detail",
                component: () => import("@/views/public/BlogDetailView.vue"),
            },
            {
                path: "faq",
                name: "faq",
                component: () => import("@/views/public/FAQView.vue"),
            },
            {
                path: "shipping",
                name: "shipping",
                component: () => import("@/views/public/ShippingView.vue"),
            },
            {
                path: "return-policy",
                name: "return-policy",
                component: () => import("@/views/public/ReturnPolicyView.vue"),
            },
            {
                path: "privacy-policy",
                name: "privacy-policy",
                component: () => import("@/views/public/PrivacyPolicyView.vue"),
            },
            {
                path: "cart",
                name: "cart",
                component: () => import("@/views/public/CartView.vue"),
            },
            {
                path: "checkout",
                name: "checkout",
                component: () => import("@/views/public/CheckoutView.vue"),
            },
        ],
    },
];
