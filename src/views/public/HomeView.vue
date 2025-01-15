<template>
    <div>
        <section class="relative">
            <div class="absolute inset-0 bg-gradient-to-r from-background to-background/50 bg-muted/100"></div>

            <div class="container relative">
                <div class="flex flex-col items-center space-y-4 py-12 text-center sm:py-16 md:py-24 lg:py-32">
                    <h1 class="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl px-4">Modern Alışverişin Adresi</h1>

                    <p class="mx-auto max-w-[700px] text-muted-foreground text-sm md:text-xl px-4">En yeni ürünleri keşfedin, güvenle alışveriş yapın ve özel fırsatlardan yararlanın.</p>

                    <div class="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 px-4">
                        <router-link to="/products" class="w-full sm:w-auto">
                            <Button size="lg" class="w-full sm:w-auto h-11 px-8">Alışverişe Başla</Button>
                        </router-link>

                        <router-link to="/register" class="w-full sm:w-auto">
                            <Button size="lg" variant="outline" class="w-full sm:w-auto h-11 px-8">Üye Ol</Button>
                        </router-link>
                    </div>
                </div>
            </div>
        </section>

        <!-- Kampanyalar -->
        <section class="py-12 md:py-16 border-t">
            <div class="container space-y-8">
                <div class="flex flex-col items-center space-y-2">
                    <h2 class="text-2xl font-bold tracking-tight md:text-3xl">Özel Kampanyalar</h2>
                    <p class="text-muted-foreground">Kaçırılmayacak fırsatları yakalayın</p>
                </div>

                <div class="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-0">
                    <div class="group relative overflow-hidden rounded-lg border bg-background">
                        <div class="aspect-[16/9] overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=450&fit=crop" alt="Yaz İndirimi" class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                        </div>
                        <div class="p-4">
                            <h3 class="text-lg font-semibold">Yaz Sezonu İndirimleri</h3>
                            <p class="mt-1 text-sm text-muted-foreground">Seçili yaz ürünlerinde %50'ye varan indirimler</p>
                            <Button class="mt-4" variant="secondary">İncele</Button>
                        </div>
                    </div>

                    <div class="group relative overflow-hidden rounded-lg border bg-background">
                        <div class="aspect-[16/9] overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=450&fit=crop" alt="Teknoloji Kampanyası" class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                        </div>
                        <div class="p-4">
                            <h3 class="text-lg font-semibold">Teknoloji Festivali</h3>
                            <p class="mt-1 text-sm text-muted-foreground">Elektronik ürünlerde süper fırsatlar</p>
                            <Button class="mt-4" variant="secondary">İncele</Button>
                        </div>
                    </div>

                    <div class="group relative overflow-hidden rounded-lg border bg-background lg:col-span-1 md:col-span-2 lg:col-span-1">
                        <div class="aspect-[16/9] overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=800&h=450&fit=crop" alt="Süper Fırsat" class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                        </div>
                        <div class="p-4">
                            <h3 class="text-lg font-semibold">Süper Fırsat Günleri</h3>
                            <p class="mt-1 text-sm text-muted-foreground">Her gün yeni süper fırsatlar</p>
                            <Button class="mt-4" variant="secondary">İncele</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Öne Çıkan Kategoriler -->
        <section class="border-t bg-muted/40 py-12 md:py-16">
            <div class="container space-y-8">
                <div class="flex flex-col items-center space-y-2">
                    <h2 class="text-2xl font-bold tracking-tight md:text-3xl">Öne Çıkan Kategoriler</h2>
                    <p class="text-muted-foreground">İhtiyacınız olan her şey kategorilere ayrılmış şekilde</p>
                </div>

                <div class="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 px-4 sm:px-0">
                    <router-link v-for="category in categories" :key="category.name" :to="'/products?category=' + category.name" class="group relative overflow-hidden rounded-lg border bg-background">
                        <div class="aspect-[4/3] overflow-hidden">
                            <img :src="category.image" :alt="category.name" class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                        </div>
                        <div class="p-4">
                            <h3 class="font-semibold">{{ category.name }}</h3>
                            <p class="text-sm text-muted-foreground">{{ category.productCount }} Ürün</p>
                        </div>
                    </router-link>
                </div>
            </div>
        </section>

        <!-- Popüler Ürünler -->
        <section class="py-12 md:py-16">
            <div class="container space-y-8">
                <div class="flex flex-col items-center space-y-2">
                    <h2 class="text-2xl font-bold tracking-tight md:text-3xl">Popüler Ürünler</h2>
                    <p class="text-muted-foreground">En çok tercih edilen ürünleri keşfedin</p>
                </div>

                <div class="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 px-4 sm:px-0">
                    <router-link :to="{ name: 'product-detail' }" v-for="product in popularProducts" :key="product.id" class="group relative overflow-hidden rounded-lg border bg-background">
                        <div class="aspect-[4/3] overflow-hidden">
                            <img :src="product.image" :alt="product.name" class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                            <div v-if="product.discount" class="absolute right-2 top-2 rounded-full bg-destructive px-2 py-1 text-xs font-medium text-destructive-foreground">%{{ product.discount }} İndirim</div>
                        </div>
                        <div class="p-4">
                            <h3 class="font-semibold">{{ product.name }}</h3>
                            <p class="mt-1 text-sm text-muted-foreground line-clamp-2">
                                {{ product.description }}
                            </p>
                            <div class="mt-2 flex items-center justify-between">
                                <div class="flex items-baseline space-x-2">
                                    <span class="text-lg font-bold">{{ product.price }} TL</span>
                                    <span v-if="product.oldPrice" class="text-sm text-muted-foreground line-through">{{ product.oldPrice }} TL</span>
                                </div>
                                <Button size="sm" variant="secondary" @click="addToCart(product)">Sepete Ekle</Button>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </section>

        <!-- Özellikler -->
        <section class="border-t bg-muted/40 py-12 md:py-16">
            <div class="container">
                <div class="grid grid-cols-1 gap-6 md:grid-cols-3 px-4 sm:px-0">
                    <div class="flex flex-col items-center space-y-2 text-center p-4 bg-background rounded-lg">
                        <div class="flex h-12 w-12 items-center justify-center rounded-full border-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-foreground">
                                <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8" />
                                <path d="M17 8v10" />
                                <path d="M7 8v10" />
                                <path d="M3 4h18" />
                                <path d="M8 4V2h8v2" />
                            </svg>
                        </div>
                        <h3 class="font-semibold">Ücretsiz Kargo</h3>
                        <p class="text-sm text-muted-foreground">500 TL ve üzeri alışverişlerinizde kargo ücretsiz!</p>
                    </div>

                    <div class="flex flex-col items-center space-y-2 text-center p-4 bg-background rounded-lg">
                        <div class="flex h-12 w-12 items-center justify-center rounded-full border-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-foreground">
                                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                            </svg>
                        </div>
                        <h3 class="font-semibold">Güvenli Ödeme</h3>
                        <p class="text-sm text-muted-foreground">256-bit SSL sertifikası ile güvenli alışveriş</p>
                    </div>

                    <div class="flex flex-col items-center space-y-2 text-center p-4 bg-background rounded-lg">
                        <div class="flex h-12 w-12 items-center justify-center rounded-full border-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-foreground">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                                <path d="m9 12 2 2 4-4" />
                            </svg>
                        </div>
                        <h3 class="font-semibold">7/24 Destek</h3>
                        <p class="text-sm text-muted-foreground">Müşteri hizmetlerimiz her zaman yanınızda</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Markalar -->
        <section class="py-12 md:py-16">
            <div class="container space-y-8">
                <div class="flex flex-col items-center space-y-2">
                    <h2 class="text-2xl font-bold tracking-tight md:text-3xl">İş Ortaklarımız</h2>
                    <p class="text-muted-foreground">Güvenilir markalarla çalışıyoruz</p>
                </div>

                <div class="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
                    <div v-for="brand in brands" :key="brand.id" class="flex items-center justify-center">
                        <img :src="brand.logo" :alt="brand.name" class="h-12 object-contain grayscale hover:grayscale-0 transition-all" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Button from "@/components/ui/button/Button.vue";

