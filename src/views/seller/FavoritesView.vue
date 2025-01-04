<template>
  <div class="container py-8">
    <!-- Başlık -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold tracking-tight">Favorilerim</h1>
      <p class="text-muted-foreground">Beğendiğiniz ve takip ettiğiniz ürünler</p>
    </div>

    <!-- Yükleniyor -->
    <div v-if="loading" class="flex items-center justify-center py-12">
      <div
        class="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"
      ></div>
    </div>

    <!-- Favori Ürün Bulunamadı -->
    <div v-else-if="favorites.length === 0" class="rounded-lg border bg-card p-8 text-center">
      <div class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
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
          <path
            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
          />
        </svg>
      </div>
      <p class="text-lg font-semibold">Henüz Favori Ürününüz Yok</p>
      <p class="text-sm text-muted-foreground">
        Beğendiğiniz ürünleri favorilerinize ekleyerek takip edebilirsiniz.
      </p>
      <Button class="mt-4" @click="$router.push('/products')">Ürünleri Keşfet</Button>
    </div>

    <!-- Favori Ürün Listesi -->
    <div v-else class="space-y-6">
      <!-- Filtreler -->
      <div
        class="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0"
      >
        <!-- Arama -->
        <div class="relative w-full md:w-[250px]">
          <Input
            v-model="searchQuery"
            type="search"
            placeholder="Favori ürünlerinde ara..."
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
        <Select v-model="sortBy" class="w-full md:w-[200px]">
          <option value="newest">En Yeniler</option>
          <option value="price-asc">Fiyat (Düşükten Yükseğe)</option>
          <option value="price-desc">Fiyat (Yüksekten Düşüğe)</option>
          <option value="name-asc">İsim (A-Z)</option>
          <option value="name-desc">İsim (Z-A)</option>
        </Select>
      </div>

      <!-- Ürün Listesi -->
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="product in filteredFavorites"
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
            <!-- Favorilerden Kaldır Butonu -->
            <button
              class="absolute right-2 top-2 rounded-full bg-background/80 p-2 text-foreground backdrop-blur-sm transition-opacity hover:bg-background"
              @click.stop="removeFromFavorites(product)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                />
              </svg>
            </button>
          </div>
          <div class="p-4">
            <h3 class="font-semibold">{{ product.name }}</h3>
            <p class="mt-1 text-sm text-muted-foreground line-clamp-2">
              {{ product.description }}
            </p>
            <div class="mt-2 flex items-center justify-between">
              <div class="flex items-baseline space-x-2">
                <span class="text-lg font-bold">{{ product.price }} TL</span>
                <span v-if="product.oldPrice" class="text-sm text-muted-foreground line-through">
                  {{ product.oldPrice }} TL
                </span>
              </div>
              <Button size="sm" variant="secondary" @click="addToCart(product)">Sepete Ekle</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Button from '@/components/ui/button/Button.vue'
import Input from '@/components/ui/input/Input.vue'
import Select from '@/components/ui/select/Select.vue'

const loading = ref(true)
const searchQuery = ref('')
const sortBy = ref('newest')

// Örnek favori ürün verileri
const favorites = ref([
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
])

// Filtrelenmiş ve sıralanmış favoriler
const filteredFavorites = computed(() => {
  let result = [...favorites.value]

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

// Metodlar
const addToCart = (product) => {
  // Sepete ekleme işlemi (Pinia store'da yapılacak)
  console.log('Ürün sepete eklendi:', product)
}

const removeFromFavorites = (product) => {
  // Favorilerden kaldırma işlemi (Pinia store'da yapılacak)
  console.log('Ürün favorilerden kaldırıldı:', product)
  favorites.value = favorites.value.filter((p) => p.id !== product.id)
}

// Sayfa yüklendiğinde
setTimeout(() => {
  loading.value = false
}, 1000)
</script>
