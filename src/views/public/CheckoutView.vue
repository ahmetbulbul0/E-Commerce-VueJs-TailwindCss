<template>
    <div class="container mx-auto py-8">
        <div class="max-w-4xl mx-auto">
            <form @submit.prevent="handleSubmit" class="space-y-6">
                <!-- Teslimat Bilgileri -->
                <Card>
                    <template #header>
                        <h3 class="text-lg font-semibold">Teslimat Bilgileri</h3>
                        <p class="text-sm text-muted-foreground">
                            Siparişinizin teslim edileceği adresi girin.
                        </p>
                    </template>

                    <div class="space-y-4">
                        <div class="grid gap-4 sm:grid-cols-2">
                            <Input
                                id="firstName"
                                v-model="form.firstName"
                                label="Ad"
                                placeholder="Adınız"
                                required
                            />
                            <Input
                                id="lastName"
                                v-model="form.lastName"
                                label="Soyad"
                                placeholder="Soyadınız"
                                required
                            />
                        </div>

                        <Input
                            id="phone"
                            type="tel"
                            v-model="form.phone"
                            label="Telefon"
                            placeholder="(5XX) XXX XX XX"
                            required
                        />

                        <Textarea
                            id="address"
                            v-model="form.address"
                            label="Adres"
                            placeholder="Açık adresiniz"
                            rows="3"
                            required
                        />

                        <div class="grid gap-4 sm:grid-cols-2">
                            <Select
                                id="city"
                                v-model="form.city"
                                label="İl"
                                placeholder="İl seçin"
                                required
                            >
                                <option v-for="city in cities" :key="city" :value="city">
                                    {{ city }}
                                </option>
                            </Select>

                            <Select
                                id="district"
                                v-model="form.district"
                                label="İlçe"
                                placeholder="İlçe seçin"
                                required
                            >
                                <option
                                    v-for="district in districts"
                                    :key="district"
                                    :value="district"
                                >
                                    {{ district }}
                                </option>
                            </Select>
                        </div>
                    </div>
                </Card>

                <!-- Fatura Bilgileri -->
                <Card>
                    <template #header>
                        <h3 class="text-lg font-semibold">Fatura Bilgileri</h3>
                        <p class="text-sm text-muted-foreground">Fatura bilgilerinizi girin.</p>
                    </template>

                    <div class="space-y-4">
                        <Checkbox
                            id="sameAsDelivery"
                            v-model="form.sameAsDelivery"
                            label="Fatura adresi teslimat adresi ile aynı"
                        />

                        <div v-if="!form.sameAsDelivery" class="grid gap-4">
                            <Select
                                id="billType"
                                v-model="form.billType"
                                label="Fatura Türü"
                                required
                            >
                                <option value="individual">Bireysel</option>
                                <option value="corporate">Kurumsal</option>
                            </Select>

                            <Input
                                v-if="form.billType === 'corporate'"
                                id="taxNumber"
                                v-model="form.taxNumber"
                                label="Vergi No"
                                placeholder="Vergi numarası"
                                required
                            />

                            <Input
                                v-else
                                id="identityNumber"
                                v-model="form.identityNumber"
                                label="TC Kimlik No"
                                placeholder="TC Kimlik numarası"
                                required
                            />

                            <Textarea
                                id="billAddress"
                                v-model="form.billAddress"
                                label="Fatura Adresi"
                                placeholder="Fatura adresi"
                                rows="3"
                                required
                            />
                        </div>
                    </div>
                </Card>

                <!-- Ödeme Bilgileri -->
                <Card>
                    <template #header>
                        <h3 class="text-lg font-semibold">Ödeme Bilgileri</h3>
                        <p class="text-sm text-muted-foreground">
                            Güvenli ödeme için kart bilgilerinizi girin.
                        </p>
                    </template>

                    <div class="space-y-4">
                        <Input
                            id="cardName"
                            v-model="form.cardName"
                            label="Kart Üzerindeki İsim"
                            placeholder="Kart sahibinin adı"
                            required
                        />

                        <Input
                            id="cardNumber"
                            v-model="form.cardNumber"
                            label="Kart Numarası"
                            placeholder="XXXX XXXX XXXX XXXX"
                            maxlength="19"
                            @input="formatCardNumber"
                            required
                        />

                        <div class="grid gap-4 sm:grid-cols-2">
                            <Input
                                id="expiryDate"
                                v-model="form.expiryDate"
                                label="Son Kullanma Tarihi"
                                placeholder="AA/YY"
                                maxlength="5"
                                @input="formatExpiryDate"
                                required
                            />

                            <Input
                                id="cvv"
                                v-model="form.cvv"
                                label="CVV"
                                placeholder="XXX"
                                maxlength="3"
                                required
                            />
                        </div>
                    </div>
                </Card>

                <button
                    type="submit"
                    class="w-full inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
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
                    Siparişi Tamamla
                </button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Card from '@/components/ui/layout/Card.vue'
import Input from '@/components/ui/form/Input.vue'
import Select from '@/components/ui/form/Select.vue'
import Textarea from '@/components/ui/form/Textarea.vue'
import Checkbox from '@/components/ui/form/Checkbox.vue'

const loading = ref(false)

// Form verisi
const form = ref({
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: '',
    district: '',
    sameAsDelivery: true,
    billType: 'individual',
    taxNumber: '',
    identityNumber: '',
    billAddress: '',
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
})

// Örnek veriler
const cities = ['İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Antalya']
const districts = ['Kadıköy', 'Beşiktaş', 'Şişli', 'Üsküdar', 'Maltepe']

// Format fonksiyonları
const formatCardNumber = (event: Event) => {
    const input = event.target as HTMLInputElement
    let value = input.value.replace(/\D/g, '')
    value = value.replace(/(\d{4})/g, '$1 ').trim()
    form.value.cardNumber = value
}

const formatExpiryDate = (event: Event) => {
    const input = event.target as HTMLInputElement
    let value = input.value.replace(/\D/g, '')
    if (value.length >= 2) {
        value = value.slice(0, 2) + '/' + value.slice(2)
    }
    form.value.expiryDate = value
}

const handleSubmit = async () => {
    loading.value = true
    try {
        // Sipariş tamamlama işlemleri
        await new Promise((resolve) => setTimeout(resolve, 1000))
    } catch (error) {
        console.error('Sipariş tamamlanamadı:', error)
    } finally {
        loading.value = false
    }
}
</script>
