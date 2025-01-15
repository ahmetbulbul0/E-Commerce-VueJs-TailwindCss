<template>
    <aside :class="['fixed left-0 top-0 z-40 h-screen border-r bg-card transition-all duration-300', isOpen ? 'w-64' : 'w-20']">
        <div class="flex mt-[1px] h-16 items-center border-b border-border px-6">
            <router-link :to="{ name: 'admin-dashboard' }" class="flex items-center space-x-2 w-full">
                <span class="text-xl font-bold">Admin Paneli</span>
            </router-link>
        </div>

        <nav class="space-y-1 p-2">
            <router-link v-for="item in menuItems" :key="item.path" :to="{ name: item.path }" class="flex items-center rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-accent" :class="[$route.name === item.path ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground']">
                <component :is="item.icon" class="h-5 w-5" />
                <span v-if="isOpen" class="ml-3">{{ item.title }}</span>
            </router-link>
        </nav>

        <div class="absolute bottom-0 w-full border-t p-4">
            <div class="flex items-center" :class="{ 'justify-center': !isOpen }">
                <img src="https://github.com/shadcn.png" alt="Admin" class="h-8 w-8 rounded-full" />
                <div v-if="isOpen" class="ml-3">
                    <p class="text-sm font-medium">Süper Admin</p>
                    <p class="text-xs text-muted-foreground">admin@example.com</p>
                </div>
            </div>
        </div>
    </aside>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { useRoute } from "vue-router";
import { LayoutDashboard, Users, Store, Package, Tag, ShoppingCart, Percent, BarChart, Settings } from "lucide-vue-next";

const route = useRoute();

const props = defineProps<{
    isOpen: boolean;
}>();

const menuItems = [
    {
        title: "Dashboard",
        path: "admin-dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "Kullanıcı Yönetimi",
        path: "admin-users",
        icon: Users,
    },
    {
        title: "Satıcı Yönetimi",
        path: "admin-sellers",
        icon: Store,
    },
    {
        title: "Ürün Yönetimi",
        path: "admin-products",
        icon: Package,
    },
    {
        title: "Kategori Yönetimi",
        path: "admin-categories",
        icon: Tag,
    },
    {
        title: "Sipariş Yönetimi",
        path: "admin-orders",
        icon: ShoppingCart,
    },
    {
        title: "İndirim Yönetimi",
        path: "admin-discounts",
        icon: Percent,
    },
    {
        title: "Raporlar & Analitik",
        path: "admin-analytics",
        icon: BarChart,
    },
    {
        title: "Ayarlar",
        path: "admin-settings",
        icon: Settings,
    },
];
</script>
