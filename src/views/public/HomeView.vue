<template>
    <div>
        <section class="relative">
            <div class="absolute inset-0 bg-gradient-to-r from-background to-background/50 bg-muted/100"></div>

            <div class="container relative">
                <div class="flex flex-col items-center space-y-4 py-12 text-center sm:py-16 md:py-24 lg:py-32 xl:py-64">
                    <h1 class="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl px-4">Modern Alışverişin Adresi</h1>

                    <p class="mx-auto max-w-[700px] text-muted-foreground text-sm md:text-xl px-4">En yeni ürünleri keşfedin, güvenle alışveriş yapın ve özel fırsatlardan yararlanın.</p>

                    <div class="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 px-4">
                        <router-link :to="{ name: 'products' }" class="w-full sm:w-auto">
                            <Button variant="primary">Alışverişe Başla</Button>
                        </router-link>

                        <router-link :to="{ name: 'register' }" class="w-full sm:w-auto">
                            <Button variant="outline">Üye Ol</Button>
                        </router-link>
                    </div>
                </div>
            </div>
        </section>

        <!-- Kampanyalar -->
        <section class="sm:py-16 md:py-24 lg:py-32 border-t">
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
                            <Button class="mt-4" variant="secondary" size="sm">İncele</Button>
                        </div>
                    </div>

                    <div class="group relative overflow-hidden rounded-lg border bg-background">
                        <div class="aspect-[16/9] overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=450&fit=crop" alt="Teknoloji Kampanyası" class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                        </div>
                        <div class="p-4">
                            <h3 class="text-lg font-semibold">Teknoloji Festivali</h3>
                            <p class="mt-1 text-sm text-muted-foreground">Elektronik ürünlerde süper fırsatlar</p>
                            <Button class="mt-4" variant="secondary" size="sm">İncele</Button>
                        </div>
                    </div>

                    <div class="group relative overflow-hidden rounded-lg border bg-background lg:col-span-1 md:col-span-2 lg:col-span-1">
                        <div class="aspect-[16/9] overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=800&h=450&fit=crop" alt="Süper Fırsat" class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                        </div>
                        <div class="p-4">
                            <h3 class="text-lg font-semibold">Süper Fırsat Günleri</h3>
                            <p class="mt-1 text-sm text-muted-foreground">Her gün yeni süper fırsatlar</p>
                            <Button class="mt-4" variant="secondary" size="sm">İncele</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Öne Çıkan Kategoriler -->
        <section class="border-t bg-muted/40 sm:py-16 md:py-24 lg:py-32">
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
        <section class="sm:py-16 md:py-24 lg:py-32">
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
        <section class="border-t bg-muted/40 sm:py-16 md:py-24 lg:py-32">
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

        <!-- Avantajlar -->
        <section class="sm:py-16 md:py-24 lg:py-32">
            <div class="container">
                <div class="flex flex-col items-center space-y-2 mb-12">
                    <h2 class="text-2xl font-bold tracking-tight md:text-3xl">Alışveriş Avantajları</h2>
                    <p class="text-muted-foreground">Size özel ayrıcalıklarla alışverişin keyfini çıkarın</p>
                </div>

                <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <!-- Kolay İade -->
                    <div class="group relative overflow-hidden rounded-xl border bg-card p-6 hover:shadow-lg transition-all">
                        <div class="absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-8 transform rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all"></div>

                        <div class="relative space-y-4">
                            <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M3 7h18" />
                                    <path d="M6 7V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" />
                                    <path d="M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7" />
                                    <path d="M12 10v7" />
                                    <path d="m9 13 3-3 3 3" />
                                </svg>
                            </div>

                            <div class="space-y-2">
                                <h3 class="font-semibold">Kolay İade</h3>
                                <p class="text-sm text-muted-foreground">30 gün içinde ücretsiz iade hakkı</p>
                            </div>
                        </div>
                    </div>

                    <!-- Hızlı Teslimat -->
                    <div class="group relative overflow-hidden rounded-xl border bg-card p-6 hover:shadow-lg transition-all">
                        <div class="absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-8 transform rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all"></div>

                        <div class="relative space-y-4">
                            <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19" />
                                    <path d="M23 13h-4a2 2 0 0 0-2 2v4" />
                                    <path d="M1 13h4a2 2 0 0 1 2 2v4" />
                                    <path d="M8 6h8" />
                                    <path d="M12 6v12" />
                                </svg>
                            </div>

                            <div class="space-y-2">
                                <h3 class="font-semibold">Hızlı Teslimat</h3>
                                <p class="text-sm text-muted-foreground">Aynı gün kargo ve teslimat imkanı</p>
                            </div>
                        </div>
                    </div>

                    <!-- Taksit Seçenekleri -->
                    <div class="group relative overflow-hidden rounded-xl border bg-card p-6 hover:shadow-lg transition-all">
                        <div class="absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-8 transform rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all"></div>

                        <div class="relative space-y-4">
                            <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect width="20" height="14" x="2" y="5" rx="2" />
                                    <line x1="2" x2="22" y1="10" y2="10" />
                                </svg>
                            </div>

                            <div class="space-y-2">
                                <h3 class="font-semibold">Taksit Seçenekleri</h3>
                                <p class="text-sm text-muted-foreground">12 aya varan taksit imkanları</p>
                            </div>
                        </div>
                    </div>

                    <!-- Mobil Uygulama -->
                    <div class="group relative overflow-hidden rounded-xl border bg-card p-6 hover:shadow-lg transition-all">
                        <div class="absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-8 transform rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all"></div>

                        <div class="relative space-y-4">
                            <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                                    <path d="M12 18h.01" />
                                </svg>
                            </div>

                            <div class="space-y-2">
                                <h3 class="font-semibold">Mobil Uygulama</h3>
                                <p class="text-sm text-muted-foreground">Özel indirimlerle mobil alışveriş</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Müşteri Yorumları -->
        <section class="border-t bg-muted/40 sm:py-16 md:py-24 lg:py-32">
            <div class="container">
                <div class="flex flex-col items-center space-y-2 mb-12">
                    <h2 class="text-2xl font-bold tracking-tight md:text-3xl">Müşteri Yorumları</h2>
                    <p class="text-muted-foreground">Müşterilerimizin deneyimleri ve değerlendirmeleri</p>
                </div>

                <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <!-- Yorum Kartı 1 -->
                    <div class="group relative overflow-hidden rounded-xl border bg-card p-6 hover:shadow-lg transition-all">
                        <div class="absolute right-0 top-0 h-32 w-32 -translate-y-12 translate-x-12 transform rounded-full bg-primary/5"></div>

                        <div class="relative space-y-4">
                            <!-- Yıldızlar -->
                            <div class="flex text-yellow-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="mr-1">
                                    <path d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.2-6.3-4.6-6.3 4.6L8 13.8l-6-4.4h7.6L12 2z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="mr-1">
                                    <path d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.2-6.3-4.6-6.3 4.6L8 13.8l-6-4.4h7.6L12 2z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="mr-1">
                                    <path d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.2-6.3-4.6-6.3 4.6L8 13.8l-6-4.4h7.6L12 2z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="mr-1">
                                    <path d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.2-6.3-4.6-6.3 4.6L8 13.8l-6-4.4h7.6L12 2z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.2-6.3-4.6-6.3 4.6L8 13.8l-6-4.4h7.6L12 2z" />
                                </svg>
                            </div>

                            <!-- Yorum Metni -->
                            <p class="text-muted-foreground italic">"Ürünler çok kaliteli ve hızlı teslimat yapılıyor. Müşteri hizmetleri de oldukça ilgili. Kesinlikle tavsiye ederim!"</p>

                            <!-- Müşteri Bilgisi -->
                            <div class="flex items-center space-x-4 pt-4 border-t">
                                <div class="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary">
                                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                        <circle cx="12" cy="7" r="4" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="font-semibold">Ahmet Yılmaz</h4>
                                    <p class="text-sm text-muted-foreground">İstanbul</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Yorum Kartı 2 -->
                    <div class="group relative overflow-hidden rounded-xl border bg-card p-6 hover:shadow-lg transition-all">
                        <div class="absolute right-0 top-0 h-32 w-32 -translate-y-12 translate-x-12 transform rounded-full bg-primary/5"></div>

                        <div class="relative space-y-4">
                            <!-- Yıldızlar -->
                            <div class="flex text-yellow-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="mr-1">
                                    <path d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.2-6.3-4.6-6.3 4.6L8 13.8l-6-4.4h7.6L12 2z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="mr-1">
                                    <path d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.2-6.3-4.6-6.3 4.6L8 13.8l-6-4.4h7.6L12 2z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="mr-1">
                                    <path d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.2-6.3-4.6-6.3 4.6L8 13.8l-6-4.4h7.6L12 2z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="mr-1">
                                    <path d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.2-6.3-4.6-6.3 4.6L8 13.8l-6-4.4h7.6L12 2z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.2-6.3-4.6-6.3 4.6L8 13.8l-6-4.4h7.6L12 2z" />
                                </svg>
                            </div>

                            <!-- Yorum Metni -->
                            <p class="text-muted-foreground italic">"Ürün çeşitliliği çok fazla ve fiyatlar da gayet uygun. Taksit seçenekleri de oldukça avantajlı. Teşekkürler!"</p>

                            <!-- Müşteri Bilgisi -->
                            <div class="flex items-center space-x-4 pt-4 border-t">
                                <div class="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary">
                                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                        <circle cx="12" cy="7" r="4" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="font-semibold">Ayşe Demir</h4>
                                    <p class="text-sm text-muted-foreground">Ankara</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Yorum Kartı 3 -->
                    <div class="group relative overflow-hidden rounded-xl border bg-card p-6 hover:shadow-lg transition-all">
                        <div class="absolute right-0 top-0 h-32 w-32 -translate-y-12 translate-x-12 transform rounded-full bg-primary/5"></div>

                        <div class="relative space-y-4">
                            <!-- Yıldızlar -->
                            <div class="flex text-yellow-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="mr-1">
                                    <path d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.2-6.3-4.6-6.3 4.6L8 13.8l-6-4.4h7.6L12 2z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="mr-1">
                                    <path d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.2-6.3-4.6-6.3 4.6L8 13.8l-6-4.4h7.6L12 2z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="mr-1">
                                    <path d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.2-6.3-4.6-6.3 4.6L8 13.8l-6-4.4h7.6L12 2z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="mr-1">
                                    <path d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.2-6.3-4.6-6.3 4.6L8 13.8l-6-4.4h7.6L12 2z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.2-6.3-4.6-6.3 4.6L8 13.8l-6-4.4h7.6L12 2z" />
                                </svg>
                            </div>

                            <!-- Yorum Metni -->
                            <p class="text-muted-foreground italic">"İade sürecinde hiç sorun yaşamadım. Müşteri hizmetleri çok yardımcı oldu. Bundan sonra alışverişlerimi buradan yapacağım."</p>

                            <!-- Müşteri Bilgisi -->
                            <div class="flex items-center space-x-4 pt-4 border-t">
                                <div class="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary">
                                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                        <circle cx="12" cy="7" r="4" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="font-semibold">Mehmet Kaya</h4>
                                    <p class="text-sm text-muted-foreground">İzmir</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Tüm Yorumlar Butonu -->
                <div class="flex justify-center mt-8">
                    <Button variant="outline" size="lg" class="group">
                        Tüm Yorumları Gör
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2 group-hover:translate-x-1 transition-transform">
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </Button>
                </div>
            </div>
        </section>

        <!-- Newsletter -->
        <section class="border-t sm:py-16 md:py-24 lg:py-32">
            <div class="container">
                <div class="relative overflow-hidden rounded-2xl bg-card px-6 py-16 border shadow-lg">
                    <!-- Gradient Arka Plan -->
                    <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10"></div>

                    <!-- Dekoratif Daireler -->
                    <div class="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-primary/5"></div>
                    <div class="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-primary/5"></div>
                    <div class="absolute left-1/2 top-0 h-16 w-16 -translate-x-1/2 rounded-full bg-primary/5"></div>

                    <!-- İçerik -->
                    <div class="relative">
                        <div class="flex flex-col items-center space-y-4 text-center">
                            <h2 class="text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-4xl">Fırsatları Kaçırmayın!</h2>
                            <p class="max-w-2xl text-muted-foreground md:text-lg">En yeni ürünler, özel kampanyalar ve indirimlerden ilk siz haberdar olun.</p>
                            <div class="flex w-full max-w-md flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                                <Input type="email" placeholder="E-posta adresiniz" />
                                <Button size="sm" >Abone Ol</Button>
                            </div>
                            <p class="text-sm text-muted-foreground">
                                Dilediğiniz zaman abonelikten çıkabilirsiniz.
                                <a href="#" class="text-primary hover:text-primary/80 underline">Gizlilik Politikası</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Markalar -->
        <section class="sm:py-16 md:py-24 lg:py-32">
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
import Button from "@/components/ui/Button.vue";
import Input from "@/components/ui/Input.vue";

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
