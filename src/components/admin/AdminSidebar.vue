<template>
    <aside :class="[
        'fixed left-0 top-0 z-40 h-screen bg-card transition-all duration-300',
        isOpen ? 'w-64' : 'w-20'
    ]">
        <!-- Logo -->
        <div class="flex h-16 items-center justify-center border-b px-4">
            <img v-if="isOpen" src="https://img.freepik.com/free-vector/indonesian-halal-logo-new-branding-2022_17005-1495.jpg?t=st=1736883456~exp=1736887056~hmac=37f7d7fbfb093de959adf89cecbef0ef4baf6c2acb443f5507c452de5a2b9331&w=740" alt="Logo" class="h-8" />
            <img v-else src="https://img.freepik.com/free-vector/indonesian-halal-logo-new-branding-2022_17005-1495.jpg?t=st=1736883456~exp=1736887056~hmac=37f7d7fbfb093de959adf89cecbef0ef4baf6c2acb443f5507c452de5a2b9331&w=740" alt="Logo" class="h-8" />
        </div>

        <!-- Navigation -->
        <nav class="space-y-1 p-2">
            <router-link
                v-for="item in menuItems"
                :key="item.path"
                :to="{ name: item.path }"
                class="flex items-center rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-accent"
                :class="[
                    $route.name === item.path
                        ? 'bg-primary/10 text-primary'
                        : 'text-muted-foreground hover:text-foreground'
                ]"
            >
                <component :is="item.icon" class="h-5 w-5" />
                <span v-if="isOpen" class="ml-3">{{ item.title }}</span>
            </router-link>
        </nav>

        <!-- Alt Menü -->
        <div class="absolute bottom-0 w-full border-t p-4">
            <div class="flex items-center" :class="{ 'justify-center': !isOpen }">
                <img
                    src="https://github.com/shadcn.png"
                    alt="Admin"
                    class="h-8 w-8 rounded-full"
                />
                <div v-if="isOpen" class="ml-3">
                    <p class="text-sm font-medium">Süper Admin</p>
                    <p class="text-xs text-muted-foreground">admin@example.com</p>
                </div>
            </div>
        </div>
    </aside>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const props = defineProps<{
    isOpen: boolean
}>()

const menuItems = [
    {
        title: 'Dashboard',
        path: 'admin-dashboard',
        icon: 'DashboardIcon'
    },
    {
        title: 'Kullanıcı Yönetimi',
        path: 'admin-users',
        icon: 'UsersIcon'
    },
    {
        title: 'Satıcı Yönetimi',
        path: 'admin-sellers',
        icon: 'StoreIcon'
    },
    {
        title: 'Ürün Yönetimi',
        path: 'admin-products',
        icon: 'PackageIcon'
    },
    {
        title: 'Kategori Yönetimi',
        path: 'admin-categories',
        icon: 'TagIcon'
    },
    {
        title: 'Sipariş Yönetimi',
        path: 'admin-orders',
        icon: 'ShoppingCartIcon'
    },
    {
        title: 'İndirim Yönetimi',
        path: 'admin-discounts',
        icon: 'PercentIcon'
    },
    {
        title: 'Raporlar & Analitik',
        path: 'admin-analytics',
        icon: 'ChartIcon'
    },
    {
        title: 'Ayarlar',
        path: 'admin-settings',
        icon: 'SettingsIcon'
    }
]
</script> 