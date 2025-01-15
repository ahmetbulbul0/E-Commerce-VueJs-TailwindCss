<template>
    <div class="min-h-screen bg-background">
        <AdminSidebar :is-open="isSidebarOpen" />

        <div :class="['transition-all duration-300', isSidebarOpen ? 'lg:ml-64' : 'lg:ml-20']">
            <AdminHeader @toggle-sidebar="isSidebarOpen = !isSidebarOpen" />
            
            <main class="container py-6">
                <router-view />
            </main>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import AdminSidebar from "@/components/admin/AdminSidebar.vue";
import AdminHeader from "@/components/admin/AdminHeader.vue";

const isSidebarOpen = ref(true);
</script>
