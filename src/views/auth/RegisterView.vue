<template>
    <div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 class="mt-6 text-center text-2xl font-bold leading-9 tracking-tight">
                Yeni Hesap Oluşturun
            </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
            <div class="bg-card px-6 py-12 shadow sm:rounded-lg sm:px-12">
                <form class="space-y-6" @submit.prevent="handleSubmit">
                    <div class="grid gap-4 sm:grid-cols-2">
                        <Input
                            id="firstName"
                            type="text"
                            v-model="form.firstName"
                            label="Ad"
                            placeholder="Adınız"
                            required
                        />
                        <Input
                            id="lastName"
                            type="text"
                            v-model="form.lastName"
                            label="Soyad"
                            placeholder="Soyadınız"
                            required
                        />
                    </div>

                    <Input
                        id="email"
                        type="email"
                        v-model="form.email"
                        label="E-posta"
                        placeholder="ornek@email.com"
                        autocomplete="email"
                        required
                    />

                    <Input
                        id="phone"
                        type="tel"
                        v-model="form.phone"
                        label="Telefon"
                        placeholder="0(5XX) XXX XX XX"
                        required
                    />

                    <Input
                        id="password"
                        type="password"
                        v-model="form.password"
                        label="Şifre"
                        placeholder="••••••••"
                        autocomplete="new-password"
                        required
                    />

                    <Input
                        id="confirmPassword"
                        type="password"
                        v-model="form.confirmPassword"
                        label="Şifre (Tekrar)"
                        placeholder="••••••••"
                        autocomplete="new-password"
                        required
                    />

                    <Select
                        id="userType"
                        v-model="form.userType"
                        label="Hesap Türü"
                        placeholder="Seçiniz"
                        required
                    >
                        <option value="customer">Müşteri</option>
                        <option value="seller">Satıcı</option>
                    </Select>

                    <Checkbox id="terms" v-model="form.terms" required>
                        <template #label>
                            <router-link
                                to="/terms"
                                class="font-medium text-primary hover:underline"
                            >
                                Kullanım Şartları
                            </router-link>
                            'nı okudum ve kabul ediyorum
                        </template>
                    </Checkbox>

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
                        Hesap Oluştur
                    </button>
                </form>

                <div class="mt-6">
                    <div class="relative">
                        <div class="absolute inset-0 flex items-center">
                            <div class="w-full border-t border-border"></div>
                        </div>
                        <div class="relative flex justify-center text-sm">
                            <span class="bg-card px-2 text-muted-foreground">
                                Zaten hesabınız var mı?
                            </span>
                        </div>
                    </div>

                    <div class="mt-6">
                        <router-link
                            to="/login"
                            class="flex w-full justify-center rounded-md bg-card px-3 py-1.5 text-sm font-semibold leading-6 text-card-foreground shadow-sm ring-1 ring-inset ring-input hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >
                            Giriş Yap
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
import Select from '@/components/ui/form/Select.vue'
import Checkbox from '@/components/ui/form/Checkbox.vue'

const loading = ref(false)
const form = ref({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    userType: '',
    terms: false,
})

const handleSubmit = async () => {
    loading.value = true
    try {
        // Kayıt işlemleri
        await new Promise((resolve) => setTimeout(resolve, 1000))
    } catch (error) {
        console.error('Kayıt hatası:', error)
    } finally {
        loading.value = false
    }
}
</script>
