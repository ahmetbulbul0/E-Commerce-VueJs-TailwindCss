<template>
  <div class="flex min-h-screen">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Ana İçerik -->
    <div class="flex-1">
      <div class="container py-6">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-2xl font-bold">Sipariş Detayı</h2>
            <p class="text-sm text-muted-foreground">
              Sipariş #{{ orderId }} detaylarını görüntülüyorsunuz.
            </p>
          </div>
          <Button variant="outline" @click="$router.back()">Geri Dön</Button>
        </div>

        <!-- Sipariş Durumu -->
        <div class="mt-6 rounded-lg border bg-card p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-muted-foreground">Sipariş Durumu</p>
              <div class="mt-1">
                <span
                  :class="{
                    'inline-flex items-center rounded-full px-3 py-1 text-sm font-medium': true,
                    'bg-green-100 text-green-700': order.status === 'Teslim Edildi',
                    'bg-yellow-100 text-yellow-700': order.status === 'Kargoda',
                    'bg-blue-100 text-blue-700': order.status === 'Hazırlanıyor',
                    'bg-red-100 text-red-700': order.status === 'İptal Edildi',
                  }"
                >
                  {{ order.status }}
                </span>
              </div>
            </div>
            <div class="text-right">
              <p class="text-sm text-muted-foreground">Sipariş Tarihi</p>
              <p class="mt-1 font-medium">{{ order.date }}</p>
            </div>
          </div>

          <!-- Durum Çubuğu -->
          <div class="mt-6">
            <div class="relative">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-muted"></div>
              </div>
              <div class="relative flex justify-between">
                <div
                  v-for="(step, index) in orderSteps"
                  :key="index"
                  class="flex flex-col items-center"
                >
                  <div
                    :class="{
                      'h-8 w-8 rounded-full border-2 flex items-center justify-center bg-background': true,
                      'border-primary': step.completed,
                      'border-muted': !step.completed,
                    }"
                  >
                    <svg
                      v-if="step.completed"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="text-primary"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p class="mt-2 text-xs">{{ step.label }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Teslimat Bilgileri -->
        <div class="mt-6 grid gap-6 md:grid-cols-2">
          <div class="rounded-lg border bg-card p-6">
            <h3 class="font-semibold">Teslimat Adresi</h3>
            <div class="mt-4 space-y-2">
              <p class="font-medium">{{ order.shippingAddress.fullName }}</p>
              <p class="text-sm">{{ order.shippingAddress.phone }}</p>
              <p class="text-sm">{{ order.shippingAddress.address }}</p>
              <p class="text-sm">
                {{ order.shippingAddress.district }}/{{ order.shippingAddress.city }}
              </p>
            </div>
          </div>

          <div class="rounded-lg border bg-card p-6">
            <h3 class="font-semibold">Kargo Bilgileri</h3>
            <div class="mt-4 space-y-2">
              <p class="font-medium">{{ order.shipping.company }}</p>
              <p class="text-sm">Takip No: {{ order.shipping.trackingNumber }}</p>
              <a
                :href="order.shipping.trackingUrl"
                target="_blank"
                class="text-sm text-primary hover:underline"
              >
                Kargo Takip
              </a>
            </div>
          </div>
        </div>

        <!-- Ürünler -->
        <div class="mt-6 rounded-lg border bg-card">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="border-b bg-muted/50">
                  <th class="px-4 py-3 text-left text-sm font-medium">Ürün</th>
                  <th class="px-4 py-3 text-center text-sm font-medium">Adet</th>
                  <th class="px-4 py-3 text-right text-sm font-medium">Birim Fiyat</th>
                  <th class="px-4 py-3 text-right text-sm font-medium">Toplam</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in order.items" :key="item.id" class="border-b">
                  <td class="px-4 py-3">
                    <div class="flex items-center space-x-3">
                      <img
                        :src="item.image"
                        :alt="item.name"
                        class="h-12 w-12 rounded-lg object-cover"
                      />
                      <div>
                        <p class="font-medium">{{ item.name }}</p>
                        <p class="text-sm text-muted-foreground">{{ item.variant }}</p>
                      </div>
                    </div>
                  </td>
                  <td class="px-4 py-3 text-center">{{ item.quantity }}</td>
                  <td class="px-4 py-3 text-right">{{ item.price }} TL</td>
                  <td class="px-4 py-3 text-right">{{ item.quantity * item.price }} TL</td>
                </tr>
              </tbody>
              <tfoot>
                <tr class="border-t">
                  <td colspan="3" class="px-4 py-3 text-right font-medium">Ara Toplam</td>
                  <td class="px-4 py-3 text-right">{{ order.subtotal }} TL</td>
                </tr>
                <tr>
                  <td colspan="3" class="px-4 py-3 text-right font-medium">Kargo</td>
                  <td class="px-4 py-3 text-right">{{ order.shippingCost }} TL</td>
                </tr>
                <tr v-if="order.discount">
                  <td colspan="3" class="px-4 py-3 text-right font-medium">İndirim</td>
                  <td class="px-4 py-3 text-right text-green-600">-{{ order.discount }} TL</td>
                </tr>
                <tr>
                  <td colspan="3" class="px-4 py-3 text-right font-medium">Toplam</td>
                  <td class="px-4 py-3 text-right font-bold">{{ order.total }} TL</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        <!-- İşlemler -->
        <div class="mt-6 flex justify-end space-x-2">
          <Button v-if="order.status === 'Hazırlanıyor'" variant="destructive" @click="cancelOrder">
            Siparişi İptal Et
          </Button>
          <Button variant="outline" @click="downloadInvoice">Faturayı İndir</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Button from '@/components/ui/button/Button.vue'
import Sidebar from '@/components/customer/Sidebar.vue'

const route = useRoute()
const router = useRouter()
const orderId = route.params.id

// Örnek veri
const order = ref({
  id: orderId,
  status: 'Kargoda',
  date: '2024-01-15',
  shippingAddress: {
    fullName: 'Ahmet Yılmaz',
    phone: '0532 123 45 67',
    address: 'Örnek Mahallesi, Örnek Sokak No:1 D:5',
    district: 'Kadıköy',
    city: 'İstanbul',
  },
  shipping: {
    company: 'Aras Kargo',
    trackingNumber: '1234567890',
    trackingUrl: 'https://www.araskargo.com.tr/cargo-tracking',
  },
  items: [
    {
      id: 1,
      name: 'Kablosuz Kulaklık',
      variant: 'Siyah',
      quantity: 1,
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop',
    },
    {
      id: 2,
      name: 'Akıllı Saat',
      variant: 'Gümüş',
      quantity: 1,
      price: 349.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop',
    },
  ],
  subtotal: 549.98,
  shippingCost: 29.99,
  discount: 50,
  total: 529.97,
})

const orderSteps = ref([
  {
    label: 'Sipariş Alındı',
    completed: true,
  },
  {
    label: 'Hazırlanıyor',
    completed: true,
  },
  {
    label: 'Kargoya Verildi',
    completed: true,
  },
  {
    label: 'Teslim Edildi',
    completed: false,
  },
])

const cancelOrder = async () => {
  // API çağrısı yapılacak
  try {
    // await api.cancelOrder(orderId)
    order.value.status = 'İptal Edildi'
  } catch (error) {
    console.error('Sipariş iptal edilemedi:', error)
  }
}

const downloadInvoice = () => {
  // PDF indirme işlemi yapılacak
  console.log('Fatura indiriliyor...')
}

onMounted(async () => {
  try {
    // Sipariş detayları API'den alınacak
    // const response = await api.getOrderDetails(orderId)
    // order.value = response.data
  } catch (error) {
    console.error('Sipariş detayları alınamadı:', error)
    router.push('/customer/orders')
  }
})
</script>
