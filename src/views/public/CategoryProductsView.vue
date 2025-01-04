<template>
    <div class="container py-8">
        <!-- Başlık ve Breadcrumb -->
        <div class="mb-8">
            <nav class="mb-4 flex" aria-label="Breadcrumb">
                <ol
                    class="inline-flex items-center space-x-1 text-sm text-muted-foreground md:space-x-2"
                >
                    <li>
                        <router-link to="/" class="hover:text-foreground">Ana Sayfa</router-link>
                    </li>
                    <li>
                        <span class="mx-2">/</span>
                    </li>
                    <li>
                        <router-link to="/categories" class="hover:text-foreground"
                            >Kategoriler</router-link
                        >
                    </li>
                    <li>
                        <span class="mx-2">/</span>
                    </li>
                    <li class="text-foreground">{{ category.name }}</li>
                </ol>
            </nav>

            <div
                class="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0"
            >
                <div>
                    <h1 class="text-3xl font-bold tracking-tight">{{ category.name }}</h1>
                    <p class="text-muted-foreground">{{ category.description }}</p>
                </div>

                <div class="flex items-center space-x-4">
                    <!-- Arama -->
                    <div class="relative w-full md:w-[250px]">
                        <Input
                            v-model="searchQuery"
                            type="search"
                            placeholder="Ürün ara..."
                            class="pr-8"
                        />
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
                            class="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"
                        >
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.3-4.3" />
                        </svg>
                    </div>

                    <!-- Sıralama -->
                    <Select v-model="sortBy" class="w-[200px]">
                        <option value="newest">En Yeniler</option>
                        <option value="price-asc">Fiyat (Düşükten Yükseğe)</option>
                        <option value="price-desc">Fiyat (Yüksekten Düşüğe)</option>
                        <option value="name-asc">İsim (A-Z)</option>
                        <option value="name-desc">İsim (Z-A)</option>
                    </Select>
                </div>
            </div>
        </div>

        <!-- Ürün Listesi -->
        <div v-if="loading" class="flex items-center justify-center py-12">
            <div
                class="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"
            ></div>
        </div>

        <div
            v-else-if="filteredProducts.length === 0"
            class="rounded-lg border bg-card p-8 text-center"
        >
            <div
                class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-muted-foreground"
                >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                </svg>
            </div>
            <p class="text-lg font-semibold">Ürün Bulunamadı</p>
            <p class="text-sm text-muted-foreground">
                Bu kategoride arama kriterlerinize uygun ürün bulunamadı.
            </p>
        </div>

        <div v-else class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div
                v-for="product in paginatedProducts"
                :key="product.id"
                class="group relative overflow-hidden rounded-lg border bg-background"
            >
                <div class="aspect-[4/3] overflow-hidden">
                    <img
                        :src="product.image"
                        :alt="product.name"
                        class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div
                        v-if="product.discount"
                        class="absolute right-2 top-2 rounded-full bg-destructive px-2 py-1 text-xs font-medium text-destructive-foreground"
                    >
                        %{{ product.discount }} İndirim
                    </div>
                </div>
                <div class="p-4">
                    <h3 class="font-semibold">{{ product.name }}</h3>
                    <p class="mt-1 text-sm text-muted-foreground line-clamp-2">
                        {{ product.description }}
                    </p>
                    <div class="mt-2 flex items-center justify-between">
                        <div class="flex items-baseline space-x-2">
                            <span class="text-lg font-bold">{{ product.price }} TL</span>
                            <span
                                v-if="product.oldPrice"
                                class="text-sm text-muted-foreground line-through"
                            >
                                {{ product.oldPrice }} TL
                            </span>
                        </div>
                        <Button size="sm" variant="secondary" @click="addToCart(product)"
                            >Sepete Ekle</Button
                        >
                    </div>
                </div>
            </div>
        </div>

        <!-- Sayfalama -->
        <div v-if="filteredProducts.length > 0" class="mt-8 flex justify-center">
            <div class="flex space-x-2">
                <Button
                    variant="outline"
                    size="sm"
                    :disabled="currentPage === 1"
                    @click="currentPage--"
                >
                    Önceki
                </Button>
                <Button
                    v-for="page in totalPages"
                    :key="page"
                    variant="outline"
                    size="sm"
                    :class="{ 'bg-primary text-primary-foreground': currentPage === page }"
                    @click="currentPage = page"
                >
                    {{ page }}
                </Button>
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
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

const loading = ref(true)
const searchQuery = ref('')
const sortBy = ref('newest')
const currentPage = ref(1)
const itemsPerPage = 9

// Örnek kategori verisi
const category = ref({
    id: 1,
    name: 'Elektronik',
    slug: 'elektronik',
    description: 'Telefon, bilgisayar, tablet ve daha fazlası',
})

// Örnek ürün verileri
const products = ref([
    {
        id: 1,
        name: 'Kablosuz Kulaklık',
        description: 'Aktif gürültü önleme özellikli premium kablosuz kulaklık',
        price: 199.99,
        oldPrice: 299.99,
        discount: 33,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=400&fit=crop',
    },
    {
        id: 2,
        name: 'Akıllı Saat',
        description: 'Fitness takibi ve bildirimler için akıllı saat',
        price: 149.99,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=400&fit=crop',
    },
    {
        id: 3,
        name: 'Tablet',
        description: '10.5 inç ekranlı, güçlü işlemcili tablet',
        price: 299.99,
        oldPrice: 399.99,
        discount: 25,
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=400&fit=crop',
    },
    // Daha fazla ürün eklenebilir
])

// Hesaplanan özellikler
const filteredProducts = computed(() => {
    let result = [...products.value]

    // Arama filtresi
    if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase()
        result = result.filter(
            (product) =>
                product.name.toLowerCase().includes(query) ||
                product.description.toLowerCase().includes(query),
        )
    }

    // Sıralama
    switch (sortBy.value) {
        case 'price-asc':
            result.sort((a, b) => a.price - b.price)
            break
        case 'price-desc':
            result.sort((a, b) => b.price - a.price)
            break
        case 'name-asc':
            result.sort((a, b) => a.name.localeCompare(b.name))
            break
        case 'name-desc':
            result.sort((a, b) => b.name.localeCompare(a.name))
            break
        default:
            // En yeniler (varsayılan olarak id'ye göre ters sıralama)
            result.sort((a, b) => b.id - a.id)
    }

    return result
})

const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage
    const end = start + itemsPerPage
    return filteredProducts.value.slice(start, end)
})

const totalPages = computed(() => Math.ceil(filteredProducts.value.length / itemsPerPage))

// Metodlar
const addToCart = (product) => {
    // Sepete ekleme işlemi (Pinia store'da yapılacak)
    console.log('Ürün sepete eklendi:', product)
}

// Sayfa yüklendiğinde
onMounted(() => {
    // Burada API'den kategori ve ürün verileri çekilecek
    setTimeout(() => {
        loading.value = false
    }, 1000)
})
</script>
