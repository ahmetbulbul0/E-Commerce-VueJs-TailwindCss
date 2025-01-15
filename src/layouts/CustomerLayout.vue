<template>
    <div class="min-h-screen bg-background">
        <CustomerSidebar :is-open="isSidebarOpen" />

        <div :class="['transition-all duration-300', isSidebarOpen ? 'lg:ml-64' : 'lg:ml-20']">
            <CustomerHeader @toggle-sidebar="isSidebarOpen = !isSidebarOpen" />

            <main class="container py-6">
                <router-view />
            </main>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CustomerSidebar from "@/components/customer/CustomerSidebar.vue";
import CustomerHeader from "@/components/customer/CustomerHeader.vue";

const isSidebarOpen = ref(true);
</script>
