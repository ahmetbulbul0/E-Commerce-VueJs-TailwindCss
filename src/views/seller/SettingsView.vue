<template>
    <div class="container py-8">
        <!-- Başlık -->
        <div class="mb-8">
            <h1 class="text-3xl font-bold tracking-tight">Ayarlar</h1>
            <p class="text-muted-foreground">Mağaza ve hesap ayarlarınızı yönetin</p>
        </div>

        <!-- Ayarlar Bölümleri -->
        <div class="grid gap-8 lg:grid-cols-[250px_1fr]">
            <!-- Sol Taraf - Ayar Kategorileri -->
            <nav class="space-y-2">
                <button
                    v-for="(section, index) in sections"
                    :key="index"
                    class="w-full rounded-lg px-3 py-2 text-left text-sm transition-colors hover:bg-accent"
                    :class="{ 'bg-accent': activeSection === section.id }"
                    @click="activeSection = section.id"
                >
                    {{ section.name }}
                </button>
            </nav>

            <!-- Sağ Taraf - Ayar İçeriği -->
            <div class="space-y-8">
                <!-- Mağaza Bilgileri -->
                <div v-if="activeSection === 'store'" class="space-y-6">
                    <div class="space-y-4">
                        <h2 class="text-xl font-semibold">Mağaza Bilgileri</h2>
                        <div class="grid gap-6">
                            <div class="space-y-2">
                                <label for="storeName" class="text-sm font-medium"
                                    >Mağaza Adı</label
                                >
                                <Input
                                    id="storeName"
                                    v-model="storeSettings.name"
                                    placeholder="Mağazanızın adı"
                                />
                            </div>
                            <div class="space-y-2">
                                <label for="storeDescription" class="text-sm font-medium"
                                    >Mağaza Açıklaması</label
                                >
                                <Textarea
                                    id="storeDescription"
                                    v-model="storeSettings.description"
                                    placeholder="Mağazanız hakkında kısa bir açıklama"
                                    rows="4"
                                />
                            </div>
                            <div class="space-y-2">
                                <label for="storeEmail" class="text-sm font-medium"
                                    >İletişim E-posta</label
                                >
                                <Input
                                    id="storeEmail"
                                    v-model="storeSettings.email"
                                    type="email"
                                    placeholder="ornek@magaza.com"
                                />
                            </div>
                            <div class="space-y-2">
                                <label for="storePhone" class="text-sm font-medium"
                                    >İletişim Telefonu</label
                                >
                                <Input
                                    id="storePhone"
                                    v-model="storeSettings.phone"
                                    type="tel"
                                    placeholder="0212 345 67 89"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="space-y-4">
                        <h3 class="text-lg font-semibold">Mağaza Adresi</h3>
                        <div class="grid gap-6">
                            <div class="space-y-2">
                                <label for="storeAddress" class="text-sm font-medium">Adres</label>
                                <Textarea
                                    id="storeAddress"
                                    v-model="storeSettings.address"
                                    placeholder="Mağazanızın açık adresi"
                                    rows="3"
                                />
                            </div>
                            <div class="grid gap-4 sm:grid-cols-2">
                                <div class="space-y-2">
                                    <label for="storeCity" class="text-sm font-medium">Şehir</label>
                                    <Input
                                        id="storeCity"
                                        v-model="storeSettings.city"
                                        placeholder="İstanbul"
                                    />
                                </div>
                                <div class="space-y-2">
                                    <label for="storeDistrict" class="text-sm font-medium"
                                        >İlçe</label
                                    >
                                    <Input
                                        id="storeDistrict"
                                        v-model="storeSettings.district"
                                        placeholder="Kadıköy"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Kargo Ayarları -->
                <div v-if="activeSection === 'shipping'" class="space-y-6">
                    <div class="space-y-4">
                        <h2 class="text-xl font-semibold">Kargo Ayarları</h2>
                        <div class="grid gap-6">
                            <div class="flex items-center justify-between rounded-lg border p-4">
                                <div class="space-y-0.5">
                                    <label class="text-sm font-medium">Ücretsiz Kargo</label>
                                    <p class="text-sm text-muted-foreground">
                                        Belirli bir tutarın üzerindeki siparişlerde ücretsiz kargo
                                    </p>
                                </div>
                                <Switch v-model="shippingSettings.freeShipping" />
                            </div>
                            <div v-if="shippingSettings.freeShipping" class="space-y-2">
                                <label for="freeShippingThreshold" class="text-sm font-medium">
                                    Ücretsiz Kargo Alt Limiti (TL)
                                </label>
                                <Input
                                    id="freeShippingThreshold"
                                    v-model="shippingSettings.freeShippingThreshold"
                                    type="number"
                                    placeholder="250"
                                />
                            </div>
                            <div class="space-y-2">
                                <label for="shippingFee" class="text-sm font-medium"
                                    >Standart Kargo Ücreti (TL)</label
                                >
                                <Input
                                    id="shippingFee"
                                    v-model="shippingSettings.shippingFee"
                                    type="number"
                                    placeholder="30"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="space-y-4">
                        <h3 class="text-lg font-semibold">Kargo Firmaları</h3>
                        <div class="space-y-4">
                            <div
                                v-for="(company, index) in shippingSettings.companies"
                                :key="index"
                                class="flex items-center space-x-4 rounded-lg border p-4"
                            >
                                <div class="flex-1 space-y-1">
                                    <Input v-model="company.name" placeholder="Kargo firması adı" />
                                    <Input
                                        v-model="company.fee"
                                        type="number"
                                        placeholder="Kargo ücreti"
                                    />
                                </div>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    class="shrink-0"
                                    @click="removeShippingCompany(index)"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="M3 6h18" />
                                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                                    </svg>
                                </Button>
                            </div>
                            <Button variant="outline" class="w-full" @click="addShippingCompany">
                                Kargo Firması Ekle
                            </Button>
                        </div>
                    </div>
                </div>

                <!-- Ödeme Ayarları -->
                <div v-if="activeSection === 'payment'" class="space-y-6">
                    <div class="space-y-4">
                        <h2 class="text-xl font-semibold">Ödeme Ayarları</h2>
                        <div class="grid gap-6">
                            <div class="space-y-2">
                                <label for="bankName" class="text-sm font-medium">Banka Adı</label>
                                <Input
                                    id="bankName"
                                    v-model="paymentSettings.bankName"
                                    placeholder="Örnek: Ziraat Bankası"
                                />
                            </div>
                            <div class="space-y-2">
                                <label for="accountHolder" class="text-sm font-medium"
                                    >Hesap Sahibi</label
                                >
                                <Input
                                    id="accountHolder"
                                    v-model="paymentSettings.accountHolder"
                                    placeholder="Hesap sahibinin adı soyadı"
                                />
                            </div>
                            <div class="space-y-2">
                                <label for="iban" class="text-sm font-medium">IBAN</label>
                                <Input
                                    id="iban"
                                    v-model="paymentSettings.iban"
                                    placeholder="TR00 0000 0000 0000 0000 0000 00"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="space-y-4">
                        <h3 class="text-lg font-semibold">Ödeme Yöntemleri</h3>
                        <div class="space-y-4">
                            <div class="flex items-center justify-between rounded-lg border p-4">
                                <div class="space-y-0.5">
                                    <label class="text-sm font-medium">Kredi Kartı</label>
                                    <p class="text-sm text-muted-foreground">
                                        Müşteriler kredi kartı ile ödeme yapabilsin
                                    </p>
                                </div>
                                <Switch v-model="paymentSettings.creditCard" />
                            </div>
                            <div class="flex items-center justify-between rounded-lg border p-4">
                                <div class="space-y-0.5">
                                    <label class="text-sm font-medium">Havale / EFT</label>
                                    <p class="text-sm text-muted-foreground">
                                        Müşteriler banka havalesi ile ödeme yapabilsin
                                    </p>
                                </div>
                                <Switch v-model="paymentSettings.bankTransfer" />
                            </div>
                            <div class="flex items-center justify-between rounded-lg border p-4">
                                <div class="space-y-0.5">
                                    <label class="text-sm font-medium">Kapıda Ödeme</label>
                                    <p class="text-sm text-muted-foreground">
                                        Müşteriler kapıda ödeme yapabilsin
                                    </p>
                                </div>
                                <Switch v-model="paymentSettings.cashOnDelivery" />
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Bildirim Ayarları -->
                <div v-if="activeSection === 'notifications'" class="space-y-6">
                    <div class="space-y-4">
                        <h2 class="text-xl font-semibold">Bildirim Ayarları</h2>
                        <div class="space-y-4">
                            <div class="flex items-center justify-between rounded-lg border p-4">
                                <div class="space-y-0.5">
                                    <label class="text-sm font-medium">E-posta Bildirimleri</label>
                                    <p class="text-sm text-muted-foreground">
                                        Yeni sipariş, iade ve diğer önemli konularda e-posta
                                        bildirimleri
                                    </p>
                                </div>
                                <Switch v-model="notificationSettings.email" />
                            </div>
                            <div class="flex items-center justify-between rounded-lg border p-4">
                                <div class="space-y-0.5">
                                    <label class="text-sm font-medium">SMS Bildirimleri</label>
                                    <p class="text-sm text-muted-foreground">
                                        Yeni sipariş ve önemli güncellemeler için SMS bildirimleri
                                    </p>
                                </div>
                                <Switch v-model="notificationSettings.sms" />
                            </div>
                            <div class="flex items-center justify-between rounded-lg border p-4">
                                <div class="space-y-0.5">
                                    <label class="text-sm font-medium">Tarayıcı Bildirimleri</label>
                                    <p class="text-sm text-muted-foreground">
                                        Web tarayıcısı üzerinden anlık bildirimler
                                    </p>
                                </div>
                                <Switch v-model="notificationSettings.browser" />
                            </div>
                        </div>
                    </div>

                    <div v-if="notificationSettings.email" class="space-y-4">
                        <h3 class="text-lg font-semibold">E-posta Bildirim Tercihleri</h3>
                        <div class="space-y-4">
                            <div class="flex items-center space-x-2">
                                <Checkbox
                                    v-model="notificationSettings.emailPreferences.newOrder"
                                />
                                <label class="text-sm">Yeni Sipariş Bildirimleri</label>
                            </div>
                            <div class="flex items-center space-x-2">
                                <Checkbox
                                    v-model="notificationSettings.emailPreferences.orderStatus"
                                />
                                <label class="text-sm">Sipariş Durumu Güncellemeleri</label>
                            </div>
                            <div class="flex items-center space-x-2">
                                <Checkbox v-model="notificationSettings.emailPreferences.returns" />
                                <label class="text-sm">İade ve İptal Bildirimleri</label>
                            </div>
                            <div class="flex items-center space-x-2">
                                <Checkbox v-model="notificationSettings.emailPreferences.reviews" />
                                <label class="text-sm">Yeni Ürün Değerlendirmeleri</label>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Kaydet Butonu -->
                <div class="flex justify-end pt-6">
                    <Button @click="saveSettings">Değişiklikleri Kaydet</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Aktif bölüm
