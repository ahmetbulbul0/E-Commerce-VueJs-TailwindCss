<template>
    <div class="flex min-h-screen">
        <!-- Ana İçerik -->
        <div class="flex-1">
            <div class="container py-6">
                <!-- Üst Kartlar -->
                <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <div class="rounded-lg border bg-card p-6">
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="text-sm text-muted-foreground">Toplam Sipariş</p>
                                <h3 class="mt-1 text-2xl font-bold">12</h3>
                                <p class="mt-1 text-xs text-green-500">Son 30 gün: 3 sipariş</p>
                            </div>
                            <div class="rounded-full bg-primary/10 p-3 text-primary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <rect width="16" height="16" x="4" y="4" rx="2" />
                                    <rect width="4" height="4" x="9" y="9" rx="1" />
                                    <path d="M15 2v4" />
                                    <path d="M15 18v4" />
                                    <path d="M9 2v4" />
                                    <path d="M9 18v4" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div class="rounded-lg border bg-card p-6">
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="text-sm text-muted-foreground">Toplam Harcama</p>
                                <h3 class="mt-1 text-2xl font-bold">2,749.90 TL</h3>
                                <p class="mt-1 text-xs text-green-500">Son 30 gün: 899.90 TL</p>
                            </div>
                            <div class="rounded-full bg-primary/10 p-3 text-primary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div class="rounded-lg border bg-card p-6">
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="text-sm text-muted-foreground">Favori Ürünler</p>
                                <h3 class="mt-1 text-2xl font-bold">8</h3>
                                <p class="mt-1 text-xs text-muted-foreground">Takip edilen ürün</p>
                            </div>
                            <div class="rounded-full bg-primary/10 p-3 text-primary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path
                                        d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div class="rounded-lg border bg-card p-6">
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="text-sm text-muted-foreground">Kayıtlı Adresler</p>
                                <h3 class="mt-1 text-2xl font-bold">3</h3>
                                <p class="mt-1 text-xs text-muted-foreground">Teslimat adresi</p>
                            </div>
                            <div class="rounded-full bg-primary/10 p-3 text-primary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Son Siparişler -->
                <div class="mt-6">
                    <div class="flex items-center justify-between">
                        <h2 class="text-lg font-semibold">Son Siparişlerim</h2>
                        <Button
                            variant="outline"
                            size="sm"
                            @click="$router.push('/customer/orders')"
                        >
                            Tümünü Gör
                        </Button>
                    </div>
                    <div class="mt-4 rounded-lg border bg-card">
                        <div class="overflow-x-auto">
                            <table class="w-full">
                                <thead>
                                    <tr class="border-b bg-muted/50">
                                        <th class="px-4 py-3 text-left text-sm font-medium">
                                            Sipariş No
                                        </th>
                                        <th class="px-4 py-3 text-left text-sm font-medium">
                                            Ürünler
                                        </th>
                                        <th class="px-4 py-3 text-left text-sm font-medium">
                                            Toplam
                                        </th>
                                        <th class="px-4 py-3 text-left text-sm font-medium">
                                            Durum
                                        </th>
                                        <th class="px-4 py-3 text-left text-sm font-medium">
                                            Tarih
                                        </th>
                                        <th class="px-4 py-3 text-left text-sm font-medium">
                                            İşlemler
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="order in recentOrders"
                                        :key="order.id"
                                        class="border-b"
                                    >
                                        <td class="px-4 py-3 text-sm">#{{ order.id }}</td>
                                        <td class="px-4 py-3 text-sm">{{ order.items }}</td>
                                        <td class="px-4 py-3 text-sm">{{ order.total }} TL</td>
                                        <td class="px-4 py-3 text-sm">
                                            <span
                                                :class="{
                                                    'inline-flex items-center rounded-full px-2 py-1 text-xs font-medium': true,
                                                    'bg-green-100 text-green-700':
                                                        order.status === 'Teslim Edildi',
                                                    'bg-yellow-100 text-yellow-700':
                                                        order.status === 'Kargoda',
                                                    'bg-blue-100 text-blue-700':
                                                        order.status === 'Hazırlanıyor',
                                                }"
                                            >
                                                {{ order.status }}
                                            </span>
                                        </td>
                                        <td class="px-4 py-3 text-sm">{{ order.date }}</td>
                                        <td class="px-4 py-3 text-sm">
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                @click="viewOrderDetails(order)"
                                            >
                                                Detaylar
                                            </Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!-- Favoriler ve İndirimler -->
                <div class="mt-6 grid gap-6 md:grid-cols-2">
                    <!-- Favori Ürünler -->
                    <div class="rounded-lg border bg-card p-6">
                        <div class="flex items-center justify-between">
                            <h3 class="font-semibold">Favori Ürünlerim</h3>
                            <Button
                                variant="ghost"
                                size="sm"
                                @click="$router.push('/customer/favorites')"
                            >
                                Tümünü Gör
                            </Button>
                        </div>
                        <div class="mt-4 space-y-4">
                            <div
                                v-for="product in favoriteProducts"
                                :key="product.id"
                                class="flex items-center space-x-4"
                            >
                                <img
                                    :src="product.image"
                                    :alt="product.name"
                                    class="h-12 w-12 rounded-lg object-cover"
                                />
                                <div class="flex-1 space-y-1">
                                    <p class="font-medium">{{ product.name }}</p>
                                    <p class="text-sm text-muted-foreground">
                                        {{ product.price }} TL
                                    </p>
                                </div>
                                <Button variant="outline" size="sm">Sepete Ekle</Button>
                            </div>
                        </div>
                    </div>

                    <!-- Özel İndirimler -->
                    <div class="rounded-lg border bg-card p-6">
                        <h3 class="font-semibold">Size Özel İndirimler</h3>
                        <div class="mt-4 space-y-4">
                            <div
                                v-for="discount in specialDiscounts"
                                :key="discount.id"
                                class="rounded-lg border p-4"
                            >
                                <div class="flex items-center justify-between">
                                    <div>
                                        <p class="font-medium">{{ discount.title }}</p>
                                        <p class="text-sm text-muted-foreground">
                                            {{ discount.description }}
                                        </p>
                                    </div>
                                    <div class="text-right">
                                        <p class="text-lg font-bold text-primary">
                                            %{{ discount.amount }}
                                        </p>
                                        <p class="text-xs text-muted-foreground">
                                            {{ discount.validUntil }} tarihine kadar
                                        </p>
                                    </div>
                                </div>
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
import { useRouter } from 'vue-router'
import Button from '@/components/ui/button/Button.vue'

