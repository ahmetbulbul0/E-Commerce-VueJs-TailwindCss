<template>
    <div class="min-h-screen bg-background">
        <!-- Sidebar -->
        <SuperAdminSidebar :is-open="isSidebarOpen" />

        <!-- Main Content -->
        <div :class="['transition-all duration-300', isSidebarOpen ? 'lg:ml-64' : 'lg:ml-20']">
            <!-- Header -->
            <SuperAdminHeader @toggle-sidebar="isSidebarOpen = !isSidebarOpen" />

            <!-- Main Content Area -->
            <main class="container py-6">
                <router-view />
            </main>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SuperAdminSidebar from '@/components/superadmin/SuperAdminSidebar.vue'
import SuperAdminHeader from '@/components/superadmin/SuperAdminHeader.vue'

const isSidebarOpen = ref(true)
</script> 