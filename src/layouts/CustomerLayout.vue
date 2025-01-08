<template>
    <div class="customer-layout">
        <!-- Sidebar -->
        <CustomerSidebar />

        <!-- Main Content -->
        <main class="ml-64 min-h-screen bg-background">
            <!-- Header -->
            <header class="h-16 border-b border-border bg-card px-6 flex items-center justify-between">
                <h1 class="text-lg font-semibold">
                    {{ getPageTitle() }}
                </h1>

                <!-- User Menu -->
                <div class="relative">
                    <button class="flex items-center space-x-2 hover:bg-accent hover:text-accent-foreground rounded-lg px-3 py-2" @click="isUserMenuOpen = !isUserMenuOpen">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User Avatar" class="w-8 h-8 rounded-full" />
                        <span>Ahmet Bülbül</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                            <path d="m6 9 6 6 6-6" />
                        </svg>
                    </button>

                    <!-- Dropdown Menu -->
                    <div v-if="isUserMenuOpen" class="absolute right-0 mt-2 w-48 bg-card rounded-lg border border-border shadow-lg py-1">
                        <router-link :to="{ name: 'customer-profile' }" class="flex items-center space-x-2 px-4 py-2 hover:bg-accent hover:text-accent-foreground">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                            <span>Profil</span>
                        </router-link>
                        <div class="border-t border-border my-1"></div>
                        <button class="flex items-center space-x-2 px-4 py-2 hover:bg-accent hover:text-accent-foreground w-full text-left" @click="logout">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                <polyline points="16 17 21 12 16 7" />
                                <line x1="21" x2="9" y1="12" y2="12" />
                            </svg>
                            <span>Çıkış Yap</span>
                        </button>
                    </div>
                </div>
            </header>

            <!-- Page Content -->
            <div class="p-6">
                <router-view></router-view>
            </div>
        </main>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CustomerSidebar from "@/components/customer/CustomerSidebar.vue";

export default defineComponent({
    name: "CustomerLayout",
    components: {
        CustomerSidebar,
    },
    data() {
        return {
            isUserMenuOpen: false,
        };
    },
    methods: {
        getPageTitle(): string {
            const routeName = this.$route.name as string;
            const titles: { [key: string]: string } = {
                "customer-profile": "Profil",
                "customer-profile-edit": "Profil Düzenle",
                "customer-profile-password": "Şifre Değiştir",
                "customer-profile-notifications": "Bildirim Ayarları",
                "customer-profile-social": "Sosyal Hesaplar",
                "customer-orders": "Siparişlerim",
                "customer-order-detail": "Sipariş Detayı",
                "customer-order-track": "Sipariş Takibi",
                "customer-order-return": "Sipariş İade",
            };
            return titles[routeName] || "Hesabım";
        },
        logout() {
            // TODO: Implement logout functionality
            console.log("Logging out...");
        },
    },
    watch: {
        $route() {
            this.isUserMenuOpen = false;
        },
    },
});
</script>
