<template>
    <aside class="fixed inset-y-0 left-0 w-64 bg-card border-r border-border">
        <!-- Logo -->
        <div class="h-16 flex items-center px-6 border-b border-border"><router-link :to="{ name: 'customer-profile' }" class="text-xl font-bold">Hesabım</router-link></div>
        <!-- Navigation -->
        <nav class="p-4 space-y-2">
            <router-link :to="{ name: 'customer-dashboard' }" class="flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors hover:bg-accent hover:text-accent-foreground" :class="{ 'bg-accent text-accent-foreground': $route.name === 'customer-dashboard' }">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
                    <rect width="7" height="9" x="3" y="3" rx="1" />
                    <rect width="7" height="5" x="14" y="3" rx="1" />
                    <rect width="7" height="9" x="14" y="12" rx="1" />
                    <rect width="7" height="5" x="3" y="16" rx="1" />
                </svg>
                <span>Panel</span>
            </router-link>
            <router-link :to="{ name: 'customer-orders' }" class="flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors hover:bg-accent hover:text-accent-foreground" :class="{ 'bg-accent text-accent-foreground': $route.name?.startsWith('customer-order') }">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                    <path d="M3 6h18" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                <span>Siparişlerim</span>
            </router-link>
            <router-link :to="{ name: 'customer-favorites' }" class="flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors hover:bg-accent hover:text-accent-foreground" :class="{ 'bg-accent text-accent-foreground': $route.name === 'customer-favorites' }">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                <span>Favorilerim</span>
            </router-link>
            <router-link :to="{ name: 'customer-addresses' }" class="flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors hover:bg-accent hover:text-accent-foreground" :class="{ 'bg-accent text-accent-foreground': $route.name === 'customer-addresses' }">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Adreslerim</span>
            </router-link>
            <!-- Profil Dropdown -->
            <div class="relative">
                <button class="w-full flex items-center justify-between space-x-3 px-3 py-2 rounded-lg transition-colors hover:bg-accent hover:text-accent-foreground" :class="{ 'bg-accent text-accent-foreground': isProfileMenuActive }" @click="isProfileMenuOpen = !isProfileMenuOpen">
                    <div class="flex items-center space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                        </svg>
                        <span>Profil</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 transition-transform" :class="{ 'rotate-180': isProfileMenuOpen }"><path d="m6 9 6 6 6-6" /></svg>
                </button>
                <div v-if="isProfileMenuOpen" class="pl-11 mt-1 space-y-1">
                    <router-link :to="{ name: 'customer-profile' }" class="flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors hover:bg-accent hover:text-accent-foreground" :class="{ 'bg-accent text-accent-foreground': $route.name === 'customer-profile' }"><span>Profil Bilgileri</span></router-link>
                    <router-link :to="{ name: 'customer-profile-password' }" class="flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors hover:bg-accent hover:text-accent-foreground" :class="{ 'bg-accent text-accent-foreground': $route.name === 'customer-profile-password' }"><span>Şifre Değiştir</span></router-link>
                    <router-link :to="{ name: 'customer-profile-notifications' }" class="flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors hover:bg-accent hover:text-accent-foreground" :class="{ 'bg-accent text-accent-foreground': $route.name === 'customer-profile-notifications' }"><span>Bildirim Tercihleri</span></router-link>
                    <router-link :to="{ name: 'customer-profile-social' }" class="flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors hover:bg-accent hover:text-accent-foreground" :class="{ 'bg-accent text-accent-foreground': $route.name === 'customer-profile-social' }"><span>Sosyal Hesaplar</span></router-link>
                </div>
            </div>
        </nav>
    </aside>
</template>
<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const isProfileMenuOpen = ref(false); // Profil menüsünün aktif olup olmadığını kontrol et const isProfileMenuActive = computed(() => { return route.name?.startsWith("customer-profile"); }); // Route değiştiğinde profil menüsünü kapat watch( () => route.name, () => { if (!route.name?.startsWith("customer-profile")) { isProfileMenuOpen.value = false; } } ); // Sayfa yüklendiğinde profil sayfalarından birindeyse menüyü aç onMounted(() => { if (route.name?.startsWith("customer-profile")) { isProfileMenuOpen.value = true; } });
</script>
