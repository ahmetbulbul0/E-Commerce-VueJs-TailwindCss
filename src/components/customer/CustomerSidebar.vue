<template>
    <aside :class="['fixed left-0 top-0 z-40 h-screen border-r bg-card transition-all duration-300', isOpen ? 'w-64' : 'w-20']">
        <div class="flex mt-[1px] h-16 items-center border-b border-border px-6">
            <router-link :to="{ name: 'customer-dashboard' }" class="flex items-center space-x-2 w-full">
                <span class="text-xl font-bold">Müşteri Paneli</span>
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
                    <p class="text-sm font-medium">Customer</p>
                    <p class="text-xs text-muted-foreground">customer@example.com</p>
                </div>
            </div>
        </div>
    </aside>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { useRoute } from "vue-router";
import { LayoutDashboard } from "lucide-vue-next";

const route = useRoute();

const props = defineProps<{
    isOpen: boolean;
}>();

const menuItems = [
    {
        title: "Dashboard",
        path: "customer-dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "Adreslerim",
        path: "customer-addresses",
        icon: LayoutDashboard,
    },
    {
        title: "Favorilerim",
        path: "customer-favorites",
        icon: LayoutDashboard,
    },
    {
        title: "Profilim",
        path: "customer-profile",
        icon: LayoutDashboard,
    },
    {
        title: "Şifre Değiştir",
        path: "customer-profile-password",
        icon: LayoutDashboard,
    },
    {
        title: "Bildirim Ayarlarım",
        path: "customer-profile-notifications",
        icon: LayoutDashboard,
    },
    {
        title: "Sosyal Bağlantılarım",
        path: "customer-profile-social",
        icon: LayoutDashboard,
    },
    {
        title: "Siparişlerim",
        path: "customer-orders",
        icon: LayoutDashboard,
    },
    {
        title: "Sipariş Detay",
        path: "customer-order-detail",
        icon: LayoutDashboard,
    },
    {
        title: "Sipariş Kargo Takip",
        path: "customer-order-track",
        icon: LayoutDashboard,
    },
    {
        title: "Sipariş İade",
        path: "customer-order-return",
        icon: LayoutDashboard,
    },
];
</script>
