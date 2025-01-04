<template>
  <div class="flex min-h-screen">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Ana İçerik -->
    <div class="flex-1">
      <div class="container py-6">
        <!-- Başlık ve Üst Araçlar -->
        <div
          class="mb-8 flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0"
        >
          <div>
            <h1 class="text-3xl font-bold tracking-tight">Analiz</h1>
            <p class="text-muted-foreground">Satış ve müşteri verilerinizi analiz edin</p>
          </div>
          <div class="flex items-center space-x-4">
            <Select v-model="timeRange" class="w-40">
              <option value="today">Bugün</option>
              <option value="week">Bu Hafta</option>
              <option value="month">Bu Ay</option>
              <option value="year">Bu Yıl</option>
              <option value="custom">Özel Aralık</option>
            </Select>
            <Button variant="outline" @click="refreshData">
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
                class="mr-2"
              >
                <path d="M21 2v6h-6" />
                <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
                <path d="M3 22v-6h6" />
                <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
              </svg>
              Yenile
            </Button>
          </div>
        </div>

        <!-- KPI Kartları -->
        <div class="mb-8 grid gap-4 md:grid-cols-4">
          <div class="rounded-lg border bg-card p-4">
            <div class="text-sm font-medium text-muted-foreground">Toplam Satış</div>
            <div class="mt-2 flex items-baseline space-x-2">
              <div class="text-2xl font-bold">{{ formatCurrency(kpis.totalSales) }}</div>
              <div
                :class="{
                  'text-sm font-medium': true,
                  'text-green-600': kpis.salesGrowth > 0,
                  'text-red-600': kpis.salesGrowth < 0,
                }"
              >
                {{ formatGrowth(kpis.salesGrowth) }}
              </div>
            </div>
          </div>
          <div class="rounded-lg border bg-card p-4">
            <div class="text-sm font-medium text-muted-foreground">Sipariş Sayısı</div>
            <div class="mt-2 flex items-baseline space-x-2">
              <div class="text-2xl font-bold">{{ kpis.totalOrders }}</div>
              <div
                :class="{
                  'text-sm font-medium': true,
                  'text-green-600': kpis.ordersGrowth > 0,
                  'text-red-600': kpis.ordersGrowth < 0,
                }"
              >
                {{ formatGrowth(kpis.ordersGrowth) }}
              </div>
            </div>
          </div>
          <div class="rounded-lg border bg-card p-4">
            <div class="text-sm font-medium text-muted-foreground">Ortalama Sipariş Tutarı</div>
            <div class="mt-2 flex items-baseline space-x-2">
              <div class="text-2xl font-bold">{{ formatCurrency(kpis.averageOrderValue) }}</div>
              <div
                :class="{
                  'text-sm font-medium': true,
                  'text-green-600': kpis.aovGrowth > 0,
                  'text-red-600': kpis.aovGrowth < 0,
                }"
              >
                {{ formatGrowth(kpis.aovGrowth) }}
              </div>
            </div>
          </div>
          <div class="rounded-lg border bg-card p-4">
            <div class="text-sm font-medium text-muted-foreground">Yeni Müşteriler</div>
            <div class="mt-2 flex items-baseline space-x-2">
              <div class="text-2xl font-bold">{{ kpis.newCustomers }}</div>
              <div
                :class="{
                  'text-sm font-medium': true,
                  'text-green-600': kpis.customersGrowth > 0,
                  'text-red-600': kpis.customersGrowth < 0,
                }"
              >
                {{ formatGrowth(kpis.customersGrowth) }}
              </div>
            </div>
          </div>
        </div>

        <!-- Grafikler -->
        <div class="mb-8 grid gap-4 md:grid-cols-2">
          <!-- Satış Trendi -->
          <div class="rounded-lg border bg-card p-4">
            <div class="mb-4 flex items-center justify-between">
              <h3 class="text-lg font-medium">Satış Trendi</h3>
              <Select v-model="salesChartType" class="w-40">
                <option value="revenue">Gelir</option>
                <option value="orders">Sipariş Sayısı</option>
              </Select>
            </div>
            <div class="h-80">
              <!-- Satış trendi grafiği buraya gelecek -->
              <div class="flex h-full items-center justify-center text-muted-foreground">
                Grafik bileşeni eklenecek
              </div>
            </div>
          </div>

          <!-- Kategori Dağılımı -->
          <div class="rounded-lg border bg-card p-4">
            <div class="mb-4 flex items-center justify-between">
              <h3 class="text-lg font-medium">Kategori Dağılımı</h3>
              <Select v-model="categoryChartMetric" class="w-40">
                <option value="revenue">Gelir</option>
                <option value="orders">Sipariş Sayısı</option>
                <option value="items">Ürün Sayısı</option>
              </Select>
            </div>
            <div class="h-80">
              <!-- Kategori dağılımı grafiği buraya gelecek -->
              <div class="flex h-full items-center justify-center text-muted-foreground">
                Grafik bileşeni eklenecek
              </div>
            </div>
          </div>
        </div>

        <!-- En Çok Satan Ürünler -->
        <div class="mb-8 rounded-lg border bg-card">
          <div class="border-b p-4">
            <h3 class="text-lg font-medium">En Çok Satan Ürünler</h3>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="border-b bg-muted/50">
                  <th class="px-4 py-3 text-left text-sm font-medium">Ürün</th>
                  <th class="px-4 py-3 text-left text-sm font-medium">Kategori</th>
                  <th class="px-4 py-3 text-left text-sm font-medium">Satış Adedi</th>
                  <th class="px-4 py-3 text-left text-sm font-medium">Toplam Gelir</th>
                  <th class="px-4 py-3 text-left text-sm font-medium">Stok Durumu</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in topProducts" :key="product.id" class="border-b">
                  <td class="px-4 py-3">
                    <div class="flex items-center space-x-3">
                      <div class="h-10 w-10 overflow-hidden rounded-lg bg-muted">
                        <img
                          :src="product.image"
                          :alt="product.name"
                          class="h-full w-full object-cover"
                        />
                      </div>
                      <div class="font-medium">{{ product.name }}</div>
                    </div>
                  </td>
                  <td class="px-4 py-3 text-muted-foreground">{{ product.category }}</td>
                  <td class="px-4 py-3 font-medium">{{ product.soldCount }}</td>
                  <td class="px-4 py-3 font-medium">{{ formatCurrency(product.revenue) }}</td>
                  <td class="px-4 py-3">
                    <span
                      :class="{
                        'inline-flex items-center rounded-full px-2 py-1 text-xs font-medium': true,
                        'bg-green-100 text-green-700': product.stock > 20,
                        'bg-yellow-100 text-yellow-700': product.stock <= 20 && product.stock > 0,
                        'bg-red-100 text-red-700': product.stock === 0,
                      }"
                    >
                      {{ getStockStatus(product.stock) }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Müşteri Segmentasyonu -->
        <div class="rounded-lg border bg-card">
          <div class="border-b p-4">
            <h3 class="text-lg font-medium">Müşteri Segmentasyonu</h3>
          </div>
          <div class="grid gap-4 p-4 md:grid-cols-3">
            <div class="rounded-lg border p-4">
              <div class="text-sm font-medium text-muted-foreground">Yeni Müşteriler</div>
              <div class="mt-2 text-2xl font-bold">{{ customerSegments.new }}</div>
              <div class="mt-1 text-sm text-muted-foreground">Son 30 gün</div>
            </div>
            <div class="rounded-lg border p-4">
              <div class="text-sm font-medium text-muted-foreground">Tekrar Eden Müşteriler</div>
              <div class="mt-2 text-2xl font-bold">{{ customerSegments.returning }}</div>
              <div class="mt-1 text-sm text-muted-foreground">2+ sipariş</div>
            </div>
            <div class="rounded-lg border p-4">
              <div class="text-sm font-medium text-muted-foreground">VIP Müşteriler</div>
              <div class="mt-2 text-2xl font-bold">{{ customerSegments.vip }}</div>
              <div class="mt-1 text-sm text-muted-foreground">5000 TL+ harcama</div>
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
import Select from '@/components/ui/select/Select.vue'
import Sidebar from '@/components/seller/Sidebar.vue'

// Filtreler
const timeRange = ref('month')
const salesChartType = ref('revenue')
const categoryChartMetric = ref('revenue')

// KPI verileri
const kpis = ref({
  totalSales: 125750.45,
  salesGrowth: 12.5,
  totalOrders: 458,
  ordersGrowth: 8.3,
  averageOrderValue: 274.56,
  aovGrowth: 3.8,
  newCustomers: 145,
  customersGrowth: 15.2,
})

// En çok satan ürünler
const topProducts = ref([
  {
    id: 1,
    name: 'Kablosuz Kulaklık',
    category: 'Elektronik',
    soldCount: 89,
    revenue: 17755.11,
    stock: 45,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop',
  },
  {
    id: 2,
    name: 'Akıllı Saat',
    category: 'Elektronik',
    soldCount: 67,
    revenue: 11723.33,
    stock: 12,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop',
  },
  {
    id: 3,
    name: 'Tablet',
    category: 'Elektronik',
    soldCount: 45,
    revenue: 31495.55,
    stock: 0,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=100&h=100&fit=crop',
  },
])

// Müşteri segmentasyonu
const customerSegments = ref({
  new: 145,
  returning: 287,
  vip: 64,
})

// Metodlar
const formatCurrency = (value) => {
  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
  }).format(value)
}

const formatGrowth = (value) => {
  const sign = value > 0 ? '+' : ''
  return `${sign}${value.toFixed(1)}%`
}

const getStockStatus = (stock) => {
  if (stock === 0) return 'Tükendi'
  if (stock <= 20) return 'Az Stok'
  return 'Stokta'
}

const refreshData = () => {
  // Verileri yenileme işlemi
  console.log('Veriler yenileniyor...')
}
</script>
