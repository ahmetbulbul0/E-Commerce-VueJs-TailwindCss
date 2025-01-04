<template>
    <div class="flex min-h-screen">
        <!-- Ana İçerik -->
        <div class="flex-1">
            <div class="container py-6">
                <div class="flex items-center justify-between">
                    <div>
                        <h2 class="text-2xl font-bold">Siparişlerim</h2>
                        <p class="text-sm text-muted-foreground">
                            Tüm siparişlerinizi buradan takip edebilirsiniz.
                        </p>
                    </div>
                </div>

                <!-- Filtreler -->
                <div class="mt-6 flex flex-wrap items-center gap-4">
                    <div class="flex items-center space-x-2">
                        <Input
                            v-model="filters.search"
                            placeholder="Sipariş numarası ara..."
                            class="w-64"
                        />
                    </div>
                    <div class="flex items-center space-x-2">
                        <Select v-model="filters.status" class="w-40">
                            <option value="">Tüm Durumlar</option>
                            <option value="Hazırlanıyor">Hazırlanıyor</option>
                            <option value="Kargoda">Kargoda</option>
                            <option value="Teslim Edildi">Teslim Edildi</option>
                            <option value="İptal Edildi">İptal Edildi</option>
                        </Select>
                    </div>
                    <div class="flex items-center space-x-2">
                        <Select v-model="filters.dateRange" class="w-40">
                            <option value="">Tüm Zamanlar</option>
                            <option value="today">Bugün</option>
                            <option value="week">Bu Hafta</option>
                            <option value="month">Bu Ay</option>
                            <option value="year">Bu Yıl</option>
                        </Select>
                    </div>
                </div>

                <!-- Siparişler Tablosu -->
                <div class="mt-6 rounded-lg border bg-card">
                    <div class="overflow-x-auto">
                        <table class="w-full">
                            <thead>
                                <tr class="border-b bg-muted/50">
                                    <th class="px-4 py-3 text-left text-sm font-medium">
                                        Sipariş No
                                    </th>
                                    <th class="px-4 py-3 text-left text-sm font-medium">Ürünler</th>
                                    <th class="px-4 py-3 text-left text-sm font-medium">Toplam</th>
                                    <th class="px-4 py-3 text-left text-sm font-medium">Durum</th>
                                    <th class="px-4 py-3 text-left text-sm font-medium">Tarih</th>
                                    <th class="px-4 py-3 text-left text-sm font-medium">
                                        İşlemler
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    v-for="order in filteredOrders"
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
                                                'bg-red-100 text-red-700':
                                                    order.status === 'İptal Edildi',
                                            }"
                                        >
                                            {{ order.status }}
                                        </span>
                                    </td>
                                    <td class="px-4 py-3 text-sm">{{ order.date }}</td>
                                    <td class="px-4 py-3 text-sm">
                                        <div class="flex items-center space-x-2">
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                @click="viewOrderDetails(order)"
                                            >
                                                Detaylar
                                            </Button>
                                            <Button
                                                v-if="order.status === 'Hazırlanıyor'"
                                                variant="destructive"
                                                size="sm"
                                                @click="cancelOrder(order)"
                                            >
                                                İptal Et
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Sayfalama -->
                <div class="mt-4 flex items-center justify-between">
                    <p class="text-sm text-muted-foreground">
                        Toplam {{ orders.length }} siparişten {{ filteredOrders.length }} tanesi
                        gösteriliyor
                    </p>
                    <div class="flex items-center space-x-2">
                        <Button
                            variant="outline"
                            size="sm"
                            :disabled="currentPage === 1"
                            @click="currentPage--"
                        >
                            Önceki
                        </Button>
                        <span class="text-sm">Sayfa {{ currentPage }}/{{ totalPages }}</span>
                        <Button
                            variant="outline"
                            size="sm"
                            :disabled="currentPage === totalPages"
                            @click="currentPage++"
                        >
                            Sonraki
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import Button from '@/components/ui/button/Button.vue'
import Input from '@/components/ui/input/Input.vue'
import Select from '@/components/ui/select/Select.vue'

const router = useRouter()
const currentPage = ref(1)
const itemsPerPage = 10

const filters = ref({
    search: '',
    status: '',
    dateRange: '',
})

// Örnek veriler
const orders = ref([
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
    {
        id: '1237',
        items: 'Monitör',
        total: 2499.99,
        status: 'İptal Edildi',
        date: '2024-01-12',
    },
])

const filteredOrders = computed(() => {
    let result = orders.value

    // Arama filtresi
    if (filters.value.search) {
        result = result.filter((order) =>
            order.id.toLowerCase().includes(filters.value.search.toLowerCase()),
        )
    }

    // Durum filtresi
    if (filters.value.status) {
        result = result.filter((order) => order.status === filters.value.status)
    }

    // Tarih filtresi
    if (filters.value.dateRange) {
        const now = new Date()
        const orderDate = new Date(result[0].date)

        switch (filters.value.dateRange) {
            case 'today':
                result = result.filter(
                    (order) => new Date(order.date).toDateString() === now.toDateString(),
                )
                break
            case 'week':
                const weekAgo = new Date(now.setDate(now.getDate() - 7))
                result = result.filter((order) => new Date(order.date) >= weekAgo)
                break
            case 'month':
                const monthAgo = new Date(now.setMonth(now.getMonth() - 1))
                result = result.filter((order) => new Date(order.date) >= monthAgo)
                break
            case 'year':
                const yearAgo = new Date(now.setFullYear(now.getFullYear() - 1))
                result = result.filter((order) => new Date(order.date) >= yearAgo)
                break
        }
    }

    return result
})

const totalPages = computed(() => Math.ceil(filteredOrders.value.length / itemsPerPage))

const paginatedOrders = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage
    const end = start + itemsPerPage
    return filteredOrders.value.slice(start, end)
})

const viewOrderDetails = (order) => {
    router.push(`/customer/orders/${order.id}`)
}

const cancelOrder = (order) => {
    // API çağrısı yapılacak
    order.status = 'İptal Edildi'
}
</script>
