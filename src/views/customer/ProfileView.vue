<template>
    <div class="flex min-h-screen">
        <!-- Ana İçerik -->
        <div class="flex-1">
            <div class="container py-6">
                <div class="flex items-center justify-between">
                    <div>
                        <h2 class="text-2xl font-bold">Profilim</h2>
                        <p class="text-sm text-muted-foreground">
                            Hesap bilgilerinizi buradan güncelleyebilirsiniz.
                        </p>
                    </div>
                </div>

                <!-- Profil Bilgileri -->
                <div class="mt-6">
                    <div class="rounded-lg border bg-card">
                        <div class="p-6">
                            <h3 class="text-lg font-semibold mb-4">Kişisel Bilgiler</h3>
                            <form @submit.prevent="saveProfile" class="space-y-4">
                                <div class="grid gap-4 md:grid-cols-2">
                                    <div class="space-y-2">
                                        <Label for="firstName">Ad</Label>
                                        <Input
                                            id="firstName"
                                            v-model="profileForm.firstName"
                                            placeholder="Adınız"
                                            required
                                        />
                                    </div>
                                    <div class="space-y-2">
                                        <Label for="lastName">Soyad</Label>
                                        <Input
                                            id="lastName"
                                            v-model="profileForm.lastName"
                                            placeholder="Soyadınız"
                                            required
                                        />
                                    </div>
                                </div>
                                <div class="grid gap-4 md:grid-cols-2">
                                    <div class="space-y-2">
                                        <Label for="email">E-posta</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            v-model="profileForm.email"
                                            placeholder="E-posta adresiniz"
                                            required
                                        />
                                    </div>
                                    <div class="space-y-2">
                                        <Label for="phone">Telefon</Label>
                                        <Input
                                            id="phone"
                                            v-model="profileForm.phone"
                                            placeholder="0(5XX) XXX XX XX"
                                            required
                                        />
                                    </div>
                                </div>
                                <div class="grid gap-4 md:grid-cols-2">
                                    <div class="space-y-2">
                                        <Label for="birthDate">Doğum Tarihi</Label>
                                        <Input
                                            id="birthDate"
                                            type="date"
                                            v-model="profileForm.birthDate"
                                            required
                                        />
                                    </div>
                                    <div class="space-y-2">
                                        <Label for="gender">Cinsiyet</Label>
                                        <Select id="gender" v-model="profileForm.gender" required>
                                            <option value="">Seçiniz</option>
                                            <option value="male">Erkek</option>
                                            <option value="female">Kadın</option>
                                            <option value="other">Diğer</option>
                                        </Select>
                                    </div>
                                </div>
                                <div class="flex justify-end">
                                    <Button type="submit">Değişiklikleri Kaydet</Button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <!-- Şifre Değiştirme -->
                    <div class="mt-6 rounded-lg border bg-card">
                        <div class="p-6">
                            <h3 class="text-lg font-semibold mb-4">Şifre Değiştir</h3>
                            <form @submit.prevent="changePassword" class="space-y-4">
                                <div class="space-y-2">
                                    <Label for="currentPassword">Mevcut Şifre</Label>
                                    <Input
                                        id="currentPassword"
                                        type="password"
                                        v-model="passwordForm.currentPassword"
                                        placeholder="Mevcut şifreniz"
                                        required
                                    />
                                </div>
                                <div class="grid gap-4 md:grid-cols-2">
                                    <div class="space-y-2">
                                        <Label for="newPassword">Yeni Şifre</Label>
                                        <Input
                                            id="newPassword"
                                            type="password"
                                            v-model="passwordForm.newPassword"
                                            placeholder="Yeni şifreniz"
                                            required
                                        />
                                    </div>
                                    <div class="space-y-2">
                                        <Label for="confirmPassword">Yeni Şifre (Tekrar)</Label>
                                        <Input
                                            id="confirmPassword"
                                            type="password"
                                            v-model="passwordForm.confirmPassword"
                                            placeholder="Yeni şifrenizi tekrar girin"
                                            required
                                        />
                                    </div>
                                </div>
                                <div class="flex justify-end">
                                    <Button type="submit">Şifreyi Değiştir</Button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <!-- Bildirim Tercihleri -->
                    <div class="mt-6 rounded-lg border bg-card">
                        <div class="p-6">
                            <h3 class="text-lg font-semibold mb-4">Bildirim Tercihleri</h3>
                            <div class="space-y-4">
                                <div class="flex items-center justify-between">
                                    <div>
                                        <p class="font-medium">E-posta Bildirimleri</p>
                                        <p class="text-sm text-muted-foreground">
                                            Kampanyalar ve özel teklifler hakkında e-posta almak
                                            istiyorum.
                                        </p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        v-model="notificationPreferences.email"
                                        class="h-6 w-6 rounded border-gray-300"
                                    />
                                </div>
                                <div class="flex items-center justify-between">
                                    <div>
                                        <p class="font-medium">SMS Bildirimleri</p>
                                        <p class="text-sm text-muted-foreground">
                                            Kampanyalar ve özel teklifler hakkında SMS almak
                                            istiyorum.
                                        </p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        v-model="notificationPreferences.sms"
                                        class="h-6 w-6 rounded border-gray-300"
                                    />
                                </div>
                                <div class="flex items-center justify-between">
                                    <div>
                                        <p class="font-medium">Sipariş Güncellemeleri</p>
                                        <p class="text-sm text-muted-foreground">
                                            Siparişlerimin durumu hakkında bildirim almak istiyorum.
                                        </p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        v-model="notificationPreferences.orderUpdates"
                                        class="h-6 w-6 rounded border-gray-300"
                                    />
                                </div>
                            </div>
                            <div class="mt-4 flex justify-end">
                                <Button @click="saveNotificationPreferences"
                                    >Tercihleri Kaydet</Button
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from '@/components/ui/button/Button.vue'
import Input from '@/components/ui/input/Input.vue'
import Label from '@/components/ui/label/Label.vue'
import Select from '@/components/ui/select/Select.vue'

// Örnek veriler
const profileForm = ref({
    firstName: 'Ahmet',
    lastName: 'Yılmaz',
    email: 'ahmet@example.com',
    phone: '0532 123 45 67',
    birthDate: '1990-01-01',
    gender: 'male',
})

const passwordForm = ref({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
})

const notificationPreferences = ref({
    email: true,
    sms: false,
    orderUpdates: true,
})

const saveProfile = () => {
    // API çağrısı yapılacak
    console.log('Profil güncellendi:', profileForm.value)
}

const changePassword = () => {
    if (passwordForm.value.newPassword !== passwordForm.value.confirmPassword) {
        alert('Yeni şifreler eşleşmiyor!')
        return
    }
    // API çağrısı yapılacak
    console.log('Şifre değiştirildi')
    passwordForm.value = {
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    }
}

const saveNotificationPreferences = () => {
    // API çağrısı yapılacak
    console.log('Bildirim tercihleri güncellendi:', notificationPreferences.value)
}
</script>