const categories = ref([
    {
        name: "Elektronik",
        image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500&h=400&fit=crop",
        productCount: 1250,
    },
    {
        name: "Giyim",
        image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&h=400&fit=crop",
        productCount: 850,
    },
    {
        name: "Kitap",
        image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=500&h=400&fit=crop",
        productCount: 650,
    },
    {
        name: "Spor",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&h=400&fit=crop",
        productCount: 450,
    },
    {
        name: "Ev & Yaşam",
        image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=500&h=400&fit=crop",
        productCount: 750,
    },
    {
        name: "Kozmetik",
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&h=400&fit=crop",
        productCount: 550,
    },
    {
        name: "Oyuncak",
        image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=500&h=400&fit=crop",
        productCount: 350,
    },
    {
        name: "Otomotiv",
        image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=500&h=400&fit=crop",
        productCount: 250,
    },
]);

const popularProducts = ref([
    {
        id: 1,
        name: "Kablosuz Kulaklık",
        description: "Aktif gürültü önleme özellikli premium kablosuz kulaklık",
        price: 199.99,
        oldPrice: 299.99,
        discount: 33,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=400&fit=crop",
    },
    {
        id: 2,
        name: "Akıllı Saat",
        description: "Fitness takibi ve bildirimler için akıllı saat",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=400&fit=crop",
    },
    {
        id: 3,
        name: "Güneş Gözlüğü",
        description: "Polarize camlı şık tasarım güneş gözlüğü",
        price: 299.99,
        oldPrice: 399.99,
        discount: 25,
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=400&fit=crop",
    },
    {
        id: 4,
        name: "Spor Ayakkabı",
        description: "Hafif ve konforlu koşu ayakkabısı",
        price: 249.99,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=400&fit=crop",
    },
    {
        id: 5,
        name: "Akıllı Telefon",
        description: "108MP kamera ve 5G desteği ile yeni nesil akıllı telefon",
        price: 4999.99,
        oldPrice: 5999.99,
        discount: 17,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=400&fit=crop",
    },
    {
        id: 6,
        name: "Tablet Bilgisayar",
        description: "İş ve eğlence için ideal tablet bilgisayar",
        price: 1999.99,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=400&fit=crop",
    },
    {
        id: 7,
        name: "Bluetooth Hoparlör",
        description: "Su geçirmez taşınabilir bluetooth hoparlör",
        price: 129.99,
        oldPrice: 179.99,
        discount: 28,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=400&fit=crop",
    },
    {
        id: 8,
        name: "Oyun Konsolu",
        description: "4K gaming deneyimi sunan yeni nesil konsol",
        price: 7999.99,
        image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=500&h=400&fit=crop",
    },
]);

const brands = ref([
    {
        id: 1,
        name: "Apple",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    },
    {
        id: 2,
        name: "Samsung",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
    },
    {
        id: 3,
        name: "Sony",
        logo: "//upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/220px-Sony_logo.svg.png",
    },
    {
        id: 4,
        name: "LG",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/LG_symbol.svg",
    },
    {
        id: 5,
        name: "Nike",
        logo: "//upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/150px-Logo_NIKE.svg.png",
    },
    {
        id: 6,
        name: "Adidas",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
    },
]);

const addToCart = (product: any) => {
    // Sepete ekleme işlemleri burada yapılacak
    console.log("Ürün sepete eklendi:", product);
};
</script>
