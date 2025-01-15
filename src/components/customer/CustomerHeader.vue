<template>
    <header class="sticky top-0 z-30 border-b border-border bg-card">
        <div class="flex h-16 items-center justify-between px-4">
            <button @click="$emit('toggle-sidebar')" class="lg:hidden rounded-lg p-2 text-muted-foreground hover:bg-accent hover:text-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="3" x2="21" y1="6" y2="6" />
                    <line x1="3" x2="21" y1="12" y2="12" />
                    <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
            </button>

            <!-- Sol Taraf -->
            <div class="flex items-center space-x-4">
                <div class="relative hidden md:block">
                    <input type="text" placeholder="Ara..." class="h-9 w-[300px] rounded-lg border bg-background px-3 pl-9 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.3-4.3" />
                    </svg>
                </div>
            </div>

            <!-- Sağ Taraf -->
            <div class="flex items-center space-x-4">
                <!-- Bildirimler -->
                <button class="relative rounded-lg p-2 text-muted-foreground hover:bg-accent hover:text-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                    </svg>
                    <span class="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">3</span>
                </button>

                <!-- Profil Menü -->
                <div class="relative">
                    <button @click="isProfileMenuOpen = !isProfileMenuOpen" class="flex items-center space-x-3 rounded-lg p-2 hover:bg-accent">
                        <img src="https://github.com/shadcn.png" alt="Admin" class="h-8 w-8 rounded-full" />
                        <div class="hidden text-left md:block">
                            <p class="text-sm font-medium">Customer</p>
                            <p class="text-xs text-muted-foreground">customer@example.com</p>
                        </div>
                    </button>

                    <!-- Profil Dropdown -->
                    <div v-if="isProfileMenuOpen" class="absolute right-0 mt-2 w-48 rounded-lg border bg-card py-1 shadow-lg">
                        <router-link :to="{ name: 'customer-profile' }" class="flex items-center px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                            Profil
                        </router-link>
                        <div class="my-1 border-t"></div>
                        <button @click="logout" class="flex w-full items-center px-4 py-2 text-sm text-red-500 hover:bg-accent">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
                                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                <polyline points="16 17 21 12 16 7" />
                                <line x1="21" x2="9" y1="12" y2="12" />
                            </svg>
                            Çıkış Yap
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isProfileMenuOpen = ref(false);

const logout = () => {
    // Çıkış işlemleri burada yapılacak
    console.log("Çıkış yapılıyor...");
};

defineEmits(["toggle-sidebar"]);
</script>
