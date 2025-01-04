<template>
  <div class="container py-8">
    <div class="max-w-2xl mx-auto">
      <div class="flex items-center justify-between mb-8">
        <h1 class="text-3xl font-bold tracking-tight">
          {{ isEditing ? 'Ürün Düzenle' : 'Yeni Ürün Ekle' }}
        </h1>
      </div>

      <form @submit.prevent="saveProduct" class="space-y-8">
        <!-- Temel Bilgiler -->
        <div class="space-y-4">
          <div class="space-y-2">
            <Label for="name">Ürün Adı</Label>
            <Input type="text" id="name" v-model="form.name" required />
          </div>

          <div class="space-y-2">
            <Label for="description">Ürün Açıklaması</Label>
            <Textarea
              id="description"
              v-model="form.description"
              placeholder="Ürün hakkında detaylı bilgi"
              required
            />
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="space-y-2">
              <Label for="category">Kategori</Label>
              <Select id="category" v-model="form.category" required>
                <option value="">Kategori Seçin</option>
                <option v-for="category in categories" :key="category" :value="category">
                  {{ category }}
                </option>
              </Select>
            </div>

            <div class="space-y-2">
              <Label for="status">Durum</Label>
              <Select id="status" v-model="form.status" required>
                <option value="active">Aktif</option>
                <option value="inactive">Pasif</option>
              </Select>
            </div>

            <div class="space-y-2">
              <Label for="price">Fiyat</Label>
              <Input type="number" id="price" v-model="form.price" step="0.01" min="0" required />
            </div>

            <div class="space-y-2">
              <Label for="stock">Stok Adedi</Label>
              <Input type="number" id="stock" v-model="form.stock" min="0" required />
            </div>
          </div>
        </div>

        <!-- Ürün Görseli -->
        <div class="space-y-4">
          <h2 class="text-lg font-semibold">Ürün Görseli</h2>

          <div class="flex items-center space-x-4">
            <div v-if="form.image" class="relative w-32 h-32">
              <img :src="form.image" alt="Preview" class="w-full h-full object-cover rounded-lg" />
              <button
                type="button"
                @click="form.image = ''"
                class="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full p-1 hover:bg-destructive/90"
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
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
            <div>
              <Button type="button" variant="secondary" as="label" class="cursor-pointer">
                Görsel Seç
                <input type="file" class="hidden" @change="handleImageUpload" accept="image/*" />
              </Button>
              <p class="text-sm text-muted-foreground mt-2">PNG, JPG veya GIF (max. 2MB)</p>
            </div>
          </div>
        </div>

        <!-- Özellikler -->
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <h2 class="text-lg font-semibold">Ürün Özellikleri</h2>
            <Button type="button" variant="outline" size="sm" @click="addSpecification">
              Özellik Ekle
            </Button>
          </div>

          <div
            v-for="(spec, index) in form.specifications"
            :key="index"
            class="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div class="space-y-2">
              <Label>Özellik</Label>
              <Input type="text" v-model="spec.key" placeholder="Örn: Renk" />
            </div>
            <div class="flex space-x-2">
              <div class="flex-1 space-y-2">
                <Label>Değer</Label>
                <Input type="text" v-model="spec.value" placeholder="Örn: Siyah" />
              </div>
              <Button
                type="button"
                variant="destructive"
                size="icon"
                class="mt-8"
                @click="removeSpecification(index)"
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
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </Button>
            </div>
          </div>
        </div>

        <div class="flex justify-end space-x-4">
          <Button type="button" variant="outline" @click="resetForm">Sıfırla</Button>
          <Button type="submit">
            {{ isEditing ? 'Güncelle' : 'Kaydet' }}
          </Button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Button from '@/components/ui/button/Button.vue'
import Input from '@/components/ui/input/Input.vue'
import Label from '@/components/ui/label/Label.vue'
import Select from '@/components/ui/select/Select.vue'
import Textarea from '@/components/ui/textarea/Textarea.vue'

const route = useRoute()
const router = useRouter()
const isEditing = computed(() => route.params.id !== undefined)

const categories = ['Elektronik', 'Giyim', 'Kitap', 'Spor']

const initialForm = {
  name: '',
  description: '',
  category: '',
  status: 'active',
  price: '',
  stock: '',
  image: '',
  specifications: [],
}

const form = ref({ ...initialForm })

onMounted(async () => {
  if (isEditing.value) {
    // Gerçek uygulamada API'den ürün bilgileri çekilecek
    form.value = {
      name: 'Örnek Ürün',
      description: 'Ürün açıklaması',
      category: 'Elektronik',
      status: 'active',
      price: 199.99,
      stock: 10,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
      specifications: [
        { key: 'Renk', value: 'Siyah' },
        { key: 'Boyut', value: 'M' },
      ],
    }
  }
})

const addSpecification = () => {
  form.value.specifications.push({ key: '', value: '' })
}

const removeSpecification = (index) => {
  form.value.specifications.splice(index, 1)
}

const handleImageUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    // Gerçek uygulamada dosya yükleme işlemi yapılacak
    form.value.image = URL.createObjectURL(file)
  }
}

const saveProduct = async () => {
  try {
    // Gerçek uygulamada API'ye kayıt işlemi yapılacak
    console.log('Kaydedilen ürün:', form.value)
    router.push('/seller/products')
  } catch (error) {
    console.error('Hata:', error)
  }
}

const resetForm = () => {
  form.value = { ...initialForm }
}
</script>
