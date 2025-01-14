<template>
    <div class="container py-8">
        <!-- Breadcrumb -->
        <nav class="mb-8 flex" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 text-sm text-muted-foreground md:space-x-2">
                <li>
                    <router-link to="/" class="hover:text-foreground">Ana Sayfa</router-link>
                </li>
                <li>
                    <span class="mx-2">/</span>
                </li>
                <li class="text-foreground">Bütün Sayfalar</li>
            </ol>
        </nav>

        <!-- Başlık ve Açıklama -->
        <div class="mb-8">
            <h1 class="text-3xl font-bold tracking-tight">Bütün Sayfalar</h1>
            <p class="mt-2 text-muted-foreground">Platformdaki tüm sayfaların listesi</p>
        </div>

        <!-- Sayfalar Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <!-- Public Sayfalar -->
            <div class="space-y-4">
                <h2 class="text-xl font-semibold pb-2 border-b">Public</h2>
                <ul class="space-y-2">
                    <li v-for="page in publicPages" :key="page.routeName">
                        <router-link :to="{ name: page.routeName }" target="_blank" class="text-muted-foreground hover:text-primary transition-colors flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                            <span>{{ page.name }}</span>
                        </router-link>
                    </li>
                </ul>
            </div>

            <!-- Auth Sayfalar -->
            <div class="space-y-4">
                <h2 class="text-xl font-semibold pb-2 border-b">Auth</h2>
                <ul class="space-y-2">
                    <li v-for="page in authPages" :key="page.routeName">
                        <router-link :to="{ name: page.routeName }" target="_blank" class="text-muted-foreground hover:text-primary transition-colors flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                            <span>{{ page.name }}</span>
                        </router-link>
                    </li>
                </ul>
            </div>

            <!-- Seller Sayfalar -->
            <div class="space-y-4">
                <h2 class="text-xl font-semibold pb-2 border-b">Seller</h2>
                <ul class="space-y-2">
                    <li v-for="page in sellerPages" :key="page.routeName">
                        <router-link :to="{ name: page.routeName }" target="_blank" class="text-muted-foreground hover:text-primary transition-colors flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                            <span>{{ page.name }}</span>
                        </router-link>
                    </li>
                </ul>
            </div>

            <!-- Customer Sayfalar -->
            <div class="space-y-4">
                <h2 class="text-xl font-semibold pb-2 border-b">Customer</h2>
                <ul class="space-y-2">
                    <li v-for="page in customerPages" :key="page.routeName">
                        <router-link :to="{ name: page.routeName }" target="_blank" class="text-muted-foreground hover:text-primary transition-colors flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                            <span>{{ page.name }}</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();

// Public sayfalar
const publicPages = [
    { name: "Ana Sayfa", routeName: "home" },
    { name: "Hakkımızda", routeName: "about" },
    { name: "Ürünler", routeName: "products" },
    { name: "İndirimli Ürünler", routeName: "discounted-products" },
    { name: "Ürün Karşılaştırma", routeName: "compare-products" },
    { name: "Markalar", routeName: "brands" },
    { name: "Marka Detay", routeName: "brand-detail" },
    { name: "Kategoriler", routeName: "categories" },
    { name: "İletişim", routeName: "contact" },
    { name: "Kariyer", routeName: "careers" },
    { name: "Blog", routeName: "blog" },
    { name: "SSS", routeName: "faq" },
    { name: "Kargo Bilgileri", routeName: "shipping" },
    { name: "İade Politikası", routeName: "return-policy" },
    { name: "Gizlilik Politikası", routeName: "privacy-policy" },
    { name: "Sepet", routeName: "cart" },
    { name: "Ödeme", routeName: "checkout" },
];

// Auth sayfalar
const authPages = [
    { name: "Giriş Yap", routeName: "login" },
    { name: "Kayıt Ol", routeName: "register" },
    { name: "Şifremi Unuttum", routeName: "forgot-password" },
];

// Seller sayfalar
const sellerPages = [
    { name: "Satıcı Paneli", routeName: "seller-dashboard" },
    { name: "Ürünlerim", routeName: "seller-products" },
    { name: "Siparişler", routeName: "seller-orders" },
    { name: "Analitik", routeName: "seller-analytics" },
    { name: "Ayarlar", routeName: "seller-settings" },
];

// Customer sayfalar
const customerPages = [
    { name: "Müşteri Paneli", routeName: "customer-dashboard" },
    { name: "Siparişlerim", routeName: "customer-orders" },
    { name: "Favorilerim", routeName: "customer-favorites" },
    { name: "Adreslerim", routeName: "customer-addresses" },
    { name: "Profil", routeName: "customer-profile" },
];
</script>
