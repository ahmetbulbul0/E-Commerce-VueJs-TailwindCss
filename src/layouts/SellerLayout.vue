<template>
    <div class="min-h-screen bg-background">
        <SellerSidebar :is-open="isSidebarOpen" />

        <div :class="['transition-all duration-300', isSidebarOpen ? 'lg:ml-64' : 'lg:ml-20']">
            <SellerHeader @toggle-sidebar="isSidebarOpen = !isSidebarOpen" />
            
            <main class="container py-6">
                <router-view />
            </main>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SellerSidebar from "@/components/seller/SellerSidebar.vue";
import SellerHeader from "@/components/seller/SellerHeader.vue";

const isSidebarOpen = ref(true);
</script>