const router = useRouter()

// Örnek veriler
const recentOrders = ref([
    {
        id: '1234',
        items: 'Kablosuz Kulaklık, Akıllı Saat',
        total: 549.98,
        status: 'Teslim Edildi',
        date: '2024-01-15',
    },
    {
        id: '1235',
        items: 'Akıllı Telefon',
        total: 1299.99,
        status: 'Kargoda',
        date: '2024-01-14',
    },
    {
        id: '1236',
        items: 'Tablet, Klavye',
        total: 899.98,
        status: 'Hazırlanıyor',
        date: '2024-01-13',
    },
])

const favoriteProducts = ref([
    {
        id: 1,
        name: 'Kablosuz Kulaklık',
        price: 199.99,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop',
    },
    {
        id: 2,
        name: 'Akıllı Saat',
        price: 149.99,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop',
    },
    {
        id: 3,
        name: 'Tablet',
        price: 699.99,
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=100&h=100&fit=crop',
    },
])

const specialDiscounts = ref([
    {
        id: 1,
        title: 'Hoş Geldin İndirimi',
        description: 'İlk siparişinize özel indirim',
        amount: 15,
        validUntil: '2024-02-01',
    },
    {
        id: 2,
        title: 'Kış Kampanyası',
        description: 'Seçili kış ürünlerinde indirim',
        amount: 25,
        validUntil: '2024-01-31',
    },
])

const viewOrderDetails = (order) => {
    router.push(`/customer/orders/${order.id}`)
}
</script>
