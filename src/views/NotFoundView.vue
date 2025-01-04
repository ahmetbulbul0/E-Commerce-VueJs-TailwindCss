<template>
  <div class="flex min-h-screen items-center justify-center">
    <div class="text-center">
      <div class="mb-4 text-6xl font-bold text-primary">404</div>
      <h1 class="mb-2 text-2xl font-bold">Sayfa Bulunamadı</h1>
      <p class="mb-6 text-muted-foreground">Aradığınız sayfa bulunamadı veya taşınmış olabilir.</p>
      <div class="space-x-2">
        <Button @click="$router.back()">Geri Dön</Button>
        <Button variant="outline" @click="$router.push('/')">Ana Sayfaya Git</Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from '@/components/ui/button/Button.vue'
</script>
