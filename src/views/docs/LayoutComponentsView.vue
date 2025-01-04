<template>
    <Container>
        <h1 class="text-3xl font-bold mb-8">Layout Componentleri</h1>

        <!-- Card -->
        <section class="mb-12">
            <h2 class="text-2xl font-semibold mb-4">Card</h2>
            <div class="space-y-4">
                <Card>
                    <template #header>
                        <h3 class="text-lg font-semibold">Card Başlığı</h3>
                        <p class="text-sm text-muted-foreground">Card açıklaması</p>
                    </template>
                    <p>Card içeriği buraya gelecek.</p>
                    <template #footer>
                        <button class="bg-primary text-primary-foreground px-4 py-2 rounded-md">
                            Buton
                        </button>
                    </template>
                </Card>

                <Card>
                    <p>Sadece içerik olan card örneği.</p>
                </Card>
            </div>
        </section>

        <!-- Container -->
        <section class="mb-12">
            <h2 class="text-2xl font-semibold mb-4">Container</h2>
            <div class="space-y-4">
                <div class="border border-dashed border-border rounded-lg p-4">
                    <Container size="sm" className="bg-muted p-4 rounded-md">
                        Small Container (max-w-screen-sm)
                    </Container>
                </div>
                <div class="border border-dashed border-border rounded-lg p-4">
                    <Container size="md" className="bg-muted p-4 rounded-md">
                        Medium Container (max-w-screen-md)
                    </Container>
                </div>
                <div class="border border-dashed border-border rounded-lg p-4">
                    <Container size="lg" className="bg-muted p-4 rounded-md">
                        Large Container (max-w-screen-lg)
                    </Container>
                </div>
            </div>
        </section>

        <!-- Separator -->
        <section class="mb-12">
            <h2 class="text-2xl font-semibold mb-4">Separator</h2>
            <div class="space-y-4">
                <div>
                    <p>Üst içerik</p>
                    <Separator className="my-4" />
                    <p>Alt içerik</p>
                </div>

                <div class="flex h-20">
                    <div>Sol içerik</div>
                    <Separator orientation="vertical" className="mx-4" />
                    <div>Sağ içerik</div>
                </div>
            </div>
        </section>

        <!-- Sheet -->
        <section class="mb-12">
            <h2 class="text-2xl font-semibold mb-4">Sheet</h2>
            <div class="space-y-4">
                <div class="flex flex-wrap gap-4">
                    <button
                        v-for="side in ['left', 'right', 'top', 'bottom']"
                        :key="side"
                        class="bg-primary text-primary-foreground px-4 py-2 rounded-md"
                        @click="openSheet(side as 'left' | 'right' | 'top' | 'bottom')"
                    >
                        {{ side }} Sheet
                    </button>
                </div>

                <Sheet v-model="sheetOpen" :side="sheetSide">
                    <template #header>
                        <h3 class="text-lg font-semibold">Sheet Başlığı</h3>
                        <p class="text-sm text-muted-foreground">Sheet açıklaması</p>
                    </template>

                    <div class="py-4">Sheet içeriği buraya gelecek.</div>

                    <template #footer>
                        <button
                            class="bg-destructive text-destructive-foreground px-4 py-2 rounded-md"
                            @click="sheetOpen = false"
                        >
                            Kapat
                        </button>
                    </template>
                </Sheet>
            </div>
        </section>

        <!-- ScrollArea -->
        <section class="mb-12">
            <h2 class="text-2xl font-semibold mb-4">ScrollArea</h2>
            <div class="space-y-4">
                <div class="border border-border rounded-lg">
                    <ScrollArea className="h-[200px] p-4">
                        <div class="space-y-4">
                            <p v-for="i in 20" :key="i">Scrollable içerik satırı {{ i }}</p>
                        </div>
                    </ScrollArea>
                </div>
            </div>
        </section>

        <!-- Dialog -->
        <section class="mb-12">
            <h2 class="text-2xl font-semibold mb-4">Dialog</h2>
            <div class="space-y-4">
                <button
                    class="bg-primary text-primary-foreground px-4 py-2 rounded-md"
                    @click="dialogOpen = true"
                >
                    Dialog'u Aç
                </button>

                <Dialog v-model="dialogOpen">
                    <template #header>
                        <h3 class="text-lg font-semibold">Dialog Başlığı</h3>
                        <p class="text-sm text-muted-foreground">
                            Dialog açıklaması buraya gelecek.
                        </p>
                    </template>

                    <div class="py-4">
                        <p>
                            Dialog içeriği buraya gelecek. İstediğiniz kadar içerik
                            ekleyebilirsiniz.
                        </p>
                        <p class="mt-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
                            amet labore.
                        </p>
                    </div>

                    <template #footer>
                        <button
                            class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                            @click="dialogOpen = false"
                        >
                            İptal
                        </button>
                        <button
                            class="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2"
                            @click="dialogOpen = false"
                        >
                            Devam Et
                        </button>
                    </template>
                </Dialog>
            </div>
        </section>
    </Container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Card from '@/components/ui/layout/Card.vue'
import Container from '@/components/ui/layout/Container.vue'
import Separator from '@/components/ui/layout/Separator.vue'
import Sheet from '@/components/ui/layout/Sheet.vue'
import ScrollArea from '@/components/ui/layout/ScrollArea.vue'
import Dialog from '@/components/ui/layout/Dialog.vue'

const sheetOpen = ref(false)
const sheetSide = ref<'left' | 'right' | 'top' | 'bottom'>('right')
const dialogOpen = ref(false)

const openSheet = (side: 'left' | 'right' | 'top' | 'bottom') => {
    sheetSide.value = side
    sheetOpen.value = true
}
</script>