const activeSection = ref('store')

// Ayar bölümleri
const sections = [
    { id: 'store', name: 'Mağaza Bilgileri' },
    { id: 'shipping', name: 'Kargo Ayarları' },
    { id: 'payment', name: 'Ödeme Ayarları' },
    { id: 'notifications', name: 'Bildirim Ayarları' },
]

// Mağaza ayarları
const storeSettings = ref({
    name: '',
    description: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    district: '',
})

// Kargo ayarları
const shippingSettings = ref({
    freeShipping: false,
    freeShippingThreshold: 250,
    shippingFee: 30,
    companies: [
        { name: 'Yurtiçi Kargo', fee: 30 },
        { name: 'Aras Kargo', fee: 35 },
    ],
})

// Ödeme ayarları
const paymentSettings = ref({
    bankName: '',
    accountHolder: '',
    iban: '',
    creditCard: true,
    bankTransfer: true,
    cashOnDelivery: false,
})

// Bildirim ayarları
const notificationSettings = ref({
    email: true,
    sms: false,
    browser: true,
    emailPreferences: {
        newOrder: true,
        orderStatus: true,
        returns: true,
        reviews: false,
    },
})

// Kargo firması ekle
const addShippingCompany = () => {
    shippingSettings.value.companies.push({ name: '', fee: 0 })
}

// Kargo firması kaldır
const removeShippingCompany = (index: number) => {
    shippingSettings.value.companies.splice(index, 1)
}

// Ayarları kaydet
const saveSettings = () => {
    // API'ye kaydetme işlemi burada yapılacak
    console.log('Ayarlar kaydediliyor...')
}
</script>
