<template>
    <div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 class="mt-6 text-center text-2xl font-bold leading-9 tracking-tight">
                Hesabınıza Giriş Yapın
            </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
            <div class="bg-card px-6 py-12 shadow sm:rounded-lg sm:px-12">
                <form class="space-y-6" @submit.prevent="handleSubmit">
                    <div>
                        <Input
                            id="email"
                            type="email"
                            v-model="form.email"
                            label="E-posta"
                            placeholder="ornek@email.com"
                            autocomplete="email"
                            required
                        />
                    </div>

                    <div>
                        <div class="flex items-center justify-between">
                            <Input
                                id="password"
                                type="password"
                                v-model="form.password"
                                label="Şifre"
                                placeholder="••••••••"
                                autocomplete="current-password"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <Checkbox id="remember" v-model="form.remember" label="Beni Hatırla" />
                    </div>

                    <div>
                        <button
                            type="submit"
                            class="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                            :disabled="loading"
                        >
                            <span v-if="loading" class="mr-2">
                                <svg
                                    class="h-4 w-4 animate-spin"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        class="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        stroke-width="4"
                                    ></circle>
                                    <path
                                        class="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                            </span>
                            Giriş Yap
                        </button>
                    </div>
                </form>

                <div class="mt-6">
                    <div class="relative">
                        <div class="absolute inset-0 flex items-center">
                            <div class="w-full border-t border-border"></div>
                        </div>
                        <div class="relative flex justify-center text-sm">
                            <span class="bg-card px-2 text-muted-foreground">
                                Hesabınız yok mu?
                            </span>
                        </div>
                    </div>

                    <div class="mt-6">
                        <router-link
                            to="/register"
                            class="flex w-full justify-center rounded-md bg-card px-3 py-1.5 text-sm font-semibold leading-6 text-card-foreground shadow-sm ring-1 ring-inset ring-input hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >
                            Hesap Oluştur
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Input from '@/components/ui/form/Input.vue'
import Checkbox from '@/components/ui/form/Checkbox.vue'

const loading = ref(false)
const form = ref({
    email: '',
    password: '',
    remember: false,
})

const handleSubmit = async () => {
    loading.value = true
    try {
        // Giriş işlemleri
        await new Promise((resolve) => setTimeout(resolve, 1000))
    } catch (error) {
        console.error('Giriş hatası:', error)
    } finally {
        loading.value = false
    }
}
</script>
