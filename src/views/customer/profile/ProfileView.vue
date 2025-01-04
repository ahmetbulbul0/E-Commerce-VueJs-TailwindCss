<template>
    <div class="container mx-auto py-8">
        <div class="max-w-4xl mx-auto">
            <!-- Profil Bilgileri -->
            <Card>
                <template #header>
                    <h3 class="text-lg font-semibold">Profil Bilgileri</h3>
                    <p class="text-sm text-muted-foreground">Kişisel bilgilerinizi güncelleyin.</p>
                </template>

                <form @submit.prevent="updateProfile" class="space-y-4">
                    <div class="grid gap-4 sm:grid-cols-2">
                        <Input
                            id="firstName"
                            v-model="profileForm.firstName"
                            label="Ad"
                            placeholder="Adınız"
                            required
                        />
                        <Input
                            id="lastName"
                            v-model="profileForm.lastName"
                            label="Soyad"
                            placeholder="Soyadınız"
                            required
                        />
                    </div>

                    <Input
                        id="email"
                        type="email"
                        v-model="profileForm.email"
                        label="E-posta"
                        placeholder="ornek@email.com"
                        required
                    />

                    <Input
                        id="phone"
                        type="tel"
                        v-model="profileForm.phone"
                        label="Telefon"
                        placeholder="0(5XX) XXX XX XX"
                        required
                    />

                    <div class="flex justify-end">
                        <button
                            type="submit"
                            class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                        >
                            Değişiklikleri Kaydet
                        </button>
                    </div>
                </form>
            </Card>

            <!-- Şifre Değiştirme -->
            <Card class="mt-6">
                <template #header>
                    <h3 class="text-lg font-semibold">Şifre Değiştir</h3>
                    <p class="text-sm text-muted-foreground">
                        Hesap güvenliğiniz için şifrenizi güncelleyin.
                    </p>
                </template>

                <form @submit.prevent="changePassword" class="space-y-4">
                    <Input
                        id="currentPassword"
                        type="password"
                        v-model="passwordForm.currentPassword"
                        label="Mevcut Şifre"
                        placeholder="Mevcut şifreniz"
                        required
                    />

                    <div class="grid gap-4 sm:grid-cols-2">
                        <Input
                            id="newPassword"
                            type="password"
                            v-model="passwordForm.newPassword"
                            label="Yeni Şifre"
                            placeholder="Yeni şifreniz"
                            required
                        />
                        <Input
                            id="confirmPassword"
                            type="password"
                            v-model="passwordForm.confirmPassword"
                            label="Yeni Şifre (Tekrar)"
                            placeholder="Yeni şifrenizi tekrar girin"
                            required
                        />
                    </div>

                    <div class="flex justify-end">
                        <button
                            type="submit"
                            class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                        >
                            Şifreyi Değiştir
                        </button>
                    </div>
                </form>
            </Card>

            <!-- Bildirim Tercihleri -->
            <Card class="mt-6">
                <template #header>
                    <h3 class="text-lg font-semibold">Bildirim Tercihleri</h3>
                    <p class="text-sm text-muted-foreground">Bildirim tercihlerinizi yönetin.</p>
                </template>

                <div class="space-y-4">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="font-medium">E-posta Bildirimleri</p>
                            <p class="text-sm text-muted-foreground">
                                Kampanyalar ve özel teklifler hakkında e-posta almak istiyorum.
                            </p>
                        </div>
                        <Switch v-model="notificationPreferences.email" />
                    </div>

                    <div class="flex items-center justify-between">
                        <div>
                            <p class="font-medium">SMS Bildirimleri</p>
                            <p class="text-sm text-muted-foreground">
                                Kampanyalar ve özel teklifler hakkında SMS almak istiyorum.
                            </p>
                        </div>
                        <Switch v-model="notificationPreferences.sms" />
                    </div>

                    <div class="flex items-center justify-between">
                        <div>
                            <p class="font-medium">Sipariş Bildirimleri</p>
                            <p class="text-sm text-muted-foreground">
                                Siparişlerimin durumu hakkında bildirim almak istiyorum.
                            </p>
                        </div>
                        <Switch v-model="notificationPreferences.orders" />
                    </div>
                </div>
            </Card>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Card from '@/components/ui/layout/Card.vue'
import Input from '@/components/ui/form/Input.vue'
import Switch from '@/components/ui/form/Switch.vue'

const profileForm = ref({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
})

const passwordForm = ref({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
})

const notificationPreferences = ref({
    email: false,
    sms: false,
    orders: true,
})

const updateProfile = async () => {
    try {
        // Profil güncelleme işlemleri
        await new Promise((resolve) => setTimeout(resolve, 1000))
    } catch (error) {
        console.error('Profil güncellenemedi:', error)
    }
}

const changePassword = async () => {
    try {
        // Şifre değiştirme işlemleri
        await new Promise((resolve) => setTimeout(resolve, 1000))
    } catch (error) {
        console.error('Şifre değiştirilemedi:', error)
    }
}
</script>
