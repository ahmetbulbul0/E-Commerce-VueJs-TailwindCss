<template>
  <div>
    <!-- Tab List -->
    <div class="border-b border-zinc-800">
      <nav class="-mb-px flex space-x-8" aria-label="Tabs">
        <button
          v-for="tab in tabs"
          :key="tab.value"
          :class="[
            'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors',
            modelValue === tab.value
              ? 'border-white text-white'
              : 'border-transparent text-zinc-400 hover:text-zinc-200 hover:border-zinc-400'
          ]"
          @click="$emit('update:modelValue', tab.value)"
        >
          {{ tab.label }}
        </button>
      </nav>
    </div>

    <!-- Tab Panels -->
    <div class="mt-4">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
export interface Tab {
  label: string
  value: string
}

defineProps<{
  modelValue: string
  tabs: Tab[]
}>()

defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script> 